import { BookOpen } from 'lucide-react'
import { Button, Input } from '../../../../../components/ui'
import { LinkedInIcon } from '../../../../../components/icons/BrandIcons'
import { useWizard } from '../../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../../context/wizardReducer'

const SOURCE_LINKS = [
  'LinkedIn Search',
  'Sales Navigator',
  'Post URL',
  'Group URL',
]

/** Paste-a-LinkedIn-search-URL panel (screen 4). */
export function LinkedInSearchPanel() {
  const { state, dispatch } = useWizard()
  const { linkedinUrl, validated } = state.audience

  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="flex items-center gap-2 text-sm text-body">
          <LinkedInIcon className="h-4 w-4 text-info" />
          <span>
            Find your target audience with{' '}
            {SOURCE_LINKS.map((label, i) => (
              <span key={label}>
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline"
                >
                  {label}
                </a>
                {i < SOURCE_LINKS.length - 1 && (
                  <span className="text-muted"> or </span>
                )}
              </span>
            ))}
          </span>
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:underline"
        >
          <BookOpen className="h-4 w-4" />
          Search Guide
        </a>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          containerClassName="flex-1"
          placeholder="https://www.linkedin.com/search/results/people/?keywords="
          value={linkedinUrl}
          onChange={(e) =>
            dispatch({
              type: WIZARD_ACTIONS.UPDATE_AUDIENCE,
              payload: { linkedinUrl: e.target.value, validated: false },
            })
          }
        />
        <Button
          className="shrink-0"
          disabled={!linkedinUrl}
          onClick={() =>
            dispatch({
              type: WIZARD_ACTIONS.UPDATE_AUDIENCE,
              payload: { validated: true },
            })
          }
        >
          {validated ? 'Validated' : 'Validate'}
        </Button>
      </div>

      <label className="mt-3 flex items-center gap-2 text-xs text-muted">
        <span className="h-3 w-3 rounded-full border-[3px] border-primary-500" />
        Paste the search URL directly from LinkedIn
      </label>
    </div>
  )
}
