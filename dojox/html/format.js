//>>built
define("dojox/html/format",["dojo/_base/kernel","./entities","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(h,x,C,D,y){var p=h.getObject("dojox.html.format",!0);p.prettyPrint=function(p,m,n,z,E){var g=[],k=0,u=[],l="\t",e="",A=[],v,F=/[=]([^"']+?)(\s|>)/g,G=/style=("[^"]*"|'[^']*'|\S*)/gi,H=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi;if(m&&0<m&&10>m){l="";for(v=0;v<m;v++)l+=" "}m=D.doc.createElement("div");m.innerHTML=p;var I=x.encode,J=x.decode,w=m.ownerDocument.createElement("div"),K=
function(a){a=a.cloneNode(!1);w.appendChild(a);a=w.innerHTML;w.innerHTML="";return a},q=function(){var a;for(a=0;a<k;a++)g.push(l)},r=function(){g.push("\n")},s=function(a){var b,d;a=a.split("\n");for(b=0;b<a.length;b++)a[b]=h.trim(a[b]);a=a.join(" ");a=h.trim(a);if(""!==a){var c=[];if(n&&0<n){var f="";for(b=0;b<k;b++)f+=l;b=f.length;f=n;for(n>b&&(f-=b);a;)if(a.length>n){for(b=f;0<b&&" "!==a.charAt(b);b--);if(!b)for(b=f;b<a.length&&" "!==a.charAt(b);b++);var e=a.substring(0,b),e=h.trim(e);a=h.trim(a.substring(b==
a.length?a.length:b+1,a.length));if(e){d="";for(b=0;b<k;b++)d+=l;e=d+e+"\n"}c.push(e)}else{d="";for(b=0;b<k;b++)d+=l;a=d+a+"\n";c.push(a);a=null}return c.join("")}d="";for(b=0;b<k;b++)d+=l;return d+a+"\n"}return""},L=function(a){if(a){var b=a;b&&(b=b.replace(/&quot;/gi,'"'),b=b.replace(/&gt;/gi,"\x3e"),b=b.replace(/&lt;/gi,"\x3c"),b=b.replace(/&amp;/gi,"\x26"));var d,c;a=0;for(var f=b.split("\n"),e=[],b=0;b<f.length;b++){var g=f[b],t=-1<g.indexOf("\n");if(g=h.trim(g)){t=a;for(d=0;d<g.length;d++)c=
g.charAt(d),"{"===c?a++:"}"===c&&(a--,t=a);c="";for(d=0;d<k+t;d++)c+=l;e.push(c+g+"\n")}else t&&0===b&&e.push("\n")}a=e.join("")}return a},M=function(a){var b=a.nodeName.toLowerCase(),d=h.trim(K(a));a=d.substring(0,d.indexOf("\x3e")+1);a=a.replace(F,'\x3d"$1"$2');a=a.replace(G,function(a){var b=a.substring(0,6);a=a.substring(6,a.length);var c=a.charAt(0);a=h.trim(a.substring(1,a.length-1));a=a.split(";");var d=[];C.forEach(a,function(a){if(a=h.trim(a))a=a.substring(0,a.indexOf(":")).toLowerCase()+
a.substring(a.indexOf(":"),a.length),d.push(a)});d=d.sort();a=d.join("; ");var e=h.trim(a);return!e||";"===e?"":b+c+(a+";")+c});var c=[];a=a.replace(H,function(a){c.push(h.trim(a));return""});c=c.sort();a="\x3c"+b;c.length&&(a+=" "+c.join(" "));-1!=d.indexOf("\x3c/")?(u.push(b),a+="\x3e"):(a=E?a+" /\x3e":a+"\x3e",u.push(!1));a:switch(b){case "a":case "b":case "strong":case "s":case "strike":case "i":case "u":case "em":case "sup":case "sub":case "span":case "font":case "big":case "cite":case "q":case "small":b=
!0;break a;default:b=!1}A.push(b);e&&!b&&(g.push(s(e)),e="");b?e+=a:(q(),g.push(a),r(),k++)},B=function(a){var b=a.childNodes;if(b){var d;for(d=0;d<b.length;d++){var c=b[d];if(1===c.nodeType){var f=h.trim(c.tagName.toLowerCase());!(y("ie")&&c.parentNode!=a)&&!(f&&"/"===f.charAt(0))&&(M(c),"script"===f?g.push(L(c.innerHTML)):"pre"===f?(c=c.innerHTML,y("mozilla")&&(c=c.replace("\x3cbr\x3e","\n"),c=c.replace("\x3cpre\x3e",""),c=c.replace("\x3c/pre\x3e","")),"\n"!==c.charAt(c.length-1)&&(c+="\n"),g.push(c)):
B(c),c=A.pop(),e&&!c&&(g.push(s(e)),e=""),(f=u.pop())?(f="\x3c/"+f+"\x3e",c?e+=f:(k--,q(),g.push(f),r())):k--)}else 3===c.nodeType||4===c.nodeType?e+=I(c.nodeValue,z):8===c.nodeType&&(c=J(c.nodeValue,z),q(),g.push("\x3c!--"),r(),k++,g.push(s(c)),k--,q(),g.push("--\x3e"),r())}}};B(m);e&&(g.push(s(e)),e="");return g.join("")};return p});
//@ sourceMappingURL=format.js.map