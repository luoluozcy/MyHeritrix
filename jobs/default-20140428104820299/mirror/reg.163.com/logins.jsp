











 





































		

	
		
		 


	



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=7" />
<meta name="keywords" content="网易通行证" />
<meta name="description" content="网易通行证" />
<title>网易通行证 &gt; 用户验证</title>
<base target="_blank" />
<link href="/css/style_login_err.css?v=20110503" rel="stylesheet" type="text/css" />
<link href="/css/passport.css?v=20110630" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="/js/prototype.js"></script>
<script type="text/javascript" src="/js/form.js?v=20090904"></script>
<script type="text/javascript" src="/js/common.js?v=20100909"></script>
<script language="JavaScript" src="/js/boxover.js"></script>
<script language="JavaScript" src="/js/passport.js?v=20110628"></script>
<script>
	function checkData1(){
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
</script>

<style type="text/css">
#yzm_text .yzm_text{font-weight:normal;color:#999}

.lock_popo{border:1px solid #d6d6d6;font-size:12px;padding:4px;line-height:16px;position:absolute;top:16px;left:155px;background-color:#ffffd6;width:196px;color:#000;display:none; box-shadow:1px 1px 1px #a6a6a6}
</style>

</head>
<body>
<div id="main_wrap">

  <div id="top">
    <div class="logo"><a href="http://reg.163.com/" target="_self"><img src="/img/newindex/textlogo.gif" width="134" height="26" /></a></div>
    <div class="top_tit"></div>
    <div class="top_link"><a href="http://www.163.com/" target="_blank">网易首页</a> | <a href="http://help.163.com/special/sp/urs_index.html" target="_blank">帮助</a></div>
    <div class="clr"></div>
  </div>
 
  
  <div id="list_div">
  
    <div class="errText">
	 <h2 style="padding-top: 12px;"><b>请按如下提示操作：</b></h2>
        <div class="leftText">
          <dl>
          <dt>请检查<span class="t_bc2931">邮箱后缀是否正确</span>，如：@vip.163.com/@126.com/等。</dt>
          <dt>请检查<span class="t_bc2931">输入法是否正确</span>，是否锁定了键盘的大写键。</dt>
          <dt>您可以通过帐号安全信息<a style="text-decoration: underline;" href="http://reg.163.com/RecoverPassword.shtml">找回密码</a>。如果帐号可能被盗，建议<a style="text-decoration: underline;" href="http://reg.163.com/lockuser/LockUserByPingma_0.jsp">锁定帐号</a>，以减少损失。</dt>
         <dt>如仍有问题，您可以查阅<a style="text-decoration: underline;" href="http://help.163.com/special/sp/urs_index.html?b67bbc1">通行证帮助</a>。</dt>
          <dt>如您同时使用网易VIP邮箱（vip.126.com|vip.163.com|vip.188.com）高端邮箱，建议绑定该邮箱<a style="text-decoration: underline;" href="http://mimg.vip.163.com/hd/090810tequan/tqhd.htm?from=urs">享受特权服务</a>。</dt>
          <dt>如果您是手机号码邮箱用户，您手机换号了，很可能是您的手机号码邮箱已经失效了。您可以使用您的主帐号来登录。<a style="text-decoration: underline;" href="http://reg.163.com/mobilealias/findBindHistoryIndex.do">查询主帐号</a></dt>
          
        </dl>     
      </div>
	  <div class="clear"></div>
    </div>
	
  </div>
  <div id="logo_div" style="background-image:none;">
    <div id="inner_div" style="height:auto">
      <div id="logoBox" style="height:auto;zoom:1">
        <div class="tit"></div>
        
        <div class="info" id="eHint">请输入正确的用户名！&nbsp;</div>
        
		 <form id="fLogin" name="fLogin" method="post" action="https://reg.163.com/logins.jsp" autocomplete="off" onsubmit="return checkData1()" target="_self" >
		
		 <input type=hidden name=url value="" />
	      <input type=hidden name=product value="" />
	      <input type=hidden name=savelogin value="" />
	      <input type=hidden name=outfoxer value="" />
	      <input type=hidden name=domains value="" />
	      <input type=hidden name=syscheckcode value="&#98&#97&#54&#50&#48&#51&#56&#50&#57&#48&#49&#102&#52&#97&#55&#54&#101&#98&#97&#57&#48&#55&#50&#101&#55&#102&#97&#53&#50&#48&#50&#54&#97&#98&#49&#52&#53&#101&#99&#99" />
		 
		 
        <table  class="cnt">
          <tr>
            <th>帐&nbsp;&nbsp;号：</th>
            <td><div class="loginUserInput suggest_box" id="useremail_box"><input autocomplete="off" id="username" name="username" type="text" value="" class="ipt"  style="width:165px" /></div></td>
          </tr>
          <tr>
            <th>密&nbsp;&nbsp;码：</th>
            <td><input id="password" name="password" maxlength=20 type="password" class="ipt" /></td>
          </tr>
          
          <tr>
            <th>&nbsp;</th>
            <td valign="middle"><input name="Submit" type="submit"  class="btn" value="" id="loginBtn"  align="middle"/>
              <a class="txt" href="http://reg.163.com/RecoverPassword.shtml" target="_blank">忘记密码？</a></td>
          </tr>
        </table>
		</form>
        <div class="cnt2"> 没有网易通行证？<br />
          <a href="http://reg.163.com/reg/reg.jsp?product=urs" target="_blank"><b>马上注册一个</b></a></div>
      </div>
      <div class="tit2"></div>
      <ul class="cnt3">
        <li><a href="http://reg.163.com/otp/controller/index.jsp" target="_blank" title="body=[绑定将军令后，您登录游戏、修改密码等操作会受到将军令的保护。]"><img src="/img/newindex/i1.gif"  align="absmiddle" />将军令</a></li>
          <li class="w1"><a href="http://reg.163.com/mibao/mpp/zht.jsp" target="_blank" title="body=[手机直接绑定帐号保护！登录解锁即可，无需额外输入。]"><img src="/img/newindex/i2.gif"  align="absmiddle" />帐号通</a></li>
        <li><a href="http://reg.163.com/mibao/controller/ppc/index.jsp"  target="_blank" title="body=[电子密保卡即网易密保卡电子版，可以通过页面和手机免费获取。]"><img src="/img/newindex/i3.gif"  align="absmiddle" />电子密保卡(免费)</a></li>
        <li  class="w1"><a href="http://reg.163.com/mibao/controller/phone/index.jsp" target="_blank" title="body=[绑定电话密保后，您修改密码、游戏物品解锁等重要操作会受到电话密保的保护。]"><img src="/img/newindex/i4.gif"  align="absmiddle" />电话密保</a></li>
        <li><a href="http://reg.163.com/mibao/controller/ppc/index.jsp" target="_blank" title="body=[实体密保卡即网易密码保护卡，绑定密保卡后，您登录游戏、修改密码等操作会受到密保卡的保护。]"><img src="/img/newindex/i5.gif"  align="absmiddle" />实体密保卡</a></li>
        <li  class="w1"><a href="http://reg.163.com/lockuser/LockUserByPingma_0.jsp" target="_blank" title="body=[发现帐号被盗用，可以锁定帐号。帐号在锁定期间将无法登录，以减少您的损失。]"><img src="/img/newindex/i6.gif"  align="absmiddle" />锁定帐号</a></li>
      </ul>
    </div>
  </div>

  <div id="footer"><a href="http://corp.163.com/eng/about/overview.html" target="_blank" >About   NetEase</a> - <a href="http://gb.corp.163.com/gb/about/overview.html" target="_blank" >公司简介</a> - <a href="http://gb.corp.163.com/gb/contactus.html" target="_blank" >联系方法</a> - <a href="http://corp.163.com/gb/job/job.html"  target="_blank">招聘信息</a> - <a href="http://help.163.com/" target="_blank" >客户服务</a> - <a href="http://gb.corp.163.com/gb/legal.html" target="_blank" >相关法律</a> - <a href="http://emarketing.biz.163.com/"  target="_blank">网络营销</a><br />
    网易公司版权所有 &copy;1997-2014 </div>

</div>


	   <script type="text/javascript">
		window.setTimeout("document.getElementById('username').focus();", 50)  ;
		window.setTimeout("document.getElementById('username').value = document.getElementById('username').value ;", 51)  ;
	   </script>


<script>
	Passport.bind(document.getElementById("username"));
	
	
	var username = document.getElementById("username");
	if(username.value.indexOf('@') == -1)
		username.value = (username.value + '@163.com');		


	function getNewImage(){	 
	   var datetime = new Date().getTime(); 
	   $('randomNoImg').src = 'https://reg.163.com/services/getimg?id=ba620382901f4a76eba9072e7fa52026ab145ecc&v=' + datetime;
	}
	function enterCheck(obj){   
	    obj.value="";		
		obj.className="ipt";
		obj.onclick="";
	}
</script>

</body>


</html>

	
	
	

