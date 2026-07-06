import { Card, AvatarGroup } from '../../../../../components/ui'
import { formatNumber } from '../../../../../lib/format'

/** Campaign Actions stat grid + team (screen 13). */
export function CampaignActions({ actions, team }) {
  return (
    <Card padded className="flex h-full flex-col">
      <h3 className="text-base font-semibold text-text">Campaign Actions</h3>
      <p className="text-xs text-muted">
        Execution stats and engagement signals
      </p>

      <div className="mt-4 grid flex-1 grid-cols-2 gap-x-6 gap-y-3">
        {actions.map((a) => (
          <div
            key={a.label}
            className="flex items-center justify-between gap-2"
          >
            <span className="text-sm text-muted">{a.label}:</span>
            <span className="text-sm font-semibold tabular-nums text-text">
              {formatNumber(a.value)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary-50/60 px-3 py-2 dark:bg-primary-900/20">
        <span className="text-sm font-medium text-body">Team:</span>
        <AvatarGroup people={team} size="xs" max={4} />
      </div>
    </Card>
  )
}
