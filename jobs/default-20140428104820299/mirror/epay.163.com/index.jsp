























<!DOCTYPE HTML>
<html>
<head>
<link rel="shortcut icon" href="/favicon.ico"/>
<meta name="keywords" content="网易宝，网上支付，银行卡快捷支付，手机支付,网上付款转账、转账到银行卡、水电煤缴费、游戏点卡充值，话费充值，彩票购买、藏宝阁" />
<meta name="description" content="网易宝是网易旗下的第三方支付平台,致力于为广大用户提供安全快速的网上支付、银行卡快捷支付、手机支付等服务,提供网上付款转账、转账到银行卡、水电煤缴费、游戏点卡充值、话费充值、彩票购买、藏宝阁等服务。" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
<title>网易宝  - 乐生活，易支付</title>
<script>
if(self!=top){top.window.location.href=self.window.location.href}
</script>
<link rel="stylesheet" href="../css/base.css?201404241553"/>
<link rel="stylesheet" type="text/css" href="/css/safeCtrl2013.css?201404241553"/>
<link rel="stylesheet" href="../css/login.css?201404241553"/>
<script src="../js/jquery-1.4.2.js?201404241553"></script>
<script src="../js/easyCore.js?201404241553"></script>
<script src="../js/suggest.js?201404241553"></script>
<script type="text/javascript" src="/js/epay.js?201404241553"></script>
<script type="text/javascript" src="/js/module/safeCtrl2013.js?201404241553"></script>
<script type="text/javascript" src="/js/module/popup.js?201404241553"></script>
</head>
<body>

<span class="safePopClose" style="display:none"></span>
<div class="header4login">
	<div class="loginTop"><span class="fr"><a class="topLink" href="http://p.epay.163.com/index.htm" target="_blank">活动专区</a><a target="_blank" href="http://help.epay.163.com/index.html" class="topLink">帮助中心</a><span class="hasMore">网易电商<b class="arrow"></b><ul class="dsOther"><li><a target="_blank" href="http://caipiao.163.com/#from=epay.header">网易彩票</a></li><li><a target="_blank" href="http://mall.163.com/#from=epay.header">网易商城</a></li>
	<li><a target="_blank" href="http://baoxian.163.com/#from=epayheader">网易保险</a></li><li><a target="_blank" href="http://piao.163.com/#from=epay.header">电影票</a></li><li><a target="_blank" href="http://baojian.163.com/#from=epay.header">网易保健品</a></li><li><a target="_blank" href="https://8.163.com">网易理财</a></li></ul></span></span><a href="/" class="logo"></a></div>
