import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { Button, EmptyState } from '../components/ui'
import { NoResultsIllustration } from '../components/icons/Illustrations'
import { CampaignFilters } from '../features/campaign/list/CampaignFilters'
import { CampaignTable } from '../features/campaign/list/CampaignTable'
import { CampaignEmptyState } from '../features/campaign/list/CampaignEmptyState'
import { WorkflowModeModal } from '../features/campaign/workflow/WorkflowModeModal'
import { useSetBreadcrumb } from '../hooks/useBreadcrumb'
import { useDisclosure } from '../hooks/useDisclosure'
import { campaigns as allCampaigns } from '../data/mock/campaigns'

/**
 * Campaign list. Renders the empty state (screen 1) when there are no
 * campaigns — or `?state=empty` for preview — otherwise the populated
 * All Campaigns table (screen 14). "New Campaign" opens the Workflow Mode
 * modal (screen 2).
 */
export default function CampaignListPage() {
  useSetBreadcrumb([{ label: 'Campaign', to: '/campaigns' }])
  const navigate = useNavigate()
  const modal = useDisclosure(false)
  const [params] = useSearchParams()
  const [channel, setChannel] = useState('all')
  const [status, setStatus] = useState('all')

  const forceEmpty = params.get('state') === 'empty'

  const filtered = useMemo(
    () =>
      allCampaigns.filter(
        (c) =>
          (channel === 'all' || c.channels.includes(channel)) &&
          (status === 'all' || c.status === status),
      ),
    [channel, status],
  )

  const clearFilters = () => {
    setChannel('all')
    setStatus('all')
  }

  const startCampaign = (mode) => {
    modal.close()
    navigate(`/campaigns/new/${mode}`)
  }

  if (forceEmpty || allCampaigns.length === 0) {
    return (
      <>
        <CampaignEmptyState onNewCampaign={modal.open} />
        <WorkflowModeModal
          open={modal.isOpen}
          onClose={modal.close}
          onNext={startCampaign}
        />
      </>
    )
  }

  return (
    <div className="space-y-4 p-4 lg:p-6">
      <PageHeader
        title="All Campaigns List"
        subtitle="A quick look at all of your outreach initiatives"
        actions={
          <Button iconLeft={Plus} onClick={modal.open}>
            New Campaign
          </Button>
        }
      />

      <CampaignFilters
        channel={channel}
        status={status}
        onChannel={setChannel}
        onStatus={setStatus}
        onClear={clearFilters}
      />

      {filtered.length > 0 ? (
        <CampaignTable campaigns={filtered} />
      ) : (
        <EmptyState
          className="py-16"
          media={<NoResultsIllustration className="h-24 w-24" />}
          title="No campaigns match your filters"
          description="Try adjusting or clearing the filters to see more."
          action={
            <Button variant="secondary" onClick={clearFilters}>
              Clear filters
            </Button>
          }
        />
      )}

      <WorkflowModeModal
        open={modal.isOpen}
        onClose={modal.close}
        onNext={startCampaign}
      />
    </div>
  )
}
