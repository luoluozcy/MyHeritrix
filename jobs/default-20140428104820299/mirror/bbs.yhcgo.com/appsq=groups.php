<!doctype html>
<html>
<head>
<meta charset="gbk" />
<title>提示信息 - Powered by phpwind</title>
<meta name="generator" content="phpwind 8.5" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<SCRIPT type="text/javascript" language="JavaScript" src="js/core/core.js"></SCRIPT>
<script type="text/javascript" language="JavaScript" src="js/pw_ajax.js"></script>
<link rel="stylesheet" type="text/css" href="images/pw_core.css?101128" media="all" /><!---->
<link rel="stylesheet" type="text/css" href="data/bbscache/wind_wind.css" />
<!---->
<!---->
<link rel="stylesheet" type="text/css" href="images/register/register.css?110120" media="all" />
<base id="headbase" href="http://bbs.yhcgo.com/" />
</head>
<body onKeyDown="try{keyCodes(event);}catch(e){}">
<div class="wrap">
	<div id="header">
		<div style="height:24px;"></div>
			 <div id="head" class="cc">
					<a href="http://bbs.yhcgo.com/"><img src="images/wind/logo.png" class="fl" title="phpwind" /></a>
			</div>
	</div>
	<div class="main-wrap">
		<div id="main">
			<div id="pw_content">
				<div class="p20">
					<div class="regTitle cc">
						<h5 class="s6"><b>提示信息</b></h5>
					</div>
					<div class="cc">						<div class="regForm-wrap">
							<div class="regForm">
<script language="JavaScript">
function showcustomquest(qid){
	getObj("customquest").style.display = qid==-1 ? '' : 'none';
}
</script>
								<div class="regIgnore" style="padding-bottom:20px;">
									<div class="f14 mb5">您没有登录或者您没有权限访问此页面，可能有如下几个原因</div>
									<ol>
										<li>1、您还没有登录或注册，暂时不能使用此功能!</li>
										<li>2、您还不是站点会员,请先登录站点</li>
									</ol>
								</div>
<form action="login.php?" method="post" name="login">
								<div style="padding-left:15px;">
									<dl>
										<dt><div style="height:26px;">
				<select name="lgt" onchange="document.login.pwuser.focus();" class="f14">

				<option value="0" SELECTED>用户名</option>

				<option value="1" >UID</option>

				<option value="2" >电子邮箱</option>

				</select>
										</div></dt>
										<dd class="ip"><div class=""><input class="input" type="text" tabindex="11" name="pwuser" /></div></dd>
									</dl>
									<dl class="cc">
										<dt>密　码</dt>
										<dd class="ip"><div><input class="input" type="password" tabindex="12" name="pwpwd" /></div></dd>
										<dd><div class="p5"><a href="sendpwd.php#breadCrumb" class="s4" target="_blank">找回密码</a></div></dd>
									</dl>
									<dl class="cc">
										<dt>安全问题</dt>
										<dd class="ip"><select name="question" class="f14" style="width:230px;margin-top:3px;" onchange="showcustomquest(this.value)" tabindex="13"><option value="0">无安全问题</option><option value="1">我爸爸的出生地</option><option value="2">我妈妈的出生地</option><option value="3">我的小学校名</option><option value="4">我的中学校名</option><option value="5">我最喜欢的运动</option><option value="6">我最喜欢的歌曲</option><option value="7">我最喜欢的电影</option><option value="8" >我最喜欢的颜色</option><option value="-1">自定义问题</option></select></dd>
									</dl>
									<dl class="cc" id="customquest" style="display:none">
										<dt>自定义问题</dt>
										<dd class="ip"><div><input type="text" name="customquest" class="input" tabindex="14" /></div></dd>
									</dl>
									<dl class="cc">
										<dt>您的答案</dt>
										<dd class="ip"><div><input type="text" name="answer" class="input" tabindex="15"></div></dd>
									</dl>									<dl class="cc">
										<dt>隐身登录</dt>
										<dd class="ip">
											<label class="mr10"><input name="hideid" type="radio" value="1" />开启</label>
											<label><input name="hideid" type="radio" value="0" checked tabindex="18" />关闭</label>
										</dd>
									</dl>

									<dl class="cc">
										<dt>&nbsp;</dt>
										<dd class="ip">
											<span class="btn"><span><button type="submit" tabindex="19">登录</button></span></span><input type="hidden" name="forward" value="" /><input type="hidden" name="jumpurl" value="http://bbs.yhcgo.com/apps.php?q=groups" /><input type="hidden" name="m" value="bbs" /><input type="hidden" name="step" value="2" /><input type="hidden" name="cktime" value="31536000" />
										</dd>
									</dl>
								</div>
</form>									
<script language="JavaScript">
document.login.pwuser.focus();
</script>
							</div>
						</div>
							<div class="regLogin f14">
								<div style="padding-left:20px;">
									<p class="mb5">还没有帐号？</p>
									<p style="padding-bottom:30px;"><span class="bt"><span><button type="button" onClick="location.href='register.php#breadCrumb';">注册一个</button></span></span></p>
									<p class="mb5"><a href="javascript:;" class="mr20 s4" onclick="javascript:history.go(-1);return false;" tabindex="20"><u>返回继续操作</u></a></p>
									<p>或者 <a id="showindex" tabindex="20" class="s4" href="http://bbs.yhcgo.com"><u>返回首页</u></a></p>
								</div>
							</div>

				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>