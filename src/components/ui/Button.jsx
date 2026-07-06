import { Loader2 } from 'lucide-react'
import { cn } from '../../lib/cn'

const VARIANTS = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 shadow-[0_6px_16px_-9px_var(--primary-600)]',
  secondary: 'bg-surface text-text border border-border hover:bg-surface-2',
  soft: 'bg-primary-50 text-primary-700 hover:bg-primary-100 dark:bg-primary-900/30 dark:text-primary-200 dark:hover:bg-primary-900/50',
  subtle: 'bg-surface-3 text-body hover:bg-border',
  ghost: 'text-body hover:bg-surface-2',
  danger: 'bg-danger text-white hover:brightness-95',
}

const SIZES = {
  sm: 'h-8 gap-1.5 rounded-lg px-3 text-xs',
  md: 'h-9 gap-2 rounded-lg px-4 text-sm',
  lg: 'h-11 gap-2 rounded-xl px-5 text-sm',
  icon: 'h-9 w-9 rounded-lg',
  'icon-sm': 'h-8 w-8 rounded-lg',
}

/**
 * @param {{
 *   variant?: keyof typeof VARIANTS,
 *   size?: keyof typeof SIZES,
 *   iconLeft?: React.ComponentType<any>,
 *   iconRight?: React.ComponentType<any>,
 *   loading?: boolean,
 *   fullWidth?: boolean,
 *   as?: React.ElementType,
 *   className?: string,
 *   children?: React.ReactNode,
 * } & Record<string, any>} props
 */
export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft: IconLeft,
  iconRight: IconRight,
  loading = false,
  fullWidth = false,
  as: Comp = 'button',
  className,
  children,
  disabled,
  ...props
}) {
  const isIconOnly = size === 'icon' || size === 'icon-sm'
  return (
    <Comp
      className={cn(
        'inline-flex select-none items-center justify-center whitespace-nowrap font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-1 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50',
        VARIANTS[variant],
        SIZES[size],
        fullWidth && 'w-full',
        className,
      )}
      disabled={Comp === 'button' ? disabled || loading : undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <Loader2
          className={cn('h-4 w-4 animate-spin', !isIconOnly && 'mr-1')}
        />
      ) : (
        IconLeft && <IconLeft className="h-4 w-4 shrink-0" />
      )}
      {!isIconOnly && children}
      {IconRight && !loading && <IconRight className="h-4 w-4 shrink-0" />}
    </Comp>
  )
}
