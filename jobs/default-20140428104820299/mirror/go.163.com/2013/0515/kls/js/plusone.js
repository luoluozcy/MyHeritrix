var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var m=void 0,r=!0,s=null,t=!1,aa=encodeURIComponent,u=window,ba=Object,v=document,w=String,ca=decodeURIComponent;function da(a,b){return a.type=b}
var ea="appendChild",x="push",z="test",fa="shift",ga="exec",ha="width",A="replace",ia="getElementById",ja="concat",ka="JSON",B="indexOf",la="match",ma="readyState",C="createElement",D="setAttribute",na="getTime",oa="getElementsByTagName",pa="substr",E="length",qa="prototype",F="split",G="location",I="style",ra="removeChild",sa="call",K="getAttribute",ta="charCodeAt",L="href",ua="substring",va="action",M="apply",wa="attributes",N="parentNode",xa="update",ya="height",O="join",za="toLowerCase";var P=u,Q=v,Aa=P[G],Ba=function(){},Ca=/\[native code\]/,S=function(a,b,c){return a[b]=a[b]||c},Da=function(a){for(var b=0;b<this[E];b++)if(this[b]===a)return b;return-1},Ea=function(a){a=a.sort();for(var b=[],c=m,d=0;d<a[E];d++){var e=a[d];e!=c&&b[x](e);c=e}return b},Fa=/&/g,Ga=/</g,Ha=/>/g,Ia=/"/g,Ja=/'/g,Ka=function(a){return w(a)[A](Fa,"&amp;")[A](Ga,"&lt;")[A](Ha,"&gt;")[A](Ia,"&quot;")[A](Ja,"&#39;")},T=function(){var a;if((a=ba.create)&&Ca[z](a))a=a(s);else{a={};for(var b in a)a[b]=m}return a},
U=function(a,b){return ba[qa].hasOwnProperty[sa](a,b)},La=function(a){if(Ca[z](ba.keys))return ba.keys(a);var b=[],c;for(c in a)U(a,c)&&b[x](c);return b},V=function(a,b){a=a||{};for(var c in a)U(a,c)&&(b[c]=a[c])},Ma=function(a){return function(){P.setTimeout(a,0)}},Na=function(a,b){if(!a)throw Error(b||"");},W=S(P,"gapi",{});var X=function(a,b,c){var d=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ga](a)||b[ga](a)))try{c=ca(a[2])}catch(e){}return c},Oa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Pa=function(a){a=a[la](Oa);var b=T();b.q=a[1];b.c=a[3]?[a[3]]:[];b.i=a[5]?[a[5]]:[];return b},Qa=function(a){return a.q+(0<a.c[E]?"?"+a.c[O]("&"):"")+(0<a.i[E]?"#"+a.i[O]("&"):"")},Ra=function(a,b){var c=[];if(a)for(var d in a)if(U(a,d)&&a[d]!=s){var e=b?b(a[d]):a[d];c[x](aa(d)+"="+aa(e))}return c},
Sa=function(a,b,c,d){a=Pa(a);a.c[x][M](a.c,Ra(b,d));a.i[x][M](a.i,Ra(c,d));return Qa(a)},Ta=function(a,b){var c="";2E3<b[E]&&(c=b[ua](2E3),b=b[ua](0,2E3));var d=a[C]("div"),e=a[C]("a");e.href=b;d[ea](e);d.innerHTML=d.innerHTML;b=w(d.firstChild[L]);d[N]&&d[N][ra](d);return b+c},Ua=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var Va=function(a,b,c,d){if(P[c+"EventListener"])P[c+"EventListener"](a,b,t);else if(P[d+"tachEvent"])P[d+"tachEvent"]("on"+a,b)},Ya=function(a){var b=Wa;if("complete"!==Q[ma])try{b()}catch(c){}Xa(a)},Xa=function(a){if("complete"===Q[ma])a();else{var b=t,c=function(){if(!b)return b=r,a[M](this,arguments)};P.addEventListener?(P.addEventListener("load",c,t),P.addEventListener("DOMContentLoaded",c,t)):P.attachEvent&&(P.attachEvent("onreadystatechange",function(){"complete"===Q[ma]&&c[M](this,arguments)}),
P.attachEvent("onload",c))}},Za=function(a){for(;a.firstChild;)a[ra](a.firstChild)},$a={button:r,div:r,span:r};var Y;Y=S(P,"___jsl",T());S(Y,"I",0);S(Y,"hel",10);var ab=function(a){return!Y.dpo?X(a,"jsh",Y.h):Y.h},bb=function(a){var b=S(Y,"sws",[]);b[x][M](b,a)},cb=function(a){var b=S(Y,"PQ",[]);Y.PQ=[];var c=b[E];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},db=function(a){return S(S(Y,"H",T()),a,T())};var eb=S(Y,"perf",T()),fb=S(eb,"g",T()),gb=S(eb,"i",T());S(eb,"r",[]);T();T();var hb=function(a,b,c){var d=eb.r;"function"===typeof d?d(a,b,c):d[x]([a,b,c])},ib=function(a,b,c){fb[a]=!b&&fb[a]||c||(new Date)[na]();hb(a)},kb=function(a,b,c){b&&0<b[E]&&(b=jb(b),c&&0<c[E]&&(b+="___"+jb(c)),28<b[E]&&(b=b[pa](0,28)+(b[E]-28)),c=b,b=S(gb,"_p",T()),S(b,c,T())[a]=(new Date)[na](),hb(a,"_p",c))},jb=function(a){return a[O]("__")[A](/\./g,"_")[A](/\-/g,"_")[A](/\,/g,"_")};var lb=T(),mb=[],Z=function(a){throw Error("Bad hint"+(a?": "+a:""));};mb[x](["jsl",function(a){for(var b in a)if(U(a,b)){var c=a[b];"object"==typeof c?Y[b]=S(Y,b,[])[ja](c):S(Y,b,c)}if(b=a.u)a=S(Y,"us",[]),a[x](b),(b=/^https:(.*)$/[ga](b))&&a[x]("http:"+b[1])}]);var nb=/^(\/[a-zA-Z0-9_\-]+)+$/,ob=/^[a-zA-Z0-9\-_\.!]+$/,pb=/^gapi\.loaded_[0-9]+$/,qb=/^[a-zA-Z0-9,._-]+$/,ub=function(a,b,c,d){var e=a[F](";"),f=lb[e[fa]()],h=s;f&&(h=f(e,b,c,d));if(!(b=!h))b=h,c=b[la](rb),d=b[la](sb),b=!(d&&1===d[E]&&tb[z](b)&&c&&1===c[E]);b&&Z(a);return h},xb=function(a,b,c,d){a=vb(a);pb[z](c)||Z("invalid_callback");b=wb(b);d=d&&d[E]?wb(d):s;var e=function(a){return aa(a)[A](/%2C/g,",")};return[aa(a.t)[A](/%2C/g,",")[A](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):
"","/rt=j/sv=1/d=1/ed=1",a.l?"/am="+e(a.l):"",a.n?"/rs="+e(a.n):"","/cb=",e(c)][O]("")},vb=function(a){"/"!==a.charAt(0)&&Z("relative path");for(var b=a[ua](1)[F]("/"),c=[];b[E];){a=b[fa]();if(!a[E]||0==a[B]("."))Z("empty/relative directory");else if(0<a[B]("=")){b.unshift(a);break}c[x](a)}a={};for(var d=0,e=b[E];d<e;++d){var f=b[d][F]("="),h=ca(f[0]),k=ca(f[1]);2!=f[E]||(!h||!k)||(a[h]=a[h]||k)}b="/"+c[O]("/");nb[z](b)||Z("invalid_prefix");c=yb(a,"k",r);d=yb(a,"am");a=yb(a,"rs");return{t:b,version:c,
l:d,n:a}},wb=function(a){for(var b=[],c=0,d=a[E];c<d;++c){var e=a[c][A](/\./g,"_")[A](/-/g,"_");qb[z](e)&&b[x](e)}return b[O](",")},yb=function(a,b,c){a=a[b];!a&&c&&Z("missing: "+b);if(a){if(ob[z](a))return a;Z("invalid: "+b)}return s},tb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,sb=/\/cb=/g,rb=/\/\//g,zb=function(){var a=ab(Aa[L]);if(!a)throw Error("Bad hint");return a};lb.m=function(a,b,c,d){(a=a[0])||Z("missing_hint");return"https://apis.google.com"+xb(a,b,c,d)};var Ab=decodeURI("%73cript"),Bb=function(a,b){for(var c=[],d=0;d<a[E];++d){var e=a[d];e&&0>Da[sa](b,e)&&c[x](e)}return c},Db=function(a){"loading"!=Q[ma]?Cb(a):Q.write("<"+Ab+' src="'+encodeURI(a)+'"></'+Ab+">")},Cb=function(a){var b=Q[C](Ab);b[D]("src",a);b.async="true";(a=Q[oa](Ab)[0])?a[N].insertBefore(b,a):(Q.head||Q.body||Q.documentElement)[ea](b)},Eb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<mb[E];d++){var e=mb[d][0],f=mb[d][1];f&&U(c,e)&&f(c[e],a,b)}},Hb=function(a,b){Gb(function(){var c;
c=b===ab(Aa[L])?S(W,"_",T()):T();c=S(db(b),"_",c);a(c)})},Jb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Eb(a,c);var d=a?a[F](":"):[],e=c.h||zb(),f=S(Y,"ah",T());if(!f["::"]||!d[E])Ib(d||[],c,e);else{for(var h=[],k=s;k=d[fa]();){var n=k[F]("."),n=f[k]||f[n[1]&&"ns:"+n[0]||""]||e,g=h[E]&&h[h[E]-1]||s,l=g;if(!g||g.hint!=n)l={hint:n,o:[]},h[x](l);l.o[x](k)}var p=h[E];if(1<p){var y=c.callback;y&&(c.callback=function(){0==--p&&y()})}for(;d=h[fa]();)Ib(d.o,c,d.hint)}},Ib=function(a,
b,c){a=Ea(a)||[];var d=b.callback,e=b.config,f=b.timeout,h=b.ontimeout,k=s,n=t;if(f&&!h||!f&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var g=S(db(c),"r",[]).sort(),l=S(db(c),"L",[]).sort(),p=[][ja](g),y=function(a,b){if(n)return 0;P.clearTimeout(k);l[x][M](l,q);var d=((W||{}).config||{})[xa];d?d(e):e&&S(Y,"cu",[])[x](e);if(b){kb("me0",a,p);try{Hb(b,c)}finally{kb("me1",a,p)}}return 1};0<f&&(k=P.setTimeout(function(){n=r;h()},f));var q=Bb(a,l);if(q[E]){var q=
Bb(a,g),H=S(Y,"CP",[]),J=H[E];H[J]=function(a){if(!a)return 0;kb("ml1",q,p);var b=function(b){H[J]=s;y(q,a)&&cb(function(){d&&d();b()})},c=function(){var a=H[J+1];a&&a()};0<J&&H[J-1]?H[J]=function(){b(c)}:b(c)};if(q[E]){var R="loaded_"+Y.I++;W[R]=function(a){H[J](a);W[R]=s};a=ub(c,q,"gapi."+R,g);g[x][M](g,q);kb("ml0",q,p);b.sync||P.___gapisync?Db(a):Cb(a)}else H[J](Ba)}else y(q)&&d&&d()};var Gb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Jb("debug_error",function(){u.___jsl.hefn(b)})}else return a()};W.load=function(a,b){return Gb(function(){return Jb(a,b)})};var Kb=function(a){var b=u.___jsl=u.___jsl||{};b[a]=b[a]||[];return b[a]},Lb=function(a){var b=u.___jsl=u.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Mb=function(a){return"object"===typeof a&&/\[native code\]/[z](a[x])},Nb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Mb(a[c])&&!Mb(b[c])?Nb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Mb(b[c])?[]:{},Nb(a[c],b[c])):a[c]=b[c])},Ob=function(a){if(a&&!/^\s+$/[z](a)){for(;0==a[ta](a[E]-
1);)a=a[ua](0,a[E]-1);var b;try{b=u[ka].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},$=function(a){if(!a)return Lb();a=a[F]("/");for(var b=Lb(),c=0,d=a[E];b&&"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[E]&&b!==m?b:m},Pb=function(){Lb(r);var a=u.___gcfg,b=Kb("cu");if(a&&a!==u.___gu){var c={};Nb(c,a);b[x](c);u.___gu=
a}var a=Kb("cu"),d=v.scripts||v[oa]("script")||[],c=[],e=[];e[x][M](e,Kb("us"));for(var f=0;f<d[E];++f)for(var h=d[f],k=0;k<e[E];++k)h.src&&0==h.src[B](e[k])&&c[x](h);0==c[E]&&(0<d[E]&&d[d[E]-1].src)&&c[x](d[d[E]-1]);for(d=0;d<c[E];++d)c[d][K]("gapi_processed")||(c[d][D]("gapi_processed",r),(e=c[d])?(f=e.nodeType,e=3==f||4==f?e.nodeValue:e.textContent||e.innerText||e.innerHTML||""):e=m,(e=Ob(e))&&a[x](e));d=Kb("cd");a=0;for(c=d[E];a<c;++a)Nb(Lb(),d[a]);d=Kb("ci");a=0;for(c=d[E];a<c;++a)Nb(Lb(),d[a]);
a=0;for(c=b[E];a<c;++a)Nb(Lb(),b[a])};var Qb=function(){var a=u.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),S(Y,"ci",[])[x](a),u.__GOOGLEAPIS=m)};var Rb=u.console,Sb=function(a){Rb&&Rb.log&&Rb.log(a)};var Tb=S(Y,"rw",T()),Ub=function(a,b){var c=Tb[a];c&&c.state<b&&(c.state=b)};var Vb=function(a){var b;a[la](/^https?%3A/i)&&(b=ca(a));return Ta(v,b?b:a)},Wb=function(a){a=a||"canonical";for(var b=v[oa]("link"),c=0,d=b[E];c<d;c++){var e=b[c],f=e[K]("rel");if(f&&f[za]()==a&&(e=e[K]("href")))if((e=Vb(e))&&e[la](/^https?:\/\/[\w\-\_\.]+/i)!=s)return e}return u[G][L]};var Xb;var Yb=function(){};var Zb=function(){this.b=[];this.j=[];this.p=[];this.g=[];this.g[0]=128;for(var a=1;64>a;++a)this.g[a]=0;this.reset()};(function(){function a(){}a.prototype=Yb[qa];Zb.v=Yb[qa];Zb.prototype=new a})();Zb[qa].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.k=this.d=0};
var $b=function(a,b,c){c||(c=0);var d=a.p;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[ta](c)<<24|b[ta](c+1)<<16|b[ta](c+2)<<8|b[ta](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var h=a.b[2],k=a.b[3],n=a.b[4],g,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),g=1518500249):(f=c^h^k,g=1859775393):60>e?(f=c&h|k&(c|h),g=2400959708):(f=c^h^k,g=3395469782),f=(b<<5|b>>>27)+
f+n+g+d[e]&4294967295,n=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+h&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+n&4294967295};Zb[qa].update=function(a,b){b===m&&(b=a[E]);for(var c=b-64,d=0,e=this.j,f=this.d;d<b;){if(0==f)for(;d<=c;)$b(this,a,d),d+=64;if("string"==typeof a)for(;d<b;){if(e[f]=a[ta](d),++f,++d,64==f){$b(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,64==f){$b(this,e);f=0;break}}this.d=f;this.k+=b};var gc=function(){var a;ac?(a=new P.Uint32Array(1),bc.getRandomValues(a),a=Number("0."+a[0])):(a=cc,a+=parseInt(dc[pa](0,20),16),dc=ec(dc),a/=fc+Math.pow(16,20));return a},bc=P.crypto,ac=t,hc=0,ic=0,cc=1,fc=0,dc="",jc=function(a){a=a||P.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=b*((new Date)[na]()%1E6);cc=cc*b%fc;0<hc&&++ic==hc&&Va("mousemove",jc,"remove","de")},ec=function(a){var b=new Zb;b[xa](a);a=[];var c=8*b.k;56>b.d?b[xa](b.g,56-b.d):b[xa](b.g,64-(b.d-56));for(var d=63;56<=
d;d--)b.j[d]=c&255,c/=256;$b(b,b.j);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)a[c]=b.b[d]>>e&255,++c;b="";for(d=0;d<a[E];d++)b+="0123456789ABCDEF".charAt(Math.floor(a[d]/16))+"0123456789ABCDEF".charAt(a[d]%16);return b},ac=!!bc&&"function"==typeof bc.getRandomValues;ac||(fc=1E6*(screen[ha]*screen[ha]+screen[ya]),dc=ec(Q.cookie+"|"+Q[G]+"|"+(new Date)[na]()+"|"+Math.random()),hc=$("random/maxObserveMousemove")||0,0!=hc&&Va("mousemove",jc,"add","at"));var kc=function(){var a=Y.onl;if(!a){a=T();Y.onl=a;var b=T();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},lc=function(a,b){var c=b.onload;return"function"===typeof c?(kc().a(a,c),c):s},mc=function(a){Na(/^\w+$/[z](a),"Unsupported id - "+a);kc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},nc=function(a){kc().r(a)};var oc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},pc={allowtransparency:r,onload:r},qc=0,rc=function(a){Na(!a||Ua[z](a),"Illegal url for new iframe - "+a)},sc=function(a,b,c,d,e){rc(c.src);var f,h=lc(d,c),k=h?mc(d):"";try{f=a[C]('<iframe frameborder="'+Ka(w(c.frameborder))+'" scrolling="'+Ka(w(c.scrolling))+'" '+k+' name="'+Ka(w(c.name))+'"/>')}catch(n){f=a[C]("iframe"),h&&(f.onload=function(){f.onload=
s;h[sa](this)},nc(d))}for(var g in c)a=c[g],"style"===g&&"object"===typeof a?V(a,f[I]):pc[g]||f[D](g,w(a));g=e&&e.beforeNode||s;!g&&(!e||!e.dontclear)&&Za(b);b.insertBefore(f,g);f=g?g.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=r);return f};var tc=/^:[\w]+$/,uc=/:([a-zA-Z_]+):/g,vc=function(){var a=$("googleapis.config/sessionIndex");a==s&&(a=u.__X_GOOG_AUTHUSER);if(a==s){var b=u.google;b&&(a=b.authuser)}a==s&&(a=m,a==s&&(a=u[G][L]),a=a?X(a,"authuser")||s:s);return a==s?s:w(a)},wc=function(a,b){if(!Xb){var c=$("iframes/:socialhost:"),d=vc()||"0",e=vc();Xb={socialhost:c,session_index:d,session_prefix:e!==m&&e!==s&&""!==e?"u/"+e+"/":"",im_prefix:$("googleapis.config/signedIn")===t?"_/im/":""}}return Xb[b]||""};var xc={style:"position:absolute;top:-10000px;width:450px;margin:0px;borderStyle:none"},yc="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),zc=S(Y,"WI",T()),Ac=["style","data-gapiscan"],Bc=function(a){var b=m;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},Cc=function(){};var Dc,Ec,Fc,Gc,Hc,Ic=/(?:^|\s)g-((\S)*)(?:$|\s)/;Dc=S(Y,"SW",T());Ec=S(Y,"SA",T());Fc=S(Y,"SM",T());Gc=S(Y,"FW",[]);Hc=s;
var Kc=function(a,b){Jc(m,t,a,b)},Jc=function(a,b,c,d){ib("ps0",r);c=("string"===typeof c?v[ia](c):c)||Q;var e;e=Q.documentMode;if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:La(Dc)[ja](La(Ec))[ja](La(Fc));for(var f=[],h=0;h<e[E];h++){var k=e[h];f[x](".g-"+k,"g\\:"+k)}e=c.querySelectorAll(f[O](","))}else e=c[oa]("*");c=T();for(f=0;f<e[E];f++){h=e[f];var n=h,k=d,g=n.nodeName[za](),l=m;n[K]("data-gapiscan")?k=s:(0==g[B]("g:")?l=g[pa](2):(n=(n=w(n.className||n[K]("class")))&&Ic[ga](n))&&(l=n[1]),k=l&&(Dc[l]||
Ec[l]||Fc[l])&&(!k||l===k)?l:s);k&&(h[D]("data-gapiscan",r),S(c,k,[])[x](h))}if(b)for(var p in c){b=c[p];for(d=0;d<b[E];d++)b[d][D]("data-onload",r)}for(var y in c)Gc[x](y);ib("ps1",r);if((p=Gc[O](":"))||a)try{W.load(p,a)}catch(q){Sb(q);return}if(Lc(Hc||{}))for(var H in c){a=c[H];y=0;for(b=a[E];y<b;y++)a[y].removeAttribute("data-gapiscan");Mc(H)}else{d=[];for(H in c){a=c[H];y=0;for(b=a[E];y<b;y++){h=a[y];e=H;k=f=h;h=T();l=0!=k.nodeName[za]()[B]("g:");n=0;for(g=k[wa][E];n<g;n++){var J=k[wa][n],R=J.name,
Fb=J.value;0<=Da[sa](Ac,R)||(l&&0!=R[B]("data-")||"null"===Fb||"specified"in J&&!J.specified)||(l&&(R=R[pa](5)),h[R[za]()]=Fb)}l=h;k=k[I];(n=Bc(k&&k[ya]))&&(l.height=w(n));(k=Bc(k&&k[ha]))&&(l.width=w(k));Nc(e,f,h,d,b)}}Oc(p,d)}},Pc=function(a){var b=S(W,a,{});b.go||(b.go=function(b){return Kc(b,a)},b.render=function(b,d){var e=d||{};da(e,a);var f=e.type;delete e.type;var h=("string"===typeof b?v[ia](b):b)||m;if(h){var k={},n;for(n in e)U(e,n)&&(k[n[za]()]=e[n]);k.rd=1;e=[];Nc(f,h,k,e,0);Oc(f,e)}else Sb("string"===
"gapi."+f+".render: missing element "+typeof b?b:"")})},Qc=function(a){Dc[a]=r},Rc=function(a){Ec[a]=r},Sc=function(a){Fc[a]=r};var Mc=function(a,b){var c=S(Y,"watt",T())[a];b&&c?(c(b),(c=b.iframeNode)&&c[D]("data-gapiattached",r)):W.load(a,function(){var c=S(Y,"watt",T())[a],e=b&&b.iframeNode;!e||!c?(0,W[a].go)(e&&e[N]):(c(b),e[D]("data-gapiattached",r))})},Lc=function(){return t},Oc=function(){},Nc=function(a,b,c,d,e){switch(Tc(b,a)){case 0:a=Fc[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;Mc(a,d);break;case 1:var f;if(b[N]){var h=r;c.dontclear&&(h=t);delete c.dontclear;var k,n,g;n=g=a;"plus"==a&&c[va]&&(g=a+
"_"+c[va],n=a+"/"+c[va]);(g=$("iframes/"+g+"/url"))||(g=":socialhost:/_/widget/render/"+n);n=Ta(Q,g[A](uc,wc));g={};V(c,g);g.hl=$("lang")||$("gwidget/lang")||"en-US";g.origin=u[G].origin||u[G].protocol+"//"+u[G].host;g.exp=$("iframes/"+a+"/params/exp");var l=$("iframes/"+a+"/params/location");if(l)for(var p=0;p<l[E];p++){var y=l[p];g[y]=P[G][y]}switch(a){case "plus":case "follow":l=g[L];p=c[va]?m:"publisher";l=(l="string"==typeof l?l:m)?Vb(l):Wb(p);g.url=l;delete g[L];break;case "plusone":case "recobox":g.url=
c[L]?Vb(c[L]):Wb();l=c.db;p=$();l==s&&p&&(l=p.db,l==s&&(l=p.gwidget&&p.gwidget.db));g.db=l||m;l=c.ecp;p=$();l==s&&p&&(l=p.ecp,l==s&&(l=p.gwidget&&p.gwidget.ecp));g.ecp=l||m;delete g[L];break;case "signin":g.url=Wb()}Y.ILI&&(g.iloader="1");delete g["data-onload"];delete g.rd;g.gsrc=$("iframes/:source:");l=$("inline/css");"undefined"!==typeof l&&(0<e&&l>=e)&&(g.ic="1");l=/^#|^fr-/;e={};for(k in g)U(g,k)&&l[z](k)&&(e[k[A](l,"")]=g[k],delete g[k]);k=[][ja](yc);(l=$("iframes/"+a+"/methods"))&&("object"===
typeof l&&Ca[z](l[x]))&&(k=k[ja](l));for(var q in c)if(U(c,q)&&/^on/[z](q)&&("plus"!=a||"onconnect"!=q))k[x](q),delete g[q];delete g.callback;e._methods=k[O](",");k=Sa(n,g,e);q={allowPost:1,attributes:xc};q.dontclear=!h;h={};h.userParams=c;h.url=k;da(h,a);c.rd?g=b:(g=v[C]("div"),b[D]("data-gapistub",r),g[I].cssText="position:absolute;width:450px;left:-10000px;",b[N].insertBefore(g,b));h.siteElement=g;g.id||(b=g,S(zc,a,0),n="___"+a+"_"+zc[a]++,b.id=n);b=T();b[">type"]=a;V(c,b);n=k;c=g;k=q||{};b=k[wa]||
{};Na(!k.allowPost||!b.onload,"onload is not supported by post iframe");q=b=n;tc[z](b)&&(q=$("iframes/"+q[ua](1)+"/url"),Na(!!q,"Unknown iframe url config for - "+b));n=Ta(Q,q[A](uc,wc));b=c.ownerDocument||Q;g=0;do q=k.id||["I",qc++,"_",(new Date)[na]()][O]("");while(b[ia](q)&&5>++g);Na(5>g,"Error creating iframe id");g={};e={};V(k.queryParams||{},g);V(k.fragmentParams||{},e);l=T();l.id=q;l.parent=b[G].protocol+"//"+b[G].host;p=X(b[G][L],"id","");y=X(b[G][L],"pfname","");(p=p?y+"/"+p:"")&&(l.pfname=
p);V(l,e);(l=X(n,"rpctoken")||g.rpctoken||e.rpctoken)||(l=e.rpctoken=k.rpctoken||w(Math.round(1E8*gc())));k.rpctoken=l;p=b[G][L];l=T();(y=X(p,"_bsh",Y.bsh))&&(l._bsh=y);(p=ab(p))&&(l.jsh=p);k.hintInFragment?V(l,e):V(l,g);n=Sa(n,g,e,k.paramsSerializer);e=T();V(oc,e);V(k[wa],e);e.name=e.id=q;e.src=n;if((k||{}).allowPost&&2E3<n[E]){g=Pa(n);e.src="";e["data-postorigin"]=n;n=sc(b,c,e,q);-1!=navigator.userAgent[B]("WebKit")&&(f=n.contentWindow.document,f.open(),e=f[C]("div"),l={},p=q+"_inner",l.name=p,
l.src="",l.style="display:none",sc(b,e,l,p,k));e=(k=g.c[0])?k[F]("&"):[];k=[];for(l=0;l<e[E];l++)p=e[l][F]("=",2),k[x]([ca(p[0]),ca(p[1])]);g.c=[];e=Qa(g);g=b[C]("form");g.action=e;g.method="POST";g.target=q;g[I].display="none";for(q=0;q<k[E];q++)e=b[C]("input"),da(e,"hidden"),e.name=k[q][0],e.value=k[q][1],g[ea](e);c[ea](g);g.submit();g[N][ra](g);f&&f.close();f=n}else f=sc(b,c,e,q,k);h.iframeNode=f;h.id=f[K]("id");f=h.id;c=T();c.id=f;c.userParams=h.userParams;c.url=h.url;da(c,h.type);c.state=1;Tb[f]=
c;f=h}else f=s;f&&((h=f.id)&&d[x](h),Mc(a,f))}},Tc=function(a,b){if(a&&1===a.nodeType&&b)if(Fc[b]){if($a[a.nodeName[za]()]){var c=a.innerHTML;return c&&c[A](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}}else{if(Ec[b])return 0;if(Dc[b])return 1}return s};S(W,"platform",{}).go=Kc;var Lc=function(a){for(var b=["_c","jsl","h"],c=0;c<b[E]&&a;c++)a=a[b[c]];b=ab(Aa[L]);return!a||0!=a[B]("n;")&&0!=b[B]("n;")&&a!==b},Oc=function(a,b){Uc(a,b)},Wa=function(a){Jc(a,r)},Vc=function(a,b){for(var c=b||[],d=0;d<c[E];++d)a(c[d]);for(d=0;d<c[E];d++)Pc(c[d])};mb[x](["platform",function(a,b,c){Hc=c;b&&Gc[x](b);Vc(Qc,a);Vc(Rc,c._c.annotation);Vc(Sc,c._c.bimodal);Qb();Pb();if("explicit"!=$("parsetags")){bb(a);var d;if(c&&(a=c.callback))d=Ma(a),delete c.callback;Ya(function(){Wa(d)})}}]);var Wc=function(a){a=(a=Tb[a])?a.oid:m;if(a){var b=Q[ia](a);b&&b[N][ra](b);delete Tb[a];Wc(a)}},Cc=function(a,b,c){if(c[ha]&&c[ya]){e:{c=c||{};var d=Y.ssfn;if(d&&d(m)){if("number"===typeof Y.ucs)break e;var e=b.id;if(e){d=(d=Tb[e])?d.state:m;if(1===d||4===d)break e;Wc(e)}}if((d=a.nextSibling)&&d[K]&&d[K]("data-gapistub"))a[N][ra](d),a[I].cssText="";var d=c[ha],f=c[ya],h=a[I];h.textIndent="0";h.margin="0";h.padding="0";h.background="transparent";h.borderStyle="none";h.cssFloat="none";h.styleFloat=
"none";h.lineHeight="normal";h.fontSize="1px";h.verticalAlign="baseline";a=a[I];a.display="inline-block";h=b[I];h.position="static";h.left=0;h.top=0;h.visibility="visible";d&&(a.width=h.width=d+"px");f&&(a.height=h.height=f+"px");c.verticalAlign&&(a.verticalAlign=c.verticalAlign);e&&Ub(e,3)}b["data-csi-wdt"]=(new Date)[na]()}};var Xc=/^\{h\:'/,Yc=/^!_/,Zc="",Uc=function(a,b){function c(){Va("message",d,"remove","de")}function d(d){var h=d.data,k=d.origin;if($c(h,b)){var n=e;e=t;n&&ib("rqe");ad(a,function(){n&&ib("rqd");c();for(var a=S(Y,"RPMQ",[]),b=0;b<a[E];b++)a[b]({data:h,origin:k})})}}if(!(0===b[E]||!u[ka]||!u[ka].parse)){Zc=X(Aa[L],"pfname","");var e=r;Va("message",d,"add","at");Jb(a,c)}},$c=function(a,b){a=w(a);if(Xc[z](a))return r;var c=t;Yc[z](a)&&(c=r,a=a[pa](2));if(!/^\{/[z](a))return t;try{var d=u[ka].parse(a)}catch(e){return t}if(!d)return t;
var f=d.f;if(d.s&&f&&-1!=Da[sa](b,f)){if("_renderstart"===d.s||d.s===Zc+"/"+f+"::_renderstart")c=d.a&&d.a[c?0:1],d=Q[ia](f),Ub(f,2),(f=Tb[f])&&(f.args=c),c&&d&&Cc(d[N],d,c);return r}return t},ad=function(a,b){Jb(a,b)};ib("bs0",r,u.gapi._bs);ib("bs1",r);delete u.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[102,103,100,71,98,96,110,108,79,106,45,17,86,81,61,30],"inline":{"css":1},"report":{},"oauth-flow":{"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","persist":true},"isLoggedIn":false,"isPlusUser":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"shortlists":{"url":"?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"panoembed":{"url":"https://ssl.gstatic.com/pano/embed/?bsv"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?bsv"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?bsv"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1\u0026bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/?bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.01},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.zh_CN.F-exr0axcPY.O/m\u003d__features__/am\u003dUQ/rt\u003dj/d\u003d1/rs\u003dAItRSTO3vVGAzG3vQz3dQrUB75ClaAHOsw","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"25aeff8fd7610bb7da2b71719ff2ece079a140b7","dpo":false},"platform":["additnow","comments","commentcount","identity","panoembed","plus","plusone","recobox","savetodrive","shortlists","zoomableimage","savetowallet","notifications","hangout","follow"],"fp":"25aeff8fd7610bb7da2b71719ff2ece079a140b7","annotation":["autocomplete","profile","interactivepost"],"bimodal":["signin"]}});