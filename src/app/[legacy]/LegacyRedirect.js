'use client';

import { useEffect } from 'react';

export default function LegacyRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <p style={{ color: '#eef0ff', padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      This page has moved. <a href={to} style={{ color: '#8fd0ff' }}>Continue to ZZMTech</a>
    </p>
  );
}
