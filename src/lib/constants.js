import {
  Megaphone,
  ListChecks,
  Users,
  Settings2,
  BarChart3,
} from 'lucide-react'

/** Tailwind-aligned breakpoints (px). Mirror in useMediaQuery calls. */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

/** Primary sidebar navigation. */
export const NAV_ITEMS = [
  { key: 'campaign', label: 'Campaign', icon: Megaphone, to: '/campaigns' },
]

/** The 4 steps of the Advance Campaign wizard. */
export const WIZARD_STEPS = [
  {
    key: 'audience',
    label: 'Define Target Audience',
    shortLabel: 'Audience',
    icon: ListChecks,
    path: 'step-1-audience',
  },
  {
    key: 'senders',
    label: 'Sender Profiles',
    shortLabel: 'Senders',
    icon: Users,
    path: 'step-2-senders',
  },
  {
    key: 'settings',
    label: 'Settings',
    shortLabel: 'Settings',
    icon: Settings2,
    path: 'step-3-settings',
  },
  {
    key: 'stats',
    label: 'Stats',
    shortLabel: 'Stats',
    icon: BarChart3,
    path: 'step-4-stats',
  },
]

export const THEME_STORAGE_KEY = 'ft-theme'
export const SIDEBAR_STORAGE_KEY = 'ft-sidebar-collapsed'
