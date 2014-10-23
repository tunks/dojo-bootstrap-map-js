//>>built
define("dojo-bootstrap/Collapse","./Support dojo/_base/declare dojo/query dojo/_base/lang dojo/_base/window dojo/on dojo/dom-class dojo/dom-attr dojo/dom-geometry dojo/dom-style dojo/NodeList-dom dojo/NodeList-traverse dojo/domReady!".split(" "),function(d,n,f,h,p,k,c,q,r,l){var m=n([],{defaultOptions:{toggle:!0},constructor:function(a,b){this.options=h.mixin(h.clone(this.defaultOptions),b||{});this.domNode=a;this.transitioning=null;this.options.parent&&(this.parent=f(this.options.parent));this.options.toggle&&
this.toggle()},dimension:function(){return c.contains(this.domNode,"width")?"width":"height"},show:function(){var a,b,g,e;if(!this.transitioning&&!c.con){this.parent&&this.options.target&&f("[data-target\x3d"+this.options.target+"]",this.parent[0]).forEach(function(a){c.remove(a,"collapsed")});a=this.dimension();b=d.toCamel(["scroll",a].join("-"));if((g=this.parent&&f("\x3e .panel \x3e .in",this.parent[0]))&&g.length){if((e=d.getData(g[0],"collapse"))&&e.transitioning)return;g.collapse("hide");e||
d.setData(g[0],"collapse",null)}l.set(this.domNode,a,"0px");this.transition("add","show","shown");d.trans&&l.set(this.domNode,a,this.domNode[b]+"px")}},hide:function(){if(!this.transitioning&&c.contains(this.domNode,"in")){this.parent&&this.options.target&&f("[data-target\x3d"+this.options.target+"]",this.parent[0]).forEach(function(a){c.add(a,"collapsed")});var a=this.dimension();this.reset(l.get(this.domNode,a));this.transition("remove","hide","hidden");l.set(this.domNode,a,"0px")}},reset:function(a){a=
a?parseFloat(a,10)+"px":"auto";var b=this.dimension();c.remove(this.domNode,"collapse");l.set(this.domNode,b,a);this._offsetWidth=this.domNode.offsetWidth;c[null!==a?"add":"remove"](this.domNode,"collapse");return this},transition:function(a,b,g){var e=h.hitch(this,function(){"show"===b&&this.reset();this.transitioning=0;"add"===a?c.add(this.domNode,"in"):"remove"===a&&c.add(this.domNode,"collapse");c.remove(this.domNode,"collapsing");k.emit(this.domNode,g+".bs.collapse",{bubbles:!1,cancelable:!1})});
k.emit(this.domNode,b+".bs.collapse",{bubbles:!1,cancelable:!1});c.remove(this.domNode,"collapse");c.add(this.domNode,"collapsing");"remove"===a&&c.remove(this.domNode,"in");this.transitioning=1;d.trans?(k.once(this.domNode,d.trans.end,e),d.emulateTransitionEnd(this.domNode,350)):e()},toggle:function(){this[c.contains(this.domNode,"in")?"hide":"show"]()}});h.extend(f.NodeList,{collapse:function(a){var b=h.isObject(a)?a:!1;return this.forEach(function(c){var e=d.getData(c,"collapse");e||d.setData(c,
"collapse",e=new m(c,b));h.isString(a)&&e[a].call(e)})}});k(p.body(),k.selector("[data-toggle\x3dcollapse]","click"),function(a){var b=this;"collapse"!==d.getData(b,"toggle")&&(b=f(this).closest("[data-toggle\x3dcollapse]")[0]);if(b&&(a=q.get(b,"data-target")||a.preventDefault()||d.hrefValue(b)))b=d.getData(a,"collapse")?"toggle":d.getData(b),f(a).collapse(b)});return m});
//@ sourceMappingURL=Collapse.js.map