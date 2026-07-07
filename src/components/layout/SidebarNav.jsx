import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { NAV_ITEMS } from '../../lib/constants'

/**
 * Primary sidebar navigation.
 * @param {{ collapsed?: boolean, onItemClick?: () => void }} props
 */
export function SidebarNav({ collapsed = false, onItemClick }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map(({ key, label, icon: Icon, to }) => (
        <NavLink
          key={key}
          to={to}
          onClick={onItemClick}
          title={collapsed ? label : undefined}
          className={({ isActive }) =>
            cn(
              'group flex items-center rounded-lg text-sm font-medium transition',
              collapsed ? 'h-11 w-11 justify-center' : 'gap-3 px-3 py-2.5',
              isActive
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-[0_6px_16px_-6px_var(--primary-600)]'
                : 'text-body hover:bg-surface-2',
            )
          }
        >
          <Icon className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span className="truncate">{label}</span>}
        </NavLink>
      ))}
    </nav>
  )
}
