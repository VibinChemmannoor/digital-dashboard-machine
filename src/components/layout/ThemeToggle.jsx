import { Moon, Sun } from 'lucide-react'
import { cn } from '../../lib/cn'
import { useTheme } from '../../hooks/useTheme'

/**
 * Segmented Light/Dark control (sidebar footer). When `collapsed`, renders a
 * single icon button that toggles instead.
 * @param {{ collapsed?: boolean }} props
 */
export function ThemeToggle({ collapsed = false }) {
  const { theme, setTheme, toggleTheme } = useTheme()

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-muted transition hover:text-text"
      >
        {theme === 'dark' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </button>
    )
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="flex items-center gap-1 rounded-xl border border-border bg-surface-2 p-1"
    >
      {[
        { key: 'light', label: 'Light', Icon: Sun },
        { key: 'dark', label: 'Dark', Icon: Moon },
      ].map(({ key, label, Icon }) => {
        const active = theme === key
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(key)}
            className={cn(
              'flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition',
              active
                ? 'bg-surface text-text shadow-card'
                : 'text-muted hover:text-body',
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        )
      })}
    </div>
  )
}
