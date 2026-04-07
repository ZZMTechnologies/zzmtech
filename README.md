# ZZMTech Next.js Scaffold

This directory contains a clean Next.js starter shell prepared for static hosting on AWS S3.

## Included
- App Router structure (`app/`)
- Shared layout (`Header`, `Footer`)
- Global CSS and theme tokens
- Static export configuration (`output: 'export'`)

## Run locally
```bash
npm install
npm run dev
```

## Static build for S3
```bash
npm run build
```

Then deploy the generated `out/` directory to S3 static website hosting.

## Notes
No Laravel/Livewire pages have been converted yet.
