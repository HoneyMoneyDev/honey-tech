# Guia de Identidade Visual — HoneyTech

Referência de design para uso consistente em todos os projetos da HoneyTech.

---

## Cores

### Paleta principal

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#ffa500` | CTAs, destaques, links ativos, bordas de foco |
| `primaryDark` | `#e6940a` | Hover de botões e elementos primários |
| `logo` | `#dbac22` | Exclusivo para a logo (bee) |

### Backgrounds

| Token | Hex | Uso |
|-------|-----|-----|
| `bgBody` | `#121212` | Fundo da página |
| `bgSurface` | `#1e1e1e` | Cards, inputs, modais, sidebar |
| `bgSidebar` | `#1a1a1a` | Sidebar/nav lateral |

### Texto

| Token | Hex | Uso |
|-------|-----|-----|
| `textPrimary` | `#ffffff` | Títulos, labels, texto principal |
| `textSecondary` | `#b3b3b3` | Descrições, placeholders, texto de apoio |
| `textDisabled` | `#666666` | Elementos desabilitados |

### Bordas e divisores

| Token | Hex | Uso |
|-------|-----|-----|
| `border` | `#333333` | Bordas de cards, inputs, separadores |

### Semânticas

| Token | Hex | Uso |
|-------|-----|-----|
| `success` | `#4caf50` | Confirmações, status positivo |
| `error` | `#f44336` | Erros, validações, alertas críticos |
| `warning` | `#ff9800` | Avisos, atenção |

### Opacidades de uso frequente

```
Hover background primário:  rgba(255, 165, 0, 0.1)
Foco (box-shadow):          rgba(255, 165, 0, 0.1) — spread 3px
Glow da logo:               rgba(219, 172, 34, 0.35)
Overlay de modal/sidebar:   rgba(0, 0, 0, 0.5)
Erro de fundo (input):      rgba(244, 67, 54, 0.05)
Sucesso de fundo:           rgba(76, 175, 80, 0.1)
```

---

## Tipografia

### Font stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

> Fonte do sistema — sem dependência de Google Fonts. Renderiza a fonte nativa de cada plataforma (San Francisco no macOS/iOS, Roboto no Android, Segoe UI no Windows).

### Escala de tamanhos

| Token | Valor | Uso |
|-------|-------|-----|
| `xs` | `12px` | Mensagens de erro, badges |
| `sm` | `14px` | Corpo de texto, labels, botões |
| `md` | `16px` | Texto secundário |
| `lg` | `18px` | Subtítulos, taglines |
| `xl` | `24px` | Logo/nome da marca |
| `xxl` | `28px` | Títulos de seção |
| `hero` | `48px` | Título principal da landing page |

### Pesos

| Peso | Uso |
|------|-----|
| `400` | Corpo de texto, descrições |
| `500` | Labels, subtítulos, destaques suaves |
| `600` | Botões |
| `700` | Títulos, nome da marca |

### Line height

| Valor | Uso |
|-------|-----|
| `1.1` | Títulos grandes (hero) |
| `1.6` | Corpo de texto corrido |

---

## Espaçamento

Escala baseada em múltiplos de 4px.

| Token | Valor | Uso típico |
|-------|-------|-----------|
| `xs` | `4px` | Espaços internos mínimos |
| `sm` | `8px` | Gap entre ícone e texto, margin de label |
| `md` | `16px` | Padding de inputs e botões, gap interno |
| `lg` | `24px` | Padding de cards, gap entre seções menores |
| `xl` | `32px` | Margin entre cards, padding horizontal de botões |
| `xxl` | `48px` | Espaçamento entre blocos de conteúdo |

---

## Border radius

| Token | Valor | Uso |
|-------|-------|-----|
| `sm` | `4px` | Badges, tags |
| `md` | `8px` | Inputs, botões |
| `lg` | `12px` | Cards, modais |
| `full` | `50%` | Avatares, spinners circulares |

---

## Sombras

```css
sm: 0 2px 4px rgba(0, 0, 0, 0.3)   /* Elevação leve */
md: 0 4px 8px rgba(0, 0, 0, 0.3)   /* Cards */
lg: 0 8px 16px rgba(0, 0, 0, 0.3)  /* Modais, dropdowns */

/* Glow da logo */
drop-shadow(0 4px 24px rgba(219, 172, 34, 0.35))

/* Foco de input */
0 0 0 3px rgba(255, 165, 0, 0.1)
```

---

## Transições

```css
0.3s ease   /* Padrão para todos os elementos interativos */
1s linear infinite  /* Spinners e animações contínuas */
```

---

## Logo

### Bee (abelha)

- **Arquivo**: `src/assets/BeeLogo.tsx` (componente React inline)
- **Cor**: `#dbac22`
- **ViewBox**: `0 0 230 230`
- **Tamanho padrão na landing**: `120px`
- **Efeito**: `drop-shadow(0 4px 24px rgba(219, 172, 34, 0.35))`

> Sempre usar o componente `<BeeLogo />` — nunca o arquivo `.svg` como `<img>` para evitar problemas de path em subdiretórios e GitHub Pages.

```tsx
import BeeLogo from '@/assets/BeeLogo'

<BeeLogo size={120} />           // tamanho customizável
<BeeLogo size={32} color="#ffa500" />  // cor customizável
```

### Nome da marca

```tsx
Honey<span style={{ color: '#ffa500' }}>Tech</span>
```

- `Honey` — branco (`#ffffff`)
- `Tech` — laranja (`#ffa500`)
- Peso: `700`
- Letter-spacing: `-1px`

### Favicon

- **Arquivo**: `public/favicon.svg`
- **Tipo**: `image/svg+xml`
- Mesma logo bee, sem atributo `class`

---

## Ícones

### Biblioteca: react-icons

```bash
npm install react-icons
```

Subconjuntos usados no ecossistema HoneyTech:

| Prefixo | Conjunto | Uso |
|---------|----------|-----|
| `Fi` | Feather Icons | UI geral (menu, usuário, olho, seta) |
| `Bi` | BoxIcons | Dashboard, finanças, projetos |
| `Md` | Material Design | Formulários, status |

> Tamanho padrão de ícones: `20px`. Em botões com texto: `margin-right: 12px`.

---

## Acessibilidade

- Altura mínima de elementos interativos (botões, inputs): **44px**
- Foco visível: `box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.1)` no elemento, nunca `outline: none` sem substituto
- Contraste: texto secundário (`#b3b3b3`) sobre fundo body (`#121212`) passa WCAG AA

---

## Breakpoints

| Nome | Valor | Comportamento |
|------|-------|---------------|
| `mobile` | `< 768px` | Layout empilhado, sidebar oculta |
| `desktop` | `>= 768px` | Layout lado a lado, sidebar visível |

---

## Uso em novos projetos

### 1. Copiar o theme

```
src/styles/theme.ts       ← objeto de tema com todos os tokens
src/styles/GlobalStyle.ts ← reset global
src/styles/styled.d.ts    ← extensão do DefaultTheme para TypeScript
```

### 2. Envolver a aplicação com ThemeProvider

```tsx
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

<ThemeProvider theme={theme}>
  <GlobalStyle />
  <App />
</ThemeProvider>
```

### 3. Usar tokens nos componentes

```tsx
const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSurface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`
```
