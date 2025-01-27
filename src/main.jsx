import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route from './Route.jsx'
import { AuthProvider } from './Contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Route />
    </AuthProvider>
  </StrictMode>,
)
