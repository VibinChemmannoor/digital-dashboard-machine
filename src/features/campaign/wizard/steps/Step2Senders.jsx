import { Card, Checkbox } from '../../../../components/ui'
import { useWizard } from '../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../context/wizardReducer'

/** Scaffold placeholder — replaced by the real Step 2 UI in Phase 7. */
export default function Step2Senders() {
  const { state, dispatch } = useWizard()
  return (
    <Card padded className="space-y-3">
      <div>
        <h2 className="text-base font-semibold text-text">Sender Profiles</h2>
        <p className="text-sm text-muted">
          Scaffold placeholder — select a sender to enable “Next”.
        </p>
      </div>
      <Checkbox
        checked={state.senders.selectedIds.includes('edgar')}
        onChange={() =>
          dispatch({ type: WIZARD_ACTIONS.TOGGLE_SENDER, payload: 'edgar' })
        }
        label="Edgar Jones — 1,250 connections (demo)"
      />
    </Card>
  )
}
