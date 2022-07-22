import React from 'react'
import { Main } from './pages/Main'
import { ThemeProvider } from './themes/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}

export default App
