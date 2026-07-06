import { useState } from 'react'
import { cn } from '../../lib/cn'
import { initials as toInitials } from '../../lib/format'

const SIZES = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-11 w-11 text-sm',
  xl: 'h-14 w-14 text-base',
}

const DOT = {
  xs: 'h-2 w-2',
  sm: 'h-2.5 w-2.5',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
  xl: 'h-3.5 w-3.5',
}

/**
 * Circular avatar with an image and initials fallback.
 * @param {{ src?: string, name?: string, size?: keyof typeof SIZES,
 *   online?: boolean, className?: string }} props
 */
export function Avatar({
  src,
  name = '',
  size = 'md',
  online = false,
  className,
}) {
  const [failed, setFailed] = useState(false)
  const showImg = src && !failed

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-primary-100 font-semibold uppercase text-primary-700 dark:bg-primary-900/40 dark:text-primary-200',
        SIZES[size],
        className,
      )}
    >
      {showImg ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        toInitials(name)
      )}
      {online && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-surface bg-success',
            DOT[size],
          )}
        />
      )}
    </span>
  )
}
