import { useOutletContext } from 'react-router-dom'
import { Rocket } from 'lucide-react'
import { Card, Button, Badge, EmptyState } from '../../../../components/ui'
import { useWizard } from '../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../context/wizardReducer'

/** Scaffold placeholder — replaced by the real Stats screens in Phase 7. */
export default function Step4Stats() {
  const { goPrev } = useOutletContext()
  const { state, dispatch } = useWizard()

  return (
    <Card padded>
      {state.stats.launched ? (
        <EmptyState
          icon={Rocket}
          title="Campaign launched"
          description="Stats will appear here once data comes in (Phase 7)."
          action={<Badge variant="success">Running</Badge>}
        />
      ) : (
        <EmptyState
          icon={Rocket}
          title="No Stats Yet"
          description="Once the campaign is launched, statistics will be shown here."
          action={
            <div className="flex gap-2">
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
      )}
    </Card>
  )
}
