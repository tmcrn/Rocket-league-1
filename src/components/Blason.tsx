/* ─── ORNEMENT VOLUTE (filet décoratif style club 1920) ─────── */
export function ScrollOrnament({ color = '#A6813F', width = 280 }: { color?: string; width?: number }) {
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
export function Blason({ size = 64 }: { size?: number }) {
  const s = size
  const h = Math.round(s * 1.2)
  return (
    <svg width={s} height={h} viewBox="0 0 64 77" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Emblème RFS"
      style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.45))' }}>
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
export function TeamBadge({ letter }: { letter: string }) {
  return (
    <svg width="48" height="58" viewBox="0 0 48 58" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.4))' }}>
      <path d="M24 1.5L46.5 11V34C46.5 46 36 54 24 57C12 54 1.5 46 1.5 34V11L24 1.5Z" fill="#F8F4EC" stroke="#A6813F" strokeWidth="1"/>
      <text x="24" y="36" textAnchor="middle"
        fontFamily="'Bodoni Moda', serif" fontSize="20" fontWeight="600"
        fill="#1C1712">{letter}</text>
    </svg>
  )
}
