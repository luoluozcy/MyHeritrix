/*var lastScrollY=0;
function showads(){
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
diffY = document.documentElement.scrollTop;
else if (document.body)
diffY = document.body.scrollTop
else
{
/*Netscape stuff*/}
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.getElementById("left_ad").style.top=parseInt(document.getElementById("left_ad").style.top)+percent+"px";
document.getElementById("right_ad").style.top=parseInt(document.getElementById("right_ad").style.top)+percent+"px";
lastScrollY=lastScrollY+percent;
}
function closed(){
	document.getElementById("left_ad").style.display='none';
	document.getElementById("right_ad").style.display='none';
	}
function showad(names){if(screen.width<=800){closed();}}
   zcode="<div id='left_ad' style='left:10px;position: absolute;z-index:1;top:70px;width:130px;height:350px;'><div style='width:130px;height:350px;background:#ccc;border:#999 solid 1px;'><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='130' height='350'><param name='movie' value='http://www.darenshuo.cn/youhui/upload/zhongxin1.swf' /><param name='quality' value='high' /><embed src='http://www.darenshuo.cn/youhui/upload/zhongxin1.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='130' height='350'></embed></object></div><div align='left' style='background:#fff;font-size:0px;'><img src='http://img3.cache.netease.com/house/2011/6/22/20110622150700930bb.gif' title='¹Ø±Õ' onclick=closed() style='cursor:pointer' width='130'></div></div>";
   ycode="<div id='right_ad' style='right:10px;position: absolute;z-index:1;top:70px;width:130px;height:350px;'><div style='width:130px;height:350px;background:#ccc;border:#999 solid 1px;'><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='130' height='350'><param name='movie' value='http://www.darenshuo.cn/youhui/upload/zhongxin2.swf' /><param name='quality' value='high' /><embed src='http://www.darenshuo.cn/youhui/upload/zhongxin2.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='130' height='350'></embed></object></div><div align='center' style='background:#fff;font-size:0px;'><img src='http://img3.cache.netease.com/house/2011/6/22/20110622150700930bb.gif' title='¹Ø±Õ' onclick=closed() style='cursor:pointer' width='130'></div></div>";
document.write(zcode);
document.write(ycode);
showad('left_ad');
showad('right_ad');
window.setInterval("showads()",1);*/