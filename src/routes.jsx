import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { WizardLayout } from './features/campaign/wizard/WizardLayout'
import Step1Audience from './features/campaign/wizard/steps/Step1Audience'
import Step2Senders from './features/campaign/wizard/steps/Step2Senders'
import Step3Settings from './features/campaign/wizard/steps/Step3Settings'
import Step4Stats from './features/campaign/wizard/steps/Step4Stats'
import CampaignListPage from './pages/CampaignListPage'
import KitchenSinkPage from './pages/KitchenSinkPage'
import NotFoundPage from './pages/NotFoundPage'

/**
 * Central route tree. Pages render inside the AppShell layout route; the
 * Advance Campaign wizard nests its 4 steps under a WizardLayout.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/campaigns" replace />} />
        <Route path="/campaigns" element={<CampaignListPage />} />

        <Route path="/campaigns/new/:mode" element={<WizardLayout />}>
          <Route index element={<Navigate to="step-1-audience" replace />} />
          <Route path="step-1-audience" element={<Step1Audience />} />
          <Route path="step-2-senders" element={<Step2Senders />} />
          <Route path="step-3-settings" element={<Step3Settings />} />
          <Route path="step-4-stats" element={<Step4Stats />} />
        </Route>

        {/* Temporary primitives showcase — remove once screens are built */}
        <Route path="/kitchen-sink" element={<KitchenSinkPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
