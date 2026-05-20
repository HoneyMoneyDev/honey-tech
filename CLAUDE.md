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

---

## Identidade Visual

Guia completo de referência em `docs/guia-identidade-visual.md`. Resumo abaixo.

### Cores

#### Paleta principal

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#ffa500` | CTAs, destaques, links ativos, bordas de foco |
| `primaryDark` | `#e6940a` | Hover de botões e elementos primários |
| `logo` | `#dbac22` | Exclusivo para a logo (bee) |

#### Backgrounds

| Token | Hex | Uso |
|-------|-----|-----|
| `bgBody` | `#121212` | Fundo da página |
| `bgSurface` | `#1e1e1e` | Cards, inputs, modais, sidebar |
| `bgSidebar` | `#1a1a1a` | Sidebar/nav lateral |

#### Texto

| Token | Hex | Uso |
|-------|-----|-----|
| `textPrimary` | `#ffffff` | Títulos, labels, texto principal |
| `textSecondary` | `#b3b3b3` | Descrições, placeholders, texto de apoio |
| `textDisabled` | `#666666` | Elementos desabilitados |

#### Bordas

| Token | Hex | Uso |
|-------|-----|-----|
| `border` | `#333333` | Bordas de cards, inputs, separadores |

#### Semânticas

| Token | Hex | Uso |
|-------|-----|-----|
| `success` | `#4caf50` | Confirmações, status positivo |
| `error` | `#f44336` | Erros, validações, alertas críticos |
| `warning` | `#ff9800` | Avisos, atenção |

#### Opacidades frequentes

```
Hover background primário:  rgba(255, 165, 0, 0.1)
Foco (box-shadow):          rgba(255, 165, 0, 0.1) — spread 3px
Glow da logo:               rgba(219, 172, 34, 0.35)
Overlay de modal/sidebar:   rgba(0, 0, 0, 0.5)
Erro de fundo (input):      rgba(244, 67, 54, 0.05)
Sucesso de fundo:           rgba(76, 175, 80, 0.1)
```

---

### Tipografia

#### Font stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

> Fonte do sistema — sem dependência de Google Fonts.

#### Escala de tamanhos

| Token | Valor | Uso |
|-------|-------|-----|
| `xs` | `12px` | Mensagens de erro, badges |
| `sm` | `14px` | Corpo de texto, labels, botões |
| `md` | `16px` | Texto secundário |
| `lg` | `18px` | Subtítulos, taglines |
| `xl` | `24px` | Logo/nome da marca |
| `xxl` | `28px` | Títulos de seção |
| `hero` | `48px` | Título principal da landing page |

#### Pesos

| Peso | Uso |
|------|-----|
| `400` | Corpo de texto, descrições |
| `500` | Labels, subtítulos |
| `600` | Botões |
| `700` | Títulos, nome da marca |

---

### Espaçamento

| Token | Valor | Uso típico |
|-------|-------|-----------|
| `xs` | `4px` | Espaços internos mínimos |
| `sm` | `8px` | Gap entre ícone e texto, margin de label |
| `md` | `16px` | Padding de inputs e botões |
| `lg` | `24px` | Padding de cards, gap entre seções |
| `xl` | `32px` | Margin entre cards |
| `xxl` | `48px` | Espaçamento entre blocos de conteúdo |

---

### Border radius e sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `sm` | `4px` | Badges, tags |
| `md` | `8px` | Inputs, botões |
| `lg` | `12px` | Cards, modais |
| `full` | `50%` | Avatares, spinners |

```css
sm: 0 2px 4px rgba(0, 0, 0, 0.3)
md: 0 4px 8px rgba(0, 0, 0, 0.3)
lg: 0 8px 16px rgba(0, 0, 0, 0.3)
```

Transição padrão: `0.3s ease` em todos os elementos interativos.

---

### Logo

- **Componente**: `src/assets/BeeLogo.tsx` — sempre usar inline, nunca como `<img src>`.
- **Cor**: `#dbac22`
- **Tamanho padrão**: `120px`
- **Efeito**: `drop-shadow(0 4px 24px rgba(219, 172, 34, 0.35))`

```tsx
import BeeLogo from '@/assets/BeeLogo'
<BeeLogo size={120} />
<BeeLogo size={32} color="#ffa500" />
```

#### Nome da marca

```tsx
Honey<span style={{ color: '#ffa500' }}>Tech</span>
```

- `Honey` — `#ffffff`, `Tech` — `#ffa500`, peso `700`, letter-spacing `-1px`.

---

### Ícones

Biblioteca: `react-icons`

| Prefixo | Conjunto | Uso |
|---------|----------|-----|
| `Fi` | Feather Icons | UI geral (menu, usuário, olho, seta) |
| `Bi` | BoxIcons | Dashboard, finanças, projetos |
| `Md` | Material Design | Formulários, status |

Tamanho padrão: `20px`. Em botões com texto: `margin-right: 12px`.

---

### Acessibilidade

- Altura mínima de elementos interativos: **44px**
- Foco visível: `box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.1)` — nunca `outline: none` sem substituto.
- Contraste: `#b3b3b3` sobre `#121212` passa WCAG AA.

---

### Breakpoints

| Nome | Valor | Comportamento |
|------|-------|---------------|
| `mobile` | `< 768px` | Layout empilhado |
| `desktop` | `>= 768px` | Layout lado a lado |
