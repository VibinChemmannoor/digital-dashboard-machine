import { Card, ProgressBar } from '../../../../../components/ui'

/** Reply Performance horizontal bars (screen 13). */
export function ReplyPerformance({ data }) {
  return (
    <Card padded className="flex h-full flex-col">
      <h3 className="text-base font-semibold text-text">Reply Performance</h3>
      <p className="text-xs text-muted">Top reply channel</p>

      <div className="mt-4 space-y-3.5">
        {data.map((row) => (
          <div key={row.label}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-body">{row.label}</span>
              <span className="font-semibold tabular-nums text-text">
                {row.value}%
              </span>
            </div>
            <ProgressBar value={row.value} color={row.color} />
          </div>
        ))}
      </div>
    </Card>
  )
}
