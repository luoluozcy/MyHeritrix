// JavaScript Document
var topCrown_handle;
function showTopCrown(){
	document.write('<STYLE>#reStyle{position:absolute;top:6px;left:2px;display:block;height:43px;width:18px;overflow:hidden;background:url(http://img3.cache.netease.com/house/2011/7/27/20110727084742f30e0.gif) no-repeat 0 0;cursor:pointer;}#reStyle.hover{background-position:-18px 0;}</STYLE>');
	document.write('<div id="reStyle" title="关闭背景"></div>');
	document.getElementById("reStyle").onclick =closeTopCrown;
	document.getElementById("reStyle").onmouseover = function(){this.className = "hover"};
	document.getElementById("reStyle").onmouseout = function(){this.className = ""};
	
	var bodyObj = document.body;
	bodyObj.style.background = "url(http://img.bh111.com/2014/03/cq_adv_top_bg.jpg) no-repeat top center";
	function getFirstChild(parentObj){var firstObj=parentObj.firstChild;if(navigator.appName=="Netscape"){while(firstObj.nodeType==3){firstObj=firstObj.nextSibling;}}return firstObj;}
	var adObj = document.createElement("div");
	adObj.style.cssText = "margin:0 auto;text-align:center;";
	adObj.innerHTML =insertMyCrown(960,'80','http://img.bh111.com/flash/cq/aysyj960+80.swf','http://xf.house.163.com/cq/01WA.html');
	bodyObj.insertBefore(adObj,getFirstChild(bodyObj));
	
	if(''!='')topCrown_handle = setTimeout("closeTopCrown()",0);
}
function closeTopCrown(){
	document.body.style.background = "";
	document.getElementById("reStyle").style.display = "none";
	if(''!='')	{
		document.getElementById("topcrownplayer").innerHTML=insertMyCrown(0,0,'','http://cq.house.163.com/special/0202sp/2014huanyutianxia.html');
		clearTimeout(topCrown_handle);
	}else{document.getElementById("topcrownplayer").style.display='none';}
};
function insertMyCrown(pic_width,pic_height,swf_url,link_url){
	var s='<DIV style="position:relative;PADDING: 0px; MARGIN: 0px auto; WIDTH: '+ pic_width +'px; CLEAR: both; OVERFLOW: hidden; height:80px;" id=topcrownplayer>';
if(/\.swf$/.test(swf_url)){
if(link_url!='')s+='<div style="position:absolute; z-index:2; width:'+ pic_width +'px; height:'+ pic_height +'px; top:0px; left:0px; visibility: visible;"><a href="'+link_url+'" target="_blank"><img src="http://img.bh111.com/images/blank.gif" width="'+ pic_width +'" height="'+ pic_height +'" border="0"></a></div>';
	s+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cabversion=6,0,0,0" width="'+ pic_width +'" height="'+ pic_height +'">';
	s+='<param name="movie" value="'+swf_url+'">';
	s+='<param name="wmode" value="transparent">';
	s+='<param name="quality" value="high">';
	s+='<embed src="'+swf_url+'" quality="high" width="'+ pic_width +'" height="'+ pic_height +'" wmode="transparent" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	s+='</object>';
}else{
if(link_url!='')s+='<a href="'+ link_url +'"><img src="'+swf_url+'" width="'+ pic_width +'" height="'+ pic_height +'" border="0"></a>';
}
	s+='</DIV>';
	return s;
}
showTopCrown();
//by 雍刚,2011年11月17日