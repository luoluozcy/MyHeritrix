<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>游戏乐园_网易彩票</title>
<meta name="keywords" content="网易彩票" />
<meta name="description" content="" />
<link rel="stylesheet" type="text/css" href="http://cdn.caipiao.163.com/caipiao/css2/base.css?20140428171400"/>
<link rel="stylesheet" type="text/css" href="http://cdn.caipiao.163.com/caipiao/css2/core.css?20140428171400"/>
<link rel="stylesheet" type="text/css" href="http://cdn.caipiao.163.com/caipiao/css/base.css?20140428171400" />
<link rel="stylesheet" type="text/css" href="http://cdn.caipiao.163.com/caipiao/css/activity/gamecenter/gamecenter.css?20140428171400"/>
<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js/base.js?20140428171400"></script>
<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js/jquery-1.4.2.js?20140428171400"></script>
<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js2/easyCore.js?20140428171400"></script>
<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js2/fixCore/compa.js?20140428171400"></script>
</head>
<body>
<!--头部 开始-->

<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js/showAd.js?20140428171400"></script>
<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js/popup.js?20140428171400"></script>
<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js/suggest.js?20140428171400"></script>

<!--登录框 开始-->
<div class="urs_login_box" id="login_popup" style="display: none;">
	<!--第一行—顶部*/-->
	<div class="urs_login_top">
		<div class="urs_login_t_m"></div>
	</div>
	<div class="urs_login_t_l"></div>
	<div class="urs_login_t_r"></div>
	<!--第二行—中间内容区*/-->
	<form class="urs_login_form" onsubmit="return false" action="#">
		<div class="urs_login_suggest"> <span class="suggest_box" id="useremail_box">
			<input type="text" class="urs_login_input" id="useremail" autocomplete="off" value="@163.com @126.com等" style="color:#999;"/>
		</span> </div>
		<div class="urs_login_middle">
			<div class="urs_login_m_l"></div>
			<div class="urs_login_m_r"></div>
			<div class="urs_login_context">
			<h3 class="urs_login_title"><span class="f_left">使用网易账号登录</span><span class="urs_login_close" id="close1" onclick="loginpopup.closePopup()"></span></h3>
			<div class="urs_login_con">
			<table width="96%" border="0" cellpadding="0" cellspacing="0" class="urs_login_table">
			<tr>
				<td width="29%" height="44"><div align="right">帐号：</div></td>
				<td colspan="2"></td>
            </tr>
            <tr>
              <td height="44"><div align="right">密码：</div></td>
              <td colspan="2"><input type="password" name="textfield" id="password" class="urs_login_input" onkeydown="if(event.keyCode == 13){$('loginBtn1').click();}"/></td>
            </tr>
            <tr>
              <td height="16">&nbsp;</td>
              <td width="35%"><label id="saveloginLabel" for="login_savelogin"><input type="checkbox" value="1" id="login_savelogin" name="savelogin" />两周内自动登录</label></td>
              <td><a href="http://reg.163.com/RecoverPasswd1.shtml" class="urs_login_link" rel="nofollow">忘记密码？</a></td>
            </tr>
            <tr>
              <td  height="40">&nbsp;</td>
              <td><input type="button" name="button" id="loginBtn1" value="登录" class="urs_login_btn" /><input type="hidden" name="domains" value="163.com" /></td>
              <td><div align="right"><span style="font-size:12px">没有网易账号？</span><a href="#" onclick="javascript:location.href='http://reg.163.com/reg/mobileAliasReg.do?product=caipiao&amp;url='+encodeURIComponent('http://caipiao.163.com/')+'&amp;loginurl='+encodeURIComponent('http://caipiao.163.com/?isShowLogin=1')" class="urs_login_link" rel="nofollow">立即注册&gt;&gt;</a></div></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </form>
  <!--第三行—底部*/-->
  <div class="urs_login_b_m"><span style="display:block"></span></div>
  <div class="urs_login_b_l"></div>
  <div class="urs_login_b_r"></div>
