const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Services-Bu9BD6Ab.js","assets/styles-cOqFwPJs.js","assets/vendor-COI1NATn.js","assets/icons-CHcfn-E7.js","assets/About-B0UjUGOO.js","assets/FAQ-BjHAM9sH.js","assets/Contact-esOfjRSJ.js","assets/Footer-CDDUzbj2.js"])))=>i.map(i=>d[i]);
import{r as l,S as z,f as g,g as a,E,a as C}from"./styles-cOqFwPJs.js";import{r as B}from"./vendor-COI1NATn.js";import{G as c}from"./icons-CHcfn-E7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=d(r);fetch(r.href,t)}})();var v={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=l,F=Symbol.for("react.element"),R=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,M=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function $(e,n,d){var s,r={},t=null,i=null;d!==void 0&&(t=""+d),n.key!==void 0&&(t=""+n.key),n.ref!==void 0&&(i=n.ref);for(s in n)O.call(n,s)&&!N.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:F,type:e,key:t,ref:i,props:r,_owner:M.current}}m.Fragment=R;m.jsx=$;m.jsxs=$;v.exports=m;var o=v.exports,w,y=B;w=y.createRoot,y.hydrateRoot;const T={colors:{primary:"#ffa500",primaryDark:"#e6940a",logo:"#dbac22",bgBody:"#121212",bgSurface:"#1e1e1e",textPrimary:"#ffffff",textSecondary:"#b3b3b3",border:"#333333",success:"#4caf50",error:"#f44336",warning:"#ff9800"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},borderRadius:{sm:"4px",md:"8px",lg:"12px"},shadows:{sm:"0 2px 4px rgba(0, 0, 0, 0.3)",md:"0 4px 8px rgba(0, 0, 0, 0.3)",lg:"0 8px 16px rgba(0, 0, 0, 0.3)"},fontSizes:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"24px",xxl:"28px",hero:"48px"},transition:"0.3s ease",breakpoints:{mobile:"768px"}},W=z`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({theme:e})=>e.colors.bgBody};
    color: ${({theme:e})=>e.colors.textPrimary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img, svg {
    display: block;
  }
`,A="modulepreload",D=function(e){return"/honey-tech/"+e},b={},x=function(n,d,s){let r=Promise.resolve();if(d&&d.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),p=i?.nonce||i?.getAttribute("nonce");r=Promise.allSettled(d.map(u=>{if(u=D(u),u in b)return;b[u]=!0;const f=u.endsWith(".css"),L=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${L}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":A,f||(h.as="script"),h.crossOrigin="",h.href=u,p&&h.setAttribute("nonce",p),document.head.appendChild(h),f)return new Promise((S,_)=>{h.addEventListener("load",S),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function t(i){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=i,window.dispatchEvent(p),!p.defaultPrevented)throw i}return r.then(i=>{for(const p of i||[])p.status==="rejected"&&t(p.reason);return n().catch(t)})};function ve(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(e)}function I(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function $e(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function we(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(e)}function je(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"},child:[]}]})(e)}function Le(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function Se(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(e)}function H(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function _e(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function ze(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(e)}function Ee(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(e)}function Ce(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(e)}function Be(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function Pe(e){return c({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(e)}function j({size:e=120,color:n="#dbac22"}){return o.jsx("svg",{width:e,height:e,viewBox:"0 0 230 230",xmlns:"http://www.w3.org/2000/svg","aria-label":"HoneyTech logo",role:"img",children:o.jsx("path",{d:"M150.019 7.218c-2.19 0.609 -3.72 3.005 -3.354 5.248 2.754 9.572 5.468 30.18 5.468 30.18a26 26 0 0 0 -2.626 2.77c-4.877 6.102 -6.463 14.274 -4.009 21.725 2.756 1.4 5.298 3.168 7.51 5.32a57.2 57.2 0 0 1 8.018 9.768c14.612 5.88 33.687 4.539 41.55 -2.844 7.237 -9.055 -2.36 -36.217 -19.244 -43.007a28.7 28.7 0 0 0 -6.851 -1.68c-0.066 0.17 0.436 -5.141 0.436 -7.8l22.234 -6.048c2.177 -0.56 3.752 -2.877 3.468 -5.108s-2.385 -4.081 -4.635 -4.079c-8.89 1.986 -18.059 4.786 -26.97 7.218 -1.96 0.539 -3.436 2.487 -3.426 4.52 0.107 3.815 0.508 11.59 0.508 11.59a32.2 32.2 0 0 0 -7.873 2.334l-3.717 -22.234 21.65 -5.904c2.18 -0.56 3.753 -2.877 3.468 -5.11 -0.282 -2.229 -2.385 -4.08 -4.635 -4.077 -8.88 1.93 -18.073 4.79 -26.97 7.218m-67.285 -0.22c-6.966 0.22 -12.973 2.703 -17.059 6.418 7.66 3.89 14.632 8.396 19.684 11.66 11.756 7.596 19.776 16.179 40.02 37.98 3.516 -0.186 6.534 0.11 9.696 0.654 -2.318 -17.368 -11.145 -32.646 -21.142 -42.643 -10.046 -9.376 -20.682 -14.218 -31.2 -14.069m-44.029 3.209c-4.902 0.07 -9.338 1.5 -12.904 4.956 -9.51 13.824 7.096 34.537 21.36 50.661 13.401 15.154 33.393 18.61 55.475 17.058 0.896 -6.069 3.72 -11.613 8.676 -15.16 2.527 -1.809 5.418 -3.039 8.457 -3.79 -18.43 -19.84 -26.187 -27.956 -36.961 -34.919C72.109 22.101 53.413 9.99 38.702 10.205M183.696 48.11c5.937 4.947 6.697 12.276 1.75 16.402s-13.744 3.489 -19.683 -1.459 -6.772 -12.35 -1.823 -16.474c6.425 -4.042 13.978 -3.15 19.756 1.53m-69.688 23.404c-9.06 6.484 -9.568 21.855 -0.512 35.06 9.06 13.209 33.953 15.425 43.01 8.822 11.322 -8.805 6.807 -26.376 -6.78 -39.582 -11.536 -8.89 -25.288 -11.532 -35.718 -4.3m-16.55 21.284c1.204 9.987 6.961 19.275 14.8 25.806 7.371 6.142 17.491 10.284 26.462 11.738a173 173 0 0 0 -0.803 -6.854c-8.268 -0.996 -17.572 -4.123 -23.219 -8.69 -6.366 -5.619 -10.559 -14.444 -11.917 -22.073 -1.816 -0.191 -3.687 -0.04 -5.32 0.073zm-9.11 2.406a26 26 0 0 0 -4.011 2.333c1.453 12.137 10.18 25.599 20.194 33.241 10.002 7.63 22.808 12.503 34.408 13.777 0.14 -1.58 0.2 -3.16 0.217 -4.737 -11.266 -1.425 -23.63 -6.29 -32.877 -13.996 -10.107 -9.593 -16.19 -20.18 -17.931 -30.616m-11.81 10.424a44.3 44.3 0 0 0 -4.228 7.8c3.341 11.295 13.704 23.94 24.492 31.492 10.504 7.35 26.239 13.863 37.98 15.38a45 45 0 0 0 2.48 -6.56c-13.202 -1.577 -27.06 -6.988 -38.345 -15.6 -9.717 -7.415 -18.727 -19.736 -22.379 -32.512m-8.237 21.795a86 86 0 0 0 -0.948 7.292c11.02 18.717 34.163 34.14 58.098 38.926a107 107 0 0 0 4.084 -4.737c-12.7 -2.474 -27.464 -8.917 -38.053 -16.33 -8.779 -6.144 -17.502 -15.266 -23.181 -25.149m-1.75 22.162a110 110 0 0 0 0.364 9.332c9.138 12.073 30.67 26.445 42.572 27.846a57 57 0 0 0 8.018 -5.468c-19.176 -5.257 -38.33 -16.9 -50.954 -31.71m3.864 26.39c1.636 4.35 3.848 8.125 6.779 11.007 2.189 10.067 4.818 16.22 13.413 18.37 -2.212 -4.425 -2.275 -8.845 -0.292 -13.267 1.515 0.03 2.99 -0.051 4.448 -0.219 -8.307 -3.778 -17.082 -9.607 -24.348 -15.891",overflow:"visible",fill:n})})}const k=[{label:"Serviços",href:"#servicos"},{label:"Sobre",href:"#sobre"},{label:"FAQ",href:"#faq"},{label:"Contato",href:"#contato"}],U=a.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  transition: background-color ${({theme:e})=>e.transition},
    backdrop-filter ${({theme:e})=>e.transition},
    box-shadow ${({theme:e})=>e.transition};

  ${({$scrolled:e})=>e?g`
          background-color: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
        `:g`
          background-color: transparent;
        `}
`,V=a.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.lg};
`,q=a.a`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  text-decoration: none;
  flex-shrink: 0;
