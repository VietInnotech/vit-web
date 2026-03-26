# AGENTS.md

Guidance for agents working in this repository.

## Principles

- Follow KISS, YAGNI, and SOLID.
- Prefer the smallest change that solves the request.
- Match the existing code style and architecture unless the user asks for a refactor.
- Avoid adding new abstractions, dependencies, or frameworks unless there is a clear need.

## Project Snapshot

- Stack: Vite, React 18, TypeScript, React Router, Bun.
- Source root: `src/`.
- Main app entry points: `src/main.tsx`, `src/App.tsx`, `src/router.tsx`.
- Styling is a mix of CSS files and component-local CSS.
- Assets live under `src/assets/` and `public/`.

## Workflow

- Inspect the relevant files before editing.
- Keep changes focused on the requested scope.
- Prefer updating existing components and styles over creating new layers.
- If a task can be done with a single component or utility, do that.
- If you introduce new files, keep them narrowly scoped.

## Commands

Use the project scripts:

- `bun run dev` to run the app locally.
- `bun run build` to validate TypeScript and production build output.
- `bun run biome:check` to check formatting and linting.
- `bun run biome:write` to apply Biome fixes.

## Code Style

- Use TypeScript for new code.
- Keep functions and components small and explicit.
- Avoid `any` unless the existing code already requires it and there is a clear reason.
- Prefer straightforward props and data flow over deep prop drilling or premature context.
- Reuse existing components, CSS patterns, and route structure where possible.

## Files And Assets

- Do not edit generated output in `dist/`.
- Do not add dependencies unless they are necessary for the task.
- Place static assets in `src/assets/` or `public/` only when they are actually needed.
- If adding documents such as PDFs, follow the existing `public/` serving pattern.

## Validation

- Run the relevant checks after changes.
- For UI or routing work, prefer at least `bun run build`.
- If you cannot run checks, state that clearly and explain why.

## Communication

- When the request is ambiguous, make the smallest reasonable assumption and note it.
- If a change has tradeoffs, state them briefly and directly.
