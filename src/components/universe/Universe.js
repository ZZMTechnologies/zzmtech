'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { HERO, SECTIONS, SERVICES, CLIENTS } from '@/lib/universe-content';
import { createUniverse } from './createUniverse';
import { SectionPanel } from './panels';
import styles from './universe.module.css';

const SECTION_IDS = SECTIONS.map((s) => s.id);

function readHash() {
  const id = window.location.hash.replace('#', '');
  return SECTION_IDS.includes(id) ? id : null;
}

export default function Universe() {
  const canvasRef = useRef(null);
  const apiRef = useRef(null);
  const panelRef = useRef(null);
  const panelBodyRef = useRef(null);
  const tipRef = useRef(null);
  const labelRefs = useRef(new Map());
  const stateRef = useRef({ active: null, activeService: null });

  const [active, setActive] = useState(null);
  const [lastActive, setLastActive] = useState(SECTION_IDS[0]);
  const [activeService, setActiveService] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [hoverService, setHoverService] = useState(-1);
  const [ready, setReady] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const open = useCallback((id) => {
    setActive(id);
    if (id) setLastActive(id);
    if (id !== 'services') setActiveService(null);
    setMenuOpen(false);
  }, []);

  const step = useCallback(
    (dir) => {
      const from = SECTION_IDS.indexOf(active ?? lastActive);
      open(SECTION_IDS[(from + dir + SECTION_IDS.length) % SECTION_IDS.length]);
    },
    [active, lastActive, open]
  );

  // Mount the 3D scene once.
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let api;
    try {
      api = createUniverse(canvasRef.current, {
        sections: SECTIONS,
        serviceCount: SERVICES.length,
        clientLogos: CLIENTS.logos,
        reducedMotion,
        getLabel: (id) => labelRefs.current.get(id),
        getServiceTip: () => tipRef.current,
        onHover: setHovered,
        onSelect: open,
        onHoverService: setHoverService,
        onSelectService: (index) => {
          open('services');
          setActiveService(index);
        },
        onReady: () => setReady(true)
      });
    } catch (err) {
      console.warn('[ZZMTech 3D] WebGL unavailable, using flat layout.', err);
      setWebgl(false);
      setReady(true);
      return undefined;
    }
    apiRef.current = api;
    // Re-sync if the scene is recreated while a panel is already open (e.g. hot reload).
    api.focus(stateRef.current.active);
    api.setActiveService(stateRef.current.activeService);
    return () => {
      api.dispose();
      apiRef.current = null;
    };
  }, [open]);

  // Deep links: /3d/#contact opens the contact panel.
  useEffect(() => {
    const sync = () => open(readHash());
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [open]);

  useEffect(() => {
    // Only touch the URL on real changes, so the initial null doesn't wipe a deep-link hash.
    if (stateRef.current.active === active) return;
    stateRef.current.active = active;
    apiRef.current?.focus(active);
    const url = active ? `#${active}` : window.location.pathname + window.location.search;
    if ((active ? `#${active}` : '') !== window.location.hash) window.history.replaceState(null, '', url);
    if (active) panelRef.current?.focus({ preventScroll: true });
  }, [active]);

  useEffect(() => {
    if (panelBodyRef.current) panelBodyRef.current.scrollTop = 0;
  }, [lastActive]);

  useEffect(() => {
    stateRef.current.activeService = activeService;
    apiRef.current?.setActiveService(activeService);
  }, [activeService]);

  useEffect(() => {
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName ?? '');
      if (e.key === 'Escape') {
        if (menuOpen) setMenuOpen(false);
        else open(null);
      } else if (active && !typing && e.key === 'ArrowRight') step(1);
      else if (active && !typing && e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, menuOpen, open, step]);

  const hoverFromUi = (id) => apiRef.current?.setHover(id);
  const panelSection = SECTIONS.find((s) => s.id === (active ?? lastActive));
  const [heroLead, ...heroRest] = HERO.title.split('. ');

  return (
    <div className={`${styles.root} ${active ? styles.hasPanel : ''} ${webgl ? '' : styles.flat}`}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={`${styles.loader} ${ready ? styles.loaderDone : ''}`} aria-hidden={ready}>
        <img src="/assets/logo/zzmtech_logo.png" alt="" className={styles.loaderMark} />
        <span>Entering the ZZMTech universe…</span>
      </div>

      <header className={styles.topbar}>
        <button type="button" className={styles.brand} onClick={() => open(null)} aria-label="ZZMTech home view">
          <img src="/assets/logo/zzmtech_logo.png" alt="ZZMTech" />
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Sections">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              style={{ '--c': s.color }}
              className={`${styles.navItem} ${active === s.id ? styles.navActive : ''}`}
              aria-current={active === s.id ? 'true' : undefined}
              onClick={() => open(s.id)}
              onMouseEnter={() => hoverFromUi(s.id)}
              onMouseLeave={() => hoverFromUi(null)}
            >
              <span className={styles.navIndex}>{String(i + 1).padStart(2, '0')}</span>
              {s.label}
            </button>
          ))}
        </nav>
        <div className={styles.topActions}>
          <button type="button" className={styles.cta} onClick={() => open('contact')}>
            Let&apos;s talk
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-label="Toggle section menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={styles.labels} aria-label="Explore sections">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            ref={(el) => (el ? labelRefs.current.set(s.id, el) : labelRefs.current.delete(s.id))}
            className={`${styles.label} ${hovered === s.id || active === s.id ? styles.labelHot : ''}`}
            aria-current={active === s.id ? 'true' : undefined}
            style={{ '--c': s.color }}
            onClick={() => open(s.id)}
            onMouseEnter={() => hoverFromUi(s.id)}
            onMouseLeave={() => hoverFromUi(null)}
            onFocus={() => hoverFromUi(s.id)}
            onBlur={() => hoverFromUi(null)}
          >
            <span className={styles.labelIndex}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.labelText}>
              {s.label}
              <small>{s.kicker}</small>
            </span>
          </button>
        ))}
      </div>

      <div ref={tipRef} className={`${styles.tip} ${hoverService >= 0 ? styles.tipOn : ''}`} aria-hidden="true">
        {SERVICES[hoverService]?.title}
      </div>

      <section className={styles.hero} aria-hidden={Boolean(active)} inert={active ? '' : undefined}>
        <p className={styles.kicker}>{HERO.kicker}</p>
        <h1 className={styles.heroTitle}>
          <span className={styles.gradientText}>{heroLead}.</span> {heroRest.join('. ')}
        </h1>
        <p className={styles.heroText}>{HERO.description}</p>
        <div className={styles.heroActions}>
          <button type="button" className={styles.primaryBtn} onClick={() => open('services')}>
            Explore services
          </button>
          <button type="button" className={styles.ghostBtn} onClick={() => open('contact')}>
            Start a project
          </button>
        </div>
        {webgl ? (
          <p className={styles.hint}>
            <span className={styles.hintDot} /> Drag to rotate · Click a planet to explore
          </p>
        ) : (
          <div className={styles.flatGrid}>
            {SECTIONS.map((s) => (
              <button key={s.id} type="button" style={{ '--c': s.color }} onClick={() => open(s.id)}>
                {s.label}
                <small>{s.kicker}</small>
              </button>
            ))}
          </div>
        )}
      </section>

      <aside
        ref={panelRef}
        tabIndex={-1}
        className={styles.panel}
        style={{ '--c': panelSection.color }}
        aria-hidden={!active}
        aria-labelledby="panel-title"
        inert={active ? undefined : ''}
      >
        <div className={styles.panelHead}>
          <div>
            <p className={styles.kicker}>
              <span className={styles.kickerDot} />
              {String(SECTION_IDS.indexOf(panelSection.id) + 1).padStart(2, '0')} · {panelSection.kicker}
            </p>
            <h2 id="panel-title" className={styles.panelTitle}>
              {panelSection.label}
            </h2>
          </div>
          <button type="button" className={styles.close} onClick={() => open(null)} aria-label="Close panel">
            ✕
          </button>
        </div>
        <div ref={panelBodyRef} className={styles.panelBody}>
          <SectionPanel
            id={panelSection.id}
            activeService={activeService}
            onSelectService={setActiveService}
            onNavigate={open}
          />
        </div>
        <div className={styles.panelFoot}>
          <button type="button" onClick={() => step(-1)}>
            ← {SECTIONS[(SECTION_IDS.indexOf(panelSection.id) + SECTIONS.length - 1) % SECTIONS.length].label}
          </button>
          <button type="button" onClick={() => step(1)}>
            {SECTIONS[(SECTION_IDS.indexOf(panelSection.id) + 1) % SECTIONS.length].label} →
          </button>
        </div>
      </aside>
    </div>
  );
}
