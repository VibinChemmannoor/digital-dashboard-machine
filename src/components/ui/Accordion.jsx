import { useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Collapsible section (e.g. "Choose Import Method"). Uncontrolled by default;
 * pass `open` + `onToggle` to control it.
 * @param {{
 *   title: React.ReactNode,
 *   rightSlot?: React.ReactNode,
 *   leftSlot?: React.ReactNode,
 *   defaultOpen?: boolean,
 *   open?: boolean,
 *   onToggle?: (open: boolean) => void,
 *   className?: string,
 *   bodyClassName?: string,
 *   children?: React.ReactNode,
 * }} props
 */
export function Accordion({
  title,
  rightSlot,
  leftSlot,
  defaultOpen = true,
  open,
  onToggle,
  className,
  bodyClassName,
  children,
}) {
  const [internal, setInternal] = useState(defaultOpen)
  const isOpen = open ?? internal

  const handle = () => {
    onToggle?.(!isOpen)
    if (open === undefined) setInternal((v) => !v)
  }

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-surface',
        className,
      )}
    >
      <button
        type="button"
        onClick={handle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-surface-2"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          {leftSlot}
          <span className="truncate text-sm font-semibold text-text">
            {title}
          </span>
          {rightSlot}
        </span>
        <ChevronUp
          className={cn(
            'h-4 w-4 shrink-0 text-muted transition-transform',
            !isOpen && 'rotate-180',
          )}
        />
      </button>
      {isOpen && (
        <div className={cn('border-t border-border p-4', bodyClassName)}>
          {children}
        </div>
      )}
    </div>
  )
}
