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
npm run build
```

The production build is written to `out/`. The GitHub Pages workflow runs both checks before uploading that directory.

## GitHub Pages

The deployment workflow sets:

- `NEXT_PUBLIC_BASE_PATH=/videos`
- `NEXT_PUBLIC_SITE_URL=https://donytxz.github.io/videos`

`next.config.js` keeps static export, unoptimized images, the repository base path, and trailing slashes enabled for Pages compatibility.
