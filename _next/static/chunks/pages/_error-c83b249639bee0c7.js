(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{6582:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(6135)}])},3621:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893),a=n(1436),i=n(2814),r=n(7294);n(1664);function l(){return(0,r.useEffect)((function(){null!=localStorage.getItem("banner1")&&null!=localStorage.getItem("timeClosed")||(localStorage.setItem("banner1","block"),localStorage.setItem("timeClosed","none")),(Date.now()-localStorage.getItem("timeClosed"))/1e3>=3600&&(localStorage.removeItem("banner1"),localStorage.removeItem("timeClosed")),document.getElementById("banner1").style.display=localStorage.getItem("banner1"),document.getElementById("banner-x").addEventListener("click",(function(){localStorage.setItem("banner1","none"),document.getElementById("banner1").style.display=localStorage.getItem("banner1"),localStorage.setItem("timeClosed",Date.now())}))}),[]),(0,s.jsx)("div",{className:"Banner",children:(0,s.jsxs)("div",{className:"row banner-bar",style:{textAlign:"center"},id:"banner1",children:[(0,s.jsx)("div",{className:"col banner-left",children:(0,s.jsxs)("p",{children:["Stay updated on FTC 18225 and ",(0,s.jsx)("a",{style:{color:"rgb(0, 0, 180)"},target:"_blank",href:"https://forms.gle/diWqmexeMQcUMmXo7",children:"join our subscription"})]})}),(0,s.jsx)("div",{className:"col banner-right",children:(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"banner-x",id:"banner-x",children:(0,s.jsx)(i.G,{icon:a.NBC})})})})]})})}},6151:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893);n(1664);function a(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"Footer",children:(0,s.jsx)("div",{className:"footerPt2",children:(0,s.jsx)("h4",{children:"Website Developed by High Definition"})})})})}},4683:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(5893),a=n(7294),i=n(6885),r=n(1955),l=n(3621);function c(e){var t=e.title,n=e.description,c=e.page,o=(0,a.useState)(""),d=(o[0],o[1]);(0,a.useEffect)((function(){return window.addEventListener("resize",h),h(),function(){return window.removeEventListener("resize",h)}}),[]);var h=function(){window.innerWidth>=768?d("/images/TeamPicture.png"):d("/images/phonebackground.png")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{name:c}),(0,s.jsxs)("div",{className:"coolHeader",style:{backgroundRepeat:"no-repeat",backgroundPosition:"top right",backgroundAttachment:"fixed",backgroundSize:"cover",height:"Home"==c?"100vh":"60vh"},children:[(0,s.jsx)(r.Z,{name:c}),(0,s.jsx)("div",{className:"sidepanel",style:{height:"Home"==c?"70vh":"25vh"},children:(0,s.jsxs)("div",{style:{fontFamily:"Roboto",fontWeight:400,color:"white"},className:"floating",children:[(0,s.jsx)("h1",{style:{marginBottom:5},children:t}),(0,s.jsx)("p",{style:{margin:0,padding:0,fontSize:25},children:n}),(0,s.jsx)("p",{style:{margin:0,padding:0},children:(0,s.jsx)("i",{children:"FTC Team 18225"})})]})})]}),(0,s.jsx)(l.Z,{})]})}},1955:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),a=n(1664),i=(n(5675),"/_next/static/media/logo.0e2d33c4.png"),r=n(7294),l=n(1436),c=n(2814);function o(e){var t=e.name,n=(0,r.useState)("none"),o=n[0],d=n[1],h=(0,r.useState)(0),u=(h[0],h[1]);(0,r.useEffect)((function(){return window.addEventListener("resize",m),m(),function(){return window.removeEventListener("resize",m)}}),[]);var m=function(){u(window.innerWidth),window.innerWidth>=768&&d("flex");try{document.getElementById(t+"").classList.add("this-page")}catch(e){}};return(0,s.jsx)("div",{className:"Tabs",children:(0,s.jsxs)("ul",{className:"tabs",children:[(0,s.jsx)("li",{className:"logo",children:(0,s.jsx)(a.default,{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:i,width:"45px",height:"45px"})})})}),(0,s.jsx)("li",{style:{display:o},className:"tab",children:(0,s.jsx)(a.default,{href:"/",children:(0,s.jsx)("a",{id:"Home",className:"tab-label",children:"Home"})})}),(0,s.jsx)("li",{style:{display:o},className:"tab",children:(0,s.jsx)(a.default,{href:"/about",children:(0,s.jsx)("a",{id:"About",className:"tab-label",children:"About"})})}),(0,s.jsx)("li",{style:{display:o},className:"tab",children:(0,s.jsx)(a.default,{href:"/events",children:(0,s.jsx)("a",{id:"Events",className:"tab-label",children:"Events"})})}),(0,s.jsx)("li",{style:{display:o},className:"tab",children:(0,s.jsx)(a.default,{href:"/seasons",children:(0,s.jsx)("a",{id:"Seasons",className:"tab-label",children:"Seasons"})})}),(0,s.jsx)("li",{style:{display:o},className:"tab",children:(0,s.jsx)(a.default,{href:"/resources",children:(0,s.jsx)("a",{id:"Resources",className:"tab-label",children:"Resources"})})}),(0,s.jsx)("li",{style:{display:o},className:"tab",children:(0,s.jsx)(a.default,{href:"/contact",children:(0,s.jsx)("a",{id:"Contact",className:"tab-label",children:"Contact"})})}),(0,s.jsx)("li",{onClick:function(){d("flex"==o?"none":"flex")},className:"toggle",style:{padding:5,paddingBottom:10,marginRight:10},children:(0,s.jsx)("span",{className:"bars",children:(0,s.jsx)(c.G,{icon:l.xiG,width:"26",height:"26",style:{color:"white"}})})})]})})}},7135:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893);function a(e){var t=e.name;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{style:{fontFamily:"Hubballi",fontSize:35,transform:"scale(1, 1.3)",textAlign:"center"},children:t}),(0,s.jsx)("hr",{style:{width:300}})]})}},6885:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(5893),a=n(9008);function i(e){var t=e.name;return(0,s.jsxs)(a.default,{children:[(0,s.jsxs)("title",{children:["High Definition | ",t]}),(0,s.jsx)("meta",{name:"description",content:"We are First Tech Challenge (FTC) Team 18225 High Definition, a 2nd year veteran robotics team from Bellevue, Washington composed of 13 enthusiastic students grades 7-12. Our mission is to promote STEM and FIRST within our community to inspire the next generation of innovators to solve challenges of the future! We spread mechanical, programming, business, and other practices within the community to ensure their success."}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),(0,s.jsx)("meta",{property:"og:image",content:"/logo.png"}),(0,s.jsx)("link",{rel:"icon",href:"/logo.png"})]})}},6135:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(5893),a=(n(1955),n(6885),n(4683)),i=n(6151),r=n(7135),l=n(1664);function c(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{title:"Error",page:"Error",description:"Our wires have been cut short! Try going to another page."}),(0,s.jsx)("div",{className:"Error",children:(0,s.jsxs)("div",{className:"section",children:[(0,s.jsx)(r.Z,{name:"Pages"}),(0,s.jsx)("p",{children:"Here are some pages you can check out:"}),(0,s.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsxs)("ul",{style:{textAlign:"left"},children:[(0,s.jsx)("li",{className:"tab",children:(0,s.jsx)(l.default,{href:"/",as:"https://ftc18225.everstem.org/",children:(0,s.jsx)("a",{id:"Home",className:"tab-label",children:"Home"})})}),(0,s.jsx)("li",{className:"tab",children:(0,s.jsx)(l.default,{href:"/about",as:"https://ftc18225.everstem.org/about",children:(0,s.jsx)("a",{id:"About",className:"tab-label",children:"About"})})}),(0,s.jsx)("li",{className:"tab",children:(0,s.jsx)(l.default,{href:"/events",as:"https://ftc18225.everstem.org/events",children:(0,s.jsx)("a",{id:"Events",className:"tab-label",children:"Events"})})}),(0,s.jsx)("li",{className:"tab",children:(0,s.jsx)(l.default,{href:"/seasons",as:"https://ftc18225.everstem.org/seasons",children:(0,s.jsx)("a",{id:"Seasons",className:"tab-label",children:"Seasons"})})}),(0,s.jsx)("li",{className:"tab",children:(0,s.jsx)(l.default,{href:"/resources",as:"https://ftc18225.everstem.org/resources",children:(0,s.jsx)("a",{id:"Resources",className:"tab-label",children:"Resources"})})}),(0,s.jsx)("li",{className:"tab",children:(0,s.jsx)(l.default,{href:"/contact",as:"https://ftc18225.everstem.org/contact",children:(0,s.jsx)("a",{id:"Contact",className:"tab-label",children:"Contact"})})})]})})]})}),(0,s.jsx)(i.Z,{})]})}}},function(e){e.O(0,[523,444,774,888,179],(function(){return t=6582,e(e.s=t);var t}));var t=e.O();_N_E=t}]);