</div>
<!--登录框 结束-->
<script type="text/javascript">
//添加登录帐号的记忆功能
function setLoginName(id,id1) {
 var p_info = this.getCookie("P_INFO");
 var cookieValue;
 var cookieName;
 if (p_info != null && p_info != false) {
   cookieValue = p_info.split("|");
   if (cookieValue != null && cookieValue.length > 0) {
	  cookieName = cookieValue[0];
   }
 };
 if (cookieName) {
   document.getElementById(id).style.color = "#000";
   document.getElementById(id).value = cookieName;
   if(document.getElementById(id1)){
	document.getElementById(id1).focus();
   }
 };
};
setLoginName.prototype.getCookie = function(sName) {
var sRE = "(?:; )?" + sName + "=([^;]*);?";
var oRE = new RegExp(sRE);
if (oRE.test(document.cookie)) {
  return decodeURIComponent(RegExp["$1"]);
} else {
   return null;
}
};

var loginpopup = new popup("login_popup","#000",20);//创建新弹窗对象，参数为弹窗ID,遮盖层颜色，透明度
function createPopup(formId)
{
	loginpopup.create(formId);

	if($("useremail")){new setLoginName("useremail","password");}
	
}
//锁屏功能

//popup.create();

//登录帐号输入提示
var email_str=["@163.com","@126.com","@yeah.net","@vip.163.com","@vip.126.com","@popo.163.com","@188.com","@qq.com","@yahoo.com","@sina.com"];
new suggest(email_str,"useremail_box","useremail");

//登录表单验证
Validator = {   
    Email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
}

function checkLogin(fm){
    var alt = "";
    if($("useremail").value == "" || $("useremail").value == "如name@example.com"){
        alt += "帐号不能为空\n";
    }
    if($("password").value == ""){alt += "密码不能为空\n";}
    if(alt != ""){alert(alt);return false;}
    createHidden(fm, "ursLoginUserName", $("useremail").value);
    createHidden(fm, "ursLoginUserPass", $("password").value);
    createHidden(fm, "ursLoginSavelogin", $("login_savelogin").checked==true? '1' : '0');
    if(fm.onsubmit&&!fm.onsubmit())
		return false;
	fm.submit();
}
</script>
<!--头部 开始--><span id="tip_box" class="server_tel_tips" style="display:none"></span><!-- 用于提示电话 -->

	
<nav id="topNav">
	<div id="topNavWrap">
		<div id="topNavLeft"><script>window.Core && window.Core.navInit("http://cdn.caipiao.163.com/caipiao","","20140428171400","1398682873144");</script></div>
		<ul id="topNavRight">
			<li><a href="https://epay.163.com/" id="myEpay" notice="false" target="_blank">我的网易宝</a>&nbsp;&nbsp;<span id="topEpayInfo"></span>|</li>
			<li>
				<div id='myCoupon'>
					<div class="mcDropMenuBox fl">
						<a target="_top" user="y" class="topNavHolder" href="/my/coupon.html#from=top" rel="nofollow"><em class="text_icon"></em>红包<i></i></a>
						<div class="mcDropMenu couponContent"></div>
					</div>
					&nbsp;&nbsp;<a target="_blank" user="y" href="/sale/coupon_saleCouponIn.html#from=top" id="buyCoupon">购买</a>&nbsp;&nbsp;|
				</div>
			</li>
			<li><div class="mcDropMenuBox myorder">
				<a target="_top" user="y" class="topNavHolder" href="/my/order.html" rel="nofollow"><em class="text_icon"></em>我的订单<i></i></a><b class="holderLine">|</b>
				<div class="mcDropMenu">
					<a target="_top" user="y" href="/my/order_followbuy.html#from=top" rel="nofollow">我的追号</a>
					<a target="_top" user="y" href="/my/order_autofollow.html#from=top" rel="nofollow">定制跟单</a>
				</div>
			</div></li>
			<li><div class="mcDropMenuBox">
				<a target="_top" user="y" class="topNavHolder" href="/order/mylottery_info.html#from=top" rel="nofollow">我的彩票<i></i></a><b class="holderLine">|</b>
				<div class="mcDropMenu">
					<a target="_top" user="y" href="/coupon/myCoupon.html#from=top" rel="nofollow">我的红包</a>
					<a target="_top" user="y" href="/order/mylottery_info.html#act=jifen" rel="nofollow">我的积分</a>
					<a target="_top" user="y" href="/order/myactivity_drawaward.html#from=top" rel="nofollow">我的活动</a>
					<a target="_top" user="y" href="/message/mymessage_query.html#from=top" rel="nofollow">消息中心</a>
					<a target="_blank" user="y" href="/homepage/homepage_index.html#from=top" rel="nofollow">个人主页</a>
				</div>
			</div></li>
			<li><a target="_blank" href="http://bbs.caipiao.163.com/" rel="nofollow">论坛</a>&nbsp;&nbsp;|</li>
			<li><div class="mcDropMenuBox">
				<a target="_blank" class="topNavHolder" href="/help/" rel="nofollow">帮助<i></i></a><b class="holderLine">|</b>
				<div class="mcDropMenu">
					<a target="_blank" href="/help/13/0222/19/8OBGCEEN00754KE8.html" rel="nofollow">如何充值</a>
					<a target="_blank" href="/help/special/award/" rel="nofollow">如何领奖</a>
					<a target="_blank" href="/help/13/0222/19/8OBGFK7200754KE9.html" rel="nofollow">如何提现</a>
					<a target="_blank" href="/help/" rel="nofollow">更多帮助</a>
                    <a target="_blank" href="http://caipiao.163.com/kf.html" rel="nofollow">意见反馈</a>			
				</div>
			</div></li>
		</ul>
	</div>
