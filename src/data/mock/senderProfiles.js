/**
 * @typedef {Object} SenderProfile
 * @property {string} id
 * @property {string} name
 * @property {string} [avatar]
 * @property {string} subtitle       connections / email address
 * @property {number} health         0–100
 * @property {number} dailyLimit
 * @property {string} accountType    e.g. "Premium", "Gmail"
 * @property {'connected'|'warming'|'error'} status
 */

/** @type {SenderProfile[]} */
export const linkedinProfiles = [
  {
    id: 'li1',
    name: 'Edgar Jones',
    avatar: 'https://i.pravatar.cc/64?img=12',
    subtitle: '1,250 connections',
    health: 72,
    dailyLimit: 40,
    accountType: 'Premium',
    status: 'connected',
  },
  {
    id: 'li2',
    name: 'Amara Silva',
    avatar: 'https://i.pravatar.cc/64?img=45',
    subtitle: '3,480 connections',
    health: 91,
    dailyLimit: 50,
    accountType: 'Sales Navigator',
    status: 'connected',
  },
  {
    id: 'li3',
    name: 'Ravi Kapoor',
    avatar: 'https://i.pravatar.cc/64?img=33',
    subtitle: '870 connections',
    health: 46,
    dailyLimit: 30,
    accountType: 'Basic',
    status: 'warming',
  },
]

/** @type {SenderProfile[]} */
export const emailAccounts = [
  {
    id: 'em1',
    name: 'edgar@frontendtask.com',
    subtitle: 'Google Workspace',
    health: 88,
    dailyLimit: 120,
    accountType: 'Gmail',
    status: 'connected',
  },
  {
    id: 'em2',
    name: 'sales@frontendtask.com',
    subtitle: 'Microsoft 365',
    health: 64,
    dailyLimit: 100,
    accountType: 'Outlook',
    status: 'warming',
  },
]
