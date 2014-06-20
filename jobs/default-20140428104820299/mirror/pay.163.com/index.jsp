<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />

<title>网易充值中心</title>
<link href="http://pimg1.126.net/pcard/new/style/global.css?201404280646" rel="stylesheet" type="text/css" />
<link href="http://pimg1.126.net/pcard/new/style/index.css?201404280646" rel="stylesheet" type="text/css" />
<link href="http://pimg1.126.net/pcard/new/style/slide_pic.css?201404280646" rel="stylesheet" type="text/css"/>
<script language="javascript" type="text/javascript" src="http://pimg1.126.net/pcard/new/js/jquery1.4.2.js?201404280646"></script>
<script language="javascript" type="text/javascript" src="http://pimg1.126.net/pcard/new/js/login.js?201404280646"></script>
<script language="javascript" type="text/javascript" src="http://pimg1.126.net/pcard/new/js/name1.js?201404280646"></script>
<script language="javascript" type="text/javascript" src="http://pimg1.126.net/pcard/new/js/check_sn.js?201404280646"></script>
<script language="javascript" type="text/javascript" src="/js/base.js?201404280646"></script>
<script language="javascript" type="text/javascript" src="/js/suggest.js?201404280646"></script>
</head>
<body>

	
	
	
	
	

	







<div id="header">
	<div class="logo"><a href="http://pay.163.com/index.jsp" title="网易充值中心首页">网易充值中心</a></div>
    <div class="banner"><iframe src="http://nie.163.com/web/pay/abc_top_.html" width="715" height="50" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div>
    <div class="blank9 clearFloat"></div>
    <div class="navbar">
        <div class="barbg1">
			<div class="barbg2">
            	<ul class="menu">
                	<li class="on"><h3><a href="/index.jsp">首页</a></h3></li>
                	<li ><h3><a href="/servlet/controller?operation=queryaccount">查询服务</a></h3></li>
                	<li ><h3><a href="http://ecard.163.com">购卡充值</a></h3></li>
                	<li ><h3><a href="http://jifen.163.com">优惠专区</a></h3></li>
                	<li ><h3><a href="/servlet/controller?operation=helpcenter">帮助中心</a></h3></li>
                </ul>
                <p class="link"><a href="/servlet/controller?operation=addquestion">反馈意见</a> | <a href="/servlet/controller?operation=helpcenter">常见问题</a></p>
                <p class="userInfo"></p>
            </div>
        </div>
    </div>
</div>