</nav>
<header id="docHead"><div id="docHeadWrap">
	<a href="http://caipiao.163.com/" class="logoLnk" title="网易彩票" hideFocus="true"><span>网易彩票<img src="http://cdn.caipiao.163.com/caipiao/img/logos/caipiao.png?20140428171400" alt="网易彩票"/></span></a>
	<a href="/order/jczq/#from=dt" class="guideLnk" target="_blank" hideFocus="true"><span>网易彩票</span></a>
	 
	<p><!-- <a href="/schemamarket/schemalist.html" id="topLnkSchema"><em></em>方案抄市</a> -->
	<!--
	<a id="topLnkQuan" href="/sale/coupon_saleCouponIn.html"><em></em>红包</a><a id="topLnkActi" href="/jifen/"><em></em>积分乐园</a><a href="/activity/freshman_index.html#from=nav" id="topLnkBBS"><em></em>幸运选号</a>
	-->
		<span class="serviceTel">
			<span class="serviceTel_tel">
			<span>客服热线</span><br>
			<strong>020-83568090</strong>
			</span>
			<!-- 判断需不需要显示在线客服 -->
			
		</span>
	</p>
</div></header>

<!-- 保留原有弹框代码
2012-09-27 马超 修改，暂时屏蔽用户名为空检测，前置输出登录用表单
 -->

<form action="/index1.html" id="headerLoginForm" style="display:inline" onsubmit="return true;" method="post">

	<input type="hidden" name="goingToUrl" id="goingToUrl1" />
	<script type="text/javascript">$("headerLoginForm").action="/index2.html";$("goingToUrl1").value=window.location.pathname+window.location.search;</script>

</form>
	

<!--头部 结束-->
<script type="text/javascript">
    //取得网易相关信息
	var login = false;
	var isShowNotice = false;
	var caipiaoCdnVersionId = 20140428171400;
</script>
<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js/cp_header.js?20140428171400"></script>
<!--头部 结束-->
<!-- 彩票导航栏 -->

<nav id="topTabBox">
	<div id="topTab">
		<ul id="funcTab"><li id="lotteryListEntry"><a class="topNavHolder" hideFocus="true">选择彩种<i></i></a>
