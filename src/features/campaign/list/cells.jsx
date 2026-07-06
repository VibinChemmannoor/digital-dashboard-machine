import { RefreshCw } from 'lucide-react'
import { cn } from '../../../lib/cn'
import { Badge } from '../../../components/ui'
import { formatNumber, formatDate } from '../../../lib/format'

const CHANNEL_LABELS = { linkedin: 'LinkedIn', email: 'Email' }
const CHANNEL_VARIANT = { linkedin: 'info', email: 'primary' }

/** Row of channel badges (LinkedIn / Email). */
export function ChannelBadges({ channels }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {channels.map((c) => (
        <Badge key={c} variant={CHANNEL_VARIANT[c]} className="px-2 py-0.5">
          {CHANNEL_LABELS[c]}
        </Badge>
      ))}
    </span>
  )
}

/** CRM sync state: "Synced · 2h ago" or a "Sync to CRM" action. */
export function CrmCell({ crm, meta }) {
  if (crm === 'synced') {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-warning" />
        <span className="text-sm font-medium text-text">Synced</span>
        {meta && <span className="text-xs text-subtle">{meta}</span>}
      </span>
    )
  }
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-primary-600"
    >
      <RefreshCw className="h-3.5 w-3.5" />
      Sync to CRM
    </button>
  )
}

/** A number with a small qualifier line ("265" / "50% Accepted"). */
export function MetricCell({ value, sub, className }) {
  return (
    <span className={cn('flex flex-col', className)}>
      <span className="text-sm font-semibold tabular-nums text-text">
        {formatNumber(value)}
      </span>
      {sub && <span className="text-xs text-muted">{sub}</span>}
    </span>
  )
}

const STATUS = {
  running: { variant: 'success', label: 'Running' },
  paused: { variant: 'warning', label: 'Paused' },
  draft: { variant: 'neutral', label: 'Draft' },
}

export function StatusBadge({ status }) {
  const s = STATUS[status] ?? STATUS.draft
  return (
    <Badge variant={s.variant} dot>
      {s.label}
    </Badge>
  )
}

/** "Created On 21 Jan, 2026" subtext. */
export function CreatedMeta({ date }) {
  return (
    <span className="text-xs text-muted">Created On {formatDate(date)}</span>
  )
}
