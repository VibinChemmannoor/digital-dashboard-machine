import { useState } from 'react'
import { Table, Checkbox, Chip, AvatarGroup } from '../../../components/ui'
import { CampaignRowMenu } from './CampaignRowMenu'
import {
  ChannelBadges,
  CrmCell,
  MetricCell,
  StatusBadge,
  CreatedMeta,
} from './cells'

function DailyLimit({ value }) {
  return <Chip>{value} invites/day</Chip>
}

/**
 * All-campaigns table (desktop) with a stacked card list on mobile. Manages
 * its own row-selection state.
 * @param {{ campaigns: import('../../../data/mock/campaigns').Campaign[] }} props
 */
export function CampaignTable({ campaigns }) {
  const [selected, setSelected] = useState(() => new Set())

  const allChecked = campaigns.length > 0 && selected.size === campaigns.length
  const someChecked = selected.size > 0 && !allChecked

  const toggleAll = () =>
    setSelected(allChecked ? new Set() : new Set(campaigns.map((c) => c.id)))

  const toggleOne = (id) =>
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-border md:block">
        <Table>
          <Table.Head>
            <Table.Row className="bg-surface-2">
              <Table.HeadCell className="w-10">
                <Checkbox
                  checked={allChecked}
                  indeterminate={someChecked}
                  onChange={toggleAll}
                  aria-label="Select all"
                />
              </Table.HeadCell>
              <Table.HeadCell>All Campaigns</Table.HeadCell>
              <Table.HeadCell>CRM</Table.HeadCell>
              <Table.HeadCell>Invites Sent</Table.HeadCell>
              <Table.HeadCell>Reply Rate</Table.HeadCell>
              <Table.HeadCell>Email Sent</Table.HeadCell>
              <Table.HeadCell>Sender</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Daily Limit</Table.HeadCell>
              <Table.HeadCell className="w-10" />
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {campaigns.map((c) => (
              <Table.Row key={c.id} className="bg-surface hover:bg-surface-2">
                <Table.Cell>
                  <Checkbox
                    checked={selected.has(c.id)}
                    onChange={() => toggleOne(c.id)}
                    aria-label={`Select ${c.name}`}
                  />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text">{c.name}</span>
                      <ChannelBadges channels={c.channels} />
                    </div>
                    <CreatedMeta date={c.createdAt} />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <CrmCell crm={c.crm} meta={c.crmMeta} />
                </Table.Cell>
                <Table.Cell>
                  <MetricCell
                    value={c.invitesSent}
                    sub={`${c.invitesAcceptedPct}% Accepted`}
                  />
                </Table.Cell>
                <Table.Cell>
                  <MetricCell
                    value={c.replyRate}
                    sub={`${c.replyReceivedPct}% Received`}
                  />
                </Table.Cell>
                <Table.Cell>
                  <MetricCell
                    value={c.emailSent}
                    sub={`${c.mailOpenedPct}% Mail Opened`}
                  />
                </Table.Cell>
                <Table.Cell>
                  <AvatarGroup people={c.senders} />
                </Table.Cell>
                <Table.Cell>
                  <StatusBadge status={c.status} />
                </Table.Cell>
                <Table.Cell>
                  <DailyLimit value={c.dailyLimit} />
                </Table.Cell>
                <Table.Cell align="right">
                  <CampaignRowMenu />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {campaigns.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border border-border bg-surface p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-text">{c.name}</span>
                  <ChannelBadges channels={c.channels} />
                </div>
                <CreatedMeta date={c.createdAt} />
              </div>
              <CampaignRowMenu />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-border pt-3">
              <Field label="CRM">
                <CrmCell crm={c.crm} meta={c.crmMeta} />
              </Field>
              <Field label="Status">
                <StatusBadge status={c.status} />
              </Field>
              <Field label="Invites Sent">
                <MetricCell
                  value={c.invitesSent}
                  sub={`${c.invitesAcceptedPct}% Accepted`}
                />
              </Field>
              <Field label="Reply Rate">
                <MetricCell
                  value={c.replyRate}
                  sub={`${c.replyReceivedPct}% Received`}
                />
              </Field>
              <Field label="Email Sent">
                <MetricCell
                  value={c.emailSent}
                  sub={`${c.mailOpenedPct}% Mail Opened`}
                />
              </Field>
              <Field label="Daily Limit">
                <DailyLimit value={c.dailyLimit} />
              </Field>
              <Field label="Sender">
                <AvatarGroup people={c.senders} />
              </Field>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-medium uppercase tracking-wide text-subtle">
        {label}
      </span>
      {children}
    </div>
  )
}
