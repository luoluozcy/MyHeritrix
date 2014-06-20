/*
var topCrown_handle;
function showTopCrown(){
	document.write('<STYLE>#reStyle{position:absolute;top:50px;left:2px;display:block;height:43px;width:18px;overflow:hidden;background:url(http://img3.cache.netease.com/house/2011/7/27/20110727084742f30e0.gif) no-repeat 0 0;cursor:pointer;}#reStyle.hover{background-position:-18px 0;}</STYLE>');
	document.write('<div id="reStyle" title="¹Ø±Õ±³¾°"></div>');
	document.getElementById("reStyle").onclick =closeTopCrown;
	document.getElementById("reStyle").onmouseover = function(){this.className = "hover"};
	document.getElementById("reStyle").onmouseout = function(){this.className = ""};
	
	var bodyObj = document.body;
	bodyObj.style.background = "url(http://img6.cache.netease.com/house/2014/1/7/201401071423437b257.jpg) no-repeat top center";
	function getFirstChild(parentObj){var firstObj=parentObj.firstChild;if(navigator.appName=="Netscape"){while(firstObj.nodeType==3){firstObj=firstObj.nextSibling;}}return firstObj;}
	var adObj = document.createElement("div");
	adObj.style.cssText = "margin:0 auto;text-align:center;"
	adObj.innerHTML =insertMyCrown(960,'70','http://img6.cache.netease.com/house/2014/1/7/2014010714231475b39.jpg','http://cc.house.163.com/special/0264sp/ZGLSFYL.html');
	bodyObj.insertBefore(adObj,getFirstChild(bodyObj));
	
	if(''!='')topCrown_handle = setTimeout("closeTopCrown()",0);
}
function closeTopCrown(){
	document.body.style.background = "";
	document.getElementById("reStyle").style.display = "none";
	if(''!='')	{
		document.getElementById("topcrownplayer").innerHTML=insertMyCrown(0,0,'','http://xf.house.163.com/cc/0QOO.html');
		clearTimeout(topCrown_handle);
	}else{document.getElementById("topcrownplayer").style.display='none';}
};
function insertMyCrown(pic_width,pic_height,swf_url,link_url){
	var s='<DIV style="position:relative;PADDING: 0px; MARGIN: 0px auto; WIDTH: '+ pic_width +'px; CLEAR: both; OVERFLOW: hidden; height:70px;" id=topcrownplayer>';
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
*/