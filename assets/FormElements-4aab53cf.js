import{d as j,e as Y,f as t,r as u,o as Z,h as Q,b as o,a,w as i,q as _,t as M,u as n,_ as X}from"./index-aaeba3b7.js";const $=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","United States of America","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"],ee={class:"form-elements"},le={class:"row"},ae={class:"flex xs12"},oe={class:"row"},se={class:"flex md4 sm6 xs12"},ne={class:"flex md4 sm6 xs12"},te={class:"flex md4 sm6 xs12"},de={class:"flex md4 sm6 xs12"},ie={class:"flex md4 sm6 xs12"},ue={class:"flex md4 sm6 xs12"},re={class:"flex md4 sm6 xs12"},me={class:"flex xs12"},pe={class:"row"},ce={class:"flex md4 sm6 xs12"},ve={class:"flex md4 sm6 xs12"},be={class:"flex md4 sm6 xs12"},Ve={class:"flex md4 sm6 xs12"},fe={class:"flex md4 sm6 xs12"},ge={class:"flex md4 sm6 xs12"},_e={class:"row"},xe={class:"flex md4 sm6 xs12"},Se={class:"flex md4 sm6 xs12"},ye={class:"flex md4 sm6 xs12"},Ue={class:"flex xs12"},Me={class:"row"},Ie={class:"flex md6 xs12"},ke={class:"flex md6 xs12"},we={class:"flex md6 xs12"},he={class:"flex md6 xs12"},Te={class:"flex md6 xs12"},Ce={class:"flex md6 xs12"},Be={class:"flex xs12"},Pe={class:"row"},Ae={class:"flex md6 xs12"},De={class:"flex md6 xs12"},Re={class:"flex"},Fe=j({__name:"FormElements",setup(Ge){const{t:s}=Y(),I=t($),h=t(""),T=t(""),C=t(""),B=t(""),P=t(""),A=t("Vasili Savitski"),D=t("andrei@dreamsupport.io"),R=t("andrei@dreamsupport"),H=t(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),F=t(["Field should contain a valid email"]),k=t([{id:1,description:"First option"},{id:2,description:"Second option"},{id:3,description:"Third option"}]),G=t(""),N=t([]),E=t([]),L=t(""),z=t([]),x=t("option1"),S=t("option1"),r=t({unselected:!1,selected:!0,readonly:!0,disabled:!0,error:!1,errorMessages:!0}),m=t({unselected:!1,selected:!0,disabled:!0,small:!1,large:!1}),q=(K,e)=>{const p=new Date(K);return p.setDate(p.getDate()+e),p},d=t({simple:new Date,disabled:"2018-05-09",range:{start:new Date,end:q(new Date,7)},multiple:["2018-04-25","2018-04-27"]});return(K,e)=>{const p=u("va-card-title"),c=u("va-input"),O=u("va-icon"),J=u("va-button"),g=u("va-card-content"),y=u("va-card"),v=u("va-date-input"),W=u("va-divider"),w=u("va-time-input"),b=u("va-select"),V=u("va-checkbox"),U=u("va-radio"),f=u("va-switch");return Z(),Q("div",ee,[o("div",le,[o("div",ae,[a(y,null,{default:i(()=>[a(p,null,{default:i(()=>[_(M(n(s)("forms.inputs.title")),1)]),_:1}),a(g,null,{default:i(()=>[o("form",null,[o("div",oe,[o("div",se,[a(c,{modelValue:T.value,"onUpdate:modelValue":e[0]||(e[0]=l=>T.value=l),placeholder:"Text Input"},null,8,["modelValue"])]),o("div",ne,[a(c,{modelValue:C.value,"onUpdate:modelValue":e[1]||(e[1]=l=>C.value=l),placeholder:"Input With Icon"},{prepend:i(()=>[a(O,{color:"gray",name:"envelope"})]),_:1},8,["modelValue"])]),o("div",te,[a(c,{modelValue:B.value,"onUpdate:modelValue":e[2]||(e[2]=l=>B.value=l),placeholder:"Input With Button"},{append:i(()=>[a(J,{style:{"margin-right":"0"},small:""},{default:i(()=>[_(" UPLOAD ")]),_:1})]),_:1},8,["modelValue"])]),o("div",de,[a(c,{modelValue:D.value,"onUpdate:modelValue":e[3]||(e[3]=l=>D.value=l),type:"email",label:"Email (Validated with success)",success:""},null,8,["modelValue"])]),o("div",ie,[a(c,{modelValue:A.value,"onUpdate:modelValue":e[4]||(e[4]=l=>A.value=l),placeholder:"Input With Clear Button",clearable:""},null,8,["modelValue"])]),o("div",ue,[a(c,{modelValue:R.value,"onUpdate:modelValue":e[5]||(e[5]=l=>R.value=l),type:"email",label:"Email (Validated)",error:"","error-messages":F.value},null,8,["modelValue","error-messages"])]),o("div",re,[a(c,{modelValue:P.value,"onUpdate:modelValue":e[6]||(e[6]=l=>P.value=l),placeholder:"Text Input (with description)",messages:H.value},null,8,["modelValue","messages"])])])])]),_:1})]),_:1})]),o("div",me,[a(y,null,{default:i(()=>[a(p,null,{default:i(()=>[_(M(n(s)("forms.dateTimePicker.title")),1)]),_:1}),a(g,null,{default:i(()=>[o("form",null,[o("div",pe,[o("div",ce,[a(v,{modelValue:d.value.simple,"onUpdate:modelValue":e[7]||(e[7]=l=>d.value.simple=l),label:n(s)("forms.dateTimePicker.basic")},null,8,["modelValue","label"])]),o("div",ve,[a(v,{modelValue:d.value.simple,"onUpdate:modelValue":e[8]||(e[8]=l=>d.value.simple=l),label:n(s)("forms.dateTimePicker.manualInput"),"manual-input":""},null,8,["modelValue","label"])]),o("div",be,[a(v,{modelValue:d.value.disabled,"onUpdate:modelValue":e[9]||(e[9]=l=>d.value.disabled=l),label:n(s)("forms.dateTimePicker.disabled"),disabled:""},null,8,["modelValue","label"])]),o("div",Ve,[a(v,{modelValue:d.value.multiple,"onUpdate:modelValue":e[10]||(e[10]=l=>d.value.multiple=l),label:n(s)("forms.dateTimePicker.multiple"),mode:"multiple",clearable:""},null,8,["modelValue","label"])]),o("div",fe,[a(v,{modelValue:d.value.range,"onUpdate:modelValue":e[11]||(e[11]=l=>d.value.range=l),label:n(s)("forms.dateTimePicker.range"),mode:"range",clearable:""},null,8,["modelValue","label"])]),o("div",ge,[a(v,{modelValue:d.value.simple,"onUpdate:modelValue":e[12]||(e[12]=l=>d.value.simple=l),label:n(s)("forms.dateTimePicker.customFirstDay"),"first-weekday":"Monday","highlight-weekend":""},null,8,["modelValue","label"])])])])]),_:1}),a(W),a(g,null,{default:i(()=>[o("form",null,[o("div",_e,[o("div",xe,[a(w,{modelValue:d.value.simple,"onUpdate:modelValue":e[13]||(e[13]=l=>d.value.simple=l),label:n(s)("forms.dateTimePicker.basic")},null,8,["modelValue","label"])]),o("div",Se,[a(w,{modelValue:d.value.simple,"onUpdate:modelValue":e[14]||(e[14]=l=>d.value.simple=l),label:n(s)("forms.dateTimePicker.manualInput"),"manual-input":""},null,8,["modelValue","label"])]),o("div",ye,[a(w,{modelValue:d.value.simple,"onUpdate:modelValue":e[15]||(e[15]=l=>d.value.simple=l),label:n(s)("forms.dateTimePicker.disabled"),disabled:""},null,8,["modelValue","label"])])])])]),_:1})]),_:1})]),o("div",Ue,[a(y,null,{default:i(()=>[a(p,null,{default:i(()=>[_(M(n(s)("forms.selects.title")),1)]),_:1}),a(g,null,{default:i(()=>[o("form",null,[o("div",Me,[o("div",Ie,[a(b,{modelValue:G.value,"onUpdate:modelValue":e[16]||(e[16]=l=>G.value=l),label:n(s)("forms.selects.simple"),"text-by":"description","track-by":"id",options:k.value},null,8,["modelValue","label","options"])]),o("div",ke,[a(b,{modelValue:N.value,"onUpdate:modelValue":e[17]||(e[17]=l=>N.value=l),label:n(s)("forms.selects.multi"),"text-by":"description","track-by":"id",multiple:"",options:k.value},null,8,["modelValue","label","options"])]),o("div",we,[a(b,{modelValue:h.value,"onUpdate:modelValue":e[18]||(e[18]=l=>h.value=l),label:n(s)("forms.selects.country"),options:I.value},null,8,["modelValue","label","options"])]),o("div",he,[a(b,{modelValue:E.value,"onUpdate:modelValue":e[19]||(e[19]=l=>E.value=l),label:n(s)("forms.selects.countryMulti"),multiple:"",options:I.value},null,8,["modelValue","label","options"])]),o("div",Te,[a(b,{modelValue:L.value,"onUpdate:modelValue":e[20]||(e[20]=l=>L.value=l),label:n(s)("forms.selects.searchable"),searchable:"","text-by":"description","track-by":"id",options:k.value},null,8,["modelValue","label","options"])]),o("div",Ce,[a(b,{modelValue:z.value,"onUpdate:modelValue":e[21]||(e[21]=l=>z.value=l),label:n(s)("forms.selects.searchableMulti"),"text-by":"description",searchable:"",multiple:"",options:I.value},null,8,["modelValue","label","options"])])])])]),_:1})]),_:1})]),o("div",Be,[a(y,null,{default:i(()=>[a(p,null,{default:i(()=>[_(M(n(s)("forms.controls.title")),1)]),_:1}),a(g,null,{default:i(()=>[o("form",null,[o("div",Pe,[o("div",Ae,[o("fieldset",null,[a(V,{modelValue:r.value.unselected,"onUpdate:modelValue":e[22]||(e[22]=l=>r.value.unselected=l),label:n(s)("forms.controls.unselected"),class:"mb-2"},null,8,["modelValue","label"]),a(V,{modelValue:r.value.selected,"onUpdate:modelValue":e[23]||(e[23]=l=>r.value.selected=l),label:n(s)("forms.controls.selected"),class:"mb-2"},null,8,["modelValue","label"]),a(V,{modelValue:r.value.readonly,"onUpdate:modelValue":e[24]||(e[24]=l=>r.value.readonly=l),label:n(s)("forms.controls.readonly"),readonly:"",class:"mb-2"},null,8,["modelValue","label"]),a(V,{modelValue:r.value.disabled,"onUpdate:modelValue":e[25]||(e[25]=l=>r.value.disabled=l),label:n(s)("forms.controls.disabled"),disabled:"",class:"mb-2"},null,8,["modelValue","label"]),a(V,{modelValue:r.value.error,"onUpdate:modelValue":e[26]||(e[26]=l=>r.value.error=l),label:n(s)("forms.controls.error"),error:"",class:"mb-2"},null,8,["modelValue","label"]),a(V,{modelValue:r.value.errorMessages,"onUpdate:modelValue":e[27]||(e[27]=l=>r.value.errorMessages=l),label:n(s)("forms.controls.errorMessage"),error:"","error-messages":F.value,"error-count":2},null,8,["modelValue","label","error-messages"])])]),o("div",De,[o("fieldset",null,[a(U,{modelValue:x.value,"onUpdate:modelValue":e[28]||(e[28]=l=>x.value=l),option:"option1",label:"Radio-1"},null,8,["modelValue"]),a(U,{modelValue:x.value,"onUpdate:modelValue":e[29]||(e[29]=l=>x.value=l),option:"option2",label:"Radio-2"},null,8,["modelValue"])]),o("fieldset",null,[a(U,{modelValue:S.value,"onUpdate:modelValue":e[30]||(e[30]=l=>S.value=l),option:"option1",disabled:"",label:"Disabled Radio-1"},null,8,["modelValue"]),a(U,{modelValue:S.value,"onUpdate:modelValue":e[31]||(e[31]=l=>S.value=l),option:"option2",disabled:"",label:"Disabled Radio-2"},null,8,["modelValue"])])]),o("div",Re,[o("fieldset",null,[a(f,{modelValue:m.value.selected,"onUpdate:modelValue":e[32]||(e[32]=l=>m.value.selected=l),label:"Selected toggle",class:"mr-4 mb-2"},null,8,["modelValue"]),a(f,{modelValue:m.value.unselected,"onUpdate:modelValue":e[33]||(e[33]=l=>m.value.unselected=l),label:"Unselected toggle",class:"mr-4 mb-2"},null,8,["modelValue"])]),o("fieldset",null,[a(f,{modelValue:m.value.disabled,"onUpdate:modelValue":e[34]||(e[34]=l=>m.value.disabled=l),disabled:"",label:"Disabled toggle",class:"mr-4 mb-2"},null,8,["modelValue"]),a(f,{modelValue:m.value.disabled,"onUpdate:modelValue":e[35]||(e[35]=l=>m.value.disabled=l),readonly:"",label:"Readonly toggle",class:"mr-4 mb-2"},null,8,["modelValue"])]),o("fieldset",null,[a(f,{modelValue:m.value.small,"onUpdate:modelValue":e[36]||(e[36]=l=>m.value.small=l),size:"small",label:"Small toggle",class:"mr-4 mb-2"},null,8,["modelValue"]),a(f,{modelValue:m.value.large,"onUpdate:modelValue":e[37]||(e[37]=l=>m.value.large=l),size:"large",label:"Large toggle",class:"mr-4 mb-2"},null,8,["modelValue"])])])])])]),_:1})]),_:1})])])])}}});const Ee=X(Fe,[["__scopeId","data-v-77d9dcb8"]]);export{Ee as default};