/**
*����BbsUtil.showAdminButton,��ʾ������ť
*/
BbsBoardAdmin.showAdminButton = function(){
      var adminButton_top = document.getElementById("adminButton_top");
	  var adminButton = document.getElementById("adminButton");

      var html = '<input type="button" onclick="javascript:BbsBoardAdmin.delArticles();" value="ɾ��" /> ';
	  html += '<input type="button" onclick="javascript:BbsBoardAdmin.selectAll();" value="ȫѡ" /> ';
	  html += '<input type="button" onclick="javascript:BbsBoardAdmin.reverse();" value="����ѡ��" />';

      adminButton_top.innerHTML     = html;
      adminButton_top.style.display = "";
	  adminButton.innerHTML     = html;
      adminButton.style.display = "";

      this.setMode(true);
	}

/**
*����BbsUtil.hideAdminButton,���ز�����ť
*/
BbsBoardAdmin.hideAdminButton = function(){
      var adminButton_top = document.getElementById("adminButton_top");
	  var adminButton = document.getElementById("adminButton");

      adminButton_top.style.display = "none";
	  adminButton.style.display = "none";

      this.setMode(false);
	}

/**
*����BbsUtil.showLoginInfo����,��ʾ��¼��ť���¼��Ϣ
*/
BbsUtil.showLoginInfo = function(){
		var obj = document.getElementById("myLoginButton");
		
		var objLeft = document.getElementById("myLoginLeftButton");
		var objArticleReply = document.getElementById("articleReplyLogin");
		
		var html = "";//����ͷ����¼����
		var left_login_html = "";//�б�ҳ����¼
		var article_reply_login = "";//����ҳ�ظ����¼
		if(BbsCookie.isLogined()){
		    var username = BbsCookie.getPassport();
		    
		    var mode = BbsCookie.getCookie("admin_mode");//��ǰģʽ,����ģʽ��������ģʽ.
		    if (typeof(noNicknameInfo) == "undefined") {
		          html += ('<a href="http://bbs.163.com/user/'+username+'" target="_blank" onclick="Bbs.toPersonal()">'+Userinfo.getNickname()+'</a>');
		     }
		    
		    var messageCount = Userinfo.getMessageCount();
		    if(messageCount < 0){
		        messageCount = 0;
		    }
		    
		    html += BbsUtil.getUserSignHtml();	// ǩ����html

		    html += ' | <a href="http://bbs.163.com/user/personalCenter.do" target="_blank" onclick="Bbs.managerCenter()">�ҵĹ�������</a>';
		    html += ' | <a target="_blank" href="http://t.163.com/?f=bbsnav" onclick="Bbs.toWeibo()">�ҵ�����΢��</a>(<a target="_blank" href="http://t.163.com/?f=bbsnav" onclick="Bbs.toWeibo()"><span class="cRed" id="weiboCount"></span></a>)';
		    html += ' | <a href="http://bbs.163.com/user/msg.do?msgType=2" target="_blank" onclick="Bbs.toMessageCenter()">��Ϣ����</a><span class="topnav-msg">(<a href="http://bbs.163.com/user/msg.do?msgType=2" target="_blank"><span class="cRed">'+messageCount+'</span></a>)';
		    if(messageCount > 0 && CookieStatus.isShowMsgTip()){
		    	html += '<div class="bbsTinytips"><span class="bbsTinytips-arrow-down"></span><span class="bbsTinytips-arrow-close" onclick="javascript:BbsUtil.closeBbsTinytips();">�ر�</span><p class="bbsTinytips-body">����<strong class="cDRed">'+messageCount+'</strong>������Ϣ��<a class="cDRed" href="http://bbs.163.com/user/msg.do?msgType=2" target="_blank">����鿴</a></p></div>';
			}
		    html += '</span> '; 
		    html += ' | <a href="javascript:Bbs.logout();"  target="_self">�˳�</a>';
		    html += '<span id="boardadmin_span"> | <a href="http://bbs.news.163.com/list/tyro.html">����</a></span>';
		    html += ' <img src="http://bbs.163.com/bbs/img/phoneIcon.jpg"/><a href="http://help.3g.163.com/bbs/" target="_blank"><font color="red">�ֻ���</font></a>';

		    left_login_html += '<a href="http://bbs.163.com/user/upgrade.do" target="_blank">��������</a>';
		    left_login_html += ' <a href="http://service.bbs.163.com/bbs/bulletin/160737911.html" target="_blank">���ֶһ�</a>';
		    left_login_html += ' <a href="http://help.3g.163.com/bbs/" target="_blank">�ֻ���</a>';

			if(objArticleReply!=null&& typeof(objArticleReply) != "undefined"){
				objArticleReply.style.display="none";
			}
		}
		else{
			
		    html += '[<a href="javascript:Bbs.showLoginDialog(BbsUtil.reloadPage)" target="_self" class="fB cDRed">��¼</a>] ';
		    html += BbsUtil.getUserSignHtml();	// ǩ����html
		    html += '<a href="http://bbs.news.163.com/list/tyro.html" target="_blank">����</a>';
		    
		    left_login_html += '����δ��¼��<a class="fB cDRed" href="javascript:Bbs.showLoginDialog(BbsUtil.reloadPage)" target="_self">��¼</a>';

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
				//����ģʽ��ť
				try {
					BbsBoardAdmin.load();
				}
				catch (e){}
			}
		
		////////
};

