import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
  schema?: object
}

const SITE = 'https://venneperlodge.nl'
const DEFAULT_TITLE = 'Venneper Lodge — Natuurlijk Gastvrij'
const DEFAULT_DESC =
  'Restaurant Venneper Lodge in Nieuw-Vennep, aan de rand van het Venneperhout. Ontbijt, lunch, diner, pannenkoeken, kinderfeestjes en vergaderingen. Reserveer direct!'
const DEFAULT_IMAGE = `${SITE}/og-image.jpg`

export default function SEO({ title, description, path = '/', image, schema }: SEOProps) {
  const fullTitle = title ? `${title} | Venneper Lodge` : DEFAULT_TITLE
  const desc = description ?? DEFAULT_DESC
  const url = `${SITE}${path}`
  const img = image ?? DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content="Venneper Lodge" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {/* Extra structured data per page */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
