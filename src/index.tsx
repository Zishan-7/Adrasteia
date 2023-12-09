import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Appc from './App1'
import './index.css'
import Providers from './components/providers/Providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Providers>
    <Appc />
  </Providers>
)
