//>>built
define("app/main","dojo/topic app/config app/widget/Map app/widget/NavBar dojo/i18n!app/nls/strings dojo/domReady!".split(" "),function(d,c,e,f,a){var b={};b.map=new e({config:c,strings:a},"mapNode");b.map.startup();(new f({config:c,strings:a},"navBarNode")).startup();d.subscribe("basemap/set",function(a){b.map.setBasemap(a.basemap)});window.document.title=a.appTitle;return b});
//@ sourceMappingURL=main.js.map