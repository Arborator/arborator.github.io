(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var a=t("967e"),r=t.n(a),o=(t("a481"),t("96cf"),t("fa84")),s=t.n(o),c=(t("5c7d"),t("573e"),t("7d6e"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),u=t("b05d"),i=t("4d5a"),l=t("e359"),p=t("7ff0"),f=t("9404"),d=t("09e3"),m=t("9989"),b=t("65c6"),g=t("6ac5"),h=t("9c40"),Q=t("f20b"),v=t("e7a9"),_=t("0016"),w=t("1c1c"),k=t("66e5"),x=t("4074"),y=t("0170"),P=t("2c91"),S=t("58a8"),j=t("05c0"),A=t("cb32"),C=t("f09f"),T=t("a370"),I=t("4b7e"),L=t("eb85"),B=t("639d"),q=t("27f9"),U=t("ddd8"),E=t("8572"),F=t("0378"),N=t("3786"),R=t("b047"),V=t("eaac"),$=t("bd08"),G=t("db86"),D=t("42a1"),J=t("4e73"),K=t("9564"),O=t("2bb1"),M=t("ead5"),z=t("079e"),H=t("24e8"),W=t("ee89"),Z=t("d847"),X=t("54e1"),Y=t("068f"),ee=t("7460"),ne=t("429b"),te=t("adad"),ae=t("823b"),re=t("3b73"),oe=t("c294"),se=t("72db"),ce=t("de5e"),ue=t("4983"),ie=t("5096"),le=t("6b1d"),pe=t("8f8e"),fe=t("e669"),de=t("a12b"),me=t("58ea"),be=t("880c"),ge=t("32a7"),he=t("62cd"),Qe=t("714f"),ve=t("7f67"),_e=t("2a19"),we=t("1b3f"),ke=t("f508"),xe=t("5dab"),ye=t("b12a"),Pe=t("7518");c["a"].use(u["a"],{config:{},components:{QLayout:i["a"],QHeader:l["a"],QFooter:p["a"],QDrawer:f["a"],QPageContainer:d["a"],QPage:m["a"],QToolbar:b["a"],QToolbarTitle:g["a"],QBtn:h["a"],QBtnDropdown:Q["a"],QBtnGroup:v["a"],QIcon:_["a"],QList:w["a"],QItem:k["a"],QItemSection:x["a"],QItemLabel:y["a"],QSpace:P["a"],QBadge:S["a"],QTooltip:j["a"],QAvatar:A["a"],QCard:C["a"],QCardSection:T["a"],QCardActions:I["a"],QSeparator:L["a"],QParallax:B["a"],QInput:q["a"],QSelect:U["a"],QField:E["a"],QForm:F["a"],QRadio:N["a"],QChip:R["a"],QTable:V["a"],QTr:$["a"],QTd:G["a"],QPopupEdit:D["a"],QMenu:J["a"],QToggle:K["a"],QMarkupTable:O["a"],QBreadcrumbs:M["a"],QBreadcrumbsEl:z["a"],QDialog:H["a"],QUploader:W["a"],QBar:Z["a"],QBanner:X["a"],QImg:Y["a"],QTab:ee["a"],QTabs:ne["a"],QTabPanels:te["a"],QTabPanel:ae["a"],QExpansionItem:re["a"],QFab:oe["a"],QFabAction:se["a"],QPageSticky:ce["a"],QScrollArea:ue["a"],QPageScroller:ie["a"],QLinearProgress:le["a"],QCheckbox:pe["a"],QSpinnerFacebook:fe["a"],QVirtualScroll:de["a"],QCircularProgress:me["a"],QCarousel:be["a"],QCarouselControl:ge["a"],QCarouselSlide:he["a"]},directives:{Ripple:Qe["a"],ClosePopup:ve["a"]},plugins:{Notify:_e["a"],LoadingBar:we["a"],Loading:ke["a"],AppVisibility:xe["a"],AppFullscreen:ye["a"],BottomSheet:Pe["a"]}});var Se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},je=[],Ae=(t("6b54"),t("06db"),t("28a5"),t("b06b"),t("2b27")),Ce=t.n(Ae),Te=t("4360"),Ie=t("d867"),Le=t("c16e"),Be=t.n(Le);Ce.a.config("7d");var qe={namespace:"arboratorgrew__",name:"ls",storage:"local"};c["a"].use(Be.a,qe);var Ue={name:"App",data:function(){return{store:Te["a"],alerts:{welcomeback:{color:"accent",message:"Welcome back to Arborator!",icon:"mood"}}}},mounted:function(){var e=this,n=Ce.a.get("authomatic"),t=Ce.a.get("session");null!=n&&console.log("token",n),null!=t&&Ie["a"].whoAmI().then((function(n){e.store.dispatch("checkSession",{}),e.showNotif("bottom","welcomeback")})).catch((function(e){console.log(e)})),this.$q.dark.set(this.$ls.get("dm"))},methods:{parseJwt:function(e){var n=e.split(".")[1],t=n.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)},showNotif:function(e,n){var t=this.alerts[n],a=t.color,r=t.textColor,o=t.multiLine,s=t.icon,c=t.message,u=t.avatar,i=t.actions;this.$q.notify({color:a,textColor:r,icon:s,message:c,position:e,avatar:u,multiLine:o,actions:i,timeout:2e3})}}},Ee=Ue,Fe=t("2877"),Ne=Object(Fe["a"])(Ee,Se,je,!1,null,null,null),Re=Ne.exports,Ve=t("8c4f"),$e=[{path:"/",component:function(){return Promise.all([t.e("vendor"),t.e("2d229d5a")]).then(t.bind(null,"dead"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-common"),t.e("338ea63d")]).then(t.bind(null,"8b24"))}},{path:"/projects",component:function(){return Promise.all([t.e("chunk-common"),t.e("2b1b3d96")]).then(t.bind(null,"6538"))}},{path:"/projects/:projectname",component:function(){return Promise.all([t.e("vendor"),t.e("chunk-common"),t.e("9dfd6b0a")]).then(t.bind(null,"3ea8"))},props:!0,name:"project"},{path:"/projects/:projectname/:samplename",component:function(){return Promise.all([t.e("vendor"),t.e("chunk-common"),t.e("2d0dee15")]).then(t.bind(null,"8810"))},props:!0},{path:"settings",component:function(){return t.e("2d20f6dd").then(t.bind(null,"b41f"))},meta:{requiresAuth:!0}}]}];$e.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var Ge=$e;c["a"].use(Ve["a"]);var De=function(){var e=new Ve["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Ge,mode:"hash",base:""});return e},Je=function(){return Ke.apply(this,arguments)};function Ke(){return Ke=s()(r.a.mark((function e(){var n,t,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof Te["a"]){e.next=6;break}return e.next=3,Object(Te["a"])({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=Te["a"];case 7:if(n=e.t0,"function"!==typeof De){e.next=14;break}return e.next=11,De({Vue:c["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=De;case 15:return t=e.t1,n.$router=t,a={el:"#q-app",router:t,store:n,render:function(e){return e(Re)}},e.abrupt("return",{app:a,store:n,router:t});case 19:case"end":return e.stop()}}),e)}))),Ke.apply(this,arguments)}var Oe=t("a925"),Me={failed:"Action failed",success:"Action was successful"},ze={"en-us":Me};c["a"].use(Oe["a"]);var He=new Oe["a"]({locale:"en-us",fallbackLocale:"en-us",messages:ze}),We=function(e){var n=e.app;n.i18n=He},Ze=t("bc3a"),Xe=t.n(Ze),Ye=function(){var e=s()(r.a.mark((function e(n){var t;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.Vue,t.prototype.$axios=Xe.a;case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function en(){return nn.apply(this,arguments)}function nn(){return nn=s()(r.a.mark((function e(){var n,t,a,o,s,u,i,l,p;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Je();case 2:n=e.sent,t=n.app,a=n.store,o=n.router,s=!0,u=function(e){s=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),l=[We,Ye],p=0;case 11:if(!(!0===s&&p<l.length)){e.next=29;break}if("function"===typeof l[p]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[p]({app:t,router:o,store:a,Vue:c["a"],ssrContext:null,redirect:u,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:p++,e.next=11;break;case 29:if(!1!==s){e.next=31;break}return e.abrupt("return");case 31:new c["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),nn.apply(this,arguments)}en()},4360:function(e,n,t){"use strict";t("551c"),t("06db");var a=t("2b0e"),r=t("2f62"),o=t("d867"),s=t("2b27"),c=t.n(s);a["a"].use(r["a"]),c.a.config("7d"),a["a"].use(c.a),n["a"]=new r["a"].Store({state:{source:"https://arborapi.ilpga.fr:5000",loginSuccess:!1,loginError:!1,user:{as_json:null,auth_provider:null,created_date:null,family_name:null,first_name:null,get_id:null,get_or_create:null,id:null,is_active:!1,is_anonymous:!0,is_authenticated:!1,last_seen:null,make_unique_nickname:null,make_valid_nickname:null,picture_url:null,query:null,query_class:null,super_admin:!1,username:null},failedAccess:!1,avatarKey:0,lastGrewQuery:""},mutations:{change_source:function(e,n){e.source=n},login_success:function(e,n){e.loginSuccess=!0},login_error:function(e,n){e.loginError=!0},logout_success:function(e){e.loginSuccess=!1,e.userName=null,e.userPass=null},access_failed:function(e,n){e.failedAccess=n},update_user:function(e,n){e.user=n.user},increment_avatar_key:function(e){e.avatarKey+=1},change_last_grew_query:function(e,n){e.lastGrewQuery=n}},actions:{login:function(e,n){var t=e.commit,a=n.user,r=n.password;return new Promise((function(e,n){o["a"].requestAccessToken(a,r).then((function(n){n.access_token&&(c.a.set("axesstoken",n.access_token,n.expires_in,null,null,!0),t("login_success",{userName:a}),o["a"].getPersonalInfos(a).then((function(e){t("update_user",{user:e.data})}))),e(n)})).catch((function(e){console.log("Error: "+e),t("login_error",{}),Promise.reject("Invalid credentials!")}))}))},setUser:function(e,n){var t=e.commit,a=n.user;t("update_user",{user:a})},checkSession:function(e,n){var t=e.commit;n.sessionid;return new Promise((function(e,n){o["a"].whoAmI().then((function(e){t("login_success",{}),t("update_user",{user:e.data})})).catch((function(e){console.log(e)}))}))},logout:function(e,n){var t=e.commit,a=n.user;return new Promise((function(e,n){console.log("logging out user: "+a),o["a"].logout().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c.a.remove("session"),c.a.remove("remember_token"),t("logout_success"),e({status:"disconnected"})}))},changeDesiredUrl:function(e,n){var t=e.commit,a=n.value;state.desiredUrl=payload.value,t("desiredurl_modified",{value:a})},accessFailed:function(e,n){var t=e.commit;n.value;t("access_failed")},updateUser:function(e,n){var t=e.commit,a=n.user;t("update_user",{user:a})}},getters:{getSource:function(e){return e.source},isLoggedIn:function(e){return e.loginSuccess},hasLoginErrored:function(e){return e.loginError},getFailedAccess:function(e){return e.failedAccess},getUserInfos:function(e){return e.user},getAvatarKey:function(e){return e.avatarKey},getLastGrewQuery:function(e){return e.lastGrewQuery}}})},"7e6d":function(e,n,t){},d867:function(e,n,t){"use strict";var a=t("bc3a"),r=t.n(a),o=t("2b27"),s=t.n(o);r.a.defaults.headers.post["Content-Type"]="multipart/form-data",s.a.config("7d");var c=r.a.create({baseURL:"/api",timeout:5e4}),u=r.a.create({baseURL:"/login",timeout:5e3});n["a"]={getProjects:function(){return c.get("home/projects")},getUsers:function(){return c.get("admin/users")},getProjectInfos:function(e){return c.get("projects/"+e)},getSampleContent:function(e,n){return c.get("projects/"+e+"/sample/"+n)},deleteProject:function(e){return c.delete("projects/"+e+"/delete")},deleteSample:function(e,n){return c.delete("projects/"+e+"/sample/"+n)},uploadSample:function(e,n){return c.post("projects/"+e+"/upload",n)},exportSamplesZip:function(e,n){var t={samples:e};return c.post("projects/"+n+"/export/zip",t)},auth:function(e){return u.get(e)},logout:function(){return r.a.get("/logout")},whoAmI:function(){var e=s.a.get("session"),n={id:e};return u.post("userinfos",n)},searchProject:function(e,n){return c.post("projects/"+e+"/search",n)},searchSample:function(e,n,t){return c.post("projects/"+e+"/sample/"+n+"/search",t)},saveTrees:function(e,n,t){return c.post("projects/"+e+"/sample/"+n+"/saveTrees",t)},getRelationTable:function(e){return c.get("projects/"+e+"/relation_table/current_user")}}}},[[0,"runtime","vendor"]]]);