import{o,k as l}from"./index-DuvGAO7y.js";import{g as a,E as c}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";const d=[{name:"Ana Costa",role:"CEO",company:"Startup Fintech",quote:"A HoneyTech entregou nosso MVP em tempo recorde. A qualidade do código surpreendeu — limpo, bem documentado e fácil de evoluir. Recomendo sem hesitar.",initials:"AC"},{name:"Rafael Mendes",role:"Product Manager",company:"E-commerce Varejo",quote:"Comunicação impecável do início ao fim. Eles entenderam nossa dor, propuseram soluções criativas e entregaram além do esperado. Parceria que vale a pena.",initials:"RM"},{name:"Juliana Ferreira",role:"Fundadora",company:"Plataforma EdTech",quote:"Precisávamos de uma solução robusta com prazo apertado. A equipe da HoneyTech foi precisa, proativa e manteve a gente atualizada em cada etapa.",initials:"JF"}],m=[{value:"12+",label:"Projetos entregues"},{value:"5",label:"Clientes ativos"},{value:"100%",label:"No prazo"},{value:"3+",label:"Anos de experiência"}],p=c`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=a.section`
  padding: ${({theme:e})=>e.spacing.xxl} ${({theme:e})=>e.spacing.lg};
  background-color: ${({theme:e})=>e.colors.bgSurface};
`,x=a.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xxl};
`,u=a.div`
  text-align: center;
  animation: ${p} 0.5s ease both;
`,f=a.h2`
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
`,$=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,b=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background-color: ${({theme:e})=>e.colors.bgBody};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,y=a.span`
  font-size: ${({theme:e})=>e.fontSizes.hero};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary};
  line-height: 1;
`,S=a.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
`,v=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,j=a.article`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.xl};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background-color: ${({theme:e})=>e.colors.bgBody};
  border: 1px solid ${({theme:e})=>e.colors.border};
  transition: border-color ${({theme:e})=>e.transition},
    box-shadow ${({theme:e})=>e.transition};

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: ${({theme:e})=>e.shadows.md};
  }
`,z=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.primary};
`,A=a.blockquote`
  margin: 0;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  flex: 1;

  &::before {
    content: '"';
    font-size: 2rem;
    color: ${({theme:e})=>e.colors.primary};
    line-height: 0;
    vertical-align: -0.4em;
    margin-right: 2px;
  }

  &::after {
    content: '"';
    font-size: 2rem;
    color: ${({theme:e})=>e.colors.primary};
    line-height: 0;
    vertical-align: -0.4em;
    margin-left: 2px;
  }
`,w=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,T=a.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffa500, #dbac22);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 700;
  color: #121212;
  flex-shrink: 0;
`,q=a.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,k=a.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
`,P=a.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textSecondary};
`;function M(){return o.jsx(g,{id:"prova-social",children:o.jsxs(x,{children:[o.jsxs(u,{children:[o.jsxs(f,{children:["O que nossos ",o.jsx("span",{children:"clientes"})," dizem"]}),o.jsx(h,{children:"Resultados reais de quem confiou na HoneyTech"})]}),o.jsx($,{children:m.map(({value:e,label:t})=>o.jsxs(b,{"data-testid":"stat-item",children:[o.jsx(y,{"data-testid":"stat-value",children:e}),o.jsx(S,{"data-testid":"stat-label",children:t})]},t))}),o.jsx(v,{children:d.map(({name:e,role:t,company:i,quote:r,initials:s})=>o.jsxs(j,{"data-testid":"testimonial-card",children:[o.jsx(z,{"aria-label":"5 estrelas",children:Array.from({length:5}).map((R,n)=>o.jsx(l,{size:14,fill:"currentColor"},n))}),o.jsx(A,{"data-testid":"testimonial-quote",children:r}),o.jsxs(w,{children:[o.jsx(T,{"aria-hidden":"true",children:s}),o.jsxs(q,{children:[o.jsx(k,{"data-testid":"testimonial-name",children:e}),o.jsxs(P,{"data-testid":"testimonial-role",children:[t," · ",i]})]})]})]},e))})]})})}export{M as default};
