import{d as C,r as l,o as s,h as e,F as _,i as d,a as o,w as u,b as t,q as N,t as V,s as m,n as b}from"./index-aaeba3b7.js";const B={class:"row"},S={class:"sets-list__set__content"},$={class:"sets-list__set__content__overlay pa-3 fill-height"},F={class:"vuestic-icon"},q={class:"sets-list__icon flex xs2"},z={class:"vuestic-icon"},D=t("div",{class:"flex xs8"},null,-1),E={class:"sets-list__icon flex xs2"},T={class:"vuestic-icon"},j=C({__name:"SetsList",props:{sets:null},setup(h){const c=(v,p)=>`${v.prefix}-${p}`;return(v,p)=>{const x=l("va-button"),i=l("va-icon"),f=l("router-link"),y=l("va-card");return s(),e("div",B,[(s(!0),e(_,null,d(h.sets,(n,k)=>(s(),e("div",{key:k,class:"va-card-wrapper flex lg6 xs12"},[o(y,null,{default:u(()=>[o(f,{to:{path:`icons/${n.href}`},append:"",style:{color:"inherit"}},{default:u(()=>[t("div",S,[t("div",$,[o(x,null,{default:u(()=>[N(V(n.name.toUpperCase()),1)]),_:2},1024)]),(s(!0),e(_,null,d(n.filteredLists,(a,r)=>(s(),e(_,null,[a.length!==2?(s(),e("div",{key:r,class:"row pa-3"},[(s(!0),e(_,null,d(a,(g,w)=>(s(),e("div",{key:w,class:"sets-list__icon flex xs2"},[t("div",F,[o(i,{name:c(n,g)},null,8,["name"])])]))),128))])):m("",!0),a.length===2?(s(),e("div",{key:r,class:b(["row pa-3",r===1?"sets-list__set__content--middle":""])},[t("div",q,[t("div",z,[o(i,{name:c(n,a[0])},null,8,["name"])])]),D,t("div",E,[t("div",T,[o(i,{name:c(n,a[1])},null,8,["name"])])])],2)):m("",!0)],64))),256))])]),_:2},1032,["to"])]),_:2},1024)]))),128))])}}});export{j as default};