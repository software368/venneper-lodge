import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/menu', label: 'Menu' },
  { to: '/beleving', label: 'Beleving' },
  { to: '/over-ons', label: 'Over Ons' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const bg = scrolled || !isHome
    ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`font-display text-2xl font-bold tracking-tight ${textColor}`}>
            Venneper Lodge
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-burnt-amber ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact#reserveren"
              className="rounded-full bg-burnt-amber px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-burnt-amber/90 hover:scale-105"
            >
              Reserveer
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${textColor}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-white/98 backdrop-blur-md border-t border-warm-sand">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-charcoal text-lg font-medium py-2 hover:text-burnt-amber transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact#reserveren"
              className="block w-full text-center rounded-full bg-burnt-amber px-6 py-3 text-white font-semibold mt-4"
            >
              Reserveer
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
