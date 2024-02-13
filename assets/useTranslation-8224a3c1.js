import{r as c}from"./index-76fb7be0.js";import{g as $,a as j}from"./i18nInstance-1f8a4d28.js";function A(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const S={};function C(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&S[e[0]]||(typeof e[0]=="string"&&(S[e[0]]=new Date),A(...e))}const E=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function R(t,e,n){t.loadNamespaces(e,E(t,n))}function v(t,e,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,E(t,r))}function F(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const f=(w,m)=>{const a=e.services.backendConnector.state[`${w}|${m}`];return a===-1||a===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!f(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||f(r,t)&&(!i||f(s,t)))}function M(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(C("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,t))return!1}}):F(t,e,n)}const P=c.createContext();class U{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const O=(t,e)=>{const n=c.useRef();return c.useEffect(()=>{n.current=e?n.current:t},[t,e]),n.current};function z(t,e,n,r){return t.getFixedT(e,n,r)}function B(t,e,n,r){return c.useCallback(z(t,e,n,r),[t,e,n,r])}function H(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:i}=c.useContext(P)||{},s=n||r||j();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new U),!s){C("You will need to pass in an i18next instance by using initReactI18next");const o=(g,u)=>typeof u=="string"?u:u&&typeof u=="object"&&typeof u.defaultValue=="string"?u.defaultValue:Array.isArray(g)?g[g.length-1]:g,d=[o,{},!1];return d.t=o,d.i18n={},d.ready=!1,d}s.options.react&&s.options.react.wait!==void 0&&C("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...$(),...s.options.react,...e},{useSuspense:w,keyPrefix:m}=f;let a=t||i||s.options&&s.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(a);const p=(s.isInitialized||s.initializedStoreOnce)&&a.every(o=>M(o,s,f)),k=B(s,e.lng||null,f.nsMode==="fallback"?a:a[0],m),x=()=>k,y=()=>z(s,e.lng||null,f.nsMode==="fallback"?a:a[0],m),[I,h]=c.useState(x);let N=a.join();e.lng&&(N=`${e.lng}${N}`);const L=O(N),l=c.useRef(!0);c.useEffect(()=>{const{bindI18n:o,bindI18nStore:d}=f;l.current=!0,!p&&!w&&(e.lng?v(s,e.lng,a,()=>{l.current&&h(y)}):R(s,a,()=>{l.current&&h(y)})),p&&L&&L!==N&&l.current&&h(y);function g(){l.current&&h(y)}return o&&s&&s.on(o,g),d&&s&&s.store.on(d,g),()=>{l.current=!1,o&&s&&o.split(" ").forEach(u=>s.off(u,g)),d&&s&&d.split(" ").forEach(u=>s.store.off(u,g))}},[s,N]);const T=c.useRef(!0);c.useEffect(()=>{l.current&&!T.current&&h(x),T.current=!1},[s,m]);const b=[I,s,p];if(b.t=I,b.i18n=s,b.ready=p,p||!p&&!w)return b;throw new Promise(o=>{e.lng?v(s,e.lng,a,()=>o()):R(s,a,()=>o())})}export{H as u};
