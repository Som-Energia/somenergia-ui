import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-40590036.js";import{a as m,G as c,_ as i,T as p}from"./createTheme-1eb47bd0.js";import{r as a}from"./index-8ee6c85d.js";import{j as r}from"./jsx-runtime-f6d73c06.js";import{d as f}from"./useThemeProps-ffc49cce.js";function x({styles:t,themeId:e,defaultTheme:o={}}){const s=m(o),u=typeof t=="function"?t(e&&s[e]||s):t;return r.jsx(c,{styles:u})}const d=["value"],n=a.createContext();function G(t){let{value:e}=t,o=i(t,d);return r.jsx(n.Provider,l({value:e??!0},o))}const R=()=>{const t=a.useContext(n);return t??!1};function _(t){return r.jsx(x,l({},t,{defaultTheme:f,themeId:p}))}export{_ as G,G as R,R as u};
