import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './pages/login/login.jsx'
import RegisterPage from './pages/registro/register.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LoginPage /> */}
    <RegisterPage />
  </StrictMode>,
)
