import{m as r,F as y,h as j}from"./index-Cy8zBjX7.js";import{r as m,g as s}from"./styles-cOqFwPJs.js";import"./vendor-COI1NATn.js";import"./icons-CHcfn-E7.js";function S(e){const o={};return e.name.trim()||(o.name="Nome é obrigatório."),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(o.email="E-mail inválido."):o.email="E-mail é obrigatório.",e.message.trim()||(o.message="Mensagem é obrigatória."),o}function v(){const[e,o]=m.useState({name:"",email:"",message:""}),[i,a]=m.useState({}),[t,l]=m.useState("idle");function b(c){const{name:n,value:x}=c.target;o(d=>({...d,[n]:x})),a(d=>({...d,[n]:void 0}))}async function $(c){c.preventDefault();const n=S(e);if(Object.keys(n).length>0){a(n);return}l("loading");try{if(!(await fetch("https://formspree.io/f/mredeowa",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,message:e.message})})).ok)throw new Error;l("success"),o({name:"",email:"",message:""})}catch{l("error")}}return{fields:e,errors:i,status:t,handleChange:b,handleSubmit:$}}const z=s.section`
  padding: ${({theme:e})=>e.spacing.xxl} ${({theme:e})=>e.spacing.lg};
  background-color: ${({theme:e})=>e.colors.bgSurface};
`,w=s.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
`,E=s.div`
  text-align: center;
`,C=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.xxl};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0 0 ${({theme:e})=>e.spacing.xs};

  span {
    color: ${({theme:e})=>e.colors.primary};
  }
`,F=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;
`,k=s.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,g=s.div`
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
`,T=s.textarea`
  ${f}
  padding: 16px;
  min-height: 140px;
  resize: vertical;
  border-color: ${({$hasError:e,theme:o})=>e?o.colors.error:o.colors.border};

  &:focus {
    border-color: ${({$hasError:e,theme:o})=>e?o.colors.error:o.colors.primary};
  }
`,u=s.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.error};
`,M=s.button`
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
`;function R(){const{fields:e,errors:o,status:i,handleChange:a,handleSubmit:t}=v();return r.jsx(z,{id:"contato",children:r.jsxs(w,{children:[r.jsxs(E,{children:[r.jsxs(C,{children:["Fale com a ",r.jsx("span",{children:"HoneyTech"})]}),r.jsx(F,{children:"Conte seu projeto e entraremos em contato em até 24 horas."})]}),i==="success"?r.jsxs(D,{"data-testid":"contact-success",children:[r.jsx(y,{size:20}),"Mensagem enviada! Em breve entraremos em contato."]}):r.jsxs(k,{onSubmit:t,noValidate:!0,children:[r.jsxs(g,{children:[r.jsx(p,{htmlFor:"name",children:"Nome"}),r.jsx(h,{id:"name",name:"name",type:"text",placeholder:"Seu nome completo",value:e.name,onChange:a,$hasError:!!o.name,"aria-describedby":o.name?"name-error":void 0}),o.name&&r.jsx(u,{id:"name-error",role:"alert",children:o.name})]}),r.jsxs(g,{children:[r.jsx(p,{htmlFor:"email",children:"E-mail"}),r.jsx(h,{id:"email",name:"email",type:"email",placeholder:"seu@email.com",value:e.email,onChange:a,$hasError:!!o.email,"aria-describedby":o.email?"email-error":void 0}),o.email&&r.jsx(u,{id:"email-error",role:"alert",children:o.email})]}),r.jsxs(g,{children:[r.jsx(p,{htmlFor:"message",children:"Mensagem"}),r.jsx(T,{id:"message",name:"message",placeholder:"Descreva seu projeto ou dúvida...",value:e.message,onChange:a,$hasError:!!o.message,"aria-describedby":o.message?"message-error":void 0}),o.message&&r.jsx(u,{id:"message-error",role:"alert",children:o.message})]}),r.jsxs(M,{type:"submit",disabled:i==="loading",children:[r.jsx(j,{size:16}),i==="loading"?"Enviando...":"Solicitar orçamento"]})]})]})})}export{R as default};
