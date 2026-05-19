# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Landing page da **HoneyTech** — empresa de soluções digitais. Desenvolvida em React + Vite, publicada via GitHub Pages na organização `HoneyMoneyDev`.

---

## Git — GitHub Flow

`main` é sempre deployável. Todo trabalho novo sai de uma branch curta e volta via Pull Request. Nunca commitar diretamente na `main`.

### Nomenclatura de branches

```
feat/<descricao>      nova funcionalidade
fix/<descricao>       correção de bug
chore/<descricao>     manutenção, deps, config
refactor/<descricao>  refatoração sem mudança de comportamento
docs/<descricao>      apenas documentação
```

### Commits — Conventional Commits

```
feat(hero): adiciona seção hero com CTA
fix(nav): corrige menu mobile em telas pequenas
chore(deps): atualiza vite para 6.x
```

Padrão: `^(feat|fix|chore|refactor|test|docs|perf|ci|build|revert)(\(.+\))?: .{1,100}$`

---

## Git Hooks

Hooks em `.githooks/` (raiz do repo). Ativar após clonar:

```bash
npm run prepare
```

### `pre-commit`

```
typecheck → lint → test
```

```bash
#!/bin/sh
set -e
npm run typecheck
npm run lint
npm run test
```

### `commit-msg`

Valida Conventional Commits (mesmo script do padrão do projeto CRM).

Regras:
- Nunca usar `--no-verify`. Se o hook falhar, corrija o erro.
- Hooks devem ser `chmod +x`.

---

## Comandos

```bash
npm install              # Instalar dependências
npm run dev              # Dev server (Vite)
npm run build            # Build produção
npm run preview          # Preview do build local
npm run typecheck        # Verificar tipos TypeScript
npm run lint             # ESLint
npm run test             # Testes unitários (Vitest)
npm run test -- -t "nome do teste"  # Teste específico
npm run storybook        # Storybook (desenvolvimento isolado de componentes)
npm run build-storybook  # Build estático do Storybook
npm run deploy           # Build + push para gh-pages
npm run prepare          # Ativar git hooks (.githooks/)
```

---

## Deploy — GitHub Pages

- Publicado na branch `gh-pages` via pacote `gh-pages`.
- O `vite.config.ts` tem `base: '/honey-tech/'` (nome do repositório no GitHub).
- O script `deploy` executa `npm run build && gh-pages -d dist`.
- Repositório remoto: `https://github.com/HoneyMoneyDev/honey-tech`.

---

## Arquitetura

### Estrutura de pastas

```
src/
  app/
    App.tsx
    main.tsx
  sections/           # Seções da landing page (Hero, About, Services, Contact, etc.)
    <Section>/
      <Section>.tsx
      <Section>.stories.tsx
      <Section>.spec.tsx
  shared/
    components/       # Componentes reutilizáveis (Button, Card, Input, etc.)
    hooks/            # Hooks genéricos
    types/            # Tipos globais
  test/
    setup.ts          # Setup do Vitest (jest-dom)
```

### Convenções

- TypeScript estrito — nunca usar `any`.
- Cada seção da página é um componente isolado em `sections/`.
- Componentes reutilizáveis ficam em `shared/components/`, sem dependência de seção específica.
- Nunca manipular o DOM diretamente — usar refs apenas quando inevitável.

---

## CDD + TDD — Component-Driven Development

O desenvolvimento combina TDD para lógica e CDD para componentes visuais.

### Stack de testes

| Finalidade | Ferramenta |
|---|---|
| Test runner | Vitest |
| Testes de componente | React Testing Library |
| Desenvolvimento isolado | Storybook 8 |
| Interaction Tests | Storybook Interaction Tests (`@storybook/test`) |

### CDD para componentes e seções

1. **Story primeiro** — criar `<Component>.stories.tsx` com todos os estados relevantes antes de integrar.
2. **Interaction Tests na Story** — simular hover, clique, foco e outros comportamentos interativos.
3. **Integrar na página** — somente após o componente estar validado no Storybook.

### TDD para hooks e lógica pura

Hooks customizados e funções utilitárias seguem TDD estrito: escrever o teste antes da implementação.

Convenção de nome de testes: `it('deve [comportamento] quando [condição]')`.

### Fluxo para um novo componente/seção

```
1. Story com todos os estados visuais
2. Interaction Tests na Story
3. Testes RTL (.spec.tsx)
4. Integrar no App.tsx
```

---

## TypeScript

- Todo arquivo deve ser `.tsx` (componentes) ou `.ts` (lógica pura).
- `strict: true` no `tsconfig.json`. Nunca desabilitar.
- Usar `interface` para props de componentes e `type` para uniões/interseções.

---

## Versionamento semântico

**Ao iniciar qualquer nova implementação**, atualizar `"version"` em `package.json`:

| Tipo | Campo |
|------|-------|
| Reestruturação significativa da página | MAJOR |
| Nova seção ou funcionalidade visível | MINOR |
| Correção visual ou de bug | PATCH |