</div>
<div class="loginWrap">
		<div class="loginBg" data-url="/images/v3/login/bg4.jpg"></div>
		<div class="loginBg" data-url="/images/v3/login/bg1.jpg" style="display:none"></div>
		<div class="loginBg" data-url="/images/v3/login/bg3.jpg" style="display:none"></div>
		<div id="loginBgCtr"><a href="javascript:;" class="active">●</a><a href="javascript:;">●</a><a href="javascript:;">●</a></div>
    	
	        <div class="loginBox">
				<a href="https://epay.163.com/app/index.jsp?from=epay.recommend" target="_blank" class="bg4Link" title="立即体验" id="bg4Link"></a>
	            <form name="cardform" id="cardform" method="post" action="https://epay.163.com/servlet/controller?operation=checkAuthCode&requestSource=index" class="user_login">
				<input type="hidden" name="url" id="url" value="https://epay.163.com/servlet/controller?operation=login&source=&method=&fw="/>
				<input type="hidden" name="username" id="username" value=""/>
				<input type="hidden" name="source" id="source" value=""/>
				<input type="hidden" name="user" id="user" />
		  		<input type="hidden" name="pass" id="pass" />
				<input type="hidden" name="fw" id="fw" value=""/>
		  		<input type="hidden" name="url2" value="https://epay.163.com/loginError.htm?requestSource=index" />
		  		<input type="hidden" name="domains" value="163.com" />
		  		<input type="hidden" name="ursId" id="pass" value="" />
	            <div class="loginForm">
	            	<span id="changeOtherLogin" style=""></span>
		         	<div id="hasOtherWay">
		                <ul class="formList" id="loginUl">
		                    <li><div class="loginTit">使用网易通行证登录</div><div id="loginErrBox" class="loginErrBox" style="display:none"></div></li>
		                    <li><div class="inputDiv"><span class="inputTit"  id="accountTitle">账户：</span><span class="suggest_box" id="useremail_box"><span id="delUserName" class="delUserName"></span><input class="input" id="useremail" name="useremail" autocomplete="off" value="如name@example.com" style="color: rgb(153, 153, 153);" type="text"/></span></div></li>		                   
					     	<li id="passLi"><div class="inputDiv"><span class="inputTit" id="passTitle">密码：</span><span id="safeCtrlBox"></span></div></li>
		                     
		                    <li><input id="verficode" name="authCode" type="text" class="input w60" value="" placeholder="验证码" maxlength="4" /><span class="AuthCode" title="点击刷新验证码"><img src="/authCode?viewType=3"  class="verficodeImg" id="authImg" getidUrl="/authCode?viewType=3" /></span>&nbsp;<a href="javascript:;" id="authImgLink">换一张</a></li>
		                    <li><input type="submit" value="登&nbsp;&nbsp;&nbsp;&nbsp;录" class="redLoginBtn" onClick="return checkForm()" /></li>
		                    <li class="pt20"><a href="https://epay.163.com/account/registStep1.htm">注册网易账号</a>&nbsp;&nbsp;<span class="c_666">|</span>&nbsp;&nbsp;<a href="http://reg.163.com/RecoverPassword.shtml">忘记密码？</a></li>
		                </ul>
		                <input type="hidden" id="password" value="" />
		                <ul class="formList otherWay" id="codeLogin" style="display:none">
		                    <li class="fw">二维码登录</li>
		                    <li class="codeLoginTit">用<a href="/app/index.jsp" target="_blank" class="fb">网易宝手机客户端</a>扫描二维码即可安全登录</li>
		                    <li><span class="phoneBg"></span><span class="codeBg"><img src="/images/v3/loading.gif" id="codeImg" /></span></li>
		                   <!--  <li class="codeLoginTips"><a href="http://help.epay.163.com/index.html" target="_blank">二维码使用帮助</a></li> -->
		                </ul>
	            	</div>
	            </div>
	            </form>
	        </div>
       	    
</div>
<div class="appLinks">
	<div class="wrap clearfix">
    	<div class="appBox">
    		<a href="/personaltransfer/appCenterForHttps.htm?t=payto"><b class="appIcon appFK"></b><span>我要付款</span></a>
        	<a href="/personaltransfer/appCenterForHttps.htm?t=receive"><b class="appIcon appSK"></b><span>我要收款</span></a>        	
        	<a href="/transfer/to_bank.htm"><b class="appIcon appYHK"></b><span>转账到银行卡</span></a>
        	<a target="_blank" href="http://ecard.163.com/script/index#from=epay.recommend"><b class="appIcon appDK"></b><span>游戏点卡</span></a>
        	<a target="_blank" href="http://shop.163.com/mobile/fill.html#from=epay.recommend"><b class="appIcon appCHF"></b><span>充话费</span></a>
			<a target="_blank" href="https://8.163.com/#from=epay.recommend"><b class="appIcon appLC"></b><span>网易理财</span><span class="appLCicon"></span></a>
        	<a target="_blank" href="http://caipiao.163.com/#from=epay.recommend"><b class="appIcon appCP"></b><span>网易彩票</span></a>
            <a target="_blank" href="http://mall.163.com/?from=epay.recommend"><b class="appIcon appMall"></b><span>网易商城</span></a>
            <a target="_blank" href="http://piao.163.com/#from=epay.recommend"><b class="appIcon appDYP"></b><span>电影票</span></a>
        	<a target="_blank" href="http://baoxian.163.com/#from=epay.recommend"><b class="appIcon appBX"></b><span>网易保险</span></a>
            <a target="_blank" href="http://cbg.163.com/#from=epay.recommend"><b class="appIcon appCBG"></b><span>藏宝阁</span></a>
        </div>
    </div>
