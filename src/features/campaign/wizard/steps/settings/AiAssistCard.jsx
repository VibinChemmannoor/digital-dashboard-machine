import { MessageSquareReply, Sparkles, Bot } from 'lucide-react'
import { Button, Toggle, NumberStepper } from '../../../../../components/ui'
import { useWizard } from '../../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../../context/wizardReducer'

/** "AI Assist" card (screen 11, right). */
export function AiAssistCard() {
  const { state, dispatch } = useWizard()
  const ai = state.settings.aiAssist

  const update = (patch) =>
    dispatch({
      type: WIZARD_ACTIONS.UPDATE_SETTINGS,
      payload: { aiAssist: { ...ai, ...patch } },
    })

  return (
    <div className="rounded-xl border border-border p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="flex items-center gap-1.5 text-sm font-semibold text-text">
            <Sparkles className="h-4 w-4 text-primary-600" />
            AI Assist
            <span className="text-xs font-normal text-muted">Optional</span>
          </h3>
          <p className="text-xs text-muted">Let AI handle replies for you</p>
        </div>
        <Button variant="soft" size="sm" iconLeft={Bot}>
          Train AI
        </Button>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-2.5">
            <MessageSquareReply className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
            <div>
              <p className="text-sm font-medium text-text">
                Auto message after reply detected
              </p>
              <p className="text-xs text-muted">
                AI auto-replies to leads who message you back
              </p>
            </div>
          </div>
          <Toggle
            checked={ai.autoMessage}
            onChange={(v) => update({ autoMessage: v })}
          />
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-text">
            <Bot className="h-4 w-4 shrink-0 text-muted" />
            <span className="font-medium">Auto handle leads after</span>
            <NumberStepper
              value={ai.followUps}
              onChange={(n) => update({ followUps: n })}
              min={1}
              max={10}
            />
            <span className="font-medium">Follow-ups</span>
          </div>
          <Toggle
            checked={ai.autoHandle}
            onChange={(v) => update({ autoHandle: v })}
          />
        </div>
      </div>
    </div>
  )
}
