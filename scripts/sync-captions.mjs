/**
 * Copies the product names from the GROUPS.md worksheets into the English
 * gallery captions in src/i18n/ui.ts, and reports which Malayalam captions
 * are now out of step and need re-translating.
 *
 *   npm run sync:captions          check only, changes nothing
 *   npm run sync:captions -- --write   apply the changes
 */
import { readFileSync, writeFileSync } from 'node:fs';

const UI = 'src/i18n/ui.ts';
const SHEETS = ['files/clamps/GROUPS.md', 'files/mat-moulds/GROUPS.md'];
const write = process.argv.includes('--write');

// key -> name, read from the worksheet tables
const wanted = new Map();
for (const sheet of SHEETS) {
  let md;
  try { md = readFileSync(sheet, 'utf8'); }
  catch { console.warn(`  skipped (not found): ${sheet}`); continue; }
  for (const line of md.split('\n')) {
    const m = line.match(/^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*(.+?)\s*\|/);
    if (!m) continue;
    const [, key, name] = m;
    if (name.includes('**edit this**')) continue;   // header row
    wanted.set(key, name);
  }
}
if (wanted.size === 0) {
  console.error('No rows found in the worksheets. Nothing to do.');
  process.exit(1);
}

let ui = readFileSync(UI, 'utf8');

// isolate the en/ml blocks so we only touch the right one
const uiStart = ui.indexOf('export const ui = {');
const mlStart = uiStart === -1 ? -1 : ui.indexOf('\n  ml: {', uiStart);
if (mlStart === -1) { console.error(`Could not find the ui/ml blocks in ${UI}`); process.exit(1); }

const captionLine = (key) =>
  new RegExp(`(^\\s*'${key.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}':\\s*)('(?:[^'\\\\]|\\\\.)*')(,?\\s*$)`, 'm');

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

let changed = 0, missing = [], stale = [];
for (const [key, name] of wanted) {
  const en = ui.slice(0, mlStart);
  const re = captionLine(key);
  const m = en.match(re);
  if (!m) { missing.push(key); continue; }

  const current = m[2].slice(1, -1).replace(/\\'/g, "'");
  if (current !== name) {
    ui = en.replace(re, `$1'${esc(name)}'$3`) + ui.slice(mlStart);
    changed++;
    stale.push(key);
    console.log(`  ${key}\n    was: ${current}\n    now: ${name}`);
  }
}

if (missing.length) {
  console.warn(`\n${missing.length} key(s) in the worksheets have no caption in ${UI}:`);
  for (const k of missing) console.warn(`  ${k}`);
  console.warn('Add them to gallery.captions in both languages, or fix the Key column.');
}

if (changed === 0) {
  console.log('\nEnglish captions already match the worksheets. Nothing to change.');
} else if (write) {
  writeFileSync(UI, ui);
  console.log(`\nUpdated ${changed} English caption(s) in ${UI}.`);
  console.log('These Malayalam captions now need re-translating to match:');
  for (const k of stale) console.log(`  ${k}`);
  console.log('\nAsk Claude to update the Malayalam, then run: npm run build');
} else {
  console.log(`\n${changed} caption(s) would change. Re-run with --write to apply:`);
  console.log('  npm run sync:captions -- --write');
}
