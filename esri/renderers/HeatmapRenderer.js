//>>built
define("esri/renderers/HeatmapRenderer","dojo/_base/declare dojo/_base/lang dojo/dom-construct ../sniff ../kernel ../lang ../symbols/PictureMarkerSymbol ./Renderer".split(" "),function(h,g,k,p,q,l,m,n){return h([n],{declaredClass:"esri.renderer.HeatmapRenderer",colors:null,blurRadius:10,maxPixelIntensity:100,minPixelIntensity:0,field:null,constructor:function(a){this._supportsCanvas=window.CanvasRenderingContext2D?!0:!1;this._supportTypedArray=window.ArrayBuffer?!0:!1;this._supportsCanvas&&this._supportTypedArray&&
("string"==typeof a&&(a=JSON.parse(a)),g.mixin(this,a),this._canvas=null,this.colors||(this.colors=["rgba(255, 140, 0, 0)","rgba(255, 140, 0, 1)","rgba(255, 0,   0, 1)"]),this.gradient=this._generateGradient(this.colors))},getSymbol:function(a){if(!this._supportsCanvas||!this._supportTypedArray)return!1;var b=a.attributes.imageData;a=a.attributes.size;if(!a)return null;var c=this._getContext(a[0],a[1]),e=c.getImageData(0,0,a[0],a[1]);b instanceof ArrayBuffer?b=window.Uint8ClampedArray?new Uint8ClampedArray(b):
new Uint8Array(b):b.BYTES_PER_ELEMENT&&1!==b.BYTES_PER_ELEMENT&&(b=window.Uint8ClampedArray?new Uint8ClampedArray(b.buffer):new Uint8Array(b.buffer));if(window.CanvasPixelArray&&e.data instanceof window.CanvasPixelArray)for(var d=e.data,f=d.length;f--;)d[f]=b[f];else e.data.set(b);c.putImageData(e,0,0);return new m(c.canvas.toDataURL(),a[0],a[1])},setColors:function(a){if(a&&(a instanceof Array||a.colors))this.gradient=this._generateGradient(a.colors||a)},setMaxPixelIntensity:function(a){this.maxPixelIntensity=
a},setMinPixelIntensity:function(a){this.minPixelIntensity=a},setField:function(a){this.field=a},setBlurRadius:function(a){this.blurRadius=a},toJson:function(){var a=g.mixin(this.inherited(arguments),{type:"heatmap",blurRadius:this.blurRadius,colors:this.colors instanceof Uint32Array?null:this.colors,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity,field:this.field});return l.fixJson(a)},_getContext:function(a,b){this._canvas?(this._canvas.width=a,this._canvas.height=
b):this._canvas=this._initCanvas(a,b);return this._canvas.getContext("2d")},_initCanvas:function(a,b){var c=k.create("canvas",{id:"hm_canvas-"+Math.floor(1E3*Math.random()),style:"position: absolute; left: -10000px; top: 0px;"},null);c.width=a;c.height=b;document.body.appendChild(c);return c},_generateGradient:function(a,b){b||(b=512);var c=this._getContext(1,b||512),e=c.createLinearGradient(0,0,0,b),d,f=a.length-1;for(d=0;d<=f;d++)e.addColorStop(d/f,a[d]);c.fillStyle=e;c.fillRect(0,0,1,b);c=c.getImageData(0,
0,1,b).data;return c.buffer?new Uint32Array(c.buffer):new Uint32Array((new Uint8Array(c)).buffer)}})});
//@ sourceMappingURL=HeatmapRenderer.js.map