<!-- 彩种列表 -->
<div id="lotteryList">
	<div class="lotteryListWrap">
		<ul>
		<li class="zyGame"><a href="/order/ssq/#from=leftnav" gid="ssq"><em class="cz_logo35 logo35_ssq"></em><strong>双色球</strong></a></li>
		<li class="zyGame"><a href="/order/dlt/#from=leftnav" gid="dlt"><em class="cz_logo35 logo35_dlt"></em><strong>大乐透</strong></a></li>
		<li class="zyGame"><a href="/order/jczq/#from=leftnav" gid="jczq"><em class="cz_logo35 logo35_jczq"></em><strong>竞彩足球</strong></a></li>
		<li class="zyGame"><a href="/order/jclq/mixp.html#from=leftnav" gid="jclq_mix_p"><em class="cz_logo35 logo35_jclq"></em><strong>竞彩篮球</strong></a></li>
		<li class="zyGame"><a href="/order/11x5/#from=leftnav" gid="d11"><em class="cz_logo35 logo35_d11"></em><strong>11选5</strong></a></li>
		<li class="zyGame"><a href="/order/gxkuai3/#from=leftnav" gid="gxkuai3"><em class="cz_logo35 logo35_gxkuai3"></em><strong>新快3</strong></a></li>
		<li class="otherGames clearfix">
			<h3>高频</h3>
			<div>
				<em class="left"><a href="/order/gd11x5/#from=leftnav" title="猜对1个号就中奖，每天84期" gid="gdd11">广东11选5</a></em>
				<em><a href="/order/jx11x5/#from=leftnav" title="每天78期，任猜1-8个号都中奖" gid="jxd11">老11选5</a></em>
				<em class="left"><a href="/order/hlj11x5/#from=leftnav" title="猜中一个号就中奖，返奖率59%" gid="hljd11">好运11选5</a></em>
				<em><a href="/order/kl8/#from=leftnav" title="5分钟一期，最高奖500万" gid="kl8">快乐8</a></em>
				<em class="left"><a href="/order/kuai3/#from=leftnav" title="10分钟一期，快乐猜大小" gid="kuai3">快3</a></em>
				<em><a href="/order/oldkuai3/#from=leftnav" title="最容易中奖，全天82期" gid="oldkuai3">老快3</a></em>				
				<em class="left"><a href="/order/jxssc/#from=leftnav" title="10分钟一期，最高奖11.6万" gid="jxssc">新时时彩</a></em>
				<em><a href="/order/ssc/#from=leftnav" title="独有夜间版，01：55截止" gid="ssc">老时时彩</a></em>
				<em><a gid="kuai2" title="猜中一个号就中奖，5分钟一期" href="/order/gdkuai2/#from=leftnav">快2</a></em>
				<em class="left" style="display:none"><a href="/order/gdkuai2/#from=leftnav" title="猜中一个号就中奖，5分钟一期" gid="kuai2">快2</a></em>
			</div>
		</li>
		<li class="otherGames clearfix">
			<h3>竞技</h3>
			<div>
				<em class="left"><a href="/order/dc/#from=leftnav" title="猜一场即中奖" gid="football_dcspf">足球单场</a></em>
				<em><a href="/order/f4cjq/#from=leftnav" gid="football_f4cjq">四场进球</a></em>
				<em class="left"><a href="/order/sfc/#from=leftnav" title="猜中14场大奖500万" gid="football_sfc">胜负彩</a></em>
				<em><a href="/order/bqc/#from=leftnav" gid="football_bqc">六场半全场</a></em>
				<em class="left"><a href="/order/rx9/#from=leftnav" title="任选九场比赛" gid="football_9">任选九场</a></em>
			</div>
		</li>
		<li class="otherGames end clearfix">
			<h3>数字</h3>
			<div>
				<em class="left"><a href="/order/3d/#from=leftnav" title="2元赢取1000元，天天开奖" gid="x3d">福彩3D</a></em>
				<em><a href="/order/qlc/#from=leftnav" title="大奖500万 每周一、三、五开奖" gid="qlc">七乐彩</a></em>
				<em class="left"><a href="/order/pl3/#from=leftnav" title="2元赢取1000元，天天开奖" gid="pl3">排列3</a></em>
				<em><a href="/order/qxc/#from=leftnav" title="大奖500万 每周二、五、日开奖" gid="qxc">七星彩</a></em>
				<em class="left"><a href="/order/pl5/#from=leftnav" title="2元赢取10万元，天天开奖" gid="pl5">排列5</a></em>
			</div>
		</li>
	</ul>
	</div>
