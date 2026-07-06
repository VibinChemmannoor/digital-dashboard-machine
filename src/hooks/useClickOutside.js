import { useEffect } from 'react'

/**
 * Call `handler` when a pointer/touch event lands outside `ref`.
 * @param {import('react').RefObject<HTMLElement>} ref
 * @param {(e: Event) => void} handler
 * @param {boolean} [active=true]
 */
export function useClickOutside(ref, handler, active = true) {
  useEffect(() => {
    if (!active) return
    const listener = (e) => {
      const el = ref.current
      if (!el || el.contains(e.target)) return
      handler(e)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, active])
}
