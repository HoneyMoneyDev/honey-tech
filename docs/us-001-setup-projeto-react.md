# US-001 — Setup do Projeto React (HoneyTech Landing Page)

## User Story

**Como** desenvolvedor responsável pela landing page da HoneyTech,
**quero** inicializar o projeto React com todas as ferramentas e convenções definidas no `CLAUDE.md`,
**para que** o ambiente de desenvolvimento esteja pronto para receber as seções da landing page com qualidade e consistência.

---

## Critérios de Aceite

- [x] Projeto criado com Vite + React + TypeScript (`strict: true`)
- [x] ESLint configurado e executável via `npm run lint`
- [x] Vitest configurado e executável via `npm run test`
- [x] React Testing Library instalada e integrada ao Vitest
- [x] Storybook instalado e executável via `npm run storybook`
- [x] `@storybook/test` instalado para Interaction Tests
- [x] Git hooks em `.githooks/` com `pre-commit` e `commit-msg` funcionando
- [x] `npm run prepare` ativa os hooks corretamente
- [x] `npm run typecheck` executa `tsc --noEmit` sem erros
- [x] `gh-pages` instalado e `npm run deploy` configurado
- [x] `vite.config.ts` com `base` apontando para o repositório no GitHub
- [x] `package.json` com `"version": "0.1.0"` e todos os scripts definidos
- [x] Estrutura de pastas `src/sections/`, `src/shared/`, `src/app/` criada
- [x] Repositório remoto conectado a `https://github.com/HoneyMoneyDev/honey-tech`
- [x] Primeiro commit na `master` com a tag `chore(setup): inicializa projeto`

---

## Notas de implementação

- Node.js 18: Vite 5 e Storybook 8 foram usados (versões mais recentes requerem Node 20+).
- Storybook foi instalado manualmente (sem `npx storybook init`) devido a conflitos de peer deps com Node 18.
- `eslint-plugin-storybook@^0.11.1` é a versão compatível com Storybook 8.
- `@vitest/coverage-v8` deve estar na mesma versão major do `vitest`.
- `vite.config.ts` importa `defineConfig` de `vitest/config` (não de `vite`) para expor a propriedade `test`.
