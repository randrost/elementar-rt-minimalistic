# Elementar RT Minimalistic

A minimal Angular 20 starter cut down from [Elementar RT Admin](https://github.com/randrost/elementar-rt-demo).
Keeps only the app shell (header, sidebar, page container) and the auth flow —
everything else is stripped so you can build your own screens on a clean base.

MIT licensed.

---

## What's here

- **Shell** — header (breadcrumbs, notifications, dark mode toggle, user menu)
  and a collapsible sidebar, both driven by signals (`core/app.store.ts`).
- **Auth** — sign-in, sign-up, forgot/reset password, set-new-password, an
  account-creation screen, and a terminal "done" screen.
- **Home** — a single placeholder route inside the shell to build from.

### What it is not

Not a component library — it consumes [`@elementar-rt/components`](https://elementar-rt.tulikas.de)
rather than defining one. Not production-hardened: there is no real auth, no
persistence beyond `localStorage` (sidebar collapse state, colour scheme).

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Angular 20, standalone components, `OnPush` everywhere |
| State | Signals; `@ngrx/signals` for the shell store |
| Styling | Tailwind v4 + Angular Material 3 tokens |
| Icons | Iconify (Solar, Logos), self-hosted |
| Avatars | DiceBear, generated at runtime |

---

## Getting started

```bash
npm install
npm start            # dev server on http://localhost:4200
```

Other scripts:

```bash
npm run build        # production build into dist/
npm run build:prod   # explicit production configuration
npm test             # unit tests (Karma + Jasmine, watch mode)
npm run test:ci      # unit tests once, headless
```

Node 20 or newer.

---

## Project structure

```
src/app/
  core/     # avatar service, app store, nav model
  shell/    # sidebar, header, page container
  auth/     # sign-in through to the setup wizard
  home/     # the one placeholder route inside the shell
```

Add new feature routes under `src/app/`, register them in `app.routes.ts`,
and add a sidebar entry in `core/nav.ts`.

---

## Deployment

The app is a static SPA served by nginx.

```bash
docker build -t elementar-rt-minimalistic .
docker run -p 8080:80 elementar-rt-minimalistic
```

`manifest.yaml` deploys it to Kubernetes behind an nginx ingress with
cert-manager TLS, and `Jenkinsfile` builds and pushes the image on every push
to the default branch — adjust or remove both if you don't need them.

Because it is a SPA, the nginx config falls back to `index.html` for unknown
paths — without that, a refresh on any deep link would 404.

---

## Licence

MIT — see [LICENSE](LICENSE). Use it, fork it, ship it.
