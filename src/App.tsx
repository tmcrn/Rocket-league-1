import { useState } from 'react'
import heroBackground from './imports/hero-background.jpg'

/* ─── DATA ─────────────────────────────────────────────────── */

const TEAMS = [
  { name: 'Paris Élite FC',   city: 'Paris',      abbr: 'PEF', letter: 'P' },
  { name: 'Lyon Mécanique',   city: 'Lyon',        abbr: 'LYM', letter: 'L' },
  { name: 'Marseille Boost',  city: 'Marseille',   abbr: 'MBT', letter: 'M' },
  { name: 'Bordeaux Aero',    city: 'Bordeaux',    abbr: 'BDA', letter: 'B' },
  { name: 'Lille Driveurs',   city: 'Lille',       abbr: 'LLD', letter: 'L' },
  { name: 'Nantes Fusée',     city: 'Nantes',      abbr: 'NTF', letter: 'N' },
  { name: 'Toulouse Apex',    city: 'Toulouse',    abbr: 'TAX', letter: 'T' },
  { name: 'Strasbourg Vol',   city: 'Strasbourg',  abbr: 'STV', letter: 'S' },
]

const CLASSEMENT = [
  { pos: 1, name: 'Paris Élite FC',   j: 10, g: 8, p: 1, pts: 25 },
  { pos: 2, name: 'Lyon Mécanique',   j: 10, g: 7, p: 1, pts: 23 },
  { pos: 3, name: 'Marseille Boost',  j: 10, g: 6, p: 3, pts: 19 },
  { pos: 4, name: 'Bordeaux Aero',    j: 10, g: 5, p: 3, pts: 17 },
  { pos: 5, name: 'Nantes Fusée',     j: 10, g: 4, p: 3, pts: 15 },
  { pos: 6, name: 'Lille Driveurs',   j: 10, g: 3, p: 5, pts: 11 },
  { pos: 7, name: 'Toulouse Apex',    j: 10, g: 2, p: 7, pts: 7  },
  { pos: 8, name: 'Strasbourg Vol',   j: 10, g: 1, p: 9, pts: 3  },
]

const MATCHES = [
  { date: '21 Sep', home: 'Paris Élite FC',   away: 'Lyon Mécanique',  score: '3 – 1', done: true  },
  { date: '28 Sep', home: 'Marseille Boost',  away: 'Bordeaux Aero',   score: '2 – 2', done: true  },
  { date: '5 Oct',  home: 'Lille Driveurs',   away: 'Nantes Fusée',    score: null,    done: false },
  { date: '12 Oct', home: 'Toulouse Apex',    away: 'Strasbourg Vol',  score: null,    done: false },
]

/* ─── ORNEMENT VOLUTE (filet décoratif style club 1920) ─────── */
function ScrollOrnament({ color = '#A6813F', width = 280 }: { color?: string; width?: number }) {
  return (
    <svg width={width} height={Math.round(width * 0.22)} viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Trait central */}
      <line x1="0" y1="30" x2="280" y2="30" stroke={color} strokeWidth="0.6" opacity="0.35"/>
      {/* Volute gauche */}
      <path d="M100 30 C90 30 78 22 78 14 C78 8 84 4 90 6 C96 8 96 16 90 18 C86 19 83 16 85 13" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Volute droite (miroir) */}
      <path d="M180 30 C190 30 202 22 202 14 C202 8 196 4 190 6 C184 8 184 16 190 18 C194 19 197 16 195 13" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Boucle centrale infini */}
      <path d="M120 30 C120 22 126 18 132 22 C138 26 142 26 148 22 C154 18 160 22 160 30 C160 38 154 42 148 38 C142 34 138 34 132 38 C126 42 120 38 120 30Z" stroke={color} strokeWidth="1.2" fill="none"/>
      {/* Petits losanges latéraux */}
      <path d="M60 30 L68 24 L76 30 L68 36 Z" stroke={color} strokeWidth="0.9" fill="none"/>
      <path d="M204 30 L212 24 L220 30 L212 36 Z" stroke={color} strokeWidth="0.9" fill="none"/>
      {/* Extrémités */}
      <circle cx="18" cy="30" r="2" fill={color} opacity="0.5"/>
      <circle cx="262" cy="30" r="2" fill={color} opacity="0.5"/>
      <line x1="20" y1="30" x2="58" y2="30" stroke={color} strokeWidth="0.8" opacity="0.5"/>
      <line x1="222" y1="30" x2="260" y2="30" stroke={color} strokeWidth="0.8" opacity="0.5"/>
    </svg>
  )
}

