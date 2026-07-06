import { Undo2 } from 'lucide-react'
import { Button } from '../../../components/ui'

/**
 * Wizard navigation footer (Previous / Next|Submit).
 * @param {{
 *   showPrev?: boolean,
 *   onPrev?: () => void,
 *   onNext?: () => void,
 *   nextLabel?: string,
 *   nextDisabled?: boolean,
 *   className?: string,
 * }} props
 */
export function WizardFooter({
  showPrev = false,
  onPrev,
  onNext,
  nextLabel = 'Next',
  nextDisabled = false,
  className,
}) {
  return (
    <div className={`flex items-center justify-end gap-2 ${className ?? ''}`}>
      {showPrev && (
        <Button variant="ghost" iconLeft={Undo2} onClick={onPrev}>
          Previous
        </Button>
      )}
      <Button onClick={onNext} disabled={nextDisabled}>
        {nextLabel}
      </Button>
    </div>
  )
}
