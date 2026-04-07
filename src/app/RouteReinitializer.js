'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteReinitializer() {
  const pathname = usePathname();

  useEffect(() => {
    let retryTimer;
    let tries = 0;

    const runReinit = () => {
      if (typeof window === 'undefined') return;

      if (typeof window.axilReinit === 'function' && typeof window.jQuery !== 'undefined') {
        window.axilReinit();
        window.jQuery(window).trigger('scroll');
        return;
      }

      if (tries < 20) {
        tries += 1;
        retryTimer = setTimeout(runReinit, 100);
      }
    };

    retryTimer = setTimeout(runReinit, 50);
    return () => clearTimeout(retryTimer);
  }, [pathname]);

  return null;
}