`,Y=a.span`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  letter-spacing: -1px;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary};
  }
`,G=a.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    display: none;
  }
`,K=a.a`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-decoration: none;
  transition: color ${({theme:e})=>e.transition};

  &:hover {
    color: ${({theme:e})=>e.colors.textPrimary};
  }
`,Q=a.a`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: #121212;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  transition: background-color ${({theme:e})=>e.transition};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    display: none;
  }
`,J=a.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: none;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.textPrimary};
  cursor: pointer;
  transition: border-color ${({theme:e})=>e.transition};
  flex-shrink: 0;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    display: flex;
  }
`,X=a.div`
  display: ${({$open:e})=>e?"flex":"none"};
  visibility: ${({$open:e})=>e?"visible":"hidden"};
  flex-direction: column;
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  background-color: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  gap: ${({theme:e})=>e.spacing.xs};

  @media (min-width: ${({theme:e})=>e.breakpoints.mobile}) {
    display: none;
    visibility: hidden;
  }
`,Z=a.a`
  padding: ${({theme:e})=>e.spacing.md} 0;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-decoration: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  transition: color ${({theme:e})=>e.transition};

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.textPrimary};
  }
`,ee=a.a`
  display: inline-flex;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.md};
  background-color: ${({theme:e})=>e.colors.primary};
  color: #121212;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  transition: background-color ${({theme:e})=>e.transition};

  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`;function oe(){const[e,n]=l.useState(!1),[d,s]=l.useState(!1);l.useEffect(()=>{function t(){s(window.scrollY>20)}return window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]);function r(){n(!1)}return o.jsxs(U,{$scrolled:d,children:[o.jsxs(V,{children:[o.jsxs(q,{href:"#","data-testid":"header-logo","aria-label":"HoneyTech — voltar ao topo",children:[o.jsx(j,{size:28}),o.jsxs(Y,{children:["Honey",o.jsx("em",{children:"Tech"})]})]}),o.jsx(G,{"data-testid":"header-nav",children:k.slice(0,-1).map(({label:t,href:i})=>o.jsx(K,{href:i,children:t},i))}),o.jsx(Q,{href:"#contato","data-testid":"header-cta",children:"Solicitar orçamento"}),o.jsx(J,{"data-testid":"hamburger-button","aria-label":e?"Fechar menu":"Abrir menu","aria-expanded":e,"aria-controls":"mobile-menu",onClick:()=>n(t=>!t),children:e?o.jsx(I,{size:20}):o.jsx(H,{size:20})})]}),o.jsxs(X,{id:"mobile-menu",$open:e,"data-testid":"mobile-menu",children:[k.slice(0,-1).map(({label:t,href:i})=>o.jsx(Z,{href:i,onClick:r,children:t},i)),o.jsx(ee,{href:"#contato",onClick:r,children:"Solicitar orçamento"})]})]})}const te=E`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,re=a.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl} ${({theme:e})=>e.spacing.lg};
  background-color: ${({theme:e})=>e.colors.bgBody};
