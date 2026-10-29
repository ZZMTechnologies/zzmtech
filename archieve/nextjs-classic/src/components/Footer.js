import { SITE_CONFIG } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <small>
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </small>
        <small>{SITE_CONFIG.tagline}</small>
      </div>
    </footer>
  );
}
