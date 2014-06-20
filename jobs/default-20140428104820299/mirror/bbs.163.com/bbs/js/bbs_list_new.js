/**
*重载BbsUtil.showAdminButton,显示操作按钮
*/
BbsBoardAdmin.showAdminButton = function(){
      var adminButton_top = document.getElementById("adminButton_top");
	  var adminButton = document.getElementById("adminButton");

      var html = '<input type="button" onclick="javascript:BbsBoardAdmin.delArticles();" value="删除" /> ';
	  html += '<input type="button" onclick="javascript:BbsBoardAdmin.selectAll();" value="全选" /> ';
	  html += '<input type="button" onclick="javascript:BbsBoardAdmin.reverse();" value="反向选择" />';

      adminButton_top.innerHTML     = html;
      adminButton_top.style.display = "";
	  adminButton.innerHTML     = html;
      adminButton.style.display = "";

      this.setMode(true);
	}

/**
*重载BbsUtil.hideAdminButton,隐藏操作按钮
*/
BbsBoardAdmin.hideAdminButton = function(){
      var adminButton_top = document.getElementById("adminButton_top");
	  var adminButton = document.getElementById("adminButton");

      adminButton_top.style.display = "none";
	  adminButton.style.display = "none";

      this.setMode(false);
	}

/**
*重载BbsUtil.showLoginInfo方法,显示登录按钮或登录信息
*/
BbsUtil.showLoginInfo = function(){
		var obj = document.getElementById("myLoginButton");
		
		var objLeft = document.getElementById("myLoginLeftButton");
		var objArticleReply = document.getElementById("articleReplyLogin");
		
		var html = "";//公用头部登录按键
		var left_login_html = "";//列表页左侧登录
		var article_reply_login = "";//文章页回复框登录
		if(BbsCookie.isLogined()){
		    var username = BbsCookie.getPassport();
		    
		    var mode = BbsCookie.getCookie("admin_mode");//当前模式,管理模式或者正常模式.
		    if (typeof(noNicknameInfo) == "undefined") {
		          html += ('<a href="http://bbs.163.com/user/'+username+'" target="_blank" onclick="Bbs.toPersonal()">'+Userinfo.getNickname()+'</a>');
		     }
		    
		    var messageCount = Userinfo.getMessageCount();
		    if(messageCount < 0){
		        messageCount = 0;
		    }
		    
		    html += BbsUtil.getUserSignHtml();	// 签到的html

		    html += ' | <a href="http://bbs.163.com/user/personalCenter.do" target="_blank" onclick="Bbs.managerCenter()">我的管理中心</a>';
		    html += ' | <a target="_blank" href="http://t.163.com/?f=bbsnav" onclick="Bbs.toWeibo()">我的网易微博</a>(<a target="_blank" href="http://t.163.com/?f=bbsnav" onclick="Bbs.toWeibo()"><span class="cRed" id="weiboCount"></span></a>)';
		    html += ' | <a href="http://bbs.163.com/user/msg.do?msgType=2" target="_blank" onclick="Bbs.toMessageCenter()">消息中心</a><span class="topnav-msg">(<a href="http://bbs.163.com/user/msg.do?msgType=2" target="_blank"><span class="cRed">'+messageCount+'</span></a>)';
		    if(messageCount > 0 && CookieStatus.isShowMsgTip()){
		    	html += '<div class="bbsTinytips"><span class="bbsTinytips-arrow-down"></span><span class="bbsTinytips-arrow-close" onclick="javascript:BbsUtil.closeBbsTinytips();">关闭</span><p class="bbsTinytips-body">您有<strong class="cDRed">'+messageCount+'</strong>条新消息，<a class="cDRed" href="http://bbs.163.com/user/msg.do?msgType=2" target="_blank">点击查看</a></p></div>';
			}
		    html += '</span> '; 
		    html += ' | <a href="javascript:Bbs.logout();"  target="_self">退出</a>';
		    html += '<span id="boardadmin_span"> | <a href="http://bbs.news.163.com/list/tyro.html">帮助</a></span>';
		    html += ' <img src="http://bbs.163.com/bbs/img/phoneIcon.jpg"/><a href="http://help.3g.163.com/bbs/" target="_blank"><font color="red">手机版</font></a>';

		    left_login_html += '<a href="http://bbs.163.com/user/upgrade.do" target="_blank">升级中心</a>';
		    left_login_html += ' <a href="http://service.bbs.163.com/bbs/bulletin/160737911.html" target="_blank">积分兑换</a>';
		    left_login_html += ' <a href="http://help.3g.163.com/bbs/" target="_blank">手机版</a>';

			if(objArticleReply!=null&& typeof(objArticleReply) != "undefined"){
				objArticleReply.style.display="none";
			}
		}
		else{
			
		    html += '[<a href="javascript:Bbs.showLoginDialog(BbsUtil.reloadPage)" target="_self" class="fB cDRed">登录</a>] ';
		    html += BbsUtil.getUserSignHtml();	// 签到的html
		    html += '<a href="http://bbs.news.163.com/list/tyro.html" target="_blank">帮助</a>';
		    
		    left_login_html += '您尚未登录，<a class="fB cDRed" href="javascript:Bbs.showLoginDialog(BbsUtil.reloadPage)" target="_self">登录</a>';

			if(objArticleReply!=null&& typeof(objArticleReply) != "undefined"){
				objArticleReply.style.display="block";
			}
		}
		
		if (obj) {
			obj.innerHTML = html;
		}

		document.domain = location.hostname.replace(/^.*\.([\w]+\.[\w]+)$/, "$1");
			if (BbsCookie.isLogined()) {
				var email = username;
				if (email.indexOf("@") == -1) {
					email = email + "@163.com";
				}
				var url = "http://t.163.com/service/newMessage/" + email + "/1/0/0/0/1";
				var proxy = document.getElementById("iframeProxy").contentWindow;
				try {
					var xhr = proxy.gx();
					xhr.open("GET", url, false);
					xhr.send(null);
					if (xhr.status != 200) {
						NTES("#weiboCount").attr("innerHTML", 0);
					} else {
						try {
							var result = xhr.responseText;
							if (result) {
								eval(result);
								if (resultStatus && resultStatus.htlCount) {
									NTES("#weiboCount").attr("innerHTML", resultStatus.htlCount);
								}
							}
						} catch (err) {
							NTES("#weiboCount").attr("innerHTML", 0);
						}
					}
				} catch (err) {
					//NTES("#weiboCount").attr("innerHTML", 0);
				}
			}
			if(objLeft!=null&& typeof(objLeft) != "undefined"){
				objLeft.innerHTML = left_login_html;
			}

			if (filename == "list"){
				//管理模式按钮
				try {
					BbsBoardAdmin.load();
				}
				catch (e){}
			}
		
		////////
};

