export interface MenuItem {
  name: string
  description: string
  price: string
  image?: string
}

export interface MenuCategory {
  name: string
  items: MenuItem[]
}

export interface MenuSection {
  id: string
  label: string
  categories: MenuCategory[]
}

export const menuSections: MenuSection[] = [
  {
    id: 'ontbijt',
    label: 'Ontbijt',
    categories: [
      {
        name: 'Klassiekers',
        items: [
          { name: 'Lodge Ontbijt', description: 'Vers brood, croissant, jam, kaas, ham, ei, jus d\'orange en koffie of thee', price: '14,50' },
          { name: 'Pancakes Stack', description: 'Amerikaanse pancakes met ahornsiroop, vers fruit en slagroom', price: '12,50' },
          { name: 'Açaí Bowl', description: 'Açaí, granola, vers fruit, kokos en honing', price: '11,50' },
          { name: 'Eggs Benedict', description: 'Gepocheerde eieren, hollandaisesaus op brioche met bacon of zalm', price: '13,50' },
          { name: 'Avocado Toast', description: 'Geroosterd zuurdesembrood, avocado, gepocheerd ei, chiliflakes', price: '12,00' },
        ],
      },
      {
        name: 'Warme Dranken',
        items: [
          { name: 'Cappuccino', description: 'Dubbele espresso met opgeschuimde melk', price: '3,50' },
          { name: 'Flat White', description: 'Dubbele espresso met zijdezachte melk', price: '3,75' },
          { name: 'Matcha Latte', description: 'Ceremoniële matcha met havermolk', price: '4,50' },
          { name: 'Chai Latte', description: 'Gekruide thee met opgeschuimde melk', price: '4,00' },
        ],
      },
    ],
  },
  {
    id: 'lunch',
    label: 'Lunch',
    categories: [
      {
        name: 'Salades',
        items: [
          { name: 'Lodge Salade', description: 'Gegrilde kip, avocado, tomaat, ei, spekjes en honingmosterd dressing', price: '15,50' },
          { name: 'Caesar Salade', description: 'Romaine sla, parmezaan, croutons, ansjovis en caesardressing', price: '14,00' },
          { name: 'Poké Bowl', description: 'Sushi rijst, zalm, avocado, edamame, wakame en sojadressing', price: '16,50' },
        ],
      },
      {
        name: 'Broodjes & Burgers',
        items: [
          { name: 'Lodge Burger', description: 'Angus beef, cheddar, bacon, truffelmayo, brioche bun met frites', price: '17,50' },
          { name: 'Club Sandwich', description: 'Kip, bacon, ei, tomaat, sla op toast met frites', price: '14,50' },
          { name: 'Tosti Truffeltip', description: 'Truffeltip, oude kaas, rucola op zuurdesem', price: '12,50' },
          { name: 'Crispy Chicken Wrap', description: 'Krokante kip, sriracha mayo, ijsbergsla, tomaat', price: '13,50' },
        ],
      },
    ],
  },
  {
    id: 'diner',
    label: 'Diner',
    categories: [
      {
        name: 'Voorgerechten',
        items: [
          { name: 'Carpaccio', description: 'Rundercarpaccio, rucola, parmezaan, pijnboompitten, truffelolie', price: '14,50' },
          { name: 'Garnalencocktail', description: 'Hollandse garnalen, avocado, cocktailsaus, toast', price: '13,50' },
          { name: 'Soep van de Dag', description: 'Dagverse soep met brood en boter', price: '8,50' },
        ],
      },
      {
        name: 'Hoofdgerechten',
        items: [
          { name: 'Tournedos', description: 'Ossenhaas, truffel jus, seizoensgroenten, aardappelgratin', price: '29,50' },
          { name: 'Zeebaars', description: 'Gegrilde zeebaars, risotto, geroosterde groenten, bisque', price: '24,50' },
          { name: 'Lodge Ribeye', description: '300gr ribeye, kruidenboter, frites, salade', price: '27,50' },
          { name: 'Pasta Truffle', description: 'Verse tagliatelle, truffelcrème, paddenstoelen, parmezaan', price: '19,50' },
          { name: 'Vegan Bowl', description: 'Quinoa, geroosterde zoete aardappel, hummus, granaatappel', price: '17,50' },
        ],
      },
      {
        name: 'Desserts',
        items: [
          { name: 'Crème Brûlée', description: 'Klassieke crème brûlée met vanille', price: '9,50' },
          { name: 'Chocolade Fondant', description: 'Warm met vanille-ijs en rode vruchten', price: '10,50' },
          { name: 'Tiramisu', description: 'Huisgemaakt met mascarpone en espresso', price: '9,50' },
        ],
      },
    ],
  },
  {
    id: 'kinderkaart',
    label: 'Kinderkaart',
    categories: [
      {
        name: 'Voor de Kleintjes',
        items: [
          { name: 'Kinderpannenkoek', description: 'Pannenkoek met stroop of poedersuiker', price: '7,50' },
          { name: 'Mini Burger', description: 'Klein hamburger met frietjes', price: '9,50' },
          { name: 'Kaassoufflé met Frites', description: 'Twee kaassoufflés met frietjes en appelmoes', price: '8,50' },
          { name: 'Pasta Bolognese', description: 'Penne met huisgemaakte bolognesesaus', price: '8,50' },
          { name: 'Chicken Nuggets', description: 'Met frietjes en mayonaise', price: '8,50' },
        ],
      },
    ],
  },
  {
    id: 'drankkaart',
    label: 'Drankkaart',
    categories: [
      {
        name: 'Cocktails',
        items: [
          { name: 'Aperol Spritz', description: 'Aperol, prosecco, spa rood', price: '10,50' },
          { name: 'Espresso Martini', description: 'Vodka, Kahlúa, verse espresso', price: '12,00' },
          { name: 'Lodge Mojito', description: 'Rum, limoen, munt, suiker, spa bruisend', price: '11,00' },
          { name: 'Negroni', description: 'Gin, Campari, rode vermout', price: '11,50' },
        ],
      },
      {
        name: 'Wijnen',
        items: [
          { name: 'Huiswijn Wit', description: 'Fris en fruitig, per glas', price: '5,50' },
          { name: 'Huiswijn Rood', description: 'Vol en rond, per glas', price: '5,50' },
          { name: 'Prosecco', description: 'Per glas', price: '6,50' },
          { name: 'Champagne', description: 'Moët & Chandon, per glas', price: '12,00' },
        ],
      },
      {
        name: 'Bieren',
        items: [
          { name: 'Pilsner', description: 'Vers getapt, 25cl', price: '3,50' },
          { name: 'IPA', description: 'Jopen IPA, 33cl', price: '5,50' },
          { name: 'Witbier', description: 'Fris en kruidig, 33cl', price: '5,00' },
          { name: 'Alcoholvrij', description: 'Diverse merken beschikbaar', price: '3,50' },
        ],
      },
    ],
  },
]
