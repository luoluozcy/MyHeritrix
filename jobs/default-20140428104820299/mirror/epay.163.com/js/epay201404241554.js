
/*
可用来动态加载组件，无需引入组件的JS，在要调用这个组件时才自动加载执行

*/

var epay = function(s,o){
	//var s = obj.m, o = obj.p;//m:组件名称，p：调用的组件的参数
	var f =  s.split(".")[0]; //要调用对象的名称
	
	//如果没有这个对象
	if(!epay[f]){ 	
		//如果是第一次调用这个对象
		if(!epay.module[f]){ 		
			//加载这个对象的JS
			var script = document.createElement("script");	
			script.src = "../../js/module/"+ f +".js";
			document.getElementsByTagName("head")[0].appendChild(script);
			
			epay.module[f] = [];//用来存储排队等待加载完成后执行的调用	
			epay.module[f].push({f:s,p:o});
			
			//JS加载完后要执行的调用
			var loadFun = function(){			
				var k = epay.module[f];
				for(var i = 0 ; i < k.length ; i ++ ){					
					eval("epay." + k[i].f)(k[i].p);	
				};
			};
			epay.fileLoad(script,loadFun);
		}
		//不是第一次调用加入排队数组
		else{
			epay.module[f].push({f:s,p:o});				
		}
	}
	//对象已存在，直接调用
	else{		
		eval("epay." + s)(o);
	}
};


epay.module = {};//用来存储对象是否已加载
epay.version = "1.0.1";
epay.author = "sxc";

epay.$ = function(id){return document.getElementById(id)};

//各种组件用到的url
epay.url = {
	//mobileAuthCode : "/WEB-jsp/ajaxWeb/ajaxTest.html"
	mobileAuthCode : "/interfaces/getAuthCodeCommon.htm"
};

//判断文件是否加载完
epay.fileLoad = function(file,fun){
	if (!/*@cc_on!@*/0){ //非IE		
		file.onload = function(){fun()}
	}
	else{ //ie   
		file.onreadystatechange = function(){
			if(file.readyState == "loaded" || file.readyState == "complete"){fun()};
		}
	 }
};

//返回数组中指定字符串的索引
epay.indexof = function(a,b){	
	for(var q = 0;q < a.length;q++){
		if(a[q] == b){return q;}
	}
	return -1;
};

//得到自定义属性
epay.getAttribute = function(box,tagName,key,value){
	var arr = [];
	var e =  box.getElementsByTagName(tagName);
	var len = e.length;
	for(i = 0; i < len; i++) { 
		if(e[i].getAttribute(key)){
			if(e[i].getAttribute(key) == value){
				arr.push(e[i]);	
			}	
		}
	};
	return arr;
};

epay.getStyle = function(elem,name){	
	//如果该属性存在于style[]中
	if (elem.style[name]){return elem.style[name];} 
	//否则，尝试IE的方式      
	else if (elem.currentStyle){return elem.currentStyle[name];}
	//或者W3C的方法
	else if (document.defaultView && document.defaultView.getComputedStyle){
	//格式化mame名称
		name = name.replace(/([A-Z])/g,"-$1");
		name = name.toLowerCase();
		//获取style对象并取得属性的值(如果存在的话)
		var s = document.defaultView.getComputedStyle(elem,"");
		return s && s.getPropertyValue(name);
		//否则，就是在使用其它的浏览器
	} else{return null;}   
};

epay.tips = function(o){	
	o.btn.onmouseover = function(){
		o.tipTextBox.innerHTML = o.tipText;
		o.tipBox.style.display = "";
	};
	o.btn.onmouseout = function(){
		o.tip.style.display = "none";
	};
};

//错误信息回填
epay.fillBackInfo = function(o){
	var len = o.length;
	for(i = 0; i < len; i++){		
		if(o[i].e){						
			o[i].e.innerHTML = o[i].t;				
		};				
	};	
};

//得到视窗可见高度
epay.getInnerHeight = function(){
	var h = window.innerHeight; 
	if(typeof h != "number"){ 
		h = document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;		
	} 
	return h;	
};

//设置遮罩IFRME的宽高
epay.setFrameMask = function(o){
	var p = o.p ? o.p : o.iframe.parentNode;
	o.iframe.style.width = p.clientWidth + "px";
	o.iframe.style.height = p.clientHeight + "px";
};


epay.trimKeyup = function(o,s){
	if(s == "number"){o.value = o.value.replace(/[^0-9]/g,'');}
}; 

epay.isIE = function(){
	if(navigator.userAgent.indexOf("MSIE") != -1){return true;}
	return false;
}; 

