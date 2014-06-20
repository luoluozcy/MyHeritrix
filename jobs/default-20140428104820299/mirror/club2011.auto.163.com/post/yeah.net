<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-Type" content="text/html;charset=utf-8"/>
<title>出错啦！_网易汽车论坛</title>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta name="keywords" content="网易汽车论坛" />
<meta name="description" content="网易汽车论坛" />
<link type="text/css" rel="stylesheet" href="http://img1.cache.netease.com/common/css/common_nav_v1.0.3.css" />
<!-- 生产环境(需加版本号) -->
<link type="text/css" rel="stylesheet" href="http://img2.cache.netease.com/auto/projects/club/v1.1/default/bbs-v1.7.7.css" />
<link type="text/css" rel="stylesheet" href="http://img2.cache.netease.com/auto/projects/club/v1.1/default/component/sections.css" />
<script type="text/javascript" src="http://img3.cache.netease.com/cnews/js/ntes_jslib_1.x.js" charset="utf-8"></script>
</head>
<body>
<div class="NTES-nav">
    <span class="nav-link"><a href="http://www.163.com/">网易首页</a>-<a href="http://news.163.com/">新闻</a>-<a href="http://sports.163.com/">体育</a>-<a href="http://sports.163.com/nba/">NBA</a>-<a href="http://ent.163.com/">娱乐</a>-<a href="http://money.163.com/">财经</a>-<a href="http://money.163.com/stock/">股票</a>-<a href="http://auto.163.com/" id="_link_auto">汽车</a>-<a href="http://tech.163.com/">科技</a>-<a href="http://mobile.163.com/">手机</a>-<a href="http://lady.163.com/">女人</a>-<a href="http://bbs.163.com/">论坛</a>-<a href="http://v.163.com/">视频</a>-<a href="http://blog.163.com/">博客</a>-<a href="http://house.163.com/" id="houseUrl">房产</a>-<a id="homeUrl" href="http://home.163.com/">家居</a>-<a href="http://edu.163.com/">教育</a>-<a href="http://book.163.com/">读书</a>-<a href="http://game.163.com/" id="_link_game">游戏</a>|</span>
    <div class="rightCon">
        <div class="NTES-link code-num">
            <span class="left"><a href="http://email.163.com/" class="cBlue">免费邮箱</a> - <a href="http://reg.163.com/" class="cBlue">通行证登录</a> | </span><a href="http://t.163.com/?f=catopmicoblogmsg" class="NTES-nav-wbLogin">微博</a>
        </div>
    </div>
    <a href="http://www.163.com/rss" class="NTES-nav-rss">rss</a>
