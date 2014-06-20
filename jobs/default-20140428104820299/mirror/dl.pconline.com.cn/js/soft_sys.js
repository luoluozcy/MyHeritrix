function isLogin(){
	if (!document.cookie.match(/(^|; )common_session_id=[^;]+/)) {
		return false;
	}
	return true;
}

function get_url(m,mId,cId){
	 if(navigator.userAgent.indexOf("MSIE")>0) {
        //return SM_ROOT+"/service/get_soft_info.jsp?m="+m+"&mId="+mId+"&cId="+cId+"&format=json"; 
        return SM_ROOT+"/service/get_soft_info.jsp?m="+m+"&mId="+mId+"&cId="+cId+"&format=json&callback=?"; 
     }else if(navigator.userAgent.indexOf("Firefox")>0){ 
        return SM_ROOT+"/service/get_soft_info.jsp?m="+m+"&mId="+mId+"&cId="+cId+"&format=json&callback=?"; 
     }else {
        return SM_ROOT+"/service/get_soft_info.jsp?m="+m+"&mId="+mId+"&cId="+cId+"&format=json&callback=?"; 
     }
}

function sm_collect(mId, cId){	
	if (!isLogin()) {
		popOpen();
	}else{
		var url = get_url('collect',mId,cId); 
		var data={time:Math.random()}; 
		$.getJSON(url, data, function(responseText){ 
			if (responseText.msg == -1){
				popOpen();
			}else if (responseText.msg == 1){
				alert("����������ڣ�������ѡ��");
			}else if (responseText.msg == 2){
				alert("�����ղظ�����������ظ��ղ�");//���ղظ����
			}else if (responseText.msg == 3){
				changeLoginStyle(responseText,mId);
				keepIt();//�ղسɹ�
			}
		}); 
	}
}

function sm_focus(mId, cId){
	if (!isLogin()) {
		popOpen();
	}else{
		var url = get_url('focus',mId,cId); 
		var data={time:Math.random()}; 
		$.getJSON(url, data, function(responseText){
			if (responseText.msg == -1){
				popOpen();
			}else if (responseText.msg == 1){
				alert("�ó��̲����ڣ�������ѡ��");
			}else if (responseText.msg == 2){
				alert("���ѹ�ע�ó��̣������ظ����");//�ѹ�ע�����
			}else if (responseText.msg == 3){
				changeLoginStyle(responseText,mId);
				attention();//��ע�ɹ�
			}
		}); 
	}	
}

function sm_select(mId, cId){
	if (!isLogin()) {
		return false;
	}
	var url = get_url('select',mId,cId);
	var data={time:Math.random()}; 
	$.getJSON(url, data, function(responseText){ 
		changeLoginStyle(responseText,mId);
	}); 
}

function sm_is_collect(mId, cId){
	if (!isLogin()) {
		return false;
	}
	var url = get_url('is_collect',mId,cId);
	var data={time:Math.random()}; 
	$.getJSON(url, data, function(responseText){ 
		if (responseText.success){			
			if (responseText.collectId > 0){
				collect_hide(mId);
			}
		}
	}); 
}

function sm_download(mId){
	var url = get_url('download',mId,0);
	var data={time:Math.random()}; 
	$.getJSON(url, data, function(responseText){ 
	}); 
}

function zhuan_qu(){
	if(!isLogin()){
		popOpen();
		return false;
	}else{
		location.href=SM_ROOT+"/my_focus.jsp";
	}
}

function changeLoginStyle(data,mId){
	if (data.success){
		login_hide();
		$("#_drId").val(data.drId); //���ؼ�¼��Ϣ������Ѿ������˸��������ô���������������ʱ�ͺ��ԡ�
		
		var str = "<a href=\"http://my.pconline.com.cn/"+data.accountId+"\" target=\"_blank\">"
			+ "<img height=\"25\" width=\"25\" src=\"http://i1.3conline.com/images/upload/upc/face/"+data.picDir+""+data.accountId+"_50x50\"></a>"
			+ " <a href=\"http://my.pconline.com.cn/"+data.accountId+"\" target=\"_blank\">"+data.accountName+"</a> <a href=\""+SM_ROOT+"\" target=\"_blank\" class=\"blue\">�ҵ��������</a>"
			+ " <a href=\""+SM_ROOT+"/my_collect.jsp\" target=\"_blank\" class=\"red\">�ղ�("+data.countCollect+")</a>  <a href=\""+SM_ROOT+"/my_focus.jsp\" target=\"_blank\" class=\"red\">��ע("+data.countFocus+")</a>"
			+ " <a href=\"javascript:logout();\">�˳�</a>";
		$("#login_yes").empty();
		$("#login_yes").append(str); 		
		if (data.collectId > 0){
			collect_hide(mId);
		}
		if (data.companyId > 0){
			focus_hide(mId);
		}
	}
}

function logout(){
	$("#logoutForm").submit();
}

function login_show(){
	$("#login_no").show();
	$("#login_yes").hide();
}

function login_hide(){
	$("#login_yes").show();
	$("#login_no").hide();
}