/**
*�ر���Ϣ��ʾ���
*/

BbsUtil.closeBbsTinytips = function () {
	var obj = $$("div.bbsTinytips");
    if (obj != null) {
    	obj[0].hide();
    	CookieStatus.closeMsgTip();
    }
};

/**
 * ��ȡǩ����html
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
	
	html.push(' <a id="signBydaySpan" class="'+signClass+'" href="javascript:;" onclick="javascript:BbsUtil.addUserSign();"> ǩ��</a>');
	
	// ����û�����˹ر���ʾ����ס24Сʱ
	var hideCss = '';
	//if (BbsCookie.isLogined()) {	// �����û���¼��֮�󣬲ż�ס�Ƿ�ر���ʾ��״̬
	var isUserClosedTip = BbsCookie.getCookie(BbsUtil.userOperationCookieKey);
	//log('get cookie:'+BbsUtil.userOperationCookieKey+'-'+isUserClosedTip);
	if (isUserClosedTip && isUserClosedTip == 'y') {
		hideCss = ' style="display:none;" ';
	}
	//}
	
	// ȡ��ǩ����ʾ�ı�ǩ
	// 2011-6-27 by Ben Liu
	//html.push('	<div id="bbsRedTinytips0" class="bbsRedTinytips"'+hideCss+'>');
	//html.push('    	<span class="bbsRedTinytips-arrow-down"></span>');
	//html.push('		<span class="bbsRedTinytips-arrow-close" onclick="javascript:BbsUtil.closeUserSignTips();" title="�ر�"></span>');
	//html.push('   	<p class="bbsRedTinytips-body">ÿ��ǩ���ͻ��֣���������������</p>');
	//html.push('  </div>');
	
	html.push('</span>');
	
	return html.join('');
};
/**
 * �û�ǩ��
 * @create_date 2011-5-16
 * @last_modified 2011-5-17
 * @author Ben Liu
 */
