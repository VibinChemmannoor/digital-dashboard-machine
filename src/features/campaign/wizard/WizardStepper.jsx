import { Stepper } from '../../../components/ui'
import { WIZARD_STEPS } from '../../../lib/constants'

/**
 * Wizard header stepper, bound to the current route index.
 * @param {{ current: number, maxReached: number,
 *   onStepClick: (index: number) => void }} props
 */
export function WizardStepper({ current, maxReached, onStepClick }) {
  return (
    <Stepper
      steps={WIZARD_STEPS}
      current={current}
      maxReached={maxReached}
      onStepClick={onStepClick}
    />
  )
}
