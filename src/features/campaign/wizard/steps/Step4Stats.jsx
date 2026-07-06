import { useOutletContext } from 'react-router-dom'
import { Rocket, PieChart } from 'lucide-react'
import { Card, Button, EmptyState } from '../../../../components/ui'
import { useWizard } from '../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../context/wizardReducer'
import { StatsDashboard } from './stats/StatsDashboard'

/** Step 4 — Stats: empty state (screen 12) → analytics dashboard (screen 13). */
export default function Step4Stats() {
  const { goPrev } = useOutletContext()
  const { state, dispatch } = useWizard()

  if (state.stats.launched) {
    return <StatsDashboard />
  }

  return (
    <Card padded className="min-h-[420px] flex items-center justify-center">
      <EmptyState
        icon={PieChart}
        title="No Stats Yet"
        description="Once Campaign is launched, Statistics will be shown here."
        action={
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={goPrev}>
              Previous
            </Button>
            <Button
              iconLeft={Rocket}
              onClick={() => dispatch({ type: WIZARD_ACTIONS.LAUNCH })}
            >
              Launch Campaign
            </Button>
          </div>
        }
      />
    </Card>
  )
}
