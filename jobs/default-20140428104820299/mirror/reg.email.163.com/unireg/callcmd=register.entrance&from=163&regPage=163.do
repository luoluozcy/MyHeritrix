
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>注册网易免费邮箱 - 中国第一大电子邮件服务商</title>



<script type="text/javascript" src="http://mimg.127.net/hd/lib/html5/js/main.js"></script>
<link rel="shortcut icon" href="http://mail.163.com/favicon.ico" />
<link href="http://mimg.127.net/xm/reg_all/140120/css/style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
.content .reg-infoBox{width:480px}
.mobConfirm{}
.mobConfirm li{padding:8px 0 8px 80px; position:relative;zoom:1}
.mobConfirm li .tit{ position:absolute;left:0;top:12px;font-size:14px}
.mobConfirm li .btn,
.mobConfirm li .btn-disable{font-size:12px;}
.mobConfirm-mdf .ipt{width:222px}
.mobConfirm-mdf .btn,
.mobConfirm-mdf .btn-disable{width:192px; text-align:center}
</style>





<script>var GW="建议用手机号码注册";</script>
</head>
<body onbeforeunload="if (typeof _Global != 'undefined'){_Global.flow.quit();}">


<header class="header">
	<div class="bg">
		<a tabindex="-1" href="http://mail.163.com/" target="_blank" title="网易163免费邮">网易163免费邮</a>
		<a tabindex="-1" href="http://www.126.com/" target="_blank" title="网易126免费邮">网易126免费邮</a>
		<a tabindex="-1" href="http://www.yeah.net/" target="_blank" title="网易Yeah.net免费邮">网易Yeah.net免费邮</a>
	</div>
	<div class="links">
		<a href="http://mail.163.com/html/mail_intro/" target="_blank">了解更多</a>|<a href="http://zhidao.mail.163.com/zhidao/feedback.jsp?t=reg" target="_blank">反馈意见</a>
	</div>
</header>
<section class="content" id="mainSection">
	

