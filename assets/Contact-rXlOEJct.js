import{n as r,F as j,i as y}from"./index-DF7PH2LL.js";import{r as g,g as s}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";function S(e){const o={};return e.name.trim()||(o.name="Nome é obrigatório."),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(o.email="E-mail inválido."):o.email="E-mail é obrigatório.",e.message.trim()||(o.message="Mensagem é obrigatória."),o}function v(){const[e,o]=g.useState({name:"",email:"",message:""}),[i,a]=g.useState({}),[t,l]=g.useState("idle");function b(c){const{name:n,value:d}=c.target;o(m=>({...m,[n]:d})),a(m=>({...m,[n]:void 0}))}async function $(c){c.preventDefault();const n=S(e);if(Object.keys(n).length>0){a(n);return}l("loading");try{await new Promise(d=>setTimeout(d,800)),l("success"),o({name:"",email:"",message:""})}catch{l("error")}}return{fields:e,errors:i,status:t,handleChange:b,handleSubmit:$}}const z=s.section`
  padding: ${({theme:e})=>e.spacing.xxl} ${({theme:e})=>e.spacing.lg};
  background-color: ${({theme:e})=>e.colors.bgSurface};
`,E=s.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
`,w=s.div`
  text-align: center;
`,F=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xxl};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0 0 ${({theme:e})=>e.spacing.xs};

  span {
    color: ${({theme:e})=>e.colors.primary};
  }
`,C=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;
`,k=s.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,u=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,p=s.label`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,f=`
  width: 100%;
  background-color: #121212;
  border: 1px solid;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;

  &::placeholder {
    color: #666666;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.15);
  }
`,h=s.input`
  ${f}
  padding: 16px;
  min-height: 44px;
  border-color: ${({$hasError:e,theme:o})=>e?o.colors.error:o.colors.border};

  &:focus {
    border-color: ${({$hasError:e,theme:o})=>e?o.colors.error:o.colors.primary};
  }
`,M=s.textarea`
  ${f}
  padding: 16px;
  min-height: 140px;
  resize: vertical;
  border-color: ${({$hasError:e,theme:o})=>e?o.colors.error:o.colors.border};

  &:focus {
    border-color: ${({$hasError:e,theme:o})=>e?o.colors.error:o.colors.primary};
  }
`,x=s.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.error};
`,T=s.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  height: 48px;
  padding: 0 ${({theme:e})=>e.spacing.xl};
  background-color: ${({theme:e})=>e.colors.primary};
  color: #000;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  cursor: pointer;
  transition: background-color ${({theme:e})=>e.transition};
  align-self: flex-start;

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.4);
  }
`,D=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg};
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid ${({theme:e})=>e.colors.success};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.success};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 500;
`;function H(){const{fields:e,errors:o,status:i,handleChange:a,handleSubmit:t}=v();return r.jsx(z,{id:"contato",children:r.jsxs(E,{children:[r.jsxs(w,{children:[r.jsxs(F,{children:["Fale com a ",r.jsx("span",{children:"HoneyTech"})]}),r.jsx(C,{children:"Conte seu projeto e entraremos em contato em até 24 horas."})]}),i==="success"?r.jsxs(D,{"data-testid":"contact-success",children:[r.jsx(j,{size:20}),"Mensagem enviada! Em breve entraremos em contato."]}):r.jsxs(k,{onSubmit:t,noValidate:!0,children:[r.jsxs(u,{children:[r.jsx(p,{htmlFor:"name",children:"Nome"}),r.jsx(h,{id:"name",name:"name",type:"text",placeholder:"Seu nome completo",value:e.name,onChange:a,$hasError:!!o.name,"aria-describedby":o.name?"name-error":void 0}),o.name&&r.jsx(x,{id:"name-error",role:"alert",children:o.name})]}),r.jsxs(u,{children:[r.jsx(p,{htmlFor:"email",children:"E-mail"}),r.jsx(h,{id:"email",name:"email",type:"email",placeholder:"seu@email.com",value:e.email,onChange:a,$hasError:!!o.email,"aria-describedby":o.email?"email-error":void 0}),o.email&&r.jsx(x,{id:"email-error",role:"alert",children:o.email})]}),r.jsxs(u,{children:[r.jsx(p,{htmlFor:"message",children:"Mensagem"}),r.jsx(M,{id:"message",name:"message",placeholder:"Descreva seu projeto ou dúvida...",value:e.message,onChange:a,$hasError:!!o.message,"aria-describedby":o.message?"message-error":void 0}),o.message&&r.jsx(x,{id:"message-error",role:"alert",children:o.message})]}),r.jsxs(T,{type:"submit",disabled:i==="loading",children:[r.jsx(y,{size:16}),i==="loading"?"Enviando...":"Solicitar orçamento"]})]})]})})}export{H as default};
