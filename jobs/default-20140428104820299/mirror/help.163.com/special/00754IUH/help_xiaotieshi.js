//С��ʿ������ʾ
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
//�����������
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
//��ʿ����
var rollText_k=31; //�˵�����
var rollText_i=1; //�˵�Ĭ��ֵ
//setFocus1(0);
rollText_tt=setInterval("rollText(1)",8000);
function rollText(a){
	clearInterval(rollText_tt);
	//rollText_tt=setInterval("rollText(1)",8000);//Ĭ���Զ��ֻ�
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
//΢������ 
function share(from, platform) {
	var shareUrl = "http://help.163.com/?wb";
//	var shareContent = encodeURIComponent("����VIP��Ȩ����ģ��ṩ�߶˽�����ɳ�������ϳ齱���ڶྫ�ʻ���Ƽ�����ң�����һ����ʺ�������ַ�ǣ�");
	var shareContent = encodeURIComponent("@��������ͷ��ٲ� " + content + "���������װ�������:");
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
/*��������΢��*/
function shareToWeibo(shareTitle, shareUrl) {
	var appkey = "";
	var features = 'scrollbars=no,width=500,height=450,left=400,top=200,status=no,resizable=yes';
	var weiboUrl = 'http://service.weibo.com/share/share.php?url='+shareUrl+'&appkey=' + appkey + '&title='+shareTitle+'&ralateUid=&searchPic=false';
	window.open(weiboUrl, 'weibo', features);
}
/*��������΢��*/
function shareToNetease(shareTitle, shareUrl) {
	var param = [],ustr = [];
	param[0] = 'link=' + shareUrl;  //linkΪ��վ����
	param[1] = 'source=' + shareTitle;  //sourceΪ��վ����
	param[2] = 'info=' + shareTitle + shareUrl;  //infoΪת������������(��ѡ��Ĭ��Ϊҳ��title)
	param[3] = 'images=http://img2.cache.netease.com/t/img10/open/logo.jpg';  //imagesΪ��������ͼƬ��ַ�����ͼƬ��ַ��","��������Ϊ�ջ��Զ�ץȡת��ҳ��ͼƬ
	param[4] = 'togImg=true';//Ĭ����ʾת��ͼƬ(��ѡ��ɾ��trueΪ����ʾ)
	var url = 'http://t.163.com/article/user/checkLogin.do?';
	url += param.join("&");
	ustr[0] = 'height=330,width=550,top=' + (screen.height - 280) / 2 ;
	ustr[1] = 'left=' + (screen.width - 550) / 2 ;
	ustr[2] = 'toolbar=no, menubar=no, scrollbars=no,';
	ustr[2] += 'resizable=yes,location=no, status=no';
	var s = ustr.join(',');
	window.open(url,'newwindow',s);
}
 /*������Ѷ΢��*/
function shareTotqq(shareTitle, shareUrl){
	var features = 'scrollbars=no,width=700,height=550,left=400,top=200,status=no,resizable=yes';
	var url = 'http://v.t.qq.com/share/share.php?url='+shareUrl+'&title='+shareTitle;
	window.open(url, '����QQ΢��', features);
}
/*����������*/
function shareToKaixin(shareTitle, shareUrl){
	var content = encodeURIComponent(shareTitle);
	var features = 'scrollbars=no,width=750,height=600,left=400,top=200,status=no,resizable=yes';
	var url = 'http://www.kaixin001.com/repaste/share.php?rtitle=' + shareTitle + '&rurl=' + shareUrl + '&rcontent=' + content;
	window.open(url, 'shareKaixin', features);
}
/*����������*/
function shareToRenren(shareTitle, shareUrl){
	var features = 'scrollbars=no,width=700,height=550,left=400,top=200,status=no,resizable=yes';
	var url = 'http://share.renren.com/share/buttonshare?link='+shareUrl+'&title='+shareTitle;
	window.open(url, 'shareRenren', features);
}
/*����������*/
function shareToDouBan(shareTitle, shareUrl){
	var url = "http://www.douban.com/recommend/?url=" + shareUrl + "&title=" + shareTitle;
	var features = 'toolbar=0,resizable=1,scrollbars=yes,status=1,left=400,top=200,width=600,height=450';
	window.open(url, 'addthis.org.cn', features);
}