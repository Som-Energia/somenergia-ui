import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as i}from"./styled-components.browser.esm-58940f4c.js";import{u as d}from"./useTranslation-7232bec6.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-is-prop-valid.esm-79d3a695.js";import"./emotion-memoize.esm-f5713a00.js";import"./i18nInstance-1f8a4d28.js";i.div`
  display: flex;
  justify-content: flex-end;
`;const p=i.div`
  border-width: 0 1px 0 0;
  border-radius: 0px;
  border-style: solid;
  padding: 4px 8px;
  color: '#4D4D4D';
  align-items: center;
  text-align: center;
  flex: 1;
`,u=i.div`
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0 4px 0 8px;;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  .units { 
    font-size: 0.8rem;
  }
`,m=i.div`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 4px 0 8px;
  line-height: 1.2rem;
  .title {
    color: #616161;
  }
  div {
    white-space: nowrap;
  }
`;function c(t){const{value:n,description:s}=t;return e.jsxs(p,{children:[e.jsxs(u,{children:[e.jsx("span",{children:n}),e.jsx("span",{className:"units",children:"€/kWh"})]}),e.jsx(m,{children:e.jsx("div",{className:"",children:s})})]})}c.__docgenInfo={description:"",methods:[],displayName:"Total"};const x=i.div`
  display: flex;
  & > div {
    margin-left: 8px;
  }
  div:last-child {
    border: none;
  }
`,a=t=>{switch(t){case"MIN":return"SUMPRICESDISPLAY.TOTAL_MIN";case"MAX":return"SUMPRICESDISPLAY.TOTAL_MAX";case"AVERAGE":return"SUMPRICESDISPLAY.TOTAL_AVERAGE";case"WEEKLY_AVERAGE":return"SUMPRICESDISPLAY.TOTAL_WEEKLY_AVERAGE";default:return""}};function l(t){const{totalPrices:n}=t,{t:s}=d();return e.jsx(x,{children:Object.entries(n).map(([o,r])=>(console.log(r,o,s(a(o))),e.jsx(c,{value:r,description:s(a(o))})))})}l.__docgenInfo={description:"",methods:[],displayName:"SumPricesDisplay"};const A={MIN:"0,148228",MAX:"0,267025",AVERAGE:"0,192623",WEEKLY_AVERAGE:"0,159804"},D={title:"Components/FascinatingSumPricesDisplay🧮",component:l,tags:["autodocs"]},T={args:{totalPrices:A}};export{T as DisplaySumPrices,D as default};
