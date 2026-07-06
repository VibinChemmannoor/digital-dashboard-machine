import { cn } from '../../lib/cn'

/** Default color thresholds (checked high → low). */
const THRESHOLDS = [
  { min: 75, color: 'var(--success)' },
  { min: 50, color: 'var(--warning)' },
  { min: 0, color: 'var(--danger)' },
]

function colorFor(value, thresholds) {
  return (thresholds.find((t) => value >= t.min) ?? thresholds.at(-1)).color
}

/**
 * Small circular gauge with a centered number (sender "health"). Hand-rolled
 * SVG (stroke-dasharray) stays crisp at ~28–44px where a charting lib would not.
 * @param {{
 *   value?: number, size?: number, thickness?: number,
 *   showValue?: boolean, color?: string, className?: string,
 * }} props
 */
export function HealthRing({
  value = 0,
  size = 44,
  thickness = 4,
  showValue = true,
  color,
  className,
}) {
  const pct = Math.max(0, Math.min(100, value))
  const r = (size - thickness) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference * (1 - pct / 100)
  const stroke = color || colorFor(pct, THRESHOLDS)

  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--surface-3)"
          strokeWidth={thickness}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={stroke}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-500"
        />
      </svg>
      {showValue && (
        <span
          className="absolute font-semibold tabular-nums text-text"
          style={{ fontSize: Math.round(size * 0.28) }}
        >
          {Math.round(pct)}
        </span>
      )}
    </span>
  )
}
