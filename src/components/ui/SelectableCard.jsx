import { Check } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Badge } from './Badge'

/**
 * Selectable option card with a checkbox or radio indicator — powers the
 * import-method cards and the workflow-mode cards.
 * @param {{
 *   selected?: boolean,
 *   onSelect?: () => void,
 *   control?: 'checkbox' | 'radio',
 *   icon?: React.ComponentType<any>,
 *   title: React.ReactNode,
 *   description?: React.ReactNode,
 *   badge?: string,
 *   disabled?: boolean,
 *   className?: string,
 *   children?: React.ReactNode,
 * }} props
 */
export function SelectableCard({
  selected = false,
  onSelect,
  control = 'checkbox',
  icon: Icon,
  title,
  description,
  badge,
  disabled = false,
  className,
  children,
}) {
  return (
    <button
      type="button"
      role={control}
      aria-checked={selected}
      disabled={disabled}
      onClick={onSelect}
      className={cn(
        'group relative flex w-full flex-col rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]',
        selected
          ? 'border-primary-500 bg-primary-50/60 dark:bg-primary-900/20'
          : 'border-border bg-surface hover:border-border-strong hover:bg-surface-2',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      {/* Indicator */}
      <span
        className={cn(
          'absolute right-3 top-3 flex h-[18px] w-[18px] items-center justify-center border transition',
          control === 'radio' ? 'rounded-full' : 'rounded-[5px]',
          selected
            ? 'border-primary-600 bg-primary-600 text-white'
            : 'border-border-strong bg-surface',
        )}
      >
        {selected &&
          (control === 'radio' ? (
            <span className="h-2 w-2 rounded-full bg-white" />
          ) : (
            <Check className="h-3 w-3" strokeWidth={3} />
          ))}
      </span>

      {Icon && (
        <span
          className={cn(
            'mb-3 flex h-9 w-9 items-center justify-center rounded-lg transition',
            selected
              ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200'
              : 'bg-surface-3 text-muted',
          )}
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
      )}

      <span className="flex items-center gap-2 pr-6">
        <span className="text-sm font-semibold text-text">{title}</span>
        {badge && (
          <Badge variant="success" className="px-2 py-0.5">
            {badge}
          </Badge>
        )}
      </span>
      {description && (
        <span className="mt-1 text-xs leading-relaxed text-muted">
          {description}
        </span>
      )}
      {children}
    </button>
  )
}
