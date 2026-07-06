/**
 * Format an integer with thousands separators. e.g. 1628 -> "1,628"
 * @param {number} n
 */
export function formatNumber(n) {
  if (n == null || Number.isNaN(n)) return '-'
  return new Intl.NumberFormat('en-US').format(n)
}

/**
 * Format a 0–100 value as a percent string. e.g. 61 -> "61%"
 * @param {number} n
 */
export function formatPercent(n) {
  if (n == null || Number.isNaN(n)) return '-'
  return `${Math.round(n)}%`
}

/**
 * Format an ISO date (or Date) as "8 Jan 2026".
 * @param {string|Date} date
 */
export function formatDate(date) {
  const d = date instanceof Date ? date : new Date(date)
  if (Number.isNaN(d.getTime())) return '-'
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(d)
}

/** First-letter initials from a name. e.g. "John Doe" -> "JD" */
export function initials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
}
