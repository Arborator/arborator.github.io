(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,a,n){e.exports=n("2f39")},"2f39":function(e,a,n){"use strict";n.r(a);var t=n("967e"),r=n.n(t),o=(n("a481"),n("96cf"),n("5c7d"),n("573e"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),s=n("b05d"),c=n("4d5a"),u=n("e359"),i=n("7ff0"),l=n("9404"),p=n("09e3"),d=n("9989"),f=n("65c6"),m=n("6ac5"),g=n("9c40"),b=n("f20b"),h=n("e7a9"),Q=n("0016"),v=n("1c1c"),_=n("66e5"),w=n("4074"),k=n("0170"),y=n("2c91"),S=n("58a8"),j=n("05c0"),P=n("cb32"),x=n("f09f"),A=n("a370"),T=n("4b7e"),I=n("eb85"),C=n("639d"),L=n("27f9"),B=n("ddd8"),q=n("8572"),U=n("0378"),E=n("3786"),F=n("b047"),N=n("eaac"),R=n("bd08"),V=n("db86"),$=n("42a1"),G=n("4e73"),D=n("9564"),J=n("2bb1"),K=n("ead5"),O=n("079e"),M=n("24e8"),z=n("ee89"),H=n("d847"),W=n("54e1"),Z=n("068f"),X=n("7460"),Y=n("429b"),ee=n("adad"),ae=n("823b"),ne=n("3b73"),te=n("c294"),re=n("72db"),oe=n("de5e"),se=n("4983"),ce=n("5096"),ue=n("6b1d"),ie=n("8f8e"),le=n("e669"),pe=n("a12b"),de=n("58ea"),fe=n("714f"),me=n("7f67"),ge=n("2a19"),be=n("1b3f"),he=n("f508"),Qe=n("5dab"),ve=n("b12a"),_e=n("7518");o["a"].use(s["a"],{config:{},components:{QLayout:c["a"],QHeader:u["a"],QFooter:i["a"],QDrawer:l["a"],QPageContainer:p["a"],QPage:d["a"],QToolbar:f["a"],QToolbarTitle:m["a"],QBtn:g["a"],QBtnDropdown:b["a"],QBtnGroup:h["a"],QIcon:Q["a"],QList:v["a"],QItem:_["a"],QItemSection:w["a"],QItemLabel:k["a"],QSpace:y["a"],QBadge:S["a"],QTooltip:j["a"],QAvatar:P["a"],QCard:x["a"],QCardSection:A["a"],QCardActions:T["a"],QSeparator:I["a"],QParallax:C["a"],QInput:L["a"],QSelect:B["a"],QField:q["a"],QForm:U["a"],QRadio:E["a"],QChip:F["a"],QTable:N["a"],QTr:R["a"],QTd:V["a"],QPopupEdit:$["a"],QMenu:G["a"],QToggle:D["a"],QMarkupTable:J["a"],QBreadcrumbs:K["a"],QBreadcrumbsEl:O["a"],QDialog:M["a"],QUploader:z["a"],QBar:H["a"],QBanner:W["a"],QImg:Z["a"],QTab:X["a"],QTabs:Y["a"],QTabPanels:ee["a"],QTabPanel:ae["a"],QExpansionItem:ne["a"],QFab:te["a"],QFabAction:re["a"],QPageSticky:oe["a"],QScrollArea:se["a"],QPageScroller:ce["a"],QLinearProgress:ue["a"],QCheckbox:ie["a"],QSpinnerFacebook:le["a"],QVirtualScroll:pe["a"],QCircularProgress:de["a"]},directives:{Ripple:fe["a"],ClosePopup:me["a"]},plugins:{Notify:ge["a"],LoadingBar:be["a"],Loading:he["a"],AppVisibility:Qe["a"],AppFullscreen:ve["a"],BottomSheet:_e["a"]}});var we=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},ke=[],ye=(n("6b54"),n("06db"),n("28a5"),n("b06b"),n("2b27")),Se=n.n(ye),je=n("4360"),Pe=n("d867"),xe=n("c16e"),Ae=n.n(xe);Se.a.config("7d");var Te={namespace:"arboratorgrew__",name:"ls",storage:"local"};o["a"].use(Ae.a,Te);var Ie={name:"App",data:function(){return{store:je["a"],alerts:{welcomeback:{color:"accent",message:"Welcome back to Arborator!",icon:"mood"}}}},mounted:function(){var e=this,a=Se.a.get("authomatic"),n=Se.a.get("session");null!=a&&console.log("token",a),null!=n&&Pe["a"].whoAmI().then((function(a){e.store.dispatch("checkSession",{}),e.showNotif("bottom","welcomeback")})).catch((function(e){console.log(e)})),this.$q.dark.set(this.$ls.get("dm"))},methods:{parseJwt:function(e){var a=e.split(".")[1],n=a.replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(atob(n).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(t)},showNotif:function(e,a){var n=this.alerts[a],t=n.color,r=n.textColor,o=n.multiLine,s=n.icon,c=n.message,u=n.avatar,i=n.actions;this.$q.notify({color:t,textColor:r,icon:s,message:c,position:e,avatar:u,multiLine:o,actions:i,timeout:2e3})}}},Ce=Ie,Le=n("2877"),Be=Object(Le["a"])(Ce,we,ke,!1,null,null,null),qe=Be.exports,Ue=n("8c4f"),Ee=[{path:"/",component:function(){return n.e("07529a3c").then(n.bind(null,"dead"))},children:[{path:"",component:function(){return n.e("7117ead8").then(n.bind(null,"8b24"))}},{path:"/projects/:projectname",component:function(){return Promise.all([n.e("faba4b1a"),n.e("11d9ca0d")]).then(n.bind(null,"3ea8"))},props:!0,name:"project"},{path:"/projects/:projectname/:samplename",component:function(){return Promise.all([n.e("faba4b1a"),n.e("2d0dee15")]).then(n.bind(null,"8810"))},props:!0},{path:"settings",component:function(){return n.e("2d20f6dd").then(n.bind(null,"b41f"))},meta:{requiresAuth:!0}}]}];Ee.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var Fe=Ee;o["a"].use(Ue["a"]);var Ne=function(){var e=new Ue["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Fe,mode:"hash",base:""});return e},Re=function(){var e="function"===typeof je["a"]?Object(je["a"])({Vue:o["a"]}):je["a"],a="function"===typeof Ne?Ne({Vue:o["a"],store:e}):Ne;e.$router=a;var n={el:"#q-app",router:a,store:e,render:function(e){return e(qe)}};return{app:n,store:e,router:a}},Ve=n("a925"),$e={failed:"Action failed",success:"Action was successful"},Ge={"en-us":$e};o["a"].use(Ve["a"]);var De=new Ve["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Ge}),Je=function(e){var a=e.app;a.i18n=De},Ke=n("bc3a"),Oe=n.n(Ke),Me=function(e){var a;return r.a.async((function(n){while(1)switch(n.prev=n.next){case 0:a=e.Vue,a.prototype.$axios=Oe.a;case 2:case"end":return n.stop()}}))},ze=Re(),He=ze.app,We=ze.store,Ze=ze.router;function Xe(){var e,a,n,t,s;return r.a.async((function(c){while(1)switch(c.prev=c.next){case 0:e=!0,a=function(a){e=!1,window.location.href=a},n=window.location.href.replace(window.location.origin,""),t=[Je,Me],s=0;case 5:if(!(!0===e&&s<t.length)){c.next=23;break}if("function"===typeof t[s]){c.next=8;break}return c.abrupt("continue",20);case 8:return c.prev=8,c.next=11,r.a.awrap(t[s]({app:He,router:Ze,store:We,Vue:o["a"],ssrContext:null,redirect:a,urlPath:n}));case 11:c.next=20;break;case 13:if(c.prev=13,c.t0=c["catch"](8),!c.t0||!c.t0.url){c.next=18;break}return window.location.href=c.t0.url,c.abrupt("return");case 18:return console.error("[Quasar] boot error:",c.t0),c.abrupt("return");case 20:s++,c.next=5;break;case 23:if(!1!==e){c.next=25;break}return c.abrupt("return");case 25:new o["a"](He);case 26:case"end":return c.stop()}}),null,null,[[8,13]])}Xe()},4360:function(e,a,n){"use strict";n("551c"),n("06db");var t=n("2b0e"),r=n("2f62"),o=n("d867"),s=n("2b27"),c=n.n(s);t["a"].use(r["a"]),c.a.config("7d"),t["a"].use(c.a),a["a"]=new r["a"].Store({state:{source:"https://127.0.0.1:5000",loginSuccess:!1,loginError:!1,user:{as_json:null,auth_provider:null,created_date:null,family_name:null,first_name:null,get_id:null,get_or_create:null,id:null,is_active:!1,is_anonymous:!0,is_authenticated:!1,last_seen:null,make_unique_nickname:null,make_valid_nickname:null,picture_url:null,query:null,query_class:null,super_admin:!1,username:null},failedAccess:!1,avatarKey:0,lastGrewQuery:""},mutations:{change_source:function(e,a){e.source=a},login_success:function(e,a){e.loginSuccess=!0},login_error:function(e,a){e.loginError=!0},logout_success:function(e){e.loginSuccess=!1,e.userName=null,e.userPass=null},access_failed:function(e,a){e.failedAccess=a},update_user:function(e,a){e.user=a.user},increment_avatar_key:function(e){e.avatarKey+=1},change_last_grew_query:function(e,a){e.lastGrewQuery=a}},actions:{login:function(e,a){var n=e.commit,t=a.user,r=a.password;return new Promise((function(e,a){o["a"].requestAccessToken(t,r).then((function(a){a.access_token&&(c.a.set("axesstoken",a.access_token,a.expires_in,null,null,!0),n("login_success",{userName:t}),o["a"].getPersonalInfos(t).then((function(e){n("update_user",{user:e.data})}))),e(a)})).catch((function(e){console.log("Error: "+e),n("login_error",{}),Promise.reject("Invalid credentials!")}))}))},setUser:function(e,a){var n=e.commit,t=a.user;n("update_user",{user:t})},checkSession:function(e,a){var n=e.commit;a.sessionid;return new Promise((function(e,a){o["a"].whoAmI().then((function(e){n("login_success",{}),n("update_user",{user:e.data})})).catch((function(e){console.log(e)}))}))},logout:function(e,a){var n=e.commit,t=a.user;return new Promise((function(e,a){console.log("logging out user: "+t),o["a"].logout().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c.a.remove("session"),c.a.remove("remember_token"),n("logout_success"),e({status:"disconnected"})}))},changeDesiredUrl:function(e,a){var n=e.commit,t=a.value;state.desiredUrl=payload.value,n("desiredurl_modified",{value:t})},accessFailed:function(e,a){var n=e.commit;a.value;n("access_failed")},updateUser:function(e,a){var n=e.commit,t=a.user;n("update_user",{user:t})}},getters:{getSource:function(e){return e.source},isLoggedIn:function(e){return e.loginSuccess},hasLoginErrored:function(e){return e.loginError},getFailedAccess:function(e){return e.failedAccess},getUserInfos:function(e){return e.user},getAvatarKey:function(e){return e.avatarKey},getLastGrewQuery:function(e){return e.lastGrewQuery}}})},"7e6d":function(e,a,n){},d867:function(e,a,n){"use strict";var t=n("bc3a"),r=n.n(t),o=n("2b27"),s=n.n(o);r.a.defaults.headers.post["Content-Type"]="multipart/form-data",s.a.config("7d");var c=r.a.create({baseURL:"/api",timeout:5e4}),u=r.a.create({baseURL:"/login",timeout:5e3});a["a"]={getProjects:function(){return c.get("home/projects")},getUsers:function(){return c.get("admin/users")},getProjectInfos:function(e){return c.get("projects/"+e)},getSampleContent:function(e,a){return c.get("projects/"+e+"/sample/"+a)},deleteProject:function(e){return c.delete("projects/"+e+"/delete")},deleteSample:function(e,a){return c.delete("projects/"+e+"/sample/"+a)},uploadSample:function(e,a){return c.post("projects/"+e+"/upload",a)},exportSamplesZip:function(e,a){var n={samples:e};return c.post("projects/"+a+"/export/zip",n)},auth:function(e){return u.get(e)},logout:function(){return r.a.get("/logout")},whoAmI:function(){var e=s.a.get("session"),a={id:e};return u.post("userinfos",a)},searchProject:function(e,a){return c.post("projects/"+e+"/search",a)},searchSample:function(e,a,n){return c.post("projects/"+e+"/sample/"+a+"/search",n)},saveTrees:function(e,a,n){return c.post("projects/"+e+"/sample/"+a+"/saveTrees",n)},getRelationTable:function(e){return c.get("projects/"+e+"/relation_table/current_user")}}}},[[0,"runtime","vendor"]]]);