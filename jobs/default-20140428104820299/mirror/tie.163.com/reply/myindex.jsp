<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>我的网易跟贴</title>



			<link rel="stylesheet" type="text/css" href="http://img1.cache.netease.com/tie/static/20140425/tie.css" charset="GBK"/>
	<link rel="stylesheet" type="text/css" href="http://img1.cache.netease.com/tie/static/20140425/userpage.css" charset="GBK"/>
	


</head>

<body>
<div class="wrapper header">
	<div class="inner">
        <h2><a href="http://tie.163.com/plaza/recommend.html" target="_blank" title="网易跟贴"><img src="http://img5.cache.netease.com/tie/images/mypage_logo.png" alt="网易" /></a></h2>
        <div class="position"><a href="http://www.163.com/" target="_blank" title="网易">网易</a>
         &gt; <a href="http://bbs.163.com/" target="_blank" title="网易论坛">网易论坛</a> &gt; 
         <a href="http://bbs.news.163.com/" target="_blank" title="新闻论坛">新闻论坛</a>

		</div>
       <!-- <div class="topNav">
        	<p class="status-login"><a href="http://tie.163.com/plaza/topVote.html?from=topNav" class="square-link js-statistics" statistics="action=click;value=toSquareFromHeader;" target="_blank">跟贴广场 <sup class="icon-news"></sup></a> | <a href="" title="登录" class="login-win">登录</a> | <a class="link-register" href="http://reg.163.com/reg0.shtml?url=">注册网易通行证</a></p>
            <!-- 
                                    
        	<p class="status-logon"><a href="http://tie.163.com/plaza/topVote.html?from=topNav" class="square-link js-statistics" statistics="action=click;value=toSquareFromHeader;" target="_blank">跟贴广场 <sup class="icon-news"></sup></a> | <a href="#" class="toMyPage js-statistics" statistics="action=click;value=2;" target="_blank"><em class="icon-tie"></em>我的网易跟贴<span class="status-tie-news cDRed"></span></a> | <a href="http://t.163.com/?f=gentietopweibo" class="toMyTinyBlog js-statistics" statistics="action=click;value=3;" target="_blank"><em class="icon-tinyblog"></em>我的网易微博<span class="status-tblog-news cDRed"></span></a></p>
        </div>-->
    </div>
</div><div class="myPageTop wrapper">
  <div class="nav">
        <p class="status-login">
        <a href="http://tie.163.com/plaza/recommend.html?from=myTopNav" class="square-link">跟贴广场</a> |
		<a href="http://t.163.com/zt/pub/wygtyjfk?f=gentiefeedback" target="_blank">用户反馈</a> | <a href="http://news.163.com/special/00013GHE/commenthelp.html" target="_blank">帮助</a> 
		</p>

        		<p class="status-logon">
		<a href="http://tie.163.com/newplaza/recommend.html?from=myTopNav" class="square-link">跟贴广场</a> |
		<a href="＃" class="toMyPage">我的跟贴</a> |
		<a href="http://tie.163.com/setting/share/?from=myTopNav">个人设置</a> |	
		 <a href="http://t.163.com/zt/pub/wygtyjfk?f=gentiefeedback" target="_blank">用户反馈</a> | <a href="http://news.163.com/special/00013GHE/commenthelp.html" target="_blank">帮助</a> 
		</p>
	</div>
	<form action="/reply/listSearch.jsp" class="status-logon" id="userSearch" method="get" >
    	<input type="text" class="text" name="nickname" /><input type="submit" class="submit" value="" />
    </form>
</div>
<div class="wrapper">
    <div class="mainBg">
    	
        <div class="main">
            <div class="titleBar">
                <div class="text"><strong>我的首页</strong> (我关注网友的“收藏”“发贴”都在这)</div> 
                <ul class="pages">
    <li><span class="beginEnd">上一页</span></li>
    <li><span class="current">1</span></li>
    <li><span class="beginEnd">下一页</span></li>
</ul>            </div>
            
            <div id="tieData" class="replies actList"></div>
            
            <div class="footerPages clearFix"> 
				<ul class="pages">
    <li><span class="beginEnd">上一页</span></li>
    <li><span class="current">1</span></li>
    <li><span class="beginEnd">下一页</span></li>
