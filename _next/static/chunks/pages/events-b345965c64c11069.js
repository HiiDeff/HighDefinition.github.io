(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{3454:function(e,n,t){"use strict";var i,r;e.exports=(null===(i=t.g.process)||void 0===i?void 0:i.env)&&"object"===typeof(null===(r=t.g.process)||void 0===r?void 0:r.env)?t.g.process:t(7663)},3200:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return t(4039)}])},5034:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var i=t(5893),r=t(7294),o=t(3935),s=t(4087),l=t.n(s);var c=function(e,n){};function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n.indexOf(t=o[i])>=0||(r[t]=e[t]);return r}var u=function(){};function h(e){return null!=e&&e.current?e.current.scrollHeight:(c(!0,"useCollapse was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\n{...getCollapseProps({refKey: 'innerRef'})}"),"auto")}var f=function(){var e=arguments;return function(){var n=arguments;return[].slice.call(e).forEach((function(e){return e&&e.apply(void 0,[].slice.call(n))}))}};function p(e,n){if(null!=e)if("function"==typeof e)e(n);else try{e.current=n}catch(t){throw new Error('Cannot assign value "'+n+'" to ref "'+e+'"')}}var x="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,v=!1,g=0,j=function(){return++g},y=["duration","easing","collapseStyles","expandStyles","onExpandStart","onExpandEnd","onCollapseStart","onCollapseEnd","isExpanded","defaultExpanded","hasDisabledAnimation"],m=["disabled","onClick"],b=["style","onTransitionEnd","refKey"];var w=t(2814),E=t(1436);function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){C(e,n,t[n])}))}return e}function S(e){var n=(0,r.useState)(!1),t=n[0],s=n[1],g=function(e){var n,t=void 0===e?{}:e,i=t.duration,s=t.easing,g=void 0===s?"cubic-bezier(0.4, 0, 0.2, 1)":s,w=t.collapseStyles,E=void 0===w?{}:w,C=t.expandStyles,T=void 0===C?{}:C,S=t.onExpandStart,R=void 0===S?u:S,W=t.onExpandEnd,k=void 0===W?u:W,A=t.onCollapseStart,P=void 0===A?u:A,O=t.onCollapseEnd,I=void 0===O?u:O,N=t.isExpanded,L=t.defaultExpanded,D=void 0!==L&&L,_=t.hasDisabledAnimation,F=void 0!==_&&_,M=d(t,y),B=function(e,n){var t=(0,r.useState)(n||!1),i=t[0],o=t[1],s=(0,r.useRef)(null!=e),l=s.current?e:i,a=(0,r.useCallback)((function(e){s.current||o(e)}),[]);return(0,r.useEffect)((function(){c(!(s.current&&null==e),"useCollapse is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),c(!(!s.current&&null!=e),"useCollapse is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")}),[e]),[l,a]}(N,D),K=B[0],Z=B[1],H=function(e){var n=v?j():null,t=(0,r.useState)(n),i=t[0],o=t[1];return x((function(){null===i&&o(j())}),[]),(0,r.useEffect)((function(){!1===v&&(v=!0)}),[]),null!=i?String(i):void 0}(),G=(0,r.useRef)(null);n=G,(0,r.useEffect)((function(){}),[n]);var V,q,z,X=(M.collapsedHeight||0)+"px",J={display:"0px"===X?"none":"block",height:X,overflow:"hidden"},Q=(0,r.useState)(K?{}:J),Y=Q[0],U=Q[1],$=function(e){(0,o.flushSync)((function(){U(e)}))},ee=function(e){$((function(n){return a({},n,e)}))};function ne(e){if(F)return{};var n=i||function(e){if(!e||"string"==typeof e)return 0;var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(e);return{transition:"height "+n+"ms "+g}}V=function(){l()(K?function(){R(),ee(a({},T,{willChange:"height",display:"block",overflow:"hidden"})),l()((function(){var e=h(G);ee(a({},ne(e),{height:e}))}))}:function(){P();var e=h(G);ee(a({},E,ne(e),{willChange:"height",height:e})),l()((function(){ee({height:X,overflow:"hidden"})}))})},q=[K],z=(0,r.useRef)(!0),(0,r.useEffect)((function(){if(!z.current)return V();z.current=!1}),q);var te=function(e){if(e.target===G.current&&"height"===e.propertyName)if(K){var n=h(G);n===Y.height?$({}):ee({height:n}),k()}else Y.height===X&&($(J),I())};return{getToggleProps:function(e){var n=void 0===e?{}:e,t=n.disabled,i=void 0!==t&&t,r=n.onClick,o=void 0===r?u:r,s=d(n,m);return a({type:"button",role:"button",id:"react-collapsed-toggle-"+H,"aria-controls":"react-collapsed-panel-"+H,"aria-expanded":K,tabIndex:0,disabled:i},s,{onClick:i?u:f(o,(function(){return Z((function(e){return!e}))}))})},getCollapseProps:function(e){var n,t=void 0===e?{}:e,i=t.style,r=void 0===i?{}:i,o=t.onTransitionEnd,s=void 0===o?u:o,l=t.refKey,c=void 0===l?"ref":l,h=d(t,b);return a({id:"react-collapsed-panel-"+H,"aria-hidden":!K},h,((n={})[c]=function(){var e=[].slice.call(arguments);return e.every((function(e){return null==e}))?null:function(n){e.forEach((function(e){p(e,n)}))}}(G,h[c]),n.onTransitionEnd=f(te,s),n.style=a({boxSizing:"border-box"},r,Y),n))},isExpanded:K,setExpanded:Z}}({isExpanded:t}),C=g.getCollapseProps,S=g.getToggleProps;return(0,i.jsxs)("div",{className:"collapsible",children:[(0,i.jsx)("div",T({className:"header"},S({onClick:function(){s(!t)}}),{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(w.G,{icon:t?E.gc2:E.onQ,width:"25",height:"25",className:"icon",style:{marginRight:15,color:"white",margin:0,padding:0}}),(0,i.jsx)("h4",{children:e.title})]})})),(0,i.jsx)("div",T({},C(),{children:(0,i.jsx)("div",{className:"content",children:e.children})}))]})}},4039:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(5893),r=t(4683),o=t(6151),s=t(7135),l=t(4336),c=t(7294),a=t(9504),d=t(5034);function u(){var e=(0,c.useState)(0),n=e[0],t=e[1];(0,c.useEffect)((function(){return window.addEventListener("resize",u),u(),function(){return window.removeEventListener("resize",u)}}),[]);var u=function(){t(window.innerWidth)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{title:"Events",page:"Events",description:"Join us at our various events!"}),(0,i.jsxs)("div",{className:"Events",children:["\u200b",(0,i.jsx)(l.Z,{}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)("div",{className:"section",children:[(0,i.jsx)(s.Z,{name:"Past Events"}),(0,i.jsxs)("div",{id:"outreaches",children:[(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:20},children:(0,i.jsx)("a",{className:"purplebutton",href:"https://www.youtube.com/c/EverstemEducation",target:"_blank",children:"Watch Our CWP Events Here"})}),(0,i.jsx)("div",{className:"eventsection",children:"STEM Advocacy"}),(0,i.jsx)("div",{className:"eventsection",children:"Washington Tech Invitationals (Co-Hosted with Saints Robotics)"}),(0,i.jsx)("div",{className:"eventsection",children:"Chipotle Fundraiser"}),(0,i.jsx)("div",{className:"eventsection",children:"Python Workshop"}),(0,i.jsx)("div",{className:"eventsection",children:(0,i.jsxs)(d.Z,{title:"Connecting with Professionals",children:[(0,i.jsx)("br",{}),n<800?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("ul",{style:{fontWeight:300},children:[(0,i.jsx)("li",{children:"Self Taught Airplane Building and Pilot"}),(0,i.jsx)("li",{children:"Wearable Technology Workshop"}),(0,i.jsx)("li",{children:"Intelligent Transportation Systems"}),(0,i.jsx)("li",{children:"Careers at iRobot"}),(0,i.jsx)("li",{children:"Careers in the Gaming Industry"}),(0,i.jsx)("li",{children:"Startup Life Cycle and Business Funding"}),(0,i.jsx)("li",{children:"Robotics Industry in Japan"}),(0,i.jsx)("li",{children:"The Art of Business and Inventing"}),(0,i.jsx)("li",{children:"Mixed Reality & Robotics"}),(0,i.jsx)("li",{children:"Robotics in Medicine"}),(0,i.jsx)("li",{children:"Business and Entrepreneurship in Robotics"}),(0,i.jsx)("li",{children:"Gravitational Waves in Astronomy"}),(0,i.jsx)("li",{children:"AI Applications in Transportation Engineering"}),(0,i.jsx)("li",{children:"Connected Automated Vehicles"}),(0,i.jsx)("li",{children:"Leveraging Scale Designs for Connected Automated Vehicles Research"}),(0,i.jsx)("li",{children:"Artificial Intelligence and Robotics"}),(0,i.jsx)("li",{children:"Science & Education: Indoors and Out"}),(0,i.jsx)("li",{children:"IP Protection in Robotics and Smart Transportation"})]})}):(0,i.jsxs)("table",{id:"professionals",children:[(0,i.jsxs)("tr",{id:"firstrow",children:[(0,i.jsx)("th",{children:"EVENT"}),(0,i.jsx)("th",{children:"PROFESSIONALS"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Self Taught Airplane Building and Pilot"}),(0,i.jsx)("td",{children:"Walter Haag"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Wearable Technology Workshop"}),(0,i.jsx)("td",{children:"Kitty Yeung"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Computer Vision for Intelligent Transportation Systems"}),(0,i.jsx)("td",{children:"Ruimin Ke"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Careers at iRobot"}),(0,i.jsx)("td",{children:"iRobot"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Careers in the Gaming Industry"}),(0,i.jsx)("td",{children:"Robert Neckorcuk & Kirk Williford"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Startup Life Cycle and Business Funding"}),(0,i.jsx)("td",{children:"Howie Xu"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Robotics Industry in Japan"}),(0,i.jsx)("td",{children:"Shiyu Xia"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"The Art of Business and Inventing"}),(0,i.jsx)("td",{children:"Ryfka Schafer"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Mixed Reality & Robotics"}),(0,i.jsx)("td",{children:"Jeff Delmerico"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Robotics in Medicine"}),(0,i.jsx)("td",{children:"Chumyan Wu"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Business and Entrepreneurship in Robotics"}),(0,i.jsx)("td",{children:"Fab Qian, Meera Rajagopalan, & Hannah Liu"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Gravitational Waves in Astronomy"}),(0,i.jsx)("td",{children:"Gwynne Crowder"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"AI Applications in Transportation Engineering"}),(0,i.jsx)("td",{children:"Yinhai Wang"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Connected Automated Vehicles"}),(0,i.jsx)("td",{children:"Xiaopeng (Shaw) Li"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Leveraging Scale Designs for Connected Automated Vehicles Research"}),(0,i.jsx)("td",{children:"Osama Osman"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Artificial Intelligence and Robotics"}),(0,i.jsx)("td",{children:"Anne Kao"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"Science & Education: Indoors and Out"}),(0,i.jsx)("td",{children:"Laura LeBlanc"})]}),(0,i.jsxs)("tr",{style:{fontWeight:300},children:[(0,i.jsx)("td",{children:"IP Protection in Robotics and Smart Transportation"}),(0,i.jsx)("td",{children:"Shaobin Zhu"})]})]})]})})]})]})})]}),(0,i.jsx)(o.Z,{})]})}},7663:function(e){!function(){var n={162:function(e){var n,t,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(i){try{return n.call(null,e,0)}catch(i){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:r}catch(e){n=r}try{t="function"===typeof clearTimeout?clearTimeout:o}catch(e){t=o}}();var l,c=[],a=!1,d=-1;function u(){a&&l&&(a=!1,l.length?c=l.concat(c):d=-1,c.length&&h())}function h(){if(!a){var e=s(u);a=!0;for(var n=c.length;n;){for(l=c,c=[];++d<n;)l&&l[d].run();d=-1,n=c.length}l=null,a=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function p(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new f(e,n)),1!==c.length||a||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}},s=!0;try{n[e](o,o.exports,i),s=!1}finally{s&&delete t[e]}return o.exports}i.ab="//";var r=i(162);e.exports=r}()},75:function(e,n,t){var i=t(3454);(function(){var n,t,r,o,s,l;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof i&&null!==i&&i.hrtime?(e.exports=function(){return(n()-s)/1e6},t=i.hrtime,o=(n=function(){var e;return 1e9*(e=t())[0]+e[1]})(),l=1e9*i.uptime(),s=o-l):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},4087:function(e,n,t){for(var i=t(75),r="undefined"===typeof window?t.g:window,o=["moz","webkit"],s="AnimationFrame",l=r["request"+s],c=r["cancel"+s]||r["cancelRequest"+s],a=0;!l&&a<o.length;a++)l=r[o[a]+"Request"+s],c=r[o[a]+"Cancel"+s]||r[o[a]+"CancelRequest"+s];if(!l||!c){var d=0,u=0,h=[];l=function(e){if(0===h.length){var n=i(),t=Math.max(0,16.666666666666668-(n-d));d=t+n,setTimeout((function(){var e=h.slice(0);h.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(d)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(t))}return h.push({handle:++u,callback:e,cancelled:!1}),u},c=function(e){for(var n=0;n<h.length;n++)h[n].handle===e&&(h[n].cancelled=!0)}}e.exports=function(e){return l.call(r,e)},e.exports.cancel=function(){c.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=c}}},function(e){e.O(0,[523,36,930,774,888,179],(function(){return n=3200,e(e.s=n);var n}));var n=e.O();_N_E=n}]);