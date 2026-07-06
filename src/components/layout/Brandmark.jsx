import { cn } from '../../lib/cn'

/**
 * Brand logo: a gradient glyph (an upward campaign/analytics trend) + wordmark.
 * @param {{ showText?: boolean, className?: string }} props
 */
export function Brandmark({ showText = true, className }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="ft-brand" x1="4" y1="28" x2="28" y2="4">
            <stop offset="0" stopColor="#6d5bf5" />
            <stop offset="0.5" stopColor="#3b5bfe" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#ft-brand)" />
        <path
          d="M8 20.5 L14 14 L18 17.5 L24 10.5"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="10.5" r="2.1" fill="#fff" />
      </svg>
      {showText && (
        <span className="whitespace-nowrap text-[15px] font-bold tracking-tight text-text">
          Frontend Task
        </span>
      )}
    </div>
  )
}
