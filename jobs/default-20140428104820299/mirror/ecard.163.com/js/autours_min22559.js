//$Revision: 22559 $
var UrsUtil={isIE6:(function(){return(window.XMLHttpRequest)?false:true})(),isOpera:(function(){return(window.opera)?true:false})(),trim:function($){return $.replace(/(^\s*)|(\s*$)/g,"")},getPos:function(D){var A=0,C=0;function E(){while(D.offsetParent){A+=D.offsetLeft;C+=D.offsetTop;D=D.offsetParent}D.style.margin="0"}if(D.offsetParent){E();var $=window;while($!=window.top){var _=$.parent.document.getElementsByTagName("iframe");for(var F=0,B=_.length;F<B;F++)if(_[F].contentWindow==$){D=_[F];break}E();$=$.parent}}return{top:C,left:A}},getCookie:function(A){var $="(?:;)?"+A+"=([^;]*);?",_=new RegExp($);if(_.test(document.cookie))return decodeURIComponent(RegExp["$1"]);else return null},addEvent:function(_,A,B){try{_.addEventListener(A,B,false)}catch($){_.attachEvent("on"+A,B)}}},AutoUrs={ini:function(){this.doc=window.self==window.top?document:window.top.document;if(!this.doc.getElementById("RKS")){var B="#selCont{position:absolute; z-index:1000010; display:none;overflow:hidden; text-align:left;background-color:#FFFFFF; border:1px solid #ccc; font-size:12px;font-family:Arial,sans-serif;}#selCont h3{font-size:12px; padding:6px 6px 3px; margin:0; font-weight:normal; color:#999;height:auto;width:auto;line-height:1em;}#selCont div{position:relative; left:0; top:0; z-index:1000012}#selCont ul {list-style:none; text-align:left; margin:0; padding:0;font-size:0;}#selCont ul li{line-height:20px;font-size:12px; padding:2px 6px;cursor:pointer; color:#666;}#selCont ul li.on {background-color:#2d8bff; color:#fff;font-weight:bold;}.ursIni{color:#999;}",_=this.doc.createElement("style");_.type="text/css";_.id="RKS";try{_.styleSheet.cssText=B}catch($){try{_.innerHTML=B}catch($){_.appendChild(this.doc.createTextNode(B))}}this.doc.getElementsByTagName("head")[0].appendChild(_)}if(this.selCont=this.doc.getElementById("selCont")){this.ulSel=this.doc.getElementById("ulSel");return}this.selCont=this.doc.createElement("div");this.selCont.id="selCont";this.defaultUrs="\u5982name@example.com";this.selCont.innerHTML="<div><h3>--\u8bf7\u9009\u62e9\u5e10\u53f7--</h3><ul id='ulSel'></ul></div>";var A=this;if(this.doc.onreadystatechange===undefined)(function(){if(A.doc.body){A.doc.body.appendChild(A.selCont);A.ulSel=A.doc.getElementById("ulSel")}else setTimeout(arguments.callee,20)})();else{if(this.doc.readyState=="complete"){this.doc.body.appendChild(A.selCont);this.ulSel=A.doc.getElementById("ulSel");return}UrsUtil.addEvent(this.doc,"readystatechange",function(){if(A.doc.readyState=="complete"){A.doc.body.appendChild(A.selCont);A.ulSel=A.doc.getElementById("ulSel")}})}},bind:function($,_){this.iUrs=document.getElementById($);var _=_?_:{};_.mailList=_.mailList?_.mailList:["163.com","126.com","yeah.net","vip.163.com","vip.126.com","188.com","netease.com"];_.cookie=_.cookie?_.cookie:"none";if(this.iUrs.value==""){if(_.cookie=="global")var A=UrsUtil.getCookie("P_INFO")?UrsUtil.getCookie("P_INFO").split("|")[0]:null;else if(_.cookie!="none")A=UrsUtil.getCookie(_.cookie);if(A)this.iUrs.value=A;else{this.iUrs.className+=" ursIni";this.iUrs.value=this.defaultUrs}}this.iUrs.tabTo=_.tabTo;this.iUrs.mails=_.mailList;this.iUrs.selIndex=0;this.iUrs.inList=false;this.eventHandler();this.setPos()},eventHandler:function(){var $=this;UrsUtil.addEvent(window.top,"resize",function(){$.setPos.call($)});UrsUtil.addEvent(this.iUrs,"keydown",function(_){$.down.call($,_)});UrsUtil.addEvent($.iUrs,"keypress",function(_){$.press.call($,_)});this.iUrs.onfocus=function(){if(this.className.indexOf("ursIni")!=-1){this.value="";this.className=this.className.replace("ursIni","")}this.select();$.iUrs=this;$.iUrs.inList=false;if($.ulSel)$.ulSel.innerHTML="";$.setPos()};this.iUrs.onblur=function(){$.setVal()}},setPos:function(){var $=UrsUtil.getPos(this.iUrs);this.selCont.style.left=$.left+"px";this.selCont.style.top=$.top+this.iUrs.offsetHeight+1+"px"},press:function(_){var B=this,_=_||window.event,A=_.keyCode;if(UrsUtil.isOpera)setTimeout(function(){B.update(A)},20);if(A==13){this.setVal();try{_.preventDefault()}catch($){_.returnValue=false}if(B.doc.getElementById(B.iUrs.tabTo))B.doc.getElementById(B.iUrs.tabTo).focus()}},down:function($){var A=this,$=$||window.event,_=$.keyCode;if(!UrsUtil.isOpera)setTimeout(function(){A.update(_)},20)},setVal:function(){if(UrsUtil.trim(this.iUrs.value)!=""&&this.iUrs.inList)this.iUrs.value=this.ulSel.childNodes[this.iUrs.selIndex].innerHTML;else if(UrsUtil.trim(this.iUrs.value)==""){this.iUrs.className+=" ursIni";this.iUrs.value=this.defaultUrs}this.selCont.style.display="none"},update:function(D){var C=UrsUtil.trim(this.iUrs.value);if(D!=13&&D!=17){if(C==""){this.selCont.style.display="none";return}else{if(D==16||D==9)return;this.selCont.style.display="block"}if(D!=38&&D!=40){var $=[];if(C.indexOf("@")>=0){var I=C.indexOf("@"),A=C.substring(I+1),H=false;for(var G=0,F=this.iUrs.mails.length;G<F;G++)if(this.iUrs.mails[G].indexOf(A)==0){H=true;$.push("<li>"+C.substring(0,I)+"@"+this.iUrs.mails[G]+"</li>")}else{this.iUrs.selIndex=0;continue}this.iUrs.inList=H;if(!H){this.selCont.style.display="none";return}}else{this.iUrs.inList=true;for(G=0,F=this.iUrs.mails.length;G<F;G++)$.push("<li>"+C+"@"+this.iUrs.mails[G]+"</li>")}$=$.join("");this.ulSel.innerHTML=$;this.selCont.style.width="auto";this.selCont.style.width=(this.selCont.offsetWidth<this.iUrs.offsetWidth)?this.iUrs.offsetWidth-2+"px":"";this.ulSel.childNodes[this.iUrs.selIndex].className="on";var _=this.ulSel.getElementsByTagName("li"),E=this;for(G=0,F=_.length;G<F;G++){_[G].index=G;_[G].onmouseover=function(){_[E.iUrs.selIndex].className="";E.iUrs.selIndex=this.index;_[E.iUrs.selIndex].className="on"}}}if(D==38||D==40){try{this.ulSel.childNodes[this.iUrs.selIndex].className="";if(D==38)this.iUrs.selIndex--;else if(D==40)this.iUrs.selIndex++;_=this.ulSel.getElementsByTagName("li");if(this.iUrs.selIndex>=_.length)this.iUrs.selIndex=0;if(this.iUrs.selIndex<0)this.iUrs.selIndex=_.length-1;_[this.iUrs.selIndex].className="on"}catch(B){}}}}};AutoUrs.ini()