</ul>            </div>
        </div>
        
    	<div class="sidebar"> 
        	<!--<div class="aboutMe">
	<div class="name clearFix">
		<img src="/images/noface35_35.png " /><a target="_self" href="http://tie.163.com/reply/myaction.jsp?action=reply&username=${userinfo.userid}">${userinfo.userid}</a>
	</div>
	<div class="follow">
		</div>
		<ul class="relations clearFix">
		<li class="first"><a href="/reply/listFocus.jsp?focusType=myFocus&username=${userinfo.userid}" class="js-statistics" statistics="action=click;value=16;"><em class="focusNumber">0</em>关注</a></li>
		<li><a href="/reply/listFocus.jsp?focusType=focusMe&username=${userinfo.userid}" class="js-statistics" statistics="action=click;value=17;"><em class="focusMeNumber">0</em>被关注</a></li>
		<li class="last"><a href="/reply/myaction.jsp?action=reply&username=${userinfo.userid}"><em>${userinfo.replycount}</em>跟贴</a></li>
	</ul>
</div>-->
<div class="aboutme-nav">	
	<div class="nav-inner" style="margin-bottom:8px;">
		<div class="aboutme-header"><a class="logon-out logout" href="#">退出</a> 我的信息 </div>
		<div class="aboutme-main">
			<p class="aboutme-info clearfix ">
				<a href=" http://tie.163.com/setting/avatar/ " class="info-img" ><img class="avatar" src="/images/noface35_35.png "/></a><a href="http://tie.163.com/reply/myaction.jsp?action=reply&username=${userinfo.userid}" class="info-name" >${userinfo.userid}</a>
							</p>
			<p class="aboutme-otherInfo"><span class="mypagel">关注：<a href="/reply/listFocus.jsp?focusType=myFocus&username=${userinfo.userid}" class="js-statistics" statistics="action=click;value=16;" ><em class="focusNumber">0</em></a></span>|<span class="mypager">被关注：<a href="/reply/listFocus.jsp?focusType=focusMe&username=${userinfo.userid}" class="js-statistics" statistics="action=click;value=17;"><em class="focusMeNumber">0</em></a></span></p>
			<p class="aboutme-otherInfo"><span class="mypagel">跟贴数：<a href="/reply/myaction.jsp?action=reply&username=${userinfo.userid}" class="js-statistics" statistics="action=click;value=tiecountlink;" ><em>${userinfo.replycount}</em></a></span>|<span class="mypager tweetCount">微博数：<em>0</em></span></p>
		</div>
	</div>
</div>            			<ul class="categories">
                <li class="current"><span>我的首页</span></li>
                <li><a href="/reply/myaction.jsp?action=store&username=${myuserid}">我的收藏</a></li>
                <li><a href="/reply/myaction.jsp?action=reply&username=${myuserid}">我的跟贴</a></li>
            </ul>
			        </div>
        
    </div>
</div>
 
<div id="repostWin" class="win borderShade">
	<div class="title">
    	<span class="text">复制收藏</span>
        <a href="#" class="close">关闭窗口</a>
    </div>
    <div class="body">    	
        <p class="tips">
        	<span class="success"><span class="icon-success"></span>复制成功，按CTRL+V发送给好友、论坛或博客。</span>
            <span class="failed"><span class="icon-failed"></span>浏览器限制，请复制链接和标题给好友、论坛或博客。</span>
        </p>
        <p class="replyCopy">
            <span class="docTitle"></span><br />
            <a href="" class="repostUrl" target="_blank"></a>
        </p>
        <div class="center"><a class="bigbtn close" href="javascript:void(0);" >确 定</a></div>
    </div>
    <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c6"></span><span class="c7"></span><span class="c8"></span><span class="c9"></span>
</div>

<!-- 简单提示，没有栏目标题 -->
<div id="tipsWin" class="win win-small borderShade">
    <span class="noTitle"><a href="#" class="close">关闭窗口</a></span>
    <div class="body" style="padding-top:14px;padding-bottom:14px;text-align:center;">
        <div class="tips" style="display:inline-block;*display:inline;zoom:1;" >
			<span class="icon-success success"></span>
			<span class="icon-failed failed"></span>
			<span class="msg"></span>
			<p class="autoClose" style="white-space: nowrap;"></p>
			<p class="links"></p>
		</div>
    </div>
    <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c6"></span><span class="c7"></span><span class="c8"></span><span class="c9"></span>
</div>

<!-- 向上向下箭头使用 -->
<div id="tinyTipsWin" class="tinyTipsWin">
	<p>
		<span class="icon-success success"></span>
		<span class="icon-failed failed"></span>
		<span class="message"></span>
	</p>
    <span class="arrow"></span>
</div>

