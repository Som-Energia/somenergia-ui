import{j as e}from"./jsx-runtime-f6d73c06.js";import{u as r}from"./styled-components.browser.esm-38b659d4.js";const m=r.div`
  color: ${i=>i.color==="primary"?"#96b633":"#f2970f"};
  justify-content: flex-end;
  display: flex;
  gap: 0.6em;
  align-items: center;
`,c=r.div`
  font-size: 2.2rem;
  font-weight: 800;
  white-space: nowrap;
  align-items: baseline;
  display: flex;
  gap: 0.2em;
  div:last-child {
    font-weight: 400;
    font-size: 2rem;
  }
`,p=r.div`
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
`;function f(i){const{value:n,valueUnit:s,title:o,description:a,color:l="primary"}=i,d=t=>Number.isNaN(t)?t:new Intl.NumberFormat("es").format(t);return e.jsx(e.Fragment,{children:e.jsxs(m,{color:l,children:[e.jsxs(c,{children:[e.jsx("div",{children:n?d(n):"—"}),e.jsx("div",{children:s})]}),e.jsxs(p,{children:[e.jsx("div",{className:"title",children:o}),e.jsx("div",{children:a})]})]})})}f.__docgenInfo={description:"",methods:[],displayName:"SummaryDisplay"};export{f as S};
