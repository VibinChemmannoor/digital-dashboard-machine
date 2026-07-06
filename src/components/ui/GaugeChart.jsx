import { useMemo } from 'react'
import { arc } from 'd3-shape'
import { cn } from '../../lib/cn'

const HALF = Math.PI / 2

function hexToRgb(h) {
  const s = h.replace('#', '')
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16))
}

/** Linear interpolate between two hex colors → rgb() string. */
function lerpColor(a, b, t) {
  const A = hexToRgb(a)
  const B = hexToRgb(b)
  const c = A.map((v, i) => Math.round(v + (B[i] - v) * t))
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`
}

/**
 * Segmented half-donut gauge (Reply Analysis "80% Discussions"). Built with
 * d3-shape arcs so every tick is pixel-exact; scales via viewBox.
 * @param {{
 *   value?: number, max?: number,
 *   segments?: number,
 *   label?: React.ReactNode, sublabel?: string,
 *   from?: string, to?: string,
 *   thickness?: number,
 *   className?: string,
 * }} props
 */
export function GaugeChart({
  value = 0,
  max = 100,
  segments = 40,
  label,
  sublabel,
  from = '#bcd3ff',
  to = '#2f56e0',
  thickness = 15,
  className,
}) {
  const R = 90
  const cx = 100
  const cy = 96
  const pct = Math.max(0, Math.min(1, value / max))
  const filled = Math.round(pct * segments)

  const paths = useMemo(() => {
    const gen = arc()
      .innerRadius(R - thickness)
      .outerRadius(R)
      .cornerRadius(2)
    const gapRatio = 0.32
    const step = Math.PI / segments
    const pad = step * gapRatio * 0.5
    return Array.from({ length: segments }, (_, i) => {
      const start = -HALF + i * step + pad
      const end = -HALF + (i + 1) * step - pad
      const isFilled = i < filled
      return {
        d: gen({ startAngle: start, endAngle: end }),
        color: isFilled
          ? lerpColor(from, to, segments > 1 ? i / (segments - 1) : 0)
          : 'var(--surface-3)',
      }
    })
  }, [segments, filled, from, to, thickness])

  return (
    <div className={cn('w-full', className)}>
      <svg
        viewBox="0 0 200 104"
        className="w-full"
        role="img"
        aria-label={
          sublabel ? `${sublabel}: ${Math.round(pct * 100)}%` : undefined
        }
      >
        <g transform={`translate(${cx}, ${cy})`}>
          {paths.map((p, i) => (
            <path key={i} d={p.d} fill={p.color} />
          ))}
        </g>
        <text
          x={cx}
          y={cy - 20}
          textAnchor="middle"
          className="fill-text font-bold"
          style={{ fontSize: 26 }}
        >
          {label ?? `${Math.round(pct * 100)}%`}
        </text>
        {sublabel && (
          <text
            x={cx}
            y={cy - 3}
            textAnchor="middle"
            className="fill-[var(--text-muted)]"
            style={{ fontSize: 12 }}
          >
            {sublabel}
          </text>
        )}
      </svg>
    </div>
  )
}
