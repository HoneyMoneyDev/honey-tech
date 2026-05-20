import{n as o,h as s,j as n,e as a,k as c}from"./index-DF7PH2LL.js";import{g as e}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";const d=[{icon:s,title:"Desenvolvimento Web",description:"Sites institucionais, sistemas e aplicações web modernas, rápidas e acessíveis."},{icon:n,title:"Desenvolvimento Mobile",description:"Aplicativos iOS e Android nativos ou multiplataforma com foco em experiência do usuário."},{icon:a,title:"Design UI/UX",description:"Interfaces intuitivas e visualmente consistentes que convertem visitantes em clientes."},{icon:c,title:"Consultoria Digital",description:"Arquitetura de software, estratégia de produto e apoio técnico para seu negócio crescer."}],l=e.section`
  padding: ${({theme:i})=>i.spacing.xxl} ${({theme:i})=>i.spacing.lg};
  background-color: ${({theme:i})=>i.colors.bgBody};
`,p=e.h2`
  font-size: ${({theme:i})=>i.fontSizes.xxl};
  font-weight: 700;
  color: ${({theme:i})=>i.colors.textPrimary};
  text-align: center;
  margin: 0 0 ${({theme:i})=>i.spacing.xs};

  span {
    color: ${({theme:i})=>i.colors.primary};
  }
`,m=e.p`
  font-size: ${({theme:i})=>i.fontSizes.md};
  color: ${({theme:i})=>i.colors.textSecondary};
  text-align: center;
  margin: 0 0 ${({theme:i})=>i.spacing.xxl};
`,g=e.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:i})=>i.spacing.lg};
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${({theme:i})=>i.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${({theme:i})=>i.breakpoints.mobile}) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,x=e.div`
  background-color: ${({theme:i})=>i.colors.bgSurface};
  border: 1px solid ${({theme:i})=>i.colors.border};
  border-radius: ${({theme:i})=>i.borderRadius.lg};
  padding: ${({theme:i})=>i.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({theme:i})=>i.spacing.md};
  transition: transform ${({theme:i})=>i.transition},
              box-shadow ${({theme:i})=>i.transition},
              border-color ${({theme:i})=>i.transition};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({theme:i})=>i.shadows.lg};
    border-color: ${({theme:i})=>i.colors.primary};
  }
`,u=e.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 165, 0, 0.1);
  border-radius: ${({theme:i})=>i.borderRadius.md};
  color: ${({theme:i})=>i.colors.primary};
  flex-shrink: 0;
`,h=e.h3`
  font-size: ${({theme:i})=>i.fontSizes.md};
  font-weight: 600;
  color: ${({theme:i})=>i.colors.textPrimary};
  margin: 0;
`,f=e.p`
  font-size: ${({theme:i})=>i.fontSizes.sm};
  color: ${({theme:i})=>i.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;function j(){return o.jsxs(l,{id:"servicos",children:[o.jsxs(p,{children:["Nossos ",o.jsx("span",{children:"Serviços"})]}),o.jsx(m,{children:"Soluções digitais do início ao fim, com tecnologia e atenção aos detalhes."}),o.jsx(g,{children:d.map(({icon:i,title:t,description:r})=>o.jsxs(x,{"data-testid":"service-card",children:[o.jsx(u,{"data-testid":"service-icon","aria-hidden":"true",children:o.jsx(i,{size:24})}),o.jsx(h,{"data-testid":"service-title",children:t}),o.jsx(f,{"data-testid":"service-description",children:r})]},t))})]})}export{j as default};
