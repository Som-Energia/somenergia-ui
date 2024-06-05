import{j as t}from"./jsx-runtime-f6d73c06.js";import"./index-8ee6c85d.js";import{u as o}from"./styled-components.browser.esm-38b659d4.js";import{d as c}from"./dayjs.min-c73a3c8d.js";import{u}from"./useTranslation-b341bc73.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-is-prop-valid.esm-79d3a695.js";import"./emotion-memoize.esm-f5713a00.js";import"./dayjs.min-f143bbe4.js";import"./i18nInstance-1f8a4d28.js";const f=o.div`
  display: flex;
  justify-content: flex-end;
`,h=o.div`
  border-color: ${e=>e.color==="primary"?"#96b633":"#f2970f"};
  border-width: 0px;
  border-radius: 8px;
  border-style: solid;
  padding: 4px 8px;
  color: ${e=>e.color==="primary"?"#96b633":"#f2970f"};
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
`;function l(e){const{value:r,title:a,date:i="",color:s="primary"}=e,n=i===""?"":i;return t.jsx(f,{children:t.jsxs(h,{color:s,children:[t.jsxs(x,{children:[t.jsx("span",{children:r!=="-"?r:"-"}),t.jsx("span",{children:" kWh"})]}),t.jsxs(D,{children:[t.jsx("div",{className:"title",children:a}),t.jsx("div",{children:n})]})]})})}l.__docgenInfo={description:"",methods:[],displayName:"Counter"};const Y=o.div`
  display: flex;
  & > div {
    margin-left: 8px;
  }
`,d=e=>{switch(e){case"DAILY":return"SUMDISPLAY.TOTAL_DAILY";case"WEEKLY":return"SUMDISPLAY.TOTAL_WEEKLY";case"MONTHLY":return"SUMDISPLAY.TOTAL_MONTHLY";case"YEARLY":return"SUMDISPLAY.TOTAL_YEARLY";default:return""}};function m(e){const{period:r,currentDate:a=!1,totalKwh:i,compareDate:s=!1,compareTotalKwh:n=!1}=e,{t:p}=u();return t.jsxs(Y,{children:[a&&t.jsx(l,{value:i,title:p(d(r)),date:c(a).format("DD/MM/YYYY")}),s&&t.jsx(l,{value:n,title:p(d(r)),date:c(s).format("DD/MM/YYYY"),color:"secondary"})]})}m.__docgenInfo={description:"",methods:[],displayName:"SumDisplay"};const C={title:"Components/FascinatingSumDisplay🧮",component:m,tags:["autodocs"]},M={args:{period:"DAILY",currentDate:"05/02/2024",totalKwh:5}},b={args:{period:"DAILY",currentDate:"05/02/2024",totalKwh:5,compareDate:"04/02/2024",compareTotalKwh:6}},K={args:{currentDate:!1,period:"DAILY",compareDate:"04/02/2024",compareTotalKwh:6}};export{K as DisplayComparasionSum,M as DisplaySum,b as DisplaySumWithComparation,C as default};
