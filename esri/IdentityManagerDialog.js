//>>built
define("esri/IdentityManagerDialog","dojo/_base/kernel dojo/_base/declare dojo/_base/config dojo/_base/Deferred dojo/_base/lang dojo/has dojo/dom-attr dojo/keys dijit/registry dijit/Dialog ./kernel ./lang ./domUtils ./Credential ./IdentityManagerBase dojo/i18n!./nls/jsapi dojo/query dijit/form/Button dijit/form/ValidationTextBox".split(" "),function(e,t,g,u,v,A,k,w,l,p,s,q,m,x,y,z){return t([y],{declaredClass:"esri.IdentityManager",_eventMap:{"dialog-cancel":["info"]},constructor:function(d){v.mixin(this,
d);this.registerConnectEvents()},_dialogContent:"\x3cdiv class\x3d'dijitDialogPaneContentArea'\x3e\x3cdiv style\x3d'padding-bottom: 5px; word-wrap: break-word;'\x3e${info}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriErrorMsg' style\x3d'display: none; color: white; background-color: #D46464; text-align: center; padding-top: 3px; padding-bottom: 3px;'\x3e${invalidUser}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3ctable style\x3d'width: 100%;'\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel\x3e${lblUser}\x3c/label\x3e\x3cbr/\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' data-dojo-props\x3d'type:\"text\", \"class\":\"esriIdUser\", required:true, trim:true, style:\"width: 100%;\", autocapitalize:\"none\", autocorrect:\"off\", spellcheck:false' /\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel\x3e${lblPwd}\x3c/label\x3e\x3cbr/\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' data-dojo-props\x3d'type:\"password\", \"class\":\"esriIdPwd\", required:true, style:\"width: 100%;\"' /\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv class\x3d'dijitDialogPaneActionBar'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdSubmit\"'\x3e${lblOk}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdCancel\"'\x3e${lblCancel}\x3c/button\x3e\x3c/div\x3e",
onDialogCreate:function(){},onDialogCancel:function(){},signIn:function(d,b,a){this._nls||(this._nls=z.identity);this._loginDialog||(this._loginDialog=this.dialog=this._createLoginDialog(),this.onDialogCreate());var f=this._loginDialog,n=a&&a.error,e=a&&a.token,c=new u(function(){f.onCancel()});if(f.open)return d=Error("BUSY"),d.code="IdentityManager.1",d.log=g.isDebug,c.errback(d),c;m.hide(f.errMsg_);n&&403==n.code&&e&&(k.set(f.errMsg_,"innerHTML",this._nls.forbidden),m.show(f.errMsg_));f.dfd_=c;
f.serverInfo_=b;f.resUrl_=d;f.admin_=a&&a.isAdmin;k.set(f.resLink_,{title:d,innerHTML:"("+(this.getResourceName(d)||this._nls.lblItem)+")"});k.set(f.serverLink_,{title:b.server,innerHTML:(-1!==b.server.toLowerCase().indexOf("arcgis.com")?"ArcGIS Online":b.server)+" "});f.txtPwd_.set("value","");f.show();return c},_createLoginDialog:function(){var d=this._nls,b=q.substitute(d,this._dialogContent),b=q.substitute({resource:"\x3cspan class\x3d'resLink' style\x3d'word-wrap: break-word;'\x3e\x3c/span\x3e",
server:"\x3cspan class\x3d'serverLink' style\x3d'word-wrap: break-word;'\x3e\x3c/span\x3e"},b),a=new p({title:d.title,content:b,"class":"esriSignInDialog",style:"width: 18em;",esriIdMgr_:this,keypressed_:function(a){a.charOrCode===w.ENTER&&this.execute_()},execute_:function(){var a=this.txtUser_.get("value"),b=this.txtPwd_.get("value"),e=this.dfd_,c=this;if(a&&b){this.btnSubmit_.set("label",d.lblSigning);var l=s.id.findCredential(c.resUrl_,a),g=function(b){c.btnSubmit_.set("label",d.lblOk);c.btnSubmit_.set("disabled",
!1);m.hide(c.errMsg_);c.hide();p._DialogLevelManager.hide(c);var n=c.serverInfo_;c.dfd_=c.serverInfo_=c.generateDfd_=c.resUrl_=null;var g,k,h=l,r;b&&(g=b.token,k=q.isDefined(b.expires)?Number(b.expires):null,r=!!b.ssl,h?(h.userId=a,h.token=g,h.expires=k,h.validity=b.validity,h.ssl=r,h.creationTime=(new Date).getTime()):h=new x({userId:a,server:n.server,token:g,expires:k,ssl:r,isAdmin:c.admin_,validity:b.validity}));e.callback(h)};l&&!l._enqueued?g():(c.btnSubmit_.set("disabled",!0),c.generateDfd_=
s.id.generateToken(this.serverInfo_,{username:a,password:b},{isAdmin:this.admin_}).addCallback(g).addErrback(function(a){c.btnSubmit_.set("disabled",!1);c.generateDfd_=null;c.btnSubmit_.set("label",d.lblOk);k.set(c.errMsg_,"innerHTML",a&&a.code?d.invalidUser:d.noAuthService);m.show(c.errMsg_)}))}},cancel_:function(){a.generateDfd_&&a.generateDfd_.cancel();var b=a.dfd_,d=a.resUrl_,e=a.serverInfo_;a.btnSubmit_.set("disabled",!1);a.dfd_=a.serverInfo_=a.generateDfd_=a.resUrl_=null;m.hide(a.errMsg_);p._DialogLevelManager.hide(a);
a.esriIdMgr_.onDialogCancel({resourceUrl:d,serverInfo:e});d=Error("ABORTED");d.code="IdentityManager.2";d.log=g.isDebug;b.errback(d)}}),b=a.domNode;a.txtUser_=l.byNode(e.query(".esriIdUser",b)[0]);a.txtPwd_=l.byNode(e.query(".esriIdPwd",b)[0]);a.btnSubmit_=l.byNode(e.query(".esriIdSubmit",b)[0]);a.btnCancel_=l.byNode(e.query(".esriIdCancel",b)[0]);a.resLink_=e.query(".resLink",b)[0];a.serverLink_=e.query(".serverLink",b)[0];a.errMsg_=e.query(".esriErrorMsg",b)[0];a.connect(a.txtUser_,"onKeyPress",
a.keypressed_);a.connect(a.txtPwd_,"onKeyPress",a.keypressed_);a.connect(a.btnSubmit_,"onClick",a.execute_);a.connect(a.btnCancel_,"onClick",a.onCancel);a.connect(a,"onCancel",a.cancel_);return a}})});
//@ sourceMappingURL=IdentityManagerDialog.js.map