<div id="captchaWin" class="win borderShade">
	<div class="title">
    	<span class="text">安全提示</span>
        <a href="#" class="close">关闭窗口</a>
    </div>
    <div class="body">
    	<form>
    	<div class="col-aB">
    		<div class="col-aB-staus"><span class="icon-failed failed"></span></div>
    		<div class="col-aB-content f14px">
    			<p>您的帐号存在异常操作，为保证您的帐号安全，请输入验证码进行下一步操作。</p>
    			<p style="margin:15px 0 0;">
    				验证码：<input class="captcha-input" size="6" type="text" name="captcha" />
    				<span class="captcha-pic"></span>
    				<span class="f12px"><a class="captcha-change cBlue" href="#">看不清，换一张</a></span>
    			</p>
    			<p class="captcha-tips cRed f12px" style="margin:6px 0 6px 55px">&nbsp;</p>
    		</div>
    	</div>
    	<div class="fLeft captcha-btn" style="padding-left:100px">
			<a href="javascript:void(0);" class="bigbtn js-confirm">确 定</a>
    		<span class="icon-loading js-loading"></span>
			<a href="javascript:void(0);" class="bigbtn js-cannel close ">取 消</a>
    	</div>
    	</form>
    </div>
    <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c6"></span><span class="c7"></span><span class="c8"></span><span class="c9"></span>
</div>

<div id="reportPanel" class="replyModule">
	<a class="replyModule-close close">关闭</a><span class="replyModule-arrow"></span>
    <div class="postBody" style="margin:0 16px;">
    	<form name="reportForm" class="reportForm autoSubmitForm" method="post" action="http://tie.163.com/reply/report.jsp" target="reportIframe"></form>
        <div class="template" style="display:none;"><!--
            <p style="line-height:33px;">您举报的是 <strong><a href="<#=reportUserLink#>" class="reportUser" target="_blank" ><#=nickname#></a></strong> 的跟贴</p>
            <p><span class="reportBody"><#=tieBody#></span></p>
            <p>
            	<label class="reportType"><input type="radio" name="reportType" value="诈骗、骚扰、广告信息" />诈骗、骚扰、广告信息</label>
            	<label class="reportType"><input type="radio" name="reportType" value="色情、低俗、暴力信息" />色情、低俗、暴力信息</label>
            	<label class="reportType" style="width:142px;"><input type="radio" name="reportType" value="违法有害内容" />违法有害内容</label>
            	<label class="reportType" style="width:130px;"><input type="radio" name="reportType" value="其他理由" />其他理由</label>
            </p>
			<input type="hidden" name="content" value="<#=tieBody#>" />
            <input type="hidden" name="reportUserID" value="<#=reportUserID#>" />
            <input type="hidden" name="userID" value="<#=userID#>" />
            <input type="hidden" name="url" value="<#=url#>" />
            <input type="hidden" name="postId" value="<#=postId#>" />
            <input type="hidden" name="boardId" value="<#=boardId#>" />
            <input type="hidden" name="threadId" value="<#=threadId#>" />
            <input type="hidden" name="postTime" value="<#=postTime#>" />
            <input type="hidden" name="title" value="<#=title#>" />
            <div class="reportOperation">
				<div style="float:right;"><span class="js-tips cRed" style="display:none;text-align:right;"></span><a href="#" class="cBlue close">取消</a>&nbsp;&nbsp;<a href="javascript:void(0);" class="mediumbtn js-toPost forksubmitbtn" >马上举报</a><input type="submit" class="submitbtn hiddenbtn" value=""/><span style="height:15px;" class="icon-loading js-loading"></span></div>
				<label><input type="checkbox" name="addBlock" />同时将该用户拉入黑名单</label><span class="cGray">(您将不会收到来自黑名单用户的评论提醒)</span>
			</div>                       
           <iframe name="reportIframe" id="reportIframe" style="display:none;"></iframe>
        --></div>
    </div>
</div>

<div id="loginWin" class="win borderShade">
	<div class="title">
    	<span class="text"></span>
        <a href="#" class="close">关闭窗口</a>
    </div>
    <div class="body">
        <form id="loginForm" class="loginForm autoSubmitForm" action="https://reg.163.com/logins.jsp" method="post">
            <p><label>用户名：　<input type="text" name="username" valueholder="如：example@163.com" class="text" /></label></p>
            <p><label>密　码：　<input type="password" name="password" class="text" /></label></p>
            <p class="autoLogin">
            	<label><input type="checkbox" name="savelogin" checked="checked" value="1" /><span>自动登录</span></label>
                    <span class="tipsUpArrow">
                        <span class="tipsUpArrow-body">为了您的信息安全，请不要网吧或<br />公用电脑上使用此功能。</span>
                        <span class="tipsUpArrow-arrow"></span>
                    </span>
            	<a href="http://reg.163.com/RecoverPasswd1.shtml" target="_blank">忘记密码？</a>
            </p>
            <p class="fCenter">
            	<a href="javascript:void(0);"  class="bigbtn forksubmitbtn">登 录</a>
				<input type="submit" value="" class="hiddenbtn submitbtn" />
				<a href="http://reg.163.com/reg0.shtml" target="_blank">注册通行证</a></p>
			<input name="product" value="content" type="hidden" />
            <input name="url" value="" type="hidden" />
        </form>
    </div>
    <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c6"></span><span class="c7"></span><span class="c8"></span><span class="c9"></span>