</div>

		</li><li pid="home"><a href="/">首页</a>|</li>
		<li pid="hall"><a href="/order/" title="彩票购彩大厅">购彩大厅</a>|</li>
		<li class="wordsNum2" pid="groupbuy"><a title="彩票合买大厅" href="/groupbuy/" rel="nofollow">合买<i></i></a>|
            <div class="mcDropMenu">
                <a href="/groupbuy/" rel="nofollow">合买大厅</a>
                <a href="/followhall/" rel="nofollow">定制跟单</a>
            </div></li>
        <li pid="award"class="wordsNum4"><a href="/award/" title="中国彩票开奖">彩票开奖<i></i></a>|
        	<div class="mcDropMenu">
                <a href="/award/">开奖公告</a>
                <a href="/hit/hit_ssq.html?index=1" rel="nofollow">中奖排行</a>
            </div></li>
        <li pid="trend"><a href="http://zx.caipiao.163.com/trend/trend.html" title="福彩体彩走势图">走势图</a>|</li>
        <li  class="wordsNum4 tl" pid="saishi"><a title="赛事数据" href="http://live.caipiao.163.com/">赛事数据<i></i></a>|
            <div class="mcDropMenu">
                <a href="http://live.caipiao.163.com/">比分直播</a>
            	<a href="http://saishi.caipiao.163.com">足球资料库</a>
            	<a href="http://basketball.caipiao.163.com/">篮球资料库</a>
                <!-- <a href="http://live.caipiao.163.com/">篮彩资料库</a> -->
            </div></li>
        <li pid="cpInfo" ><a title="彩票资讯" href="http://zx.caipiao.163.com/">彩票资讯</a>|</li>		
        <li  class="wordsNum2" pid="coupon"><a title="优惠" href="/sale/coupon_saleCouponIn.html">优惠<i></i></a>|
            <div class="mcDropMenu">
                <a href="/sale/coupon_saleCouponIn.html">彩票红包</a>
                <a href="/jifen/">积分乐园</a>
            </div></li>
        <li pid="mobile" ><a title="手机购买彩票" href="/outside/getclient_cp.html">手机购彩</a></li></ul>
	</div>
</nav>


<!--主体 开始 -->
<div class="gamecenter_main clearfix">
  <div class="gc_con xyls">
    <h2>幸运猎手</h2>
  	<a title="开始游戏" class="join_btn" href="http://caipiao.163.com/game_center/gold.jsp"></a>
  </div>
  <div class="gc_con tcs">
    <h2>贪吃蛇</h2>
  	<a title="开始游戏" class="join_btn" href="http://caipiao.163.com/game_center/snake.jsp"></a>
  </div>
  <div class="gc_con zjsc">
    <h2>终极赛车</h2>
  	<a href="http://caipiao.163.com/game_center/zjsc.jsp"  class="join_btn" title="开始游戏"></a>
  </div>
  <div class="gc_con xydzp">
    <h2>幸运大转盘</h2>
  	<a href="http://caipiao.163.com/game_center/lucky.jsp"  class="join_btn" title="开始游戏"></a>
  </div>
</div>
<!--主体 结束 -->
 

<!--版权 开始-->


