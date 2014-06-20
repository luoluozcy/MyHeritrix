













 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title>跳转提示</title>


<style type="text/css">
<!--
*{margin:0;padding:0;}
body{margin:50px;background:#fff;line-height:130%;}
div{width:560px;border:5px solid #f5f5f5;padding:10px;}
h1{margin:0 0 10px;padding-bottom:10px;border-bottom:1px solid #bbb;font-size:16px;color:blue;font-weight:normal;}
h2{font-size:18px;line-height:150%;}
p{font-size:14px;}
img{margin:10px 0;}
a{color:blue;}
a:hover{color:red;}
-->
</style>
</head>
<body>
<p id="login_hint" style="visibility : hidden">正在登录，请稍等...</p>
<div id="block_hint" style="visibility : hidden">



<h1>如果您看到这个页面，说明网速缓慢或者浏览器阻止了您的页面转向。请您点击<a href='&#104&#116&#116&#112&#58&#47&#47&#114&#101&#103&#46&#121&#111&#117&#100&#97&#111&#46&#99&#111&#109&#47&#99&#114&#111&#115&#115&#100&#111&#109&#97&#105&#110&#46&#106&#115&#112&#63&#117&#115&#101&#114&#110&#97&#109&#101&#61&#38&#117&#114&#108&#61&#104&#116&#116&#112&#37&#51&#65&#37&#50&#70&#37&#50&#70&#114&#101&#103&#46&#49&#54&#51&#46&#99&#111&#109'><strong><font color=red>这里</font></strong></a>继续。&nbsp;&nbsp;无法登录邮箱？<a href='http://zhidao.mail.163.com/zhidao/lfeedback.jsp' target="_blank"><strong><font color=red>意见反馈&gt;&gt;</font></strong></a></h1>

</div>
<script language="JavaScript">
<!--
function recordTimeOut(){
    var url = "http://reg.youdao.com/crossdomain.jsp?username=&url=http%3A%2F%2Freg.163.com";
    var pdt_from = "NULL";
	var i = new Image();
	i.src = "/click.jsp?click_in=Redirect&v=" + new Date().getTime() + "&click_count_spec=" + pdt_from + "&_ahref=" + url + "&_at=";
}
function recordTimeOut2(){
    var url = "http://reg.163.com";
    var pdt_from = "NULL";
	var i = new Image();
	i.src = "/click.jsp?click_in=Redirect&v=" + new Date().getTime() + "&click_count_spec=" + pdt_from + "&_ahref=" + url + "&_at=";
}
function record_TimeOut(){
    var url = "http://reg.youdao.com/crossdomain.jsp?username=&url=http%3A%2F%2Freg.163.com";
    var pdt_from = "NULL";
	var i = new Image();
	i.src = "/click.jsp?click_in=Redirect3S&v=" + new Date().getTime() + "&click_count_spec=" + pdt_from + "&_ahref=" + url + "&_at=";
}

setTimeout( function(){ 
document.getElementById("login_hint").style.visibility = 'visible';

// 记录下超过3s没有跳转走的去向url情况
record_TimeOut();
 
}, 3000);



setTimeout( function(){

recordTimeOut();

document.getElementById("login_hint").style.visibility = 'hidden'; 
document.getElementById("block_hint").style.visibility = 'visible'; 
}, 10000);
// -->
</script>
<script language="JavaScript">
window.location.replace("http://reg.youdao.com/crossdomain.jsp?username=&url=http%3A%2F%2Freg.163.com");//remain for popo ,don't del
</script>
<META HTTP-EQUIV=REFRESH CONTENT="0;URL=&#104&#116&#116&#112&#58&#47&#47&#114&#101&#103&#46&#121&#111&#117&#100&#97&#111&#46&#99&#111&#109&#47&#99&#114&#111&#115&#115&#100&#111&#109&#97&#105&#110&#46&#106&#115&#112&#63&#117&#115&#101&#114&#110&#97&#109&#101&#61&#38&#117&#114&#108&#61&#104&#116&#116&#112&#37&#51&#65&#37&#50&#70&#37&#50&#70&#114&#101&#103&#46&#49&#54&#51&#46&#99&#111&#109">
</body>
</html>