import { cn } from '../../lib/cn'

const COLORS = {
  primary: 'bg-primary-600',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

const SIZES = { sm: 'h-1.5', md: 'h-2', lg: 'h-2.5' }

/**
 * Linear determinate progress bar.
 * @param {{
 *   value?: number, max?: number,
 *   color?: keyof typeof COLORS, size?: keyof typeof SIZES,
 *   trackClassName?: string, className?: string,
 * }} props
 */
export function ProgressBar({
  value = 0,
  max = 100,
  color = 'primary',
  size = 'md',
  trackClassName,
  className,
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        'w-full overflow-hidden rounded-full bg-surface-3',
        SIZES[size],
        trackClassName,
        className,
      )}
    >
      <div
        className={cn('h-full rounded-full transition-[width]', COLORS[color])}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
