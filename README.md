# CET138 — Full Stack Development ePortfolio
Student: Alisha Chaudhary
Assignment: 1
Module: CET138 — Full Stack Development

## 🔗 Live Website

https://alisha4321.github.io/bj20ui/


## 📌 Project Overview

A single-page ePortfolio website built for CET138. It covers **5 topics** — Full Stack, HTML, CSS, Bootstrap, and JavaScript — with a live interactive demo in every section.
Built with just 3 files. No installs, no build tools, open `index.html` and it runs.

## ⚡ Features

| Feature | How it works |
|---|---|
| Live API call | `fetch()` hits a real server and shows the JSON response on screen |
| Registration form | Validates name + email, rejects bad input with red borders |
| LocalStorage | Form entries are saved — data survives page refresh |
| Entries table | Saved form data renders as a colour-coded table |
| Flexbox Playground | Dropdowns update live CSS flex properties in real time |
| Bootstrap Modal | Opens with `data-bs-toggle` — zero custom JavaScript |
| Bootstrap Tabs | Switch between Grid / Cards / Components / Utilities panels |
| To-Do List | Add, check off, and delete tasks — list re-renders instantly |
| Password Generator | Builds random password from selected character sets |
| Calculator | Full arithmetic with state tracking and operator chaining |
| Quiz | 5-question quiz with correct/wrong highlighting and score |
| Smooth scroll nav | Fixed top navbar links jump to each section smoothly |

## ✅ What's Covered in the Code

### Section 01 — Full Stack Development
- The 3 layers explained: Frontend → Backend → Database
- Live `fetch()` demo calling `jsonplaceholder.typicode.com`
- Shows HTTP request → JSON response → DOM render in one click

### Section 02 — HTML
- Semantic elements: `<header>`, `<nav>`, `<section>`, `<footer>`, `<article>`
- Form fields: text, email, tel, select inputs
- Validation: empty field check + email regex check
- `localStorage` read/write to persist data
- Dynamic table built with `.innerHTML`

### Section 03 — CSS
- CSS variables (`--c1` to `--c5`, `--bg`, `--border`, `--muted`)
- Flexbox + CSS Grid layouts
- `@keyframes` animations on hero text
- Hover transitions on nav, buttons, cards
- Google Fonts: IBM Plex Mono · Manrope · Bebas Neue
- Live Flexbox Playground (JS updates inline styles)

### Section 04 — Bootstrap 5
- Grid: `container` → `row` → `col-*` responsive columns
- Components: cards, badges, alerts, buttons, progress bars, breadcrumbs
- Modal: `data-bs-toggle="modal"` + `data-bs-target`
- Tabs: custom tab switcher with `classList.toggle`

### Section 05 — JavaScript
| App | Concepts used |
|---|---|
| To-Do List | Array push/splice, `innerHTML` re-render, checkbox events |
| Password Generator | `Math.random()`, string concatenation, checkbox state |
| Calculator | 3 state variables (`cA`, `cOp`, `cNew`), `switch` statement |
| Quiz | Array of objects, `createElement`, `classList.add`, disabled state |

## 🛠️ Technologies & Requirements

| Technology | Version / Detail |
|---|---|
| HTML5 | Semantic, accessible markup |
| CSS3 | Custom properties, Flexbox, Grid, animations |
| JavaScript | Vanilla ES6+ (no libraries) |
| Bootstrap | v5.3.3 via CDN |
| Google Fonts | IBM Plex Mono, Manrope, Bebas Neue via CDN |
| JSONPlaceholder | Free REST API for live fetch demo |
| Browser | Any modern browser (Chrome, Firefox, Edge, Safari) |
| Internet | Required only for CDN fonts, Bootstrap JS, and API demo |
| Local Server | ❌ Not needed — open `index.html` directly |

## 📂 File Structure

```
📦 bj20ui
 ┣ 📄 index.html     ← All 5 sections, hero, nav, footer, modal
 ┣ 📄 style.css      ← All custom styles and animations
 ┗ 📄 script.js      ← All JavaScript for every interactive feature
```