//事件相关
epay.ev = {
          //添加事件监听
          addEvent:function(obj,evt,fun){
              if(obj.addEventListener){//for dom
                    obj.addEventListener(evt,fun,false)
              }
              else if(obj.attachEvent){//for ie
			         obj.attachEvent("on"+evt,fun)
                    //obj.attachEvent("on"+evt,function(){fun.call(obj)});//解决IE attachEvent this指向window的问题
			  }
              else{obj["on"+evt] = fun}//for other
          },
		  
          //删除事件监听
          removeEvent:function(obj,evt,fun){
              if(obj.removeEventListener){//for dom
                    obj.removeEventListener(evt,fun,false)
              }
              else if(obj.detachEvent){//for ie
                    obj.detachEvent("on"+evt,fun)
              }
              else{obj["on"+evt] = null;
			  } //for other
           },
	
          //捕获事件		
           getEvent:function(){
                    if(window.event){return window.event}
                    else{return epay.ev.getEvent.caller.arguments[0];}	
           },
		   
		   formatEvent:function(evt){
                    evt.eTarget = evt.target ? evt.target:evt.srcElement;//事件目标对象
                    evt.eX = evt.pagex ? evt.pagex:evt.clientX + document.body.scrollLeft;//页面鼠标X坐标
                    evt.eY = evt.pagey ? evt.pagex:evt.clientY + document.body.scrollTop;//页面鼠标Y坐标
                    evt.eStopDefault = function(){this.preventDefault ? this.preventDefault():this.returnValue = false;}//取消默认动作
                    evt.eStopBubble = function(){this.stopPropagation ? this.stopPropagation():this.cancelBubble = true;}//取消冒泡
           },
		   stopBubble:function(evt){
				var evn = epay.ev.getEvent(evt);
				epay.ev.formatEvent(evn);
				evn.eStopBubble();	
				return evn;   
		   }
};
//cookie相关
epay.cookie = {
    //设置cookie
    setCookie:function(sName,sValue,oExpires,sPath,sDomain,bSecure)	{
	    var sCookie=sName + "=" + encodeURIComponent(sValue);
	    if(oExpires){sCookie += "; expires=" + oExpires.toUTCString();}
	    if(sPath){sCookie += "; path="+sPath;}
	    if(sDomain){sCookie += "; domain="+sDomain;}	
	    if(bSecure){sCookie += "; scure";}
	    document.cookie=sCookie;
    },
	
    //读取cookie
    getCookie:function(sName){
	    var sRE="(?:; )?" + sName + "=([^;]*);?";
	    var oRE=new RegExp(sRE);
	    if(oRE.test(document.cookie)){
		    return decodeURIComponent(RegExp["$1"]);
		}
		else{return null;}	
    },
	
    //删除cookie
    delCookie:function(sName,sPath,sDomain){
	    setCookie(sName,"",new Date(0),sPath,sDomain);	
    }
};

/*图片验证码*/
epay.refreshImage = function(viewType) {
	if (epay.$("authImg")) {
		epay.$("authImg").src = '/authCode?viewType='+viewType+'&tag='+ Math.random();		
	}
	if (epay.$("imgAuthCode")) {
		epay.$("imgAuthCode").value = "";	
		epay.$("imgAuthCode").pv = "";
	};
	if (epay.$("checkAuthCodeIcon")) {
		epay.$("checkAuthCodeIcon").className = "checkAuthCodeIcon";	
	};
} ;

epay.checkAuthCodeUrl = "/common/checkAuthCode.htm?authCodeKey=authCodeForCharge&authCode=";

epay.checkAuthCode = function(o){
	var icon = epay.$("checkAuthCodeIcon");
	var v = o.value;	
	if(v.length < 5){epay.$("checkAuthCodeIcon").className = "checkAuthCodeIcon";	return}	
	if(o.pv == v ){return}		
	jQuery.ajax({
	   type: "POST",
	  url: epay.checkAuthCodeUrl+v,
	 //  url: "/WEB/ajaxTest.html",
	   success: function(msg){ 
	  		o.pv = v;									
			var e = typeof(msg) == "object" ? msg : eval("("+msg+")");
			var result = e["result"];				
			if(result == "success" ){									
				icon.className = "checkAuthCodeIcon checkAuthCodeIconRight";				
			}
			else{
				icon.className = "checkAuthCodeIcon checkAuthCodeIconErr";	
			}
	   }
	});		
};



epay.amountInput = function(o){
	var max = o.max?o.max:9999999999999, o=o.e;
	o.onkeyup = function(){
		o.value = o.value.replace(/[^0-9.]/g,'');
		var v = o.value;
		var v0 = o.value.charAt(0);
		var v1 = o.value.charAt(1);
		if(v0 == "." || v0 == "0" && v1 && v1 != "." ){o.value = ""}
		if(v.split(".")[1]){
			if(v.split(".")[1].length > 2 ){o.value = v.substr(0,v.length-1)}
		};	
		if(v > max){o.value = ""}
	};
	o.autocomplete = "off";
	o.onpaste = "return false";
};


