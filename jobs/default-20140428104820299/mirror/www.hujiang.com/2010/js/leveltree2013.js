﻿(function () {
function w(s){return document.writeln(s)}; 
w("<style type=\"text/css\">");
w("/*** 2012/12/28 levelTree ***/#hj_leveltree");
w("{");
w("width: 1000px;");
w("height: 14px;");
w("position: relative;");
w("margin:0 0 7px;");
w("}");
w("#levelbox");
w("{");
w("border-top: 1px solid #ddd;");
w("border-bottom: 1px solid #ddd;");
w("border-left: 1px solid #ddd;");
w("width: 998px;");
w("height: 11px;");
w("}");
w(".levellist");
w("{");
w("height: 11px;");
w("float: left;");
w("border-right: 1px solid #ddd;");
w("padding-right: 2px;");
w("}");
w(".levellist li");
w("{");
w("float: left;");
w("display: inline;");
w("margin: 2px 0 2px 2px;");
w("width: 40px;");
w("height: 7px;");
w("overflow: hidden;");
w("}");
w(".levellist li a:link, .levellist li a:visited, .levellist li a:active");
w("{");
w("text-indent: -999em;");
w("display: block;");
w("width: 100%;");
w("height: 7px;");
w("overflow: hidden;");
w("}");
w("#level1 li");
w("{");
w("width: 66px;");
w("background-color: #FFCCCC;");
w("color: #FF6666;");
w("}");
w("#level1 li a:hover");
w("{");
w("background-color: #FF6666;");
w("text-decoration: none;");
w("}");
w("#level2 li");
w("{");
w("width: 67px;");
w("background-color: #FFE1C4;");
w("color: #FF6600;");
w("}");
w("#level2 li a:hover");
w("{");
w("background-color: #FF6600;");
w("}");
w("#level3 li");
w("{");
w("background-color: #F8F3A0;");
w("color: #FF9900;");
w("}");
w("#level3 li a:hover");
w("{");
w("background-color: #FF9900;");
w("}");
w("#level4 li");
w("{");
w("background-color: #D9FFB3;");
w("color: #66CC00;");
w("}");
w("#level4 li a:hover");
w("{");
w("background-color: #66CC00;");
w("}");
w("#level5 li");
w("{");
w("background-color: #BBEEDD;");
w("color: #4ED8AB;");
w("}");
w("#level5 li a:hover");
w("{");
w("background-color: #4ED8AB;");
w("}");
w("#level6 li");
w("{");
w("background-color: #D9F2FF;");
w("color: #33BDFF;");
w("}");
w("#level6 li a:hover");
w("{");
w("background-color: #33BDFF;");
w("}");
w("#level7 li");
w("{");
w("background-color: #EEE6F7;");
w("color: #884DC4;");
w("}");
w("#level7 li a:hover");
w("{");
w("background-color: #884DC4;");
w("}");
w("#levelbubble");
w("{");
w("position: absolute;");
w("top: -25px;");
w("color: white;");
w("background: green url(\'http://www.hjenglish.com/2009/images/bg_down_narrow.gif\') no-repeat center bottom;");
w("text-align: center;");
w("padding-left: 5px;");
w("padding-right: 5px;");
w("padding-top: 2px;");
w("padding-bottom: 7px;");
w("_padding-top: 2px;");
w("white-space: nowrap;");
w("z-index: 999;");
w("display: none;");
w("}");
w("</style>");
w("<div id=\"hj_leveltree\">");
w("<div id=\"levelbubble\">");
w("初中一年级");
w("</div>");
w("<div id=\"levelbox\">");
w("<ul class=\"levellist\" id=\"level1\">");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_零基础\')\" href=\"http://www.hjenglish.com/level/lingjichu/\"");
w("title=\"\">");
w("零基础</a></li>");
w("</ul>");
w("<ul class=\"levellist\" id=\"level2\">");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_少儿英语\')\" href=\"http://www.hjenglish.com/level/shaoer/\"");
w("title=\"\">");
w("少儿英语</a></li>");
w("</ul>");
w("<ul class=\"levellist\" id=\"level3\">");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_一年级\')\" href=\"http://www.hjenglish.com/level/yinianji/\"");
w("title=\"\">");
w("一年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_二年级\')\" href=\"http://www.hjenglish.com/level/ernianji/\"");
w("title=\"\">");
w("二年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_三年级\')\" href=\"http://www.hjenglish.com/level/sannianji/\"");
w("title=\"\">");
w("三年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_四年级\')\" href=\"http://www.hjenglish.com/level/sinianji/\"");
w("title=\"\">");
w("四年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_五年级\')\" href=\"http://www.hjenglish.com/level/wunianji/\"");
w("title=\"\">");
w("五年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_六年级\')\" href=\"http://www.hjenglish.com/level/liunianji/\"");
w("title=\"\">");
w("六年级</a></li>");
w("</ul>");
w("<ul class=\"levellist\" id=\"level4\">");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_七年级\')\" href=\"http://www.hjenglish.com/level/chuyi/\"");
w("title=\"\">");
w("七年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_八年级\')\" href=\"http://www.hjenglish.com/level/chuer/\"");
w("title=\"\">");
w("八年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_九年级\')\" href=\"http://www.hjenglish.com/level/chusan/\"");
w("title=\"\">");
w("九年级</a></li>");
w("</ul>");
w("<ul class=\"levellist\" id=\"level5\">");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_高中一年级\')\" href=\"http://www.hjenglish.com/level/gaoyi/\"");
w("title=\"\">");
w("高中一年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_高中二年级\')\" href=\"http://www.hjenglish.com/level/gaoer/\"");
w("title=\"\">");
w("高中二年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_高中三年级\')\" href=\"http://www.hjenglish.com/level/gaosan/\"");
w("title=\"\">");
w("高中三年级</a></li>");
w("</ul>");
w("<ul class=\"levellist\" id=\"level6\">");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_大学一年级\')\" href=\"http://www.hjenglish.com/level/dayi/\"");
w("title=\"\">");
w("大学一年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_大学二年级\')\" href=\"http://www.hjenglish.com/level/daer/\"");
w("title=\"\">");
w("大学二年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_大学三年级\')\" href=\"http://www.hjenglish.com/level/dasan/\"");
w("title=\"\">");
w("大学三年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_大学四年级\')\" href=\"http://www.hjenglish.com/level/dasi/\"");
w("title=\"\">");
w("大学四年级</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_研究生英语\')\" href=\"http://www.hjenglish.com/level/yanjiusheng/\"");
w("title=\"\">");
w("研究生英语</a></li>");
w("</ul>");
w("<ul class=\"levellist\" id=\"level7\">");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_职场新人\')\" href=\"http://www.hjenglish.com/level/zhichangxinren/\"");
w("title=\"\">");
w("职场新人</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_职场中层\')\" href=\"http://www.hjenglish.com/level/zhichangzhongceng/\"");
w("title=\"\">");
w("职场中层</a></li>");
w("<li class=\"\">");
w("<a target=\"_blank\" onclick=\"DoRecord(this,\'成长树_职场高层\')\" href=\"http://www.hjenglish.com/level/zhichanggaoceng/\"");
w("title=\"\">");
w("职场高层</a></li>");
w("</ul>");
w("</div>");
w("<!--end: levelbox -->");
w("</div>");
w("<!--end: hj_leveltree -->");
w("<script type=\"text/javascript\">");
w("//$(function() {");
w("$(\"#levelbox li\").hover(");
w("//mouse over");
w("function() {");
w("var $this = $(this);");
w("var $title = $(\"#levelbubble\");");
w("//set bubble content");
w("var text = $this.find(\"a\").text();");
w("$title.text(text);");
w("//get width of li & bubble");
w("var liWidth = $this.outerWidth();");
w("var titleWidth = $title.outerWidth();");
w("//the center position of li");
w("var center = $this.offset().left + liWidth / 2 - $(\"#levelbox\").offset().left;");
w("//get left of bubble");
w("var left = center - titleWidth / 2;");
w("//position of bubble backgound-position");
w("var arrow = -198;");
w("//width of growing tree");
w("var totalWidth = $(\"#levelbox\").width();");
w("//default position");
w("$title.css(\"background-position\", \"center bottom\");");
w("//over left");
w("if (left < 0) {");
w("$title.css(\"background-position\", (arrow + center) + \"px bottom\")");
w("left = 0;");
w("}");
w("//over right");
w("if (left + titleWidth > totalWidth) {");
w("left = totalWidth - titleWidth;");
w("$title.css(\"background-position\", (arrow + center - left) + \"px bottom\")");
w("}");
w("$title.css(\"left\", left);");
w("$title.css(\"background-color\", $this.css(\"color\"));");
w("$title.fadeIn(\"fast\");");
w("},");
w("//mouse out");
w("function() {");
w("var $title = $(\"#levelbubble\");");
w("$title.hide();");
w("});");
w("$(\"#levelbox li.current a\").css(\"background-color\", $(\"#levelbox li.current\").css(\"color\"));");
w("if (typeof (DoRecord) == \"undefined\") {");
w("DoRecord = function(obj, name) {");
w("var linkUrl = \"非链接\";");
w("if (obj.tagName == \"A\") linkUrl = obj.href;");
w("if (name.toString().length > 40) return;");
w("var linkName = encodeURI(name);");
w("var currentPage = location.href;");
w("if (linkUrl == null || linkUrl == \"\" || linkName == null || linkName == \"\") { return; }");
w("$.ajax({");
w("dataType: \"script\",");
w("url: \"http://www.hjenglish.com/2009/Handler/record.ashx\",");
w("data: { type: 1, linkurl: linkUrl, linkname: linkName, currentpage: currentPage, rdm: 100000 * Math.random() }");
w("});");
w("}");
w("}");
w("</script>");
})();

