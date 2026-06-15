// Site-wide copy: the chrome that appears on every page — brand, nav, footer,
// contact details, default page metadata, and the 404. Edit prose here; the
// components in src/components/ just render it.
//
// Keep this file "dumb": plain strings/arrays/objects only, no logic. That keeps
// the door open to later validating it with a Zod schema / content collection.

export const site = {
  brand: 'Condense',
  tagline: 'Good decisions, well made',

  // Reused across the Contact section, the Footer, and the 404 — change once here.
  contact: {
    email: 'hello@condense.com.au',
    phoneLabel: '0428 740 978',
    phoneHref: 'tel:+61428740978',
    linkedin: 'https://www.linkedin.com/company/condense-pty-ltd/posts/?feedView=all',
    address: 'Level 3, 13–17 Castray Esplanade, Battery Point TAS 7004',
    addressShort: 'Battery Point, Hobart',
    hours: 'Mon–Fri · 9am–5pm Hobart time',
  },

  nav: {
    links: [
      { label: 'Services', href: '/#services' },
      { label: 'Work', href: '/#work' },
      { label: 'Practice', href: '/#practice' },
    ],
    cta: { label: 'Get in touch', href: '/#contact' },
  },

  footer: {
    desc: 'An independent data and software practice in Hobart, Tasmania. We help domain experts turn important project data into platforms, public portals, atlases, pipelines and reporting systems that stay trusted after handover.',
    // Pure-link columns. The Contact column is built in Footer.astro from `contact` above.
    columns: [
      {
        title: 'Practice',
        links: [
          { label: 'About', href: '/#practice' },
          { label: 'Work', href: '/#work' },
          { label: 'Partner with us', href: '/partner' },
          { label: 'Tools' },
          { label: 'Governance Check', href: 'https://boardroom.condense.com.au/governance-check' },
          { label: 'Visual domain modeling', href: 'https://studio.condense.com.au/playbook' },
          { label: 'Field guide demo', href: 'https://field-guide-demo.condense.com.au/' },
          { label: 'Spatial decision support', href: 'https://storage.googleapis.com/condense-tools-static/spatial-decision-support/index.html' },
        ],
      },
      {
        // Each link jumps to its matching service card (ids set in Services.astro).
        title: 'What we build',
        links: [
          { label: 'Traceable data platforms', href: '/#build-traceable' },
          { label: 'Governed portals & atlases', href: '/#build-governed' },
          { label: 'Defensible reports & dashboards', href: '/#build-defensible' },
          { label: 'Handover-ready systems', href: '/#build-handover' },
        ],
      },
    ],
    // Bottom line is assembled in the component as: © {year} {legalName} · {location} · {established}
    legalName: 'Condense Pty Ltd',
    location: 'Hobart, Tasmania',
    established: 'est. 2013',
  },

  // Default <title>/<meta description>; individual pages can override via Base props.
  meta: {
    title: 'Condense — data that keeps working',
    description: 'Condense builds the platforms, pipelines and reporting systems that keep your data trustworthy long after the project that made it ends.',
  },

  notFound: {
    eyebrow: '404',
    title: "We couldn't find that page.",
    lede: "The link may be old or mistyped. Head back to the home page, or get in touch and we'll point you the right way.",
    actions: {
      home: { label: 'Back to home', href: '/' },
      email: { label: 'Email us' }, // href built from contact.email
    },
  },
} as const;
