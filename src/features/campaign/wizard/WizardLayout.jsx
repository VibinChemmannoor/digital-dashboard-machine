import { useEffect } from 'react'
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { WizardProvider } from '../../../context/WizardProvider'
import { WIZARD_ACTIONS } from '../../../context/wizardReducer'
import { useWizard } from '../../../hooks/useWizard'
import { useSetBreadcrumb } from '../../../hooks/useBreadcrumb'
import { WIZARD_STEPS } from '../../../lib/constants'
import { WizardStepper } from './WizardStepper'
import { WizardFooter } from './WizardFooter'
import { canProceedFrom } from './canProceed'

const VALID_MODES = ['advanced', 'standard']
const LAST = WIZARD_STEPS.length - 1

/** Route element: validates the mode param, then provides wizard state. */
export function WizardLayout() {
  const { mode } = useParams()
  if (!VALID_MODES.includes(mode)) {
    return <Navigate to="/campaigns" replace />
  }
  return (
    <WizardProvider mode={mode}>
      <WizardInner mode={mode} />
    </WizardProvider>
  )
}

function WizardInner({ mode }) {
  const { state, dispatch } = useWizard()
  const location = useLocation()
  const navigate = useNavigate()

  const matched = WIZARD_STEPS.findIndex((s) =>
    location.pathname.endsWith(s.path),
  )
  const index = matched === -1 ? 0 : matched

  useSetBreadcrumb([
    { label: 'Campaign', to: '/campaigns' },
    { label: mode === 'standard' ? 'Standard Campaign' : 'Advance Campaign' },
  ])

  // Unlock every step up to the furthest visited (enables stepper clicks back).
  useEffect(() => {
    dispatch({ type: WIZARD_ACTIONS.SET_MAX_REACHED, payload: index })
  }, [index, dispatch])

  const goTo = (i) => navigate(`/campaigns/new/${mode}/${WIZARD_STEPS[i].path}`)
  const goNext = () => {
    const next = Math.min(index + 1, LAST)
    dispatch({ type: WIZARD_ACTIONS.SET_MAX_REACHED, payload: next })
    goTo(next)
  }
  const goPrev = () => goTo(Math.max(index - 1, 0))

  const isStats = index === LAST

  return (
    <div className="space-y-4 p-4 lg:p-6">
      <WizardStepper
        current={index}
        maxReached={state.maxReached}
        onStepClick={goTo}
      />

      <Outlet context={{ index, goNext, goPrev, goTo, mode }} />

      {/* Stats (last step) provides its own actions (Launch). */}
      {!isStats && (
        <WizardFooter
          showPrev={index > 0}
          onPrev={goPrev}
          onNext={goNext}
          nextDisabled={!canProceedFrom(index, state)}
        />
      )}
    </div>
  )
}
