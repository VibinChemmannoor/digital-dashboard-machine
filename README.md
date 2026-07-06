# Frontend Task — Campaign Automation UI

A pixel-accurate, fully responsive rebuild of a LinkedIn-outreach / campaign-automation
SaaS dashboard. Self-contained frontend (static mock data, no backend) with a light/dark
theme, built from a Figma workflow of 14 screens.

## Tech stack

- **React 19** + **Vite** (JavaScript) with the React Compiler
- **Tailwind CSS v4** (`@tailwindcss/vite`) — design tokens as CSS variables, class-based dark mode
- **react-router-dom v7** — nested routes; the campaign wizard steps are child routes
- **lucide-react** icons + custom brand glyphs
- **d3-shape / d3-scale** — hand-built SVG charts (health ring, reply gauge, bar chart)
- **ESLint + Prettier + Husky/lint-staged** enforced on commit

## Scripts

```bash
npm run dev          # start the dev server
npm run build        # production build
npm run preview      # preview the production build
npm run lint         # eslint
npm run lint:fix     # eslint --fix
npm run format       # prettier --write
npm run format:check # prettier --check
```

## Screens

- **Campaigns list** (`/campaigns`) — filterable table with row actions; empty state at
  `/campaigns?state=empty`
- **Select Workflow Mode** modal → **Advance Campaign wizard** (`/campaigns/new/:mode`):
  1. Define Target Audience (LinkedIn Search / CSV upload + column mapping / Lookalike / Webhook)
  2. Sender Profiles (health rings, LinkedIn & Email tabs)
  3. Settings (sending window, AI Assist, Zapier triggers)
  4. Stats — empty state → launch → analytics dashboard

## Project structure

```
src/
  components/
    ui/        # ~24 reusable primitives (Button, Modal, Table, charts, …)
    layout/    # AppShell, Sidebar, Topbar, drawer, theme toggle
    icons/     # brand glyphs + illustrations
  features/campaign/
    list/       # all-campaigns table + filters + row menu
    workflow/   # Select Workflow Mode modal
    wizard/     # WizardLayout, stepper, footer, steps/*
    lookalikes/ # Lookalikes modal
  context/     # ThemeProvider, WizardProvider + reducer, breadcrumb
  hooks/       # useTheme, useMediaQuery, useDisclosure, useWizard, …
  data/mock/   # static campaigns, senders, lead lists, stats
  lib/         # cn(), formatters, constants
  styles/      # Tailwind entry + design tokens
```

## Theming

All colors are CSS variables in `src/styles/tailwind.css`, redefined under `.dark` and
mapped into Tailwind (`bg-surface`, `text-muted`, `primary-*`, …). Theme is toggled via the
sidebar control, persisted to `localStorage`, and applied pre-paint (no flash) by an inline
script in `index.html`.
