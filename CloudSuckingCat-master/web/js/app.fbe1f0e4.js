(function(e){function t(t){for(var o,s,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a7eee70e"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2154:function(e,t,n){"use strict";var o=n("ed34"),r=n.n(o);r.a},2723:function(e,t,n){},"408b":function(e,t,n){"use strict";var o=n("2723"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("7faf"),n("2877")),i={},u=Object(s["a"])(i,r,a,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"con"},[n("vueRtmpPlayer",{attrs:{playsinline:!1,fluid:!0,src:"rtmp://ssr.comeboy.cn:1935/live/pi"}})],1),n("div",{staticClass:"buttoncon"},[n("i",{staticClass:"el-icon-caret-top",class:[0==e.lastKey?"light":""],on:{mousedown:e.setIntervalTodoForward,mouseout:e.clearInterval}}),n("br"),n("i",{staticClass:"el-icon-caret-left",class:[2==e.lastKey?"light":""],staticStyle:{"margin-right":"40px"},on:{mousedown:e.setIntervalTodoLeft,mouseout:e.clearInterval}}),n("i",{staticClass:"el-icon-caret-right",class:[3==e.lastKey?"light":""],on:{mousedown:e.setIntervalTodoRight,mouseout:e.clearInterval}}),n("br"),n("i",{staticClass:"el-icon-caret-bottom",class:[1==e.lastKey?"light":""],on:{mousedown:e.setIntervalTodoBack,mouseout:e.clearInterval}})])])},f=[],p=(n("c975"),n("a434"),n("eb6a"),n("8f13"));n("01a0");function h(e,t){var n=Date.now();return function(){var o=this,r=arguments,a=Date.now();a-n>=t&&(e.apply(o,r),n=Date.now())}}var m=n("bc3a"),y=n.n(m),g=n("4328"),v=n.n(g);y.a.defaults.baseURL="",y.a.defaults.timeout=1e4,y.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";var w=null,b={200:"服务器成功返回请求信息",201:"新建或修改数据成功",202:"一个请求已经进入后台排队(异步任务)",204:"删除时局成功",400:"发出的请求有错误,服务器没有进行操作",401:"未登录或登录超市",403:"没有权限进行此操作",404:"访问的资源不存在",406:"请求的格式不可得",410:"请求的资源被永久删除，且不会在得到",422:"当创建一个对象时,发生一个验证错误",500:"服务期发生错误，请检查服务器",502:"网关错误",503:"服务器不可用，服务器暂时过载或维护",504:"网管超时"},k=y.a.create();function K(e){var t=e.url,n=e.data,o=void 0===n?{}:n,r=e.params,a=void 0===r?{}:r;return new Promise((function(e,n){k.get(t+"?"+v.a.stringify(o),{params:a}).then((function(t){var n=t.data.result;n=void 0==n?t.data:n,console.log("res",t,n),e(n)})).catch((function(e){n(e)}))}))}k.interceptors.request.use((function(e){return e.params.LOADING&&(w=o["default"].prototype.$loading({lock:!0,text:"处理中...",spinner:"el-icon-loading",background:"rgba(0,0,0,0.7)"})),e}),(function(e){return o["default"].prototype.$message({message:"加载超时",type:"worning"}),Promise.reject(e)})),console.log(o["default"].prototype),k.interceptors.response.use((function(e){if(w&&w.close(),e.status>=200&&e.status<300)switch(e.data.reply){case"ok":-2==e.data.result?o["default"].prototype.$message({type:"error",message:"数据异常"}):(e.config.params.SHOW_MESSAGE_SUCCESS&&o["default"].prototype.$message({type:"success",message:"提交成功"}),e.config.params.BACK&&j.go(-1));break;case"userExist":o["default"].prototype.$message({type:"error",message:"用户已经存在"});break;case"invalidArea":o["default"].prototype.$message({type:"error",message:"您所选择的区域无效"}),window.setTimeout((function(){j.push("/poster")}),2500);break;case"unknownError":o["default"].prototype.$message({type:"error",message:"未知错误"});break;case"unLogin":o["default"].prototype.$message({type:"error",message:"未登录"}),window.setTimeout((function(){j.push("/login")}),2500);break;case"accessDenied":o["default"].prototype.$message({type:"error",message:"没有此操作权限"});break;case"invalidParameter":o["default"].prototype.$message({type:"error",message:"无效参数"});break;case"failed":o["default"].prototype.$message({type:"error",message:"提交失败"});break}return e}),(function(e){if(w&&w.close(),e&&e.response){var t=e.response.status,n=b[t]||e.response.statusText;o["default"].prototype.$message({message:n,type:"error"}),401===t?j.push("/login"):403===t?o["default"].prototype.$message({message:"没有此操作权限",type:"error"}):404<=t&&t<422&&j.push("./404")}return Promise.reject(e)})),o["default"].use(p["a"]);var $={name:"Home",data:function(){return{KEY:{up:0,down:1,left:2,right:3},downKeys:[],forward:null,back:null,left:null,right:null,inter:null,ws:null}},computed:{lastKey:function(){var e=this.downKeys;return e[e.length-1]}},mounted:function(){this.forward=h(this._forward,300),this.back=h(this._back,300),this.left=h(this._left,300),this.right=h(this._right,300),this.$window.document.addEventListener("keydown",this.handleKeydown),this.$once("hook:beforeDestory",(function(){this.$window.document.removeEventListener("keydown",this.handleKeydown)})),this.$window.document.addEventListener("keyup",this.handleKeyup),this.$once("hook:beforeDestory",(function(){this.$window.document.removeEventListener("keyup",this.handleKeyup)})),this.$window.document.addEventListener("mouseup",this.clearInterval)},methods:{_forward:function(){console.log(0),K({url:"/test.php",data:{action:"f"}})},_back:function(){console.log(1),K({url:"/test.php",data:{action:"b"}})},_left:function(){console.log(2),K({url:"/test.php",data:{action:"l"}})},_right:function(){console.log(3),K({url:"/test.php",data:{action:"r"}})},stop:function(){console.log("stop"),K({url:"/test.php",data:{action:"s"}})},pushKey:function(e){console.log("pushKey",e);var t=this.downKeys,n=t.indexOf(e);-1!=n&&t.splice(n,1),t.push(e)},spliceKey:function(e){console.log("spliceKey",e);var t=this.downKeys,n=t.indexOf(e);t.splice(n,1)},getKey:function(e){var t,n=e.keyCode,o=this.KEY;switch(n){case 38:t=o.up;break;case 37:t=o.left;break;case 39:t=o.right;break;case 40:t=o.down;break}return t},handleKeydown:function(e){var t=this.getKey(e);this.pushKey(t)},handleKeyup:function(e){var t=this.getKey(e);this.spliceKey(t)},setIntervalTodoForward:function(){this.inter=this.$window.setInterval(this._forward,300)},setIntervalTodoLeft:function(){this.inter=this.$window.setInterval(this._left,300)},setIntervalTodoRight:function(){this.inter=this.$window.setInterval(this._right,300)},setIntervalTodoBack:function(){this.inter=this.$window.setInterval(this._back,300)},clearInterval:function(){this.$window.clearInterval(this.inter),this.inter=null}},watch:{downKeys:function(e){var t=this.lastKey,n=this.KEY;if(0!=e.length)switch(t){case n.up:this.forward();break;case n.down:this.back();break;case n.left:this.left();break;case n.right:this.right();break}else this.stop()}},components:{vueRtmpPlayer:p["a"]}},_=$,I=(n("408b"),n("2154"),Object(s["a"])(_,d,f,!1,null,null,null)),E=I.exports;o["default"].use(l["a"]);var T=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new l["a"]({mode:"history",base:"/",routes:T}),j=O,x=n("2f62");o["default"].use(x["a"]);var P=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=(n("0fae"),n("5c96"));o["default"].component(C["Button"].name,C["Button"]),o["default"].config.productionTip=!1,o["default"].directive("focus",{inserted:function(e){e.focus()}}),o["default"].prototype.$window=window,new o["default"]({router:j,store:P,render:function(e){return e(c)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var o=n("b8ff"),r=n.n(o);r.a},b8ff:function(e,t,n){},ed34:function(e,t,n){}});
//# sourceMappingURL=app.fbe1f0e4.js.map