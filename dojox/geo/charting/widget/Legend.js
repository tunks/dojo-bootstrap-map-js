//>>built
define("dojox/geo/charting/widget/Legend","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/_base/html dojo/dom dojo/dom-construct dojo/dom-class dojo/_base/window dijit/_Widget".split(" "),function(p,q,k,l,r,m,b,g,a,n){return l("dojox.geo.charting.widget.Legend",n,{horizontal:!0,legendBody:null,swatchSize:18,map:null,postCreate:function(){this.map&&(this.series=this.map.series,this.domNode.parentNode||m.byId(this.map.container).appendChild(this.domNode),this.refresh())},
buildRendering:function(){this.domNode=b.create("table",{role:"group","class":"dojoxLegendNode"});this.legendBody=b.create("tbody",null,this.domNode);this.inherited(arguments)},refresh:function(){for(;this.legendBody.lastChild;)b.destroy(this.legendBody.lastChild);this.horizontal&&(g.add(this.domNode,"dojoxLegendHorizontal"),this._tr=a.doc.createElement("tr"),this.legendBody.appendChild(this._tr));var c=this.series;0!=c.length&&k.forEach(c,function(a){this._addLabel(a.color,a.name)},this)},_addLabel:function(c,
b){var d=a.doc.createElement("td"),e=a.doc.createElement("td"),f=a.doc.createElement("div");g.add(d,"dojoxLegendIcon");g.add(e,"dojoxLegendText");f.style.width=this.swatchSize+"px";f.style.height=this.swatchSize+"px";d.appendChild(f);if(this.horizontal)this._tr.appendChild(d),this._tr.appendChild(e);else{var h=a.doc.createElement("tr");this.legendBody.appendChild(h);h.appendChild(d);h.appendChild(e)}f.style.background=c;e.innerHTML=String(b)}})});
//@ sourceMappingURL=Legend.js.map