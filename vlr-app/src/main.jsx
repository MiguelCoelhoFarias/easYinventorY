import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './pages/login/login.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
