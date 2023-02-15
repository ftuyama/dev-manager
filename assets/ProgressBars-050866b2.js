import{d as g,u as B,j as x,r as t,o as i,b as $,w as a,e as s,q as _,t as p,f as k,a as e,n as C,c as b,p as w,F as y,_ as z}from"./index-d698358d.js";const T={class:"flex md4 xs12"},j={class:"flex md4 xs12"},I={class:"flex md4 xs12"},N=g({__name:"HorizontalBars",setup(u){const{t:v}=B(),o=x(0),l=x(66),d=x(100);return(V,h)=>{const c=t("va-card-title"),r=t("va-progress-bar"),f=t("va-card-content"),m=t("va-card");return i(),$(m,{class:"horizontal-bars"},{default:a(()=>[s(c,null,{default:a(()=>[_(p(k(v)("progressBars.horizontal")),1)]),_:1}),s(f,{class:"row"},{default:a(()=>[e("div",T,[s(r,{"model-value":o.value/3},null,8,["model-value"])]),e("div",j,[s(r,{"model-value":l.value},null,8,["model-value"])]),e("div",I,[s(r,{"model-value":d.value},null,8,["model-value"])])]),_:1})]),_:1})}}}),S={class:"d-flex justify-center"},D={class:"flex xs4 sm2 lg1"},F={class:"d-flex justify-center"},L=g({__name:"CircleBars",setup(u){const{t:v}=B(),o=x(0);C(l);function l(){setTimeout(()=>{o.value=100})}return(d,V)=>{const h=t("va-card-title"),c=t("va-progress-circle"),r=t("va-card-content"),f=t("va-card");return i(),$(f,{class:"circle-bars"},{default:a(()=>[s(h,null,{default:a(()=>[_(p(k(v)("progressBars.circle")),1)]),_:1}),s(r,{class:"row"},{default:a(()=>[(i(),b(y,null,w(10,m=>e("div",{key:m,class:"flex xs4 sm2 lg1"},[e("div",S,[e("div",null,[s(c,{"model-value":o.value*m/10},{default:a(()=>[_(p(o.value*m/10)+"%",1)]),_:2},1032,["model-value"])])])])),64)),e("div",D,[e("div",F,[e("div",null,[s(c,{indeterminate:""})])])])]),_:1})]),_:1})}}}),q={name:"BarsState",setup(){const{t:u}=B();return{t:u}},data(){return{value2:66,bufferValues:{value:0,buffer:0}}},mounted(){this.animateValue(),this.animateBufferValues()},methods:{animateValue(){setTimeout(()=>{this.value=100})},animateBufferValues(){const u=setInterval(()=>{this.bufferValues.value+=2+Math.floor(Math.random()*2),this.bufferValues.buffer+=2+Math.floor(Math.random()*4),this.bufferValues.value>=100&&clearInterval(u)},400)}}},E={class:"flex md4 xs12"},H={class:"flex md4 xs12"},P={class:"flex md4 xs12"};function A(u,v,o,l,d,V){const h=t("va-card-title"),c=t("va-progress-bar"),r=t("va-card-content"),f=t("va-card");return i(),$(f,{class:"bars-state"},{default:a(()=>[s(h,null,{default:a(()=>[_(p(l.t("progressBars.state")),1)]),_:1}),s(r,{class:"row"},{default:a(()=>[e("div",E,[s(c,{"model-value":d.value2},{default:a(()=>[_("66%")]),_:1},8,["model-value"])]),e("div",H,[s(c,{"model-value":d.bufferValues.value,buffer:d.bufferValues.buffer},{default:a(()=>[_("Buffering ")]),_:1},8,["model-value","buffer"])]),e("div",P,[s(c,{indeterminate:""},{default:a(()=>[_("Loading")]),_:1})])]),_:1})]),_:1})}const G=z(q,[["render",A]]),J={style:{"font-size":"0.625rem"}},K=g({__name:"ColorfulBars",setup(u){const{t:v}=B(),o=x(0),l=x(["danger","success","info","secondary","warning","textDark"]);C(d);function d(){setTimeout(()=>o.value=100)}return(V,h)=>{const c=t("va-card-title"),r=t("va-progress-bar"),f=t("va-progress-circle"),m=t("va-card-content"),M=t("va-card");return i(),$(M,{class:"colorful-bars progress-bar-widget"},{default:a(()=>[s(c,null,{default:a(()=>[_(p(k(v)("progressBars.colors")),1)]),_:1}),s(m,{class:"row"},{default:a(()=>[(i(),b(y,null,w(6,n=>e("div",{key:`pb-${n}`,class:"flex md4 xs12"},[s(r,{"model-value":o.value*n/6,color:l.value[n-1]},{default:a(()=>[_(p(l.value[n-1]),1)]),_:2},1032,["model-value","color"])])),64)),(i(),b(y,null,w(6,n=>e("div",{key:`pc-${n}`,class:"flex md2 xs6"},[s(f,{class:"ma-auto","model-value":o.value*n/6,color:l.value[n-1]},{default:a(()=>[e("span",J,p(l.value[n-1]),1)]),_:2},1032,["model-value","color"])])),64))]),_:1})]),_:1})}}}),O={class:"progress-bars"},Q={class:"row mb-4"},R={class:"flex xs12 mb-12"},U={class:"row mb-4"},W={class:"flex xs12"},X={class:"row mb-4"},Y={class:"flex xs12"},Z={class:"row"},ee={class:"flex xs12"},ae=g({__name:"ProgressBars",setup(u){return(v,o)=>(i(),b("div",O,[e("div",Q,[e("div",R,[s(N)])]),e("div",U,[e("div",W,[s(G)])]),e("div",X,[e("div",Y,[s(L)])]),e("div",Z,[e("div",ee,[s(K)])])]))}});export{ae as default};
