import { Search } from 'lucide-react'
import { PageHeader } from '../components/layout/PageHeader'
import { useSetBreadcrumb } from '../hooks/useBreadcrumb'

/**
 * Placeholder — Phase 5 replaces this with the real empty-state and
 * all-campaigns screens. For now it validates the shell + breadcrumb.
 */
export default function CampaignListPage() {
  useSetBreadcrumb([{ label: 'Campaign', to: '/campaigns' }])

  return (
    <div className="p-4 lg:p-6">
      <PageHeader
        title="All Campaigns List"
        subtitle="A quick look at all of your outreach initiatives"
        actions={
          <button
            type="button"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
          >
            New Campaign
          </button>
        }
      />

      <div className="mt-16 flex flex-col items-center justify-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-900/30">
          <Search className="h-6 w-6" />
        </div>
        <p className="mt-4 text-base font-semibold text-text">
          App shell is ready
        </p>
        <p className="mt-1 max-w-sm text-sm text-muted">
          Sidebar, breadcrumb topbar, responsive drawer and theme toggle are
          wired. Campaign screens land in Phase 5.
        </p>
      </div>
    </div>
  )
}