<!-- 热点导航 开始 -->   
<div class="hot_block clearfix">
    <h2 class="hot_title">热点导航：</h2>
    <p id="hot_block">
    <a target="_blank" href="http://zx.caipiao.163.com/ssq/">福利彩票双色球</a>
    <a target="_blank" href="http://zx.caipiao.163.com/3d/">福彩3D预测分析</a>
    <a target="_blank" href="http://zx.caipiao.163.com/trend/trend.html">彩票走势图</a>
	<a target="_blank" href="http://caipiao.163.com/order/ssq/">双色球投注</a>
	<a target="_blank" href="http://caipiao.163.com/order/3d/">福利彩票3D</a>
	<a target="_blank" href="http://caipiao.163.com/order/sfc/">足球胜负彩</a>
	<a target="_blank" href="http://caipiao.163.com/order/jczq/">竞彩足球</a>
	<a target="_blank" href="http://caipiao.163.com/order/dc/">足彩单场</a>
	<a target="_blank" href="http://caipiao.163.com/order/11x5/">体彩11选5</a>
	<a href="javascript:void(0)" id="showmore" rel="nofollow">更多</a><br />
	<a target="_blank" href="/order/">彩票投注</a>
	<a target="_blank" href="http://caipiao.163.com/order/dlt/">体彩大乐透</a>
	<a target="_blank" href="http://caipiao.163.com/order/pl3/">排列三</a>
	<a target="_blank" href="http://live.caipiao.163.com/">竞彩比分直播</a>
	<a target="_blank" href="http://zx.caipiao.163.com">彩票开奖</a>
	<a target="_blank" href="http://caipiao.163.com/order/qlc/">七乐彩</a>
	<a target="_blank" href="http://caipiao.163.com/order/qxc/">体彩七星彩</a>
	<a target="_blank" href="http://caipiao.163.com/order/pl5/">体彩排列5</a>
	<a target="_blank" href="http://caipiao.163.com/groupbuy/">彩票合买</a>
	<a target="_blank" href="http://saishi.caipiao.163.com/" title="足球联赛资料">足球资料库</a>
	<a target="_blank" href="http://vs.caipiao.163.com/">VS足球对阵</a>
	<a target="_blank" href=" http://caipiao.163.com/award/kuai3/" target="_blank">福彩快3开奖结果</a>
	<a target="_blank" href=" http://zx.caipiao.163.com/trend/kuai3/" target="_blank">福彩快3走势图</a>
	<a target="_blank" href="http://caipiao.163.com/award/ssq/">双色球开奖结果</a>
	<a href="http://basketball.caipiao.163.com/" title="篮彩" target="_blank">篮球资料库</a>
	<a href="http://live.caipiao.163.com/all/" target="_blank" >足球比分直播</a>	
    </p>
  </div>
<!-- 热点导航 结束 -->    
 