//常用验证正则
epay.checkReg = {		
	Email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	MDate:/^((?:19|20)\d\d)(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/,
	Phone : /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/,
	Mobile : /^(13|14|15|17|18)\d{9}$/,
	Name:/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
	BankCard : /^[\d ]{13,23}$/,
	Amount : /^(\d+.\d{1,2}|\d+)$/,//金额正则
	TrueName : /^([\u0391-\uFFE5]|[A-Za-z]|[\u00B7])([\u0391-\uFFE5A-Za-z\u00B7\\*\\?\\)\\(]){0,39}$/,	
	Code : /^([\u0391-\uFFE5]|[A-Za-z]|\d|[\u00B7]){2,40}$/,
	Number : /^\d+$/,
	Zip : /^[0-9]\d{5}$/,
	QQ : /^[1-9]\d{4,8}$/,	
	English : /^[A-Za-z]+$/,
	Money : /^(?![0\.]+$)(?:(?:[1-9]\d*?(?:\.\d{1,2})?)|(?:0\.\d{1,2}))$/,
	Chinese :  /^[\u0391-\uFFE5]+$/,
	isIDno:function(num){
		num = typeof(num) == "object" ? num.value : num;
	    var aCity = "11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65,71,81,82,91";
	    var iSum = 0;
	    var info = "";
	    var idCardLength = num.length;
	    if(!/^\d{17}(\d|x)$/i.test(num)&&!/^\d{15}$/i.test(num)&&!/^\d{8}$/i.test(num)) {     
	        return false;
	    }

	    //在后面的运算中x相当于数字10,所以转换成a
	    var objvalue = num.replace(/x$/i,"a");

	    var curCity = objvalue.substr(0,2);

	    if(!(aCity.indexOf(curCity) >= 0) ) {      
	        return false;
	    }

	    if (idCardLength==18) {
	        sBirthday=objvalue.substr(6,4)+"-"+Number(objvalue.substr(10,2))+"-"+Number(objvalue.substr(12,2));
	        var d = new Date(sBirthday.replace(/-/g,"/"))
	        if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())) {       
	            return false;
	        }
	        for(var i = 17;i>=0;i --)
	            iSum += (Math.pow(2,i) % 11) * parseInt(objvalue.charAt(17 - i),11);

	        if(iSum%11!=1) {        
	            return false;
	        }

	    }
	    else if (idCardLength==15) {
	        sBirthday = "19" + objvalue.substr(6,2) + "-" + Number(objvalue.substr(8,2)) + "-" + Number(objvalue.substr(10,2));
	        var d = new Date(sBirthday.replace(/-/g,"/"))
	        var dd = d.getFullYear().toString() + "-" + (d.getMonth()+1) + "-" + d.getDate();

	        if(sBirthday != dd) {       
	            return false;
	        }
	    }
	    else if (idCardLength==8) {
	    }
	    return true;
	}
};

function isIDno(obj) {
	return epay.checkReg.isIDno(obj.value);
};

//输入框内提示
epay.defaultValue = function(o){
	var e = o.e;
	var cls = o.cls;
	var defaultValue = e.getAttribute("defaultText");		
	if(e.value == "" || e.value == defaultValue ){
		setTimeout(function(){
			e.value = defaultValue;
			e.className = e.className + " " +o.cls;
			},500
		);
	};
	
	epay.ev.addEvent(e,"focus",function(){	
		if(e.value == defaultValue){
			e.value = "";
			e.className = e.className.replace(" "+o.cls,"");			
		}
	});
	
	epay.ev.addEvent(e,"blur",function(){	
		if(e.value == ""){
			e.value = defaultValue;
			e.className = e.className + " " +o.cls;		
		}
	});
};


//js浮点数精确计算函数(加，减，乘，除)//浮点数加法运算  
 function FloatAdd(arg1,arg2){  
   var r1,r2,m;  
   try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
   try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
   m=Math.pow(10,Math.max(r1,r2));
   return (arg1*m+arg2*m)/m;
  }  ;
  
 //浮点数减法运算  
 function FloatSub(arg1,arg2){  
	 var r1,r2,m,n;  
	 try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
	 try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
	 m=Math.pow(10,Math.max(r1,r2));  
	 //动态控制精度长度  
	 n=(r1>=r2)?r1:r2;  
	 return ((arg1*m-arg2*m)/m).toFixed(n);  
 } ; 
   
 //浮点数乘法运算  
 function FloatMul(arg1,arg2) {   
	  var m=0,s1=arg1.toString(),s2=arg2.toString();   
	  try{m+=s1.split(".")[1].length}catch(e){}   
	  try{m+=s2.split(".")[1].length}catch(e){}   
	  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)   
  }  ; 
  
  
//浮点数除法运算  
function FloatDiv(arg1,arg2){   
	var t1=0,t2=0,r1,r2;   
	try{t1=arg1.toString().split(".")[1].length}catch(e){}   
	try{t2=arg2.toString().split(".")[1].length}catch(e){}   
	with(Math){   
		r1=Number(arg1.toString().replace(".","")) ;  
		r2=Number(arg2.toString().replace(".",""));   
		return (r1/r2)*pow(10,t2-t1);   
	}   
} ;  

//给url添加时间戳
epay.addVersion = function(url){
	if(url.indexOf("?") != -1){
		url += 	"&random=" +Math.random();
	}
	else{
		url += 	"?random=" +Math.random();	
	}
	return url;		
};
