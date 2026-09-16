import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Blason } from './Blason'

export function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--ivory)', borderTop: '1px solid var(--border-bronze)' }} className="py-14 px-6">
      <div className="max-w-5xl mx-auto pt-2">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Colonne identité */}
          <div>
            <Blason size={48} />
            <p className="label-sc mt-3 mb-3">Rocket France Series</p>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.95rem', lineHeight: 1.72, color: 'var(--ink-soft)', maxWidth: '17rem' }}>
              Le championnat national français de Rocket League, pensé comme une vraie ligue sportive.
            </p>
          </div>

          {/* Colonne navigation */}
          <div>
            <p className="label-sc mb-5">Navigation</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/#equipes" style={footerLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}>
                  Équipes
                </a>
              </li>
              <li>
                <a href="/#classement" style={footerLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}>
                  Classement &amp; Calendrier
                </a>
              </li>
              <li>
                <a href="/#format" style={footerLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}>
                  Format
                </a>
              </li>
              <li>
                <Link to="/inscription" style={footerLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}>
                  Inscription
                </Link>
              </li>
              <li>
                <a href="/#contact" style={footerLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne contact */}
          <div>
            <p className="label-sc mb-5">Contact</p>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '1rem', color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              contact@rocketfranceseries.fr
            </p>
            <div className="flex gap-5 mt-5">
              {[
                { label: 'Twitter/X', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { label: 'Twitch', d: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z' },
                { label: 'Discord', d: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.104.12 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z' },
              ].map(s => (
                <a key={s.label} href="/#contact" aria-label={s.label}
                  style={{ color: 'var(--ink-soft)', transition: 'color 0.18s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={s.d}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="rule-gold"/>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6">
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.85rem', color: 'var(--ink-faint)' }}>
            © 2027 Rocket France Series — Tous droits réservés
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" style={footerLinkStyleSmall}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-faint)')}>
              Mentions légales
            </Link>
            <Link to="/confidentialite" style={footerLinkStyleSmall}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-faint)')}>
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
      <div className="tricolor-bar mt-10"><span/><span/><span/></div>
    </footer>
  )
}

const footerLinkStyle: CSSProperties = {
  fontFamily: "'EB Garamond', serif",
  fontSize: '1rem',
  color: 'var(--ink-soft)',
  textDecoration: 'none',
  transition: 'color 0.2s',
}

const footerLinkStyleSmall: CSSProperties = {
  fontFamily: "'EB Garamond', serif",
  fontSize: '0.85rem',
  color: 'var(--ink-faint)',
  textDecoration: 'none',
  transition: 'color 0.2s',
}
