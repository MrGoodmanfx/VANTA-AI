# VANTA AI — Premium SaaS Portfolio Project

VANTA AI is an original AI business-operations SaaS concept built to demonstrate product thinking, visual design, frontend engineering and interaction design.

## Product overview

VANTA gives founders and small teams a single workspace for workflow automation, AI-assisted creation and operational visibility.

### Included experiences
- **Marketing website** — responsive landing page, feature story, pricing toggle, FAQ accordion and conversion CTAs.
- **Onboarding** — three-step setup with persisted workspace preferences.
- **Dashboard** — KPI cards, activity chart, usage visualization, workflow status controls and contextual suggestions.
- **Automations** — create, pause, resume and delete workflows. Changes persist in browser local storage.
- **AI Studio** — prompt and tone controls, demo generation, and copy-to-clipboard.
- **Activity** — readable event history.
- **Settings** — editable profile/workspace fields, notification preferences and plan/usage section.
- **Responsive shell** — collapsible mobile navigation and layouts that adapt to smaller screens.

## Tech stack
- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 3
- Recharts
- Lucide React

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
# 1. Extract the ZIP and enter the project directory
cd vanta-ai

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Keep the default Next.js build settings.
4. Deploy. No environment variables are required for the demo.

## Demo routes
- `/` — public marketing website
- `/app/onboarding` — onboarding
- `/app` — dashboard
- `/app/automations` — workflow management
- `/app/studio` — AI Studio demo
- `/app/activity` — activity history
- `/app/settings` — preferences and usage

## Demo behavior and production boundaries

This project is intentionally runnable without credentials. Workflow and onboarding preferences use `localStorage`; chart and activity values are sample data. AI Studio uses a deterministic demo response to demonstrate the interaction pattern. Pricing is illustrative and no billing is enabled.

Before operating this as a real multi-user SaaS, add:
- Authentication and session management (e.g. Auth.js or Clerk).
- A database and tenant-aware authorization (e.g. PostgreSQL + Prisma).
- Server-side AI provider integration using environment variables such as `OPENAI_API_KEY`; never expose provider secrets in client code.
- Background job execution and durable workflow state.
- Integration OAuth, audit logs, rate limits and usage metering.
- A billing provider and webhook verification.
- Automated tests, error monitoring, privacy policy and terms.

## Design notes
Visual direction: deep charcoal surfaces, editorial Manrope headings, DM Sans UI typography, restrained violet accents, mint status color, fine borders and generous spacing. The interface is designed to feel calm, precise and operational rather than overly playful.

## Quality checklist
- [x] Responsive public landing page
- [x] Responsive application shell
- [x] Onboarding flow and browser persistence
- [x] Working navigation and primary CTAs
- [x] Workflow CRUD-lite interactions
- [x] Settings interactions
- [x] AI Studio demo generation and copy action
- [x] Production build and deployment instructions
- [ ] Real authentication, database, AI provider, integrations and billing (intentionally outside this self-contained portfolio demo)