`,ne=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  max-width: 680px;
  width: 100%;
  animation: ${te} 0.8s ease both;
`,ie=a.div`
  filter: drop-shadow(0 4px 24px rgba(219, 172, 34, 0.35));
`,ae=a.span`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  letter-spacing: -0.5px;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary};
  }
`,se=a.h1`
  font-size: ${({theme:e})=>e.fontSizes.hero};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  line-height: 1.1;
  letter-spacing: -1px;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,ce=a.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    font-size: ${({theme:e})=>e.fontSizes.md};
  }
`,le=a.div`
  width: 48px;
  height: 3px;
  background-color: ${({theme:e})=>e.colors.primary};
  border-radius: 2px;
`,de=a.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({theme:e})=>e.spacing.xl};
  height: 48px;
  background-color: ${({theme:e})=>e.colors.primary};
  color: #000;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: 600;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: background-color ${({theme:e})=>e.transition};
  text-decoration: none;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.4);
  }
`;function pe(){return o.jsx(re,{children:o.jsxs(ne,{children:[o.jsx(ie,{children:o.jsx(j,{size:100,"aria-label":"HoneyTech logo"})}),o.jsxs(ae,{children:["Honey",o.jsx("em",{children:"Tech"})]}),o.jsx(se,{children:"Transformamos ideias em produtos digitais reais."}),o.jsx(le,{}),o.jsx(ce,{"data-testid":"hero-subheadline",children:"Desenvolvimento web e mobile com foco em qualidade, prazo e resultado para o seu negócio."}),o.jsx(de,{href:"#contato",children:"Solicitar orçamento"})]})})}const ue=l.lazy(()=>x(()=>import("./Services-Bu9BD6Ab.js"),__vite__mapDeps([0,1,2,3]))),he=l.lazy(()=>x(()=>import("./About-B0UjUGOO.js"),__vite__mapDeps([4,1,2,3]))),xe=l.lazy(()=>x(()=>import("./FAQ-BjHAM9sH.js"),__vite__mapDeps([5,1,2,3]))),fe=l.lazy(()=>x(()=>import("./Contact-esOfjRSJ.js"),__vite__mapDeps([6,1,2,3]))),me=l.lazy(()=>x(()=>import("./Footer-CDDUzbj2.js"),__vite__mapDeps([7,1,3,2])));function ge(){return o.jsxs(o.Fragment,{children:[o.jsx(oe,{}),o.jsx(pe,{}),o.jsxs(l.Suspense,{fallback:null,children:[o.jsx(ue,{}),o.jsx(he,{}),o.jsx(xe,{}),o.jsx(fe,{}),o.jsx(me,{})]})]})}w(document.getElementById("root")).render(o.jsx(l.StrictMode,{children:o.jsxs(C,{theme:T,children:[o.jsx(W,{}),o.jsx(ge,{})]})}));export{j as B,Pe as F,Be as a,Ce as b,Ee as c,ze as d,_e as e,Se as f,Le as g,je as h,we as i,$e as j,ve as k,o as l};
