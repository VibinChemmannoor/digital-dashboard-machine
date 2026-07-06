import { Check, Minus } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Accessible custom checkbox. Wraps a visually-hidden native input so it stays
 * keyboard- and form-friendly.
 * @param {{
 *   checked?: boolean,
 *   indeterminate?: boolean,
 *   onChange?: (checked: boolean) => void,
 *   label?: React.ReactNode,
 *   disabled?: boolean,
 *   className?: string,
 * } & Record<string, any>} props
 */
export function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  disabled = false,
  className,
  ...props
}) {
  return (
    <label
      className={cn(
        'inline-flex cursor-pointer select-none items-center gap-2',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <span className="relative inline-flex">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          {...props}
        />
        <span
          className={cn(
            'flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border transition',
            checked || indeterminate
              ? 'border-primary-600 bg-primary-600 text-white'
              : 'border-border-strong bg-surface',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--ring)] peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-surface',
          )}
        >
          {indeterminate ? (
            <Minus className="h-3 w-3" strokeWidth={3} />
          ) : checked ? (
            <Check className="h-3 w-3" strokeWidth={3} />
          ) : null}
        </span>
      </span>
      {label && <span className="text-sm text-body">{label}</span>}
    </label>
  )
}
