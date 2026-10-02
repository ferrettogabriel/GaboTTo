import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'

// Keep links shared before the switch from hash routes working.
if (/^#\/(?!\/)/.test(window.location.hash)) {
  window.history.replaceState(window.history.state, '', window.location.hash.slice(1))
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
