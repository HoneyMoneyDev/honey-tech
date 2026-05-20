import{l as o,a as l}from"./index-C5EaT6DC.js";import{r as d,g as a,f as m}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";const p=[{question:"Quanto tempo leva para desenvolver um projeto?",answer:"Depende do escopo, mas projetos de landing page ou site institucional ficam prontos em 2 a 4 semanas. Sistemas web completos ou aplicativos móveis levam de 6 a 16 semanas. Em todos os casos, alinhamos o prazo com você antes de começar e mantemos atualizações frequentes ao longo do projeto."},{question:"Qual é o investimento para contratar a HoneyTech?",answer:"O valor varia conforme complexidade, funcionalidades e prazo. Trabalhamos tanto com projetos fechados (preço fixo) quanto com alocação de horas. Entre em contato para receber um orçamento personalizado — sem compromisso. Prezamos pela transparência e não há cobranças surpresa."},{question:"Como funciona o processo de desenvolvimento?",answer:"Seguimos um processo ágil em 4 etapas: (1) Descoberta — entendemos sua dor e objetivos; (2) Planejamento — definimos escopo, tecnologias e cronograma; (3) Desenvolvimento — entregas incrementais com feedback contínuo; (4) Deploy e suporte — publicamos e acompanhamos o lançamento."},{question:"Quais tecnologias vocês utilizam?",answer:"Atuamos nas tecnologias mais presentes no mercado como C#, PHP, Java, Kotlin, JavaScript, incluindo frameworks como Nest.js, Next.js, React, React Native e Vue."},{question:"Vocês oferecem suporte após a entrega?",answer:"Sim. Incluímos um período de garantia de 30 dias de manutenção e ajustes de acordo com o escopo do projeto contratado sem custo. Também oferecemos planos de manutenção mensal."}],g=a.section`
  padding: ${({theme:e})=>e.spacing.xxl} ${({theme:e})=>e.spacing.lg};
  background-color: ${({theme:e})=>e.colors.bgBody};
`,u=a.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xxl};
`,f=a.div`
  text-align: center;
`,x=a.h2`
  font-size: ${({theme:e})=>e.fontSizes.xxl};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0 0 ${({theme:e})=>e.spacing.sm};
  line-height: 1.2;

  span {
    color: ${({theme:e})=>e.colors.primary};
  }
`,h=a.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;
`,$=a.dl`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,b=a.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.bgSurface};
  transition: border-color ${({theme:e})=>e.transition};

  &:focus-within {
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,v=a.dt`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg};
  cursor: pointer;
  user-select: none;
  list-style: none;

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: ${({theme:e})=>e.spacing.md};
    font-size: ${({theme:e})=>e.fontSizes.sm};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.textPrimary};
    line-height: 1.5;
    text-align: left;
    cursor: pointer;

    &:focus-visible {
      outline: none;
    }
  }

  svg {
    flex-shrink: 0;
    color: ${({theme:e})=>e.colors.primary};
    transition: transform ${({theme:e})=>e.transition};
    ${({$open:e})=>e&&m`
        transform: rotate(180deg);
      `}
  }
`,j=a.dd`
  margin: 0;
  max-height: ${({$open:e})=>e?"400px":"0"};
  overflow: hidden;
  transition: max-height 0.35s ease;
  visibility: ${({$open:e})=>e?"visible":"hidden"};

  p {
    padding: 0 ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.lg};
    margin: 0;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    color: ${({theme:e})=>e.colors.textSecondary};
    line-height: 1.8;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
    padding-top: ${({theme:e})=>e.spacing.md};
  }
`;function q(){const[e,i]=d.useState(null);function c(s){i(r=>r===s?null:s)}return o.jsx(g,{id:"faq",children:o.jsxs(u,{children:[o.jsxs(f,{children:[o.jsxs(x,{children:["Perguntas ",o.jsx("span",{children:"frequentes"})]}),o.jsx(h,{children:"Tudo que você precisa saber antes de começar"})]}),o.jsx($,{children:p.map(({question:s,answer:r},n)=>{const t=e===n;return o.jsxs(b,{"data-testid":"faq-item",children:[o.jsx(v,{$open:t,children:o.jsxs("button",{"data-testid":"faq-trigger","aria-expanded":t,"aria-controls":`faq-answer-${n}`,onClick:()=>c(n),children:[s,o.jsx(l,{size:18,"aria-hidden":"true"})]})}),o.jsx(j,{id:`faq-answer-${n}`,$open:t,"data-testid":"faq-answer","aria-hidden":!t,children:o.jsx("p",{children:r})})]},s)})})]})})}export{q as default};