<header class="content-tit"><h1>欢迎注册网易免费邮！邮件地址可以作为网易通行证，使用其他网易旗下产品。</h1></header>
<script>function SGW(n){if(''==n.value){n.style.color="#999";n.style["font-weight"]="normal";n.value=GW;}}
function HGW(n){if(GW==n.value){n.style.color="";n.style["font-weight"]="bold";n.value="";}}</script>
<div id="mMaskD" class="mainBody-wp">
	<div class="m-mask" style="display:none;"></div>
	<div class="mainBody">
		<div id="overdueTips" class="tips-big" style="display:none;">
			<b class="ico ico-warn-big"></b>
			由于您长时间离开，页面已经失效，<a href="javascript:void(0);" onclick="window.location.reload();return false;">请重新注册</a>。
		</div>
		<noscript>
			<div class="tips-big">
				<b class="ico ico-warn-big"></b>
				您的浏览器禁止使用JS，无法正常注册，请<a href="http://help.163.com/09/1216/16/5QLUL0H500753VB8.html" target="_blank">根据提示解除限制</a>后再注册。
			</div>
		</noscript>
		<div class="regTabs">
			<ul id="tabsUl" class="tabs2-on">
				<li><a tabindex="-1" href="javascript:void(0);" onclick="_Global.main.turnOn();return false;" class="a1" style="text-decoration:none;">注册字母邮箱</a></li>
				<li><a tabindex="-1" href="javascript:void(0);" onclick="_Global.mobile.turnOn(null,'tab');return false;" class="a2" style="text-decoration:none;">注册手机号码邮箱</a></li>
				<li><a tabindex="-1" href="javascript:void(0);" onclick="_Global.vip.turnOn();return false;" class="a3" style="text-decoration:none;">注册VIP邮箱</a></li>
			</ul>
		</div>
		<div id="regMain" class="regForm" style="display:none;ime-mode:disabled">
			<dl id="nameDl" class="regForm-item mainBody-hasFocus-focusArea">
				<dt class="regForm-item-tit"><span class="txt-impt">*</span>邮件地址</dt>
				<dd class="regForm-item-ct">
					<input onfocus="HGW(this);" onblur="SGW(this);" id="nameIpt" name="name" type="text" class="ipt" style="ime-mode:disabled;color:#999;font-weight:normal" autocomplete="off" value="建议用手机号码注册"/>
					<strong class="txt-14">@</strong>
					<select name="mainDomain" id="mainDomainSelect" tabindex="-1">
						<option selected="selected" value="163.com">163.com</option>
						<option value="126.com">126.com</option>
						<option value="yeah.net">yeah.net</option>
					</select>
					<div id="nameTips" class="tips">
						<span class="txt-tips">6~18个字符，可使用字母、数字、下划线，需以字母开头</span>
					</div>
					<div id="conflictDiv" class="owned" style="display:none">
						<div class="arr"></div>
						<div class="attent">
							<b class="ico ico-warn-big"></b>
							<strong id="conflictTitle" class="txt-impt txt-14">该邮件地址已被注册</strong>
						</div>
						<div id="conflictOthersDiv" class="others">
							<div id="conflictMobile" class="ctExt">
								推荐您注册<a href="javascript:void(0);" onclick="_Global.mobile.turnOn(null,'recommend1');return false;" hidefocus="true"><strong class="txt-succ">手机号码@163.com</strong></a>
								<a href="javascript:void(0);" onclick="_Global.mobile.turnOn(null,'recommend2');return false;" class="btnSml" hidefocus="true">免费注册</a>
							</div>
							<div>您还可以选择：</div>
							<ul id="conflictOthers"></ul>
						</div>
					</div>
				</dd>
			</dl>
			<dl id="mainPwdDl" class="regForm-item">
				<dt class="regForm-item-tit"><span class="txt-impt">*</span>密码</dt>
				<dd class="regForm-item-ct">
					<input id="mainPwdIpt" name="mainPassword" type="password" class="ipt norWidthIpt" style="ime-mode:disabled"/>
					<div id="mainPwdTips" class="tips" style="position:relative">
						<div id="mainPwdStatus" class="pswState pswState-poor" style="display:none;">
							<span class="s1">弱</span>
							<span class="s2">中等</span>
							<span class="s3">强</span>
						</div>
						<span class="txt-tips">6~16个字符，区分大小写</span>
					</div>
				</dd>
			</dl>
			<dl id="mainCfmPwdDl" class="regForm-item">
				<dt class="regForm-item-tit"><span class="txt-impt">*</span>确认密码</dt>
				<dd class="regForm-item-ct">
					<input id="mainCfmPwdIpt" name="mainConfirmPassword" type="password" class="ipt norWidthIpt" style="ime-mode:disabled"/>
					<div id="mainCfmPwdTips" class="tips">
						<span class="txt-tips">请再次填写密码</span>
					</div>
				</dd>
			</dl><dl id="vcodeDl" class="regForm-item vCodeArea">
				<dt class="regForm-item-tit"><span class="txt-impt">*</span>验证码</dt>
				<dd class="regForm-item-ct">
					<input id="vcodeIpt" name="vcode" type="text" class="ipt" autocomplete="off"/>
					<img id="vcodeImg" class="vCode" style="cursor:pointer;" src="" alt="验证码"><a id="vcodeA" href="javascript:void(0);" class="switchvCode" tabindex="-1">看不清楚？换张图片</a>
					<div id="vcodeTips" class="tips">
						<span class="txt-tips" id="vRemind"></span>
					</div>
				</dd>
			</dl>
			<dl id="mainAcceptDl" class="regForm-item">
				<dd class="regForm-item-ct txt-tips">
					<label></label><input id="mainAcceptIpt" type="checkbox" checked="checked" tabindex="-1"/> 同意<a href="http://reg.163.com/agreement.shtml" target="_blank" tabindex="-1">"服务条款"</a>和<a href="http://reg.163.com/agreement_game.shtml" target="_blank" tabindex="-1">"隐私权相关政策"</a>
					<div id="mainAcceptTips"></div>
				</dd>
			</dl>
			<dl class="regForm-item">
				<dd class="regForm-item-ct">
					<a id="mainRegA" href="javascript:void(0);" onclick="_Global.main.start();" class="btnReg">立即注册</a>
					<a id="mainRegA_d" href="javascript:void(0);" class="btnRegDisable" style="display:none">立即注册</a>
				</dd>
			</dl>
		</div>
		<div id="regMobile" class="regForm">
			<dl id="mobileDl" class="regForm-item">
				<dt class="regForm-item-tit"><span class="txt-impt">*</span>手机号码</dt>
				<dd class="regForm-item-ct">
					<div class="mob-supt">
						<input id="mobileIpt" name="mobile" type="text" class="ipt" style="ime-mode:disabled" autocomplete="off"/>
						<strong class="txt-14">@163.com</strong>
						<b class="ico ico-mob"></b>
					</div>
					<div id="mobileTips" class="tips">
						<span class="txt-tips">请填写手机号码</span>
						
					</div>
					<div class="btns">
						<a id="sendAcodeBtn" href="javascript:void(0);" class="btn" hidefocus="true"><strong id="sendAcodeStg">免费获取验证码</strong></a>
						<span id="acodeSentSpan" class="txt-succ" style="display:none;">&nbsp;&nbsp;短信验证码已发送</span>
					</div>
				</dd>
			</dl>
			<dl id="acodeDl" class="regForm-item">
				<dt class="regForm-item-tit"><span class="txt-impt">*</span>验证码</dt>
				<dd class="regForm-item-ct">
					<input id="acodeIpt" name="acode" type="text" class="ipt norWidthIpt" autocomplete="off"/>
					<div id="acodeTips" class="tips">
						<span class="txt-tips">请查收手机短信，并填写短信中的验证码</span>
					</div>
				</dd>
			</dl>
			<dl id="mobilePwdDl" class="regForm-item">
				<dt class="regForm-item-tit"><span class="txt-impt">*</span>密码</dt>
				<dd class="regForm-item-ct">
					<input id="mobilePwdIpt" name="mobilePassword" type="password" class="ipt norWidthIpt" style="ime-mode:disabled"/>
					<div id="mobilePwdTips" class="tips" style="position:relative">
						<div id="mobilePwdStatus" class="pswState pswState-poor" style="display:none;">
							<span class="s1">弱</span>
							<span class="s2">中等</span>
							<span class="s3">强</span>
						</div>
						<span class="txt-tips">6~16个字符，区分大小写</span>
					</div>
				</dd>
			</dl>
			<dl id="mobileCfmPwdDl" class="regForm-item">
				<dt class="regForm-item-tit"><span class="txt-impt">*</span>确认密码</dt>
				<dd class="regForm-item-ct">
					<input id="mobileCfmPwdIpt" name="mobileConfirmPassword" type="password" class="ipt norWidthIpt" style="ime-mode:disabled"/>
					<div id="mobileCfmPwdTips" class="tips">
						<span class="txt-tips">请再次填写密码</span>
					</div>
				</dd>
			</dl>
			<dl id="mobileAcceptDl" class="regForm-item">
				<dd class="regForm-item-ct txt-tips">
					<label></label><input id="mobileAcceptIpt" type="checkbox" checked="checked" tabindex="-1"/> 同意<a href="http://reg.163.com/agreement.shtml" target="_blank" tabindex="-1">"服务条款"</a>和<a href="javascript:void(0);" onclick="noticePopup.show();return false;" tabindex="-1">"用户须知"</a>、<a href="http://reg.163.com/agreement_game.shtml" target="_blank" tabindex="-1">"隐私权相关政策"</a>
					<div id="mobileAcceptTips"></div>
				</dd>
			</dl>
			<dl class="regForm-item">
				<dd class="regForm-item-ct">
					<a id="mobileRegA" href="javascript:void(0);" onclick="_Global.mobile.start();return false;" class="btnReg">立即注册</a>
					<a id="mobileRegA_d" href="javascript:void(0);" class="btnRegDisable" style="display:none">立即注册</a>
				</dd>
			</dl>
		</div>
		<div id="regVipFrame" class="regVipFrame" style="display:none;ime-mode:disabled"><iframe id="regVipFrameId" src="" frameborder="0" border="0"></iframe></div>
	</div>
	<aside class="mainBody-side">
				<div class="regExt" id ="adds">
			
			<img src="http://mimg.127.net/xm/reg_all/img/reg_phone.gif" alt="快速注册">
			<div class="intro">
				<p>手机拨打： <strong>400 8801 163</strong></p>
			</div>
			<div class="tips">
				温馨提示：仅限中国大陆手机用户使用<br>拨打免费，不产生任何费用
			</div>
			
		</div>
		<div class="regVip" id ="vipAdds163" style="display:none;ime-mode:disabled">
			<img src="http://mimg.127.net/xm/reg_all/img/reg_vip_163.gif" alt="快速注册">
		</div>
		<div class="regVip" id ="vipAdds126" style="display:none;ime-mode:disabled">
			<img src="http://mimg.127.net/xm/reg_all/img/reg_vip_126.gif" alt="快速注册">
		</div>
	</aside>
	<div class="clear"></div>
