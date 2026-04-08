# My Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Preview

https://mhassanbilal-portfolio.vercel.app/

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- ESLint

## Features

- Mobile-first responsive layout
- Sticky navbar with animated mobile hamburger menu
- Section-based homepage:
  - Hero
  - Services
  - Projects
  - About
  - Contact
- Smooth UI motion and gradient background styling

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Run Vite development server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
  components/
    AboutSection.tsx
    ContactSection.tsx
    Hero.tsx
    Navigation.tsx
    ProjectsSection.tsx
    ServicesSection.tsx
  hooks/
    navbar.ts
  App.tsx
  index.css
  main.tsx
```

## Customization

- Update page content in `src/App.tsx`
- Edit section UI in `src/components/*`
- Adjust global styling and theme in `src/index.css`

## Notes

- Tailwind is integrated via `@tailwindcss/vite` in `vite.config.ts`
- Base styles and keyframes are defined in `src/index.css`
