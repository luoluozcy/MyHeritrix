/*
 * BBS Core扩展包
 * 2012-08-02 马超 精简
 * 2012-08-03 马超 删除网易宝信息查询以及赠送信消息查询
 * 2012-08-27 马超 修改登录组件url返回接口
 * 2012-08-29 马超 修改注册url地址
 */
(function(window,$,Core,Nav){
//释放window.$符号
$.noConflict();
var urlAgent = "http://bbs.caipiao.163.com/custom/login/login_success.php?bbsUrl=";
//扩展Core
$.extend(Core, {
	navConfig : {
		appName : "网易彩票",
		appID : "caipiao",
		regUrl : (function(){
			var url = document.URL, uri = encodeURIComponent;
			url = url.indexOf("from=")+1 ? url : Nav.$.addUrlPara(url, "from=reg");
			var loginUrl = Nav.$.addUrlPara(url, "isShowLogin=1");
			return "http://reg.163.com/reg/reg.jsp?product=caipiao&url="+ uri(urlAgent+uri(url)) +"&loginurl="+ uri(loginUrl);
		})(),
		loginConfig : {
			okUrl : urlAgent + "{1}"
		}
	},
	//其他通用初始化
	myInit : function(){
		//绑定事件监听
		$(document).delegate("a[needLogin]", "click", this.checkLoginLinks).undelegate("[a[href*=javascript:]","click");
		var supportHolder = !!("placeholder" in document.createElement("input"));
		supportHolder || window.setTimeout(function(){
			$("input[name=srchtxt]:visible").each(function(){
				var v = this.value;
				if(v != '请输入搜索内容') {
					$(this).removeClass("xg1");
				}else if( v == '' ){
					this.value = '请输入搜索内容';
					$(this).addClass("xg1");
				}
			});
		},1000);
	},
	//登录验证
	checkLoginLinks : function(e){
		//不再使用cookie验证，而使用服务器端输出
		var isLogin = Nav.isLogin(true), v = !!$(this).attr("needLogin"), url = this.href, current=document.URL;
		//如果url是类似#或者javascript之类的话，则返回当前页面
		if( url.toLowerCase().replace(/#.+$/,"") == current.toLowerCase().replace(/#.+$/,"") || url.indexOf("javascript:") >= 0 )
			url = current;
		if( v && !isLogin ){
			Nav.login(url);
			//阻止默认行为，但不能阻止冒泡
			e.preventDefault();
		}
	},
	/*
	 * ajax判断是否登录
	 * 2013-07-22 马超 因为论坛的校验接口跟主框架不一致
	 */
	isLogin : function( callback ){
		this.get("http://bbs.caipiao.163.com/custom/identity/queryLoginStatus.php", function(hasErr, txt){
			//如果通讯失败，则检查cookie
			//txt 0未登录 登录会返回用户名
			var user = hasErr ? this.easyNav.isLogin() ? easyNav.account : "" : txt == "0" ? "" : txt;
			callback && callback.call(this, user);
		});
	}
});
})(window,jQuery,Core,easyNav);

//覆盖 common.js 的初始化方法
//2012-08-15 马超 增加
function cardInit() {
	var cardShow = function (obj) {
		if(BROWSER.ie && BROWSER.ie < 7 && (obj.href.indexOf('username') != -1 || obj.href.indexOf('u-') != -1 )) {
			return;
		}
		pos = obj.getAttribute('c') == '1' ? '43' : obj.getAttribute('c');
		USERCARDST = setTimeout(function() {ajaxmenu(obj, 500, 1, 2, pos, null, 'p_pop card');}, 250);
	};
	var a = document.body.getElementsByTagName('a');
	for(var i = 0;i < a.length;i++){
		if(a[i].getAttribute('c')) {
			var href = a[i].href, orgHref = href;
			if( /\/(\d+)$/.test(href) ){ //精简url类型 xxx.com/121245
				orgHref = "space-uid-"+ RegExp.$1 +".html";
				a[i].setAttribute('shref', orgHref);
			}
			a[i].setAttribute('mid', hash(orgHref));
			a[i].onmouseover = function() {cardShow(this)};
			a[i].onmouseout = function() {clearTimeout(USERCARDST);};
		}
	}
}