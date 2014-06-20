
//安全控件
epay.safeCtrl = function(o){
	if(!o.box){return;}
	var box = o.box;//密码输入框包裹元素
	var isIE = (navigator.userAgent.indexOf("MSIE") != -1);		
	o.inputId = o.id ? o.id : "OTPCtl2";//密码输入框id
	o.hiddenInputId = o.hiddenInputId ? o.hiddenInputId : "payPassword"; //隐藏密码框（真实要提交的密码框）的id
	o.hiddenInputName = o.hiddenInputName ? o.hiddenInputName : "payPassword";//隐藏密码框（真实要提交的密码框）的name
	o.inputStyle =  o.inputStyle ? o.inputStyle : ""; //输入框的样式
	o.tipStyle =  o.tipStyle ? o.tipStyle : ""; //提示的样式
	var errValue = box.getAttribute("errText");
	var errText = errValue != "" ? errValue : "&nbsp;"; //初始的错误信息
	
	o.link1 = "http://help.epay.163.com/showpdetails.html?pid=20120725DT00110027";//支付密码了解详情
	o.link2 = "https://epay.163.com/servlet/controller?operation=retrievePassView";//找回支付密码
	o.link3 = "http://help.epay.163.com/showdetails.html?dirid=2012081418DT14991324";//安全控件了解详情
	
	//?号提示相关	
	o.ctrlTip =' <span class="payPassTipBox" key="payPassTipBox"><span class="payPassIcon"></span><div style="display: none;" class="payPassTip" key="payPassTip"><div class="payPassTipCon"> <strong>什么是支付密码？</strong><br>支付密码是用户使用网易宝账户余额支付、提现时需要输入的密码。<a target="_blank" href="'+o.link1+'">了解详情</a> <a target="_blank" href="'+o.link2+'">找回支付密码</a></div></div></span>';
	
	//隐藏域、错误提示等	
	o.otherStr = '<input type="hidden" key="replaceInput" ><input type="hidden" name="'+o.hiddenInputName+'" id="'+o.hiddenInputId+'" > <span class="formErr" id="'+o.inputId+'Err">'+errText+'</span>';	
	
	//安装安全控件提示
	o.installStr = '<span class="installDiv" key="installBtn" style="'+o.tipStyle+'"><a href="#" onclick="epay.safeCtrl.installNedit();return false;">请点此安装安全控件</a></span>';
	
	//非ie下的密码输入框
	var ordinaryStr = '<input type="password" id="'+o.inputId+'" class="formInput" style="'+o.inputStyle+'" />' + o.ctrlTip + o.otherStr;
	
	//安全控件密码输入框
	o.ctrlStr = "";

	if(isIE){
		o.ctrlStr = '<span key="safaCtrlBox"><object id="'+o.inputId+'" style="'+o.inputStyle+'"  class="formInput ieSafeCtrl" classid="clsid:32D72994-45B9-42B5-8980-FB561D1BE2D0" viewastext></object></span><span key="updateBox"></span>'+ o.ctrlTip + o.otherStr;	
	};	
		
	//x64无法安装提示
	var strX64 = '<span class="safeClass1" key="safeClass1" style="'+o.tipStyle+'"><span class="safeClass1Tip change64"><span class="safeClass1TipArr"></span>暂不支持64位的浏览器，请更换32位浏览器后重新访问网易宝。<a href="#" target="_blank">如何更换？</a></span><span style="color:#999">无法安装安全控件</span></span></span>' + o.ctrlTip + o.otherStr;;
	
	//升级安全控件提示
	var tipText1 = "安全控件升级了，可更全面保护您<br />输入信息的安全 <a href='javascript:void(0)' key='safeClose1'>下次再说</a>";
	o.updateStr = '<span class="safeClass1 safe0therClass" key="safeClass1" style="'+o.tipStyle+'"><span class="safeClose" key="safeClose"></span><span class="safeClass1Tip" key="safeClass1Tip"><span class="safeClass1TipArr"></span>'+tipText1+'</span><a href="#" onclick="epay.safeCtrl.installNedit();return false;">请点此升级安全控件</a></span>';

	//ie下的处理
	if(isIE){		
		if(epay.safeCtrl.getCPU() == "win64"){ //64位下			
			epay.safeCtrl.state = "win64";	
			box.innerHTML = strX64;
		}
		else{//32位下
			box.innerHTML = o.ctrlStr;					
		}
		var safeCtrl = epay.$(o.inputId);			
		if(safeCtrl){//如果已安装过		
		  try{			
			  safeCtrl.OnlyNum = false;
			  safeCtrl.TestEdit();
			  safeCtrl.MaxLngth=20;
			  var version = epay.$(o.inputId).nEditVersion;//获取版本号				 
			  if(!version){
				  epay.safeCtrl.update(o); //没有升级过的
			  }
		  } 
		  catch (exception){//没有安装过的时候		 		 
			epay.safeCtrl.switchCtrl(o);				
		  }
	  }
	}
	//非ie下的处理
	else{		
		box.innerHTML = ordinaryStr;			
	};

	//没有密码元素时，为了校验表单，要增加这个元素
	var replaceInput =  epay.getAttribute(box,"*","key","replaceInput")[0];
	if(!epay.$(o.inputId)){replaceInput.id = o.inputId;}
	
	epay.safeCtrl.tips(o);
	
};

