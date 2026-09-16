import type { ReactNode } from 'react'
import { ScrollOrnament } from '../components/Blason'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="panel p-8">
      <p className="label-sc mb-5">{title}</p>
      <div style={{ fontFamily: "'EB Garamond', serif", fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
        {children}
      </div>
    </div>
  )
}

export default function Confidentialite() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--ivory)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <ScrollOrnament color="#C9A868" width={200} />
        </div>
        <div className="text-center mb-14">
          <p className="label-sc mb-4">Vos données</p>
          <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink)' }}>
            Politique de confidentialité
          </h1>
        </div>

        <div className="flex flex-col gap-10">
          <Section title="Qui traite vos données">
            <p>
              Le site Rocket France Series (RFS) est édité par Pantin, en tant que personne physique. C'est ce
              responsable de traitement qui reçoit et conserve les informations transmises via le formulaire
              d'inscription des équipes.
            </p>
          </Section>

          <Section title="Données collectées">
            <p>Lors d'une inscription d'équipe, nous collectons :</p>
            <ul className="mt-3 flex flex-col gap-1.5" style={{ paddingLeft: '1.2rem', listStyle: 'disc' }}>
              <li>le nom et le tag de l'équipe, la ville représentée et le logo transmis ;</li>
              <li>l'identité, l'email et le Discord du capitaine ;</li>
              <li>pour chaque joueur (et le coach le cas échéant) : pseudo, identifiant de plateforme et Discord ;</li>
              <li>le texte de justification rédigé librement, ainsi que d'éventuels liens (Twitch, réseaux) ;</li>
              <li>tout élément que vous choisiriez de nous transmettre par email au titre du suivi de candidature.</li>
            </ul>
          </Section>

          <Section title="Finalité et base légale">
            <p>
              Ces données sont utilisées exclusivement pour étudier et suivre les candidatures des équipes,
              organiser la compétition (calendrier, classement, contact des capitaines) et communiquer sur la ligue.
              Le traitement repose sur votre consentement, donné au moment de l'envoi du formulaire.
            </p>
          </Section>

          <Section title="Conservation">
            <p>
              Les données des équipes retenues sont conservées pour la durée de leur participation à la RFS, puis
              archivées le temps nécessaire à l'historique du championnat. Les candidatures non retenues sont
              conservées au maximum 12 mois, sauf nouvelle demande de votre part.
            </p>
          </Section>

          <Section title="Partage des données">
            <p>
              Vos données ne sont ni vendues, ni cédées à des tiers à des fins commerciales. Certaines informations
              publiques d'équipe (nom, tag, logo, ville, résultats) sont naturellement affichées sur le site une
              fois l'équipe engagée en championnat.
            </p>
          </Section>

          <Section title="Cookies et mesure d'audience">
            <p>
              Ce site n'utilise pas de cookie publicitaire ni de traceur tiers. Aucune mesure d'audience n'est
              activée à ce jour ; si cela évoluait, cette page serait mise à jour en conséquence.
            </p>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et
              Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos
              données, ainsi que du droit de retirer votre consentement à tout moment.
            </p>
            <p className="mt-3">
              Pour exercer ces droits, écrivez à{' '}
              <a href="mailto:contact@rocketfranceseries.fr" style={{ color: 'var(--bronze)' }}>contact@rocketfranceseries.fr</a>.
              Vous disposez également du droit d'introduire une réclamation auprès de la CNIL.
            </p>
          </Section>
        </div>
      </div>
    </section>
  )
}
