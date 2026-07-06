import { cn } from '../../lib/cn'

const SIDES = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-1.5',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-1.5',
  left: 'right-full top-1/2 -translate-y-1/2 mr-1.5',
  right: 'left-full top-1/2 -translate-y-1/2 ml-1.5',
}

/**
 * Lightweight CSS hover/focus tooltip.
 * @param {{
 *   content: React.ReactNode,
 *   side?: keyof typeof SIDES,
 *   className?: string,
 *   children: React.ReactNode,
 * }} props
 */
export function Tooltip({ content, side = 'top', className, children }) {
  if (!content) return children
  return (
    <span className={cn('group/tt relative inline-flex', className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute z-40 hidden whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white shadow-pop group-hover/tt:block group-focus-within/tt:block dark:bg-slate-700',
          SIDES[side],
        )}
      >
        {content}
      </span>
    </span>
  )
}