</div>
</section>
<section class="content" id="secondarySection" style="display:none"></section>
<footer class="footer">
	<a href="http://corp.163.com/index_gb.html" target="_blank">关于网易</a>&nbsp;&nbsp;<a href="http://mail.163.com/html/mail_intro" target="_blank">关于网易免费邮</a>&nbsp;&nbsp;<a href="http://mail.blog.163.com/" target="_blank">邮箱官方博客</a>&nbsp;&nbsp;<a href="http://help.163.com/" target="_blank">客户服务</a>&nbsp;&nbsp;<a href="http://corp.163.com/gb/legal/legal.html" target="_blank">隐私政策</a>&nbsp;&nbsp;|&nbsp;&nbsp;网易公司版权所有&nbsp;&copy;&nbsp;1997-<script src="http://mimg.127.net/copyright/year.js"></script>
</footer>
<div id="maskDiv" class="g-mask" style="display:none;z-index: 199"></div>
<div id="rebindDiv" class="g-msgbox-wp" style="display:none;position:absolute;z-index:200">
	<div class="g-msgbox">
		<a href="javascript:void(0);" onclick="rebindPopup.hide();return false;" class="Aclose" title="关闭"></a>
		<div class="ct">
			<b class="ico ico-warn-big"></b>
			<strong class="txt-14">是否确定重新激活？</strong>
			<p>重新激活后，<span id="rebindSpan"></span>&nbsp;&nbsp;帐号原有的数据将会被<span class="txt-impt">清空</span>。</p>
		</div>
		<div class="ft">
			<a id="rebindA" href="javascript:void(0);" class="btn-main txt-12">确定，现在获取验证码</a>
			<a href="javascript:void(0);" onclick="rebindPopup.hide();return false;" class="btn txt-12">取 消</a>
		</div>
	</div>
