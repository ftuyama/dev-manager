import{j as t,k as o,d as l,r as p,l as r,b as c,h as d,g as n,m as u}from"./index-d5837d88.js";const m={plugins:{legend:{position:"bottom",labels:{font:{color:"#34495e",family:"sans-serif",size:14},usePointStyle:!0}},tooltip:{bodyFont:{size:14,family:"sans-serif"},boxPadding:4}},datasets:{line:{fill:"origin",tension:.3,borderColor:"transparent"},bubble:{borderColor:"transparent"},bar:{borderColor:"transparent"}},maintainAspectRatio:!1,animation:!0},b={pie:t(()=>o(()=>import("./PieChart-5e9c2e8b.js"),["assets/PieChart-5e9c2e8b.js","assets/index-21ab2927.js","assets/index-d5837d88.js","assets/index-2d24b7e1.css"])),doughnut:t(()=>o(()=>import("./DoughnutChart-57c1a5e9.js"),["assets/DoughnutChart-57c1a5e9.js","assets/index-21ab2927.js","assets/index-d5837d88.js","assets/index-2d24b7e1.css"])),bubble:t(()=>o(()=>import("./BubbleChart-59c7dab9.js"),["assets/BubbleChart-59c7dab9.js","assets/index-21ab2927.js","assets/index-d5837d88.js","assets/index-2d24b7e1.css"])),line:t(()=>o(()=>import("./LineChart-1712146d.js"),["assets/LineChart-1712146d.js","assets/index-21ab2927.js","assets/index-d5837d88.js","assets/index-2d24b7e1.css"])),bar:t(()=>o(()=>import("./BarChart-576936b4.js"),["assets/BarChart-576936b4.js","assets/index-21ab2927.js","assets/index-d5837d88.js","assets/index-2d24b7e1.css"])),radar:t(()=>o(()=>import("./RadarChart-c5df33b6.js"),["assets/RadarChart-c5df33b6.js","assets/index-21ab2927.js","assets/index-d5837d88.js","assets/index-2d24b7e1.css"])),"horizontal-bar":t(()=>o(()=>import("./HorizontalBarChart-4825463c.js"),["assets/HorizontalBarChart-4825463c.js","assets/index-21ab2927.js","assets/index-d5837d88.js","assets/index-2d24b7e1.css"]))},v=l({__name:"VaChart",props:{data:null,options:null,type:null},setup(e){const a=e,i=p(),s=r(()=>b[a.type]),_=r(()=>({...m,...a.options}));return(f,h)=>(c(),d(u(n(s)),{ref_key:"chart",ref:i,class:"va-chart","chart-options":n(_),"chart-data":e.data},null,8,["chart-options","chart-data"]))}});export{v as _};
