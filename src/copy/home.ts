export const home = {
  hero: {
    eyebrow: 'Software people for domain experts.',
    heading: {
      before: 'Once others rely on your data, it has to ',
      accent: 'keep working',
      after: '.',
    },
    lede: [
      'We help domain experts turn important project data into platforms, public portals, atlases, pipelines and reporting systems that stay trusted after handover.',
      "So when formats drift, feeds break, or the person who built it moves on, the work holds. You're never left guessing.",
    ],
    actions: {
      primary: { label: 'Start a conversation', href: '/#contact' },
      ghost: { label: 'See the work', href: '/#work' },
    },
    meta: ['Fit for purpose', 'Used as intended', 'Read the right way', 'Reliable for years'],
  },

  signals: {
    eyebrow: 'Sound familiar?',
    title: "When the data others depend on starts to buckle.",
    lede: "Most teams come to us at the same point: their data has outgrown its origins. What began as a research output, a local script or a grant prototype is now something other people rely on. The ad-hoc tools that got it this far can't carry it any further.",
    items: [
      'A spreadsheet, script or feed that everything now depends on has started to creak.',
      "Other systems now feed off your data. Nobody's sure which assumptions, permissions or caveats survive the handoff.",
      "Public, board or statutory decisions are being made on data you're no longer sure of.",
      "The project was always going to end. The duty to keep it live and trusted never does.",
      'The person who understood how it all fits together is moving on, and nobody wants to inherit the mess.',
      "There's pressure to put AI or agents on top of this data. You can't yet say it's clean, permissioned or defensible enough to trust what they'd do with it.",
    ],
  },

  trusted: {
    label: 'Who we build for',
    lines: [
      'Marine & environmental science',
      'Public-sector & conservation',
      'Universities & research infrastructure',
      'Statutory & funder-accountable reporting',
    ],
  },

  work: {
    eyebrow: 'Selected work',
    title: "The hard calls behind what we build. And what we don't.",
    lede: "Each came down to a hard call before any build — what the data really needed, and what it would take to make it trustworthy. Most of these we built and still run; one we were trusted to validate, not build, when the stakes were too high to guess. Every one is still relied on, most for a decade, because the judgment came before the code.",
    items: [
      { client: 'Seamap Australia', title: 'A seabed-habitat platform marine managers still rely on', desc: "Australia's seabed data was scattered across institutions, each classifying it its own way — one team's 'rocky reef' was another's 'hard substratum.' IMAS synthesised it into a single national classification; the hard part was making that trustworthy in public hands — we built the portal, funded by Parks Australia, that put it to work. A decade on, marine-park zoning, fisheries limits and state-of-environment reporting are decided on it, not guesswork — and it won two 2018 iAwards.", cat: 'Public platform', yr: '10 years live' },
      { client: 'University of Tasmania', title: "A decade running the university's estate", desc: "Running the estate meant manual processes and asset data scattered across disconnected systems — no single view to plan or spend from. We consolidated it into one platform, working with the tools they already ran rather than replacing them, and put live data in front of staff and contractors on iOS and Android. Connecting the data is what unlocked the value. It's still the system they depend on.", cat: 'Enterprise', yr: '10+ years live' },
      { client: 'Blue carbon science', title: 'AI seagrass mapping a ranger can run', desc: "A national science agency had AI models for classifying seagrass from underwater photos — but they stayed locked in expert pipelines, no use out in the field. We built the last mile: a validate-as-you-go importer, a regional data hub, and mapping that turns off-the-shelf camera photos into verified habitat maps. Now researchers and rangers across the Indo-Pacific monitor blue carbon themselves, and target restoration where it counts.", cat: 'AI-assisted', yr: 'In production' },
      { client: 'IMAS', title: 'The data layer research runs on', desc: "Marine science runs on data and logic that has to stay correct, described and findable for years, or it stalls. For a decade we've grown and maintained the research databases at IMAS's core, published their data into the national and global networks, and built the portals and maps that put it in front of the people who use it. So the research keeps moving, the data outlives its project, and the advice built on it holds up.", cat: 'Research infrastructure', yr: 'Ongoing' },
      { client: 'State fisheries regulator', title: "Brought in to make a regulator's data defensible", desc: "A move to digital catch reporting couldn't proceed until the data underneath a high-stakes fishery was trusted — and its quality had been publicly questioned. We weren't there to build the system; we were brought in to judge it. We audited the data quality and processing standards, set the requirements the new reporting tools had to meet, and designed the mobile interface fishers and inspectors use in the field. The foundations are ones we validated — so the data behind quota decisions can stand up to challenge.", cat: 'Strategic advisory', yr: 'Live · ongoing' },
    ],
  },

  services: {
    eyebrow: 'What we do',
    title: 'What it takes to keep data trustworthy.',
    lede: "Once data goes live and others depend on it, keeping it right is ongoing work. So we solve for it — using the right platforms where they fit, building where they don't — and hand you something your team can stay on top of.",
    cards: [
      { icon: 'data', anchor: 'build-traceable', title: 'Data you can trace and trust', body: "When a number looks off, you can see where it came from and how far to trust it — validation matched to the quality you actually need, and provenance so the data carries its own history. A well-meaning override can't quietly poison a report downstream.", tags: ['Validation', 'Provenance', 'Guardrails'] },
      { icon: 'strategy', anchor: 'build-governed', title: 'Governance for sensitive data', body: "The right people see the right things, with every action on the record — sharing sensitive data doesn't have to mean a free-for-all. Consent, embargoes, sensitive species and locations, and cultural and Indigenous data governance, all scoped to who should see what.", tags: ['Consent & embargoes', 'Sensitive data', 'Scoped access'] },
      { icon: 'dashboard', anchor: 'build-defensible', title: 'Reports and dashboards you can defend', body: 'The people acting on a live report can see how far a number will stretch. A figure on a screen can read as hard certainty even when the data behind it is partial, old or uncertain — so lineage and uncertainty travel with the data into the interface, not just the value.', tags: ['Lineage', 'Uncertainty surfaced', 'Context'] },
      { icon: 'mobile', anchor: 'build-handover', title: 'Built to be owned and evolved', body: "Safe to run without a data specialist on staff — your cloud, open standards, no lock-in. Feeds and exports that catch a drifting format or stalled connection before it breaks anything downstream. Built to be extended by your team, not frozen into a black box.", tags: ['Yours to run', 'Reliable feeds', 'Built to evolve'] },
    ],
  },

  approach: {
    eyebrow: 'How we work',
    title: 'Decide before you commit. Build so it lasts.',
    lede: "The rhythm we've used on almost every engagement: find the hard calls early, prove the risky parts before the full build, and hand over a system your team can keep running. Good decisions first; careful build after.",
    steps: [
      { num: 1, title: 'Start with the data and the decision.', body: "We start with your data and the people who rely on it. What's really in there, where it came from, what it has to stand up to. This is where the judgment calls live: when field data needs provenance, not just validation; when the data behind a quota has to be defensible before it's acted on; when a prototype must not quietly become production; when handover has to be designed in from day one. Often the most valuable thing we do happens before any code is written." },
      { num: 2, title: 'Prove the risky parts before you commit.', body: "We go at the riskiest parts first — the hard data, the performance question, the assumption everyone's been making — with small, working prototypes you can actually try. Then a clean checkpoint: with real scope and budget in front of you, you decide whether to carry on, re-scope, or stop, before you're locked into the full build. Better to change course early than build the wrong system well." },
      { num: 3, title: 'Engineer for handover.', body: "The people who'll own it are usually domain experts, not software specialists. So we hand it over set up to run without us: documented, with training, and clear ownership of what comes next. We stay on as the technical hands when you want them: fixes, maintenance, extensions. But it's yours to operate, never a black box only we can run." },
    ],
  },

  about: {
    eyebrow: 'The practice',
    title: 'A small, senior team that stays with the work.',
    lede: [
      "We've spent over a decade getting environmental and scientific data — fragmented, field-collected, often contested — into platforms, registries, and reporting systems that survive handover and stay trusted long after the project ends. One platform we keep running holds research records reaching back to 1975. Still trustworthy, still added to, decades after the project that began it.",
      "<b>You</b> don't have to be a data specialist to get your data there. You need a senior team that is. One that will tell you what to build, and what shouldn't be built at all. That's where we come in.",
    ],
    team: [
      {
        name: 'Oliver George',
        role: 'Co-founder & CEO',
        photo: '/assets/og-head-5.jpg',
        bio: "Sits at the front of engagements. Strategy, scoping, and the early judgment calls about what's worth building and what shouldn't be built at all. Cares as much about how the work is run as about the work itself.",
        email: 'oliver@condense.com.au',
        linkedin: 'https://www.linkedin.com/in/olivergeorge/',
      },
      {
        name: 'Mark Hepburn',
        role: 'Co-founder & Technical Director',
        photo: '/assets/mh-head-3.jpg',
        bio: "The technical lead behind our core platforms. Systems design, data infrastructure, provenance, and the standards that let our work stand up to scrutiny and survive handover. Lately, working out where AI genuinely earns its place. And where it doesn't.",
        email: 'mark@condense.com.au',
        linkedin: 'https://www.linkedin.com/in/markhepburn/',
      },
    ],
  },

  contact: {
    heading: {
      before: 'Tell us what you need your data to ',
      accent: 'make possible',
      after: '.',
    },
    body: "We'll help you build it on good decisions, well made. We'll come back within a working day. If we're not the right team to help, we'll say so.",
    emailLabel: 'Email us',
    callLabelPrefix: 'Call ', // followed by site.contact.phoneLabel
  },
} as const;
