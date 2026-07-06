import { cn } from '../../lib/cn'

/**
 * Surface container with a border. Set `padded` for default padding.
 * @param {{ padded?: boolean, className?: string, children?: React.ReactNode }
 *   & Record<string, any>} props
 */
export function Card({ padded = false, className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface',
        padded && 'p-5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
