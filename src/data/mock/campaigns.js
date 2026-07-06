/**
 * @typedef {Object} Campaign
 * @property {string} id
 * @property {string} name
 * @property {('linkedin'|'email')[]} channels
 * @property {string} createdAt          ISO date
 * @property {'synced'|'unsynced'} crm
 * @property {string} [crmMeta]          e.g. "21h ago"
 * @property {number} invitesSent
 * @property {number} invitesAcceptedPct
 * @property {number} replyRate
 * @property {number} replyReceivedPct
 * @property {number} emailSent
 * @property {number} mailOpenedPct
 * @property {{ name: string, avatar?: string }[]} senders
 * @property {'running'|'paused'|'draft'} status
 * @property {number} dailyLimit
 */

const senders = [
  { name: 'Edgar Jones', avatar: 'https://i.pravatar.cc/64?img=12' },
  { name: 'Amara Silva', avatar: 'https://i.pravatar.cc/64?img=45' },
  { name: 'Ravi Kapoor', avatar: 'https://i.pravatar.cc/64?img=33' },
  { name: 'Mia Chen', avatar: 'https://i.pravatar.cc/64?img=25' },
]

/** @type {Campaign[]} */
export const campaigns = [
  {
    id: 'c1',
    name: 'Tech Founder',
    channels: ['linkedin', 'email'],
    createdAt: '2026-01-21',
    crm: 'synced',
    crmMeta: '2h ago',
    invitesSent: 265,
    invitesAcceptedPct: 50,
    replyRate: 125,
    replyReceivedPct: 50,
    emailSent: 400,
    mailOpenedPct: 50,
    senders: [senders[0], senders[1], senders[2]],
    status: 'running',
    dailyLimit: 40,
  },
  {
    id: 'c2',
    name: 'Growth Campaign',
    channels: ['linkedin', 'email'],
    createdAt: '2026-01-21',
    crm: 'unsynced',
    invitesSent: 265,
    invitesAcceptedPct: 50,
    replyRate: 125,
    replyReceivedPct: 50,
    emailSent: 400,
    mailOpenedPct: 50,
    senders: [senders[1], senders[3]],
    status: 'running',
    dailyLimit: 40,
  },
  {
    id: 'c3',
    name: 'Campaign Pro',
    channels: ['linkedin', 'email'],
    createdAt: '2026-01-21',
    crm: 'unsynced',
    invitesSent: 265,
    invitesAcceptedPct: 50,
    replyRate: 125,
    replyReceivedPct: 50,
    emailSent: 400,
    mailOpenedPct: 50,
    senders: [senders[2], senders[0], senders[3]],
    status: 'running',
    dailyLimit: 40,
  },
  {
    id: 'c4',
    name: 'Lead Engine',
    channels: ['linkedin', 'email'],
    createdAt: '2026-01-21',
    crm: 'synced',
    crmMeta: '1d ago',
    invitesSent: 265,
    invitesAcceptedPct: 50,
    replyRate: 125,
    replyReceivedPct: 50,
    emailSent: 400,
    mailOpenedPct: 50,
    senders: [senders[3], senders[1]],
    status: 'paused',
    dailyLimit: 40,
  },
  {
    id: 'c5',
    name: 'Campaign Hub',
    channels: ['linkedin', 'email'],
    createdAt: '2026-01-21',
    crm: 'synced',
    crmMeta: '3h ago',
    invitesSent: 265,
    invitesAcceptedPct: 50,
    replyRate: 125,
    replyReceivedPct: 50,
    emailSent: 400,
    mailOpenedPct: 50,
    senders: [senders[0], senders[2], senders[1], senders[3]],
    status: 'running',
    dailyLimit: 40,
  },
  {
    id: 'c6',
    name: 'Outbound Blitz',
    channels: ['linkedin'],
    createdAt: '2026-01-20',
    crm: 'synced',
    crmMeta: '6h ago',
    invitesSent: 265,
    invitesAcceptedPct: 50,
    replyRate: 125,
    replyReceivedPct: 50,
    emailSent: 400,
    mailOpenedPct: 50,
    senders: [senders[1], senders[0]],
    status: 'running',
    dailyLimit: 40,
  },
  {
    id: 'c7',
    name: 'Founder Reachout',
    channels: ['linkedin', 'email'],
    createdAt: '2026-01-20',
    crm: 'synced',
    crmMeta: '6h ago',
    invitesSent: 265,
    invitesAcceptedPct: 50,
    replyRate: 125,
    replyReceivedPct: 50,
    emailSent: 400,
    mailOpenedPct: 50,
    senders: [senders[2], senders[3], senders[0]],
    status: 'running',
    dailyLimit: 40,
  },
  {
    id: 'c8',
    name: 'Demo Pipeline',
    channels: ['email'],
    createdAt: '2026-01-19',
    crm: 'unsynced',
    invitesSent: 265,
    invitesAcceptedPct: 50,
    replyRate: 125,
    replyReceivedPct: 50,
    emailSent: 400,
    mailOpenedPct: 50,
    senders: [senders[3], senders[1]],
    status: 'draft',
    dailyLimit: 40,
  },
]

/** Filter option sets for the campaign list. */
export const CHANNEL_OPTIONS = [
  { value: 'all', label: 'Channel' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'email', label: 'Email' },
]

export const STATUS_OPTIONS = [
  { value: 'all', label: 'Status' },
  { value: 'running', label: 'Running' },
  { value: 'paused', label: 'Paused' },
  { value: 'draft', label: 'Draft' },
]
