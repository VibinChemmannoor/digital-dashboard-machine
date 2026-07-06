import { Navigate, Route, Routes } from 'react-router-dom'
import CampaignListPage from './pages/CampaignListPage'
import NotFoundPage from './pages/NotFoundPage'

/**
 * Central route tree. The AppShell layout route and the campaign wizard
 * sub-routes are added in later phases (2 and 6).
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/campaigns" replace />} />
      <Route path="/campaigns" element={<CampaignListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
