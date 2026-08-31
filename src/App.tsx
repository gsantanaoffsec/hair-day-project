import { BrowserRouter, Route, Routes } from 'react-router'
import PageComponents from './pages/pages-components'
import PageHome from './pages/page-home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<PageHome />} />
        <Route path="/components" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  )
}
