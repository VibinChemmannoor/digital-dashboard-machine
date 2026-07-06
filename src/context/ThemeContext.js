import { createContext } from 'react'

/** @typedef {'light'|'dark'} Theme */

export const ThemeContext = createContext({
  theme: /** @type {Theme} */ ('light'),
  setTheme: () => {},
  toggleTheme: () => {},
})