/* ─── SVG EMBLÈME PRINCIPAL ────────────────────────────────── */
// Écusson sobre ivoire/encre, filet bronze, touche tricolore fine en pied de blason
function Blason({ size = 64 }: { size?: number }) {
  const s = size
  const h = Math.round(s * 1.2)
  return (
    <svg width={s} height={h} viewBox="0 0 64 77" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Emblème RFS">
      {/* Contour écusson */}
      <path d="M32 2L62 14V42C62 58 48 68 32 75C16 68 2 58 2 42V14L32 2Z" fill="#F8F4EC" stroke="#A6813F" strokeWidth="1.5"/>
      {/* Fond intérieur ivoire légèrement ombré */}
      <path d="M32 8L56 18V40C56 53 44 62 32 69C20 62 8 53 8 40V18L32 8Z" fill="#F1EBDD"/>

      {/* Motif aile/fusée en encre */}
      <path d="M20 48 C16 40 14 30 18 22 C20 18 23 16 24 20 C22 24 22 30 24 35 Z" fill="#1C1712"/>
      <path d="M32 18 L29 30 L32 44 L35 30 Z" fill="#1C1712"/>
      <path d="M44 48 C48 40 50 30 46 22 C44 18 41 16 40 20 C42 24 42 30 40 35 Z" fill="#1C1712"/>
      <path d="M24 35 C20 36 17 38 19 42 C22 44 28 42 32 44 Z" fill="#A6813F" opacity="0.8"/>
      <path d="M40 35 C44 36 47 38 45 42 C42 44 36 42 32 44 Z" fill="#A6813F" opacity="0.8"/>

      {/* Filet tricolore discret en bas du blason */}
      <rect x="18" y="56" width="10" height="2.5" fill="#2E4374"/>
      <rect x="28" y="56" width="8"  height="2.5" fill="#F8F4EC"/>
      <rect x="36" y="56" width="10" height="2.5" fill="#B5623C"/>

      {/* Texte RFS */}
      <text x="32" y="70" textAnchor="middle"
        fontFamily="'Cormorant SC', serif" fontSize="7"
        fill="#A6813F" letterSpacing="3">RFS</text>
    </svg>
  )
}

/* ─── BLASON ÉQUIPE (petit) ────────────────────────────────── */
function TeamBadge({ letter }: { letter: string }) {
  return (
    <svg width="48" height="58" viewBox="0 0 48 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 1.5L46.5 11V34C46.5 46 36 54 24 57C12 54 1.5 46 1.5 34V11L24 1.5Z" fill="#F8F4EC" stroke="#A6813F" strokeWidth="1"/>
      <text x="24" y="36" textAnchor="middle"
        fontFamily="'Bodoni Moda', serif" fontSize="20" fontWeight="600"
        fill="#1C1712">{letter}</text>
    </svg>
  )
}

