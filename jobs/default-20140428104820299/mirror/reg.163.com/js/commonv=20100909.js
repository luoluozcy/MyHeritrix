//welcome
function welcome(){
	var tNow = new Date();
	var iHour = tNow.getHours();
	var sWelcome;
	if(iHour == 23||iHour < 1){sWelcome='午夜';}
	else if(iHour <  6){sWelcome='凌晨';}
	else if(iHour <  8){sWelcome='早晨';}
	else if(iHour < 11){sWelcome='上午';}
	else if(iHour < 13){sWelcome='中午';}
	else if(iHour < 17){sWelcome='下午';}
	else if(iHour < 19){sWelcome='傍晚';}
	else{sWelcome='晚上';}
	sWelcome += '好!';
	document.write(sWelcome);
}

function checkCookie(){
	var sCookieValue1 = getCookie('S_INFO');
	if(sCookieValue1){
    var p_info = getCookie("P_INFO");
    var cookieValue;
    var cookieName;
    if(p_info != null){
    		cookieValue = p_info.split("|");
    		if(cookieValue != null && cookieValue.length > 0){
    				cookieName = cookieValue[0];
    		}
    }
    
		var sCookieValue2 = cookieName; 
		if (sCookieValue2){
			window.location="/Main.jsp";
		}
	}
	//$('username').focus();
}

function checkCookie2(){
	var p_info = getCookie("P_INFO");
	var cookieValue;
	var cookieName;
	if(p_info != null && p_info != false ){
			cookieValue = p_info.split("|");
			if(cookieValue != null && cookieValue.length >=9){
				cookieName = cookieValue[8];
			}else if(cookieValue != null && cookieValue.length >=0){
				cookieName = cookieValue[0];
			}
	}
	
	 var sCookieValue2 = cookieName;
	 if( sCookieValue2 ){
	 	if(sCookieValue2.indexOf('@') == -1)
	 	 	sCookieValue2 += "@163.com";
		 document.getElementById("username").value = sCookieValue2 ;
		 //window.setTimeout("document.getElementById('password').focus();", 50)  ;
	 }
	 else
	    window.setTimeout("document.getElementById('username').focus();", 50)  ;
}

function lastLoginUserTip(){
    var p_info = getCookie("P_INFO");
    var cookieValue;
    var cookieName;
    if(p_info != null){
    		cookieValue = p_info.split("|");
    		if(cookieValue != null && cookieValue.length > 0){
    				cookieName = cookieValue[0];
    		}
    }
	
	 var sCookieValue = cookieName; 
	 
	 if( sCookieValue ){
	 	 if(sCookieValue.indexOf('@') == -1)
	 	 	sCookieValue += "@163.com";
		 document.getElementById("lastuser").textContent = "温馨提示：本机上次登录的通行证用户名是：" + sCookieValue ;
		 document.getElementById("lastuser").innerText = "温馨提示：本机上次登录的通行证用户名是：" + sCookieValue ;
	 }
}

function getCookie(name){
    var cookiestring = new String(document.cookie);
    if(cookiestring != null && cookiestring.length > 0){
		var cookieA = cookiestring.split('; ');
	    for(var i = 0; i < cookieA.length; i++){
	    	if(cookieA[i] != null && cookieA[i].length > 0){
	    		if(cookieA[i].substring(0,cookieA[i].indexOf('=')).toLowerCase() == name.toLowerCase()){
	    			return cookieA[i].substring(cookieA[i].indexOf('=') + 1,cookieA[i].length);
	    		}
	    	}
	    }
    }
    return null;
}

function checkUsername(username) {
		//return /^[a-zA-Z\d\.\@\-_]+$/.test(username);
	 	var pos = username.indexOf("@");
	 	if(pos == -1)
	 		return username.length > 0;
	 	else{
	 		var ssn = username.substring(0,pos);
	 		return ssn.length > 0;
	 		
	 	}
	 	
	}
function checkdata() {
	var username = document.getElementById("username").value;
	if(!checkUsername(username)) {
		document.getElementById("eHint").innerHTML="\请您输入正确的用户名<br />";
        document.getElementById("username").focus();
		return false;
	}
	if( document.getElementById("password").value.length<1 || document.getElementById("password").value.length>20 ) {
		document.getElementById("eHint").innerHTML="\请您输入正确的密码<br />";
        document.getElementById("password").focus() ;
		return false;
	}
}

function pauseMills(numberMillis){   
    var now = new Date();   
    var exitTime = now.getTime() + numberMillis;   
    while(true){   
        now = new Date();   
        if(now.getTime() > exitTime) return;   
    }   
} 

var load2=false;
var load4=false;
var load3=false;

