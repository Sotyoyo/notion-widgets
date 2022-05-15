var O=Object.defineProperty,U=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var L=(e,a,t)=>a in e?O(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,p=(e,a)=>{for(var t in a||(a={}))Z.call(a,t)&&L(e,t,a[t]);if(F)for(var t of F(a))J.call(a,t)&&L(e,t,a[t]);return e},k=(e,a)=>U(e,G(a));import{O as g,a as E,S as X,aj as Y,c as o,h as d,V as q,g as B,ac as T,ae as K,au as ee,av as te,r as $,aw as ae,$ as ne,U as ie,f as C,ao as Q,k as f,l as R,m as c,d as s,j,ax as x,ap as y,t as le,F as se,H as oe}from"./index.a487e405.js";import{Q as ue}from"./QCard.568c79e5.js";var re=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:t}}=B(),i=E(X);E(Y,()=>{console.error("QPage needs to be child of QPageContainer")});const u=o(()=>{const l=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const v=i.isContainer.value===!0?i.containerHeight.value:t.screen.height;return e.styleFn(l,v)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-l+"px":t.screen.height===0?l!==0?`calc(100vh - ${l}px)`:"100vh":t.screen.height-l+"px"}}),r=o(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:r.value,style:u.value},q(a.default))}});const ce=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],de=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var b=g({name:"QSkeleton",props:k(p({},T),{tag:{type:String,default:"div"},type:{type:String,validator:e=>ce.includes(e),default:"rect"},animation:{type:String,validator:e=>de.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String}),setup(e,{slots:a}){const t=B(),i=K(e,t.proxy.$q),u=o(()=>{const l=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:l[0],height:l[1]}}),r=o(()=>`q-skeleton q-skeleton--${i.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>d(e.tag,{class:r.value,style:u.value},q(a.default))}}),I=g({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const t=o(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>d("div",{class:t.value},q(a.default))}}),P=g({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const t=o(()=>parseInt(e.lines,10)),i=o(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),u=o(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>d("div",{style:u.value,class:i.value},q(a.default))}}),ve=g({name:"QItem",props:k(p(p({},T),ee),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:a,emit:t}){const{proxy:{$q:i}}=B(),u=K(e,i),{hasRouterLink:r,hasLink:l,linkProps:v,linkClass:z,linkTag:D,navigateToRouterLink:N}=te(),h=$(null),_=$(null),S=o(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=o(()=>e.disable!==!0&&S.value===!0),H=o(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(l.value===!0?z.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),V=o(()=>{if(e.insetLevel===void 0)return null;const n=i.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function A(n){m.value===!0&&(_.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===h.value?_.value.focus():document.activeElement===_.value&&h.value.focus()),r.value===!0&&N(n),t("click",n))}function W(n){if(m.value===!0&&ae(n,13)===!0){ne(n),n.qKeyEvent=!0;const w=new MouseEvent("click",n);w.qKeyEvent=!0,h.value.dispatchEvent(w)}t("keyup",n)}function M(){const n=ie(a.default,[]);return m.value===!0&&n.unshift(d("div",{class:"q-focus-helper",tabindex:-1,ref:_})),n}return()=>{const n={ref:h,class:H.value,style:V.value,onClick:A,onKeyup:W};return m.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,v.value)):S.value===!0&&(n["aria-disabled"]="true"),d(D.value,n,M())}}});const me=C({name:"TinyWidget",setup(){return{}}});function fe(e,a,t,i,u,r){return f(),R(ue,null,{default:c(()=>[s(ve,null,{default:c(()=>[s(I,{avatar:""},{default:c(()=>[s(b,{type:"QAvatar"})]),_:1}),s(I,null,{default:c(()=>[s(P,null,{default:c(()=>[s(b,{type:"text"})]),_:1}),s(P,{caption:""},{default:c(()=>[s(b,{type:"text"})]),_:1})]),_:1})]),_:1}),s(b,{width:"200px",height:"160px",square:""})]),_:1})}var ge=Q(me,[["render",fe]]);const he=C({name:"VolumnComponent",props:{title:{type:String,required:!0}},components:{TinyWidget:ge},setup(){return{cards:$([{id:"1",url:"https://i.ibb.co/9T1jw6M/1.png"},{id:"2",url:"https://i.ibb.co/cLK6b5Z/2.png"},{id:"3",url:"https://i.ibb.co/64HjTV9/3.png"},{id:"4",url:"https://i.ibb.co/DKzNHGf/4.png"}])}}}),_e={class:"bg-grey-2 overflow-hidden q-py-md"},pe={class:"q-px-md text-body1"},be={class:"q-gutter-md q-px-md flex"};function ye(e,a,t,i,u,r){const l=j("tiny-widget");return f(),x("div",_e,[y("p",pe,le(e.title),1),y("div",be,[(f(!0),x(se,null,oe(e.cards,v=>(f(),x("div",{class:"inline-flex",key:v.id},[s(l)]))),128))])])}var qe=Q(he,[["render",ye]]);const ke=C({name:"IndexPage",components:{VolumnComponent:qe},setup(){return{}}}),xe=y("p",{class:"text-h4"},"Explore Widgets",-1),$e={class:""};function Be(e,a,t,i,u,r){const l=j("volumn-component");return f(),R(re,{class:"q-pa-lg"},{default:c(()=>[xe,y("div",$e,[s(l,{class:"q-my-md",title:"\u5929\u6C14\u7C7B\u2601\uFE0F"}),s(l,{class:"q-my-md",title:"\u65F6\u95F4\u7C7B\u2601\uFE0F"}),s(l,{class:"q-my-md",title:"\u5F15\u5BFC\u5DE5\u5177\u7C7B\u2601\uFE0F"})])]),_:1})}var we=Q(ke,[["render",Be]]);export{we as default};
