import{m as e,B as s,f as t,e as n,a}from"./index-BBR6-XxU.js";import{g as r}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";const l=r.footer`
  background-color: ${({theme:o})=>o.colors.bgSurface};
  border-top: 1px solid ${({theme:o})=>o.colors.border};
  padding: ${({theme:o})=>o.spacing.xl} ${({theme:o})=>o.spacing.lg};
`,c=r.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing.lg};
`,d=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing.lg};

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,p=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.sm};
`,x=r.span`
  font-size: ${({theme:o})=>o.fontSizes.xl};
  font-weight: 700;
  color: ${({theme:o})=>o.colors.textPrimary};

  em {
    font-style: normal;
    color: ${({theme:o})=>o.colors.primary};
  }
`,m=r.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.sm};
  font-size: ${({theme:o})=>o.fontSizes.sm};
  color: ${({theme:o})=>o.colors.textSecondary};
  transition: color ${({theme:o})=>o.transition};

  &:hover {
    color: ${({theme:o})=>o.colors.primary};
  }
`,g=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.md};
`,i=r.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:o})=>o.borderRadius.md};
  border: 1px solid ${({theme:o})=>o.colors.border};
  color: ${({theme:o})=>o.colors.textSecondary};
  transition: color ${({theme:o})=>o.transition},
              border-color ${({theme:o})=>o.transition},
              background-color ${({theme:o})=>o.transition};

  &:hover {
    color: ${({theme:o})=>o.colors.primary};
    border-color: ${({theme:o})=>o.colors.primary};
    background-color: rgba(255, 165, 0, 0.1);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.4);
  }
`,f=r.hr`
  border: none;
  border-top: 1px solid ${({theme:o})=>o.colors.border};
  margin: 0;
`,h=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing.sm};

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,b=r.p`
  font-size: ${({theme:o})=>o.fontSizes.xs};
  color: ${({theme:o})=>o.colors.textSecondary};
  margin: 0;
`,$=r.a`
  font-size: ${({theme:o})=>o.fontSizes.xs};
  color: ${({theme:o})=>o.colors.textSecondary};
  transition: color ${({theme:o})=>o.transition};

  &:hover {
    color: ${({theme:o})=>o.colors.primary};
  }
`;function v(){const o=new Date().getFullYear();return e.jsx(l,{children:e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsxs(p,{"data-testid":"footer-brand",children:[e.jsx(s,{size:32}),e.jsxs(x,{children:["Honey",e.jsx("em",{children:"Tech"})]})]}),e.jsxs(m,{href:"mailto:contato@honeytech.com.br",children:[e.jsx(t,{size:16}),"contato@honeytech.com.br"]}),e.jsxs(g,{children:[e.jsx(i,{href:"https://www.linkedin.com/in/gustavofraposo/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:e.jsx(n,{size:18})}),e.jsx(i,{href:"https://wa.me/5541991892409?text=Ol%C3%A1%21+Vim+pelo+site+da+HoneyTech+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os+e+solicitar+um+or%C3%A7amento.",target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp",children:e.jsx(a,{size:18})})]})]}),e.jsx(f,{}),e.jsxs(h,{children:[e.jsxs(b,{"data-testid":"footer-copyright",children:["© ",o," HoneyTech. Todos os direitos reservados."]}),e.jsx($,{href:"/politica-de-privacidade",children:"Política de Privacidade"})]})]})})}export{v as default};