epay.safeCtrl.state = "";//安全控件的状态

//控件切换提示
epay.safeCtrl.switchCtrl = function(o){
	var box = o.box;
	
	//各种状态下的提示文字
	var piconTextStr = '<span key="piconBox" class="piconBox"><span class="payPassInputIcon" key="picon"></span><span class="piconText" key="piconText"><span class="piconTextArr"></span><span key="piconTextCon"></span></span></span>';
	box.innerHTML = '<span class="payPassInputBox">'+o.installStr+piconTextStr+'<input type="password" id="'+o.inputId+'" class="formInput" disabled="disabled" style="'+o.inputStyle+'" /></span>'+ o.otherStr; 		
	
	if(o.type == "login"){		
		var s1 = '<span class="paypassText2">点此启用安全控件登录</span>';
		var s2 = s1;
		var s3 = '<span class="paypassText2">点此可不使用安全控件登录</span><span class="paypassText3">如安全控件安装失败，点击<a target="_blank" href="'+o.link3+'">了解详情</a></span>';
	}
	else{
		var s = '<div class="paypassLine"></div>支付密码是用户使用网易宝账户<br />余额支付、提现时需要输入的密码。<br /><a target="_blank" href="'+o.link1+'">了解详情</a> <a target="_blank" href="'+o.link2+'">找回支付密码</a>';
		var s1 = '点此启用安全控件，支付更安全'+s;
		var s2 = '<span class="paypassText1">如安全控件安装失败，点击<a target="_blank" href="'+o.link3+'">了解详情</a></span>';
		var s3 = '<strong>点此可不使用安全控件</strong><br />'+s2 + s;
		s2 +=s;
	};
	var piconBox =  epay.getAttribute(box,"*","key","piconBox")[0];
	var piconText =  epay.getAttribute(box,"*","key","piconText")[0];
	var piconTextCon =  epay.getAttribute(box,"*","key","piconTextCon")[0];	
	
	var picon =  epay.getAttribute(box,"*","key","picon")[0];
	epay.safeCtrl.picon = picon;
	var isfocus = false;
	if(!o.paypass){//不是强制使用安全控件的
		piconTextCon.innerHTML = s3;
		var installBtn =  epay.getAttribute(box,"*","key","installBtn")[0];							
		picon.onclick = function(){					
			if(this.className == "payPassInputIcon"){ //不使用安全控件
				this.className = "payPassInputIcon pi1";
				installBtn.style.display = "none";
				epay.$(o.inputId).disabled = "";
				piconTextCon.innerHTML = s1;
				if(isfocus){
					epay.$(o.inputId).focus();
				};
				isfocus = true;
			}
			else if(this.className == "payPassInputIcon pi1"){ //使用安全控件
				this.className = "payPassInputIcon";
				installBtn.style.display = "block";				
				epay.$(o.inputId).value = "";
				epay.$(o.inputId).disabled = "disabled";
				piconTextCon.innerHTML = s3;
			}
		};
		picon.onclick();
	}
	else{
		piconTextCon.innerHTML = s2;
		picon.className = "payPassInputIcon pi2";					
	};			
	piconBox.onmouseover = function(){
		piconText.style.zIndex = 5000;
		piconText.style.display = "block";		
	};
	piconBox.onmouseout = function(){
		piconText.style.zIndex = 0;
		piconText.style.display = "none";
	};	
};

