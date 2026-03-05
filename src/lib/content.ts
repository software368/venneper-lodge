// Content loaders that read from TinaCMS JSON files
// These are imported statically at build time

import heroData from '../../content/home/hero.json'
import pillarsData from '../../content/home/pillars.json'
import storyData from '../../content/home/story.json'
import menuHighlightsData from '../../content/home/menu-highlights.json'
import reservationCtaData from '../../content/home/reservation-cta.json'

import ontbijtData from '../../content/menu/ontbijt.json'
import lunchData from '../../content/menu/lunch.json'
import dinerData from '../../content/menu/diner.json'
import kinderkaartData from '../../content/menu/kinderkaart.json'
import drankkaartData from '../../content/menu/drankkaart.json'

import review1 from '../../content/reviews/review-1.json'
import review2 from '../../content/reviews/review-2.json'
import review3 from '../../content/reviews/review-3.json'
import review4 from '../../content/reviews/review-4.json'
import review5 from '../../content/reviews/review-5.json'
import review6 from '../../content/reviews/review-6.json'

import teamLodge from '../../content/team/team-lodge.json'
import teamKeuken from '../../content/team/keuken.json'
import teamService from '../../content/team/service.json'

import jobBediening from '../../content/jobs/bediening.json'
import jobKok from '../../content/jobs/kok.json'
import jobKeukenmedewerker from '../../content/jobs/keukenmedewerker.json'

// Home page content
export const hero = heroData
export const pillars = pillarsData
export const story = storyData
export const menuHighlights = menuHighlightsData
export const reservationCta = reservationCtaData

// Menu sections sorted by order
export const menuSections = [
  ontbijtData,
  lunchData,
  dinerData,
  kinderkaartData,
  drankkaartData,
].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

// Reviews
export const reviews = [review1, review2, review3, review4, review5, review6]

// Team members sorted by order
export const teamMembers = [teamLodge, teamKeuken, teamService].sort(
  (a, b) => (a.order ?? 0) - (b.order ?? 0)
)

// Jobs
export const jobs = [jobBediening, jobKok, jobKeukenmedewerker]
