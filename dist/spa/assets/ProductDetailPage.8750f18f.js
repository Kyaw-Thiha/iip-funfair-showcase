import{_ as n,x as d,t as m,y as o,F as i,D as e,a1 as t,C as r,Q as l,az as p,a2 as u,a0 as _,A as h,E as g,a3 as q,a4 as v}from"./index.e0ba403c.js";const x=d({name:"ProductDetailPage",components:{},setup(){return{product:m({name:"Good Foods",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",price:5e3,image:"https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg",members:[{name:"Kevin",photo:"https://cdn.quasar.dev/img/avatar4.jpg",class:"A Level"},{name:"Sai Sai",photo:"https://cdn.quasar.dev/img/avatar1.jpg",class:"A Level"},{name:"Hnin Oo",photo:"https://cdn.quasar.dev/img/avatar3.jpg",class:"A Level"},{name:"Yadanar",photo:"https://cdn.quasar.dev/img/avatar2.jpg",class:"A Level"}]})}}}),y=s=>(q("data-v-24807480"),s=s(),v(),s),b={class:"q-mb-xl"},f={class:"q-mx-md-xl q-mx-sm-lg q-mx-xs-sm"},k={class:"text-primary"},A={class:"q-mt-md-xl q-mt-sm-lg q-mt-xs-md"},B={class:"full-screen"},P=y(()=>e("h3",{class:"text-center q-mb-xl"},"Members",-1)),w={class:"row q-mx-lg q-mx-sm-sm"},D={class:"row items-center justify-evenly"},L=["src","alt"],S={class:"q-mb-sm q-mt-lg q-mx-none col-12 text-center"},j={class:"member-class q-py-xs q-px-sm q-mt-md-lg q-mt-sm-md q-mt-xs-sm inline-block"},z={class:"q-mt-lg text-center"};function $(s,C,I,Q,F,U){return o(),i("div",b,[e("section",{class:"full-screen product",style:p({"--imageURL":`url('${s.product.image}')`})},[e("div",f,[e("h2",k,t(s.product.name),1),e("h5",null,t(s.product.description),1),e("h4",A," Price: "+t(s.product.price),1),r(l,{class:"float-right q-my-md",label:"Buy Ticket",size:"xl",color:"primary",ripple:{early:!0}})])],4),e("section",B,[P,e("div",w,[(o(!0),i(u,null,_(s.product.members,(a,c)=>(o(),i("div",{class:"col-md-3 col-sm-4 col-xs-12 q-gutter-sm q-mb-xl",key:c},[e("div",D,[r(g,{size:"128px"},{default:h(()=>[e("img",{src:a.photo,alt:a.name},null,8,L)]),_:2},1024),e("h4",S,t(a.name),1),e("h6",j,t(a.class),1)])]))),128))]),e("div",z,[r(l,{class:"buy-ticket-btn q-mt-xl",label:"Buy Ticket",size:"xl",color:"primary",ripple:{early:!0},rounded:""})])])])}var E=n(x,[["render",$],["__scopeId","data-v-24807480"]]);export{E as default};