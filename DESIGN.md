---
name: Condense
description: The public site of an independent data and software practice in Hobart, drawn as one set of issued engineering drawings.
colors:
  teal: "#009B8F"
  teal-text: "#00756C"
  teal-tint: "#D5EDEA"
  ink: "#0C2B33"
  ink-2: "#3A535B"
  ink-deep: "#06212A"
  sheet: "#F5F8F7"
  desk: "#DCE5E3"
  white: "#FFFFFF"
  hair: "rgba(12, 43, 51, 0.26)"
  rev: "#C93A17"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(36px, 8.4vw, 64px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 100"
  display-closing:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(34px, 5.6vw, 76px)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-0.024em"
    fontVariation: "'wdth' 100"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(29px, 3.3vw, 46px)"
    fontWeight: 700
    lineHeight: 1.07
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 100"
  headline-wide:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(32px, 4.8vw, 66px)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-0.024em"
    fontVariation: "'wdth' 100"
  title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(21px, 2vw, 25px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 100"
  action-bar:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(20px, 2.1vw, 27px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 100"
  wordmark:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 100"
  value:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.15
    fontVariation: "'wdth' 100"
  lede:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
    fontFeature: "'tnum', 'lnum'"
  action:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.1
    fontVariation: "'wdth' 100"
  ui:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    fontVariation: "'wdth' 100"
  fine:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 78"
rounded:
  none: "0px"
  balloon: "50%"
spacing:
  line: "1.5px"
  pad: "clamp(20px, 3.2vw, 48px)"
  sec-y: "clamp(64px, 8vw, 116px)"
  rail: "120px"
  pipe-x: "32px"
  nav-h: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.teal-text}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-primary-on-teal:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.white}"
    typography: "{typography.lede}"
    height: "56px"
  button-primary-on-teal-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-deep}"
  button-ghost-on-teal:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.lede}"
    height: "56px"
  button-ghost-on-teal-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.white}"
  nav-link:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    height: "{spacing.nav-h}"
  nav-link-hover:
    backgroundColor: "{colors.teal-tint}"
    textColor: "{colors.ink}"
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
  nav-cta-hover:
    backgroundColor: "{colors.teal-text}"
    textColor: "{colors.white}"
  title-block:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "12px 16px 14px"
  title-block-action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.action-bar}"
    padding: "18px 16px"
  title-block-action-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.white}"
  ruled-cell:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  ruled-cell-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  balloon:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.balloon}"
    size: "24px"
  schedule-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px 26px"
  schedule-row-target:
    backgroundColor: "{colors.teal-tint}"
  schedule-tag:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  status-stamp:
    backgroundColor: "{colors.white}"
    textColor: "{colors.teal-text}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 9px 5px"
  sheet-reversed:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.display-closing}"
  contact-strip:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "16px 18px"
---

# Design System: Condense

## Overview

**Creative North Star: "The Drawing Sheet"**

The site is one set of issued engineering drawings. Every page is a sheet: a cool drafting-film ground inside a ruled frame, sitting on a slightly darker desk. Content is laid out the way a drawing office lays it out, in ruled cells, schedules, registers and a title block, and one pipe runs from the hero drawing down the left margin through every section to the place where you get in touch. The visitor's data is drawn as plant that other people depend on. That is the whole argument of the practice, made visible.

The system is spare and exact. There is one type family, Archivo, set at normal width in sentence case, bold for anything that is a title; a narrow capital cut of the same family is kept for the small lettering on the drawing. There is one accent, Condense teal, and it is used as solid fields that own whole regions, never as decoration. Red exists only as mark-up on the drawing. Depth is never implied: there are no shadows, shaded gradients or blurs anywhere in the build. Structure is carried by ruled ink lines, and emphasis is carried by a solid fill.

It is dense where a drawing would be dense (schedules, registers, the title block) and open where a reader needs room (section headings, ledes). It refuses the consultancy template of serif headline, card grid and rounded call-to-action panel that it replaced.

