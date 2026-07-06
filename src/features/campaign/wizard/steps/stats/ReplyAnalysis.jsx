import { Card, GaugeChart } from '../../../../../components/ui'

/** Reply Analysis gauge + legend (screen 13, right). */
export function ReplyAnalysis({ data }) {
  return (
    <Card padded>
      <h3 className="text-base font-semibold text-text">Reply Analysis</h3>

      <div className="mx-auto mt-2 max-w-[220px]">
        <GaugeChart value={data.discussions} sublabel="Discussions" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between border-b border-border pb-2 text-xs font-medium text-muted">
          <span>Status</span>
          <span>Results</span>
        </div>
        {data.breakdown.map((b) => (
          <div
            key={b.key}
            className="flex items-center justify-between py-2 text-sm"
          >
            <span className="flex items-center gap-2 text-body">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: b.color }}
              />
              {b.label}
            </span>
            <span className="font-semibold tabular-nums text-text">
              {b.value}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
