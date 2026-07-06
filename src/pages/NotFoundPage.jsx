import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-6xl font-extrabold text-primary-600">404</p>
      <h1 className="text-xl font-semibold text-text">Page not found</h1>
      <p className="text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        to="/campaigns"
        className="mt-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
      >
        Back to Campaigns
      </Link>
    </div>
  )
}
