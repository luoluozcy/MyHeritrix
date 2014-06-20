			var adfdRightWidth = 20
			var adfdRightHeight = 270
			var adfdLeftWidth = 20
			var adfdLeftHeight = 270
if(adfdRightSrc != ""){
if(adfdRightFlash == "flash")
{
					document.write("<div id=\"adfdRightFloat\" style=\"position: absolute;width:" + adfdRightWidth + ";\"><embed wmode=opaque src=\"" + adfdRightSrc + "\" quality=\"high\" id=\"dl\" width=\"" + adfdRightWidth + "\" height=\"" + adfdRightHeight + "\" type=\"application/x-shockwave-flash\"></embed></div>");
}
else{
					document.write("<div id=\"adfdRightFloat\" style=\"position: absolute;width:" + adfdRightWidth + ";\"><a href=\"" + adfdRightHref +" \" target=\"_blank\"><img  border=0 src=\"" + adfdRightSrc + "\" quality=\"high\" id=\"dl\" width=\"" + adfdRightWidth + "\" height=\"" + adfdRightHeight + "\" type=\"application/x-shockwave-flash\"></a></embed></div>");
}
			var navUserAgent = navigator.userAgent
			function loadFDr(){
				judgeFDr();
				moveFDr();
			}
			function moveFDr() {
				judgeFDr();
				setTimeout("moveFDr();",80)
			}
			function judgeFDr(){
if(document.documentElement.scrollTop+document.documentElement.clientHeight>752){
document.getElementById("adfdRightFloat").style.top=document.documentElement.scrollTop+document.documentElement.clientHeight-272+'px';
}
else{document.getElementById("adfdRightFloat").style.top = 482 + 'px';}
if((document.body.clientWidth-(document.body.clientWidth-960)/2 -982)>0){
document.getElementById("adfdRightFloat").style.left =document.body.clientWidth-(document.body.clientWidth-960)/2 -982+'px';}
else{document.getElementById("adfdRightFloat").style.left=0;}
			}
			loadFDr();
}

if(adfdLeftSrc != ""){
if(adfdLeftFlash == "flash")
{
					document.write("<div id=\"adfdLeftFloat\" style=\"position: absolute;width:" + adfdLeftWidth + ";\"><embed wmode=opaque src=\"" + adfdLeftSrc + "\" quality=\"high\" id=\"dl\" width=\"" + adfdLeftWidth + "\" height=\"" + adfdLeftHeight + "\" type=\"application/x-shockwave-flash\"></embed></div>");
}
else{
					document.write("<div id=\"adfdLeftFloat\" style=\"position: absolute;width:" + adfdLeftWidth + ";\"><a href=\"" + adfdLeftHref +" \" target=\"_blank\"><img  border=0 src=\"" + adfdLeftSrc + "\" quality=\"high\" id=\"dl\" width=\"" + adfdLeftWidth + "\" height=\"" + adfdLeftHeight + "\" type=\"application/x-shockwave-flash\"></a></embed></div>");
}
			var navUserAgent = navigator.userAgent
			function loadloadFDl(){
				judgeloadFDl();
				moveloadFDl();
			}
			function moveloadFDl() {
				judgeloadFDl();
				setTimeout("moveloadFDl();",80)
			}
			function judgeloadFDl(){
if(document.documentElement.scrollTop+document.documentElement.clientHeight>752){
document.getElementById("adfdLeftFloat").style.top=document.documentElement.scrollTop+document.documentElement.clientHeight-272+'px';
}
else{document.getElementById("adfdLeftFloat").style.top = 482 + 'px';}

document.getElementById("adfdLeftFloat").style.left =document.body.clientWidth-(document.body.clientWidth-960)/2+2+'px';




			}
			loadloadFDl();
}
