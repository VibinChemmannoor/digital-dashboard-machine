import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge class names conditionally, resolving Tailwind conflicts
 * (later class wins). Use everywhere `className` is composed.
 *
 * @param {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
