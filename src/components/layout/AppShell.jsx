import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { MobileDrawer } from './MobileDrawer'
import { Topbar } from './Topbar'
import { BreadcrumbContext } from '../../context/BreadcrumbContext'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { useDisclosure } from '../../hooks/useDisclosure'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { SIDEBAR_STORAGE_KEY } from '../../lib/constants'

/**
 * App layout: gray canvas → sidebar panel + main panel (topbar + scrollable
 * outlet). Sidebar collapses to an icon rail on desktop and becomes an
 * off-canvas drawer below `lg`. Provides breadcrumb state to descendants.
 */
export function AppShell() {
  const isDesktop = useIsDesktop()
  const [collapsed, setCollapsed] = useLocalStorage(SIDEBAR_STORAGE_KEY, false)
  const drawer = useDisclosure(false)
  const [items, setItems] = useState([])
  const { pathname } = useLocation()

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    drawer.close()
  }, [pathname, drawer])

  return (
    <BreadcrumbContext.Provider value={{ items, setItems }}>
      <div className="flex h-dvh gap-0 bg-bg lg:gap-4 lg:p-4">
        {isDesktop ? (
          <Sidebar
            collapsed={collapsed}
            onToggleCollapse={() => setCollapsed((v) => !v)}
            showCollapseButton
            className="shrink-0 rounded-2xl border shadow-card"
          />
        ) : (
          <MobileDrawer open={drawer.isOpen} onClose={drawer.close}>
            <Sidebar onItemClick={drawer.close} />
          </MobileDrawer>
        )}

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-surface lg:rounded-2xl lg:border lg:border-border lg:shadow-card">
          <Topbar showMenuButton={!isDesktop} onOpenMenu={drawer.open} />
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </BreadcrumbContext.Provider>
  )
}
