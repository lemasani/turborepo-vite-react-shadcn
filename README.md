# 🚀 Turborepo starter with shared shadcn/ui components (Vite). Tailwind 4 support.

[![Build](https://github.com/evgenius1424/turborepo-vite-shadcn-ui/actions/workflows/build.yml/badge.svg)](https://github.com/evgenius1424/turborepo-vite-shadcn-ui/actions/workflows/build.yml)
[![Update Dependencies](https://github.com/evgenius1424/turborepo-vite-shadcn-ui/actions/workflows/update-dependencies.yml/badge.svg)](https://github.com/evgenius1424/turborepo-vite-shadcn-ui/actions/workflows/update-dependencies.yml)

This repository is a monorepo starter kit utilizing [Turborepo](https://turbo.build/repo) for managing multiple
applications with shared [shadcn/ui](https://github.com/shadcn-ui/ui) components. It includes two applications (`vite`
and `nextjs`) in the `apps`
directory, both of which use shared components from the `@repo/ui` package.

The goal of this repository is to provide up-to-date starters for vite-react and Next.js, and probably something else.

### Prerequisitesvite

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 22 or higher)
- [pnpm](https://pnpm.io/installation) (version 10 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lemasani/turborepo-vite-react-shadcn.git
   cd turborepo-vite-react-shadcn
   ```

2. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

3. Build

   ```bash
   pnpm build
   ```

4. Develop

```bash
   pnpm dev
```

5. Add new [component](https://ui.shadcn.com/docs/components/tabs) (replace card with button, tabs, you name it)

```bash
pnpm ui card
```

Enjoy working with your new Turborepo starter kit and feel free to raise a PR! 🎉
