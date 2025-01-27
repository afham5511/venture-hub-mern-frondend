import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route from './Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Route />
  </StrictMode>,
)
