//>>built
define("esri/layers/DynamicLayerInfo","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ./LayerInfo ./LayerMapSource ./LayerDataSource".split(" "),function(c,g,h,k,d,e,b,f){return c(e,{declaredClass:"esri.layers.DynamicLayerInfo",defaultVisibility:!0,parentLayerId:-1,maxScale:0,minScale:0,constructor:function(a){a&&(a.source?a="mapLayer"===a.source.type?new b(a.source):new f(a.source):(a=new b,a.mapLayerId=this.id),this.source=a)},toJson:function(){var a=this.inherited(arguments);a.source=
this.source&&this.source.toJson();return d.fixJson(a)}})});
//@ sourceMappingURL=DynamicLayerInfo.js.map