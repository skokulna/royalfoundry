# Royal Foundry — website

Static site for Royal Foundry, Chingavanam, Kottayam.
Built with [Astro](https://astro.build). English + Malayalam.

## Run it locally

```bash
npm install
npm run dev              # http://localhost:4321
npm run dev -- --host    # also opens it to your phone on the same wifi
npm run build            # output goes to dist/
```

## Where things live

| I want to change… | Edit this |
|---|---|
| Phone, email, address, GSTIN, hours, map | `src/site.config.ts` |
| Any text on the site, in either language | `src/i18n/ui.ts` |
| Product photos | drop into `src/assets/products/` — see the README there |
| Gallery captions / product names | `files/*/GROUPS.md`, then `npm run sync:captions` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Page structure | `src/sections/*.astro` |

`src/site.config.ts` and `src/i18n/ui.ts` cover almost everything. You should
rarely need to touch the `.astro` files.

Adding a product: add an entry to the `products.items` array in **both** the
`en` and `ml` blocks of `src/i18n/ui.ts`, keeping the same `slug` in each.

## Pages

```
/            /ml/            Home
/products    /ml/products    Products
/about       /ml/about       About
/contact     /ml/contact     Contact
```

English is the default; Malayalam sits under `/ml/`. The header has a toggle,
and `hreflang` tags tell Google the two versions are the same page.

## Where the content came from

Everything on the site is sourced from the documents in `/files`:

| Source | What it gave us |
|---|---|
| Tax invoice | Mobiles, email, GSTIN, aluminium T-clamps for A/B switches (HSN 7601) |
| GST certificate | Full street address, proprietorship, registered since 01/07/2017 |
| Udyam certificate | Established 1991, `UDYAM-KL-07-0001298`, non-ferrous casting (NIC 24320) |
| Word letterhead | The company's own description of itself, landline `0481-2432005` |
| Promo video | Home page banner, moulds photo, About page photo |
| `files/clamps/` | 53 photos → 23 distinct products (see `files/clamps/GROUPS.md`) |
| `files/mat-moulds/` | 17 photos → 15 distinct mat moulds |

### Photos

The 53 clamp photos were grouped into **23 distinct products** — many were the
same item shot from different angles. The sharpest frame of each group was
picked and copied to `files/clamps/best/`, and those 23 now form the gallery on
the Products page. `files/clamps/GROUPS.md` shows which originals went into each
group, so you can check the grouping and swap a pick if you prefer another angle.

### Adding or renaming a gallery product

The worksheets are the source of truth:

- `files/clamps/GROUPS.md` — electrical hardware
- `files/mat-moulds/GROUPS.md` — mat moulds

**To rename**, edit the Product name column. **To add**, drop the photo into
`files/clamps/best/` and add a row for it (any placeholder key will do — it gets
rewritten). **To remove**, delete the row, the image in `files/clamps/best/`,
the image in `src/assets/gallery/…`, and the two caption lines in
`src/i18n/ui.ts`.

Then:

```bash
npm run rekey                      # shows what would change
npm run rekey -- --write           # renumbers keys + renames image files
npm run sync:captions -- --write   # copies your names into the English captions
npm run build
```

`rekey` keeps keys, filenames and both worksheet columns in step with the
product names, and renumbers everything in row order — so moving a row up or
down in the worksheet reorders the gallery. It is safe to re-run; a second run
is a no-op. `sync:captions` then lists any Malayalam captions that need
re-translating to match. Ask Claude for that pass, or edit the `ml` block.

Do not rename image files by hand — `rekey` does it, and doing both will
desynchronise the captions.

For mould patterns especially: if you have a name you actually use with
customers, use that rather than a description of the geometry. A real pattern
name is much better for search than "diamond lattice mould".

## Live

The site is deployed at **https://royalfoundry.in**

| | |
|---|---|
| Registrar | Hostinger — renews 27 Aug 2029, auto-renew on |
| DNS + hosting | Cloudflare (nameservers `paul` / `sureena`) |
| Repo | `github.com/skokulna/royalfoundry` (private) |
| Deploys | automatic on push to `main`, ~4 minutes |
| Cost | ~Rs800/year, the domain only |

Change anything in `src/`, commit, push — Cloudflare rebuilds and publishes.

## Still open

- [ ] **Malayalam proofread by a native speaker.** The Malayalam throughout was
      written from the English and has not been checked by anyone who speaks it.
      This is the largest remaining risk on the site.
- [ ] **Domain email** — deferred. Zoho's free plan no longer exists; Mail Lite
      is ~Rs835/yr for one mailbox with `cpmeena@` as an alias. See the note in
      `src/site.config.ts`. The site currently shows the Gmail, which works.
- [ ] **Google Search Console** — verify the domain and submit
      `https://royalfoundry.in/sitemap-index.xml` to speed up indexing.
- [ ] Photos of a finished DTR box — the eight on the site are video stills
      (848x478) and look soft when enlarged in the lightbox.
- [ ] The exact name of the District Industries Centre award; its caption on the
      About page is deliberately vague because the banner is partly obscured.
- [ ] Check the 49 gallery product labels in `files/*/GROUPS.md`.

Confirmed and done: PIN `686531`, the full street address, established 1991,
24-hour working, both mobiles plus the landline, the Google Maps location,
and that the hardware goes to KSEB electrical, transmission and generation
circles and tower lines.

## Deploying to Cloudflare Pages

1. Push this folder to a new GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Pick the repo. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. You get a `*.pages.dev` URL in about two minutes — that works as a
   preview before the domain is ready.
5. Custom domains → add your domain. If the domain is registered at Cloudflare,
   DNS is set up for you; otherwise point the nameservers at Cloudflare first.

Every `git push` to the main branch redeploys. HTTPS is automatic.

## Notes

- No backend, no database, no forms — enquiries go through phone and WhatsApp.
  Nothing to maintain or patch, and hosting is free at this size.
- Whole site is ~250 KB, so it loads fast on a patchy mobile connection.
- `public/_headers` sets caching and basic security headers on Cloudflare Pages.
- `/files` holds the source documents. They are **not** published — the folder
  sits outside `public/`, so nothing in it reaches the built site. Keep it that
  way: it contains bank details, the proprietor's signature image, Aadhaar and
  PAN numbers, and customer information. The build output is checked for these;
  none of them appear on the site.
- The 351 MB promo video is not embedded. If you want it on the site, upload it
  to YouTube and embed the player — serving a file that size directly would be
  slow and expensive.
