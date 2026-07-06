import { scaleLinear } from 'd3-scale'
import { cn } from '../../lib/cn'
import { formatNumber } from '../../lib/format'

/**
 * Category bar chart with a metric header per column (Campaign Overview:
 * New Leads, Invites Sent, …). Heights are mapped with a d3 linear scale.
 * @param {{
 *   data: { label: string, value: number, sub?: string, color?: string }[],
 *   height?: number,
 *   showHeader?: boolean,
 *   className?: string,
 * }} props
 */
export function BarChart({ data, height = 130, showHeader = true, className }) {
  const maxValue = Math.max(...data.map((d) => d.value), 1)
  // Reserve headroom so the tallest bar doesn't touch the top.
  const y = scaleLinear().domain([0, maxValue]).range([6, 100])
  const cols = { gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))` }

  return (
    <div className={cn('w-full', className)}>
      {showHeader && (
        <div className="grid gap-2 sm:gap-3" style={cols}>
          {data.map((d) => (
            <div key={d.label} className="min-w-0">
              <p className="truncate text-[11px] font-medium text-muted">
                {d.label}
              </p>
              <p className="mt-0.5 flex items-baseline gap-1">
                <span className="text-sm font-bold tabular-nums text-text">
                  {formatNumber(d.value)}
                </span>
                {d.sub && (
                  <span className="text-[11px] font-medium text-muted">
                    {d.sub}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}

      <div
        className="mt-3 grid items-end gap-2 sm:gap-3"
        style={{ ...cols, height }}
      >
        {data.map((d) => (
          <div
            key={d.label}
            className="rounded-t-lg transition-[height] duration-500"
            style={{
              height: `${y(d.value)}%`,
              backgroundColor: d.color || 'var(--primary-500)',
            }}
            title={`${d.label}: ${formatNumber(d.value)}`}
          />
        ))}
      </div>
    </div>
  )
}
