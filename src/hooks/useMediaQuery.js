import { useSyncExternalStore } from 'react'
import { BREAKPOINTS } from '../lib/constants'

/**
 * Subscribe to a media query. Returns whether it currently matches.
 * Uses useSyncExternalStore so there's no setState-in-effect churn.
 * @param {string} query e.g. '(min-width: 1024px)'
 */
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/** True on desktop (≥ lg / 1024px). */
export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`)
}
