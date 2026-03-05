export interface Job {
  title: string
  type: string
  description: string
  hours: string
}

export const jobs: Job[] = [
  {
    title: 'Bediening',
    type: 'Part-time / Full-time',
    description: 'Ben jij een gastvrije persoonlijkheid en hou je van een dynamische werkomgeving? Wij zoeken enthousiaste medewerkers voor de bediening.',
    hours: '16-38 uur per week',
  },
  {
    title: 'Kok',
    type: 'Full-time',
    description: 'Wij zoeken een ervaren kok die onze keuken komt versterken. Je hebt ervaring in de horeca en bent creatief met seizoensproducten.',
    hours: '32-40 uur per week',
  },
  {
    title: 'Afwas / Keukenmedewerker',
    type: 'Part-time',
    description: 'Perfect als bijbaan! Help ons team in de keuken met afwas en voorbereidingen.',
    hours: '8-20 uur per week',
  },
]
