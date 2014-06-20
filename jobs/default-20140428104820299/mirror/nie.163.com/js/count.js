try{
var __au=navigator.userAgent.toLowerCase();
if(__au.indexOf("bot")>-1||__au.indexOf("spider")>-1||__au.indexOf("slurp")>-1||__au.indexOf("crawler")>-1){document.write('<img src="http://njs.ku.163.com/c.gif?bot" style="display:none" />');}
var ntes_d = new Date();
ntes_dls = ntes_d.getTime();
var ntes_oHead = document.getElementsByTagName('head').item(0); 
var ntes_oScript= document.createElement("script"); 
ntes_oScript.type = "text/javascript"; 
ntes_oScript.src="http://webjs.nie.163.com/newanaly.js?nc="+ntes_d.getDate();
ntes_oHead.appendChild(ntes_oScript);
}catch(e){}
var __au=navigator.userAgent.toLowerCase();
if(__au.indexOf("bot")>-1||__au.indexOf("spider")>-1||__au.indexOf("slurp")>-1||__au.indexOf("crawler")>-1){document.write('<img src="http://202.108.8.234:8326/c.gif?bot" style="display:none" />');}
var hiido_d = new Date();
hiido_dls = hiido_d.getTime();
var hiido_oHead = document.getElementsByTagName('head').item(0); 
var hiido_oScript= document.createElement("script"); 
hiido_oScript.type = "text/javascript"; 
hiido_oScript.src="http://webjs.nie.163.com/newanaly.js?nc="+hiido_d.getDate();
hiido_oHead.appendChild(hiido_oScript);
var a=new Date;a1=a.getTime();var ap=navigator.appName;var av=navigator.appVersion;var au=navigator.userAgent.toLowerCase();var aj=navigator.javaEnabled()?1:0;var ln=(navigator.language)?navigator.language:navigator.browserLanguage;ln=ln.substring(0,2);var sw=screen.width;var sh=screen.height;var sc=screen.colorDepth;if(isIE()||isFirefox()){sw=screen.width;sh=screen.height;sc=screen.colorDepth;}
else{var jToolkit=java.awt.Toolkit.getDefaultToolkit();var jScreenSize=jToolkit.getScreenSize();sw=jScreenSize.width;sh=jScreenSize.height;sc=screen.pixelDepth;}
var cm=document.compatMode?document.compatMode:'BackCompat';var dn="0";if(au.indexOf("net clr 2.0")!=-1){dn=20;}
else if(au.indexOf("net clr 1.1")!=-1){dn=11;}
else if(au.indexOf("net clr")!=-1){dn=10;}
function GF(){var f="0",n=navigator;if(n.plugins&&n.plugins.length){for(var ii=0;ii<n.plugins.length;ii++){if(n.plugins[ii].name.indexOf('Shockwave Flash')!=-1){f=n.plugins[ii].description.split('Shockwave Flash ')[1];break;}}}else if(window.ActiveXObject){for(var ii=10;ii>=2;ii--){try{var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");if(fl){f=ii+'.0';break;}}
catch(e){}}}
return RP(f);}
function RP(xn){xn=xn.replace(/ /g,'');xn=xn.replace(/&nbsp;/g,'');xn=xn.replace(/&/g,'|||');return xn;}
function isNav(){return(navigator.appName=="Netscape"&&!isOpera()&&!isKHTML()&&!isFirefox());}
function isIE(){return(navigator.appName=="Microsoft Internet Explorer"&&!isOpera());}
function isOpera(){return(au.indexOf("opera")!=-1);}
function isKHTML(){var isKHTMLs=au.indexOf("khtml")>-1||au.indexOf("konqueror")>-1||au.indexOf("applewebkit")>-1;return isKHTMLs;}
function isFirefox(){return(au.indexOf("firefox")!=-1);}
function BW(){if(isNav()){return"Netscape";}
if(isIE()){return"IE";}
if(isOpera()){return"Opera";}
if(isKHTML()){return"Safari/Konqueror";}
if(isFirefox()){return"Firefox";}
else{return"Other";}}
function VR(){var versionMinor=parseFloat(navigator.appVersion);if(isFirefox()){versionMinor=parseFloat(au.substring(au.indexOf('/',au.indexOf('firefox/')+6)+1));}
else if(isIE()){var reIE=new RegExp("MSIE (\\d+\\.\\d+);");reIE.test(navigator.userAgent);versionMinor=parseFloat(RegExp["$1"]);}
else if(isKHTML()){var isSafari=au.indexOf("applewebkit")>-1;var isKonq=au.indexOf("konqueror")>-1;if(isSafari){versionMinor=parseFloat(au.substring(au.lastIndexOf('applewebkit/')+12));}else if(isKonq){versionMinor=parseFloat(au.substring(au.lastIndexOf('konqueror/')+10));}}
else if(isOpera()){versionMinor=parseFloat(au.substring(au.indexOf('opera')+6));}
return versionMinor;}
function OS(){if(isWin95()){return"Windows95";}
if(isWin98()){return"Windows98";}
if(isWinMe()){return"WindowsMe";}
if(isWin2000()){return"Windows2000";}
if(isWinXP()){return"WindowsXP";}
if(isWin2003()){return"Windows2003";}
if(isWinVista()){return"WindowsVista";}
if(isWinOT()){return"WindowsOT";}
if(isMac()){return"Mac";}
if(isMacPPC()){return"MacPPC";}
if(isUnix()){return"Unix";}
if(isLinux()){return"Linux";}
else{return"Other";}}
function isWindows(){return(au.indexOf("win")!=-1);}
function isWinOT(){return(isWindows()&&!isWin2000()&&!isWinXP()&&!isWin2003()&&!isWinVista()&&!isWin95()&&!isWin98()&&!isWinMe());}
function isWin95(){return(isWindows()&&(au.indexOf("win95")>-1||au.indexOf("windows 95")>-1));}
function isWin98(){return(isWindows()&&(au.indexOf("win98")>-1||au.indexOf("windows 98")>-1));}
function isWinMe(){return(isWindows()&&(au.indexOf("win 9x 4.90")>-1||au.indexOf("windows me")>-1));}
function isWin2000(){return(isWindows()&&(au.indexOf("windows nt 5.0")!=-1||au.indexOf("windows 2000")>-1));}
function isWinXP(){return(isWindows()&&(au.indexOf("windows nt 5.1")!=-1||au.indexOf("windows xp")>-1));}
function isWin2003(){return(isWindows()&&(au.indexOf("windows nt 5.2")!=-1||au.indexOf("windows 2003")>-1));}
function isWinVista(){return(isWindows()&&(au.indexOf("windows nt 6.0")!=-1||au.indexOf("windows vista")>-1));}
function isMac(){return(au.indexOf("mac")!=-1||au.indexOf("68k")>-1);}
function isMacPPC(){return(isMac()&&(au.indexOf("ppc")!=-1||au.indexOf("powerpc")!=-1));}
function isUnix(){return(au.indexOf('unix')!=-1||au.indexOf('sunos')!=-1||au.indexOf('bsd')!=-1||au.indexOf('x11')!=-1);}
function isLinux(){return(au.indexOf('linux')!=-1);}
function DM(){var d1=(document.getElementById)?true:false;var d2=(document.addEventListener&&document.removeEventListener)?true:false;if(d1&&d2){return"d12";}
else if(d1&&!d2){return"d1";}
else if(d2&&!d1){return"d2";}
else{return"0";}}
function CK(){var cookie_enabled=(navigator.cookieEnabled)?true:false;if(typeof navigator.cookieEnabled=="undefined"&&!cookie_enabled){document.cookie="testcookie"
cookie_enabled=(document.cookie.indexOf("testcookie")!=-1)?true:false}
return cookie_enabled;}
function UL(){var url=/(\w+):\/\/([\w.]+)\/(\S*)/;var result=fs.match(url);if(result!=null){var fullurl=result[0];var protocol=result[1];var host=result[2];}
return host;}
function HQ(str){var rs=new RegExp("(^|)"+str+"=([^\&]*)(\&|$)","gi").exec(ls),tmp;if(tmp=rs){return tmp[2];}else{return"0";}}
function getCookie(name)
{var start=document.cookie.indexOf(name+"=");var len=start+name.length+1;if((!start)&&(name!=document.cookie.substring(0,name.length)))
{return null;}
if(start==-1)return null;var end=document.cookie.indexOf(";",len);if(end==-1)end=document.cookie.length;return unescape(document.cookie.substring(len,end));}
function setCookie(name,value,expires,path,domain,secure)
{var today=new Date();today.setTime(today.getTime());if(expires)
{expires=expires*1000*60*60*24;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=name+"="+escape(value)+
((expires)?";expires="+expires_date.toGMTString():"")+
((path)?";path="+path:"")+
((domain)?";domain="+domain:"")+
((secure)?";secure":"");}
var cc=0;function UK(){var ui="0";if(ce){var ud=Math.random();ui=getCookie("ud");cc=2;if(!ui){setCookie("ud",ud,1);ui=getCookie("ud");cc=1;}}
return ui;}
var ss=OS();var bs=BW();var vs=VR();var fl=GF();var om=DM();var ce=CK();var fs=document.referrer?document.referrer:"direct";var fd=UL();var ls=String(window.document.location.href?window.document.location.href:window.location.href);var lp=ls.split("?");lp=lp[0];var ld=HQ("pid");var ui=UK();var sp=sw+"x"+sh;bs=bs+vs;function ccid(){var b=new Date;b1=b.getTime();tt=b1-a1;var xc="wz=nie"+"&zd="+_xc_ccid+"&sp="+sp+"&sc="+sc+"&cm="+cm+"&dn="+dn+"&ln="+ln+"&ss="+ss+"&bs="+bs+"&fs="+escape(fs)+"&fd="+fd+"&om="+om+"&fl="+fl+"&ce="+ce+"&aj="+aj+"&lp="+lp+"&ld="+ld+"&ui="+ui+"&cc="+cc+"&tt="+tt;var i2=new Image(1,1);i2.src="http://123.125.48.35/count.html"+"?"+xc;i2.onload=function(){return;}}