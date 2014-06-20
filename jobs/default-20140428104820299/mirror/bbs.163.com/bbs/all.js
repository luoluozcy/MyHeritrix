
var all_js_version = "1.30";
var CookieStatus = {
	"floatLayerColse":"001"  //001��¼���㵯����״̬��0Ϊ��������1Ϊ������Ĭ�ϲ�����
	,"floatLayerSmall":"002"  //002��¼���㵯����״̬��0Ϊ��С����1Ϊδ��С����Ĭ�ϲ���С��
	,"leftNav":"003"  //003��¼��ർ��״̬��0Ϊ�رգ�1Ϊչ����Ĭ��չ��
	,"weiboTip":"004"  //004��¼΢����ʾ���ڣ�0Ϊ�رգ�1Ϊ��ʾ��Ĭ����ʾ
	,"messageRandom":"005" //005��ֹuserinfo.jsp������������ʵ����Ϣ������ʱ����
	,"cookieName":"BBS_STATUS"
	,"weiboCardTip":"006"  //006��¼�༭���У�΢����Ƭ�ϵ���ʾ���ڣ�0Ϊ�رգ�1Ϊ��ʾ��Ĭ����ʾ
	,"msgTip":"007"  //007��¼��Ϣ��ʾ�Ƿ���ʾ��0Ϊ����ʾ��1Ϊ��ʾ��Ĭ����ʾ
			
	,"getCookieValue":function (offset) {
        var endstr = document.cookie.indexOf (";", offset);
        if (endstr == -1) {
          endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    }
    /**
     * ��ȡCookie
     */
    ,"getCookie":function (name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
          var j = i + alen;
          if (document.cookie.substring(i, j) == arg) {
            return this.getCookieValue (j);
          }
          i = document.cookie.indexOf(" ", i) + 1;
          if (i == 0) {
            break;
          }
        }
        return null;
    }
    ,"getExpires":function(time) {
        var expdate = new Date();
        expdate.setTime(expdate.getTime() + time);
        return expdate;
    }
    /**
     * ɾ��Cookie
     */
    ,"deleteCookie":function (cname) {
        this.setCookie(cname,"", 0);
    }
    /**
     * ����Cookie
     */
    ,"setCookie":function (name, value, expires) {
        var value = name + "=" + escape(value) + "; domain=163.com; path=/";
        if (expires>0) {
          value += " expires=" + this.getExpires(expires).toGMTString() ;
        }
        
        document.cookie = value;
    }
		
	,"statusCookies":function(){
		return this.getCookie(this.cookieName);
	}

    //���ؼ�¼״̬������
	,"getStatusCookieArray":function(){
		var cookies = this.statusCookies();
		var statusCookies = new Array(); 
		if(cookies !=null && cookies != ""){
			if(cookies.indexOf(",") != -1){
				statusCookies = cookies.split(",");
				return statusCookies;
			}else{
				statusCookies.push(cookies);
				return statusCookies;
			}
		}else{
			return null;
		}
	}
	
	//����״ֵ̬
	,"getStatusCookieValue":function(stauts){
		var statusCookieArray = this.getStatusCookieArray();
		if(statusCookieArray == null){
			return "";
		}
		for(var i = 0; i < statusCookieArray.length; i++){
			if(statusCookieArray[i].indexOf(stauts) != -1){
				return statusCookieArray[i].split("|")[1];
			}
		}
		
		return "";
	}
	
	//�ı�ĳstatusֵ
	,"setCookieStatus":function(status,value,expires){
		var cookies = this.statusCookies();
		if(cookies != null && cookies != ""){
			var cookie = cookies.split(",");
			for(var i = 0; i < cookie.length; i++){
				var nameValue=cookie[i].split("|");
				if(nameValue[0] == status){
					var pattern = eval("/"+nameValue[0]+"\\|"+nameValue[1]+"/g");
					cookies = cookies.replace(pattern,status + "|" + value);
					break;
				}
			}
			if(i>=cookie.length)
				cookies += "," + status + "|" + value;
		}else{
			cookies = status + "|" + value;
		}
		//var expdate = new Date();
        //expdate.setTime(expdate.getTime() + expires);
		this.setCookie(this.cookieName,cookies,-1);
	}
			
	//�ж��Ƿ񵯳�����
	,"isCloseFloatLayer":function(){
		var status = this.getStatusCookieValue(this.floatLayerColse);
		if(status == "1" || status == ""){
			return false;
		}
		if(status == "0"){
			return true;
		}
		return false;
	}

	//�ж��Ƿ���С������
	,"isSmallFloatLayer":function(){
		var status = this.getStatusCookieValue(this.floatLayerSmall);
		if(status == "1" || status == ""){
			return false;
		}
		if(status == "0"){
			return true;
		}
		return false;
	}

	//���õ�������cookie
	,"setFloatLayerClose":function(){
		this.setCookieStatus(this.floatLayerColse,"0",-1);
	}

	//������С������cookie
	,"setFloatLayerSmall":function(){
		this.setCookieStatus(this.floatLayerSmall,"0",-1);
	}

	//������С������cookie
	,"setFloatLayerBig":function(){
		this.setCookieStatus(this.floatLayerSmall,"1",-1);
	}
		
	//������ർ��cookie
	,"setLeftStatus":function(){
		this.setCookieStatus(this.leftNav,"0",-1);
	}
	//����΢����ʾ��cookie
	,"closeWeiboTip":function(){
		this.setCookieStatus(this.weiboTip,"0",-1);
	}
	,"isCloseWeiboTip":function(){
		var cookie = this.getStatusCookieValue(this.weiboTip);
		if(cookie == "0"){
			return true;
		}else{
			return false;
		}
	}
	,"changeMessageRandom":function(){
		var value=this.getStatusCookieValue(this.messageRandom);
		if(value == ""){
			value = 0;
			this.setCookieStatus(this.messageRandom,value,-1);
			return value;
		}
		else{
			value=Number(value)+1;
			this.setCookieStatus(this.messageRandom,value,-1);
			return value;
		}
	}
	,"getMessageRandom":function(){
		var value=this.getStatusCookieValue(this.messageRandom);
		if(value == ""){
			value = 0;
			this.setCookieStatus(this.messageRandom,value,-1);
			return value;
		}
		else{
			return value;
		}
	}
	// ����΢����Ƭ��cookie
	,"closeWeiboCardTip":function(){
		this.setCookieStatus(this.weiboCardTip, "0", -1);
	}
	// ��ȡ΢����Ƭ��cookie
	,"isWeiboCardTipClosed":function(){
		var cookie = this.getStatusCookieValue(this.weiboCardTip);
		if(cookie == "0"){
			return true;
		}else{
			return false;
		}
	}
	//�ر���Ϣ��ʾ
	,"closeMsgTip":function(){
		this.setCookieStatus(this.msgTip, "0", -1);
	}
	//��ʾ��Ϣ��ʾ
	,"showMsgTip":function(){
		this.setCookieStatus(this.msgTip, "1", -1);
	}
	//��Ϣ�Ƿ���ʾ
	,"isShowMsgTip":function(){
		var cookie = this.getStatusCookieValue(this.msgTip);
		if(cookie == "0"){
			return false;
		}else{
			return true;
		}
	}
}


window.isIE = function() {
  if (document.frames) {
      return true;
  }
  else {
      return false;
  }
}

document.getFrame = function(id) {
    var frame;
    if (document.frames) {
        frame = document.frames[id];
    }
    else {
        frame = document.getElementById(id).contentWindow;
    }
    
    
    return frame;
}



/**
 * ������̳���÷��� 
 * @Author ����
 *  
 */
var Bbs = {
    "init": ""
    /**
     * ��ҳ��ת
     */
    ,"gotopage":function(url, pageid) {
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

        if (pageid=="") {
            Dialog.alert("������ҳ��.");
            return false;
        }
        window.location.href = url + "&pageid="+pageid;
    }
    ,"noCallback":function() {

    }
    /**
     * �б�ҳ��ײ�����
     */
    ,"doSearch":function() {
        var keyword = document.getElementById("so_keyword").value;
        var nickname = document.getElementById("so_nickname").value;
        var range = document.getElementById("so_range").value;
        var title = document.getElementById("so_title").checked;
        if (nickname=="�����ǳ�") {
            nickname = "";
        }
        if (keyword=="����ؼ���") {
            keyword = "";
        }
        var query = "";
        if (title) {
            query = "title:";
        }
        if(keyword!=""){
            query=query+keyword+" ";
        }
        if(range!=""){
            query = query+range+" " ;
        }
        if (nickname != "") {
            query = query + "nickname:"+nickname;
        }
        document.forms["so"].q.value = query;

        return true;
    }

	,"checkLogined":function() {
		return this.checkLoginedPostThread();
	}
    /**
     * ����ǰ��Ҫ�ж��û��Ƿ��¼
     */
    ,"checkLoginedPostThread":function() {
        // TODO �ڴ���Ҫ�������Ƿ�֧�������������ж�
        if (BoardConfig.isAllowGuestPostThread()) {
            //֧����������
            return true;
        }
        
        if(!BbsCookie.isLogined()) {
            this.showLoginDialog();
            return false;
        }
        else {
            return true;
        }
    }
	,"checkLogin":function() {
		return this.checkLoginedPostReply();
	}
    /**
     * �ظ�ǰ��Ҫ�ж��û��Ƿ��¼
     */
    ,"checkLoginedPostReply":function(callback) {
        // TODO �ڴ���Ҫ�������Ƿ�֧�������������ж�
        if (BoardConfig.isAllowGuestPostReply()) {
            //֧������������
            return true;
        }
        
        if(!BbsCookie.isLogined()) {
            if(typeof(callback) == "function") {
            	this.showLoginDialog(callback);
            } else {
            	this.showLoginDialog();
            }
            return false;
        }
        else {
            return true;
        }
    }
	/**
     * ���ظ���ǰ��Ҫ�ж��û��Ƿ��¼
     */
    ,"checkLoginedDownloadAttachment":function() {
        if(!BbsCookie.isLogined()) {
            this.showLoginDialog();
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * ������ʱ�ж��û��Ƿ��¼
	 * �޲���ʱ��¼����޶���
     */
    ,"checkLoginedLink":function(url) {
        if(!BbsCookie.isLogined()) {
            this.showLoginDialog(function(){
            	if(typeof(url) == 'string') {
            		window.location.href = url
            	};
            });
            return false;
        }
        else {
        	if(typeof(url) == 'string') {
            	window.location.href = url;
				return false
            }

            return true;
        }
    }
    ,"loginCallback":null
    /**
     *  ��ʾ��¼����
     *
     *  callback �ص�����: function:�Զ��庯��  true:����ִ�е��á���������(���ñ������ĺ���)
     */
    ,"showLoginDialog":function(callback) {
        if (typeof(callback) == "boolean" && callback){
            // true:
            
            var func = Bbs.showLoginDialog.caller;
            var args = func.arguments;
            var size = args.length;

            for (var i=0; i<args.length; i++) {
                if (typeof(args[i]) == "undefined") {
                    size;
                }
            }

            //alert(args[0]+","+args[1]+","+args[2]+","+args[3]+","+args[4]+",");
            if (size == 0) {
                this.loginCallback = function() {func();}
            }
            else if (size == 1) {
                this.loginCallback = function() {func(args[0]);}
            }
            else if (size == 2) {
                this.loginCallback = function() {func(args[0], args[1]);}
            }
            else if (size == 3) {
                this.loginCallback = function() {func(args[0], args[1], args[2]);}
            }
            else if (size == 4) {
                this.loginCallback = function() {func(args[0], args[1], args[2], args[3]);}
            }
            else {
                alert("Ŀǰ����֧��"+size+"�������ķ���");
                this.loginCallback = null;
            }
        }
        else {
            //function:
            this.loginCallback = callback;
        }
        Dialog.show('��¼����ͨ��֤', '/bbs/loginDialog.inc.html', true, true, Bbs.logininit);
    }
    /**
     * ע��ͨ��֤
     */
    ,"register":function(type){
    	BbsUtil.clickStat(type);
    	window.open('http://reg.163.com/reg/reg.jsp?product=bbs&loginurl=http://bbs.163.com&url='+document.location.href);
    }
    
    ,"toPersonal":function(){
    	BbsUtil.clickStat("user");
    }
    
    ,"managerCenter":function(){
    	BbsUtil.clickStat("center");
    }
    
    ,"toWeibo":function(){
    	BbsUtil.clickStat("weibo");
    }
    
    ,"toMessageCenter":function(){
    	BbsUtil.clickStat("message");
    }
   
    ,"logininit":function(){
    	LoginDialog.init();
    }
	
    /**
     * ��������
     */
    ,"postArticle":function(boardid) {
    	BbsUtil.clickStat("uppost");
        if (!BbsCookie.isLogined() && !BoardConfig.isAllowGuestPostThread()) { //δ��¼
            this.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
        }
        else {
            window.location.href = "/bbs/post.jsp?boardid="+boardid;
        }
    }
    /**
     * �����ʴ�
     */
    ,"postAsk":function(boardid) {
        if (!BbsCookie.isLogined()) { //δ��¼
            this.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
        }
        else {
            window.location.href = "/bbs/post.jsp?boardid="+boardid+"&icon=90";
        }
    }
    
    /**
     * �༭����
     * @param boardid ����ID
     * @param ismainpost �Ƿ�����
     * @param articleid ����ID
     */
    ,"editArticle":function(boardid, ismainpost, articleid) {
        if (!ismainpost){
            return this.editReply(boardid, articleid);
        }
        if (!BbsCookie.isLogined()) { //δ��¼
            this.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
        }
        else {
            Dwr.isLimitThread(boardid,articleid,function(data){
                if(data == true){
                    Dialog.alert("�����ѱ����Ʊ༭,����ϵ����Աȡ������.");
                }
                else{
                  window.location.href = "/bbs/post.jsp?boardid="+boardid+"&articleid="+articleid;
                }
            })
        }
    }
    /**
     * �༭�ظ�
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"editReply":function(boardid, articleid) {
        if (!BbsCookie.isLogined()) { //δ��¼
            this.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
        }
        else {
            //BbsAdmin.showDialog('�༭�ظ�', '/bbs/dialog/reply_post.jsp?boardid='+boardid+"&articleid="+articleid);
            //Dialog.setWidth(600);

            window.location.href = "/bbs/reply_edit.jsp?boardid="+boardid+"&articleid="+articleid;
        }        
    }
    
    /**
     * ע��
     */
    ,"logout":function() {
		BbsUtil.clickStat("logout");
        var url = "/bbs/user/logout.jsp?url="+encodeURIComponent(document.location.href);
        //Userinfo.reloadUserinfo();//����û���Ϣ
    	BbsBoardAdmin.delCookie();
    	CookieStatus.showMsgTip();	
    	document.location.href = url;
    }
    ,"checkDwr":function() {
        //TODO δʵ��
        if (typeof(Dwr) == "undefined") {
            
        }
    }
    /**
     * ������̳�����Dwr�ű�
     */
    ,"loadDwr":function() {
        if (1==1) {
            return;
        }
        if (typeof(Dwr) == "undefined") {
            this.loadJs('http://bbs.163.com/bbs/dwrinterfaceDwr.js');
            this.loadJs('http://bbs.163.com/bbs/dwrengine.js');
            this.loadJs('http://bbs.163.com/bbs/dwrutil.js');
        }
    }
    ,"loadJs":function(filename) {
        var script = document.createElement("script");
        script.src = filename;

        //ΪʲôҪʹ��insertAdjacentElement��,��ΪappendChild��JS�ļ��Ѿ��������������ʱ�ͻ����IE���������(Bbs.editArticle�����ͻ����,postArticle������)
        if (document.frames) {
            document.body.insertAdjacentElement("BeforeBegin",script);
        }
        else {
            document.body.appendChild(script);  //
        }
    }
    /**
    * ����CSS
    */
    ,"loadCss":function(filename) {
        var head = document.getElementsByTagName('HEAD').item(0);
        var style = document.createElement('link');
        style.href = filename;
        style.rel = 'stylesheet';
        style.type = 'text/css';
        head.appendChild(style);
    }
    /**
     * ��ʾֽ����Ϣ
     */
    ,"showMessage":function(pageid) {
        if (typeof(pageid)=="undefined") {
            pageid = 1;
        }
        BbsAdmin.showDialog('�ҵ�ֽ��', '/bbs/dialog/msg_list.jsp?pageid='+pageid);
        Dialog.setWidth(600);

        if (pageid==1) {
            //����û���Ϣ���棬�����¼���
            Userinfo.reloadUserinfo();
        }
    }
    /**
     * ��ʾ�ѷ���ֽ����Ϣ
     */
    ,"showSentMessage":function(pageid) {
        if (typeof(pageid)=="undefined") {
            pageid = 1;
        }
        BbsAdmin.showDialog('�ѷ���ֽ��', '/bbs/dialog/msg_sent_list.jsp?pageid='+pageid);
        Dialog.setWidth(600);
    }
    /**
     * ��ʾ�ҵĺ������б�
     */
    ,"showMyBlackList":function(pageid) {
        if (typeof(pageid)=="undefined") {
            pageid = 1;
        }
        BbsAdmin.showDialog('������', '/bbs/dialog/my_blacklist.jsp?pageid='+pageid);
        Dialog.setWidth(600);
    }
    /**
     * ��Ӻ�����
     */
    ,"addMyBlackList":function(userid) {
        if (typeof(userid)=="undefined") {
            userid = "";
        }
        BbsAdmin.showDialog('��Ӻ�����', '/bbs/dialog/my_blacklist_add.jsp?userid='+userid);
        Dialog.setWidth(600);
    }    
    /**
     * ��ʾֽ����Ϣ
     */
    ,"sendMessage":function(userid) {
    	BbsUtil.clickStat("sendmes");
        if (typeof(userid)=="undefined") {
            userid = "";
        }
        BbsAdmin.showDialog('����Ϣ', '/bbs/dialog/msg_write.jsp?userId='+userid);
        Dialog.setWidth(600);
    }
	/**
    *����ϵͳֽ��
    */
    ,"sendSysMessage":function(userid){
    	if (typeof(userid)=="undefined") {
            userid = "";
        }
        BbsAdmin.showDialog('����ϵͳֽ��', '/bbs/dialog/msg_sys_write.jsp?userid='+userid);
        Dialog.setWidth(600);
    }
    /**
     * ɾ��ֽ��
     */
    ,"delMessage":function(pageid, msgid) {
        Dwr.delMessage(msgid, function(data) {
            //ɾ�����ܣ����¼���ֽ��ҳ��
            Bbs.showMessage(pageid);
        });
    }
    /**
     * ɾ���ѷ���ֽ��
     */
    ,"delSentMessage":function(pageid, msgid) {
        Dwr.delSentMessage(msgid, function(data) {
            //ɾ�����ܣ����¼���ֽ��ҳ��
            Bbs.showSentMessage(pageid);
        });
    }
    /**
     * ɾ��������
     */
    ,"delBlackList":function(pageid, msgid) {
        Dwr.delBlackList(msgid, function(data) {
            Bbs.showMyBlackList(pageid)
        });
    }
    /**
     * ��ȡ��ǰƵ��
     */ 
    ,"getChannel":function() {
        var host = window.location.host;
        var channel = host.replace(/(.*?)([a-z0-9]+)\.163\.com/gi,"$2");

        if ("bbs" == channel) {
            // bbs.163.com
            channel =  "ntes";
        }
        else if ("money" == channel) {
            channel = "stock";
        }
        else if ("tech" == channel) {
            if ("club.tech.163.com" == host) {
                channel = "mobile";
            }
            else if ("digibbs.tech.163.com" == host) {
                channel = "digi";
            }
            
        }else if("cbachina" == channel){
            channel = "sports";
        }
        return channel;
    }
    /**
     * ��¼ͨ��֤
     * 
     * @username
     * @password
     * @url
     *
     */
    ,"loginPassport":function(username, password, savelogin, myCallback) {
        if (username == "") {
            return "��û������ͨ��֤�ʺ�.";
        }
        if (password == "") {
            return "��û����������.";
        }
        
        Dwr.loginPassport(username, calcMD5(password), savelogin, function(data) {
			if (data.indexOf("success") == -1) {
				alert(data);
				return;
			}
            //��¼�ɹ����رյ�¼��
            Dialog.close();

            var callback;
            if (myCallback == null || typeof(myCallback) == "undefined"){
                callback = Bbs.loginCallback;
            }
            else {
                callback = myCallback; 
            }
            if (callback != null && (typeof(callback) == "function" || typeof(callback) == "object")) {
                callback();
                Userinfo.loadUserinfo();//���µ�¼״̬
            }
        });
    }
	
    /**
     * ���ĳ������������
     * @param {Object} boardid
     * @param {Object} articleid
     */
    ,"getReplyBody":function(boardid, articleid) {
      var content = "";
      DWREngine.setAsync(false);
      Dwr.getReplyBody(boardid, articleid, function(data) {
          //content = (dwr.util.toDescriptiveString(data, 1));
          content = data;
      });
      DWREngine.setAsync(true);
      return content;
    }
    /**
     * ��ʾ�������Ͳ˵�
     */
    ,"showPostMenu":function(index) {
        var obj = $("post_menu_"+index);
        if (obj == null) {
            alert("�˵�������.");
            return;
        }
          obj.style.display = (obj.style.display=="block")?"none":"block";
    }
    /**
   * ��ʾ�������ҵ��ղ�
   */
  ,"showMyFavorite":function(divname) {
        if(!BbsCookie.isLogined()) {
            this.showLoginDialog(BbsUtil.reloadPage);
            return;
        }
        else{
        	var divobj = $(divname);
        	divobj.style.display = "block";
        	this.loadMyFavorite(divname);
        }
  }
  
  /**
   * �����ҵ��ղ�
   */
  ,"loadMyFavorite":function(divname) {
        var url = "/bbs/my_favorite.inc.jsp";
        new Ajax.Request(url,{onComplete:function(data){
            var content = (data.responseText);
            if (data.status==200) {
                $(divname).innerHTML = content;
            }
            else {
                alert("�������.");
            }
        }});
  }
  
  /**
  *����ĳһ�û�������״̬
  **/
  ,"showOnlineStatus":function(onlinestatus){
  	var obj = document.getElementById("onlinestatus");
  	
  	if (obj != null){
  			if (onlinestatus == "1"){
  				obj.innerHTML = "����";
  			}
  			else{
  				obj.innerHTML = "����";	
  			}
  	 }
  
  }
  
   /**
  *��ȡĳһ�û�������״̬
  **/
  ,"getOnlineStatus":function(username){
  		var url = "/bbs/dialog/userinfo.jsp?reload=true&username=" + username ; 
			new Ajax.Request(url, {method: 'get',requestHeaders:["If-Modified-Since","0"], onComplete:function(data){
					eval(obj.responseText);	} 
					});
  
  }

  /**
  *��Ա������
  */
  ,"checkMember":function(boardid,threadid,filename){
	 if(!BoardConfig.isMemberView()){
		 return;
	 }
	 var uri = document.location.href;
	 if(filename=="list" && uri.indexOf(".jsp")==-1){
		 //var listRe = /^http:\/\/[^\/]+\.163\.com\/list\/(.*?),?(\d+)?\.html$/i;
		 var listRe = /^http:\/\/[^\/]+\.163\.com\/list\/([a-zA-Z0-9_]+),?(\d+)?\.html$/i;
		 // bug fix:�������id�����ֽ�β����ôpageid��ȡ������֡�ԭ��������ʽ���⡣ 2012-2-8 Ben Liu
		 var result = uri.match(listRe);
		 var pageid;
		 if(result != null){
			pageid = result[2];
		 }
		 var pagestr = "";
		 if(pageid != undefined){
			 pagestr = "&pageid="+pageid;
		 }
		 document.location.href="/bbs/list.jsp?boardid=" + boardid + pagestr;
	 }else if(filename=="article" && uri.indexOf(".jsp")==-1){
		 var articleRe = /^http:\/\/[^\/]+\.163\.com\/bbs\/(.*?)\/(\d+),?(\d+)?\.html$/i;
		 var result = uri.match(articleRe);
		 var pageid;
		 if(result != null){
			pageid = result[3];
		 }
		 var pagestr = "";
		 if(pageid != undefined){
			 pagestr = "&pageid="+pageid;
		 }
		 document.location.href="/bbs/article.jsp?boardid=" + boardid + "&articleid=" + threadid + pagestr;
	 }
  }
  
  /**
   *�������
   */
  ,"applymaster":function(boardid){
	  if(!BbsCookie.isLogined()){
		  alert("���ȵ�¼.");
		  return;
	  }
	  
	  BbsAdmin.showDialog('��������', '/bbs/applydata.jsp?boardid='+boardid);
	  Dialog.setWidth(650);
  }

  /**
  *�������(��ֻ���ڹɰ�)
  */
  ,"addApplyMaster":function(boardid){
	  if(!BbsCookie.isLogined()){
		  alert("���ȵ�¼.");
		  return;
	  }
	  var username = BbsCookie.getPassport();
	  var form = document.forms["frmapplymaster"];

	  var reason = form.reason.value;
	  var name = form.name.value;
	  var im = form.im.value;
	  var mobile = form.mobile.value;
	  var email = form.email.value;

	  if(reason == ""){
			alert("����д����ԭ��.");
			form.reason.focus();
			return;
	  }
	   if(name == ""){
			alert("�����������.");
			form.name.focus();
			return;
	  }
	   if(im == ""){
			alert("����QQ/MSN/POPO.");
			form.im.focus();
			return;
	  }
	   if(mobile == ""){
			alert("����д��ϵ�绰.");
			form.mobile.focus();
			return;
	  }
	   if(email == ""){
			alert("����дEmail.");
			form.email.focus();
			return;
	  }
	  Dwr.addApplyMaster(boardid,name, reason, im,mobile, email,function(data){
			alert(data);
			location.href = "/bbs/applysuccess.jsp?boardid="+boardid;
	  });
  }
  ,"nextQuestion":function(queOrder){
  	if($("quessum").value != queOrder){
  		$("liques"+queOrder).style.display = "none";
  		queOrder++;
  		//alert(queOrder);
  		//alert($("questype"+queOrder).value);
  		var questype = $("questype"+queOrder).value;
  		if(questype == "choice"){
  			$("liques"+queOrder).style.display = "";
  		}else{
  			$("divanswer").style.display = "";
  		}
  	}else{
  		$("liques"+queOrder).style.display = "none";
  		$("divanswer").style.display = "";
  	}
  }
  ,"doPostLottery":function(){
  	if (!BbsCookie.isLogined()) { //δ��¼
      	Bbs.showLoginDialog(true); //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
      	return;
      }
  	var lotid = $("lotid").value;
  	//var poststr = "";
  	var answers = [];
  	for(i=1; i<=$("quessum").value; i++){
  		var answer="";
  		if($("questype"+i).value=="choice"){
  			$$('input[type="radio"][name="ques'+i+'"]').select(function(i){return i.checked}).each(function(i){answer=i.value});
  		}else{
  			answer = $("ques"+i).value;
  		}
  		var must = $("must"+i).value;
  		
  		if(must == "yes" && answer == ""){
  			alert("������������Ϣ");
  			return;
  		}else{
  			if(answer == ""){
  				answer = " ";
  			}
  			//poststr += answer + "~";
  			answers.push(answer);
  		}
  	}
  	
  	//alert(answers.join(','));
  	
  	Dwr.joinLottery(lotid, answers, global_boardid, global_threadid ,function(data) {
      		alert(data);
			document.location.replace(document.location.href);
      });
  }
    ,"overWeiboTip":function(){
    	this.openWeiboTip();
    } 
    ,"outWeiboTip":function(){
    	this.initWeiboTip();
    } 
    ,"closeWeiboTip":function(){
    	CookieStatus.closeWeiboTip();
    	this.closeTip();
    } 
    ,"initWeiboTip":function(){
    	//�ж��û��Ƿ�ر�����ʾ��
    	if(!CookieStatus.isCloseWeiboTip() && $("weiboTipDiv").style.display != "" ){
    		this.openWeiboTip();
    	}else{
    		this.closeTip();
    	}
    }
    ,"openWeiboTip":function(){
    	//��¼ʱ
    	if(BbsCookie.isLogined()){
    		$("weiboTip1").style.display = "none";
    		$("weiboTip2").style.display = "";
    		$("weiboTipDiv").style.display = "";
    	}else{
    		$("weiboTip1").style.display = "";
    		$("weiboTip2").style.display = "none";
    		$("weiboTipDiv").style.display = "";
    	}
    }
    ,"closeTip":function(){
    	$("weiboTipDiv").style.display = "none";
    	$("weiboTip1").style.display = "none";
    	$("weiboTip2").style.display = "none";
    }
    ,"reportPost":function(dbname, boardid, articleid, pageid){
    	var form = document.forms['frmcharge'];
    	var content = form.content.value;
    	if (content.trim() == '') {
    	    alert('����д��ϸͶ�����ݣ��Ա����Ǹ���Ч�Ĵ�������Ͷ�ߣ�');
    	    form.content.focus();
    	} else if (content.length > 300) {
    		alert('�ٱ��������ó���300�֡�');
    	    form.content.focus();
    	} else {
    	  Dwr.reportPost(dbname, boardid, articleid, pageid, content
    			  , function(data) {
	          			alert(data);
	          			Dialog.close();
				});
    	}
    }
    /**
     * ��ʾEXIF��Ϣ
     */
	,"buildExifdata":function(srcurl, exifcontent, callback){
		
		// ������Ϣ�ĵ������
		BbsUtil.clickStat("exif");
		
		PhotoBean.getImageExif(srcurl,function(exifdata){
			if(exifdata != null) {
				var key;
				for(key in exifdata){
					if(exifdata[key] == null){
						exifdata[key] = "������";
					}
				}
				exifcontent.innerHTML = "<h3>Ʒ�ƣ�" + exifdata.make + "</h3><h3>�ͺţ�" + exifdata.model + "</h3><h3>���ࣺ" + exifdata.focalLength + "</h3><h3>��Ȧ��" + exifdata.apertureValue + "</h3><h3>�����ٶȣ�" + exifdata.exposureTime + "</h3><h3>ISO��" + exifdata.isoSpeedRatings + "</h3><h3>�عⲹ����" + exifdata.exposureBiasValue + "</h3><h3>����ʱ�䣺" + exifdata.dateTime + "</h3><h3>��ͷ��" + exifdata.lens + "</h3>";
			} else {
				exifcontent.innerHTML = "��ͼƬû��������Ϣ�����ܲ�����Ƭ��ʽ��������Ƭ���������ɾ������Ӧ��Ϣ��"
			}
			callback && callback();
		});
    }
};

/**
 * �첽��¼�����㷨
 */
        (function() {
            var hex_chr = "0123456789abcdef";
            function rhex(num) {
                str = "";
                for (j = 0; j <= 3; j++)
                    str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) +
           hex_chr.charAt((num >> (j * 8)) & 0x0F);
                return str;
            }
            /*
            * Convert a string to a sequence of 16-word blocks, stored as an array.
            * Append padding bits and the length, as described in the MD5 standard.
            */
            function str2blks_MD5(str) {
                nblk = ((str.length + 8) >> 6) + 1;
                blks = new Array(nblk * 16);
                for (i = 0; i < nblk * 16; i++) blks[i] = 0;
                for (i = 0; i < str.length; i++)
                    blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
                blks[i >> 2] |= 0x80 << ((i % 4) * 8);
                blks[nblk * 16 - 2] = str.length * 8;
                return blks;
            }
            /*
            * Add integers, wrapping at 2^32. This uses 16-bit operations internally 
            * to work around bugs in some JS interpreters.
            */
            function add(x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF);
                var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return (msw << 16) | (lsw & 0xFFFF);
            }
            /*
            * Bitwise rotate a 32-bit number to the left
            */
            function rol(num, cnt) {
                return (num << cnt) | (num >>> (32 - cnt));
            }
            /*
            * These functions implement the basic operation for each round of the
            * algorithm.
            */
            function cmn(q, a, b, x, s, t) {
                return add(rol(add(add(a, q), add(x, t)), s), b);
            }
            function ff(a, b, c, d, x, s, t) {
                return cmn((b & c) | ((~b) & d), a, b, x, s, t);
            }
            function gg(a, b, c, d, x, s, t) {
                return cmn((b & d) | (c & (~d)), a, b, x, s, t);
            }
            function hh(a, b, c, d, x, s, t) {
                return cmn(b ^ c ^ d, a, b, x, s, t);
            }
            function ii(a, b, c, d, x, s, t) {
                return cmn(c ^ (b | (~d)), a, b, x, s, t);
            }
            /*
            * Take a string and return the hex representation of its MD5.
            */
            function calcMD5(str) {
                x = str2blks_MD5(str);
                a = 1732584193;
                b = -271733879;
                c = -1732584194;
                d = 271733878;
                for (i = 0; i < x.length; i += 16) {
                    olda = a;
                    oldb = b;
                    oldc = c;
                    oldd = d;
                    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
                    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
                    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
                    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
                    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
                    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
                    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
                    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
                    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
                    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
                    c = ff(c, d, a, b, x[i + 10], 17, -42063);
                    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
                    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
                    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
                    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
                    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
                    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
                    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
                    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
                    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
                    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
                    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
                    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
                    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
                    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
                    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
                    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
                    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
                    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
                    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
                    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
                    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
                    a = hh(a, b, c, d, x[i + 5], 4, -378558);
                    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
                    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
                    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
                    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
                    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
                    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
                    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
                    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
                    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
                    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
                    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
                    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
                    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
                    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
                    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
                    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
                    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
                    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
                    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
                    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
                    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
                    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
                    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
                    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
                    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
                    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
                    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
                    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
                    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
                    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
                    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
                    a = add(a, olda);
                    b = add(b, oldb);
                    c = add(c, oldc);
                    d = add(d, oldd);
                }
                return rhex(a) + rhex(b) + rhex(c) + rhex(d);
            };

            var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            function base64(str) {
                var out, i, len;
                var c1, c2, c3;
                len = str.length;
                i = 0;
                out = "";
                while (i < len) {
                    c1 = str.charCodeAt(i++) & 255;
                    if (i == len) {
                        out += base64EncodeChars.charAt(c1 >> 2);
                        out += base64EncodeChars.charAt((c1 & 3) << 4);
                        out += "==";
                        break;
                    }
                    c2 = str.charCodeAt(i++);
                    if (i == len) {
                        out += base64EncodeChars.charAt(c1 >> 2);
                        out += base64EncodeChars.charAt(((c1 & 3) << 4) | ((c2 & 240) >> 4));
                        out += base64EncodeChars.charAt((c2 & 15) << 2);
                        out += "=";
                        break;
                    }
                    c3 = str.charCodeAt(i++);
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 3) << 4) | ((c2 & 240) >> 4));
                    out += base64EncodeChars.charAt(((c2 & 15) << 2) | ((c3 & 192) >> 6));
                    out += base64EncodeChars.charAt(c3 & 63);
                }
                return out;
            }
            function utf16to8(str) {
                var out, i, len, c;
                out = "";
                len = str.length;
                for (i = 0; i < len; i++) {
                    c = str.charCodeAt(i);
                    if ((c >= 1) && (c <= 127)) {
                        out += str.charAt(i);
                    } else {
                        if (c > 2047) {
                            out += String.fromCharCode(224 | ((c >> 12) & 15));
                            out += String.fromCharCode(128 | ((c >> 6) & 63));
                            out += String.fromCharCode(128 | ((c >> 0) & 63));
                        } else {
                            out += String.fromCharCode(192 | ((c >> 6) & 31));
                            out += String.fromCharCode(128 | ((c >> 0) & 63));
                        }
                    }
                }
                return out;
            }
            // MD5 SHA1 ���� 
            function add(x, y) {
                return ((x & 2147483647) + (y & 2147483647)) ^ (x & 2147483648) ^ (y & 2147483648);
            }

            // SHA1 
            function SHA1hex(num) {
                var sHEXChars = "0123456789abcdef";
                var str = "";
                for (var j = 7; j >= 0; j--) {
                    str += sHEXChars.charAt((num >> (j * 4)) & 15);
                }
                return str;
            }
            function AlignSHA1(sIn) {
                var nblk = ((sIn.length + 8) >> 6) + 1, blks = new Array(nblk * 16);
                for (var i = 0; i < nblk * 16; i++) {
                    blks[i] = 0;
                }
                for (i = 0; i < sIn.length; i++) {
                    blks[i >> 2] |= sIn.charCodeAt(i) << (24 - (i & 3) * 8);
                }
                blks[i >> 2] |= 128 << (24 - (i & 3) * 8);
                blks[nblk * 16 - 1] = sIn.length * 8;
                return blks;
            }
            function rol(num, cnt) {
                return (num << cnt) | (num >>> (32 - cnt));
            }
            function ft(t, b, c, d) {
                if (t < 20) {
                    return (b & c) | ((~b) & d);
                }
                if (t < 40) {
                    return b ^ c ^ d;
                }
                if (t < 60) {
                    return (b & c) | (b & d) | (c & d);
                }
                return b ^ c ^ d;
            }
            function kt(t) {
                return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
            }
            function SHA1(sIn) {
                var x = AlignSHA1(sIn);
                var w = new Array(80);
                var a = 1732584193;
                var b = -271733879;
                var c = -1732584194;
                var d = 271733878;
                var e = -1009589776;
                for (var i = 0; i < x.length; i += 16) {
                    var olda = a;
                    var oldb = b;
                    var oldc = c;
                    var oldd = d;
                    var olde = e;
                    for (var j = 0; j < 80; j++) {
                        if (j < 16) {
                            w[j] = x[i + j];
                        } else {


                            w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                        }
                        t = add(add(rol(a, 5), ft(j, b, c, d)), add(add(e, w[j]), kt(j)));
                        e = d;
                        d = c;
                        c = rol(b, 30);
                        b = a;
                        a = t;
                    }
                    a = add(a, olda);
                    b = add(b, oldb);
                    c = add(c, oldc);
                    d = add(d, oldd);
                    e = add(e, olde);
                }
                SHA1Value = SHA1hex(a) + SHA1hex(b) + SHA1hex(c) + SHA1hex(d) + SHA1hex(e);
                return SHA1Value;
            }
            window.MD5 = calcMD5;
            window.SHA1 = SHA1;
            window.base64 = base64;
            window.utf16to8 = utf16to8;
        })();

/**
 * ��¼jsonp�ص�����
 */
function setLoginStatus(data){
	window.loginStatus = data;
}

/**
 * ���µ�ǰ̨js
 * 
 * @create_date 2011-6-21
 * @last_modified 2011-6-21
 * @author Ben Liu
 */
// ��ʾ��Ϣ
var _gs_success = '�ɹ����뾺�¡�';
var _gs_failed = 'Ͷעʧ�ܣ����Ժ�����Ͷע��';
var _gs_choose_result = '��ѡ��һ���������Ͷע��';
var _gs_pnt_invalid = '������Ϸ��Ļ�������';
var BbsGuess = {
	"findSelectedGuessRadio": function(wrap) { // ����ѡ�еľ��½��
		var optionId = 0;
		var odds = 0;
		NTES('._guess_ops', wrap).each(function(i) {
			if (this.checked) {
				optionId = this.value;
				odds = this.title;
			}
		});

		return {
			optionId : optionId,
			odds : odds
		};
	},
	"calcGuessEarnedPoints" : function(wrap) { // ���㣬���к�Ӯ�õĻ�����
		var x = this.findSelectedGuessRadio(wrap);
		var optionId = x.optionId;
		var odds = x.odds;

		var displayed = false;
		if (optionId > 0 && odds > 0) {
			var pointsStr = NTES('.input01', wrap)[0].value;
			var points = parseInt(pointsStr);
			if (points && points > 0) {
				var earnedPoints = Math.round(points * odds);
				NTES('span._guess_earned_points', wrap)[0].innerHTML = earnedPoints;
				NTES('div._guess_tip', wrap)[0].style.display = '';
				//NTES('._guess_submit', wrap)[0].disabled = false;
				displayed = true;
			}
		}
		if (!displayed) {
			NTES('div._guess_tip', wrap)[0].style.display = 'none';
			//NTES('._guess_submit', wrap)[0].disabled = true;
		}

	},
	"getGuessOptionHTML" : function(resultId, guessStatus, userBet, betOpId, opx) { // ��ȡ����ѡ���html
		var radioAttr = 'disabled';
		if (guessStatus == 2 && userBet < 0) {
			radioAttr = '';
		}
		
		var radioChecked = '';
		if (betOpId == opx.id) {
			radioChecked = 'checked';
		}
		
		// ���µ����ս�����Ḳ���û���ѡ����
		/**
		 * ��ע�͵���Ӧ��ʹ������Ч����
		if (guessStatus != 1 && guessStatus != 2 && resultId > 0) {	// ����δ��ʼ���߽����У����Ѿ��������
			if (resultId == opx.id) {
				radioChecked = 'checked';
			} else {
				radioChecked = '';
			}
		}
		**
		*/
		
		var html = [];
		html.push('<div class="voteItem" onclick="javascript:BbsGuess.selectRadio(this, '
						+ opx.guessId + ');">');
		html.push('  <div class="voteInput">');
		html.push('	<input type="radio" name="_guess_' + opx.guessId + '" value="'
				+ opx.id + '" title="' + opx.oddsStr + '" class="_guess_ops" '+radioChecked+' '
				+ radioAttr + ' />');
		html.push('  </div>');
		html.push('  <div class="voteData">');
		html.push('	 <div class="voteLabel">');
		html.push('		 <h5>' + opx.title + '<span class="cDGray">(����' + opx.oddsStr
				+ ')</span></h5>');
		html.push('		 <span class="right cDGray"><span class="_guess_op_cnt" id="_guess_op_cnt'+opx.id+'">' + opx.userCount + '</span>��</span>');
		html.push('	 </div>');
		html.push('	 <div class="voteBar"><img src="/bbs2009/img/voteitem_bg.gif" class="_guess_op_p" width="'
						+ opx.percentage + '" title="' + opx.percentage + '" height="13" /></div>');
		html.push('  </div>');
		html.push('</div>');
		return html.join('');
	},
	"initJoinGuess" : function(wrap, guessId) { // ��ʼ�����뾺�µ����
		var guessPointInputObj = NTES('._guess_points_input', wrap)[0];
		// ����л����radio�����¼�����к�Ӯ�õĻ�������
		var _this = this;
		NTES('._guess_ops', wrap).each(function() {
			this.onclick = function() {
				if (this.checked) {
					_this.calcGuessEarnedPoints(wrap);
				}
			}
		});

		// ��ʼ�� Ͷע���������input
		if (guessPointInputObj) {
			var initVal = guessPointInputObj.value;
			guessPointInputObj.onblur = function() {
				if (this.value == '') {
					this.value = initVal;
				}
			};
			guessPointInputObj.onfocus = function() {
				if (this.value == initVal) {
					this.value = '';
				}
			};
			guessPointInputObj.onkeyup = function() {
				if (this.value.length > 0) {
					this.className = 'input01 input02';
				} else {
					this.className = 'input01';
				}
				// ���㣬�������ָ�����ʣ�����֮���ܵõ��Ļ�����
				_this.calcGuessEarnedPoints(wrap);
			}
		}
	},
	"doAddGuess" : function(guessId) { // �û����뾺��

		if (!BbsCookie.isLogined()) { // û�е�¼����ʾ��½��
			// �ͷ���
			Bbs.showLoginDialog(); // ��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
			return false;
		}

		// ��ȡ����
		var wrap = NTES('div#_guess_no_' + guessId)[0];
		var x = this.findSelectedGuessRadio(wrap);
		var optionId = x.optionId;
		// У��
		if (!optionId || optionId <= 0) {
			alert(_gs_choose_result);
			return false;
		}

		if (NTES('div._guess_tip', wrap)[0].style.display == 'none') {
			alert(_gs_pnt_invalid);
			return false;
		}

		var pointsStr = NTES('.input01', wrap)[0].value;
		Dwr.joinGuess(guessId, optionId, pointsStr, function(data) {
			if (data) {
				alert(_gs_success);
				//window.location.reload();
				// ˢ��ҳ��̫�����ĳɲ�ˢ��
				// disable radio
				NTES('._guess_ops', wrap).each(function() {
					this.disabled = true;
				});
				// Ͷע�ܻ��֣�����
				var pntCntObj = NTES('span._guess_points_total', wrap)[0];
				var srcPntsStr = pntCntObj.innerHTML; // ����Ͷע�Ļ���
				var srcPnts = parseInt(srcPntsStr);
				var addedPnts = parseInt(pointsStr);
				pntCntObj.innerHTML = srcPnts + addedPnts;
				// Ͷע�������� 
				var opCntObj = document.getElementById('_guess_op_cnt'+optionId);
				if (opCntObj) {
					var srcCnt = parseInt(opCntObj.innerHTML);
					opCntObj.innerHTML = srcCnt + 1;
				}
				// ���¼���Ͷע����
				var totalUserCnt = 0;
				var userCntList = [];
				NTES('span._guess_op_cnt', wrap).each(function() {
					var ucStr = this.innerHTML;
					var uc = parseInt(ucStr);
					totalUserCnt += uc;
					userCntList.push(uc);
				});
				var idx = 0;
				NTES('._guess_op_p', wrap).each(function() {
					var widthStr = '0%';
					if (totalUserCnt > 0) {
						var thisUserCnt = userCntList[idx];
						var p = Math.round((thisUserCnt/totalUserCnt)*100);
						widthStr = p+'%';
						//alert(idx+'->'+parseFloat(thisUserCnt)+'/'+totalUserCnt+'->'+widthStr);
					}
					//alert(widthStr);
					this.style.width = widthStr;
					this.title = widthStr;
					idx++;
				});
				// ����Ͷע���
				NTES('div._guess_can_join', wrap)[0].style.display = 'none';
				// ��ʾ��Ͷע��塣
				NTES('span._guess_betted', wrap)[0].innerHTML = addedPnts;
				NTES('div._guess_joined', wrap)[0].style.display = '';
			} else {
				alert(_gs_failed);
			}
		});
	},
	"drawGuessOptions" : function(guessList) { // ���ƾ��µ�ѡ��
		for ( var i = 0; i < guessList.length; i++) {
			var gs = guessList[i];

			var guessId = gs.guessId;
			var type = gs.type;
			var title = gs.title;
			var status = gs.status;
			var timeTitle = '��ֹͶעʱ�䣺';
			var time = gs.et.replace(',', '<br />');
			if (status == 1) {
				timeTitle = '��ʼͶעʱ�䣺';
				time = gs.st.replace(',', '<br />');
			}
			var points = gs.pts;
			if (!points) {
				points = 0;
			}

			var statusLabel = '�ѽ���';
			var statusClass = 'cDRed';
			// ״ֵ̬���ο�com.netease.bbs.db.facade.GuessManager#
			if (status == 1) {
				statusLabel = 'δ��ʼ';
				statusClass = 'cDGray';
			} else if (status == 2) {
				statusLabel = '������';
				statusClass = 'cBlue';
			}
			// ��������
			var wrap = NTES('div#_guess_no_' + guessId)[0];
			NTES('span._guess_type', wrap)[0].innerHTML = type; // ��������
			NTES('span._guess_points_total', wrap)[0].innerHTML = points; // ����Ͷע�Ļ���
			NTES('div._guess_title', wrap)[0].innerHTML = title; // ���±���
			var statusObj = NTES('span._guess_status', wrap)[0]; // ����״̬
			statusObj.className = statusClass;
			statusObj.innerHTML = statusLabel;
			NTES('span._guess_time_title', wrap)[0].innerHTML = timeTitle; // ����ʱ��
			NTES('span._guess_time', wrap)[0].innerHTML = time;

			var bet = gs.bet;
			
			var _this = this;
			// ���µ�ѡ��
			var ops = gs.ops;
			var opsHtml = [];
			var guessResultText = '';
			for (var x=0; x<ops.length; x++) {
				var opx = ops[x];
				opsHtml.push(_this.getGuessOptionHTML(gs.resultId, status, bet, gs.betOpId, opx));
				if (status == 4 && gs.resultId == opx.id) {	// ��������Ѿ������������µĽ����ʾ������
					guessResultText = opx.title;
				}
			}
			//log('status:'+status+',type:'+type);
			var displayTarget = NTES('div#_guess_result_tips', wrap);
			var showPanel = NTES('div#_guess_result_show', wrap);
			if (showPanel && showPanel[0] && displayTarget && displayTarget[0] && guessResultText != '') {
				displayTarget[0].innerHTML = guessResultText; // ���µ���ȷ���չʾ
				showPanel[0].style.display = '';
			}
			NTES('span._guess_options', wrap)[0].innerHTML = opsHtml.join('');

			// �Ƿ��ʼ�����뾺�µ����
			if (status == 2 && bet < 0) { // ���½����У����û�û�в��뾺�£���ʱ��ʼ�����뾺�µ����
				_this.initJoinGuess(wrap, guessId);
				NTES('div._guess_can_join', wrap)[0].style.display = '';
			}

			// �û����뾺�µ�����
			if (status != 1 && bet > 0) {
				NTES('span._guess_betted', wrap)[0].innerHTML = bet;
				NTES('div._guess_joined', wrap)[0].style.display = '';
			}

			// ��ʾ��������
			wrap.style.display = '';
		}
	},
	"selectRadio" : function(obj, guessId) { // ���radio�ĸ�div���Զ�ѡ�и�radio
		var radio = NTES('._guess_ops', obj)[0];
		if (radio && !radio.disabled) {
			radio.checked = true;
			var wrap = NTES('div#' + guessId)[0];
			this.calcGuessEarnedPoints(wrap);
		}
	}	
};

/**
 * Thread.sleep(ms)
 * ��������Ҫ��sleepǰִ�д��룬����ȷ��û�����⣩
 * �÷�����ָ����ʱ���ڻص���ǰ�ĺ����������ڵ���sleep֮ǰ�Ĵ���ᱻ���ִ��
 * ����sleep�ĺ���������ʽ���ܳ���3��
 * sleep����Ƕ��ʹ��
 */
var Thread = {
    "init":""
    ,"sleeping":false
    ,"ok":function () {
        document.title = "sleep:ok";
        this.sleeping = true;
        var length = (this.arguments.length);
        if (length == 0) {
          Thread.func();
        }
        else if (length == 1) {
          Thread.func(this.arguments[0]);
        }
        else if (length == 2) {
          Thread.func(this.arguments[0], this.arguments[1]);
        }
        else if (length == 3) {
          Thread.func(this.arguments[0], this.arguments[1], this.arguments[2]);
        }
        else {
          alert("ʹ��sleep���ܳ���3������");
        }

        Thread.func = null;

    }
    ,"func":null
    ,"arguments":null
    ,"sleep":function(ms) {
        document.title = "sleep:"+ms;
        if (this.sleeping) {
            this.sleeping = false;
            return false;
        }
        else {
            this.sleeping = true;
        }

        this.func = this.sleep.caller;
        this.arguments = this.func.arguments;
        
        setTimeout("Thread.ok()", ms);
        return true;
    }
}

var BbsUtil = {
    "init":""
    ,"addEvent":function(elem, eventName, handler){
	    if (window.attachEvent) {
	    	elem.attachEvent("on" + eventName, handler);
	    }
	    else {
	    	elem.addEventListener(eventName, handler, false);
	    }
	}
    ,"checkUploadImg":function(filepath){
    		if (filepath == null || filepath == ""){
  	  	 	alert("����ѡ���ļ�");
  	  		return false;
  	  	}
  	  	else if (!this.isImg(filepath)){
  	  	 	alert("�ϴ���ͼƬ�ĸ�ʽֻ����gif��jpg/jpeg����png");
  	  		return false;
  	  	}
  	  	return true;
    }
    ,"isImg":function(imgsrc){
		var rex = /\.(gif|jpg|png|jpeg)$/i
		if (rex.test(imgsrc)){
		return true;
		}
		else
		{
			return false;
		}
    }
	,"checkDomain":function(pageDomain) {
		if (document.domain.indexOf(".163.com") == -1) {
			return;
		}
		try {
			
			if (document.domain != pageDomain) {
				var url = document.location.href;
				var realUrl = url.replace(document.domain, pageDomain);
				var img = new Image();
				img.src = "http://fund8.money.163.com/bbs/class_not_found.jsp?message=��������:"+document.referrer;
				document.location.href = realUrl;
			}
		}
		catch(e) {
		}
	}
    /**
     * ��ʾ��¼��ť������ʾ�˳�
     */
    ,"showLoginButton":function() {
        var html = "";
        if (BbsCookie.isLogined()) {
            html += ('<span style="line-height:24px">');
            html += (' <a href="javascript:BbsBoardAdmin.checkMaster()" target="_self" id="boardadmin">����ģʽ</a>');
			      html += ' <a href="/bbs/list.jsp?boardid='+global_boardid+'&plugin=y&username='+BbsCookie.getPassport()+'" title="���ڵ�ǰ���淢�������">�ҵ�����</a> ';
            var messageCount = Userinfo.getMessageCount();
            if (messageCount>0) {
                var m_top   = 18;
                var m_left  = -30;
                if (!window.isIE()) {
                    m_top = 0;
                    m_left = 90;
                }
                html += ('<div style="position:absolute"><div style="height:20px;width:120px;position:relative;left:'+m_left+'px;top:'+m_top+'px;background-color:#FFFFE1;border:1px solid #858585;color:#333333;font-size:13px;padding:1px;text-align:center;"><a href="javascript:Bbs.showMessage()" target="_self">����<strong>'+messageCount+'</strong>����ֽ��</a></div></div>');
            }
            html += (' <a href="javascript:Bbs.showMessage()" target="_self">�鿴ֽ��</a>');
            //('+messageCount+')
            
            
            html += (' <a href="javascript:Bbs.logout()" target="_self">�˳�</a></span>');
        }
        else {
            html += ('<a href="javascript:Bbs.showLoginDialog(BbsUtil.reload)" target="_self"><img src="/bbs/img07/btbg02.gif" width="87" height="22" alt="��¼��̳" /></a>');
        }
        var obj = document.getElementById("myLoginButton");

        if (obj) {
			obj.innerHTML = html;
			
			//����ģʽ��ť
	        try{
	            BbsBoardAdmin.load();
	        }
	        catch (e){}
		}
        
    }
    /**
     * ����ҳ����ʾ��¼��Ϣ
     */
    ,"showLoginInfo":function() {
        var obj = document.getElementById("myLoginInfo");
        if (obj == null) {
            //�б�ҳ��
            return this.showLoginButton();//
        }
        var html = "";
        if (BbsCookie.isLogined()) {
            if (typeof(noNicknameInfo) == "undefined") {
            	var username = BbsCookie.getPassport();
                html += ('<a class="cRed" href="http://bbs.163.com/'+username+'" target="_blank">'+Userinfo.getNickname()+'</a> ��ӭ�������ף�');
            }
            var messageCount = Userinfo.getMessageCount();
            if (messageCount>0) {
                var m_top   = 18;
                var m_left  = -30;
                if (!window.isIE()) {
                    m_top = 0;
                    m_left = 90;
                }
                html += ('<div style="position:absolute"><div style="height:14px;width:120px;position:relative;left:'+m_left+'px;top:'+m_top+'px;background-color:#FFFFE1;border:1px solid #858585;color:#333333;font-size:13px;padding:3px;text-align:center;"><a href="javascript:Bbs.showMessage()" target="_self" style="text-decoration:none;color:#000">����<strong>'+messageCount+'</strong>����ֽ��</a></div></div>');
            }

            html += ('<span id="mymsg">����<a href="javascript:Bbs.showMessage()" target="_self" class="cRed">'+messageCount+'</a>��δ��ֽ�� </span>');
            html += ('<a href="javascript:Bbs.logout()" target="_self" class="c1">��ȫ�˳�</a>');
        }
        else {
            html += ('<a class="cRed">�ο�</a> ��ӭ�������ף�����<a href="javascript:Bbs.showLoginDialog(Bbs.noCallback)" target="_self" class="c1">��¼</a>');
        }
        
        obj.innerHTML = html;
    }
    /**
     * ��ť���ͳ��
     */
    ,"clickStat":function(type) {
    	Dwr.clickStat(type);
    }
    
    /**
     * �����ı���������
     */
    ,"copyText":function(text) {
      try {
          clipboardData.setData('Text', text);
      }
      catch(e) {
          alert("�����Ƶ������幦�ܡ�����������ʹ�õ������.");
      }
    }
    ,"format":function(obj) {
        var body = "\n"+obj.value;
        body = body.replace(/ |��/ig,"");
        body = body.replace(/\r\n/ig,"\n");
        body = body.replace(/\n\n/ig,"\n");
        body = body.replace(/\n\n/ig,"\n");
        body = body.replace(/\n\n/ig,"\n");
        body = body.replace(/\n\n/ig,"\n");
        body = body.replace(/\n/ig,"\n\n����");
        body = body.replace("\n\n","");
        obj.value=body;
    }
	,"getCodeJsp":function() {
		var time = new Date().getTime();
		var index = time % 10;
		return "/bbs/code/code"+index+".jsp";
	}
    /**
     * ���¼�����֤��.
     */
    ,"reloadCode":function() {
       document.getElementById("imgcheckcode").src = BbsUtil.getCodeJsp()+"?"+(new Date().getTime()); 
    }
    ,"reloadMsgCode":function() {
        document.getElementById("imgcheckcode").src = "/bbs/msgCode.jsp?" + (new Date().getTime());
    }
    ,"loadCheckcode":function(id) {
        var form = document.forms["frmpost"];
        var checkcode = form.checkcode;
        if (typeof(checkcode) == "object") {
            if (checkcode.value == "") {
                this.reloadCheckcode();
            }
        }
    }
    ,"reloadCheckcode":function(id) {
        if (typeof(id) == "undefined") {
            id = "imgcheckcode";
        }
        document.getElementById(id).src = BbsUtil.getCodeJsp()+"?"+(new Date().getTime()); 
    }
    ,"checkReplyPost":function() {
        var form = document.forms["frmpost"];
        if (typeof(isyiba) != "undefined" && isyiba == "yiba" && typeof(filename) != "undefined" && filename == "list"){
		        if (form.title.value == "") {
		            Dialog.alert("���ӱ��ⲻ��Ϊ��Ŷ.");
		            form.title.focus();
		            return false;
		        }
		    }
        if (form.content.value == "") {
            Dialog.alert("���ݲ���Ϊ��Ŷ.");
            form.content.focus();
            return false;
        }
        if (1==1) {
            //�ж��û��Ƿ���Ҫ������֤�룿
            var checkcode = form.checkcode;
            if (typeof(checkcode) == "object") {
                if (checkcode.value == "") {
                    Dialog.alert("��֤�뻹û������.");
                    checkcode.focus();
                    return false;
                }
                if (checkcode.value.length != 4) {
                    Dialog.alert("��֤���λ������Ŷ.");
                    checkcode.focus();
                    return false;
                }
            }
            else {
              var verifyMessage = "";
              if (BbsCookie.isLogined()) {
                  verifyMessage = this.isWantVerify();
              }
              else {
                  verifyMessage = "����������������Ҫ������֤��.";
              }
              if (verifyMessage != "") {

                  var html ="";
                  

				if (typeof(isyiba) != "undefined" && isyiba == "yiba"){
					html = '<span class="item">�� ֤ �룺</span> <input style="width:70px" type="text" name="checkcode" id="textfield" onkeydown="if(event.keyCode==13){if(BbsUtil.checkReplyPost() != false && Editor.insertImgorMedia() != false){document.frmpost.submit();}}"/><a href="javascript:BbsUtil.reloadCode();"><span class="cGray">&nbsp;���������֤��&nbsp;</span></a><span class="cDRed">' + verifyMessage + '</span><br/>���������������� <a href="javascript:BbsUtil.reloadCode();"><img id="imgcheckcode" src="'+BbsUtil.getCodeJsp()+'" alt="�����壬��һ��" /></a><br/>���������������� ����<a href="javascript:BbsUtil.reloadCode();">�����壬��һ��</a>';	
				}
				else{
					html = '<div>��֤��:������<input type="text" size="6" name="checkcode" value="" class="input007" maxlength="4"/>,������ظ���Ҫ������֤�롣(<font color="#ff0000">'+verifyMessage+'</font>)<br/>������������<a href="javascript:BbsUtil.reloadCode();" target="_self"><img id="imgcheckcode" src="'+BbsUtil.getCodeJsp()+'" alt="�����壬��һ��"/></a><br/>����������������<a href="javascript:BbsUtil.reloadCode();" target="_self">�����壬��һ��</a></div>';	
				}
									
                  new Insertion.Before('frmpost_upload', html);

                  form.checkcode.focus();
                  return false;
              }
            }
        }


        //�ж��Ƿ��йؼ���ǰ����Ҫ���ύ��ť���أ�������п��ܶ���ظ��ύ
        document.getElementById("btnSubmit").style.visibility = "hidden"; 
        
        Dwr.hasForfendKeyword(global_boardid,global_threadid,"",form.content.value,function(data){
            if(data== true){
                BbsAdmin.showDialog('�Ͻ���', '/bbs/dialog/hasforfend.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
                document.getElementById('dialog_close_btn').style.display="none";
            }else{
              Dwr.hasSubtleKeyword(global_boardid,global_threadid,"",form.content.value,function(data){
                  if(data==true){
                      BbsAdmin.showDialog('���д�', '/bbs/dialog/hassubtle.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
                  }
                  else{
					  document.getElementById("btnSubmit").style.visibility ="hidden";
					  if (typeof(isyiba) == "undefined"){
        				//��ֱ̳�ӷ���false������Ҫ���ݷ������ж��Ƿ�submit;
                    	form.submit();
						return false;
						}
					  else{
						return true;	
					  }
                  }
              });
            }
        });
        
        if (typeof(isyiba) == "undefined"){
            return false;
        }
        else{
            return true;
        }
    }
    
    /**
    * Ajax��ҳ
    * url:�����URL
    * divid:��Ҫ���µ�divid
    * loadingdiv:��ʾ���ȵ�divid
    **/
    ,"ajaxpaging":function(url,divid,loadingdivid){
				new Ajax.Request(url,{method:'get',requestHeaders:["If-Modified-Since","0"],onComplete:function(data){
								$(divid).innerHTML = data.responseText;
							}
							});
		}
    
    /**
    *�װɻظ������������Ƿ������ظ�
    */
    ,"setAnymousePost":function() {
    			
    			var form = document.forms["frmpost"];
    			if (typeof(checkcode) == "object"){
    					return;
    			}
    			this.unsetAnymousePost();
    			var verifyMessage = "����������������Ҫ������֤��.";
    			var html = '<span class="item">�� ֤ �룺</span> <input type="text" name="checkcode" id="textfield" /><span class="cGray">��������֤�롣</span><span class="cDRed">' + verifyMessage + '</span><br/><a href="javascript:BbsUtil.reloadCode();"><img id="imgcheckcode" src="'+BbsUtil.getCodeJsp()+'" alt="�����壬��һ��" /></a>';
    			//new Insertion.Before('frmpost_upload', html);
    			document.getElementById('frmpost_upload').innerHTML = html;
    			form.checkcode.focus();
    }
    
    /**
    *�װɻظ������������Ƿ������ظ�
    */
    ,"unsetAnymousePost":function() {
    		document.getElementById('frmpost_upload').html = '';
    		document.getElementById('frmpost_upload').style.display = "none";
    }
    
    ,"showAnonymouseDiv":function() {
    		if (BbsCookie.isLogined()){
    			document.getElementById('setAnonymous').style.display = 'block';
    			//document.getElementById('textAnonymous').style.display = 'block';
    				
    		}
    		else{
    				document.getElementById('setAnonymous').style.display = 'none';
    				//document.getElementById('textAnonymous').style.display = 'none';	
    		}
    }
    
    ,"showorhideDiv":function(divname) {
    		theDiv = document.getElementById(divname);
			if (theDiv == null || theDiv == "undefined")
			{
				return;
			}
			if (theDiv.style.display == "none"){
					theDiv.style.display = "block";	
			}	
			else{
				theDiv.style.display = "none";	
			}	
    }

    ,"isWantVerify":function(isThreadPost, imgUrls) {
        var form = document.forms["frmpost"];
        //��ʱȡ�����˰�����Ҫ��֤�������
        /*var checkobj = form.setInput;
        if (typeof(checkobj) == "object"){
        	if (checkobj.checked){
        		return "����������������Ҫ������֤��.";	
        	}	
        }*/
        //alert(imgUrls);
        DWREngine.setAsync(false);
        var verifyMessage = "";
        Dwr.isWantVerify(global_boardid, isThreadPost, imgUrls, function(data){
            //var content = (dwr.util.toDescriptiveString(data, 1));
            //verifyMessage = content;     
            verifyMessage = data;
        });
        DWREngine.setAsync(true);
        return verifyMessage;
    }
    /**
     * ������һ��ѡ���Ƿ��Ѿ���һ����ѡ��
     *
     * @param options ѡ�����
     */
    ,"isChecked":function(options) {
        if (typeof(options.length) == "undefined") {
            return options.checked;
        }
        for (var i=0; i<options.length; i++) {
            if (options[i].checked) {
                return true;
            }
        }
        return false;
    }
    /**
     * ��ȡ��ѡ���ֵ,û��ѡ�з���null
     * 
     * @param frmname ������
     * @param name  �ֶ�����
     */
    ,"getRadioValue":function(frmname, name) {
        var form = document.forms[frmname];
        var eles = form[name];
        var value = null;
        if (typeof(eles) != "undefined") {

        for (var i=0; i<eles.length;i++) {
            if (eles[i].checked){
                value = eles[i].value;
            }
        }
        }
        return value;
    }
    /**
     * ��ȡ�������ֵ,Ĭ�Ϸ���null
     * 
     * @param frmname ������
     * @param name  �ֶ�����
     */
    ,"getSelectValue":function(frmname, name) {
        var form = document.forms[frmname];
        var ele = form[name];
        var value = null;
        if (typeof(ele) != "undefined") {
				
       	value = ele.value;
        }
        return value;
    }
     /**
     * ��ȡ��ѡ���ֵ,û��ѡ�з���0
     * 
     * @param frmname ������
     * @param name  �ֶ�����
     */
    ,"getCheckboxValue":function(frmname, name) {
        var form = document.forms[frmname];
        var ele = form[name];
        var value = 0;
        if (typeof(ele) != "undefined") {
					if (ele.checked){
						value = 1	;	
					}
        }
        return value;
    }
    /**
     * ��ȡ����ı����ֵ.
     *
     * @param frmname ������
     * @param name  �ֶ�����
     * @return array
     */
    ,"getValues":function(frmname, name) {
        var form = document.forms[frmname];
        var eles = form[name];
        var values = new Array();
        var index = -1;
        for (var i=0; i<eles.length;i++) {
            
            if (eles[i].type=="checkbox" || eles[i].type=="radio") {
                if (eles[i].checked) {
                    index++;
                    values[index] = eles[i].value;
                }
            }
            else {
                index++;
                values[index] = eles[i].value;
            }
        }
        return values;
    }
    /**
     * ����ǰҳ�����ղؼ�.
     */
    ,"addFavorite":function() {
        window.external.addFavorite(document.location.href, document.title);
    }
    /**
     *��ʼ���ı���Ĭ��ֵ�¼�
     */
    ,"inputFocus":function(obj) {
        //var obj = document.getElementById(id);
        if (obj.title == "") {
            obj.title = obj.value;
            obj.onfocus = function() {
              if (this.value==this.title) {
                  this.value = "";
              }
            }
            obj.onblur = function() {
                if (this.value=="") {
                  this.value = this.title;
              }
            }
        }
        obj.value = "";        
    }
    /**
     * ��ȡ��������
     */ 
    ,"getBoardName":function(boardid) {
        DWREngine.setAsync(false);
        var boardName = null;

        Dwr.getBoardName(boardid, function(data){
            /*
            if (data != null && typeof data == 'object') {
                alert(dwr.util.toDescriptiveString(data, 2));
            }
            else {
              var content = (dwr.util.toDescriptiveString(data, 1));
              boardName = content;
            }
            */
            boardName = data;
        });
        DWREngine.setAsync(true);
        return boardName;
    }
    ,"getBytes":function(str) {
        if (str == null) {
            return 0;
        }
        var bytes = 0;
        for(i=0;i<str.length;i++){
            var c = str.charCodeAt(i);
            if((c>=0 && c<=255)||(c>=0xff61 && c<=0xff9f)){
                bytes += 1;
            }else{
                bytes += 2;
            }
        }
        return bytes;
    }
    /**
     * ˢ�µ�ǰҳ��
     */
    ,"reload":function () {
        window.location.reload();
    }
    /**
     * ���·��ʵ�ǰҳ�棬����ˢ��ҳ������õ������ļ�
     */
    ,"reloadPage":function() {
        location.href = location.href;
    }
    ,"noreload":function(res_id) {
        var obj = document.getElementById(res_id);
        obj.style.display = "none";
    }
  /**
   * ͼƬ����
   */
  ,"imageZoom":function(articleid) {
        var obj = $("content_"+articleid);
        var imgs = obj.getElementsByTagName("IMG");
        for (var i=0;i<imgs.length;i++) {
            if (imgs[i].width > 600) {
                imgs[i].width = 600;
            }
            
        }
    }


  /**
   * ͼƬ����
   */
  ,"imgZoom":function(obj, hasLink) {
        if (obj.width > 600) {
            obj.width = 600;
        }

		if (!hasLink) {
			return;
		}
        var pNode = obj.parentNode;
        if(pNode.tagName.toLowerCase() != "a" ){
          var aTagObj = document.createElement("a");
          aTagObj.href = obj.src;
          aTagObj.target = "_blank";
          pNode.insertBefore(aTagObj,obj);
          aTagObj.appendChild(obj);

          //var oldObj = obj.cloneNode(false);
          //obj.applyElment(aTagObj,"outside");
          //obj.replaceNode(aTagObj);
          //alert(aTagObj.href);
        }
    }
   /**
   *ȥ���ַ�����ǰ��ո�
   */
   ,"trim":function(str) {
	  	return    str.replace(/(^\s*)|(\s*$)/g,    "");
	},
	"replaceSpecial":function(url) {
		var htmlChars = /[&>"<]/g;
		var mapping = {"<" : "&lt;",">" : "&gt;","&" : "&amp;","\"":"&quot;"};
	  	return url.replace(htmlChars, function ($0) {return mapping [$0];});
	}
	,"showDiv":function(eventId,divobj,showdivname){
		if (eventId == "undefined")
		{
			return;
		}
		if (divobj ==  null || divobj == "undefined")
		{
			return;
		}
		if ($(showdivname) == null || $(showdivname) == "undefined")
		{
			return ;
		}
		clearTimeout(eventId);
		divobj.onmouseout=function(){
			eventId=setTimeout("BbsUtil.hideDiv('" + showdivname + "')",100);
		}
		$(showdivname).style.display="block";
		$(showdivname).onmouseover=function(){
			clearTimeout(eventId);
			$(showdivname).style.display="block";
		}
		$(showdivname).onmouseout=function(){
			BbsUtil.hideDiv(showdivname);
		}
	}
	,"hideDiv":function(hidedivname){
		if ($(hidedivname) == null || $(hidedivname) == "undefined")
		{
			return;
		}
		$(hidedivname).style.display = "none";
	}
	,"subStringByByte":function(srcText,maxByte){
		var tempText = "";
		var count = 0;
		for (i=0;i<srcText.length;i++)
		{
			if (srcText.charCodeAt(i)>255){
				count += 2;
			} 
			else{
				count++;
			}
			if(count > maxByte){ 
				return tempText;
			}
			tempText += srcText.charAt(i);
		}
		return srcText;

	}
	,"checkTextNum":function(srcObj,maxByte,showObj){
		if (srcObj != null && showObj != null )
		{
			var bytes = this.getBytes(srcObj.value);
			var num = ((maxByte-bytes)/2);
			if (num < 0) {
			  srcObj.value = this.subStringByByte(srcObj.value,maxByte);
			  num = 0;
			}
			showObj.innerHTML = num;
		}
	}
	,"copyTitle":function(title){
		var txt= window.document.location.href;
		txt += '\r\n' + title;
		try {
			clipboardData.setData('Text', txt);
			alert("���ѳɹ����Ʊ�����������ӵ�ַ����ӭ���Ƽ����������ѣ�");
		}
		catch(e) {
			alert("�����Ƶ������幦�ܡ�����������ʹ�õ������.");
		}
	}
	
	,"copyToClipBoard":function(clipname,title){
		var url = window.document.location.href;
		var clipBoardContent = url;
		if (title != null || title != ""){
			clipBoardContent += '\r\n' + title;;
		}
		this.copy_clip(clipBoardContent);
		$(clipname).innerHTML="���Ƴɹ����Ƽ������ĺ���";

		Dwr.copyUrl(title, url, function(data) {});
	}
   ,"copy_clip":function(text2copy){
		if (window.clipboardData)
		{
			window.clipboardData.setData("Text",text2copy);
		}
		else
		{
			var flashcopier = 'flashcopier';
			if(!document.getElementById(flashcopier))
			{
				var divholder = document.createElement('div');
				divholder.id = flashcopier;
				document.body.appendChild(divholder);
			}
			document.getElementById(flashcopier).innerHTML = '';
			var divinfo = '<embed src="http://swf.news.163.com/2008/clipBoard.swf?data='+text2copy+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
			document.getElementById(flashcopier).innerHTML = divinfo;
		}
		return true;
	}
   ,"getAbsPosition":function(elem){
		var pos = {};
		if (elem.getBoundingClientRect) {
			var rect = elem.getBoundingClientRect();
			pos.y = rect.top + (document.body.scrollTop || document.documentElement.scrollTop);
			pos.x = rect.left + (document.body.scrollLeft || document.documentElement.scrollLeft);
		} else {
			pos.y = elem.offsetTop;
			pos.x = elem.offsetLeft;
		}
		
		return pos;
	}
}

var Userinfo = {
    "init":""
    ,"userinfo":null

    ,"getUrl":function() {
        //���usernameΪ�˽������û���¼�����ļ��Ṳ�������
        var r=CookieStatus.getMessageRandom();
        var url = "/bbs/dialog/userinfo.jsp?username="+BbsCookie.getPassport()+"&r="+r;  
        return url;
    }
    
    ,"getReloadUrl":function() {
        //���r��������Ľ��ҳ�滺��ʱ��Ϣ�������ܼ�ʱ��������
        var r=CookieStatus.changeMessageRandom();
        var url = "/bbs/dialog/userinfo.jsp?username="+BbsCookie.getPassport()+"&r="+r;  
        return url;
    }
    /**
     * �����û���Ϣ
     */
    ,"loadUserinfo":function() {
        if (this.userinfo == null) {
            var username = BbsCookie.getPassport();
            if (BbsCookie.isLogined() && username!="" && username!=null) {
                Bbs.loadJs(this.getUrl());
            }
            else {
                BbsUtil.showLoginInfo();
            }
            
        }
    }
    /**
     * ���¼����û���Ϣ�����Զ�����ͻ��˻��棩
     */ 
    ,"reloadUserinfo":function() {
        this.userinfo = null;
        var url = this.getReloadUrl();
        
        new Ajax.Request(url, {method: 'get', onComplete:function(obj){
			var script = document.createElement("script");
			script.text = obj.responseText;

        	//ΪʲôҪʹ��insertAdjacentElement��,��ΪappendChild��JS�ļ��Ѿ��������������ʱ�ͻ����IE���������(Bbs.editArticle�����ͻ����,postArticle������)
        	if (document.frames) {
            	document.body.insertAdjacentElement("BeforeBegin",script);
        	}
       	 	else {
            	document.body.appendChild(script);  //
        	}
            Userinfo.loadUserinfo();
        }});
    }

    /**
     * ɾ���û���Ϣ
     */
    ,"removeUserinfo":function() {
        this.userinfo = null;
        var url = this.getUrl();
        
        new Ajax.Request(url, {method: 'get',requestHeaders:["If-Modified-Since","0"], onComplete:function(obj){
            
        }});
    }

    ,"getUserinfo":function() {
        if (this.userinfo == null) {
            return {};
        }
        else {
            return this.userinfo;
        }
    }
    ,"setUserinfo":function(userinfo1) {
        this.userinfo = userinfo1;
    }
    ,"updateNickname":function(userid,nickname) {
        Dwr.updateNickname(userid,nickname);
    }

    /**
     * ��ȡ�ǳ�
     */
    ,"getNickname":function() {
        var nickname = this.getUserinfo().nickname;
        if (nickname == null || nickname=="") {
            nickname = BbsCookie.getPassport();
        }
        return nickname;
    }
    ,"getMessageCount":function() {
        var messageCount =  this.getUserinfo().messageCount;
        if (messageCount == null || messageCount == "") {
            return "0";
        }
        else {
            return messageCount;
        }
    }
    ,"initLogin":function(user, pass, url, reply){
        var usercookie = BbsCookie.getPassport(); //��Cookie�л�ȡͨ��֤�ʺ�
		 if (usercookie == "") {
			 user.value="�� name@example.com";
		 }else {
		 	user.value = usercookie;
		 	if(reply == 1){//����ǻظ��Ĵ��ڽ��㲻�۽��������
		 		
		 	}else{
		 		pass.focus();
		 	}
		 }
		 user.style.color='#bbbbbb';
		 url.value  = document.location.href;
		 Passport.bind(user,pass);
		 BbsUtil.addEvent(user,"focus",function(e){
			 if(user.value == '�� name@example.com'){
				 user.value='';
		     }
			 user.style.color='#000000';
		 }); 
		 BbsUtil.addEvent(user,"blur",function(e){
			 if(user.value==''){
				 user.value='�� name@example.com';
			 } 
			 user.style.color='#bbbbbb';
		 }); 
    }
}

var BbsCookie = {
    "init":""
    ,"getValue":function(name) {
    }
    ,"getCookieValue":function (offset) {
        var endstr = document.cookie.indexOf (";", offset);
        if (endstr == -1) {
          endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    }
    /**
     * ��ȡCookie
     */
    ,"getCookie":function (name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
          var j = i + alen;
          if (document.cookie.substring(i, j) == arg) {
            return this.getCookieValue (j);
          }
          i = document.cookie.indexOf(" ", i) + 1;
          if (i == 0) {
            break;
          }
        }
        return null;
    }
    ,"getExpires":function(time) {
        var expdate = new Date();
        expdate.setTime(expdate.getTime() + time);
        return expdate;
    }
    /**
     * ɾ��Cookie
     */
    ,"deleteCookie":function (cname) {
        this.setCookie(cname,"", 0);
    }
    /**
     * ����Cookie
     */
    ,"setCookie":function (name, value, expires, path) {
        var value = name + "=" + escape(value) + "; domain=163.com";
        if (path) {
        	value += '; path='+path;
        }
        if (expires>0) {
          value += "; expires=" + this.getExpires(expires).toGMTString() ;
        }
        
        document.cookie = value;
    }
    /**
     * ��ȡͨ��֤�ʺ�
     */
    ,"getPassport":function() {
        var passport = this.getCookie("NETEASE_SSN");
        if (passport == null || passport == "") {
            passport = this.getPassport2();
        }else {
			var index = passport.indexOf("@163.com");
			if (index == -1){
				passport = passport;
			}
			else {
				passport = passport.substring(0, index);
			}
		}
		return passport;
	    
    }
    /**
     * ��ȡͨ��֤�ʺ�
     */
    ,"getPassport2":function() {
        var passport = this.getCookie("P_INFO");
        if (passport == null || passport == "") {
            return "";
        }
		if (1==1) {
			var index = passport.indexOf("|");
			if (index > -1){
				passport = passport.substring(0, index);
			}
		}
		var index = passport.indexOf("@163.com");
		if (index == -1){
			return passport;
		}
		else {
			return passport.substring(0, index);
		}
    }
    /**
     * �ж��Ƿ��Ѿ���¼.
     */
    ,"isLogined":function() {
        var NTES_SESS   = BbsCookie.getCookie("NTES_SESS");
        var isLoinged = (NTES_SESS != null && NTES_SESS != "");
		if (!isLoinged) {
			return this.isLogined2();
        }
        var username = BbsCookie.getPassport();
        isLoinged = (username != null && username != "");
        return isLoinged;
	}
    /**
     * �ж��Ƿ��Ѿ���¼.
     */
    ,"isLogined2":function() {
        var S_INFO   = BbsCookie.getCookie("S_INFO");
        var hasCookie = (S_INFO != null && S_INFO != "");
        if (!hasCookie) {
			//��֤�־õ�½
			var P_INFO = this.getCookie("P_INFO");
			if(P_INFO != null && P_INFO != ""){
				var strlist = P_INFO.split("|");
				if(strlist.length>=3){
					var logintype = strlist[2];
					if(logintype == 1){//�־õ�½
						return true;
					}
				}
			}
			return false;
        }
		
		var loginTime = -1;
		if (1==1) {
			var index = S_INFO.indexOf("|");
			if (index > -1){
				loginTime = S_INFO.substring(0, index);
			}
		}
        var username = BbsCookie.getPassport();
        var isLoinged = (username != null && username != "");
        return isLoinged;
    }
}




var BbsAdmin = {
    "init":""
    ,"showDialog":function(title, url, width) {
        Bbs.loadDwr();  //Ԥ�ȼ���Dwr
        if (!BbsCookie.isLogined()) { //δ��¼
            Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
        }
        else {
            Dialog.show(title, url, false, false);
            if(typeof(width) == "number" && width){
				Dialog.setWidth(width);
			}
        }
    }
    /**
     * �鿴IP
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"showIP":function(boardid, articleid,userid) {
        if(userid=="-0000"){
          this.showDialog('�鿴IP', '/bbs/dialog/showip.jsp?boardid='+boardid+'&articleid='+articleid);
        }else{
          this.showDialog('�鿴�û�', '/bbs/dialog/addBlackUser.jsp?boardid='+boardid+'&articleid='+articleid+'&userid='+userid);
        }
        
    }
    /**
     * �����ö�
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"topThread":function(boardid, threadid) {
        this.showDialog('�ö�����', '/bbs/dialog/topthread.jsp?boardid='+boardid+'&threadid='+threadid);
    }
    /**
     * �Ƽ�����
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"pushThread":function(boardid, threadid) {
        this.showDialog('�Ƽ�����', '/bbs/dialog/pushthread.jsp?boardid='+boardid+'&threadid='+threadid);
    }
    /**
     * ��������Ƽ�
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"aboutThread":function(boardid, threadid) {
    	if(Bbs.checkLoginedLink("/bbs/about.jsp?boardid=" +boardid+"&threadid="+ threadid)){
			document.location.href = "/bbs/about.jsp?boardid=" +boardid+"&threadid="+ threadid;
		}
    }
    /**
     * ���ӼӾ���
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"eliteThread":function(boardid, threadid) {
        this.showDialog('���ӼӾ���', '/bbs/dialog/elitethread.jsp?boardid='+boardid+'&threadid='+threadid);
    }
	/**
     * �鿴������б�
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"activityApplyList":function() {
    	if (typeof(activityApplyListShow) == "function") {
        	activityApplyListShow();
    	}
    }

	/**
     * ��ʾֽ����Ϣ
     */
    ,"activityApplyListById":function(boardid, articleid, id, pageid) {
        if (typeof(pageid)=="undefined") {
            pageid = 1;
        }
        BbsAdmin.showDialog('�鿴������б�', '/bbs2009/dialog/activityApplyList.jsp?boardid='+boardid+'&articleid='+articleid+'&id='+id+'&pageid='+pageid);
    }

    /**
     * ���뵼��
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"insertGuide":function(boardid, threadid) {
        this.showDialog('���뵼��', '/bbs/dialog/insertguide.jsp?boardid='+boardid+'&threadid='+threadid);
        Dialog.setWidth(550);
    }

    /**
     * ���뵼��
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"limitThread":function(boardid, threadid) {
        this.showDialog('���Ʊ༭����', '/bbs/dialog/limitthread.jsp?boardid='+boardid+'&threadid='+threadid);
    }
    /**
     * ���Ӽ���
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"lockThread":function(boardid, threadid) {
        this.showDialog('���Ӽ���', '/bbs/dialog/lockthread.jsp?boardid='+boardid+'&threadid='+threadid);
    }
    /**
     * ��������
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"rubbishThread":function(boardid, threadid) {
        this.showDialog('��������', '/bbs/dialog/rubbishthread.jsp?boardid='+boardid+'&threadid='+threadid);
    }
    /**
     * ��������
     */
    ,"reply":function(boardid, threadid, floor, nickname) {
        if (!Bbs.checkLoginedPostReply()) {
            //�ð�����Ҫ��¼���ܻظ�
            //Bbs.showLoginDialog(true);
            return;
        }
        if ($("div_reply").style.display == "none") {
            alert("��ǰ���Ӳ�����������.");

            new Ajax.Request("/bbs/checkreply.jsp",{method:"get"});
            return;
        }
        var content = "���ظ�";
        if (floor>0) {
          content += floor+"¥";
        }
        content += " "+ nickname +" ��:\n";
        $("frmpost_toolbar").style.display = "block";
        $("frmpost_upload").style.display = "block";

        var upload = document.getFrame("frmupload");
        if (typeof(upload) == "object") {
            upload.setUploadBoardid(global_boardid);
        }
        

        
        document.forms["frmpost"].content.focus();
        document.forms["frmpost"].content.value = content;
        document.documentElement.scrollTop=600000;
    }
    /**
     * ���ûظ�
     */
    ,"quoteReply":function(boardid, articleid) {
        if ($("div_reply").style.display == "none") {
            alert("��ǰ���Ӳ�����������.");
            new Ajax.Request("/bbs/checkreply.jsp",{method:"get"});
            return;
        }
        if (!Bbs.checkLoginedPostReply()) {
            //�ð�����Ҫ��¼���ܻظ�
            //Bbs.showLoginDialog(true);
            return;
        }
        var url = "/bbs/dialog/quotereply.jsp?boardid="+boardid+"&articleid="+articleid;

        new Ajax.Request(url,{onComplete:function(data){
            var content = (data.responseText);
            content = content.replace(/\n\s*\r/g,'');
            if (data.status==200) {
                $("frmpost_toolbar").style.display = "block";
                $("frmpost_upload").style.display = "block";
                var upload = document.getFrame("frmupload");

                if (typeof(upload) == "object") {
                    upload.setUploadBoardid(global_boardid);
                }

                document.forms["frmpost"].content.focus();
                document.forms["frmpost"].content.value = content;
                document.documentElement.scrollTop=600000;
            }
            else {
                alert("�������.");
            }
        }});
    }
    /**
     * ���ʻ�
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"sayGood":function(boardid, articleid) {
        Dwr.sayGood(boardid, articleid, function(data) {
            var msg = data;//(dwr.util.toDescriptiveString(data, 1));
            //�����ɹ�
            if (msg.indexOf("����:") == -1) {            
              var obj = document.getElementById("text"+articleid+"_goodnum");
              obj.innerHTML = parseInt(obj.innerHTML)+1;
            }
        });
    }
    /**
     * �Ӽ���
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"sayBad":function(boardid, articleid) {
        Dwr.sayBad(boardid, articleid, function(data) {
            var msg = data;//(dwr.util.toDescriptiveString(data, 1));
            if (msg.indexOf("����:") == -1) {            
              //�����ɹ�
              var obj = document.getElementById("text"+articleid+"_badnum");
              obj.innerHTML = parseInt(obj.innerHTML)+1;
            }
        });
    }

    /**
     * ɾ������
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"delPost":function(boardid, articleid) {
        this.showDialog('ɾ������', '/bbs/dialog/delpost.jsp?boardid='+boardid+'&articleid='+articleid);
    }

    /**
     * �Ӻ�
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"addBlackList":function(boardid, username) {
        this.showDialog('�Ӻ�����', '/bbs/dialog/addblacklist.jsp?boardid='+boardid+'&username='+username);
    }
    
    /**
     * �Ӻ�
     * @param boardid ����ID
     * @param username �û���
     */
    ,"delBlackList":function(boardid, username) {
    	if(confirm('�Ƿ�ȷ��ɾ���������û���'+username+'����')){
    			Dwr.delBbsBlackList(boardid,username,function(data){
    				alert(data);
    				document.location.replace(document.location.href);
    			});
    		}
    }
    
    /**
     * �����³�
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"downThread":function(boardid, threadid) {
    	if (!BbsCookie.isLogined()) {
            Bbs.showLoginDialog(true);
            return;
        }
    	if(confirm('�Ƿ�ȷ�Ͻ������³���')){
    		Dwr.downThread(boardid,threadid,function(data){
    			alert(data);
    		});
    	}
    }

	/**
     * ��Ӱ���
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"addBread":function(boardid,articleid,username) {
        this.showDialog('��Ӱ���', '/bbs/dialog/addBread.jsp?boardid='+boardid+'&articleid='+articleid+'&username='+username);
    }
    
    /**
     * Ͷ������
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"chargePost":function(boardid, threadid, articleid, floor) {
        this.showDialog('Ͷ������', '/bbs/dialog/chargepost.jsp?boardid='+boardid+'&threadid='+threadid+'&articleid='+articleid + "&floor=" +floor);
    }

	/**
     * Ͷ������
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"chargePost_new":function(boardid, threadid, articleid, floor) {
    	BbsUtil.clickStat("report");
        this.showDialog('Ͷ������', '/bbs/dialog/chargepost.jsp?boardid='+boardid+'&threadid=' + threadid + '&articleid='+articleid + "&floor=" +floor);
    }

    /**
     * ��������
     * @param boardid ����ID
     * @param threadid ����ID
     */
    ,"copyThread":function(boardid, threadid) {
        this.showDialog('��������', '/bbs/dialog/copythread.jsp?boardid='+boardid+'&threadid='+threadid, 550);
        //Dialog.setWidth(550);
    }
    /**
     * �����ŵ���
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"setAdminCommentTypes":function(boardid, articleid, types) {
        this.showDialog('�����ŵ���', '/bbs/dialog/setAdminCommentTypes.jsp?boardid='+boardid+'&articleid='+articleid+"&types="+types);
    }
    /**
     * ��Ϊ��Ѵ� 
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"setAskGoodAnswer":function(boardid, articleid) {
        if (!BbsCookie.isLogined()) {
            Bbs.showLoginDialog(true);
            return;
        }

        if (!confirm("���ú������޸ģ��Ƿ�ȷ����Ϊ��Ѵ�?")) {
            return;
        }

        Dwr.setAskGoodAnswer(boardid, articleid, function(data) {
            alert(data);
            document.location.replace(document.location.href+"?a1");
        });
    }
    /**
     * ��Ϊ�Ƽ��� 
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"setAskPushAnswer":function(boardid, articleid) {
        if (!BbsCookie.isLogined()) {
            Bbs.showLoginDialog(true);
            return;
        }

        if (!confirm("���ú������޸ģ��Ƿ�ȷ����Ϊ�Ƽ���?")) {
            return;
        }

        Dwr.setAskPushAnswer(boardid, articleid, function(data) {
            alert(data);
            document.location.replace(document.location.href);
        });
    }
}

var BbsAdminButton = {
    "init":""
    ,"articleid":0
     /**
     * ��ʾ����ť
     */
    ,"show":function(articleid) {
        this.articleid = articleid;
        //document.title ="articleid:"+articleid;
        var obj = $("admin_"+articleid);
        obj.style.display = "block";
        obj.onmouseout  = BbsAdminButton.closeOut;
        obj.onmouseover = BbsAdminButton.closeOver;
    }
    ,"curShow":null
    ,"closeOut":function() {
        this.curShow = setTimeout("BbsAdminButton.close()", 100);
    }
    ,"closeOver":function() {
        clearTimeout(this.curShow);
    }

    /**
     * �رչ���ť
     */
    ,"close":function() {
        var obj = $("admin_"+this.articleid);
        obj.style.display = "none";      
    }
}


var Nav = {
    "init":function() {
        //if(window.screen.width < 1024){        
        if(document.body.offsetWidth < 800){
            Nav.close();
        }
        else if (BbsCookie.getCookie("shownav") == "false") {
            Nav.close();
        }
    }
    /**
     * ������ർ��
     */
    ,"close":function() {
        var obj = document.getElementById("switchPoint");
        obj.alt = "չ����ർ����";
        obj.src = "/bbs/images/nav_middle_show.gif";
        document.getElementById("frmTitle").style.display="none";
        BbsCookie.setCookie("shownav", "false", 0);
    }
    /**
     * չ������
     */
    ,"open":function() {
        var obj = document.getElementById("switchPoint");
        obj.alt = "������ർ����";
        obj.src = "/bbs/images/nav_middle_hide.gif";
        
        document.getElementById("frmTitle").style.display="";
        BbsCookie.setCookie("shownav", "true", 0);
    }
    /**
     * �жϵ����Ƿ��
     */
    ,"isOpen":function() {
        var obj = document.getElementById("switchPoint");
        return (obj.alt == "������ർ����");
    }
    ,"switchSysBar":function(){
        if (this.isOpen()){
            this.close();
        }
        else{
            this.open();
        }
    }
    /**
     * ��ʾ��ർ��
     */
    ,"show":function() {
        //BbsCookie.getCookie("nav_show");
        BbsCookie.setCookie("nav_show", "y", -1);
       
    }

    /**
     * ������ർ��
     */
    ,"hide":function() { 
        //BbsCookie.getCookie("nav_show");
        BbsCookie.setCookie("nav_show", "n", -1);   
    }
    /**
     * �û��Ƿ������˵���
     */
    ,"isHidden":function() {
        return (("n" == BbsCookie.getCookie("nav_show")));
    }
}

/**
 * �������
 * 
 * @author ����
 */
var BbsPlugin = {
    "init":""
    

}


var BbsTab = {
    "init":""
    ,"showLeftTab":function(leftTabId, rightTabId) {
        $(leftTabId).style.display = "block";
        $(leftTabId+"_title").addClassName("c1");
        $(leftTabId+"_title").addClassName("on");

        $(rightTabId).style.display = "none";
        $(rightTabId+"_title").removeClassName("c2");
        $(rightTabId+"_title").removeClassName("on");

    }
    ,"showRightTab":function(leftTabId, rightTabId) {
        $(leftTabId).style.display = "none";
        $(leftTabId+"_title").removeClassName("c1");
        $(leftTabId+"_title").removeClassName("on");

        $(rightTabId).style.display = "block";
        $(rightTabId+"_title").addClassName("c2");
        $(rightTabId+"_title").addClassName("on");
    }
}


var MyXml = {
  "init":""
  ,"getValue":function(node, name) {
      return node.getElementsByTagName(name)[0].firstChild.data;
  }
}


var BbsBoard = {
  "init":""
  /**
   * ����Ѳذ���
   */
  ,"addMyFavorite":function(boardid) {
      if (!BbsCookie.isLogined()) { //δ��¼
          Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
          return;
      }

      Dwr.addMyFavorite(boardid, function(data) {
          
          var obj = $("myCollection");
          if (obj != null) {
              BbsLeft.loadMyFavorite();
              obj.style.display = "block";
          }
          
          alert(data);
      });
  }
  
  ,"addMyFavorite_Yiba":function(boardid) {
      if (!BbsCookie.isLogined()) { //δ��¼
          Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
          return;
      }

      Dwr.addMyFavorite_Yiba(boardid, function(data) {
          
          var obj = $("myCollection");
          if (obj != null) {
              BbsLeft.loadMyFavorite();
              obj.style.display = "block";
          }
          
          alert(data);
      });
  }

  /**
   * ɾ���Ѳذ���
   */
  ,"deleteMyFavorite":function(boardid) {
      if (!BbsCookie.isLogined()) { //δ��¼
          Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
          return;
      }

      if (!confirm("�Ƿ�ȷ��ɾ���ð��棿")) {
          return;
      }

      Dwr.deleteMyFavorite(boardid, function(data) {
          var obj = $("myCollection_"+boardid); //����

          if (obj != null) {
              obj.style.display = "none";
          }
      });
  }
  
  /**
   * ɾ���Ѳذ���
   */
  ,"deleteMyFavorite_Yiba":function(boardid) {
      if (!BbsCookie.isLogined()) { //δ��¼
          Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
          return;
      }


      if (!confirm("�Ƿ�ȷ��ɾ���ð��棿")) {
          return;
      }

      Dwr.deleteMyFavorite_Yiba(boardid, function(data) {
          var obj = $("myCollection_"+boardid); //����

          if (obj != null) {
              obj.style.display = "none";
          }
      });
  }
}



var BbsXml = {
  "init":""
  ,"load":function(url, params, responseFunction ) {
      var options = {method: "get", parameters: params, onComplete: responseFunction};
      new Ajax.Request(url, options);
  }
  ,"getNodeValue":function(node, name) {
      return node.getElementsByTagName(name)[0].firstChild.data;
  }
}

var YibaLogin = {
    /**
     * ��¼���ڳ�ʼ������
     */
    "init":function() {
    }
    ,"getForm":function(frameName) {
        return document.forms[frameName];
    }
    /**
     * ��¼�����ύ��֤
     */
    ,"dopost":function(frameName) {
        var form = this.getForm(frameName);
        if (form.username.value == "") {
            alert("�����������û���.");
            form.username.focus();
            return false;
        }
        if (form.password.value == "") {
            alert("����������.");
            form.password.focus();
            return false;
        }
        Userinfo.removeUserinfo();//����û���Ϣ


        var url = form.url.value;

        Bbs.loginPassport(form.username.value, form.password.value, Bbs.loginCallback);
        return false;
    }
    /**
     *��¼����֤
     */
    ,"dopost_return":function(frameName) {
        var form = this.getForm(frameName);
        if (form.username.value == "") {
            alert("�����������û���");
            form.username.focus();
            return false;
        }
        if (form.password.value == "") {
            alert("��������������");
            form.password.focus();
            return false;
        }
        Userinfo.removeUserinfo();


        var url = form.url.value;

        Bbs.loginPassport(form.username.value, form.password.value, Bbs.loginCallback);
        return true;
    }
}

/**
 * ����ַ����Ƿ�Ϊ����.
 */
String.prototype.isDigit = function() {
    var regex=/^([0-9])+$/; 
    if (regex.exec(this)){   
      return true;	
    }
    return false;
}


function insertContent(content) {
    Editor.insertContent(content);
}


function quitOlympics(boardid, articleid, username) {
    if (!BbsCookie.isLogined()) { //δ��¼
        Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
    }
    else {
      if (username != BbsCookie.getPassport()) {
          alert("�����Ӳ���������ģ�����Ȩ����.");
          return;
      }


      if (confirm("�Ƿ�ȷ���˳����˼����ţ�")) {
        Dwr.quitOlympics(boardid, articleid, username, function(data) {
            $("olympics_"+articleid).style.display = "none";
            alert(data);
        });
      }
    }
}

function joinGoldmedal(boardid, articleid, from_username) {
    if (!BbsCookie.isLogined()) { //δ��¼
    	Bbs.showLoginDialog(true); //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
    	return;
    }

    Dwr.joinGoldmedal(boardid, articleid,from_username, function(data) {
        if(data != null && data != ""){
        	BbsAdmin.showDialog("���ݰ�","/bbs/dialog/goldmedal.jsp?data="+data);
			Dialog.setWidth(450);
			//alert(data);
        }
    });
}

function joinInGoldmedal(boardid, articleid) {
	if (!BbsCookie.isLogined()) { //δ��¼
		Bbs.showLoginDialog(true); //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
		return;
	}
	
	Dwr.joinGoldmedal(boardid, articleid,"", function(data) {
		if(data != null && data != ""){
			BbsAdmin.showDialog("���ݰ�","/bbs/dialog/goldmedal.jsp?data="+data);
			Dialog.setWidth(450);
			//alert(data);
		}
	});
}

function joinChinaxinSpeciel(boardid, articleid,from_username) {
	
	if (!BbsCookie.isLogined()) { //δ��¼
		Bbs.showLoginDialog(true); //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
		return;
	}
	document.getElementById("spreed_btn").style.display="none";
	Dwr.joinChinaxin(boardid, articleid,from_username, function(data) {
		if(data != null && data != ""){
			BbsAdmin.showDialog("�й���","/bbs/dialog/chinaxin.jsp?data="+escape(data));
			Dialog.setWidth(502);
			document.getElementById("spreed_btn").style.display="block";
			document.getElementById("draghead").style.display="none";
		}
	});
}

function joinChinaxin(boardid, articleid,from_username) {
	if (!BbsCookie.isLogined()) { //δ��¼
		Bbs.showLoginDialog(true); //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
		return;
	}
	Dwr.joinChinaxin(boardid, articleid,from_username, function(data) {
		if(data != null && data != ""){
			BbsAdmin.showDialog("�й���","/bbs/dialog/chinaxin.jsp?data="+escape(data));
			Dialog.setWidth(502);
			document.getElementById("draghead").style.display="none";
		}
	});
}

function joinBiaoAXin(boardid, articleid) {
	if (!BbsCookie.isLogined()) { //δ��¼
		Bbs.showLoginDialog(true); //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
		return;
	}
	Dwr.joinBiaoAXin(boardid, articleid,function(data) {
		BbsAdmin.showDialog("쮰���","/bbs/dialog/biaoaxin.jsp?data="+escape(data));
		Dialog.setWidth(502);
		document.getElementById("biaoaxin_btn").style.display="none";
	});
}


function joinWorldCup(boardid, articleid,team, from_username) {
    if (!BbsCookie.isLogined()) { //δ��¼
    	Bbs.showLoginDialog(true); //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
    	return;
    }
    Dwr.isWorldCupUser(function(data) {
    	if(data){
    		alert("���Ѿ�ѡ�������֧�ֵ���ӣ�лл���룡");
    	}else{
    		BbsAdmin.showDialog("��ӭ����������̳�����籭���Դ��ƴ���","/bbs/dialog/worldcup.jsp?boardid="+boardid+"&articleid="+articleid+"&team="+team+"&from_username="+from_username);
    	    Dialog.setWidth(450);
    	}
    });
}

function viewActivity(domain,boardid,articleid,invite_username){
	window.location.href = "http://"+domain.replace("_",".")+".163.com/bbs/"+boardid+"/"+articleid+".html?invite_username="+escape(invite_username);
}

function joinActivity(activityid,team,mainArticle) {
    if (!BbsCookie.isLogined()) { //δ��¼
    	Bbs.showLoginDialog(true); //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
    	return;
    }
    Dwr.isJoinActivity(activityid,function(data) {
    	if(data){
    		alert("���Ѿ��μӹ����лл���룡");
    	}else{
    		var invite_username="";
    		var url=location.search;
    		if(url.indexOf("?")!=-1){
    			var str = url.substr(1) 
    			var strs = str.split("&");
	    		for(var i=0;i<strs.length;i++){
	    			if(strs[i].split("=")[0] == "invite_username")
	    				invite_username = unescape(strs[i].split("=")[1]);
	    		}
    		}
    		BbsAdmin.showDialog("��ӭ����������̳�","/bbs/dialog/activity.jsp?activityid="+activityid+"&team="+team+"&invite_username="+invite_username+"&mainArticle="+mainArticle);
    	    Dialog.setWidth(450);
    	}
    });
}


function quitLibang(boardid, articleid, username) {
	if (!BbsCookie.isLogined()) { //δ��¼
		Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
	}
	else {
		if (username != BbsCookie.getPassport()) {
			alert("�����Ӳ���������ģ�����Ȩ����.");
			return;
		}
		
		if (confirm("�Ƿ�ȷ���˳�����Ϊ����ɫ���")) {
			Dwr.quitLibang(boardid, articleid, username, function(data) {
				$("libang_"+articleid).style.display = "none";
				alert(data);
			});
		}
	}
}


var Upload = {
    "insertContent":function(url) {
      if(Editor.getForm().content.value=="����̳�����ڿ��ţ������Աע������������չ��õ�տ��ˡ����������塯��ְҵ����"){
        Editor.getForm().content.value = "";
      }
        Editor.insertContent('\n[img]'+url+'[/img]\n', true);
    },
	"insertAttachment":function(id) {
    	var content = EditorExtend.getContent();
		  if(content=="����̳�����ڿ��ţ������Աע������������չ��õ�տ��ˡ����������塯��ְҵ����"){
			content = "";
		  }
		  var insertcontent = '\n[plugin:attachment]'+id+'[/plugin:attachment]\n';
		EditorExtend.insert({text:insertcontent});
      //Editor.insertContent('\n[plugin:attachment]'+id+'[/plugin:attachment]\n', true);
		Dialog.close();
    }
}

var EditorExtend = {
	"addListener":function(obj){
		obj.addListener("onStartClickItem", function(oData) {
			var sCommand = oData["command"];
			var sName = oData["name"];
			if(sCommand == "custom" && sName == "bbsimage"){
				BbsPost.showUploadImageSwfBox();
				//����{"stop":true}��ִֹͣ�б༭��Ĭ����Ϊ
				return {"stop":true};
			}else if(sCommand == "custom" && sName == "bbsvideo"){
			    BbsUtil.clickStat("bbsvideo");
				EditorExtend.insertMedia();
				return {"stop":true};
			}else if(sCommand == "custom" && sName == "bbsattach"){
				EditorExtend.insertAttachment();
				return {"stop":true};
			}
			else if(sCommand == "custom" && sName == "bbshtml"){
				EditorExtend.insertHtml();
				return {"stop":true};
			}
			else if(sCommand == "custom" && sName == "bbsformat"){
				EditorExtend.formatHtml();
				return {"stop":true};
			}
			else if(sCommand == "custom" && sName == "bbstcard"){
				EditorExtend.insertWeiboCard();
				return {"stop":true};
			}
			else if(sCommand == "custom" && sName == "bbs9box"){
				EditorExtend.insert9box();
				return {"stop":true};
			}
			else if(sCommand == "custom" && sName == "bbs4box"){
				EditorExtend.insert4box();
				return {"stop":true};
			}
		});
	}
	,"addPostListener":function(obj){
		obj.observer.add({
	        "el" : obj.editor.doc,
			"eventType" : "keydown",
			"fn" : function() {
				var oEvent = obj.getEvent(obj.editor.win);
				if(oEvent.ctrlKey && oEvent.keyCode==13) {
					BbsPost.dopost();
				}
			}
		});
	}
	,"addReplyListener":function(obj){
		obj.observer.add({
	        "el" : obj.editor.doc,
			"eventType" : "keydown",
			"fn" : function() {
				var oEvent = obj.getEvent(obj.editor.win);
				
				// û���¼����򷵻�
				if (!oEvent) {
					return;
				}
				
				if(oEvent.ctrlKey && oEvent.keyCode==13) {
					BbsUtil.checkReplyPost();
				}
			}
		});
	}
	,"insertMedia":function(){
		if (!BbsCookie.isLogined()) { //δ��¼
            Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
            return;
        }
        BbsAdmin.showDialog('����Ӱ��', '/bbs/dialog/insert_media.jsp?boardid='+global_boardid);
        Dialog.setWidth(460);
	}
	,"insertAttachment":function(){
		if (!BbsCookie.isLogined()) { //δ��¼
            Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
            return;
        }
        var id = 0;  //����ID
        if (1==1) {
            //�������ݽ���ͶƱID��ֻƥ���һ��ͶƱ
            var content = EditorExtend.getContent();
            var regex = /\[plugin:attachment\]([0-9]+)\[\/plugin:attachment\]/gi;
            var m = new RegExp(regex).exec(content);

            if (m != null) {
                id = parseInt(m[1]);
            }
        }
        if (id <=0 ) {
            BbsAdmin.showDialog('���븽��', '/bbs/plugin/attachment_post.jsp?boardid='+global_boardid);
        }
        else {
            BbsAdmin.showDialog('�޸ĸ���('+id+')', '/bbs/plugin/attachment_post.jsp?boardid='+global_boardid+"&id="+id);
        }
        Dialog.setWidth(460);
	}
	,"insertHtml":function(){
		
		if (!BbsCookie.isLogined()) { //δ��¼
            Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
            return;
        }
        var id = 0;  //HTMLID
        if (1==1) {
            //�������ݽ���ͶƱID��ֻƥ���һ��ͶƱ
            var content = EditorExtend.getContent();
            var regex = /\[plugin:html\]([0-9]+)\[\/plugin:html\]/gi;
            var m = new RegExp(regex).exec(content);

            if (m != null) {
                id = parseInt(m[1]);
            }
        }
        if (id <=0 ) {
            BbsAdmin.showDialog('����HTML', '/bbs/plugin/html_post.jsp?boardid='+global_boardid);
        }
        else {
            BbsAdmin.showDialog('�޸�HTML', '/bbs/plugin/html_post.jsp?boardid='+global_boardid+"&id="+id);
        }
        Dialog.setWidth(600);
	}
	,"dopost":function(){
		// ͼ����ͼƬ��ϵ
		var hiddenField = document.getElementById('photoSetImgUrls');
		var imgUrls = '';
		if (hiddenField) {
			imgUrls = hiddenField.value;
		}
		
		if (1==1) {
			var flag = BbsPost.checkVerify(imgUrls);
			if (flag) {
				//��Ҫ������֤��
				return false;
			}
		}
        if (1==1) {
            try {
                //��������������������ǰִ��
                var flag = plugin_submit_before();
                if (flag==false) {
                    return false;
                }
            }
            catch(e) {
            }
            
        }

        if (this.validate()==false) {
            return false;
        }
        else {
            try {
                //���������������������ִ��
                var flag = plugin_submit();
                if (flag==false) {
                    return false;
                }
            }
            catch(e) {
            }

			//���������������������ִ��
			try {
				var flag = BbsPostType.typeSubmit();
				if (flag==false) {
					return false;
				}
			}
			catch(e) {
				alert(e.message);
			}
          var form = document.forms["frmpost"];
          var content = EditorExtend.getContent();
          if (form.isautocopy.checked) { 
              //�Զ��������ݵ�������
              BbsUtil.copyText(content);
          }
		  if (EditorExtend.hasForfendKeyword(content)) {
			  BbsAdmin.showDialog('�Ͻ���', '/bbs/dialog/hasforfend.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
			  document.getElementById('dialog_close_btn').style.display="none";
			  return false;
		  }
		  if (EditorExtend.hasSubtleKeyword(content)) {
			  BbsAdmin.showDialog('���д�', '/bbs/dialog/hassubtle.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
			  return false;
		  }	  
          return true;
        }
	}
    ,"validate":function () {
    	var form = document.forms["frmpost"];
        if (1==1){
            var cids = (form.cid);


            if (typeof(cids)=="object") {            
                if (!BbsUtil.isChecked(cids)) {
                    Dialog.alert("����δѡ�����ӵ����,�������ӱ����·�ѡ��.");
                    return false;
                }
            }
        }

        if (form.title.value=="") {
            Dialog.alert("����ڱ���������ʲô��.");
            form.title.focus();
            return false;
        }

        if (form.content.value=="") {
            Dialog.alert("�������ܲ������ݵ�Ŷ,^_^");
            form.content.focus();
            return false;
        }
        if (1==1) {
            var checkcode = form.checkcode;
            if (typeof(checkcode) == "object") {
                if (checkcode.value == "") {
                    Dialog.alert("��֤�뻹û������.");
                    checkcode.focus();
                    return false;
                }
                if (checkcode.value.length != 4) {
                    Dialog.alert("��֤���λ������Ŷ.");
                    checkcode.focus();
                    return false;
                }
            }
        }
    }
    ,"hasForfendKeyword":function(content){
    	DWREngine.setAsync(false);  
	  	Dwr.hasForfendKeyword(global_boardid,global_threadid,"", content,function(data){
	  		hasKeyword = data;
		});
		DWREngine.setAsync(true);
		return hasKeyword;
    }
    ,"hasSubtleKeyword":function(content){
    	DWREngine.setAsync(false);  
    	Dwr.hasSubtleKeyword(global_boardid,global_threadid,"", content,function(data){
    		hasKeyword = data;
    	});
    	DWREngine.setAsync(true);
    	return hasKeyword;
    }
    ,"getMediaType":function(str){
    	var strs = str.split(".");
    	if (strs == null || strs.length <=0){
    	 	return "";
    	}
  		return strs[strs.length-1].toLowerCase();
    }
    /**
     * �ж��Ƿ�Ϊ�༭״̬
     */
     ,"isEditing":function() {
        var articleid = parseInt(this.getForm()["articleid"].value);
        return (articleid>0);
     }
     /**
      * ��ȡ������form����
      */
     ,"getForm":function() {
         return document.forms["frmpost"];
     }
     ,"getContent":function(){
    	 return oEditor.getContent();
     }
     /**
      * ����Ԫ��
      * 
      * @param {object}oData
      *                .htmlҪ�����html
      *                .textҪ����Ĵ��ı�
      *                .imageҪ�����ͼƬhtml
      * ��:EditorExtend.insert({text:value})
      */
     ,"insert":function(oData){
     	//���ѡ������chrome����
    	 if (window.getSelection) {
    		 window.getSelection().removeAllRanges();
    	 }
    	 oEditor.insert(oData);
     }
     ,"insertBefore":function(sHtml){
    	 oEditor.set({html:sHtml+oEditor.get({html:true})});
     }
     ,"setContent":function(oData){
    	 oEditor.set({html:""});
    	 oEditor.insert(oData);
     }
     ,"formatHtml":function(){
    	 var content = EditorExtend.getContent();
    	 // ������h��ǩ��p�滻Ϊdiv
    	 content = content.replace(/<(\/)?(?:h1|h2|h3|h4|h5|h6|p)(?:\s+[^<>]*)?>/gi, "<$1div>");
    	 // ɾ�������ڱ�ǩ��word�д�����<o:p></o:p>��ǩ
    	 content = content.replace(/<(a|span|strong|b|i|em|o|font|big|small|sub|sup|bdo|u|s|o\:p)(?:\s+[^<>]*)?>(?:\s*|(?:&nbsp;)*|(<br ?\/?>)*|<\/?(a|span|strong|b|i|em|o|font|big|small|sub|sup|bdo|u|s|o\:p)(?:\s+[^<>]*)?>)*<\/\1>/gi, " ");
    	 
    	 content = content.replace(/^(\s| |&nbsp;|��)+/ig, "");
    	 content = content.replace(/<div>/ig, "<div><br>");
		 //����Ƕ�׵�div����ظ�����
    	 content = content.replace(/<br>(?:\s|(?:&nbsp;))*?<div>/ig, "<div>");
		 //ɾ���ղŸ���div���ϵĿ���
    	 content = content.replace(/<div(?:\s+[^<>]*)?><br>(?:\s|(?:&nbsp;))*?<\/div>/ig, "<div>&nbsp;</div>");
		 content = content.replace(/<br ?\/?>(\s| |&nbsp;|��)+/ig, "<br>");
		 content = content.replace(/(<br ?\/?>)+/ig, "<br><br>");
		 content = content.replace(/<p>(\s| |&nbsp;|��)+/ig, "<p>");
		 content = content.replace(/(<p><\/p>)+/ig, "");
		 content = content.replace(/<div>(<br ?\/?>|\s| |&nbsp;|��)+<div>/ig, "<div><div>");
		 content = content.replace(/<div>(<br ?\/?>)+/ig, "<div><br>");
		 content = content.replace(/<br ?\/?>/ig, "<br>&nbsp;&nbsp;&nbsp;&nbsp;");
		 content = content.replace(/<p>/ig, "<p>&nbsp;&nbsp;&nbsp;&nbsp;");
    	 if (content.indexOf("<div>") != 0){
			 content = "&nbsp;&nbsp;&nbsp;&nbsp;" + content;
    	 }
		 content = content.replace(/^&nbsp;&nbsp;&nbsp;&nbsp;<div><br>&nbsp;&nbsp;&nbsp;&nbsp;/i, "<div>&nbsp;&nbsp;&nbsp;&nbsp;");
		 content = content.replace(/^&nbsp;&nbsp;&nbsp;&nbsp;<p>&nbsp;&nbsp;&nbsp;&nbsp;/i, "<p>&nbsp;&nbsp;&nbsp;&nbsp;");
		 EditorExtend.setContent({html:content});
 	 }
     ,"insertWeiboCard":function(){
    	 /**
    	  * ����΢����Ƭ
    	  * 
    	  * @create_date 2011-7-18
    	  * @last_modified 
    	  * @author Ben Liu
    	  */
    	 if (!BbsCookie.isLogined()) { //δ��¼
    		 Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
    		 return;
    	 }
    	 BbsAdmin.showDialog('����΢����Ƭ', '/bbs/plugin/insert_card.jsp?boardid='+global_boardid);
    	 Dialog.setWidth(450);
	} 
     ,"insert4box":function(){
	   	 //�����Ĺ���
	   	 if (!BbsCookie.isLogined()) { //δ��¼
	   		 Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
	   		 return;
	   	 }
	   	 Dialog.show('˵��������������Ҹ�����', '/bbs/insert_landcome.html', true, true,EditorExtend.init4box);
	   	 Dialog.setWidth(555);
		}
     ,"init4box":function(){
     	FourBox.init();
 	  }
     ,"save4box":function(){
         var t1 = $("s1").value;
         var t2 = $("s2").value;
         var t3 = $("s3").value;
         var t4 = $("s4").value;
         //xss����
         var reHtmlChars = /[<>"&]/g , htmlMapping = {
             "<" : "&lt;",
             ">" : "&gt;",
             "\"" : "&quot;",
             "&" : "&amp;",
             " " : "&nbsp;"
         };

         if(t1 == ""){
             alert("����������");
             $("s1").focus();
             return;
         }
         if(t2 == ""){
             alert("����������");
             $("s2").focus();
             return;
         }
         if(t3 == ""){
             alert("����������");
             $("s3").focus();
             return;
         }
         if(t4 == ""){
             alert("����������");
             $("s4").focus();
             return;
         }
         var list = new Array(),i = 0 ;

         list[0] = t1;
         list[1] = t2;
         list[2] = t3;
         list[3] = t4;

         for(i;i<4;i++){
             list[i] = list[i].replace(reHtmlChars, function ($0) {
                 return htmlMapping [$0];
                     });

         }
         DWREngine.setAsync(false);
         Dwr.insertFourBox(list, function(data) {
             if(data != ""){
                 var imgs = new Array();
                 imgs[0] = data;
                 BbsPost.insertImgFromFlash(imgs);
                 var copyWeiboObj = $("copytoweibo");
                 if (copyWeiboObj) {
                     copyWeiboObj.checked = false;
                 }
             }
         });
         DWREngine.setAsync(true);
 	}
    ,"insert9box":function(){
    	 //����Ź���
    	 if (!BbsCookie.isLogined()) { //δ��¼
    		 Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
    		 return;
    	 }
    	 Dialog.show('����Ź��������־', '/bbs/insert_9box.html', true, true, EditorExtend.init9box);
    	 Dialog.setWidth(450);
	}
    ,"init9box":function(){
    	NineBox.init();
	}
    ,"save9box":function(){
        var ninebox1 = $("ninebox1").value;
        var ninebox2 = $("ninebox2").value;
        var ninebox3 = $("ninebox3").value;
        var ninebox4 = $("ninebox4").value;
        var ninebox5 = $("ninebox5").value;
        var ninebox6 = $("ninebox6").value;
        var ninebox7 = $("ninebox7").value;
        var ninebox8 = $("ninebox8").value;
        //xss����
        var reHtmlChars = /[<>"&]/g , htmlMapping = {
            "<" : "&lt;",
            ">" : "&gt;",
            "\"" : "&quot;",
            "&" : "&amp;",
            " " : "&nbsp;"
        };

        if(ninebox1 == ""){
            alert("�����������־");
            $("ninebox1").focus();
            return;
        }
        if(ninebox2 == ""){
            alert("�����������־");
            $("ninebox2").focus();
            return;
        }
        if(ninebox3 == ""){
            alert("�����������־");
            $("ninebox3").focus();
            return;
        }
        if(ninebox4 == ""){
            alert("�����������־");
            $("ninebox4").focus();
            return;
        }
        if(ninebox5 == ""){
            alert("�����������־");
            $("ninebox5").focus();
            return;
        }
        if(ninebox6 == ""){
            alert("�����������־");
            $("ninebox6").focus();
            return;
        }
        if(ninebox7 == ""){
            alert("�����������־");
            $("ninebox7").focus();
            return;
        }
        if(ninebox8 == ""){
            alert("�����������־");
            $("ninebox8").focus();
            return;
        }
        var list = new Array(),i = 0 ;

        list[0] = ninebox1;
        list[1] = ninebox2;
        list[2] = ninebox3;
        list[3] = ninebox4;
        list[4] = ninebox5;
        list[5] = ninebox6;
        list[6] = ninebox7;
        list[7] = ninebox8;

        // xss forbidden
        // zhou.peng 2012.9.25
        for(i;i<8;i++){
            list[i] = list[i].replace(reHtmlChars, function ($0) {
                return htmlMapping [$0];
                    });

        }
        DWREngine.setAsync(false);
        Dwr.insertBoxDaily(list, function(data) {
            if(data != ""){
                var imgs = new Array();
                imgs[0] = data;
                BbsPost.insertImgFromFlash(imgs);
                var copyWeiboObj = $("copytoweibo");
                if (copyWeiboObj) {
                    copyWeiboObj.checked = false;
                }
            }
        });
        DWREngine.setAsync(true);
	}
}




/**
 * ͼ����js
 * 2012-5-10 wengyc
 */
 
 BbsUtil.checkcodePhotoHTML = '\
                <div class="left">\
                  <a href="javascript:BbsUtil.reloadCheckcode(\'replyPhotoCodeImg\');" class="nphbbs_clayout_code" target="_self"><img id="replyPhotoCodeImg" src="/bbs/code/code0.jsp" alt="�����壬��һ��" /></a>\
                  <input class="nphbbs_clayout_codeinput" name="checkcode" type="text" value="" />\
                  <div class="nphbbs_clayout_codechange">�����ִ�Сд��<a class="cBlue" href="javascript:BbsUtil.reloadCheckcode(\'replyPhotoCodeImg\');" target="_self">��һ��</a></div>\
                </div>\
                <div class="right">\
                  <div class="nphbbs_clayout_codetip" id="replyPhotoCodeTips">{message}</div>\
                </div>';

BbsUtil.checkcodeReplyHtml = '\
	<div style="clear: both; margin-left: 40px; padding: 10px 0;">\
	<div>��֤�룺\
	<input size="6" name="checkcode" class="input007" maxlength="4" type="text"> \
	</div>\
	<div style="margin-top:10px;">\
	<a href="javascript:BbsUtil.reloadCode();" target="_self"><img id="imgcheckcode" src="{image}" alt="�����壬��һ��"></a>\
	<a href="javascript:BbsUtil.reloadCode();" target="_self" style="display: inline-block; margin-top: 20px;">�����壬��һ��</a>\
	</div>\
</div>';

BbsUtil.checkcodeTipEmpty = function(elem){
	elem.style.display = 'none';
	var checkcode = NTES(elem).NTES('input[name=checkcode]')
	if(checkcode.length != 0){
		checkcode[0].value = '';
	}
}

BbsUtil.checkReplyPhotoCode = function(param){
	/*
	* param�����������Ϊ�գ���
	* form: Ҫ��������֤���inputΪform.checkcode
	* codeArea: ��֤����ش����������
	* codeTipID: ��֤�������ʾ����ID
	* codeHTML: ��֤����ش���
	* codeImgID: ��֤��ͼƬID
	* 
	* ���أ�
	* true����ִ�У�false�ж�
	*/
	
	//�ж��û��Ƿ���Ҫ������֤�룿
	var form = param.form,
	    checkcode = form.checkcode,
		codeArea = param.codeArea,
		codeTipID = param.codeTipID,
		codeHTML = param.codeHTML,
		codeImgID = param.codeImgID,
		verifyMessage = '',
		photoMsg = '',
		imgUrls = '';
		
	if (codeArea.style.display != 'none') {
		//codeArea.style.display = 'block';
		if (checkcode.value == "") {
			BbsPost.checkcodePopup(codeTipID, '��֤�뻹û�����롣');
			checkcode.focus();
			return false;
		}
		if (checkcode.value.length != 4) {
			BbsPost.checkcodePopup(codeTipID, '��֤���λ�����ԡ�');
			checkcode.focus();
			return false;
		}
	}
	else {
		if (BbsCookie.isLogined()) {
			// �����¥������
			//var loginedPassport = BbsCookie.getPassport();
			
			// ��¥���ظ������ӣ���ͼƬ��Ҳ�洢��ϵ��
			//if (global_author_username == loginedPassport) {
			// ͼ����ͼƬ��ϵ
			var hiddenField = document.getElementById('photoSetImgUrls');
			if (hiddenField) {
				imgUrls = hiddenField.value;
			}
			//}
			
			var result = BbsUtil.isWantVerify(false,imgUrls);
			if (result) {
			  var msgs = result.split(',');
			  if (msgs && msgs.length == 2) {
				  verifyMessage = msgs[0];	//��֤����Ϣ
				  photoMsg = msgs[1];	//ͼƬ�ϴ���Ϣ
			  }
			}
		} else {
			verifyMessage = "����������������Ҫ������֤�롣";
		}
		
		if (photoMsg != '') {
			//ͼƬ�ϴ���Ϣֻ�лظ�ͼ����ʱ���У�������codeTip�����Ӵ�����Ϣ����ʾ��һ���ط��ģ�һ�����ˣ��б�ı䶯�Ļ��ٸ�
			BbsPost.checkcodePopup(codeTipID, photoMsg);
			remove163Imgs();
			return false;
		}
		
		if (verifyMessage != '') {	//��Ҫ������֤������
		    if( codeArea.innerHTML == '' ){
				var html = codeHTML,
				html = format(html,{message:verifyMessage,image:BbsUtil.getCodeJsp()});
				
				codeArea.innerHTML = html;
			}
			BbsUtil.reloadCheckcode(codeImgID);	//�������״μ��أ�����ˢ�����棬Ҳreload��
			BbsPost.checkcodePopup(codeTipID, verifyMessage);
			codeArea.style.display = "block";
			BbsUtil.clickStat("checknum");
			form.checkcode.focus();
			return false;
		}
	}
	return true;
}

BbsUtil.checkReplyPostAjax = function(){
	BbsUtil.clickStat("album_ok");
	
	if (!BbsCookie.isLogined() && !BoardConfig.isAllowGuestPostThread()) { //δ��¼
        Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
        return false;
    }
	
	//����ǰ����֤
	var content = EditorExtend.getContent(),
	content_len = content.length;
	if(content.trim() == '' || content.trim() == "<br>" || content.trim() == "<DIV></DIV>"){
		Dialog.alert("���ݲ���Ϊ��");
        return;
	}
	// ��ע��
	content = content.replace(/<!--(.|\s)*?-->/gi, "");
	var content_char = content.replace(/[^\x00-\xff]/gi, "aa");
	// ��������
	if(content_char.length >= 65000){
		var frmReplyPrompt = document.getElementById("frmReplyPrompt");
		if(frmReplyPrompt){
			frmReplyPrompt.innerHTML = "&nbsp;�����������ݹ��࣬�����������������ʽ";
			var frmReplyPromptTimer = setTimeout(function() {
						var contentTmp = EditorExtend.getContent();
						if (contentTmp.length != content_len) {
							frmReplyPrompt.innerHTML = "";
						}else{
							var fTimer = arguments.callee;
							frmReplyPromptTimer = setTimeout(fTimer, 1000);
						}
					}, 1000);
		}
        return;
	}

	var form = document.forms["frmpost"], isCopyToWeibo = false, checkcodeValue = '',
	     codeArea = document.getElementById('frmpost_upload');
	form.content.value = content;
	if (document.getElementById("copytoweibo").checked) {
		isCopyToWeibo = true;
	}
	
	
	//�ж��û��Ƿ���Ҫ������֤�룿
	if( !BbsUtil.checkReplyPhotoCode({
			  form : form,
			  codeArea : codeArea,
			  codeTipID : '_checkcode_tips',
			  codeHTML : BbsUtil.checkcodeReplyHtml,
			  codeImgID : 'imgcheckcode'
		}) ){
		return false;
	}
	
	if(form.checkcode){
		checkcodeValue = form.checkcode.value;
	}

	//�ж��Ƿ��йؼ���ǰ����Ҫ���ύ��ť���أ�������п��ܶ���ظ��ύ
	document.getElementById("btnSubmit").style.visibility = "hidden";
	BbsPost.checkcodeHide('_checkcode_tips');

	Dwr.hasForfendKeyword(global_boardid,global_threadid,"",form.content.value,function(data){
		if(data== true){
			BbsAdmin.showDialog('�Ͻ���', '/bbs/dialog/hasforfend.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
			document.getElementById('dialog_close_btn').style.display="none";
		}else{
		  Dwr.hasSubtleKeyword(global_boardid,global_threadid,"",form.content.value,function(data){
			  if(data==true){
				  BbsAdmin.showDialog('���д�', '/bbs/dialog/hassubtle.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
			  }
			  else{
				  Dwr.ajaxReplyAlbum(global_threadid, global_boardid, content, checkcodeValue, isCopyToWeibo, function(responseText){
					  //����������Ϣ����֤�������Ϣ
					  if(responseText[0] == '' && responseText[1] == ''){


						  var frmpostSuccess = document.getElementById('frmpostSuccess');
						  if(frmpostSuccess) {
							  //��ձ༭������ʾ�����ɹ���3�����ʧ
							  EditorExtend.setContent("");
							  //����ɹ����ӵ�ַ
							  if(responseText[2] != ''){
								  NTES(frmpostSuccess).NTES('a')[0].href = responseText[2];
							  }
							  frmpostSuccess.style.display = "block";
							  setTimeout(function(){ frmpostSuccess.style.display = "none"; }, 3000);
							  if(form.checkcode) {
								  form.checkcode.value = '';
								  BbsPost.checkcodeHide('_checkcode_tips');
								  BbsUtil.reloadCode();
								  form.checkcode.value = '';
							  }
						  }
						  
						  BbsUtil.checkcodeTipEmpty(codeArea);
						  
					  } else {
						  // ����������Ϣ����֤�������Ϣ
						  BbsPost.checkcodePopup('_checkcode_tips', responseText[0] + ' ' + responseText[1]);
						  if( responseText[0] != '' ) {
							  BbsUtil.checkcodeTipEmpty(codeArea);
						  } else if ( responseText[1] != '' ) {
							  BbsUtil.reloadCode();
							  form.checkcode.value = '';
						  }
					  }
					  document.getElementById("btnSubmit").style.visibility = "visible";
				  });
			  }
		  });
		}
	});
	return false;
};

BbsUtil.checkReplyPhoto = function(thumb, threadAuthorPassport){
	// ������Ƭ��ȷ���ĵ������
	BbsUtil.clickStat("photo_ok");
	
	
	
	if (!BbsCookie.isLogined() && !BoardConfig.isAllowGuestPostThread()) { //δ��¼
        Bbs.showLoginDialog(true);  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
        return false;
    }
	
	//����ǰ����֤
	var content = document.getElementById('replyPhotoContent').value,
	    content_len = content.length,
		replyPhotoPrompt = document.getElementById("replyPhotoPrompt"),
		replyPhotoForm = document.getElementById('replyPhotoForm'),
		replyCodeArea = document.getElementById('replyPhotoCodeArea'),
		checkcodeValue = '';

		
	if(content.trim() == ''){
		if(replyPhotoPrompt){
			replyPhotoPrompt.innerHTML = "���ݲ���Ϊ��";
			replyPhotoPrompt.style.display = "block";
		} else {
			Dialog.alert("���ݲ���Ϊ��");
		}
        return;
	}
	var content_char = content.replace(/[^\x00-\xff]/gi, "aa");
	if(content_char.length >= 65000){
		if(replyPhotoPrompt){
			replyPhotoPrompt.style.display = "block";
			replyPhotoPrompt.innerHTML = "�������࣬����������";
		}
        return;
	}
	
	if ( !BbsUtil.checkReplyPhotoCode({
			  form : replyPhotoForm,
			  codeArea : replyCodeArea,
			  codeTipID : 'replyPhotoCodeTips',
			  codeHTML : BbsUtil.checkcodePhotoHTML,
			  codeImgID : 'replyPhotoCodeImg'
		  }) ) {
		//��������֤�뷵��false�����Ҳ����
		return false;	  
	}
	
	if( replyPhotoForm.checkcode ){
		checkcodeValue = replyPhotoForm.checkcode.value;
	}

	//�ж��Ƿ��йؼ���ǰ����Ҫ���ύ��ť���أ�������п��ܶ���ظ��ύ�������ÿ���֤������
	document.getElementById('replyPhotoSubmit').style.visibility = 'hidden';
	replyPhotoPrompt.style.display = 'none';

	Dwr.hasForfendKeyword(global_boardid,global_threadid,'',content,function(data){
		if(data== true){
			BbsAdmin.showDialog('�Ͻ���', '/bbs/dialog/hasforfend.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
			document.getElementById('dialog_close_btn').style.display='none';
		}else{
		  Dwr.hasSubtleKeyword(global_boardid,global_threadid,'',content,function(data){
			  if(data==true){
				  BbsAdmin.showDialog('���д�', '/bbs/dialog/hassubtle.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
			  }
			  else{
				  var photo_num = NTES('#photoIndex').innerHTML;
				  var photo_url = window.location.href.toString();
				  
				  //alert(photo_num+'#'+photo_url);
				  
				  Dwr.ajaxReplyPhoto(global_threadid, global_boardid, content, checkcodeValue, thumb, threadAuthorPassport, photo_num,photo_url,function(responseText){
					  //����������Ϣ����֤�������Ϣ
					  if(responseText[0] == '' && responseText[1] == ''){
						  var replyPhotoSuccess = document.getElementById('replyPhotoSuccess');
						  if(replyPhotoSuccess) {
							  //��ձ༭������ʾ�����ɹ���3�����ʧ
							  document.getElementById('replyPhotoContent').value = '';
							  //����ɹ����ӵ�ַ
							  if(responseText[2] != ''){
								  NTES(replyPhotoSuccess).NTES('a')[0].href = responseText[2];
							  }
							  replyPhotoSuccess.style.display = 'block';
							  window.replyPhotoSuccessTimer = setTimeout(function(){
								  replyPhotoSuccess.style.display = 'none';
								  var photoLayoutComment = document.getElementById('photoLayoutComment'),
								      photoLayout = document.getElementById('photoLayout');
								  if(photoLayoutComment.style.display != 'none') {
									  photoLayoutComment.style.display = 'none';
									  photoLayout.style.display = 'none';
								  }
							  }, 3000);
						  }
						  
						  BbsUtil.checkcodeTipEmpty(replyCodeArea);
						  document.getElementById('replyPhotoCancel').innerHTML = '�ر�';
						  
						  
					  } else if(responseText[0] != '') {
						  replyPhotoPrompt.innerHTML = responseText[0];
						  replyPhotoPrompt.style.display = 'block';
						  
						  BbsUtil.checkcodeTipEmpty(replyCodeArea);
						  document.getElementById('replyPhotoSubmit').style.visibility = 'visible';
						  
					  } else {
						  BbsPost.checkcodePopup('replyPhotoCodeTips', responseText[1]);
						  BbsUtil.reloadCheckcode('replyPhotoCodeImg');
						  replyPhotoForm.checkcode.value = '';
						  document.getElementById('replyPhotoSubmit').style.visibility = 'visible';
					  }
				  });
			  }
		  });
		}
	});
	return false;
};

/**
 * 
 *  �İ棬�µ�����JS���滻֮ǰ��JS����
 * 
 * @create_date 2012-8-17
 * @last_modified 
 * @author Ben Liu
 *
 */

var BbsPatch = {
	"showDialog":function () {
		jQuery(window).trigger('login');
	}
	,"popup": function(title, url, width) {
        if (!BbsCookie.isLogined()) { //δ��¼
        	this.showDialog();
        } else {
            Dialog.show(title, url, false, false);
            if(typeof(width) == "number" && width){
				Dialog.setWidth(width);
			}
        }
    }
	,"edit": function (boardid, articleid) {
	    if (!BbsCookie.isLogined()) { //δ��¼
	    	this.showDialog();  //��ʾ��¼�򣬵�¼�ɹ����Զ��ص�
	    } else {
	        Dwr.isLimitThread(boardid,articleid,function(data){
	            if(data == true){
	                Dialog.alert("�����ѱ����Ʊ༭,����ϵ����Աȡ������.");
	            } else{
	              window.location.href = "/bbs/post.jsp?boardid="+boardid+"&articleid="+articleid;
	            }
	        })
	    }
	}	
	,"msg": function (userid) {
		BbsUtil.clickStat("sendmes");
        if (typeof(userid)=="undefined") {
            userid = "";
        }
        this.popup('������Ϣ', '/bbs/dialog/msg_write.jsp?userid='+userid);
	}	
	,"showNickName":function(){
		var form = document.forms['frmmsgwrite'];
		if (form.username.value=='') {
    		return;
		}
  		Dwr.getNickname(form.username.value, function(data) {
      		$('nickname').innerHTML = data;
    	});
	}
	,"hidTips":function(){
		$("contentTips").innerHTML = "";
		$("codeTips").innerHTML = "";
	}
	,"popMsg": function (userid) {
		BbsUtil.clickStat("sendmes");
        if (typeof(userid)=="undefined") {
            userid = "";
        }
        this.popup('������Ϣ', '/bbs/dialog/popMsg.jsp?userId='+userid);
	}
    ,"sendMsg" : function(sender, msgId) {
		var form = document.forms['frmmsgwrite'];
		var checkcode = form.checkcode;
		if (form.username.value=='') {
			//$("errMsg").innerHTML = "<font color=\"red\">����������˵�ͨ��֤</font>";
			$("userTips").innerHTML = "<font color=\"red\">����������˵�ͨ��֤</font>";
			//form.username.focus();
			return false;
		}
		if (form.content.value=='') {
			//$("errMsg").innerHTML = "<font color=\"red\">��������Ϣ����</font>";
			$("contentTips").innerHTML = "<font color=\"red\">��������Ϣ����</font>";
			//form.content.focus();
			return false;
		}
		else if(form.content.value.length > 127) {
			//$("errMsg").innerHTML = "<font color=\"red\">��Ϣ���ݲ��ܲ���127������</font>";
			$("contentTips").innerHTML = "<font color=\"red\">���ݲ��ܶ���127����</font>";
			//form.content.focus();
			return false;
		}
	   if (checkcode.value == "") {
            //$("errMsg").innerHTML = "<font color=\"red\">��֤�뻹û������</font>";
		   $("codeTips").innerHTML = "<font color=\"red\">��������֤��</font>"; 
		   //checkcode.focus();
            return false;
        }
	     var codeRight = false;
         DWREngine.setAsync(false);
         Dwr.checkcode(checkcode.value, function(data){
         	codeRight = data;
         });
         DWREngine.setAsync(true);
         if (!codeRight) {
         	//$("errMsg").innerHTML = "<font color=\"red\">��֤�����</font>";
        	 $("codeTips").innerHTML = "<font color=\"red\">��֤�����,����������</font>";
         	return false;
         }
		else {
				Dwr.sendMessage(form.username.value,  form.content.value, function(data) {
				if(typeof (messageBox) =="undefined"){
					alert(data);
				}else{
				messageBox.callbackTip({
						returnMsg : data
					});
				}
      			Dialog.close();
			});
		}
	}
	,"report": function (boardid, threadid, articleid, floor) {
		BbsUtil.clickStat("report");
		this.popup('Ͷ������', '/bbs/dialog/chargepost.jsp?boardid='+boardid+'&threadid=' + threadid + '&articleid='+articleid + "&floor=" +floor);
	}
	,"gift": function (username, dbname, boardid, threadid,page) {
		if (!BbsCookie.isLogined()) {
			this.showDialog();
    		return;
    	}
    	if(page == undefined || page == null){
    		page = 1;
    	}
    	this.popup("��������", "/user/gift/toSendGift.do?receiver="+username+"&dbname="+dbname+"&boardid="+boardid+"&threadid="+threadid+"&page="+page);
        Dialog.setWidth(500);
	}
    /**
     * ��Ϊ��Ѵ� 
     * @param boardid ����ID
     * @param articleid ����ID
     */
    ,"goodAnswer":function(boardid, articleid) {
        if (!BbsCookie.isLogined()) {
        	this.showDialog();
            return;
        }

        if (!confirm("���ú������޸ģ��Ƿ�ȷ����Ϊ��Ѵ�?")) {
            return;
        }

        Dwr.setAskGoodAnswer(boardid, articleid, function(data) {
            alert(data);
            document.location.replace(document.location.href+"?a1");
        });
    }
     ,"replyPost" :function(){
    	BbsUtil.clickStat("replyout");
    	if (!BbsCookie.isLogined() && !BoardConfig.isAllowGuestPostThread()) { //δ��¼
    		this.showDialog();
            return false;
        }
    	var content = EditorExtend.getContent();
    	content_len = content.length;
    	if(content.trim() == '' || content.trim() == "<br>" || content.trim() == "<DIV></DIV>"){
    		Dialog.alert("���ݲ���Ϊ��Ŷ.");
            return;
    	}
    	// ��ע��
    	content = content.replace(/<!--(.|\s)*?-->/gi, "");
    	var content_char = content.replace(/[^\x00-\xff]/gi, "aa");
    	// ��������
    	if(content_char.length >= 65000){
    		var frmReplyPrompt = document.getElementById("frmReplyPrompt");
    		frmReplyPrompt.innerHTML = "&nbsp;�����������ݹ��࣬�����������������ʽ";
            var frmReplyPromptTimer = setTimeout(function() {
    					var contentTmp = EditorExtend.getContent();
    					if (contentTmp.length != content_len) {
    						frmReplyPrompt.innerHTML = "";
    					}else{
    						var fTimer = arguments.callee;
    						frmReplyPromptTimer = setTimeout(fTimer, 1000);
    					}
    				}, 1000);
            return;
    	}
    	var form = document.forms["frmpost"];
    	form.content.value = content;
        if (1==1) {
            //�ж��û��Ƿ���Ҫ������֤�룿
            var checkcode = form.checkcode;
            if (typeof(checkcode) == "object") {
            	BbsUtil.clickStat("checkreply");
                if (checkcode.value == "") {
                	BbsPost.checkcodePopup('_checkcode_tips', '��֤�뻹û�����롣');
                    checkcode.focus();
                    return false;
                }
                if (checkcode.value.length != 4) {
                	BbsPost.checkcodePopup('_checkcode_tips', '��֤���λ�����ԡ�');
                    checkcode.focus();
                    return false;
                }
                // ����û���������֤�룬��ǰУ����֤�롣
                var codeRight = false;
                DWREngine.setAsync(false);
                Dwr.checkcode(checkcode.value, function(data){
                	codeRight = data;
                });
                DWREngine.setAsync(true);
                if (!codeRight) {
                	BbsPost.checkcodePopup('_checkcode_tips', '��֤�����');
                	return true;
                }
            }
            else {
            	var verifyMessage = "";
            	var photoMsg = '';
            	if (BbsCookie.isLogined()) {
            		
            		// �����¥������
            		var imgUrls = '';
        			// ͼ����ͼƬ��ϵ
            		var hiddenField = document.getElementById('photoSetImgUrls');
            		if (hiddenField) {
            			imgUrls = hiddenField.value;
            		}            		
            		var result = BbsUtil.isWantVerify(false,imgUrls);
            		if (result) {
                  	  var msgs = result.split(',');
                  	  if (msgs && msgs.length == 2) {
                  		  verifyMessage = msgs[0];
                  		  photoMsg = msgs[1];
                  	  }
                    }
            	} else {
            		verifyMessage = "����������������Ҫ������֤�롣";
            	}
            	
            	var returnResult = true;
                
                if (photoMsg != '') {
                	BbsPost.checkcodePopup('_checkcode_tips', photoMsg);
    			  remove163Imgs();
    			  returnResult = false;
                }
                
            	if (verifyMessage != "") {
            		// ,������ظ���Ҫ������֤�롣
            		var html = BbsUtil.checkcodeHtml;
            		html = format(html,{message:verifyMessage,image:BbsUtil.getCodeJsp()});
            		new Insertion.Before('frmpost_upload', html);
    				BbsUtil.clickStat("checknum");
            		form.checkcode.focus();
            		returnResult = false;
            	}
            	
            	if (!returnResult) {
            		return returnResult;
            	}
            	
            }
            //�ж��Ƿ��йؼ���ǰ����Ҫ���ύ��ť���أ�������п��ܶ���ظ��ύ
            document.getElementById("btnSubmit").style.visibility = "hidden";
            BbsPost.checkcodeHide('_checkcode_tips');
        
    	    Dwr.hasForfendKeyword(global_boardid,global_threadid,"",form.content.value,function(data){
    	        if(data== true){
    	            BbsAdmin.showDialog('�Ͻ���', '/bbs/dialog/hasforfend.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
    	            document.getElementById('dialog_close_btn').style.display="none";
    	        }else{
    	          Dwr.hasSubtleKeyword(global_boardid,global_threadid,"",form.content.value,function(data){
    	              if(data==true){
    	                  BbsAdmin.showDialog('���д�', '/bbs/dialog/hassubtle.jsp?boardid='+global_boardid+'&threadid='+global_threadid);
    	              }
    	              else{
    	                                      document.getElementById("btnSubmit").style.visibility ="hidden";
    	                                      form.submit();
    	              }
    	          });
    	        }
    	    });
        }
    }
     // ת����΢��
	,"forwardToWeibo": function(obj, link){
		var that = obj;
		var src = 'source=' + encodeURIComponent('������̳');
		var info = 'info=' + encodeURIComponent(that.getAttribute('title')) + ' ' + encodeURIComponent(link);
		var url = 'link=http://news.163.com/&' + src + '&' + info;
        window.open('http://t.163.com/article/user/checkLogin.do?'+url+'&'+new Date().getTime(),'newwindow','height=330,width=550,top='+(window.screen.height-280)/2+',left='+(window.screen.width-550)/2+', toolbar=no, menubar=no, scrollbars=no,resizable=yes,location=no, status=no');
	}
	// ת������
	,"forwardCurrentPost": function(obj, clipname){
		var url = window.document.location.href;
		var clipBoardContent = url;
		var that = obj;
		title = that.getAttribute('title')
		if (title != null || title != ""){
			clipBoardContent += '\r\n' + title;;
		}
		BbsUtil.copy_clip(clipBoardContent);
		$(clipname).innerHTML='<a href="javascript:;">���Ƴɹ�</a>';

		Dwr.copyUrl(title, url, function(data) {});
	}
};

/**
 * JS�ļ��汾���
 */
var Version = {
    "init":""
    ,"check":function() {
        try {
           if (typeof(js_version) == "string"){           
               if (js_version != all_js_version) {
                  this.autoReload();
               }
           }
        }
        catch (e){}
    }
    /**
     *  �Զ������µ�JS�ļ�������ҪҪ�û��ֶ�ˢ��
     */
    ,"autoReload":function() {
        var frame = document.createElement("FRAME");
        frame.src = "http://bbs.163.com/bbs/other/reload_js.jsp";

        if (document.frames) {
            document.body.insertAdjacentElement("BeforeBegin",frame);
        }
        else {
            document.body.appendChild(frame);  //
        }
    }
    /**
     * ����������ظ�ʱ��
     * @param threadid
     * @param lastReply
     */
    ,"checkLastReply":function(threadid, pageid, start, size, lastReply, lastFloor) {
        if (1==1) {
          return;
        }
        var host = document.location.host;
        if (!(host=="test.bbs.163.com"
        || host=="bbs.lady.163.com"
        || host=="bbs2.lady.163.com"
        || host=="bbs.news.163.com"
        || host=="club.auto.163.com")){
          return;
        }

        var url = "http://new.fund8.money.163.com/bbs/check_lastreply.jsp?boardid="+global_boardid;
        url += "&threadid="+threadid;
        url += "&pageid="+pageid;
        url += "&start="+start;
        url += "&size="+size;
        url += "&lastreply="+lastReply;
        url += "&lastFloor="+lastFloor;


        var img = new Image();
        img.src = url;


        DwrAlarm.checkLastReply(global_boardid, threadid, lastReply, function(data){  
        });
    }
}

var BbsBoardAdmin = {
	"init":""
	,"load":function() {
      if(this.getMode() == "admin"){
          this.showCheckBox();
          return;
      }
	}

	,"getList":function() {
			var allList = $("articleRows").getElementsByTagName("input");
			if ( allList == null || typeof(allList)=="undefined" || allList.length ==0) {
				  return null;
			}
			else {
          var elements = [];
          for (var i=0; i<allList.length; i++) {
              if (allList[i].type == "checkbox" && allList[i].className=="admin") {
                  elements.push(Element.extend(allList[i]));
              }
          }
          if (elements.length ==0) {
              return null;
          }
				  return elements;
			}
	}
	/*
	*�ж��Ƿ�Ϊ����,��ʾ�Ϸ��Ĳ�����ť
	*/
	,"checkMaster":function(){
		if(!BbsCookie.isLogined()){
            Bbs.showLoginDialog(function(){
                BbsBoardAdmin.checkMaster()
            });
            return;
        }
		//����ģʽʲôҲ����
		if(this.getMode() == "user"){
        this.showCheckBox();
			  return ;
		}
		//�ȱ����ж�
		else if(this.getMode() == "admin"){
        this.hideCheckBox();
        return;
    }
    else {
        if (this.isMaster()) {
            this.showCheckBox();                        
        }
        else {
            alert("����"+BbsCookie.getPassport()+"�����ǰ��桰"+global_boardid+"���İ���������ʹ�ù���ģʽ.");
            return;
        }
		}
		//��¼û��set cookie��������������ж�
		
	}
  /**
   * �Ƿ�����ж�.
   */
  ,"isMaster":function() {
      var flag = false;
      DWREngine.setAsync(false);
      DwrBoardAdmin.isBoardAdmin(global_boardid, function(data){
          flag = data;
			});
      DWREngine.setAsync(true);
      return flag;
  }
	/*
	*����ģʽ value=true/false
	*/
	,"setMode":function(flag){
      var value = "y";
      if (!flag ){
          value = "n";
      }
		  BbsCookie.setCookie("admin_mode",value,0);
	}
	/*
	*��ȡģʽ
	*/
	,"getMode":function(){
		  var mode = BbsCookie.getCookie("admin_mode");
      if (mode == "y") {
          return "admin";
      }
      else if (mode == "n") {
          return "normal";
      }
      else {
          return "";
      }
	}
  /**
   * ɾ��cookie
   */
  ,"delCookie":function() {
      BbsCookie.setCookie("admin_mode", "" ,0);
  }

	/*
	*���û�ҳʱ�Ƿ���ʾѡ���  value=y/n
	*/
  /*
	,"setShow":function(value){
		BbsCookie.setCookie("show_mode",value,0);
	}
  */
	/*
	*��ȡ�Ƿ���ʾѡ���
	*/
  /*
	,"getShow":function(){
		return BbsCookie.getCookie("show_mode");
	}
  */
	/*
	*��ʾѡ���
	*/
	,"showCheckBox":function(){
			var allList = this.getList();
			if (allList != null) {
				for(var i=0;i < allList.length;i++){
					allList[i].style.display = "";
				}
			}
			var boardAdmin = $("boardadmin");
			boardAdmin.style.display="";
			boardAdmin.innerHTML="����ģʽ";
			boardAdmin.href="javascript:BbsBoardAdmin.hideCheckBox()";
			this.showAdminButton();
			
	}
	/*
	*����ѡ���
	*/
	,"hideCheckBox":function(){
			var allList = this.getList();
			if(allList != null){
				for(var i=0;i < allList.length ;i++){
					allList[i].style.display = "none";
				}
			}
			var boardAdmin = $("boardadmin");
			boardAdmin.style.display="";
			boardAdmin.innerHTML="����ɾ��";
			boardAdmin.href="javascript:BbsBoardAdmin.showCheckBox()";
			this.hideAdminButton();
	}
	/*
	*��ʾ������ť
	*/
	,"showAdminButton":function(){
      var adminButton = document.getElementById("adminButton");
      var adminButton_top = document.getElementById("adminButton_top");

      var html = '<div style="text-align:left">';
      html +=	  '<input  type="button" onclick="javascript:BbsBoardAdmin.delArticles();" value="ɾ��"/>';
      html +=   '<input type="button" onclick="javascript:BbsBoardAdmin.selectAll();" value="ȫѡ" />';
      html +=   '<input type="button" onclick="javascript:BbsBoardAdmin.reverse();" value="����ѡ��" />';
      html +=   '</div>';
      adminButton.innerHTML         = html;
      adminButton_top.innerHTML     = html;
      adminButton.style.display     = "";
      adminButton_top.style.display = "";

      this.setMode(true);
	}
	/*
	*���ز�����ť
	*/
	,"hideAdminButton":function(){
      var adminButton = document.getElementById("adminButton");
      var adminButton_top = document.getElementById("adminButton_top");
      adminButton.style.display     = "none";
      adminButton_top.style.display = "none";
      this.setMode(false);
	}

	/*
	*ȫ��ѡ��
	*/
	,"selectAll":function(){
			var articleList = this.getList();
			for(var i =0;i < articleList.length ;i++){
				articleList[i].checked=true;
			}
	}
	/*
	*����ѡ��
	*/
	,"reverse":function(){
			var articleList = this.getList();
			for(var i =0;i < articleList.length ;i++){
				articleList[i].checked = !articleList[i].checked;
			}
	}

	/*
	*ɾ����ѡ
	*/
	,"delArticles":function(){
			//ȷ��
			if(!window.confirm("�Ƿ�ȷ��ɾ��")){
				return false;
			}
			//�õ�Ҫɾ�����б�
			var delList =  new Array();						//Ҫɾ��������
			var allList = this.getList();
			
			if(allList == null  ){
					alert("��ǰ�б�û������");
					return;
			}
			var j = 0;
			for(var i = 0; i < allList.length;i++){
				if(allList[i].className=="admin" && allList[i].checked){
					delList[j] = allList[i].value;
					j++;
				}
			}

			if  (delList == null || delList.length==0) {
					alert("��û��ѡ��Ҫɾ��������.");
					return;
			}

			//ɾ������
			DwrBoardAdmin.delArticle(delList,function(data){
			//�ص�����������ɾ��������
					var allList = BbsBoardAdmin.getList();			//�õ��������µ��б�
					var articleids = data.split(", ");

					for(var i = 0; i < articleids.length; i++){
						if(articleids[i] != null && articleids[i].length > 0){
							BbsBoardAdmin.displayArticle(allList, articleids[i]);
						}
					}


          allList = BbsBoardAdmin.getList();
          if (allList == null) {
              window.location.reload();
          }
				});
		}
		/*
		*����ɾ����
		*/
		,"displayArticle":function(list,articleid){
        for(var i=0;i<list.length;i++){
            if	(list[i].value.indexOf("/"+articleid) > 0){
                var row = list[i].parentNode.parentNode;
                try {
                    row.style.display = "none";
                    row.outerHTML = "";
                }
                catch(e) {
                    row.innerHTML = "";
                }
            }	
        }
		}



}

/**
 * ���������
 */
var ChangeSelect = {
    "init":""
    /**
     * ��������������.
     *
     * @param select ���������
     * @param url    ��ַ
     * @param defvalue Ĭ��ѡ�����ֵ
     * @param firstOption �������һ���ѡ
     */
    ,"load":function(select, url, defvalue, firstOption) {
      //ʹ��GET��ʽ���л������⣬����Ҫʹ��POST
      new Ajax.Request(url, {method: 'GET', onComplete:function(data){
          var xml = data.responseXML;
          if (xml == null) {
              return;
          }
          var nodes = xml.getElementsByTagName("row");

          DWRUtil.removeAllOptions(select);

          var hasFirst = firstOption!=null && typeof(firstOption) != "undefined";
          if (hasFirst) {
              try {
                  select.add(firstOption);	
              }
              catch (e) {
                  select.appendChild(firstOption);	
              }
          }

          var selectedIndex = 0;
	        //document.title = document.title + selectedIndex;
          for (i=0;i<nodes.length; i++) {
              var node = nodes[i];
              
              var id   = MyXml.getValue(node, "id");
              var name  = MyXml.getValue(node, "name");
              try {
                  select.add(new Option(name, id));
              }
              catch (e) {
                  select.appendChild(new Option(name, id));
              }
              if (defvalue == id) {
                  if (hasFirst) {
                      selectedIndex = i+1;
                  }
                  else {
                      selectedIndex = i;
                  } 
              }
          }
          select.selectedIndex = selectedIndex;
      }});
    }
}


/**
 * Author: ����
 */

var Drag = {
	"obj" : null,
	"init" : function(a, aRoot) {
		a.onmousedown = Drag.start;
		a.root = aRoot;
		if (isNaN(parseInt(a.root.style.left)))
			a.root.style.left = "0px";
		if (isNaN(parseInt(a.root.style.top)))
			a.root.style.top = "0px";
		a.root.onDragStart = new Function();
		a.root.onDragEnd = new Function();
		a.root.onDrag = new Function();
	},
	"start" : function(a) {
		var b = Drag.obj = this;
		a = Drag.fixE(a);
		var c = parseInt(b.root.style.top);
		var d = parseInt(b.root.style.left);
		b.root.onDragStart(d, c, a.clientX, a.clientY);
		b.lastMouseX = a.clientX;
		b.lastMouseY = a.clientY;
		document.onmousemove = Drag.drag;
		document.onmouseup = Drag.end;
		return false;
	},
	"drag" : function(a) {
		a = Drag.fixE(a);
		var b = Drag.obj;
		var c = a.clientY;
		var d = a.clientX;
		var e = parseInt(b.root.style.top);
		var f = parseInt(b.root.style.left);
		var h, g;
		h = f + d - b.lastMouseX;
		g = e + c - b.lastMouseY;
		b.root.style.left = h + "px";
		b.root.style.top = g + "px";
		b.lastMouseX = d;
		b.lastMouseY = c;
		b.root.onDrag(h, g, a.clientX, a.clientY);
		return false;
	},
	"end" : function() {
		document.onmousemove = null;
		document.onmouseup = null;
		Drag.obj.root.onDragEnd(parseInt(Drag.obj.root.style.left),
				parseInt(Drag.obj.root.style.top));
		Drag.obj = null;
	},
	"fixE" : function(a) {
		if (typeof a == "undefined")
			a = window.event;
		if (typeof a.layerX == "undefined")
			a.layerX = a.offsetX;
		if (typeof a.layerY == "undefined")
			a.layerY = a.offsetY;
		return a;
	}
};

Object.printAll = function(obj) {
	var msg = "";
	var i = 0;
	for (dd in obj) {
		msg += dd + "  ";
		if ((i + 1) % 5 == 0) {
			msg += "\n";
		}
		i++;
	}
	alert(msg);
}

var Dialog = {
	"init" : "",
	"dialogBox" : null,
	"defWidth" : 400,
	"width" : 0,
	"height" : 400,

	"basePath" : "",

	"setBasePath" : function(url) {
		this.basePath = url;
	},

	"parseUrl" : function(url) {
		if (this.basePath == "") {
			return url;
		}
		if (url.substring(0, 7) == "http://") {
			return url;
		}
		
		var basePath;
		if (this.basePath.substring(this.basePath.length-1)=="/") {
			basePath = this.basePath.substring(0, this.basePath.length-1); 
		}
		else {
			basePath = this.basePath; 
		}
		var firstChar = url.substring(0);
		if ("/" == firstChar) {
			url = basePath + url;
		} else {
			url = basePath + "/" + url;
		}
		return url;
	},

	/**
	 * ��ʾ����
	 * 
	 * @param title
	 *            ���ڱ���
	 * @param url
	 *            ��������ҳ���URL
	 * @param loadCss
	 *            �Ƿ����CSS
	 * @param loadJs
	 *            �Ƿ����JS
	 */
	"show" : function(title, url, loadCss, loadJs) {
		if (this.dialogBox==null) {
			// ���ڲ����ڣ��Զ�����
			this.create();
		}

		this.setWidth(this.defWidth); // Ĭ�Ͽ��

		this.dialogBox.style.display = "block"; // ��ʾ����

		this.setTitle(title); // ���ñ���

		this.loading = setTimeout("Dialog.setLoading()", 200); // 200����������û�м��ؾͻ���ʾ�����ݼ�����...��

		Drag.init(document.getElementById("draghead"), this.dialogBox);

		this.dialogBox.onDragEnd = function(x, y) {
			Dialog.dialogBox.ox = x - Dialog.getRange().left;
			Dialog.dialogBox.oy = y - Dialog.getRange().top;
		}
		this.center(); // ������������ڵ�һ����λ����ʾ���ڻῴ����������Ҫ�����Զ��ڵ�ǰ��Ļ���м���ʾ

		url = this.parseUrl(url);
		this.loadContent(url, loadCss, loadJs); // ���ش�������
	},
	"alert":function(content) {
		//this.showContent("ϵͳ��ʾ", content);
		alert(content);
	},
	"showContent" : function(title, content) {
		if (this.dialogBox == null) {
			// ���ڲ����ڣ��Զ�����
			this.create();
		}

		this.setWidth(this.defWidth); // Ĭ�Ͽ��

		this.dialogBox.style.display = "block"; // ��ʾ����

		this.setTitle(title); // ���ñ���

		

		Drag.init(document.getElementById("draghead"), this.dialogBox);

		this.dialogBox.onDragEnd = function(x, y) {
			Dialog.dialogBox.ox = x - Dialog.getRange().left;
			Dialog.dialogBox.oy = y - Dialog.getRange().top;
		}
		this.center(); // ������������ڵ�һ����λ����ʾ���ڻῴ����������Ҫ�����Զ��ڵ�ǰ��Ļ���м���ʾ
		var html = '<div class="dialogBox_Content">';
		html += '<h5 style="font-size:16px; font-weight:normal; clear:both; line-height:24px;">';
		html += content + '</h5>';

		$("dialogBox_content").innerHTML = html;
	},
	"setWidth" : function(width) {
		if (width != this.width) {
			this.width = width;
			this.dialogBox.style.width = width + "px";
			this.center();
		}

	},

	"setHeight" : function(height) {
		if (height != this.height) {
			this.height = height;
		}
	},

	"loading" : null,

	"setLoading" : function() {
		this.setContent("���ݼ�����...");
	},

	"clearLoading" : function() {
		if (this.loading != null) {
			clearTimeout(this.loading);
			this.loading = null;
		}
	},

	/**
	 * ���ش�������
	 */
	"loadContent" : function(url, loadCss, loadJs) {
		var time = "?" + (new Date().getTime());

		/**
		 * ʹ��GET��ʽ���л������⣬����Ҫʹ��POST
		 */
		new Ajax.Request(url, {
			method : 'get',
			requestHeaders : [ "If-Modified-Since", "0" ],
			onComplete : function(obj) {

				Dialog.clearLoading()

				/**
				 * this.setContent("���ݼ�����...");//�뽫������գ�������ʱ�ᷢ��IE���������(Ŀǰ�����޸�����ʱ�ᷢ��)
				 */
				$("dialogBox_content").innerHTML = (obj.responseText);
				if (loadCss) {
					Dialog.loadCss(url + ".css");
				}

				if (loadJs) {
					Dialog.loadJs(url + ".js");
				}
			}
		});
	},

	/**
	 * ���ô������ݣ���ʾ��Ϣ��.
	 */
	"setContent" : function(content) {
		document.getElementById("dialogBox_content").innerHTML = "<div class='dialogBox_Content'>"
				+ content + "</div>";
	},

	/**
	 * �رմ���
	 */
	"close" : function() {

		if (this.dialogBox != null) {
			this.dialogBox.style.display = "none";
		}
	},

	/**
	 * ���ô��ڵı���
	 * 
	 * @html ���ڵı��⣬֧��HTML
	 */
	"setTitle" : function(html) {
		document.getElementById("dialogBox_title").innerHTML = html;
	},

	/**
	 * ��������
	 */
	"create" : function() {
		this.loadCss("http://img1.cache.netease.com/bbs/css/dialog_v1.0.0.css");
		var dialogBox = document.createElement("DIV");
		dialogBox.id = "dialogBox";
		dialogBox.className = "dialogBoxBg";
		var html = '<div class="dialogBox" style="cursor:pointer"><div id="draghead" class="title"><h2 id="dialogBox_title"></h2><span><a id="dialog_close_btn" href="javascript:Dialog.close()" target="_self"><img src="http://bbs.163.com/bbs/dialog/login01_div.gif" style="cursor:pointer" height="18" width="49" border="0" /></a></span></div><div class="content" id="dialogBox_content"></div></div>';
		dialogBox.innerHTML = html;

		document.body.appendChild(dialogBox);

		this.dialogBox = document.getElementById("dialogBox");

		this.center(); // ���ô���λ��

		this.addScrollEvent(Dialog.onBodyScroll);
	},

	/**
	 * ����CSS
	 */

	"loadCss" : function(filename) {
		var head = document.getElementsByTagName('HEAD').item(0);
		var style = document.createElement('link');
		style.href = filename;
		style.rel = 'stylesheet';
		style.type = 'text/css';
		head.appendChild(style);
	},

	/**
	 * ����JS
	 * 
	 * @param filename
	 *            �ű�URL
	 */
	"loadJs" : function(filename) {
		/**
		 * Ӧ�ý�filename MD5�������ΪIDʹ��
		 */
		var script = document.getElementById("js1");
		if (script == null) {
			script = document.createElement("script");
		} else if( document.getElementById("loginDialog") ){
            script.parentNode.removeChild(script);
            script = document.createElement("script");
		}
		
		script.id = "js1";
		script.src = filename;

		/**
		 * ΪʲôҪʹ��insertAdjacentElement��
		 * ��ΪappendChild��JS�ļ��Ѿ��������������ʱ�ͻ����IE���������(Bbs.editArticle�����ͻ����,postArticle������)
		 */
		if (document.frames) {
			document.body.insertAdjacentElement("BeforeBegin", script);
		} else {
			document.body.appendChild(script);
		}
	},

	"onBodyScroll" : function() {
		var range = Dialog.getRange();
		var top = (range.top + Dialog.dialogBox.oy);
		var left = (range.left + Dialog.dialogBox.ox);
		if (top < 5) {
			top = 5;
		}
		if (left < 5) {
			left = 5;
		}

		Dialog.dialogBox.style.top = top + "px";
		Dialog.dialogBox.style.left = left + "px";

		if (typeof (Passport) != "undefined" && Passport != null) {
			var ds = document.getElementById("passportusernamelist");
			if (ds != null && typeof (ds) == "object") {
				Passport.resizeFunc();
			}

		}
	},

	/**
	 * ���ô��ھ�����ʾ
	 */
	"center" : function() {
		var range = Dialog.getRange();

		var position = this.getPosition();

		var left = (range.width - position.width) / 2;
		var top = (range.height - position.height) / 2;

		this.dialogBox.ox = left;
		this.dialogBox.oy = top;

		if (range.left > left) {
			left = range.left + left;
		}
		if (range.top > top) {
			top = range.top + top;
		}

		this.dialogBox.style.left = left + "px";
		this.dialogBox.style.top = top + "px";
	},

	/**
	 * ���ô��ھ�����ʾ
	 */
	"center_bak" : function() {
		var range = Dialog.getRange();

		var left = (range.width - this.width) / 2;
		var top = (range.height - this.height) / 2;

		this.dialogBox.ox = left;
		this.dialogBox.oy = top;

		if (range.left > left) {
			left = range.left + left;
		}
		if (range.top > top) {
			top = range.top + top;
		}

		this.dialogBox.style.left = left + "px";
		this.dialogBox.style.top = top + "px";
	},

	/**
	 * �ƶ�����λ��
	 * 
	 * @left
	 * @top
	 */
	"move" : function(left, top) {
		this.dialogBox.ox = left;
		this.dialogBox.oy = top;

		this.dialogBox.style.left = left + "px";
		this.dialogBox.style.top = top + "px";
	},

	/**
	 * �жϴ����Ƿ񴴽���
	 */
	"isCreated" : function() {
		return (this.dialogBox == null);
	},

	"getPosition" : function() {
		if (this.dialogBox == null) {
			return {
				top : 0,
				left : 0,
				height : this.height,
				width : this.width
			};
		}
		var top = this.dialogBox.offsetTop;
		var left = this.dialogBox.offsetLeft;
		var width = this.dialogBox.offsetWidth;
		var height = this.dialogBox.offsetHeight;

		if (height < this.height) {
			height = this.height;
		}

		return {
			top : top,
			left : left,
			height : height,
			width : width
		};
	},
	"getRange" : function() {
		var top = document.documentElement.scrollTop;
		var left = document.documentElement.scrollLeft;
		var height = document.documentElement.clientHeight;
		var width = document.documentElement.clientWidth;

		if (top == 0) {
			top = document.body.scrollTop;
		}
		if (left == 0) {
			left = document.body.scrollLeft;
		}
		if (height == 0) {
			height = document.body.clientHeight;
		}
		if (width == 0) {
			width = document.body.clientWidth;
		}
		return {
			top : top,
			left : left,
			height : height,
			width : width
		};
	},
	"addScrollEvent" : function(func) {
		var oldonscroll = window.onscroll;
		if (typeof window.onscroll != "function") {
			window.onscroll = func;
		} else {
			window.onscroll = function() {
				oldonscroll();
				func();
			}
		}
	},
	"addResizeEvent" : function(func) {
		var oldonresize = window.onresize;
		if (typeof window.onresize != "function") {
			window.onresize = func;
		} else {
			window.onresize = function() {
				oldonresize();
				func();
			}
		}
	}
}

var Request = {
  "init":""

  ,"getParameter":function(name) {
      var url = document.location.href;
      var start = url.indexOf("?")+1;
      if (start==0) {
        return "";
      }
      var value = "";
      var queryString = url.substring(start);
      var paraNames = queryString.split("&");
      for (var i=0; i<paraNames.length; i++) {
        if (name == this.getParameterName(paraNames[i])) {
          value = this.getParameterValue(paraNames[i])
        }
      }
      return value;
  }
  ,"getParameterName":function(str) {
      var start = str.indexOf("=");
      if (start==-1) {
        return str;
      }
      return str.substring(0,start);
  }

  ,"getParameterValue":function(str) {
      var start = str.indexOf("=");
      if (start==-1) {
        return "";
      }
      return str.substring(start+1);
  }
}

/**
 * ������Ϣ���JS
 */
var BoardUtil = {
    "init":""

    /**
     * ���ذ����б�
     */ 
    ,"objId":"selectBoardid"
    ,"dbname":""

    ,"loadBoardList":function(dbname, pid, selectDefault) {
        this.dbname = dbname;

        Dwr.loadBoardList(dbname, '', function(data) {
            DWRUtil.removeAllOptions(BoardUtil.objId);
            //DWRUtil.addOptions('selectBoardid', data);

            var ele = $(BoardUtil.objId);
            for (var boardid in data) {
                var info = data[boardid];

                var hasChild = info['hasChild'];
                var name = info['name'];

                var option = new Option(name, boardid);
                option.hasChild = hasChild;


                ele.options[ele.options.length] = option;
            }
            if (selectDefault) {
                BoardUtil.selectDefault();
            }
        });
    }

    ,"hasChild":function(selectedIndex) {
        var ele = $(BoardUtil.objId);
        var option = ele.options[selectedIndex];
        var hasChild = option.hasChild;
        return (hasChild == 'true');
    }

    ,"selectDefault":function() {
        var ele = $(BoardUtil.objId);
        var boardid = "";
        if (ele.options.length > 0) {
            boardid = ele.options[0].value;
            this.changeBoard(boardid, 0);
        }
        $('destBoardid').value = boardid;
    }

    ,"changeBoard":function(boardid, selectedIndex ) {
        $('destBoardid').value = boardid;

        var childId = BoardUtil.objId+"Child";
        var hasChild = BoardUtil.hasChild(selectedIndex);
        if (hasChild) {
            if (this.dbname == "") {
                this.dbname = $('destDbname').value;
            }
            Dwr.loadBoardList(this.dbname, boardid, function(data) {
                DWRUtil.removeAllOptions(childId);

                var ele = $(childId);
                var option = new Option("Ĭ��", boardid);
                option.hasChild = hasChild;
                ele.options[ele.options.length] = option;

                DWRUtil.addOptions(childId, data, "boardid", "name");
            });



            $(childId).style.display = '';
        }
        else {
            $(childId).style.display = 'none';
        }
    }
}


var BbsSearch = {
    "init":""
    ,"showMenu":function() {
        var menu = $("searchMenu");
        if (menu.style.display == "none") {
            menu.style.display = "block";
        }
        else {
            menu.style.display = "none";
        }
    }
    ,"getForm":function() {
        return document.forms["search"];
    }
    /**
     * ��������
     */
    ,"inner":function() {
        var form = this.getForm();
        form.target = "_blank";
        //form.action = "/bbs/list.jsp";
		

    }
    /**
     * ȫ��̳����
     */
    ,"global":function() {
        var form = this.getForm();
        form.target = "_blank";
		$("searchRan").value = "bbs";
		$("boardid").value = "";
        //form.action = "/bbs/search/search.jsp";
    }




}



/**
*����BbsUtil.showAdminButton,��ʾ������ť
*/
BbsBoardAdmin.showAdminButton = function(){
      var adminButton_top = document.getElementById("adminButton_top");
	  var adminButton = document.getElementById("adminButton");

      var html = '<input type="button" onclick="javascript:BbsBoardAdmin.delArticles();" value="ɾ��" />';
	  html += '<input type="button" onclick="javascript:BbsBoardAdmin.selectAll();" value="ȫѡ" />';
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

    //if(obj==null||obj=="undefine"){
    //    return this.showLoginInfo();
    //}
		var mylinkObj = document.getElementById("myLink");
    
    if(mylinkObj==null||mylinkObj=="undefine"){
        return this.showLoginButton();
    }
		var html = ""
		var mylinkHTML = "";
		if(BbsCookie.isLogined()){
		    //Userinfo.loadUserinfo();
		    var username = BbsCookie.getPassport();

		    var mode = BbsCookie.getCookie("admin_mode");//��ǰģʽ,����ģʽ��������ģʽ.
		    if (typeof(noNicknameInfo) == "undefined") {
		          html += ('<a class="cRed" href="http://bbs.163.com/user/'+username+'" target="_blank" >'+Userinfo.getNickname()+'</a>');
		     }
		    
		    var messageCount = Userinfo.getMessageCount();
		    if(messageCount < 0){
		        messageCount = 0;
		    }

			html += ' | <a href="http://bbs.163.com/user/msg.do?msgType=2" target="_blank">����Ϣ</a>(<a href="http://bbs.163.com/sns/msg_sns.jsp" target="_blank" style="color:red">'+messageCount+'</a>) | <a href="http://help.3g.163.com/bbs/" target="_blank">�ֻ���</a> ';
		    //html += ' | <a href="javascript:Bbs.showMessage()" target="_self">����Ϣ</a>(<a href="javascript:Bbs.showMessage()" target="_self" style="color:red">'+messageCount+'</a>)';
		    html += ' | <span onclick="BbsList.toggle(\'myLink\')"><a class="dArrow">�ҵ���Ϣ</a></span>';

			//html += ' | <a href="javascript:editMyInformation(\'' + username + '\');" class="dArrow">�޸�����</a>';
			
		    if(filename=="list"){
            html += ' | <a onclick="BbsList.toggle(\'myLink2\')"  style="cursor:pointer"  class="dArrow">����ģʽ</a>';
		    }
		    else{
		        html += '<span id="boardadmin_span"> | <a href="http://bbs.news.163.com/list/tyro.html" id="boardadmin">��̳����</a></span>';
		    }
		    html += ' | <a href="javascript:Bbs.logout()" target="_self">�˳�</a>';
		    
		    
		    
		
		    mylinkHTML += '<h5><a href="http://bbs.163.com/user/'+username+'" onclick="BbsList.toggle(\'myLink\')" target="_blank">�ҵ���Ϣ</a></h5>';
		    mylinkHTML += '<h5><a href="http://bbs.163.com/bbs/sns/my_post_list1.jsp?username='+username+'&boardid='+global_boardid+'" onclick="BbsList.toggle(\'myLink\')" target="_blank">���淢��</a></h5>';
		    mylinkHTML += '<h5><a href="http://bbs.163.com/bbs/sns/my_reply_list1.jsp?username='+username+'&boardid='+global_boardid+'" onclick="BbsList.toggle(\'myLink\')" target="_blank">����ظ�</a></h5>';
			
		    mylinkObj.innerHTML = mylinkHTML;
		}
		else{
		    html += '[<a href="javascript:Bbs.showLoginDialog(BbsUtil.reloadPage)" target="_self" class="aLogin">��¼</a>] <a href="http://bbs.news.163.com/list/tyro.html" target="_blank">����</a> <a href="http://help.3g.163.com/bbs/" target="_blank">�ֻ���</a>';
		}
		
		if (obj) {
			obj.innerHTML = html;
			
			if (filename == "list"){
			    //����ģʽ��ť
			    try{
			        BbsBoardAdmin.load();
			    } catch (e){}
			}
		}
		
}

//editMyInformation=function(username){
			//Dialog.loadCss("/bbs/sns/img/pinfo.css");
    		//BbsAdmin.showDialog("�޸ĸ�����Ϣ","/sns/dialog/userinfo.jsp?username=" + username);	
    //}




var BbsList = {
	"init":function(){
      //if(!BbsCookie.isLogined()){
      //    BbsBoardAdmin.setMode(false);
      //}
      //BbsUtil.showLoginInfo();
      Userinfo.loadUserinfo();
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


var BbsLeft = {

	"init":function() {
      var channel = Bbs.getChannel();

      var channelid = channel;
      
      var callback = null;
      //if(channel == "bj"){
          //������̳
         // channelid = "local";
         // callback = function() {
             // BbsLeft.showDiv("local1217");
          //}
      //}
      if(channel == "news"){
          //���ŵط���̳
          if (global_boardid.indexOf("local")==0) {
              channelid = "local";
          }
          
      }
	  if(channel == "2010"){
          //���ŵط���̳
          channelid = "sports";
      }
	  
	  if(channel == "service"){
		this.show_channel("service", callback);	
	  }else{
		this.show_channel("service", callback);	
		this.show_channel(channelid, callback);
	  }
  }

	,"show_channel":function (channelid, callback){
          if ("myCollection" == channelid) {
              return this.showMyFavorite();
          }

          if ($(channelid) == null) {
              return;
          }
          
		  if (pageChannel != "dream") {//�λ�������̳���ƶ�		  
			  if($(channelid).style.display == "none"&& $("out_"+channelid).previous().readAttribute("tindex") != 2){
				  this.move(channelid);
			  }
		  }
            
          var channel = $(channelid);//Ƶ������DIV
			    var _channel = $("ch_"+channelid);//Ƶ����ʾh3
          
			    if(channel == null && typeof(channel) == "undefined"){//�˵������
				      return;
			    }
			    if(channel.style.display == "block"){//�˵�����
				      channel.style.display = "none";
				      _channel.className = "";
			    }
          else if(channel.style.display == "none" && channel.innerHTML !=""){//����Ѽ��س���,�˵�ֱ����ʾ
              channel.style.display = "block";
				      _channel.className = "active";
			    }
			    else{//δ���س���,���ز˵����ʾ
             var url = "/htmlfile/left/" + channelid +"_child.htm";
             channel.style.display = "block";
             channel.innerHTML = "<h4>���ݼ�����...</h4>";
             new Ajax.Request(url, {
                  method: 'get',
                  requestHeaders:["If-Modified-Since","0"],
                  onComplete: function(data) {
                      var content = (data.responseText);
                      channel.innerHTML = content;
                      _channel.className = "active";

                      if (callback != null && (typeof(callback) == "function" || typeof(callback) == "object")) {
                          callback();
                      }

                  }
              });
          }
		}
     
     ,"move":function(channelid){
            var channel = $("out_"+channelid);//�˵�outerHTML
            var tindex = channel.readAttribute("tindex");//��ǰ�˵���ı�־λ
            var channelHTML = '<div class="tselector" tindex="'+tindex+'" id="out_'+channelid+'">'+channel.innerHTML+'</div>';
            //$(content).value = channelHTML;
            var target_channel = $("out_myset");
            if(tindex <= 2) return;
            if(tindex > 2){//�˵�����λ
                var next_channel = target_channel.next();//Ŀ��λ����һ��Ԫ��
                for(var i = 0; i < next_channel.childNodes.length; i++){//����Ԫ��
                  if(next_channel.childNodes[i].nodeType == 1){
                    if(next_channel.childNodes[i].nodeName == "H3"){
                      next_channel.childNodes[i].className = "";
                    }
                    if(next_channel.childNodes[i].nodeName == "DIV"){
                      next_channel.childNodes[i].style.display = "none";
                    }
                  }
                }
                
                var next_channel_tindex = next_channel.readAttribute("tindex");
                if(next_channel_tindex != 3){//Ŀ��λ���Ƿ�����λ��
                    var next_channel_outerHTML = '<div class="tselector" tindex="'+next_channel_tindex+'" id="'+next_channel.readAttribute("id")+'">'+next_channel.innerHTML+'</div>';
                    //alert(next_channel_outerHTML);
                    //$(content).value += next_channel_outerHTML;
                    next_channel.remove();
                    ;
                    var trees = $("leftMenu").getElementsByClassName('tselector');
                    for(var i = 0; i < trees.length; i++){
                        var index = trees[i].readAttribute("tindex");
                        if(index == next_channel_tindex-1){
                            new Insertion.After(trees[index], next_channel_outerHTML);
                            break;
                        }
                    }
                  }
                  channel.remove();
                  new Insertion.After(target_channel, channelHTML);
                  document.documentElement.scrollTop = 0;
          } 
     }

	,"showDiv":function (nodeid){
        var node = $(nodeid);
        if (node == null) {
            //alert(nodeid+"������.");
            //return;
        }
        var display = node.style.display;
        var img = $("img_"+nodeid);
        if(display=="none"){
            node.style.display="block";
            if(img != null && typeof(img) != "undefined"){
                img.src="/bbs/img/b.gif";
             }
        }
        if(display=="block"){
            node.style.display="none";
            if(img != null && typeof(img) != "undefined"){
                img.src="/bbs/img/a.gif";
          }
        }
		}
  /**
   * ��ʾ�������ҵ��ղ�
   */
  ,"showMyFavorite":function() {
        if(!BbsCookie.isLogined()) {
            Bbs.showLoginDialog(true);
            return;
        }
        var channel = $("myCollection");
        var channelChild = $("ch_myCollection");
        if (channel.style.display == "none") {
            channel.style.display = "block";
            channelChild.className = "active";
            BbsLeft.loadMyFavorite();
        }
        else {
            channel.style.display = "none";
            channelChild.className = "";
        }
  }
  /**
   * �����ҵ��ղ�
   */
  ,"loadMyFavorite":function() {
        var url = "/bbs/my_favorite.inc.jsp";
        new Ajax.Request(url,{onComplete:function(data){
            var content = (data.responseText);
            if (data.status==200) {
                $("myCollection").innerHTML = content;
            }
            else {
                alert("�������.");
            }
        }});
  }


}

var channel_db_map = [["bbs.news.163.com","news"],["bbs2.news.163.com","news"]
                     ,["bbs3.news.163.com","news"],["bbs4.news.163.com","news"]
                     ,["bbs5.news.163.com","news"],["bbs6.news.163.com","news"]
                     ,["bbs7.news.163.com","news"],["bbs8.news.163.com","news"]
                     ,["bbs9.news.163.com","news"],["bbs.lady.163.com","lady"]
                     ,["bbs2.lady.163.com","lady"],["bbs.talk.163.com","talk"]
                     ,["guba.money.163.com","stock"],["fund8.money.163.com","stock"]
                     ,["bbs.stock.163.com","stock"] ,["bbs.culture.163.com","culture"]
                     ,["club.auto.163.com","auto"],["bbs.travel.163.com","travel"]
                     ,["club.tech.163.com","mobile"],["bbs.tech.163.com","tech"]
                     ,["digibbs.tech.163.com","digi"],["bbs.biz.163.com","biz"]
                     ,["bbs.2008.163.com","2008"],["bbs.sports.163.com","sports"]
                     ,["bbs2.sports.163.com","sports"],["bbs.edu.163.com","education"]
                     ,["bbs.ent.163.com","ent"],["bbs.bj.163.com","local"]
                     ,["bbs.baby.163.com","baby"]
                     ];

//var cur_channel = $(pageChannel);


 // if(cur_channel != null && typeof(cur_channel) != "undefined"){

  //  BbsLeft.show_channel(pageChannel);
 // }

//	var cur_host = window.location.host;
//  var timer_1 ;
//	for(var i = 0;i<channel_db_map.length;i++){
		//if(cur_host == channel_db_map[i][0]){
//			BbsLeft.show_channel(channel_db_map[i][1]);
      //if(channel_db_map[i][1]=="local"){
        //timer_1 = setTimeout('BbsLeft.showDiv("local1217")',1000);
      //}
			//break;
		//}
	//}


var BbsProfile = {
	"init" : "",

	"addBoard" : function(boardid) {

	}
}

BbsProfile.VisitHistory = {
	"init" : "",
	/**
	 * cookie����
	 */
	"cookieName" : "board_history",

	"setCookie" : function(name, value) {
		/* cookie����ʱ�� */
		var expires = 60 * 60 * 1000 * 7;
		/* ������ʼ�¼�ڸ���ҳʹ�� */
		var domain = "163.com";
		var value = name + "=" + escape(value);
		if (expires > 0) {
			value += ";expires=" + BbsCookie.getExpires(expires).toGMTString();
		}
		value += ";path=/;domain=" + domain;
		document.cookie = value;
	},
	"splitString":function(content) {
		if (content == null || content == "") {	
			return null;
		}
		var lastChar = content.charAt(content.length-1);
		if (lastChar == ",") {
			content = content.substring(0, content.length-1);
		}
		var list = content.split(",");
		return list;
	},
	/**
	 * ��ӷ��ʼ�¼
	 */
	"addHistory" : function(boardid) {
		if (boardid == null || boardid == "") {
			return;
		}

		/* ����¼�İ������� */
		var maxHistorySize = 4;  
		
		var content = BbsCookie.getCookie(this.cookieName);
		
		var list = new Array();
		var name = this.getBoardName(boardid)
	
		if (content == null) {
			content = "";
		}
		else {
			content = content.replace(boardid + ":" + name + ",", "");
			list = this.splitString(content);
			content = "";
		}
		if (list != null) {
		for (var i=0; i<list.length && i<(maxHistorySize-1); i++) {
			content += list[i] + ",";
		}
		}
		content = boardid + ":" + name + "," + content;
		this.setCookie(this.cookieName, content);
	},
	/**
	 * ��ȡ���ʼ�¼
	 */
	"getHistoryBoardid" : function() {
		var content = BbsCookie.getCookie(this.cookieName);
		if (content != null && content != "") {
			var list = this.splitString(content);
			return list;
		} else {
			return null;
		}
	},
	/**
	 * ��ȡ���ʼ�¼��ϸ��Ϣ
	 * 
	 */
	"getHistoryInfo" : function() {
		var boardids = this.getHistoryBoardid();
		if (boardids == null) {
			return null;
		}

		var boardList = {};

		for (var i=0; i<boardids.length; i++) {
			var arr = boardids[i].split(":");
			var boardid = arr[0];
			var name = arr[1];
			boardList[boardid] = name;
		}
		return boardList;
	}
	,"getBoardName":function(boardid) {
		if (typeof(HOT_VISIT_BOARDNAME) != "undefined") {
			var name = HOT_VISIT_BOARDNAME[boardid];
			if (typeof(name) != "undefined") {
				return name;
			}
		}
		var boardName;
		DWREngine.setAsync(false);
		Dwr.getBoardName(boardid, function(data) {
			boardName = data;
		});
		DWREngine.setAsync(true);
		return boardName;
	}

}

if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (PhotoBean == null) var PhotoBean = {};
PhotoBean._path = 'http://photo.163.com/photo/dwr';
PhotoBean.getImageExif = function(p0, callback) {
  DWREngine.setMethod(DWREngine.ScriptTag);
  dwr.engine._execute(PhotoBean._path, 'PhotoBean', 'getImageExif', p0, callback);
  DWREngine.setMethod(DWREngine.XMLHttpRequest);
}


// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (DwrSystemAdmin == null) var DwrSystemAdmin = {};
DwrSystemAdmin._path = '/bbs/dwr';
DwrSystemAdmin.isGarbage = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'isGarbage', p0, p1, false, callback);
}
DwrSystemAdmin.postSide = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'postSide', p0, p1, p2, p3, p4, false, callback);
}
DwrSystemAdmin.isEditor = function(callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'isEditor', false, callback);
}
DwrSystemAdmin.delBlackList = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'delBlackList', p0, p1, false, callback);
}
DwrSystemAdmin.delIpLimit = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'delIpLimit', p0, false, callback);
}
DwrSystemAdmin.auditArticle = function(p0, p1, p2, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'auditArticle', p0, p1, p2, false, callback);
}
DwrSystemAdmin.allAuditArticle = function(p0, p1, p2, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'allAuditArticle', p0, p1, p2, false, callback);
}
DwrSystemAdmin.batchAuditArticle = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'batchAuditArticle', p0, false, callback);
}
DwrSystemAdmin.isSuperEditor = function(callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'isSuperEditor', false, callback);
}
DwrSystemAdmin.boardClose = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'boardClose', p0, false, callback);
}
DwrSystemAdmin.boardAudit = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'boardAudit', p0, false, callback);
}
DwrSystemAdmin.boardReplyAudit = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'boardReplyAudit', p0, false, callback);
}
DwrSystemAdmin.moveNav = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'moveNav', p0, p1, false, callback);
}
DwrSystemAdmin.updateDirectory = function(p0, p1, p2, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'updateDirectory', p0, p1, p2, false, callback);
}
DwrSystemAdmin.delDirectory = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'delDirectory', p0, p1, false, callback);
}
DwrSystemAdmin.addMaster = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'addMaster', p0, p1, false, callback);
}
DwrSystemAdmin.delMaster = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'delMaster', p0, p1, false, callback);
}
DwrSystemAdmin.updateMaster = function(p0, p1, p2, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'updateMaster', p0, p1, p2, false, callback);
}
DwrSystemAdmin.moveMaster = function(p0, p1, p2, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'moveMaster', p0, p1, p2, false, callback);
}
DwrSystemAdmin.moveSide = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'moveSide', p0, p1, false, callback);
}
DwrSystemAdmin.moveBoard = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'moveBoard', p0, p1, false, callback);
}
DwrSystemAdmin.updateMasterHtml = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'updateMasterHtml', p0, false, callback);
}
DwrSystemAdmin.delSignBlack = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'delSignBlack', p0, p1, false, callback);
}
DwrSystemAdmin.changeGuestIp = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'changeGuestIp', p0, false, callback);
}
DwrSystemAdmin.postKeyword = function(p0, p1, p2, p3, p4, p5, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'postKeyword', p0, p1, p2, p3, p4, p5, false, callback);
}
DwrSystemAdmin.delKeyword = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'delKeyword', p0, p1, false, callback);
}
DwrSystemAdmin.delPrivilegeUser = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'delPrivilegeUser', p0, false, callback);
}
DwrSystemAdmin.postWebmasterPurview = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'postWebmasterPurview', p0, p1, false, callback);
}
DwrSystemAdmin.delWebmaster = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'delWebmaster', p0, false, callback);
}
DwrSystemAdmin.pageGenerator = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'pageGenerator', p0, p1, p2, p3, false, callback);
}
DwrSystemAdmin.makeSide = function(callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'makeSide', false, callback);
}
DwrSystemAdmin.checkForfendArticle = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'checkForfendArticle', p0, p1, false, callback);
}
DwrSystemAdmin.isLegalBoard = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'isLegalBoard', p0, callback);
}
DwrSystemAdmin.sendSysMessage = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'sendSysMessage', p0, p1, false, callback);
}
DwrSystemAdmin.sendChannelMessage = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'sendChannelMessage', p0, p1, false, callback);
}
DwrSystemAdmin.isGarbageByContent = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'isGarbageByContent', p0, p1, false, callback);
}
DwrSystemAdmin.isMessageGarbage = function(p0, p1, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'isMessageGarbage', p0, p1, false, callback);
}
DwrSystemAdmin.deleteGarbage = function(p0, callback) {
  dwr.engine._execute(DwrSystemAdmin._path, 'DwrSystemAdmin', 'deleteGarbage', p0, false, callback);
}


// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (DwrBoardAdmin == null) var DwrBoardAdmin = {};
DwrBoardAdmin._path = '/bbs/dwr';
DwrBoardAdmin.main = function(p0, callback) {
  dwr.engine._execute(DwrBoardAdmin._path, 'DwrBoardAdmin', 'main', p0, callback);
}
DwrBoardAdmin.delArticle = function(p0, callback) {
  dwr.engine._execute(DwrBoardAdmin._path, 'DwrBoardAdmin', 'delArticle', p0, false, callback);
}
DwrBoardAdmin.searchBoards = function(p0, p1, callback) {
  dwr.engine._execute(DwrBoardAdmin._path, 'DwrBoardAdmin', 'searchBoards', p0, p1, false, callback);
}
DwrBoardAdmin.isBoardAdmin = function(p0, callback) {
  dwr.engine._execute(DwrBoardAdmin._path, 'DwrBoardAdmin', 'isBoardAdmin', p0, false, callback);
}
DwrBoardAdmin.auditArticle = function(p0, p1, p2, callback) {
  dwr.engine._execute(DwrBoardAdmin._path, 'DwrBoardAdmin', 'auditArticle', p0, p1, p2, false, callback);
}
DwrBoardAdmin.allAuditArticle = function(p0, p1, p2, callback) {
  dwr.engine._execute(DwrBoardAdmin._path, 'DwrBoardAdmin', 'allAuditArticle', p0, p1, p2, false, callback);
}
DwrBoardAdmin.batchAuditArticle = function(p0, callback) {
  dwr.engine._execute(DwrBoardAdmin._path, 'DwrBoardAdmin', 'batchAuditArticle', p0, false, callback);
}


// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (DwrAlarm == null) var DwrAlarm = {};
DwrAlarm._path = '/bbs/dwr';
DwrAlarm.main = function(p0, callback) {
  dwr.engine._execute(DwrAlarm._path, 'DwrAlarm', 'main', p0, callback);
}
DwrAlarm.oldJsVersion = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(DwrAlarm._path, 'DwrAlarm', 'oldJsVersion', p0, p1, p2, p3, false, callback);
}
DwrAlarm.checkLastReply = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(DwrAlarm._path, 'DwrAlarm', 'checkLastReply', p0, p1, p2, p3, p4, p5, p6, false, callback);
}


// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (DwrPlugin == null) var DwrPlugin = {};
DwrPlugin._path = '/bbs/dwr';
DwrPlugin.main = function(p0, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'main', p0, callback);
}
DwrPlugin.saveHtml = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveHtml', p0, p1, p2, p3, false, callback);
}
DwrPlugin.saveTravel = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveTravel', p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, false, callback);
}
DwrPlugin.saveXiangQin = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveXiangQin', p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, false, callback);
}
DwrPlugin.saveSaiLife = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveSaiLife', p0, p1, p2, p3, p4, p5, p6, p7, p8, false, callback);
}
DwrPlugin.saveDaren = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveDaren', p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, false, callback);
}
DwrPlugin.saveItmm = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveItmm', p0, p1, p2, p3, p4, p5, p6, p7, false, callback);
}
DwrPlugin.saveItmm2009 = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveItmm2009', p0, p1, p2, p3, p4, p5, p6, p7, false, callback);
}
DwrPlugin.saveStreet = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveStreet', p0, p1, p2, p3, p4, p5, p6, p7, false, callback);
}
DwrPlugin.saveBaby = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveBaby', p0, p1, p2, p3, p4, p5, p6, p7, p8, false, callback);
}
DwrPlugin.saveBaby2 = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveBaby2', p0, p1, p2, p3, p4, p5, p6, p7, false, callback);
}
DwrPlugin.saveWage = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveWage', p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, false, callback);
}
DwrPlugin.saveTicket = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveTicket', p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, false, callback);
}
DwrPlugin.saveChunyun = function(p0, p1, p2, p3, p4, p5, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveChunyun', p0, p1, p2, p3, p4, p5, false, callback);
}
DwrPlugin.saveHire = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveHire', p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, false, callback);
}
DwrPlugin.saveDebate = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveDebate', p0, p1, p2, p3, p4, false, callback);
}
DwrPlugin.saveActivity = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveActivity', p0, p1, p2, p3, p4, p5, p6, p7, false, callback);
}
DwrPlugin.saveCredits = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveCredits', p0, p1, p2, p3, p4, p5, p6, p7, false, callback);
}
DwrPlugin.saveCaiPu = function(p0, p1, p2, callback) {
  dwr.engine._execute(DwrPlugin._path, 'DwrPlugin', 'saveCaiPu', p0, p1, p2, false, callback);
}


// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (DwrClub == null) var DwrClub = {};
DwrClub._path = '/bbs/dwr';
DwrClub.getHeader = function(p0, callback) {
  dwr.engine._execute(DwrClub._path, 'DwrClub', 'getHeader', p0, false, callback);
}


// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (Dwr == null) var Dwr = {};
Dwr._path = '/bbs/dwr';
Dwr.main = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'main', p0, callback);
}
Dwr.test = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'test', p0, false, callback);
}
Dwr.getNickname = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getNickname', p0, callback);
}
Dwr.updateNickname = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'updateNickname', p0, p1, false, callback);
}
Dwr.clickStat = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'clickStat', p0, false, callback);
}
Dwr.getUsername = function(callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getUsername', false, false, callback);
}
Dwr.addUserSign = function(callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addUserSign', false, callback);
}
Dwr.addMyFavorite = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addMyFavorite', p0, false, callback);
}
Dwr.getRandomPoints = function(callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getRandomPoints', callback);
}
Dwr.topThread = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'topThread', p0, p1, false, callback);
}
Dwr.allTopThread = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'allTopThread', p0, p1, p2, false, callback);
}
Dwr.eliteThread = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'eliteThread', p0, p1, p2, false, callback);
}
Dwr.pushThread = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'pushThread', p0, p1, p2, p3, false, callback);
}
Dwr.copyThread = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'copyThread', p0, p1, p2, p3, false, callback);
}
Dwr.lockThread = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'lockThread', p0, p1, false, callback);
}
Dwr.downThread = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'downThread', p0, p1, false, callback);
}
Dwr.delPost = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delPost', p0, p1, false, callback);
}
Dwr.addBlackList = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addBlackList', p0, p1, p2, p3, false, callback);
}
Dwr.blackUser = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'blackUser', p0, p1, p2, p3, false, callback);
}
Dwr.delBlackUser = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delBlackUser', p0, p1, p2, false, callback);
}
Dwr.addArticleLimit = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addArticleLimit', p0, p1, p2, false, callback);
}
Dwr.deleteArticleLimit = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'deleteArticleLimit', p0, p1, false, callback);
}
Dwr.checkcode = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'checkcode', p0, false, callback);
}
Dwr.getBoardName = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getBoardName', p0, false, callback);
}
Dwr.nodes = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'nodes', p0, p1, callback);
}
Dwr.rubbishThread = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'rubbishThread', p0, p1, false, callback);
}
Dwr.setAdminCommentTypes = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'setAdminCommentTypes', p0, p1, p2, false, callback);
}
Dwr.delBbsBlackList = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delBbsBlackList', p0, p1, false, callback);
}
Dwr.addBread = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addBread', p0, p1, p2, p3, p4, false, callback);
}
Dwr.addIpLimit = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addIpLimit', p0, p1, p2, p3, false, callback);
}
Dwr.canUploadImages = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'canUploadImages', p0, false, callback);
}
Dwr.isRepliedThread = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'isRepliedThread', p0, p1, false, callback);
}
Dwr.reportPost = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'reportPost', p0, p1, p2, p3, p4, false, callback);
}
Dwr.delMessage = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delMessage', p0, false, callback);
}
Dwr.delMessages = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delMessages', p0, false, callback);
}
Dwr.delSentMessage = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delSentMessage', p0, false, callback);
}
Dwr.delSentMessages = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delSentMessages', p0, false, callback);
}
Dwr.delBlackList = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delBlackList', p0, false, callback);
}
Dwr.sendMessage = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'sendMessage', p0, p1, false, callback);
}
Dwr.addMyBlackList = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addMyBlackList', p0, p1, false, callback);
}
Dwr.getQuoteReply = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getQuoteReply', p0, p1, callback);
}
Dwr.sayGood = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'sayGood', p0, p1, p2, false, callback);
}
Dwr.sayBad = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'sayBad', p0, p1, p2, false, callback);
}
Dwr.editReply = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'editReply', p0, p1, p2, false, callback);
}
Dwr.updateVote = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'updateVote', p0, p1, p2, p3, p4, p5, p6, false, callback);
}
Dwr.activityApplyCheck = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'activityApplyCheck', p0, false, callback);
}
Dwr.activityApply = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'activityApply', p0, p1, p2, p3, p4, false, callback);
}
Dwr.creditsApplyCheck = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'creditsApplyCheck', p0, false, callback);
}
Dwr.creditsApply = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'creditsApply', p0, p1, p2, p3, p4, false, callback);
}
Dwr.getChannelMark = function(callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getChannelMark', false, callback);
}
Dwr.debateVote = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'debateVote', p0, p1, p2, p3, false, callback);
}
Dwr.debateApply = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'debateApply', p0, p1, p2, p3, false, callback);
}
Dwr.vote = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'vote', p0, p1, p2, p3, false, callback);
}
Dwr.getBoardNames = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getBoardNames', p0, false, callback);
}
Dwr.loadBoardList = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'loadBoardList', p0, p1, false, callback);
}
Dwr.loadBoardListByKeyword = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'loadBoardListByKeyword', p0, p1, p2, false, callback);
}
Dwr.getChildBoards = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getChildBoards', p0, false, callback);
}
Dwr.getChildBoardsByDbname = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getChildBoardsByDbname', p0, p1, false, callback);
}
Dwr.updateUserinfo = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'updateUserinfo', p0, p1, p2, p3, p4, p5, p6, false, callback);
}
Dwr.isWantVerify = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'isWantVerify', p0, p1, p2, false, callback);
}
Dwr.isWantVerifyBackup = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'isWantVerifyBackup', p0, p1, false, callback);
}
Dwr.getAutoHeader = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getAutoHeader', p0, false, callback);
}
Dwr.delIpLimit = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'delIpLimit', p0, p1, false, callback);
}
Dwr.getReplyBody = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getReplyBody', p0, p1, callback);
}
Dwr.deleteMyFavorite = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'deleteMyFavorite', p0, false, callback);
}
Dwr.addMyFavorite_Yiba = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addMyFavorite_Yiba', p0, false, callback);
}
Dwr.deleteMyFavorite_Yiba = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'deleteMyFavorite_Yiba', p0, false, callback);
}
Dwr.getOnlineStatus = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getOnlineStatus', p0, false, callback);
}
Dwr.copyToBlog = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'copyToBlog', p0, p1, false, callback);
}
Dwr.setAskGoodAnswer = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'setAskGoodAnswer', p0, p1, false, callback);
}
Dwr.setAskPushAnswer = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'setAskPushAnswer', p0, p1, false, callback);
}
Dwr.getBoardUrlByBoardid = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getBoardUrlByBoardid', p0, p1, false, callback);
}
Dwr.getCityByProvince = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getCityByProvince', p0, callback);
}
Dwr.addGuide = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addGuide', p0, p1, p2, p3, p4, false, callback);
}
Dwr.deleteGuide = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'deleteGuide', p0, p1, false, callback);
}
Dwr.isLimitThread = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'isLimitThread', p0, p1, false, callback);
}
Dwr.hasForfendKeyword = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'hasForfendKeyword', p0, p1, p2, p3, false, callback);
}
Dwr.hasSubtleKeyword = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'hasSubtleKeyword', p0, p1, p2, p3, false, callback);
}
Dwr.addApplyMaster = function(p0, p1, p2, p3, p4, p5, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'addApplyMaster', p0, p1, p2, p3, p4, p5, false, callback);
}
Dwr.copyUrl = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'copyUrl', p0, p1, false, callback);
}
Dwr.searchBoards = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'searchBoards', p0, false, callback);
}
Dwr.exchangeMark = function(callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'exchangeMark', false, callback);
}
Dwr.downloadPDF = function(p0, p1, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'downloadPDF', p0, p1, false, callback);
}
Dwr.printLog = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'printLog', p0, p1, p2, false, callback);
}
Dwr.isJoinActivity = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'isJoinActivity', p0, false, callback);
}
Dwr.joinActivity = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'joinActivity', p0, p1, p2, p3, false, callback);
}
Dwr.joinLottery = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'joinLottery', p0, p1, p2, p3, false, callback);
}
Dwr.getGuessInfo = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'getGuessInfo', p0, false, callback);
}
Dwr.joinGuess = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'joinGuess', p0, p1, p2, false, callback);
}
Dwr.insertWeiboCard = function(p0, p1, p2, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'insertWeiboCard', p0, p1, p2, false, callback);
}
Dwr.insertBoxDaily = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'insertBoxDaily', p0, false, callback);
}
Dwr.insertFourBox = function(p0, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'insertFourBox', p0, false, callback);
}
Dwr.ajaxReplyPhoto = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'ajaxReplyPhoto', p0, p1, p2, p3, p4, p5, p6, p7, false, callback);
}
Dwr.ajaxReplyAlbum = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Dwr._path, 'Dwr', 'ajaxReplyAlbum', p0, p1, p2, p3, p4, false, callback);
}

/*
 * Copyright 2005 Joe Walker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Declare an object to which we can add real functions.
 */
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

/**
 * Set an alternative error handler from the default alert box.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.setErrorHandler = function(handler) {
  dwr.engine._errorHandler = handler;
};

/**
 * Set an alternative warning handler from the default alert box.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.setWarningHandler = function(handler) {
  dwr.engine._warningHandler = handler;
};

/**
 * Setter for the text/html handler - what happens if a DWR request gets an HTML
 * reply rather than the expected Javascript. Often due to login timeout
 */
dwr.engine.setTextHtmlHandler = function(handler) {
  dwr.engine._textHtmlHandler = handler;
};

/**
 * Set a default timeout value for all calls. 0 (the default) turns timeouts off.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.setTimeout = function(timeout) {
  dwr.engine._timeout = timeout;
};

/**
 * The Pre-Hook is called before any DWR remoting is done.
 * @see getahead.org/dwr/browser/engine/hooks
 */
dwr.engine.setPreHook = function(handler) {
  dwr.engine._preHook = handler;
};

/**
 * The Post-Hook is called after any DWR remoting is done.
 * @see getahead.org/dwr/browser/engine/hooks
 */
dwr.engine.setPostHook = function(handler) {
  dwr.engine._postHook = handler;
};

/**
 * Custom headers for all DWR calls
 * @see getahead.org/dwr/????
 */
dwr.engine.setHeaders = function(headers) {
  dwr.engine._headers = headers;
};

/**
 * Custom parameters for all DWR calls
 * @see getahead.org/dwr/????
 */
dwr.engine.setParameters = function(parameters) {
  dwr.engine._parameters = parameters;
};

/** XHR remoting type constant. See dwr.engine.set[Rpc|Poll]Type() */
dwr.engine.XMLHttpRequest = 1;

/** XHR remoting type constant. See dwr.engine.set[Rpc|Poll]Type() */
dwr.engine.IFrame = 2;

/** XHR remoting type constant. See dwr.engine.setRpcType() */
dwr.engine.ScriptTag = 3;

/**
 * Set the preferred remoting type.
 * @param newType One of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag
 * @see getahead.org/dwr/browser/engine/options
 */
dwr.engine.setRpcType = function(newType) {
  if (newType != dwr.engine.XMLHttpRequest && newType != dwr.engine.IFrame && newType != dwr.engine.ScriptTag) {
    dwr.engine._handleError(null, { name:"dwr.engine.invalidRpcType", message:"RpcType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag" });
    return;
  }
  dwr.engine._rpcType = newType;
};

/**
 * Which HTTP method do we use to send results? Must be one of "GET" or "POST".
 * @see getahead.org/dwr/browser/engine/options
 */
dwr.engine.setHttpMethod = function(httpMethod) {
  if (httpMethod != "GET" && httpMethod != "POST") {
    dwr.engine._handleError(null, { name:"dwr.engine.invalidHttpMethod", message:"Remoting method must be one of GET or POST" });
    return;
  }
  dwr.engine._httpMethod = httpMethod;
};

/**
 * Ensure that remote calls happen in the order in which they were sent? (Default: false)
 * @see getahead.org/dwr/browser/engine/ordering
 */
dwr.engine.setOrdered = function(ordered) {
  dwr.engine._ordered = ordered;
};

/**
 * Do we ask the XHR object to be asynchronous? (Default: true)
 * @see getahead.org/dwr/browser/engine/options
 */
dwr.engine.setAsync = function(async) {
  dwr.engine._async = async;
};

/**
 * Does DWR poll the server for updates? (Default: false)
 * @see getahead.org/dwr/browser/engine/options
 */
dwr.engine.setActiveReverseAjax = function(activeReverseAjax) {
  if (activeReverseAjax) {
    // Bail if we are already started
    if (dwr.engine._activeReverseAjax) return;
    dwr.engine._activeReverseAjax = true;
    dwr.engine._poll();
  }
  else {
    // Can we cancel an existing request?
    if (dwr.engine._activeReverseAjax && dwr.engine._pollReq) dwr.engine._pollReq.abort();
    dwr.engine._activeReverseAjax = false;
  }
  // TODO: in iframe mode, if we start, stop, start then the second start may
  // well kick off a second iframe while the first is still about to return
  // we should cope with this but we don't
};

/**
 * The default message handler.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.defaultErrorHandler = function(message, ex) {
  dwr.engine._debug("Error: " + ex.name + ", " + ex.message, true);
  if (message == null || message == "") alert("A server error has occured.");
  // Ignore NS_ERROR_NOT_AVAILABLE if Mozilla is being narky
  else if (message.indexOf("0x80040111") != -1) dwr.engine._debug(message);
  else alert(message);
};

/**
 * The default warning handler.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.defaultWarningHandler = function(message, ex) {
  dwr.engine._debug(message);
};

/**
 * For reduced latency you can group several remote calls together using a batch.
 * @see getahead.org/dwr/browser/engine/batch
 */
dwr.engine.beginBatch = function() {
  if (dwr.engine._batch) {
    dwr.engine._handleError(null, { name:"dwr.engine.batchBegun", message:"Batch already begun" });
    return;
  }
  dwr.engine._batch = dwr.engine._createBatch();
};

/**
 * Finished grouping a set of remote calls together. Go and execute them all.
 * @see getahead.org/dwr/browser/engine/batch
 */
dwr.engine.endBatch = function(options) {
  var batch = dwr.engine._batch;
  if (batch == null) {
    dwr.engine._handleError(null, { name:"dwr.engine.batchNotBegun", message:"No batch in progress" });
    return;
  }
  dwr.engine._batch = null;
  if (batch.map.callCount == 0) return;

  // The hooks need to be merged carefully to preserve ordering
  if (options) dwr.engine._mergeBatch(batch, options);

  // In ordered mode, we don't send unless the list of sent items is empty
  if (dwr.engine._ordered && dwr.engine._batchesLength != 0) {
    dwr.engine._batchQueue[dwr.engine._batchQueue.length] = batch;
  }
  else {
    dwr.engine._sendData(batch);
  }
};

/** @deprecated */
dwr.engine.setPollMethod = function(type) { dwr.engine.setPollType(type); };
dwr.engine.setMethod = function(type) { dwr.engine.setRpcType(type); };
dwr.engine.setVerb = function(verb) { dwr.engine.setHttpMethod(verb); };
dwr.engine.setPollType = function() { dwr.engine._debug("Manually setting the Poll Type is not supported"); };

//==============================================================================
// Only private stuff below here
//==============================================================================

/** The original page id sent from the server */
dwr.engine._origScriptSessionId = "E887273344C4DE2C8D3E884A02BFF0CE";

/** The session cookie name */
dwr.engine._sessionCookieName = "JSESSIONID"; // JSESSIONID

/** Is GET enabled for the benefit of Safari? */
dwr.engine._allowGetForSafariButMakeForgeryEasier = "false";

/** The script prefix to strip in the case of scriptTagProtection. */
dwr.engine._scriptTagProtection = "throw 'allowScriptTagRemoting is false.';";

/** The default path to the DWR servlet */
dwr.engine._defaultPath = "/bbs/dwr";

/** Do we use XHR for reverse ajax because we are not streaming? */
dwr.engine._pollWithXhr = "false";

/** The read page id that we calculate */
dwr.engine._scriptSessionId = null;

/** The function that we use to fetch/calculate a session id */
dwr.engine._getScriptSessionId = function() {
  if (dwr.engine._scriptSessionId == null) {
    dwr.engine._scriptSessionId = dwr.engine._origScriptSessionId + Math.floor(Math.random() * 1000);
  }
  return dwr.engine._scriptSessionId;
};

/** A function to call if something fails. */
dwr.engine._errorHandler = dwr.engine.defaultErrorHandler;

/** For debugging when something unexplained happens. */
dwr.engine._warningHandler = dwr.engine.defaultWarningHandler;

/** A function to be called before requests are marshalled. Can be null. */
dwr.engine._preHook = null;

/** A function to be called after replies are received. Can be null. */
dwr.engine._postHook = null;

/** An map of the batches that we have sent and are awaiting a reply on. */
dwr.engine._batches = {};

/** A count of the number of outstanding batches. Should be == to _batches.length unless prototype has messed things up */
dwr.engine._batchesLength = 0;

/** In ordered mode, the array of batches waiting to be sent */
dwr.engine._batchQueue = [];

/** What is the default rpc type */
dwr.engine._rpcType = dwr.engine.XMLHttpRequest;

/** What is the default remoting method (ie GET or POST) */
dwr.engine._httpMethod = "POST";

/** Do we attempt to ensure that calls happen in the order in which they were sent? */
dwr.engine._ordered = false;

/** Do we make the calls async? */
dwr.engine._async = true;

/** The current batch (if we are in batch mode) */
dwr.engine._batch = null;

/** The global timeout */
dwr.engine._timeout = 0;

/** ActiveX objects to use when we want to convert an xml string into a DOM object. */
dwr.engine._DOMDocument = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "Msxml2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"];

/** The ActiveX objects to use when we want to do an XMLHttpRequest call. */
dwr.engine._XMLHTTP = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];

/** Are we doing comet or polling? */
dwr.engine._activeReverseAjax = false;

/** The iframe that we are using to poll */
dwr.engine._outstandingIFrames = [];

/** The xhr object that we are using to poll */
dwr.engine._pollReq = null;

/** How many milliseconds between internal comet polls */
dwr.engine._pollCometInterval = 200;

/** How many times have we re-tried to poll? */
dwr.engine._pollRetries = 0;
dwr.engine._maxPollRetries = 0;

/** Do we do a document.reload if we get a text/html reply? */
dwr.engine._textHtmlHandler = null;

/** If you wish to send custom headers with every request */
dwr.engine._headers = null;

/** If you wish to send extra custom request parameters with each request */
dwr.engine._parameters = null;

/** Undocumented interceptors - do not use */
dwr.engine._postSeperator = "\n";
dwr.engine._defaultInterceptor = function(data) { return data; };
dwr.engine._urlRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._contentRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._replyRewriteHandler = dwr.engine._defaultInterceptor;

/** Batch ids allow us to know which batch the server is answering */
dwr.engine._nextBatchId = 0;

/** A list of the properties that need merging from calls to a batch */
dwr.engine._propnames = [ "rpcType", "httpMethod", "async", "timeout", "errorHandler", "warningHandler", "textHtmlHandler" ];

/** Do we stream, or can be hacked to do so? */
dwr.engine._partialResponseNo = 0;
dwr.engine._partialResponseYes = 1;
dwr.engine._partialResponseFlush = 2;

/** Is this page in the process of unloading? */
dwr.engine._unloading = false;

/**
 * @private Send a request. Called by the Javascript interface stub
 * @param path part of URL after the host and before the exec bit without leading or trailing /s
 * @param scriptName The class to execute
 * @param methodName The method on said class to execute
 * @param func The callback function to which any returned data should be passed
 *       if this is null, any returned data will be ignored
 * @param vararg_params The parameters to pass to the above class
 */
dwr.engine._execute = function(path, scriptName, methodName, vararg_params) {
  var singleShot = false;
  if (dwr.engine._batch == null) {
    dwr.engine.beginBatch();
    singleShot = true;
  }
  var batch = dwr.engine._batch;
  // To make them easy to manipulate we copy the arguments into an args array
  var args = [];
  for (var i = 0; i < arguments.length - 3; i++) {
    args[i] = arguments[i + 3];
  }
  // All the paths MUST be to the same servlet
  if (batch.path == null) {
    batch.path = path;
  }
  else {
    if (batch.path != path) {
      dwr.engine._handleError(batch, { name:"dwr.engine.multipleServlets", message:"Can't batch requests to multiple DWR Servlets." });
      return;
    }
  }
  // From the other params, work out which is the function (or object with
  // call meta-data) and which is the call parameters
  var callData;
  var lastArg = args[args.length - 1];
  if (typeof lastArg == "function" || lastArg == null) callData = { callback:args.pop() };
  else callData = args.pop();

  // Merge from the callData into the batch
  dwr.engine._mergeBatch(batch, callData);
  batch.handlers[batch.map.callCount] = {
    exceptionHandler:callData.exceptionHandler,
    callback:callData.callback
  };

  // Copy to the map the things that need serializing
  var prefix = "c" + batch.map.callCount + "-";
  batch.map[prefix + "scriptName"] = scriptName;
  batch.map[prefix + "methodName"] = methodName;
  batch.map[prefix + "id"] = batch.map.callCount;
  for (i = 0; i < args.length; i++) {
    dwr.engine._serializeAll(batch, [], args[i], prefix + "param" + i);
  }

  // Now we have finished remembering the call, we incr the call count
  batch.map.callCount++;
  if (singleShot) dwr.engine.endBatch();
};

/** @private Poll the server to see if there is any data waiting */
dwr.engine._poll = function() {
  if (!dwr.engine._activeReverseAjax) return;

  var batch = dwr.engine._createBatch();
  batch.map.id = 0; // TODO: Do we need this??
  batch.map.callCount = 1;
  batch.isPoll = true;
  if (dwr.engine._pollWithXhr == "true") {
    batch.rpcType = dwr.engine.XMLHttpRequest;
    batch.map.partialResponse = dwr.engine._partialResponseNo;
  }
  else {
    if (navigator.userAgent.indexOf("Gecko/") != -1) {
      batch.rpcType = dwr.engine.XMLHttpRequest;
      batch.map.partialResponse = dwr.engine._partialResponseYes;
    }
    else {
      batch.rpcType = dwr.engine.XMLHttpRequest;
      batch.map.partialResponse = dwr.engine._partialResponseNo;
    }
  }
  batch.httpMethod = "POST";
  batch.async = true;
  batch.timeout = 0;
  batch.path = dwr.engine._defaultPath;
  batch.preHooks = [];
  batch.postHooks = [];
  batch.errorHandler = dwr.engine._pollErrorHandler;
  batch.warningHandler = dwr.engine._pollErrorHandler;
  batch.handlers[0] = {
    callback:function(pause) {
      dwr.engine._pollRetries = 0;
      setTimeout(dwr.engine._poll, pause);
    }
  };

  // Send the data
  dwr.engine._sendData(batch);
  if (batch.rpcType == dwr.engine.XMLHttpRequest && batch.map.partialResponse == dwr.engine._partialResponseYes) {
    dwr.engine._checkCometPoll();
  }
};

/** Try to recover from polling errors */
dwr.engine._pollErrorHandler = function(msg, ex) {
  // if anything goes wrong then just silently try again (up to 3x) after 10s
  dwr.engine._pollRetries++;
  dwr.engine._debug("Reverse Ajax poll failed (pollRetries=" + dwr.engine._pollRetries + "): " + ex.name + " : " + ex.message);
  if (dwr.engine._pollRetries < dwr.engine._maxPollRetries) {
    setTimeout(dwr.engine._poll, 10000);
  }
  else {
    dwr.engine._activeReverseAjax = false;
    dwr.engine._debug("Giving up.");
  }
};

/** @private Generate a new standard batch */
dwr.engine._createBatch = function() {
  var batch = {
    map:{
      callCount:0,
      page:window.location.pathname + window.location.search,
      httpSessionId:dwr.engine._getJSessionId(),
      scriptSessionId:dwr.engine._getScriptSessionId()
    },
    charsProcessed:0, paramCount:0,
    parameters:{}, headers:{},
    isPoll:false, handlers:{}, preHooks:[], postHooks:[],
    rpcType:dwr.engine._rpcType,
    httpMethod:dwr.engine._httpMethod,
    async:dwr.engine._async,
    timeout:dwr.engine._timeout,
    errorHandler:dwr.engine._errorHandler,
    warningHandler:dwr.engine._warningHandler,
    textHtmlHandler:dwr.engine._textHtmlHandler
  };
  if (dwr.engine._preHook) batch.preHooks.push(dwr.engine._preHook);
  if (dwr.engine._postHook) batch.postHooks.push(dwr.engine._postHook);
  var propname, data;
  if (dwr.engine._headers) {
    for (propname in dwr.engine._headers) {
      data = dwr.engine._headers[propname];
      if (typeof data != "function") batch.headers[propname] = data;
    }
  }
  if (dwr.engine._parameters) {
    for (propname in dwr.engine._parameters) {
      data = dwr.engine._parameters[propname];
      if (typeof data != "function") batch.parameters[propname] = data;
    }
  }
  return batch;
};

/** @private Take further options and merge them into */
dwr.engine._mergeBatch = function(batch, overrides) {
  var propname, data;
  for (var i = 0; i < dwr.engine._propnames.length; i++) {
    propname = dwr.engine._propnames[i];
    if (overrides[propname] != null) batch[propname] = overrides[propname];
  }
  if (overrides.preHook != null) batch.preHooks.unshift(overrides.preHook);
  if (overrides.postHook != null) batch.postHooks.push(overrides.postHook);
  if (overrides.headers) {
    for (propname in overrides.headers) {
      data = overrides.headers[propname];
      if (typeof data != "function") batch.headers[propname] = data;
    }
  }
  if (overrides.parameters) {
    for (propname in overrides.parameters) {
      data = overrides.parameters[propname];
      if (typeof data != "function") batch.map["p-" + propname] = "" + data;
    }
  }
};

/** @private What is our session id? */
dwr.engine._getJSessionId =  function() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(dwr.engine._sessionCookieName + "=") == 0) {
      return cookie.substring(dwr.engine._sessionCookieName.length + 1, cookie.length);
    }
  }
  return "";
};

/** @private Check for reverse Ajax activity */
dwr.engine._checkCometPoll = function() {
  for (var i = 0; i < dwr.engine._outstandingIFrames.length; i++) {
    var text = "";
    var iframe = dwr.engine._outstandingIFrames[i];
    try {
      text = dwr.engine._getTextFromCometIFrame(iframe);
    }
    catch (ex) {
      dwr.engine._handleWarning(iframe.batch, ex);
    }
    if (text != "") dwr.engine._processCometResponse(text, iframe.batch);
  }
  if (dwr.engine._pollReq) {
    var req = dwr.engine._pollReq;
    var text = req.responseText;
    if (text != null) dwr.engine._processCometResponse(text, req.batch);
  }

  // If the poll resources are still there, come back again
  if (dwr.engine._outstandingIFrames.length > 0 || dwr.engine._pollReq) {
    setTimeout(dwr.engine._checkCometPoll, dwr.engine._pollCometInterval);
  }
};

/** @private Extract the whole (executed an all) text from the current iframe */
dwr.engine._getTextFromCometIFrame = function(frameEle) {
  var body = frameEle.contentWindow.document.body;
  if (body == null) return "";
  var text = body.innerHTML;
  // We need to prevent IE from stripping line feeds
  if (text.indexOf("<PRE>") == 0 || text.indexOf("<pre>") == 0) {
    text = text.substring(5, text.length - 7);
  }
  return text;
};

/** @private Some more text might have come in, test and execute the new stuff */
dwr.engine._processCometResponse = function(response, batch) {
  if (batch.charsProcessed == response.length) return;
  if (response.length == 0) {
    batch.charsProcessed = 0;
    return;
  }

  var firstStartTag = response.indexOf("//#DWR-START#", batch.charsProcessed);
  if (firstStartTag == -1) {
    // dwr.engine._debug("No start tag (search from " + batch.charsProcessed + "). skipping '" + response.substring(batch.charsProcessed) + "'");
    batch.charsProcessed = response.length;
    return;
  }
  // if (firstStartTag > 0) {
  //   dwr.engine._debug("Start tag not at start (search from " + batch.charsProcessed + "). skipping '" + response.substring(batch.charsProcessed, firstStartTag) + "'");
  // }

  var lastEndTag = response.lastIndexOf("//#DWR-END#");
  if (lastEndTag == -1) {
    // dwr.engine._debug("No end tag. unchanged charsProcessed=" + batch.charsProcessed);
    return;
  }

  // Skip the end tag too for next time, remembering CR and LF
  if (response.charCodeAt(lastEndTag + 11) == 13 && response.charCodeAt(lastEndTag + 12) == 10) {
    batch.charsProcessed = lastEndTag + 13;
  }
  else {
    batch.charsProcessed = lastEndTag + 11;
  }

  var exec = response.substring(firstStartTag + 13, lastEndTag);

  dwr.engine._receivedBatch = batch;
  dwr.engine._eval(exec);
  dwr.engine._receivedBatch = null;
};

/** @private Actually send the block of data in the batch object. */
dwr.engine._sendData = function(batch) {
  batch.map.batchId = dwr.engine._nextBatchId;
  dwr.engine._nextBatchId++;
  dwr.engine._batches[batch.map.batchId] = batch;
  dwr.engine._batchesLength++;
  batch.completed = false;

  for (var i = 0; i < batch.preHooks.length; i++) {
    batch.preHooks[i]();
  }
  batch.preHooks = null;
  // Set a timeout
  if (batch.timeout && batch.timeout != 0) {
    batch.timeoutId = setTimeout(function() { dwr.engine._abortRequest(batch); }, batch.timeout);
  }
  // Get setup for XMLHttpRequest if possible
  if (batch.rpcType == dwr.engine.XMLHttpRequest) {
    if (window.XMLHttpRequest) {
      batch.req = new XMLHttpRequest();
    }
    // IE5 for the mac claims to support window.ActiveXObject, but throws an error when it's used
    else if (window.ActiveXObject && !(navigator.userAgent.indexOf("Mac") >= 0 && navigator.userAgent.indexOf("MSIE") >= 0)) {
      batch.req = dwr.engine._newActiveXObject(dwr.engine._XMLHTTP);
    }
  }

  var prop, request;
  if (batch.req) {
    // Proceed using XMLHttpRequest
    if (batch.async) {
      batch.req.onreadystatechange = function() {
        if (typeof dwr != 'undefined') dwr.engine._stateChange(batch);
      };
    }
    // If we're polling, record this for monitoring
    if (batch.isPoll) {
      dwr.engine._pollReq = batch.req;
      // In IE XHR is an ActiveX control so you can't augment it like this
      if (!(document.all && !window.opera)) batch.req.batch = batch;
    }
    // Workaround for Safari 1.x POST bug
    var indexSafari = navigator.userAgent.indexOf("Safari/");
    if (indexSafari >= 0) {
      var version = navigator.userAgent.substring(indexSafari + 7);
      if (parseInt(version, 10) < 400) {
        if (dwr.engine._allowGetForSafariButMakeForgeryEasier == "true") batch.httpMethod = "GET";
        else dwr.engine._handleWarning(batch, { name:"dwr.engine.oldSafari", message:"Safari GET support disabled. See getahead.org/dwr/server/servlet and allowGetForSafariButMakeForgeryEasier." });
      }
    }
    batch.mode = batch.isPoll ? dwr.engine._ModePlainPoll : dwr.engine._ModePlainCall;
    request = dwr.engine._constructRequest(batch);
    try {
      batch.req.open(batch.httpMethod, request.url, batch.async);
      try {
        for (prop in batch.headers) {
          var value = batch.headers[prop];
          if (typeof value == "string") batch.req.setRequestHeader(prop, value);
        }
        if (!batch.headers["Content-Type"]) batch.req.setRequestHeader("Content-Type", "text/plain");
      }
      catch (ex) {
        dwr.engine._handleWarning(batch, ex);
      }
      batch.req.send(request.body);
      if (!batch.async) dwr.engine._stateChange(batch);
    }
    catch (ex) {
      dwr.engine._handleError(batch, ex);
    }
  }
  else if (batch.rpcType != dwr.engine.ScriptTag) {
    var idname = batch.isPoll ? "dwr-if-poll-" + batch.map.batchId : "dwr-if-" + batch.map.batchId;
    // Removed htmlfile implementation. Don't expect it to return before v3
    batch.div = document.createElement("div");
    // Add the div to the document first, otherwise IE 6 will ignore onload handler.
    document.body.appendChild(batch.div);
    batch.div.innerHTML = "<iframe src='javascript:void(0)' frameborder='0' style='width:0px;height:0px;border:0;' id='" + idname + "' name='" + idname + "' onload='dwr.engine._iframeLoadingComplete (" + batch.map.batchId + ");'></iframe>";
    batch.document = document;
    batch.iframe = batch.document.getElementById(idname);
    batch.iframe.batch = batch;
    batch.mode = batch.isPoll ? dwr.engine._ModeHtmlPoll : dwr.engine._ModeHtmlCall;
    if (batch.isPoll) dwr.engine._outstandingIFrames.push(batch.iframe);
    request = dwr.engine._constructRequest(batch);
    if (batch.httpMethod == "GET") {
      batch.iframe.setAttribute("src", request.url);
    }
    else {
      batch.form = batch.document.createElement("form");
      batch.form.setAttribute("id", "dwr-form");
      batch.form.setAttribute("action", request.url);
      batch.form.setAttribute("style", "display:none;");
      batch.form.setAttribute("target", idname);
      batch.form.target = idname;
      batch.form.setAttribute("method", batch.httpMethod);
      for (prop in batch.map) {
        var value = batch.map[prop];
        if (typeof value != "function") {
          var formInput = batch.document.createElement("input");
          formInput.setAttribute("type", "hidden");
          formInput.setAttribute("name", prop);
          formInput.setAttribute("value", value);
          batch.form.appendChild(formInput);
        }
      }
      batch.document.body.appendChild(batch.form);
      batch.form.submit();
    }
  }
  else {
    batch.httpMethod = "GET"; // There's no such thing as ScriptTag using POST
    batch.mode = batch.isPoll ? dwr.engine._ModePlainPoll : dwr.engine._ModePlainCall;
    request = dwr.engine._constructRequest(batch);
    batch.script = document.createElement("script");
    batch.script.id = "dwr-st-" + batch.map["c0-id"];
    batch.script.src = request.url;
    document.body.appendChild(batch.script);
  }
};

dwr.engine._ModePlainCall = "/call/plaincall/";
dwr.engine._ModeHtmlCall = "/call/htmlcall/";
dwr.engine._ModePlainPoll = "/call/plainpoll/";
dwr.engine._ModeHtmlPoll = "/call/htmlpoll/";

/** @private Work out what the URL should look like */
dwr.engine._constructRequest = function(batch) {
  // A quick string to help people that use web log analysers
  var request = { url:batch.path + batch.mode, body:null };
  if (batch.isPoll == true) {
    request.url += "ReverseAjax.dwr";
  }
  else if (batch.map.callCount == 1) {
    request.url += batch.map["c0-scriptName"] + "." + batch.map["c0-methodName"] + ".dwr";
  }
  else {
    request.url += "Multiple." + batch.map.callCount + ".dwr";
  }
  // Play nice with url re-writing
  var sessionMatch = location.href.match(/jsessionid=([^?]+)/);
  if (sessionMatch != null) {
    request.url += ";jsessionid=" + sessionMatch[1];
  }

  var prop;
  if (batch.httpMethod == "GET") {
    // Some browsers (Opera/Safari2) seem to fail to convert the callCount value
    // to a string in the loop below so we do it manually here.
    batch.map.callCount = "" + batch.map.callCount;
    request.url += "?";
    for (prop in batch.map) {
      if (typeof batch.map[prop] != "function") {
        request.url += encodeURIComponent(prop) + "=" + encodeURIComponent(batch.map[prop]) + "&";
      }
    }
    request.url = request.url.substring(0, request.url.length - 1);
  }
  else {
    // PERFORMANCE: for iframe mode this is thrown away.
    request.body = "";
    if (document.all && !window.opera) {
      // Use array joining on IE (fastest)
      var buf = [];
      for (prop in batch.map) {
        if (typeof batch.map[prop] != "function") {
          buf.push(prop + "=" + batch.map[prop] + dwr.engine._postSeperator);
        }
      }
      request.body = buf.join("");
    }
    else {
      // Use string concat on other browsers (fastest)
      for (prop in batch.map) {
        if (typeof batch.map[prop] != "function") {
          request.body += prop + "=" + batch.map[prop] + dwr.engine._postSeperator;
        }
      }
    }
    request.body = dwr.engine._contentRewriteHandler(request.body);
  }
  request.url = dwr.engine._urlRewriteHandler(request.url);
  return request;
};

/** @private Called by XMLHttpRequest to indicate that something has happened */
dwr.engine._stateChange = function(batch) {
  var toEval;

  if (batch.completed) {
    dwr.engine._debug("Error: _stateChange() with batch.completed");
    return;
  }

  var req = batch.req;
  try {
    if (req.readyState != 4) return;
  }
  catch (ex) {
    dwr.engine._handleWarning(batch, ex);
    // It's broken - clear up and forget this call
    dwr.engine._clearUp(batch);
    return;
  }

  if (dwr.engine._unloading) {
    dwr.engine._debug("Ignoring reply from server as page is unloading.");
    return;
  }
  
  try {
    var reply = req.responseText;
    reply = dwr.engine._replyRewriteHandler(reply);
    var status = req.status; // causes Mozilla to except on page moves

    if (reply == null || reply == "") {
      dwr.engine._handleWarning(batch, { name:"dwr.engine.missingData", message:"No data received from server" });
    }
    else if (status != 200) {
      dwr.engine._handleError(batch, { name:"dwr.engine.http." + status, message:req.statusText });
    }
    else {
      var contentType = req.getResponseHeader("Content-Type");
      if (!contentType.match(/^text\/plain/) && !contentType.match(/^text\/javascript/)) {
        if (contentType.match(/^text\/html/) && typeof batch.textHtmlHandler == "function") {
          batch.textHtmlHandler({ status:status, responseText:reply, contentType:contentType });
        }
        else {
          dwr.engine._handleWarning(batch, { name:"dwr.engine.invalidMimeType", message:"Invalid content type: '" + contentType + "'" });
        }
      }
      else {
        // Comet replies might have already partially executed
        if (batch.isPoll && batch.map.partialResponse == dwr.engine._partialResponseYes) {
          dwr.engine._processCometResponse(reply, batch);
        }
        else {
          if (reply.search("//#DWR") == -1) {
            dwr.engine._handleWarning(batch, { name:"dwr.engine.invalidReply", message:"Invalid reply from server" });
          }
          else {
            toEval = reply;
          }
        }
      }
    }
  }
  catch (ex) {
    dwr.engine._handleWarning(batch, ex);
  }

  dwr.engine._callPostHooks(batch);

  // Outside of the try/catch so errors propogate normally:
  dwr.engine._receivedBatch = batch;
  if (toEval != null) toEval = toEval.replace(dwr.engine._scriptTagProtection, "");
  dwr.engine._eval(toEval);
  dwr.engine._receivedBatch = null;
  dwr.engine._validateBatch(batch);
  if (!batch.completed) dwr.engine._clearUp(batch);
};

/**
 * @private This function is invoked when a batch reply is received.
 * It checks that there is a response for every call in the batch. Otherwise,
 * an error will be signaled (a call without a response indicates that the 
 * server failed to send complete batch response). 
 */
dwr.engine._validateBatch = function(batch) {
  // If some call left unreplied, report an error.
  if (!batch.completed) {
    for (var i = 0; i < batch.map.callCount; i++) {
      if (batch.handlers[i] != null) {
        dwr.engine._handleWarning(batch, { name:"dwr.engine.incompleteReply", message:"Incomplete reply from server" });
        break;
      }
    }
  }
}

/** @private Called from iframe onload, check batch using batch-id */
dwr.engine._iframeLoadingComplete = function(batchId) {
  // dwr.engine._checkCometPoll();
  var batch = dwr.engine._batches[batchId];
  if (batch) dwr.engine._validateBatch(batch);
}

/** @private Called by the server: Execute a callback */
dwr.engine._remoteHandleCallback = function(batchId, callId, reply) {
  var batch = dwr.engine._batches[batchId];
  if (batch == null) {
    dwr.engine._debug("Warning: batch == null in remoteHandleCallback for batchId=" + batchId, true);
    return;
  }
  // Error handlers inside here indicate an error that is nothing to do
  // with DWR so we handle them differently.
  try {
    var handlers = batch.handlers[callId];
    batch.handlers[callId] = null;
    if (!handlers) {
      dwr.engine._debug("Warning: Missing handlers. callId=" + callId, true);
    }
    else if (typeof handlers.callback == "function") handlers.callback(reply);
  }
  catch (ex) {
    dwr.engine._handleError(batch, ex);
  }
};

/** @private Called by the server: Handle an exception for a call */
dwr.engine._remoteHandleException = function(batchId, callId, ex) {
  var batch = dwr.engine._batches[batchId];
  if (batch == null) { dwr.engine._debug("Warning: null batch in remoteHandleException", true); return; }
  var handlers = batch.handlers[callId];
  batch.handlers[callId] = null;
  if (handlers == null) { dwr.engine._debug("Warning: null handlers in remoteHandleException", true); return; }
  if (ex.message == undefined) ex.message = "";
  if (typeof handlers.exceptionHandler == "function") handlers.exceptionHandler(ex.message, ex);
  else if (typeof batch.errorHandler == "function") batch.errorHandler(ex.message, ex);
};

/** @private Called by the server: The whole batch is broken */
dwr.engine._remoteHandleBatchException = function(ex, batchId) {
  var searchBatch = (dwr.engine._receivedBatch == null && batchId != null);
  if (searchBatch) {
    dwr.engine._receivedBatch = dwr.engine._batches[batchId];
  }
  if (ex.message == undefined) ex.message = "";
  dwr.engine._handleError(dwr.engine._receivedBatch, ex);
  if (searchBatch) {
    dwr.engine._receivedBatch = null;
    dwr.engine._clearUp(dwr.engine._batches[batchId]);
  }
};

/** @private Called by the server: Reverse ajax should not be used */
dwr.engine._remotePollCometDisabled = function(ex, batchId) {
  dwr.engine.setActiveReverseAjax(false);
  var searchBatch = (dwr.engine._receivedBatch == null && batchId != null);
  if (searchBatch) {
    dwr.engine._receivedBatch = dwr.engine._batches[batchId];
  }
  if (ex.message == undefined) ex.message = "";
  dwr.engine._handleError(dwr.engine._receivedBatch, ex);
  if (searchBatch) {
    dwr.engine._receivedBatch = null;
    dwr.engine._clearUp(dwr.engine._batches[batchId]);
  }
};

/** @private Called by the server: An IFrame reply is about to start */
dwr.engine._remoteBeginIFrameResponse = function(iframe, batchId) {
  if (iframe != null) dwr.engine._receivedBatch = iframe.batch;
  dwr.engine._callPostHooks(dwr.engine._receivedBatch);
};

/** @private Called by the server: An IFrame reply is just completing */
dwr.engine._remoteEndIFrameResponse = function(batchId) {
  dwr.engine._clearUp(dwr.engine._receivedBatch);
  dwr.engine._receivedBatch = null;
};

/** @private This is a hack to make the context be this window */
dwr.engine._eval = function(script) {
  if (script == null) return null;
  if (script == "") { dwr.engine._debug("Warning: blank script", true); return null; }
  // dwr.engine._debug("Exec: [" + script + "]", true);
  return eval(script);
};

/** @private Called as a result of a request timeout */
dwr.engine._abortRequest = function(batch) {
  if (batch && !batch.completed) {
    dwr.engine._clearUp(batch);
    if (batch.req) batch.req.abort();
    dwr.engine._handleError(batch, { name:"dwr.engine.timeout", message:"Timeout" });
  }
};

/** @private call all the post hooks for a batch */
dwr.engine._callPostHooks = function(batch) {
  if (batch.postHooks) {
    for (var i = 0; i < batch.postHooks.length; i++) {
      batch.postHooks[i]();
    }
    batch.postHooks = null;
  }
};

/** @private A call has finished by whatever means and we need to shut it all down. */
dwr.engine._clearUp = function(batch) {
  if (!batch) { dwr.engine._debug("Warning: null batch in dwr.engine._clearUp()", true); return; }
  if (batch.completed) { dwr.engine._debug("Warning: Double complete", true); return; }

  // IFrame tidyup
  if (batch.div) batch.div.parentNode.removeChild(batch.div);
  if (batch.iframe) {
    // If this is a poll frame then stop comet polling
    for (var i = 0; i < dwr.engine._outstandingIFrames.length; i++) {
      if (dwr.engine._outstandingIFrames[i] == batch.iframe) {
        dwr.engine._outstandingIFrames.splice(i, 1);
      }
    }
    batch.iframe.parentNode.removeChild(batch.iframe);
  }
  if (batch.form) batch.form.parentNode.removeChild(batch.form);

  // XHR tidyup: avoid IE handles increase
  if (batch.req) {
    // If this is a poll frame then stop comet polling
    if (batch.req == dwr.engine._pollReq) dwr.engine._pollReq = null;
    delete batch.req;
  }

  // Timeout tidyup
  if (batch.timeoutId) {
    clearTimeout(batch.timeoutId);
    delete batch.timeoutId;
  }

  if (batch.map && (batch.map.batchId || batch.map.batchId == 0)) {
    delete dwr.engine._batches[batch.map.batchId];
    dwr.engine._batchesLength--;
  }

  batch.completed = true;

  // If there is anything on the queue waiting to go out, then send it.
  // We don't need to check for ordered mode, here because when ordered mode
  // gets turned off, we still process *waiting* batches in an ordered way.
  if (dwr.engine._batchQueue.length != 0) {
    var sendbatch = dwr.engine._batchQueue.shift();
    dwr.engine._sendData(sendbatch);
  }
};

/** @private Abort any XHRs in progress at page unload (solves zombie socket problems in IE). */
dwr.engine._unloader = function() {
  dwr.engine._unloading = true;

  // Empty queue of waiting ordered requests
  dwr.engine._batchQueue.length = 0;

  // Abort any ongoing XHRs and clear their batches
  for (var batchId in dwr.engine._batches) {
    var batch = dwr.engine._batches[batchId];
    // Only process objects that look like batches (avoid prototype additions!)
    if (batch && batch.map) {
      if (batch.req) {
        batch.req.abort();
      }
      dwr.engine._clearUp(batch);
    }
  }
};
// Now register the unload handler
if (window.addEventListener) window.addEventListener('unload', dwr.engine._unloader, false);
else if (window.attachEvent) window.attachEvent('onunload', dwr.engine._unloader);

/** @private Generic error handling routing to save having null checks everywhere */
dwr.engine._handleError = function(batch, ex) {
  if (typeof ex == "string") ex = { name:"unknown", message:ex };
  if (ex.message == null) ex.message = "";
  if (ex.name == null) ex.name = "unknown";
  if (batch && typeof batch.errorHandler == "function") batch.errorHandler(ex.message, ex);
  else if (dwr.engine._errorHandler) dwr.engine._errorHandler(ex.message, ex);
  if (batch) dwr.engine._clearUp(batch);
};

/** @private Generic error handling routing to save having null checks everywhere */
dwr.engine._handleWarning = function(batch, ex) {
  if (typeof ex == "string") ex = { name:"unknown", message:ex };
  if (ex.message == null) ex.message = "";
  if (ex.name == null) ex.name = "unknown";
  if (batch && typeof batch.warningHandler == "function") batch.warningHandler(ex.message, ex);
  else if (dwr.engine._warningHandler) dwr.engine._warningHandler(ex.message, ex);
  if (batch) dwr.engine._clearUp(batch);
};

/**
 * @private Marshall a data item
 * @param batch A map of variables to how they have been marshalled
 * @param referto An array of already marshalled variables to prevent recurrsion
 * @param data The data to be marshalled
 * @param name The name of the data being marshalled
 */
dwr.engine._serializeAll = function(batch, referto, data, name) {
  if (data == null) {
    batch.map[name] = "null:null";
    return;
  }

  switch (typeof data) {
  case "boolean":
    batch.map[name] = "boolean:" + data;
    break;
  case "number":
    batch.map[name] = "number:" + data;
    break;
  case "string":
    batch.map[name] = "string:" + encodeURIComponent(data);
    break;
  case "object":
    if (data instanceof String) batch.map[name] = "String:" + encodeURIComponent(data);
    else if (data instanceof Boolean) batch.map[name] = "Boolean:" + data;
    else if (data instanceof Number) batch.map[name] = "Number:" + data;
    else if (data instanceof Date) batch.map[name] = "Date:" + data.getTime();
    else if (data && data.join) batch.map[name] = dwr.engine._serializeArray(batch, referto, data, name);
    else batch.map[name] = dwr.engine._serializeObject(batch, referto, data, name);
    break;
  case "function":
    // We just ignore functions.
    break;
  default:
    dwr.engine._handleWarning(null, { name:"dwr.engine.unexpectedType", message:"Unexpected type: " + typeof data + ", attempting default converter." });
    batch.map[name] = "default:" + data;
    break;
  }
};

/** @private Have we already converted this object? */
dwr.engine._lookup = function(referto, data, name) {
  var lookup;
  // Can't use a map: getahead.org/ajax/javascript-gotchas
  for (var i = 0; i < referto.length; i++) {
    if (referto[i].data == data) {
      lookup = referto[i];
      break;
    }
  }
  if (lookup) return "reference:" + lookup.name;
  referto.push({ data:data, name:name });
  return null;
};

/** @private Marshall an object */
dwr.engine._serializeObject = function(batch, referto, data, name) {
  var ref = dwr.engine._lookup(referto, data, name);
  if (ref) return ref;

  // This check for an HTML is not complete, but is there a better way?
  // Maybe we should add: data.hasChildNodes typeof "function" == true
  if (data.nodeName && data.nodeType) {
    return dwr.engine._serializeXml(batch, referto, data, name);
  }

  // treat objects as an associative arrays
  var reply = "Object_" + dwr.engine._getObjectClassName(data) + ":{";
  var element;
  for (element in data) {
    if (typeof data[element] != "function") {
      batch.paramCount++;
      var childName = "c" + dwr.engine._batch.map.callCount + "-e" + batch.paramCount;
      dwr.engine._serializeAll(batch, referto, data[element], childName);

      reply += encodeURIComponent(element) + ":reference:" + childName + ", ";
    }
  }

  if (reply.substring(reply.length - 2) == ", ") {
    reply = reply.substring(0, reply.length - 2);
  }
  reply += "}";

  return reply;
};

/** @private Returns the classname of supplied argument obj */
dwr.engine._errorClasses = { "Error":Error, "EvalError":EvalError, "RangeError":RangeError, "ReferenceError":ReferenceError, "SyntaxError":SyntaxError, "TypeError":TypeError, "URIError":URIError };
dwr.engine._getObjectClassName = function(obj) {
  // Try to find the classname by stringifying the object's constructor
  // and extract <class> from "function <class>".
  if (obj && obj.constructor && obj.constructor.toString)
  {
    var str = obj.constructor.toString();
    var regexpmatch = str.match(/function\s+(\w+)/);
    if (regexpmatch && regexpmatch.length == 2) {
      return regexpmatch[1];
    }
  }

  // Now manually test against the core Error classes, as these in some 
  // browsers successfully match to the wrong class in the 
  // Object.toString() test we will do later
  if (obj && obj.constructor) {
	for (var errorname in dwr.engine._errorClasses) {
      if (obj.constructor == dwr.engine._errorClasses[errorname]) return errorname;
    }
  }

  // Try to find the classname by calling Object.toString() on the object
  // and extracting <class> from "[object <class>]"
  if (obj) {
    var str = Object.prototype.toString.call(obj);
    var regexpmatch = str.match(/\[object\s+(\w+)/);
    if (regexpmatch && regexpmatch.length==2) {
      return regexpmatch[1];
    }
  }

  // Supplied argument was probably not an object, but what is better?
  return "Object";
};

/** @private Marshall an object */
dwr.engine._serializeXml = function(batch, referto, data, name) {
  var ref = dwr.engine._lookup(referto, data, name);
  if (ref) return ref;

  var output;
  if (window.XMLSerializer) output = new XMLSerializer().serializeToString(data);
  else if (data.toXml) output = data.toXml;
  else output = data.innerHTML;

  return "XML:" + encodeURIComponent(output);
};

/** @private Marshall an array */
dwr.engine._serializeArray = function(batch, referto, data, name) {
  var ref = dwr.engine._lookup(referto, data, name);
  if (ref) return ref;

  if (document.all && !window.opera) {
    // Use array joining on IE (fastest)
    var buf = ["Array:["];
    for (var i = 0; i < data.length; i++) {
      if (i != 0) buf.push(",");
      batch.paramCount++;
      var childName = "c" + dwr.engine._batch.map.callCount + "-e" + batch.paramCount;
      dwr.engine._serializeAll(batch, referto, data[i], childName);
      buf.push("reference:");
      buf.push(childName);
    }
    buf.push("]");
    reply = buf.join("");
  }
  else {
    // Use string concat on other browsers (fastest)
    var reply = "Array:[";
    for (var i = 0; i < data.length; i++) {
      if (i != 0) reply += ",";
      batch.paramCount++;
      var childName = "c" + dwr.engine._batch.map.callCount + "-e" + batch.paramCount;
      dwr.engine._serializeAll(batch, referto, data[i], childName);
      reply += "reference:";
      reply += childName;
    }
    reply += "]";
  }

  return reply;
};

/** @private Convert an XML string into a DOM object. */
dwr.engine._unserializeDocument = function(xml) {
  var dom;
  if (window.DOMParser) {
    var parser = new DOMParser();
    dom = parser.parseFromString(xml, "text/xml");
    if (!dom.documentElement || dom.documentElement.tagName == "parsererror") {
      var message = dom.documentElement.firstChild.data;
      message += "\n" + dom.documentElement.firstChild.nextSibling.firstChild.data;
      throw message;
    }
    return dom;
  }
  else if (window.ActiveXObject) {
    dom = dwr.engine._newActiveXObject(dwr.engine._DOMDocument);
    dom.loadXML(xml); // What happens on parse fail with IE?
    return dom;
  }
  else {
    var div = document.createElement("div");
    div.innerHTML = xml;
    return div;
  }
};

/** @param axarray An array of strings to attempt to create ActiveX objects from */
dwr.engine._newActiveXObject = function(axarray) {
  var returnValue;  
  for (var i = 0; i < axarray.length; i++) {
    try {
      returnValue = new ActiveXObject(axarray[i]);
      break;
    }
    catch (ex) { /* ignore */ }
  }
  return returnValue;
};

/** @private Used internally when some message needs to get to the programmer */
dwr.engine._debug = function(message, stacktrace) {
  var written = false;
  try {
    if (window.console) {
      if (stacktrace && window.console.trace) window.console.trace();
      window.console.log(message);
      written = true;
    }
    else if (window.opera && window.opera.postError) {
      window.opera.postError(message);
      written = true;
    }
  }
  catch (ex) { /* ignore */ }

  if (!written) {
    var debug = document.getElementById("dwr-debug");
    if (debug) {
      var contents = message + "<br/>" + debug.innerHTML;
      if (contents.length > 2048) contents = contents.substring(0, 2048);
      debug.innerHTML = contents;
    }
  }
};


/*
 * Copyright 2005 Joe Walker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Declare an object to which we can add real functions.
 */
if (dwr == null) var dwr = {};
if (dwr.util == null) dwr.util = {};
if (DWRUtil == null) var DWRUtil = dwr.util;

/** @private The flag we use to decide if we should escape html */
dwr.util._escapeHtml = true;

/**
 * Set the global escapeHtml flag
 */
dwr.util.setEscapeHtml = function(escapeHtml) {
  dwr.util._escapeHtml = escapeHtml;
};

/** @private Work out from an options list and global settings if we should be esccaping */
dwr.util._shouldEscapeHtml = function(options) {
  if (options && options.escapeHtml != null) {
    return options.escapeHtml;
  }
  return dwr.util._escapeHtml;
};

/**
 * Return a string with &, < and > replaced with their entities
 * @see TODO
 */
dwr.util.escapeHtml = function(original) {
  return original.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
};

/**
 * Replace common XML entities with characters (see dwr.util.escapeHtml())
 * @see TODO
 */
dwr.util.unescapeHtml = function(original) {
  return original.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
};

/**
 * Replace characters dangerous for XSS reasons with visually similar characters
 * @see TODO
 */
dwr.util.replaceXmlCharacters = function(original) {
  original = original.replace("&", "+");
  original = original.replace("<", "\u2039");
  original = original.replace(">", "\u203A");
  original = original.replace("\'", "\u2018");
  original = original.replace("\"", "\u201C");
  return original;
};

/**
 * Return true iff the input string contains any XSS dangerous characters
 * @see TODO
 */
dwr.util.containsXssRiskyCharacters = function(original) {
  return (original.indexOf('&') != -1
    || original.indexOf('<') != -1
    || original.indexOf('>') != -1
    || original.indexOf('\'') != -1
    || original.indexOf('\"') != -1);
};

/**
 * Enables you to react to return being pressed in an input
 * @see http://getahead.org/dwr/browser/util/selectrange
 */
dwr.util.onReturn = function(event, action) {
  if (!event) event = window.event;
  if (event && event.keyCode && event.keyCode == 13) action();
};

/**
 * Select a specific range in a text box. Useful for 'google suggest' type functions.
 * @see http://getahead.org/dwr/browser/util/selectrange
 */
dwr.util.selectRange = function(ele, start, end) {
  ele = dwr.util._getElementById(ele, "selectRange()");
  if (ele == null) return;
  if (ele.setSelectionRange) {
    ele.setSelectionRange(start, end);
  }
  else if (ele.createTextRange) {
    var range = ele.createTextRange();
    range.moveStart("character", start);
    range.moveEnd("character", end - ele.value.length);
    range.select();
  }
  ele.focus();
};

/**
 * Find the element in the current HTML document with the given id or ids
 * @see http://getahead.org/dwr/browser/util/$
 */
if (document.getElementById) {
  dwr.util.byId = function() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
      var element = arguments[i];
      if (typeof element == 'string') {
        element = document.getElementById(element);
      }
      if (arguments.length == 1) {
        return element;
      }
      elements.push(element);
    }
    return elements;
  };
}
else if (document.all) {
  dwr.util.byId = function() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
      var element = arguments[i];
      if (typeof element == 'string') {
        element = document.all[element];
      }
      if (arguments.length == 1) {
        return element;
      }
      elements.push(element);
    }
    return elements;
  };
}

/**
 * Alias $ to dwr.util.byId
 * @see http://getahead.org/dwr/browser/util/$
 */
var $;
if (!$) {
  $ = dwr.util.byId;
}

/**
 * This function pretty-prints simple data or whole object graphs, f ex as an aid in debugging.
 * @see http://getahead.org/dwr/browser/util/todescriptivestring
 */
dwr.util.toDescriptiveString = function(data, showLevels, options) {
  if (showLevels === undefined) showLevels = 1;
  var opt = {};
  if (dwr.util._isObject(options)) opt = options;
  var defaultoptions = {
    escapeHtml:false,
    baseIndent: "",
    childIndent: "\u00A0\u00A0",
    lineTerminator: "\n",
    oneLineMaxItems: 5,
    shortStringMaxLength: 13,
    propertyNameMaxLength: 30 
  };
  for (var p in defaultoptions) {
    if (!(p in opt)) {
      opt[p] = defaultoptions[p];
    }
  }

  var skipDomProperties = {
    document:true, ownerDocument:true,
    all:true,
    parentElement:true, parentNode:true, offsetParent:true,
    children:true, firstChild:true, lastChild:true,
    previousSibling:true, nextSibling:true,
    innerHTML:true, outerHTML:true,
    innerText:true, outerText:true, textContent:true,
    attributes:true,
    style:true, currentStyle:true, runtimeStyle:true,
    parentTextEdit:true
  };
  
  function recursive(data, showLevels, indentDepth, options) {
    var reply = "";
    try {
      // string
      if (typeof data == "string") {
        var str = data;
        if (showLevels == 0 && str.length > options.shortStringMaxLength)
          str = str.substring(0, options.shortStringMaxLength-3) + "...";
        if (options.escapeHtml) {
          // Do the escape separately for every line as escapeHtml() on some 
          // browsers (IE) will strip line breaks and we want to preserve them
          var lines = str.split("\n");
          for (var i = 0; i < lines.length; i++) lines[i] = dwr.util.escapeHtml(lines[i]);
          str = lines.join("\n");
        }
        if (showLevels == 0) { // Short format
          str = str.replace(/\n|\r|\t/g, function(ch) {
            switch (ch) {
              case "\n": return "\\n";
              case "\r": return "";
              case "\t": return "\\t";
            }
          });
        }
        else { // Long format
          str = str.replace(/\n|\r|\t/g, function(ch) {
            switch (ch) {
              case "\n": return options.lineTerminator + indent(indentDepth+1, options);
              case "\r": return "";
              case "\t": return "\\t";
            }
          });
        }
        reply = '"' + str + '"';
      }
      
      // function
      else if (typeof data == "function") {
        reply = "function";
      }
    
      // Array
      else if (dwr.util._isArray(data)) {
        if (showLevels == 0) { // Short format (don't show items)
          if (data.length > 0)
            reply = "[...]";
          else
            reply = "[]";
        }
        else { // Long format (show items)
          var strarr = [];
          strarr.push("[");
          var count = 0;
          for (var i = 0; i < data.length; i++) {
            if (! (i in data)) continue;
            var itemvalue = data[i];
            if (count > 0) strarr.push(", ");
            if (showLevels == 1) { // One-line format
              if (count == options.oneLineMaxItems) {
                strarr.push("...");
                break;
              }
            }
            else { // Multi-line format
              strarr.push(options.lineTerminator + indent(indentDepth+1, options));
            }
            if (i != count) {
              strarr.push(i);
              strarr.push(":");
            }
            strarr.push(recursive(itemvalue, showLevels-1, indentDepth+1, options));
            count++;
          }
          if (showLevels > 1) strarr.push(options.lineTerminator + indent(indentDepth, options));
          strarr.push("]");
          reply = strarr.join("");
        }
      }
      
      // Objects except Date
      else if (dwr.util._isObject(data) && !dwr.util._isDate(data)) {
        if (showLevels == 0) { // Short format (don't show properties)
          reply = dwr.util._detailedTypeOf(data);
        }
        else { // Long format (show properties)
          var strarr = [];
          if (dwr.util._detailedTypeOf(data) != "Object") {
            strarr.push(dwr.util._detailedTypeOf(data));
            if (typeof data.valueOf() != "object") {
              strarr.push(":");
              strarr.push(recursive(data.valueOf(), 1, indentDepth, options));
            }
            strarr.push(" ");
          }
          strarr.push("{");
          var isDomObject = dwr.util._isHTMLElement(data); 
          var count = 0;
          for (var prop in data) {
            var propvalue = data[prop];
            if (isDomObject) {
              if (!propvalue) continue;
              if (typeof propvalue == "function") continue;
              if (skipDomProperties[prop]) continue;
              if (prop.toUpperCase() == prop) continue;
            }
            if (count > 0) strarr.push(", ");
            if (showLevels == 1) { // One-line format
              if (count == options.oneLineMaxItems) {
                strarr.push("...");
                break;
              }
            }
            else { // Multi-line format
              strarr.push(options.lineTerminator + indent(indentDepth+1, options));
            }
            strarr.push(prop.length > options.propertyNameMaxLength ? prop.substring(0, options.propertyNameMaxLength-3) + "..." : prop);
            strarr.push(":");
            strarr.push(recursive(propvalue, showLevels-1, indentDepth+1, options));
            count++;
          }
          if (showLevels > 1 && count > 0) strarr.push(options.lineTerminator + indent(indentDepth, options));
          strarr.push("}");
          reply = strarr.join("");
        }
      }
  
      // undefined, null, number, boolean, Date
      else {
        reply = "" + data;
      }
  
      return reply;
    }
    catch(err) {
      return (err.message ? err.message : ""+err);
    }
  }

  function indent(count, options) {
    var strarr = [];
    strarr.push(options.baseIndent);
    for (var i=0; i<count; i++) {
      strarr.push(options.childIndent);
    }
    return strarr.join("");
  };
  
  return recursive(data, showLevels, 0, opt);
};

/**
 * Setup a GMail style loading message.
 * @see http://getahead.org/dwr/browser/util/useloadingmessage
 */
dwr.util.useLoadingMessage = function(message) {
  var loadingMessage;
  if (message) loadingMessage = message;
  else loadingMessage = "Loading";
  dwr.engine.setPreHook(function() {
    var disabledZone = dwr.util.byId('disabledZone');
    if (!disabledZone) {
      disabledZone = document.createElement('div');
      disabledZone.setAttribute('id', 'disabledZone');
      disabledZone.style.position = "absolute";
      disabledZone.style.zIndex = "1000";
      disabledZone.style.left = "0px";
      disabledZone.style.top = "0px";
      disabledZone.style.width = "100%";
      disabledZone.style.height = "100%";
      document.body.appendChild(disabledZone);
      var messageZone = document.createElement('div');
      messageZone.setAttribute('id', 'messageZone');
      messageZone.style.position = "absolute";
      messageZone.style.top = "0px";
      messageZone.style.right = "0px";
      messageZone.style.background = "red";
      messageZone.style.color = "white";
      messageZone.style.fontFamily = "Arial,Helvetica,sans-serif";
      messageZone.style.padding = "4px";
      disabledZone.appendChild(messageZone);
      var text = document.createTextNode(loadingMessage);
      messageZone.appendChild(text);
      dwr.util._disabledZoneUseCount = 1;
    }
    else {
      dwr.util.byId('messageZone').innerHTML = loadingMessage;
      disabledZone.style.visibility = 'visible';
      dwr.util._disabledZoneUseCount++;
    }
  });
  dwr.engine.setPostHook(function() {
    dwr.util._disabledZoneUseCount--;
    if (dwr.util._disabledZoneUseCount == 0) {
      dwr.util.byId('disabledZone').style.visibility = 'hidden';
    }
  });
};

/**
 * Set a global highlight handler
 */
dwr.util.setHighlightHandler = function(handler) {
  dwr.util._highlightHandler = handler;
};

/**
 * An example highlight handler
 */
dwr.util.yellowFadeHighlightHandler = function(ele) {
  dwr.util._yellowFadeProcess(ele, 0);
};
dwr.util._yellowFadeSteps = [ "d0", "b0", "a0", "90", "98", "a0", "a8", "b0", "b8", "c0", "c8", "d0", "d8", "e0", "e8", "f0", "f8" ];
dwr.util._yellowFadeProcess = function(ele, colorIndex) {
  ele = dwr.util.byId(ele);
  if (colorIndex < dwr.util._yellowFadeSteps.length) {
    ele.style.backgroundColor = "#ffff" + dwr.util._yellowFadeSteps[colorIndex];
    setTimeout("dwr.util._yellowFadeProcess('" + ele.id + "'," + (colorIndex + 1) + ")", 200);
  }
  else {
    ele.style.backgroundColor = "transparent";
  }
};

/**
 * An example highlight handler
 */
dwr.util.borderFadeHighlightHandler = function(ele) {
  ele.style.borderWidth = "2px";
  ele.style.borderStyle = "solid";
  dwr.util._borderFadeProcess(ele, 0);
};
dwr.util._borderFadeSteps = [ "d0", "b0", "a0", "90", "98", "a0", "a8", "b0", "b8", "c0", "c8", "d0", "d8", "e0", "e8", "f0", "f8" ];
dwr.util._borderFadeProcess = function(ele, colorIndex) {
  ele = dwr.util.byId(ele);
  if (colorIndex < dwr.util._borderFadeSteps.length) {
    ele.style.borderColor = "#ff" + dwr.util._borderFadeSteps[colorIndex] + dwr.util._borderFadeSteps[colorIndex];
    setTimeout("dwr.util._borderFadeProcess('" + ele.id + "'," + (colorIndex + 1) + ")", 200);
  }
  else {
    ele.style.backgroundColor = "transparent";
  }
};

/**
 * A focus highlight handler
 */
dwr.util.focusHighlightHandler = function(ele) {
  try {
    ele.focus();
  }
  catch (ex) { /* ignore */ }
};

/** @private the current global highlight style */
dwr.util._highlightHandler = null;

/**
 * Highlight that an element has changed
 */
dwr.util.highlight = function(ele, options) {
  if (options && options.highlightHandler) {
    options.highlightHandler(dwr.util.byId(ele));
  }
  else if (dwr.util._highlightHandler != null) {
    dwr.util._highlightHandler(dwr.util.byId(ele));
  }
};

/**
 * Set the value an HTML element to the specified value.
 * @see http://getahead.org/dwr/browser/util/setvalue
 */
dwr.util.setValue = function(ele, val, options) {
  if (val == null) val = "";
  if (options == null) options = {};

  var orig = ele;
  if (typeof ele == "string") {
    ele = dwr.util.byId(ele);
    // We can work with names and need to sometimes for radio buttons, and IE has
    // an annoying bug where getElementById() returns an element based on name if
    // it doesn't find it by id. Here we don't want to do that, so:
    if (ele && ele.id != orig) ele = null;
  }
  var nodes = null;
  if (ele == null) {
    // Now it is time to look by name
    nodes = document.getElementsByName(orig);
    if (nodes.length >= 1) ele = nodes.item(0);
  }

  if (ele == null) {
    dwr.util._debug("setValue() can't find an element with id/name: " + orig + ".");
    return;
  }

  // All paths now lead to some update so we highlight a change
  dwr.util.highlight(ele, options);

  if (dwr.util._isHTMLElement(ele, "select")) {
    if (ele.type == "select-multiple" && dwr.util._isArray(val)) dwr.util._selectListItems(ele, val);
    else dwr.util._selectListItem(ele, val);
    return;
  }

  if (dwr.util._isHTMLElement(ele, "input")) {
    if (ele.type == "radio" || ele.type == "checkbox") {
      if (nodes && nodes.length >= 1) {
        for (var i = 0; i < nodes.length; i++) {
          var node = nodes.item(i);
          if (node.type != ele.type) continue;
          if (dwr.util._isArray(val)) {
            node.checked = false;
            for (var j = 0; j < val.length; j++)
              if (val[j] == node.value) node.checked = true;
          }
          else {
            node.checked = (node.value == val);
          }
        }
      }
      else {
        ele.checked = (val == true);
      }
    }
    else ele.value = val;

    return;
  }

  if (dwr.util._isHTMLElement(ele, "textarea")) {
    ele.value = val;
    return;
  }

  // If the value to be set is a DOM object then we try importing the node
  // rather than serializing it out
  if (val.nodeType) {
    if (val.nodeType == 9 /*Node.DOCUMENT_NODE*/) val = val.documentElement;
    val = dwr.util._importNode(ele.ownerDocument, val, true);
    ele.appendChild(val);
    return;
  }

  // Fall back to innerHTML and friends
  if (dwr.util._shouldEscapeHtml(options) && typeof(val) == "string") {
    if (ele.textContent) ele.textContent = val;
    else if (ele.innerText) ele.innerText = val;
    else ele.innerHTML = dwr.util.escapeHtml(val);
  }
  else {
    ele.innerHTML = val;
  }
};

/**
 * @private Find multiple items in a select list and select them. Used by setValue()
 * @param ele The select list item
 * @param val The array of values to select
 */
dwr.util._selectListItems = function(ele, val) {
  // We deal with select list elements by selecting the matching option
  // Begin by searching through the values
  var found  = false;
  var i;
  var j;
  for (i = 0; i < ele.options.length; i++) {
    ele.options[i].selected = false;
    for (j = 0; j < val.length; j++) {
      if (ele.options[i].value == val[j]) {
        ele.options[i].selected = true;
      }
    }
  }
  // If that fails then try searching through the visible text
  if (found) return;

  for (i = 0; i < ele.options.length; i++) {
    for (j = 0; j < val.length; j++) {
      if (ele.options[i].text == val[j]) {
        ele.options[i].selected = true;
      }
    }
  }
};

/**
 * @private Find an item in a select list and select it. Used by setValue()
 * @param ele The select list item
 * @param val The value to select
 */
dwr.util._selectListItem = function(ele, val) {
  // We deal with select list elements by selecting the matching option
  // Begin by searching through the values
  var found = false;
  var i;
  for (i = 0; i < ele.options.length; i++) {
    if (ele.options[i].value == val) {
      ele.options[i].selected = true;
      found = true;
    }
    else {
      ele.options[i].selected = false;
    }
  }

  // If that fails then try searching through the visible text
  if (found) return;

  for (i = 0; i < ele.options.length; i++) {
    ele.options[i].selected = (ele.options[i].text == val);
  }
};

/**
 * Read the current value for a given HTML element.
 * @see http://getahead.org/dwr/browser/util/getvalue
 */
dwr.util.getValue = function(ele, options) {
  if (options == null) options = {};
  var orig = ele;
  if (typeof ele == "string") {
    ele = dwr.util.byId(ele);
    // We can work with names and need to sometimes for radio buttons, and IE has
    // an annoying bug where getElementById() returns an element based on name if
    // it doesn't find it by id. Here we don't want to do that, so:
    if (ele && ele.id != orig) ele = null;
  }
  var nodes = null;
  if (ele == null) {
    // Now it is time to look by name
    nodes = document.getElementsByName(orig);
    if (nodes.length >= 1) ele = nodes.item(0);
  }
  if (ele == null) {
    dwr.util._debug("getValue() can't find an element with id/name: " + orig + ".");
    return "";
  }

  if (dwr.util._isHTMLElement(ele, "select")) {
    // Using "type" property instead of "multiple" as "type" is an official 
    // client-side property since JS 1.1
    if (ele.type == "select-multiple") {
      var reply = new Array();
      for (var i = 0; i < ele.options.length; i++) {
        var item = ele.options[i];
        if (item.selected) {
          var valueAttr = item.getAttributeNode("value");
          if (valueAttr && valueAttr.specified) {
            reply.push(item.value);
          }
          else {
            reply.push(item.text);
          }
        }
      }
      return reply;
    }
    else {
      var sel = ele.selectedIndex;
      if (sel != -1) {
        var item = ele.options[sel];
        var valueAttr = item.getAttributeNode("value");
        if (valueAttr && valueAttr.specified) {
          return item.value;
        }
        return item.text;
      }
      else {
        return "";
      }
    }
  }

  if (dwr.util._isHTMLElement(ele, "input")) {
    if (ele.type == "radio") {
      if (nodes && nodes.length >= 1) {
        for (var i = 0; i < nodes.length; i++) {
          var node = nodes.item(i);
          if (node.type == ele.type) {
            if (node.checked) return node.value;
          }
        }
      }
      return ele.checked;
    }
    if (ele.type == "checkbox") {
      if (nodes && nodes.length >= 1) {
        var reply = [];
        for (var i = 0; i < nodes.length; i++) {
          var node = nodes.item(i);
          if (node.type == ele.type) {
            if (node.checked) reply.push(node.value);
          }
        }
        return reply;
      }
      return ele.checked;
    }
    return ele.value;
  }

  if (dwr.util._isHTMLElement(ele, "textarea")) {
    return ele.value;
  }

  if (dwr.util._shouldEscapeHtml(options)) {
    if (ele.textContent) return ele.textContent;
    else if (ele.innerText) return ele.innerText;
  }
  return ele.innerHTML;
};

/**
 * getText() is like getValue() except that it reads the text (and not the value) from select elements
 * @see http://getahead.org/dwr/browser/util/gettext
 */
dwr.util.getText = function(ele) {
  ele = dwr.util._getElementById(ele, "getText()");
  if (ele == null) return null;
  if (!dwr.util._isHTMLElement(ele, "select")) {
    dwr.util._debug("getText() can only be used with select elements. Attempt to use: " + dwr.util._detailedTypeOf(ele) + " from  id: " + orig + ".");
    return "";
  }

  // This is a bit of a scam because it assumes single select
  // but I'm not sure how we should treat multi-select.
  var sel = ele.selectedIndex;
  if (sel != -1) {
    return ele.options[sel].text;
  }
  else {
    return "";
  }
};

/**
 * Given a map, or a recursive structure consisting of arrays and maps, call 
 * setValue() for all leaf entries and use intermediate levels to form nested
 * element ids.
 * @see http://getahead.org/dwr/browser/util/setvalues
 */
dwr.util.setValues = function(data, options) {
  var prefix = "";
  if (options && options.prefix) prefix = options.prefix;
  if (options && options.idPrefix) prefix = options.idPrefix;
  dwr.util._setValuesRecursive(data, prefix);
};

/**
 * @private Recursive helper for setValues()
 */
dwr.util._setValuesRecursive = function(data, idpath) {
  // Array containing objects -> add "[n]" to prefix and make recursive call
  // for each item object
  if (dwr.util._isArray(data) && data.length > 0 && dwr.util._isObject(data[0])) {
    for (var i = 0; i < data.length; i++) {
      dwr.util._setValuesRecursive(data[i], idpath+"["+i+"]");
    }
  }
  // Object (not array) -> handle nested object properties
  else if (dwr.util._isObject(data) && !dwr.util._isArray(data)) {
    for (var prop in data) {
      var subidpath = idpath ? idpath+"."+prop : prop;
      // Object (not array), or array containing objects -> call ourselves recursively
      if (dwr.util._isObject(data[prop]) && !dwr.util._isArray(data[prop]) 
          || dwr.util._isArray(data[prop]) && data[prop].length > 0 && dwr.util._isObject(data[prop][0])) {
        dwr.util._setValuesRecursive(data[prop], subidpath);
      }
      // Functions -> skip
      else if (typeof data[prop] == "function") {
        // NOP
      }
      // Only simple values left (or array of simple values, or empty array)
      // -> call setValue()
      else {
        // Are there any elements with that id or name
        if (dwr.util.byId(subidpath) != null || document.getElementsByName(subidpath).length >= 1) {
          dwr.util.setValue(subidpath, data[prop]);
        }
      }
    }
  }
};

/**
 * Given a map, or a recursive structure consisting of arrays and maps, call 
 * getValue() for all leaf entries and use intermediate levels to form nested
 * element ids.
 * Given a string or element that refers to a form, create an object from the 
 * elements of the form.
 * @see http://getahead.org/dwr/browser/util/getvalues
 */
dwr.util.getValues = function(data, options) {
  if (typeof data == "string" || dwr.util._isHTMLElement(data)) {
    return dwr.util.getFormValues(data);
  }
  else {
    var prefix = "";
    if (options != null && options.prefix) prefix = options.prefix;
    if (options != null && options.idPrefix) prefix = options.idPrefix;
    dwr.util._getValuesRecursive(data, prefix);
    return data;
  }
};

/**
 * Given a string or element that refers to a form, create an object from the 
 * elements of the form.
 * @see http://getahead.org/dwr/browser/util/getvalues
 */
dwr.util.getFormValues = function(eleOrNameOrId) {
  var ele = null;
  if (typeof eleOrNameOrId == "string") {
    ele = document.forms[eleOrNameOrId];
    if (ele == null) ele = dwr.util.byId(eleOrNameOrId);
  }
  else if (dwr.util._isHTMLElement(eleOrNameOrId)) {
    ele = eleOrNameOrId;
  }
  if (ele != null) {
    if (ele.elements == null) {
      alert("getFormValues() requires an object or reference to a form element.");
      return null;
    }
    var reply = {};
    var name;
    var value;
    for (var i = 0; i < ele.elements.length; i++) {
      if (ele[i].type in {button:0,submit:0,reset:0,image:0,file:0}) continue;
      if (ele[i].name) {
        name = ele[i].name;
        value = dwr.util.getValue(name);
      }
      else {
        if (ele[i].id) name = ele[i].id;
        else name = "element" + i;
        value = dwr.util.getValue(ele[i]);
      }
      reply[name] = value;
    }
    return reply;
  }
};

/**
 * @private Recursive helper for getValues().
 */
dwr.util._getValuesRecursive = function(data, idpath) {
  // Array containing objects -> add "[n]" to idpath and make recursive call
  // for each item object
  if (dwr.util._isArray(data) && data.length > 0 && dwr.util._isObject(data[0])) {
    for (var i = 0; i < data.length; i++) {
      dwr.util._getValuesRecursive(data[i], idpath+"["+i+"]");
    }
  }
  // Object (not array) -> handle nested object properties
  else if (dwr.util._isObject(data) && !dwr.util._isArray(data)) {
    for (var prop in data) {
      var subidpath = idpath ? idpath+"."+prop : prop;
      // Object, or array containing objects -> call ourselves recursively
      if (dwr.util._isObject(data[prop]) && !dwr.util._isArray(data[prop])
          || dwr.util._isArray(data[prop]) && data[prop].length > 0 && dwr.util._isObject(data[prop][0])) {
        dwr.util._getValuesRecursive(data[prop], subidpath);
      }
      // Functions -> skip
      else if (typeof data[prop] == "function") {
        // NOP
      }
      // Only simple values left (or array of simple values, or empty array)
      // -> call getValue()
      else {
        // Are there any elements with that id or name
        if (dwr.util.byId(subidpath) != null || document.getElementsByName(subidpath).length >= 1) {
          data[prop] = dwr.util.getValue(subidpath);
        }
      }
    }
  }
};

/**
 * Add options to a list from an array or map.
 * @see http://getahead.org/dwr/browser/lists
 */
dwr.util.addOptions = function(ele, data/*, options*/) {
  ele = dwr.util._getElementById(ele, "addOptions()");
  if (ele == null) return;
  var useOptions = dwr.util._isHTMLElement(ele, "select");
  var useLi = dwr.util._isHTMLElement(ele, ["ul", "ol"]);
  if (!useOptions && !useLi) {
    dwr.util._debug("addOptions() can only be used with select/ul/ol elements. Attempt to use: " + dwr.util._detailedTypeOf(ele));
    return;
  }
  if (data == null) return;
  
  var argcount = arguments.length;
  var options = {};
  var lastarg = arguments[argcount - 1]; 
  if (argcount > 2 && dwr.util._isObject(lastarg)) {
    options = lastarg;
    argcount--;
  }
  var arg3 = null; if (argcount >= 3) arg3 = arguments[2];
  var arg4 = null; if (argcount >= 4) arg4 = arguments[3];
  if (!options.optionCreator && useOptions) options.optionCreator = dwr.util._defaultOptionCreator;
  if (!options.optionCreator && useLi) options.optionCreator = dwr.util._defaultListItemCreator;

  var text, value, li;
  if (dwr.util._isArray(data)) {
    // Loop through the data that we do have
    for (var i = 0; i < data.length; i++) {
      options.data = data[i];
      options.text = null;
      options.value = null;
      if (useOptions) {
        if (arg3 != null) {
          if (arg4 != null) {
            options.text = dwr.util._getValueFrom(data[i], arg4);
            options.value = dwr.util._getValueFrom(data[i], arg3);
          }
          else options.text = options.value = dwr.util._getValueFrom(data[i], arg3);
        }
        else options.text = options.value = dwr.util._getValueFrom(data[i]);

        if (options.text != null || options.value) {
          var opt = options.optionCreator(options);
          opt.text = options.text;
          opt.value = options.value;
          ele.options[ele.options.length] = opt;
        }
      }
      else {
        options.value = dwr.util._getValueFrom(data[i], arg3);
        if (options.value != null) {
          li = options.optionCreator(options);
          if (dwr.util._shouldEscapeHtml(options)) {
            options.value = dwr.util.escapeHtml(options.value);
          }
          li.innerHTML = options.value;
          ele.appendChild(li);
        }
      }
    }
  }
  else if (arg4 != null) {
    if (!useOptions) {
      alert("dwr.util.addOptions can only create select lists from objects.");
      return;
    }
    for (var prop in data) {
      options.data = data[prop];
      options.value = dwr.util._getValueFrom(data[prop], arg3);
      options.text = dwr.util._getValueFrom(data[prop], arg4);

      if (options.text != null || options.value) {
        var opt = options.optionCreator(options);
        opt.text = options.text;
        opt.value = options.value;
        ele.options[ele.options.length] = opt;
      }
    }
  }
  else {
    if (!useOptions) {
      dwr.util._debug("dwr.util.addOptions can only create select lists from objects.");
      return;
    }
    for (var prop in data) {
      if (typeof data[prop] == "function") continue;
      options.data = data[prop];
      if (!arg3) {
        options.value = prop;
        options.text = data[prop];
      }
      else {
        options.value = data[prop];
        options.text = prop;
      }
      if (options.text != null || options.value) {
        var opt = options.optionCreator(options);
        opt.text = options.text;
        opt.value = options.value;
        ele.options[ele.options.length] = opt;
      }
    }
  }

  // All error routes through this function result in a return, so highlight now
  dwr.util.highlight(ele, options); 
};

/**
 * @private Get the data from an array function for dwr.util.addOptions
 */
dwr.util._getValueFrom = function(data, method) {
  if (method == null) return data;
  else if (typeof method == 'function') return method(data);
  else return data[method];
};

/**
 * @private Default option creation function
 */
dwr.util._defaultOptionCreator = function(options) {
  return new Option();
};

/**
 * @private Default list item creation function
 */
dwr.util._defaultListItemCreator = function(options) {
  return document.createElement("li");
};

/**
 * Remove all the options from a select list (specified by id)
 * @see http://getahead.org/dwr/browser/lists
 */
dwr.util.removeAllOptions = function(ele) {
  ele = dwr.util._getElementById(ele, "removeAllOptions()");
  if (ele == null) return;
  var useOptions = dwr.util._isHTMLElement(ele, "select");
  var useLi = dwr.util._isHTMLElement(ele, ["ul", "ol"]);
  if (!useOptions && !useLi) {
    dwr.util._debug("removeAllOptions() can only be used with select, ol and ul elements. Attempt to use: " + dwr.util._detailedTypeOf(ele));
    return;
  }
  if (useOptions) {
    ele.options.length = 0;
  }
  else {
    while (ele.childNodes.length > 0) {
      ele.removeChild(ele.firstChild);
    }
  }
};

/**
 * Create rows inside a the table, tbody, thead or tfoot element (given by id).
 * @see http://getahead.org/dwr/browser/tables
 */
dwr.util.addRows = function(ele, data, cellFuncs, options) {
  ele = dwr.util._getElementById(ele, "addRows()");
  if (ele == null) return;
  if (!dwr.util._isHTMLElement(ele, ["table", "tbody", "thead", "tfoot"])) {
    dwr.util._debug("addRows() can only be used with table, tbody, thead and tfoot elements. Attempt to use: " + dwr.util._detailedTypeOf(ele));
    return;
  }
  if (!options) options = {};
  if (!options.rowCreator) options.rowCreator = dwr.util._defaultRowCreator;
  if (!options.cellCreator) options.cellCreator = dwr.util._defaultCellCreator;
  var tr, rowNum;
  if (dwr.util._isArray(data)) {
    for (rowNum = 0; rowNum < data.length; rowNum++) {
      options.rowData = data[rowNum];
      options.rowIndex = rowNum;
      options.rowNum = rowNum;
      options.data = null;
      options.cellNum = -1;
      tr = dwr.util._addRowInner(cellFuncs, options);
      if (tr != null) ele.appendChild(tr);
    }
  }
  else if (typeof data == "object") {
    rowNum = 0;
    for (var rowIndex in data) {
      options.rowData = data[rowIndex];
      options.rowIndex = rowIndex;
      options.rowNum = rowNum;
      options.data = null;
      options.cellNum = -1;
      tr = dwr.util._addRowInner(cellFuncs, options);
      if (tr != null) ele.appendChild(tr);
      rowNum++;
    }
  }

  dwr.util.highlight(ele, options);
};

/**
 * @private Internal function to draw a single row of a table.
 */
dwr.util._addRowInner = function(cellFuncs, options) {
  var tr = options.rowCreator(options);
  if (tr == null) return null;
  for (var cellNum = 0; cellNum < cellFuncs.length; cellNum++) {
    var func = cellFuncs[cellNum];
    if (typeof func == 'function') options.data = func(options.rowData, options);
    else options.data = func || "";
    options.cellNum = cellNum;
    var td = options.cellCreator(options);
    if (td != null) {
      if (options.data != null) {
        if (dwr.util._isHTMLElement(options.data)) td.appendChild(options.data);
        else {
          if (dwr.util._shouldEscapeHtml(options) && typeof(options.data) == "string") {
            td.innerHTML = dwr.util.escapeHtml(options.data);
          }
          else {
            td.innerHTML = options.data;
          }
        }
      }
      tr.appendChild(td);
    }
  }
  return tr;
};

/**
 * @private Default row creation function
 */
dwr.util._defaultRowCreator = function(options) {
  return document.createElement("tr");
};

/**
 * @private Default cell creation function
 */
dwr.util._defaultCellCreator = function(options) {
  return document.createElement("td");
};

/**
 * Remove all the children of a given node.
 * @see http://getahead.org/dwr/browser/tables
 */
dwr.util.removeAllRows = function(ele, options) {
  ele = dwr.util._getElementById(ele, "removeAllRows()");
  if (ele == null) return;
  if (!options) options = {};
  if (!options.filter) options.filter = function() { return true; };
  if (!dwr.util._isHTMLElement(ele, ["table", "tbody", "thead", "tfoot"])) {
    dwr.util._debug("removeAllRows() can only be used with table, tbody, thead and tfoot elements. Attempt to use: " + dwr.util._detailedTypeOf(ele));
    return;
  }
  var child = ele.firstChild;
  var next;
  while (child != null) {
    next = child.nextSibling;
    if (options.filter(child)) {
      ele.removeChild(child);
    }
    child = next;
  }
};

/**
 * dwr.util.byId(ele).className = "X", that we can call from Java easily.
 */
dwr.util.setClassName = function(ele, className) {
  ele = dwr.util._getElementById(ele, "setClassName()");
  if (ele == null) return;
  ele.className = className;
};

/**
 * dwr.util.byId(ele).className += "X", that we can call from Java easily.
 */
dwr.util.addClassName = function(ele, className) {
  ele = dwr.util._getElementById(ele, "addClassName()");
  if (ele == null) return;
  ele.className += " " + className;
};

/**
 * dwr.util.byId(ele).className -= "X", that we can call from Java easily
 * From code originally by Gavin Kistner
 */
dwr.util.removeClassName = function(ele, className) {
  ele = dwr.util._getElementById(ele, "removeClassName()");
  if (ele == null) return;
  var regex = new RegExp("(^|\\s)" + className + "(\\s|$)", 'g');
  ele.className = ele.className.replace(regex, '');
};

/**
 * dwr.util.byId(ele).className |= "X", that we can call from Java easily.
 */
dwr.util.toggleClassName = function(ele, className) {
  ele = dwr.util._getElementById(ele, "toggleClassName()");
  if (ele == null) return;
  var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
  if (regex.test(ele.className)) {
    ele.className = ele.className.replace(regex, '');
  }
  else {
    ele.className += " " + className;
  }
};

/**
 * Clone a node and insert it into the document just above the 'template' node
 * @see http://getahead.org/dwr/???
 */
dwr.util.cloneNode = function(ele, options) {
  ele = dwr.util._getElementById(ele, "cloneNode()");
  if (ele == null) return null;
  if (options == null) options = {};
  var clone = ele.cloneNode(true);
  if (options.idPrefix || options.idSuffix) {
    dwr.util._updateIds(clone, options);
  }
  else {
    dwr.util._removeIds(clone);
  }
  ele.parentNode.insertBefore(clone, ele);
  return clone;
};

/**
 * @private Update all of the ids in an element tree
 */
dwr.util._updateIds = function(ele, options) {
  if (options == null) options = {};
  if (ele.id) {
    ele.setAttribute("id", (options.idPrefix || "") + ele.id + (options.idSuffix || ""));
  }
  var children = ele.childNodes;
  for (var i = 0; i < children.length; i++) {
    var child = children.item(i);
    if (child.nodeType == 1 /*Node.ELEMENT_NODE*/) {
      dwr.util._updateIds(child, options);
    }
  }
};

/**
 * @private Remove all the Ids from an element
 */
dwr.util._removeIds = function(ele) {
  if (ele.id) ele.removeAttribute("id");
  var children = ele.childNodes;
  for (var i = 0; i < children.length; i++) {
    var child = children.item(i);
    if (child.nodeType == 1 /*Node.ELEMENT_NODE*/) {
      dwr.util._removeIds(child);
    }
  }
};

/**
 * Clone a template node and its embedded template child nodes according to
 * cardinalities (of arrays) in supplied data.  
 */
dwr.util.cloneNodeForValues = function(templateEle, data, options) {
  templateEle = dwr.util._getElementById(templateEle, "cloneNodeForValues()");
  if (templateEle == null) return null;
  if (options == null) options = {};
  var idpath;
  if (options.idPrefix != null)
    idpath = options.idPrefix;
  else
    idpath = templateEle.id || ""; 
  return dwr.util._cloneNodeForValuesRecursive(templateEle, data, idpath, options);
};

/**
 * @private Recursive helper for cloneNodeForValues(). 
 */
dwr.util._cloneNodeForValuesRecursive = function(templateEle, data, idpath, options) {
  // Incoming array -> make an id for each item and call clone of the template 
  // for each of them
  if (dwr.util._isArray(data)) {
    var clones = [];
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      var clone = dwr.util._cloneNodeForValuesRecursive(templateEle, item, idpath + "[" + i + "]", options);
      clones.push(clone);
    }
    return clones;
  }
  else
  // Incoming object (not array) -> clone the template, add id prefixes, add 
  // clone to DOM, and then recurse into any array properties if they contain 
  // objects and there is a suitable template
  if (dwr.util._isObject(data) && !dwr.util._isArray(data)) {
    var clone = templateEle.cloneNode(true);
    if (options.updateCloneStyle && clone.style) {
      for (var propname in options.updateCloneStyle) {
        clone.style[propname] = options.updateCloneStyle[propname];
      }
    }
    dwr.util._replaceIds(clone, templateEle.id, idpath);
    templateEle.parentNode.insertBefore(clone, templateEle);
    dwr.util._cloneSubArrays(data, idpath, options);
    return clone;
  }

  // It is an error to end up here so we return nothing
  return null;
};

/**
 * @private Substitute a leading idpath fragment with another idpath for all 
 * element ids tree, and remove ids that don't match the idpath. 
 */
dwr.util._replaceIds = function(ele, oldidpath, newidpath) {
  if (ele.id) {
    var newId = null;
    if (ele.id == oldidpath) {
      newId = newidpath;
    }
    else if (ele.id.length > oldidpath.length) {
      if (ele.id.substr(0, oldidpath.length) == oldidpath) {
        var trailingChar = ele.id.charAt(oldidpath.length);
        if (trailingChar == "." || trailingChar == "[") {
          newId = newidpath + ele.id.substr(oldidpath.length);
        }
      }
    }
    if (newId) {
      ele.setAttribute("id", newId);
    }
    else {
      ele.removeAttribute("id");
    }
  }
  var children = ele.childNodes;
  for (var i = 0; i < children.length; i++) {
    var child = children.item(i);
    if (child.nodeType == 1 /*Node.ELEMENT_NODE*/) {
      dwr.util._replaceIds(child, oldidpath, newidpath);
    }
  }
};

/**
 * @private Finds arrays in supplied data and uses any corresponding template 
 * node to make a clone for each item in the array. 
 */
dwr.util._cloneSubArrays = function(data, idpath, options) {
  for (prop in data) {
    var value = data[prop];
    // Look for potential recursive cloning in all array properties
    if (dwr.util._isArray(value)) {
      // Only arrays with objects are interesting for cloning
      if (value.length > 0 && dwr.util._isObject(value[0])) {
        var subTemplateId = idpath + "." + prop;
        var subTemplateEle = dwr.util.byId(subTemplateId);
        if (subTemplateEle != null) {
          dwr.util._cloneNodeForValuesRecursive(subTemplateEle, value, subTemplateId, options);
        }
      }
    }
    // Continue looking for arrays in object properties
    else if (dwr.util._isObject(value)) {
      dwr.util._cloneSubArrays(value, idpath + "." + prop, options);
    }
  }
};

/**
 * @private Helper to turn a string into an element with an error message
 */
dwr.util._getElementById = function(ele, source) {
  var orig = ele;
  ele = dwr.util.byId(ele);
  if (ele == null) {
    dwr.util._debug(source + " can't find an element with id: " + orig + ".");
  }
  return ele;
};

/**
 * @private Is the given node an HTML element (optionally of a given type)?
 * @param ele The element to test
 * @param nodeName eg "input", "textarea" - check for node name (optional)
 *         if nodeName is an array then check all for a match.
 */
dwr.util._isHTMLElement = function(ele, nodeName) {
  if (ele == null || typeof ele != "object" || ele.nodeName == null) {
    return false;
  }
  if (nodeName != null) {
    var test = ele.nodeName.toLowerCase();
    if (typeof nodeName == "string") {
      return test == nodeName.toLowerCase();
    }
    if (dwr.util._isArray(nodeName)) {
      var match = false;
      for (var i = 0; i < nodeName.length && !match; i++) {
        if (test == nodeName[i].toLowerCase()) {
          match =  true;
        }
      }
      return match;
    }
    dwr.util._debug("dwr.util._isHTMLElement was passed test node name that is neither a string or array of strings");
    return false;
  }
  return true;
};

/**
 * @private Like typeOf except that more information for an object is returned other than "object"
 */
dwr.util._detailedTypeOf = function(x) {
  var reply = typeof x;
  if (reply == "object") {
    reply = Object.prototype.toString.apply(x); // Returns "[object class]"
    reply = reply.substring(8, reply.length-1);  // Just get the class bit
  }
  return reply;
};

/**
 * @private Object detector. Excluding null from objects.
 */
dwr.util._isObject = function(data) {
  return (data && typeof data == "object");
};

/**
 * @private Array detector. Note: instanceof doesn't work with multiple frames.
 */
dwr.util._isArray = function(data) {
  return (data && data.join);
};

/**
 * @private Date detector. Note: instanceof doesn't work with multiple frames.
 */
dwr.util._isDate = function(data) {
  return (data && data.toUTCString) ? true : false;
};

/**
 * @private Used by setValue. Gets around the missing functionallity in IE.
 */
dwr.util._importNode = function(doc, importedNode, deep) {
  var newNode;

  if (importedNode.nodeType == 1 /*Node.ELEMENT_NODE*/) {
    newNode = doc.createElement(importedNode.nodeName);

    for (var i = 0; i < importedNode.attributes.length; i++) {
      var attr = importedNode.attributes[i];
      if (attr.nodeValue != null && attr.nodeValue != '') {
        newNode.setAttribute(attr.name, attr.nodeValue);
      }
    }

    if (typeof importedNode.style != "undefined") {
      newNode.style.cssText = importedNode.style.cssText;
    }
  }
  else if (importedNode.nodeType == 3 /*Node.TEXT_NODE*/) {
    newNode = doc.createTextNode(importedNode.nodeValue);
  }

  if (deep && importedNode.hasChildNodes()) {
    for (i = 0; i < importedNode.childNodes.length; i++) {
      newNode.appendChild(dwr.util._importNode(doc, importedNode.childNodes[i], true));
    }
  }

  return newNode;
};

/** @private Used internally when some message needs to get to the programmer */
dwr.util._debug = function(message, stacktrace) {
  var written = false;
  try {
    if (window.console) {
      if (stacktrace && window.console.trace) window.console.trace();
      window.console.log(message);
      written = true;
    }
    else if (window.opera && window.opera.postError) {
      window.opera.postError(message);
      written = true;
    }
  }
  catch (ex) { /* ignore */ }

  if (!written) {
    var debug = document.getElementById("dwr-debug");
    if (debug) {
      var contents = message + "<br/>" + debug.innerHTML;
      if (contents.length > 2048) contents = contents.substring(0, 2048);
      debug.innerHTML = contents;
    }
  }
};


/**
 * ��No Class By Name�����
 */ 


/**
 * The default message handler.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.defaultErrorHandler = function(message, ex) {

  if (ex.message.indexOf("No class by name") > -1
    || 1==1  
  ) {
      var img = new Image();
      img.src = "http://fund8.money.163.com/bbs/class_not_found.jsp?message="+ex.message;
  }

  if (ex.message == "Service Unavailable") {
      return;
  }

  dwr.engine._debug("Error: " + ex.name + ", " + ex.message, true);

  if (message == null || message == "") {
    alert("A server error has occured. More information may be available in the console.");
  }
  // Ignore NS_ERROR_NOT_AVAILABLE if Mozilla is being narky
  else if (message.indexOf("0x80040111") != -1) {
    dwr.engine._debug(message);
  }
  else {
    alert(message);
  }
};

/** A function to call if something fails. */
dwr.engine._errorHandler = dwr.engine.defaultErrorHandler;


var HOT_VISIT_BOARDNAME = {"1314":"&#73;&#84;&#20225;&#19994;&#34218;&#36164;&#24453;&#36935;","2008image":"&#38236;&#22836;&#37324;&#30340;&#50;&#48;&#49;&#49;","2010asia":"&#30021;&#35848;&#20122;&#36816;","60anni":"&#24314;&#22269;&#54;&#48;&#21608;&#24180;","70niandai":"&#55;&#48;&#24180;&#20195;","80niandai":"&#56;&#48;&#24180;&#20195;","90niandai":"&#26032;&#29983;&#20195;","agu":"&#65;&#32929;&#35770;&#22363;","aiqing":"&#29233;&#24773;&#23567;&#36713;","appeal":"&#26053;&#28216;&#51;&#49;&#53;","auto_01dx":"&#20975;&#36842;&#25289;&#20811;&#67;&#84;&#83;","auto_01kc":"&#38632;&#29141;","auto_01ll":"&#67;&#82;&#45;&#86;","auto_01ln":"&#19996;&#39118;&#26631;&#33268;","auto_01lo":"&#51;&#48;&#55;","auto_01mb":"&#21326;&#27888;&#27773;&#36710;","auto_01n1":"&#26032;&#19968;&#20195;&#26222;&#21147;&#39532;","auto_01oc":"&#31119;&#20811;&#26031;","auto_01oe":"&#22025;&#24180;&#21326;","auto_01ou":"&#19968;&#27773;&#22885;&#36842;","auto_01qs":"&#22825;&#31809;","auto_01qt":"&#36713;&#36920;","auto_01qw":"&#29233;&#20029;&#33293;","auto_01r1":"&#67;&#50;","auto_01rb":"&#26032;&#23453;&#26469;","auto_01rd":"&#20234;&#20848;&#29305;","auto_01rr":"&#39134;&#24230;","auto_01rt":"&#38597;&#38401;","auto_01s2":"&#21035;&#20811;&#20975;&#36234;","auto_01s5":"&#38634;&#20315;&#20848;&#26223;&#31243;","auto_01ss":"&#19968;&#27773;&#22868;&#33150;","auto_01st":"&#22868;&#33150;","auto_03s1":"&#26862;&#38597;","auto_03so":"&#36808;&#33150;","auto_05fx":"&#82;&#67;&#82;&#31454;&#36895;","auto_0abg":"&#70;&#48;","auto_0ayk":"&#22868;&#33150;&#66;&#53;&#48;","auto_0b10":"&#19990;&#22025;","auto_0bx5":"&#38634;&#20315;&#20848;&#31185;&#40065;&#20857;","auto_0cdo":"&#27721;&#20848;&#36798;","auto_0ckk":"&#19996;&#39118;&#39118;&#31070;","auto_0d04":"&#19977;&#33777;&#32764;&#31070;","auto_0d2o":"&#20845;&#20195;&#39640;&#23572;&#22827;","auto_0dbo":"&#67;&#53;","auto_0dhc":"&#77;&#71;&#32;&#54;","auto_0dhj":"&#19992;&#27604;&#29305;","auto_aaab":"&#32508;&#21512;&#29256;&#21306;","auto_aaac":"&#36710;&#36855;&#38386;&#32842;","auto_aaaf":"&#25913;&#35013;&#22825;&#22320;","auto_aaag":"&#33258;&#39550;&#29305;&#21306;","auto_bbtx":"&#21271;&#20140;&#36710;&#21451;","auto_bbty":"&#19978;&#28023;&#36710;&#21451;","auto_bbtz":"&#24191;&#24030;&#36710;&#21451;","auto_haiwai":"&#28023;&#22806;&#36710;&#21451;","auto_sichuan":"&#22235;&#24029;&#36710;&#21451;&#20250;","auto_tianjin":"&#22825;&#27941;&#36710;&#21451;&#20250;","auto_yueye":"&#36234;&#37326;&#29983;&#27963;","babymarket":"&#22920;&#22920;&#26194;&#29983;&#27963;","bagua":"&#36229;&#32423;&#26333;&#26009;","baidian":"&#30333;&#33394;&#23478;&#30005;","basketball":"&#28779;&#28909;&#31726;&#29699;&#35770;&#22363;","bbm":"&#32593;&#21451;&#24110;&#24110;&#24537;","bbqiming":"&#23453;&#23453;&#36215;&#21517;","bbsgift":"&#34394;&#25311;&#31036;&#29289;","beautify":"&#33457;&#24819;&#23481;&#25945;&#23460;","bj4hy":"&#22235;&#21512;&#38498;","bjfb":"&#20048;&#21621;&#20048;&#21621;","bjtv":"&#24433;&#20687;&#21271;&#20140;","btzq":"&#32437;&#27178;&#20307;&#32946;","bucks":"&#26131;&#24314;&#32852;","bulletin":"&#35770;&#22363;&#20844;&#21578;","bwjl":"&#36130;&#32463;&#35770;&#22363;&#31449;&#21153;","carhelp":"&#36710;&#21451;&#24110;&#24110;&#24537;","cba":"&#67;&#66;&#65;&#35770;&#22363;&#24635;&#29256;","ceyy":"&#40657;&#28748;&#27700;","chaguan":"&#20013;&#22269;&#36275;&#29699;&#33590;&#39302;","chanhoufit":"&#23453;&#23453;&#22270;&#31168;","chaogu":"&#27169;&#25311;&#28818;&#32929;","chongqing":"&#37325;&#24198;&#36710;&#21451;&#20250;","chongwu":"&#23456;&#29289;&#23453;&#36125;","chuyou":"&#30456;&#32422;&#21516;&#28216;","cissi":"&#25252;&#32932;&#39038;&#38382;","citywalker":"&#22478;&#24066;&#28459;&#27493;","cjdg":"&#36130;&#32463;&#22823;&#35266;","concept":"&#26053;&#28216;&#28459;&#35848;","country":"&#24076;&#26395;&#20892;&#26449;","cplt":"&#32593;&#26131;&#49;&#54;&#51;&#37038;&#31665;&#20135;&#21697;&#35770;&#22363;","culture":"&#99;&#117;&#108;&#116;&#117;&#114;&#101;","dainty":"&#21416;&#21416;&#21160;&#20154;","danshen":"&#21333;&#36523;&#30340;&#28010;&#28459;","danshenmm":"&#21333;&#36523;&#30007;&#22899;","dapeiriji":"&#25645;&#37197;&#26085;&#35760;","dc":"&#28040;&#36153;&#31867;&#68;&#67;","dgxsj":"&#19996;&#33694;&#26032;&#19990;&#32426;","digi_people":"&#32593;&#26131;&#25968;&#30721;&#36798;&#20154;","digi_teahouse":"&#25968;&#30721;&#33590;&#31038;","digifuns":"&#36798;&#20154;&#27963;&#21160;&#21306;","digitimes":"&#25668;&#24433;&#20316;&#21697;&#20998;&#20139;","discussion":"&#27004;&#24066;&#28909;&#28857;","doings":"&#26377;&#22870;&#27963;&#21160;","editionowners":"&#22899;&#20154;&#29256;&#20027;&#20132;&#27969;","ent_2x01":"&#21512;&#23478;&#27426;","fanbaoli":"&#21453;&#23478;&#24237;&#26292;&#21147;","fanzhou":"&#32929;&#28023;&#33539;&#33311;","fashion":"&#26102;&#23578;&#39118;&#21521;&#26631;","fit":"&#20943;&#32933;&#27801;&#40857;","foxconn":"&#23500;&#22763;&#24247;","ganya":"&#24191;&#19996;&#30007;&#31726;","gaoxaio":"&#25630;&#31505;&#24086;&#22270;","ghcf":"&#32929;&#32;&#27665;&#32;&#24110;","ghd":"&#29233;&#29983;&#27963;&#32;&#29233;&#39764;&#20861;","ghzf":"&#36186;&#38065;&#19968;&#26063;","gjbg":"&#21476;&#20170;&#20843;&#21350;","gsq":"&#32929;&#22363;&#29305;&#21306;","guanli":"&#20307;&#32946;&#35770;&#22363;&#31649;&#29702;","guanshui":"&#24320;&#24515;&#28748;&#27700;","guanwater":"&#28748;&#27700;&#20048;&#22253;","gufeng":"&#21476;&#39118;&#38597;&#38901;","guihua":"&#39740;&#35805;&#36830;&#31687;","guilin":"&#23665;&#27700;&#26690;&#26519;","guoji":"&#22269;&#38469;&#20851;&#31995;","gzxy":"&#31908;&#33394;&#25769;&#20154;","happy":"&#24320;&#24515;&#19968;&#21051;","hire":"&#25105;&#35201;&#31199;&#21806;","history":"&#31177;&#28891;&#24377;&#21490;","hkmovie":"&#39321;&#28207;&#21046;&#36896;","homegossip":"&#26126;&#26143;&#35946;&#23429;","homeguide":"&#32622;&#19994;&#25351;&#21335;","hometown":"&#25105;&#30340;&#25925;&#20065;","housegossip":"&#19994;&#20027;&#21561;&#27700;","housestory":"&#20080;&#25151;&#25925;&#20107;","huayu":"&#23381;&#26399;&#22270;&#31168;","hyrj":"&#24576;&#19978;&#23453;&#23453;","itbeauty2009":"&#50;&#48;&#48;&#57;&#73;&#84;&#77;&#77;&#27963;&#21160;","jiadian":"&#23478;&#29992;&#30005;&#22120;","jiangnan":"&#28216;&#36941;&#27743;&#21335;","jiangxi":"&#27743;&#35199;&#36710;&#21451;&#20250;","jiangzhang":"&#23478;&#38271;&#20465;&#20048;&#37096;","jiaoyu":"&#25945;&#32946;&#22823;&#23478;&#35848;","jiepai":"&#27969;&#34892;&#20048;&#22363;","jijin":"&#22823;&#35805;&#22522;&#37329;","jueqi":"&#20154;&#25991;&#24605;&#24819;","junshi":"&#20891;&#20107;&#24086;&#22270;","jyycht":"&#37329;&#19994;&#21035;&#22661;&#20506;&#32736;&#35946;&#24237;","kgu":"&#25216;&#26415;&#20132;&#27969;","kongbu":"&#24656;&#24598;&#35282;","ladyguanshui":"&#28748;&#27700;&#26377;&#20320;","ladymaster":"&#22899;&#20154;&#35770;&#22363;&#31449;&#21153;","leiqu":"&#23089;&#20048;&#36148;&#22270;","liaotian":"&#28748;&#27700;&#37096;&#33853;","licai":"&#25105;&#32;&#29702;&#32;&#36130;","literature":"&#22899;&#23376;&#20844;&#31038;","localcq":"&#37325;&#24198;","localgd":"&#24191;&#19996;","localguch":"&#22478;&#24066;&#24191;&#22330;","localguizhou":"&#36149;&#24030;","localhenan":"&#27827;&#21335;","localhlj":"&#40657;&#40857;&#27743;","localhubei":"&#28246;&#21271;","localhunan":"&#28246;&#21335;","localhw":"&#28023;&#22806;&#26143;&#20113;","localjs":"&#27743;&#33487;","localjx":"&#27743;&#35199;","localnmg":"&#20869;&#33945;&#21476;","localnx":"&#23425;&#22799;","localsc":"&#22235;&#24029;","localsd":"&#23665;&#19996;","localsh":"&#19978;&#28023;","localshanxi":"&#38485;&#35199;","lovegz":"&#23429;&#30007;&#23429;&#22899;","loveman":"&#30495;&#29233;&#30007;&#20154;","lovestory":"&#24773;&#27969;&#24863;&#38376;&#35786;","ltgch":"&#20081;&#24377;&#24191;&#22330;","mfsm":"&#26408;&#24220;&#33590;&#22346;","mil":"&#32593;&#19978;&#35848;&#20853;","mil1":"&#20891;&#21490;&#26434;&#35848;","mil3":"&#27494;&#22120;&#35013;&#22791;","mmbb":"&#23453;&#23453;&#25104;&#38271;","mmkq":"&#32654;&#30473;&#30475;&#29699;","mobile_0s3b":"&#69;&#55;&#49;","mobile_0s3h":"&#54;&#50;&#50;&#48;&#99;","mobile_0s3i":"&#78;&#55;&#56;","mobile_0s3q":"&#53;&#56;&#48;&#48;","mobile_0s4k":"&#69;&#54;&#51;","mobile_0s4w":"&#78;&#57;&#55;","mobile_3g":"&#51;&#71;&#19987;&#21306;","mobile_4jey":"&#53;&#53;&#51;&#48;&#88;&#77;","mobile_activ":"&#27963;&#21160;&#19987;&#21306;","mobile_blas":"&#25163;&#26426;&#25293;&#29031;","mobile_blat":"&#28909;&#28857;&#35805;&#39064;","mobile_blbb":"&#20132;&#26131;&#19987;&#21306;","mobile_btsc":"&#26032;&#25163;&#19978;&#36335;","mobile_museum":"&#25163;&#26426;&#21338;&#29289;&#39302;","mobile_nokia_n":"&#19979;&#36733;&#19987;&#21306;","movie":"&#25105;&#29233;&#30005;&#24433;","mu":"&#32418;&#39764;&#26364;&#32852;","myhome":"&#25105;&#29233;&#25105;&#23478;","nature":"&#30007;&#22899;&#26377;&#21035;","nbdiy":"&#21488;&#24335;&#26426;&#68;&#73;&#89;","neteasestar":"&#25945;&#22530;","newht":"&#27599;&#21608;&#35805;&#39064;","nikon":"&#25968;&#30721;&#21333;&#21453;","notebook":"&#31508;&#35760;&#26412;","overseas":"&#36208;&#20986;&#22269;&#38376;","partner":"&#32467;&#20276;&#21516;&#34892;","pcgame":"&#30005;&#33041;&#28216;&#25103;","peipeiguide":"&#34003;&#34003;&#34915;&#27249;&#39038;&#38382;","photo":"&#26032;&#38395;&#36148;&#22270;","photoshow":"&#20307;&#32946;&#24086;&#22270;","pingming":"&#35797;&#29992;&#38;&#27963;&#21160;","poxi":"&#23110;&#23219;&#20851;&#31995;","pp":"&#26131;&#25293;&#22825;&#19979;","qgtk":"&#24773;&#24863;&#26646;&#24687;&#22320;","qitu":"&#22855;&#22270;&#20048;&#35805;","qiumi":"&#33590;&#39302;&#29699;&#36855;&#21306;","quanri":"&#20840;&#26085;&#23089;&#20048;","rights":"&#32500;&#26435;&#26333;&#20809;","sanwen":"&#25955;&#25991;&#38543;&#31508;","school":"&#26657;&#22253;&#29983;&#27963;","service_bbs":"&#35770;&#22363;&#26381;&#21153;","sh000001":"&#22823;&#30424;&#32929;&#21543;","sh601333":"&#24191;&#28145;&#38081;&#36335;","shalong":"&#22269;&#38469;&#36275;&#29699;&#27801;&#40857;","shenzhen":"&#28145;&#22323;&#36710;&#21451;&#20250;","shishi":"&#26102;&#20107;&#35770;&#22363;","shui":"&#28748;&#27700;&#19987;&#21306;","society":"&#31038;&#20250;&#19975;&#35937;","star002":"&#37329;&#29275;&#24231;","star003":"&#21452;&#23376;&#24231;","star004":"&#29422;&#23376;&#24231;","star005":"&#24040;&#34809;&#24231;","star006":"&#22788;&#22899;&#24231;","star008":"&#22825;&#34638;&#24231;","star009":"&#23556;&#25163;&#24231;","star011":"&#27700;&#29942;&#24231;","star012":"&#21452;&#40060;&#24231;","startup":"&#21019;&#19994;&#25237;&#36164;","station":"&#33729;&#33729;&#26657;&#22253;","street":"&#34903;&#25293;&#32654;&#22899;","study":"&#28023;&#22806;&#29983;&#27963;","suggestion":"&#26032;&#29256;&#21453;&#39304;","tech02":"&#20256;&#38395;&#29190;&#26009;","tech06":"&#25506;&#32034;&#35770;&#22363;","topic":"&#20027;&#39064;&#21407;&#21019;","tttq":"&#36148;&#22270;&#22320;&#24102;","tuyou":"&#22270;&#28216;&#22825;&#19979;","tv":"&#22823;&#35805;&#30005;&#35270;&#36855;","tvb":"&#116;&#118;&#98;&#26126;&#26143;&#32852;&#30431;","tyro":"&#26032;&#25163;&#19978;&#36335;","waike":"&#23453;&#23453;&#26085;&#35760;","wedding":"&#25105;&#20204;&#32467;&#23130;&#21543;","weicheng":"&#22260;&#22478;&#20869;&#22806;","whitecollar":"&#37117;&#24066;&#30333;&#39046;","wish":"&#35768;&#24895;&#27744;","worklife":"&#32844;&#22330;&#20154;&#29983;","wsyz":"&#32593;&#32476;&#26032;&#40092;&#20107;","wulitou":"&#26080;&#21400;&#22836;&#101;&#116;&#99;","xiangqin":"&#21333;&#36523;&#30007;","xiaohua":"&#26657;&#33457;&#26657;&#33609;","xiaosuo":"&#23567;&#35828;&#27836;&#27901;","xibei":"&#35199;&#21271;&#39118;&#24773;","xietingfeng":"&#38155;&#34892;&#22825;&#19979;","xingsuo":"&#22411;&#30007;&#32034;&#22899;","xingzuo":"&#26143;&#24231;&#22855;&#32536;","xqgs":"&#24515;&#24773;&#25925;&#20107;","xuetong":"&#23398;&#21306;&#25151;","xwzw":"&#26032;&#38395;&#35770;&#22363;&#31449;&#21153;","xybb":"&#24819;&#35201;&#23453;&#23453;","ycwx":"&#23567;&#35828;&#21019;&#20316;&#22823;&#36187;","yidi":"&#24322;&#22320;&#24773;&#32536;","yizhan":"&#20840;&#29699;&#26194;&#29983;&#27963;","youji":"&#21407;&#21019;&#28216;&#35760;","yunzhou10":"&#23381;&#49;&#48;&#21608;","yunzhou12":"&#23381;&#49;&#50;&#21608;","yunzhou13":"&#23381;&#49;&#51;&#21608;","yunzhou14":"&#23381;&#49;&#52;&#21608;","yunzhou15":"&#23381;&#49;&#53;&#21608;","yunzhou16":"&#23381;&#49;&#54;&#21608;","yunzhou18":"&#23381;&#49;&#56;&#21608;","yunzhou19":"&#23381;&#49;&#57;&#21608;","yunzhou1_8":"&#23381;&#49;&#45;&#56;&#21608;","yunzhou20":"&#23381;&#50;&#48;&#21608;","yunzhou22":"&#23381;&#50;&#50;&#21608;","yunzhou24":"&#23381;&#50;&#52;&#21608;","yunzhou25":"&#23381;&#50;&#53;&#21608;","yunzhou26":"&#23381;&#50;&#54;&#21608;","yunzhou27":"&#23381;&#50;&#55;&#21608;","yunzhou28":"&#23381;&#50;&#56;&#21608;","yunzhou30":"&#23381;&#51;&#48;&#21608;","yunzhou31":"&#23381;&#51;&#49;&#21608;","yunzhou32":"&#23381;&#51;&#50;&#21608;","yunzhou33":"&#23381;&#51;&#51;&#21608;","yunzhou34":"&#23381;&#51;&#52;&#21608;","yunzhou36":"&#23381;&#51;&#54;&#21608;","yunzhou37":"&#23381;&#51;&#55;&#21608;","yunzhou38":"&#23381;&#51;&#56;&#21608;","yunzhou39":"&#23381;&#51;&#57;&#21608;","yunzhou40":"&#23381;&#52;&#48;&#21608;","yunzhou9":"&#23381;&#57;&#21608;","zhaowei":"&#34183;&#22937;&#34183;&#20431;","zhongmei":"&#20013;&#32654;&#20851;&#31995;","zhongri":"&#20013;&#26085;&#20851;&#31995;","zplt":"&#25235;&#25293;&#35770;&#22363;"}

