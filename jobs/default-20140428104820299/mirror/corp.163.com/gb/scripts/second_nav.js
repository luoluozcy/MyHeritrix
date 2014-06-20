<!--
/*
Tabs Menu (mouseover)- By Dynamic Drive
For full source code and more DHTML scripts, visit http://www.dynamicdrive.com
This credit MUST stay intact for use

Modified by Terence Chan
*/

if (section=="home") currentSection = -1
else if (section=="about") currentSection = 0
else if (section=="news") currentSection = 1
else if (section=="investor") currentSection = 2
else if (section=="games") currentSection = 3
else if (section=="wireless") currentSection = 4
else if (section=="portal") currentSection = 5
else if (section=="advertising") currentSection = 6


var totalnav = 7;

var submenu=new Array();
var total=new Array(), sectionName=new Array;
var menulink=new Array();
var menuDesc= new Array();

//no. of menus per dropdown
total[0]=3, sectionName[0]="about";
total[1]=2, sectionName[1]="news";
total[2]=7, sectionName[2]="inv";
total[3]=8, sectionName[3]="games";
total[4]=1, sectionName[4]="wireless";
total[5]=1, sectionName[5]="portal";
total[6]=1, sectionName[6]="adv";

//menu links 0 (About Netease)
menulink[0]=new Array();
menulink[0][1]="/gb/about/overview.html";
menulink[0][2]="/gb/about/management.html";
menulink[0][3]="/gb/about/milestone.html";

menuDesc[0]=new Array();
menuDesc[0][1]="网易概况";
menuDesc[0][2]="管理团队";
menuDesc[0][3]="里程碑";

//menu links 1 (News)
menulink[1]=new Array();
menulink[1][1]="http://gb.corp.163.com/gbnews/financial.html";
menulink[1][2]="http://gb.corp.163.com/gbnews/General.html";
//menulink[1][3]="http://gb.corp.163.com/gbnews/Press.html";
//menulink[1][4]="http://gb.corp.163.com/gbnews/Product.html";

menuDesc[1]=new Array();
menuDesc[1][1]="财务新闻";
menuDesc[1][2]="公司新闻";
//menuDesc[1][3]="新闻剪报";
//menuDesc[1][4]="产品新闻";

//menu links 2 (Investor Info)
menulink[2]=new Array();
menulink[2][1]="/gb/investor/fin_statement.html";
menulink[2][2]="/gb/investor/annual_report.html";
menulink[2][3]="/gb/investor/sec_filing.html";
menulink[2][4]="/gb/investor/analyst_coverage.html";
menulink[2][5]="/gb/investor/inv_presentation.html";
menulink[2][6]="/gb/investor/earnings_call.html";
menulink[2][7]="/gb/investor/code_of_conduct.html";

menuDesc[2]=new Array();
menuDesc[2][1]="财务报表";
menuDesc[2][2]="年报";
menuDesc[2][3]="美国证券交易委员会存档";
menuDesc[2][4]="分析师资料";
menuDesc[2][5]="公司介绍";
menuDesc[2][6]="财报发布电话会议";
menuDesc[2][7]="业务行为守则";

//menu links 3 (Games)
menulink[3]=new Array();
menulink[3][1]="/gb/games/overview.html";
menulink[3][2]="/gb/games/westward_journey.html";
menulink[3][3]="/gb/games/fantacy_westward.html";
//menulink[3][4]="/gb/games/priston_tale.html";
menulink[3][4]="/gb/games/fly_for_fun.html";
menulink[3][5]="/gb/games/datang.html";
menulink[3][6]="/gb/games/popo_game.html";
menulink[3][7]="/gb/games/tianxia2.html";
menulink[3][8]="/gb/games/westward_journey3.html";

menuDesc[3]=new Array();
menuDesc[3][1]="游戏概况";
menuDesc[3][2]="大话西游 II";
menuDesc[3][3]="梦幻西游";
menuDesc[3][4]="飞飞";
menuDesc[3][5]="大唐豪侠";
menuDesc[3][6]="泡泡";
menuDesc[3][7]="天下贰";
menuDesc[3][8]="大话西游3";

