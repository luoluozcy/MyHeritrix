<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
 <head>
<title></title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta name="author" content="�켫�� | ȫ������IT��һ�Ż�" />
<meta name="Copyright" content="�켫�� | ȫ������IT��һ�Ż�" />
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta http-equiv="Content-Language" content="zh-CN" />
<link rel="stylesheet" href="http://www.yesky.com/css/yesky_error.css" type="text/css" media="all" />
<base target="_blank"/>
</head>
<body>
<script language="javascript">
        var hostname = location.hostname;
</script>

<div id="main">
<div class="box_1">
	<p>�����ˣ�������ʵ�ҳ�治����</p>
	<em>���ܸ�ҳ���ѱ�ɾ����Ҳ��������������</em><table cellspacing="0" cellpadding="0"><tr><td>
	��ҳ�潫��<font color="red"><span id="totalSecond">7</span></font>�����ת��<script language="javascript">document.write(hostname)</script>��������������û���Զ���ת������<a href="#" onclick="go();" target="_self">����</a></td></tr></table>
	<ul class="area1">
		<b>��Ҳ���ԣ�</b>
		<li><tt>��</tt>ֱ��ȥ<a href="http://www.yesky.com">�켫����ҳ</a>����</li>
		<li><tt>��</tt>ȥ��������Ȥ�ķ���</li>
	</ul>
	<ul class="area2">
        <li><a href="http://mobile.yesky.com/">�ֻ�</a></li>
		<li><a href="http://notebook.yesky.com/">�ʼǱ�</a></li>
		<li><a href="http://pc.yesky.com/">̨ʽ��</a></li>
		<li><a href="http://dc.yesky.com/">�������</a></li>
        <li><a href="http://lcd.yesky.com/">��ʾ��</a></li>
        <li><a href="http://server.yesky.com/">������</a></li>
        <li><a href="http://soft.yesky.com/">����</a></li>
        <li><a href="http://product.yesky.com/">��Ʒ����</a></li>
        <li><a href="http://mydown.yesky.com/">����</a></li>
        <li><a href="http://pic.yesky.com/">ͼƬ</a></li>
	</ul>
</div>
<div class="clear"></div>
</div>
<script language="javascript">;
var second = document.getElementById('totalSecond').textContent;

if (navigator.appName.indexOf("Explorer") > -1){
    second = document.getElementById('totalSecond').innerHTML;
} else{
    second = document.getElementById('totalSecond').textContent;
}

setInterval("redirect()", 1000);
function redirect(){
    if (second < 0){
        location.href = "http://" + hostname;
    } else{
        if (navigator.appName.indexOf("Explorer") > -1){
            document.getElementById('totalSecond').innerHTML = second--;
        } else{
            document.getElementById('totalSecond').textContent = second--;
        }
    }
}

function go() {
    window.location.href = "http://" + hostname;
}



</script>
<!-- Counter  -->
<script language="Javascript"> 
var now = new Date(); 
document.write("<img src='http://counter.yesky.com/counter.shtml?CID=22&amp;AID=&amp;refer="+escape(document.referrer)+"&amp;rand="+ now.getTime()  + "&amp;cur="+escape(document.URL)+"' border='0' alt='' width='0' height='0'>");
</script>
<noscript><img src="http://counter.yesky.com/counter.shtml?CID=22&amp;AID=&amp;refer=noscriptcounter&amp;cur=noscriptcounter" border='0' width='0' height='0'/>
</noscript>
<!-- START GA.js -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-11613621-1']);
  _gaq.push(['_setDomainName', 'yesky.com']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_addOrganic', 'baidu', 'word']);
  _gaq.push(['_addOrganic', 'google', 'q']);
  _gaq.push(['_addOrganic', 'soso', 'w']);
  _gaq.push(['_addOrganic', '3721', 'name']);
  _gaq.push(['_addOrganic', 'youdao', 'q']);
  _gaq.push(['_addOrganic', 'vnet', 'kw']);
  _gaq.push(['_addOrganic', 'sogou', 'query']);
  _gaq.push(['_trackPageview', ' "/error404.html?page=" + document.location.pathname + document.location.search + "&from=" + document.referrer ']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- END GA.js -->
<script type="text/javascript" src="http://dnn506yrbagrg.cloudfront.net/pages/scripts/0010/7010.js"> </script>
</body>
</html>