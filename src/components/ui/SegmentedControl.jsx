import { cn } from '../../lib/cn'

/**
 * Pill-style segmented control / sub-tabs (e.g. LinkedIn Profile | Email
 * Accounts, or LinkedIn | Email chart toggles).
 * @param {{
 *   items: { value: string, label: string, icon?: React.ComponentType<any> }[],
 *   value: string,
 *   onChange: (value: string) => void,
 *   size?: 'sm' | 'md',
 *   className?: string,
 * }} props
 */
export function SegmentedControl({
  items,
  value,
  onChange,
  size = 'md',
  className,
}) {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex items-center gap-1 rounded-lg border border-border bg-surface-2 p-1',
        className,
      )}
    >
      {items.map(({ value: v, label, icon: Icon }) => {
        const active = v === value
        return (
          <button
            key={v}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(v)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md font-medium transition',
              size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm',
              active
                ? 'bg-surface text-primary-700 shadow-card dark:text-primary-200'
                : 'text-muted hover:text-body',
            )}
          >
            {Icon && <Icon className="h-4 w-4" />}
            {label}
          </button>
        )
      })}
    </div>
  )
}
