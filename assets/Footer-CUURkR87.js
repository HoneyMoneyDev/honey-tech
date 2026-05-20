import{o as e,B as n,g as t,f as s,d as a,c}from"./index-DuvGAO7y.js";import{g as r}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";const l=r.footer`
  background-color: ${({theme:o})=>o.colors.bgSurface};
  border-top: 1px solid ${({theme:o})=>o.colors.border};
  padding: ${({theme:o})=>o.spacing.xl} ${({theme:o})=>o.spacing.lg};
`,d=r.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing.lg};
`,p=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing.lg};

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,x=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.sm};
`,m=r.span`
  font-size: ${({theme:o})=>o.fontSizes.xl};
  font-weight: 700;
  color: ${({theme:o})=>o.colors.textPrimary};

  em {
    font-style: normal;
    color: ${({theme:o})=>o.colors.primary};
  }
`,g=r.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing.sm};
  font-size: ${({theme:o})=>o.fontSizes.sm};
  color: ${({theme:o})=>o.colors.textSecondary};
  transition: color ${({theme:o})=>o.transition};

  &:hover {
    color: ${({theme:o})=>o.colors.primary};
  }
`,h=r.div`
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
`,b=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing.sm};

  @media (max-width: ${({theme:o})=>o.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,$=r.p`
  font-size: ${({theme:o})=>o.fontSizes.xs};
  color: ${({theme:o})=>o.colors.textSecondary};
  margin: 0;
`,y=r.a`
  font-size: ${({theme:o})=>o.fontSizes.xs};
  color: ${({theme:o})=>o.colors.textSecondary};
  transition: color ${({theme:o})=>o.transition};

  &:hover {
    color: ${({theme:o})=>o.colors.primary};
  }
`;function w(){const o=new Date().getFullYear();return e.jsx(l,{children:e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsxs(x,{"data-testid":"footer-brand",children:[e.jsx(n,{size:32}),e.jsxs(m,{children:["Honey",e.jsx("em",{children:"Tech"})]})]}),e.jsxs(g,{href:"mailto:contato@honeytech.com.br",children:[e.jsx(t,{size:16}),"contato@honeytech.com.br"]}),e.jsxs(h,{children:[e.jsx(i,{href:"https://linkedin.com/company/honeytech",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:e.jsx(s,{size:18})}),e.jsx(i,{href:"https://instagram.com/honeytech",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:e.jsx(a,{size:18})}),e.jsx(i,{href:"https://github.com/HoneyMoneyDev",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:e.jsx(c,{size:18})})]})]}),e.jsx(f,{}),e.jsxs(b,{children:[e.jsxs($,{"data-testid":"footer-copyright",children:["© ",o," HoneyTech. Todos os direitos reservados."]}),e.jsx(y,{href:"/politica-de-privacidade",children:"Política de Privacidade"})]})]})})}export{w as default};
