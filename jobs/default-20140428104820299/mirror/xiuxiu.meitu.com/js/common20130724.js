  document.write('<div style ="display :none " id="div_downcount"></div>');
 	function download_onclick(posx) {
 		document.getElementById("div_downcount").innerHTML = "<img src ='http://softdata.520.com/down.php?type=tj&pos="+posx+"' />";
 	}
 	document.write('<div style ="display :none " id="div_sucaicount"></div>');
 	function sucai_onclick(posx,typevar) {
 		document.getElementById("div_sucaicount").innerHTML = "<img src ='http://cms.meitu.com/sucai.php?type="+typevar+"&pos="+posx+"' />";
 	}
function tracking(e){
 e = e ? e : window.event;
 var s = e.srcElement ? e.srcElement : e.target;
 var a = s.tagName;
 var u = s.href;
 var t = s.innerText ? s.innerText : s.textContent;
 if(a == "A"||a == "IMG"){
  try{
   new Image().src = "http://softdata.520.com/stat_click.php?a="+a+"&u="+escape(u)+"&t="+t;
  }catch(ex){}
 }
 return true;
}

(function(){
var navitems = document.getElementById("navlist").getElementsByTagName("li");
var pathname = location.pathname.toLowerCase();
function setNavCurrent(i){
	navitems[i].getElementsByTagName("a")[0].className = "current";
}
if(pathname.length <= 1){
	setNavCurrent(0);
}else if(pathname.indexOf("/intro/") > -1){
	setNavCurrent(1);
}else if(pathname.indexOf("/download/") > -1){
	setNavCurrent(2);
}else if(pathname.indexOf("/sucai/") > -1){
	setNavCurrent(3);
}else if(pathname.indexOf("/tutorial/") > -1){
	setNavCurrent(4);
}else if(pathname.indexOf("/help/") > -1){
	setNavCurrent(5);
}
 	/**
	 * chrome浏览器下载纯净版本
	 * date : 2014-04-08
	 * author: zp
 	 */
 	var version = '3.9.6';
 	var green = 'http://xiuxiu.dl.meitu.com/XiuXiu_Green.exe';
	var isChrome = navigator.userAgent.indexOf('Chrome');
	if(isChrome != -1) {
		$('a').each(function(index, item) {
			var $item = $(item);
			var href = $item.attr('href');
			if(href && (href.indexOf(version) != -1)) {
				$item.attr('href', green);
			}
		});
	}
})();

