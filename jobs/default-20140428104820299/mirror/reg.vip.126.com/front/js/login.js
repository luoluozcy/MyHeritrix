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
    		prompt.html("����������VIP�ʺţ�");
    		prompt.show();
    		error = 1;
            return false;
    }

    if( password =="") {
    		prompt.html("�������������룡");
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


//�������ʽ����
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

//ie6ͼƬ���濪��
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

//����������ʾ������
function globalFcShow(id,e){
    obj(id).style.display="block";
	stopBubble(e);
}
function globalFcHide(id,e){
    obj(id).style.display="none";
	stopBubble(e);
}

//��������ط�������
document.onclick = function () {	
  obj('global_helpFc').style.display='none';
}

//��ֹð��
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

//��¼ҳ�ײ�������ʾ������
function showMorPay(o) {
  if(obj("payLoginBtm").className=="bot_fot"){
  	obj("payLoginBtm").className="bot_fot bot_fot1";
	o.innerHTML="�Ƽ���ʽ&gt;&gt;";
   }
   else {
   	 obj("payLoginBtm").className="bot_fot";
	 o.innerHTML="���෽ʽ&gt;&gt;";
   }    
}

