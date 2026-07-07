import {
  Rocket,
  MessageSquare,
  Send,
  UserCheck,
  PauseCircle,
  ScrollText,
} from 'lucide-react'
import { Card } from '../../../../../components/ui'

/** Icon + color per activity type, used for the timeline badges. */
const ACTIVITY_META = {
  started: { Icon: Rocket, className: 'bg-primary-500' },
  reply: { Icon: MessageSquare, className: 'bg-info' },
  followup: { Icon: Send, className: 'bg-danger' },
  connection: { Icon: UserCheck, className: 'bg-success' },
  paused: { Icon: PauseCircle, className: 'bg-warning' },
}

const FALLBACK_META = { Icon: MessageSquare, className: 'bg-primary-500' }

/** Recent Campaign Activity timeline (screen 13, right). */
export function RecentActivity({ activity }) {
  return (
    <Card padded>
      <h3 className="text-base font-semibold text-text">
        Recent Campaign Activity
      </h3>

      <ul className="mt-4 space-y-0">
        {activity.map((item, i) => {
          const { Icon, className } = ACTIVITY_META[item.type] ?? FALLBACK_META
          return (
            <li key={item.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm ${className}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                {i < activity.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-4 pt-1">
                <p className="text-xs text-subtle">{item.time}</p>
                <p className="text-sm font-medium text-text">{item.text}</p>
                <p className="text-xs text-muted">by {item.by}</p>
              </div>
            </li>
          )
        })}
      </ul>

      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
      >
        <ScrollText className="h-4 w-4" />
        Open Activity Log
      </a>
    </Card>
  )
}
