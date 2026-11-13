# Codemade Studio

One-page site for [codemade.studio](https://codemade.studio) — a white-label design and development studio.

Stack: **React 19**, **Vite**, and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Edit the work section

Project cards live in one file: [`src/data/work.js`](src/data/work.js). To publish a case study, set `status` to `'live'`, add a `href`, and optionally an `image` (put the file in `public/`, e.g. `/work/saas.png`).

## Deploy to Vercel

1. Push this project to a GitHub (or GitLab / Bitbucket) repository, or install the [Vercel CLI](https://vercel.com/docs/cli) and run `npx vercel` from this folder.
2. In [Vercel](https://vercel.com), create a new project and import the repo.
3. Framework preset should be **Vite**. Build command: `npm run build`. Output directory: `dist`. Leave the install command as `npm install`.
4. Deploy. You will get a `*.vercel.app` URL first — use it to check the site.

### Connect the GoDaddy domain `codemade.studio`

1. In the Vercel project, open **Settings → Domains** and add `codemade.studio` and `www.codemade.studio`.
2. In **GoDaddy DNS** for `codemade.studio`, add (or update) only these records:

   | Type  | Name | Value                 | Notes                                      |
   | ----- | ---- | --------------------- | ------------------------------------------ |
   | A     | `@`  | `76.76.21.21`         | Apex domain                                |
   | CNAME | `www`| `cname.vercel-dns.com`| www → Vercel                               |

   Use the values Vercel displays in the domain settings if they differ from the ones above.

3. **Do not touch or remove the existing MX or TXT records.** Those are for Zoho Mail (MX, SPF, and DKIM). Changing or deleting them will break email for `admin@codemade.studio` and other mailboxes on this domain.

DNS changes can take anywhere from a few minutes to a few hours to propagate. Once Vercel shows the domain as valid, the site will be live at https://codemade.studio.

## Brand

- Navy: `#0C1F4A`
- Electric blue: `#2E6BFF`
- Typeface: Plus Jakarta Sans (ExtraBold wordmark, Bold headings, Regular/Medium body)
- Logo assets are in `public/` (`logo-horizontal.png`, `logo-icon.png`, `favicon.svg`). The pixel `</>` mark is an inline SVG in `src/components/Logo.jsx` (15 rounded squares, plus a white-on-dark variant).
- Contact: [admin@codemade.studio](mailto:admin@codemade.studio)
