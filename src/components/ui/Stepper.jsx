import { Fragment } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Horizontal segmented stepper (the Advance Campaign wizard header).
 * @param {{
 *   steps: { key: string, label: string, shortLabel?: string,
 *     icon?: React.ComponentType<any> }[],
 *   current: number,
 *   maxReached?: number,
 *   onStepClick?: (index: number) => void,
 *   className?: string,
 * }} props
 */
export function Stepper({
  steps,
  current,
  maxReached = current,
  onStepClick,
  className,
}) {
  return (
    <div
      className={cn(
        'flex items-stretch rounded-xl border border-border bg-surface p-1.5',
        className,
      )}
    >
      {steps.map((step, i) => {
        const isActive = i === current
        const reachable = i <= maxReached
        const Icon = step.icon
        return (
          <Fragment key={step.key}>
            <button
              type="button"
              disabled={!reachable}
              aria-current={isActive ? 'step' : undefined}
              onClick={() => reachable && onStepClick?.(i)}
              className={cn(
                'flex flex-1 items-center justify-center gap-2.5 rounded-lg px-3 py-2 transition sm:justify-start',
                reachable ? 'cursor-pointer' : 'cursor-not-allowed',
                isActive
                  ? 'bg-primary-50 dark:bg-primary-900/20'
                  : 'hover:bg-surface-2',
              )}
            >
              {Icon && (
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition',
                    isActive
                      ? 'bg-primary-600 text-white'
                      : reachable
                        ? 'bg-surface-3 text-primary-600'
                        : 'bg-surface-3 text-subtle',
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
              )}
              <span
                className={cn(
                  'hidden truncate text-sm sm:inline',
                  isActive
                    ? 'font-semibold text-text'
                    : reachable
                      ? 'text-body'
                      : 'text-subtle',
                )}
              >
                {step.label}
              </span>
            </button>
            {i < steps.length - 1 && (
              <ChevronRight className="mx-0.5 hidden shrink-0 self-center text-subtle sm:block" />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
