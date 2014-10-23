//>>built
define("esri/layers/HeatmapManager","dojo/_base/declare dojo/_base/lang dojo/on dojo/aspect dojo/_base/array require ../kernel ../sniff ../geometry/Point ./MapImageLayer ./MapImage ./FeatureLayer ../renderers/HeatmapRenderer ../tasks/query".split(" "),function(n,s,D,p,w,q,E,F,x,r,y,z,A,B){function C(){}return n(null,{declaredClass:"esri.layers.HeatmapManager",heatmapRenderer:null,sourceLayer:null,imageLayer:null,useTiles:!0,useWorker:!1,map:null,constructor:function(a){var b=a.renderer;this.sourceLayer=
a;this.heatmapRenderer=b;this._hndls=[]},initialize:function(a){this.map=a;this.sourceLayer.setDrawMode(!1);var b=this,c=this.imageLayer=new r({className:"heatmapImgLyr"});!this.heatmapRenderer&&this.sourceLayer&&this.sourceLayer.renderer&&(this.heatmapRenderer=this.sourceLayer.renderer);this.recalculateHeatmap=this.recalculateHeatmap.bind(this);this._removeRenderer=this._removeRenderer.bind(this);this._handleRendererChange=this._handleRendererChange.bind(this);this._scRenderHandle=this.sourceLayer.on("renderer-change",
this._handleRendererChange);a.addLayer(c);q(["../workers/heatmapCalculator"],function(a){b._calculator=new a(s.mixin({width:b.map.width,height:b.map.height},b._getOptions()));b._setupRenderer()})},destroy:function(){this._removeHandlers();this._scRenderHandle.remove();this.map.removeLayer(this.imageLayer);this.sourceLayer.setRenderer(null);this.sourceLayer=this.imageLayer=this.map=this.heatmapRenderer=this._hndls=this._scRenderHandle=null},_handleRendererChange:function(a){var b=a.renderer,c=b instanceof
A;this.heatmapRenderer?c?this.heatmapRenderer=b:this._removeRenderer(a):c&&(this.heatmapRenderer=b,this._setupRenderer())},_setupRenderer:function(){var a=this._hndls,b=this.sourceLayer,c=this.map;b._originalDraw=b._draw;b._draw=C;var f=this;a.push(b.on("update-end",function(a){f.recalculateHeatmap()}));a.push(b.on("suspend",function(a){f.imageLayer.suspend()}));a.push(b.on("resume",function(a){f.imageLayer.resume()}));a.push(p.after(b,"redraw",this.recalculateHeatmap));a.push(c.on("layer-remove",
function(a){a.layer==f.sourceLayer&&c.removeLayer(f.imageLayer)}));b.mode!==z.MODE_ONDEMAND&&a.push(c.on("resize, zoom-end, pan-end",function(a){setTimeout(f.recalculateHeatmap,16)}));b.graphics&&b.graphics.length&&this.recalculateHeatmap()},_removeRenderer:function(a){a=a.target;a._draw=a._originalDraw;delete a._originalDraw;a.setDrawMode(!0);this.heatmapRenderer=null;this._removeHandlers();this._hndls=[]},recalculateHeatmap:function(){this._calculator?this._doMainCalculation():this._calculatorClient&&
this._doWorkerCalculation()},_doWorkerCalculation:function(){},_doMainCalculation:function(){var a=this.sourceLayer,b=this.imageLayer,c=this.map,f=this.heatmapRenderer,l=this.map.extent,t=this.map.width,u=this.map.height,n=this._calculator,p=this,h=function(e){e=e.features;var h=[],k=e.length,q=0,d,m=c.toScreen(new x(0,0)),r=m.x,m=m.y,v=c.getResolution(),g=0;for(c.extent._parts&&(g=w.map(c.extent._parts,function(b){return Math.abs(a._intersects(c,b.extent)[0])}),g.sort(function(a,b){return b-a}),
g=g[0]);k--;)d=e[k],d.geometry&&(d={x:Math.abs(Math.ceil(d.geometry.x/v+r)),y:Math.abs(Math.floor(d.geometry.y/v-m)),attributes:d.attributes},d.x>c.width&&(d.x-=g),0>d.x&&(d.x+=g),h[q++]=d);e=n.calculateImageData(s.mixin({screenPoints:h,mapinfo:{extent:[l.xmin,l.ymin,l.xmax,l.ymax],resolution:c.getResolution()},width:t,height:u},p._getOptions()));e=f.getSymbol({geometry:c.extent,attributes:{size:[t,u],imageData:e}});e=new y({extent:c.extent,href:e.url});b.addImage(e);setTimeout(function(){var a=b._mapImages.slice(0,
-1),c=a.length;if(1E3<c)a=b._mapImages[c],b.removeAllImages(),b.addImage(a);else for(;c--&&a[c];)b.removeImage(a[c])},250)},k={geometry:c.extent,timeExtent:c.timeExtent,spatialRelationship:B.SPATIAL_REL_INTERSECTS};null!=a._canDoClientSideQuery(k)?a.queryFeatures(k,h):h({features:a.graphics})},_removeHandlers:function(){for(var a=this._hndls.length;a--;)this._hndls[a].remove()},_getOptions:function(){var a=this.heatmapRenderer;return{blurRadius:a.blurRadius,gradient:a.gradient,maxPixelIntensity:a.maxPixelIntensity,
minPixelIntensity:a.minPixelIntensity,field:a.field}}})});
//@ sourceMappingURL=HeatmapManager.js.map