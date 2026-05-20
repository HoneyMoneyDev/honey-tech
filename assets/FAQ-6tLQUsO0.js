import{o as e,a as d}from"./index-DuvGAO7y.js";import{r as l,g as a,f as m}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";const p=[{question:"Quanto tempo leva para desenvolver um projeto?",answer:"Depende do escopo, mas projetos de landing page ou site institucional ficam prontos em 2 a 4 semanas. Sistemas web completos ou aplicativos móveis levam de 6 a 16 semanas. Em todos os casos, alinhamos o prazo com você antes de começar e mantemos atualizações frequentes ao longo do projeto."},{question:"Qual é o investimento para contratar a HoneyTech?",answer:"O valor varia conforme complexidade, funcionalidades e prazo. Trabalhamos tanto com projetos fechados (preço fixo) quanto com alocação de horas. Entre em contato para receber um orçamento personalizado — sem compromisso. Prezamos pela transparência e não há cobranças surpresa."},{question:"Como funciona o processo de desenvolvimento?",answer:"Seguimos um processo ágil em 4 etapas: (1) Descoberta — entendemos sua dor e objetivos; (2) Planejamento — definimos escopo, tecnologias e cronograma; (3) Desenvolvimento — entregas incrementais com feedback contínuo; (4) Deploy e suporte — publicamos e acompanhamos o lançamento."},{question:"Quais tecnologias vocês utilizam?",answer:"No frontend usamos React, TypeScript e Next.js. No backend, Node.js, Python e PostgreSQL. Para mobile, React Native. Escolhemos a stack mais adequada para cada projeto — sem dogmatismo tecnológico. Também trabalhamos com integrações de APIs, automações e plataformas como Supabase e Firebase."},{question:"Vocês oferecem suporte após a entrega?",answer:"Sim. Incluímos um período de garantia de 30 dias após o deploy para correção de bugs sem custo adicional. Para suporte contínuo, manutenção e evolução do produto, oferecemos planos mensais conforme a necessidade do cliente."},{question:"Posso acompanhar o andamento do projeto?",answer:"Com certeza. Você terá acesso a um board de tarefas (Notion ou Linear) e reuniões de alinhamento semanais. Todo o código fica em repositório privado no GitHub com acesso seu. Acreditamos que transparência e comunicação são tão importantes quanto a qualidade técnica."}],u=a.section`
  padding: ${({theme:o})=>o.spacing.xxl} ${({theme:o})=>o.spacing.lg};
  background-color: ${({theme:o})=>o.colors.bgBody};
`,g=a.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing.xxl};
`,f=a.div`
  text-align: center;
`,h=a.h2`
  font-size: ${({theme:o})=>o.fontSizes.xxl};
  font-weight: 700;
  color: ${({theme:o})=>o.colors.textPrimary};
  margin: 0 0 ${({theme:o})=>o.spacing.sm};
  line-height: 1.2;

  span {
    color: ${({theme:o})=>o.colors.primary};
  }
`,x=a.p`
  font-size: ${({theme:o})=>o.fontSizes.md};
  color: ${({theme:o})=>o.colors.textSecondary};
  margin: 0;
`,b=a.dl`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing.sm};
`,$=a.div`
  border: 1px solid ${({theme:o})=>o.colors.border};
  border-radius: ${({theme:o})=>o.borderRadius.lg};
  overflow: hidden;
  background-color: ${({theme:o})=>o.colors.bgSurface};
  transition: border-color ${({theme:o})=>o.transition};

  &:focus-within {
    border-color: ${({theme:o})=>o.colors.primary};
  }
`,v=a.dt`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:o})=>o.spacing.md};
  padding: ${({theme:o})=>o.spacing.lg};
  cursor: pointer;
  user-select: none;
  list-style: none;

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: ${({theme:o})=>o.spacing.md};
    font-size: ${({theme:o})=>o.fontSizes.sm};
    font-weight: 600;
    color: ${({theme:o})=>o.colors.textPrimary};
    line-height: 1.5;
    text-align: left;
    cursor: pointer;

    &:focus-visible {
      outline: none;
    }
  }

  svg {
    flex-shrink: 0;
    color: ${({theme:o})=>o.colors.primary};
    transition: transform ${({theme:o})=>o.transition};
    ${({$open:o})=>o&&m`
        transform: rotate(180deg);
      `}
  }
`,j=a.dd`
  margin: 0;
  max-height: ${({$open:o})=>o?"400px":"0"};
  overflow: hidden;
  transition: max-height 0.35s ease;
  visibility: ${({$open:o})=>o?"visible":"hidden"};

  p {
    padding: 0 ${({theme:o})=>o.spacing.lg} ${({theme:o})=>o.spacing.lg};
    margin: 0;
    font-size: ${({theme:o})=>o.fontSizes.sm};
    color: ${({theme:o})=>o.colors.textSecondary};
    line-height: 1.8;
    border-top: 1px solid ${({theme:o})=>o.colors.border};
    padding-top: ${({theme:o})=>o.spacing.md};
  }
`;function z(){const[o,i]=l.useState(null);function c(s){i(r=>r===s?null:s)}return e.jsx(u,{id:"faq",children:e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsxs(h,{children:["Perguntas ",e.jsx("span",{children:"frequentes"})]}),e.jsx(x,{children:"Tudo que você precisa saber antes de começar"})]}),e.jsx(b,{children:p.map(({question:s,answer:r},n)=>{const t=o===n;return e.jsxs($,{"data-testid":"faq-item",children:[e.jsx(v,{$open:t,children:e.jsxs("button",{"data-testid":"faq-trigger","aria-expanded":t,"aria-controls":`faq-answer-${n}`,onClick:()=>c(n),children:[s,e.jsx(d,{size:18,"aria-hidden":"true"})]})}),e.jsx(j,{id:`faq-answer-${n}`,$open:t,"data-testid":"faq-answer","aria-hidden":!t,children:e.jsx("p",{children:r})})]},s)})})]})})}export{z as default};
