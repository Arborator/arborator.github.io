(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0dee15"],{8810:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{class:e.$q.dark.isActive?"bg-dark":"bg-grey-1"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"q-pa-md row q-gutter-md"},[a("q-badge",{attrs:{color:"primary"}},[e._v(e._s(e.sentenceCount)+" sentences")]),a("q-virtual-scroll",{staticStyle:{"max-height":"80vh",width:"99vw"},attrs:{items:this.samplesFrozen.list,"virtual-scroll-slice-size":5,"virtual-scroll-item-size":200},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.item,i=t.index;return[a("sentence-card",{key:i,attrs:{id:s,sample:e.samples[s],index:i,sentenceId:s}})]}}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"q-pa-md row justify-center"},[a("div",{staticClass:"absolute-center"},[a("q-circular-progress",{attrs:{indeterminate:"",size:"70px",thickness:.22,color:"primary","track-color":"grey-3"}})],1)]),a("q-page-sticky",{attrs:{position:e.breakpoint?"bottom-right":"top-right",offset:e.breakpoint?[18,18]:[18,70]}},[a("q-btn",{attrs:{fab:"",icon:e.searchDialog?"clear":"search",color:"primary"},on:{click:function(t){e.searchDialog=!e.searchDialog}}})],1),a("q-dialog",{attrs:{seamless:"",position:"right"},model:{value:e.searchDialog,callback:function(t){e.searchDialog=t},expression:"searchDialog"}},[a("grew-request-card",{attrs:{parentOnSearch:e.onSearch}})],1),a("q-dialog",{attrs:{"transition-show":"fade","transition-hide":"fade"},model:{value:e.resultSearchDial,callback:function(t){e.resultSearchDial=t},expression:"resultSearchDial"}},[a("result-view",{attrs:{searchresults:e.resultSearch}})],1)],1)},i=[],n=(a("0d6d"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("2b0e")),r=(a("b06b"),a("d867")),o=(a("4360"),a("187b")),l=a("1576"),c=a("dc8e");n["a"].config.ignoredElements=["conll"];var d=[],h={components:{SentenceCard:o["a"],GrewRequestCard:l["a"],ResultView:c["a"]},props:["projectname","samplename"],data:function(){return{svg:"",tab:"gold",loading:!1,searchDialog:!1,resultSearchDial:!1,resultSearch:{},samples:{},samplesFrozen:{list:[],indexes:{}},window:{width:0,height:0}}},computed:{sentenceCount:function(){return Object.keys(this.samples).length},breakpoint:function(){return this.window.width<=400}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},mounted:function(){this.getSampleContent()},methods:{handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},getSampleContent:function(){var e=this;this.loading=!0,r["a"].getSampleContent(this.projectname,this.samplename).then((function(t){e.samples=t.data,e.freezeSamples(),e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},onSearch:function(e){var t=this,a={pattern:e};r["a"].searchSample(this.projectname,this.samplename,a).then((function(e){t.resultSearch=e.data,t.resultSearchDial=!0})).catch((function(e){console.log(e)}))},closeSearchDialog:function(e){this.searchDialog},freezeSamples:function(){var e=0,t=[],a={};for(var s in this.samples)t.push(s),a[e]=s,e++;d=t,Object.freeze(d),this.samplesFrozen={list:d,indexes:a}}}},u=h,p=a("2877"),m=Object(p["a"])(u,s,i,!1,null,null,null);t["default"]=m.exports}}]);