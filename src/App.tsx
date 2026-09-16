import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Inscription from './pages/Inscription'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--ivory)', color: 'var(--ink)' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
