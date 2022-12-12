import{_ as x,x as w,t as d,y as o,F as p,D as a,C as t,Q as A,a2 as b,a0 as f,B as r,z as h,A as k,a3 as v,a4 as B}from"./index.e0ba403c.js";import{Q as V,T as P,c as T}from"./ConfirmDialog.95409e67.js";import"./QDialog.faeb3072.js";import"./use-dark.91a7c5f7.js";import"./focus-manager.387b0375.js";import"./scroll.e97c0f8d.js";import"./QCard.37075c91.js";const U=w({name:"PurchasedTicketsPage",components:{QrcodeVue:V,TicketList:P,confirmDialog:T},setup(){const e=d([{name:"One One",image:"https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg",id:"A Level",openDialog:!1},{name:"Htut Myat Min",image:"https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg",id:"A Level",openDialog:!1},{name:"Win Hein",image:"https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg",id:"Section D2",openDialog:!1}]),n=d([{name:"Zyla",image:"https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg",id:"Section D2",openDialog:!1},{name:"Kevin",image:"https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg",id:"Section E(Emerald)",openDialog:!1},{name:"Rosey",image:"https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg",id:"Section F(Diamond)",openDialog:!1}]),_=d([{name:"Yamin",image:"https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg",id:"Section F(Diamond)",openDialog:!1}]);return{unpaidTickets:e,paidTickets:n,usedTickets:_,openUnpaidDialog:s=>{e[s].openDialog=!0},openPaidDialog:s=>{n[s].openDialog=!0}}}}),m=e=>(v("data-v-380eeddd"),e=e(),B(),e),Q={class:"q-mb-xl"},q=m(()=>a("h2",{class:"text-center text-primary"},"Tickets",-1)),O={class:"text-center q-my-xl"},S={class:"q-mb-xl"},z=m(()=>a("h6",{class:"q-mt-sm"}," Scan the QR code through ticket management once the purchase is completed ",-1)),C={class:"row items-center justify-evenly"},H=m(()=>a("h6",{class:"q-mt-sm q-mb-lg"}," Scan the QR code through ticket management once the ticket has been used ",-1)),M={class:"row items-center justify-evenly"};function j(e,n,_,D,y,s){const l=r("ticket-list"),u=r("QrcodeVue"),g=r("confirmDialog");return o(),p("div",Q,[q,a("div",O,[t(A,{class:"manage-ticket-btn",label:"Manage Tickets",size:"xl",color:"primary",ripple:{early:!0},to:{name:"ticket-management"}})]),a("section",S,[t(l,{title:"Unpaid",btnLabel:"Pay",tickets:e.unpaidTickets,onOpenDialog:e.openUnpaidDialog},null,8,["tickets","onOpenDialog"])]),a("section",null,[t(l,{title:"Paid",btnLabel:"Use",tickets:e.paidTickets,onOpenDialog:e.openPaidDialog},null,8,["tickets","onOpenDialog"])]),a("section",null,[t(l,{title:"Used",btnLabel:"",tickets:e.usedTickets},null,8,["tickets"])]),(o(!0),p(b,null,f(e.unpaidTickets,i=>(o(),h(g,{title:"Ticket Payment",key:i.id,modelValue:i.openDialog,"onUpdate:modelValue":c=>i.openDialog=c},{default:k(()=>[z,a("div",C,[t(u,{value:i.id,size:200,level:"H"},null,8,["value"])])]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128)),(o(!0),p(b,null,f(e.paidTickets,i=>(o(),h(g,{title:"Ticket Payment",key:i.id,modelValue:i.openDialog,"onUpdate:modelValue":c=>i.openDialog=c},{default:k(()=>[H,a("div",M,[t(u,{value:i.id,size:200,level:"H"},null,8,["value"])])]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))])}var N=x(U,[["render",j],["__scopeId","data-v-380eeddd"]]);export{N as default};
