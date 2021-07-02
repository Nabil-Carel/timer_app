(this.webpackJsonptimer_app=this.webpackJsonptimer_app||[]).push([[0],{102:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(21),c=n.n(i),a=(n(96),n(76)),s=n(30),u=n.n(s),l=n(37),d=n(23),j=(n(97),n(32)),f=(n(98),n(111)),b=n(114),m=n(115),p=n(116),O=n(113),h=n(52),g=(n(79),n(6));function v(e){var t=e.onButtonClick,n=e.iconComponent,o=e.text,i=e.id,c=Object(r.useState)({borderColor:"transparent"}),a=Object(d.a)(c,2),s=a[0],u=a[1],l=n,j={borderColor:"#40a9ff"},f={borderColor:"transparent"};return Object(g.jsx)(O.a,{title:o,onConfirm:i?function(e){return t(e)}:t,okText:"Yes",cancelText:"No",children:Object(g.jsx)(h.a,{type:"default",style:s,onMouseEnter:function(){return u(j)},onMouseLeave:function(){return u(f)},icon:Object(g.jsx)(l,{})})})}n(102);function x(e){var t=e.elapsedTime,n=e.timerRunning,o=e.onTimerStartedOrStopped,i=e.runningSince,c=e.reset,a=Object(r.useState)((function(){var e;e=c?0:i?(Number(Date.now())-Number(i)+Number(t)).toString():t;return e})),s=Object(d.a)(a,2),u=s[0],l=s[1];Object(r.useEffect)((function(){var e;if(c)l(0);else{n&&(e=setInterval((function(){return l((Number(u)+1e3).toString())}),1e3))}return function(){clearInterval(e)}}),[u,n,c]),Object(r.useEffect)((function(){o(u)}),[n]);var j=function(e){return e<=9?"0".concat(e):e};return Object(g.jsx)("h2",{id:"time",children:function(e){var t=Math.floor(e/864e5),n=e%864e5,r=Math.floor(n/36e5),o=e%36e5,i=Math.floor(o/6e4),c=e%6e4,a=Math.floor(c/1e3);return j(t)+"d "+j(r)+":"+j(i)+":"+j(a)}(u)})}function C(e){var t=e.onButtonClick,n=e.timerRunning,r=e.reset,o={margin:0,borderColor:!n||r?"#40a9ff":"#FF726F",color:!n||r?"#40a9ff":"#FF726F"};return Object(g.jsx)(h.a,{block:!0,style:o,onClick:t,children:!n||r?"Start":"Stop"})}function T(e){var t=e.title,n=e.description,r=e.elapsedTime,o=e.runningSince,i=e.onTimerEdit,c=e.onTimerStart,a=e.onTimerStop,s=e.onTimerDelete,u=e.onTimerStartedOrStopped,l=e.timerRunning,d=e.setTimerRunning,j=e.onTimerReset,O=e.reset,h=e.id;return Object(g.jsx)("div",{children:Object(g.jsxs)(f.a,{className:"Card",hoverable:!0,size:"small",antd:"true",style:{width:300,marginTop:16,borderColor:"#dcdcdc"},actions:[Object(g.jsx)(C,{onButtonClick:function(){return l?(d(!1),void a()):(d(!0),void c())},timerRunning:l,reset:O},"1")],children:[Object(g.jsx)("h2",{id:"t",children:Object(g.jsx)("b",{children:t})}),Object(g.jsx)("h4",{id:"t",className:"ant-card-meta-description",children:n}),Object(g.jsx)(x,{elapsedTime:r,timerRunning:l,runningSince:o,onTimerStartedOrStopped:u,reset:O}),Object(g.jsxs)("div",{className:"actionButtonBar",children:[Object(g.jsx)(v,{onButtonClick:i,iconComponent:b.a,text:"Are you sure you want to edit this timer?"}),Object(g.jsx)(v,{onButtonClick:j,iconComponent:m.a,text:"Are you sure you want to reset this timer"}),Object(g.jsx)(v,{iconComponent:p.a,onButtonClick:s,text:"Are you sure you want to delete this timer?",id:h})]})]})})}var S=n(112);n(105);function y(e){var t=e.onTitleChange,n=e.onDescriptionChange,r=e.onCancelClick,o=e.onTimerSubmit,i=e.id,c=e.title,a=e.description;return Object(g.jsx)("div",{children:Object(g.jsxs)(f.a,{className:"Card",hoverable:!0,size:"small",antd:"true",style:{width:300,marginTop:16,borderColor:"#dcdcdc"},actions:[Object(g.jsxs)(h.a.Group,{style:{width:280},children:[Object(g.jsx)(h.a,{type:"default",block:"true",id:"button",onClick:function(){o()},children:i?"Update":"Create"},"create"),Object(g.jsx)(h.a,{type:"default",block:"true",danger:!0,onClick:function(){r()},children:"Cancel"},"cancel")]},"buttonGroup")],children:[Object(g.jsx)("label",{children:Object(g.jsx)("b",{children:"Title"})}),Object(g.jsx)(S.a,{placeholder:"Title",style:{marginBottom:16},onChange:function(e){return function(e){t(e)}(e)},value:c}),Object(g.jsx)("label",{children:Object(g.jsx)("b",{children:"Description"})}),Object(g.jsx)(S.a,{placeholder:"Description",style:{marginBottom:0},onChange:function(e){return function(e){n(e)}(e)},value:a})]})})}var k=n(87),w="https://us-central1-timer-app-81306.cloudfunctions.net/app/",N=function(e){return fetch("".concat(w).concat(e._id),{method:"PUT",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return console.log("success"),e.json()})).catch((function(t){return k.b.error("Something went wrong. Could not update timer."),console.log(t.message,e),null}))},B=function(e){return fetch("".concat(w).concat(e),{method:"DELETE",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e})).catch((function(e){console.log(e.message),k.b.error("Something went wrong. Could not delete timer.")}))};function D(e){var t=e.timer,n=e.onTimerDelete,o=Object(r.useState)({formClosed:!0}),i=Object(d.a)(o,2),c=i[0],a=i[1],s=Object(r.useState)(t),f=Object(d.a)(s,2),b=f[0],m=f[1],p=Object(r.useState)(b.elapsedTime),O=Object(d.a)(p,2),h=O[0],v=O[1],x=Object(r.useState)(Boolean(b.runningSince)),C=Object(d.a)(x,2),S=C[0],w=C[1],D=Object(r.useState)(!1),E=Object(d.a)(D,2),_=E[0],F=E[1];Object(r.useEffect)((function(){var e;S||F(!1),e=_?Object(j.a)(Object(j.a)({},b),{},{runningSince:"",elapsedTime:""}):Object(j.a)(Object(j.a)({},b),{},{elapsedTime:S?b.elapsedTime:h,runningSince:S?b.runningSince||Date.now().toString():""}),L(b,e)||M(e).then((function(){_&&k.b.success("Timer reset.")}))}),[h,S,_]);var R=function(){a({formClosed:!c.formClosed})},M=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:if(!(n=e.sent)){e.next=8;break}return m(n),e.abrupt("return",!0);case 8:return k.b.error("Couldn't update timer."),k.b.error(t.title),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:(r=e.sent).ok?(console.log("ok",r.ok),n(t),k.b.success("Timer sucessfully deleted.")):k.b.error("Couldn't delete timer.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function L(e,t){var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0,i=n;o<i.length;o++){var c=i[o],a=e[c],s=t[c],u=I(a)&&I(s);if(u&&!L(a,s)||!u&&a!==s)return!1}return!0}function I(e){return null!=e&&"object"===typeof e}return Object(g.jsx)("div",{children:c.formClosed?Object(g.jsx)(T,{title:b.title,description:b.description,id:b._id,elapsedTime:b.elapsedTime,runningSince:b.runningSince,timerRunning:S,setTimerRunning:w,onTimerEdit:R,onTimerStart:function(){w(!0)},onTimerStop:function(){w(!1)},onTimerDelete:function(){return A(b._id)},onTimerReset:function(){F(!0),w(!1)},onTimerStartedOrStopped:v,reset:_}):Object(g.jsx)(y,{onTitleChange:function(e){var t={_id:b._id,title:e.target.value};m(t)},onDescriptionChange:function(e){var t={_id:b._id,description:e.target.value};m(t)},onCancelClick:R,onTimerSubmit:function(){return function(e){M(e)&&(a({formClosed:!c.formClosed}),k.b.success("Timer sucessfully updated."))}(b)},id:b._id,title:b.title,description:b.description})})}var E=n(90);function _(e){var t=e.onTimerCreate,n=e.loading,o=Object(r.useState)({formOpened:!1}),i=Object(d.a)(o,2),c=i[0],a=i[1],s=Object(r.useState)({title:"",description:"",runningSince:"",elapsedTime:""}),f=Object(d.a)(s,2),b=f[0],m=f[1],p=function(){a({formOpened:!c.formOpened})},O=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("timer",b),e.next=3,r=b,fetch("".concat(w,"create"),{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(e){return k.b.error("Something went wrong. Could not create timer."),console.log(e.message),null}));case 3:(n=e.sent)&&t(n),p();case 6:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}(),v=n?null:Object(g.jsx)(h.a,{type:"default",style:{marginTop:10},onClick:p,icon:Object(g.jsx)(E.a,{className:"button"})});return Object(g.jsx)("div",{children:c.formOpened?Object(g.jsx)(y,{onTitleChange:function(e){var t=Object(j.a)(Object(j.a)({},b),{},{title:e.target.value});m(t)},onDescriptionChange:function(e){m(Object(j.a)(Object(j.a)({},b),{},{description:e.target.value}))},onCancelClick:p,onTimerSubmit:O,id:b._id||"",title:b.title,description:b.description}):v})}n(107);var F=n(56);function R(e){var t=e.loading,n=e.setLoading;return Object(r.useEffect)((function(){return setTimeout((function(){return n(!1)}),1e4)}),[]),Object(g.jsx)("div",{children:t?Object(g.jsx)(F.a,{style:{fontSize:"5vw"},className:"center-screen"}):Object(g.jsx)("h4",{children:"Nothing to display"})})}var M=n(31),A=n(110);var L=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!0),c=Object(d.a)(i,2),s=c[0],j=c[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w,{method:"GET",mode:"cors"}).then((function(e){return e.json()}));case 2:t=e.sent,o(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f={margin:0},b=function(e){var t=n.findIndex((function(t){return t.id===e.id})),r=Object(a.a)(n);r[t]=e,o(r)},m=function(e){console.log("removed");var t=n.filter((function(t){return e!==t._id}));console.log("filtered timers",t),o(t)},p=n.length>0?n.map((function(e){return Object(g.jsx)(D,{timer:e,onTimerUpdate:b,onTimerDelete:m},e._id)})):Object(g.jsx)(R,{loading:s,setLoading:j});return Object(g.jsx)("div",{className:"dashboard",children:Object(g.jsxs)(M.a,{align:"center",children:[Object(g.jsx)("h1",{style:f,children:"Timers"}),Object(g.jsx)(A.a,{style:f}),p,Object(g.jsx)(_,{onTimerCreate:function(e){o([].concat(Object(a.a)(n),[e]))},loading:s})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),I()},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.26240513.chunk.js.map