/**
*关闭消息提示便笺
*/

BbsUtil.closeBbsTinytips = function () {
	var obj = $$("div.bbsTinytips");
    if (obj != null) {
    	obj[0].hide();
    	CookieStatus.closeMsgTip();
    }
};

/**
 * 获取签到的html
 * @create_date 2011-5-16
 * @last_modified 2011-5-16
 * @author Ben Liu
 */

BbsUtil.getUserSignHtml = function () {
	var html = [];
	html.push(' <span class="signByday topnav-signByday">');
	
	var signClass = 'signByday-cell';
	if (BbsCookie.isLogined()) {
		var username = BbsCookie.getPassport();
		var isUserSigned = BbsCookie.getCookie(username + BbsUtil.userSignCookieKey);
		if (isUserSigned && isUserSigned == 'y') {
			signClass += ' signByday-signed';
		}
	}
	
	html.push(' <a id="signBydaySpan" class="'+signClass+'" href="javascript:;" onclick="javascript:BbsUtil.addUserSign();"> 签到</a>');
	
	// 如果用户点击了关闭提示，记住24小时
	var hideCss = '';
	//if (BbsCookie.isLogined()) {	// 仅当用户登录了之后，才记住是否关闭提示的状态
	var isUserClosedTip = BbsCookie.getCookie(BbsUtil.userOperationCookieKey);
	//log('get cookie:'+BbsUtil.userOperationCookieKey+'-'+isUserClosedTip);
	if (isUserClosedTip && isUserClosedTip == 'y') {
		hideCss = ' style="display:none;" ';
	}
	//}
	
	// 取消签到提示的标签
	// 2011-6-27 by Ben Liu
	//html.push('	<div id="bbsRedTinytips0" class="bbsRedTinytips"'+hideCss+'>');
	//html.push('    	<span class="bbsRedTinytips-arrow-down"></span>');
	//html.push('		<span class="bbsRedTinytips-arrow-close" onclick="javascript:BbsUtil.closeUserSignTips();" title="关闭"></span>');
	//html.push('   	<p class="bbsRedTinytips-body">每日签到送积分，快来试试手气！</p>');
	//html.push('  </div>');
	
	html.push('</span>');
	
	return html.join('');
};
/**
 * 用户签到
 * @create_date 2011-5-16
 * @last_modified 2011-5-17
 * @author Ben Liu
 */