</div>
<div id="noticeDiv" class="g-msgbox-wp" style="display:none;position:absolute;z-index:200">
	<div class="g-msgbox">
		<a href="javascript:void(0);" onclick="noticePopup.hide();return false;" class="Aclose" title="关闭"></a>
		<div class="P-msgbox-notice">
			<p><strong>用户须知：</strong></p>
			<ul>
				<li>1. 网易手机号码邮箱与手机号码对应，如果您使用的手机号终止，请及时关闭网易手机号码邮箱；如果您更换手机号，请及时关闭原网易手机号码邮箱并激活您的新网易手机号码邮箱帐号。</li>
				<li>2. 针对以上情形，请您及时告知您的亲朋好友有关网易手机号码邮箱终止或变更的情况。因您没有及时关闭或通知产生的任何损失的，网易公司不承担任何责任。</li>
			</ul>
		</div>
		<div class="ft">
			<a href="javascript:void(0);" onclick="noticePopup.hide();return false;" class="btn txt-12">关 闭</a>
		</div>
	</div>
</div>
<form id="submitForm" name="submitForm" style="display:none" method=POST action=""></form>

<!-- <script src="/unireg/js/common/namespaces.js"></script>
<script src="/unireg/js/common/jsloader.js"></script>
<script src="/unireg/js/common/popup.js"></script>
<script src="/unireg/js/common/requestutils.js"></script>
<script src="/unireg/js/common/stringutils.js"></script>

