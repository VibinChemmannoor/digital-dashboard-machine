/** Analytics for the populated Stats dashboard (screen 13). */
export const campaignStats = {
  name: 'Tech Founder',
  status: 'running',
  createdAt: '2026-01-08',
  crmConnected: true,
  processed: 74,
  total: 200,

  replyAnalysis: {
    discussions: 80,
    breakdown: [
      { key: 'positive', label: 'Positive', value: 12, color: '#3b5bfe' },
      { key: 'neutral', label: 'Neutral', value: 14, color: '#f59e0b' },
      { key: 'negative', label: 'Negative', value: 8, color: '#ef4444' },
    ],
  },

  overview: [
    { label: 'New Leads', value: 1628, color: '#6366f1' },
    { label: 'Invites Sent', value: 988, sub: '61%', color: '#8ea2f5' },
    { label: 'Invites Accepted', value: 507, sub: '49%', color: '#bcd0f7' },
    { label: 'Messages Sent', value: 460, sub: '93%', color: '#a7e3c4' },
    { label: 'Replies', value: 202, sub: '44%', color: '#cdeede' },
  ],

  actions: [
    { label: 'Remaining Leads', value: 110 },
    { label: 'Profile Viewed', value: 45 },
    { label: 'Follow-up message', value: 10 },
    { label: 'Profile Followed', value: 140 },
    { label: 'InMails Sent', value: 20 },
    { label: 'Skills Endorsed', value: 50 },
    { label: 'Emails', value: 89 },
    { label: 'Comments Added', value: 54 },
  ],

  team: [
    { name: 'Aman S.', avatar: 'https://i.pravatar.cc/64?img=12' },
    { name: 'Suresh K.', avatar: 'https://i.pravatar.cc/64?img=33' },
    { name: 'Mia C.', avatar: 'https://i.pravatar.cc/64?img=25' },
  ],

  replyPerformance: [
    { label: 'Follow-up', value: 80, color: 'primary' },
    { label: 'InMail', value: 32, color: 'success' },
    { label: 'Email', value: 11, color: 'danger' },
    { label: 'Connection Message', value: 79, color: 'info' },
  ],

  activity: [
    { id: 1, time: '09:14 AM', text: 'Campaign started', by: 'Aman S.' },
    { id: 2, time: '10:30 AM', text: 'Reply received', by: 'Suresh K.' },
    { id: 3, time: '10:35 AM', text: 'Follow-up message sent', by: 'System' },
    {
      id: 4,
      time: '10:36 AM',
      text: 'Connection accepted',
      by: 'Suresh K. (Prospect)',
    },
    { id: 5, time: '10:45 AM', text: 'Campaign paused', by: 'Aman S.' },
  ],
}
