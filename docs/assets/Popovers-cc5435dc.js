import{d as x,u as y,j as d,r as c,o as k,c as w,a,e as o,w as t,q as s,t as p,f as u}from"./index-d698358d.js";const P={class:"tooltips"},T={class:"row"},B={class:"flex xs12 md6"},U={class:"popover-example mt-5"},C={class:"flex xs12 md6"},N={class:"my-2 mx-2"},j={class:"va-link"},D={class:"va-link"},S={class:"va-link"},q={class:"va-link"},H=x({__name:"Popovers",setup(z){const{t:n}=y(),b=d([{icon:"print",text:"print"},{icon:"star",text:"star"}]),h=d(["success","info","danger","warning","gray","dark"]),e=d({title:"Hey folks!",message:"This tooltip is amazing :D",icon:{icon:"print",text:"print"},color:"warning"});return(A,l)=>{const m=c("va-card-title"),_=c("va-select"),v=c("va-input"),V=c("va-button"),r=c("va-popover"),f=c("va-card-content"),g=c("va-card");return k(),w("div",P,[a("div",T,[a("div",B,[o(g,null,{default:t(()=>[o(m,null,{default:t(()=>[s(p(u(n)("popovers.popoverStyle")),1)]),_:1}),o(f,null,{default:t(()=>[o(_,{modelValue:e.value.color,"onUpdate:modelValue":l[0]||(l[0]=i=>e.value.color=i),class:"mb-4",label:"color scheme",options:h.value},null,8,["modelValue","options"]),o(_,{modelValue:e.value.icon,"onUpdate:modelValue":l[1]||(l[1]=i=>e.value.icon=i),class:"mb-4",label:"icon (font-awesome)",options:b.value,"track-by":"icon"},null,8,["modelValue","options"]),o(v,{modelValue:e.value.title,"onUpdate:modelValue":l[2]||(l[2]=i=>e.value.title=i),class:"mb-4",label:"Title"},null,8,["modelValue"]),o(v,{modelValue:e.value.message,"onUpdate:modelValue":l[3]||(l[3]=i=>e.value.message=i),class:"mb-4",label:"Message"},null,8,["modelValue"]),a("div",U,[o(r,{icon:e.value.icon.icon,color:e.value.color,title:e.value.title,message:e.value.message,placement:"right",open:""},{default:t(()=>[o(V,null,{default:t(()=>[s(p(u(n)("notificationsPage.popovers.showPopover")),1)]),_:1})]),_:1},8,["icon","color","title","message"])])]),_:1})]),_:1})]),a("div",C,[o(g,null,{default:t(()=>[o(m,null,{default:t(()=>[s(p(u(n)("popovers.popoverPlacement")),1)]),_:1}),o(f,null,{default:t(()=>[a("p",N,[s(" Any text can be used for "),o(r,{placement:"bottom",message:"Bottom tooltip"},{default:t(()=>[a("a",j,p(u(n)("notificationsPage.popovers.bottomTooltip")),1)]),_:1}),s(" tooltip showcase. Just anything you can possibly imagine to test "),o(r,{placement:"right",message:"Right tooltip"},{default:t(()=>[a("a",D,p(u(n)("notificationsPage.popovers.rightTooltip")),1)]),_:1}),s(" tooltip. But it can appear on the "),o(r,{placement:"left",message:"Left tooltip"},{default:t(()=>[a("a",S,p(u(n)("notificationsPage.popovers.leftTooltip")),1)]),_:1}),s(" . Or just "),o(r,{placement:"top",message:"Top tooltip"},{default:t(()=>[a("a",q,p(u(n)("notificationsPage.popovers.topTooltip")),1)]),_:1}),s(" the item. ")])]),_:1})]),_:1})])])])}}});export{H as default};