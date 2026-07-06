import { Plus, ListChecks } from 'lucide-react'
import { Modal, Button, Checkbox, EmptyState } from '../../../components/ui'
import { NoResultsIllustration } from '../../../components/icons/Illustrations'
import { formatNumber } from '../../../lib/format'
import { useWizard } from '../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../context/wizardReducer'
import { leadLists } from '../../../data/mock/leadLists'

/**
 * "Lookalikes" modal — empty state (no leads) and a selectable list of lead
 * lists (screens 8–9).
 * @param {{ open: boolean, onClose: () => void, onConfirm?: () => void }} props
 */
export function LookalikesModal({ open, onClose, onConfirm }) {
  const { state, dispatch } = useWizard()
  const selected = state.audience.selectedLeadListIds
  const hasLists = leadLists.length > 0

  const toggle = (id) =>
    dispatch({ type: WIZARD_ACTIONS.TOGGLE_LEAD_LIST, payload: id })

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="lg"
      title="Lookalikes"
      description="Select a lookalike list for this campaign"
      footer={
        hasLists && (
          <>
            <Button variant="subtle" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onConfirm} disabled={selected.length === 0}>
              Select List
            </Button>
          </>
        )
      }
    >
      {hasLists ? (
        <div className="flex flex-col">
          {leadLists.map((list) => {
            const isSelected = selected.includes(list.id)
            return (
              <button
                key={list.id}
                type="button"
                onClick={() => toggle(list.id)}
                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition ${
                  isSelected
                    ? 'border-primary-400 bg-primary-50/60 dark:bg-primary-900/20'
                    : 'border-border hover:bg-surface-2'
                } mt-2 first:mt-0`}
              >
                <span className="flex items-center gap-2.5">
                  <ListChecks className="h-4 w-4 text-muted" />
                  <span className="text-sm font-semibold text-text">
                    {list.name}
                  </span>
                  <span className="text-xs text-muted">
                    ({formatNumber(list.count)}+ Users in the List)
                  </span>
                </span>
                <Checkbox
                  checked={isSelected}
                  onChange={() => toggle(list.id)}
                />
              </button>
            )
          })}
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-1.5 self-end text-sm font-medium text-primary-600 transition hover:text-primary-700"
          >
            <Plus className="h-4 w-4" />
            Add New
          </button>
        </div>
      ) : (
        <EmptyState
          media={<NoResultsIllustration className="h-24 w-24" />}
          title="You don't have any leads"
          description="Create a lead list to start running campaigns"
          action={<Button>Create a List</Button>}
        />
      )}
    </Modal>
  )
}
