# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: data custodians.** Domain experts and managers in marine and environmental science, public-sector and conservation bodies, universities and research infrastructure, and statutory or funder-accountable reporting. They are usually not software or data specialists. They arrive when their data has outgrown its origins: a research output, local script, spreadsheet or grant prototype that other people, systems or decisions now depend on. Typical triggers, as the site names them: a creaking feed everything depends on, decisions being made on data they are no longer sure of, a project ending while the duty to keep it live continues, the one person who understood it moving on, and pressure to put AI or agents on data they cannot yet call clean, permissioned or defensible.

**Secondary: national or interstate primes** bidding work into Tasmania that has a real data or software component. Served by `/partner`, not the home page.

## Product Purpose

The public website of Condense Pty Ltd, an independent data and software practice in Hobart, Tasmania (est. 2013). The site explains what Condense does, shows the evidence, and gets a well-matched visitor to start a conversation by email or phone.

Condense helps domain experts turn important project data into platforms, public portals, atlases, pipelines and reporting systems that stay trusted after handover.

Success: a custodian recognises their own situation, believes Condense has done this before for people like them, and gets in touch.

## Positioning

"Software people for domain experts." Tagline: "Good decisions, well made."

- **The moat is trust and traceability, not cleaning.** Condense makes data fit for purpose, appropriate to use, and access-controlled, so it is safe to act on. Copy never reads "we clean your data for AI".
- **Judgment before code.** The practice sells the early calls: what to build, and what should not be built at all. The work section is framed on those calls, not on build trophies.
- **Longevity and handover.** Systems are built to be owned and run by the client's team, and most featured work has been relied on for about a decade.
- **A small, senior team that stays with the work.** A bespoke practice, not a product.
- **AI stays mostly implicit.** It appears in a few measured places (the last "Sound familiar?" signal, Mark Hepburn's bio, one work card), always framed through readiness and trust. No AI-readiness section or services card. Decided by Oliver.

## Operating Context

- Visitors are evaluating a practice, often after a referral, a tender, or a search on terms such as governance, provenance and lineage.
- The home page is a one-page site with anchored sections: signals, who we build for, selected work, services, approach, the practice, contact. `/partner` is a separate page for primes.
- The footer links out to Condense's own tools: Governance Check, visual domain modeling (Drafting Board), a field guide demo, and a spatial decision support demo.
- Contact is by email (hello@condense.com.au) or phone. There is no form. The site promises a reply within a working day, and to say so if Condense is not the right team.

## Capabilities and Constraints

- **Stack:** Astro static site (`astro` ^6.4.6, `@astrojs/sitemap`), deployed to GitHub Pages by GitHub Actions. Custom domain via `public/CNAME`. See `RUNBOOK.md`.
- **Copy authority:** all wording lives in `src/copy/*.ts` (`site.ts`, `home.ts`, `partner.ts`) as plain data. Components only render it. Design prototypes never overwrite this copy.
- **Legacy URLs stay as real pages:** `/about.html`, `/services.html`, `/portfolio.html`, `/awards.html`, `/contact.html` each render and canonicalise to `/`. GitHub Pages cannot issue 301s.
- **Journal:** a content collection is wired in `src/content.config.ts` and is empty.
- **Terminology that must be kept:** provenance, lineage, validation, governance, consent, embargoes, sensitive species and locations, Indigenous data governance. The audience scans for these words. "Governance" stays as a heading.
- **Open:** the hero figure in `src/components/HeroVisual.astro` ("Platforms in service", "5 live") has hardcoded rows and map markers that have not been checked against the project record. It lists a "Hazards atlas" as in service since 2019 and places platforms in Sydney, Perth, Canberra and Darwin. Needs real project data or Oliver's confirmation.

## Brand Commitments

- **Name and tagline:** Condense; "Good decisions, well made".
- **Voice:**
  - A bespoke senior practice, not SaaS. No feature-tier framing that anchors buyers to product pricing.
  - Platform-pragmatic, not anti-platform: "using the right platforms where they fit, building where they don't".
  - Technical vocabulary is kept, not softened into benefit phrases.
  - Card bodies lead with the human payoff; the mechanism follows.
- **Naming rule:** name a client only where Condense is already publicly tied to the work. Currently named: Seamap Australia, University of Tasmania, IMAS. Others are anonymised ("Blue carbon science", "State fisheries regulator") until permission is given.
- **Truth over polish:** every status, scale and longevity claim must match the project record. Credit the science to the scientists (for example IMAS created the seabed classification; Condense built the portal).

## Evidence on Hand

- Five selected-work cards in `src/copy/home.ts` (`home.work`), each grounded in a real engagement.
- Team: Oliver George (Co-founder & CEO) and Mark Hepburn (Co-founder & Technical Director), with photos in `public/assets/`.
- Two 2018 iAwards for Seamap Australia, cited in the Seamap work card. There is no awards content page: `/awards.html` is a legacy URL that renders the home page.
- A research platform Condense keeps running holds records reaching back to 1975.
- Live tools linked from the footer.

Absent, and not to be fabricated: client testimonials or quotes, client logos, pricing, metrics or benchmarks, and any claim of a "we advised them not to build it" case (no card evidences one).

## Product Principles

1. **Recognition before pitch.** The visitor should see their own situation described accurately before being told what Condense sells.
2. **Proof must be true.** A weaker claim that matches the record beats a stronger one that does not.
3. **Trust is the product.** Fit for purpose, appropriate to use, access-controlled. AI is a reason this matters, not the headline.
4. **Speak to experts as experts.** Use their vocabulary correctly; do not simplify it away.
5. **Senior practice, not a product.** Nothing on the site should make Condense read as a SaaS vendor or a body shop.

## Accessibility & Inclusion

No formal standard is committed (confirmed by Oliver, 20 Nov 2026). Good practice applies: sufficient contrast, full keyboard access, and respect for reduced-motion preferences.
