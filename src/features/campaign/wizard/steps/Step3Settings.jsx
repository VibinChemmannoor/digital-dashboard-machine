import { Card, Input } from '../../../../components/ui'
import { useWizard } from '../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../context/wizardReducer'

/** Scaffold placeholder — replaced by the real Step 3 UI in Phase 7. */
export default function Step3Settings() {
  const { state, dispatch } = useWizard()
  return (
    <Card padded className="space-y-3">
      <div>
        <h2 className="text-base font-semibold text-text">Settings</h2>
        <p className="text-sm text-muted">
          Scaffold placeholder — name the campaign to enable “Next”.
        </p>
      </div>
      <Input
        label="Campaign name"
        placeholder="New Outreach Campaign"
        containerClassName="max-w-md"
        value={state.settings.campaignName}
        onChange={(e) =>
          dispatch({
            type: WIZARD_ACTIONS.UPDATE_SETTINGS,
            payload: { campaignName: e.target.value },
          })
        }
      />
    </Card>
  )
}
