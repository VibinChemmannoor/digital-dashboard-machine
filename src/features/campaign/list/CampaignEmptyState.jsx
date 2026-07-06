import { Search } from 'lucide-react'
import { Button, Input, Select } from '../../../components/ui'
import { EmptyCampaignsIllustration } from '../../../components/icons/Illustrations'

/**
 * Campaign list empty state (screen 1): a lightweight filter + search bar and a
 * centered illustration with a primary "New Campaign" call to action.
 * @param {{ onNewCampaign: () => void }} props
 */
export function CampaignEmptyState({ onNewCampaign }) {
  return (
    <div className="flex min-h-full flex-col p-4 lg:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Select
          size="sm"
          buttonClassName="w-28"
          value="all"
          onChange={() => {}}
          options={[{ value: 'all', label: 'All' }]}
        />
        <Input
          icon={Search}
          placeholder="Search"
          containerClassName="w-48"
          className="h-8 text-xs"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
        <EmptyCampaignsIllustration className="h-44 w-56" />
        <Button className="mt-6" onClick={onNewCampaign}>
          New Campaign
        </Button>
      </div>
    </div>
  )
}
