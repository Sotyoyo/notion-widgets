var yt=Object.defineProperty,bt=Object.defineProperties;var wt=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var _t=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable;var De=(e,i,n)=>i in e?yt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,R=(e,i)=>{for(var n in i||(i={}))_t.call(i,n)&&De(e,n,i[n]);if(Me)for(var n of Me(i))qt.call(i,n)&&De(e,n,i[n]);return e},K=(e,i)=>bt(e,wt(i));import{r as C,f as Je,o as Z,j as W,n as re,k as N,l as ke,h as b,g as Y,m as H,a as Ee,c as v,w as S,p as St,q as se,s as ue,t as Ct,Q as xt,H as He,u as D,v as Ze,x as et,y as tt,z as zt,A as Tt,B as Lt,C as kt,D as ie,E as pe,G as Ve,I as ye,J as Te,K as be,L as Et,M as $t,N as Bt,O as Ot,P as Pt,R as Ft,S as Mt,U as ae,V as Dt,W as Qe,X as it,Y as Ht,Z as Vt,_ as we,$ as oe,b as Qt,a0 as Rt,a1 as Wt,a2 as At,a3 as Nt,a4 as It,a5 as jt,a6 as B,d as k,a7 as O,a8 as ne,a9 as _e,aa as Xt,ab as Yt}from"./index.992e9e92.js";import{Q as Re}from"./QCard.0646d3c1.js";function Ut(){const e=C(!Je.value);return e.value===!1&&Z(()=>{e.value=!0}),e}const at=typeof ResizeObserver!="undefined",We=at===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Le=W({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let n=null,r,t={width:-1,height:-1};function o(u){u===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(clearTimeout(n),n=null,r){const{offsetWidth:u,offsetHeight:a}=r;(u!==t.width||a!==t.height)&&(t={width:u,height:a},i("resize",t))}}const d=Y();if(Object.assign(d.proxy,{trigger:o}),at===!0){let u;return Z(()=>{re(()=>{r=d.proxy.$el.parentNode,r&&(u=new ResizeObserver(o),u.observe(r),s())})}),N(()=>{clearTimeout(n),u!==void 0&&(u.disconnect!==void 0?u.disconnect():r&&u.unobserve(r))}),ke}else{let x=function(){clearTimeout(n),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",o,H.passive),a=void 0)},y=function(){x(),r&&r.contentDocument&&(a=r.contentDocument.defaultView,a.addEventListener("resize",o,H.passive),s())};const u=Ut();let a;return Z(()=>{re(()=>{r=d.proxy.$el,r&&y()})}),N(x),()=>{if(u.value===!0)return b("object",{style:We.style,tabindex:-1,type:"text/html",data:We.url,"aria-hidden":"true",onLoad:y})}}}}),Kt=W({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:n}){const{proxy:{$q:r}}=Y(),t=Ee(se,()=>{console.error("QHeader needs to be child of QLayout")}),o=C(parseInt(e.heightHint,10)),s=C(!0),d=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),u=v(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return s.value===!0?o.value:0;const f=o.value-t.scroll.value.position;return f>0?f:0}),a=v(()=>e.modelValue!==!0||d.value===!0&&s.value!==!0),x=v(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),y=v(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=v(()=>{const f=t.rows.value.top,L={};return f[0]==="l"&&t.left.space===!0&&(L[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(L[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function c(f,L){t.update("header",f,L)}function _(f,L){f.value!==L&&(f.value=L)}function z({height:f}){_(o,f),c("size",f)}function p(f){x.value===!0&&_(s,!0),n("focusin",f)}S(()=>e.modelValue,f=>{c("space",f),_(s,!0),t.animate()}),S(u,f=>{c("offset",f)}),S(()=>e.reveal,f=>{f===!1&&_(s,e.modelValue)}),S(s,f=>{t.animate(),n("reveal",f)}),S(t.scroll,f=>{e.reveal===!0&&_(s,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const F={};return t.instances.header=F,e.modelValue===!0&&c("size",o.value),c("space",e.modelValue),c("offset",u.value),N(()=>{t.instances.header===F&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const f=St(i.default,[]);return e.elevated===!0&&f.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(b(Le,{debounce:0,onResize:z})),b("header",{class:y.value,style:w.value,onFocusin:p},f)}}}),Ae=W({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:i}){const n=v(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>b(e.tag,{class:n.value},ue(i.default))}});const Gt={ratio:[String,Number]};function Jt(e,i){return v(()=>{const n=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const Zt=16/9;var ei=W({name:"QImg",props:K(R({},Gt),{src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},width:String,height:String,initialRatio:{type:[Number,String],default:Zt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String}),emits:["load","error"],setup(e,{slots:i,emit:n}){const r=C(e.initialRatio),t=Jt(e,r);let o;const s=[C(null),C(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],d=C(0),u=C(!1),a=C(!1),x=v(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),y=v(()=>({width:e.width,height:e.height})),w=v(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),c=v(()=>K(R({},e.imgStyle),{objectFit:e.fit,objectPosition:e.position}));S(()=>_(),z);function _(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function z(h){if(clearTimeout(o),a.value=!1,h===null){u.value=!1,s[0].value=null,s[1].value=null;return}u.value=!0,s[d.value].value=h}function p({target:h}){o!==null&&(clearTimeout(o),r.value=h.naturalHeight===0?.5:h.naturalWidth/h.naturalHeight,F(h,1))}function F(h,E){o===null||E===1e3||(h.complete===!0?f(h):o=setTimeout(()=>{F(h,E+1)},50))}function f(h){o!==null&&(d.value=d.value===1?0:1,s[d.value].value=null,u.value=!1,a.value=!1,n("load",h.currentSrc||h.src))}function L(h){clearTimeout(o),u.value=!1,a.value=!0,s[0].value=null,s[1].value=null,n("error",h)}function m(h,E){return b("div",{class:"q-img__container absolute-full",key:h},E)}function q(h){const E=s[h].value,T=R({key:"img_"+h,class:w.value,style:c.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,"aria-hidden":"true",draggable:e.draggable},E);return d.value===h?(T.class+=" q-img__image--waiting",Object.assign(T,{onLoad:p,onError:L})):T.class+=" q-img__image--loaded",m("img"+h,b("img",T))}function M(){return u.value!==!0?b("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ue(i[a.value===!0?"error":"default"])):b("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[b(xt,{color:e.spinnerColor,size:e.spinnerSize})])}return z(_()),N(()=>{clearTimeout(o),o=null}),()=>{const h=[];return t.value!==null&&h.push(b("div",{key:"filler",style:t.value})),a.value!==!0&&(s[0].value!==null&&h.push(q(0)),s[1].value!==null&&h.push(q(1))),h.push(b(Ct,{name:"q-transition--fade"},M)),b("div",{class:x.value,style:y.value,role:"img","aria-label":e.alt},h)}}});function ti(e,i,n){let r;function t(){r!==void 0&&(He.remove(r),r=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){r={condition:()=>n.value===!0,handler:i},He.add(r)}}}let G=0,qe,Se,J,Ce=!1,Ne,Ie,X;function ii(e){ai(e)&&tt(e)}function ai(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const i=zt(e),n=e.shiftKey&&!e.deltaX,r=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||r?e.deltaY:e.deltaX;for(let o=0;o<i.length;o++){const s=i[o];if(Tt(s,r))return r?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function je(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function le(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:i}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(J===void 0||i!==window.innerHeight)&&(J=n-i,document.scrollingElement.scrollTop=r),r>J&&(document.scrollingElement.scrollTop-=Math.ceil((r-J)/8))}))}function Xe(e){const i=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:t}=window.getComputedStyle(i);qe=Ze(window),Se=et(window),Ne=i.style.left,Ie=i.style.top,i.style.left=`-${qe}px`,i.style.top=`-${Se}px`,t!=="hidden"&&(t==="scroll"||i.scrollWidth>window.innerWidth)&&i.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||i.scrollHeight>window.innerHeight)&&i.classList.add("q-body--force-scrollbar-y"),i.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,D.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",le,H.passiveCapture),window.visualViewport.addEventListener("scroll",le,H.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",je,H.passiveCapture))}D.is.desktop===!0&&D.is.mac===!0&&window[`${e}EventListener`]("wheel",ii,H.notPassive),e==="remove"&&(D.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",le,H.passiveCapture),window.visualViewport.removeEventListener("scroll",le,H.passiveCapture)):window.removeEventListener("scroll",je,H.passiveCapture)),i.classList.remove("q-body--prevent-scroll"),i.classList.remove("q-body--force-scrollbar-x"),i.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,i.style.left=Ne,i.style.top=Ie,window.scrollTo(qe,Se),J=void 0)}function oi(e){let i="add";if(e===!0){if(G++,X!==void 0){clearTimeout(X),X=void 0;return}if(G>1)return}else{if(G===0||(G--,G>0))return;if(i="remove",D.is.ios===!0&&D.is.nativeMobile===!0){clearTimeout(X),X=setTimeout(()=>{Xe(i),X=void 0},100);return}}Xe(i)}function ni(){let e;return{preventBodyScroll(i){i!==e&&(e!==void 0||i===!0)&&(e=i,oi(i))}}}const $e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},li=Object.keys($e);$e.all=!0;function Ye(e){const i={};for(const n of li)e[n]===!0&&(i[n]=!0);return Object.keys(i).length===0?$e:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}function Ue(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function xe(e,i,n){const r=Te(e);let t,o=r.left-i.event.x,s=r.top-i.event.y,d=Math.abs(o),u=Math.abs(s);const a=i.direction;a.horizontal===!0&&a.vertical!==!0?t=o<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?t=s<0?"up":"down":a.up===!0&&s<0?(t="up",d>u&&(a.left===!0&&o<0?t="left":a.right===!0&&o>0&&(t="right"))):a.down===!0&&s>0?(t="down",d>u&&(a.left===!0&&o<0?t="left":a.right===!0&&o>0&&(t="right"))):a.left===!0&&o<0?(t="left",d<u&&(a.up===!0&&s<0?t="up":a.down===!0&&s>0&&(t="down"))):a.right===!0&&o>0&&(t="right",d<u&&(a.up===!0&&s<0?t="up":a.down===!0&&s>0&&(t="down")));let x=!1;if(t===void 0&&n===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,x=!0,t==="left"||t==="right"?(r.left-=o,d=0,o=0):(r.top-=s,u=0,s=0)}return{synthetic:x,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:r,direction:t,isFirst:i.event.isFirst,isFinal:n===!0,duration:Date.now()-i.event.time,distance:{x:d,y:u},offset:{x:o,y:s},delta:{x:r.left-i.event.lastX,y:r.top-i.event.lastY}}}}let ri=0;var ze=Lt({name:"touch-pan",beforeMount(e,{value:i,modifiers:n}){if(n.mouse!==!0&&D.has.touch!==!0)return;function r(o,s){n.mouse===!0&&s===!0?tt(o):(n.stop===!0&&ye(o),n.prevent===!0&&Ve(o))}const t={uid:"qvtp_"+ri++,handler:i,modifiers:n,direction:Ye(n),noop:ke,mouseStart(o){Ue(o,t)&&kt(o)&&(ie(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Ue(o,t)){const s=o.target;ie(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,s){if(D.is.firefox===!0&&pe(e,!0),t.lastEvt=o,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const a=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Ve(a),o.cancelBubble===!0&&ye(a),Object.assign(a,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:a}}ye(o)}const{left:d,top:u}=Te(o);t.event={x:d,y:u,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:u}},move(o){if(t.event===void 0)return;const s=Te(o),d=s.left-t.event.x,u=s.top-t.event.y;if(d===0&&u===0)return;t.lastEvt=o;const a=t.event.mouse===!0,x=()=>{r(o,a),n.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Et(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,n.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{_(),c()},50):_()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(o,t.event.mouse);const{payload:c,synthetic:_}=xe(o,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&x(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=_===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||a===!0&&t.modifiers.mouseAllDir===!0){x(),t.event.detected=!0,t.move(o);return}const y=Math.abs(d),w=Math.abs(u);y!==w&&(t.direction.horizontal===!0&&y>w||t.direction.vertical===!0&&y<w||t.direction.up===!0&&y<w&&u<0||t.direction.down===!0&&y<w&&u>0||t.direction.left===!0&&y>w&&d<0||t.direction.right===!0&&y>w&&d>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,s){if(t.event!==void 0){if(be(t,"temp"),D.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(xe(o===void 0?t.lastEvt:o,t).payload);const{payload:d}=xe(o===void 0?t.lastEvt:o,t,!0),u=()=>{t.handler(d)};t.styleCleanup!==void 0?t.styleCleanup(u):u()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,n.mouse===!0&&ie(t,"main",[[e,"mousedown","mouseStart",`passive${n.mouseCapture===!0?"Capture":""}`]]),D.has.touch===!0&&ie(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const n=e.__qtouchpan;n!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&n.end(),n.handler=i.value),n.direction=Ye(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),be(i,"main"),be(i,"temp"),D.is.firefox===!0&&pe(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Ke=150;var si=W({name:"QDrawer",inheritAttrs:!1,props:K(R(R({},$t),Bt),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...Ot,"on-layout","mini-state"],setup(e,{slots:i,emit:n,attrs:r}){const t=Y(),{proxy:{$q:o}}=t,s=Pt(e,o),{preventBodyScroll:d}=ni(),{registerTimeout:u}=Ft(),a=Ee(se,()=>{console.error("QDrawer needs to be child of QLayout")});let x,y,w;const c=C(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),_=v(()=>e.mini===!0&&c.value!==!0),z=v(()=>_.value===!0?e.miniWidth:e.width),p=C(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),F=v(()=>e.persistent!==!0&&(c.value===!0||ot.value===!0));function f(l,g){if(M(),l!==!1&&a.animate(),P(0),c.value===!0){const $=a.instances[ee.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),V(1),a.isContainer.value!==!0&&d(!0)}else V(0),l!==!1&&he(!1);u(()=>{l!==!1&&he(!0),g!==!0&&n("show",l)},Ke)}function L(l,g){h(),l!==!1&&a.animate(),V(0),P(I.value*z.value),me(),g!==!0&&u(()=>{n("hide",l)},Ke)}const{show:m,hide:q}=Mt({showing:p,hideOnRouteChange:F,handleShow:f,handleHide:L}),{addToHistory:M,removeFromHistory:h}=ti(p,q,F),E={belowBreakpoint:c,hide:q},T=v(()=>e.side==="right"),I=v(()=>(o.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),Be=C(0),j=C(!1),ce=C(!1),Oe=C(z.value*I.value),ee=v(()=>T.value===!0?"left":"right"),de=v(()=>p.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),fe=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(T.value?"R":"L")>-1||o.platform.is.ios===!0&&a.isContainer.value===!0),U=v(()=>e.overlay===!1&&p.value===!0&&c.value===!1),ot=v(()=>e.overlay===!0&&p.value===!0&&c.value===!1),nt=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&j.value===!1?" hidden":"")),lt=v(()=>({backgroundColor:`rgba(0,0,0,${Be.value*.4})`})),Pe=v(()=>T.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),rt=v(()=>T.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),st=v(()=>{const l={};return a.header.space===!0&&Pe.value===!1&&(fe.value===!0?l.top=`${a.header.offset}px`:a.header.space===!0&&(l.top=`${a.header.size}px`)),a.footer.space===!0&&rt.value===!1&&(fe.value===!0?l.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(l.bottom=`${a.footer.size}px`)),l}),ut=v(()=>{const l={width:`${z.value}px`,transform:`translateX(${Oe.value}px)`};return c.value===!0?l:Object.assign(l,st.value)}),ct=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),dt=v(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(fe.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Pe.value===!0?" q-drawer--top-padding":""))),ft=v(()=>{const l=o.lang.rtl===!0?e.side:ee.value;return[[ze,gt,void 0,{[l]:!0,mouse:!0}]]}),vt=v(()=>{const l=o.lang.rtl===!0?ee.value:e.side;return[[ze,Fe,void 0,{[l]:!0,mouse:!0}]]}),ht=v(()=>{const l=o.lang.rtl===!0?ee.value:e.side;return[[ze,Fe,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){pt(c,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}S(c,l=>{l===!0?(x=p.value,p.value===!0&&q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&x!==!1&&(p.value===!0?(P(0),V(0),me()):m(!1))}),S(()=>e.side,(l,g)=>{a.instances[g]===E&&(a.instances[g]=void 0,a[g].space=!1,a[g].offset=0),a.instances[l]=E,a[l].size=z.value,a[l].space=U.value,a[l].offset=de.value}),S(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),S(()=>e.behavior+e.breakpoint,ve),S(a.isContainer,l=>{p.value===!0&&d(l!==!0),l===!0&&ve()}),S(a.scrollbarWidth,()=>{P(p.value===!0?0:void 0)}),S(de,l=>{Q("offset",l)}),S(U,l=>{n("on-layout",l),Q("space",l)}),S(T,()=>{P()}),S(z,l=>{P(),ge(e.miniToOverlay,l)}),S(()=>e.miniToOverlay,l=>{ge(l,z.value)}),S(()=>o.lang.rtl,()=>{P()}),S(()=>e.mini,()=>{e.modelValue===!0&&(mt(),a.animate())}),S(_,l=>{n("mini-state",l)});function P(l){l===void 0?re(()=>{l=p.value===!0?0:z.value,P(I.value*l)}):(a.isContainer.value===!0&&T.value===!0&&(c.value===!0||Math.abs(l)===z.value)&&(l+=I.value*a.scrollbarWidth.value),Oe.value=l)}function V(l){Be.value=l}function he(l){const g=l===!0?"remove":a.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function mt(){clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,y=setTimeout(()=>{ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function gt(l){if(p.value!==!1)return;const g=z.value,$=ae(l.distance.x,0,g);if(l.isFinal===!0){$>=Math.min(75,g)===!0?m():(a.animate(),V(0),P(I.value*g)),j.value=!1;return}P((o.lang.rtl===!0?T.value!==!0:T.value)?Math.max(g-$,0):Math.min(0,$-g)),V(ae($/g,0,1)),l.isFirst===!0&&(j.value=!0)}function Fe(l){if(p.value!==!0)return;const g=z.value,$=l.direction===e.side,te=(o.lang.rtl===!0?$!==!0:$)?ae(l.distance.x,0,g):0;if(l.isFinal===!0){Math.abs(te)<Math.min(75,g)===!0?(a.animate(),V(1),P(0)):q(),j.value=!1;return}P(I.value*te),V(ae(1-te/g,0,1)),l.isFirst===!0&&(j.value=!0)}function me(){d(!1),he(!0)}function Q(l,g){a.update(e.side,l,g)}function pt(l,g){l.value!==g&&(l.value=g)}function ge(l,g){Q("size",l===!0?e.miniWidth:g)}return a.instances[e.side]=E,ge(e.miniToOverlay,z.value),Q("space",U.value),Q("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Z(()=>{n("on-layout",U.value),n("mini-state",_.value),x=e.showIfAbove===!0;const l=()=>{(p.value===!0?f:L)(!1,!0)};if(a.totalWidth.value!==0){re(l);return}w=S(a.totalWidth,()=>{w(),w=void 0,p.value===!1&&e.showIfAbove===!0&&c.value===!1?m(!1):l()})}),N(()=>{w!==void 0&&w(),clearTimeout(y),p.value===!0&&me(),a.instances[e.side]===E&&(a.instances[e.side]=void 0,Q("size",0),Q("offset",0),Q("space",!1))}),()=>{const l=[];c.value===!0&&(e.noSwipeOpen===!1&&l.push(Dt(b("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ft.value)),l.push(Qe("div",{ref:"backdrop",class:nt.value,style:lt.value,"aria-hidden":"true",onClick:q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>ht.value)));const g=_.value===!0&&i.mini!==void 0,$=[b("div",K(R({},r),{key:""+g,class:[ct.value,r.class]}),g===!0?i.mini():ue(i.default))];return e.elevated===!0&&p.value===!0&&$.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Qe("aside",{ref:"content",class:dt.value,style:ut.value},$,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>vt.value)),b("div",{class:"q-drawer-container"},l)}}}),ui=W({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:n}}=Y(),r=Ee(se,()=>{console.error("QPageContainer needs to be child of QLayout")});it(Ht,!0);const t=v(()=>{const o={};return r.header.space===!0&&(o.paddingTop=`${r.header.size}px`),r.right.space===!0&&(o[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(o.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(o[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),o});return()=>b("div",{class:"q-page-container",style:t.value},ue(i.default))}});const{passive:Ge}=H,ci=["both","horizontal","vertical"];var di=W({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ci.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,o;S(()=>e.scrollTarget,()=>{u(),d()});function s(){r!==null&&r();const y=Math.max(0,et(t)),w=Ze(t),c={top:y-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const _=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:y,left:w},n.directionChanged=n.direction!==_,n.delta=c,n.directionChanged===!0&&(n.direction=_,n.inflectionPoint=n.position),i("scroll",R({},n))}function d(){t=Vt(o,e.scrollTarget),t.addEventListener("scroll",a,Ge),a(!0)}function u(){t!==void 0&&(t.removeEventListener("scroll",a,Ge),t=void 0)}function a(y){if(y===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[w,c]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{c(w),r=null}}}const x=Y();return Z(()=>{o=x.proxy.$el.parentNode,d()}),N(()=>{r!==null&&r(),u()}),Object.assign(x.proxy,{trigger:a,getPosition:()=>n}),ke}}),fi=W({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:n}){const{proxy:{$q:r}}=Y(),t=C(null),o=C(r.screen.height),s=C(e.container===!0?0:r.screen.width),d=C({position:0,direction:"down",inflectionPoint:0}),u=C(0),a=C(Je.value===!0?0:we()),x=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=v(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),w=v(()=>a.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=v(()=>a.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function _(m){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};d.value=q,e.onScroll!==void 0&&n("scroll",q)}}function z(m){const{height:q,width:M}=m;let h=!1;o.value!==q&&(h=!0,o.value=q,e.onScrollHeight!==void 0&&n("scroll-height",q),F()),s.value!==M&&(h=!0,s.value=M),h===!0&&e.onResize!==void 0&&n("resize",m)}function p({height:m}){u.value!==m&&(u.value=m,F())}function F(){if(e.container===!0){const m=o.value>u.value?we():0;a.value!==m&&(a.value=m)}}let f;const L={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:o,containerHeight:u,scrollbarWidth:a,totalWidth:v(()=>s.value+a.value),rows:v(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:d,animate(){f!==void 0?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),f=void 0},155)},update(m,q,M){L[m][q]=M}};if(it(se,L),we()>0){let M=function(){m=null,q.classList.remove("hide-scrollbar")},h=function(){if(m===null){if(q.scrollHeight>r.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(M,300)},E=function(T){m!==null&&T==="remove"&&(clearTimeout(m),M()),window[`${T}EventListener`]("resize",h)},m=null;const q=document.body;S(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),Qt(()=>{E("remove")})}return()=>{const m=Rt(i.default,[b(di,{onScroll:_}),b(Le,{onResize:z})]),q=b("div",{class:x.value,style:y.value,ref:e.container===!0?void 0:t},m);return e.container===!0?b("div",{class:"q-layout-container overflow-hidden",ref:t},[b(Le,{onResize:p}),b("div",{class:"absolute-full",style:w.value},[b("div",{class:"scroll",style:c.value},[q])])]):q}}}),vi="/assets/2.e6f058a4.png";const hi=[{title:"@\u5C0F\u7EA2\u4E66",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"@\u6296\u97F3",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"@qq",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"@\u77E5\u4E4E",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"}],mi=At({name:"MainLayout",components:{},setup(){const e=C(!1);return console.log(hi),{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),A=e=>(Xt("data-v-5595fa58"),e=e(),Yt(),e),gi={class:"q-px-lg q-py-lg"},pi={class:"flex full-width"},yi={class:"q-mx-auto"},bi=A(()=>O("img",{src:vi},null,-1)),wi=A(()=>O("div",{class:"text-body1 text-center"},"@\u4E00\u9897\u756A\u85AF\u751C",-1)),_i=A(()=>O("div",{class:"text-caption text-center"},"by F & Fan",-1)),qi=A(()=>O("div",{class:"q-mt-sm text-caption text-center"}," \u626B\u7801\u83B7\u5F97\u6700\u65B0\u8BBF\u95EE\u53E3\u4EE4 ",-1)),Si={class:"full-width q-my-lg text-center q-mt-xl"},Ci={class:"q-gutter-md display-inline-block"},xi=A(()=>O("img",{alt:"\u524D\u5F80\u5C0F\u7EA2\u4E66",class:"cursor-pointer",src:"https://s3.bmp.ovh/imgs/2022/03/6f7336f4f0c6ecf2.png"},null,-1)),zi=A(()=>O("img",{alt:"\u524D\u5F80bilibili",class:"cursor-pointer",src:"https://s3.bmp.ovh/imgs/2022/03/93d767fa84c466c8.png"},null,-1)),Ti=A(()=>O("img",{alt:"\u524D\u5F80\u6398\u91D1",class:"cursor-pointer",src:"https://s3.bmp.ovh/imgs/2022/03/9d114f438868bd69.png"},null,-1)),Li=A(()=>O("p",{class:"text-center"},"\xA9 2022 \u2022 F & Fan",-1));function ki(e,i,n,r,t,o){const s=Nt("router-view");return It(),jt(fi,{view:"hHh Lpr lFf"},{default:B(()=>[k(Kt,{class:"top-header"}),k(si,{class:"left-drawer bg-grey-2",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=d=>e.leftDrawerOpen=d),"show-if-above":""},{default:B(()=>[O("div",gi,[k(Re,{class:"q-py-md",flat:""},{default:B(()=>[O("div",pi,[O("div",yi,[k(ne,{class:"boder-radius-100",size:"100px",rounded:!0},{default:B(()=>[bi]),_:1})])]),k(Ae,null,{default:B(()=>[wi,_i]),_:1})]),_:1}),k(Re,{class:"q-mt-lg q-py-lg",flat:""},{default:B(()=>[k(Ae,{class:"text-center"},{default:B(()=>[k(ei,{width:"100px",height:"100px",src:"https://s3.bmp.ovh/imgs/2022/03/c436c296e18c5cd6.jpeg"}),qi]),_:1})]),_:1}),O("div",Si,[O("div",Ci,[k(_e,{flat:"",unelevated:"",href:"https://www.xiaohongshu.com/user/profile/5d73bcd90000000001003881?xhsshare=CopyLink&appuid=5d73bcd90000000001003881&apptime=1648284087",target:"_blank"},{default:B(()=>[k(ne,{size:"30px",square:""},{default:B(()=>[xi]),_:1})]),_:1}),k(_e,{flat:"",unelevated:"",href:"https://b23.tv/bWWgTUs",target:"_blank"},{default:B(()=>[k(ne,{size:"30px",square:""},{default:B(()=>[zi]),_:1})]),_:1}),k(_e,{flat:"",unelevated:"",href:"https://juejin.cn/user/3808364009105544/posts",target:"_blank"},{default:B(()=>[k(ne,{size:"30px",square:""},{default:B(()=>[Ti]),_:1})]),_:1})])]),Li])]),_:1},8,["modelValue"]),k(ui,null,{default:B(()=>[k(s)]),_:1})]),_:1})}var Pi=Wt(mi,[["render",ki],["__scopeId","data-v-5595fa58"]]);export{Pi as default};
