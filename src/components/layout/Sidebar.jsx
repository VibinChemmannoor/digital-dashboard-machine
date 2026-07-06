import { PanelLeft } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Brandmark } from './Brandmark'
import { SidebarNav } from './SidebarNav'
import { UserCard } from './UserCard'
import { ThemeToggle } from './ThemeToggle'

/**
 * The full sidebar contents. Used both as the desktop rail and inside the
 * mobile drawer.
 * @param {{
 *   collapsed?: boolean,
 *   onToggleCollapse?: () => void,
 *   showCollapseButton?: boolean,
 *   onItemClick?: () => void,
 *   className?: string,
 * }} props
 */
export function Sidebar({
  collapsed = false,
  onToggleCollapse,
  showCollapseButton = false,
  onItemClick,
  className,
}) {
  return (
    <aside
      className={cn(
        'flex h-full flex-col border-border bg-surface',
        collapsed ? 'w-[76px]' : 'w-[264px]',
        className,
      )}
    >
      {/* Brand + collapse toggle */}
      <div
        className={cn(
          'flex items-center gap-2 px-4 pb-2 pt-5',
          collapsed ? 'justify-center' : 'justify-between',
        )}
      >
        <Brandmark showText={!collapsed} />
        {showCollapseButton && !collapsed && (
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label="Collapse sidebar"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-text"
          >
            <PanelLeft className="h-[18px] w-[18px]" />
          </button>
        )}
      </div>

      {showCollapseButton && collapsed && (
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label="Expand sidebar"
          className="mx-auto mb-1 mt-1 flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-text"
        >
          <PanelLeft className="h-[18px] w-[18px] rotate-180" />
        </button>
      )}

      {/* Nav */}
      <div className={cn('flex-1 overflow-y-auto px-3 py-3')}>
        <SidebarNav collapsed={collapsed} onItemClick={onItemClick} />
      </div>

      {/* Footer: user + theme */}
      <div className="flex flex-col gap-3 px-3 pb-4 pt-2">
        <UserCard collapsed={collapsed} />
        <ThemeToggle collapsed={collapsed} />
      </div>
    </aside>
  )
}
