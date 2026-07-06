import { Upload } from 'lucide-react'
import { Button, Select } from '../../../components/ui'
import { CHANNEL_OPTIONS, STATUS_OPTIONS } from '../../../data/mock/campaigns'

/**
 * Filter bar for the campaign list: channel + status selects, clear-all, and
 * export.
 * @param {{
 *   channel: string, status: string,
 *   onChannel: (v: string) => void, onStatus: (v: string) => void,
 *   onClear: () => void, onExport?: () => void,
 * }} props
 */
export function CampaignFilters({
  channel,
  status,
  onChannel,
  onStatus,
  onClear,
  onExport,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select
        size="sm"
        options={CHANNEL_OPTIONS}
        value={channel}
        onChange={onChannel}
        buttonClassName="w-32"
      />
      <Select
        size="sm"
        options={STATUS_OPTIONS}
        value={status}
        onChange={onStatus}
        buttonClassName="w-32"
      />
      <Button variant="ghost" size="sm" onClick={onClear}>
        Clear All
      </Button>
      <Button
        variant="secondary"
        size="sm"
        iconLeft={Upload}
        className="ml-auto"
        onClick={onExport}
      >
        Export List
      </Button>
    </div>
  )
}
