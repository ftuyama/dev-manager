import{u as g,s as P,r as a,o as B,c as N,a as o,e,w as l,q as i,t as p,f as d,v as k}from"./index-d698358d.js";const A={class:"color-pickers vuestic-color-picker-page"},I={class:"row"},z={class:"flex md12 xs12"},D={class:"flex xs4 md2"},E={class:"vuestic-color-picker-page__top-square"},T={class:"flex xs4 md2"},b={class:"vuestic-color-picker-page__top-square"},j={class:"flex xs4 md2"},F={class:"vuestic-color-picker-page__top-square"},G={class:"row"},H={class:"flex md12 xs12"},J={class:"flex md1"},K={class:"flex md2"},L={class:"row"},M={class:"flex md12 xs12"},O={class:"flex xs12 md1"},Q={class:"flex md6 xs12"},R={class:"row"},W={class:"flex md12 xs12"},X={class:"flex md1"},Y={class:"flex md7"},eo={__name:"ColorPickers",setup(Z){const{t:c}=g(),w="#f81953",h="#34495e",C="#ffd50a",u="#2e5e2a",v="#ffd50a",m="#f81953",q=[],{colors:f}=P();return($,s)=>{const n=a("va-card-title"),x=a("va-color-picker"),S=a("va-color-input"),r=a("va-card-content"),_=a("va-card"),V=a("va-color-square"),y=a("va-color-palette"),U=a("va-color-slider");return B(),N("div",A,[o("div",I,[o("div",z,[e(_,null,{default:l(()=>[e(n,null,{default:l(()=>[i(p(d(c)("menu.colorPickers")),1)]),_:1}),e(r,{class:"row"},{default:l(()=>[o("div",D,[o("div",E,[o("span",{class:"title no-wrap",style:k({color:d(f).primary})},p(d(c)("colorPickers.simple")),5),e(x,{modelValue:w,"onUpdate:modelValue":s[0]||(s[0]=t=>w=t),palette:q})])]),o("div",T,[o("div",b,[o("span",{class:"title no-wrap",style:k({color:d(f).primary})},p(d(c)("colorPickers.slider")),5),e(x,{modelValue:h,"onUpdate:modelValue":s[1]||(s[1]=t=>h=t),mode:"slider"})])]),o("div",j,[o("div",F,[o("span",{class:"title no-wrap",style:k({color:d(f).primary})},p(d(c)("colorPickers.advanced")),5),e(S,{modelValue:C,"onUpdate:modelValue":s[2]||(s[2]=t=>C=t),mode:"advanced"})])])]),_:1})]),_:1})])]),o("div",G,[o("div",H,[e(_,null,{default:l(()=>[e(n,null,{default:l(()=>[i("Simple Inline")]),_:1}),e(r,{class:"row"},{default:l(()=>[o("div",J,[e(V,{value:m})]),o("div",K,[e(y,{modelValue:m,"onUpdate:modelValue":s[3]||(s[3]=t=>m=t),palette:q})])]),_:1})]),_:1})])]),o("div",L,[o("div",M,[e(_,null,{default:l(()=>[e(n,null,{default:l(()=>[i("Slider")]),_:1}),e(r,{class:"row"},{default:l(()=>[o("div",O,[e(V,{value:u})]),o("div",Q,[e(U,{modelValue:u,"onUpdate:modelValue":s[4]||(s[4]=t=>u=t)})])]),_:1})]),_:1})])]),o("div",R,[o("div",W,[e(_,null,{default:l(()=>[e(n,null,{default:l(()=>[i("Advanced")]),_:1}),e(r,{class:"row"},{default:l(()=>[o("div",X,[e(V,{value:v})]),o("div",Y,[e(x,{modelValue:v,"onUpdate:modelValue":s[5]||(s[5]=t=>v=t)})])]),_:1})]),_:1})])])])}}};export{eo as default};