import { Minus, Plus } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Compact ± number input (e.g. "Auto handle leads after N follow-ups").
 * @param {{
 *   value?: number, onChange?: (n: number) => void,
 *   min?: number, max?: number, step?: number, className?: string,
 * }} props
 */
export function NumberStepper({
  value = 0,
  onChange,
  min = 0,
  max = 99,
  step = 1,
  className,
}) {
  const set = (n) => onChange?.(Math.max(min, Math.min(max, n)))
  return (
    <div
      className={cn(
        'inline-flex h-8 items-center rounded-lg border border-border bg-surface',
        className,
      )}
    >
      <button
        type="button"
        aria-label="Decrease"
        onClick={() => set(value - step)}
        disabled={value <= min}
        className="flex h-full w-8 items-center justify-center rounded-l-lg text-muted transition hover:bg-surface-2 hover:text-text disabled:opacity-40"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-8 text-center text-sm font-medium tabular-nums text-text">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase"
        onClick={() => set(value + step)}
        disabled={value >= max}
        className="flex h-full w-8 items-center justify-center rounded-r-lg text-muted transition hover:bg-surface-2 hover:text-text disabled:opacity-40"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
