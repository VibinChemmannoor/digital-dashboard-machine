import { ScrollText } from 'lucide-react'
import { Card } from '../../../../../components/ui'

/** Recent Campaign Activity timeline (screen 13, right). */
export function RecentActivity({ activity }) {
  return (
    <Card padded>
      <h3 className="text-base font-semibold text-text">
        Recent Campaign Activity
      </h3>

      <ul className="mt-4 space-y-0">
        {activity.map((item, i) => (
          <li key={item.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-primary-500 bg-surface" />
              {i < activity.length - 1 && (
                <span className="my-1 w-px flex-1 bg-border" />
              )}
            </div>
            <div className="pb-4">
              <p className="text-xs text-subtle">{item.time}</p>
              <p className="text-sm font-medium text-text">{item.text}</p>
              <p className="text-xs text-muted">by {item.by}</p>
            </div>
          </li>
        ))}
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