BbsUtil.userSignCookieKey = '_u_s_';
BbsUtil.userOperationCookieKey = '_u_p_';
// ��������ֹ�û��ظ������
BbsUtil.userSignLocked = false;
BbsUtil.addUserSign = function () {
	BbsUtil.clickStat("signin");
	//var startTime = new Date().getTime();
	
	// ���ǩ�������Ѿ���ִ�У�����
	if (BbsUtil.userSignLocked) {
		return false;
	}
	// ���ִ��ǩ������
	BbsUtil.userSignLocked = true;
	var username = BbsCookie.getPassport();
	
	if (!BbsCookie.isLogined()) {	// û�е�¼����ʾ��½��
		// �ͷ���
		BbsUtil.userSignLocked = false;
		Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
		return false;
	} else {
		var val = BbsCookie.getCookie(username + BbsUtil.userSignCookieKey);
		//log('get cookie:'+username + BbsUtil.userSignCookieKey+'-'+val);
		if (val && val == 'y') {	// ǩ��ʧ�ܣ��Ѿ�ǩ�����ˡ�
			// �ͷ���
			BbsUtil.userSignLocked = false;
			return false;
		}
		var signFailedMsg = 'ǩ��ʧ�ܣ����Ժ����ԡ�';
		var signSuccessMsgPrefix = '�����ѳɹ�ǩ�������';
		var signSuccessMsgSuffix = '���֣���������������ȡ���֡�';
		var signedMsg = '��������ǩ�����ˣ������������ɣ�';
		
		// ǩ��url
		var url = 'http://service.bbs.163.com/bbs/article/user_sign.jsp';
		// ǩ���Ļص�����
		var onSigned = function () {
			// ��������
			//var endTime = new Date().getTime();
			//if (window.console) {
			//	window.console.log('Sign spent '+(endTime - startTime) + 'ms, expire in ' + (userSignStatus.expire/(3600*1000)) + 'h.');
			//}
			
			if (_user_sign_code == 0 || _user_sign_code == -1 || _user_sign_code == -2) {
				var code = _user_sign_code;
				var expire = _user_sign_expire;
				// alert('code:'+code+',expire:'+expire);
				if (code == 0 || code == -1) {	// ǩ���ɹ��������Ѿ�ǩ�����ˣ���д��cookie��
					// ʹ��username+"_user_signed"��Ϊcookie��key
					//log('set cookie:'+username + BbsUtil.userSignCookieKey+'-y, expire:'+expire);
					BbsCookie.setCookie(username + BbsUtil.userSignCookieKey, 'y', expire, '/');
					// ������ʽ
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
				} else if(code == -2) {	// �û�û�е�¼
					BbsUtil.userSignLocked = false;
					Bbs.showLoginDialog();  //��ʾ��¼��
				} else {	// ǩ��ʧ�ܣ���ʾ��ʾ��Ϣ��
					alert(signFailedMsg);
				}
			} else {	// ǩ��ʧ�ܣ���ʾ��ʾ��Ϣ��
				alert(signFailedMsg);
			}
			// �ͷ���
			BbsUtil.userSignLocked = false;
			
		};
		// jsonp�ķ�ʽ������������
		_ntes._importJs(url, onSigned);

	}
	
};
/**
 * ����ǩ����ť����ʽ
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
 * �ر�ǩ����ʾtip
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
	//��Ҫ��ס�û���������ס24Сʱ��ϣ���û�����һ��֮��
	var expire = 24*3600*1000;
	//log('set cookie:'+BbsUtil.userOperationCookieKey+'-y, expire:'+expire);
	BbsCookie.setCookie(BbsUtil.userOperationCookieKey, 'y', expire, '/');
};

var BbsList = {
	"init":function(update){
      Userinfo.loadUserinfo();
      
      if (!update) {	// �Ƿ����޸�����
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
       * ��΢����ͨ�����Ӳ鿴ҳ����ʼ��������΢�������ӡ���ʼ��
       * ���£�ֻ�е������ʱ�򣬲�����΢��api
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
					// û�м���screenName�Ż�ȥ���أ�ȷ��ÿһ�����ӽ�����һ��΢������
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
     * �޸���ת����΢������ͼƬ�����Ӿͻ�������bug��
     * @create_date 2011-7-26
     * @last_modified 
     * @author Ben Liu
     */
	,"initImageShare":function(){
		
		var title = "", // ��������
		soure = "������̳",
		location = window.location.href.replace(/(#|\?).*$/g,''), // ��ǰҳ���ַ
		picsElem = NTES(".tie-content img");
		
		title = NTES('h2.tie-con-hd-title');
		title = _ntes.DOM.getInnerText(title[0]);
		
		var warp = document.createElement('span'), docbody = document.body, roundbtn, gourl, tid;
		warp.className = "warpPicBox";
		warp.innerHTML = '<span class="roundbtn roundbtn-white push-163tblog"><a href="#"><span class="icons-tinyblog warpPicBox-inline-block"></span><span class="warpPicBox-inline-block">ת����΢��</span></a></span>';
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
					//gourl = "http://t.163.com/article/user/checkLogin.do?method=click&keyfrom=share1.bbs.note&togImg=true&check1stImg=true&link=http://bbs.163.com/&source="+encodeURIComponent(soure)+"&info="+encodeURIComponent("����"+ soure +"ͼ�ġ�" + title + "�� " + location)+"&title="+encodeURIComponent(title)+"&images="+encodeURIComponent(t.src);
					
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
		   * ��ʼ�����£���������Ӻ��о�������
		   * @create_date 2011-6-17
		   * @last_modified 2011-6-17
		   * @author Ben Liu
		   */
		
		// ��ʼ����������
		// ���Ҿ���id
		var guessIds = [];
		NTES("div._guess_field").each(function(i){
			var srcId = this.id;
			guessIds.push(srcId.substring('_guess_no_'.length));
		});
		
		if (guessIds.length <= 0) {
			return false;
		}
		// ����dwr����
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
		 * ��������ͼƬ����EXIF��Ϣ�鿴 ��СͼƬ400x400
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
		exifpop.innerHTML = '<div class="articleExifPop_bg"></div><div class="articleExifPop_cnt"><a href="#close" target="_self" class="articleExifPop_close js_articleExifPopClose">�ر�</a><div id="photoExifContent"><h3>������...</h3></div></div>';
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
		 * ��Ҫ��ʾEXIF��Ϣ��ͼƬ����
		 */
		var width = pic.width,
			height = pic.height;
		if(parseInt(width) >= 400 && parseInt(height) >= 400){
			exifbox.className = 'articleExifBox';
			pic.parentNode.insertBefore(exifbox, pic);
			exifbox.appendChild(pic);
			btn.className = 'articleExifIcon';
			btn.href = '#exif';
			btn.innerHTML = '������Ϣ';
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
 * ������
 */
var BbsSimple = {
    "init":function() {
        var url = document.location.href;
        if (url.indexOf(".html")==-1) {
            return;
        }

        
        
        if (url.indexOf("/simple/")>0) {
            try {
            	  BbsList.changeIframe();//������ർ����
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
		alert("������ҳ��.");
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
		alert("��ȡ��������.");
		return false;
	}
	var pageid = input.value;
	this.gotoPage(pageid);
}

/**
 * ����΢����Ƭ
 * @create_date 2011-7-18
 * @last_modified 
 * @author Ben Liu
 */

var WeiboCard = {
	// ��ǰѡ�е�΢����Ƭ������
	"_weibo_card_selected_theme":1
	// ��ʾ����
	,"_weibo_card_template":'\
		<em class="synTinyblog-tips-close">�ر�</em>\
		<em class="synTinyblog-tips-arrow"></em>\
	    <p>�������Բ���΢����Ƭ��&nbsp;&nbsp;</p>'
	// ����ִ�в��룬��������ֹ�û��ظ���������롱��ť
	,"isInserting":false
	// ѡ����Ƭ��Ƥ��
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
	// �������
	,"doInsert":function(user_email, screen_name){
		if (this.isInserting) {
			return false;
		}
		
		this.isInserting = true;
		
		var errorMsg = '����΢����Ƭ�������Ժ����ԡ�';
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
	// ���΢����Ƭ�������ʾ
	,"appendWeiboCardTip":function(){
		var editor = NTES('div#divComposeEditor')[0];
		if (editor) {
			var link = NTES('a.g-editor-btninfo-bbstcard', editor);
			if (link) {
				// �󶨵��΢����Ƭ��ť���¼�
				link.addEvent("click", function () {
					EditorExtend.insertWeiboCard();
				});
				
				link = link[0];
				
				// ���û�йر�tip����ʾ
				// ����û�δ��¼��Ҳ��ʾ
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
						// �󶨹ر���ʾ�¼�
						closer.addEvent("click", function () {
							var tipPanel = NTES('.synTinyblog-tips', icon)[0];
							tipPanel.parentNode.removeChild(tipPanel);
							CookieStatus.closeWeiboCardTip();
							// �ر�iconѡ�����ʽ
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
 * DOM�����ӿڡ���ʼ��
 * @create_date 2011-5-10
 * @last_modified 2011-5-10
 * @author Ben Liu
 */
//��DOM���� =================
if (typeof (_ntes) == "undefined")
	_ntes = {};
if (typeof (_ntes.DOM) == "undefined")
	_ntes.DOM = {};

if (typeof (_ntes._importJs) == "undefined")
	_ntes._importJs = function (url, onComplete, charset, doc) {
	
	// ��̬�����ⲿJavascript�ļ�
	/// @param {String} �ļ���ַ
	/// @param {Function} ������ɺ�ִ�еĻص�����
	/// @param {String} ����
	/// @param {Object} �ĵ�����Ĭ��Ϊ��ǰ�ĵ�
	
	doc = doc || document;
	
	var script = doc.createElement("script");
	script.language = "javascript"; script.type = "text/javascript";
	charset && (script.charset = charset);

	// ��ȡ���Ĳ���
	script.onload = script.onreadystatechange = function() {
		if (!script.readyState || "loaded" == script.readyState || "complete" == script.readyState) {
			onComplete && onComplete();
			script.onload = script.onreadystatechange = null;
			// ����ע��
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
	
	if (node && node.childNodes) {	// ����ڵ���ڣ������ӽڵ�
		var list = node.childNodes;
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			if (item && item.childNodes) {	// ������ӽڵ㣬������
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
 * DOM�����ӿڡ�������
 * @create_date 2011-5-10
 * @last_modified 2011-5-10
 * @author Ben Liu
 */
