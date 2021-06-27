(function(e){function t(t){for(var n,a,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},u=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-12efdab3":"586daacc","chunk-2d2086b7":"9aaf2bec","chunk-2d217357":"f19ece5a"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e);var i=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",i.name="ChunkLoadError",i.type=n,i.request=u,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.error?r("Errors",{attrs:{msg:e.error}}):e._e(),r("router-view")],1)},u=[],a=r("5530"),s=r("2f62"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col bg-gray-100 items-center justify-center py-6"},[r("div",{staticClass:"alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300"},[r("div",{staticClass:"alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"},[r("span",{staticClass:"text-red-500"},[r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),r("div",{staticClass:"alert-content ml-4"},[r("div",{staticClass:"alert-title font-semibold text-lg text-red-800"},[e._v(" Error ")]),r("div",{staticClass:"alert-description text-sm text-red-600"},[e._v(" "+e._s(e.msg)+" ")])])])])},i=[],l={props:["msg"]},p=l,f=r("2877"),d=Object(f["a"])(p,c,i,!1,null,null,null),m=d.exports,g={components:{Errors:m},computed:Object(a["a"])({},Object(s["c"])(["error"]))},h=g,v=Object(f["a"])(h,o,u,!1,null,null,null),b=v.exports,w=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),_=r("1da1"),x=(r("96cf"),r("bc3a")),y=r.n(x),k={token:localStorage.getItem("token")||"",user:{},status:"",error:null},j={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error}},O={login:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,o,u,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("login_request"),r.prev=2,r.next=5,y.a.post("/api/users/login",t);case 5:return o=r.sent,o.data.success&&(u=o.data.token,a=o.data.user,localStorage.setItem("token",u),y.a.defaults.headers.common["Authorization"]=u,n("login_success",u,a)),r.abrupt("return",o);case 10:r.prev=10,r.t0=r["catch"](2),n("login_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},signup:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("signup_request"),r.next=5,y.a.post("/api/users/signup",t);case 5:return o=r.sent,void 0!==o.data.success&&n("signup_success"),r.abrupt("return",o);case 10:r.prev=10,r.t0=r["catch"](1),n("signup_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},getProfile:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("profile_request"),t.next=4,y.a.get("/api/users/profile");case 4:return n=t.sent,r("profile_success",n.data.user),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete y.a.defaults.headers.common["Authorization"],E.push("/"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()}},S={login_request:function(e){e.error=null,e.status="loading"},login_success:function(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},login_error:function(e,t){e.error=t.response.data.msg},signup_request:function(e){e.error=null,e.status="loading"},signup_success:function(e){e.error=null,e.status="success"},signup_error:function(e,t){e.error=t.response.data.msg},logout:function(e){e.error=null,e.status="",e.token="",e.user=""},profile_request:function(e){e.status="loading"},profile_success:function(e,t){e.user=t}},C={state:k,actions:O,mutations:S,getters:j};n["a"].use(s["a"]);var P=new s["a"].Store({modules:{Auth:C},state:{},mutations:{},actions:{}});n["a"].use(w["a"]);var L=[{path:"/",name:"Login",component:function(){return r.e("chunk-2d2086b7").then(r.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:function(){return r.e("chunk-12efdab3").then(r.bind(null,"34c3"))}},{path:"/profile",name:"Profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))}}],q=new w["a"]({mode:"history",base:"/",routes:L});q.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?P.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&P.getters.isLoggedIn?r("/profile"):r()}));var E=q,R=r("683f");r("ba8c");n["a"].use(R["a"]),n["a"].config.productionTip=!1,n["a"].prototype.$http=y.a;var I=localStorage.getItem("token");I&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=I),new n["a"]({router:E,store:P,render:function(e){return e(b)}}).$mount("#app")},ba8c:function(e,t,r){}});
//# sourceMappingURL=app.1fca9399.js.map