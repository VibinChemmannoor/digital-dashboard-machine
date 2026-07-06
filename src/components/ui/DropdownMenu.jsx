import { useRef } from 'react'
import { MoreVertical } from 'lucide-react'
import { cn } from '../../lib/cn'
import { useDisclosure } from '../../hooks/useDisclosure'
import { useClickOutside } from '../../hooks/useClickOutside'

/**
 * Dropdown menu anchored to a trigger. Provide `items` for a simple menu, or
 * a custom `trigger`. Defaults to a kebab (⋮) trigger.
 * @param {{
 *   items?: { label: string, icon?: React.ComponentType<any>,
 *     onClick?: () => void, danger?: boolean }[],
 *   trigger?: React.ReactNode,
 *   align?: 'left' | 'right',
 *   className?: string,
 *   menuClassName?: string,
 * }} props
 */
export function DropdownMenu({
  items = [],
  trigger,
  align = 'right',
  className,
  menuClassName,
}) {
  const { isOpen, toggle, close } = useDisclosure(false)
  const ref = useRef(null)
  useClickOutside(ref, close, isOpen)

  return (
    <div ref={ref} className={cn('relative inline-flex', className)}>
      <span onClick={toggle}>
        {trigger ?? (
          <button
            type="button"
            aria-label="Open menu"
            aria-haspopup="menu"
            aria-expanded={isOpen}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-text"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        )}
      </span>

      {isOpen && (
        <div
          role="menu"
          className={cn(
            'absolute top-full z-30 mt-1 min-w-[184px] overflow-hidden rounded-xl border border-border bg-surface p-1 shadow-pop',
            align === 'right' ? 'right-0' : 'left-0',
            menuClassName,
          )}
        >
          {items.map(({ label, icon: Icon, onClick, danger }, i) => (
            <button
              key={i}
              type="button"
              role="menuitem"
              onClick={() => {
                onClick?.()
                close()
              }}
              className={cn(
                'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition',
                danger
                  ? 'text-danger hover:bg-danger-bg'
                  : 'text-body hover:bg-surface-2',
              )}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0" />}
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