</div>

<div id="nicknameWin" class="win win-small borderShade">
	<div class="title">
    	<span class="text">修改昵称</span>
        <a href="#" class="close">关闭窗口</a>
    </div>
    <div class="body">
        <form action="/reply/alterNickname.jsp" method="post">
            <input id="newNickname" name="newNickname" type="text" class="text" maxlength="12" /><a href="javascript:void(0);" class="bigbtn" >提 交</a>
            <label id="nicknameTips"></label>
        </form>
    </div>
    <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c6"></span><span class="c7"></span><span class="c8"></span><span class="c9"></span>
</div>

<div id="tinyblogTips" class="tipsUpArrow">
    <div class="tipsUpArrow-body">
        <span class="status-login">发表跟贴可同步到微博啦，登录立即体验！</span>
        <span class="status-logon">勾选后，如果您还没有开通微博，系统将自动为您激活。</span>
    </div>
    <span class="tipsUpArrow-arrow"></span>
</div>
<div id="myNewTieTips" class="tipsUpArrow">
       <div class="tipsUpArrow-body">收到<span class="status-tie-news-tips"></span>条新评论</div>
    <span class="tipsUpArrow-arrow tipsUpArrow-arrow-center"></span>
</div>
<div id="deliciousTieTips" class="tipsUpArrow">
    <div class="tipsUpArrow-body"><span class="icon-airing"></span>新功能<span class="cDRed">精彩跟贴</span>上线，点击查看！</div>
    <span class="tipsUpArrow-close close">关闭</span><span class="tipsUpArrow-arrow tipsUpArrow-arrow-center"></span>
</div>
<div id="squareTips" class="tipsUpArrow">
    <div class="tipsUpArrow-body">更多精彩跟贴汇聚在此，点击查看！</div>
    <span class="tipsUpArrow-close close">关闭</span><span class="tipsUpArrow-arrow tipsUpArrow-arrow-center"></span>
</div>
<div id="weiboTips" class="tipsUpArrow">
    <div class="tipsUpArrow-body" style="padding:0px;"><img src="/images/weibo_why.png" width=434 height=168/></div>
    <span class="tipsUpArrow-arrow tipsUpArrow-arrow" style="left:120px;"></span>
</div>

<!--转发网易微博弹窗-->
<div id="forwardWin" class="win borderShade">
	<div class="title">
    	<span class="text">一键分享</span>
        <a href="#" class="close">关闭窗口</a>
    </div>
	<form id="forwardForm" class="forwardForm">	
	   	<div class="bd">
	   		<div class="mainbox">
	   			<div class="top">
	   				<span class="label">再添些你的观点：</span><span class="tip">还可以输<span class="limit">150</span>字</span>
	   			</div>	
				<div class="center ">
					<textarea id="forwardBox" name="content"></textarea>
				</div>				
	   		</div>
			<div class="tagbox">
				<div  class="maintags">
					<div><span class="label">加个标签，分享我的态度：</span><a class="why">为什么加标签？</a>
					</div>					
				</div>				
				<div class="tagsource">
					<ul><li>网易跟贴局</li><li>保持队形</li><li>二楼定律</li><li>跟贴诗人</li><li>我爱跟贴</li></ul>	
				</div>
				<div class="tagsource">
					<ul><li>可乐跟贴</li><li>有才跟贴</li><li>火星网友</li><li>局长小李</li><li>精彩跟贴</li></ul>	
				</div>
			</div>
			<div class="shareSite">
				<span>分享到: </span><ul></ul><a href="http://tie.163.com/setting/share" class="shareConfig" target="_blank">+添加网站</a>
			</div>
			<input type="hidden" name="title" />
			<input type="hidden" name="url" />
			<input type="hidden" name="boardid" />
			<input type="hidden" name="postid" />
	   	</div>
		<div class="ft clearfix">
			<div class="btnwrapper" style="float:right;">
				<span class="shareSiteTips"></span>
				<a class="common-bg btn" id="sendForwardBtn" href="javascript:void(0);"><em class="common-bg">分&nbsp;&nbsp;享</em></a>
			</div>			
		</div>
	</form>
    <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c6"></span><span class="c7"></span><span class="c8"></span><span class="c9"></span>
