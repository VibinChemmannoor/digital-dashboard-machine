import { createContext } from 'react'

/**
 * @typedef {{ label: string, to?: string }} Crumb
 * Topbar breadcrumb state. Pages publish their trail via useSetBreadcrumb().
 */
export const BreadcrumbContext = createContext({
  items: /** @type {Crumb[]} */ ([]),
  setItems: (/** @type {Crumb[]} */ _items) => {},
})