//menu links 4 (Wireless)
menulink[4]=new Array();
menulink[4][1]="/gb/wireless/overview.html";

menuDesc[4]=new Array();
menuDesc[4][1]="概況";

//menu links 5 (Internet Portal)
menulink[5]=new Array();
menulink[5][1]="/gb/portal/overview.html";

menuDesc[5]=new Array();
menuDesc[5][1]="概況";

//menu links 6 (Advertising)
menulink[6]=new Array();
menulink[6][1]="http://emarketing.biz.163.com/index.php";

menuDesc[6]=new Array();
menuDesc[6][1]="概況";


//generator

for (i=0;i<=(totalnav-1);i++) {
	var tmpstr='<table width="100%" height="20" border="0" cellspacing="0" cellpadding="0"><tr><td width="6"><img src="/gb/images/spacer.gif" width="6" height="1"></td>';
	for (j=1;j<=total[i];j++) {
		if (currentSection==i && subO==j) {
			oflag="o";
			osStr1="<font color='#CCCCCC'>";
			osStr2="</font>";
		} else {
			oflag="n";
			osStr1="";
			osStr2="";
		}
		tmpstr += "<td><image src=/gb/images/spacer.gif width=3 height=1></td><td nowrap><a href=\""+
		menulink[i][j]+"\" class='navlinks'>"+osStr1+menuDesc[i][j]+osStr2+"</a></td><td width="+Math.floor(100/total[i])+"%></td>"
		/*  tmpstr += "<td><image src=/gb/images/spacer.gif width=3 height=1></td><td><a href=\""+
		menulink[i][j]+"\"onMouseOut=\"MM_swapImgRestore()\" onMouseOver=\"MM_swapImage('nav2-"+
		j+"','','/gb/images/2nd_nav/"+sectionName[i]+j+"_o.gif',1)\"><img src=\"/gb/images/2nd_nav/"+sectionName[i]+
		j+"_"+oflag+".gif\" height=16 border=\"0\" name=\"nav2-"+j+"\"></a></td><td width="+Math.floor(100/total[i])+"%></td>"  */
	}
	submenu[i]=tmpstr+'</tr></table>';
}

//Set delay before submenu disappears after mouse moves out of it (in milliseconds)
var delay_hide=500

/////No need to edit beyond here

var menuobj=document.getElementById? document.getElementById("describe") : document.all? document.all.describe : document.layers? document.dep1.document.dep2 : ""

function showit(which,f){
	clear_delayhide()
	thecontent=(which==-1)? "" : submenu[which]
	if (document.getElementById||document.all)
		menuobj.innerHTML=thecontent
	else if (document.layers){
		menuobj.document.write(thecontent)
		menuobj.document.close()
	}
	if (f) resetMenuOver();
}

function resetit(e){
	if (document.all&&!menuobj.contains(e.toElement)) {
		delayhide=setTimeout("showit(currentSection,true)",delay_hide);
	} else if (document.getElementById&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget)) {
		delayhide=setTimeout("showit(currentSection,true)",delay_hide);
	} else {
		delayhide=setTimeout("showit(currentSection,true)",delay_hide);
	}
}

function clear_delayhide(){
	if (window.delayhide)
	clearTimeout(delayhide)
}

function contains_ns6(a, b) {
	while (b.parentNode)
	if ((b = b.parentNode) == a)
	return true;
	return false;
}

function resetMenuOver() {
	for (i=1;i<=totalnav;i++) {
		if (currentSection!=i-1) {
			x=MM_findObj("main_nav"+i);
			x.src = x.src.replace("_o.gif","_n.gif");
		} else {
			x=MM_findObj("main_nav"+i);
			x.src = x.src.replace("_n.gif","_o.gif");
		}
	}
}

function resetAllMenu() {
	for (i=1;i<=totalnav;i++) {
		x=MM_findObj("main_nav"+i);
		x.src = x.src.replace("_o.gif","_n.gif");
	}
}

//-->
