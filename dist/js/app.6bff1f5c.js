(function(){"use strict";var e={2453:function(e,t,n){var i=n(5130),o=n(6768),a=n(4232),r=n.p+"img/arena.746c9abc.jpg";const c=(0,o.Lk)("div",{class:"header__container"},"header",-1),s={class:"main__container"},l={class:"image__container"},d={class:"image__sss"},m=(0,o.Lk)("img",{src:r,alt:"arena_img"},null,-1),p=["data-id"],h={class:"side_panel__container"},u={class:"side_panel"},f=(0,o.Lk)("div",{class:"footer__container"},"footer",-1);function y(e,t,n,i,r,y){const v=(0,o.g2)("LocationsInfo");return(0,o.uX)(),(0,o.CE)(o.FK,null,[c,(0,o.Lk)("div",s,[(0,o.Lk)("div",l,[(0,o.Lk)("div",d,[m,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.timersData,((e,n)=>((0,o.uX)(),(0,o.CE)("div",{class:(0,a.C4)(r.activeTimers===e.id?"points__container selected":"points__container"),key:n,style:(0,a.Tr)({top:e.coordinates[0],left:e.coordinates[1]}),"data-id":e.id,onClick:t[0]||(t[0]=(...e)=>y.handleScrollOnClick&&y.handleScrollOnClick(...e))},null,14,p)))),128))])]),(0,o.Lk)("div",h,[(0,o.Lk)("div",u,[(0,o.bF)(v,{locationsData:r.timersData,activeTimers:r.activeTimers,handleScrollOnClick:y.handleChangeActiveOnClick},null,8,["locationsData","activeTimers","handleScrollOnClick"])])])]),f],64)}const v={class:"side_panel-items__container"},g=["id","onClick"],T={class:""},b=(0,o.Lk)("span",{class:"hor_line"},null,-1);function D(e,t,n,i,r,c){return(0,o.uX)(),(0,o.CE)("ul",v,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.locationsData,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id,class:(0,a.C4)(n.activeTimers===e.id?"side_panel-item__container selected":"side_panel-item__container"),id:e.id,onClick:t=>n.handleScrollOnClick(e.id)},[(0,o.Lk)("h3",T,(0,a.v_)(e.name),1),b,(0,o.Lk)("p",null,(0,a.v_)(e.lastDropTime),1)],10,g)))),128))])}var C=n(144),k={name:"SidePanel",props:{locationsData:(0,C.KR)(Array),activeTimers:String,handleScrollOnClick:Function},created(){},methods:{}},_=n(1241);const S=(0,_.A)(k,[["render",D]]);var O=S,P=n(8356),w=n.n(P);n(1151);const G={apiKey:"AIzaSyBWYhW1v5ihah_48rKZvQoXLTumzCxvhq8",authDomain:"pyarena-91d35.firebaseapp.com",databaseURL:"https://pyarena-91d35-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"pyarena-91d35",storageBucket:"pyarena-91d35.appspot.com",messagingSenderId:"827209140628",appId:"1:827209140628:web:4db30ac6d56775b8832781"};w().initializeApp(G);const L=w().database().ref("/");var H={name:"App",components:{LocationsInfo:O},data(){return{timersData:[{name:"Rally Point of Belligerence",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["58.3%","73.6%"],id:"rallypb",selected:!1},{name:"Training Ground of Belligerence",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["75.44%","61.08%"],id:"traininggb",selected:!1},{name:"Conquest of Belligerence",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["36.7%","76.6%"],id:"conquestb",selected:!1},{name:"Rocky Mountain Cliff",type:"Inferno",lastDropTime:"hh:mm:cc",coordinates:["49.5%","72.5%"],id:"rockymc",selected:!1},{name:"Marching Point of Belligerence",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["43%","64.5%"],id:"marchingpb",selected:!1},{name:"Assault Point of Belligerence",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["64%","54.5%"],id:"assaultpb",selected:!1},{name:"Newbreeze Border",type:"Inferno",lastDropTime:"hh:mm:cc",coordinates:["59.5%","60%"],id:"newbreezeb",selected:!1},{name:"Confrontation Point of Belligerence",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["55.7%","51%"],id:"confrontationpb",selected:!1},{name:"Conflict Point of Belligerence",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["46%","57.5%"],id:"conflictpb",selected:!1},{name:"Rally Point of Victory",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["16.8%","54%"],id:"rallypv",selected:!1},{name:"Training Grounds of Victory",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["22.4%","68.6%"],id:"traininggv",selected:!1},{name:"Conquest of Victory",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["23.2%","23%"],id:"conquestv",selected:!1},{name:"Cloud Path Watchtower",type:"Inferno",lastDropTime:"hh:mm:cc",coordinates:["21.2%","36%"],id:"cloudpw",selected:!1},{name:"Marching Point of Victory",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["31.5%","35%"],id:"marchingpv",selected:!1},{name:"Assault Point of Victory",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["29.5%","60%"],id:"assaultpv",selected:!1},{name:"Confrontation Point of Victory",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["38%","54.5%"],id:"confrontationpv",selected:!1},{name:"Conflict Point of Victory",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["38%","39.5%"],id:"conflictpv",selected:!1},{name:"Conflict Point of Unity",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["58.5%","41%"],id:"conflictpu",selected:!1},{name:"High Grounds Summit",type:"Inferno",lastDropTime:"hh:mm:cc",coordinates:["26.5%","53%"],id:"highgs",selected:!1},{name:"Rally Point of Unity",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["58%","20.5%"],id:"rallypu",selected:!1},{name:"Training Grounds of Unity",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["38%","14.5%"],id:"traininggu",selected:!1},{name:"Conquest of Unity",type:"Spider",lastDropTime:"hh:mm:cc",coordinates:["76.5%","37%"],id:"conquestu",selected:!1},{name:"Stonegrave Summit",type:"Inferno",lastDropTime:"hh:mm:cc",coordinates:["67.5%","30%"],id:"stonegraves",selected:!1},{name:"Marching Point of Unity",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["64.8%","39%"],id:"marchingpu",selected:!1},{name:"Assault Point of Unity",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["42%","23.5%"],id:"assaultpu",selected:!1},{name:"Confrontation Point of Unity",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["45%","35.5%"],id:"confrontationpu",selected:!1},{name:"Horizon Peaks",type:"Inferno",lastDropTime:"hh:mm:cc",coordinates:["51%","24.5%"],id:"horizonp",selected:!1},{name:"Source of Heavy Combat",type:"Horse-Grish",lastDropTime:"hh:mm:cc",coordinates:["50.5%","46%"],id:"sourcehc",selected:!1}],activeTimers:"",pointsData:[]}},async created(){await L.on("value",(e=>{let t=e.val();this.pointsData=[...Object.values(t.points)],console.log("updated")}))},methods:{handleScrollOnClick(e){const t=e.target.attributes[1].value,n=document.getElementById(t);n.classList.add("selected"),n.scrollIntoView({block:"nearest",behavior:"smooth"}),this.activeTimers=t},handleChangeActiveOnClick(e){this.activeTimers=e}},watch:{pointsData(){this.pointsData.map((e=>{for(let t=0;t<this.pointsData.length;t++)if(Object.values(e)[1].replaceAll('"',"")===this.timersData[t].name){console.log(Object.values(e)[2]);const n=new Date(Object.values(e)[2]-1408e4).toLocaleTimeString("uk-Ua");this.timersData[t].lastDropTime=n}}))}},firebase:{pointsData:L}};const I=(0,_.A)(H,[["render",y]]);var j=I;(0,i.Ef)(j).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],a=e[d][2];for(var c=!0,s=0;s<i.length;s++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(c=!1,a<r&&(r=a));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,r=i[0],c=i[1],s=i[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var d=s(n)}for(t&&t(i);l<r.length;l++)a=r[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},i=self["webpackChunkncrows"]=self["webpackChunkncrows"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(2453)}));i=n.O(i)})();
//# sourceMappingURL=app.6bff1f5c.js.map