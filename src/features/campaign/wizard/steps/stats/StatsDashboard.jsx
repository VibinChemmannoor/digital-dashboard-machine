import { Search } from 'lucide-react'
import { Input, Select } from '../../../../../components/ui'
import { SummaryCard } from './SummaryCard'
import { ReplyAnalysis } from './ReplyAnalysis'
import { CampaignOverview } from './CampaignOverview'
import { CampaignActions } from './CampaignActions'
import { ReplyPerformance } from './ReplyPerformance'
import { RecentActivity } from './RecentActivity'
import { campaignStats } from '../../../../../data/mock/stats'

/** Populated Stats analytics dashboard (screen 13). */
export function StatsDashboard() {
  const s = campaignStats

  return (
    <div className="space-y-4">
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
          containerClassName="w-56"
          className="h-8 text-xs"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Main column */}
        <div className="space-y-4 lg:col-span-2">
          <SummaryCard stats={s} />
          <CampaignOverview data={s.overview} />
          <div className="grid gap-4 sm:grid-cols-2">
            <CampaignActions actions={s.actions} team={s.team} />
            <ReplyPerformance data={s.replyPerformance} />
          </div>
        </div>

        {/* Side column */}
        <div className="space-y-4">
          <ReplyAnalysis data={s.replyAnalysis} />
          <RecentActivity activity={s.activity} />
        </div>
      </div>
    </div>
  )
}
