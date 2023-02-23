import{f as v,q as H,d as M,e as G,g as J,r as b,o as p,c as q,w as s,a as e,b as t,t as n,u as a,h as D,j as U,F as W,s as w,_ as N,i as T,v as Y,V as $,x as B,y as k,z as j,A as z,B as K,C as O,D as Q,E as R,G as X}from"./index-f706806e.js";import{u as E,l as Z,d as aa}from"./useChartData-719ba1d2.js";import{_ as F}from"./VaChart.vue_vue_type_style_index_0_lang-9a6aeaa3.js";import{a as ta}from"./axios-bff3f665.js";function ea(_){var h;const o=v(0),c=r=>{o.value=r},f=H(()=>{var r;return{..._.value,labels:(r=_.value.labels)==null?void 0:r.slice(o.value),datasets:_.value.datasets.map(u=>({...u,data:u.data.slice(o.value)}))}});return{datasetIndex:o,minIndex:0,maxIndex:(((h=_.value.labels)==null?void 0:h.length)??0)-1,dataComputed:f,setDatasetIndex:c}}const sa={class:"mr-0 va-text-right"},oa=["disabled"],la={class:"mt-2"},na=M({__name:"DashboardContributorsList",setup(_){const{t:o}=G(),c=v([]),f=v(!1),h=v(392),r=v([]),u=v(5),x=v(0);J(()=>{y()});async function y(){f.value=!0;const{data:l}=await ta.get("https://api.github.com/repos/epicmaxco/vuestic-admin/contributors");c.value=l,h.value=Math.max(...c.value.map(({contributions:i})=>i)),m(),f.value=!1}function g(l){return l/h.value*100}function m(){r.value=c.value.slice(x.value*u.value,x.value*u.value+u.value),x.value+=1;const l=(c.value.length-1)/u.value;x.value>l&&(x.value=0)}function d(l){const i=["primary","success","info","danger","warning"];if(l<i.length)return i[l];const C=Object.keys(i);return i[C[C.length*Math.random()<<0]]}return(l,i)=>{const C=b("va-card-title"),I=b("va-progress-bar"),V=b("va-inner-loading"),L=b("va-card-content"),A=b("va-card");return p(),q(A,{class:"d-flex dashboard-contributors-list"},{default:s(()=>[e(C,null,{default:s(()=>[t("h1",null,n(a(o)("dashboard.charts.topContributors")),1),t("div",sa,[t("a",{class:"mr-0 va-link",disabled:c.value.length<=u.value,onClick:m},n(a(o)("dashboard.charts.showNextFive")),9,oa)])]),_:1}),e(L,null,{default:s(()=>[e(V,{loading:f.value,style:{width:"100%"}},{default:s(()=>[(p(!0),D(W,null,U(r.value,(S,P)=>(p(),D("div",{key:P,class:"mb-3"},[e(I,{"model-value":g(S.contributions),color:d(P)},{default:s(()=>[w(n(S.contributions)+" "+n(a(o)("dashboard.charts.commits")),1)]),_:2},1032,["model-value","color"]),t("p",la,n(S.login),1)]))),128))]),_:1},8,["loading"])]),_:1})]),_:1})}}});const ca=N(na,[["__scopeId","data-v-b42b6ad7"]]),ra={class:"row row-equal"},da={class:"flex xs12 lg6 xl6"},ia={class:"flex xs12 sm6 md6 lg3 xl3"},ua={class:"flex xs12 sm6 md6 lg3 xl3"},_a=M({__name:"DashboardCharts",setup(_){const{t:o}=G(),c=v(),f=E(Z,.7),h=E(aa),{dataComputed:r,minIndex:u,maxIndex:x,datasetIndex:y,setDatasetIndex:g}=ea(f);function m(){var i;const d=window.open("","Print","height=600,width=800"),l=d.document.createElement("img");l.src=`${(i=document.querySelector(".chart--donut canvas"))==null?void 0:i.toDataURL("image/png")}`,l.onload=()=>{d==null||d.document.body.appendChild(l)},d.print(),d.onafterprint=()=>{d==null||d.close()}}return(d,l)=>{const i=b("va-button"),C=b("va-card-title"),I=b("va-card-content"),V=b("va-card");return p(),D("div",ra,[t("div",da,[a(r)?(p(),q(V,{key:0},{default:s(()=>[e(C,null,{default:s(()=>[t("h1",null,n(a(o)("dashboard.charts.trendyTrends")),1),t("div",null,[e(i,{class:"ma-1",size:"small",color:"danger",disabled:a(y)===a(u),onClick:l[0]||(l[0]=L=>a(g)(a(y)-1))},{default:s(()=>[w(n(a(o)("dashboard.charts.showInLessDetail")),1)]),_:1},8,["disabled"]),e(i,{class:"ma-1",size:"small",color:"danger",disabled:a(y)===a(x)-1,onClick:l[1]||(l[1]=L=>a(g)(a(y)+1))},{default:s(()=>[w(n(a(o)("dashboard.charts.showInMoreDetail")),1)]),_:1},8,["disabled"])])]),_:1}),e(I,null,{default:s(()=>[e(F,{class:"chart",data:a(r),type:"line"},null,8,["data"])]),_:1})]),_:1})):T("",!0)]),t("div",ia,[e(V,{class:"d-flex"},{default:s(()=>[e(C,null,{default:s(()=>[t("h1",null,n(a(o)("dashboard.charts.loadingSpeed")),1),e(i,{icon:"print",plain:"",onClick:m})]),_:1}),a(h)?(p(),q(I,{key:0},{default:s(()=>[e(F,{ref_key:"doughnutChart",ref:c,data:a(h),type:"doughnut",class:"chart chart--donut"},null,8,["data"])]),_:1})):T("",!0)]),_:1})]),t("div",ua,[e(ca)])])}}});const ha=N(_a,[["__scopeId","data-v-e9cad6bd"]]),ma=_=>(R("data-v-5088910f"),_=_(),X(),_),va={class:"row row-equal"},pa={class:"flex xl6 xs12 lg6"},fa={class:"row"},xa={class:"va-h2 ma-0",style:{color:"white"}},ga={style:{color:"white"}},ba={class:"row"},ya={class:"flex xs12 sm6 md6"},Ca={class:"no-wrap"},Da={class:"flex xs12 sm6 md6"},wa={class:"row row-separated"},ka={class:"flex xs4"},Ia={class:"va-text-center"},Va={class:"flex xs4"},$a={class:"va-text-center no-wrap"},Ba={class:"flex xs4"},Ma={class:"va-text-center"},La={class:"flex xs12 sm6 md6 xl3 lg3"},Sa=ma(()=>t("p",{class:"rich-theme-card-text"}," Buying the right telescope to take your love of astronomy to the next level is a big next step. ",-1)),qa={class:"mt-3"},Ga={class:"flex xs12 sm6 md6 xl3 lg3"},Na=M({__name:"DashboardInfoBlock",setup(_){const{t:o}=G(),{colors:c}=Y(),f=v([{color:"success",value:"803",text:"commits",icon:""},{color:"danger",value:"57",text:"components",icon:""},{color:"info",value:"5",text:"teamMembers",icon:""}]),h=v(!1),r=v(0),u=v(["https://i.imgur.com/qSykGko.jpg","https://i.imgur.com/jYwT08D.png","https://i.imgur.com/9930myH.jpg","https://i.imgur.com/2JxhWD6.jpg","https://i.imgur.com/MpiOWbM.jpg"]);function x(){h.value=!0}return(y,g)=>(p(),D("div",va,[t("div",pa,[t("div",fa,[(p(!0),D(W,null,U(f.value,(m,d)=>(p(),D("div",{key:d,class:"flex xs12 sm4"},[e(a(k),{class:"mb-4",color:m.color},{default:s(()=>[e(a($),null,{default:s(()=>[t("h2",xa,n(m.value),1),t("p",ga,n(a(o)("dashboard.info."+m.text)),1)]),_:2},1024)]),_:2},1032,["color"])]))),128))]),t("div",ba,[t("div",ya,[e(a(k),null,{default:s(()=>[e(a($),null,{default:s(()=>[t("h2",{class:"va-h2 ma-0",style:B({color:a(c).primary})},"291",4),t("p",Ca,n(a(o)("dashboard.info.completedPullRequests")),1)]),_:1})]),_:1})]),t("div",Da,[e(a(k),null,{default:s(()=>[e(a($),null,{default:s(()=>[t("div",wa,[t("div",ka,[t("h2",{class:"va-h2 ma-0 va-text-center",style:B({color:a(c).primary})},"3",4),t("p",Ia,n(a(o)("dashboard.info.users")),1)]),t("div",Va,[t("h2",{class:"va-h2 ma-0 va-text-center",style:B({color:a(c).info})},"24",4),t("p",$a,n(a(o)("dashboard.info.points")),1)]),t("div",Ba,[t("h2",{class:"va-h2 ma-0 va-text-center",style:B({color:a(c).warning})},"91",4),t("p",Ma,n(a(o)("dashboard.info.units")),1)])])]),_:1})]),_:1})])])]),t("div",La,[e(a(k),{stripe:"","stripe-color":"info"},{default:s(()=>[e(a(j),null,{default:s(()=>[w(n(a(o)("dashboard.info.componentRichTheme")),1)]),_:1}),e(a($),null,{default:s(()=>[Sa,t("div",qa,[e(a(z),{color:"primary",target:"_blank",href:"https://github.com/epicmaxco/vuestic-ui"},{default:s(()=>[w(n(a(o)("dashboard.info.viewLibrary")),1)]),_:1})])]),_:1})]),_:1})]),t("div",Ga,[e(a(k),null,{default:s(()=>[e(a(K),{src:u.value[r.value],style:{height:"200px"}},null,8,["src"]),e(a(j),null,{default:s(()=>[e(a(z),{preset:"plain","icon-right":"fa-arrow-circle-right",onClick:x},{default:s(()=>[w(n(a(o)("dashboard.info.exploreGallery")),1)]),_:1})]),_:1})]),_:1})]),e(a(Q),{modelValue:h.value,"onUpdate:modelValue":g[1]||(g[1]=m=>h.value=m)},{default:s(()=>[e(a(O),{modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=m=>r.value=m),items:u.value,class:"gallery-carousel"},null,8,["modelValue","items"])]),_:1},8,["modelValue"])]))}});const Pa=N(Na,[["__scopeId","data-v-5088910f"]]),Ta={class:"dashboard"},Ua=M({__name:"Dashboard",setup(_){return(o,c)=>(p(),D("div",Ta,[e(ha),e(Pa)]))}});export{Ua as default};
