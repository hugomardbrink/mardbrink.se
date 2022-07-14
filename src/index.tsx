import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { MainContainer } from './index.styled'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <MainContainer>
      <App />
    </MainContainer>
  </React.StrictMode>,
)
