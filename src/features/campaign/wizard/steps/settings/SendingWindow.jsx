import { Plus, Trash2, Clock } from 'lucide-react'
import { cn } from '../../../../../lib/cn'
import { Select, Input } from '../../../../../components/ui'
import { useWizard } from '../../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../../context/wizardReducer'

const DAYS = [
  { key: 'mon', label: 'MON' },
  { key: 'tue', label: 'TUE' },
  { key: 'wed', label: 'WED' },
  { key: 'thu', label: 'THU' },
  { key: 'fri', label: 'FRI' },
  { key: 'sat', label: 'SAT' },
  { key: 'sun', label: 'SUN' },
]

const TIMEZONES = [
  { value: 'usa', label: 'USA Outreach Time' },
  { value: 'eu', label: 'EU Outreach Time' },
  { value: 'apac', label: 'APAC Outreach Time' },
]

/** "Sending Window" panel (screen 11, left). */
export function SendingWindow() {
  const { state, dispatch } = useWizard()
  const { timezone, activeDays } = state.settings

  return (
    <div className="rounded-xl border border-border p-4">
      <h3 className="text-sm font-semibold text-text">Sending Window</h3>
      <p className="mb-3 text-xs text-muted">Define when the campaign runs</p>

      <Select
        options={TIMEZONES}
        value={timezone}
        onChange={(v) =>
          dispatch({
            type: WIZARD_ACTIONS.UPDATE_SETTINGS,
            payload: { timezone: v },
          })
        }
      />

      <div className="mt-3 flex items-center gap-1.5">
        {DAYS.map((d) => {
          const active = activeDays.includes(d.key)
          return (
            <button
              key={d.key}
              type="button"
              aria-pressed={active}
              onClick={() =>
                dispatch({ type: WIZARD_ACTIONS.TOGGLE_DAY, payload: d.key })
              }
              className={cn(
                'flex-1 rounded-md px-1.5 py-1.5 text-[11px] font-semibold transition',
                active
                  ? 'bg-primary-50 text-primary-700 ring-1 ring-primary-300 dark:bg-primary-900/30 dark:text-primary-200'
                  : 'text-subtle hover:bg-surface-2',
              )}
            >
              {d.label}
            </button>
          )
        })}
        <button
          type="button"
          aria-label="Remove window"
          className="ml-1 text-muted transition hover:text-danger"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text">
          <Clock className="h-4 w-4 text-muted" />
          11:30 AM - 04:00 PM
        </div>
        <Input defaultValue="USA Timezone" className="h-10" />
      </div>

      <button
        type="button"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
      >
        <Plus className="h-4 w-4" />
        Add New Window
      </button>
    </div>
  )
}
