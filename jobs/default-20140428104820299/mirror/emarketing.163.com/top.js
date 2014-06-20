	var dowpic=Array();
	var uppic=Array();
	var mainpic=Array();
	dowpic[1] = "images/button_1.gif";
	dowpic[2] = "images/button_2.gif";
	dowpic[3] = "images/button_3.gif";
	dowpic[4] = "images/button_4.gif";
	dowpic[5] = "images/button_5.gif";
	dowpic[6] = "images/button_6.gif";
	dowpic[7] = "images/button_7.gif";

	uppic[1] = "images/button_1_b.gif";
	uppic[2] = "images/button_2_b.gif";
	uppic[3] = "images/button_3_b.gif";
	uppic[4] = "images/button_4_b.gif";
	uppic[5] = "images/button_5_b.gif";
	uppic[6] = "images/button_6_b.gif";
	uppic[7] = "images/button_7_b.gif";

	mainpic[1] = "top_main1";
	mainpic[2] = "top_main2";
	mainpic[3] = "top_main3";
	mainpic[4] = "top_main4";
	mainpic[5] = "top_main5";
	mainpic[6] = "top_main6";
	mainpic[7] = "top_main7";
	function oMoverBut(str,n){
		for(var i=1;i<=7;i++){
			document.getElementById("img"+i).src=dowpic[i];
			document.getElementById(mainpic[i]).style.display="none";
		}
		document.getElementById(str).src=uppic[n];
		document.getElementById(mainpic[n]).style.display="";
	}
	function oOverBut(str,n){
		for(var i=1;i<=7;i++){
			
			//document.getElementById(mainpic[i]).style.display="none";
		}
		document.getElementById(str).src=dowpic[n];
		document.getElementById(mainpic[n]).style.display="none";
		defbut(defb)
	}
	function defbut(n){
		if(n>0){
			document.getElementById("img"+n).src=uppic[n];
			document.getElementById(mainpic[n]).style.display="";
		}
	}
