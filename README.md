# React vs Ember

A concise, syntax-focused reference for comparing **Ember Octane** and **React**. The site presents common concepts, patterns, and code examples side by side so developers can quickly find the equivalent approach in each framework.

## Project is live

The project is hosted on GitHub Pages: https://atulpunde.github.io/react-vs-ember/

## What is included

- Quick side-by-side syntax comparisons for common tasks
- Detailed examples covering components, props, state, events, templates, routing, data loading, forms, and more
- Ember Octane examples using Glimmer components, tracked properties, services, actions, and modifiers
- React examples using functional components, JSX, Hooks, Context, and standard JavaScript/TypeScript patterns
- Responsive layout for desktop and mobile screens
- Links to the official Ember.js and React documentation

This project is a developer reference, not a benchmark or a recommendation of one framework over the other.

## Tech stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- HTML and CSS
- GitHub Pages for hosting

## Getting started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/atulpunde/react-vs-ember.git
cd react-vs-ember
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement |
| `npm run build` | Type-checks the project and creates a production build in `dist/` |
| `npm run lint` | Runs ESLint across the project |
| `npm run preview` | Serves the production build locally for review |

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Project structure

```text
.
├── public/                 # Logos, favicon, sitemap, and other static assets
├── src/
│   ├── App.tsx             # Main page layout and comparison rendering
│   ├── data/
│   │   └── comparisons.ts  # Comparison rows and detailed concept examples
│   ├── index.css           # Application styles and responsive layout
│   └── main.tsx            # React application entry point
├── .github/workflows/
│   └── static.yml          # GitHub Pages build and deployment workflow
├── index.html              # HTML entry point and page metadata
├── package.json             # Project scripts and dependencies
├── tsconfig*.json           # TypeScript configuration
└── vite.config.ts           # Vite configuration and Pages base path
```

The page is rendered by `src/App.tsx`. Its comparison content is kept separately in `src/data/comparisons.ts`, making it straightforward to add or update examples without changing the page structure.

## Deployment

The project is deployed automatically to GitHub Pages by `.github/workflows/static.yml` whenever changes are pushed to `main`. The workflow installs dependencies with `npm ci`, builds the application, and deploys the generated `dist/` directory.

The Vite base path is configured for this project at `/react-vs-ember/` in `vite.config.ts`.

## Contributing

Suggestions, corrections, and improvements are welcome. To contribute:

1. Create a fork of the repository.
2. Create a feature branch.
3. Make your changes and update the relevant comparison data or documentation.
4. Run `npm run lint` and `npm run build`.
5. Open a pull request with a short description of the change.

When adding framework examples, keep them concise, accurate, and focused on showing the corresponding syntax or application pattern.

## Related documentation

- [Ember.js documentation](https://guides.emberjs.com/)
- [Ember Octane documentation](https://guides.emberjs.com/release/upgrading/current-edition/)
- [React documentation](https://react.dev/)
- [Vite documentation](https://vite.dev/guide/)
