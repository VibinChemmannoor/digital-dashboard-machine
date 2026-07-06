import { createContext } from 'react'

/**
 * Advance Campaign wizard state (shared across the 4 step routes).
 * Provided by WizardProvider; consumed via useWizard().
 * @type {import('react').Context<any>}
 */
export const WizardContext = createContext(null)
