import{s as f,a as h,_ as p,c as B,T as C}from"./createTheme-1eb47bd0.js";import{s as N,e as _,c as T,a as g,C as j}from"./generateUtilityClasses-8e601778.js";import{_ as E}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-40590036.js";import{r as P}from"./index-8ee6c85d.js";import{j as b}from"./jsx-runtime-f6d73c06.js";const y=["className","component"];function I(n={}){const{themeId:o,defaultTheme:m,defaultClassName:t="MuiBox-root",generateClassName:a}=n,c=N("div",{shouldForwardProp:e=>e!=="theme"&&e!=="sx"&&e!=="as"})(f);return P.forwardRef(function(x,l){const s=h(m),r=_(x),{className:d,component:i="div"}=r,u=p(r,y);return b.jsx(c,E({as:i,ref:l,className:T(d,a?a(t):t),theme:o&&s[o]||s},u))})}const M=g("MuiBox",["root"]),R=M,S=B(),v=I({themeId:C,defaultTheme:S,defaultClassName:R.root,generateClassName:j.generate}),L=v;export{L as B};
