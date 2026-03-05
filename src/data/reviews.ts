export interface Review {
  name: string
  rating: number
  text: string
  date: string
}

export const reviews: Review[] = [
  {
    name: 'M. Ploegje',
    rating: 5,
    text: 'Wij hadden een kater van een feestje. Begin je dag daarom super goed. Met het ontbijtje van hun. Toppie',
    date: 'Google Review',
  },
  {
    name: 'Eric Kalle',
    rating: 5,
    text: 'Prima eten, vriendelijke bediening. Prachtig pand, mooi ruim terras. Ruim parkeerterrein. Feestje om daar te zijn',
    date: 'Google Review',
  },
  {
    name: 'M. Opdam',
    rating: 5,
    text: 'Mooie locatie, super vriendelijke personeel en lekker eten! Hier ga je mij nog veel vaker zien! Thanks toppers!',
    date: 'Google Review',
  },
  {
    name: 'Google Gast',
    rating: 5,
    text: 'Het is een fijne plek voor iedereen. Geniet van de heerlijkste hapjes en drankjes, verrukkelijke pannenkoeken en vooral de gastvrijheid waardoor Venneper Lodge als thuis voelt.',
    date: 'Google Review',
  },
  {
    name: 'Google Gast',
    rating: 5,
    text: 'De jongste gasten zullen zich opperbest vermaken, terwijl u geniet van fijne gesprekken en natuurlijk alles wat het uitgebreide menu te bieden heeft.',
    date: 'Google Review',
  },
  {
    name: 'Google Gast',
    rating: 5,
    text: 'Een prachtige moderne houten Lodge met een mooi groene aangelegde tuin. Het ruime terras met lounge is een unieke plek om buiten te genieten.',
    date: 'Google Review',
  },
]
