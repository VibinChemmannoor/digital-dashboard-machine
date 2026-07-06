import { Card, Input } from '../../../../components/ui'
import { useWizard } from '../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../context/wizardReducer'
import { SendingWindow } from './settings/SendingWindow'
import { AiAssistCard } from './settings/AiAssistCard'
import { IntegrationsRow } from './settings/IntegrationsRow'

/** Step 3 — Settings (screen 11). */
export default function Step3Settings() {
  const { state, dispatch } = useWizard()

  return (
    <Card padded className="space-y-5">
      <Input
        label="Campaign name"
        placeholder="New Outreach Campaign"
        containerClassName="max-w-2xl"
        value={state.settings.campaignName}
        onChange={(e) =>
          dispatch({
            type: WIZARD_ACTIONS.UPDATE_SETTINGS,
            payload: { campaignName: e.target.value },
          })
        }
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <SendingWindow />
        <AiAssistCard />
      </div>

      <IntegrationsRow />
    </Card>
  )
}
