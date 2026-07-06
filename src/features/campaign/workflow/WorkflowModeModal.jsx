import { useState } from 'react'
import { cn } from '../../../lib/cn'
import { Modal, Button, Badge } from '../../../components/ui'

/** Tiny inline graphics distinguishing the two modes. */
function AdvancedGraphic() {
  return (
    <svg
      viewBox="0 0 72 48"
      fill="none"
      className="h-12 w-16"
      aria-hidden="true"
    >
      <rect x="2" y="18" width="18" height="12" rx="3" fill="#5b6ef5" />
      <rect x="52" y="4" width="18" height="12" rx="3" fill="#8ea2f5" />
      <rect x="52" y="32" width="18" height="12" rx="3" fill="#8ea2f5" />
      <path
        d="M20 24h16M36 24V10h16M36 24v14h16"
        stroke="#c2ccf7"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

function StandardGraphic() {
  return (
    <svg
      viewBox="0 0 72 48"
      fill="none"
      className="h-12 w-16"
      aria-hidden="true"
    >
      <rect x="2" y="18" width="16" height="12" rx="3" fill="#8ea2f5" />
      <rect x="28" y="18" width="16" height="12" rx="3" fill="#8ea2f5" />
      <rect x="54" y="18" width="16" height="12" rx="3" fill="#5b6ef5" />
      <path d="M18 24h10M44 24h10" stroke="#c2ccf7" strokeWidth="2" />
    </svg>
  )
}

function ModeCard({
  selected,
  onSelect,
  title,
  badge,
  subtitle,
  bullets,
  graphic,
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        'flex w-full items-start gap-3 rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]',
        selected
          ? 'border-primary-500 bg-primary-50/60 dark:bg-primary-900/20'
          : 'border-border bg-surface hover:border-border-strong hover:bg-surface-2',
      )}
    >
      <span
        className={cn(
          'mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border transition',
          selected
            ? 'border-primary-600 bg-primary-600'
            : 'border-border-strong bg-surface',
        )}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-text">{title}</span>
          {badge && (
            <Badge variant="success" className="px-2 py-0.5">
              {badge}
            </Badge>
          )}
        </div>
        <p className="mt-0.5 text-xs text-muted">{subtitle}</p>
        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-1.5 text-xs text-body">
              <span className="h-1 w-1 rounded-full bg-primary-500" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden shrink-0 self-center sm:block">{graphic}</div>
    </button>
  )
}

/**
 * "Select Workflow Mode" modal — pick Advanced vs Standard, then Next.
 * @param {{ open: boolean, onClose: () => void,
 *   onNext: (mode: 'advanced'|'standard') => void }} props
 */
export function WorkflowModeModal({ open, onClose, onNext }) {
  const [mode, setMode] = useState('advanced')

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="xl"
      title="Select Workflow Mode"
      description="Choose how you want your campaign to behave"
      footer={
        <>
          <Button variant="subtle" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => onNext(mode)}>Next</Button>
        </>
      }
    >
      <div className="flex flex-col gap-3">
        <ModeCard
          selected={mode === 'advanced'}
          onSelect={() => setMode('advanced')}
          title="Advanced Workflow"
          badge="Recommended"
          subtitle="Best for high-volume outreach"
          bullets={['Conditional logic', 'Multiple paths', 'More control']}
          graphic={<AdvancedGraphic />}
        />
        <ModeCard
          selected={mode === 'standard'}
          onSelect={() => setMode('standard')}
          title="Standard Workflow"
          subtitle="Best for beginners"
          bullets={['Linear steps', 'No conditions', 'Easy Setup']}
          graphic={<StandardGraphic />}
        />
      </div>
    </Modal>
  )
}
