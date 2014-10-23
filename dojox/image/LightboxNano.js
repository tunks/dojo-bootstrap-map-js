//>>built
define("dojox/image/LightboxNano",["dojo","dojo/fx"],function(a,l){var h=function(){var c="BackCompat"==a.doc.compatMode?a.body():a.doc.documentElement,b=a._docScroll();return{w:c.clientWidth,h:c.clientHeight,l:b.x,t:b.y}};return a.declare("dojox.image.LightboxNano",null,{href:"",duration:500,preloadDelay:5E3,constructor:function(c,b){var d=this;a.mixin(d,c);if(b=d._node=a.byId(b)){if(!/a/i.test(b.tagName)){var e=a.create("a",{href:d.href,"class":b.className},b,"after");b.className="";e.appendChild(b);
b=e}a.style(b,"position","relative");d._createDiv("dojoxEnlarge",b);a.setSelectable(b,!1);d._onClickEvt=a.connect(b,"onclick",d,"_load")}d.href&&setTimeout(function(){(new Image).src=d.href;d._hideLoading()},d.preloadDelay)},destroy:function(){var c=this._connects||[];c.push(this._onClickEvt);a.forEach(c,a.disconnect);a.destroy(this._node)},_createDiv:function(c,b,d){return a.create("div",{"class":c,style:{position:"absolute",display:d?"":"none"}},b)},_load:function(c){c&&a.stopEvent(c);if(!this._loading){this._loading=
!0;this._reset();c=this._img=a.create("img",{style:{visibility:"hidden",cursor:"pointer",position:"absolute",top:0,left:0,zIndex:9999999}},a.body());var b=this._loadingNode,d=a.query("img",this._node)[0]||this._node,e=a.position(d,!0),f=a.contentBox(d),d=a._getBorderExtents(d);if(null==b){this._loadingNode=b=this._createDiv("dojoxLoading",this._node,!0);var g=a.marginBox(b);a.style(b,{left:parseInt((f.w-g.w)/2)+"px",top:parseInt((f.h-g.h)/2)+"px"})}f.x=e.x-10+d.l;f.y=e.y-10+d.t;this._start=f;this._connects=
[a.connect(c,"onload",this,"_show")];c.src=this.href}},_hideLoading:function(){this._loadingNode&&a.style(this._loadingNode,"display","none");this._loadingNode=!1},_show:function(){var c=h(),b=this._img.width,d=this._img.height,e=parseInt(0.9*(c.w-20)),f=parseInt(0.9*(c.h-20)),g=a.doc,k=this._bg=a.create("div",{style:{backgroundColor:"#000",opacity:0,position:"absolute",zIndex:9999998}},a.body());this._loadingNode&&this._hideLoading();a.style(this._img,{border:"10px solid #fff",visibility:"visible"});
a.style(this._node,"visibility","hidden");this._loading=!1;this._connects=this._connects.concat([a.connect(g,"onmousedown",this,"_hide"),a.connect(g,"onkeypress",this,"_key"),a.connect(window,"onresize",this,"_sizeBg")]);b>e&&(d=d*e/b,b=e);d>f&&(b=b*f/d,d=f);this._end={x:(c.w-20-b)/2+c.l,y:(c.h-20-d)/2+c.t,w:b,h:d};this._sizeBg();a.fx.combine([this._anim(this._img,this._coords(this._start,this._end)),this._anim(k,{opacity:0.5})]).play()},_sizeBg:function(){var c=a.doc.documentElement;a.style(this._bg,
{top:0,left:0,width:c.scrollWidth+"px",height:c.scrollHeight+"px"})},_key:function(c){a.stopEvent(c);this._hide()},_coords:function(a,b){return{left:{start:a.x,end:b.x},top:{start:a.y,end:b.y},width:{start:a.w,end:b.w},height:{start:a.h,end:b.h}}},_hide:function(){a.forEach(this._connects,a.disconnect);this._connects=[];a.fx.combine([this._anim(this._img,this._coords(this._end,this._start),"_reset"),this._anim(this._bg,{opacity:0})]).play()},_reset:function(){a.style(this._node,"visibility","visible");
a.destroy(this._img);a.destroy(this._bg);this._img=this._bg=null;this._node.focus()},_anim:function(c,b,d){return a.animateProperty({node:c,duration:this.duration,properties:b,onEnd:d?a.hitch(this,d):null})},show:function(c){c=c||{};this.href=c.href||this.href;c=a.byId(c.origin);var b=h();this._node=c||a.create("div",{style:{position:"absolute",width:0,hieght:0,left:b.l+b.w/2+"px",top:b.t+b.h/2+"px"}},a.body());this._load();c||a.destroy(this._node)}})});
//@ sourceMappingURL=LightboxNano.js.map