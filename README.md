# Royal Foundry — website

Live at **https://royalfoundry.in**

Static bilingual site (English + Malayalam) for Royal Foundry, Chingavanam,
Kottayam. Built with [Astro](https://astro.build), hosted on Cloudflare.

---

## Run it locally

```bash
npm install
npm run dev              # http://localhost:4321
npm run dev -- --host    # also reachable from your phone on the same wifi
npm run build            # writes dist/
```

The project sits on the Windows drive under WSL, where file-change events do
not propagate. `astro.config.mjs` therefore turns on watcher polling — without
it `npm run dev` never hot-reloads and you would have to restart after every
edit.

## Pages

```
/            /ml/            Home
/products    /ml/products    Products  (six product lines + 57-photo gallery)
/about       /ml/about       About     (story, awards, founder and proprietor)
/contact     /ml/contact     Contact   (phones, WhatsApp, map, signboard)
/404                         Not found (bilingual)
```

English is the default; Malayalam lives under `/ml/`. The header carries a
toggle, and `hreflang` tags tell Google the two are the same page. A sitemap is
generated at `/sitemap-index.xml` and referenced from `robots.txt`.

## Where things live

| I want to change… | Edit this |
|---|---|
| Phones, email, address, GSTIN, Udyam, hours, map | `src/site.config.ts` |
| Any text on the site, in either language | `src/i18n/ui.ts` |
| Which photos a product card cycles through | `ROTATION` in `src/components/ProductGrid.astro` |
| Gallery captions / product names | `files/*/GROUPS.md`, then `npm run sync:captions` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Page structure | `src/sections/*.astro`, `src/components/*.astro` |
| Deploy configuration | `wrangler.jsonc` |

`src/site.config.ts` and `src/i18n/ui.ts` cover almost everything. You should
rarely need to open a `.astro` file.

**Adding a product line:** add an entry to `products.items` in **both** the `en`
and `ml` blocks of `src/i18n/ui.ts` with the same `slug`, add an icon path for
that slug in `ProductGrid.astro`, and optionally list photos for it in
`ROTATION`.

---

## Photos

### Where each came from

| Source | What it gave us |
|---|---|
| `files/…Tax Invoice….pdf` | Mobiles, email, GSTIN, aluminium T-clamps for A/B switches (HSN 7601) |
| `files/…gst certificate.pdf` | Full street address, proprietorship, registered 01/07/2017 |
| `files/…Udyam….pdf` | Established 1991, `UDYAM-KL-07-0001298`, non-ferrous casting (NIC 24320) |
| `files/…Word Template.docx` | The company's own description of itself, landline `0481-2432005` |
| `files/RoyalFoundry_Video.mp4` | Home banner, signboard, award plaque/certificate/trophy, founder, CNC stills |
| `files/DTR_Box_Video.mp4` | The eight DTR box photos |
| `files/clamps/` | 53 photos → 34 distinct electrical products |
| `files/mat-moulds/` | 17 photos → 15 distinct mat moulds |
| `files/pics/` | Founder portrait, MSME and DIC award photos, Meenakumari at the CNC |

The clamp and mould photos were grouped by object — many were the same item shot
from several angles — and the sharpest frame of each group kept. Several award
photos originally taken from the video were later replaced with the supplied
originals, which are far clearer.

### Gallery structure

57 photos in three groups, defined by folder:

```
src/assets/gallery/electrical/   34   clamps, connectors, A/B switch parts, earthing
src/assets/gallery/dtr/           8   DTR boxes
src/assets/gallery/moulds/       15   rubber and coir mat moulds
```

Clicking any of them opens a lightbox (native `<dialog>`, no library) with
arrow-key navigation across the whole gallery.

### Adding or renaming a gallery product

The worksheets are the source of truth:

- `files/clamps/GROUPS.md` — electrical hardware and DTR boxes
- `files/mat-moulds/GROUPS.md` — mat moulds

**To rename**, edit the *Product name* column. **To add**, drop the photo into
`files/clamps/best/` and add a row (any placeholder key — it gets rewritten).
**To remove**, delete the row, the image in `files/clamps/best/`, the image in
`src/assets/gallery/…`, and the two caption lines in `src/i18n/ui.ts`.

Then:

```bash
npm run rekey                      # dry run — shows what would change
npm run rekey -- --write           # renumbers keys and renames image files
npm run sync:captions -- --write   # copies your names into the English captions
npm run build
```

`rekey` keeps keys, filenames and both worksheet columns in step with the
product names, renumbering in row order — so moving a row reorders the gallery.
It is idempotent and aborts if a new key would collide with an existing one.
`sync:captions` then lists the Malayalam captions that need re-translating.

**Do not rename image files by hand** — `rekey` does it, and doing both
desynchronises the captions.

Product-card rotations in `ProductGrid.astro` reference photos **by name without
the leading number**, so renumbering cannot silently break them.

For mould patterns: if you have a name you use with customers, use that rather
than a description of the geometry. A real pattern name is far better for search
than "diamond lattice mould".

---

## Deployment

Already set up. Push to `main` and Cloudflare rebuilds and publishes in about
four minutes.

| | |
|---|---|
| Registrar | Hostinger — renews 27 Aug 2029, auto-renew on, domain lock on |
| DNS | Cloudflare (nameservers `paul` / `sureena`) |
| Hosting | Cloudflare Workers static assets, project `royalfoundry` |
| Repo | `github.com/skokulna/royalfoundry` (private) |
| Build | `npm run build` → `dist/`, deployed by `npx wrangler deploy` |
| TLS | Automatic. HTTP 301s to HTTPS; apex and `www` both work |
| Cost | ~Rs800/year — the domain. Hosting is free at this size. |

`wrangler.jsonc` is what makes `npx wrangler deploy` work: it points Cloudflare
at `dist/` and sets `404.html` as the not-found page. Without it the deploy
fails, because the dashboard's default deploy command expects that config.

`public/_headers` sets caching and basic security headers; it is honoured by
Cloudflare's static-asset serving and verified live (`x-content-type-options`,
`x-frame-options`).

