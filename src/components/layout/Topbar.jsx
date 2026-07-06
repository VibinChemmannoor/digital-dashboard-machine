import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, House, Menu } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Avatar } from '../ui/Avatar'
import { useBreadcrumb } from '../../hooks/useBreadcrumb'
import { currentUser } from '../../data/mock/user'

/**
 * Persistent top bar: breadcrumb (left) + user chip (right). On mobile it also
 * hosts the hamburger that opens the sidebar drawer.
 * @param {{ showMenuButton?: boolean, onOpenMenu?: () => void }} props
 */
export function Topbar({ showMenuButton = false, onOpenMenu }) {
  const { items } = useBreadcrumb()

  return (
    <header className="flex h-[60px] shrink-0 items-center justify-between gap-3 border-b border-border px-4 lg:px-6">
      <div className="flex min-w-0 items-center gap-2.5">
        {showMenuButton && (
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-text lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        <nav
          aria-label="Breadcrumb"
          className="flex min-w-0 items-center gap-1.5 text-sm"
        >
          <Link
            to="/campaigns"
            aria-label="Home"
            className="flex items-center text-muted transition hover:text-text"
          >
            <House className="h-4 w-4" />
          </Link>
          {items.map((crumb, i) => {
            const isLast = i === items.length - 1
            return (
              <Fragment key={`${crumb.label}-${i}`}>
                <ChevronRight className="h-4 w-4 shrink-0 text-subtle" />
                {crumb.to && !isLast ? (
                  <Link
                    to={crumb.to}
                    className="truncate font-medium text-primary-600 transition hover:text-primary-700"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      'truncate',
                      isLast ? 'font-semibold text-text' : 'text-muted',
                    )}
                  >
                    {crumb.label}
                  </span>
                )}
              </Fragment>
            )
          })}
        </nav>
      </div>

      <div className="flex shrink-0 items-center gap-2.5">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold leading-tight text-text">
            {currentUser.name}
          </p>
          <p className="text-xs leading-tight text-muted">{currentUser.role}</p>
        </div>
        <Avatar
          src={currentUser.avatar}
          name={currentUser.name}
          size="md"
          online
        />
      </div>
    </header>
  )
}
