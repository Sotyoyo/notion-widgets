import{r as D,o as j,d as F,a as v,w as L,c as S,b as p,e as h,f as E,Q as k,g as T,h as q,t as N,n as U,i as Q,j as g,k as z,p as H,l as W,m as _,q as G,s as J,u as K,v as M,x as X,y as Y,z as Z,A as ee,B as te,C as se}from"./vendor.983ae3f4.js";const ae=function(){const s=document.createElement("link").relList;return s&&s.supports&&s.supports("modulepreload")?"modulepreload":"preload"}(),w={},re="/",m=function(s,o){return!o||o.length===0?s():Promise.all(o.map(a=>{if(a=`${re}${a}`,a in w)return;w[a]=!0;const t=a.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":ae,t||(n.as="script",n.crossOrigin=""),n.href=a,document.head.appendChild(n),t)return new Promise((u,l)=>{n.addEventListener("load",u),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>s())};function I(e=60,s,o,a=!1){console.log(Number(e));let t=D({seconds:String(e),millSeconds10:"999",timer:null});function c(){s&&s(),i(),t.seconds=String(e),t.timer=setInterval(()=>{t.millSeconds10=String(Number.parseInt(t.millSeconds10,10)-10).padStart(3,"0"),Number.parseInt(t.millSeconds10,10)<=0&&(t.seconds=String(Number.parseInt(t.seconds,10)-1),Number.parseInt(t.seconds,10)<=0?t.millSeconds10="000":t.millSeconds10="999"),Number.parseInt(t.seconds,10)<=0&&(a?(t.seconds=String(e),t.millSeconds10="999"):(i(),o&&o()))},10)}function n(){i()}function u(){i(),t.timer=setInterval(()=>{t.millSeconds10=String(Number.parseInt(t.millSeconds10,10)-10).padStart(3,"0"),Number.parseInt(t.millSeconds10,10)<=0&&(t.seconds=String(Number.parseInt(t.seconds,10)-1),Number.parseInt(t.seconds,10)<=0?t.millSeconds10="000":t.millSeconds10="999"),Number.parseInt(t.seconds,10)<=0&&(a?(t.seconds=String(e),t.millSeconds10="999"):i())},10)}function l(){i()}function i(){t.timer&&clearInterval(t.timer)}return j(()=>{i()}),{state:t,start:c,pause:n,resume:u,stop:l}}var C=(e,s)=>{const o=e.__vccOpts||e;for(const[a,t]of s)o[a]=t;return o};function oe(e){switch(e){case"hhsid1":return{name:"pink-2",deepest:"#FA1B5E",middle:"#FA6693",lightest:"#FB99B6"};case"ggsid1":return{name:"green-2",deepest:"#a6cd8e",middle:"#d6d38e",lightest:"#D6D38E"};case"kksid1":return{name:"blue-2",deepest:"#6E7BB0",middle:"#6EA8B0",lightest:"#8DBAA9"};case"vanli":return{name:"purple-2",deepest:"#A7A7DB",middle:"#D6BCFF",lightest:"#E5DEEB"};default:return{deepest:"#FA1B5E",middle:"#FA6693",lightest:"#FB99B6"}}}const ne=F({name:"TomatoClock",components:{},setup(){const e=v(""),s=v(!1),o=v("BEFORE"),a=v("NOT_START"),t=v(null);function c(d,R=window.location.href){d=d.replace(/[\[\]]/g,"\\$&");var y=new RegExp("[?&]"+d+"(=([^&#]*)|&|#|$)"),f=y.exec(R);return f?f[2]?decodeURIComponent(f[2].replace(/\+/g," ")):"":null}const n=oe(c("cclor")),u={"--color-dee":n.deepest,"--color-mid":n.middle,"--color-lig":n.lightest};let{state:l,start:i,pause:$,resume:P,stop:B}=I(Number(e.value),function(){s.value=!1},function(){o.value="BEFORE",a.value="NOT_START",t.value&&t.value.play(),s.value=!0}),r=D({inputNumber:e,screenState:o,startState:a,timeState:l,startReal:i,pauseReal:$,resumeReal:P,stopReal:B,go:()=>{i(),a.value="STARTED",o.value="AFTER"},pause:()=>null,resume:()=>null,goBack:()=>{B(),a.value="NOT_STARTED",o.value="BEFORE",e.value=""},goNext:()=>{o.value="AFTER"},over:s});return L(e,()=>{const{state:d,start:R,pause:y,resume:f,stop:V}=I(Number(e.value),function(){r.over=!1},function(){r.screenState="BEFORE",r.startState="NOT_START",r.inputNumber="",t.value&&t.value.play(),r.over=!0});r.timeState=d,r.startReal=R,r.pauseReal=y,r.resumeReal=f,r.stopReal=V,r.go=()=>{r.startReal(),r.startState="STARTED",r.screenState="AFTER"},r.pause=()=>{console.log("- call pause"),r.pauseReal(),r.startState="PAUSED"},r.resume=()=>{console.log("- call resume"),r.resumeReal(),r.startState="STARTED"},r.goBack=()=>{r.stopReal(),r.startState="NOT_STARTED",r.screenState="BEFORE",r.inputNumber=""}}),{data:r,inputNumber:e,audioRef:t,color:n,styleVar:u}},mounted(){this.audioRef=this.$refs.timeoutRef}}),le=e=>(H("data-v-35d808f8"),e=e(),W(),e),ie=g(" \uE649 "),ce=g(" \u91CD\u65B0\u8BA1\u65F6 "),ue={key:1,class:"inner inner-before flex column items-center justify-around"},de=z('<div class="preview-area flex items-center justify-center relative" data-v-35d808f8><div class="circle1 flex items-center justify-center relative" data-v-35d808f8></div><div class="circle2 flex items-center justify-center absolute" data-v-35d808f8><span data-v-35d808f8><span class="text" data-v-35d808f8>0</span><span class="text-body2" data-v-35d808f8>.00</span></span></div></div>',1),pe=g("Go"),me={key:2,class:"inner inner-after flex column items-center justify-center relative"},fe=le(()=>p("div",{class:"circle1 flex items-center justify-center relative"},null,-1)),ve={class:"text"},_e={class:"text-body2"},Se=g(" \u70B9\u51FB\u6682\u505C/\u7EE7\u7EED "),he={ref:"timeoutRef",src:"http://afan.goea.xyz/timeout.mp3"};function Ee(e,s,o,a,t,c){return _(),S("div",{class:"clock-container q-mx-auto",style:Q(e.styleVar)},[p("div",{class:U({"square flex items-center justify-center relative-position":!0,blink:e.data.over})},[e.data.screenState==="AFTER"?(_(),S("i",{key:0,onClick:s[0]||(s[0]=(...n)=>e.data.goBack&&e.data.goBack(...n)),class:"icon-back iconfont absolute-top-left cursor-pointer"},[ie,h(k,null,{default:E(()=>[ce]),_:1})])):T("",!0),e.data.screenState==="BEFORE"?(_(),S("div",ue,[de,h(q,{rounded:"",dense:"",outlined:"",modelValue:e.inputNumber,"onUpdate:modelValue":s[1]||(s[1]=n=>e.inputNumber=n),placeholder:"\u8F93\u5165\u65F6\u95F4(\u79D2)",class:"input-time-area q-mb-md",color:e.color.name},{append:E(()=>[h(G,{class:"btn-go",dense:"",rounded:"",flat:"",padding:"4px 12px",onClick:e.data.go},{default:E(()=>[pe]),_:1},8,["onClick"])]),_:1},8,["modelValue","color"])])):T("",!0),e.data.screenState==="AFTER"?(_(),S("div",me,[fe,p("div",{class:"circle2 flex items-center justify-center cursor-pointer absolute",onClick:s[2]||(s[2]=()=>{e.data.startState==="PAUSED"?e.data.resume():e.data.startState==="STARTED"&&e.data.pause()})},[p("span",null,[p("span",ve,N(e.data.timeState.seconds),1),p("span",_e,"."+N(e.data.timeState.millSeconds10.slice(0,2)),1),h(k,null,{default:E(()=>[Se]),_:1})])])])):T("",!0)],2),p("audio",he,null,512)],4)}var O=C(ne,[["render",Ee],["__scopeId","data-v-35d808f8"]]),ge=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const Re=F({name:"App",components:{TomatoClock:O}});function ye(e,s,o,a,t,c){const n=K("tomato-clock");return _(),J(n)}var Te=C(Re,[["render",ye]]),b=M(()=>X());const be=[{path:"/",component:()=>m(()=>import("./MainLayout.1255e9b7.js"),["assets/MainLayout.1255e9b7.js","assets/MainLayout.846d53a1.css","assets/vendor.983ae3f4.js","assets/QCard.944472f6.js"]),children:[{path:"",component:()=>m(()=>import("./IndexPage.a2537b7d.js"),["assets/IndexPage.a2537b7d.js","assets/vendor.983ae3f4.js","assets/QCard.944472f6.js"])}]},{path:"/widgets/tomatoClock",component:()=>m(()=>Promise.resolve().then(function(){return ge}),void 0)},{path:"/:catchAll(.*)*",component:()=>m(()=>import("./ErrorNotFound.289bd43e.js"),["assets/ErrorNotFound.289bd43e.js","assets/vendor.983ae3f4.js"])}];var A=Y(function(){return Z({scrollBehavior:()=>({left:0,top:0}),routes:be,history:ee("/")})});async function Ae(e,s){const o=e(Te);o.use(te,s);const a=typeof b=="function"?await b({}):b;o.use(a);const t=typeof A=="function"?await A({store:a}):A;return a.use(()=>({router:t})),{app:o,store:a,router:t}}var Be={config:{}};const ke="/";async function Ne({app:e,router:s,store:o},a){let t=!1;const c=l=>{try{return s.resolve(l).href}catch{}return Object(l)===l?null:l},n=l=>{if(t=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const i=c(l);i!==null&&(window.location.href=i,window.location.reload())},u=window.location.href.replace(window.location.origin,"");for(let l=0;t===!1&&l<a.length;l++)try{await a[l]({app:e,router:s,store:o,ssrContext:null,redirect:n,urlPath:u,publicPath:ke})}catch(i){if(i&&i.url){n(i.url);return}console.error("[Quasar] boot error:",i);return}t!==!0&&(e.use(s),e.mount("#q-app"))}Ae(se,Be).then(e=>Promise.all([m(()=>import("./i18n.287fbbd4.js"),["assets/i18n.287fbbd4.js","assets/vendor.983ae3f4.js"]),m(()=>import("./axios.641cafb0.js"),["assets/axios.641cafb0.js","assets/vendor.983ae3f4.js"])]).then(s=>{const o=s.map(a=>a.default).filter(a=>typeof a=="function");Ne(e,o)}));export{C as _};
