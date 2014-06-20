<!DOCTYPE html>
<html>
<head>
	<meta charset="gbk"/>
	<title>该页面不存在</title>
	<style>
		html, body, p { margin: 0; padding: 0; }
		body { font: 12px/1.5 arial; color: #333; }
		a { text-decoration: none; }
		a:hover { text-decoration: underline; }
		html, img { border: 0; }
		.clearfix:after { clear: both; content: '.'; display: block; height: 0; visibility: hidden; }
		.clearfix{ zoom: 1; }
		.head { padding:3px 10px; border-bottom: 1px solid #E9E9E9;background:url("http://r.ph.126.net/photo/image/head/bg-topbar-v2-A.png?v=20120521") repeat-x 0 0 #343434; }
		.logo { float: left; width: 186px; height: 28px; }
		.nav, .nav a { color: #bbb; }
		.nav { float: right; height: 28px; line-height: 28px; }
		.sep { margin:0 7px 0 6px; }
		.row-mod { width: 500px; margin: 0 auto; height: 400px; }
		.col-sub { float: left; }
		.col-main { float: right; margin-left: 30px; display: inline; }
	  	.smile { font-size: 137px; color: #E9E9E9; }
		.wrap { position: relative; margin-top: 14px; }
		.arrow { width: 0; height: 0; border-color: #fff #fff #EFF6FC #EFF6FC; border-style: solid; border-width: 8px; position: absolute; left: 40px; top: -16px; }
		.modal { font-family: \5FAE\8F6F\96C5\9ED1; font-size:37px; color: #E9E9E9; margin-top: 72px; }
		.desc { width: 200px; line-height: 24px; padding: 18px 30px; font-size: 14px; background-color: #eff6fc; }
		.footer { line-height: 24px; margin: 50px auto 0; padding: 12px 0 25px; border-top: 1px solid #cbd9e6; text-align: center; color: #4D4D4D; }
		.footer .item { margin-right: 6px; color: #4D4D4D; }
	</style>
</head>
<body>
	<div class="head clearfix">
		<a class="logo" href="http://photo.163.com/" title="网易相册"><img alt="网易相册" src="http://r.ph.126.net/photo/image/head/logo-v2-A.png" /></a>
		<div class="nav">
			<a href="http://photo.163.com/">相册首页</a><span class="sep">|</span><a href="http://help.163.com/special/007525FT/photo.html" target="_blank">帮助</a>
		</div>
	</div>
	<div class="row-mod clearfix">
		<div class="col-sub smile">&gt;.&lt;</div>
		<div class="col-main">
			<div class="modal">嗯~~</div>
			<div class="wrap">
				<b class="arrow"></b>
				<div class="desc">您所查看的页面不存在。<br/>请检查您输入的地址是否正确。</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<a class="item" href="http://gb.corp.163.com/gb/home.shtml" target="_blank">关于网易</a>
		<a class="item" href="http://blog.163.com/photo_admin/" target="_blank">相册官方博客</a>
		<a class="item" href="http://fankui.163.com/ft/tutorial.fb?pid=3" target="_blank">意见反馈</a>
		<a class="item" href="http://fankui.163.com/ft/faqList.fb?pid=3" target="_blank">常见问题</a>
		<a class="item" href="http://hr.163.com/" target="_blank">招聘信息</a>
		<a class="item" href="http://help.163.com/" target="_blank">客户服务</a>
		<a class="item" href="http://gb.corp.163.com/gb/legal.html" target="_blank">隐私政策</a>
		<p>网易公司版权所有&copy;1997-2014</p>
	</div>
</body>
</html>