<div class="clearFloat" id="wap1">
	<!--左边开始-->
	<div class="main">
	<iframe src="http://nie.163.com/web/pay/pay_left.html" width="100%" height="465" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="true" ></iframe>
	</div>
	<!--左边结束-->
	
	<!--右边开始-->
	<div id="sidebar" class="sidebar">
    	<div class="cornertop">
        	<b class="l">l</b>
        	<b class="r">r</b>
        	<div class="c">c</div>
        </div>
	<div class="block clearFloat">
        <!--快速购卡开始-->	
            <div class="t t2">
                <h2>快速购卡<span><img src="http://pimg1.126.net/pcard/new/images/reduce.png?v=20140102" alt="9.60折" style="vertical-align:middle;" /></span></h2>
				<button class="on"></button>
            </div>
	    <div class="easepay toggle" style="padding:9px;">
		<form id="fast_buy" method="post" action="https://reg.163.com/logins.jsp" onsubmit="return checkLoginForm('fb_login');">
			<input id='fb_url' name="url" value="http://pay.163.com/servlet/controller?operation=login&type=URS" type="hidden" >
			<input name="product" value="pointcard" type="hidden">
			<input name="type" value="1" type="hidden">
			<table width="100%" cellspacing="3" cellpadding="6" id='fb_buy'>
				<tr>
					<td class="textRight" valign="top">类型：</td>
					<td class="textLeft"><label><input type="radio" id='chargetype' name='chargetype' value='1' checked/> 通用点</label>　<a href='http://pay.163.com/servlet/controller?username=ursjj&operation=login&type=URS&source=helpcenter#1' target='_blank'>什么是通用点？</a><br />
						<label><input type="radio" name='chargetype' value='2'/> 寄售点</label>　<a href='http://pay.163.com/servlet/controller?username=ursjj&operation=login&type=URS&source=helpcenter#2' target='_blank' >什么是寄售点？</a></td>
				</tr>
				<tr>
					<td class="textRight">面值：</td>
					<td class="textLeft">&nbsp;
						<select style="width:100px;" id='chargevalue' name='chargevalue'>
							<option value=50 selected>50 点</option>
							<option value=100>100 点</option>
							<option value=150>150 点</option>
							<option value=300>300 点</option>
							<option value=500>500 点</option>
							<option value=1000>1000 点</option>
						</select></td>
				</tr>
				<tr>
					<td colspan="2" class="textRight"><p class="error" id="cardError"></p></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td class="textLeft">&nbsp;&nbsp;<input type="button" value="购卡" class="btn1 fB f14px" id='fb_buy_button'/></td>
				</tr>
			</table>
			<!-- 登录框开始  -->				
            <div style="display:none; padding:12px 32px 0 0;" id='fb_login'>
            	<div class="loginName">用户名<span class="suggest_box" id="fuseremail_box" style="z-index:120;_height:29px">
				<input id="fuseremail" name='username' autocomplete="off" onpaste="return false" style="color:#999;" value="如name@example.com" class="txt1" size="24"></span></div>
				<p><label>密　码<input type="password" class="txt1" size="24" id="password" name="password" /></label></p>
				<p class="error" name="login_err"><strong name='login_err_msg'></strong></p>
                <!--
                <p><input type="submit" class="btn1 fB f14px" value="登 录"> <a id="hide_fb_login" href="#">取消</a></p>
                -->
                 <p style='text-align:center'><input type="submit" class="btn1 fB f14px" value="登 录" style='margin:8px 18px 0 33px;'>
                  <a id="hide_fb_login" href="#">取消</a></p>
            </div>
		<!-- 登录框结束  -->
		</form>
	</div>
	<!--快速购卡结束-->	
        <!--快充开始-->
            <div class="t t2">
                <h2>快速充值<span class="f12px cGray"></span></h2>
				<button></button>
            </div>
            <div class="easepay toggle" style="display:none;">
	    <form id="addPoint" method="post" action="https://ecard.163.com/script/sn_trans/trans">
		<div class="loginName">您的充值帐号<span class="suggest_box" id="useremail_box1" style="z-index:120;_height:29px"><input id="ursName" name="ursName" class="txt1" size="16" autocomplete="off" onpaste="return false" style="color:#999;" value="如name@example.com" ></span>
		</div>
		<div class="loginName">重复充值帐号<span class="suggest_box" id="useremail_box2" style="z-index:110;_height:29px"><input id="ursName2" name="ursName2" class="txt1" size="16" autocomplete="off" onpaste="return false" style="color: rgb(153, 153, 153);" value="如name@example.com"></span>
		</div>
		<p><label>充值卡卡号<input type="text" class="txt1" size="16" maxlength="13" id="cardNo" name="cardNo"></label></p>
            	<p><label>充值卡密码<input type="password" class="txt1" size="16" maxlength="9" id="cardPass" name="cardPass"></label></p>
			<p class="error" style="display:None;" id='errLab'><strong id='errMsg'>两次输入帐号不一样！</strong></p>
                <p><input type="button" value="充值" class="btn1 fB f14px"  id="transSubmit"/></p>
            </form>
            </div>
        <!--快充结束-->
	<!--快捷操作开始-->
            <div class="t">
                <h2>快捷操作</h2>
                <h3 id="loginTag"><a href="#">[我要登录]</a></h3>
            </div>
            <div class="operateItem" style="border-bottom:none;">
            	<ul>
                	<li><a href="http://ecard.163.com">购卡充值</a></li>
                	<li><a href="/servlet/controller?operation=queryaccount">查询余额</a></li>
                    <li><a href="http://ecard.163.com/script/query_brief">购卡充值记录</a></li>
                    <li><a href="/servlet/controller?operation=querypaydetail">充值与消费记录</a></li>
                </ul>
	    </div>
	 <!--快捷操作结束-->
	
        <!--登陆开始-->
            <div style="display: none;" class="loginForm">
		<form id="login" method="post" action="https://reg.163.com/logins.jsp?type=1&product=pointcard" onsubmit="return checkLoginForm('login');">
		    <div class="loginName">用户名：<span class="suggest_box" id="useremail_box" style="z-index:120;_height:29px">
				    <input type="text" class="txt1" size="16" id='useremail' name="username" autocomplete="off" onpaste="return false" style="color:#999;" value="如name@example.com"/></span></div>
            	<p><label>密　码：<input type="password" class="txt1" size="16" id="password" name="password" /></label></p>
                <p class="error" style='display:none;'><strong>用户名或密码错误！</strong></p>
		<p><input type="submit" class="btn1 fB f14px" value="登 录" /> <a id="hideLogin" href="#">取消</a></p>
		
		<input name="url" value="http://pay.163.com/servlet/controller?operation=login&type=URS" type="hidden">
		<input name="product" value="pointcard" type="hidden">
		<input name="type" value="1" type="hidden">
            </form>
            </div>
        <!--登陆结束-->        
        </div>
	
<script type="text/javascript">
//显示/隐藏登录框脚本
$("#loginTag").click(function(){
	$(this).addClass("on");
	$("#sidebar .operateItem").eq(0).hide();
	$("#sidebar .loginForm").eq(0).show();
	//AutoUrs.bind("username",{tabTo:"pass"});
	return false;
});
$("#hideLogin").click(function(){
	$("#loginTag").removeClass("on");
	$("#sidebar .loginForm").eq(0).hide();
	$("#loginError").hide();
	$("#sidebar .operateItem").eq(0).show();
	return false;
});

