/**
 * Whether the wizard can advance from a given step index, based on state.
 * Phase 7 tightens these per-step rules as real inputs land.
 * @param {number} stepIndex
 * @param {any} state
 * @returns {boolean}
 */
export function canProceedFrom(stepIndex, state) {
  switch (stepIndex) {
    case 0: {
      const { method } = state.audience
      return method != null
    }
    case 1:
      return state.senders.selectedIds.length > 0
    case 2:
      return state.settings.campaignName.trim().length > 0
    default:
      return true
  }
}
