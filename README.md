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
