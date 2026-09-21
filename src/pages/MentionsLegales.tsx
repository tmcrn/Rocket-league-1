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

export default function MentionsLegales() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--ivory)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <ScrollOrnament color="#C9A868" width={200} />
        </div>
        <div className="text-center mb-14">
          <p className="label-sc mb-4">Informations légales</p>
          <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink)' }}>
            Mentions légales
          </h1>
        </div>

        <div className="flex flex-col gap-10">
          <Section title="Éditeur du site">
            <p>
              Le site Rocket France Series (RFS) est édité, à titre non professionnel, par une personne physique
              publiant sous le pseudonyme <strong style={{ color: 'var(--ink)' }}>Pantin</strong>.
            </p>
            <p className="mt-3">
              Conformément à l'article 6-III de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
              numérique, l'identité complète et l'adresse de l'éditeur sont conservées et peuvent être communiquées,
              sur demande, à toute autorité judiciaire compétente.
            </p>
            <p className="mt-3">
              Contact : <a href="mailto:contact@rocketfranceseries.fr" style={{ color: 'var(--bronze)' }}>contact@rocketfranceseries.fr</a>
            </p>
          </Section>

          <Section title="Directeur de la publication">
            <p>Pantin, responsable de la ligue Rocket France Series.</p>
          </Section>

          <Section title="Hébergement">
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.<br/>
              Site de l'hébergeur : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bronze)' }}>vercel.com</a>
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L'ensemble des éléments du site (textes, mises en page, identité visuelle, écussons et illustrations
              créées pour la RFS) est protégé par le droit de la propriété intellectuelle. Toute reproduction ou
              réutilisation sans autorisation préalable est interdite.
            </p>
            <p className="mt-3">
              L'image utilisée en page d'accueil provient d'un contenu tiers partagé sur Reddit ; elle est créditée
              directement sur la page et reste la propriété de son auteur d'origine.
            </p>
          </Section>

          <Section title="Responsabilité">
            <p>
              Les informations diffusées sur ce site (calendrier, classement, résultats) sont fournies à titre
              indicatif et peuvent évoluer. L'éditeur ne saurait être tenu responsable des erreurs ou omissions,
              ni d'une indisponibilité temporaire du site.
            </p>
          </Section>

          <Section title="Données à caractère personnel">
            <p>
              Les données collectées via le formulaire d'inscription des équipes sont traitées conformément à notre{' '}
              <a href="/confidentialite" style={{ color: 'var(--bronze)' }}>politique de confidentialité</a>.
            </p>
          </Section>
        </div>
      </div>
    </section>
  )
}
