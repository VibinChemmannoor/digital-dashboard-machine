/**
 * Lightweight, on-brand SVG illustrations for empty states. These are tasteful
 * placeholders — swap for the exact Figma exports during pixel-tuning.
 */

/** Person-with-magnifier searching an empty folder (campaign list empty). */
export function EmptyCampaignsIllustration({ className }) {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="il-folder" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8ea2f5" />
          <stop offset="1" stopColor="#5b6ef5" />
        </linearGradient>
      </defs>
      {/* question marks */}
      <text x="150" y="40" fontSize="26" fontWeight="700" fill="#c2ccf7">
        ?
      </text>
      <text x="176" y="30" fontSize="20" fontWeight="700" fill="#9db0f2">
        ?
      </text>
      {/* stacked papers */}
      <rect
        x="150"
        y="52"
        width="66"
        height="80"
        rx="8"
        fill="#e7ecfb"
        transform="rotate(8 183 92)"
      />
      <rect
        x="132"
        y="58"
        width="70"
        height="82"
        rx="8"
        fill="#fff"
        stroke="#dfe4f3"
      />
      {/* folder */}
      <path
        d="M120 92c0-6 5-11 11-11h30l8 10h34c6 0 11 5 11 11v34c0 6-5 11-11 11h-72c-6 0-11-5-11-11z"
        fill="url(#il-folder)"
      />
      {/* magnifier */}
      <circle
        cx="150"
        cy="112"
        r="22"
        fill="#eaf0ff"
        stroke="#5b6ef5"
        strokeWidth="4"
      />
      <line
        x1="166"
        y1="128"
        x2="182"
        y2="144"
        stroke="#5b6ef5"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* person */}
      <circle cx="70" cy="70" r="14" fill="#f5a3b6" />
      <path d="M48 150c0-20 12-42 26-42s26 22 26 42z" fill="#5b6ef5" />
      <rect x="40" y="150" width="60" height="8" rx="4" fill="#c7d0e6" />
    </svg>
  )
}

/** Generic "no results" magnifier. */
export function NoResultsIllustration({ className }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="52"
        cy="52"
        r="34"
        fill="#eef1fb"
        stroke="#c2ccf7"
        strokeWidth="4"
      />
      <line
        x1="76"
        y1="76"
        x2="98"
        y2="98"
        stroke="#8ea2f5"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M40 52h24M52 40v24"
        stroke="#9db0f2"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
