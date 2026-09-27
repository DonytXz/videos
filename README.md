# Videos App

A statically exported Next.js application deployed to GitHub Pages.

## Getting started

Use Node.js 24, install the locked dependencies, and start the development server:

```bash
nvm use
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm test
npm run build
```

The production build is written to `out/`. The GitHub Pages workflow runs both checks before uploading that directory.

## GitHub Pages

The deployment workflow sets:

- `NEXT_PUBLIC_BASE_PATH=/videos`
- `NEXT_PUBLIC_SITE_URL=https://donytxz.github.io/videos`

`next.config.js` keeps static export, unoptimized images, the repository base path, and trailing slashes enabled for Pages compatibility.

## Property-tour demo

The public funnel starts with the result: landing page → `/video` → `/wizard/csv` → `/wizard/columns`.
The preview contains Ana (Roma Norte), Diego (Coyoacán), and Sofía (Del Valle). Switch buyers, play or seek the 24-second illustrated tour, and edit a name or property. Changes carry into the CSV and campaign summary and survive reloads in the same tab when session storage is available. Old wildlife demo storage is ignored.

The preview is an explicitly labeled, silent illustrated simulation. There is no video rendering/export, AI narration, actual property footage, message delivery, or booking integration. The visit button explains the intended handoff without making a reservation. No external player or image service is required.

`src/lib/property-demo.ts` defines the shared buyers, properties, CSV schema, script, and validation. `public/examples/deepia-propiedades-demo.csv` is the downloadable template; the old CSV URL remains available with the new schema.

CSV files are processed locally and saved only in the tab's session storage, with a 1 MB / 100-row limit. Required columns are `nombre,correo,propiedad,zona,recamaras,interes`; column order may vary. The parser supports UTF-8 BOM, CRLF, quoted commas, escaped quotes, and multiline values. Invalid files display a specific error and preserve the previous campaign. Imported properties use illustrative scenery, not photographs of the property.

Manual acceptance checks:

- Open the main CTA, switch through the three buyers, play/pause/seek, and try the visit CTA in the closing scene.
- Edit a name and property; verify the script, data table, campaign summary, and reload retain the changes.
- Download and upload the template, then upload a CSV with your own buyer and inspect that buyer's preview.
- Try missing columns, an invalid email, malformed quoting, and an oversized file; the previous campaign must remain intact.
- Check keyboard focus, mobile layouts, and direct links to all three steps with `NEXT_PUBLIC_BASE_PATH=/videos`.
