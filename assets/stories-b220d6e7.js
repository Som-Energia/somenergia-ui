import{j as i}from"./jsx-runtime-ffb262ed.js";import{P as e}from"./index-8d47fad6.js";import{k as c}from"./createTheme-906aa36c.js";import{B as a}from"./Box-87ef40f7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";const g=""+new URL("logo-f0c56107.svg",import.meta.url).href;function n({color:t="#96b633",width:s="150px",trailWidth:o="3px",ballWidth:r="16px",logoCoverage:p="78%",logoOffset:l="-12%",sx:d}){const u=c`
    to { rotate: 1turn; }
  `;return i.jsx(a,{sx:{boxSizing:"content-box",position:"relative",width:"100%",minHeight:"80%",display:"flex",flexFlow:"row wrap",justifyContent:"center",alignContent:"center",...d},children:i.jsxs(a,{sx:{position:"relative",width:s,height:s,borderRadius:"50%",textAlign:"center",background:"transparent",color:`${t}`,boxShadow:"0 0 20px rgba(0, 0, 0, 0.2)",display:"flex",justifyContent:"center",alignItems:"center"},children:[i.jsx(a,{sx:{position:"absolute",animation:`${u} 2s linear infinite`,width:"100%",height:"100%","&:before":{content:'""',position:"absolute",top:`-${o}`,left:`-${o}`,width:"100%",height:"100%",borderRadius:"50%",border:`${o} solid transparent`,borderTopColor:t,borderRightColor:t,rotate:"-45deg"},"&:after":{content:'""',position:"absolute",width:r,height:r,top:`calc(50% - ${r} / 2)`,right:`calc((-${r} - ${o}) / 2)`,borderRadius:"50%",backgroundColor:t,boxShadow:"0 0 20px",boxShadowColor:t}}}),i.jsx("img",{src:g,style:{marginTop:l,maxWidth:p,maxHeight:p}})]})})}n.propTypes={color:e.string,width:e.string,trailWidth:e.string,ballWidth:e.string,logoCoverage:e.string,logoOffset:e.string,sx:e.object};n.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{color:{defaultValue:{value:"'#96b633'",computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:"'150px'",computed:!1},description:"",type:{name:"string"},required:!1},trailWidth:{defaultValue:{value:"'3px'",computed:!1},description:"",type:{name:"string"},required:!1},ballWidth:{defaultValue:{value:"'16px'",computed:!1},description:"",type:{name:"string"},required:!1},logoCoverage:{defaultValue:{value:"'78%'",computed:!1},description:"",type:{name:"string"},required:!1},logoOffset:{defaultValue:{value:"'-12%'",computed:!1},description:"",type:{name:"string"},required:!1},sx:{description:"",type:{name:"object"},required:!1}}};const j={title:"Components/AmazingLoading✨",component:n,parameters:{layout:"centered"},tags:["autodocs"]},v={};export{v as Primary,j as default};
