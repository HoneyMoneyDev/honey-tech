# Roadmap — Landing Page HoneyTech

Baseado em análise de fontes especializadas (Unbounce, HubSpot, Leadpages, Wix, Wikipedia).

---

## O que torna uma landing page efetiva

Uma landing page efetiva tem **um único objetivo de conversão**, elimina distrações e guia o visitante por uma sequência lógica:

```
Problema → Solução → Confiança → Ação
```

Fatores críticos de conversão:
- CTA visível sem scroll (above the fold)
- Proposta de valor clara em menos de 5 segundos
- Prova social autêntica (depoimentos, números, logos)
- Velocidade de carregamento < 3 segundos
- Design mobile-first (55%+ do tráfego é mobile)
- Formulário com o mínimo de campos possível
- Sem navegação principal (remove distrações)

---

## Estrutura da página

A ordem abaixo é a sequência de conversão recomendada pelas fontes pesquisadas:

```
1. Hero          → Headline + proposta de valor + CTA primário
2. Problema      → Dor que o visitante sente
3. Solução       → Como a HoneyTech resolve
4. Serviços      → O que oferecemos (cards)
5. Prova social  → Depoimentos, clientes, números
6. CTA final     → Reforço da chamada à ação
7. FAQ           → Responde objeções
8. Footer        → Contato, links legais, redes sociais
```

---

## Roadmap

### FASE 1 — Fundação (MVP conversível)

> Objetivo: página que já converte. Sem essa fase, nada mais importa.

---

#### US-002 — Seção Hero

**Como** visitante que chega à página,
**quero** entender em menos de 5 segundos o que a HoneyTech faz e por que me importa,
**para que** eu decida se vale continuar lendo.

**Critérios de aceite:**
- [x] Headline principal impactante (máx. 10 palavras)
- [x] Subheadline explicando a proposta de valor
- [x] Logo bee visível
- [x] CTA primário acima da dobra ("Solicitar orçamento")
- [x] Layout responsivo (mobile e desktop)
- [x] Animação de entrada suave (fadeIn)

---

#### US-003 — Seção Serviços

**Como** visitante interessado,
**quero** entender quais serviços a HoneyTech oferece,
**para que** eu saiba se a empresa resolve o meu problema.

**Critérios de aceite:**
- [x] Cards com ícone, título e descrição curta para cada serviço
- [x] Mínimo 3 serviços apresentados (Web, Mobile, Design, Consultoria)
- [x] Layout em grid responsivo (1 coluna mobile, 2 tablet, 4 desktop)
- [x] Hover com elevação visual nos cards

---

#### US-004 — CTA de Contato

**Como** visitante convencido,
**quero** um canal simples para entrar em contato,
**para que** eu possa iniciar uma conversa com a HoneyTech sem fricção.

**Critérios de aceite:**
- [x] Formulário com campos: Nome, E-mail, Mensagem (apenas esses três)
- [x] CTA com linguagem de ação clara ("Solicitar orçamento")
- [x] Feedback visual ao enviar (mensagem de sucesso com ícone)
- [x] Validação em tempo real com mensagens de erro acessíveis

---

#### US-005 — Footer

**Como** visitante que chegou ao final da página,
**quero** encontrar informações de contato e links legais,
**para que** eu confie na seriedade da empresa.

**Critérios de aceite:**
- [x] Logo + nome da marca
- [x] E-mail de contato com link mailto
- [x] Links para redes sociais (LinkedIn, Instagram, GitHub)
- [x] Link para Política de Privacidade
- [x] Copyright com ano atual dinâmico

---

### FASE 2 — Credibilidade

> Objetivo: construir confiança. Prova social é o principal fator após a proposta de valor.

---

#### US-006 — Seção Sobre

**Como** visitante que quer saber com quem está falando,
**quero** entender quem é a HoneyTech e qual é sua história,
**para que** eu me sinta seguro em contratar.

**Critérios de aceite:**
- [x] Texto curto sobre a missão e valores da empresa
- [x] Ilustração visual com logo animada (float) e anéis decorativos
- [x] 4 diferenciais em lista com ícone e texto

---

#### US-007 — Seção Prova Social

**Como** visitante em fase de decisão,
**quero** ver evidências de que a HoneyTech já entregou resultados reais,
**para que** eu confie antes de entrar em contato.

**Critérios de aceite:**
- [x] Mínimo 2 depoimentos com nome, foto e cargo/empresa do cliente
- [x] OU números de impacto (ex: "12 projetos entregues", "5 clientes ativos")
- [x] OU logos de clientes/parceiros
- [x] Depoimentos com aspas e destaque visual

