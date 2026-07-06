import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import AppRoutes from './routes'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
