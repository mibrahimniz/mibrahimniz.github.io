# Muhammad Ibrahim Nizamani — Portfolio

Personal portfolio website of Muhammad Ibrahim Nizamani, a Senior Full Stack Engineer focused on building scalable backend systems, enterprise applications, fintech platforms, and modern web products.

The portfolio showcases professional experience, selected projects, technical capabilities, engineering work, and professional contact information.

## Overview

This portfolio provides a concise view of:

- Professional software engineering experience
- Work across fintech, digital banking, enterprise data, and SaaS
- Selected production projects and case studies
- Backend and full-stack engineering experience
- Technical skills and engineering interests
- Resume and professional contact information

## Tech Stack

- Next.js — App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

The project intentionally keeps dependencies minimal and focuses on a clean, maintainable frontend architecture.

## Engineering Standards

The project follows a lightweight set of engineering standards:

- TypeScript strict mode for type safety
- ESLint for code-quality and framework-specific checks
- Prettier for consistent code formatting
- Tailwind CSS for styling
- Reusable React components
- Centralized site and project configuration
- Responsive and accessible UI patterns
- Production build validation before deployment

## Project Structure

src/
├── app/
│ ├── about/
│ ├── contact/
│ ├── experience/
│ ├── projects/
│ │ ├── bayanatihub/
│ │ ├── ingage-pfm/
│ │ └── rubix/
│ └── page.tsx
│
├── components/
│ ├── contact/
│ ├── experience/
│ ├── layout/
│ ├── projects/
│ └── theme/
│
└── lib/
├── projects.ts
└── site.ts

The application uses reusable components and centralized project/site data to keep the presentation layer simple and maintainable.

## Getting Started

Clone the repository:

    git clone https://github.com/mibrahimniz/mibrahimniz.github.io.git
    cd mibrahimniz.github.io

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open http://localhost:3000 in your browser.

## Available Scripts

### Development

    npm run dev

Starts the local development server.

### Lint

    npm run lint

Runs ESLint checks.

### Formatting

    npm run format

Formats the project using Prettier.

### Formatting Check

    npm run format:check

Checks whether the project is formatted correctly without modifying files.

### Production Build

    npm run build

Creates the optimized production build.

### Production Server

    npm run start

Starts the production build locally after running the build command.

## Featured Projects

### BayanatiHub

Enterprise data governance and collaboration platform focused on metadata management, data lineage, integrations, and organizational data workflows.

### Ingage PFM

Personal finance platform supporting financial insights, budgeting, savings, transaction processing, notifications, and open-banking capabilities.

### Rubix

Enterprise digital banking platform supporting retail and corporate banking workflows through interconnected financial services.

Additional projects and technical details are available throughout the portfolio.

## Contact

The portfolio includes a dedicated contact page for professional opportunities, software projects, technical discussions, and other inquiries.

## Deployment

The portfolio is deployed as a static Next.js application using GitHub Pages.

The production deployment is connected to the `main` branch through GitHub Actions.

Production site:

https://mibrahimniz.github.io/

## Development Workflow

Before pushing changes to the repository, run:

    npm run lint
    npm run format:check
    npm run build

Changes that pass these checks can then be committed and pushed to the `main` branch.

## Purpose

This project serves both as a professional portfolio and as an ongoing engineering playground.

It provides a place to showcase selected work from my career while continuing to experiment with modern web development practices, frontend architecture, UI design, and technical implementation.

## Links

- GitHub: https://github.com/mibrahimniz
- LinkedIn: https://www.linkedin.com/in/muhammad-ibrahim-nizamani/
