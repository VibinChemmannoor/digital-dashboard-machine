import { cn } from '../../lib/cn'

/**
 * Reusable "title + subtitle + actions" band for list/content pages.
 * @param {{ title: string, subtitle?: string, actions?: React.ReactNode,
 *   className?: string }} props
 */
export function PageHeader({ title, subtitle, actions, className }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
    >
      <div className="min-w-0">
        <h1 className="text-lg font-semibold text-text">{title}</h1>
        {subtitle && <p className="mt-0.5 text-sm text-muted">{subtitle}</p>}
      </div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </div>
  )
}
