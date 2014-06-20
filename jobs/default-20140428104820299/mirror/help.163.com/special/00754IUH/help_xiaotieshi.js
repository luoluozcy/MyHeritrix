//小贴士滚动显示
function startmarquee(lh,speed,delay,index){ 
var t; 
var p=false; 
var o=document.getElementById("marqueebox"+index); 
o.innerHTML+=o.innerHTML; 
o.onmouseover=function(){p=true} 
o.onmouseout=function(){p=false} 
o.scrollTop =0; 
function start(){ 
t=setInterval(scrolling,speed); 
if(!p){ o.scrollTop +=1;} 
} 
function scrolling(){ 
if(o.scrollTop%lh!=0){ 
o.scrollTop +=1; 
if(o.scrollTop>=o.scrollHeight/2) o.scrollTop = 0; 
}else{ 
clearInterval(t); 
setTimeout(start,delay); 
} 
} 
setTimeout(start,delay); 
} 
startmarquee(37,30,3000,0); 
// startmarquee(37,40,0,1); 
//点击弹出浮层
var obj=function(id) {return document.getElementById(id)}
function show_cover(id, rollTextMenuId){
		var sht=document.documentElement.scrollHeight;
		var cht=document.documentElement.clientHeight;
		var hht=(sht>=cht)?sht:cht;
		var swth=document.documentElement.scrollWidth;
		var cwth=document.documentElement.clientWidth;
		var wth=(swth>=cwth)?swth:cwth;
		obj("screen_cover").style.width = wth+'px';
		obj("screen_cover").style.height = hht+'px';
		obj("screen_cover").style.display = "block";
		obj(id).style.display='block';
		show_rollTextMenu(rollTextMenuId);		
		content =obj(rollTextMenuId).getElementsByTagName("p")[0].innerHTML;
}
function show_rollTextMenu(rollTextMenuId) {
	obj(rollTextMenuId).style.display='block';
	for (var i = 1; i <= rollText_k; i++) {
		var id = "rollTextMenu"+i;
		if(rollTextMenuId != id) {
			obj(id).style.display='none';
		}
	}
}
function hide_cover(id)
{
	obj("screen_cover").style.display = "none";
	obj(id).style.display='none';
}
try{
	document.execCommand("BackgroundImageCache", false, true);
}
catch(e){}
//贴士内容
var rollText_k=31; //菜单总数
var rollText_i=1; //菜单默认值
//setFocus1(0);
rollText_tt=setInterval("rollText(1)",8000);
function rollText(a){
	clearInterval(rollText_tt);
	//rollText_tt=setInterval("rollText(1)",8000);//默认自动轮换
	rollText_i+=a;
	if (rollText_i>rollText_k){rollText_i=1;}
	if (rollText_i==0){rollText_i=rollText_k;}
	//alert(i);
	for (var j=1; j<=rollText_k; j++){
		document.getElementById("rollTextMenu"+j).style.display="none";
	}
	document.getElementById("rollTextMenu"+rollText_i).style.display="block";
	//document.getElementById("pageShow").innerHTML = rollText_i+"/"+rollText_k;
        content =obj("rollTextMenu"+rollText_i).getElementsByTagName("p")[0].innerHTML;
}
//var content = "";
//微博分享 
function share(from, platform) {
	var shareUrl = "http://help.163.com/?wb";
//	var shareContent = encodeURIComponent("网易VIP特权活动中心，提供高端讲座、沙龙、线上抽奖等众多精彩活动，推荐给大家，总有一个活动适合您。地址是：");
	var shareContent = encodeURIComponent("@网易邮箱客服官博 " + content + "分享自网易帮助中心:");
	if(platform == 'sina') {
		shareToWeibo(shareContent, shareUrl);
	}else if(platform == 'netease') {
		shareToNetease(shareContent, shareUrl);
	}else if(platform == 'qq') {
		shareTotqq(shareContent, shareUrl);
	}else if(platform == 'kaixin') {
		shareToKaixin(shareContent, shareUrl);
	}else if(platform == 'renren') {
		shareToRenren(shareContent, shareUrl);
	}else if(platform == 'douban') {
		shareToDouBan(shareContent, shareUrl);
	}
}
/*分享到新浪微博*/
function shareToWeibo(shareTitle, shareUrl) {
	var appkey = "";
	var features = 'scrollbars=no,width=500,height=450,left=400,top=200,status=no,resizable=yes';
	var weiboUrl = 'http://service.weibo.com/share/share.php?url='+shareUrl+'&appkey=' + appkey + '&title='+shareTitle+'&ralateUid=&searchPic=false';
	window.open(weiboUrl, 'weibo', features);
}
/*分享到网易微博*/
function shareToNetease(shareTitle, shareUrl) {
	var param = [],ustr = [];
	param[0] = 'link=' + shareUrl;  //link为网站域名
	param[1] = 'source=' + shareTitle;  //source为网站名称
	param[2] = 'info=' + shareTitle + shareUrl;  //info为转发的文字内容(可选，默认为页面title)
	param[3] = 'images=http://img2.cache.netease.com/t/img10/open/logo.jpg';  //images为传过来的图片地址，多个图片地址用","隔开；若为空会自动抓取转发页面图片
	param[4] = 'togImg=true';//默认显示转发图片(可选，删除true为不显示)
	var url = 'http://t.163.com/article/user/checkLogin.do?';
	url += param.join("&");
	ustr[0] = 'height=330,width=550,top=' + (screen.height - 280) / 2 ;
	ustr[1] = 'left=' + (screen.width - 550) / 2 ;
	ustr[2] = 'toolbar=no, menubar=no, scrollbars=no,';
	ustr[2] += 'resizable=yes,location=no, status=no';
	var s = ustr.join(',');
	window.open(url,'newwindow',s);
}
 /*分享到腾讯微博*/
function shareTotqq(shareTitle, shareUrl){
	var features = 'scrollbars=no,width=700,height=550,left=400,top=200,status=no,resizable=yes';
	var url = 'http://v.t.qq.com/share/share.php?url='+shareUrl+'&title='+shareTitle;
	window.open(url, '分享到QQ微博', features);
}
/*分享到开心网*/
function shareToKaixin(shareTitle, shareUrl){
	var content = encodeURIComponent(shareTitle);
	var features = 'scrollbars=no,width=750,height=600,left=400,top=200,status=no,resizable=yes';
	var url = 'http://www.kaixin001.com/repaste/share.php?rtitle=' + shareTitle + '&rurl=' + shareUrl + '&rcontent=' + content;
	window.open(url, 'shareKaixin', features);
}
/*分享到人人网*/
function shareToRenren(shareTitle, shareUrl){
	var features = 'scrollbars=no,width=700,height=550,left=400,top=200,status=no,resizable=yes';
	var url = 'http://share.renren.com/share/buttonshare?link='+shareUrl+'&title='+shareTitle;
	window.open(url, 'shareRenren', features);
}
/*分享到豆瓣网*/
function shareToDouBan(shareTitle, shareUrl){
	var url = "http://www.douban.com/recommend/?url=" + shareUrl + "&title=" + shareTitle;
	var features = 'toolbar=0,resizable=1,scrollbars=yes,status=1,left=400,top=200,width=600,height=450';
	window.open(url, 'addthis.org.cn', features);
}