</div>
<script>
//<![CDATA[
NTES.ready( function($){
	var P_INFO = NTES.cookie.get("P_INFO");
	var S_INFO = NTES.cookie.get("S_INFO");
	if(P_INFO){
		var mailconfig = {
			"163.com":"http://entry.mail.163.com/coremail/fcg/ntesdoor2?verifycookie=1&lightweight=1",
			"126.com" : "http://entry.mail.126.com/cgi/ntesdoor?verifycookie=1&lightweight=1&style=-1",
			"vip.126.com" : "http://reg.vip.126.com/enterMail.m",
			"yeah.net" : "http://entry.yeah.net/cgi/ntesdoor?verifycookie=1&lightweight=1&style=-1",
			"188" : "http://reg.mail.188.com/servlet/enter",
			"vip.163.com" : "http://reg.vip.163.com/enterMail.m?enterVip=true-----------"
		};
		var passport =  P_INFO.substr(0, P_INFO.indexOf("|"));
		var username =  passport.substr(0, P_INFO.indexOf("@"));
		var logstate = P_INFO.split("|")[2];
		var loginframe = "";
		var url = "http://t.163.com/service/newMessage/" + passport + "/1/0/0/0/1";
		var pspt = passport.length >= 6 ? passport.substr(0,6)+"…" : passport;
		/@([^*]+)/.test(passport);
		var logdomain = RegExp.$1;
		if(S_INFO || logstate == "1" ) {
			var entrylink_html = '<a href=\"http://reg.163.com/Main.jsp?username='+passport+'\">进入通行证</a>';
			if(mailconfig[logdomain] != undefined) {
				entrylink_html += '<a href=\"'+mailconfig[logdomain]+'\">进入邮箱</a>';
			}
			if(logdomain == "popo.163.com" || mailconfig[logdomain] != undefined) {
				entrylink_html += '<a href="http://blog.163.com/passportIn.do?entry=163">进入博客</a><a href="http://photo.163.com/?username='+passport+'\">进入相册</a>';
			}
			entrylink_html += '<a href="http://yuehui.163.com/">进入约会</a><a href="http://t.163.com">进入微博</a>';
			if(logdomain == "163.com" || logdomain == "126.com" || logdomain == "yeah.net") {
				loginframe = '<iframe allowTransparency=\"true\" style=\"width:45px; height:20px; float:left; *margin-top:2px; vertical-align: middle;\" id=\"ifrmNtesMailInfo\" border=\"0\" src=\"http://p.mail.163.com/mailinfo/shownewmsg_www_0608.htm\" frameBorder=\"0\" scrolling=\"no\"></iframe>';
			}
			var login_html = '<div class=\"ntes-usercenter\"><div class=\"ntes-usercenter-logined\"><strong id=\"ntes_usercenter_name\" class=\"ntes-usercenter-name\" title=\"欢迎你，'+passport+'\">'+pspt+'</strong></div><div id=\"ntes_usercenter_entry\" class=\"ntes-usercenter-entry\"><span class=\"user-entry\">'+entrylink_html+'</span></div></div><span class="left c-b3">(</span>'+loginframe+'<span class="left c-b3"> | </span><span id="wbLoginAfter"><a href="http://t.163.com/?f=catopmicoblogmsg" class="NTES-nav-wbLogin" style="color:#f6f6f6;" title="进入网易微博">微博</a></span><span class="left c-b3">) | </span><a class=\"ntes-usercenter-loginout left\" href=\"http://reg.163.com/Logout.jsp?username='+passport+'\" target=\"_self\">退出</a></div>';
			$(".NTES-link")[0].innerHTML = login_html;
			$("#ntes_usercenter_name").addEvent("click", function(e){
				$("#ntes_usercenter_entry").style.display = $("#ntes_usercenter_entry").style.display == "block" ? "none" : "block";
				e.preventDefault();
				e.cancelBubble = true;
				document.onclick = function(){
					$("#ntes_usercenter_entry").style.display = "none";
				}
			})
			NTES.ajax.importJs(url, function() {
				if (typeof window.resultStatus != "undefined") {
					if (NTES("#wbLoginAfter")) {
						var userId = resultStatus.userId;
						var wbName = resultStatus.name;
						var wbNameMod = wbName.replace(/[^\x00-\xff]/g,"*?");
						var xxlen = wbNameMod.substr(0,10).indexOf("*") < 0 ? 0 : wbNameMod.substr(0,10).match(/\*/ig).length;
						var wbNameEnd = (wbNameMod.length <= 10) ? "" : "…";
						var totalCount = (parseInt(resultStatus.htlCount) < 100) ? parseInt(resultStatus.htlCount) : "99";
						var totalCountEnd = (parseInt(resultStatus.htlCount) < 100) ? totalCount : totalCount+"+";
						if(xxlen > 0){
							if(wbNameMod.substr(9,1) == "?"){
								wbName = wbName.substr(0,10-xxlen) + wbNameEnd;
							}else{
								wbName = wbName.substr(0,9-xxlen) + wbNameEnd;
							}
						}else{
							wbName = wbName.substr(0,10) + wbNameEnd;
						}
						if (totalCount > 0) {
							NTES("#wbLoginAfter").innerHTML = "<a href='http://t.163.com/?f=catopmicoblogmsg.News' class='NTES-nav-wbMsg fB' style='color:#ba2636;' title='" + wbName + "新消息："+ totalCountEnd +"'>"+ totalCountEnd +"</a>";
						}else{
							NTES("#wbLoginAfter").innerHTML = "<a href='http://t.163.com/?f=catopmicoblogmsg.enter' class='NTES-nav-wbLogin' style='color:#f6f6f6;' title='进入网易微博'>微博</a>";
						}
						if(userId == 0){
							NTES("#wbLoginAfter").innerHTML = "<a href='http://t.163.com/service/autoOpenAccount?autoFollow=1&needRedirect=1&f=catopmicoblogmsg.open' class='NTES-nav-wbLogin' style='color:#f6f6f6;' title='开通网易微博'>微博</a>";
						}
					};
				};
			}, "UTF-8");
		};
	}
})
//]]>
</script>
<div id="top"></div>
<div class="clearfix" id="channel">
    <div class="logos clearfix">
        <a class="logo_auto" target="_blank" href="http://auto.163.com/"><img height="24" width="107" src="http://img1.cache.netease.com/auto/img09/index1113/logo.gif" alt="网易汽车"></a>
        <a class="logo" target="_blank" href="http://club2011.auto.163.com/"><img height="24" src="http://img1.cache.netease.com/auto/projects/club/v1.1/default/images/bbslogo.png" alt="论坛" title="论坛"></a>
   		<span id="selectBoard" class="bbs_sections"><a href="javascript:void(0)" class="bbs_layout">论坛版面</a><a href="http://club.auto.163.com/" class="first hidden">首页</a></span>
		<!-- 论坛版面点击后：<span class="bbs_sections click_bbs_sections"><a href="javascript:void(0)">论坛版面</a></span> -->
    </div>
    <div class="uc_smart_nav_wrap">
        <div class="uc_smart_nav" id="uc_smart_nav">
            <div class="get_coins clearfix" id="uc_smart_nav">
		        <a class="coins_button" href="javascript:void(0)">签到得金币</a>
	    </div>
            <span class="news_msg" id="_uc_news_msg" style="display:none"><strong><em id="_uc_msg_count"></em></strong><a href="/user/msg/usermsg">我的消息</a></span>
            <span class="uc_center" id="_uc_center"><a href="/user/login.html" id="_uc_login">登录</a></span>
            <span class="uc_logout" id="_uc_logout" style="display:none"><a href="http://reg.163.com/Logout.jsp?username=&url=" id="_uc_logout_a">退出</a></span>
            <span class="uc_logout"><a href="http://club2011.auto.163.com/board/help.html">帮助</a></span>
        </div>
    </div>