//控件升级提示
epay.safeCtrl.update = function(o){
	var box = o.box;
	var updateBox =  epay.getAttribute(box,"*","key","updateBox")[0];
	updateBox.innerHTML = o.updateStr;  
	var safaCtrlBox =  epay.getAttribute(box,"*","key","safaCtrlBox")[0];
	var safeClass1 =  epay.getAttribute(box,"*","key","safeClass1")[0];
	var safeClass1Tip =  epay.getAttribute(box,"*","key","safeClass1Tip")[0];
	var safeClose =  epay.getAttribute(box,"*","key","safeClose")[0];
	var safeClose1 =  epay.getAttribute(box,"*","key","safeClose1")[0];
	
	safaCtrlBox.style.display = "none";
	safeClass1.onmouseover = function(){
		o.box.style.zIndex = 1000;
		safeClass1Tip.style.zIndex = 1000;
		safeClass1Tip.style.display = "block";
	};
	safeClass1.onmouseout = function(){
		o.box.style.zIndex = 1;
		safeClass1Tip.style.zIndex = 1;
		safeClass1Tip.style.display = "none";
	};
	function closeUpdata(){
		o.box.style.zIndex = 1;
		safeClass1.style.display = "none";
		safaCtrlBox.style.display = "inline";
	};
	//关闭控件升级
	safeClose.onclick = closeUpdata;
	safeClose1.onclick = closeUpdata;
};

//?号提示内容的隐现效果
epay.safeCtrl.tips = function(o){
	var payPassTipBox = o.payPassTipBox =  epay.getAttribute(o.box,"*","key","payPassTipBox")[0];
	if(!payPassTipBox){return}
	var payPassTip =  epay.getAttribute(o.box,"*","key","payPassTip")[0];
	
	function Tips(q1,q2){		
		q1.tips = q2;	
		q1.onmouseover = function(){		
			this.tips.style.display = "block";		
		};
		q1.onmouseout = function(){
			this.tips.style.display = "none";		
		};	
	};	
	Tips(payPassTipBox,payPassTip);		
};

//安装安全控件按钮
epay.safeCtrl.installNedit = function(){	
	epay.safeCtrl.installPop();
	location.href="http://epay.163.com/download/nEdit.exe";	
};

//密码安装安全控件前的提示
epay.safeCtrl.installPop = function(){		
	var o  = {		
		title:"安全控件提示",
		style:"width:550px;height:250px;",
		content:'<div class="safePopCon">安装控件，可对您输入的信息(密码、金额等)进行加密保护，提高账户安全。<div class="safePopText2"><strong class="c_FD8300"><span class="safePoint">■</span>&nbsp;安装成功后&nbsp;<a class="reDown" href="javascript:location.reload()">点此刷新</a>&nbsp;，如刷新无效请重启浏览器。 </strong><br><span class="safePoint">■</span>&nbsp;如果浏览器还没有开始下载控件文件，请 <a href="http://epay.163.com/download/nEdit.exe">点此重新下载</a></div><div class="dashedLine"></div><div class="safePopQue"><a href="http://epay.gm.163.com/load_kind.html?2011">安装遇到问题？</a></div></div>'
	};	
	setTimeout(function(){epay.popup(o)},100);	
};

//获取计算机CPU位数
epay.safeCtrl.getCPU = function(){
   return window.navigator.platform.toLowerCase();
};

