import { Plus, Search, Mail } from 'lucide-react'
import {
  Card,
  Button,
  Input,
  Select,
  SegmentedControl,
} from '../../../../components/ui'
import { LinkedInIcon } from '../../../../components/icons/BrandIcons'
import { useWizard } from '../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../context/wizardReducer'
import { SenderTable } from './senders/SenderTable'
import {
  linkedinProfiles,
  emailAccounts,
} from '../../../../data/mock/senderProfiles'

const TABS = [
  { value: 'linkedin', label: 'LinkedIn Profile' },
  { value: 'email', label: 'Email Accounts' },
]

/** Step 2 — Sender Profiles (screen 10). */
export default function Step2Senders() {
  const { state, dispatch } = useWizard()
  const tab = state.senders.subTab
  const isLinkedin = tab === 'linkedin'
  const profiles = isLinkedin ? linkedinProfiles : emailAccounts

  return (
    <div className="space-y-4">
      <SegmentedControl
        items={TABS}
        value={tab}
        onChange={(v) =>
          dispatch({ type: WIZARD_ACTIONS.SET_SENDER_TAB, payload: v })
        }
      />

      <Card padded className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-text">
              {isLinkedin ? (
                <LinkedInIcon className="h-4 w-4 text-info" />
              ) : (
                <Mail className="h-4 w-4 text-info" />
              )}
              {isLinkedin ? 'LinkedIn Profile' : 'Email Accounts'}
            </h3>
            <p className="mt-0.5 text-sm text-muted">
              Pick which {isLinkedin ? 'LinkedIn profiles' : 'email accounts'}{' '}
              you want to use for this campaign.
            </p>
          </div>
          <Button variant="soft" iconLeft={Plus}>
            Add Account
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted">
            Show
            <Select
              size="sm"
              buttonClassName="w-16"
              value="10"
              onChange={() => {}}
              options={[
                { value: '10', label: '10' },
                { value: '25', label: '25' },
                { value: '50', label: '50' },
              ]}
            />
          </div>
          <Input
            icon={Search}
            placeholder="Search"
            containerClassName="w-56"
            className="h-9"
          />
        </div>

        <SenderTable
          profiles={profiles}
          selectedIds={state.senders.selectedIds}
          onToggle={(id) =>
            dispatch({ type: WIZARD_ACTIONS.TOGGLE_SENDER, payload: id })
          }
          limitLabel={isLinkedin ? 'Invites' : 'Emails'}
          typeIcon={isLinkedin ? LinkedInIcon : Mail}
        />
      </Card>
    </div>
  )
}
