import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Ramène la page en haut à chaque changement de route (hors ancres #...) */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}
