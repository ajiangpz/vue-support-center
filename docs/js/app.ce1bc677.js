(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0379":function(t,e,n){},"2add":function(t,e,n){},"2c9f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("45fc"),n("d3b7"),n("96cf"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-layout"},[t._m(0),n("Nav"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("cf05")}})]),r("div",{staticClass:"title"},[t._v("My shirt shop")])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("router-link",{attrs:{to:{name:"home"},exact:""}},[t._v("Home")]),n("router-link",{attrs:{to:{name:"faq"}}},[t._v("FAQ")]),n("router-link",{attrs:{to:{name:"tickets"}}},[t._v("Tickets")]),n("div",{staticClass:"spacer"}),t.$store.state.user?[n("a",[t._v(t._s(this.$store.state.user))]),n("a",{on:{click:t.logout}},[t._v("Logout")])]:n("router-link",{attrs:{to:{name:"login"}}},[t._v("Login")])],2)},i=[],c={data:function(){return{}},methods:{logout:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$axios("/logout",{method:"POST"}));case 2:t=e.sent,"ok"===t.status&&this.$store.commit("DELETE_USER");case 4:case"end":return e.stop()}}),null,this)}}},u=c,l=(n("9eec"),n("2877")),p=Object(l["a"])(u,o,i,!1,null,"5acf2ed9",null),d=p.exports,m={data:function(){return{}},components:{Nav:d}},f=m,h=(n("ec3d"),Object(l["a"])(f,a,s,!1,null,null,null)),v=h.exports,g=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home"},[n("h1",[t._v("Welcome to our support center,"+t._s(this.$store.state.user))]),n("p",[t._v(" We are here to help! Please read the "),n("router-link",{attrs:{to:{name:"faq"}}},[t._v("F.A.Q")]),t._v(" first, and if you don't find the answer to your question, "),n("router-link",{attrs:{to:{name:"tickets"}}},[t._v("send us a ticket!")])],1)])},k=[],b={},w=Object(l["a"])(b,_,k,!1,null,null,null),y=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"faq"},[n("h1",[t._v("Frenquently Asked Questions")]),t.hasRemoteErrors?n("div",{staticClass:"error"},[t._v(" Can't load the questions ")]):t._e(),t.remoteDataBusy?n("Loading"):t._e(),n("section",t._l(t.questionList,(function(e,r){return n("article",{key:r},[n("h2",{domProps:{innerHTML:t._s(e.title)}}),n("p",{domProps:{innerHTML:t._s(e.content)}})])})),0)],1)},C=[],E=(n("b64b"),function(t){return{data:function(){var e={remoteDataLoading:0,remoteErrors:{}};for(var n in t)e[n]=null,e.remoteErrors[n]=null;return e},computed:{remoteDataBusy:function(){return 0!==this.$data.remoteDataLoading},hasRemoteErrors:function(){var t=this;return Object.keys(this.$data.remoteErrors).some((function(e){return t.$data.remoteErrors[e]}))}},created:function(){var e=this,n=function(n){var r=t[n];"function"===typeof r?e.$watch(r,(function(t){e.getResource(n,t)}),{immediate:!0}):e.getResource(n,r)};for(var r in t)n(r)},methods:{getResource:function(t,e){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return this.remoteDataLoading++,r.prev=1,r.next=4,regeneratorRuntime.awrap(this.$axios(e));case 4:n=r.sent,this.$data[t]=n.data,r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](1),console.log(r.t0),this.$data.remoteErrors[t]=r.t0;case 12:this.remoteDataLoading--;case 13:case"end":return r.stop()}}),null,this,[[1,8]])}}}}),$={mixins:[E({questionList:"/questions"})]},O=$,S=Object(l["a"])(O,x,C,!1,null,null,null),R=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"login"},[n("h1",[t._v("Please login to continue")]),n("SmartForm",{staticClass:"form",attrs:{title:t.title,operation:t.operation,valid:t.valid}},[n("FormInput",{attrs:{name:"username",placeholder:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("FormInput",{attrs:{name:"password",type:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),"signup"===t.mode?[n("FormInput",{attrs:{name:"verify-password",type:"password",placeholder:"Retype Password",invalid:t.retypePasswordError},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),n("FormInput",{attrs:{name:"email",type:"email",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})]:t._e(),n("template",{slot:"actions"},["login"===t.mode?[n("button",{staticClass:"secondary",attrs:{type:"button"},on:{click:function(e){t.mode="signup"}}},[t._v(" Sign up ")]),n("button",{attrs:{type:"button",disabled:!t.valid},on:{click:t.login}},[t._v(" Login ")])]:"signup"===t.mode?[n("button",{staticClass:"secondary",attrs:{type:"button"},on:{click:function(e){t.mode="login"}}},[t._v(" Back to Login ")]),n("button",{attrs:{type:"submit",disabled:!t.valid},on:{click:t.signup}},[t._v(" Create account ")])]:t._e()],2)],2)],1)},j=[],P=(n("ac1f"),n("5319"),{data:function(){return{mode:"login",username:"",password:"",password2:"",email:""}},computed:{title:function(){switch(this.mode){case"login":return"Login";case"signup":return"Create a new account"}return"Login"},retypePasswordError:function(){return this.password2&&this.password!==this.password2},signupValid:function(){return this.password2&&this.email&&!this.retypePasswordError},valid:function(){return this.username&&this.password&&("signup"!==this.mode||this.signupValid)}},methods:{operation:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this[this.mode]());case 2:case"end":return t.stop()}}),null,this)},signup:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$axios("/signup",{method:"POST",data:JSON.stringify({username:this.username,password:this.password,email:this.email})}));case 2:this.mode="login";case 3:case"end":return t.stop()}}),null,this)},login:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$axios("/login",{method:"POST",data:JSON.stringify({username:this.username,password:this.password})}));case 2:t=e.sent,this.$store.commit("SET_USER",{username:t}),this.$router.replace(this.$route.params.wantedRoute||{name:"home"});case 5:case"end":return e.stop()}}),null,this)}}}),L=P,q=Object(l["a"])(L,T,j,!1,null,null,null),F=q.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"tickets-layout"},[n("h1",[t._v("Your Surpport Tickets")]),n("div",{staticClass:"actions"},["tickets"!==t.$route.name?n("router-link",{staticClass:"secondary",attrs:{to:{name:"tickets"},tag:"button"}},[t._v("See all tickets")]):t._e(),"newTicket"!==t.$route.name?n("router-link",{attrs:{to:{name:"newTicket"},tag:"button"}},[t._v("New tickets")]):t._e()],1),n("router-view")],1)},N=[],I=(n("b44a"),{}),B=Object(l["a"])(I,D,N,!1,null,"345f4384",null),M=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tickets",attrs:{id:"tickets"}},[t.remoteDataBusy?n("Loading"):0===t.tickets.length?n("div",{staticClass:"empty"},[t._v(" You don't have any ticket ")]):n("section",{staticClass:"tickets-list"},t._l(t.tickets,(function(e,r){return n("div",{key:r,staticClass:"ticket-item"},[n("router-link",{attrs:{to:{name:"ticket",params:{id:e.id+""}}}},[t._v(t._s(e.title))]),n("span",{staticClass:"badge"},[t._v(t._s(e.status))]),n("span",{staticClass:"date"},[t._v(t._s(e.date))])],1)})),0)],1)},J=[],A={mixins:[E({tickets:"/tickets"})]},z=A,H=Object(l["a"])(z,U,J,!1,null,null,null),Q=H.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmartForm",{attrs:{title:"New Ticket",operation:t.operation,valid:t.valid}},[n("FormInput",{attrs:{name:"title",placeholder:"description your problem hear"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("FormInput",{attrs:{type:"textarea",name:"description",placeholder:"description your problem hear",rows:"4"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("span",[t._v(t._s(t.title))]),n("template",{slot:"actions"},[n("router-link",{attrs:{tag:"button",to:{name:"tickets"}}},[t._v("Go Back")]),n("button",{attrs:{type:"submit",disabled:t.valid}},[t._v("Send Ticket")])],1)],2)},V=[],W=(n("a4d3"),n("e01a"),n("99af"),n("13d5"),function(t,e){return{watch:e.reduce((function(e,n){return e[n]=function(e){localStorage.setItem("".concat(t,".").concat(n),JSON.stringify(e))},e}),{})}}),Y={data:function(){return{title:"",description:""}},mixins:[W("NewTicket",["title","description"])],computed:{valid:function(){return!!this.title&&!!this.description}},methods:{operation:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$axios("tickets/new",{methods:"POST",body:JSON.stringify({title:this.title,description:this.description})}));case 2:this.title=this.description="";case 3:case"end":return t.stop()}}),null,this)}}},G=Y,X=Object(l["a"])(G,K,V,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ticket"},[n("h2",[t._v("Ticket")]),t.remoteDataBusy?n("Loading"):t.ticket?[n("section",{staticClass:"infos"},[n("div",{staticClass:"info"},[t._v(" Created on "),n("strong",[t._v(t._s(t.ticket.date))])]),n("div",{staticClass:"info"},[t._v(" Author "),n("strong",[t._v(t._s(t.ticket.user.username))])]),n("div",{staticClass:"info"},[t._v(" Status "),n("span",{staticClass:"badge"},[t._v(t._s(t.ticket.status))])])]),n("section",{staticClass:"content"},[n("h3",[t._v(t._s(t.ticket.title))]),n("p",[t._v(t._s(t.ticket.description))])])]:n("div",{staticClass:"empty"},[t._v(" Ticket not found ")])],2)},et=[],nt={mixins:[E({ticket:function(){return"/ticket/".concat(this.id)}})],props:{id:{type:String,required:!0}}},rt=nt,at=Object(l["a"])(rt,tt,et,!1,null,null,null),st=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"not-found"},[n("h1",[t._v("The Page Not Found")]),n("router-link",{attrs:{tag:"button",to:{name:"home"}}},[t._v("Return to home")])],1)},it=[],ct={},ut=Object(l["a"])(ct,ot,it,!1,null,null,null),lt=ut.exports;r["default"].use(g["a"]);var pt=[{path:"/",name:"home",component:y},{path:"/faq",name:"faq",component:R},{path:"/login",name:"login",meta:{guest:!0},component:F},{path:"/tickets",meta:{private:!0},component:M,children:[{path:"",name:"tickets",component:Q},{name:"newTicket",path:"newTicket",component:Z},{path:":id",name:"ticket",component:st,props:!0}]},{path:"*",component:lt}],dt=new g["a"]({mode:"history",base:"/",scrollBehavior:function(t,e,n){return n?(console.log(n),n):t.hash?(console.log(t.hash),{selector:t.hash}):{x:0,y:0}},routes:pt}),mt=dt,ft=n("2f62");r["default"].use(ft["a"]);var ht=new ft["a"].Store({state:{user:null},mutations:{SET_USER:function(t,e){t.user=e.username},DELETE_USER:function(t){t.user=null}},actions:{},modules:{}}),vt=(n("4de4"),n("e25e"),n("1276"),n("96eb")),gt=n.n(vt);gt.a.setup({timeout:300}),gt.a.mock("/signup","post",(function(){return"ok"})),gt.a.mock("/logout","post",(function(){return{status:"ok"}}));var _t=gt.a.mock({"data|1-7":[{"id|+1":1,title:"@TITLe",status:'@PICK(["new", "working", "done"])',date:"@DATE",user:{username:"@NAME"},description:"@paragraph"}]});gt.a.mock("/login","post",(function(t){var e=JSON.parse(t.body),n=e.username;return n})),gt.a.mock(/\/ticket\/\w+$/,(function(t){var e=t.url.split("/"),n=e[e.length-1],r=_t.data.filter((function(t){return t.id===parseInt(n)}))[0];return{data:r}})),gt.a.mock("/tickets",_t),gt.a.mock("/user","get",{username:"pzzz"});gt.a.mock("/questions",{"data|1-10":[{title:"@title",content:" @paragraph"}]});var kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div")])}],wt={},yt=Object(l["a"])(wt,kt,bt,!1,null,null,null),xt=yt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("section",{staticClass:"content"},[n("h2",[t._v(t._s(t.title))]),t._t("default"),n("div",{staticClass:"actions"},[t._t("actions")],2),t.error?n("div",{staticClass:"error"},[t._v(" "+t._s(t.error)+" ")]):t._e()],2),n("transition",{attrs:{name:"fade"}},[t.busy?n("Loading",{staticClass:"overlay"}):t._e()],1)],1)},Et=[],$t={data:function(){return{error:null,busy:!1}},props:{title:{type:String,required:!0},operation:{type:Function,required:!0},valid:{type:Boolean,required:!0}},methods:{submit:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.valid||this.busy){t.next=12;break}return this.error=null,this.busy=!0,t.prev=3,t.next=6,regeneratorRuntime.awrap(this.operation());case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](3),this.error=t.t0.massage;case 11:this.busy=!1;case 12:case"end":return t.stop()}}),null,this,[[3,8]])}}},Ot=$t,St=(n("ec70"),Object(l["a"])(Ot,Ct,Et,!1,null,"a7e0bd06",null)),Rt=St.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n(t.element,t._b({tag:"component",staticClass:"input",class:t.inputClass,attrs:{type:"text",name:t.name,placeholder:t.placeholder},domProps:{value:t.text},on:{input:function(e){return t.$emit("update",e.currentTarget.value)}}},"component",t.$attrs,!1))],1)},jt=[],Pt={data:function(){return{}},props:{name:{type:String},type:{type:String,default:"text"},text:{required:!0},placeholder:{type:String},invalid:{type:Boolean,default:!1}},model:{prop:"text",event:"update"},computed:{inputClass:function(){return{invalid:this.invalid}},element:function(){return"textarea"===this.type?this.type:"input"}}},Lt=Pt,qt=Object(l["a"])(Lt,Tt,jt,!1,null,null,null),Ft=qt.exports;r["default"].component("Loading",xt),r["default"].component("SmartForm",Rt),r["default"].component("FormInput",Ft);n("0fae");var Dt=n("bc3a"),Nt=n.n(Dt),It="";function Bt(t,e){var n,r,a;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return n=Object.assign({},{headers:{"Content-Type":"application/json"},credentials:"includes"},e),s.next=3,regeneratorRuntime.awrap(Nt()("".concat(It).concat(t),n));case 3:if(r=s.sent,"OK"!==r.statusText){s.next=8;break}return s.abrupt("return",r.data);case 8:if("403"!==r.statusText){s.next=13;break}ht.commit("DELETE_USER"),mt.currentRoute.matched.some((function(t){return t.meta.private}))&&mt.replace({name:"login",params:{wantedRoute:mt.currentRoute.fullPath}}),s.next=15;break;case 13:throw a=new Error("error"),a;case 15:case"end":return s.stop()}}))}var Mt={install:function(t,e){It=e.baseUrl,t.prototype.$axios=Bt}},Ut=n("5c96"),Jt=n.n(Ut);function At(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(Bt("/user"));case 3:t=e.sent,ht.state.user=t.username,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:new r["default"]({router:mt,store:ht,render:function(t){return t(v)}}).$mount("#app");case 11:case"end":return e.stop()}}),null,null,[[0,7]])}r["default"].use(Jt.a),r["default"].use(Mt,{baseUrl:""}),mt.beforeEach((function(t,e,n){!t.matched.some((function(t){return t.meta.private}))||ht.state.user?t.matched.some((function(t){return t.meta.guest}))&&ht.state.user?n({name:"home"}):n():n({name:"login",params:{wantedRoute:t.fullPath}})})),r["default"].config.productionTip=!1,At()},"9db5":function(t,e,n){},"9eec":function(t,e,n){"use strict";var r=n("2c9f"),a=n.n(r);a.a},b44a:function(t,e,n){"use strict";var r=n("0379"),a=n.n(r);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.5c860922.png"},ec3d:function(t,e,n){"use strict";var r=n("2add"),a=n.n(r);a.a},ec70:function(t,e,n){"use strict";var r=n("9db5"),a=n.n(r);a.a}});
//# sourceMappingURL=app.ce1bc677.js.map