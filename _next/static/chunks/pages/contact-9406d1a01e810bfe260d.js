(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1911:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});t(1664);var n=t(5893);function a(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"Footer",children:[(0,n.jsx)("div",{className:"footerPt1"}),(0,n.jsx)("div",{className:"footerPt2",children:(0,n.jsx)("h4",{children:"\xa9 High Definition 2021 | All Rights Reserved | Designed by High Definition"})})]})})}},4013:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var n=t(5893);function a(e){var s=e.title,t=e.description;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"Header",children:(0,n.jsxs)("div",{className:"headerborder",children:[(0,n.jsx)("h1",{children:s}),(0,n.jsx)("p",{children:t})]})})})}},8e3:function(e,s,t){"use strict";t.d(s,{Z:function(){return o}});var n=t(1664),a=(t(5675),"/_next/static/image/assets/images/logo.9b501cce84bdcd781e8008bc556bcb09.png"),i=t(7294),c=t(9398),r=t(7625),l=t(5893);function o(e){var s=e.name,t=(0,i.useState)("none"),o=t[0],d=t[1],h=(0,i.useState)(0),u=(h[0],h[1]);(0,i.useEffect)((function(){return window.addEventListener("resize",m),m(),function(){return window.removeEventListener("resize",m)}}),[]);var m=function(){u(window.innerWidth),window.innerWidth>=768&&d("flex");try{document.getElementById(s+"").classList.add("this-page")}catch(e){}};return(0,l.jsx)("div",{className:"Tabs",children:(0,l.jsxs)("ul",{className:"tabs",children:[(0,l.jsx)("li",{className:"logo",children:(0,l.jsx)(n.default,{href:"/",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:a,width:"45px",height:"45px"})})})}),(0,l.jsx)("li",{style:{display:o},className:"tab",children:(0,l.jsx)(n.default,{href:"/",children:(0,l.jsx)("a",{id:"Home",className:"tab-label",children:"Home"})})}),(0,l.jsx)("li",{style:{display:o},className:"tab",children:(0,l.jsx)(n.default,{href:"/about",children:(0,l.jsx)("a",{id:"About",className:"tab-label",children:"About"})})}),(0,l.jsx)("li",{style:{display:o},className:"tab",children:(0,l.jsx)(n.default,{href:"/events",children:(0,l.jsx)("a",{id:"Events",className:"tab-label",children:"Events"})})}),(0,l.jsx)("li",{style:{display:o},className:"tab",children:(0,l.jsx)(n.default,{href:"/accomplishments",children:(0,l.jsx)("a",{id:"Accomplishments",className:"tab-label",children:"Accomplishments"})})}),(0,l.jsx)("li",{style:{display:o},className:"tab",children:(0,l.jsx)(n.default,{href:"/resources",children:(0,l.jsx)("a",{id:"Resources",className:"tab-label",children:"Resources"})})}),(0,l.jsx)("li",{style:{display:o},className:"tab",children:(0,l.jsx)(n.default,{href:"/contact",children:(0,l.jsx)("a",{id:"Contact",className:"tab-label",children:"Contact"})})}),(0,l.jsx)("li",{onClick:function(){d("flex"==o?"none":"flex")},className:"toggle",style:{padding:5,paddingBottom:10,marginRight:10},children:(0,l.jsx)("span",{className:"bars",children:(0,l.jsx)(r.G,{icon:c.xiG,width:"26",height:"26",style:{color:"white"}})})})]})})}},2453:function(e,s,t){"use strict";t.d(s,{Z:function(){return i}});t(4298);var n=t(9008),a=t(5893);function i(e){var s=e.name;return(0,a.jsxs)(n.default,{children:[(0,a.jsxs)("title",{children:["High Definition | ",s]}),(0,a.jsx)("meta",{name:"description",content:"FIRST Tech Challenge Team 18225, High Definition, is a team of 14 enthusiastic students with a passion for STEAM and robotics. Our goal is to inspire students to participate in FIRST competitions to kickstart their STEM journies."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{rel:"icon",href:"/logo.png"})]})}},8918:function(e,s,t){"use strict";function n(e,s,t,n,a,i,c){try{var r=e[i](c),l=r.value}catch(o){return void t(o)}r.done?s(l):Promise.resolve(l).then(n,a)}t.r(s),t.d(s,{default:function(){return u}});var a=t(7757),i=t.n(a),c=t(8e3),r=t(2453),l=t(4013),o=t(1911),d=t(7294),h=t(5893);function u(){var e=(0,d.useState)(""),s=e[0],t=e[1],a=(0,d.useState)(""),u=a[0],m=a[1],f=(0,d.useState)(""),x=f[0],j=f[1],p=(0,d.useState)(""),g=p[0],b=p[1],v=function(){var e,t=(e=i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{fetch("/api/contact?name=".concat(s,"&subject=").concat(u,"&email=").concat(x,"&message=").concat(g.replace(/\n/g,"<br>"))).then((function(e){return e.json()})).then((function(e){0==e.error?document.getElementById("successMessage").innerHTML="Successfully sent!":document.getElementById("successMessage").innerHTML="Error: "+e.message}))}catch(n){document.getElementById("successMessage").innerHTML=n}case 2:case"end":return e.stop()}}),e)})),function(){var s=this,t=arguments;return new Promise((function(a,i){var c=e.apply(s,t);function r(e){n(c,a,i,r,l,"next",e)}function l(e){n(c,a,i,r,l,"throw",e)}r(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Z,{name:"Contact"}),(0,h.jsx)(c.Z,{name:"Contact"}),(0,h.jsx)(l.Z,{title:"Contact",description:"Want to reach us? Contact us below!"}),(0,h.jsx)("div",{className:"Contact",children:(0,h.jsx)("div",{className:"middle",children:(0,h.jsxs)("div",{className:"contact-form-box",children:[(0,h.jsxs)("div",{className:"contact-title",children:[(0,h.jsx)("h1",{style:{padding:0,margin:0},children:"CONTACT US"}),(0,h.jsxs)("p",{style:{padding:0,margin:0},children:["Or reach us at ",(0,h.jsx)("a",{href:"mailto:ftc18225@gmail.com",children:"ftc18225@gmail.com"})]})]}),(0,h.jsxs)("form",{className:"contact-form",onSubmit:v,children:[(0,h.jsx)("label",{for:"firstname",children:"Name: "}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"text",id:"name",name:"name",value:s,onChange:function(e){t(e.target.value)},placeholder:"Type Name Here..."}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("label",{for:"email",children:"Email: "}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"text",id:"email",name:"email",value:x,onChange:function(e){j(e.target.value)},placeholder:"Email..."}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("label",{for:"subject",children:"Subject: "}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"text",id:"subject",name:"subject",value:u,onChange:function(e){m(e.target.value)},placeholder:"Subject..."}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("label",{for:"message",children:"Message: "}),(0,h.jsx)("br",{}),(0,h.jsx)("textarea",{name:"message",id:"user-message",rows:"10",value:g,onChange:function(e){b(e.target.value)},placeholder:"Enter your message..."}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("button",{type:"submit",className:"submit",children:"Send"}),(0,h.jsx)("p",{id:"successMessage",style:{color:"rgb(255, 255, 255)"}})]})]})})}),(0,h.jsx)(o.Z,{})]})}},3269:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(8918)}])}},function(e){e.O(0,[774,523,577,888,179],(function(){return s=3269,e(e.s=s);var s}));var s=e.O();_N_E=s}]);