import{m as i,F as a,c as s,k as n,l as r,B as d}from"./index-Cy8zBjX7.js";import{g as o,E as l}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";const c=[{icon:a,text:"Entregas no prazo e com qualidade garantida"},{icon:s,text:"Código limpo, testado e fácil de manter"},{icon:n,text:"Comunicação próxima e foco total no cliente"},{icon:r,text:"Soluções rápidas e escaláveis para o seu negócio"}],p=l`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
`,x=o.section`
  padding: ${({theme:e})=>e.spacing.xxl} ${({theme:e})=>e.spacing.lg};
  background-color: ${({theme:e})=>e.colors.bgBody};
`,m=o.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xxl};
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,g=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
`,f=o.h2`
  font-size: ${({theme:e})=>e.fontSizes.xxl};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0;
  line-height: 1.2;

  span {
    color: ${({theme:e})=>e.colors.primary};
  }
`,u=o.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  margin: 0;
`,h=o.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,b=o.li`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,$=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: rgba(255, 165, 0, 0.1);
  color: ${({theme:e})=>e.colors.primary};
`,j=o.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.5;
`,y=o.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    order: -1;
  }
`,S=o.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, #1e1e1e, #121212);
  border: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 80px rgba(219, 172, 34, 0.12);

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 220px;
    height: 220px;
  }
`,v=o.div`
  animation: ${p} 4s ease-in-out infinite;
`,z=o.div`
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  border: 1px dashed ${({theme:e})=>e.colors.border};
  opacity: 0.4;
`,k=o.div`
  position: absolute;
  inset: 16px;
  border-radius: 50%;
  border: 1px solid rgba(255, 165, 0, 0.15);
`;function I(){return i.jsx(x,{id:"sobre",children:i.jsxs(m,{children:[i.jsxs(g,{children:[i.jsxs(f,{children:["Sobre a ",i.jsx("span",{children:"HoneyTech"})]}),i.jsx(u,{"data-testid":"about-mission",children:"Somos uma empresa de soluções digitais apaixonada por transformar ideias em produtos que fazem diferença. Trabalhamos com tecnologia de ponta, processos ágeis e atenção cuidadosa a cada detalhe — do primeiro protótipo ao deploy em produção."}),i.jsx(h,{children:c.map(({icon:e,text:t})=>i.jsxs(b,{"data-testid":"about-differential",children:[i.jsx($,{"data-testid":"differential-icon","aria-hidden":"true",children:i.jsx(e,{size:18})}),i.jsx(j,{"data-testid":"differential-text",children:t})]},t))})]}),i.jsx(y,{children:i.jsxs(S,{"data-testid":"about-visual",children:[i.jsx(z,{}),i.jsx(k,{}),i.jsx(v,{children:i.jsx(d,{size:140})})]})})]})})}export{I as default};