<!--页脚帮助导航区 开始 -->     
<div id="docFoot">
	<ul id="guideList">
		<li class="first"><em class="guide_1"></em>
        <em class="guide_1_con"></em>
        </li>
		<li><em class="guide_2"></em><span>
			· <a title="购买彩票流程" href="http://caipiao.163.com/help/" target="_blank">购彩流程</a><br/>
			· <a title="彩票领奖流程" href="http://caipiao.163.com/help/10/0726/16/6CHGN51T00754IHQ.html" target="_blank">领奖流程</a><br/>
			· <a rel="nofollow" href="https://epay.163.com/index.jsp" target="_blank">开通网易宝</a><br/>
			· <a rel="nofollow" href="https://epay.163.com/charge/chargeView.htm?from=caipiao" target="_blank">网易宝充值</a>
		</span></li>
        <li class="last"><em class="guide_3"></em><span>
			· <a title="新手购彩图解" href="http://caipiao.163.com/imghelp/tz_pt_1.jsp" target="_blank">新手购彩图解</a><br/> 
			· <a title="网上购买彩票常见问题" href="http://caipiao.163.com/help/special/00754II5/caipiao_qa_guide.html" target="_blank">常见问题</a><br/>
			· <a title="网上购买彩票功能指引" href="http://caipiao.163.com/help/special/00754IHC/caipiao_help_index.html" target="_blank">功能指引</a><br/>
			· <a title="彩票彩种介绍" href="http://caipiao.163.com/help/" target="_blank">彩种介绍</a>		</span></li>
		<li><em class="guide_4"></em><span>
			· <a rel="nofollow" href="http://caipiao.163.com/help/10/0726/16/6CHHOPF900754IHP.html" target="_blank">网易宝支付</a><br/>
			· <a rel="nofollow" href="http://caipiao.163.com/help/10/0726/17/6CHLJHB100754IHP.html" target="_blank">网银支付</a><br/>
			·  <a rel="nofollow" href="http://caipiao.163.com/help/10/0726/17/6CHLRB7600754IHP.html" target="_blank">支付宝支付</a><br/>
			· <a rel="nofollow" href="http://caipiao.163.com/help/10/0726/17/6CHM0HIM00754IHP.html" target="_blank">手机充值卡支付</a>
		</span></li>
		
        <li class="last"><em class="guide_5"></em><span>
			· <a class="mr5" href="http://caipiao.163.com/" target="_blank">彩票</a>&nbsp;
            <a href="http://baoxian.163.com/#from=cp_footer" target="_blank">保险</a><br/>
            · <a class="mr5" href="http://tuan.163.com/#from=cp_footer" target="_blank">团购</a>&nbsp;
	        <a href="http://baojian.163.com/#from=cp_footer" target="_blank">保健品</a><br/>
	        · <a class="mr5" href="http://mall.163.com/#from=cp_footer" target="_blank">商城</a>&nbsp;
	        <a href="http://yxp.163.com/#from=cp_footer" target="_blank">印像派</a><br/>
            · <a href="http://piao.163.com/#from=cp_footer" target="_blank">电影票</a>
		</span></li>
	</ul>
</div>    
<!--页脚帮助导航区 结束 -->    


    
<!--版权 开始-->

<!--版权 开始-->
<div id="aboutNEST">
<a rel="nofollow" href="http://corp.163.com/eng/about/overview.html">About NetEase</a> - <a rel="nofollow" href="http://gb.corp.163.com/gb/about/overview.html">公司简介</a> - <a rel="nofollow" href="http://gb.corp.163.com/gb/contactus.html">联系方法</a> - <a rel="nofollow" href="http://corp.163.com/gb/job/job.html">招聘信息</a> - <a rel="nofollow" href="http://help.163.com/">客户服务</a> - <a rel="nofollow" href="http://gb.corp.163.com/gb/legal.html">隐私政策</a> - <a rel="nofollow" href="http://emarketing.163.com/" >网络营销</a>- <a href="http://caipiao.163.com/sitemap.htm">网站地图</a> - <a title="网易彩票网" href="http://caipiao.163.com/" target="_blank">网易彩票网</a> <br>增值电信业务经营许可证：浙B2-20110418 | <a href="http://www.lede.com/prove.html">网站相关资质证明</a><br/>
网易公司版权所有 &copy;1997-2014 <br />网易彩票提醒您：理性购彩，热心公益。未满18周岁的未成年人禁止购彩及兑奖！
</div>
<!--版权 结束-->

<!-- START NetEase Devilfish 2006 -->
<script src="http://analytics.163.com/ntes.js" type="text/javascript"></script>
<script type="text/javascript">
_ntes_nacc = "caipiao";
neteaseTracker();
</script>
<!-- END NetEase Devilfish 2006 -->
<script type="text/javascript">
//加载htc
function loadCSS(url){
	var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.rev = "stylesheet";
    cssLink.type = "text/css";
    cssLink.media = "screen";
    cssLink.href = url;
    document.getElementsByTagName("head")[0].appendChild(cssLink);
}


new loadCSS('http://cdn.caipiao.163.com/caipiao/css/index_ie.css?20140428171400');

//展开热点导航
if($('showmore')){
	$('showmore').onclick =function(){$('hot_block').style.height='auto';}
}
</script>

<script type="text/javascript" src="http://cdn.caipiao.163.com/caipiao/js/seo_util.js?20140428171400"></script>
<!--版权 结束-->
</body>
</html>
