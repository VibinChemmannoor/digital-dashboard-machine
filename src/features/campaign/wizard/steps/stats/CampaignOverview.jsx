import { useState } from 'react'
import { Card, BarChart, SegmentedControl } from '../../../../../components/ui'

/** Campaign Overview funnel bar chart (screen 13). */
export function CampaignOverview({ data }) {
  const [channel, setChannel] = useState('linkedin')
  return (
    <Card padded>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-text">Campaign Overview</h3>
        <SegmentedControl
          size="sm"
          value={channel}
          onChange={setChannel}
          items={[
            { value: 'linkedin', label: 'LinkedIn' },
            { value: 'email', label: 'Email' },
          ]}
        />
      </div>
      <BarChart data={data} height={140} />
    </Card>
  )
}
