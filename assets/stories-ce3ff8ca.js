import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as o}from"./styled-components.browser.esm-58940f4c.js";import{d as c}from"./dayjs.min-0adc5a14.js";import{u}from"./useTranslation-7232bec6.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-is-prop-valid.esm-79d3a695.js";import"./emotion-memoize.esm-f5713a00.js";import"./i18nInstance-1f8a4d28.js";const f=o.div`
  display: flex;
  justify-content: flex-end;
`,h=o.div`
  border-color: ${t=>t.color==="primary"?"#96b633":"#f2970f"};
  border-width: 0px;
  border-radius: 8px;
  border-style: solid;
  padding: 4px 8px;
  color: ${t=>t.color==="primary"?"#96b633":"#f2970f"};
  display: flex;
  align-items: center;
`,x=o.div`
  font-size: 2.2rem;
  font-weight: 800;
  padding: 0 4px;
  white-space: nowrap;
  span:last-child {
    font-weight: 400;
    font-size: 2rem;
  }
`,D=o.div`
  font-size: 1rem;
  font-weight: 500;
  padding: 0 4px 0 8px;
  line-height: 1.2rem;
  .title {
    color: #616161;
  }
  div {
    white-space: nowrap;
  }
`;function l(t){const{value:r,title:a,date:s="",color:i="primary"}=t,n=s===""?"":s;return e.jsx(f,{children:e.jsxs(h,{color:i,children:[e.jsxs(x,{children:[e.jsx("span",{children:r!=="-"?r:"-"}),e.jsx("span",{children:" kWh"})]}),e.jsxs(D,{children:[e.jsx("div",{className:"title",children:a}),e.jsx("div",{children:n})]})]})})}l.__docgenInfo={description:"",methods:[],displayName:"Counter"};const Y=o.div`
  display: flex;
  & > div {
    margin-left: 8px;
  }
`,d=t=>{switch(t){case"DAILY":return"SUMDISPLAY.TOTAL_DAILY";case"WEEKLY":return"SUMDISPLAY.TOTAL_WEEKLY";case"MONTHLY":return"SUMDISPLAY.TOTAL_MONTHLY";case"YEARLY":return"SUMDISPLAY.TOTAL_YEARLY";default:return""}};function m(t){const{period:r,currentDate:a=!1,totalKwh:s,compareDate:i=!1,compareTotalKwh:n=!1}=t,{t:p}=u();return e.jsxs(Y,{children:[a&&e.jsx(l,{value:s,title:p(d(r)),date:c(a).format("DD/MM/YYYY")}),i&&e.jsx(l,{value:n,title:p(d(r)),date:c(i).format("DD/MM/YYYY"),color:"secondary"})]})}m.__docgenInfo={description:"",methods:[],displayName:"SumDisplay"};const I={title:"Components/FascinatingSumDisplay🧮",component:m,tags:["autodocs"]},C={args:{period:"DAILY",currentDate:"05/02/2024",totalKwh:5}},M={args:{period:"DAILY",currentDate:"05/02/2024",totalKwh:5,compareDate:"04/02/2024",compareTotalKwh:6}},b={args:{currentDate:!1,period:"DAILY",compareDate:"04/02/2024",compareTotalKwh:6}};export{b as DisplayComparasionSum,C as DisplaySum,M as DisplaySumWithComparation,I as default};
