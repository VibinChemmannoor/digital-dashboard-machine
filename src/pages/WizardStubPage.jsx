import { useParams } from 'react-router-dom'
import { EmptyState, Button } from '../components/ui'
import { useSetBreadcrumb } from '../hooks/useBreadcrumb'

/** TEMPORARY — the real Advance Campaign wizard arrives in Phase 6. */
export default function WizardStubPage() {
  const { mode } = useParams()
  useSetBreadcrumb([
    { label: 'Campaign', to: '/campaigns' },
    { label: mode === 'standard' ? 'Standard Campaign' : 'Advance Campaign' },
  ])
  return (
    <div className="flex min-h-full items-center justify-center p-6">
      <EmptyState
        title={`${mode === 'standard' ? 'Standard' : 'Advanced'} workflow selected`}
        description="The campaign builder wizard is coming in the next phase."
        action={
          <Button as="a" href="/campaigns" variant="secondary">
            Back to Campaigns
          </Button>
        }
      />
    </div>
  )
}
