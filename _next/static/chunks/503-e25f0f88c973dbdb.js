(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{3621:function(e,n,t){"use strict";t(5893),t(2814),t(7294),t(1664)},5034:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var r=t(5893),i=t(7294),o=t(3935),a=t(4087),s=t.n(a);var l=function(e,n){};function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(i[t]=e[t]);return i}var d=function(){};function f(e){return null!=e&&e.current?e.current.scrollHeight:(l(!0,"useCollapse was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\n{...getCollapseProps({refKey: 'innerRef'})}"),"auto")}var h=function(){var e=arguments;return function(){var n=arguments;return[].slice.call(e).forEach((function(e){return e&&e.apply(void 0,[].slice.call(n))}))}};function p(e,n){if(null!=e)if("function"==typeof e)e(n);else try{e.current=n}catch(t){throw new Error('Cannot assign value "'+n+'" to ref "'+e+'"')}}var m="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,g=!1,v=0,x=function(){return++v},y=["duration","easing","collapseStyles","expandStyles","onExpandStart","onExpandEnd","onCollapseStart","onCollapseEnd","isExpanded","defaultExpanded","hasDisabledAnimation"],b=["disabled","onClick"],j=["style","onTransitionEnd","refKey"];var w=t(2814),E=t(1436);function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){C(e,n,t[n])}))}return e}function N(e){var n=(0,i.useState)(!1),t=n[0],a=n[1],v=function(e){var n,t=void 0===e?{}:e,r=t.duration,a=t.easing,v=void 0===a?"cubic-bezier(0.4, 0, 0.2, 1)":a,w=t.collapseStyles,E=void 0===w?{}:w,C=t.expandStyles,S=void 0===C?{}:C,N=t.onExpandStart,k=void 0===N?d:N,T=t.onExpandEnd,O=void 0===T?d:T,R=t.onCollapseStart,A=void 0===R?d:R,D=t.onCollapseEnd,P=void 0===D?d:D,F=t.isExpanded,H=t.defaultExpanded,z=void 0!==H&&H,I=t.hasDisabledAnimation,Z=void 0!==I&&I,W=u(t,y),L=function(e,n){var t=(0,i.useState)(n||!1),r=t[0],o=t[1],a=(0,i.useRef)(null!=e),s=a.current?e:r,c=(0,i.useCallback)((function(e){a.current||o(e)}),[]);return(0,i.useEffect)((function(){l(!(a.current&&null==e),"useCollapse is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),l(!(!a.current&&null!=e),"useCollapse is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")}),[e]),[s,c]}(F,z),M=L[0],q=L[1],_=function(e){var n=g?x():null,t=(0,i.useState)(n),r=t[0],o=t[1];return m((function(){null===r&&o(x())}),[]),(0,i.useEffect)((function(){!1===g&&(g=!0)}),[]),null!=r?String(r):void 0}(),B=(0,i.useRef)(null);n=B,(0,i.useEffect)((function(){}),[n]);var K,G,Q,U=(W.collapsedHeight||0)+"px",$={display:"0px"===U?"none":"block",height:U,overflow:"hidden"},J=(0,i.useState)(M?{}:$),V=J[0],X=J[1],Y=function(e){(0,o.flushSync)((function(){X(e)}))},ee=function(e){Y((function(n){return c({},n,e)}))};function ne(e){if(Z)return{};var n=r||function(e){if(!e||"string"==typeof e)return 0;var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(e);return{transition:"height "+n+"ms "+v}}K=function(){s()(M?function(){k(),ee(c({},S,{willChange:"height",display:"block",overflow:"hidden"})),s()((function(){var e=f(B);ee(c({},ne(e),{height:e}))}))}:function(){A();var e=f(B);ee(c({},E,ne(e),{willChange:"height",height:e})),s()((function(){ee({height:U,overflow:"hidden"})}))})},G=[M],Q=(0,i.useRef)(!0),(0,i.useEffect)((function(){if(!Q.current)return K();Q.current=!1}),G);var te=function(e){if(e.target===B.current&&"height"===e.propertyName)if(M){var n=f(B);n===V.height?Y({}):ee({height:n}),O()}else V.height===U&&(Y($),P())};return{getToggleProps:function(e){var n=void 0===e?{}:e,t=n.disabled,r=void 0!==t&&t,i=n.onClick,o=void 0===i?d:i,a=u(n,b);return c({type:"button",role:"button",id:"react-collapsed-toggle-"+_,"aria-controls":"react-collapsed-panel-"+_,"aria-expanded":M,tabIndex:0,disabled:r},a,{onClick:r?d:h(o,(function(){return q((function(e){return!e}))}))})},getCollapseProps:function(e){var n,t=void 0===e?{}:e,r=t.style,i=void 0===r?{}:r,o=t.onTransitionEnd,a=void 0===o?d:o,s=t.refKey,l=void 0===s?"ref":s,f=u(t,j);return c({id:"react-collapsed-panel-"+_,"aria-hidden":!M},f,((n={})[l]=function(){var e=[].slice.call(arguments);return e.every((function(e){return null==e}))?null:function(n){e.forEach((function(e){p(e,n)}))}}(B,f[l]),n.onTransitionEnd=h(te,a),n.style=c({boxSizing:"border-box"},i,V),n))},isExpanded:M,setExpanded:q}}({isExpanded:t}),C=v.getCollapseProps,N=v.getToggleProps;return(0,r.jsxs)("div",{className:"collapsible",children:[(0,r.jsx)("div",S({className:"header"},N({onClick:function(){a(!t)}}),{children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(w.G,{icon:t?E.gc2:E.onQ,width:"25",height:"25",className:"icon",style:{marginRight:15,color:"white",margin:0,padding:0}}),(0,r.jsx)("h4",{children:e.title})]})})),(0,r.jsx)("div",S({},C(),{children:(0,r.jsx)("div",{className:"content",children:e.children})}))]})}},9504:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(7294);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(s)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){var n=a(i.useState(!1),2),t=n[0],o=n[1],s=i.useRef();return i.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting)}))})).observe(s.current)}),[]),(0,r.jsx)("div",{className:"fade ".concat(t?"is-visible":""),ref:s,children:e.children})}},6151:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893);t(1664);function i(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"Footer",children:(0,r.jsx)("div",{className:"footerPt2",children:(0,r.jsx)("h4",{children:"Website Developed by High Definition"})})})})}},4683:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(7294),o=t(6885),a=t(1955);t(3621);function s(e){var n=e.title,t=e.description,s=e.page,l=(0,i.useState)(""),c=(l[0],l[1]);(0,i.useEffect)((function(){return window.addEventListener("resize",u),u(),function(){return window.removeEventListener("resize",u)}}),[]);var u=function(){window.innerWidth>=768?c("/images/TeamPicture.png"):c("/images/phonebackground.png")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{name:s}),(0,r.jsxs)("div",{className:"coolHeader",style:{backgroundRepeat:"no-repeat",backgroundPosition:"top right",backgroundAttachment:"fixed",backgroundSize:"cover",height:"Home"==s?"100vh":"60vh"},children:[(0,r.jsx)(a.Z,{name:s}),(0,r.jsx)("div",{className:"sidepanel",style:{height:"Home"==s?"70vh":"25vh"},children:(0,r.jsxs)("div",{style:{fontFamily:"Roboto",fontWeight:400,color:"white"},className:"floating",children:[(0,r.jsx)("h1",{style:{marginBottom:5},children:n}),(0,r.jsx)("p",{style:{margin:0,padding:0,fontSize:25},children:t}),(0,r.jsx)("p",{style:{margin:0,padding:0},children:(0,r.jsx)("i",{children:"FTC Team 18225"})})]})})]})]})}},1955:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(1664),o=(t(5675),"/_next/static/media/logo.0e2d33c4.png"),a=t(7294),s=t(1436),l=t(2814);function c(e){var n=e.name,t=(0,a.useState)("none"),c=t[0],u=t[1],d=(0,a.useState)(0),f=(d[0],d[1]);(0,a.useEffect)((function(){return window.addEventListener("resize",h),h(),function(){return window.removeEventListener("resize",h)}}),[]);var h=function(){f(window.innerWidth),window.innerWidth>=768&&u("flex");try{document.getElementById(n+"").classList.add("this-page")}catch(e){}};return(0,r.jsx)("div",{className:"Tabs",children:(0,r.jsxs)("ul",{className:"tabs",children:[(0,r.jsx)("li",{className:"logo",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:o,width:"45px",height:"45px"})})})}),(0,r.jsx)("li",{style:{display:c},className:"tab",children:(0,r.jsx)(i.default,{href:"/",as:"https://ftc18225.everstem.org/",children:(0,r.jsx)("a",{id:"Home",className:"tab-label",children:"Home"})})}),(0,r.jsx)("li",{style:{display:c},className:"tab",children:(0,r.jsx)(i.default,{href:"/about",as:"https://ftc18225.everstem.org/about",children:(0,r.jsx)("a",{id:"About",className:"tab-label",children:"About"})})}),(0,r.jsx)("li",{style:{display:c},className:"tab",children:(0,r.jsx)(i.default,{href:"/events",as:"https://ftc18225.everstem.org/events",children:(0,r.jsx)("a",{id:"Events",className:"tab-label",children:"Events"})})}),(0,r.jsx)("li",{style:{display:c},className:"tab",children:(0,r.jsx)(i.default,{href:"/seasons",as:"https://ftc18225.everstem.org/seasons",children:(0,r.jsx)("a",{id:"Seasons",className:"tab-label",children:"Seasons"})})}),(0,r.jsx)("li",{style:{display:c},className:"tab",children:(0,r.jsx)(i.default,{href:"/resources",as:"https://ftc18225.everstem.org/resources",children:(0,r.jsx)("a",{id:"Resources",className:"tab-label",children:"Resources"})})}),(0,r.jsx)("li",{style:{display:c},className:"tab",children:(0,r.jsx)(i.default,{href:"/contact",as:"https://ftc18225.everstem.org/contact",children:(0,r.jsx)("a",{id:"Contact",className:"tab-label",children:"Contact"})})}),(0,r.jsx)("li",{onClick:function(){u("flex"==c?"none":"flex")},className:"toggle",style:{padding:5,paddingBottom:10,marginRight:10},children:(0,r.jsx)("span",{className:"bars",children:(0,r.jsx)(l.G,{icon:s.xiG,width:"26",height:"26",style:{color:"white"}})})})]})})}},7135:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893);function i(e){var n=e.name;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{style:{fontFamily:"Hubballi",fontSize:35,transform:"scale(1, 1.3)",textAlign:"center"},children:n}),(0,r.jsx)("hr",{style:{width:300}})]})}},6885:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(9008);function o(e){var n=e.name;return(0,r.jsxs)(i.default,{children:[(0,r.jsxs)("title",{children:["High Definition | ",n]}),(0,r.jsx)("meta",{name:"description",content:"We are First Tech Challenge (FTC) Team 18225 High Definition, a 2nd year veteran robotics team from Bellevue, Washington composed of 13 enthusiastic students grades 7-12. Our mission is to promote STEM and FIRST within our community to inspire the next generation of innovators to solve challenges of the future! We spread mechanical, programming, business, and other practices within the community to ensure their success."}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),(0,r.jsx)("meta",{property:"og:image",content:"/logo.png"}),(0,r.jsx)("link",{rel:"icon",href:"/logo.png"})]})}},75:function(e,n,t){var r=t(3454);(function(){var n,t,i,o,a,s;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof r&&null!==r&&r.hrtime?(e.exports=function(){return(n()-a)/1e6},t=r.hrtime,o=(n=function(){var e;return 1e9*(e=t())[0]+e[1]})(),s=1e9*r.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)},4087:function(e,n,t){for(var r=t(75),i="undefined"===typeof window?t.g:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],l=i["cancel"+a]||i["cancelRequest"+a],c=0;!s&&c<o.length;c++)s=i[o[c]+"Request"+a],l=i[o[c]+"Cancel"+a]||i[o[c]+"CancelRequest"+a];if(!s||!l){var u=0,d=0,f=[];s=function(e){if(0===f.length){var n=r(),t=Math.max(0,16.666666666666668-(n-u));u=t+n,setTimeout((function(){var e=f.slice(0);f.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(u)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(t))}return f.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var n=0;n<f.length;n++)f[n].handle===e&&(f[n].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){l.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}}]);