import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import MenuPage from './pages/Menu'
import Beleving from './pages/Beleving'
import OverOns from './pages/OverOns'
import Contact from './pages/Contact'
import WerkenBij from './pages/WerkenBij'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/beleving" element={<Beleving />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/werken-bij" element={<WerkenBij />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
