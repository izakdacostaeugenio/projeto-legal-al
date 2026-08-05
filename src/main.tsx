import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Senai from './components/senai.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Senai />
    {/* <App /> */}
  </StrictMode>,
)