</div>
<!--转发微博成功后-->
<div id="forwardReturnWin" class="win win-small borderShade">
    <span class="noTitle"><a href="#" class="close">关闭窗口</a></span>
    <div class="body" style="padding-left:23px;padding-right:23px;">
        <div class="tips">
			<span class="icon-success success"></span>
			<span class="msg">分享成功</span>
			<div style="display:inline-block;*display:inline;zoom:1;">
				<p class="desc">
					<span class="expireSite"></span>帐号绑定已经过期
				</p>
				<p class="desc">
					请<a href="http://tie.163.com/setting/share" target="_blank">重新绑定>></a>
				</p>
			</div>
		</div>
    </div>
    <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c6"></span><span class="c7"></span><span class="c8"></span><span class="c9"></span>
</div>
<iframe name="loginFrame" id="loginFrame" style="display:none;"></iframe>
<span id="shadeWin"></span>
<!--发贴后弹窗-->
<div id="sendReturnWin" class="win borderShade">
    <div class="title">
        <span class="text">发布成功</span>
        <a href="#" class="close">关闭窗口</a>
    </div>
    <div class="body">
        <p style="font-size: 14px;line-height: 18px;margin-bottom: 40px;margin-top: 20px;text-indent: 2em;">由于您的跟贴非常有才，现邀请您担任网易特约评论员，请点击了解您的权利和义务。</p>
        <div class="btnwrapper" style="text-align: center;">
            <a class="common-bg btn" href="http://tie.163.com/gt/special/aprilfool/" target="_blank"><em class="common-bg">评论员须知</em></a>
        </div>
    </div>
    <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c6"></span><span class="c7"></span><span class="c8"></span><span class="c9"></span>
</div><div id="returnTop" class="returnTop">
	<span class="c1"></span><span class="c2"></span><span class="c3"></span>
	<a href="javascript:;" class="js-statistics" statistics="action=click;value=returnTop;"><em></em>返回顶部</a>
	<span class="c3"></span><span class="c2"></span><span class="c4"></span>
</div>
<div class="wrapper bottomNav">	
</div>
<div class="wrapper footer">
	<p><a href="http://corp.163.com/">About NetEase</a> - <a href="http://gb.corp.163.com/gb/about/overview.html">公司简介</a> - <a href="http://gb.corp.163.com/gb/contactus.html">联系方法</a> - <a href="http://corp.163.com/gb/job/job.html">招聘信息</a> - <a href="http://gb.corp.163.com/gb/cs.html">客户服务</a> - <a href="http://gb.corp.163.com/gb/legal.html">相关法律</a> - <a href="http://emarketing.biz.163.com/">网络营销</a> - <a href="http://help.163.com/">帮助中心</a></p>
    <p>网易公司版权所有<br /><em>&copy;1997-2014</em></p>
</div>



        <script type="text/javascript" src="http://img1.cache.netease.com/tie/static/20140425/tie.js" charset="GBK"></script>
	<script type="text/javascript" src="http://img1.cache.netease.com/tie/static/20140425/userpage.js" charset="GBK"></script>
    



<script type="text/javascript">//<![CDATA[
var tiePage = new ns_Tie.MyIndexPage('');
tiePage.showPage(1);
//]]></script>
<!-- START WRating v1.0 -->
<script type="text/javascript" src="http://163.wrating.com/a1.js"></script>
<script type="text/javascript">//<![CDATA[
var vjAcc = "860010-0502010100", wrUrl = "http://163.wrating.com/";
vjTrack();
//]]></script>
<noscript><img src="http://163.wrating.com/a.gif?c=860010-0502010100" style="width:1;height:1;" alt="wrating" /></noscript>
<!-- END WRating v1.0 -->
<script type="text/javascript" src="http://analytics.163.com/ntes.js"></script>
<script type="text/javascript">//<![CDATA[
var reply_host = document.location.host.replace("comment.", "").replace(".163.com", ""),
	_ntes_nacc = reply_host.substring(8, reply_host.length - 8);

if ("v" == _ntes_nacc) {
	_ntes_nacc = '163v';
} else if ("home" == _ntes_nacc || /^\w+\.house$/.test(_ntes_nacc)) {
	_ntes_nacc = 'house';
} else if ("money" == _ntes_nacc || /^\w+\.money$/.test(_ntes_nacc)) {
	_ntes_nacc = 'stock';
}

neteaseTracker();
//]]></script></body>
</html>