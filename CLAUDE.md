# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Baseball Biblico is a Next.js 16.0 application built with React 19.2, TypeScript, and Tailwind CSS 4. The project uses the App Router architecture and is set up with the standard Next.js project structure created by `create-next-app`.

## Development Commands

All commands should be run from the `baseball-biblico/` directory:

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

**Framework:** Next.js 16.0 with App Router
- Main source code is in `baseball-biblico/app/`
- Uses the App Router paradigm (not Pages Router)
- TypeScript configured with strict mode enabled

**Styling:**
- Tailwind CSS 4 with PostCSS plugin architecture
- Global styles in `app/globals.css` using `@import "tailwindcss"`
- CSS variables for theming defined in `:root` with dark mode support via `prefers-color-scheme`
- Custom theme colors: `background` and `foreground` mapped through CSS variables
- Font setup using Next.js Font optimization with Geist Sans and Geist Mono

**Path Aliases:**
- `@/*` maps to the root directory (configured in tsconfig.json)

**TypeScript Configuration:**
- Target: ES2017
- JSX mode: `react-jsx` (new JSX transform)
- Module resolution: `bundler`
- Strict mode enabled

**Project Structure:**
- Source directory: `baseball-biblico/` (nested within repository root)
- All development work happens in the nested `baseball-biblico/` folder
- Main entry point: `app/page.tsx`
- Root layout: `app/layout.tsx` (handles metadata, fonts, and global layout structure)
- Static assets: `public/` directory
