(function(e){function t(t){for(var o,i,l=t[0],s=t[1],u=t[2],f=0,d=[];f<l.length;f++)i=l[f],a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},a={app:0},n=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var o,a,n,i=r("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("div",{attrs:{id:"middle"}},[r("div",{attrs:{id:"sidebar"}},[r("div",{attrs:{id:"setbacks"}},[r("h3",[e._v("Define the setbacks")]),e._l(e.setbacks,function(t){return r("div",{staticClass:"setback"},[e._v("→"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.x,expression:"setback.x",modifiers:{number:!0}}],staticClass:"horizontal",domProps:{value:t.x},on:{input:function(r){r.target.composing||e.$set(t,"x",e._n(r.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v("m    \nHeight: "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.h,expression:"setback.h",modifiers:{number:!0}}],staticClass:"vertical",domProps:{value:t.h},on:{input:function(r){r.target.composing||e.$set(t,"h",e._n(r.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v("m")])}),r("br"),r("div",{staticClass:"min-floor-area"},[r("label",[e._v("Min. area per floor  ")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.minFloorArea,expression:"minFloorArea",modifiers:{number:!0}}],domProps:{value:e.minFloorArea},on:{input:function(t){t.target.composing||(e.minFloorArea=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v("m²")]),r("br"),r("button",{attrs:{id:"recalculate"},on:{click:function(t){e.recalculate()}}},[e._v("Recalculate!")])],2),e.floorArea?r("div",{attrs:{id:"total"}},[r("h2",[e._v("Total floor area")]),e._l(e.floorArea.floors,function(t,o){return r("div",{staticClass:"floor"},[r("span",{staticClass:"floor-num"},[e._v(e._s(o?"Floor "+o:"Ground")+": ")]),r("span",{staticClass:"floor-area"},[e._v(e._s(Math.round(t).toLocaleString())+" m²")])])}),r("div",{staticClass:"floor-total"},[r("span",{staticClass:"floor-num"},[e._v("Total")]),r("span",{staticClass:"floor-area"},[e._v(e._s(Math.round(e.floorArea.total).toLocaleString())+" m²")])])],2):e._e()]),r("div",{attrs:{id:"map"}})]),r("div",{attrs:{id:"bottom"}},[e._v("Frontier SI")])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"top"}},[r("h2",[e._v("Setback area calculator")])])}],u={name:"app",components:{},data:function(){return{floorArea:void 0,setbacks:[{x:2,h:0},{x:3,h:5},{x:4,h:15},{h:30}],minFloorArea:100}},computed:{setbackFields:function(){}},watch:{setbacks:function(e){y()}},methods:{recalculate:function(){y()}},mounted:function(){window.app=this}},c=r("6d93"),f=c.fetch,d=r("7915"),p=r("45b9"),v=r("6ee6"),h=r("e192"),m=r("595b"),b=r("6e49");r("b3a1").formulaToExpression;function g(e,t){var r=0;m.featureEach(e,function(e,o){var a=!!t&&!m.booleanDisjoint(e,t);n.setFeatureState({id:o,source:"parcels"},{selected:a}),e._selected=a,r+=a?1:0}),console.log(r+" parcels found within precinct")}function y(e){var t=m.combine(o.getAll());t&&console.log(""+t.features[0].geometry.coordinates[0].length-1+" vertices."),g(a,t);var r=b.makeZigguraut(a,window.app.setbacks,window.app.minFloorArea);n.getSource("ziggurat").setData(r),window.app.floorArea=b.totalFloorArea(r)}function _(e){h.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw",n=new h.Map({container:"map",style:"mapbox://styles/mapbox/streets-v9",center:[145.2726,-37.816],bearing:68,zoom:15}),n.onLoad=function(e){return n.loaded()?e():n.on("load",e)},n.onLoad(function(){n.addSource("parcels",{type:"geojson",data:e,generateId:!0}),n.addLayer({id:"parcels-outline",source:"parcels",type:"line",paint:{"line-color":"hsl(240,50%,80%)"}}),n.addLayer({id:"parcels-selected",source:"parcels",type:"fill",paint:{"fill-color":["case",["to-boolean",["feature-state","selected"]],"darkgrey","transparent"]}}),n.addSource("ziggurat",{type:"geojson",data:m.featureCollection([])}),n.addLayer({id:"heights",type:"fill-extrusion",source:"ziggurat",paint:{"fill-extrusion-color":{property:"height",stops:[[0,"hsl(100, 60%,40%)"],[1,"hsl(280, 95%,60%)"],[30,"hsl(240, 95%,80%)"]]},"fill-extrusion-opacity":.9,"fill-extrusion-height":{type:"identity",property:"height"}}})}),o=new v({displayControlsDefault:!1,controls:{polygon:!0,trash:!0}}),n.addControl(o),n.on("draw.create",y),n.on("draw.delete",y),n.on("draw.update",y)}f("data/out.geobuf").then(function(e){return e.arrayBuffer()}).then(function(e){a=p.decode(new d(e)),_(a)});var w=u,x=(r("b126"),r("ff34"),r("6964"),r("2877")),k=Object(x["a"])(w,l,s,!1,null,null,null);k.options.__file="App.vue";var A=k.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(A)}}).$mount("#app")},6964:function(e,t,r){"use strict";var o=r("ff0f"),a=r.n(o);a.a},"6e49":function(e,t,r){"use strict";r.r(t),r.d(t,"totalFloorArea",function(){return a}),r.d(t,"makeZigguraut",function(){return n});r("ac4d"),r("8a81"),r("ac6a");var o=r("595b");function a(e){var t=3,r={total:0,floors:[]};return o.featureEach(e,function(e){for(var a=o.area(e),n=Math.floor(e.properties.height/t),i=0;i<n;i++)r.floors[i]=(r.floors[i]||0)+a;r.total=r.total+a*n}),r}function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,a=[];return o.featureEach(e,function(e){if(e._selected){var n=e,i=!0,l=!1,s=void 0;try{for(var u,c=t[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var f=u.value;if(!f.x){n.properties={height:f.h},a.push(n);break}var d=o.buffer(n,-f.x,{units:"meters"});if(!(d&&o.area(d)>r)){n.properties={height:f.h},a.push(n);break}var p=o.difference(n,d);p.properties={height:f.h},a.push(p),n=d}}catch(v){l=!0,s=v}finally{try{i||null==c.return||c.return()}finally{if(l)throw s}}}}),console.log("Total setback polygons: "+a.length),o.featureCollection(a)}},ff0f:function(e,t,r){}});
//# sourceMappingURL=app.5fd3e3a6.js.map