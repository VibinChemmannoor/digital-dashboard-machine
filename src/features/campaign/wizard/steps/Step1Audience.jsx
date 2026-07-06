import { cn } from '../../../../lib/cn'
import { Accordion, Badge } from '../../../../components/ui'
import { useWizard } from '../../../../hooks/useWizard'
import { MethodCardRow } from './audience/MethodCardRow'
import { LinkedInSearchPanel } from './audience/LinkedInSearchPanel'
import { UploadCsvPanel } from './audience/UploadCsvPanel'
import { CsvMappingPanel } from './audience/CsvMappingPanel'
import { LookalikePanel } from './audience/LookalikePanel'
import { InboundWebhookPanel } from './audience/InboundWebhookPanel'

/** One node on the left timeline rail + its section content. */
function TimelineSection({ done, last, children }) {
  return (
    <div className="relative flex gap-3">
      <div className="flex flex-col items-center pt-4">
        <span
          className={cn(
            'h-3 w-3 shrink-0 rounded-full border-2',
            done
              ? 'border-success bg-success'
              : 'border-primary-500 bg-surface',
          )}
        />
        {!last && <span className="mt-1 w-px flex-1 bg-border" />}
      </div>
      <div className="min-w-0 flex-1 pb-4">{children}</div>
    </div>
  )
}

/** Step 1 — Define Target Audience (screens 3–7). */
export default function Step1Audience() {
  const { state } = useWizard()
  const { method, validated, csvFile, selectedLeadListIds } = state.audience

  // Build the section list based on the chosen import method.
  const sections = [
    {
      key: 'method',
      done: method != null,
      node: (
        <Accordion
          title="Choose Import Method"
          rightSlot={method === 'csv' ? <Badge>Step 1 of 2</Badge> : undefined}
        >
          <MethodCardRow />
        </Accordion>
      ),
    },
  ]

  if (method === 'linkedin') {
    sections.push({
      key: 'linkedin',
      done: validated,
      node: (
        <Accordion title="Paste LinkedIn Search URL">
          <LinkedInSearchPanel />
        </Accordion>
      ),
    })
  }

  if (method === 'csv') {
    sections.push({
      key: 'csv',
      done: !!csvFile,
      node: (
        <Accordion
          title="Upload CSV File"
          rightSlot={<Badge>Step 1 of 2</Badge>}
        >
          <UploadCsvPanel />
        </Accordion>
      ),
    })
    if (csvFile) {
      sections.push({
        key: 'mapping',
        done: false,
        node: (
          <Accordion
            title="Map Properties"
            rightSlot={<Badge>Step 2 of 2</Badge>}
          >
            <CsvMappingPanel />
          </Accordion>
        ),
      })
    }
  }

  if (method === 'lookalike') {
    sections.push({
      key: 'lookalike',
      done: selectedLeadListIds.length > 0,
      node: (
        <Accordion title="Lookalikes">
          <LookalikePanel />
        </Accordion>
      ),
    })
  }

  if (method === 'webhook') {
    sections.push({
      key: 'webhook',
      done: false,
      node: (
        <Accordion title="Inbound Webhook">
          <InboundWebhookPanel />
        </Accordion>
      ),
    })
  }

  return (
    <div>
      {sections.map((s, i) => (
        <TimelineSection
          key={s.key}
          done={s.done}
          last={i === sections.length - 1}
        >
          {s.node}
        </TimelineSection>
      ))}
    </div>
  )
}
