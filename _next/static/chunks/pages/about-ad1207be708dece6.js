(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8961:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(6075)}])},3621:function(e,s,i){"use strict";i(5893),i(2814),i(7294),i(1664)},9504:function(e,s,i){"use strict";i.d(s,{Z:function(){return o}});var a=i(5893),n=i(7294);function t(e,s){(null==s||s>e.length)&&(s=e.length);for(var i=0,a=new Array(s);i<s;i++)a[i]=e[i];return a}function r(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,n,t=[],r=!0,o=!1;try{for(i=i.call(e);!(r=(a=i.next()).done)&&(t.push(a.value),!s||t.length!==s);r=!0);}catch(l){o=!0,n=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}return t}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return t(e,s);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){var s=r(n.useState(!1),2),i=s[0],t=s[1],o=n.useRef();return n.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return t(e.isIntersecting)}))})).observe(o.current)}),[]),(0,a.jsx)("div",{className:"fade ".concat(i?"is-visible":""),ref:o,children:e.children})}},6151:function(e,s,i){"use strict";i.d(s,{Z:function(){return n}});var a=i(5893);i(1664);function n(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"Footer",children:(0,a.jsx)("div",{className:"footerPt2",children:(0,a.jsx)("h4",{children:"Website Developed by High Definition"})})})})}},4683:function(e,s,i){"use strict";i.d(s,{Z:function(){return o}});var a=i(5893),n=i(7294),t=i(6885),r=i(1955);i(3621);function o(e){var s=e.title,i=e.description,o=e.page,l=(0,n.useState)(""),c=(l[0],l[1]);(0,n.useEffect)((function(){return window.addEventListener("resize",d),d(),function(){return window.removeEventListener("resize",d)}}),[]);var d=function(){window.innerWidth>=768?c("/images/TeamPicture.png"):c("/images/phonebackground.png")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.Z,{name:o}),(0,a.jsxs)("div",{className:"coolHeader",style:{backgroundRepeat:"no-repeat",backgroundPosition:"top right",backgroundAttachment:"fixed",backgroundSize:"cover",height:"Home"==o?"100vh":"60vh"},children:[(0,a.jsx)(r.Z,{name:o}),(0,a.jsx)("div",{className:"sidepanel",style:{height:"Home"==o?"70vh":"25vh"},children:(0,a.jsxs)("div",{style:{fontFamily:"Roboto",fontWeight:400,color:"white"},className:"floating",children:[(0,a.jsx)("h1",{style:{marginBottom:5},children:s}),(0,a.jsx)("p",{style:{margin:0,padding:0,fontSize:25},children:i}),(0,a.jsx)("p",{style:{margin:0,padding:0},children:(0,a.jsx)("i",{children:"FTC Team 18225"})})]})})]})]})}},1955:function(e,s,i){"use strict";i.d(s,{Z:function(){return c}});var a=i(5893),n=i(1664),t=(i(5675),"/_next/static/media/logo.0e2d33c4.png"),r=i(7294),o=i(1436),l=i(2814);function c(e){var s=e.name,i=(0,r.useState)("none"),c=i[0],d=i[1],h=(0,r.useState)(0),m=(h[0],h[1]);(0,r.useEffect)((function(){return window.addEventListener("resize",g),g(),function(){return window.removeEventListener("resize",g)}}),[]);var g=function(){m(window.innerWidth),window.innerWidth>=768&&d("flex");try{document.getElementById(s+"").classList.add("this-page")}catch(e){}};return(0,a.jsx)("div",{className:"Tabs",children:(0,a.jsxs)("ul",{className:"tabs",children:[(0,a.jsx)("li",{className:"logo",children:(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:t,width:"45px",height:"45px"})})})}),(0,a.jsx)("li",{style:{display:c},className:"tab",children:(0,a.jsx)(n.default,{href:"/",as:"https://ftc18225.everstem.org/",children:(0,a.jsx)("a",{id:"Home",className:"tab-label",children:"Home"})})}),(0,a.jsx)("li",{style:{display:c},className:"tab",children:(0,a.jsx)(n.default,{href:"/about",as:"https://ftc18225.everstem.org/about",children:(0,a.jsx)("a",{id:"About",className:"tab-label",children:"About"})})}),(0,a.jsx)("li",{style:{display:c},className:"tab",children:(0,a.jsx)(n.default,{href:"/events",as:"https://ftc18225.everstem.org/events",children:(0,a.jsx)("a",{id:"Events",className:"tab-label",children:"Events"})})}),(0,a.jsx)("li",{style:{display:c},className:"tab",children:(0,a.jsx)(n.default,{href:"/seasons",as:"https://ftc18225.everstem.org/seasons",children:(0,a.jsx)("a",{id:"Seasons",className:"tab-label",children:"Seasons"})})}),(0,a.jsx)("li",{style:{display:c},className:"tab",children:(0,a.jsx)(n.default,{href:"/resources",as:"https://ftc18225.everstem.org/resources",children:(0,a.jsx)("a",{id:"Resources",className:"tab-label",children:"Resources"})})}),(0,a.jsx)("li",{style:{display:c},className:"tab",children:(0,a.jsx)(n.default,{href:"/contact",as:"https://ftc18225.everstem.org/contact",children:(0,a.jsx)("a",{id:"Contact",className:"tab-label",children:"Contact"})})}),(0,a.jsx)("li",{onClick:function(){d("flex"==c?"none":"flex")},className:"toggle",style:{padding:5,paddingBottom:10,marginRight:10},children:(0,a.jsx)("span",{className:"bars",children:(0,a.jsx)(l.G,{icon:o.xiG,width:"26",height:"26",style:{color:"white"}})})})]})})}},7135:function(e,s,i){"use strict";i.d(s,{Z:function(){return n}});var a=i(5893);function n(e){var s=e.name;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{fontFamily:"Hubballi",fontSize:35,transform:"scale(1, 1.3)",textAlign:"center"},children:s}),(0,a.jsx)("hr",{style:{width:300}})]})}},6885:function(e,s,i){"use strict";i.d(s,{Z:function(){return r}});var a=i(5893),n=i(4298),t=i(9008);function r(e){var s=e.name;return(0,a.jsxs)(t.default,{children:[(0,a.jsxs)("title",{children:["High Definition | ",s]}),(0,a.jsx)("meta",{name:"description",content:"We are First Tech Challenge (FTC) Team 18225 High Definition, a 2nd year veteran robotics team from Bellevue, Washington composed of 13 enthusiastic students grades 7-12. Our mission is to promote STEM and FIRST within our community to inspire the next generation of innovators to solve challenges of the future! We spread mechanical, programming, business, and other practices within the community to ensure their success."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),(0,a.jsx)("meta",{property:"og:image",content:"/logo.png"}),(0,a.jsx)(n.default,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-HMB95Q5EXV"}),(0,a.jsx)(n.default,{type:"text/javascript",dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'G-HMB95Q5EXV');\n            "}}),(0,a.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-HMB95Q5EXV"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'G-HMB95Q5EXV', {\n                page_path: window.location.pathname,\n                });\n            "}}),(0,a.jsx)("link",{rel:"icon",href:"/logo.png"})]})}},6075:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return h}});var a=i(5893),n=(i(1955),i(6885),i(4683)),t=i(6151),r=i(7135),o=(i(3621),i(9504)),l=i(5675),c=i(7294);c.useLayoutEffect=c.useEffect;var d=function(e){var s=e.src,i=e.width,a=e.quality;return"https://ftc18225.everstem.org/".concat(s,"?w=").concat(i,"&q=").concat(a||85)};function h(){var e=230,s=300;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{title:"About",page:"About",description:"Meet the Team!"}),(0,a.jsxs)("div",{className:"About",children:[(0,a.jsx)("div",{className:"typewriter",style:{textAlign:"center",fontFamily:"Mali",fontSize:30,flexDirection:"row",paddingTop:20,paddingBottom:20},children:"Our mission is to promote STEM and FIRST within our community to help establish the next generation of innovators!"}),(0,a.jsx)(o.Z,{children:(0,a.jsxs)("div",{className:"section",children:[(0,a.jsx)(r.Z,{name:"Coaches"}),(0,a.jsxs)("div",{className:"person-grid grid",children:[(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/coaches/jason.png",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Coach Jason"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Coach Jason, a civil engineer and Mechanical Design Mentor. I helped form and develop the team by providing strategic guidance. I work closely with our mechanical team with training and purchasing robot parts, 3D printing parts, and helping our team handle logistic and administrative tasks."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/coaches/liangshou.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Coach Liangshou"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Liangshou Wu, and I work for Google. I have been a mentor/coach for FLL and FTC for 4 years. I enjoy working with students in various FIRST programs. Specifically in FTC 18225, I have been focusing on coaching programming and mentoring other FTC teams."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/coaches/lynne.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Coach Lynne"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Lynne Dong, and I work for Microsoft. I have been coaching and mentoring FLL and FTC teams for the past 9 years. It's my pleasure to work with so many talented students in FIRST by teaching them technical/business skills and connecting them with professionals in the tech industry."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/coaches/mark.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Coach Mark"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Mark Ma, and I work for the King County DJA. I have been an FTC mentor/coach for 3 years. Supporting STEM is one of my biggest passions, and in FIRST, I focus on coaching the mechanical/CAD team. I strive to push students to think creatively while learning important skills such as problem analysis and resolution."})]})]})]})}),(0,a.jsx)(o.Z,{children:(0,a.jsxs)("div",{className:"section",children:[(0,a.jsx)(r.Z,{name:"Mentors"}),(0,a.jsxs)("div",{className:"person-grid grid",children:[(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/mentors/mihir.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Mihir Jain"})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/mentors/patrick.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Patrick Tien"})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/mentors/xiaoxi.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Xiaoxi Wang"})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/mentors/yinhai.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Yinhai Wang"})]})]})]})}),(0,a.jsx)(o.Z,{children:(0,a.jsxs)("div",{className:"section",children:[(0,a.jsx)(r.Z,{name:"The Team"}),(0,a.jsxs)("div",{className:"person-grid grid",children:[(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/teammembers/albert.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Albert Lu"}),(0,a.jsx)("p",{className:"description",children:"CAD"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Albert, a 7th grader at Tyee Middle School. This is my 3rd year in FIRST (2nd in FLL, 1st in FTC). I like to read, play the clarinet, and programming in my free time. I also have a science YouTube channel which I update weekly."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/teammembers/allen.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Allen Wu"}),(0,a.jsx)("p",{className:"description",children:"Co-Captain"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Allen, a freshman at Newport High School. This is my 2nd year of FTC, following 2 years of FLL. Outside of robotics, I'm extremely passionate about competitive programming and piano. I also enjoy playing basketball, tennis, volleyball, and hang out with friends!"})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/teammembers/andrew.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Andrew Pai"}),(0,a.jsx)("p",{className:"description",children:"Safety Captain"}),(0,a.jsx)("p",{className:"description",children:"Drive / Mechanical"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Andrew, a 9th grader at Newport High School. This is my 1st year in both FTC and FRC. In my free time, I play various sports like tennis or basketball, hang out with friends, read books from the Mistborn series and the Grishaverse, play video games, and binge anime."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/teammembers/andy.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Andy Tien"}),(0,a.jsx)("p",{className:"description",children:"CAD / Mech Lead"}),(0,a.jsx)("p",{className:"description"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Andy, a freshman at Newport High School. This is my 1st year of FTC, following 2 years of FLL. When I'm not dabbling in competitive and robotics mechanical engineering and programming, I enjoy playing soccer and violin."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/teammembers/eesha.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Eesha Jain"}),(0,a.jsx)("p",{className:"description",children:"Co-Captain"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Eesha, a 9th grader at Interlake High School. This is my 5th year in FIRST (2 in FLL and 3 in FTC). In my free time, I enjoy web and app development, writing, listening to music, and hanging out with my friends."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/teammembers/eugene.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Eugene Li"}),(0,a.jsx)("p",{className:"description",children:"Outreach"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Eugene, a freshman at Newport High School. This is my 2nd year of FTC following 1 year of FLL. Some fun facts about me are I have a passion for music, my favorite series is the Lord of the Rings trilogy, vanilla is my favorite icecream flavor, and I hate the sound of Velcro."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/teammembers/julia.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Julia Wang"}),(0,a.jsx)("p",{className:"description",children:"Co-Captain"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Julia, a sophomore at The Bush School. This is my 2nd year of FTC following 1 year of FLL. Some of my favorite things include golf, Pixar, astrology, Valorant, strawberry icecream, and the Land of Stories book series."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/teammembers/rohit.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Rohit Venkatesan"}),(0,a.jsx)("p",{className:"description",children:"CAD / Mechanical"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Rohit, an 8th grader at Evergreen Middle School. This is my 1st year of FTC following 1 year of FLL and 2 years of VEX (IQ). My current hobbies include reading, playing board games, and playing the piano and several percussion instruments."})]})]})]})}),(0,a.jsx)(o.Z,{children:(0,a.jsxs)("div",{className:"section",children:[(0,a.jsx)(r.Z,{name:"Alumni"}),(0,a.jsxs)("div",{className:"person-grid grid",children:[(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/alumni/emma.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Emma Shi"}),(0,a.jsx)("p",{className:"description",children:"Team Co-Founder"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Emma, and I have 9 years of experience in FIRST (6th year in FTC), and enjoyed learning the disciplines of FIRST. As a co-captain, I led business and outreach aspects of our team, including mentoring our younger team members. Outside of robotics, I like to read, bake, listen to musicals, ski, and play games!"})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/alumni/erik.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Erik Ma"}),(0,a.jsx)("p",{className:"description",children:"Team Co-Founder"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Erik, and I have 3 years of experience in FIRST, and I have a big passion for engineering. As co-captain, I managed the overall architectural design of our robot (mechanical, programming, and CAD), led the drive team, and mentored students in robotics. In my free time, I love spending time with friends, hosting events, and playing ultimate frisbee!"})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/alumni/katrina.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Katrina Li"}),(0,a.jsx)("p",{className:"description"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Katrina, and I focused on business and outreach. I am really interested in how engineering can be used to solve current challenges in ethical ways. In my free time I enjoy baking, hiking, and watching documentaries."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/alumni/lucas.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Lucas Wu"}),(0,a.jsx)("p",{className:"description"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Lucas, and I have 3 years of experience in FTC, focusing mainly on documentation and hardware aspects of the robot. Outside of FIRST and robotics, I spend time studying math and chemistry, and enjoy reading novels and playing the piano in my free time."})]}),(0,a.jsxs)("div",{className:"grid-item",children:[(0,a.jsx)(l.default,{loader:d,src:"/images/alumni/rishabh.jpg",height:s,width:e,className:"member"}),(0,a.jsx)("h3",{children:"Rishabh Venkatesan"}),(0,a.jsx)("p",{className:"description"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{style:{fontWeight:300},children:"I'm Rishabh, and I have 5 years of FIRST experience in both FTC and FRC. As a programmer, I have learned many techniques and solutions to common issues over my journey in FIRST! In my free time, I sketch cars, learn about new technologies, and play basketball for fun."})]})]})]})})]}),(0,a.jsx)(t.Z,{})]})}}},function(e){e.O(0,[523,36,774,888,179],(function(){return s=8961,e(e.s=s);var s}));var s=e.O();_N_E=s}]);