**Key Characteristics:**
- A ruled sheet (max 1400px) on a desk, framed by 2px ink lines.
- One pipe in the left margin, continuous from the hero drawing to the contact block, with a flange at every section boundary and a dashed flow line running through the hero.
- One family at two widths: normal-width sentence case for everything read, bold for titles; narrow capitals for drawing annotations only.
- Solid teal fields for the title block and the closing section; ink for every action; type on teal is white, bold and large.
- Square corners on every cell and control. Only drawn round things (balloons, station numbers, pipe elbows) are round.
- Flat. No shadows, no shaded gradients, no blur.
- Tabular lining numerals throughout.

**Owner-pinned constraints.** These were fixed by the owner on 20 Nov 2026 and are not open to a design pass:
- Brand teal is `teal` (#009B8F).
- The C logo mark (`public/assets/c-element.svg`) is used unchanged, at 28px in the nav and footer and as the favicon.
- The ground is light.
- All copy is authoritative in `src/copy/*.ts`. Components render it and never rewrite it.
- The home page section order is fixed.
- Display type is Archivo at normal width, sentence case, weight 700. Wide heavy capitals were tried and removed.
- The hero drawing does not draw itself in on load. The continuous flow is the only authored motion.

## Colors

A cool, low-chroma drafting palette: near-white film, blue-black ink, one teal and one red.

### Primary
- **Condense Teal** (`teal`): the brand colour, owner-pinned. Used as solid fields (the title block, the closing section), as the knockout bar behind the accented words of a display headline, and as fills inside the hero drawing. With white on it the contrast is 3.45:1, so white type on teal is always large and bold (19px at weight 700 is the smallest in the build).
- **Teal Text** (`teal-text`): the darker teal for small type and thin rules on the sheet or on white, where it clears 5.2:1. Inline links, client names, team roles, the status stamp, and the hover fill of ink buttons on the sheet.
- **Teal Tint** (`teal-tint`): a pale wash for quiet state: nav link hover, team row hover, a schedule row that is the URL target, and tinted faces in the hero drawing.

### Secondary
- **Revision Red** (`rev`): mark-up only. The revision triangle on each "issue" line, the sign-off tick and red squares in the hero drawing, and the fill a drawing part takes when its check is pointed at. It is never a text colour, a button colour or a background.

### Neutral
- **Drafting Ink** (`ink`): all primary text, every ruled line, and the fill of primary actions.
- **Ink Two** (`ink-2`): secondary reading text and quiet annotation: ledes, descriptions, schedule tags, register categories, footer links, pipe designations, the lettering on the drawing. 7.6:1 on the sheet.
- **Deep Ink** (`ink-deep`): ink for a teal field. The knockout bar and the primary button on teal, button borders and labels there, the title block's field names (4.8:1 on teal), and the hover state of the title block action.
- **Sheet** (`sheet`): the page ground, a cool drafting-film white. Also the browser theme colour.
- **Desk** (`desk`): the surface behind the sheet, visible at the sides above 1432px and in overscroll.
- **White** (`white`): the fill of things that are objects on the sheet: the pipe, ruled tables, cells, balloons, the ghost button on teal, and the "who we build for" strip.
- **Hairline** (`hair`): ink at 26% for secondary rules: nav link dividers, issue separators, tag dividers, the drawing's grid and guide lines.

### Named Rules
**The Solid Field Rule.** Teal appears as a solid field that owns a whole region, or not at all. No teal outlines around cards, no teal gradients, no teal at reduced opacity.

**The Two Teals Rule.** `teal` is for fields, graphics and the bar behind large bold type. Teal text on a light ground uses `teal-text`, and only where the text is a link or names a party (a client, a role, a status). Tags and other plain annotations are `ink-2`: teal on small text reads as a link.

**The Reversed Field Rule.** Everything on a teal field follows the title block: white, bold and 19px or larger, with ink for the action. No small text on teal. The title block's own field names, in `ink-deep`, are the one annotation that sits there.

**The Mark-Up Rule.** Red is what a reviewer's pen leaves on a drawing. If it is not a revision mark, a sign-off or a pointed-at part, it is not red.

## Typography

**Display Font:** Archivo variable, normal width, weight 700 (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo variable, normal width (same stack)
**Label Font:** Archivo variable, condensed to 78% (same stack)

**Character:** One self-hosted variable file (`public/fonts/archivo-latin-var.woff2`, width 62 to 125, weight 100 to 900) carries the whole site. Titles and reading text share one width and one case; size, weight and tight tracking make the hierarchy. The narrow capital cut is the drafter's lettering and appears only at annotation size. The build sets width with `font-stretch`. Numerals are tabular and lining everywhere.

### Hierarchy
- **Display** (weight 700, sentence case, `clamp(36px, 8.4vw, 64px)`, line-height 1.04, tracking -0.022em): the hero headline and the lead headline on `/partner` and 404. On the wide layout (1080px and up) the hero runs `clamp(44px, 4.3vw, 64px)` beside the drawing. The closing-section heading is the same voice, larger and white (`display-closing`, up to 76px).
- **Headline** (weight 700, `clamp(29px, 3.3vw, 46px)`, line-height 1.07, tracking -0.02em): section titles. The wide variant (`headline-wide`) used for the work register runs to 66px at line-height 1.03.
- **Title** (weight 700, `clamp(21px, 2vw, 25px)`, line-height 1.15): row and item titles in schedules, registers and steps. Team names and station numbers sit at its 21px floor.
- **Action bar** (weight 700, `clamp(20px, 2.1vw, 27px)`, line-height 1.05): the title block's action.
- **Wordmark** (weight 700, 22px, tracking -0.01em): "Condense" beside the C mark in the nav; 20px in the footer, 18px in the nav at 640px and below.
- **Value** (weight 700, 19px, line-height 1.15): title block values and the contact strip. The floor for white text on teal.
- **Lede** (weight 400, 18px, line-height 1.55): ledes and the issues list (there at weight 500). Lead-block ledes are 19px; the practice lede steps up fluidly to 22px, and the closing section's body to 20 to 24px in white.
- **Body** (weight 400, 17px, line-height 1.55): reading text; 16.5px inside tables. Line length is capped between 56ch and 70ch.
- **Action** (weight 700, 16px, line-height 1.1): button labels. Emphasised cell text (the audience strip) is 16px at weight 650.
- **UI** (15px, weight 600 to 650): nav links, check labels, client and role lines, contact details, text links in the team table; the same size at weight 400 for footer links.
- **Fine** (14px): the footer's bottom line and nav links at 640px and below.
- **Label** (weight 600, width 78%, 12.5px, tracking 0.06em, uppercase, line-height 1.2): the lettering on the drawing. Title block field names, the designation written along the pipe, schedule tags, register category and status, and the words lettered inside the hero SVG.

### Named Rules
**The One Family Rule.** No second typeface, and two widths only: 100 for everything read, 78 for annotations. Weights in use are 400, 500, 600, 650 and 700; nothing is heavier than 700.

**The Sentence Case Rule.** Every title, button and wordmark is sentence case at normal width. Full capitals belong to the label voice alone.

**The Lettering Rule.** Narrow capitals label fields and pipes. They name a cell in the title block, a line in the margin, a part of the drawing, or a column value in a schedule or register. They are never set above a heading as a kicker, and they never carry a sentence.

## Layout

The page is a single sheet: `max-width: 1400px`, centred, with a 2px ink rule down each side. Above 1432px the body gains 16px of side padding so the desk shows. At 640px and below the side rules are dropped and the sheet runs edge to edge.

Every section is a zone of the sheet. It is ruled off from the one above by a 1.5px ink line, padded `sec-y` (64 to 116px) top and bottom, `pad` (20 to 48px) on the right, and `rail` on the left. The rail is the margin that holds the pipe: 120px wide on the wide layout, 80px below 1080px, 50px at 640px and below.

**The pipe.** A white tube with 1.5px ink walls runs down the left margin through every section, `pipe-x` from the sheet edge. Its gauge is derived from the hero drawing's width (4.5% of `clamp(480px, 44vw, 640px)`, about 22 to 29px) so the drawn pipe and the margin pipe meet exactly; it steps to 16px below 1080px and 10px at 640px and below. A flange (a slightly wider white collar) sits where it crosses each section's top rule. The section's designation is written along it in the label voice, rotated to read bottom to top, and sticks under the nav while the section scrolls. The pipe ends in a flange part-way into the closing teal section.

**Section heads** take one of three forms, chosen per section so zones do not all open alike: a two-column head (title 5fr, lede 6fr), a stacked head (title capped at 24ch over a lede capped at 70ch), and a wide head (large title with the lede offset 45.5% from the left). All three collapse to one column at 900px.

**The first viewport of the home page** is a two-column grid at 1080px and up. Top-left, the headline and lede sit together as one reading unit; beneath them the drawing's main pipe runs left as a horizontal pipe, turns through a rounded elbow and becomes the margin pipe. Top-right is the plant drawing in a column of `clamp(480px, 44vw, 640px)`. Bottom-left are the ghost action and the four checks; bottom-right, the title block, with a drop leg from the drawing landing on it. Below 1080px this stacks: headline and lede, primary action, drawing, ghost action and checks, title block; the margin pipe starts at an elbow where the drawing's pipe arrives.

**Pages without the drawing** (`/partner`, 404) open with a lead block: display headline (capped at 18ch), lede and ghost action on the left, the title block on the right in a 520px column, bottom-aligned, at 1080px and up.

**Content containers are tables, not cards.** Repeated content is a ruled schedule (one bordered box, rows divided by ink rules, columns divided by ink rules at 900px and up) or an open register (rows between ink rules with no side borders). An open list closes without a rule: the last row of the register and of the issues list carries no bottom line, because the next section's top rule ends the zone. Multi-column grids use fractional tracks such as 3.6/6/2.4 and 4/6/170px and drop to one column between 860px and 960px.

Spacing has no numeric scale. It is fluid at the section level (`sec-y`, `pad`, head gaps of `clamp(32px, 5vw, 80px)`) and tight inside cells (12 to 28px).

## Elevation & Depth

There is none. The build contains no `box-shadow`, no `filter`, no shaded gradient and no backdrop blur. Everything sits on one plane, as ink on a sheet. (The one `linear-gradient` in the stylesheet is a hard-stop pattern that draws the dashed flow line inside the hero pipes; it is a line, not shading.)

Layering is shown the way a drawing shows it: an object is a white fill with an ink outline in front of the sheet (the pipe, flanges, tables, balloons), and a region is a solid fill (teal). The sticky nav separates from the page with a 2px ink rule under it, not a shadow. State is a change of fill, never a lift.

### Named Rules
**The Flat Sheet Rule.** No shadows at rest and none on hover or focus. If something needs to read as in front, give it a white fill and an ink outline.

## Shapes

Square. Buttons, cells, tables, the title block, the contact strip, photos and the status stamp all have 0 radius. Structure is drawn with ruled lines at three weights with fixed jobs: 1.5px ink (`line`) for every cell, table, button and section rule; 2px ink for the sheet frame, the rule under the nav and the rule over the footer; 1px hairline for secondary dividers inside a zone.

Round shapes exist only where the drawing itself has round things: keyed balloons (24px circles on the checks, matching the balloons in the SVG), station numbers on the approach line (56px circles), the elbow where a pipe turns (radius 0.9 of the pipe gauge), and the vessels, gauges and softened plant corners inside the hero SVG. There are no pill buttons and no softened card corners.

The accent bar is the one recurring text device: accented words in a display headline are knocked out in white on a solid `teal` bar that hugs the text and breaks cleanly across lines (`box-decoration-break: clone`). On a teal field the bar is `ink-deep`.

The hero drawing is line SVG at a constant 1.5px ink stroke (non-scaling), with white, teal-tint and teal fills, 1px hairline grid and guide lines, 2px red mark-up, and label-voice lettering in `ink-2`. Icons are a single 2px-stroke arrow.

## Components

### Buttons
Ruled blocks. Plain, square and heavy enough to read as part of the drawing.
- **Shape:** square (0 radius), 1.5px ink border, min-height 52px, padding 14px 22px, action type.
- **Primary:** ink fill, white label, optional arrow that slides 5px right on hover. Hover fills `teal-text`.
- **Ghost:** transparent with ink border and label. Hover inverts to ink fill, white label.
- **On teal:** taller and larger (min-height 56px, 18px label). Primary is an `ink-deep` block that inverts to white on hover; ghost is a white block with an `ink-deep` label that inverts to `ink-deep` on hover.
- **Active:** moves down 1px. **Focus:** 3px ink outline offset 3px (white on teal or ink fields).
- **Transitions:** colour 160ms ease-out; arrow 220ms `cubic-bezier(0.16, 1, 0.3, 1)`.

### Title Block (signature)
The drawing's title block is where the sheet is signed off, so it carries the primary action of each page. One component, used on the home page, `/partner` and 404.
- A solid `teal` grid with a 1.5px ink border and white 55% cell rules.
- An optional full-width first cell holding one line in the value voice.
- Three fact cells (practice, location, established), each a label in `ink-deep` over a value in white at 19px weight 700.
- A full-width action bar: ink fill, white action-bar type in sentence case, a 28px arrow at the right that slides 6px on hover; hover fill `ink-deep`.
- Three columns (1.2 / 1.2 / 0.8); at 480px and below, two columns with the practice cell on its own row.
- On the home page's wide layout a white drop leg (10px wide, flanged) comes down from the drawing and lands on its top edge.

### Hero Drawing (signature)
The plant drawing that opens the home page (`src/components/HeroDrawing.astro`), decorative and hidden from assistive technology.
- Feeds come in at the right (lettered SPREADSHEET, SCRIPT, FEED), pass four parts keyed by balloons A to D, and hold up what others rely on (lettered ATLAS, REPORT, DECISION). The main pipe leaves at the left edge and becomes the page's pipe.
- Balloons are 14-unit white circles with bold ink letters, matching the keys on the four checks.
- Lettering is the label voice in `ink-2`; it is hidden at 560px and below, where it would be too small to read.
- Pointing at a check fills the matching part with `rev` (180ms ease-out).

### Ruled Cells and Checks
- A white box with a 1.5px ink border, divided into cells by ink rules. Cell text is 15 to 16px at weight 650.
- The hero checks are a 2x2 grid (4x1 at 1300px and up), each led by a keyed balloon, A to D. Hovering a check inverts it to ink.
- The audience strip is the same construction without balloons, two columns at 720px and up, on a white band.

### Schedule (ruled table)
- One white box, 1.5px ink border, one row per capability. Each row is title / body / tags (3.6 / 6 / 2.4) with ink column rules at 900px and up, stacked with 22px 20px padding below.
- Tags are label-voice items in `ink-2`, stacked on wide layouts and separated by hairlines inline on narrow ones. They are not links and are not coloured like links.
- A row that is the URL target fills `teal-tint`.
- A two-column variant (4 / 8) drops the tags.

### Register
- Open rows under a 1.5px ink rule, divided by ink rules, no side borders, no fill; the last row has no bottom rule. Each row is title and client / description / meta (4 / 6 / 170px) at 960px and up.
- The client line is 15px weight 650 in `teal-text`.
- The meta column holds a **status stamp** (label voice, weight 700, `teal-text` text and border on white, padding 6px 9px 5px) over a category in `ink-2`, right-aligned on wide layouts.

### Issues List
- A two-column list (one below 860px) opened by a 1.5px ink rule, items divided by hairlines, 18px weight 500. The last row (last two on the two-column layout) has no rule beneath.
- Each item is led by a revision triangle: 22px, white fill, 1.6px `rev` stroke.

### Stations
- Three numbered steps on one line at 960px and up. Each number is a 56px white circle with an ink outline, 21px weight 700, sitting on a 14px white pipe that runs the full width of the row. Stacked without the line below 960px.

### Team Table
- A white ruled box, one row per person: an 88px square photo with an ink border (64px at 480px and below), name at 21px weight 700, role in `teal-text`, bio at 15.5px, then text links in ink.
- The whole row is a link target and fills `teal-tint` on hover.

### Navigation
- A sticky strip at the top of the sheet, `nav-h` tall (64px; 56px at 640px and below), sheet ground, 2px ink rule beneath.
- Brand left: the C mark at 28px and the wordmark in sentence case.
- Links right as full-height cells divided by hairlines, 15px weight 600; hover fills `teal-tint`.
- The last cell is the call to action: ink fill, white, weight 700; hover fills `teal-text`.
- At 640px and below the nav is no longer sticky; links wrap to a second row of equal cells at least 44px tall under an ink rule, at 14px.

### Reversed Sheet (closing section)
- A full-width `teal` zone that ends the home page and `/partner`. The heading is white display type in sentence case, up to 76px and capped at 17ch, with accented words on an `ink-deep` bar.
- Body text is white at 20 to 24px, capped at 40ch, set directly on the field; buttons take their on-teal form.
- The contact strip is a ruled box drawn in white 60% lines, the same line the title block uses for its cells: white value type (19px weight 700), three cells across at 900px and up, stacked below. Its links are white and thicken their underline to 3px on hover.
- The margin pipe terminates here in a final flange.

### Footer
- Ruled off by a 2px ink line, on the sheet ground, indented by the rail.
- Brand column plus link columns (4 at 900px and up, 2 below, 1 at 480px and below). Column heads are 15px weight 700 over an ink rule. Links are `ink-2` with a hairline underline that turns ink on hover.

### Links
- Inline links are `teal-text`, underlined 1.5px with a 3px offset, and turn ink on hover.

### Motion
- One authored motion, and it is continuous: the flow. Dashed feed lines run into the hero drawing (1400ms linear loop), and a dashed centre line runs on through the hero's horizontal pipe, the elbow and down the margin pipe (700ms linear loop).
- Nothing is revealed, drawn in or staggered on load or on scroll.
- Everything else is state feedback only: 160 to 180ms colour changes and a 5 to 6px arrow slide.
- Under `prefers-reduced-motion` all animation is removed and smooth scrolling is turned off; the dashed lines stay, still.

## Do's and Don'ts

### Do:
- **Do** keep the pipe continuous. Every new section gets the left rail, the pipe and a flange at its top rule; the last section on a page ends the pipe.
- **Do** build repeated content as a ruled schedule or a register, with 1.5px ink rules between rows and columns, and let the last row of an open list end without a rule.
- **Do** put a page's primary action in the title block, and give it the ink action bar.
- **Do** set every title in sentence case at normal width and weight 700.
- **Do** set anything on a teal field the way the title block does: white, bold, 19px or larger, with `ink-deep` or white blocks for actions.
- **Do** use `teal-text` for links and named parties on a light ground, and `ink-2` for tags and plain annotations.
- **Do** make state a change of fill: `teal-tint` for quiet hover, ink inversion for strong hover.
- **Do** set every focus ring at 3px, ink on light grounds and white on teal or ink.
- **Do** keep numerals tabular and lining, and cap reading lines between 56ch and 70ch.
- **Do** honour the owner-pinned constraints: `teal` as given, the C mark unchanged, a light ground, copy from `src/copy/*.ts` only, home section order as is, normal-width sentence-case display, no draw-in.

### Don't:
- **Don't** add a shadow, shaded gradient, blur or glow. The sheet is flat.
- **Don't** round a corner on a button, cell, table, photo or panel. Only balloons, station numbers, pipe elbows and drawn plant are round.
- **Don't** introduce a second typeface, a width other than 100 and 78, or a weight above 700.
- **Don't** set display or section titles in capitals or at expanded width.
- **Don't** set label-voice capitals above a heading as a kicker. Labels name title block fields, pipes, drawing parts and table values.
- **Don't** use `rev` for anything but mark-up on the drawing: no red text, buttons, alerts or backgrounds.
- **Don't** put white text smaller than 19px bold on `teal`, or dark reading text on `teal` at all.
- **Don't** colour a tag or annotation teal. Teal text means a link or a named party.
- **Don't** use teal as an outline, a tint behind text blocks, or a decorative accent. It is a solid field or the `teal-tint` state wash.
- **Don't** wrap content in free-floating cards with gaps between them. Cells share their rules.
- **Don't** add motion beyond the continuous flow and state feedback. No load reveal, no draw-in.
