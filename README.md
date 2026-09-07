# Husnain Ali — Portfolio

Personal portfolio for **Husnain Ali**, Principal Software Engineer working across
DevOps / cloud and mobile engineering.

**Live:** https://ihusnainalii.github.io/

A single-page, static site — no build step, no framework, no server. Content is
data-driven: the sections render from plain JavaScript arrays, so updating the
site is mostly editing a few `js/*.js` files.

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Editing content](#editing-content)
- [Interactive components](#interactive-components)
- [Deployment](#deployment)
- [Notes & conventions](#notes--conventions)
- [License & credits](#license--credits)

---

## Features

- **One-page layout** with anchor navigation: About, What I Do, Mobile Works,
  DevOps Works, Resume, CLI Terminal, Blog, Contact.
- **Animated hero** — real `<h1>`, a `Typed.js` rotating line, tech-tag chips, a
  full-bleed background photo under a solid navy cover.
- **Data-driven sections** — projects, skills, tools, architecture patterns and
  language proficiency all render from arrays in `js/`.
- **Interactive CLI terminal** — a shell UI (`help`, `skills`, `projects`,
  `experience`, `relocation`, …) whose output is scraped **live from the page**,
  so it never drifts from the rest of the site.
- **Resume chooser modal** — the *Download Resume* button opens a DevOps-vs-Mobile
  picker that explains the two-resume rationale before download.
- **Skills search** — live text filter over every skill badge, combined with the
  category tabs.
- **WhatsApp contact form** — the contact form composes a message and opens
  `wa.me` (no backend).
- **Branded page loader**, responsive down to ~360px, light/one-theme design,
  lazy-loaded below-the-fold images, `rel="noopener"` on external links, JSON-LD
  `Person` schema + Open Graph tags for SEO.

---

## Tech stack

| Area        | Used |
|-------------|------|
| Markup      | Hand-written HTML5 (`index.html`) |
| Styling     | Bootstrap grid + the **Designesia** theme (`css/style.css`, `css/plugins.css`) + custom overrides in **`css/custom-style-6.css`** |
| Scripts     | jQuery, `js/designesia.js` + `js/plugins.js` (theme bundle: WOW.js, Owl Carousel, Typed.js, etc.), plus small vanilla modules in `js/` |
| Icons       | Font Awesome 6 (CDN: `cdnjs.cloudflare.com`) |
| Fonts       | bundled in `fonts/` (icon fonts) + theme web fonts |
| Hosting     | GitHub Pages (static, served from repo root on `main`) |

No package manager, no bundler, no CI. `git push` is the deploy.

---

## Project structure

```
.
├── index.html                 # the entire page
├── css/
│   ├── style.css               # Designesia theme base
│   ├── plugins.css             # theme plugin styles
│   ├── coloring.css            # theme accent colors
│   └── custom-style-6.css      # ← ALL custom work lives here (hero, terminal,
│                               #   resume modal, loader, skills search, etc.)
│   └── custom-style-1..5.css   # legacy theme variants — not loaded
├── js/
│   ├── plugins.js              # theme plugin bundle (jQuery plugins)
│   ├── designesia.js           # theme init (preloader, animations, menu, …)
│   ├── custom-marquee.js       # footer marquee
│   ├── projects.js             # Mobile Works data  → #ios-works-container
│   ├── devopsProjects.js       # DevOps Works data  → #devops-projects-container
│   ├── skills.js               # mobile/iOS skills  → #all-skills-container
│   ├── devopsSkills.js         # DevOps/cloud skills → #all-skills-container
│   ├── architectures.js        # architecture patterns → #all-skills-container
│   ├── tools.js                # tools → #all-skills-container
│   ├── language.js             # programming-language proficiency → #language-items
│   ├── openResume.js           # resume chooser modal open/close logic
│   ├── app.js / cookit.js / particles.js   # legacy — not loaded
├── images/
│   ├── profile.JPG             # about-section photo
│   ├── background/             # hero + section backgrounds
│   ├── projects/               # project thumbnails
│   ├── logo/                   # skill/tech logos
│   └── blogs/                  # blog card images
├── resume/
│   ├── Husnain Ali - DevOps Engineer.pdf
│   └── Husnain Ali - Senior Mobile Application Engineer.pdf
├── fonts/                      # bundled icon/web fonts
├── vendor/                     # bundled theme vendor assets
├── src/ , form/                # legacy PHP mail handler — unused (contact is WhatsApp)
├── LICENSE                     # Apache-2.0 (from the theme)
└── README.md
```

`graphify-out/` (if present) is a local knowledge-graph artifact and is
git-ignored — not part of the site.

---

## Run locally

Any static file server works. From the repo root:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then open `http://localhost:8000/`.

> Opening `index.html` directly with `file://` also mostly works, but a server is
> recommended so the CDN/CORS-sensitive bits and relative paths behave normally.

---

## Editing content

Most updates are just editing an array. Each entry is an object; the render
function turns it into a card and injects it on `DOMContentLoaded`.

### Mobile Works — `js/projects.js`

```js
const projects = [
  {
    title: "App name",
    type: "ios",            // ios | ipad | tvos | react-native | flutter  (drives the platform badge)
    url: "https://apps.apple.com/…",
    description: "One-line summary.",
    image: "images/projects/thumb.jpg",
    tags: ["Swift", "Firebase", "MVVM"]
  },
  // …
];
```

### DevOps Works — `js/devopsProjects.js`

```js
const devopsProjects = [
  {
    category: "Cloud Modernisation",
    title: "Project title",
    description: "One-line summary.",
    tags: ["AWS", "Terraform", "EKS"]
  },
  // …
];
```

### Skills / tools / architecture — `js/skills.js`, `js/devopsSkills.js`, `js/tools.js`, `js/architectures.js`

Flat lists of `{ name: '…' }`. Each file hard-codes its `data-category`
(`mobile`, `devops`, `arch`, `tools`) so the filter tabs and the search box work.

```js
const skills = [ { name: 'Swift' }, { name: 'SwiftUI' }, /* … */ ];
```

### Language proficiency — `js/language.js`

```js
const skills = [
  { name: 'Swift', percent: 95, imageURL: "images/logo/swift.png" },
  { name: 'Terraform HCL', percent: 90, icon: 'fa fa-layer-group', iconColor: '#7B42BC' },
  // use imageURL OR (icon + iconColor)
];
```

### Experience, education, blog, contact

These are **static HTML** inside `index.html` — edit the markup directly:

- Experience → `.exp-company-block` blocks in `#section-resume`
- Education → `.edu-card` blocks
- Blog → `.bloglist` items in `#section-blog`
- Contact details → `.contact-info-item` blocks in `#section-contact`

### Resume PDFs

Replace the files in `resume/` and update the two `href`s in the
`#resume-modal` markup (and the fallback path in `js/openResume.js`). Filenames
with spaces must be URL-encoded in the `href` (`%20`).

### Styling

Add new rules to **`css/custom-style-6.css`** only — it loads last and overrides
the theme. Don't touch `style.css`.

---

## Interactive components

| Component | Where | How it works |
|-----------|-------|--------------|
| **CLI terminal** | `#section-terminal` + inline `<script>` at the bottom of `index.html` | On each command it queries the live DOM (`#all-skills-container`, `.exp-company-block`, `#language-items`, project cards, `.contact-info-item`, …) and formats the result. Add a command by adding a key to the `handlers` object. |
| **Resume modal** | `#resume-modal` + `js/openResume.js` | `#downloadResume` (and the terminal `resume` command via `window.openResumeModal()`) toggle the `hidden` attribute; closes on backdrop / ✕ / `Esc`. |
| **Skills search** | inline `<script>` in `#section-resume` | Combines the active category tab with a case-insensitive text match over `.skill-item` text; shows a "no results" line. |
| **Contact form** | `#wa_contact_form` + inline `sendViaWhatsApp()` | Builds a message string and opens `https://wa.me/<number>?text=…`. No server. |
| **Loader** | `#preloader` + `.loader-*` CSS | Theme fades it out on `window.load`. Styling in `custom-style-6.css`. |

---

## Deployment

GitHub Pages serves the repository root of the `main` branch.

```bash
git add -A
git commit -m "Update portfolio"
git push origin main
```

The site rebuilds automatically within a minute or two. There is no build
artifact — what's in the repo is what's served.

---

## Notes & conventions

- **Custom code goes in `css/custom-style-6.css` and the small `js/` modules.**
  The theme files (`style.css`, `plugins.js`, `designesia.js`) are treated as
  vendor code.
- Legacy, **not loaded**: `css/custom-style-1..5.css`, `css/mdb*.css`,
  `css/bootstrap.rtl.min.css`, `js/app.js`, `js/cookit.js`, `js/particles.js`,
  and the PHP mail handler in `src/` and `form/`.
- Typography: prose uses colons/commas, **no em dashes**.
- Historical job locations stay as their real location (e.g. "Lahore, Pakistan");
  only the current/personal location reflects the present.
- `.DS_Store` files should not be committed — add `.DS_Store` to `.gitignore`.

---

## License & credits

- Site code and content © Husnain Ali.
- `LICENSE` (Apache-2.0) originates from the **Designesia** HTML template the
  site is built on.
- Third-party: Bootstrap, jQuery, Font Awesome, WOW.js, Owl Carousel, Typed.js,
  Topmate embed.
