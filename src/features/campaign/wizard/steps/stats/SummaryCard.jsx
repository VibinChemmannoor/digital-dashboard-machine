import { Megaphone, Pencil, Share2, Database } from 'lucide-react'
import { Card, Badge, ProgressBar } from '../../../../../components/ui'
import { ChannelBadges } from '../../../list/cells'
import { formatDate, formatNumber } from '../../../../../lib/format'

/** Campaign summary card (screen 13, top-left). */
export function SummaryCard({ stats }) {
  return (
    <Card padded className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1.5">
          <h3 className="flex items-center gap-2 text-base font-semibold text-text">
            <Megaphone className="h-4 w-4 text-primary-600" />
            {stats.name}
          </h3>
          <ChannelBadges channels={['linkedin', 'email']} />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success" dot>
            Running
          </Badge>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-text">
            <Share2 className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-text">
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="flex items-center gap-2 text-muted">
          Created {formatDate(stats.createdAt)}
          {stats.crmConnected && (
            <span className="inline-flex items-center gap-1 font-medium text-success">
              <Database className="h-3.5 w-3.5" /> CRM Connected
            </span>
          )}
        </span>
        <span className="font-medium text-muted">
          {formatNumber(stats.processed)} / {formatNumber(stats.total)}{' '}
          prospects processed
        </span>
      </div>

      <ProgressBar value={stats.processed} max={stats.total} />
    </Card>
  )
}
