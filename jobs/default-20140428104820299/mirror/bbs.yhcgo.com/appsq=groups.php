<!doctype html>
<html>
<head>
<meta charset="gbk" />
<title>��ʾ��Ϣ - Powered by phpwind</title>
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
						<h5 class="s6"><b>��ʾ��Ϣ</b></h5>
					</div>
					<div class="cc">						<div class="regForm-wrap">
							<div class="regForm">
<script language="JavaScript">
function showcustomquest(qid){
	getObj("customquest").style.display = qid==-1 ? '' : 'none';
}
</script>
								<div class="regIgnore" style="padding-bottom:20px;">
									<div class="f14 mb5">��û�е�¼������û��Ȩ�޷��ʴ�ҳ�棬���������¼���ԭ��</div>
									<ol>
										<li>1������û�е�¼��ע�ᣬ��ʱ����ʹ�ô˹���!</li>
										<li>2����������վ���Ա,���ȵ�¼վ��</li>
									</ol>
								</div>
<form action="login.php?" method="post" name="login">
								<div style="padding-left:15px;">
									<dl>
										<dt><div style="height:26px;">
				<select name="lgt" onchange="document.login.pwuser.focus();" class="f14">

				<option value="0" SELECTED>�û���</option>

				<option value="1" >UID</option>

				<option value="2" >��������</option>

				</select>
										</div></dt>
										<dd class="ip"><div class=""><input class="input" type="text" tabindex="11" name="pwuser" /></div></dd>
									</dl>
									<dl class="cc">
										<dt>�ܡ���</dt>
										<dd class="ip"><div><input class="input" type="password" tabindex="12" name="pwpwd" /></div></dd>
										<dd><div class="p5"><a href="sendpwd.php#breadCrumb" class="s4" target="_blank">�һ�����</a></div></dd>
									</dl>
									<dl class="cc">
										<dt>��ȫ����</dt>
										<dd class="ip"><select name="question" class="f14" style="width:230px;margin-top:3px;" onchange="showcustomquest(this.value)" tabindex="13"><option value="0">�ް�ȫ����</option><option value="1">�Ұְֵĳ�����</option><option value="2">������ĳ�����</option><option value="3">�ҵ�СѧУ��</option><option value="4">�ҵ���ѧУ��</option><option value="5">����ϲ�����˶�</option><option value="6">����ϲ���ĸ���</option><option value="7">����ϲ���ĵ�Ӱ</option><option value="8" >����ϲ������ɫ</option><option value="-1">�Զ�������</option></select></dd>
									</dl>
									<dl class="cc" id="customquest" style="display:none">
										<dt>�Զ�������</dt>
										<dd class="ip"><div><input type="text" name="customquest" class="input" tabindex="14" /></div></dd>
									</dl>
									<dl class="cc">
										<dt>���Ĵ�</dt>
										<dd class="ip"><div><input type="text" name="answer" class="input" tabindex="15"></div></dd>
									</dl>									<dl class="cc">
										<dt>�����¼</dt>
										<dd class="ip">
											<label class="mr10"><input name="hideid" type="radio" value="1" />����</label>
											<label><input name="hideid" type="radio" value="0" checked tabindex="18" />�ر�</label>
										</dd>
									</dl>

									<dl class="cc">
										<dt>&nbsp;</dt>
										<dd class="ip">
											<span class="btn"><span><button type="submit" tabindex="19">��¼</button></span></span><input type="hidden" name="forward" value="" /><input type="hidden" name="jumpurl" value="http://bbs.yhcgo.com/apps.php?q=groups" /><input type="hidden" name="m" value="bbs" /><input type="hidden" name="step" value="2" /><input type="hidden" name="cktime" value="31536000" />
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
									<p class="mb5">��û���ʺţ�</p>
									<p style="padding-bottom:30px;"><span class="bt"><span><button type="button" onClick="location.href='register.php#breadCrumb';">ע��һ��</button></span></span></p>
									<p class="mb5"><a href="javascript:;" class="mr20 s4" onclick="javascript:history.go(-1);return false;" tabindex="20"><u>���ؼ�������</u></a></p>
									<p>���� <a id="showindex" tabindex="20" class="s4" href="http://bbs.yhcgo.com"><u>������ҳ</u></a></p>
								</div>
							</div>

				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>