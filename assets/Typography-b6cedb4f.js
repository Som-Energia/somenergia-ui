import{b as m,_ as x,j as b}from"./createTheme-1eb47bd0.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-40590036.js";import{r as P}from"./index-8ee6c85d.js";import{g as $,a as M,c as R,e as U}from"./generateUtilityClasses-8e601778.js";import{s as T,c as C}from"./styled-ab352b4e.js";import{u as B}from"./useThemeProps-ffc49cce.js";import{j as W}from"./jsx-runtime-f6d73c06.js";const k=o=>{let a;return o<1?a=5.11916*o**2:a=4.5*Math.log(o+1)+2,(a/100).toFixed(2)},y=k;function q(o){return $("MuiPaper",o)}M("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const A=["className","component","elevation","square","variant"],O=o=>{const{square:a,elevation:t,variant:r,classes:n}=o,e={root:["root",r,!a&&"rounded",r==="elevation"&&`elevation${t}`]};return C(e,q,n)},E=T("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,a[t.variant],!t.square&&a.rounded,t.variant==="elevation"&&a[`elevation${t.elevation}`]]}})(({theme:o,ownerState:a})=>{var t;return i({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!a.square&&{borderRadius:o.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},a.variant==="elevation"&&i({boxShadow:(o.vars||o).shadows[a.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${m("#fff",y(a.elevation))}, ${m("#fff",y(a.elevation))})`},o.vars&&{backgroundImage:(t=o.vars.overlays)==null?void 0:t[a.elevation]}))}),I=P.forwardRef(function(a,t){const r=B({props:a,name:"MuiPaper"}),{className:n,component:e="div",elevation:l=1,square:s=!1,variant:p="elevation"}=r,u=x(r,A),v=i({},r,{component:e,elevation:l,square:s,variant:p}),c=O(v);return W.jsx(E,i({as:e,ownerState:v,className:R(c.root,n),ref:t},u))}),S=I;function L(o){return $("MuiTypography",o)}M("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const V=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],w=o=>{const{align:a,gutterBottom:t,noWrap:r,paragraph:n,variant:e,classes:l}=o,s={root:["root",e,o.align!=="inherit"&&`align${b(a)}`,t&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return C(s,L,l)},z=T("span",{name:"MuiTypography",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,t.variant&&a[t.variant],t.align!=="inherit"&&a[`align${b(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})(({theme:o,ownerState:a})=>i({margin:0},a.variant==="inherit"&&{font:"inherit"},a.variant!=="inherit"&&o.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},D={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},F=o=>D[o]||o,J=P.forwardRef(function(a,t){const r=B({props:a,name:"MuiTypography"}),n=F(r.color),e=U(i({},r,{color:n})),{align:l="inherit",className:s,component:p,gutterBottom:u=!1,noWrap:v=!1,paragraph:c=!1,variant:g="body1",variantMapping:d=f}=e,_=x(e,V),h=i({},e,{align:l,color:n,className:s,component:p,gutterBottom:u,noWrap:v,paragraph:c,variant:g,variantMapping:d}),j=p||(c?"p":d[g]||f[g])||"span",N=w(h);return W.jsx(z,i({as:j,ref:t,ownerState:h,className:R(N.root,s)},_))}),aa=J;export{S as P,aa as T};
