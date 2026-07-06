import { Users } from 'lucide-react'
import { Button, Chip } from '../../../../../components/ui'
import { useDisclosure } from '../../../../../hooks/useDisclosure'
import { useWizard } from '../../../../../hooks/useWizard'
import { LookalikesModal } from '../../../lookalikes/LookalikesModal'
import { leadLists } from '../../../../../data/mock/leadLists'

/** Lookalike audience panel — opens the Lookalikes modal (screens 7–9). */
export function LookalikePanel() {
  const modal = useDisclosure(false)
  const { state } = useWizard()
  const selected = leadLists.filter((l) =>
    state.audience.selectedLeadListIds.includes(l.id),
  )

  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4">
      {selected.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted">Selected lists:</span>
          {selected.map((l) => (
            <Chip key={l.id} icon={Users}>
              {l.name}
            </Chip>
          ))}
          <Button variant="ghost" size="sm" onClick={modal.open}>
            Change
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-muted">
            Pick a lookalike list to target similar profiles.
          </p>
          <Button variant="secondary" iconLeft={Users} onClick={modal.open}>
            Select List
          </Button>
        </div>
      )}

      <LookalikesModal
        open={modal.isOpen}
        onClose={modal.close}
        onConfirm={modal.close}
      />
    </div>
  )
}
