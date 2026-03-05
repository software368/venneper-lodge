import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavItem {
  label: string
  to?: string
  children?: { label: string; to: string }[]
}

const navItems: NavItem[] = [
  { label: 'Menu', to: '/menu' },
  {
    label: 'Beleving',
    children: [
      { label: 'Kids', to: '/beleving#kids' },
      { label: 'Speurtocht', to: '/beleving#speurtocht' },
      { label: 'Verjaardag vieren', to: '/beleving#verjaardag' },
      { label: 'Gezelschappen', to: '/beleving#groepen' },
      { label: 'Private Dining', to: '/beleving#private-dining' },
      { label: 'Zakelijk', to: '/beleving#zakelijk' },
    ],
  },
  {
    label: 'Over Ons',
    children: [
      { label: 'Ons verhaal', to: '/over-ons' },
      { label: 'Sfeerimpressie', to: '/over-ons#sfeerimpressie' },
      { label: 'Vacatures', to: '/werken-bij' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
  }, [location])

  const bg = scrolled || !isHome
    ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className={`font-display text-2xl font-bold tracking-tight ${textColor}`}>
            Venneper Lodge
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-burnt-amber ${textColor}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="rounded-xl bg-warm-white shadow-lg border border-warm-sand/30 py-2 min-w-[200px]">
                        {item.children.map(child => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block px-5 py-2.5 text-sm text-charcoal hover:bg-warm-sand/30 hover:text-burnt-amber transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-burnt-amber ${textColor}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact#reserveren"
              className="ml-3 rounded-full bg-burnt-amber px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-burnt-amber/90 hover:scale-105"
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
        <div className="md:hidden bg-warm-white/98 backdrop-blur-md border-t border-warm-sand max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navItems.map(item =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between text-charcoal text-lg font-medium py-3 hover:text-burnt-amber transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map(child => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block py-2.5 text-charcoal/70 hover:text-burnt-amber transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className="block text-charcoal text-lg font-medium py-3 hover:text-burnt-amber transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
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
