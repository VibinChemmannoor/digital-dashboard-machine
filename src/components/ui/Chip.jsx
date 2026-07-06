import { X } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Neutral bordered token (e.g. "Invites: 40 / day", filter tags).
 * @param {{ onRemove?: () => void, icon?: React.ComponentType<any>,
 *   className?: string, children?: React.ReactNode }} props
 */
export function Chip({ onRemove, icon: Icon, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-body',
        className,
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5 text-muted" />}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="-mr-0.5 rounded text-subtle transition hover:text-danger"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  )
}
