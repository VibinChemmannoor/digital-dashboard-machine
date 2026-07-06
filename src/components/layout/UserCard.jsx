import { LogOut } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Avatar } from '../ui/Avatar'
import { currentUser } from '../../data/mock/user'

/**
 * Signed-in user card pinned to the sidebar footer.
 * @param {{ collapsed?: boolean }} props
 */
export function UserCard({ collapsed = false }) {
  const user = currentUser

  if (collapsed) {
    return (
      <div className="flex justify-center">
        <Avatar src={user.avatar} name={user.name} size="md" online />
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-surface-2 p-3">
      <div className="flex items-center gap-2.5">
        <Avatar src={user.avatar} name={user.name} size="md" online />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-text">
            {user.name}
          </p>
          <p className="truncate text-xs text-muted">{user.role}</p>
        </div>
        <button
          type="button"
          aria-label="Log out"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-surface-3 hover:text-danger"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 border-t border-border pt-2.5">
        <p className="text-[11px] font-medium uppercase tracking-wide text-subtle">
          Email
        </p>
        <p className={cn('truncate text-sm text-body')}>{user.email}</p>
      </div>
    </div>
  )
}
