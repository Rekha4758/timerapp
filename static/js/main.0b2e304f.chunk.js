(this.webpackJsonptimerapp=this.webpackJsonptimerapp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(4),s=n.n(r),a=(n(9),n(2)),o=n(0);var d=function(e){return Object(o.jsxs)("div",{className:e.second%2===0?"mainContainer":"container",children:[Object(o.jsx)("div",{className:"inner-div",children:e.hour}),Object(o.jsx)("div",{className:"inner-div",children:e.minute}),Object(o.jsxs)("div",{className:"inner-div",children:[e.second," "]})]})};n(11);var j=function(){var e=(new Date).getHours().toString(),t=(new Date).getMinutes().toString(),n=(new Date).getSeconds().toString(),i=Object(c.useState)(e),r=Object(a.a)(i,2),s=r[0],j=r[1],u=Object(c.useState)(t),g=Object(a.a)(u,2),b=g[0],l=g[1],h=Object(c.useState)(n),O=Object(a.a)(h,2),m=O[0],v=O[1];return setInterval((function(){e=(new Date).getHours().toString(),t=(new Date).getMinutes().toString(),n=(new Date).getSeconds().toString(),1===e.length&&(e="0"+e),1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),j(e),l(t),v(n)}),1e3),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d,{hour:s,minute:b,second:m})})};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0b2e304f.chunk.js.map