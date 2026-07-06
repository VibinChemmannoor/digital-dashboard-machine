import { Checkbox } from '../../../../../components/ui'
import { useWizard } from '../../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../../context/wizardReducer'

const EVENTS = [
  { key: 'response_received', label: 'Response received' },
  { key: 'invite_sent', label: 'Invite sent' },
  { key: 'invitation_accepted', label: 'Invitation accepted' },
  { key: 'invitation_withdrawn', label: 'Invitation withdrawn' },
  { key: 'followup_sent', label: 'Followup Sent' },
]

const WORKS_WITH = ['Zapier', 'n8n', 'Webhooks']

/** Zapier trigger events + integrations (screen 11, bottom). */
export function IntegrationsRow() {
  const { state, dispatch } = useWizard()
  const { triggerZapier, events } = state.settings

  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4">
      <Checkbox
        checked={triggerZapier}
        onChange={(v) =>
          dispatch({
            type: WIZARD_ACTIONS.UPDATE_SETTINGS,
            payload: { triggerZapier: v },
          })
        }
        label={
          <span className="font-medium text-text">
            Select events to trigger zapier
          </span>
        }
      />

      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-3">
        {EVENTS.map((e) => (
          <Checkbox
            key={e.key}
            disabled={!triggerZapier}
            checked={events.includes(e.key)}
            onChange={() =>
              dispatch({ type: WIZARD_ACTIONS.TOGGLE_EVENT, payload: e.key })
            }
            label={e.label}
          />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-border pt-3">
        <span className="text-xs font-medium text-muted">Works With</span>
        {WORKS_WITH.map((name) => (
          <span
            key={name}
            className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-body"
          >
            {name}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted">
        If a lead answers your invite, message, or InMail, we stop sending
        further steps automatically.{' '}
        <a href="#" className="font-medium text-primary-600 hover:underline">
          Learn more
        </a>
      </p>
    </div>
  )
}
