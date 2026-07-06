import { FileUp, Users, Webhook } from 'lucide-react'
import { SelectableCard } from '../../../../../components/ui'
import { LinkedInIcon } from '../../../../../components/icons/BrandIcons'
import { useWizard } from '../../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../../context/wizardReducer'

const IMPORT_METHODS = [
  {
    value: 'linkedin',
    icon: LinkedInIcon,
    title: 'LinkedIn Search',
    description: 'Basic, Sales Nav, Post, Group or Event URL',
  },
  {
    value: 'csv',
    icon: FileUp,
    title: 'Upload CSV File',
    description: 'Upload LinkedIn profiles via CSV. Download Sample',
  },
  {
    value: 'lookalike',
    icon: Users,
    title: 'Lookalike Audience',
    description: 'Use Lead Finder to find audience.',
  },
  {
    value: 'webhook',
    icon: Webhook,
    title: 'Inbound Webhook',
    description: 'Sync leads from zapier, n8n make in real time',
  },
]

/** The 4 selectable import-method cards. */
export function MethodCardRow() {
  const { state, dispatch } = useWizard()
  const method = state.audience.method

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {IMPORT_METHODS.map((m) => (
        <SelectableCard
          key={m.value}
          icon={m.icon}
          title={m.title}
          description={m.description}
          selected={method === m.value}
          onSelect={() =>
            dispatch({ type: WIZARD_ACTIONS.SET_METHOD, payload: m.value })
          }
        />
      ))}
    </div>
  )
}
