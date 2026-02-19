import{k as _,c as n,a as D,_ as w}from"./createTheme-4d0398d1.js";import{_ as a}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-25515bb9.js";import{r as N}from"./index-8ee6c85d.js";import{c as U}from"./clsx-0839fdbe.js";import{u as z}from"./useThemeProps-1579efad.js";import{s as v,c as E}from"./styled-e31463b6.js";import{g as I,a as F}from"./generateUtilityClasses-60608be2.js";import{j as g}from"./jsx-runtime-f6d73c06.js";function K(r){return I("MuiCircularProgress",r)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,$;const t=44,B=_(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=_(S||(S=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=r=>{const{classes:e,variant:s,color:o,disableShrink:m}=r,d={root:["root",s,`color${n(o)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,m&&"circleDisableShrink"]};return E(d,K,e)},T=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${n(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),B)),V=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${n(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),q=N.forwardRef(function(e,s){const o=z({props:e,name:"MuiCircularProgress"}),{className:m,color:d="primary",disableShrink:M=!1,size:u=40,style:R,thickness:i=3.6,value:p=0,variant:k="indeterminate"}=o,j=w(o,W),c=a({},o,{color:d,disableShrink:M,size:u,thickness:i,value:p,variant:k}),f=L(c),h={},x={},C={};if(k==="determinate"){const y=2*Math.PI*((t-i)/2);h.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(p),h.strokeDashoffset=`${((100-p)/100*y).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(T,a({className:U(f.root,m),style:a({width:u,height:u},x,R),ownerState:c,ref:s,role:"progressbar"},C,j,{children:g.jsx(V,{className:f.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(Z,{className:f.circle,style:h,ownerState:c,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),er=q;export{er as C};
