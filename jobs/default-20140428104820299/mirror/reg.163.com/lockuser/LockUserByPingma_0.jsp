<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网易通行证</title>
<link rel="stylesheet" type="text/css" href="/gaiban/css/master.css?v=20110112" />
<link href="/css/passport.css?v=20110402" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript" src="/js/passport.js"></script>
<script type="text/javascript" language="javascript" src="/js/prototype.js"></script>
<script type="text/javascript" language="javascript" src="/js/common.js?v=20100909"></script>
<script type="text/javascript" language="javascript" src="/gaiban/js/checkform.js"></script>

<script type="text/javascript">
<!--

function checkUsername(){
    var form = document.getElementById("form");
    var hasErr = false;
    if(form.username){
      if(!/^[a-zA-Z\d\.\@\-_]+$/.test(form.username.value)){
        hasErr = true;
        document.getElementById("errUsername").innerHTML = "请输入正确的通行证帐号";
		document.getElementById("errUsername").style.display = "inline-block";
      }else{
        document.getElementById("errUsername").style.display = "none";
      }
    }
    return hasErr;
}


function checkdata(form){

	if(form.username && checkUsername()){
	    form.username.focus();
	    return false;
	}
	
	
	
	if(form.radomPass && checkRandomCode('form','usercheckcode','errUsercheckcode')){
	    form.radomPass.focus();
	    return false;
	}

}

// -->
</script>

</head>
<body>
<!--头部 开始-->
<div class="header">
  <div class="header_tool"><br />
    <a href="http://www.163.com/" target="_blank">网易首页</a> <a href="http://survey2.163.com/html/passport_feedback/paper.html" target="_blank">反馈意见</a> <a href="http://help.163.com/special/sp/urs_index.html" target="_blank">帮助</a></div>
  <a href="http://reg.163.com/"><img src="/gaiban/images/logo.png" alt="网易通行证" width="274" height="36" border="0" class="logo" title="网易通行证"/></a> </div>
<ul class="menu">

  <li><a  class="m1" href="http://reg.163.com/"><span>我的通行证</span></a></li>
  <li><a class="m2" href="/account/accountInfo.jsp"><span>帐号管理</span></a></li>
  <li><a  class="m3" href="/mibao/controller/goIndex.jsp"><span>密保管理</span></a></li>
  <li class="end"></li>
</ul>
<!--头部 结束--><!--主体 开始-->
<div class="main">
  <div class="main_top"></div>
  <div class="main_con1">
  <h2 class="lock_pass_title">锁定网易通行证帐号</h2>
  	<div class=""  style="padding:35px 0 35px 315px; position:relative;">
    <form name="form" id="form" method="post" action="https://reg.163.com/lockuser/LockUserByPingma_1.do"  onsubmit="return checkdata(this);" autocomplete="off">
        <ul class="main_form">
          <li>
            <div class="fm_left w_85">通行证帐号：</div>
            <div class="fm_right">
              <input type="text" id="username" name="username" class="input" style="width:160px" /><span class="err" id="errUsername"></span>
            </div>
          </li>
         <li>
           <div class="fm_left w_85">验证码：</div>
            <div class="fm_right">
              <input type="text" id="usercheckcode" name="radomPass" class="input" title="验证码" style="width:100px" value="" onblur="checkRandomCode('form','usercheckcode','errUsercheckcode')" /><span class="err" id="errUsercheckcode"></span>
              <input type=hidden id="syscheckcode" name="radomPassID" value="" />
              <div class="info p_t_5">不区分大小写，<a href="javascript:void(0)" onclick="fRefreshRandomImage()">换一张</a></div><div class="info p_t_5" id="checkcode"></div>
              <script type="text/javascript">//<![CDATA[
	              fRefreshRandomImage();
	          //]]></script>
            </div>
          </li>
          <li>
            <div class="fm_left w_85">&nbsp;</div>
            <div class="fm_right"> <span class="f_btn ">
              <input type="submit" value="确 定" class="r_btn w_85"/></span> <span class="f_btn "><input type="button" value="返 回" onclick="window.location.href='/UserLogin.shtml'" class="r_btn w_85"/></span>
			</div>
          </li>
       </ul>
    </form>
    <div class="clear"></div>
    
    <a href="/yixin/caipiaoact.do#from=urssd" style="text-decoration:none;" target="_blank"><img src="/images2/adv/yx2.gif" style="position:absolute; top:0; right:0; border:none;" /></a>
    
    </div> 
	<div class="mibao_con mibao_tishi">
	<div class="g_line"></div>
	 <span class="mibao_tishi_title">关于锁定网易通行证的说明：</span>
	 1.&nbsp;您每次锁定帐号的时间为24小时，超过锁定时间后帐号将自行解锁。<br />
	 2.&nbsp;在离系统自动解锁通行证剩余6小时内的情况下，您可以再次延长锁定时间，每次延长锁定后的时间为：在前一次锁定后剩余时间的基础上，再延长24小时即为此次延长锁定后的时间。（如：在剩余6小时的情况下操作延长锁定功能，此次延长时间成功后的锁定时间应为：6+24=30小时。）<br />
	 3.&nbsp;锁定成功后，如果你的帐号下有游戏人物，请用其它ID查看被锁定帐号的游戏人物是否在线，如果在线，请尽快与游戏客服联系处理。<br />
	 4.&nbsp;更多帮助说明，请点击-&gt;&gt;<a href="http://help.163.com/10/1018/15/6J9MPC3M00754INN.html" target=_blank>这里</a>。
	 </div>
  </div>
  <div class="clear"></div>  
  <div class="main_bottom1"></div>
</div>
<!--主体 结束-->
<!--版权 开始-->
<div class="footer"><a href="http://corp.163.com/eng/about/overview.html" target=_blank hasbox="2">About NetEase</a> - <a href="http://gb.corp.163.com/gb/about/overview.html" target=_blank >公司简介</a> - <a href="http://gb.corp.163.com/gb/contactus.html" target=_blank >联系方法</a> - <a href="http://corp.163.com/gb/job/job.html" target=_blank >招聘信息</a> - <a href="http://help.163.com/" target=_blank >客户服务</a> - <a href="http://gb.corp.163.com/gb/legal.html" target=_blank >相关法律</a> - <a href="http://emarketing.biz.163.com/" target=_blank >网络营销</a> <br />
    网易公司版权所有 &copy;1997-2014 </div>
<!--版权 结束-->
<script type="text/javascript">document.cookie = "URS_Analyze=1";</script>
<script type="text/javascript">
<!--
	Passport.bind(document.getElementById("username"));
// -->
</script>
</body>
</html>

