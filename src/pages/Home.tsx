import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroBackground from '../imports/hero-background.jpg'
import { ScrollOrnament, TeamBadge } from '../components/Blason'

/* ─── DATA ─────────────────────────────────────────────────── */

const TEAMS = [
  { name: 'Paris Élite FC', abbr: 'PEF', letter: 'P' },
  { name: 'Lyon Mécanique', abbr: 'LYM', letter: 'L' },
  { name: 'Marseille Boost', abbr: 'MBT', letter: 'M' },
  { name: 'Bordeaux Aero', abbr: 'BDA', letter: 'B' },
  { name: 'Lille Driveurs', abbr: 'LLD', letter: 'L' },
  { name: 'Nantes Fusée', abbr: 'NTF', letter: 'N' },
  { name: 'Toulouse Apex', abbr: 'TAX', letter: 'T' },
  { name: 'Strasbourg Vol', abbr: 'STV', letter: 'S' },
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

export default function Home() {
  const [tab, setTab] = useState<'classement' | 'calendrier'>('classement')

  return (
    <>
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
          <p className="label-sc mt-4 mb-6" style={{ color: 'var(--bronze-light)', letterSpacing: '0.45em', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
            Saison Prologue &nbsp;·&nbsp; 2027
          </p>

          {/* Wordmark principal — Bodoni Moda, grande taille, poids regular */}
          <div className="flex flex-col items-center leading-none mb-1">
            <h1
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontWeight: 700,
                fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                color: 'var(--ink)',
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
                textShadow: '0 2px 20px rgba(0,0,0,0.55)',
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
              textShadow: '0 1px 8px rgba(0,0,0,0.6)',
            }}
          >
            F O N D É &nbsp; E N &nbsp; 2 0 2 6
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
              textShadow: '0 1px 10px rgba(0,0,0,0.55)',
            }}>
            Le premier championnat national de Rocket League pensé et structuré comme une vraie ligue sportive française.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#classement" className="btn-outline-gold" style={{ color: 'var(--bronze-light)', borderColor: 'var(--bronze-light)' }}>Voir le classement</a>
            <a href="#equipes"    className="btn-outline-gold" style={{ color: 'var(--ink)', borderColor: 'rgba(248,244,236,0.5)' }}>Les équipes</a>
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
          style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.68rem', color: 'rgba(248,244,236,0.45)', textDecoration: 'none', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
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

          <div className="panel grid md:grid-cols-2 gap-0">
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
          <div className="panel grid grid-cols-3" style={{ borderTop: 'none' }}>
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
      <section className="py-20 px-6 text-center" style={{ backgroundColor: '#120F09', borderTop: '1px solid var(--border-bronze)' }}>
        <p className="label-sc mb-5" style={{ color: 'var(--bronze-light)' }}>Décembre &nbsp;·&nbsp; Annuelle</p>
        <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--ink)', maxWidth: '32rem', margin: '0 auto 1.25rem' }}>
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
            <p className="label-sc mb-4">Saison 2027</p>
            <h2 className="font-bodoni"
              style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--ink)' }}>
              Les Huit Clubs Fondateurs
            </h2>
            <div className="mt-5 mx-auto" style={{ width: '3rem', height: '1px', backgroundColor: 'var(--bronze)' }}/>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TEAMS.map((team) => (
              <div key={team.name} className="team-card flex flex-col items-center gap-4">
                <TeamBadge letter={team.letter} />
                <p className="font-bodoni text-center"
                  style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '0.95rem', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.3 }}>
                  {team.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="font-cormorant italic mb-6 mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink-faint)', maxWidth: '30rem' }}>
              La sélection des clubs participants est validée par la direction de la ligue à chaque mercato.
            </p>
            <Link to="/inscription" className="btn-outline-gold">Inscrire mon équipe</Link>
          </div>
        </div>
      </section>

      {/* ══ CLASSEMENT / CALENDRIER ════════════════════════════ */}
      <section id="classement" className="py-24 px-6" style={{ backgroundColor: 'var(--ivory-dim)', borderTop: '1px solid var(--border-bronze)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-sc mb-4">RFS Prologue 2027</p>
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

          <div className="panel p-8">
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
        </div>
      </section>

      {/* ══ BANNIÈRE CANDIDATURE ════════════════════════════════ */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: 'var(--blue)' }}>
        <p className="label-sc mb-6" style={{ color: 'rgba(248,244,236,0.7)' }}>Saison Prologue 2028</p>
        <h2 className="font-bodoni mb-5 mx-auto"
          style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--ink)', maxWidth: '34rem' }}>
          Rejoignez la compétition
        </h2>
        <p className="font-cormorant italic mb-10 mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic', fontSize: '1.2rem', color: 'rgba(248,244,236,0.75)', maxWidth: '28rem', lineHeight: 1.65 }}>
          Les candidatures pour la prochaine saison ouvrent en janvier 2028.
        </p>
        <Link to="/inscription" className="btn-outline-gold" style={{ color: 'var(--ink)', borderColor: 'rgba(248,244,236,0.5)' }}>Déposer une candidature</Link>
      </section>
    </>
  )
}