**Cloudflare's "managed robots.txt" is deliberately off.** When on, it injects
`Disallow` rules for GPTBot, ClaudeBot, Google-Extended and others, and risks
overwriting the `Sitemap:` line. For a manufacturer that wants to be found —
including by AI assistants — blocking them is self-defeating.

---

## Page weights

| | HTML + CSS | Images |
|---|---|---|
| Home | ~55 KB | ~2.5 MB across 33, all lazy-loaded |
| Products | ~126 KB | ~6.5 MB across 106, all lazy-loaded |
| About | ~41 KB | ~0.5 MB across 9 |

Images are generated as responsive WebP at build time and only fetched as they
scroll into view, so a first visit costs far less than those totals. Product
cards cycle through 10 photos on `/products` but only 4 on the home page —
`frames={4}` in `HomeBody.astro` — to keep the landing page light on a mobile
connection.

---

## Search and discovery

| | |
|---|---|
| Google Search Console | Verified (domain property). Sitemap submitted, indexing requested for `/`, `/products/`, `/contact/` |
| Google Business Profile | Created; listing live on Maps. **Suspended Aug 2026 — appeal submitted** with GST and Udyam certificates, the signboard photo and a trading invoice |
| Structured data | LocalBusiness with coordinates, 24/7 hours, the 2013–14 award, and `sameAs` linking the site to the Maps listing |
| Share card | `public/share-1200x630.png` — a proper banner for WhatsApp and social links |

The suspension affects only the Maps listing and knowledge panel. The website
itself is unaffected.

The Business Profile address must match the GST certificate exactly, including
**Nattakom** — an address that omits it does not match government records, and
that mismatch is the usual cause of suspension in India. The name field must
stay "Royal Foundry" with no added keywords.

`tmp/gbp-upload/` holds a prepared photo pack (logo, cover, signboard, awards,
products) sized to Google's requirements, with instructions.

## Still open

- [ ] **Malayalam proofread by a native speaker.** The Malayalam throughout was
      written from the English and has not been checked by anyone who speaks it.
      This is the largest remaining risk on the site.
- [ ] **Business Profile reinstatement** — awaiting Google's decision. Once
      live, upload the photos over several days and add the profile URL to
      `sameAs` in `src/site.config.ts`.
- [ ] **Reviews** — the strongest local-ranking signal there is. A few lines
      from regular customers is worth more than any further code change.
- [ ] **Directory listings** — IndiaMART, TradeIndia, JustDial, Kerala MSME
      directories. Name, address and phone must be identical everywhere.
      Add each URL to `sameAs`.
- [ ] **Split the six product lines onto their own pages.** They currently share
      `/products` and compete for the same searches. Best done once Search
      Console Performance shows which terms people actually use.
- [ ] **Domain email** — deferred. Zoho withdrew its free plan; Mail Lite is
      ~Rs835/yr for one mailbox with `cpmeena@` as an alias. See the note in
      `src/site.config.ts`.
- [ ] Photos of a finished DTR box — the eight in use are video stills (848x478).
- [ ] The exact name of the District Industries Centre award.

Confirmed and settled: PIN `686531`, the full street address, established 1991,
24-hour working all week, both mobiles plus the landline, the Google Maps
location, and that the hardware goes to KSEB electrical, transmission and
generation circles and tower lines while the mat moulds go to manufacturers
across India.

## Notes

- **No backend, no database, no forms.** Enquiries go through phone and
  WhatsApp. Nothing to patch, nothing to breach, nothing to pay for.
- **`/files` is gitignored and never published.** It holds the source documents
  and 342 MB of video, and contains the proprietor's signature image, bank
  account details, customer names and GSTINs. Everything the site needs was
  extracted into `src/assets/`. Keep it that way — and note GitHub would reject
  `RoyalFoundry_Video.mp4` anyway, at 336 MB against a 100 MB file limit.
- **The promo videos are not embedded.** If you want the main one on the site,
  put it on YouTube and embed the player; serving 336 MB directly would be slow
  and expensive.
- **Mat moulds, not mats.** The site says plainly, in both languages, that Royal
  Foundry makes the mould and not the mat. The customer catalogue images in
  `files/mat-moulds/` (`mat2.jpg`, `mat3.jpg`, `mats.jpg`) are another company's
  branded material and are deliberately not published.
- **Motion respects `prefers-reduced-motion`.** Product cards show a single
  still image for anyone whose device asks for reduced motion.