BbsUtil.userSignCookieKey = '_u_s_';
BbsUtil.userOperationCookieKey = '_u_p_';
// 加锁，防止用户重复点击。
BbsUtil.userSignLocked = false;
BbsUtil.addUserSign = function () {
	BbsUtil.clickStat("signin");
	//var startTime = new Date().getTime();
	
	// 如果签到请求已经在执行，返回
	if (BbsUtil.userSignLocked) {
		return false;
	}
	// 标记执行签到请求。
	BbsUtil.userSignLocked = true;
	var username = BbsCookie.getPassport();
	
	if (!BbsCookie.isLogined()) {	// 没有登录，显示登陆框
		// 释放锁
		BbsUtil.userSignLocked = false;
		Bbs.showLoginDialog(true);  //显示登录框，登录成功后自动回调
		return false;
	} else {
		var val = BbsCookie.getCookie(username + BbsUtil.userSignCookieKey);
		//log('get cookie:'+username + BbsUtil.userSignCookieKey+'-'+val);
		if (val && val == 'y') {	// 签到失败，已经签到过了。
			// 释放锁
			BbsUtil.userSignLocked = false;
			return false;
		}
		var signFailedMsg = '签到失败，请稍后重试。';
		var signSuccessMsgPrefix = '今日已成功签到（获得';
		var signSuccessMsgSuffix = '积分），请明日再来领取积分。';
		var signedMsg = '您今天已签到过了，请明天再来吧！';
		
		// 签到url
		var url = 'http://service.bbs.163.com/bbs/article/user_sign.jsp';
		// 签到的回调函数
		var onSigned = function () {
			// 测试性能
			//var endTime = new Date().getTime();
			//if (window.console) {
			//	window.console.log('Sign spent '+(endTime - startTime) + 'ms, expire in ' + (userSignStatus.expire/(3600*1000)) + 'h.');
			//}
			
			if (_user_sign_code == 0 || _user_sign_code == -1 || _user_sign_code == -2) {
				var code = _user_sign_code;
				var expire = _user_sign_expire;
				// alert('code:'+code+',expire:'+expire);
				if (code == 0 || code == -1) {	// 签到成功（或者已经签到过了），写入cookie。
					// 使用username+"_user_signed"作为cookie的key
					//log('set cookie:'+username + BbsUtil.userSignCookieKey+'-y, expire:'+expire);
					BbsCookie.setCookie(username + BbsUtil.userSignCookieKey, 'y', expire, '/');
					// 更新样式
					BbsUtil.updateUserSignedCss();
					if (code == 0) {
						var point = 10;
						if (_user_sign_point) {
							point = _user_sign_point;
						}
						alert(signSuccessMsgPrefix+point+signSuccessMsgSuffix);
					} else {
						alert(signedMsg);
					}
				} else if(code == -2) {	// 用户没有登录
					BbsUtil.userSignLocked = false;
					Bbs.showLoginDialog();  //显示登录框
				} else {	// 签到失败，显示提示信息。
					alert(signFailedMsg);
				}
			} else {	// 签到失败，显示提示信息。
				alert(signFailedMsg);
			}
			// 释放锁
			BbsUtil.userSignLocked = false;
			
		};
		// jsonp的方式引入跨域的数据
		_ntes._importJs(url, onSigned);

	}
	
};
/**
 * 更新签到按钮的样式
 * @create_date 2011-5-17
 * @last_modified 2011-5-17
 * @author Ben Liu
 */
