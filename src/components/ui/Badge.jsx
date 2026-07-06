import { cn } from '../../lib/cn'

const VARIANTS = {
  neutral: 'bg-surface-3 text-body',
  primary:
    'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-200',
  success: 'bg-success-bg text-success',
  warning: 'bg-warning-bg text-warning',
  danger: 'bg-danger-bg text-danger',
  info: 'bg-info-bg text-info',
}

/**
 * Status pill. Set `dot` for a leading status dot.
 * @param {{ variant?: keyof typeof VARIANTS, dot?: boolean,
 *   className?: string, children?: React.ReactNode }} props
 */
export function Badge({
  variant = 'neutral',
  dot = false,
  className,
  children,
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
        VARIANTS[variant],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}