</div>
<div class="bgfff">
<div class="wrap clearfix">
	<dl class="loginDl">
    	<dt><span class="loginDlIcon">快捷</span>快捷支付 无须网银极速支付</dt>
    	
        	<dd><a target="_blank" href="https://epay.163.com/quickpay/quickPayExtend.jsp">网易宝快捷支付，全新体验</a></dd>
        
        	<dd><a target="_blank" href="https://epay.163.com/quickpay/bankList.htm">极速支付，全新体验，立即开通</a></dd>
        
    </dl>
    <dl class="loginDl">
    	<dt><span class="loginDlIcon">特权</span>网易宝交易特权</dt>
    	
        	<dd><a target="_blank" href="http://nie.163.com/web/pay/news/2013/2/1/444_360069.html">随时随地都能买，手机在线购卡</a></dd>
        
        	<dd><a target="_blank" href="http://analytics.163.com/ntes_clck?urlid=751&sign=6a568ee03298074a1c73b7790e7f2f35&url=https%3A%2F%2Fepay.163.com%2Fpromotion%2FyfqView.htm">一分钱体验中心</a></dd>
        
    </dl>
    <dl class="loginDl">
    	<dt><span class="loginDlIcon">公告</span>最新公告</dt>
    	
      		
        		<dd><a target="_blank" href="/notice/notice.jsp?i=0">网易宝的意见反馈邮箱变更公告</a></dd>
        	
        
      		
        		<dd><a target="_blank" href="/notice/notice.jsp?i=1">移动号码发送1069016367无法接收</a></dd>
        	
        
      		
        		<dd><a target="_blank" href="/notice/notice.jsp?i=2">网易宝服务协议变更公告</a></dd>
        	
        
    </dl>
</div>
</div>

<div id="docFoot">
<span>网易宝有限公司版权所有 ©1997-2014</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>经营许可证编号：浙B2-20100458</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>网易宝客服电话：020-89166198</span><span><a href="http://help.epay.163.com/showpdetails.html?pid=20120725DT00110023">关于网易宝</a><a href="http://help.epay.163.com/index.html">联系我们</a><a href="http://sitemap.163.com/">更多网易产品</a></span><br />
<a href="https://epay.163.com/cms/1363672634307_epay-cert.jpg" class="CcieIcon zfxkIcon" title="支付业务许可证" target="_blank"></a><a href="https://sealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=epay.163.com&lang=zh_cn" class="CcieIcon jmfwIcon" title="VerSign加密服务" target="_blank"></a><a href="http://122.224.75.236/wzba/login.do?method=hdurl&doamin=http://www.neteasepay.com/&id=330100000126045&SHID=1223.0AFF_NAME=com.rouger. gs.main.UserInfoAff&AFF_ACTION=qyhzdetail&PAGE_URL=ShowDetail" class="CcieIcon sfIcon" title="电子商务协会认证诚信网" target="_blank"></a><a href="https://ss.cnnic.cn/seallogo.dll?sn=e12051044010020841301459&size=4" class="CcieIcon plIcon" title="网络工商" target="_blank"></a>
</div>
<script>Core && Core.quickInit && Core.quickInit();</script>
<script src="//analytics.163.com/ntes.js" type="text/javascript"></script>
<script type="text/javascript">
_ntes_nacc = "epay";
neteaseTracker();
neteaseClickStat();
</script>
</body>
</html>
<script>

//支付密码
if(epay.$("safeCtrlBox")){
	var safeCtrlPam = {
		box:epay.$("safeCtrlBox"),
		hiddenInputId:"password",
		hiddenInputName:"password",
		type:"login"
	};
	epay.safeCtrl(safeCtrlPam); 
	if(safeCtrlPam.payPassTipBox){
		safeCtrlPam.payPassTipBox.style.display = "none";
	}
};

var email_str=["@163.com","@126.com","@yeah.net","@vip.163.com","@vip.126.com","@popo.163.com","@188.com","@qq.com","@yahoo.com","@yahoo.com.cn","@sina.com"];
new suggest(email_str,"useremail_box","useremail","使用网易通行证登录");
if(window.localStorage.getItem("loginUserName") && window.localStorage.getItem("loginUserName").length>0){
	$("#useremail").val(window.localStorage.getItem("loginUserName"));
}
function checkForm(){
	var isSubmit=true;
	if($("#useremail").val() == "" || $("#useremail").val() == "如name@example.com"){
		isSubmit=false;
		$("#loginErrBox").html("请填写帐户名").show();	
	}
	else if($("#OTPCtl2").val() == ""){
		isSubmit=false;
		$("#loginErrBox").html("请填写密码").show();
	}
	else if($("#verficode").val() == ""){
		isSubmit=false;
		$("#loginErrBox").html("请填写验证码").show();
	}
	else if($("#verficode").val().length < 4){
		isSubmit=false;
		$("#loginErrBox").html("验证码应为4位").show();	
	}
	else if($("#checkIcon").css("display") != "none" && $("#checkIcon").hasClass("checkIconErr") ){
		isSubmit=false;
		$("#loginErrBox").html("验证码应为4位").show();			
	}
	if(isSubmit){
		window.localStorage.setItem("loginUserName",$("#useremail").val());
		$("#password").val(hex_md5($("#OTPCtl2").val()));//md5加密密码
		$("#username").val($("#useremail").val());
	}
	return isSubmit;
}
var pCode='',vt=0;
$("#authImg,#authImgLink").click(function(){		
		$("#authImg").attr("src",$("#authImg").attr("getidUrl") + '&tag='+ (vt++));	
		$("#verficode").val("");
		$("#verficode").attr("class","input w60");
		pCode = "";
	});
