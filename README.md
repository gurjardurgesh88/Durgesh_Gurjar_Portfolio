# 🚀 Durgesh Gurjar – Portfolio

A personal portfolio website built with **React**, **Vite**, and **Tailwind CSS** to showcase projects, skills, and contact details with dark/light mode and smooth UI animations.

## 🔗 Live Demo

- Production URL: [https://iamdurgesh.vercel.app](https://iamdurgesh.vercel.app)

## ✨ Features

- Modern single-page portfolio layout
- Dark/light theme toggle with local persistence
- Smooth section animations and preloader
- Projects, skills, experience, and contact sections
- Resume download button
- SEO + social metadata support
- Auto-generated sitemap script

## 🧰 Tech Stack

- React 18
- Vite 4
- Tailwind CSS
- EmailJS
- Font Awesome

## 📁 Project Structure

```text
src/
├── components/        # UI sections and reusable components
├── hooks/             # Custom hooks
├── styles/            # Global Tailwind-powered styling
├── data/              # Reserved for centralized content data
├── App.jsx            # Main composition
└── main.jsx           # React entry point

public/
├── profile.jpg
├── preview.png
├── Durgesh_resume.pdf
├── sitemap.xml
└── favicon assets
```

## ⚡ Quick Start

### Prerequisites

- Node.js >= 18.18.0
- npm >= 9

### Install

```bash
npm ci
```

### Run Development Server

```bash
npm run dev
```

## 🏗️ Production Build

```bash
npm run build
npm run preview
```

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run start` | Alias of `dev` |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run generate-sitemap` | Generate `public/sitemap.xml` |
| `npm run lint` | Run ESLint checks |
| `npm run format:check` | Validate formatting with Prettier |
| `npm run audit` | Run dependency audit |

## 🖼️ Screenshots

- Preview image: `public/preview.png`

## 🧩 Architecture Snapshot

- `src/App.jsx` assembles all portfolio sections.
- `src/components/*` contains each major page section.
- `src/hooks/useIntersectionObserver.js` drives in-view animations.
- `src/styles/global.css` centralizes animation and utility styling.

## 🛠️ Maintenance Guide

### Update Projects

- Edit project entries in `src/components/ProjectsSection.jsx`.

### Update Contact Details

- Edit contact links and labels in `src/components/ContactSection.jsx`.

### Update Resume

- Replace `public/Durgesh_resume.pdf` with the latest version.

### Regenerate Sitemap

```bash
npm run generate-sitemap
```

Then verify `public/sitemap.xml` contains valid URLs before deployment.

## 🎯 Project Goals

- Maintain a professional public portfolio
- Improve accessibility and performance progressively
- Keep code modular and easy to maintain

## ⚠️ Known Limitations

- Contact form currently relies on client-side EmailJS setup
- Portfolio content is embedded in components (planned extraction to `src/data`)
- No automated test suite yet

## 🤝 Contribution Guide

1. Fork the repository
2. Create a feature branch
3. Run `npm run lint` and `npm run build`
4. Open a pull request with clear change summary

## 📬 Contact

- Email: [pateldurgesh9399@gmail.com](mailto:pateldurgesh9399@gmail.com)
- GitHub: [@gurjardurgesh88](https://github.com/gurjardurgesh88)
- LinkedIn: [durgesh-gurjar-195533369](https://linkedin.com/in/durgesh-gurjar-195533369)

## 🚀 Deployment

- Platform: Vercel
- Output directory: `dist/`

## 📝 License

This project is licensed under the **MIT License**. See [`LICENCE`](./LICENCE).
