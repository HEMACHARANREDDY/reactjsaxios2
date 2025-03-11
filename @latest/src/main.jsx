import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exp62 from './components/Exp62.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exp62 />
  </StrictMode>,
)