$("#verficode").keyup(function(){
	var thisVal=$(this).val();
	if(thisVal == pCode){return}	
	if(thisVal.length == 4){
		$.ajax({
			type: "POST",
			url: "/login/checkAuthCode.htm?authCode="+$("#verficode").val(),	
			dataType:"text",			
			success: function(msg){
				if(msg == "1"){
					$("#verficode").addClass("authSuc");	
				}else{
					$("#verficode").addClass("authErr");	
					}
				pCode=thisVal;
			}				
		})
	}else{
		$("#verficode").attr("class","input w60");
	}
});

$(function(){
	var nowIndex=0,ctrA=$("#loginBgCtr a"),ctrDiv=$(".loginBg"),timeChange,nowSum=0,i=0;
timeChange=setInterval(function(){
	if(nowSum!=2){
		nowSum++;
	}else{
		index=(nowIndex==(ctrA.length-1))?0:(nowIndex+1);
		changeBgAction(index);
		nowSum=0;
	}
	},2000);
	function changeBgAction(index){
		if(index==0){epay.$("bg4Link").style.display = "block";}
		else{
			epay.$("bg4Link").style.display = "none";
		};
		ctrA.eq(index).addClass("active");
		ctrDiv.eq(index).fadeIn(500);
		ctrA.eq(nowIndex).removeClass("active");
		ctrDiv.eq(nowIndex).fadeOut(500);
		nowIndex=index;
	};
	ctrA.click(function(){
		nowSum=0;
		index=ctrA.index($(this));
		if(nowIndex!=index){	
			changeBgAction(index);	
		}
	});
	$("#verficode").focus(function(){
		$("#loginErrBox").html("").hide();
	})
	for(var i;i<ctrDiv.length;i++){
		var thisCtrDiv=ctrDiv.eq(i),bgUrl=thisCtrDiv.attr("data-url"),disNone=(i==0)?"":"display:none";
		thisCtrDiv.attr("style","background:url("+bgUrl+") center bottom;"+disNone)		
	}
	
	var isCodeLogin=false,uuid="";
	window.domain="163.com";
	$("#changeOtherLogin").toggle(function(){
		isCodeLogin=true;
		$("#hasOtherWay").css("overflow","hidden");
		$("#codeLogin").show();
		$("#useremail").blur();
		$(this).animate({height:"47px"});
		$("#loginUl").animate({marginTop:"-310px"});
		$("#passLi").css("visibility","hidden");
	},function(){
		isCodeLogin=false;
		$(this).animate({height:"92px"});
		$("#loginUl").animate({marginTop:"0px"},function(){$("#passLi").css("visibility","inherit");
		$("#hasOtherWay").css("overflow","");
		$("#codeLogin").hide();});
	})
	var timeIsLogin = setInterval(function(){
		if(isCodeLogin){
			$.ajax({
				type: "GET",
				url: "/app/queryQuickMarkLogin.htm?quickMarkId="+uuid,	
				dataType:"json",			
				success: function(msg){
					if(msg.result == "200"){
						window.location.href=msg.url;
					}
					if(msg.result == "404"){
						alert("验证码已过期，请重新扫描");
						getCodeImg();
					}
					if(msg.result == "500"){
						alert("二维码异常，请通过账号登录");
						clearInterval(timeIsLogin);
					}
				}
			})
		}
	},2000);

	var timeOut = setInterval(function(){window.location.href=window.location.href},300000);
	function getCodeImg(){
		$.ajax({
			type: "GET",
			url: "/app/generateLoginQuickMark.htm",	
			dataType:"text",			
			success: function(msg){
				if(msg != ""){
					uuid=msg;
					//$("#codeImg").attr("src","/app/generateLoginQuickMark.htm?quickMarkId="+msg);	
					$("#codeImg").attr("src","https://reg.163.com/services/getqrcode?uuid="+msg);
				}
			}
		})
	}
	getCodeImg();
	
});

	//添加点击标题定位到输入框功能
function $id(id){return document.getElementById(id)};
$("#accountTitle").click(function(){
	$id("useremail").focus();
});
$("#passTitle").click(function(){
	$id("OTPCtl2").focus();
});
</script>
