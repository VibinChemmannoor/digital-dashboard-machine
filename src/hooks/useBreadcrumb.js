import { useContext, useEffect } from 'react'
import { BreadcrumbContext } from '../context/BreadcrumbContext'

/** Read the current breadcrumb trail (used by the Topbar). */
export function useBreadcrumb() {
  return useContext(BreadcrumbContext)
}

/**
 * Publish this page's breadcrumb trail to the persistent Topbar.
 * Clears on unmount so stale crumbs never linger.
 * @param {import('../context/BreadcrumbContext').Crumb[]} items
 */
export function useSetBreadcrumb(items) {
  const { setItems } = useContext(BreadcrumbContext)
  const serialized = JSON.stringify(items)

  useEffect(() => {
    setItems(items)
    return () => setItems([])
    // items is captured via its serialized form to keep the effect stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serialized, setItems])
}