/* ─── COMPOSANT PRINCIPAL ───────────────────────────────────── */
export default function App() {
  const [tab, setTab]           = useState<'classement' | 'calendrier'>('classement')
  const [mobileOpen, setMobile] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--ivory)', color: 'var(--ink)' }}>

      {/* ══ HEADER ══════════════════════════════════════════════ */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: 'rgba(248,244,236,0.96)', borderBottom: '1px solid var(--border-bronze)' }}
      >
        {/* Filet tricolore */}
        <div className="tricolor-bar"><span/><span/><span/></div>

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Nav gauche */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#equipes"    className="nav-link">Équipes</a>
            <a href="#format"     className="nav-link">Format</a>
          </nav>

          {/* Logo centré */}
          <a href="#" className="flex flex-col items-center gap-1 mx-auto md:mx-0" aria-label="Accueil RFS">
            <Blason size={52} />
            <span style={{ fontFamily: "'Cormorant SC', serif", fontWeight: 600, letterSpacing: '0.35em', fontSize: '0.55rem', color: 'var(--bronze)' }}>
              ROCKET FRANCE SERIES
            </span>
          </a>

          {/* Nav droite */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#classement" className="nav-link">Classement</a>
            <a href="#contact"    className="nav-link">Contact</a>
          </nav>

          {/* Hamburger */}
          <button className="md:hidden" onClick={() => setMobile(!mobileOpen)} aria-label="Menu" style={{ color: 'var(--ink-soft)' }}>
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.2"/>
              <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.2"/>
              <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div style={{ borderTop: '1px solid var(--border-bronze)', backgroundColor: 'var(--ivory)' }} className="md:hidden px-6 py-4 flex flex-col gap-4">
            {['Équipes','Format','Classement','Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" onClick={() => setMobile(false)}>{l}</a>
            ))}
          </div>
        )}
      </header>

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center text-center overflow-hidden" style={{ minHeight: '96vh' }}>
        {/* Photo stade */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundColor: '#1C1712',
          }}
        />
        {/* Overlay encre profonde, teinté bronze discret */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, rgba(28,23,18,0.78) 0%, rgba(28,23,18,0.62) 45%, rgba(28,23,18,0.55) 100%)'
        }}/>
        {/* Filet bronze horizontal — pinstripe */}
        <div className="absolute left-0 right-0 pinstripe" style={{ top: '30%' }}/>
        <div className="absolute left-0 right-0 pinstripe" style={{ top: '72%' }}/>

        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Ligne déco supérieure */}
          <ScrollOrnament color="#C9A868" width={220} />

          {/* Label saison */}
          <p className="label-sc mt-4 mb-6" style={{ color: 'var(--bronze-light)', letterSpacing: '0.45em' }}>
            Saison Prologue &nbsp;·&nbsp; 2025
          </p>

          {/* Wordmark principal — Bodoni Moda, grande taille, poids regular */}
          <div className="flex flex-col items-center leading-none mb-1">
            <h1
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontWeight: 700,
                fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                color: 'var(--ivory)',
                letterSpacing: '0.02em',
                lineHeight: 1.05,
                textShadow: '0 2px 32px rgba(0,0,0,0.6)',
              }}
            >
              Rocket France
            </h1>
            {/* "Series" en bronze, Bodoni Moda italique — contraste avec le titre droit */}
            <p
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(1.6rem, 4vw, 3.5rem)',
                color: 'var(--bronze-light)',
                letterSpacing: '0.1em',
                lineHeight: 1.3,
                marginTop: '0.15em',
              }}
            >
              Series
            </p>
          </div>

          {/* Ornement volute – le filet décoratif du club */}
          <div className="my-6">
            <ScrollOrnament color="#F8F4EC" width={260} />
          </div>

          {/* Date de fondation */}
          <p
            style={{
              fontFamily: "'Cormorant SC', serif", fontWeight: 600,
              fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
              color: 'rgba(248,244,236,0.55)',
              letterSpacing: '0.4em',
            }}
          >
            F O N D É &nbsp; E N &nbsp; 2 0 2 4
          </p>

          {/* Accroche */}
          <p className="font-cormorant italic mt-8 mb-10 mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 500,
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
              color: 'rgba(248,244,236,0.72)',
              maxWidth: '34rem',
              lineHeight: 1.7,
            }}>
            Le premier championnat national de Rocket League pensé et structuré comme une vraie ligue sportive française.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#classement" className="btn-outline-gold" style={{ color: 'var(--bronze-light)', borderColor: 'var(--bronze-light)' }}>Voir le classement</a>
            <a href="#equipes"    className="btn-outline-gold" style={{ color: 'var(--ivory)', borderColor: 'rgba(248,244,236,0.5)' }}>Les équipes</a>
          </div>
        </div>

        {/* Flèche bas */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ color: 'rgba(201,168,104,0.5)' }}>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <line x1="7" y1="0" x2="7" y2="18" stroke="currentColor" strokeWidth="1"/>
            <path d="M1 12L7 18L13 12" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* Crédit photo */}
        <a
          href="https://i.redd.it/6j64xgbexlc51.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-4"
          style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.68rem', color: 'rgba(248,244,236,0.45)', textDecoration: 'none' }}
        >
          Photo : Reddit
        </a>
      </section>

      {/* ══ LE FORMAT ══════════════════════════════════════════ */}
      <section id="format" className="py-24 px-6" style={{ backgroundColor: 'var(--ivory-dim)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="label-sc mb-4">Structure de la compétition</p>
            <h2 className="font-bodoni"
              style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--ink)' }}>
              Le Format RFS
            </h2>
            <div className="mt-5 mx-auto" style={{ width: '3rem', height: '1px', backgroundColor: 'var(--bronze)' }}/>
          </div>

          <div className="grid md:grid-cols-2 gap-0" style={{ border: '1px solid var(--border-bronze)' }}>
            {[
              {
                label: 'RFS Prologue',
                period: 'Mi-Septembre — Novembre/Décembre',
                season: 'Automne / Hiver',
                color: 'var(--blue)',
                desc: 'La première demi-saison ouvre le championnat dès la rentrée, calée sur une période creuse du calendrier RLCS international. Les huit clubs s\'affrontent en matchs aller-retour, un match par semaine, chaque rencontre en Best-of-5.',
              },
              {
                label: 'RFS Épilogue',
                period: 'Juin — Août',
                season: 'Été',
                color: 'var(--terracotta)',
                desc: 'La seconde demi-saison reprend après le mercato, avec les effectifs renouvelés. Même format aller-retour en Best-of-5 sur 14 journées, désignant le second finaliste de l\'année.',
              },
            ].map((s, i) => (
              <div key={s.label} className="p-10"
                style={{ borderRight: i === 0 ? '1px solid var(--border-bronze)' : 'none' }}>
                <p className="label-sc mb-5">{s.label}</p>
                <p className="font-cormorant italic mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: '1.3rem', fontStyle: 'italic', color: s.color }}>
                  {s.period}
                </p>
                <p style={{ fontFamily: "'Cormorant SC', serif", fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--ink-faint)', marginBottom: '1.2rem' }}>
                  {s.season}
                </p>
                <hr className="rule-gold" style={{ marginBottom: '1.2rem' }}/>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '1.05rem', lineHeight: 1.72, color: 'var(--ink-soft)' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Chiffres */}
          <div className="grid grid-cols-3" style={{ border: '1px solid var(--border-bronze)', borderTop: 'none' }}>
            {[{ val: '8', lbl: 'Clubs fondateurs' }, { val: '2', lbl: 'Demi-saisons' }, { val: '14', lbl: 'Journées' }].map((k, i) => (
              <div key={k.lbl} className="py-8 text-center"
                style={{ borderRight: i < 2 ? '1px solid var(--border-bronze)' : 'none' }}>
                <p className="font-bodoni" style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2.8rem', fontWeight: 600, color: 'var(--bronze)' }}>{k.val}</p>
                <p className="label-sc mt-1" style={{ fontSize: '0.6rem' }}>{k.lbl}</p>
              </div>
            ))}
          </div>

          {/* Règlement synthétique */}
          <div className="grid sm:grid-cols-2 gap-8 mt-14">
            <div>
              <p className="label-sc mb-4">Points &amp; départage</p>
              <ul style={{ fontFamily: "'EB Garamond', serif", fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
                <li>Victoire : <strong style={{ color: 'var(--ink)' }}>3 points</strong> · Défaite : <strong style={{ color: 'var(--ink)' }}>0 point</strong></li>
                <li>Départage : différence de buts, puis confrontation directe, puis buts marqués</li>
              </ul>
            </div>
            <div>
              <p className="label-sc mb-4">Mercato &amp; challenger</p>
              <ul style={{ fontFamily: "'EB Garamond', serif", fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
                <li>Fenêtre de mercato ouverte entre le Prologue et l'Épilogue</li>
                <li>Dès la saison 2, le dernier de chaque demi-saison est challengé par une équipe candidate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GRANDE FINALE ══════════════════════════════════════ */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: 'var(--ink)', borderTop: '1px solid var(--border-bronze)' }}>
        <p className="label-sc mb-5" style={{ color: 'var(--bronze-light)' }}>Décembre &nbsp;·&nbsp; Annuelle</p>
        <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--ivory)', maxWidth: '32rem', margin: '0 auto 1.25rem' }}>
          La Grande Finale
        </h2>
        <p className="font-cormorant italic mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic', fontSize: '1.15rem', color: 'rgba(248,244,236,0.7)', maxWidth: '30rem', lineHeight: 1.7 }}>
          Le vainqueur du Prologue affronte le vainqueur de l'Épilogue en Best-of-7 pour le titre de Champion Annuel RFS.
        </p>
      </section>

      {/* ══ ÉQUIPES ════════════════════════════════════════════ */}
      <section id="equipes" className="py-24 px-6" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="label-sc mb-4">Saison 2025</p>
            <h2 className="font-bodoni"
              style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--ink)' }}>
              Les Huit Clubs Fondateurs
            </h2>
            <div className="mt-5 mx-auto" style={{ width: '3rem', height: '1px', backgroundColor: 'var(--bronze)' }}/>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {TEAMS.map((team, i) => {
              const col     = i % 4
              const row     = Math.floor(i / 4)
              const lastCol = col === 3 || i === TEAMS.length - 1
              const lastRow = row === Math.floor((TEAMS.length - 1) / 4)
              return (
                <div key={team.name} className="team-card flex flex-col items-center gap-4"
                  style={{
                    borderRadius: 0, border: 'none',
                    borderRight:  lastCol ? 'none' : '1px solid var(--border-bronze)',
                    borderBottom: lastRow ? 'none' : '1px solid var(--border-bronze)',
                  }}>
                  <TeamBadge letter={team.letter} />
                  <div>
                    <p className="font-bodoni text-center"
                      style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '0.95rem', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.3 }}>
                      {team.name}
                    </p>
                    <p className="label-sc text-center mt-1" style={{ fontSize: '0.58rem', color: 'var(--ink-faint)' }}>{team.city}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ CLASSEMENT / CALENDRIER ════════════════════════════ */}
      <section id="classement" className="py-24 px-6" style={{ backgroundColor: 'var(--ivory-dim)', borderTop: '1px solid var(--border-bronze)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-sc mb-4">RFS Prologue 2025</p>
            <h2 className="font-bodoni"
              style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--ink)' }}>
              Classement &amp; Calendrier
            </h2>
            <div className="mt-5 mx-auto" style={{ width: '3rem', height: '1px', backgroundColor: 'var(--bronze)' }}/>
          </div>

          {/* Onglets */}
          <div className="flex justify-center mb-10">
            {(['classement','calendrier'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                style={{
                  fontFamily: "'Cormorant SC', serif", fontWeight: 600,
                  letterSpacing: '0.2em',
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  padding: '0.5rem 2rem',
                  background: 'none',
                  cursor: 'pointer',
                  borderBottom: tab === t ? '2px solid var(--bronze)' : '2px solid transparent',
                  color: tab === t ? 'var(--bronze)' : 'var(--ink-faint)',
                  transition: 'color 0.18s',
                }}>
                {t === 'classement' ? 'Classement' : 'Calendrier'}
              </button>
            ))}
          </div>

          {tab === 'classement' && (
            <div>
              {/* En-tête */}
              <div className="table-row"
                style={{ fontFamily: "'Cormorant SC', serif", fontWeight: 600, fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--bronze)', borderBottom: '1px solid var(--bronze)' }}>
                <span>#</span><span>Club</span><span className="text-center">J</span><span className="text-center">G</span><span className="text-center">D</span><span className="text-right">Pts</span>
              </div>
              {CLASSEMENT.map(r => (
                <div key={r.pos} className="table-row">
                  <span style={{ fontFamily: "'Cormorant SC', serif", fontWeight: 600, color: r.pos === 1 ? 'var(--bronze)' : 'var(--ink-faint)', fontSize: '0.82rem' }}>{r.pos}</span>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '1.05rem', color: 'var(--ink)' }}>{r.name}</span>
                  <span className="text-center" style={{ color: 'var(--ink-faint)', fontSize: '0.95rem' }}>{r.j}</span>
                  <span className="text-center" style={{ color: 'var(--ink-faint)', fontSize: '0.95rem' }}>{r.g}</span>
                  <span className="text-center" style={{ color: 'var(--ink-faint)', fontSize: '0.95rem' }}>{r.p}</span>
                  <span className="text-right" style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '1rem', color: r.pos <= 2 ? 'var(--bronze)' : 'var(--ink)' }}>{r.pts}</span>
                </div>
              ))}
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--ink-faint)', marginTop: '1.5rem' }}>
                Victoire : 3 pts · Défaite : 0 pt. Départage : différence de buts, puis confrontation directe, puis buts marqués.
              </p>
            </div>
          )}

          {tab === 'calendrier' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '5rem 1fr auto 1fr', gap: '1rem', fontFamily: "'Cormorant SC', serif", fontWeight: 600, fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--bronze)', borderBottom: '1px solid var(--bronze)', paddingBottom: '0.5rem' }}>
                <span>Date</span><span>Domicile</span><span className="text-center">Score</span><span className="text-right">Extérieur</span>
              </div>
              {MATCHES.map(m => (
                <div key={m.date} className="match-row">
                  <span className="label-sc" style={{ fontSize: '0.6rem' }}>{m.date}</span>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '1.05rem', color: 'var(--ink)' }}>{m.home}</span>
                  <span style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '1rem', color: m.done ? 'var(--ink)' : 'var(--ink-faint)', minWidth: '4.5rem', textAlign: 'center' }}>
                    {m.score ?? '—'}
                  </span>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '1.05rem', textAlign: 'right', color: 'var(--ink)' }}>{m.away}</span>
                </div>
              ))}
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--ink-faint)', marginTop: '1.5rem' }}>
                Chaque rencontre se joue en Best-of-5, à raison d'un match par semaine.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ══ BANNIÈRE CANDIDATURE ════════════════════════════════ */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: 'var(--blue)' }}>
        <p className="label-sc mb-6" style={{ color: 'rgba(248,244,236,0.7)' }}>Saison Prologue 2026</p>
        <h2 className="font-bodoni mb-5 mx-auto"
          style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--ivory)', maxWidth: '34rem' }}>
          Rejoignez la compétition
        </h2>
        <p className="font-cormorant italic mb-10 mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic', fontSize: '1.2rem', color: 'rgba(248,244,236,0.75)', maxWidth: '28rem', lineHeight: 1.65 }}>
          Les candidatures pour la prochaine saison ouvrent en janvier 2026.
        </p>
        <a href="#contact" className="btn-outline-gold" style={{ color: 'var(--ivory)', borderColor: 'rgba(248,244,236,0.5)' }}>Déposer une candidature</a>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════ */}
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
                {['Équipes','Calendrier','Classement','Format','Contact'].map(l => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`}
                      style={{ fontFamily: "'EB Garamond', serif", fontSize: '1rem', color: 'var(--ink-soft)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}>
                      {l}
                    </a>
                  </li>
                ))}
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
                  <a key={s.label} href="#contact" aria-label={s.label}
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
              © 2025 Rocket France Series — Tous droits réservés
            </p>
            <div className="flex gap-6">
              {['Mentions légales', 'Politique de confidentialité'].map(l => (
                <a key={l} href="#"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.85rem', color: 'var(--ink-faint)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-faint)')}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="tricolor-bar mt-10"><span/><span/><span/></div>
      </footer>

    </div>
  )
}
