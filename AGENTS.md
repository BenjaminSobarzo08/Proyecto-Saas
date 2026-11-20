
# Project Guidelines

## Project
SaaS platform for beauty and personal care businesses.

## Technology
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- Supabase Auth

## Architecture
- Multi-tenant architecture.
- Modular monolith.
- Separate business logic by feature.
- Reusable UI components.
- Shared database with business-level data isolation.

## Development rules
- Use TypeScript.
- Avoid using `any`.
- Follow existing folder structure.
- Reuse components whenever possible.
- Do not modify unrelated modules.
- Do not install dependencies without justification.
- Never commit environment variables or secrets.
- Do not modify database schema without coordinating
  with the team.

## Git
- Never work directly on main.
- Use feature branches.
- Use Pull Requests for integration.
- Write descriptive commit messages.
