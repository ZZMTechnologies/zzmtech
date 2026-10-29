# ZZMTech Website

A single-page, interactive 3D company website built with Next.js (App Router) and three.js, exported as static files.

## Structure
- `src/app/page.js` – the 3D home page (`/`). Sections open as panels and can be deep-linked: `/#about`, `/#services`, `/#process`, `/#team`, `/#clients`, `/#contact`.
- `src/components/universe/` – the three.js scene (`createUniverse.js`), page UI (`Universe.js`, `panels.js`, `icons.js`) and styles.
- `src/lib/universe-content.js` – all page text (services, process, team, clients, contact). Edit content here.
- `src/app/[legacy]/` – forwards old URLs (e.g. `/web/`, `/contact/`) to the matching panel on `/`.
- `archieve/nextjs-classic/` – the previous multi-page Next.js site, kept for reference (not built).
- `archieve/` (root) – the original Laravel site, kept for reference.

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

## Docker (Immutable Image)
This project includes:
- `Dockerfile` (multi-stage build: Next.js build -> Nginx static serve)
- `docker-compose.yml` (runs the built image on host port `81`)

Build and run:
```bash
docker compose build
docker compose up -d
```

Verify locally:
```bash
curl http://localhost:81
```

After this setup, local file changes do not affect the running container until you rebuild:
```bash
docker compose build
docker compose up -d
```

## Cloudflare Tunnel
Use Cloudflare Tunnel as a separate service (shared across projects).

### Managed Tunnel (recommended)
1. In Cloudflare Zero Trust, create/select a tunnel and add a Public Hostname.
2. Set Service URL to:
   - `http://host.docker.internal:81` (when `cloudflared` runs in Docker)
   - `http://localhost:81` (when `cloudflared` runs directly on host)
3. Run cloudflared container with token:

```bash
docker run -d \
  --name cloudflared \
  --restart unless-stopped \
  cloudflare/cloudflared:latest \
  tunnel --no-autoupdate run --token YOUR_TUNNEL_TOKEN
```

Check logs:
```bash
docker logs -f cloudflared
```

### Quick Tunnel (temporary testing)
If you do not use a managed tunnel/domain:

```bash
cloudflared tunnel --url http://host.docker.internal:81
```

Quick Tunnel URLs (`*.trycloudflare.com`) are temporary and can change after restart.
