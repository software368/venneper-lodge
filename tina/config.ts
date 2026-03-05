import { defineConfig } from 'tinacms'

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master'

export default defineConfig({
  branch,
  clientId: '52b5a98d-b8e3-479a-8d94-501e520be318',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      // === HOME PAGE SECTIONS ===
      {
        name: 'hero',
        label: 'Hero',
        path: 'content/home',
        match: { include: 'hero' },
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: 'string', name: 'heading', label: 'Heading', required: true },
          { type: 'string', name: 'tagline', label: 'Tagline', required: true },
          { type: 'string', name: 'buttonText', label: 'Button Text', required: true },
          { type: 'string', name: 'buttonLink', label: 'Button Link', required: true },
          { type: 'image', name: 'backgroundImage', label: 'Background Image' },
        ],
      },
      {
        name: 'pillar',
        label: 'Three Pillars',
        path: 'content/home',
        match: { include: 'pillars' },
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Pillars',
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({ label: item?.title }),
            },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'description', label: 'Description', required: true },
              { type: 'image', name: 'image', label: 'Image', required: true },
              { type: 'string', name: 'link', label: 'Link', required: true },
            ],
          },
        ],
      },
      {
        name: 'story',
        label: 'Story Strip',
        path: 'content/home',
        match: { include: 'story' },
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'object',
            name: 'blocks',
            label: 'Story Blocks',
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({ label: item?.title }),
            },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'text', label: 'Text', required: true, ui: { component: 'textarea' } },
              { type: 'image', name: 'image', label: 'Image', required: true },
            ],
          },
        ],
      },
      {
        name: 'menuHighlight',
        label: 'Menu Highlights',
        path: 'content/home',
        match: { include: 'menu-highlights' },
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: 'string', name: 'sectionLabel', label: 'Section Label' },
          { type: 'string', name: 'title', label: 'Title' },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'string', name: 'buttonText', label: 'Button Text' },
          {
            type: 'object',
            name: 'dishes',
            label: 'Dishes',
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({ label: item?.name }),
            },
            fields: [
              { type: 'string', name: 'name', label: 'Name', required: true },
              { type: 'image', name: 'image', label: 'Image', required: true },
            ],
          },
        ],
      },
      {
        name: 'reservationCta',
        label: 'Reservation CTA',
        path: 'content/home',
        match: { include: 'reservation-cta' },
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: 'string', name: 'label', label: 'Section Label' },
          { type: 'string', name: 'heading', label: 'Heading' },
          { type: 'string', name: 'text', label: 'Text', ui: { component: 'textarea' } },
          { type: 'string', name: 'buttonText', label: 'Button Text' },
          { type: 'string', name: 'buttonLink', label: 'Button Link' },
          { type: 'string', name: 'address', label: 'Address' },
          { type: 'string', name: 'openWeekdays', label: 'Opening Hours (Weekdays)' },
          { type: 'string', name: 'openWeekends', label: 'Opening Hours (Weekends)' },
          { type: 'string', name: 'phone', label: 'Phone Number' },
        ],
      },

      // === REVIEWS ===
      {
        name: 'review',
        label: 'Reviews',
        path: 'content/reviews',
        format: 'json',
        fields: [
          { type: 'string', name: 'name', label: 'Name', required: true },
          { type: 'number', name: 'rating', label: 'Rating (1-5)', required: true },
          { type: 'string', name: 'text', label: 'Review Text', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'date', label: 'Date / Source', required: true },
        ],
      },

      // === MENU ===
      {
        name: 'menuSection',
        label: 'Menu',
        path: 'content/menu',
        format: 'json',
        ui: {
          filename: {
            readonly: false,
            slugify: (values: Record<string, string>) => values?.label?.toLowerCase().replace(/\s+/g, '-') || '',
          },
        },
        fields: [
          { type: 'string', name: 'slug', label: 'ID (slug)', required: true },
          { type: 'string', name: 'label', label: 'Tab Label', required: true },
          { type: 'number', name: 'order', label: 'Sort Order' },
          {
            type: 'object',
            name: 'categories',
            label: 'Categories',
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({ label: item?.name }),
            },
            fields: [
              { type: 'string', name: 'name', label: 'Category Name', required: true },
              {
                type: 'object',
                name: 'items',
                label: 'Items',
                list: true,
                ui: {
                  itemProps: (item: Record<string, string>) => ({ label: item?.name }),
                },
                fields: [
                  { type: 'string', name: 'name', label: 'Name', required: true },
                  { type: 'string', name: 'description', label: 'Description', required: true },
                  { type: 'string', name: 'price', label: 'Price', required: true },
                  { type: 'image', name: 'image', label: 'Image' },
                ],
              },
            ],
          },
        ],
      },

      // === TEAM ===
      {
        name: 'team',
        label: 'Team',
        path: 'content/team',
        format: 'json',
        fields: [
          { type: 'string', name: 'name', label: 'Name', required: true },
          { type: 'string', name: 'role', label: 'Role', required: true },
          { type: 'image', name: 'image', label: 'Photo', required: true },
          { type: 'number', name: 'order', label: 'Sort Order' },
        ],
      },

      // === JOBS ===
      {
        name: 'job',
        label: 'Vacatures',
        path: 'content/jobs',
        format: 'json',
        fields: [
          { type: 'string', name: 'title', label: 'Job Title', required: true },
          { type: 'string', name: 'type', label: 'Type (Part-time / Full-time)', required: true },
          { type: 'string', name: 'description', label: 'Description', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'hours', label: 'Hours', required: true },
        ],
      },
    ],
  },
})
