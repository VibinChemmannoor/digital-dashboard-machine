/** Initial wizard state. */
export const initialWizardState = {
  workflowMode: null, // 'advanced' | 'standard'
  maxReached: 0, // furthest step index unlocked
  audience: {
    method: null, // 'linkedin' | 'csv' | 'lookalike' | 'webhook'
    linkedinUrl: '',
    validated: false,
    csvFile: null,
    csvColumns: [],
    mapping: {}, // { contactField: csvColumn }
    unmappedSearch: '',
    selectedLeadListIds: [],
  },
  senders: {
    subTab: 'linkedin', // 'linkedin' | 'email'
    selectedIds: [],
  },
  settings: {
    campaignName: '',
    timezone: 'usa',
    activeDays: ['mon', 'tue', 'wed', 'thu', 'sat'],
    timeRanges: [{ start: '11:30', end: '16:00', tz: 'USA Timezone' }],
    aiAssist: { autoMessage: false, autoHandle: false, followUps: 2 },
    triggerZapier: true,
    events: ['response_received'],
  },
  stats: { launched: false },
}

export const WIZARD_ACTIONS = {
  SET_MODE: 'set_mode',
  SET_MAX_REACHED: 'set_max_reached',
  SET_METHOD: 'set_method',
  UPDATE_AUDIENCE: 'update_audience',
  SET_MAPPING: 'set_mapping',
  TOGGLE_LEAD_LIST: 'toggle_lead_list',
  SET_SENDER_TAB: 'set_sender_tab',
  TOGGLE_SENDER: 'toggle_sender',
  UPDATE_SETTINGS: 'update_settings',
  TOGGLE_DAY: 'toggle_day',
  TOGGLE_EVENT: 'toggle_event',
  LAUNCH: 'launch',
}

const A = WIZARD_ACTIONS

function toggle(list, value) {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value]
}

export function wizardReducer(state, action) {
  switch (action.type) {
    case A.SET_MODE:
      return { ...state, workflowMode: action.payload }
    case A.SET_MAX_REACHED:
      return {
        ...state,
        maxReached: Math.max(state.maxReached, action.payload),
      }
    case A.SET_METHOD:
      return {
        ...state,
        audience: { ...state.audience, method: action.payload },
      }
    case A.UPDATE_AUDIENCE:
      return { ...state, audience: { ...state.audience, ...action.payload } }
    case A.SET_MAPPING:
      return {
        ...state,
        audience: {
          ...state.audience,
          mapping: { ...state.audience.mapping, ...action.payload },
        },
      }
    case A.TOGGLE_LEAD_LIST:
      return {
        ...state,
        audience: {
          ...state.audience,
          selectedLeadListIds: toggle(
            state.audience.selectedLeadListIds,
            action.payload,
          ),
        },
      }
    case A.SET_SENDER_TAB:
      return { ...state, senders: { ...state.senders, subTab: action.payload } }
    case A.TOGGLE_SENDER:
      return {
        ...state,
        senders: {
          ...state.senders,
          selectedIds: toggle(state.senders.selectedIds, action.payload),
        },
      }
    case A.UPDATE_SETTINGS:
      return { ...state, settings: { ...state.settings, ...action.payload } }
    case A.TOGGLE_DAY:
      return {
        ...state,
        settings: {
          ...state.settings,
          activeDays: toggle(state.settings.activeDays, action.payload),
        },
      }
    case A.TOGGLE_EVENT:
      return {
        ...state,
        settings: {
          ...state.settings,
          events: toggle(state.settings.events, action.payload),
        },
      }
    case A.LAUNCH:
      return { ...state, stats: { ...state.stats, launched: true } }
    default:
      return state
  }
}
