import SEO from '../components/SEO'
import Hero from '../components/sections/Hero'
import ThreePillars from '../components/sections/ThreePillars'
import StoryStrip from '../components/sections/StoryStrip'
import MenuHighlights from '../components/sections/MenuHighlights'
import ReviewCarousel from '../components/sections/ReviewCarousel'
import AtmosphereGrid from '../components/sections/AtmosphereGrid'
import ReservationCTA from '../components/sections/ReservationCTA'

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        description="Restaurant Venneper Lodge in Nieuw-Vennep, aan de rand van het Venneperhout. Ontbijt, lunch, diner, pannenkoeken, speeltuin en terras. Een hippe plek voor alle leeftijden!"
      />
      <Hero />
      <ThreePillars />
      <StoryStrip />
      <MenuHighlights />
      <ReviewCarousel />
      <AtmosphereGrid />
      <ReservationCTA />
    </>
  )
}
