<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />

<title>���׳�ֵһ��ͨ��������-��������</title>

<link href="http://pimg1.126.net/pcard/new/style/global_gz.css?201404280646" rel="stylesheet" type="text/css" />
<link href="http://pimg1.126.net/pcard/new/style/index_gz.css?201404280646" rel="stylesheet" type="text/css" />
<link href="http://pimg1.126.net/pcard/new/style/subpage_gz.css?201404280646" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="http://pimg1.126.net/pcard/new/js/jquery1.4.2.js?201404280646"></script>

</head>
<body>
<div  id="content_help">
		




<div id="header">
	<div class="logo"><a href="http://pay.163.com/index.jsp" title="���׳�ֵ������ҳ">���׳�ֵ����</a></div>
    <div class="banner"><iframe src="http://nie.163.com/web/pay/abc_top_.html" width="715" height="50" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div>
    <div class="blank9 clearFloat"></div>
    <div class="navbar">
        <div class="barbg1">
			<div class="barbg2">
            	<ul class="menu">
                	<li ><h3><a href="/index.jsp">��ҳ</a></h3></li>
                	<li ><h3><a href="/servlet/controller?operation=queryaccount">��ѯ����</a></h3></li>
                	<li ><h3><a href="http://ecard.163.com">������ֵ</a></h3></li>
                	<li ><h3><a href="http://jifen.163.com">�Ż�ר��</a></h3></li>
                	<li class="on"><h3><a href="/servlet/controller?operation=helpcenter">��������</a></h3></li>
                </ul>
                <p class="link"><a href="/servlet/controller?operation=addquestion">�������</a> | <a href="/servlet/controller?operation=helpcenter">��������</a></p>
                <p class="userInfo"></p>
            </div>
        </div>
    </div>
</div>
			
<div id="wap2" class="clearFloat">    <div class="cornertop">        <b class="l"></b>        <b class="r"></b>        <div class="c"></div>    </div>	<div class="block clearFloat">		<div class="leftmenu2" id="leftmenu2">        	<ul>                <li class="on"><h4><button></button>�㿨���������</h4>                	<ul>                    	<li class="on"><h5><a href="#0">���׳�ֵһ��ͨ</a></h5></li>                    	<li><h5><a href="#1">ͨ�õ���</a></h5></li>                    	<li><h5><a href="#2">���۵���</a></h5></li>                    	<li><h5><a href="#3">��Ʒר�õ���</a></h5></li>                    </ul>                </li>                <li><h4><button></button>������ֵ����</h4>                	<ul>                    	<li><h5><a href="#0">ʵ�忨��ֵ</a></h5></li>                    	<li><h5><a href="#1">���߹���</a></h5></li>                    	<li><h5><a href="#2">�ֻ���ֵ������</a></h5></li>                    	<li><h5><a href="#3">�ֻ�����</a></h5></li>						<li><h5><a href="#4">�̻�������ֵ</a></h5></li>						<li><h5><a href="#5">�������</a></h5></li>						<li><h5><a href="#6">��Ϸ��һ���</a></h5></li>                    </ul>                </li>                <li><h4><button></button>��������</h4>                	<ul>                    	<li><h5><a href="#0">��������</a></h5></li>                    	<li><h5><a href="#1">�۵����</a></h5></li>                    	<li><h5><a href="#2">�ʻ���ѯ</a></h5></li>                    </ul>                </li>                <li><h4><button></button>���ֻ����</h4>                	<ul>                    	<li><h5><a href="#0">��������</a></h5></li>                    	<li><h5><a href="#1">���߹����</a></h5></li>                    </ul>                </li>                <li><h4 id="kf"><a href="#">�ͷ���ϵ��ʽ</a></h4></li>                <li class="suggest"><a href="/servlet/controller?operation=addquestion">�ύ����</a></li>            </ul>        </div>        <script type="text/javascript">$("#leftmenu2 h4").each(function(i){	$(this).toggle(function(){		$(this).parent().addClass("on");	},function(){		$(this).parent().removeClass("on");	});});</script>        <div class="content" id="content"></div>  </div><script type="text/javascript">var page=["/html/1.html","/html/2.html","/html/3.html","/html/4.html","/html/5.html"];var group=[[0,3],[4,10],[11,13],[14,15]];var status=0;var li=$("#leftmenu2 li li");var dl;$("#content").load(page[status],function(){	dl=$("#qalist .qanda");	dl.hide();	dl.eq(0).show();	setQa();});function getStatus(n){	for(var i=0,l=4;i<l;i++){		if(n>=group[i][0]&&n<=group[i][1]){			return i;		}	}}li.each(function(i){	$(this).click(function(){		li.removeClass("on");		$(this).addClass("on");		if(getStatus(i)==status){			var index=li.eq(i).find("a").attr("href").replace("#","");			dl.hide();			dl.eq(index).show();				}else{			status=getStatus(i);			$("#content").load(page[status],function(){				dl=$("#qalist .qanda");				setQa();				var index=li.eq(i).find("a").attr("href").replace("#","");				dl.hide();				dl.eq(index).show();			});		}			});});$("#kf").click(function(){	$("#content").load(page[4],function(){		status=4;		$("#qalist dt").toggle(function(){				$(this).removeClass("on");				$(this).next().hide();			},function(){				$(this).addClass("on");				$(this).next().show();			});		});});function setQa(){	$("#qalist dd").each(function(){$(this).hide();});	$("#qalist dt").toggle(function(){			$(this).addClass("on");			$(this).next().show();		},function(){			$(this).removeClass("on");			$(this).next().hide();		});}</script>    <div class="cornerbtm">        <b class="l"></b>        <b class="r"></b>        <div class="c"></div>    </div></div>

<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
</head>
<div id="footer">
	<p><a href="http://corp.163.com/index_eng.html">About NetEase</a> - <a href="http://corp.163.com/index_gb.html">��˾���</a> - <a href="http://gb.corp.163.com/gb/contactus.html">��ϵ����</a> - <a href="http://corp.163.com/gb/job/job.html">��Ƹ��Ϣ</a> - <a href="http://help.163.com">�ͻ�����</a> - <a href="http://corp.163.com/gb/legal/legal.html">��ط���</a> - <a href="http://power.163.com/adpage/salescenter/index.html">������</a><br>

���׹�˾��Ȩ���� &copy;1997-2014</p>
<p>
<!--������վͼƬLOGO��װ��ʼ-->
<script src="https://ss.cnnic.cn/seallogo.dll?sn=e12051044010020841301459&size=4"></script>
<!--������վͼƬLOGO��װ����-->
</p>
</div>

</div>
</body>
</html>
