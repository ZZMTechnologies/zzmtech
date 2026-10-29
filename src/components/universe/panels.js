'use client';

import { useState } from 'react';
import { ABOUT, CLIENTS, CONTACT, PROCESS, SERVICE_GROUPS, SERVICES, TEAM } from '@/lib/universe-content';
import { Icon } from './icons';
import styles from './universe.module.css';

function AboutPanel({ onNavigate }) {
  return (
    <>
      <p className={styles.lead}>{ABOUT.intro}</p>
      <div className={styles.stats}>
        {ABOUT.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <h3 className={styles.subhead}>Our core work</h3>
      <p className={styles.strong}>{ABOUT.coreWork.title}</p>
      <p>{ABOUT.coreWork.text}</p>

      <h3 className={styles.subhead}>What we deliver</h3>
      <ol className={styles.numbered}>
        {ABOUT.deliverables.map((d) => (
          <li key={d.title}>
            <strong>{d.title}</strong>
            <p>{d.text}</p>
          </li>
        ))}
      </ol>

      <h3 className={styles.subhead}>Why work with us</h3>
      <div className={styles.cards}>
        {ABOUT.values.map((v, i) => (
          <article key={v.title} className={styles.card}>
            <span className={styles.roman}>{['I', 'II', 'III'][i]}</span>
            <h4>{v.title}</h4>
            <p>{v.text}</p>
          </article>
        ))}
      </div>

      <button type="button" className={styles.primaryBtn} onClick={() => onNavigate('services')}>
        See what we build →
      </button>
    </>
  );
}

function ServicesPanel({ activeService, onSelectService }) {
  return (
    <>
      <p className={styles.lead}>
        Twelve capabilities, one partner. Each moon orbiting the Services planet is a service: click a moon or a
        card to expand it.
      </p>
      {SERVICE_GROUPS.map((group) => (
        <div key={group.id}>
          <h3 className={styles.subhead}>{group.title}</h3>
          <p className={styles.muted}>{group.description}</p>
          <div className={styles.serviceList}>
            {group.items.map((item) => {
              const index = SERVICES.findIndex((s) => s.title === item.title);
              const open = index === activeService;
              return (
                <article
                  key={item.title}
                  className={`${styles.service} ${open ? styles.serviceOpen : ''}`}
                  style={{ '--tile': group.id === 'enablers' ? '#3fa9ff' : '#7b5cff' }}
                >
                  <button
                    type="button"
                    className={styles.serviceHead}
                    aria-expanded={open}
                    onClick={() => onSelectService(open ? null : index)}
                  >
                    <span className={`${styles.serviceDot} ${group.id === 'enablers' ? styles.serviceDotAlt : ''}`} />
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                    <span className={styles.chevron} aria-hidden="true">
                      +
                    </span>
                  </button>
                  {open && (
                    <ul className={styles.features}>
                      {item.highlights.map((h, i) => (
                        <li key={h.label} className={styles.feature} style={{ '--i': i }}>
                          <span className={styles.featureIcon}>
                            <Icon name={h.icon} />
                          </span>
                          {h.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

function TagRow({ label, items, variant }) {
  if (!items?.length) return null;
  return (
    <div className={styles.tagRow}>
      <span className={styles.tagLabel}>{label}</span>
      <ul className={`${styles.tags} ${variant ? styles[variant] : ''}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProcessPanel() {
  let stepNumber = 0;
  return (
    <>
      <p className={styles.lead}>{PROCESS.description}</p>
      <p className={styles.legend}>
        <span className={styles.legendDo}>Activity</span>
        <span className={styles.legendGet}>Deliverable</span>
      </p>
      {PROCESS.phases.map((phase, phaseIndex) => (
        <section key={phase.title} className={styles.phase}>
          <h3 className={styles.phaseTitle}>
            <span>Phase {phaseIndex + 1}</span>
            {phase.title}
          </h3>
          <ol className={styles.timeline}>
            {phase.steps.map((step) => {
              stepNumber += 1;
              return (
                <li key={step.title}>
                  <span className={styles.timelineIndex}>{String(stepNumber).padStart(2, '0')}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.summary}</p>
                    <TagRow label="Do" items={step.activities} />
                    <TagRow label="Get" items={step.deliverables} variant="tagsFilled" />
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </>
  );
}

function TeamPanel() {
  return (
    <>
      <p className={styles.motto}>{TEAM.motto}</p>
      <p className={styles.lead}>{TEAM.intro}</p>
      {TEAM.members.map((m) => (
        <article key={m.name} className={styles.member}>
          <div className={styles.memberHead}>
            <img src={m.photo} alt={m.name} />
            <div>
              <h3>{m.name}</h3>
              <p className={styles.role}>{m.role}</p>
              <p className={styles.muted}>{m.title}</p>
            </div>
          </div>
          <p>{m.bio}</p>
          <h4 className={styles.subhead}>Professional certifications</h4>
          <ul className={styles.chips}>
            {m.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

function ClientsPanel({ onNavigate }) {
  return (
    <>
      <p className={styles.strong}>{CLIENTS.title}</p>
      <p className={styles.lead}>{CLIENTS.description}</p>
      <ul className={styles.logos}>
        {CLIENTS.logos.map((l) => (
          <li key={l.src}>
            <img src={l.src} alt={l.name} loading="lazy" />
          </li>
        ))}
      </ul>
      <button type="button" className={styles.primaryBtn} onClick={() => onNavigate('contact')}>
        Become our next success story →
      </button>
    </>
  );
}

const EMPTY_FORM = { name: '', email: '', company: '', service: '', message: '' };

function composeMessage(form) {
  return [
    `Name: ${form.name}`,
    form.email && `Email: ${form.email}`,
    form.company && `Company: ${form.company}`,
    form.service && `Interested in: ${form.service}`,
    '',
    form.message
  ]
    .filter((line) => line !== false && line !== '')
    .join('\n');
}

function ContactPanel() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState(null);
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const sendEmail = (e) => {
    e.preventDefault();
    const subject = `Project enquiry${form.service ? ` – ${form.service}` : ''} from ${form.name}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeMessage(form))}`;
    setStatus('Your email app should now open with the message ready to send.');
  };

  const sendWhatsApp = (e) => {
    const formEl = e.currentTarget.form;
    if (!formEl.reportValidity()) return;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(composeMessage(form))}`, '_blank', 'noopener');
    setStatus('WhatsApp opened in a new tab with your message.');
  };

  return (
    <>
      <p className={styles.lead}>Tell us about your project. We&apos;ll get back to you with a free quote.</p>
      <div className={styles.quick}>
        <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
          <span className={styles.quickIcon}>
            <Icon name="message" />
          </span>
          <strong>WhatsApp</strong>
          <small>Chat with us</small>
        </a>
        <a href={`tel:${CONTACT.phone}`}>
          <span className={styles.quickIcon}>
            <Icon name="phone" />
          </span>
          <strong>Call us</strong>
          <small>{CONTACT.phoneDisplay}</small>
        </a>
        <a href={`mailto:${CONTACT.email}`}>
          <span className={styles.quickIcon}>
            <Icon name="mail" />
          </span>
          <strong>Email</strong>
          <small>{CONTACT.email}</small>
        </a>
        <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer">
          <span className={styles.quickIcon}>
            <Icon name="mapPin" />
          </span>
          <strong>Visit</strong>
          <small>UTM, Johor Bahru</small>
        </a>
      </div>
      <p className={styles.hours}>Open {CONTACT.hours}</p>

      <form className={styles.form} onSubmit={sendEmail}>
        <h3 className={styles.subhead}>Get a free quote</h3>
        <label>
          Name
          <input required value={form.name} onChange={update('name')} autoComplete="name" />
        </label>
        <label>
          Email
          <input required type="email" value={form.email} onChange={update('email')} autoComplete="email" />
        </label>
        <label>
          Company / Entity / Group
          <input value={form.company} onChange={update('company')} autoComplete="organization" />
        </label>
        <label>
          Service of interest
          <select value={form.service} onChange={update('service')}>
            <option value="">Not sure yet</option>
            {SERVICES.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          How can we help you?
          <textarea required rows={4} value={form.message} onChange={update('message')} />
        </label>
        <div className={styles.formActions}>
          <button type="submit" className={styles.primaryBtn}>
            Send via email
          </button>
          <button type="button" className={styles.ghostBtn} onClick={sendWhatsApp}>
            Send via WhatsApp
          </button>
        </div>
        {status && (
          <p className={styles.status} role="status">
            {status}
          </p>
        )}
      </form>

      <div className={styles.address}>
        <p>{CONTACT.address}</p>
        <p className={styles.muted}>{CONTACT.emailNote}</p>
        <p className={styles.muted}>{CONTACT.registration}</p>
      </div>
    </>
  );
}

export function SectionPanel({ id, activeService, onSelectService, onNavigate }) {
  switch (id) {
    case 'about':
      return <AboutPanel onNavigate={onNavigate} />;
    case 'services':
      return <ServicesPanel activeService={activeService} onSelectService={onSelectService} />;
    case 'process':
      return <ProcessPanel />;
    case 'team':
      return <TeamPanel />;
    case 'clients':
      return <ClientsPanel onNavigate={onNavigate} />;
    case 'contact':
      return <ContactPanel />;
    default:
      return null;
  }
}
