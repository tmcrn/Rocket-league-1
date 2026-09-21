import { useState, useRef } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { ScrollOrnament } from '../components/Blason'

type Player = { pseudo: string; platformId: string; discord: string }

const emptyPlayer: Player = { pseudo: '', platformId: '', discord: '' }

export default function Inscription() {
  const [teamName, setTeamName]   = useState('')
  const [teamTag, setTeamTag]     = useState('')
  const [captainName, setCaptainName]   = useState('')
  const [captainEmail, setCaptainEmail] = useState('')
  const [captainDiscord, setCaptainDiscord] = useState('')

  const [players, setPlayers] = useState<Player[]>([{ ...emptyPlayer }, { ...emptyPlayer }, { ...emptyPlayer }])
  const [hasFourthPlayer, setHasFourthPlayer] = useState(false)

  const [hasCoach, setHasCoach] = useState(false)
  const [coach, setCoach] = useState<Player>({ ...emptyPlayer })

  const [twitch, setTwitch] = useState('')
  const [justification, setJustification] = useState('')
  const [rulesAccepted, setRulesAccepted] = useState(false)

  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const updatePlayer = (index: number, field: keyof Player, value: string) => {
    setPlayers(prev => prev.map((p, i) => (i === index ? { ...p, [field]: value } : p)))
  }

  const addFourthPlayer = () => {
    setPlayers(prev => (prev.length === 3 ? [...prev, { ...emptyPlayer }] : prev))
    setHasFourthPlayer(true)
  }

  const removeFourthPlayer = () => {
    setPlayers(prev => prev.slice(0, 3))
    setHasFourthPlayer(false)
  }

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setLogoFile(file)
    if (file) {
      setLogoPreview(URL.createObjectURL(file))
    } else {
      setLogoPreview(null)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID
    if (!formId) {
      setSubmitError("Le formulaire n'est pas encore connecté (VITE_FORMSPREE_FORM_ID manquant). Contactez-nous directement par email en attendant.")
      return
    }

    const data = new FormData()
    data.append('_subject', `Candidature RFS — ${teamName || 'équipe sans nom'}`)
    data.append('_replyto', captainEmail)

    data.append("Nom de l'équipe", teamName)
    data.append('Tag', teamTag)
    if (logoFile) data.append('Logo', logoFile)

    data.append('Capitaine — nom', captainName)
    data.append('Capitaine — email', captainEmail)
    data.append('Capitaine — Discord', captainDiscord)

    players.forEach((p, i) => {
      const label = i < 3 ? `Joueur ${i + 1} (titulaire)` : 'Joueur 4 (remplaçant)'
      data.append(`${label} — pseudo`, p.pseudo)
      data.append(`${label} — Epic Games`, p.platformId)
      data.append(`${label} — Discord`, p.discord)
    })

    if (hasCoach) {
      data.append('Coach — pseudo', coach.pseudo)
      data.append('Coach — rôle/expérience', coach.platformId)
      data.append('Coach — Discord', coach.discord)
    }

    if (twitch) data.append('Présence en ligne', twitch)
    data.append('Justification', justification)

    setSubmitting(true)
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('request failed')
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setSubmitError("L'envoi a échoué. Vérifiez votre connexion et réessayez, ou écrivez-nous directement à contact@rocketfranceseries.fr.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-32 px-6 text-center" style={{ backgroundColor: 'var(--ivory)', minHeight: '70vh' }}>
        <div className="max-w-xl mx-auto">
          <ScrollOrnament color="#C9A868" width={220} />
          <h1 className="mt-8 mb-5" style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--ink)' }}>
            Candidature envoyée
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.7 }}>
            Merci, <strong style={{ color: 'var(--bronze)' }}>{teamName || 'votre équipe'}</strong> a bien été enregistrée.
            La direction de la ligue étudie chaque dossier et reviendra vers votre capitaine par email d'ici l'ouverture de la prochaine fenêtre de mercato.
          </p>
          <Link to="/" className="btn-outline-gold mt-10 inline-block">Retour à l'accueil</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--ivory)' }}>
      <div className="max-w-3xl mx-auto">

        {/* En-tête */}
        <div className="text-center mb-6">
          <ScrollOrnament color="#C9A868" width={200} />
        </div>
        <div className="text-center mb-14">
          <p className="label-sc mb-4">Mercato &amp; candidatures</p>
          <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--ink)' }}>
            Inscrire une équipe
          </h1>
          <p className="font-cormorant italic mt-5 mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink-soft)', maxWidth: '34rem', lineHeight: 1.7 }}>
            Chaque dossier est étudié personnellement par la direction de la RFS, qui valide les clubs participant à la saison.
            Un dossier complet et une justification sincère font toute la différence.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-14">

          {/* ── Identité de l'équipe ── */}
          <div className="panel p-8">
            <p className="label-sc mb-8">Identité de l'équipe</p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="field-label" htmlFor="teamName">Nom de l'équipe *</label>
                <input id="teamName" className="field-input" required
                  value={teamName} onChange={e => setTeamName(e.target.value)}
                  placeholder="Ex. Paris Élite FC" />
              </div>
              <div>
                <label className="field-label" htmlFor="teamTag">Tag / abréviation (3-4 lettres)</label>
                <input id="teamTag" className="field-input" maxLength={4}
                  value={teamTag} onChange={e => setTeamTag(e.target.value.toUpperCase())}
                  placeholder="Ex. PEF" />
              </div>
            </div>

            <div>
              <label className="field-label" htmlFor="logo">Logo de l'équipe</label>
              <div className="flex items-center gap-5">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    width: '5.5rem', height: '5.5rem', flexShrink: 0,
                    border: '1px dashed var(--border-bronze-strong)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', overflow: 'hidden',
                    backgroundColor: 'rgba(0,0,0,0.22)',
                    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.35)',
                  }}
                >
                  {logoPreview ? (
                    <img src={logoPreview} alt="Aperçu du logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ color: 'var(--ink-faint)', fontSize: '1.4rem' }}>+</span>
                  )}
                </div>
                <div>
                  <button type="button" className="btn-outline-gold" style={{ fontSize: '0.6rem', padding: '0.6rem 1.4rem' }}
                    onClick={() => fileInputRef.current?.click()}>
                    {logoFile ? 'Changer le logo' : 'Choisir une image'}
                  </button>
                  <p className="field-hint">Format carré recommandé, PNG ou JPG, 2 Mo max.</p>
                </div>
                <input ref={fileInputRef} id="logo" type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
              </div>
            </div>
          </div>

          {/* ── Capitaine / contact ── */}
          <div className="panel p-8">
            <p className="label-sc mb-2">Capitaine &amp; contact</p>
            <p className="field-hint mb-6">La personne que la ligue contactera pour toute la durée du processus.</p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="field-label" htmlFor="captainName">Nom / pseudo *</label>
                <input id="captainName" className="field-input" required
                  value={captainName} onChange={e => setCaptainName(e.target.value)} />
              </div>
              <div>
                <label className="field-label" htmlFor="captainEmail">Email *</label>
                <input id="captainEmail" type="email" className="field-input" required
                  value={captainEmail} onChange={e => setCaptainEmail(e.target.value)} />
              </div>
              <div>
                <label className="field-label" htmlFor="captainDiscord">Discord *</label>
                <input id="captainDiscord" className="field-input" required
                  placeholder="pseudo#0000"
                  value={captainDiscord} onChange={e => setCaptainDiscord(e.target.value)} />
              </div>
            </div>
          </div>

          {/* ── Effectif ── */}
          <div className="panel p-8">
            <p className="label-sc mb-2">Effectif</p>
            <p className="field-hint mb-6">3 joueurs titulaires obligatoires, un 4ᵉ joueur possible en remplaçant.</p>

            <div className="flex flex-col gap-8">
              {players.map((player, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-4">
                    <p className="label-sc" style={{ fontSize: '0.62rem' }}>
                      {i < 3 ? `Joueur ${i + 1} (titulaire) *` : 'Joueur 4 (remplaçant)'}
                    </p>
                    {i === 3 && (
                      <button type="button" onClick={removeFourthPlayer}
                        style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.8rem', color: 'var(--terracotta)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                        Retirer
                      </button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <label className="field-label">Pseudo en jeu {i < 3 && '*'}</label>
                      <input className="field-input" required={i < 3}
                        value={player.pseudo} onChange={e => updatePlayer(i, 'pseudo', e.target.value)} />
                    </div>
                    <div>
                      <label className="field-label">Identifiant Epic Games {i < 3 && '*'}</label>
                      <input className="field-input" required={i < 3}
                        value={player.platformId} onChange={e => updatePlayer(i, 'platformId', e.target.value)} />
                    </div>
                    <div>
                      <label className="field-label">Discord {i < 3 && '*'}</label>
                      <input className="field-input" required={i < 3} placeholder="pseudo#0000"
                        value={player.discord} onChange={e => updatePlayer(i, 'discord', e.target.value)} />
                    </div>
                  </div>
                </div>
              ))}

              {!hasFourthPlayer && (
                <button type="button" onClick={addFourthPlayer} className="btn-outline-gold self-start" style={{ fontSize: '0.6rem', padding: '0.6rem 1.4rem' }}>
                  + Ajouter un 4ᵉ joueur
                </button>
              )}
            </div>
          </div>

          {/* ── Coach ── */}
          <div className="panel p-8">
            <div className="flex items-center justify-between mb-2">
              <p className="label-sc">Coach (optionnel)</p>
              {hasCoach && (
                <button type="button" onClick={() => { setHasCoach(false); setCoach({ ...emptyPlayer }) }}
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.8rem', color: 'var(--terracotta)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                  Retirer
                </button>
              )}
            </div>
            <p className="field-hint mb-6">Un 5ᵉ membre possible, en dehors du roster de jeu.</p>

            {hasCoach ? (
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="field-label">Pseudo</label>
                  <input className="field-input" value={coach.pseudo} onChange={e => setCoach({ ...coach, pseudo: e.target.value })} />
                </div>
                <div>
                  <label className="field-label">Rôle / expérience</label>
                  <input className="field-input" value={coach.platformId} onChange={e => setCoach({ ...coach, platformId: e.target.value })} placeholder="Ex. ancien joueur RLCS, analyste..." />
                </div>
                <div>
                  <label className="field-label">Discord</label>
                  <input className="field-input" placeholder="pseudo#0000" value={coach.discord} onChange={e => setCoach({ ...coach, discord: e.target.value })} />
                </div>
              </div>
            ) : (
              <button type="button" onClick={() => setHasCoach(true)} className="btn-outline-gold" style={{ fontSize: '0.6rem', padding: '0.6rem 1.4rem' }}>
                + Ajouter un coach
              </button>
            )}
          </div>

          {/* ── Présence en ligne ── */}
          <div className="panel p-8">
            <p className="label-sc mb-2">Présence en ligne (optionnel)</p>
            <p className="field-hint mb-6">Chaîne Twitch, compte X ou tout lien utile pour juger la visibilité de l'équipe.</p>
            <input className="field-input" placeholder="https://twitch.tv/..." value={twitch} onChange={e => setTwitch(e.target.value)} />
          </div>

          {/* ── Justification ── */}
          <div className="panel p-8">
            <p className="label-sc mb-2">Pourquoi cette équipe ?</p>
            <p className="field-hint mb-6">
              La RFS valide elle-même les clubs participants : expliquez le projet, le palmarès, la régularité de l'effectif
              ou tout ce qui justifie une place en championnat.
            </p>
            <textarea className="field-textarea" required
              value={justification} onChange={e => setJustification(e.target.value)}
              placeholder="Présentez votre équipe, son histoire, ses résultats, son sérieux et ses ambitions pour la saison..." />
          </div>

          {/* ── Règlement + envoi ── */}
          <div className="panel p-8">
            <label className="flex items-start gap-3 cursor-pointer mb-8">
              <input type="checkbox" required checked={rulesAccepted} onChange={e => setRulesAccepted(e.target.checked)}
                style={{ marginTop: '0.3rem', accentColor: 'var(--bronze)' }} />
              <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.95rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                Je certifie l'exactitude des informations fournies et j'accepte que cette candidature soit examinée et
                acceptée ou refusée à la discrétion de la direction de la Rocket France Series.
              </span>
            </label>

            {submitError && (
              <p className="mb-6" style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.9rem', color: 'var(--terracotta)' }}>
                {submitError}
              </p>
            )}

            <button type="submit" disabled={submitting} className="btn-outline-gold w-full sm:w-auto"
              style={submitting ? { opacity: 0.6, cursor: 'wait' } : undefined}>
              {submitting ? 'Envoi en cours…' : 'Envoyer ma candidature'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
