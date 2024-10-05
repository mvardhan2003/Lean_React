import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import Message from './Message.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <Message />
  </StrictMode>,
)
