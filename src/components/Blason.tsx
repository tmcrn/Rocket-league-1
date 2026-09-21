/* ─── ORNEMENT VOLUTE (filet décoratif style club 1920) ─────── */
export function ScrollOrnament({ color = '#A6813F', width = 280 }: { color?: string; width?: number }) {
  return (
    <svg width={width} height={Math.round(width * 0.22)} viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ display: 'block', margin: '0 auto' }}>
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
// Écusson à épaules droites et pointe basse, motif d'aile gravée en filigrane
// bronze — inspiré d'un blason héraldique classique (griffon ailé stylisé).
export function Blason({ size = 64 }: { size?: number }) {
  const s = size
  const h = Math.round(s * 1.233)
  return (
    <svg width={s} height={h} viewBox="0 0 120 148" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Emblème RFS"
      style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.45))' }}>
      {/* Contour écusson */}
      <path d="M14,10 L106,10 L106,84 C106,104 96,120 82,131 L60,140 L38,131 C24,120 14,104 14,84 Z"
        fill="#F8F4EC" stroke="#A6813F" strokeWidth="2"/>
      {/* Fond intérieur ivoire légèrement ombré */}
      <path d="M20,16 L100,16 L100,82 C100,99 91,113 79,123 L60,131 L41,123 C29,113 20,99 20,82 Z"
        fill="#F1EBDD"/>

      {/* Aile gauche — trois plumes gravées en éventail */}
      <path d="M58,78 C46,68 36,52 34,34 C33,26 37,20 42,22 C40,32 42,46 48,58 C52,66 56,72 60,78 Z" fill="#1C1712"/>
      <path d="M56,82 C42,74 30,60 26,42 C24,34 28,27 34,29 C31,38 33,52 40,64 C45,72 50,78 56,82 Z" fill="#A6813F" opacity="0.85"/>
      <path d="M54,86 C38,80 24,68 18,50 C16,42 20,35 26,37 C23,46 26,60 34,71 C40,79 47,84 54,86 Z" fill="#A6813F" opacity="0.55"/>

      {/* Aile droite — miroir */}
      <path d="M62,78 C74,68 84,52 86,34 C87,26 83,20 78,22 C80,32 78,46 72,58 C68,66 64,72 60,78 Z" fill="#1C1712"/>
      <path d="M64,82 C78,74 90,60 94,42 C96,34 92,27 86,29 C89,38 87,52 80,64 C75,72 70,78 64,82 Z" fill="#A6813F" opacity="0.85"/>
      <path d="M66,86 C82,80 96,68 102,50 C104,42 100,35 94,37 C97,46 94,60 86,71 C80,79 73,84 66,86 Z" fill="#A6813F" opacity="0.55"/>

      {/* Corps central / fusée */}
      <path d="M60,38 L55,70 L60,102 L65,70 Z" fill="#1C1712"/>

      {/* Filet tricolore discret en bas du blason */}
      <rect x="45" y="106" width="10" height="3" fill="#2E4374"/>
      <rect x="55" y="106" width="10" height="3" fill="#F8F4EC"/>
      <rect x="65" y="106" width="10" height="3" fill="#B5623C"/>

      {/* Texte RFS */}
      <text x="60" y="124" textAnchor="middle"
        fontFamily="'Cormorant SC', serif" fontSize="13"
        fill="#A6813F" letterSpacing="5">RFS</text>
    </svg>
  )
}

/* ─── BLASON ÉQUIPE (petit) ────────────────────────────────── */
// Même silhouette d'écusson que le blason principal, sans le motif d'aile
// (illisible en petite taille) — garde une identité visuelle cohérente.
export function TeamBadge({ letter }: { letter: string }) {
  return (
    <svg width="48" height="59" viewBox="0 0 90 111" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.4))' }}>
      <path d="M10.5,7.5 L79.5,7.5 L79.5,63 C79.5,78 72,90 61.5,98.25 L45,105 L28.5,98.25 C18,90 10.5,78 10.5,63 Z"
        fill="#F8F4EC" stroke="#A6813F" strokeWidth="1.5"/>
      <text x="45" y="68" textAnchor="middle"
        fontFamily="'Bodoni Moda', serif" fontSize="36" fontWeight="600"
        fill="#1C1712">{letter}</text>
    </svg>
  )
}
