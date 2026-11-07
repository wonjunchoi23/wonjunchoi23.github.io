# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal academic homepage for Wonjun Choi, served as-is by GitHub Pages at https://wonjunchoi23.github.io/. There is no build step, package manager, linter or test suite. `.nojekyll` disables Jekyll, so files are served exactly as they sit in the repo and a file's path is its URL.

## Preview

```sh
python3 -m http.server 8000   # → http://localhost:8000
```

Opening `index.html` via `file://` also mostly works, but use the server so `content.js` and the images load the same way they do in production.

## Architecture

Two files make up the site:

- **`content.js`**: all page text, stored as `window.SITE` (about, news, publications, pubLegend, education, awards, plus `me`, the owner's name). Content edits (a new paper, a news item) belong here only.
- **`index.html`**: all styles (one `<style>` block, with palette/spacing tokens as `:root` custom properties) and several inline `<script>` blocks:
  1. **Renderer**: reads `window.SITE` and injects HTML into fixed container ids (`aboutText`, `portrait`, `newsList`, `pubList`, `eduList`, `awardList`). A new `SITE` field shows up on the page only after the renderer is changed to output it.
  2. **Canvas + collapsing header**: a full-bleed `<canvas id="bg">` draws a drifting node graph with pulses travelling along edges. The same script also drives the hero header, which shrinks into a pinned top bar as you scroll (`paint(progress)`, `measureHeader()`). An elliptical "clearance" zone fades the graph out behind the header text and follows it as it collapses. `measureHeader()` depends on rendered text metrics, so it runs again once `document.fonts.ready` resolves. Resizes that only change the height by a small amount are ignored so the mobile URL bar doesn't make the header jump.
  3. **Dot-rail nav**: highlights the current section with IntersectionObserver.
  4. GoatCounter analytics.

Content below the hero sits on an opaque `.sheet` column, so the graph only shows in the side gutters. Sections fade in through the `.reveal` class, and a timeout forces them visible in case the observer never fires. The page respects `prefers-reduced-motion` and pauses the animation while the tab is hidden.

## Content conventions (content.js)

- Every text field (`html`, `what`, `meta`, `authors`, `venue`) is raw HTML, so links go inline. External links use `target="_blank" rel="noreferrer"`. The renderer adds these to `url`/`orgUrl`/`links[].url` automatically when the value starts with `http`.
- In `authors`, the markers `*` (equal contribution), `†` (corresponding) and `‡` are superscripted automatically, and every occurrence of `SITE.me` is bolded.
- `award` on a publication (e.g. `'Best Paper Award!'`) adds an italic ☆ label after its links.
- `ongoing: true` on a publication greys out the whole entry (for work under review).
- News and publications are listed newest first. News `date` is free text but keeps the `YYYY.MM` shape so the column lines up.
- Entries that are temporarily removed are kept as `/* ... */` comments rather than deleted.
- Awards are kept in `content.js` but not shown: `<section id="awards">` has the `hidden` attribute. To show them, remove `hidden` and also add an Awards link to the `#dotnav` list in `index.html`.

## Assets and design

- Fonts come from Google Fonts: Lato for body text, Source Serif 4 for venues and IBM Plex Mono. (ASSETS.md still says Inter; that is out of date.)
- The sage-green palette matches the DAIS Lab site. The canvas has its own RGB constants (`NODE`, `ACC`) that are separate from the CSS variables.
- Missing assets are tracked in `ASSETS.md` (in Korean): OG image, CV PDF. PDFs go in `files/` and images in `images/`.
- `todo.md` is a scratch note of content to add to the site later (reviewer experience, patent, teaching experience, ...). It is not rendered on the page. When asked to apply the todo, read it, add the entries to `content.js` (and extend the renderer/dotnav in `index.html` if a new section is needed), then remove the finished items from `todo.md`.
- `demo/` holds scratch design prototypes (font, nav, and layout experiments). It is gitignored and not part of the site.
- `CODEBASE.md` is a gitignored Korean write-up of this codebase for the owner. Keep it in sync when the architecture or content conventions change. `README.md` is intentionally minimal (one line plus the site link).