function collect_show(mId){
	$("#collect_no_"+mId).show();
	$("#collect_yes_"+mId).hide();
	
	//�������������һ��ʱ���ȥ����Ŀǰ��Ϊ�˼�����ǰ��
	$("#collect_no").show();
	$("#collect_yes").hide();
}

function collect_hide(mId){ 
	$("#collect_yes_"+mId).show();
	$("#collect_no_"+mId).hide();
	
	//�������������һ��ʱ���ȥ����Ŀǰ��Ϊ�˼�����ǰ��
	$("#collect_yes").show();
	$("#collect_no").hide();
}

function focus_show(mId){
	$("#focus_no_"+mId).show();
	$("#focus_yes_"+mId).hide();
	
	//�������������һ��ʱ���ȥ����Ŀǰ��Ϊ�˼�����ǰ��
	$("#focus_no").show();
	$("#focus_yes").hide();
}

function focus_hide(mId){ 
	$("#focus_yes_"+mId).show();
	$("#focus_no_"+mId).hide();
	
	//�������������һ��ʱ���ȥ����Ŀǰ��Ϊ�˼�����ǰ��
	$("#focus_yes").show();
	$("#focus_no").hide();
}

function _loginSuccess(){
	location.reload();	
}

function _recommend(arg){
	if (arg == "1"){
		alert("����Ͷ��Ʊ��");
	}else if (arg == "2"){
		alert("ͶƱ�ɹ�����л����ͶƱ!");
	}
}

function copyToClipBoard(){
	var clipBoardContent="";
	clipBoardContent+=this.location.href;
	//_copyToClipBoard(clipBoardContent);
	
	copyText(clipBoardContent);
	//window.clipboardData.setData("Text",clipBoardContent);
	//alert("���Ѹ������Ӽ����⣬��ճ����QQ/MSN�ȷ�������!");
}


 
function copyText(meintext) {
    if (window.clipboardData) {
        window.clipboardData.setData("Text", meintext)
    } else {
    	var flashcopier = 'flashcopier'; 
		if(!document.getElementById(flashcopier)) { 
			var divholder = document.createElement('div'); 
			divholder.id = flashcopier; 
			document.body.appendChild(divholder); 
		} 
		document.getElementById(flashcopier).innerHTML = ''; 
		var divinfo = '<embed src="_clipboard.swf" FlashVars="clipboard='+encodeURIComponent(meintext)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';   
		//var divinfo = '<span class="mceItemEmbed"  src="_clipboard.swf" mce_src="_clipboard.swf" FlashVars="clipboard='+escape(meintext)+'" width="0" height="0" type="application/x-shockwave-flash"></span>';//�����ǹؼ� 
		document.getElementById(flashcopier).innerHTML = divinfo; 
    }
    alert('�Ѿ����Ƶ����ļ����壡');
}



function cpIt(s){   
    if (window.clipboardData) {   
        window.clipboardData.setData("Text",s);   
    }   
    else   
    {     
        var flashcopier = 'flashcopier';   
        if(!document.getElementById(flashcopier)) {   
          var divholder = document.createElement('div');   
          divholder.id = flashcopier;   
          document.body.appendChild(divholder);   
        }   
        document.getElementById(flashcopier).innerHTML = '';   
        var divinfo = '<embed src="_clipboard.swf" FlashVars="clipboard='+encodeURIComponent(s)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';   
        document.getElementById(flashcopier).innerHTML = divinfo;   
    }   
    alert("\r\n��Ϣ��"+s+"\r\n\r\n��ϲ��������Ҫ����Ϣ�Ѿ����ɹ����Ƶ��������ˣ�\r\n\r\n����С��ʾ��(1) �� Ctrl+v ���Խ�������Ϣճ������ָ����λ�á�\r\n\r\n                        (2) ���ո����Ѹ�ٹرձ���ʾ��");   
}   


function _copyToClipBoard(txt) {    
    if(window.clipboardData) {    
        window.clipboardData.clearData();    
        window.clipboardData.setData("Text", txt);    
        alert("�Ѿ����Ƶ����ļ�����!");
    } else if(navigator.userAgent.indexOf("Opera") != -1) {    
        window.location = txt;    
    } else if (window.netscape) {    
        try {    
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");    
        } catch (e) {    
            alert("��������ܾ���\n�����������ַ������'about:config'���س�\nȻ��'signed.applets.codebase_principal_support'����Ϊ'true'");    
        }    
	    var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);    
	    if (!clip)    
	        return;    
	    var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);    
	    if (!trans)    
	        return;    
	    trans.addDataFlavor('text/unicode');    
	    var str = new Object();    
	    var len = new Object();    
	    var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);    
	    var copytext = txt;    
	    str.data = copytext;    
	    trans.setTransferData("text/unicode",str,copytext.length*2);    
	    var clipid = Components.interfaces.nsIClipboard;    
	    if (!clip)    
	        return false;    
	    clip.setData(trans,null,clipid.kGlobalClipboard);    
	    alert("�Ѿ����Ƶ����ļ�����")    
    }    
}