import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { DevBlog } from './pages/DevBlog'
import { ThemeProvider } from './themes/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route index element={<Main />} />
        <Route path="" element={<Main />} />
        <Route path="/blog" element={<DevBlog />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
