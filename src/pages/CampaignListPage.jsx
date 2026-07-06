import { useTheme } from '../hooks/useTheme'

/**
 * Placeholder — replaced in Phase 5 with the real empty-state / all-campaigns
 * screens. For now it validates that Tailwind, tokens and theming work.
 */
export default function CampaignListPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 p-8">
      <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
        <h1 className="text-2xl font-bold text-text">Frontend Task</h1>
        <p className="mt-1 text-muted">
          Foundation ready — Tailwind, tokens, theming & routing are wired.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <span className="rounded-full bg-primary-600 px-3 py-1 text-sm font-medium text-white">
            Primary
          </span>
          <span className="rounded-full bg-success-bg px-3 py-1 text-sm font-medium text-success">
            Success
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-border bg-surface-2 px-4 py-2 text-sm font-medium text-text transition hover:bg-surface-3"
          >
            Theme: {theme}
          </button>
        </div>
      </div>
    </div>
  )
}
