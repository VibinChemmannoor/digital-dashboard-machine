import { cn } from '../../lib/cn'

/**
 * @param {{ label?: string, error?: string, className?: string,
 *   containerClassName?: string, ref?: React.Ref<HTMLTextAreaElement> }
 *   & Record<string, any>} props
 */
export function Textarea({
  label,
  error,
  id,
  className,
  containerClassName,
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
      <textarea
        id={inputId}
        ref={ref}
        className={cn(
          'w-full rounded-lg border bg-surface px-3 py-2 text-sm text-text placeholder:text-subtle transition focus:outline-none focus:ring-2 focus:ring-[var(--ring)]',
          error
            ? 'border-danger focus:ring-danger/30'
            : 'border-border focus:border-primary-500',
          className,
        )}
        aria-invalid={error ? true : undefined}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  )
}
