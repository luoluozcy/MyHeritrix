var error = 0;

$(document).ready(function(){
	$("#user").focus();
		
	$("#loginForm").submit(function(){
		return processSubmit();
	});
	
	$("#user").focus(function(){
		if(error == 1)
			$(".prompt").hide();
	});
	
	$("#password").focus(function(){
		if(error == 2)
			$(".prompt").hide();
	});
});

function processSubmit(){

    var url = "https://reg.163.com/logins.jsp";
   
    var ati = $("#user").val().indexOf( "@"); 
    if( ati != -1 )
            $("#user").val($("#user").val().substring(0,ati));

    var username = $("#user").val();
    var password = $("#password").val(); 
    var prompt = $(".prompt");
   
    if( username =="") {
    		prompt.html("请输入您的VIP帐号！");
    		prompt.show();
    		error = 1;
            return false;
    }

    if( password =="") {
    		prompt.html("请输入您的密码！");
    		prompt.show();
    		error = 2;
            return false;
    }

    var para = "style%3D" + $("#style").val() + "%26language%3D" + 
    	$("#language").val() + "%26backurl%3D" + $("#backurl").val() + "%26enterVip%3D" + $("#enterVip").val() +
    	"%26username%3D" + username;
	url += "?product=mailvip126&type=1&url=http://reg.vip.126.com/enterMail.m?" + para + "&url2=http://reg.vip.126.com/logon.m?" + para;
	$("#username").val(username+"@vip.126.com");
	
    $("#loginForm").attr("action", url);
    return true;
}


//输入框样式控制
function fEvent(sType,oInput){
	switch (sType){
		case "focus" :
			oInput.isfocus = true;
			oInput.style.backgroundColor='#FDFBCA';
			break;
		case "blur" :
			oInput.isfocus = false;
			oInput.style.backgroundColor='#FFF'
			break;
	}
 
}

var obj = function(id){return document.getElementById(id);}

//ie6图片缓存开启
function getImageCache(){ 
  if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.indexOf("MSIE 6")!=-1){
    try{
			document.execCommand("BackgroundImageCache", false, true);
      }
    catch(e){}
  }
}
if(window.attachEvent) {
	window.attachEvent("onload", getImageCache);
}

//帮助浮层显示与隐藏
function globalFcShow(id,e){
    obj(id).style.display="block";
	stopBubble(e);
}
function globalFcHide(id,e){
    obj(id).style.display="none";
	stopBubble(e);
}

//点击其它地方隐浮层
document.onclick = function () {	
  obj('global_helpFc').style.display='none';
}

//中止冒泡
function stopBubble(evt){
	var e=window.event||evt;
	if(e && e.stopPropagation){	
        // firefox
        e.stopPropagation(); 
    } else {
        // ie 
        window.event.cancelBubble = true;    
    }
}

//登录页底部更多显示与隐藏
function showMorPay(o) {
  if(obj("payLoginBtm").className=="bot_fot"){
  	obj("payLoginBtm").className="bot_fot bot_fot1";
	o.innerHTML="推荐方式&gt;&gt;";
   }
   else {
   	 obj("payLoginBtm").className="bot_fot";
	 o.innerHTML="更多方式&gt;&gt;";
   }    
}

