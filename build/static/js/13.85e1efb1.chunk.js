(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{190:function(n,t,e){},31:function(n,t,e){"use strict";var c=e(38),s=e.n(c);t.a=s.a.create({baseURL:"http://localhost:5000"})},373:function(n,t,e){"use strict";e.r(t);var c=e(37),s=e(0),a=e.n(s),i=e(9),r=e(31),l=(e(190),e(1)),u=Object(s.lazy)((function(){return e.e(4).then(e.bind(null,150))})),j=Object(s.lazy)((function(){return e.e(22).then(e.bind(null,254))}));t.default=function(){var n=Object(s.useState)([]),t=Object(c.a)(n,2),e=t[0],b=t[1];return a.a.useEffect((function(){r.a.get("images").then((function(n){b(n.data)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"Landing__cat",children:e.length>0?e.map((function(n,t){return Object(l.jsx)(i.b,{to:"/"+n.name,children:Object(l.jsx)(j,{id:t,title:n.name,imgsrc:n.img,content:null},t)})})):Object(l.jsx)("div",{className:"spinner-container",children:Object(l.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(l.jsx)("span",{className:"sr-only"})})})})]})}}}]);
//# sourceMappingURL=13.85e1efb1.chunk.js.map