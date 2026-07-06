import { cn } from '../../lib/cn'

/**
 * Text input with optional label, leading icon, trailing slot and error.
 * @param {{
 *   label?: string,
 *   icon?: React.ComponentType<any>,
 *   trailing?: React.ReactNode,
 *   error?: string,
 *   hint?: string,
 *   containerClassName?: string,
 *   className?: string,
 *   ref?: React.Ref<HTMLInputElement>,
 * } & Record<string, any>} props
 */
export function Input({
  label,
  icon: Icon,
  trailing,
  error,
  hint,
  id,
  containerClassName,
  className,
  ref,
  ...props
}) {
  const inputId = id || props.name
  return (
    <div className={cn('w-full', containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-body"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'h-10 w-full rounded-lg border bg-surface text-sm text-text placeholder:text-subtle transition focus:outline-none focus:ring-2 focus:ring-[var(--ring)]',
            Icon ? 'pl-9' : 'pl-3',
            trailing ? 'pr-10' : 'pr-3',
            error
              ? 'border-danger focus:ring-danger/30'
              : 'border-border focus:border-primary-500',
            className,
          )}
          aria-invalid={error ? true : undefined}
          {...props}
        />
        {trailing && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {trailing}
          </div>
        )}
      </div>
      {error ? (
        <p className="mt-1 text-xs text-danger">{error}</p>
      ) : hint ? (
        <p className="mt-1 text-xs text-muted">{hint}</p>
      ) : null}
    </div>
  )
}
