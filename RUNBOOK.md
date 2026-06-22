# Condense Website DevOps Runbook

Operational handover notes for deploying, debugging, and troubleshooting the Condense
marketing site.

The site is a static [Astro](https://astro.build) build (Astro `^6.4.3`, Node 24). It is
a one-page site with legacy URL stubs, hosted on **GitHub Pages** and served at the apex
custom domain **condense.com.au**. There is no server, database, or secrets — the only
"access" needed to ship is push permission to the `condense/condense.github.io` GitHub
repo. Deployment is fully automated by GitHub Actions on push to `master`.

## Architecture: GitHub Pages via Actions

A single environment. Pushing to `master` triggers `.github/workflows/deploy.yml`, which
builds the Astro site and publishes `dist/` to GitHub Pages.

| Slot / service | Config / source | Identifier(s) | Environment | Branch |
| -------------- | --------------- | ------------- | ----------- | ------ |
| Production | `.github/workflows/deploy.yml` | repo `condense/condense.github.io`, Pages env `github-pages`, domain `condense.com.au` | production (only) | `master` |

Shared facts:

- **Runtime:** Node `24` (CI `node-version: 24`, matches `.nvmrc`).
- **Framework:** Astro `^6.4.3` + `@astrojs/sitemap` `^3.7.2` (see `package.json`).
- **Build output:** `dist/` (git-ignored locally; produced fresh in CI).
- **Custom domain:** `public/CNAME` contains `condense.com.au`. Astro copies `public/`
  verbatim into `dist/`, so the `CNAME` ships with every build and keeps the apex domain
  bound. The repo name (`condense.github.io`) is a user/org Pages repo, but the apex
  custom domain overrides the default `*.github.io` URL — hence no `base` is set in
  `astro.config.mjs`.
- **URL scheme:** `build.format: 'file'` in `astro.config.mjs` emits `/about.html` rather
  than `/about/index.html`, deliberately mirroring the old Jekyll site to preserve inbound
  links.

## Prerequisites

To build/preview locally:

- **Node 24** — `nvm use` (reads `.nvmrc`), or any Node 24 install.
- **npm** — dependencies are installed with `npm ci` (lockfile is committed).

To deploy:

- **Push access** to `condense/condense.github.io` (SSH remote
  `git@github.com:condense/condense.github.io.git`). That is the only credential needed —
  there are no app secrets, env files, or cloud accounts. (`.env` / `.env.production` are
  git-ignored but the build does not require them.)
- **GitHub Pages must be set to the "GitHub Actions" source** in repo Settings → Pages.
  This is a one-time repo setting that cannot be verified from the repo files — if deploys
  succeed but the site doesn't update, check this first.

## Deploying

Deployment is automatic. There is no manual deploy command.

1. Merge or push your change to `master`:
   ```sh
   git push origin master
   ```
2. Watch the run:
   ```sh
   gh run watch
   # or list recent runs:
   gh run list --workflow=deploy.yml
   ```
3. The workflow builds (`npm ci` → `npm run build`), uploads `dist/` as a Pages artifact,
   then deploys. The live URL is exposed as the `github-pages` environment URL on the run.

> **Pushing to `master` ships to production immediately.** There is no staging
> environment and no approval gate. There is no preview deploy for branches — only
> `master` (or a manual `workflow_dispatch`) deploys. Verify changes locally with
> `npm run build && npm run preview` before pushing.

Manual trigger (without a new commit): the workflow also supports `workflow_dispatch` —
run it from the Actions tab or `gh workflow run deploy.yml`.

### Local build / preview

```sh
nvm use            # Node 24
npm ci             # or: npm install
npm run dev        # dev server with HMR
npm run build      # production build into dist/
npm run preview    # serve the built dist/ locally
```

## Debugging

There is no running server to attach to — debugging is about the build and the published
artifact.

### Deploy status / events
```sh
gh run list --workflow=deploy.yml      # recent deploy runs + status
gh run view <run-id> --log             # full logs for a run
gh run view <run-id> --log-failed      # just the failed steps
```

### Reproducing a build failure locally
CI runs exactly `npm ci` then `npm run build`. Reproduce with the same:
```sh
rm -rf node_modules dist
npm ci
npm run build
```
A green local `npm run build` on Node 24 with a clean `npm ci` almost always means CI
will pass too — the build is deterministic and dependency-free of external services.

### Inspecting what's live
The site is static HTML; just fetch it:
```sh
curl -sI https://condense.com.au/                 # check it responds + headers
curl -s  https://condense.com.au/sitemap-index.xml # sitemap is generated at build
```

## Troubleshooting playbook

There are no historical incident logs in this repo; the entries below are derived from how
the build and hosting are wired.

### Custom domain (condense.com.au) stops resolving / Pages shows a 404 for the apex
- **Signal:** The `*.github.io` URL works but `condense.com.au` doesn't, or GitHub Pages
  settings show the custom domain cleared.
- **Likely causes:** `public/CNAME` was removed or changed (it must contain exactly
  `condense.com.au`), so the build stopped shipping the domain binding; or the DNS
  records / Pages domain setting changed outside the repo.
- **Investigate with:** confirm `public/CNAME` is intact and present in the built
  `dist/CNAME`; check repo Settings → Pages → Custom domain.

### Old legacy URL (e.g. /about, /services) returns 404
- **Signal:** A previously working `/about` style link 404s after a change.
- **Likely causes:** `build.format: 'file'` was removed from `astro.config.mjs` (URLs
  would switch to `/about/`), or the legacy page stub under `src/pages/` (`about.astro`,
  `services.astro`, `portfolio.astro`, `awards.astro`, `contact.astro`) was deleted. Each
  stub renders the homepage with a canonical pointing at `/`. (`partner.astro` is a real
  standalone page — "Partner with us", linked from the footer — not a home-canonical stub.)
- **Investigate with:** confirm the stub exists in `src/pages/` and that
  `build.format: 'file'` is still set.

### Deploy succeeded but the site didn't change
- **Signal:** The Actions run is green but content is stale.
- **Likely causes:** GitHub Pages source not set to "GitHub Actions"; browser/CDN cache;
  or you pushed to a branch other than `master`.
- **Investigate with:** repo Settings → Pages source; hard-refresh; confirm the commit is
  on `master` and triggered a run (`gh run list`).

### Build fails in CI but passes locally
- **Signal:** `npm run build` works on your machine, fails in Actions.
- **Likely causes:** stale local `node_modules` vs the committed `package-lock.json`, or a
  Node version mismatch.
- **Investigate with:** `rm -rf node_modules && npm ci && npm run build` on Node 24.

### Confirming what's deployed
There is no version/build marker baked into the site. To confirm a change is live, compare
the deployed HTML against your local build, or check the latest successful run on `master`
(`gh run list --workflow=deploy.yml`) and confirm its commit SHA matches `origin/master`.

## Known quirks / gotchas

- **`build.format: 'file'`** — emits flat `/about.html` files instead of
  `/about/index.html`. This is intentional to preserve 15 years of legacy Jekyll inbound
  links. Do not remove it.
- **Legacy page stubs canonicalise to home** — `about`, `services`, `portfolio`,
  `awards`, `contact` all render the one-page site with `<link canonical>` pointing at
  `https://condense.com.au/`, and are explicitly **excluded from the sitemap** via the
  `filter` in `astro.config.mjs`. If you add a real standalone page, remember it will be
  excluded if its path matches that regex.
- **`public/CNAME` is load-bearing** — deleting it unbinds the apex custom domain on the
  next deploy. It is not generated; it is a committed file copied verbatim into `dist/`.
- **`include-hidden-files: true`** on the `upload-pages-artifact` step — the build artifact
  intentionally includes dotfiles from `dist/`. Keep this; some emitted assets/metadata
  rely on it.
- **No `base` in `astro.config.mjs`** — correct because the site is served at an apex
  domain root, not at `/<repo>/`. Adding a `base` would break asset paths.
- **`concurrency: cancel-in-progress: false`** — overlapping pushes queue rather than
  cancel, so a rapid second push waits for the first deploy to finish.

## Maintenance / one-off procedures

### Bump the Node version
Two places must stay in sync:
1. `.nvmrc` (currently `24`)
2. `node-version` in `.github/workflows/deploy.yml` (currently `24`)

### Upgrade Astro / dependencies
```sh
nvm use
npm update astro @astrojs/sitemap   # or edit package.json + npm install
npm run build                       # verify a clean build
npm run preview                     # spot-check the output
```
Commit both `package.json` and the updated `package-lock.json`. CI uses `npm ci`, so the
lockfile must be committed and consistent or the deploy will fail.

### Change or remove the custom domain
Edit `public/CNAME` (and update DNS + repo Settings → Pages accordingly). Removing the
file reverts the site to the default `*.github.io` URL on the next deploy.