BbsUtil.updateUserSignedCss = function () {
	var item = document.getElementById('signBydaySpan');
	if (item) {
		item.className = item.className + ' signByday-signed';
	}
	//var items = $$('.signByday span.signByday-cell');
	//if (items[0] && items[0].className) {
	//	items[0].className = items[0].className + ' signByday-signed';
	//}
	// NTES(".signByday span.signByday-cell").addCss('signByday-signed');
};

/**
 * 关闭签到提示tip
 * @create_date 2011-5-17
 * @last_modified 2011-5-17
 * @author Ben Liu
 */
BbsUtil.closeUserSignTips = function () {
	var item = document.getElementById('bbsRedTinytips0');
	if (item) {
		item.style.display = 'none';
	}
	//NTES(".bbsRedTinytips").addCss('display:none;');
	//需要记住用户操作。记住24小时，希望用户点了一次之后。
	var expire = 24*3600*1000;
	//log('set cookie:'+BbsUtil.userOperationCookieKey+'-y, expire:'+expire);
	BbsCookie.setCookie(BbsUtil.userOperationCookieKey, 'y', expire, '/');
};

var BbsList = {
	"init":function(update){
      Userinfo.loadUserinfo();
      
      if (!update) {	// 是否是修改帖子
    	  //log('init image share.');
    	  BbsList.initWeibo();
          BbsList.initImageShare();
          BbsList.initGuessIfPossible();
          if(global_channel=="digi" || global_channel=="travel" || global_pageDbname=="test_bbs"){
        	  BbsList.initImageExif();
          }
      }
	}
	,"initWeibo":function(){
	 /**
       * 与微博互通，帖子查看页，初始化“他的微博”链接。开始。
       * 更新：只有当点击的时候，才请求微博api
       * @create_date 2011-5-10
       * @last_modified 2011-6-1
       * @author Ben Liu
       */
		var weiboLinks = NTES(".tie-author-column a.info-weibo");
		var weiboUrlPrefix = 'http://t.163.com/';
		weiboLinks.each(function(i){
			var trigger = this;
			var userEmail = trigger.name;
			if (userEmail && userEmail.length > 0) {
				if(!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(userEmail)){
					userEmail += "@163.com";
				}
				NTES.event.addEvent(trigger, "click", function(e) {
					// 没有加载screenName才会去加载，确保每一个链接仅请求一次微博服务
					if (trigger.href && trigger.href.indexOf(weiboUrlPrefix) < 0) {
						document.domain = location.hostname.replace(/^.*\.([\w]+\.[\w]+)$/,'$1');
						//alert(document.domain);
						var proxy = document.getElementById("iframeProxy").contentWindow;
						try {
							var xhr = proxy.gx();
							xhr.open("GET", "http://t.163.com/service/newMessage/" + userEmail + "/1/0/0/0/1", false);
							xhr.send(null);
							if (xhr.status != 200) {
								trigger.href = weiboUrlPrefix + "?f=bbsleft";
							} else {
								try {
									var result = xhr.responseText;
									var fixed = false;
									if (result) {
										eval(result);
										if (resultStatus && resultStatus.screenName) {
											trigger.href = weiboUrlPrefix + resultStatus.screenName + "?f=bbsleft";
											fixed = true
										}
									}
									if (!fixed) {
										trigger.href = weiboUrlPrefix + "?f=bbsleft";
									}
								} catch (err) {
									trigger.href = weiboUrlPrefix + "?f=bbsleft";
								}
							}
						} catch (err) {
							trigger.href = weiboUrlPrefix + "?f=bbsleft";
						}
					}
					
					window.open(trigger.href);
					return false;
				});
			}
		});
	}
	/**
     * 修复“转发至微博”的图片加链接就会出问题的bug。
     * @create_date 2011-7-26
     * @last_modified 
     * @author Ben Liu
     */
	,"initImageShare":function(){
		
		var title = "", // 主贴标题
		soure = "网易论坛",
		location = window.location.href.replace(/(#|\?).*$/g,''), // 当前页面地址
		picsElem = NTES(".tie-content img");
		
		title = NTES('h2.tie-con-hd-title');
		title = _ntes.DOM.getInnerText(title[0]);
		
		var warp = document.createElement('span'), docbody = document.body, roundbtn, gourl, tid;
		warp.className = "warpPicBox";
		warp.innerHTML = '<span class="roundbtn roundbtn-white push-163tblog"><a href="#"><span class="icons-tinyblog warpPicBox-inline-block"></span><span class="warpPicBox-inline-block">转发至微博</span></a></span>';
		roundbtn = NTES.one('.roundbtn', warp);
		docbody.insertBefore(warp, docbody.firstChild);
		
		picsElem.each(function(i){
			if(!(/^http\:\/\/[cm]img.163.com\/.*\.(gif|png|jpg)$/.test(this.src)) && !(/\/bbs2009\/img\//.test(this.src))){
				var t = this, showed = false;
				
				var author_username = global_author_username;
				if (author_username.indexOf('@') < 0 ) {
					author_username += '@163.com';
				}
				
				function show(){
					//if (showed) return;
					showed = true;
					tid && clearTimeout(tid);
					var pos = BbsUtil.getAbsPosition(t);
					warp.style.left = pos.x + "px";
					warp.style.top = pos.y + t.offsetHeight - warp.offsetHeight + "px";
					//gourl = "http://t.163.com/article/user/checkLogin.do?method=click&keyfrom=share1.bbs.note&togImg=true&check1stImg=true&link=http://bbs.163.com/&source="+encodeURIComponent(soure)+"&info="+encodeURIComponent("分享"+ soure +"图文《" + title + "》 " + location)+"&title="+encodeURIComponent(title)+"&images="+encodeURIComponent(t.src);
					
					gourl = "http://t.163.com/article/user/checkLogin.do?"+
					"method=" + encodeURIComponent("click") +
					"&keyfrom=" + encodeURIComponent("share1.bbs.tie") +
					"&source=" + encodeURIComponent(soure) +
					"&info=" + encodeURIComponent(title + " " + location) +
					"&link=" + encodeURIComponent("http://bbs.163.com/") +
					"&images=" + encodeURIComponent(t.src) +
					"&togImg=" + encodeURIComponent("true") +
					"&check1stImg=" + encodeURIComponent("true") +
					"&email=" + encodeURIComponent(author_username) +
					"&author=" + encodeURIComponent(global_author_nickname) +
					"&type=" +encodeURIComponent("bbs") +
					"&title=" + encodeURIComponent(title);
				};
				function hide(){
					tid = setTimeout(function(){
						showed = false;
						warp.style.left = "-999px";
					},200);
				}
				NTES(t).addEvent("mouseover", show);
				NTES(t).addEvent("mouseout", hide);
			}
		});
		
		NTES(warp).addEvent("mouseover", function(){
			tid && clearTimeout(tid);
		});
		NTES('.push-163tblog', warp).addEvent("click", function(){
			gourl && window.open(
				gourl,
				'newwindow',
				'height=330, width=650, toolbar=no, menubar=no, scrollbars=no,resizable=yes,location=no, status=no'
			);
			return false;
		});
	}
	,"initGuessIfPossible": function(){
		/**
		   * 初始化竞猜，如果该帖子含有竞猜内容
		   * @create_date 2011-6-17
		   * @last_modified 2011-6-17
		   * @author Ben Liu
		   */
		
		// 初始化竞猜数据
		// 查找竞猜id
		var guessIds = [];
		NTES("div._guess_field").each(function(i){
			var srcId = this.id;
			guessIds.push(srcId.substring('_guess_no_'.length));
		});
		
		if (guessIds.length <= 0) {
			return false;
		}
		// 发送dwr请求
		Dwr.getGuessInfo(guessIds.join(','), function (json) {
			if (json) {
				json = eval('('+json+')');
				if (json && json.length && json.length > 0) {
					BbsGuess.drawGuessOptions(json);
				}
			}
		});
		
	}
	,"toggle":function(objId){
		obj=document.getElementById(objId);
		obj.style.display=(obj.style.display=="")?"none":"";
	}

	,"changeIframe":function(){
		BbsList.toggle("leftBar");
		var imgObj=document.getElementById("changeImg");
		var main=document.getElementById("mainArea");
		imgObj.src=(imgObj.src.indexOf("left")!=-1)?imgObj.src.replace('left','right'):imgObj.src.replace('right','left');
		main.style.marginLeft=(main.style.marginLeft=='0px')?"145px":"0px";

	}

  ,"onTabChange":function(hrefpre,divpre,idx,maxidx)
    {
      var i=1;
      while(i<=maxidx)
      {
        if (i!=idx)
        {
          href_obj = document.getElementById(hrefpre + i);
          if (href_obj != null){
          	href_obj.className = "";
        	}
          div_obj = document.getElementById(divpre + i);
          if (div_obj != null){
          	div_obj.style.display = "none";
        	}
        }
        i = i + 1;
      }
      href_obj = document.getElementById(hrefpre+idx);
      if ( href_obj != null ){
      	href_obj.className = "active";
      }
      div_obj = document.getElementById(divpre + idx);
      if (div_obj != null){
      	div_obj.style.display = "block";
    	}
    }
  	,"initImageExif": function(){
		/**
		 * 对帖子中图片插入EXIF信息查看 最小图片400x400
		 */
  		
  		var obj1 = NTES('#exifPostImgUrlList');
  		var obj2 = NTES('#exifSrcImgUrlList');
  		
  		if (!obj1 || !obj2) {
  			return;
  		}
  		
		var picsElem = NTES('.tie-content img'),
		    exifpop = document.createElement('div'),
		    docbody = document.body,
		    postImgs = obj1.value.split('$$'),
		    srcImgs = obj2.value.split('$$'),
			index = 0;
		exifpop.className = 'articleExifPop';
		exifpop.innerHTML = '<div class="articleExifPop_bg"></div><div class="articleExifPop_cnt"><a href="#close" target="_self" class="articleExifPop_close js_articleExifPopClose">关闭</a><div id="photoExifContent"><h3>加载中...</h3></div></div>';
		exifpop.style.left = '-9999px';
		docbody.insertBefore(exifpop, docbody.firstChild);
		
		NTES('.js_articleExifPopClose').addEvent('click', function(){
			exifpop.style.left = '-9999px';
		})
		
		picsElem.each(function(i){
				var pic = NTES(this),
				    exifbox = document.createElement('span'),
					btn = document.createElement('a'),
					a = document.createElement('span'),
					srcurl = '';
				for( i = 0; i < postImgs.length; i++ ){
					if( postImgs[i] == pic.src ){
						srcurl = srcImgs[i];
					}
				}
				if( pic.complete && srcurl != '' ){
					BbsList.exifImgOnload(pic, exifbox, btn, exifpop, srcurl);
				} else if ( srcurl != '' ) {
					pic.addEvent( 'load', function(){
						BbsList.exifImgOnload(this, exifbox, btn, exifpop, srcurl);
					});
				}
		});
		
	}
	,"exifImgOnload": function(pic, exifbox, btn, exifpop, srcurl){
		/**
		 * 需要显示EXIF信息的图片处理
		 */
		var width = pic.width,
			height = pic.height;
		if(parseInt(width) >= 400 && parseInt(height) >= 400){
			exifbox.className = 'articleExifBox';
			pic.parentNode.insertBefore(exifbox, pic);
			exifbox.appendChild(pic);
			btn.className = 'articleExifIcon';
			btn.href = '#exif';
			btn.innerHTML = '拍摄信息';
			btn.setAttribute('srcurl', srcurl);
			exifbox.appendChild(btn);
			NTES(btn).addEvent('click', function(e){
				
				e.preventDefault();
				var pos = BbsUtil.getAbsPosition(pic),
					left = pos.x + pic.offsetWidth - exifpop.offsetWidth - 1 + 'px',
					top = pos.y + pic.offsetHeight - exifpop.offsetHeight - 1 + "px";
				if(parseInt(exifpop.style.left) == parseInt(left) && parseInt(exifpop.style.top) == parseInt(top)) {
					exifpop.style.left = '-9999px';
				} else {
					Bbs.buildExifdata(srcurl, NTES('#photoExifContent'), function(){
						exifpop.style.left = pos.x + pic.offsetWidth - exifpop.offsetWidth - 1 + 'px';
						exifpop.style.top = pos.y + pic.offsetHeight - exifpop.offsetHeight - 1 + "px";
					});

				}
			});
		}
	}
}



/**
 * 简洁版面
 */
var BbsSimple = {
    "init":function() {
        var url = document.location.href;
        if (url.indexOf(".html")==-1) {
            return;
        }

        
        
        if (url.indexOf("/simple/")>0) {
            try {
            	  BbsList.changeIframe();//隐藏左侧导航栏
            }
            catch (e){}
            
            this.hideHeader();
            this.hideFooter();
			this.hideFloatLayer();
            return;
        }
        else if (url.indexOf("/noheader/") > 0) {
            this.hideHeader();
            return;
        }
        else if (url.indexOf("/nofooter/") > 0) {
            this.hideFooter();
            return;
        }
        else if (url.indexOf("/nofloatlayer/") > 0) {
            this.hideFloatLayer();
            return;
        }
                
    }

    ,"hideHeader":function() {
        var obj = $("boardHeader");
        if (obj != null) {
            obj.style.display = "none";
        }
    }
    ,"hideFooter":function() {
        var obj = $("footer");
        if (obj != null) {
            obj.style.display = "none";
        }        
    }

	,"hideFloatLayer":function() {
        var obj = $("floatLayer");
        if (obj != null) {
            obj.style.display = "none";
        }        
    }
}




Bbs.gotopage = function(pageid) {
	var e;
	if (typeof(event)=="undefined") {
		var func = (Bbs.gotopage.caller);
		e = func.arguments[0];
	}
	else {
		e = event;
	}

	var ieKey=e.keyCode;
	if (ieKey!=13){
	  return;
	}

	this.gotoPage(pageid);
}


Bbs.gotoPage = function(pageid) {
	if (pageid=="") {
		alert("请输入页码.");
		return false;
	}

	var url = "/bbs/"+filename+".jsp?boardid="+global_boardid;
	if (filename == "article") {
		url += "&articleid="+global_threadid;
	}
	window.location.href = url + "&pageid="+pageid;
}

Bbs.gotoSubmit = function(obj) {
	var parent = obj.parentNode;
	var childs = parent.childNodes;
	var input = null;
	for (var i=0; i<childs.length; i++) {
		if (childs[i].tagName == "INPUT") {
			input = childs[i];
			break;
		}
	}
	if (input == null) {
		alert("获取输入框出错.");
		return false;
	}
	var pageid = input.value;
	this.gotoPage(pageid);
}

/**
 * 插入微博名片
 * @create_date 2011-7-18
 * @last_modified 
 * @author Ben Liu
 */

var WeiboCard = {
	// 当前选中的微博名片的主题
	"_weibo_card_selected_theme":1
	// 提示内容
	,"_weibo_card_template":'\
		<em class="synTinyblog-tips-close">关闭</em>\
		<em class="synTinyblog-tips-arrow"></em>\
	    <p>发贴可以插入微博名片了&nbsp;&nbsp;</p>'
	// 正在执行插入，加锁，防止用户重复点击“插入”按钮
	,"isInserting":false
	// 选择名片的皮肤
	,"selectTheme":function(obj, screen_name, num){
		if(num) {
			var iframe = NTES('#_weibo_card_iframe');
			if (iframe) {
				iframe.src = 'http://t.163.com/page/card.html?'+screen_name+'|0|0|'+num;
			}
			if (obj) {
				NTES('.dialogBox-weibo-skin-current').each(function () {
					this.className = 'dialogBox-weibo-skin';
				});
				obj.className = obj.className + ' dialogBox-weibo-skin-current';
			}
			this._weibo_card_selected_theme = num;
		}
	}
	// 点击插入
	,"doInsert":function(user_email, screen_name){
		if (this.isInserting) {
			return false;
		}
		
		this.isInserting = true;
		
		var errorMsg = '插入微博名片出错，请稍后重试。';
		if (!user_email || !screen_name || user_email == '' || screen_name == '') {
			alert(errorMsg);
			this.isInserting = false;
			return false;
		}
		
		Dwr.insertWeiboCard(user_email, screen_name, this._weibo_card_selected_theme, function(json) {
			if (json) {
				json = eval('('+json+')');
				result = json.result;
				if (result) {
					var cardPlugin = '[plugin:tcard]'+json.card_id+'[/plugin:tcard]';
					EditorExtend.insert({text:cardPlugin});
					Dialog.close();
					return true;
				} else {
					alert(json.msg);
					return false;
				}
			}
			
			alert(errorMsg);
			return false;
		});
		
		this.isInserting = false;
		return true;
	}
	// 添加微博名片插入的提示
	,"appendWeiboCardTip":function(){
		var editor = NTES('div#divComposeEditor')[0];
		if (editor) {
			var link = NTES('a.g-editor-btninfo-bbstcard', editor);
			if (link) {
				// 绑定点击微博名片按钮的事件
				link.addEvent("click", function () {
					EditorExtend.insertWeiboCard();
				});
				
				link = link[0];
				
				// 如果没有关闭tip，显示
				// 如果用户未登录，也显示
				if (!CookieStatus.isWeiboCardTipClosed() || !BbsCookie.isLogined()) {
					var icon = link.parentNode.parentNode;
					if (icon) {
						icon.className = icon.className + ' g-editor-bbsweibo';
						var div = document.createElement('div');
						div.className = "synTinyblog-tips";
						div.innerHTML = this._weibo_card_template;
						icon.appendChild(div);
					}
					
					var closer = NTES('.synTinyblog-tips-close', icon);
					if (closer) {
						// 绑定关闭提示事件
						closer.addEvent("click", function () {
							var tipPanel = NTES('.synTinyblog-tips', icon)[0];
							tipPanel.parentNode.removeChild(tipPanel);
							CookieStatus.closeWeiboCardTip();
							// 关闭icon选择的样式
							var selectedTag = 'g-editor-btn-on';
							if (icon.className.indexOf (selectedTag) >= 0) {
								icon.className = icon.className.replace(selectedTag, '');
							}
						});
					}
				}
			}
		}
	}
};

/**
 * DOM操作接口。开始。
 * @create_date 2011-5-10
 * @last_modified 2011-5-10
 * @author Ben Liu
 */
//简化DOM操作 =================
if (typeof (_ntes) == "undefined")
	_ntes = {};
if (typeof (_ntes.DOM) == "undefined")
	_ntes.DOM = {};

if (typeof (_ntes._importJs) == "undefined")
	_ntes._importJs = function (url, onComplete, charset, doc) {
	
	// 动态加载外部Javascript文件
	/// @param {String} 文件地址
	/// @param {Function} 加载完成后执行的回调函数
	/// @param {String} 编码
	/// @param {Object} 文档对象，默认为当前文档
	
	doc = doc || document;
	
	var script = doc.createElement("script");
	script.language = "javascript"; script.type = "text/javascript";
	charset && (script.charset = charset);

	// 读取完后的操作
	script.onload = script.onreadystatechange = function() {
		if (!script.readyState || "loaded" == script.readyState || "complete" == script.readyState) {
			onComplete && onComplete();
			script.onload = script.onreadystatechange = null;
			// 测试注释
			script.parentNode.removeChild(script);
		}
	};

	var head = document.getElementsByTagName("head")[0]|| document.documentElement;
	script.src = url;
	head.insertBefore(script, head.firstChild);
	//head.appendChild(script);
	//jRaiser.one("head", doc).appendChild(script);
};

/**
 * get text of object
 */
_ntes.DOM.getInnerText = function(node) {
	var text = "";
	
	if (node && node.childNodes) {	// 如果节点存在，且有子节点
		var list = node.childNodes;
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			if (item && item.childNodes) {	// 如果有子节点，继续找
				text += _ntes.DOM.getInnerText(item);
			}
			if (item.nodeValue) {
				text += item.nodeValue;
			}
		}
	}

	return text;
};

/**
 * DOM操作接口。结束。
 * @create_date 2011-5-10
 * @last_modified 2011-5-10
 * @author Ben Liu
 */
