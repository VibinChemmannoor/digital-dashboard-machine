import { cn } from '../../lib/cn'

const SIZES = {
  sm: { track: 'h-5 w-9', knob: 'h-4 w-4', on: 'translate-x-4' },
  md: { track: 'h-6 w-11', knob: 'h-5 w-5', on: 'translate-x-5' },
}

/**
 * On/off switch (ARIA switch role).
 * @param {{
 *   checked?: boolean,
 *   onChange?: (checked: boolean) => void,
 *   disabled?: boolean,
 *   size?: keyof typeof SIZES,
 *   label?: string,
 *   className?: string,
 * }} props
 */
export function Toggle({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  className,
}) {
  const s = SIZES[size]
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        'relative inline-flex shrink-0 items-center rounded-full p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-1 focus-visible:ring-offset-surface disabled:opacity-50',
        s.track,
        checked ? 'bg-primary-600' : 'bg-border-strong',
        className,
      )}
    >
      <span
        className={cn(
          'inline-block transform rounded-full bg-white shadow-sm transition-transform',
          s.knob,
          checked ? s.on : 'translate-x-0',
        )}
      />
    </button>
  )
}
