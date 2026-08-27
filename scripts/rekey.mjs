/**
 * Renumbers and renames gallery items so that keys and filenames always follow
 * the Product name column in the GROUPS.md worksheets.
 *
 *   npm run rekey            dry run — prints what would change
 *   npm run rekey -- --write applies it
 *
 * Touches: the image files, the caption keys in src/i18n/ui.ts (both languages),
 * and both columns of each worksheet. Run it after adding, removing or renaming
 * a product, then `npm run sync:captions -- --write` and `npm run build`.
 */
import { readFileSync, writeFileSync, existsSync, renameSync } from 'node:fs';

const UI = 'src/i18n/ui.ts';
const write = process.argv.includes('--write');

const SETS = [
  { sheet: 'files/clamps/GROUPS.md',    dirs: ['files/clamps/best', 'src/assets/gallery/electrical'] },
  { sheet: 'files/mat-moulds/GROUPS.md', dirs: ['src/assets/gallery/moulds'] },
];

const slug = (name) =>
  name.toLowerCase()
    .replace(/\ba\s*\/\s*b\b/g, 'ab')          // "A/B switch" -> "ab-switch"
    .replace(/[×]/g, 'x').replace(/[–—]/g, '-')
    .replace(/(\d)\s*x\s*(\d)/g, '$1x$2')      // "70 x 40" -> "70x40"
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-').replace(/^-|-$/g, '');

const ROW = /^\|\s*(\d+)\s*\|\s*`([^`]+)`\s*\|\s*(.+?)\s*\|/;

const all = new Map();
for (const cfg of SETS) {
  if (!existsSync(cfg.sheet)) { console.warn(`  skipped (not found): ${cfg.sheet}`); continue; }
  const lines = readFileSync(cfg.sheet, 'utf8').split('\n');
  const used = new Set();
  cfg.map = new Map();
  let i = 0;
  cfg.lines = lines.map((line) => {
    const m = line.match(ROW);
    if (!m || m[3].includes('**edit this**')) return line;
    const [, oldNum, oldKey, name] = m;
    i += 1;
    const base = slug(name);
    let key = `${String(i).padStart(2, '0')}-${base}`, n = 2;
    while (used.has(key)) key = `${String(i).padStart(2, '0')}-${base}-${n++}`;
    used.add(key);
    cfg.map.set(oldKey, key);
    all.set(oldKey, key);
    if (oldKey !== key || oldNum !== key.slice(0, 2)) {
      console.log(`  ${oldNum} ${oldKey}\n   -> ${key.slice(0, 2)} ${key}`);
    }
    // rewrite both the number column and the key, keep the rest of the row
    return line.replace(ROW, (full, _n, _k, nm) =>
      full.replace(/^\|\s*\d+\s*\|\s*`[^`]+`\s*\|/, `| ${key.slice(0, 2)} | \`${key}\` |`));
  });
}

// guard: a new key must never collide with a still-unprocessed old key
const clash = [...all.values()].filter((v) => all.has(v) && all.get(v) !== v);
if (clash.length) { console.error('\nAborting — new keys collide with old keys:', clash); process.exit(1); }

const changed = [...all.entries()].filter(([o, n]) => o !== n).length;
if (!write) {
  console.log(changed ? `\n${changed} key(s) would change. Re-run with --write.` : '\nKeys already match the product names.');
  process.exit(0);
}

for (const cfg of SETS) {
  if (!cfg.map) continue;
  for (const dir of cfg.dirs)
    for (const [o, n] of cfg.map)
      if (o !== n && existsSync(`${dir}/${o}.jpg`)) renameSync(`${dir}/${o}.jpg`, `${dir}/${n}.jpg`);
  writeFileSync(cfg.sheet, cfg.lines.join('\n'));
}

let ui = readFileSync(UI, 'utf8');
for (const [o, n] of all) {
  if (o === n) continue;
  const re = new RegExp(`(^\\s*)'${o.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':`, 'gm');
  const hits = (ui.match(re) || []).length;
  if (hits !== 2) console.warn(`  !! ${o}: ${hits} caption lines (expected 2)`);
  ui = ui.replace(re, `$1'${n}':`);
}
writeFileSync(UI, ui);
console.log(`\nApplied. Now run: npm run sync:captions -- --write && npm run build`);
