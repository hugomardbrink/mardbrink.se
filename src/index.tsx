import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { MainContainer } from './index.styled'
import { ThemeProvider } from './themes/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MainContainer>
        <App />
      </MainContainer>
    </ThemeProvider>
  </React.StrictMode>,
)