---

#### US-008 — Seção FAQ

**Como** visitante com dúvidas,
**quero** encontrar respostas às perguntas mais comuns,
**para que** eu não precise sair da página para buscar informação.

**Critérios de aceite:**
- [x] Mínimo 4 perguntas e respostas relevantes
- [x] Componente accordion (expande/colapsa)
- [x] Perguntas cobrindo: prazo, preço, processo, tecnologias
- [x] Animação suave de abertura/fechamento

---

### FASE 3 — Conversão avançada

> Objetivo: otimizar a taxa de conversão com elementos de urgência e personalização.

---

#### US-009 — Seção Portfólio / Cases

**Como** visitante que quer ver o trabalho real,
**quero** ver projetos que a HoneyTech já desenvolveu,
**para que** eu avalie a qualidade antes de decidir.

**Critérios de aceite:**
- [ ] Cards de projeto com: imagem/screenshot, nome, tecnologias usadas, link
- [ ] Mínimo 2 projetos exibidos
- [ ] Filtro por categoria (opcional)
- [ ] Link para repositório GitHub ou demo live

---

#### US-010 — Navegação / Header fixo

**Como** visitante que está scrollando a página,
**quero** um header fixo com links de âncora para as seções,
**para que** eu possa navegar rapidamente sem voltar ao topo.

**Critérios de aceite:**
- [x] Header fixo no topo com `position: sticky`
- [x] Logo clicável (volta ao topo)
- [x] Links âncora para: Serviços, Sobre, Depoimentos, FAQ, Contato
- [x] Menu hamburger no mobile
- [x] Background com leve blur ao scrollar

---

#### US-011 — Otimização de performance

**Como** visitante acessando pelo celular em rede móvel,
**quero** que a página carregue em menos de 3 segundos,
**para que** eu não abandone antes de ver o conteúdo.

**Critérios de aceite:**
- [ ] Lighthouse Performance Score ≥ 90
- [x] Imagens em formato WebP com lazy loading (seções lazy com React.lazy + Suspense)
- [x] Fonte do sistema (sem Google Fonts) — já implementado
- [x] Bundle JS < 200kb gzip (maior chunk: vendor 43 kB gzip)
- [ ] Core Web Vitals no verde (LCP, FID, CLS)

---

#### US-012 — SEO básico

**Como** pessoa buscando "desenvolvimento de software" ou "criação de sites",
**quero** encontrar a HoneyTech no Google,
**para que** eu descubra a empresa organicamente.

**Critérios de aceite:**
- [x] Meta title e description configurados
- [x] Open Graph tags (preview no WhatsApp/LinkedIn)
- [x] Tag `lang="pt-BR"` no HTML
- [x] Heading hierarchy correta (um único H1, H2 por seção)
- [x] `robots.txt` e `sitemap.xml`
- [x] URL canônica configurada

---

## Prioridade de implementação

| # | User Story | Fase | Impacto | Esforço |
|---|-----------|------|---------|---------|
| US-002 | Hero | 1 | Alto | Médio |
| US-003 | Serviços | 1 | Alto | Médio |
| US-004 | CTA / Contato | 1 | Alto | Baixo |
| US-005 | Footer | 1 | Médio | Baixo |
| US-006 | Sobre | 2 | Médio | Baixo |
| US-007 | Prova Social | 2 | Alto | Médio |
| US-008 | FAQ | 2 | Médio | Baixo |
| US-009 | Portfólio | 3 | Alto | Alto |
| US-010 | Header fixo | 3 | Médio | Médio |
| US-011 | Performance | 3 | Alto | Alto |
| US-012 | SEO | 3 | Alto | Médio |

---

## Checklist pré-lançamento

Antes de divulgar a URL publicamente:

- [ ] Fase 1 completa (Hero + Serviços + CTA + Footer)
- [ ] Responsivo testado em mobile (375px), tablet (768px) e desktop (1280px)
- [ ] Todos os links funcionando
- [ ] Formulário de contato testado com envio real
- [ ] Favicon aparecendo na aba
- [ ] Título da aba correto
- [ ] Deploy via `npm run deploy` sem erros
- [ ] URL do GitHub Pages acessível

## Checklist pré-domínio customizado

Antes de ativar o domínio da Hostgator:

- [ ] Fase 2 completa (Sobre + Prova Social + FAQ)
- [ ] DNS configurado (registros A + CNAME)
- [ ] `public/CNAME` criado com o domínio
- [ ] `base: '/'` no `vite.config.ts`
- [ ] HTTPS ativo no GitHub Pages
- [ ] SEO básico implementado (US-012)
