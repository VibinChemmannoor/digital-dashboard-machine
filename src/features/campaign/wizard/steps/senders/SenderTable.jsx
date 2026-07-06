import {
  Table,
  Checkbox,
  Chip,
  Avatar,
  HealthRing,
  Badge,
} from '../../../../../components/ui'

const STATUS = {
  connected: { variant: 'success', label: 'Connected' },
  warming: { variant: 'warning', label: 'Warming' },
  error: { variant: 'danger', label: 'Error' },
}

/**
 * Sender profiles table (screen 10).
 * @param {{
 *   profiles: import('../../../../../data/mock/senderProfiles').SenderProfile[],
 *   selectedIds: string[],
 *   onToggle: (id: string) => void,
 *   limitLabel?: string,
 *   typeIcon?: React.ComponentType<any>,
 * }} props
 */
export function SenderTable({
  profiles,
  selectedIds,
  onToggle,
  limitLabel = 'Invites',
  typeIcon: TypeIcon,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <Table>
        <Table.Head>
          <Table.Row className="bg-surface-2">
            <Table.HeadCell className="w-10" />
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell align="center">Health</Table.HeadCell>
            <Table.HeadCell>Daily Limits</Table.HeadCell>
            <Table.HeadCell>Account Type</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {profiles.map((p) => {
            const status = STATUS[p.status] ?? STATUS.warming
            return (
              <Table.Row key={p.id} className="bg-surface hover:bg-surface-2">
                <Table.Cell>
                  <Checkbox
                    checked={selectedIds.includes(p.id)}
                    onChange={() => onToggle(p.id)}
                    aria-label={`Select ${p.name}`}
                  />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2.5">
                    <Avatar src={p.avatar} name={p.name} size="sm" />
                    <div className="min-w-0">
                      <p className="truncate font-medium text-text">{p.name}</p>
                      <p className="truncate text-xs text-muted">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell align="center">
                  <div className="flex justify-center">
                    <HealthRing value={p.health} size={40} />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Chip>
                    {limitLabel}: {p.dailyLimit} / day
                  </Chip>
                </Table.Cell>
                <Table.Cell>
                  <span className="inline-flex items-center gap-1.5 text-sm text-body">
                    {TypeIcon && <TypeIcon className="h-4 w-4 text-info" />}
                    {p.accountType}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant={status.variant} dot>
                    {status.label}
                  </Badge>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}
