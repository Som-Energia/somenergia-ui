import{j as o}from"./jsx-runtime-DiklIkkE.js";import{a as I,s as d,m as b,b as c,T as R}from"./Typography-DgIEhK2L.js";import{r as w}from"./index-DRjF_FHU.js";import{c as q}from"./clsx-B-dksMZM.js";import{u as M}from"./index-CMNX_ky1.js";import{g as N,a as O}from"./generateUtilityClasses-DGi4yQgU.js";import{u as z,c as S,k as x}from"./DefaultPropsProvider-haSsmckt.js";import{c as n,l as D,f as A}from"./createTheme-DYFfw7T3.js";function E(e){return N("MuiLinearProgress",e)}O("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const y=4,v=x`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,U=typeof v!="string"?S`
        animation: ${v} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,h=x`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,_=typeof h!="string"?S`
        animation: ${h} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,C=x`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,F=typeof C!="string"?S`
        animation: ${C} 3s infinite linear;
      `:null,K=e=>{const{classes:r,variant:t,color:a}=e,l={root:["root",`color${n(a)}`,t],dashed:["dashed",`dashedColor${n(a)}`],bar1:["bar","bar1",`barColor${n(a)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",t!=="buffer"&&`barColor${n(a)}`,t==="buffer"&&`color${n(a)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return I(l,E,r)},P=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?D(e.palette[r].main,.62):A(e.palette[r].main,.5),X=d("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${n(t.color)}`],r[t.variant]]}})(b(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(c()).map(([r])=>({props:{color:r},style:{backgroundColor:P(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),V=d("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${n(t.color)}`]]}})(b(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(c()).map(([r])=>{const t=P(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),F||{animation:`${C} 3s infinite linear`}),W=d("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${n(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(b(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(c()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${y}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${y}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:U||{animation:`${v} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),G=d("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${n(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(b(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(c()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(c()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:P(e,r),transition:`transform .${y}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:_||{animation:`${h} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),H=w.forwardRef(function(r,t){const a=z({props:r,name:"MuiLinearProgress"}),{className:l,color:j="primary",value:g,valueBuffer:L,variant:s="indeterminate",...B}=a,p={...a,color:j,variant:s},u=K(p),$=M(),f={},m={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&g!==void 0){f["aria-valuenow"]=Math.round(g),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let i=g-100;$&&(i=-i),m.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&L!==void 0){let i=(L||0)-100;$&&(i=-i),m.bar2.transform=`translateX(${i}%)`}return o.jsxs(X,{className:q(u.root,l),ownerState:p,role:"progressbar",...f,ref:t,...B,children:[s==="buffer"?o.jsx(V,{className:u.dashed,ownerState:p}):null,o.jsx(W,{className:u.bar1,ownerState:p,style:m.bar1}),s==="determinate"?null:o.jsx(G,{className:u.bar2,ownerState:p,style:m.bar2})]})}),k=e=>{const{totalSteps:r,currentStep:t,showStepTitle:a=!1,stepTitle:l}=e;return o.jsxs(o.Fragment,{children:[r>0&&o.jsxs(R,{color:"secondary",children:[a&&l," ",Number(t+1)+"/"+r]}),r>0&&o.jsx(H,{variant:"determinate",value:(t+1)/r*100,color:"secondary",sx:{marginBottom:"65px",height:6,borderRadius:"100px",backgroundColor:"text.primary","& .MuiLinearProgress-bar":{backgroundColor:"accent.main"}}})]})};k.__docgenInfo={description:"",methods:[],displayName:"SomStepperLinearProgress"};const T=3,or={title:"Base Components/SomStepperLinearProgress",component:k,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{width:"min(480px, 90vw)"},children:o.jsx(e,{})})],argTypes:{currentStep:{control:{type:"number",min:0}},totalSteps:{control:{type:"number",min:0}},showStepTitle:{control:"boolean"},stepTitle:{control:"text"}},args:{currentStep:0,totalSteps:T,showStepTitle:!1,stepTitle:"Step"}},nr={},ir={args:{currentStep:1,showStepTitle:!0,stepTitle:"STEP_TITLE"}},sr={args:{currentStep:0}},lr={args:{currentStep:1}},pr={args:{currentStep:T}},cr={args:{currentStep:0,totalSteps:0}};export{nr as Default,cr as Empty,sr as FirstStep,pr as LastStep,lr as MiddleStep,ir as WithStepTitle,or as default};
