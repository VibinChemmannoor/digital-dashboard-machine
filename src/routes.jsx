import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import CampaignListPage from './pages/CampaignListPage'
import WizardStubPage from './pages/WizardStubPage'
import KitchenSinkPage from './pages/KitchenSinkPage'
import NotFoundPage from './pages/NotFoundPage'

/**
 * Central route tree. Pages render inside the AppShell layout route; the
 * campaign wizard sub-routes are added in Phase 6.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/campaigns" replace />} />
        <Route path="/campaigns" element={<CampaignListPage />} />
        {/* Stub — replaced by the real wizard in Phase 6 */}
        <Route path="/campaigns/new/:mode" element={<WizardStubPage />} />
        {/* Temporary primitives showcase — remove once screens are built */}
        <Route path="/kitchen-sink" element={<KitchenSinkPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
