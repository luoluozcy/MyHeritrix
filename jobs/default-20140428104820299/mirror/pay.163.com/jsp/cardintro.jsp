<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />

<title>网易充值一卡通服务中心-常见问题</title>

<link href="http://pimg1.126.net/pcard/new/style/global_gz.css?201404280646" rel="stylesheet" type="text/css" />
<link href="http://pimg1.126.net/pcard/new/style/index_gz.css?201404280646" rel="stylesheet" type="text/css" />
<link href="http://pimg1.126.net/pcard/new/style/subpage_gz.css?201404280646" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="http://pimg1.126.net/pcard/new/js/jquery1.4.2.js?201404280646"></script>

</head>
<body>
<div  id="content_help">
		




<div id="header">
	<div class="logo"><a href="http://pay.163.com/index.jsp" title="网易充值中心首页">网易充值中心</a></div>
    <div class="banner"><iframe src="http://nie.163.com/web/pay/abc_top_.html" width="715" height="50" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div>
    <div class="blank9 clearFloat"></div>
    <div class="navbar">
        <div class="barbg1">
			<div class="barbg2">
            	<ul class="menu">
                	<li ><h3><a href="/index.jsp">首页</a></h3></li>
                	<li ><h3><a href="/servlet/controller?operation=queryaccount">查询服务</a></h3></li>
                	<li ><h3><a href="http://ecard.163.com">购卡充值</a></h3></li>
                	<li ><h3><a href="http://jifen.163.com">优惠专区</a></h3></li>
                	<li class="on"><h3><a href="/servlet/controller?operation=helpcenter">帮助中心</a></h3></li>
                </ul>
                <p class="link"><a href="/servlet/controller?operation=addquestion">反馈意见</a> | <a href="/servlet/controller?operation=helpcenter">常见问题</a></p>
                <p class="userInfo"></p>
            </div>
        </div>
    </div>
</div>
			
<div id="wap2" class="clearFloat">    <div class="cornertop">        <b class="l"></b>        <b class="r"></b>        <div class="c"></div>    </div>	<div class="block clearFloat">		<div class="leftmenu2" id="leftmenu2">        	<ul>                <li class="on"><h4><button></button>点卡与点数问题</h4>                	<ul>                    	<li class="on"><h5><a href="#0">网易充值一卡通</a></h5></li>                    	<li><h5><a href="#1">通用点数</a></h5></li>                    	<li><h5><a href="#2">寄售点数</a></h5></li>                    	<li><h5><a href="#3">产品专用点数</a></h5></li>                    </ul>                </li>                <li><h4><button></button>购卡充值问题</h4>                	<ul>                    	<li><h5><a href="#0">实体卡充值</a></h5></li>                    	<li><h5><a href="#1">在线购卡</a></h5></li>                    	<li><h5><a href="#2">手机充值卡购卡</a></h5></li>                    	<li><h5><a href="#3">手机购卡</a></h5></li>						<li><h5><a href="#4">固话购卡充值</a></h5></li>						<li><h5><a href="#5">宽带购卡</a></h5></li>						<li><h5><a href="#6">游戏内一点充</a></h5></li>                    </ul>                </li>                <li><h4><button></button>消费问题</h4>                	<ul>                    	<li><h5><a href="#0">点数寄售</a></h5></li>                    	<li><h5><a href="#1">扣点规则</a></h5></li>                    	<li><h5><a href="#2">帐户查询</a></h5></li>                    </ul>                </li>                <li><h4><button></button>积分活动问题</h4>                	<ul>                    	<li><h5><a href="#0">积分问题</a></h5></li>                    	<li><h5><a href="#1">在线购卡活动</a></h5></li>                    </ul>                </li>                <li><h4 id="kf"><a href="#">客服联系方式</a></h4></li>                <li class="suggest"><a href="/servlet/controller?operation=addquestion">提交建议</a></li>            </ul>        </div>        <script type="text/javascript">$("#leftmenu2 h4").each(function(i){	$(this).toggle(function(){		$(this).parent().addClass("on");	},function(){		$(this).parent().removeClass("on");	});});</script>        <div class="content" id="content"></div>  </div><script type="text/javascript">var page=["/html/1.html","/html/2.html","/html/3.html","/html/4.html","/html/5.html"];var group=[[0,3],[4,10],[11,13],[14,15]];var status=0;var li=$("#leftmenu2 li li");var dl;$("#content").load(page[status],function(){	dl=$("#qalist .qanda");	dl.hide();	dl.eq(0).show();	setQa();});function getStatus(n){	for(var i=0,l=4;i<l;i++){		if(n>=group[i][0]&&n<=group[i][1]){			return i;		}	}}li.each(function(i){	$(this).click(function(){		li.removeClass("on");		$(this).addClass("on");		if(getStatus(i)==status){			var index=li.eq(i).find("a").attr("href").replace("#","");			dl.hide();			dl.eq(index).show();				}else{			status=getStatus(i);			$("#content").load(page[status],function(){				dl=$("#qalist .qanda");				setQa();				var index=li.eq(i).find("a").attr("href").replace("#","");				dl.hide();				dl.eq(index).show();			});		}			});});$("#kf").click(function(){	$("#content").load(page[4],function(){		status=4;		$("#qalist dt").toggle(function(){				$(this).removeClass("on");				$(this).next().hide();			},function(){				$(this).addClass("on");				$(this).next().show();			});		});});function setQa(){	$("#qalist dd").each(function(){$(this).hide();});	$("#qalist dt").toggle(function(){			$(this).addClass("on");			$(this).next().show();		},function(){			$(this).removeClass("on");			$(this).next().hide();		});}</script>    <div class="cornerbtm">        <b class="l"></b>        <b class="r"></b>        <div class="c"></div>    </div></div>

<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
</head>
<div id="footer">
	<p><a href="http://corp.163.com/index_eng.html">About NetEase</a> - <a href="http://corp.163.com/index_gb.html">公司简介</a> - <a href="http://gb.corp.163.com/gb/contactus.html">联系方法</a> - <a href="http://corp.163.com/gb/job/job.html">招聘信息</a> - <a href="http://help.163.com">客户服务</a> - <a href="http://corp.163.com/gb/legal/legal.html">相关法律</a> - <a href="http://power.163.com/adpage/salescenter/index.html">广告服务</a><br>

网易公司版权所有 &copy;1997-2014</p>
<p>
<!--可信网站图片LOGO安装开始-->
<script src="https://ss.cnnic.cn/seallogo.dll?sn=e12051044010020841301459&size=4"></script>
<!--可信网站图片LOGO安装结束-->
</p>
</div>

</div>
</body>
</html>
