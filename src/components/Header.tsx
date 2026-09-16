import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Blason } from './Blason'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const sectionLinks = [
    { label: 'Équipes',    href: '/#equipes' },
    { label: 'Format',     href: '/#format' },
    { label: 'Classement', href: '/#classement' },
  ]

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: 'rgba(34,29,22,0.96)', borderBottom: '1px solid var(--border-bronze)', boxShadow: '0 2px 14px rgba(0,0,0,0.35)' }}
    >
      {/* Filet tricolore */}
      <div className="tricolor-bar"><span/><span/><span/></div>

      <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Nav gauche */}
        <nav className="hidden md:flex items-center gap-10 justify-self-start col-start-1">
          <a href="/#equipes" className="nav-link">Équipes</a>
          <a href="/#format"  className="nav-link">Format</a>
        </nav>

        {/* Logo centré */}
        <Link to="/" className="flex flex-col items-center gap-1 justify-self-center col-start-2" aria-label="Accueil RFS">
          <Blason size={52} />
          <span style={{ fontFamily: "'Cormorant SC', serif", fontWeight: 600, letterSpacing: '0.35em', fontSize: '0.55rem', color: 'var(--bronze)' }}>
            ROCKET FRANCE SERIES
          </span>
        </Link>

        {/* Nav droite */}
        <nav className="hidden md:flex items-center gap-8 justify-self-end col-start-3">
          <a href="/#classement" className="nav-link">Classement</a>
          <Link to="/inscription" className="btn-outline-gold" style={{ padding: '0.5rem 1.3rem', fontSize: '0.62rem' }}>Inscription</Link>
        </nav>

        {/* Hamburger */}
        <button className="md:hidden justify-self-end col-start-3" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" style={{ color: 'var(--ink-soft)' }}>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.2"/>
            <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.2"/>
            <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div style={{ borderTop: '1px solid var(--border-bronze)', backgroundColor: 'var(--ivory)' }} className="md:hidden px-6 py-4 flex flex-col gap-4">
          {sectionLinks.map(l => (
            <a key={l.label} href={l.href} className="nav-link" onClick={() => setMobileOpen(false)}>{l.label}</a>
          ))}
          <Link to="/inscription" className="nav-link" onClick={() => setMobileOpen(false)}>Inscription</Link>
          <a href="/#contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  )
}
