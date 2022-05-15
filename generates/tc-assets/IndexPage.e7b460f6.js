var G=Object.defineProperty,O=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var L=(e,a,t)=>a in e?G(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,p=(e,a)=>{for(var t in a||(a={}))Y.call(a,t)&&L(e,t,a[t]);if(F)for(var t of F(a))Z.call(a,t)&&L(e,t,a[t]);return e},k=(e,a)=>O(e,U(a));import{j as g,a as E,c as o,h as d,s as q,g as B,q as J,Y as X,N as T,P as K,ac as ee,ad as te,r as $,ae,y as ne,p as ie,a2 as C,a1 as Q,a4 as f,a5 as R,a6 as c,d as s,a3 as z,af as x,a7 as b,ag as le,F as se,ah as oe}from"./index.1c45b21e.js";import{Q as ue}from"./QCard.ad458cec.js";var re=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:t}}=B(),i=E(J);E(X,()=>{console.error("QPage needs to be child of QPageContainer")});const u=o(()=>{const l=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const v=i.isContainer.value===!0?i.containerHeight.value:t.screen.height;return e.styleFn(l,v)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-l+"px":t.screen.height===0?l!==0?`calc(100vh - ${l}px)`:"100vh":t.screen.height-l+"px"}}),r=o(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:r.value,style:u.value},q(a.default))}});const ce=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],de=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var y=g({name:"QSkeleton",props:k(p({},T),{tag:{type:String,default:"div"},type:{type:String,validator:e=>ce.includes(e),default:"rect"},animation:{type:String,validator:e=>de.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String}),setup(e,{slots:a}){const t=B(),i=K(e,t.proxy.$q),u=o(()=>{const l=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:l[0],height:l[1]}}),r=o(()=>`q-skeleton q-skeleton--${i.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>d(e.tag,{class:r.value,style:u.value},q(a.default))}}),I=g({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const t=o(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>d("div",{class:t.value},q(a.default))}}),P=g({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const t=o(()=>parseInt(e.lines,10)),i=o(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),u=o(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>d("div",{style:u.value,class:i.value},q(a.default))}}),ve=g({name:"QItem",props:k(p(p({},T),ee),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:a,emit:t}){const{proxy:{$q:i}}=B(),u=K(e,i),{hasRouterLink:r,hasLink:l,linkProps:v,linkClass:N,linkTag:j,navigateToRouterLink:D}=te(),h=$(null),_=$(null),S=o(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=o(()=>e.disable!==!0&&S.value===!0),A=o(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(l.value===!0?N.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),H=o(()=>{if(e.insetLevel===void 0)return null;const n=i.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function V(n){m.value===!0&&(_.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===h.value?_.value.focus():document.activeElement===_.value&&h.value.focus()),r.value===!0&&D(n),t("click",n))}function W(n){if(m.value===!0&&ae(n,13)===!0){ne(n),n.qKeyEvent=!0;const w=new MouseEvent("click",n);w.qKeyEvent=!0,h.value.dispatchEvent(w)}t("keyup",n)}function M(){const n=ie(a.default,[]);return m.value===!0&&n.unshift(d("div",{class:"q-focus-helper",tabindex:-1,ref:_})),n}return()=>{const n={ref:h,class:A.value,style:H.value,onClick:V,onKeyup:W};return m.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,v.value)):S.value===!0&&(n["aria-disabled"]="true"),d(j.value,n,M())}}});const me=C({name:"TinyWidget",setup(){return{}}});function fe(e,a,t,i,u,r){return f(),R(ue,null,{default:c(()=>[s(ve,null,{default:c(()=>[s(I,{avatar:""},{default:c(()=>[s(y,{type:"QAvatar"})]),_:1}),s(I,null,{default:c(()=>[s(P,null,{default:c(()=>[s(y,{type:"text"})]),_:1}),s(P,{caption:""},{default:c(()=>[s(y,{type:"text"})]),_:1})]),_:1})]),_:1}),s(y,{width:"200px",height:"160px",square:""})]),_:1})}var ge=Q(me,[["render",fe]]);const he=C({name:"VolumnComponent",props:{title:{type:String,required:!0}},components:{TinyWidget:ge},setup(){return{cards:$([{id:"1",url:"https://i.ibb.co/9T1jw6M/1.png"},{id:"2",url:"https://i.ibb.co/cLK6b5Z/2.png"},{id:"3",url:"https://i.ibb.co/64HjTV9/3.png"},{id:"4",url:"https://i.ibb.co/DKzNHGf/4.png"}])}}}),_e={class:"bg-grey-2 overflow-hidden q-py-md"},pe={class:"q-px-md text-body1"},ye={class:"q-gutter-md q-px-md flex"};function be(e,a,t,i,u,r){const l=z("tiny-widget");return f(),x("div",_e,[b("p",pe,le(e.title),1),b("div",ye,[(f(!0),x(se,null,oe(e.cards,v=>(f(),x("div",{class:"inline-flex",key:v.id},[s(l)]))),128))])])}var qe=Q(he,[["render",be]]);const ke=C({name:"IndexPage",components:{VolumnComponent:qe},setup(){return{}}}),xe=b("p",{class:"text-h4"},"Explore Widgets",-1),$e={class:""};function Be(e,a,t,i,u,r){const l=z("volumn-component");return f(),R(re,{class:"q-pa-lg"},{default:c(()=>[xe,b("div",$e,[s(l,{class:"q-my-md",title:"\u5929\u6C14\u7C7B\u2601\uFE0F"}),s(l,{class:"q-my-md",title:"\u65F6\u95F4\u7C7B\u2601\uFE0F"}),s(l,{class:"q-my-md",title:"\u5F15\u5BFC\u5DE5\u5177\u7C7B\u2601\uFE0F"})])]),_:1})}var we=Q(ke,[["render",Be]]);export{we as default};
