import { LineChart, Pencil, Copy } from 'lucide-react'
import { DropdownMenu } from '../../../components/ui'

/**
 * Per-row action menu for a campaign (kebab → View Analytics / Edit Sequence /
 * Duplicate).
 * @param {{ onViewAnalytics?: () => void, onEdit?: () => void,
 *   onDuplicate?: () => void }} props
 */
export function CampaignRowMenu({ onViewAnalytics, onEdit, onDuplicate }) {
  return (
    <DropdownMenu
      items={[
        { label: 'View Analytics', icon: LineChart, onClick: onViewAnalytics },
        { label: 'Edit Sequence', icon: Pencil, onClick: onEdit },
        { label: 'Duplicate', icon: Copy, onClick: onDuplicate },
      ]}
    />
  )
}