<script src="/unireg/js/register/common/checkutils.js"></script>
<script src="/unireg/js/register/common/formlogger.js"></script>
<script src="/unireg/js/register/common/loginutils.js"></script>
<script src="/unireg/js/register/common/verifyutils.js"></script>

<script src="/unireg/js/register/main/remindutils.js"></script>
<script src="/unireg/js/register/main/start.js"></script>

<script src="/unireg/js/register/mobile/start.js"></script>

<script src="/unireg/js/register/vip/start.js"></script>-->

<script src="/unireg/js/common/jquery.js"></script>
<script src="/unireg/js/all-min_20140126.js"></script>


<script>
var _Global = {
	flow : com.netease.mail.unireg.register.mobile.Start,
	main : com.netease.mail.unireg.register.main.Start,
	mobile : com.netease.mail.unireg.register.mobile.Start,
	vip : com.netease.mail.unireg.register.vip.Start
};
function showMainSection() {
	_Global.flow.recover();
	$("#mainSection").show();
	$("#secondarySection").hide();
}
function showSecondarySection(cont) {
	$("#mainSection").hide();
	$("#secondarySection").html(cont);
	$("#secondarySection").show();
}
var vs = [{
	imgwidth : 80,
	imgheight : 30,
	iptwidth : 235,
	src : "/unireg/call.do?cmd=register.verifyCode",
	tips : "请填写图片中的字符",
	callback : function() {
		$("#vcodeDl").removeClass("vCodeArea-big");
	}
},{
	imgwidth : 120,
	imgheight : 50,
	iptwidth : 196,
	src : "/unireg/call.do?cmd=register.verifyCode&v=common/verifycode/vc_en",
	tips : "请填写图片中的字符，不区分大小写",
	callback : function() {
		$("#vcodeDl").removeClass("vCodeArea-big").addClass("vCodeArea-big");
	}
}];
var vmap = {"163.com":vs[1],"126.com":vs[1],"yeah.net":vs[1]};
var rp = {
	from : "163",
	forcedFlow : "",
	currDomain : "163.com",
	targetURL : "",
	envalue : "610013",
	vmap : vmap,
	boundDomains : [ "163.com", "126.com", "yeah.net", "vip.163.com",
				"vip.188.com", "vip.126.com" ],
	sid : "FFBBBE52ECA48E5273887BF36060A2DD",
	gw : GW
};
com.netease.mail.unireg.register.main.Start.init(rp);
com.netease.mail.unireg.register.mobile.Start.init(rp);
var JSLoader = com.netease.mail.common.JSLoader;
var rebindPopup = new com.netease.mail.common.Popup("rebindDiv","maskDiv",null,0,-101);
var noticePopup = new com.netease.mail.common.Popup("noticeDiv","maskDiv",null,0,-136);
</script>
<form id="submitForm" name="submitForm" style="display:none" method=POST action="" ></form>
<iframe id="submitFrame" name="submitFrame" style="display:none;" src="https://ssl.mail.163.com/regall/unireg/prepare.jsp?sid=FFBBBE52ECA48E5273887BF36060A2DD&sd=INTERNAL134"></iframe>
</body>
</html>