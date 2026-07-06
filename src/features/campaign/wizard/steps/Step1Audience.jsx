import { Card, Select } from '../../../../components/ui'
import { useWizard } from '../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../context/wizardReducer'

const METHODS = [
  { value: 'linkedin', label: 'LinkedIn Search' },
  { value: 'csv', label: 'Upload CSV File' },
  { value: 'lookalike', label: 'Lookalike Audience' },
  { value: 'webhook', label: 'Inbound Webhook' },
]

/** Scaffold placeholder — replaced by the real Step 1 UI in Phase 7. */
export default function Step1Audience() {
  const { state, dispatch } = useWizard()
  return (
    <Card padded className="space-y-3">
      <div>
        <h2 className="text-base font-semibold text-text">
          Define Target Audience
        </h2>
        <p className="text-sm text-muted">
          Scaffold placeholder — pick an import method to enable “Next”.
        </p>
      </div>
      <Select
        className="max-w-xs"
        placeholder="Choose Import Method"
        options={METHODS}
        value={state.audience.method ?? ''}
        onChange={(v) =>
          dispatch({ type: WIZARD_ACTIONS.SET_METHOD, payload: v })
        }
      />
    </Card>
  )
}
