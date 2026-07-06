import { useState } from 'react'
import { Trash2, Check, ListChecks, Search, AlignLeft } from 'lucide-react'
import { Input } from '../../../../../components/ui'

const MAPPED = [
  { field: 'Full name', column: 'Full name', count: 35 },
  { field: 'First name', column: 'First name', count: 3 },
  { field: 'Last name', column: 'Last name', count: 12 },
  { field: 'Company Name', column: 'Company Name', count: 36 },
  { field: 'Position', column: 'Position', count: 25 },
  { field: 'Headline', column: 'Headline', count: 25 },
]

const UNMAPPED = [
  { label: 'Location', count: 9 },
  { label: 'Industry', count: 3 },
  { label: 'Notes', count: 9 },
]

function Pill({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text">
      <Icon className="h-4 w-4 text-muted" />
      <span className="truncate">{children}</span>
    </div>
  )
}

/** CSV column → contact field mapping UI (screen 6). */
export function CsvMappingPanel() {
  const [query, setQuery] = useState('')
  const unmapped = UNMAPPED.filter((u) =>
    u.label.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-text">Map Properties</h3>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
            <Check className="h-4 w-4 text-success" />
            Make sure file includes contact name and phone number
          </p>
        </div>
        <button
          type="button"
          aria-label="Clear mapping"
          className="text-muted transition hover:text-danger"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_0.9fr]">
        {/* Contact Field ↔ CSV Column */}
        <div className="lg:col-span-2 rounded-xl border border-border p-4">
          <div className="grid grid-cols-2 gap-4">
            <p className="text-sm font-semibold text-text">Contact Field</p>
            <p className="text-sm font-semibold text-text">CSV Column</p>
          </div>
          <div className="mt-3 space-y-2.5">
            {MAPPED.map((row) => (
              <div key={row.field} className="grid grid-cols-2 gap-4">
                <Pill icon={AlignLeft}>{row.field}</Pill>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text">
                  <ListChecks className="h-4 w-4 text-muted" />
                  <span className="flex-1 truncate">{row.column}</span>
                  <span className="text-xs text-subtle">({row.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unmapped */}
        <div className="rounded-xl border border-border p-4">
          <p className="mb-3 text-sm font-semibold text-text">Unmapped Works</p>
          <Input
            icon={Search}
            placeholder="Search"
            className="h-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="mt-3 space-y-2">
            {unmapped.map((u) => (
              <div
                key={u.label}
                className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm"
              >
                <span className="flex items-center gap-2 text-text">
                  <ListChecks className="h-4 w-4 text-muted" />
                  {u.label} ({u.count})
                </span>
                <span className="text-xs text-subtle">({u.count})</span>
              </div>
            ))}
            {unmapped.length === 0 && (
              <p className="px-1 py-2 text-sm text-subtle">No results</p>
            )}
          </div>
          <button
            type="button"
            className="mt-3 text-sm font-medium text-primary-600 hover:underline"
          >
            Clear All Matched
          </button>
        </div>
      </div>
    </div>
  )
}
