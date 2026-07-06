import { useMemo, useReducer } from 'react'
import { WizardContext } from './WizardContext'
import { initialWizardState, wizardReducer } from './wizardReducer'

/**
 * @param {{ mode?: 'advanced'|'standard', children: React.ReactNode }} props
 */
export function WizardProvider({ mode, children }) {
  const [state, dispatch] = useReducer(
    wizardReducer,
    initialWizardState,
    (s) => ({ ...s, workflowMode: mode ?? null }),
  )

  const value = useMemo(() => ({ state, dispatch }), [state])

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  )
}
