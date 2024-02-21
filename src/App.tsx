import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { DevBlog } from './pages/DevBlog'
import { Error404 } from './pages/404'
import { ThemeProvider } from './themes/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/blog" element={<DevBlog />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