document.write('<table width="100%" border="0" cellspacing="0" cellpadding="0">');
document.write('  <tr><td height="97" align="center" valign="bottom" background="images/t_1.jpg">');
document.write('  <table width="940" border="0" cellspacing="0" cellpadding="0">');
document.write('      <tr><td width="382"><img src="images/logo_1.jpg" width="346" height="97" border="0" usemap="#indexMap"><map name="indexMap" id="indexMap"><area shape="rect" coords="35,28,132,86" href="http://www.163.com" target="_blank"/><area shape="rect" coords="149,28,315,86" href="index.php" target="_blank"/></map></td>');
document.write('        <td width="598" align="center" valign="bottom">');
document.write('		<table width="500" border="0" cellspacing="0" cellpadding="0">');
document.write('          <tr><td width="84"><a href="163today.php"><img src="images/button_1.gif" width="86" height="40" border="0" id="img1" onMouseOver="oMoverBut(\'img1\',\'1\')" onMouseOut="oOverBut(\'img1\',\'1\')"></a></td>');
document.write('            <td width="9"><img src="images/line_1.gif" width="11" height="40" border=0 onMouseOver="oMoverBut(\'img1\',\'1\')" onMouseOut="oOverBut(\'img1\',\'1\')"></td>');
document.write('            <td width="69"><a href="wangluoxianzhuang.html"><img src="images/button_2.gif" name="Image33" width="69" height="40" border="0" id="img2" onMouseOver="oMoverBut(\'img2\',\'2\')" onMouseOut="oOverBut(\'img2\',\'2\')"></a></td>');
document.write('            <td width="38"><img src="images/line_1.gif" width="11" height="40" border=0 onMouseOver="oMoverBut(\'img2\',\'2\')" onMouseOut="oOverBut(\'img2\',\'2\')"></td>');
document.write('            <td width="39"><a href="about_163.html"><img src="images/button_3.gif" name="Image34" width="69" height="40" border="0" id="img3" onMouseOver="oMoverBut(\'img3\',\'3\')" onMouseOut="oOverBut(\'img3\',\'3\')"></a></td>');
document.write('            <td width="10"><img src="images/line_1.gif" width="11" height="40" border=0 onMouseOver="oMoverBut(\'img3\',\'3\')" onMouseOut="oOverBut(\'img3\',\'3\')"></td>');
document.write('            <td width="69"><a href="yingxiaoziyuan.html"><img src="images/button_4.gif" name="Image35" width="69" height="40" border="0" id="img4" onMouseOver="oMoverBut(\'img4\',\'4\')" onMouseOut="oOverBut(\'img4\',\'4\')"></a></td>');
document.write('            <td width="10"><img src="images/line_1.gif" width="11" height="40" border=0 onMouseOver="oMoverBut(\'img4\',\'4\')" onMouseOut="oOverBut(\'img4\',\'4\')"></td>');
document.write('            <td width="69"><a href="chenggonganli.html"><img src="images/button_5.gif" name="Image36" width="69" height="40" border="0" id="img5" onMouseOver="oMoverBut(\'img5\',\'5\')" onMouseOut="oOverBut(\'img5\',\'5\')"></a></td>');
document.write('            <td width="10"><img src="images/line_1.gif" width="11" height="40" border=0 onMouseOver="oMoverBut(\'img5\',\'5\')" onMouseOut="oOverBut(\'img5\',\'5\')"></td>');
document.write('            <td width="69"><a href="link.html"><img src="images/button_6.gif" name="Image37" width="69" height="40" border="0" id="img6" onMouseOver="oMoverBut(\'img6\',\'6\')" onMouseOut="oOverBut(\'img6\',\'6\')"></a></td>');
document.write('            <td width="12"><img src="images/line_1.gif" width="11" height="40" border=0 onMouseOver="oMoverBut(\'img6\',\'6\')" onMouseOut="oOverBut(\'img6\',\'6\')"></td>');
document.write('            <td width="12"><a href="download.html"><img src="images/button_7.gif" name="Image38" width="69" height="40" border="0" id="img7" onMouseOver="oMoverBut(\'img7\',\'7\')" onMouseOut="oOverBut(\'img7\',\'7\')"></a></td>');
document.write('          </tr></table></td></tr></table></td></tr><tr><td height="34" align="center" valign="top" background="images/gray.jpg">');
document.write('<div id="top_main1" style="display:none;" onMouseOver="oMoverBut(\'img1\',\'1\')" onMouseOut="oOverBut(\'img1\',\'1\')">');
document.write('<table width="450" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr><td width="8" align="right"><img src="images/menu/left.jpg" width="7" height="26"></td>');
document.write('<td width="435" align="center" background="images/menu/bg.jpg"><table width="90%" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr><td align="center" class="a1"><a href="163today.php" class="a1"><strong>最新消息发布</strong></a></td>');
document.write('            <td><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('            <td align="center" class="a1"><a href="163today/163today_online.php" class="a1"><strong>网易today在线阅读</strong></a></td>');
document.write('            <td><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('            <td align="center" class="a1"><a href="163today.php#a" class="a1"><strong>网易today在线订阅</strong></a></td>');
document.write('          </tr></table></td><td width="7"><img src="images/menu/right.jpg" width="7" height="26"></td></tr></table></div>');
document.write('<div id="top_main2" style="display:none;" onMouseOver="oMoverBut(\'img2\',\'2\')" onMouseOut="oOverBut(\'img2\',\'2\')">');
document.write('<table width="800" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr><td width="10" align="right"><img src="images/menu/left.jpg" width="7" height="26"></td>');
document.write('<td align="center" background="images/menu/bg.jpg"><table width="95%" border="0" cellpadding="0" cellspacing="0">');
document.write('            <tr><td width="79" align="center" class="a1"><a href="net/wangluoxianzhuang_1.html" class="a1"><strong>互联网现状</strong></a></td>');
document.write('              <td width="3"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td width="159" align="center" class="a1"><a href="net/wangluoxianzhuang_2.html" class="a1"><strong>网络营销行业整体数据</strong></a></td>');
document.write('              <td width="3"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td width="127" align="center" class="a1"><a href="net/wangluoxianzhuang_3.html" class="a1"><strong>营销行业细分数据</strong></a></td>');
document.write('              <td width="3" align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td width="111" align="center" class="a1"><a href="net/wangluoxianzhuang_4.html" class="a1"><strong>用户互联网行为</strong></a></td>');
document.write('              <td width="3" align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td width="95" align="center" class="a1"><a href="net/wangluoxianzhuang_5.html" class="a1"><strong>网络广告常识</strong></a></td>');
document.write('              <td width="13" align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td width="189" align="center" class="a1"><a href="net/wangluoxianzhuang_6.html" class="a1"><strong>互联网奥运传播的八大特征</strong></a></td>');
document.write('            </tr></table></td><td width="10"><img src="images/menu/right.jpg" width="7" height="26"></td></tr></table></div>');
document.write('	<div id="top_main3" style="display:none;" onMouseOver="oMoverBut(\'img3\',\'3\')" onMouseOut="oOverBut(\'img3\',\'3\')">');
document.write('	<table width="650" border="0" cellspacing="0" cellpadding="0">');
document.write('      <tr><td width="8" align="right"><img src="images/menu/left.jpg" width="7" height="26"></td>');
document.write('        <td width="635" align="center" background="images/menu/bg.jpg"><table width="90%" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr><td align="center" class="a1"><a href="about_163/about_163_1.html" class="a1"><strong>网易品牌</strong></a></td>');
document.write('              <td><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="about_163/about_163_2.html" class="a1"><strong>网易优势</strong></a></td>');
document.write('              <td><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="about_163/about_163_3.html" class="a1"><strong>网易频道介绍</strong></a></td>');
document.write('              <td align="center" class="writebold"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="about_163/about_163_4.html" class="a1"><strong>网易产品介绍</strong></a></td>');
document.write('              <td align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="about_163/about_163_5.html" class="a1"><strong>网易大事记</strong></a></td>');
document.write('              <td align="center" class="writebold"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="about_163/about_163_6.html" class="a1"><strong>客户赠言</strong></a></td>');
document.write('            </tr></table></td><td width="7"><img src="images/menu/right.jpg" width="7" height="26"></td></tr></table></div>');
document.write('	<div id="top_main4" style="display:none;padding-left:200px;" onMouseOver="oMoverBut(\'img4\',\'4\')" onMouseOut="oOverBut(\'img4\',\'4\')">');
document.write('	<table width="300" border="0" cellspacing="0" cellpadding="0">');
document.write('      <tr><td width="8" align="right"><img src="images/menu/left.jpg" width="7" height="26"></td>');
document.write('        <td width="435" align="center" background="images/menu/bg.jpg"><table width="90%" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr><td align="center" class="a1"><a href="ziyuan/yingxiaoziyuan_1.html" class="a1"><strong>广告资源</strong></a></td>');
document.write('              <td><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="ziyuan/yingxiaoziyuan_2_1.html" class="a1"><strong>特色资源</strong></a></td>');
document.write('            </tr></table></td><td width="7"><img src="images/menu/right.jpg" width="7" height="26"></td></tr></table></div>');
document.write('	<div id="top_main5" style="display:none;" onMouseOver="oMoverBut(\'img5\',\'5\')" onMouseOut="oOverBut(\'img5\',\'5\')">');
document.write('	<table width="650" border="0" cellspacing="0" cellpadding="0">');
document.write('      <tr><td width="7" align="right"><img src="images/menu/left.jpg" width="7" height="26"></td>');
document.write('        <td width="635" align="center" background="images/menu/bg.jpg"><table width="90%" border="0" cellspacing="0" cellpadding="0">');
document.write('            <tr><td align="center" class="a1"><a href="anli/anli_1.html" class="a1"><strong>食品行业</strong></a></td>');
document.write('              <td><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="anli/anli_2.html" class="a1"><strong>日化行业</strong></a></td>');
document.write('              <td><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="anli/anli_3.html" class="a1"><strong>金融行业</strong></a></td>');
document.write('              <td align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="anli/anli_4.html" class="a1"><strong>汽车行业</strong></a></td>');
document.write('              <td align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="anli/anli_5.html" class="a1"><strong>电子行业</strong></a></td>');
document.write('              <td align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="anli/anli_6.html" class="a1"><strong>烟酒行业</strong></a></td>');
document.write('              <td align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="anli/anli_7.html" class="a1"><strong>服装行业</strong></a></td>');
document.write('              <td align="center" class="a1"><img src="images/menu/line.jpg" width="3" height="12"></td>');
document.write('              <td align="center" class="a1"><a href="anli/anli_8.html" class="a1"><strong>医药行业</strong></a></td>');
document.write('            </tr></table></td><td width="7"><img src="images/menu/right.jpg" width="7" height="26"></td></tr></table></div>');
document.write('	<div id="top_main6" style="display:none;padding-left:600px;" onMouseOver="oMoverBut(\'img6\',\'6\')" onMouseOut="oOverBut(\'img6\',\'6\')">');
document.write('	<table width="220" border="0" cellspacing="0" cellpadding="0">');
document.write('      <tr><td width="8" align="right"><img src="images/menu/left.jpg" width="7" height="26"></td>');
document.write('        <td width="215" align="center" background="images/menu/bg.jpg"><table width="90%" border="0" cellspacing="0" cellpadding="0">');
document.write('            <tr><td align="center" class="a1"><a href="link.html#a" class="a1"><strong>历届网易主题论坛链接</strong></a></td>');
//document.write('              <td><img src="images/menu/line.jpg" width="3" height="12"></td>');
//document.write('              <td align="center" class="a1"><a href="http://163creative.blog.163.com/" class="a1"><strong>网易创意组博客</strong></a></td>');
document.write('              </tr></table></td><td width="7"><img src="images/menu/right.jpg" width="7" height="26"></td></tr></table></div>');
document.write('	<div id="top_main7" style="display:none;padding-left:800px;" onMouseOver="oMoverBut(\'img7\',\'7\')" onMouseOut="oOverBut(\'img7\',\'7\')">');
document.write('	<table width="200" border="0" cellspacing="0" cellpadding="0"><tr>');
document.write('        <td width="8" align="right"><img src="images/menu/left.jpg" width="7" height="26"></td>');
document.write('        <td width="435" align="center" background="images/menu/bg.jpg"><table width="90%" border="0" cellspacing="0" cellpadding="0">');
document.write('            <tr><td align="center" class="a1"><a href="download.html" class="a1"><strong>网易发布权威报告数据</strong></a></td>');
document.write('              </tr></table></td><td width="7"><img src="images/menu/right.jpg" width="7" height="26"></td></tr></table></div>');
document.write('</td></tr></table>');
defbut(defb);