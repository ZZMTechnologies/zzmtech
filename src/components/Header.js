import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link href="/" className="logo">
          {SITE_CONFIG.name}
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about/">About</Link>
          <Link href="/services/">Services</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
