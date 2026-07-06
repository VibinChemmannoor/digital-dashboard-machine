import { useState } from 'react'
import {
  Search,
  FileUp,
  Users,
  Webhook,
  Eye,
  Copy,
  Pencil,
  Trash2,
  Info,
} from 'lucide-react'
import { LinkedInIcon } from '../components/icons/BrandIcons'
import { useSetBreadcrumb } from '../hooks/useBreadcrumb'
import {
  Accordion,
  Avatar,
  Badge,
  BarChart,
  Button,
  Card,
  Checkbox,
  Chip,
  DropdownMenu,
  Dropzone,
  EmptyState,
  GaugeChart,
  HealthRing,
  Input,
  Modal,
  NumberStepper,
  ProgressBar,
  SegmentedControl,
  Select,
  SelectableCard,
  Stepper,
  Table,
  Toggle,
  Tooltip,
} from '../components/ui'
import { WIZARD_STEPS } from '../lib/constants'

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
        {title}
      </h2>
      <Card padded className="flex flex-wrap items-start gap-4">
        {children}
      </Card>
    </section>
  )
}

/**
 * TEMPORARY dev showcase for Phase 3 primitives (route: /kitchen-sink).
 * Safe to delete once screens are built.
 */
export default function KitchenSinkPage() {
  useSetBreadcrumb([{ label: 'Kitchen Sink' }])
  const [modal, setModal] = useState(false)
  const [checked, setChecked] = useState(true)
  const [toggle, setToggle] = useState(true)
  const [num, setNum] = useState(2)
  const [tab, setTab] = useState('linkedin')
  const [sel, setSel] = useState('csv')
  const [method, setMethod] = useState('linkedin')
  const [step, setStep] = useState(0)

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4 lg:p-6">
      <h1 className="text-xl font-bold text-text">UI Primitives</h1>

      <Section title="Buttons">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="subtle">Close</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Delete</Button>
        <Button iconLeft={Search}>With icon</Button>
        <Button loading>Loading</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </Section>

      <Section title="Badges & Chips">
        <Badge variant="success" dot>
          Running
        </Badge>
        <Badge variant="success">Connected</Badge>
        <Badge variant="warning" dot>
          Warming
        </Badge>
        <Badge variant="danger" dot>
          Error
        </Badge>
        <Badge variant="primary">Recommended</Badge>
        <Badge variant="info">Premium</Badge>
        <Chip>Invites: 40 / day</Chip>
        <Chip onRemove={() => {}}>LinkedIn</Chip>
      </Section>

      <Section title="Inputs, Select, Toggle, Checkbox, NumberStepper">
        <Input
          placeholder="Search"
          icon={Search}
          containerClassName="max-w-xs"
        />
        <Select
          className="w-40"
          value={sel}
          onChange={setSel}
          options={[
            { value: 'all', label: 'All' },
            { value: 'csv', label: 'Upload CSV' },
            { value: 'linkedin', label: 'LinkedIn Search' },
          ]}
        />
        <div className="flex items-center gap-3">
          <Toggle checked={toggle} onChange={setToggle} />
          <Checkbox checked={checked} onChange={setChecked} label="Enabled" />
          <NumberStepper value={num} onChange={setNum} />
        </div>
      </Section>

      <Section title="Segmented control & Progress">
        <SegmentedControl
          value={tab}
          onChange={setTab}
          items={[
            { value: 'linkedin', label: 'LinkedIn Profile' },
            { value: 'email', label: 'Email Accounts' },
          ]}
        />
        <div className="w-full max-w-sm space-y-2">
          <ProgressBar value={80} color="primary" />
          <ProgressBar value={32} color="info" />
          <ProgressBar value={11} color="danger" />
        </div>
      </Section>

      <Section title="Selectable cards">
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          <SelectableCard
            icon={LinkedInIcon}
            title="LinkedIn Search"
            description="Basic, Sales Nav, Post, Group or Event URL"
            selected={method === 'linkedin'}
            onSelect={() => setMethod('linkedin')}
          />
          <SelectableCard
            icon={FileUp}
            title="Upload CSV File"
            description="Upload LinkedIn profiles via CSV."
            selected={method === 'csv'}
            onSelect={() => setMethod('csv')}
          />
          <SelectableCard
            icon={Users}
            title="Lookalike Audience"
            description="Use Lead Finder to find audience."
            selected={method === 'lookalike'}
            onSelect={() => setMethod('lookalike')}
          />
          <SelectableCard
            icon={Webhook}
            title="Inbound Webhook"
            description="Sync leads from zapier, n8n in real time"
            selected={method === 'webhook'}
            onSelect={() => setMethod('webhook')}
          />
        </div>
      </Section>

      <Section title="Stepper">
        <Stepper
          className="w-full"
          steps={WIZARD_STEPS}
          current={step}
          maxReached={3}
          onStepClick={setStep}
        />
      </Section>

      <Section title="Charts (d3): HealthRing, GaugeChart, BarChart">
        <div className="flex items-center gap-4">
          <HealthRing value={72} />
          <HealthRing value={92} size={52} />
          <HealthRing value={38} size={52} />
        </div>
        <div className="w-52">
          <GaugeChart value={80} sublabel="Discussions" />
        </div>
        <div className="w-full max-w-xl">
          <BarChart
            data={[
              { label: 'New Leads', value: 1628, color: '#6366f1' },
              {
                label: 'Invites Sent',
                value: 988,
                sub: '61%',
                color: '#8ea2f5',
              },
              {
                label: 'Invites Accepted',
                value: 507,
                sub: '49%',
                color: '#bcd0f7',
              },
              {
                label: 'Messages Sent',
                value: 460,
                sub: '93%',
                color: '#a7e3c4',
              },
              { label: 'Replies', value: 202, sub: '44%', color: '#cdeede' },
            ]}
          />
        </div>
      </Section>

      <Section title="Accordion">
        <Accordion
          className="w-full"
          title="Choose Import Method"
          rightSlot={<Badge>Step 1 of 2</Badge>}
        >
          <p className="text-sm text-muted">
            Accordion body content goes here.
          </p>
        </Accordion>
      </Section>

      <Section title="Table + DropdownMenu + Avatar">
        <Table className="w-full">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell sortable>Status</Table.HeadCell>
              <Table.HeadCell align="right">Actions</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {['Tech Founder', 'Growth Campaign'].map((name) => (
              <Table.Row key={name} className="hover:bg-surface-2">
                <Table.Cell>
                  <div className="flex items-center gap-2.5">
                    <Avatar name={name} size="sm" />
                    <span className="font-medium text-text">{name}</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" dot>
                    Running
                  </Badge>
                </Table.Cell>
                <Table.Cell align="right">
                  <DropdownMenu
                    items={[
                      { label: 'View Analytics', icon: Eye },
                      { label: 'Edit Sequence', icon: Pencil },
                      { label: 'Duplicate', icon: Copy },
                      { label: 'Delete', icon: Trash2, danger: true },
                    ]}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Section>

      <Section title="Dropzone, EmptyState, Tooltip, Modal">
        <Dropzone className="w-full max-w-md" onFiles={() => {}} />
        <EmptyState
          icon={Search}
          title="You don't have any leads"
          description="Create a lead list to start running campaigns"
          action={<Button>Create a List</Button>}
        />
        <Tooltip content="Helpful hint">
          <span className="inline-flex items-center gap-1 text-sm text-muted">
            <Info className="h-4 w-4" /> Hover me
          </span>
        </Tooltip>
        <Button onClick={() => setModal(true)}>Open modal</Button>
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          title="Select Workflow Mode"
          description="Choose how you want your campaign to behave"
          footer={
            <>
              <Button variant="subtle" onClick={() => setModal(false)}>
                Close
              </Button>
              <Button onClick={() => setModal(false)}>Next</Button>
            </>
          }
        >
          <p className="text-sm text-muted">Modal body content.</p>
        </Modal>
      </Section>
    </div>
  )
}
