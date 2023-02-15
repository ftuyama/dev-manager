import{h as t,i as o,d as l,j as p,k as r,o as c,b as d,f as n,l as u}from"./index-d698358d.js";const m={plugins:{legend:{position:"bottom",labels:{font:{color:"#34495e",family:"sans-serif",size:14},usePointStyle:!0}},tooltip:{bodyFont:{size:14,family:"sans-serif"},boxPadding:4}},datasets:{line:{fill:"origin",tension:.3,borderColor:"transparent"},bubble:{borderColor:"transparent"},bar:{borderColor:"transparent"}},maintainAspectRatio:!1,animation:!0},f={pie:t(()=>o(()=>import("./PieChart-89f26dfb.js"),["assets/PieChart-89f26dfb.js","assets/index-f7b69f45.js","assets/index-d698358d.js","assets/index-e2bd7ebc.css"])),doughnut:t(()=>o(()=>import("./DoughnutChart-f080a8a7.js"),["assets/DoughnutChart-f080a8a7.js","assets/index-f7b69f45.js","assets/index-d698358d.js","assets/index-e2bd7ebc.css"])),bubble:t(()=>o(()=>import("./BubbleChart-b686381a.js"),["assets/BubbleChart-b686381a.js","assets/index-f7b69f45.js","assets/index-d698358d.js","assets/index-e2bd7ebc.css"])),line:t(()=>o(()=>import("./LineChart-c4276f55.js"),["assets/LineChart-c4276f55.js","assets/index-f7b69f45.js","assets/index-d698358d.js","assets/index-e2bd7ebc.css"])),bar:t(()=>o(()=>import("./BarChart-f58f3210.js"),["assets/BarChart-f58f3210.js","assets/index-f7b69f45.js","assets/index-d698358d.js","assets/index-e2bd7ebc.css"])),radar:t(()=>o(()=>import("./RadarChart-dd3ce0d5.js"),["assets/RadarChart-dd3ce0d5.js","assets/index-f7b69f45.js","assets/index-d698358d.js","assets/index-e2bd7ebc.css"])),"horizontal-bar":t(()=>o(()=>import("./HorizontalBarChart-b617acc7.js"),["assets/HorizontalBarChart-b617acc7.js","assets/index-f7b69f45.js","assets/index-d698358d.js","assets/index-e2bd7ebc.css"]))},v=l({__name:"VaChart",props:{data:null,options:null,type:null},setup(e){const a=e,i=p(),s=r(()=>f[a.type]),_=r(()=>({...m,...a.options}));return(b,h)=>(c(),d(u(n(s)),{ref_key:"chart",ref:i,class:"va-chart","chart-options":n(_),"chart-data":e.data},null,8,["chart-options","chart-data"]))}});export{v as _};
