import { Link } from 'react-router-dom'

export default function StickyReserveButton() {
  return (
    <Link
      to="/contact#reserveren"
      className="fixed bottom-6 right-6 z-40 md:hidden rounded-full bg-burnt-amber px-6 py-3 text-white font-semibold shadow-lg shadow-burnt-amber/30 transition-all hover:scale-105 active:scale-95"
    >
      Reserveer
    </Link>
  )
}