</div>

<div class="uc_error_wrap">
    <div class="uc_error">
        <div class="uc_error_msg">对不起<br />您访问的页面不存在</div>
        <div class="uc_error_btn">
            <a href="javascript:history.go(-1);" class="uc_error_back">返回上一页</a>
            <a href="http://club.auto.163.com/" class="uc_error_home">去论坛首页</a>
        </div>
    </div>
</div>
<script type="text/javascript">
var seajsMain = '/default/js/ui/error';
</script>
<!-- 带版本号的生产环境 -->
<script src="http://img2.cache.netease.com/auto/projects/club/v1.1/default/js/modules/sea.js" type="text/javascript"></script>
<script type="text/javascript">seajs.use('http://img2.cache.netease.com/auto/projects/club/v1.1' + seajsMain + '-v1.7.7');</script>
<div class="foot">
  <div id="feedback"><a href="http://t.163.com/zt/feedback" target="_blank">意见反馈</a></div>
  <a href="http://corp.163.com/" target="_blank">About NetEase</a> - <a href="http://gb.corp.163.com/gb/about/overview.html" target="_blank">公司简介</a> - <a href="http://gb.corp.163.com/gb/contactus.html" target="_blank">联系方法</a> - <a href="http://corp.163.com/gb/job/job.html" target="_blank">招聘信息</a> - <a href="http://help.163.com/" target="_blank">客户服务</a> - <a href="http://gb.corp.163.com/gb/legal.html" target="_blank">相关法律</a> - <a href="http://emarketing.biz.163.com/" target="_blank">网络营销</a> - <a href="http://sitemap.163.com/" target="_blank">网站地图</a>
  <br />网易公司版权所有<br />
  <span class="cRed">&copy;1997-2013</span>
</div>
</div>
</div>
<noscript><img src="http://163.wrating.com/a.gif?c=860010-0508010000" width="1" height="1"/></noscript>
<script type="text/javascript">
(function(){
var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
//WRating
var stat1 = document.createElement('script');
stat1.src = "http://img6.cache.netease.com/common/script/wrating.js";
head.insertBefore(stat1, head.firstChild);
stat1.onload = stat1.onreadystatechange = function(){
    if(!this.readyState || this.readyState == "loaded" || this.readyState == "complete"){
        vjAcc="860010-0508010000";
        wrUrl="http://163.wrating.com/";
        if (vjValidateTrack()) {
            var A = wrUrl + "a.gif" + vjGetTrackImgUrl("");
            var img = new Image();
            img.src = A;
            vjSurveyCheck();
        }
        this.onreadystatechange = null;
    }
};
//NetEase Analytics
var stat2 = document.createElement('script');
stat2.src = "http://analytics.163.com/ntes.js";
head.insertBefore(stat2, head.firstChild);
stat2.onload = stat2.onreadystatechange = function(){
    if(!this.readyState || this.readyState == "loaded" || this.readyState == "complete"){
        _ntes_nacc = "auto"; //站点ID。
        neteaseTracker();
        this.onreadystatechange = null;
    }
};
})();
</script>