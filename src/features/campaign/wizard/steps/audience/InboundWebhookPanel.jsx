import { Copy, Webhook } from 'lucide-react'
import { Button, Input } from '../../../../../components/ui'

/** Inbound webhook panel — a read-only endpoint to sync leads. */
export function InboundWebhookPanel() {
  const url = 'https://hooks.frontendtask.com/inbound/cmp_9f3a21'
  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4">
      <p className="mb-3 flex items-center gap-2 text-sm text-body">
        <Webhook className="h-4 w-4 text-muted" />
        Sync leads from Zapier, n8n or Make in real time.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input readOnly value={url} containerClassName="flex-1" />
        <Button variant="secondary" iconLeft={Copy} className="shrink-0">
          Copy URL
        </Button>
      </div>
    </div>
  )
}
