import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

/** Access theme state + controls. */
export function useTheme() {
  return useContext(ThemeContext)
}
