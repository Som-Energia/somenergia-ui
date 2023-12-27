import{r as ae}from"./index-76fb7be0.js";import{_ as T}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";function Z(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function nt(e){if(!Z(e))return e;const t={};return Object.keys(e).forEach(r=>{t[r]=nt(e[r])}),t}function z(e,t,r={clone:!0}){const n=r.clone?T({},e):e;return Z(e)&&Z(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(Z(t[i])&&i in e&&Z(e[i])?n[i]=z(e[i],t[i],r):r.clone?n[i]=Z(t[i])?nt(t[i]):t[i]:n[i]=t[i])}),n}function V(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function it(e){if(typeof e!="string")throw new Error(V(7));return e.charAt(0).toUpperCase()+e.slice(1)}function $t(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}function kt(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function vt(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var At=function(){function e(r){var n=this;this._insertTag=function(i){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,s),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vt(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=kt(i);try{s.insertRule(n,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),R="-ms-",be="-moz-",g="-webkit-",st="comm",je="rule",Ke="decl",Ct="@import",at="@keyframes",St="@layer",Ot=Math.abs,we=String.fromCharCode,Tt=Object.assign;function Rt(e,t){return O(e,0)^45?(((t<<2^O(e,0))<<2^O(e,1))<<2^O(e,2))<<2^O(e,3):0}function ot(e){return e.trim()}function Et(e,t){return(e=t.exec(e))?e[0]:e}function p(e,t,r){return e.replace(t,r)}function Be(e,t){return e.indexOf(t)}function O(e,t){return e.charCodeAt(t)|0}function oe(e,t,r){return e.slice(t,r)}function _(e){return e.length}function Me(e){return e.length}function me(e,t){return t.push(e),e}function Pt(e,t){return e.map(t).join("")}var $e=1,ee=1,ct=0,P=0,S=0,te="";function ke(e,t,r,n,i,s,a){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:$e,column:ee,length:a,return:""}}function ne(e,t){return Tt(ke("",null,null,"",null,null,0),e,{length:-e.length},t)}function Bt(){return S}function It(){return S=P>0?O(te,--P):0,ee--,S===10&&(ee=1,$e--),S}function I(){return S=P<ct?O(te,P++):0,ee++,S===10&&(ee=1,$e++),S}function L(){return O(te,P)}function ge(){return P}function de(e,t){return oe(te,e,t)}function ce(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ft(e){return $e=ee=1,ct=_(te=e),P=0,[]}function ut(e){return te="",e}function pe(e){return ot(de(P-1,Ie(e===91?e+2:e===40?e+1:e)))}function jt(e){for(;(S=L())&&S<33;)I();return ce(e)>2||ce(S)>3?"":" "}function Kt(e,t){for(;--t&&I()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return de(e,ge()+(t<6&&L()==32&&I()==32))}function Ie(e){for(;I();)switch(S){case e:return P;case 34:case 39:e!==34&&e!==39&&Ie(S);break;case 40:e===41&&Ie(e);break;case 92:I();break}return P}function Mt(e,t){for(;I()&&e+S!==47+10;)if(e+S===42+42&&L()===47)break;return"/*"+de(t,P-1)+"*"+we(e===47?e:I())}function _t(e){for(;!ce(L());)I();return de(e,P)}function Wt(e){return ut(ye("",null,null,null,[""],e=ft(e),0,[0],e))}function ye(e,t,r,n,i,s,a,o,c){for(var d=0,h=0,l=a,u=0,y=0,m=0,f=1,w=1,b=1,A=0,E="",F=i,G=s,M=n,x=E;w;)switch(m=A,A=I()){case 40:if(m!=108&&O(x,l-1)==58){Be(x+=p(pe(A),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:x+=pe(A);break;case 9:case 10:case 13:case 32:x+=jt(m);break;case 92:x+=Kt(ge()-1,7);continue;case 47:switch(L()){case 42:case 47:me(zt(Mt(I(),ge()),t,r),c);break;default:x+="/"}break;case 123*f:o[d++]=_(x)*b;case 125*f:case 59:case 0:switch(A){case 0:case 125:w=0;case 59+h:b==-1&&(x=p(x,/\f/g,"")),y>0&&_(x)-l&&me(y>32?Fe(x+";",n,r,l-1):Fe(p(x," ","")+";",n,r,l-2),c);break;case 59:x+=";";default:if(me(M=De(x,t,r,d,h,i,o,E,F=[],G=[],l),s),A===123)if(h===0)ye(x,t,M,M,F,s,l,o,G);else switch(u===99&&O(x,3)===110?100:u){case 100:case 108:case 109:case 115:ye(e,M,M,n&&me(De(e,M,M,0,0,i,o,E,i,F=[],l),G),i,G,l,o,n?F:G);break;default:ye(x,M,M,M,[""],G,0,o,G)}}d=h=y=0,f=b=1,E=x="",l=a;break;case 58:l=1+_(x),y=m;default:if(f<1){if(A==123)--f;else if(A==125&&f++==0&&It()==125)continue}switch(x+=we(A),A*f){case 38:b=h>0?1:(x+="\f",-1);break;case 44:o[d++]=(_(x)-1)*b,b=1;break;case 64:L()===45&&(x+=pe(I())),u=L(),h=l=_(E=x+=_t(ge())),A++;break;case 45:m===45&&_(x)==2&&(f=0)}}return s}function De(e,t,r,n,i,s,a,o,c,d,h){for(var l=i-1,u=i===0?s:[""],y=Me(u),m=0,f=0,w=0;m<n;++m)for(var b=0,A=oe(e,l+1,l=Ot(f=a[m])),E=e;b<y;++b)(E=ot(f>0?u[b]+" "+A:p(A,/&\f/g,u[b])))&&(c[w++]=E);return ke(e,t,r,i===0?je:o,c,d,h)}function zt(e,t,r){return ke(e,t,r,st,we(Bt()),oe(e,2,-2),0)}function Fe(e,t,r,n){return ke(e,t,r,Ke,oe(e,0,n),oe(e,n+1,-1),n)}function J(e,t){for(var r="",n=Me(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function Lt(e,t,r,n){switch(e.type){case St:if(e.children.length)break;case Ct:case Ke:return e.return=e.return||e.value;case st:return"";case at:return e.return=e.value+"{"+J(e.children,n)+"}";case je:e.value=e.props.join(",")}return _(r=J(e.children,n))?e.return=e.value+"{"+r+"}":""}function Gt(e){var t=Me(e);return function(r,n,i,s){for(var a="",o=0;o<t;o++)a+=e[o](r,n,i,s)||"";return a}}function Ht(e){return function(t){t.root||(t=t.return)&&e(t)}}var Dt=function(t,r,n){for(var i=0,s=0;i=s,s=L(),i===38&&s===12&&(r[n]=1),!ce(s);)I();return de(t,P)},Ft=function(t,r){var n=-1,i=44;do switch(ce(i)){case 0:i===38&&L()===12&&(r[n]=1),t[n]+=Dt(P-1,r,n);break;case 2:t[n]+=pe(i);break;case 4:if(i===44){t[++n]=L()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=we(i)}while(i=I());return t},Nt=function(t,r){return ut(Ft(ft(t),r))},Ne=new WeakMap,Ut=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Ne.get(n))&&!i){Ne.set(t,!0);for(var s=[],a=Nt(r,s),o=n.props,c=0,d=0;c<a.length;c++)for(var h=0;h<o.length;h++,d++)t.props[d]=s[c]?a[c].replace(/&\f/g,o[h]):o[h]+" "+a[c]}}},Yt=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function dt(e,t){switch(Rt(e,t)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+be+e+R+e+e;case 6828:case 4268:return g+e+R+e+e;case 6165:return g+e+R+"flex-"+e+e;case 5187:return g+e+p(e,/(\w+).+(:[^]+)/,g+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return g+e+R+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return g+e+R+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return g+e+R+p(e,"shrink","negative")+e;case 5292:return g+e+R+p(e,"basis","preferred-size")+e;case 6060:return g+"box-"+p(e,"-grow","")+g+e+R+p(e,"grow","positive")+e;case 4554:return g+p(e,/([^-])(transform)/g,"$1"+g+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-t>6)switch(O(e,t+1)){case 109:if(O(e,t+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+be+(O(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Be(e,"stretch")?dt(p(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(O(e,t+1)!==115)break;case 6444:switch(O(e,_(e)-3-(~Be(e,"!important")&&10))){case 107:return p(e,":",":"+g)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+g+(O(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(O(e,t+11)){case 114:return g+e+R+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+R+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+R+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return g+e+R+e+e}return e}var Xt=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case Ke:t.return=dt(t.value,t.length);break;case at:return J([ne(t,{value:p(t.value,"@","@"+g)})],i);case je:if(t.length)return Pt(t.props,function(s){switch(Et(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([ne(t,{props:[p(s,/:(read-\w+)/,":"+be+"$1")]})],i);case"::placeholder":return J([ne(t,{props:[p(s,/:(plac\w+)/,":"+g+"input-$1")]}),ne(t,{props:[p(s,/:(plac\w+)/,":"+be+"$1")]}),ne(t,{props:[p(s,/:(plac\w+)/,R+"input-$1")]})],i)}return""})}},qt=[Xt],Zt=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(f){var w=f.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var i=t.stylisPlugins||qt,s={},a,o=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var w=f.getAttribute("data-emotion").split(" "),b=1;b<w.length;b++)s[w[b]]=!0;o.push(f)});var c,d=[Ut,Yt];{var h,l=[Lt,Ht(function(f){h.insert(f)})],u=Gt(d.concat(i,l)),y=function(w){return J(Wt(w),u)};c=function(w,b,A,E){h=A,y(w?w+"{"+b.styles+"}":b.styles),E&&(m.inserted[b.name]=!0)}}var m={key:r,sheet:new At({key:r,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:c};return m.sheet.hydrate(o),m},Jt=!0;function Fn(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):n+=i+" "}),n}var Qt=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||Jt===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},Nn=function(t,r,n){Qt(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var s=r;do t.insert(r===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function Vt(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var er={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tr=/[A-Z]|^ms/g,rr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lt=function(t){return t.charCodeAt(1)===45},Ue=function(t){return t!=null&&typeof t!="boolean"},Ee=$t(function(e){return lt(e)?e:e.replace(tr,"-$&").toLowerCase()}),Ye=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(rr,function(n,i,s){return W={name:i,styles:s,next:W},i})}return er[t]!==1&&!lt(t)&&typeof r=="number"&&r!==0?r+"px":r};function fe(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return W={name:r.name,styles:r.styles,next:W},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)W={name:n.name,styles:n.styles,next:W},n=n.next;var i=r.styles+";";return i}return nr(e,t,r)}case"function":{if(e!==void 0){var s=W,a=r(e);return W=s,fe(e,t,a)}break}}if(t==null)return r;var o=t[r];return o!==void 0?o:r}function nr(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=fe(e,t,r[i])+";";else for(var s in r){var a=r[s];if(typeof a!="object")t!=null&&t[a]!==void 0?n+=s+"{"+t[a]+"}":Ue(a)&&(n+=Ee(s)+":"+Ye(s,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var o=0;o<a.length;o++)Ue(a[o])&&(n+=Ee(s)+":"+Ye(s,a[o])+";");else{var c=fe(e,t,a);switch(s){case"animation":case"animationName":{n+=Ee(s)+":"+c+";";break}default:n+=s+"{"+c+"}"}}}return n}var Xe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,W,Un=function(t,r,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";W=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,s+=fe(n,r,a)):s+=a[0];for(var o=1;o<t.length;o++)s+=fe(n,r,t[o]),i&&(s+=a[o]);Xe.lastIndex=0;for(var c="",d;(d=Xe.exec(s))!==null;)c+="-"+d[1];var h=Vt(s)+c;return{name:h,styles:s,next:W}},ht=ae.createContext(typeof HTMLElement<"u"?Zt({key:"css"}):null);ht.Provider;var Yn=function(t){return ae.forwardRef(function(r,n){var i=ae.useContext(ht);return t(r,i,n)})},ir=ae.createContext({});function re(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const sr=["values","unit","step"],ar=e=>{const t=Object.keys(e).map(r=>({key:r,val:e[r]}))||[];return t.sort((r,n)=>r.val-n.val),t.reduce((r,n)=>T({},r,{[n.key]:n.val}),{})};function or(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,i=re(e,sr),s=ar(t),a=Object.keys(s);function o(u){return`@media (min-width:${typeof t[u]=="number"?t[u]:u}${r})`}function c(u){return`@media (max-width:${(typeof t[u]=="number"?t[u]:u)-n/100}${r})`}function d(u,y){const m=a.indexOf(y);return`@media (min-width:${typeof t[u]=="number"?t[u]:u}${r}) and (max-width:${(m!==-1&&typeof t[a[m]]=="number"?t[a[m]]:y)-n/100}${r})`}function h(u){return a.indexOf(u)+1<a.length?d(u,a[a.indexOf(u)+1]):o(u)}function l(u){const y=a.indexOf(u);return y===0?o(a[1]):y===a.length-1?c(a[y]):d(u,a[a.indexOf(u)+1]).replace("@media","@media not all and")}return T({keys:a,values:s,up:o,down:c,between:d,only:h,not:l,unit:r},i)}const cr={borderRadius:4},fr=cr;function se(e,t){return t?z(e,t,{clone:!1}):e}const _e={xs:0,sm:600,md:900,lg:1200,xl:1536},qe={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${_e[e]}px)`};function H(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const s=n.breakpoints||qe;return t.reduce((a,o,c)=>(a[s.up(s.keys[c])]=r(t[c]),a),{})}if(typeof t=="object"){const s=n.breakpoints||qe;return Object.keys(t).reduce((a,o)=>{if(Object.keys(s.values||_e).indexOf(o)!==-1){const c=s.up(o);a[c]=r(t[o],o)}else{const c=o;a[c]=t[c]}return a},{})}return r(t)}function mt(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((n,i)=>{const s=e.up(i);return n[s]={},n},{}))||{}}function gt(e,t){return e.reduce((r,n)=>{const i=r[n];return(!i||Object.keys(i).length===0)&&delete r[n],r},t)}function Xn(e,...t){const r=mt(e),n=[r,...t].reduce((i,s)=>z(i,s),{});return gt(Object.keys(r),n)}function ur(e,t){if(typeof e!="object")return{};const r={},n=Object.keys(t);return Array.isArray(e)?n.forEach((i,s)=>{s<e.length&&(r[i]=!0)}):n.forEach(i=>{e[i]!=null&&(r[i]=!0)}),r}function qn({values:e,breakpoints:t,base:r}){const n=r||ur(e,t),i=Object.keys(n);if(i.length===0)return e;let s;return i.reduce((a,o,c)=>(Array.isArray(e)?(a[o]=e[c]!=null?e[c]:e[s],s=c):typeof e=="object"?(a[o]=e[o]!=null?e[o]:e[s],s=o):a[o]=e,a),{})}function ve(e,t,r=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&r){const n=`vars.${t}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,e);if(n!=null)return n}return t.split(".").reduce((n,i)=>n&&n[i]!=null?n[i]:null,e)}function xe(e,t,r,n=r){let i;return typeof e=="function"?i=e(r):Array.isArray(e)?i=e[r]||n:i=ve(e,r)||n,t&&(i=t(i,n,e)),i}function C(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:i}=e,s=a=>{if(a[t]==null)return null;const o=a[t],c=a.theme,d=ve(c,n)||{};return H(a,o,l=>{let u=xe(d,i,l);return l===u&&typeof l=="string"&&(u=xe(d,i,`${t}${l==="default"?"":it(l)}`,l)),r===!1?u:{[r]:u}})};return s.propTypes={},s.filterProps=[t],s}function dr(e){const t={};return r=>(t[r]===void 0&&(t[r]=e(r)),t[r])}const lr={m:"margin",p:"padding"},hr={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Ze={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},mr=dr(e=>{if(e.length>2)if(Ze[e])e=Ze[e];else return[e];const[t,r]=e.split(""),n=lr[t],i=hr[r]||"";return Array.isArray(i)?i.map(s=>n+s):[n+i]}),We=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ze=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...We,...ze];function le(e,t,r,n){var i;const s=(i=ve(e,t,!1))!=null?i:r;return typeof s=="number"?a=>typeof a=="string"?a:s*a:Array.isArray(s)?a=>typeof a=="string"?a:s[a]:typeof s=="function"?s:()=>{}}function pt(e){return le(e,"spacing",8)}function he(e,t){if(typeof t=="string"||t==null)return t;const r=Math.abs(t),n=e(r);return t>=0?n:typeof n=="number"?-n:`-${n}`}function gr(e,t){return r=>e.reduce((n,i)=>(n[i]=he(t,r),n),{})}function pr(e,t,r,n){if(t.indexOf(r)===-1)return null;const i=mr(r),s=gr(i,n),a=e[r];return H(e,a,s)}function yt(e,t){const r=pt(e.theme);return Object.keys(e).map(n=>pr(e,t,n,r)).reduce(se,{})}function k(e){return yt(e,We)}k.propTypes={};k.filterProps=We;function v(e){return yt(e,ze)}v.propTypes={};v.filterProps=ze;function yr(e=8){if(e.mui)return e;const t=pt({spacing:e}),r=(...n)=>(n.length===0?[1]:n).map(s=>{const a=t(s);return typeof a=="number"?`${a}px`:a}).join(" ");return r.mui=!0,r}function Ae(...e){const t=e.reduce((n,i)=>(i.filterProps.forEach(s=>{n[s]=i}),n),{}),r=n=>Object.keys(n).reduce((i,s)=>t[s]?se(i,t[s](n)):i,{});return r.propTypes={},r.filterProps=e.reduce((n,i)=>n.concat(i.filterProps),[]),r}function j(e){return typeof e!="number"?e:`${e}px solid`}function K(e,t){return C({prop:e,themeKey:"borders",transform:t})}const br=K("border",j),xr=K("borderTop",j),wr=K("borderRight",j),$r=K("borderBottom",j),kr=K("borderLeft",j),vr=K("borderColor"),Ar=K("borderTopColor"),Cr=K("borderRightColor"),Sr=K("borderBottomColor"),Or=K("borderLeftColor"),Tr=K("outline",j),Rr=K("outlineColor"),Ce=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=le(e.theme,"shape.borderRadius",4),r=n=>({borderRadius:he(t,n)});return H(e,e.borderRadius,r)}return null};Ce.propTypes={};Ce.filterProps=["borderRadius"];Ae(br,xr,wr,$r,kr,vr,Ar,Cr,Sr,Or,Ce,Tr,Rr);const Se=e=>{if(e.gap!==void 0&&e.gap!==null){const t=le(e.theme,"spacing",8),r=n=>({gap:he(t,n)});return H(e,e.gap,r)}return null};Se.propTypes={};Se.filterProps=["gap"];const Oe=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=le(e.theme,"spacing",8),r=n=>({columnGap:he(t,n)});return H(e,e.columnGap,r)}return null};Oe.propTypes={};Oe.filterProps=["columnGap"];const Te=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=le(e.theme,"spacing",8),r=n=>({rowGap:he(t,n)});return H(e,e.rowGap,r)}return null};Te.propTypes={};Te.filterProps=["rowGap"];const Er=C({prop:"gridColumn"}),Pr=C({prop:"gridRow"}),Br=C({prop:"gridAutoFlow"}),Ir=C({prop:"gridAutoColumns"}),jr=C({prop:"gridAutoRows"}),Kr=C({prop:"gridTemplateColumns"}),Mr=C({prop:"gridTemplateRows"}),_r=C({prop:"gridTemplateAreas"}),Wr=C({prop:"gridArea"});Ae(Se,Oe,Te,Er,Pr,Br,Ir,jr,Kr,Mr,_r,Wr);function Q(e,t){return t==="grey"?t:e}const zr=C({prop:"color",themeKey:"palette",transform:Q}),Lr=C({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Q}),Gr=C({prop:"backgroundColor",themeKey:"palette",transform:Q});Ae(zr,Lr,Gr);function B(e){return e<=1&&e!==0?`${e*100}%`:e}const Hr=C({prop:"width",transform:B}),Le=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=r=>{var n,i;const s=((n=e.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[r])||_e[r];return s?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${s}${e.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:B(r)}};return H(e,e.maxWidth,t)}return null};Le.filterProps=["maxWidth"];const Dr=C({prop:"minWidth",transform:B}),Fr=C({prop:"height",transform:B}),Nr=C({prop:"maxHeight",transform:B}),Ur=C({prop:"minHeight",transform:B});C({prop:"size",cssProperty:"width",transform:B});C({prop:"size",cssProperty:"height",transform:B});const Yr=C({prop:"boxSizing"});Ae(Hr,Le,Dr,Fr,Nr,Ur,Yr);const Xr={border:{themeKey:"borders",transform:j},borderTop:{themeKey:"borders",transform:j},borderRight:{themeKey:"borders",transform:j},borderBottom:{themeKey:"borders",transform:j},borderLeft:{themeKey:"borders",transform:j},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:j},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ce},color:{themeKey:"palette",transform:Q},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Q},backgroundColor:{themeKey:"palette",transform:Q},p:{style:v},pt:{style:v},pr:{style:v},pb:{style:v},pl:{style:v},px:{style:v},py:{style:v},padding:{style:v},paddingTop:{style:v},paddingRight:{style:v},paddingBottom:{style:v},paddingLeft:{style:v},paddingX:{style:v},paddingY:{style:v},paddingInline:{style:v},paddingInlineStart:{style:v},paddingInlineEnd:{style:v},paddingBlock:{style:v},paddingBlockStart:{style:v},paddingBlockEnd:{style:v},m:{style:k},mt:{style:k},mr:{style:k},mb:{style:k},ml:{style:k},mx:{style:k},my:{style:k},margin:{style:k},marginTop:{style:k},marginRight:{style:k},marginBottom:{style:k},marginLeft:{style:k},marginX:{style:k},marginY:{style:k},marginInline:{style:k},marginInlineStart:{style:k},marginInlineEnd:{style:k},marginBlock:{style:k},marginBlockStart:{style:k},marginBlockEnd:{style:k},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Se},rowGap:{style:Te},columnGap:{style:Oe},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:B},maxWidth:{style:Le},minWidth:{transform:B},height:{transform:B},maxHeight:{transform:B},minHeight:{transform:B},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Ge=Xr;function qr(...e){const t=e.reduce((n,i)=>n.concat(Object.keys(i)),[]),r=new Set(t);return e.every(n=>r.size===Object.keys(n).length)}function Zr(e,t){return typeof e=="function"?e(t):e}function Jr(){function e(r,n,i,s){const a={[r]:n,theme:i},o=s[r];if(!o)return{[r]:n};const{cssProperty:c=r,themeKey:d,transform:h,style:l}=o;if(n==null)return null;if(d==="typography"&&n==="inherit")return{[r]:n};const u=ve(i,d)||{};return l?l(a):H(a,n,m=>{let f=xe(u,h,m);return m===f&&typeof m=="string"&&(f=xe(u,h,`${r}${m==="default"?"":it(m)}`,m)),c===!1?f:{[c]:f}})}function t(r){var n;const{sx:i,theme:s={}}=r||{};if(!i)return null;const a=(n=s.unstable_sxConfig)!=null?n:Ge;function o(c){let d=c;if(typeof c=="function")d=c(s);else if(typeof c!="object")return c;if(!d)return null;const h=mt(s.breakpoints),l=Object.keys(h);let u=h;return Object.keys(d).forEach(y=>{const m=Zr(d[y],s);if(m!=null)if(typeof m=="object")if(a[y])u=se(u,e(y,m,s,a));else{const f=H({theme:s},m,w=>({[y]:w}));qr(f,m)?u[y]=t({sx:m,theme:s}):u=se(u,f)}else u=se(u,e(y,m,s,a))}),gt(l,u)}return Array.isArray(i)?i.map(o):o(i)}return t}const bt=Jr();bt.filterProps=["sx"];const xt=bt,Qr=["breakpoints","palette","spacing","shape"];function wt(e={},...t){const{breakpoints:r={},palette:n={},spacing:i,shape:s={}}=e,a=re(e,Qr),o=or(r),c=yr(i);let d=z({breakpoints:o,direction:"ltr",components:{},palette:T({mode:"light"},n),spacing:c,shape:T({},fr,s)},a);return d=t.reduce((h,l)=>z(h,l),d),d.unstable_sxConfig=T({},Ge,a==null?void 0:a.unstable_sxConfig),d.unstable_sx=function(l){return xt({sx:l,theme:this})},d}function Vr(e){return Object.keys(e).length===0}function en(e=null){const t=ae.useContext(ir);return!t||Vr(t)?e:t}const tn=wt();function Zn(e=tn){return en(e)}function He(e,t=0,r=1){return Math.min(Math.max(t,e),r)}function rn(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,i)=>i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function D(e){if(e.type)return e;if(e.charAt(0)==="#")return D(rn(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(V(9,e));let n=e.substring(t+1,e.length-1),i;if(r==="color"){if(n=n.split(" "),i=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(V(10,i))}else n=n.split(",");return n=n.map(s=>parseFloat(s)),{type:r,values:n,colorSpace:i}}function Re(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((i,s)=>s<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function nn(e){e=D(e);const{values:t}=e,r=t[0],n=t[1]/100,i=t[2]/100,s=n*Math.min(i,1-i),a=(d,h=(d+r/30)%12)=>i-s*Math.max(Math.min(h-3,9-h,1),-1);let o="rgb";const c=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(o+="a",c.push(t[3])),Re({type:o,values:c})}function Je(e){e=D(e);let t=e.type==="hsl"||e.type==="hsla"?D(nn(e)).values:e.values;return t=t.map(r=>(e.type!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function sn(e,t){const r=Je(e),n=Je(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function Jn(e,t){return e=D(e),t=He(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Re(e)}function an(e,t){if(e=D(e),t=He(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]*=1-t;return Re(e)}function on(e,t){if(e=D(e),t=He(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return Re(e)}const Qn="$$material";function cn(e,t){return T({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const fn={black:"#000",white:"#fff"},ue=fn,un={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},dn=un,ln={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},N=ln,hn={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},U=hn,mn={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ie=mn,gn={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Y=gn,pn={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},X=pn,yn={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},q=yn,bn=["mode","contrastThreshold","tonalOffset"],Qe={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ue.white,default:ue.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Pe={text:{primary:ue.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ue.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ve(e,t,r,n){const i=n.light||n,s=n.dark||n*1.5;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:t==="light"?e.light=on(e.main,i):t==="dark"&&(e.dark=an(e.main,s)))}function xn(e="light"){return e==="dark"?{main:Y[200],light:Y[50],dark:Y[400]}:{main:Y[700],light:Y[400],dark:Y[800]}}function wn(e="light"){return e==="dark"?{main:N[200],light:N[50],dark:N[400]}:{main:N[500],light:N[300],dark:N[700]}}function $n(e="light"){return e==="dark"?{main:U[500],light:U[300],dark:U[700]}:{main:U[700],light:U[400],dark:U[800]}}function kn(e="light"){return e==="dark"?{main:X[400],light:X[300],dark:X[700]}:{main:X[700],light:X[500],dark:X[900]}}function vn(e="light"){return e==="dark"?{main:q[400],light:q[300],dark:q[700]}:{main:q[800],light:q[500],dark:q[900]}}function An(e="light"){return e==="dark"?{main:ie[400],light:ie[300],dark:ie[700]}:{main:"#ed6c02",light:ie[500],dark:ie[900]}}function Cn(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,i=re(e,bn),s=e.primary||xn(t),a=e.secondary||wn(t),o=e.error||$n(t),c=e.info||kn(t),d=e.success||vn(t),h=e.warning||An(t);function l(f){return sn(f,Pe.text.primary)>=r?Pe.text.primary:Qe.text.primary}const u=({color:f,name:w,mainShade:b=500,lightShade:A=300,darkShade:E=700})=>{if(f=T({},f),!f.main&&f[b]&&(f.main=f[b]),!f.hasOwnProperty("main"))throw new Error(V(11,w?` (${w})`:"",b));if(typeof f.main!="string")throw new Error(V(12,w?` (${w})`:"",JSON.stringify(f.main)));return Ve(f,"light",A,n),Ve(f,"dark",E,n),f.contrastText||(f.contrastText=l(f.main)),f},y={dark:Pe,light:Qe};return z(T({common:T({},ue),mode:t,primary:u({color:s,name:"primary"}),secondary:u({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:u({color:o,name:"error"}),warning:u({color:h,name:"warning"}),info:u({color:c,name:"info"}),success:u({color:d,name:"success"}),grey:dn,contrastThreshold:r,getContrastText:l,augmentColor:u,tonalOffset:n},y[t]),i)}const Sn=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function On(e){return Math.round(e*1e5)/1e5}const et={textTransform:"uppercase"},tt='"Roboto", "Helvetica", "Arial", sans-serif';function Tn(e,t){const r=typeof t=="function"?t(e):t,{fontFamily:n=tt,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:a=400,fontWeightMedium:o=500,fontWeightBold:c=700,htmlFontSize:d=16,allVariants:h,pxToRem:l}=r,u=re(r,Sn),y=i/14,m=l||(b=>`${b/d*y}rem`),f=(b,A,E,F,G)=>T({fontFamily:n,fontWeight:b,fontSize:m(A),lineHeight:E},n===tt?{letterSpacing:`${On(F/A)}em`}:{},G,h),w={h1:f(s,96,1.167,-1.5),h2:f(s,60,1.2,-.5),h3:f(a,48,1.167,0),h4:f(a,34,1.235,.25),h5:f(a,24,1.334,0),h6:f(o,20,1.6,.15),subtitle1:f(a,16,1.75,.15),subtitle2:f(o,14,1.57,.1),body1:f(a,16,1.5,.15),body2:f(a,14,1.43,.15),button:f(o,14,1.75,.4,et),caption:f(a,12,1.66,.4),overline:f(a,12,2.66,1,et),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return z(T({htmlFontSize:d,pxToRem:m,fontFamily:n,fontSize:i,fontWeightLight:s,fontWeightRegular:a,fontWeightMedium:o,fontWeightBold:c},w),u,{clone:!1})}const Rn=.2,En=.14,Pn=.12;function $(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Rn})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${En})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Pn})`].join(",")}const Bn=["none",$(0,2,1,-1,0,1,1,0,0,1,3,0),$(0,3,1,-2,0,2,2,0,0,1,5,0),$(0,3,3,-2,0,3,4,0,0,1,8,0),$(0,2,4,-1,0,4,5,0,0,1,10,0),$(0,3,5,-1,0,5,8,0,0,1,14,0),$(0,3,5,-1,0,6,10,0,0,1,18,0),$(0,4,5,-2,0,7,10,1,0,2,16,1),$(0,5,5,-3,0,8,10,1,0,3,14,2),$(0,5,6,-3,0,9,12,1,0,3,16,2),$(0,6,6,-3,0,10,14,1,0,4,18,3),$(0,6,7,-4,0,11,15,1,0,4,20,3),$(0,7,8,-4,0,12,17,2,0,5,22,4),$(0,7,8,-4,0,13,19,2,0,5,24,4),$(0,7,9,-4,0,14,21,2,0,5,26,4),$(0,8,9,-5,0,15,22,2,0,6,28,5),$(0,8,10,-5,0,16,24,2,0,6,30,5),$(0,8,11,-5,0,17,26,2,0,6,32,5),$(0,9,11,-5,0,18,28,2,0,7,34,6),$(0,9,12,-6,0,19,29,2,0,7,36,6),$(0,10,13,-6,0,20,31,3,0,8,38,7),$(0,10,13,-6,0,21,33,3,0,8,40,7),$(0,10,14,-6,0,22,35,3,0,8,42,7),$(0,11,14,-7,0,23,36,3,0,9,44,8),$(0,11,15,-7,0,24,38,3,0,9,46,8)],In=Bn,jn=["duration","easing","delay"],Kn={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Mn={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function rt(e){return`${Math.round(e)}ms`}function _n(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Wn(e){const t=T({},Kn,e.easing),r=T({},Mn,e.duration);return T({getAutoHeightDuration:_n,create:(i=["all"],s={})=>{const{duration:a=r.standard,easing:o=t.easeInOut,delay:c=0}=s;return re(s,jn),(Array.isArray(i)?i:[i]).map(d=>`${d} ${typeof a=="string"?a:rt(a)} ${o} ${typeof c=="string"?c:rt(c)}`).join(",")}},e,{easing:t,duration:r})}const zn={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Ln=zn,Gn=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Vn(e={},...t){const{mixins:r={},palette:n={},transitions:i={},typography:s={}}=e,a=re(e,Gn);if(e.vars)throw new Error(V(18));const o=Cn(n),c=wt(e);let d=z(c,{mixins:cn(c.breakpoints,r),palette:o,shadows:In.slice(),typography:Tn(o,s),transitions:Wn(i),zIndex:T({},Ln)});return d=z(d,a),d=t.reduce((h,l)=>z(h,l),d),d.unstable_sxConfig=T({},Ge,a==null?void 0:a.unstable_sxConfig),d.unstable_sx=function(l){return xt({sx:l,theme:this})},d}export{ir as T,re as _,Qn as a,Z as b,Vn as c,Ge as d,xt as e,V as f,Fn as g,Zn as h,Nn as i,it as j,wt as k,z as l,$t as m,H as n,qn as o,pt as p,Xn as q,Qt as r,Un as s,he as t,en as u,on as v,Yn as w,Jn as x,an as y,Mn as z};