//以下是快速充值部分
$('#cardNo').keyup(function() { 
    checkSn(this);
    if ($(this).val().length == 13) {
        $('#errLab').hide();
    }
});

$('#cardPass').keyup(function() { 
    checkSnPwd(this);
    if ($(this).val().length == 13) {
        $('#errLab').hide();
    }
});

$('#ursName, #ursName2').change(function() { 
    $('#errLab').hide();
});

$('#transSubmit').click(function(){
    var sn = $('#cardNo').val();
    if(sn.substr(0,2)=='55') {
            $('#cardPass').val('');   
            $('#addPoint').attr('action', 'http://app.ecard.163.com/vipbar_card/app/show_confirm/?');
            $('#addPoint').submit();
            return;
     }
    if ($('#cardNo').val().length != 13) {
        $('#errMsg').text('请输入正确的13位卡号');
        $('#errLab').show();
        return;
    }

    if ($('#cardPass').val().length != 9) {
        $('#errMsg').text('请输入正确的9位密码');
        $('#errLab').show();
        return;
    }

    if ($('#ursName').val() == "" || $('#ursName2').val() == "") {
        $('#errMsg').text('请输入要充值的通行证账号');
        $('#errLab').show();
        return;
    }

    if ($('#ursName').val() != $('#ursName2').val()) {
        $('#errMsg').text('通行证账号不一致');
        $('#errLab').show();
        return;
    }
    $('#addPoint').submit();
});

//以下快速购卡部分
$("#hide_fb_login").click(function(){
	$('#fb_login').hide();
	$('#fb_buy').show();
	$('#chargetype').focus();
});

$("#fb_buy_button").click(function(){
	var chargeType=$("input[name='chargetype']:checked").val();
	var chargeValue=$("#chargevalue").val();
	if(chargeType == undefined) {
		$('#fb_err').show();
		$('#fb_err_msg').html('请选择购卡类型！');
		return false;
		}
	$('#fb_url').val("http://pay.163.com/servlet/controller?operation=login&type=URS&chargetype="+chargeType+"&chargeValue="+chargeValue);
	$('#fb_buy').hide();
	$('#fb_login').show();
	$('#fuseremail').focus();
	});

function isUrs(s){
	var urs_re = /^[a-zA-Z0-9_\-\.]+@([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}$/;
	return String(s).search (urs_re) != -1;
};

//登陆验证部分
function checkLoginForm(form_id){
	function show_msg(msg){
		$('#'+form_id+" p.error").show();
		$('#'+form_id+" strong").html(msg);
	}
	var user_name = $("#"+form_id+" input[name='username']").val();
	var pwd = $("#"+form_id+" input[name='password']").val();
	if(!isUrs(user_name)){ 
		show_msg("请输入正确的账号!");
		return false;
	}
	if(!pwd){
		show_msg("请输入正确的密码!");
		return false;
	}
	return true;
}

//以下是折叠交互脚本
$("#sidebar button").hover(function(){
	if($(this).hasClass("on")){
		$(this).addClass("hover1");
	}else{
		$(this).addClass("hover2");
	}
},function(){
	$(this).removeClass("hover1 hover2");
});

$("#sidebar button").click(function(){
	$(this).removeClass("hover1 hover2").toggleClass("on");
	$(this).parent().next().toggle();
	$("#sidebar button").not(this).removeClass("on");
	$("#sidebar .toggle").not($(this).parent().next()).hide();
	$(".error").hide();


});



</script>

    	<div class="cornerbtm">
        	<b class="l">l</b>
        	<b class="r">r</b>
        	<div class="c">c</div>
        </div>
  </div>
</div>
<div id="footer">
	<p><a href="http://corp.163.com/index_eng.html">About NetEase</a> - <a href="http://corp.163.com/index_gb.html">公司简介</a> - <a href="http://gb.corp.163.com/gb/contactus.html">联系方法</a> - <a href="http://corp.163.com/gb/job/job.html">招聘信息</a> - <a href="http://help.163.com">客户服务</a> - <a href="http://corp.163.com/gb/legal/legal.html">相关法律</a> - <a href="http://power.163.com/adpage/salescenter/index.html">广告服务</a><br>
网易公司版权所有 &copy;1997-2014</p>
<p>
<!--可信网站图片LOGO安装开始-->
<script src="https://ss.cnnic.cn/seallogo.dll?sn=e12051044010020841301459&size=4"></script>
<!--可信网站图片LOGO安装结束-->
</p>
</div>

<script type="text/javascript">
//账户输入建议
var email_str=["@163.com","@qq.com","@sina.com","@126.com","@vip.qq.com"];
new suggest(email_str,"useremail_box","useremail");
new suggest(email_str,"useremail_box1","ursName");
new suggest(email_str,"useremail_box2","ursName2");
new suggest(email_str,"fuseremail_box","fuseremail");
</script>

</body></html>