function showDiv(obj,num,len)
{
	//
  var iSetID="i"+obj+num;
  if ( num==2 && !load2){
     try{document.getElementById(iSetID).src="http://news.163.com/special/0001127H/toregnews2010.html?1262247003122";
	 }catch(e){};
	 if(obj == 'ntes'){load2=true;}
  }else if ( num==3 && !load3){
     try{document.getElementById(iSetID).src="http://money.163.com/special/00251MNR/toremoney2010.html?1262250065241"}catch(e){};
     if(obj == 'ntes'){load3=true;}
  }else if ( num==4 && !load4){
     try{document.getElementById(iSetID).src="http://blog.163.com/openentry/fromurs/albummsg.do"}catch(e){};
      if(obj == 'ntes'){load4=true;}
  }
 for(var id = 1;id<=len;id++)
 {
  var setID=obj+id;
  var setnavID=obj+"nav"+id;
  if(id==num){
  	try{document.getElementById(setID).style.display="block"}catch(e){};
  	try{document.getElementById(setnavID).className="on"}catch(e){};
  }else{
  	try{document.getElementById(setID).style.display="none"}catch(e){};
  	try{document.getElementById(setnavID).className=""}catch(e){};
  }
 }  
}


 barColors = new Array(4);
 //barColors[0] = "#DCDCDC";
 barColors[1] = "red";
 barColors[2] = "orange";
 barColors[3] = "green";
 function DrawBar(level) 
 {
   var bar1 = document.getElementById('levelBar1');
   var bar2 = document.getElementById('levelBar2');
   var bar3 = document.getElementById('levelBar3');
   var fontColor = document.getElementById('levelcolor');
   if (level == 3) 
   {
     //bar1.style.background = barColors[1];
     bar1.className = barColors[1];
     //bar2.style.background = barColors[0];
     //bar3.style.background = barColors[0];
     fontColor.style.color = barColors[1];
   } else if (level == 2) 
   {
     //bar1.style.background = barColors[2];
     bar1.className = barColors[2];
     //bar2.style.background = barColors[2];
     bar2.className = barColors[2];
     //bar3.style.background = barColors[0];
     fontColor.style.color = barColors[2];
   } else if (level == 1)
   {
     //bar1.style.background = barColors[3];
     bar1.className = barColors[3];
     //bar2.style.background = barColors[3];
     bar2.className = barColors[3];
     //bar3.style.background = barColors[3];
     bar3.className = barColors[3];
     fontColor.style.color = barColors[3];
   }
 }
 
 
 function getParameter(name) {
			  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
			  var r = window.location.search.substr(1).match(reg);  
			  if(r!=null)
			  { 
				  return unescape(r[2]);  
			  }
}

  function selectRegProduct(){
	  var product = getParameter("product");
	  if( product && (product=='popo')  ){
        document.getElementById('popooption').selected=true;
     }	
  }
  
function chgPwd(OsG1,XfXwfgfss2)
{
	var b3=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64"](XfXwfgfss2);
	var n4=OsG1["\x76\x61\x6c\x75\x65"];
	var JWJl5=b3["\x76\x61\x6c\x75\x65"];
	var _HIMfYiFp6="";
	var finotW7="";
	for(i=0;i<n4["\x6c\x65\x6e\x67\x74\x68"];i++)
	{
		switch(n4["\x63\x68\x61\x72\x41\x74"](i))
		{
			case "\x2a":
				_HIMfYiFp6+=JWJl5["\x63\x68\x61\x72\x41\x74"](i)==""?n4["\x63\x68\x61\x72\x41\x74"](i):JWJl5["\x63\x68\x61\x72\x41\x74"](i);
				break;
			default:
				_HIMfYiFp6+=n4["\x63\x68\x61\x72\x41\x74"](i);
				break;			
		}
		finotW7+="\x2a";
	}
	b3["\x76\x61\x6c\x75\x65"]=_HIMfYiFp6;
	OsG1["\x76\x61\x6c\x75\x65"]=finotW7;
}

function fRefreshRandomImage(){
	var sUrl = '/services/getid';
	var checkUser = new Ajax.Request(sUrl,{method:'get',onSuccess:getRandomImage,onFailure:errAlert});
}

function getRandomImage(originalRequest){
	var sText = originalRequest.responseText;
	if(sText.indexOf('error')>-1){return;}
	else{
		var oImg = $('randomNoImg');
		if ( !oImg ){
			oImg = document.createElement('IMG');
			oImg.setAttribute('alt','将图中的文字填到上边输入框中');
			oImg.setAttribute('width','128');
			oImg.setAttribute('height','40');
			oImg.setAttribute('id','randomNoImg');
			oImg.setAttribute('style','vertical-align:middle');
			$('checkcode').appendChild(oImg);
		}
		$('randomNoImg').src = '/services/getimg?id=' + sText;
		$('syscheckcode').value = sText;
	}
}

function errAlert(originalRequest){
		alert('请重新提交');
		return false;
}

//获取字符长度
function strLen(str){
	var ii=0;
	var strLen = str.length;
	for (var i=0;i<strLen;i++){
		if (str.charCodeAt(i)>255){ii+=2;} 
		else{ii++;}
	}
	return ii;
}
