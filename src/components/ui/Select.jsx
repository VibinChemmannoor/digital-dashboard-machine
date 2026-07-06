import { useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, Search } from 'lucide-react'
import { cn } from '../../lib/cn'
import { useDisclosure } from '../../hooks/useDisclosure'
import { useClickOutside } from '../../hooks/useClickOutside'

/**
 * Custom single-select dropdown with an optional search filter.
 * @param {{
 *   options: { value: string, label: string }[],
 *   value?: string,
 *   onChange?: (value: string) => void,
 *   placeholder?: string,
 *   searchable?: boolean,
 *   size?: 'sm' | 'md',
 *   disabled?: boolean,
 *   className?: string,
 *   buttonClassName?: string,
 * }} props
 */
export function Select({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  searchable = false,
  size = 'md',
  disabled = false,
  className,
  buttonClassName,
}) {
  const { isOpen, toggle, close } = useDisclosure(false)
  const [query, setQuery] = useState('')
  const ref = useRef(null)
  useClickOutside(ref, close, isOpen)

  const selected = options.find((o) => o.value === value)
  const filtered = useMemo(() => {
    if (!searchable || !query) return options
    const q = query.toLowerCase()
    return options.filter((o) => o.label.toLowerCase().includes(q))
  }, [options, query, searchable])

  const pick = (v) => {
    onChange?.(v)
    setQuery('')
    close()
  }

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          'flex w-full items-center justify-between gap-2 rounded-lg border border-border bg-surface text-left transition hover:border-border-strong focus:outline-none focus:ring-2 focus:ring-[var(--ring)] disabled:opacity-50',
          size === 'sm' ? 'h-8 px-2.5 text-xs' : 'h-10 px-3 text-sm',
          buttonClassName,
        )}
      >
        <span
          className={cn('truncate', selected ? 'text-text' : 'text-subtle')}
        >
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-muted transition-transform',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-30 mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-surface shadow-pop">
          {searchable && (
            <div className="border-b border-border p-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                  className="h-8 w-full rounded-md border border-border bg-surface pl-8 pr-2 text-sm text-text placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                />
              </div>
            </div>
          )}
          <ul role="listbox" className="max-h-60 overflow-y-auto p-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-subtle">No results</li>
            ) : (
              filtered.map((o) => {
                const active = o.value === value
                return (
                  <li key={o.value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => pick(o.value)}
                      className={cn(
                        'flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-left text-sm transition',
                        active
                          ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-200'
                          : 'text-body hover:bg-surface-2',
                      )}
                    >
                      <span className="truncate">{o.label}</span>
                      {active && <Check className="h-4 w-4 shrink-0" />}
                    </button>
                  </li>
                )
              })
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
