import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-deep-lodge text-warm-sand/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl font-bold text-warm-white">
              Venneper Lodge
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Een hippe plek voor ALLE leeftijden! Aan de rand van het Venneperhout in Nieuw Vennep. Jong en oud, groot en klein — het is een fijne plek voor iedereen.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/people/Venneper-Lodge/100063689734846/" target="_blank" rel="noopener noreferrer" className="hover:text-warm-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/venneper_lodge/" target="_blank" rel="noopener noreferrer" className="hover:text-warm-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg font-semibold text-warm-white mb-4">Navigatie</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/menu" className="hover:text-warm-white transition-colors">Menu</Link></li>
              <li><Link to="/beleving" className="hover:text-warm-white transition-colors">Beleving</Link></li>
              <li><Link to="/over-ons" className="hover:text-warm-white transition-colors">Over Ons</Link></li>
              <li><Link to="/contact" className="hover:text-warm-white transition-colors">Contact & Reserveren</Link></li>
              <li><Link to="/werken-bij" className="hover:text-warm-white transition-colors">Werken Bij</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-warm-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Getsewoudweg 1<br />2151 MS Nieuw Vennep</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:0252348652" className="hover:text-warm-white transition-colors">0252 348 652</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@venneperlodge.nl" className="hover:text-warm-white transition-colors">info@venneperlodge.nl</a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="font-display text-lg font-semibold text-warm-white mb-4">Openingstijden</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p>Zondag t/m donderdag</p>
                  <p className="text-warm-white font-medium">09:00 — 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p>Vrijdag & zaterdag</p>
                  <p className="text-warm-white font-medium">09:00 — 21:30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-sand/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Venneper Lodge. Alle rechten voorbehouden.</p>
          <a href="/privacy" className="hover:text-warm-white transition-colors">Privacybeleid</a>
        </div>
      </div>
    </footer>
  )
}
