
/*====common js begin====*/


var tNow = new Date();
//声明错误信息
var aMsg = [];
aMsg[0]='';
aMsg[1]='不能为空';
aMsg[2]='太长';
aMsg['2username']='用户名太长，长度为4～18位';
aMsg['2password']='密码太长，长度为6～16位，字母区分大小写';
aMsg['2question']='提示问题太长，长度小于36位，一个汉字占两个字符';
aMsg['2myQuestion']='自定义问题太长，长度6～30位，字母区分大小写，一个汉字占两个字符';
aMsg['2answer']='问题答案太长，长度6～30位，字母区分大小写，一个汉字占两个字符';
aMsg['2pingma']='安全码太长，长度为6～16位，字母区分大小写';
aMsg['2firstname']='真实姓名太长，姓名长度请小于26位';
aMsg['2address']='通信地址太长，地址长度请小于66个字符';
aMsg['2contactnumber']='电话号码太长，请输入正确的电话';
aMsg['2zipcode']='邮政编码太长，请输入6～16位的邮政编码';
aMsg['2year'] = '请您输入正确的年份';
aMsg['2idnum'] = '请您输入6～18位的正确证件号码'
aMsg['2nickname'] = '昵称最长20个字符，一个汉字占两个字符';

aMsg[3]='太短';
aMsg['3username']='用户名太短，长度为4～18位';
aMsg['3password']='密码太短，长度为6～16位，字母区分大小写';
aMsg['3myQuestion']='自定义问题太短，长度为6～30位，字母区分大小写，一个汉字占两个字符';
aMsg['3answer']='问题答案太短，长度为6～30位，字母区分大小写，一个汉字占两个字符';
aMsg['3pingma']='安全码太短，长度为6～16位，字母区分大小写';
aMsg['3contactnumber']='电话号码太短';
aMsg['3zipcode']='邮政编码太短，请输入6～16位的邮政编码';
aMsg['3year'] = '请您输入正确的年份';
aMsg['3idnum'] = '请您输入6～18位的正确证件号码';


aMsg[4]='不符合要求';
aMsg['4username']='不能输入特殊字符，用户名只能由不区分大小写的字母、数字、点、减号、下划线组成';
aMsg['4username_1']='用户名中不能含有空格，请您删除空格';
aMsg['4username_2']='用户名只能以字母、数字开头和结尾';
aMsg['4username_3']='用户名不能包含连续"."，请重新输入';
aMsg['4username_4']='用户名是保留帐号，请重新输入';
aMsg['4firstname']='请不要输入特殊字符或不合法字符';
aMsg['4nickname'] = '请不要输入特殊字符';
aMsg['4answer']='请输入正确的问题答案，长度6～30位。区分字母大小写，一个汉字占两个字符';
aMsg['4pingma']='安全码长度为6～16位，区分字母大小写';
aMsg['4contactnumber']='请您输入正确的电话号码';
aMsg['4zipcode']='邮政编码不对';
aMsg['4year'] = '请您输入正确的年份';
aMsg['4idnum'] = '证件号码的头尾不能为空格，请重新输入';
aMsg['4otppass'] = '请输入6位数字动态密码';
aMsg['4ppcpass'] = '请输入3～9位数字密码';
aMsg['4mobile'] = '请输入正确的手机号';
aMsg['4qq'] = '请输入正确的QQ号码';


//aMsg[5]='已经存在，另选一个';
aMsg[5]='很遗憾，该帐号已经被注册，请您另选一个'
aMsg['5mobuser']='您想注册手机号帐号'
aMsg[6]='您两次输入不一致';
aMsg['6cpassword']= '您两次输入的登录密码不一致';
aMsg['6cpingma'] = '您两次输入的安全码不一致';
aMsg[7]='新旧密码不能相同';

aMsg[8]='太简单';
aMsg['8password']='您设置的密码太简单，容易被他人猜测到，为了保护您的帐号安全，请您重新设置';
aMsg['8pingma']='您设置的安全码太简单，容易被他人猜测到，为了保护您的帐号安全，请您重新设置';

aMsg[9]='不正确';
aMsg[10]='<i>安全程度：弱</i>';
aMsg[11]='<i>安全程度：中</i>';
aMsg[12]='<i>安全程度：强</i>';
aMsg[13]='不能和用户名相同';
aMsg[14]='不能和问题相同';
aMsg[15]='不能和旧答案相同';
aMsg[16]='不能和旧保密邮箱相同';
aMsg[17]='请选择';
aMsg[18]='未占用';
aMsg[19]='错误';
aMsg[20] = '请您输入15位或18位正确的身份证码，该号码用于保障您帐号的合法身份';
aMsg[24]='不能和密码相同';

aMsg[26]='不能和安全码相同';
aMsg[30]='尝试次数过多,请稍后再试！';
aMsg[31]='未被使用';
aMsg[32]='用户名不存在';
aMsg[33]='号码无效';
aMsg[34]='邮箱地址无效';
aMsg[35]='校验码错误';
aMsg[36]='新邮箱和原邮箱不能相同';
aMsg[37]='未开通，请换一个';
aMsg[38]='不能使用该邮箱';
aMsg[39]='密码不正确';
aMsg[40]='旧密码不正确';
aMsg[41]='答案错误';
aMsg[42]='日期无效';
aMsg[43]='手机号无效';
aMsg[44]='手机帐号只能关联本手机号';
aMsg[104]='恭喜，该用户名可以使用';
aMsg[1000]='系统维护，请您稍后再试！';
aMsg[1001]='系统繁忙!';
aMsg[1070]='对不起，网易通行证暂不支持注册此域下的帐号!';

// 163帐号存在时推荐yeah帐号时的提示信息
var yeahRegMsg_163 = '';
var yeahRegMsg_163_2 = '';

/*====common js end====*/
/*====form js beign====*/
//document.domain = '163.com';
var checkFrom,pattern,existName;
var existName = '';
var _myQuestion = '我的自定义问题';
var bNameChg = false;
//表单验证调用函数
function fAction(sForm){
	Form.reset(sForm);
	var oForm = $(sForm);
	var checkFrom;
	var oInputs = Form.getElements(oForm);
	if(oForm.id!='fChginfo0'){Form.focusFirstElement(oForm);}
	for(var prop in oCheckForm.stat.options){
		oCheckForm.stat.options[prop] = true;
	}
	//reg0.shtml增加productid参数
	if(sForm == 'fReg0'){
		var domainProductPassed = getParameterFromUrl(window.location.href,"productid");
		//alert("domainProductPassed is :" + domainProductPassed);
		if(domainProductPassed == "")
			domainProductPassed = "@163.com";
		else if(domainProductPassed == "popo")
			domainProductPassed = "@popo.163.com";
		var domain = $('domain');
		var i ;
		for(i = 0 ; i < domain.options.length; ++i){
				if(domain.options[i].value == domainProductPassed){
						domain.options[i].selected = true;
						break;
				}
				
		}
	}
	if(sForm=='fReg0' && oForm.suggestName){
		existName = $F('username');
		var _ii = oForm.suggestName.length;
		if(_ii){
			for(var i=0; i<_ii; i++){
				oForm.suggestName[i].onclick = function(){
					$('username').value = this.value;
					$T('username').innerHTML='';
				}
			}
		}else{
			oForm.suggestName.onclick = function(){
					$('username').value = this.value;
					$T('username').innerHTML='';
			}
		}
	}
	oInputs.each(function(oInput){
		Event.observe(oInput,'keyup',fClearTip,false);
		Event.observe(oInput,'blur',function(){
			if(oCheckForm.stat.options[oInput.id]==false){
				Element.removeClassName(oInput,'inputFocus');
				Element.addClassName(oInput,'inputError');
			}else{
				Element.removeClassName(oInput,'inputFocus');
				Element.removeClassName(oInput,'inputError');
			}
		},false);
		if(oInput.type != 'select-one'){
			Event.observe(oInput,'focus',function(){
					Element.removeClassName(oInput,'inputError');
					Element.addClassName(oInput,'inputFocus');
			},false);
		}
		var sId = oInput.id;
		switch(sId){
			case 'nickname':
				 Event.observe(sId, 'blur', fNicknameBlur, false);
			break;
			case 'qq':{
			
			
				 Event.observe(sId, 'blur', fQQBlur, false);
				 }
			break;			
			case 'username':
			  Event.observe(sId, 'blur', fUsernameBlur, false);
			  Event.observe(sId, 'change', fUsernameChange, false);
			  break;
			case 'password':
				Event.stopObserving(sId, 'keyup', fClearTip, false);
				Event.observe(sId, 'keyup', fPasswordKeyup, false);
				Event.observe(sId, 'blur', fPasswordBlur, false);
			break;
			case 'cpassword':
				Event.observe(sId, 'blur', fCpasswordBlur, false);
			break;
			case 'oldpass':
				Event.observe(sId, 'blur', fOldpassBlur, false);
			break;
			case 'province':
			case 'industry':
			case 'edulevel':
			case 'occupation':
			case 'income':
				Event.observe(sId, 'change', fClearTip, false);
			break;
			case 'question':
				if($F(sId)==_myQuestion){
					Element.addClassName('myQuestion','show');
					Event.observe('myQuestion','blur',fMyQuestionBlur,false);
				}
				Event.observe(sId, 'change', fQuestionChange, false);
				break;
			case 'answer':
				Event.observe(sId, 'blur', fAnswerBlur, false);
			break;
			case 'oldanswer':
				Event.observe(sId, 'blur', fClearTip, false);
			break;
			case 'pingma':
				Event.stopObserving(sId, 'keyup', fClearTip, false);
				Event.observe(sId, 'keyup', fPingmaKeyup, false);
				Event.observe(sId, 'blur', fPingmaBlur, false);
			break;
			case 'cpingma':
				Event.observe(sId, 'blur', fCpingmaBlur, false);
			break;
			case 'mail':
				Event.observe(sId, 'blur', fMailBlur, false);
			break;
			case 'oldmail':
				Event.observe(sId, 'blur', fOldmailBlur, false);
			break;
			case 'year':
				Event.observe(sId, 'blur', fYearBlur, false);
			break;
			case 'month':
			case 'day':
				Event.observe(sId, 'change', fDateChange, false);
			break;
			case 'idnum':
				Event.observe(sId, 'blur', fIdnumBlur, false);
			break;
			case 'inputOtherInfo':
				if($(sId).checked){$('otherInfo').className='hidden checked';}
				Event.observe(sId, 'click', fInputOtherInfoClick, false);
			break;
			case 'chgQuestion':
			case 'chgMail':
			case 'chgBirthday':
				ifChecked(sId);
				Event.observe(sId, 'click', fChgClick, false);
			break;
			case 'firstname':
				Event.observe(sId, 'blur', fFirstnameBlur, false);
			break;
			case 'male':
			case 'female':
				Event.observe(sId, 'click', fClearTip, false);
			break;
			case 'zipcode':
				Event.observe(sId, 'blur', fZipcodeBlur, false);
			break;
			case 'contactnumber':
				Event.observe(sId, 'blur', fContactnumberBlur, false);
			break;
			case 'address':
				Event.observe(sId, 'blur', fAddressBlur, false);
			break;
			case 'usePassword':
				Event.observe(sId, 'click', fUsePasswordFocus, false);
			break;
			case 'usePingma':
				Event.observe(sId, 'click', fUsePingmaFocus, false);
			break;
			case 'otppass':
				Event.observe(sId,'blur',fOtppassBlur,false);
			break;
			case 'ppcpass':
				Event.observe(sId,'blur',fPpcpassBlur,false);
			break;
			case 'refreshRandomNo':
				Event.observe(sId,'click',fRefreshRandomNoClick,false);
			break;
			case 'agree':
				Event.observe(sId,'click',fClearTip,false);
			break;
			case 'mobile':
				Event.observe(sId,'blur',fMobileBlur,false);
			break;
			//给域名选择框增加一个onChange事件
			case 'domain':
				Event.observe(sId,'change',fDomainChange,false);
		}
	});
	oForm.onsubmit = function(event){
		oInputs.each(function(oInput){
			var sId = oInput.id;
			switch(sId){
				case 'nickname':
					fNicknameCheck(event,oInput);
				break;
				case 'qq':
					fQQCheck(event,oInput);
				break;
				case 'username':
					fUsernameCheck(event,oInput);
				break;
				case 'password':
					fPasswordBlur(event,oInput);
				break;
				case 'cpassword':
					fCpasswordBlur(event,oInput);
				break;
				case 'oldpass':
					fOldpassBlur(event,oInput);
				break;
				//case 'question':
				//	fClearTip(event,oInput);
				//break;
				case 'answer':
					fAnswerBlur(event,oInput);
				break;
				case 'pingma':
					fPingmaBlur(event,oInput);
				break;
				case 'cpingma':
					fCpingmaBlur(event,oInput);
				break;
				case 'mail':
					fMailBlur(event,oInput);
				break;
				case 'oldmail':
					fOldmailBlur(event,oInput);
				break;
				case 'year':
					fYearBlur(event,oInput);
				break;
				case 'month':
				case 'day':
					fDateChange(event,oInput);
			  break;
				case 'idnum':
					fIdnumBlur(event,oInput);
				break;
				case 'firstname':
					fFirstnameBlur(event,oInput);
				break;
				case 'zipcode':
					fZipcodeBlur(event,oInput);
				break;
				case 'contactnumber':
					fContactnumberBlur(event,oInput);
				break;
				case 'address':
					fAddressBlur(event,oInput);
				break;
				case 'otppass':
					fOtppassBlur(event,oInput);
				break;
				case 'ppcpass':
					fPpcpassBlur(event,oInput);
				break;
				case 'mobile':
					fMobileBlur(event,oInput);
				break;
			}
		});
		fConfirmSubmit(event);
		return false;
	}
}

//通用函数 begin================================================================================
function $T(obj){return $(obj).parentNode.getElementsByTagName('span')[0];}
function $Evt(event){return event||window.event;}
function $oEvt(event,obj){
	if(obj){
		if(obj.type=='hidden') return;
		oEvt = obj;
	}
	else{
		event = $Evt(event);
		if(event.keyCode==13){return;}
		oEvt = event.srcElement||event.target;
	}
	return oEvt;
}
function $fId(event){
	var oF;
	if($oEvt(event).tagName.toLowerCase()=='form'){oF = $oEvt(event);}	
	else{oF = Event.findElement($Evt(event),'form');}
	return oF.id;
}
function $Req(id){
	if($(id).className.indexOf('req')>-1){return true;}
	else{return false}
}
//通用函数 end================================================================================

//表单输入验证函数 begin================================================================================
//清除提示
function fClearTip(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt || oEvt.name == "domain") return;
	var sSpan
	try{sSpan = $T(oEvt).tagName.toLowerCase();}
	catch(e){}
	if(sSpan == 'span'){checkForm = new oCheckForm.checkInput(oEvt,{});}
}
//用户名
function fUsernameCheck(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	
	pattern = /^[a-zA-Z\d]+([\w\.\-]*[a-zA-Z\d]+)?$/;
	pattern_1 = /\s+/;
	pattern_2 = /^[a-zA-Z\d]+(\S*[a-zA-Z\d]+)?$/;
	checkForm = new oCheckForm.checkInput(oEvt,{sPattern_1:pattern_1,sPattern_2:pattern_2,sPattern:pattern,iMin:4,iMax:18,sExistName:existName,userNameRfcCheck:true});
}
//昵称
function fNicknameCheck(event,obj){
	
	
	
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	
	checkForm = new oCheckForm.checkInput(oEvt,{iMax:20,nickname:true});
	
		
	
}

//检查昵称是否合法
function fNicknameBlur(event,obj){

	/*
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	
	var oNickname = $('nickname');
	alert("fNicknameBlur");
	var oC = new oCheckForm.checkInput(oNickname,{iMax:26,nickname:true});
	*/
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	var oNickname = $('nickname');
	fNicknameCheck(event,oNickname);
}

function fQQCheck(event,obj){
	
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	
	
	checkForm = new oCheckForm.checkInput(oEvt,{qq:true});
	
}

function fQQBlur(event,obj){

	
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	var qq = $('qq');
	fQQCheck(event,qq);
}



//验证用户名是否被占用
function fUsernameBlur(event,obj){
	if ( !bNameChg )
		return;
	bNameChg=false;
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	var oUser = $('username');
	var domain = $('domain');
	var suggestName = $T('nameSuggest');
	if ( !suggestName ) return;
	suggestName.innerHTML = '';
	var oC = new oCheckForm.checkInput(oUser,{bEmpty:true});
	if(oCheckForm.stat.username()){
		fUsernameCheck(event,oUser);
	}
	/*
	if ( oCheckForm.stat.result() ){
		var oTip = $T(oEvt);
		if ( oTip ) {
			var sPars = Form.serialize(sF);
			var checkUser = new Ajax.Updater(oTip,'/checkssn.jsp',{method:'post',parameters:sPars});
		}
	}*/
	if(oCheckForm.stat.username()){
		//var sPars = Form.serialize(sF);
		//var checkUser = new Ajax.Request('/checkssn.jsp',{method:'post',parameters:sPars,onSuccess:checkUsernameReport,onFailure:errUsernameReport});
		new Ajax.Request('/checkssn.jsp?username='+ oUser.value + "&domain=" +domain.value,{method:'get',onSuccess:checkUsernameReport,onFailure:errUsernameReport});
	}
	
}

//换域名，检查用户名是否被占用。
function fDomainChange(event,obj){
	
	fUsernameBlur(event,obj);
	var oUser = $('username');
	var domain = $('domain');
	var suggestName = $T('nameSuggest');
	if ( !suggestName ) return;
	suggestName.innerHTML = '';
	
	
	var oC = new oCheckForm.checkInput(oUser,{bEmpty:true});
	if(oCheckForm.stat.result()){
		fUsernameCheck(event,oUser);
	}
	
	if(oCheckForm.stat.result()){
		//var sPars = Form.serialize(sF);
		//var checkUser = new Ajax.Request('/checkssn.jsp',{method:'post',parameters:sPars,onSuccess:checkUsernameReport,onFailure:errUsernameReport});
		new Ajax.Request('/checkssn.jsp?username='+ oUser.value + "&domain=" +domain.value,{method:'get',onSuccess:checkUsernameReport,onFailure:errUsernameReport});
	}
	
	
	
}

var aText;

function checkUsernameReport(originalRequest){
	var sText = originalRequest.responseText;
	aText = sText.split('\n');
	var aNewText =[];
	aText.each(function(tmp){
		if(tmp!=''&& tmp!='\r'){aNewText.push(tmp);}
	});
	aText = aNewText;
	yeahRegMsg_163 = '';
	yeahRegMsg_163_2 = '';
	if(!isNaN(aText[0])){
		$T('username').innerHTML = aMsg[parseInt(aText[0])];
		/*if(aText.length==2 && parseInt(aText[0])==5){
				fNameSuggest(aText[1]);
		}*/
		if(parseInt(aText[0])==5){   // if 163 account has exist
		  var pdt_ = getPdt();
		  if(pdt_ == '' || pdt_ == 'undefined'){   // if can not get pdt, than pdt=urs
		      pdt_ = 'urs';
		  }
        	  // suggest 126 or yeah account 
        	if((!isNaN(aText[2]) && !isNaN(aText[3])) || (!isNaN(aText[1]) && !isNaN(aText[2]) && (parseInt(aText[1]) == 0 || parseInt(aText[1]) == -1) && (parseInt(aText[2]) == 0 || parseInt(aText[2]) == -1) )){
        		
        		if(pdt_ == 'mail163'){    // reg from mail163
        		
        			yeahRegMsg_163 += '<dt>推荐1:</dt>';
        			if((aText.length == 4 && !isNaN(aText[2]) && parseInt(aText[2]) == 0) || (aText.length == 3 && !isNaN(aText[1]) && parseInt(aText[1]) == 0)){    // 126 not exist
        				yeahRegMsg_163 += '<dt><font size=2 color=red><b>' + $('username').value + '@126.com</b></font>还未被注册。<br/><a href="http://reg.email.163.com/mailregAll/reg0.jsp?from=ursreg&username=' + $('username').value + '@126.com" target="_blank" style="color:#FF0000">马上抢注>></a></dt><br/>';
        				if((aText.length == 4 && !isNaN(aText[3]) && parseInt(aText[3]) == 0) || (aText.length == 3 && !isNaN(aText[2]) && parseInt(aText[2]) == 0)){    // yeah not exist
        				    yeahRegMsg_163 += '<dt>推荐2:</dt><dt><font size=2 color=red><b>' + $('username').value + '@yeah.net</b></font>还未被注册。<br/><a href="http://reg.email.163.com/mailregAll/reg0.jsp?from=ursreg&username=' + $('username').value + '@yeah.net" target="_blank" style="color:#FF0000">马上抢注>></a></dt><br/><dt>推荐3:</dt>';
        			    }else{    // yeah exist
        				    yeahRegMsg_163 += '<dt>推荐2:</dt>';
        			    }
        			}else{    // 126 exist
        				if((aText.length == 4 && !isNaN(aText[3]) && parseInt(aText[3]) == 0) || (aText.length == 3 && !isNaN(aText[2]) && parseInt(aText[2]) == 0)){   // yeah not exist
        					yeahRegMsg_163 += '<dt><font size=2 color=red><b>' + $('username').value + '@yeah.net</b></font>还未被注册。<br/><a href="http://reg.email.163.com/mailregAll/reg0.jsp?from=ursreg&username=' + $('username').value + '@yeah.net" target="_blank" style="color:#FF0000">马上抢注>></a></dt><br/><dt>推荐2:</dt>';
        				}else{    // yeah exist
        					yeahRegMsg_163 += '<dt>注册网易免费<font color=red><b>126</b></font>邮箱和<font color=red><b>Yeah.net</b></font>邮箱，更多个性化用户名任你选。<a href="http://reg.email.163.com/mailregAll/reg0.jsp?from=ursreg" target="_blank" style="color:#FF0000">马上注册>></a></dt><br/><dt>推荐2:</dt>';
        				}
        			}
        			
        		}else{   // reg from other products
        		    
        		    if((aText.length == 4 && !isNaN(aText[2]) && parseInt(aText[2]) == 0) || (aText.length == 3 && !isNaN(aText[1]) && parseInt(aText[1]) == 0)){    // 126 not exist
        		    	yeahRegMsg_163_2 += '马上抢注<a href="http://reg.email.163.com/mailregAll/reg0.jsp?from=ursreg&username=' + $('username').value + '@126.com" target="_blank"><font color="red">' + $('username').value + '@126.com</font>邮箱>></a>';
        		    	if((aText.length == 4 && !isNaN(aText[3]) && parseInt(aText[3]) == 0) || (aText.length == 3 && !isNaN(aText[2]) && parseInt(aText[2]) == 0)){   // yeah not exist
        		    		yeahRegMsg_163_2 += '<br/>或者<a href="http://reg.email.163.com/mailregAll/reg0.jsp?from=ursreg&username=' + $('username').value + '@yeah.net" target="_blank"><font color="red">' + $('username').value + '@yeah.net</font>邮箱>></a>';
        		    	}
        		    }else{   // 126 exist
        		    	if((aText.length == 4 && !isNaN(aText[3]) && parseInt(aText[3]) == 0) || (aText.length == 3 && !isNaN(aText[2]) && parseInt(aText[2]) == 0)){   // yeah not exist
        		    		yeahRegMsg_163_2 += '马上抢注<a href="http://reg.email.163.com/mailregAll/reg0.jsp?from=ursreg&username=' + $('username').value + '@yeah.net" target="_blank"><font color="red">' + $('username').value + '@yeah.net</font>邮箱>></a>';
        		    	}else{
        		    		yeahRegMsg_163_2 += '推荐您注册网易免费<font color=red><b>126</b></font>邮箱和<font color=red><b>Yeah.net</b></font>邮箱。<a href="http://reg.email.163.com/mailregAll/reg0.jsp?from=ursreg" target="_blank" style="color:#FF0000">马上注册>></a></dt>';
        		    	}
        		    }
        		}
        		/**
			  	  if((!isNaN(aText[2]) && parseInt(aText[2]) == -1) || (!isNaN(aText[1]) && parseInt(aText[1]) == -1)){
			  	      if(pdt_ == 'mail163'){    // reg from mail163
			  	          
			  	          yeahRegMsg_163 += '<dt>推荐1:</dt><dt>注册网易全新推出的<font color=red><b>Yeah.net</b></font>邮箱，更多个性化用户名任你选。<a href="http://reg.mail.yeah.net/reg/reg1.jsp?from=mail163regE" target="_blank" style="color:#FF0000">马上注册>></a></dt><br/><dt>推荐2:</dt>';
			  	          
			  	          
			  	      }else{      // reg from other products
			  	          yeahRegMsg_163_2 = '推荐您注册网易最新的<a href = "http://reg.mail.yeah.net/reg/reg1.jsp?from=' + pdt_ + 'regE" style="color:#FF0000" target="_blank">yeah.net</a>免费邮箱';
			  	      }
			  	  }else if((!isNaN(aText[2]) && parseInt(aText[2]) == 0) || (!isNaN(aText[1]) && parseInt(aText[1]) == 0)){
			  	      if(pdt_ == 'mail163'){     // reg from mail163
			  	          yeahRegMsg_163 += '<dt>推荐1:</dt><dt><font size=2 color=red><b>' + $('username').value + '@yeah.net</b></font>还未被注册。<br/>';
                          yeahRegMsg_163 += '<a href="http://reg.mail.yeah.net/reg/reg1.jsp?prename=' + $('username').value + '&from=mail163reg" target="_blank" style="color:#FF0000">马上抢注>></a></dt><br/><dt>推荐2:</dt>';
			  	      }else{      // reg from other products
			  	          yeahRegMsg_163_2 = '<a href="http://reg.mail.yeah.net/reg/reg1.jsp?prename=' + $('username').value + '&from=' + pdt_ + 'reg" target="_blank">马上抢注<font color="red">' + $('username').value + '@yeah.net</font>邮箱>></a>'
			  	      }
			  	  }
			  	  */
			 }
          
          Element.addClassName($('username'),'inputError');
	      fNameSuggest(((aText.length == 4)?aText[1]:null)); 	  
		}else{
			if(parseInt(aText[0])==104 && aText.length==2 && parseInt(aText[1])==0){        // is a mob user and user has not exist
/*			    Element.addClassName($('username'),'inputError');
			    $T('username').innerHTML = aMsg['5mobuser'];       // set the mob user msg 
				$('nameSuggest').innerHTML = '<dl><dt>请从<a href="http://reg.163.com/mob/regmob0.shtml?username=' + $('username').value + '" target="_self" style="color:#FF0000">这里注册>></a></dt></dl>';       // suggest to reg from 'http://reg.163.com/mob/regmob0.shtml'
			    $('yeahSuggest').innerHTML = '';*/
			    
			    $('nameSuggest').innerHTML = '';
			    $('yeahSuggest').innerHTML = '';
			    Element.removeClassName($('username'),'inputError');
			    $('mobile').value = $('username').value;
			}else if(parseInt(aText[0])==104 && aText.length==1){       // is not a mob user and user has not exist
				$('nameSuggest').innerHTML = '';
			    $('yeahSuggest').innerHTML = '';
			    Element.removeClassName($('username'),'inputError');
			}
		}
	}
/*
	if(parseInt(aText[0])==0){
		$T('checkUsername').innerHTML = aMsg[18];
	}else{
		if(!isNaN(aText[0])){
			$T('username').innerHTML = aMsg[parseInt(aText[0])];
			if(aText.length==2 && parseInt(aText[0])==5){fNameSuggest(aText[1]);}
		}
	}*/
}

//name suggest
function fNameSuggest(sHTML){
	var sText;
	if ( sHTML == null ){
		sText = '<dl>';
		sText += yeahRegMsg_163;
		sText += '<dt>您可以尝试通过以下方式注册您喜欢的帐号:</dt>';
		sText += '<dd>加入分隔符：beijing.2008,beijing_2008</dd>';
		sText += '<dd>调换顺序：2008beijing</dd>' ;
		sText += '<dd>加入简单词汇： woaibeijing</dd>';
		sText += '<dd>您尽可以充分发挥自己的想象力，一定能在这里找到满意的帐号！</dd>';
		sText += '</dl>' ;
	}else if( sHTML == '' ){
		sText = '';
	}else{
	    var names = sHTML.split(',');
		sText = '<dl>' + yeahRegMsg_163 + '<dt>您可以使用以下接近的帐号：</dt><dd>' ;
		for ( var i=0;i<names.length;i++){
			 sText += '<label><input type=\"radio\" name=\"suggestName\" value=\"';
			 sText += names[i];
			 sText += '\"/>';
			 sText += names[i];
			 sText += '</label>';
		}
		sText += '</dd><dd>或者通过加入分隔符、调换顺序、加入后缀等方式组合出自己喜欢的帐号。</dd>';
		sText += '</dl>';
	}
	
	$('nameSuggest').innerHTML = sText;
	
	if(yeahRegMsg_163 != ''){
	    $('yeahSuggest').innerHTML = '';
    }else{
  	  	$('yeahSuggest').innerHTML = yeahRegMsg_163_2;
    }
    
	if ( sText.indexOf('suggestName') > -1 ){
		var ii = $('fReg0').suggestName.length;
		if ( ii ){
			for(var i=0; i<ii;i++){
				$('fReg0').suggestName[i].onclick = function(){$('username').value = this.value; Element.removeClassName($('username'),'inputError'); $T('username').innerHTML=''; fNameSuggest(''); $('yeahSuggest').innerHTML = ''; }
			}
		}else{
				$('fReg0').suggestName.onclick = function(){
					$('username').value = this.value;
					Element.removeClassName($('username'),'inputError'); 
					$T('username').innerHTML=''; 
					fNameSuggest(''); 
					$('yeahSuggest').innerHTML = '';
			}
		}
	}
/*	var tmpHTML = $('nameSuggest').innerHTML;
	var aHTML = tmpHTML.toLowerCase().split('</dl>')
	if(aHTML.length == 1 ){originalHTML = tmpHTML; }
	else{originalHTML = aHTML[1];}
	$('nameSuggest').innerHTML = sHTML + originalHTML;
	if($('nameSuggest').innerHTML.indexOf('suggestName')>-1){
		var ii = $('fReg0').suggestName.length;
		for(var i=0; i<ii;i++){
			$('fReg0').suggestName[i].onclick = function(){$('username').value = this.value;}
		}
	}*/
}
function errUsernameReport(originalRequest){
	document.write(originalRequest.responseText);
}

function fUsernameChange(event,obj){
	bNameChg=true;
}

//密码
function fPasswordKeyup(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	pattern = /^[\x00-\xff]+$/;
	switch(sF){
		case 'fLogin':
		break;
		case 'fReg0'://'fReg1':
		case 'fByqa1':
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:16,sPattern:pattern,sDiffer:'username',bPwdStrength:true});
		break;
		case 'fBypingma':
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:16,sPattern:pattern,sDiffer:'username',sDifferPwd:'pingma',bPwdStrength:true});
		break;
		case 'fChgpwd':
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:16,sPattern:pattern,sDiffer:'username',sDifferPwd:'oldpass',bPwdStrength:true});
		break;
		case 'fChginfo0':
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:20,sPattern:pattern});
		break;
		default:
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:16,sPattern:pattern});
		break;
	}
}
function fPasswordBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	pattern = /^[\x00-\xff]+$/;
	switch(sF){
		case 'fLogin':
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:16});
		break;
		case 'fReg0'://'fReg1':
		case 'fByqa1':
			checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:16,sPattern:pattern,sDiffer:'username',bPwdStrength:true,bSimplePwd:true});
		break;
		case 'fBypingma':
			checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:16,sPattern:pattern,sDiffer:'username',sDifferPwd:'pingma',bPwdStrength:true,bSimplePwd:true});
		break;
		case 'fChgpwd':
			checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:16,sPattern:pattern,sDiffer:'username',sDifferPwd:'oldpass',bPwdStrength:true,bSimplePwd:true});
		break;
		case 'fChginfo0':
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:20,sPattern:pattern});
		break;
		default:
			checkForm = new oCheckForm.checkInput(oEvt,{sPattern:pattern});
		break;
	}
}
//确定密码
function fCpasswordBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	checkForm = new oCheckForm.checkInput(oEvt,{sContrast:'password'});
}
//旧密码
function fOldpassBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	pattern = /^[\x00-\xff]+$/;
	checkForm = new oCheckForm.checkInput(oEvt,{sPattern:pattern});
}
//密码保护问题
function fQuestionChange(event,obj){
	fClearTip(event,obj);
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	if($F(oEvt)==_myQuestion){
		Element.addClassName('myQuestion','show');
		//$T(oEvt).innerHTML = aMsg[1];
		Event.observe('myQuestion','blur',fMyQuestionBlur,false);		
	}else{
		Element.removeClassName('myQuestion','show');
		oCheckForm.stat.options['myQuestion'] = null;
		$('myQuestion').value ='';
	}
}

function fQuestionBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	checkForm = new oCheckForm.checkInput(oEvt,{bEmpty:true});
}
//自定义问题
function fMyQuestionBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:30});
}
//问题答案
function fAnswerBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	switch(sF){
		case 'realname_changeinfo_form':
		case 'realname_setinfo_form':
		case 'fReg0'://'fReg1':
			checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:30,sDiffer:'question'});
		break;
		
		case 'fChginfo1':
			if(!$Req('answer') && ($F('question')!=$F('answer')) && $('oldanswer')){checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:30,sDiffer:'oldanswer'});}
			else{checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:30,sDiffer:'question'});}
		break;
		default:
			checkForm = new oCheckForm.checkInput(oEvt,{});
		break;
	}
}
//安全码
function fPingmaKeyup(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	pattern = /^[\x00-\xff]+$/;
	switch(sF){
		case 'fReg0'://'fReg1':
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:16,sPattern:pattern,sDiffer:'username',sDifferPwd:'password',bPwdStrength:true});
		break;
		case 'fChginfo1':
			checkForm = new oCheckForm.checkInput(oEvt,{iMax:16,sPattern:pattern,bPwdStrength:true});
		break;
		default:
			checkForm = new oCheckForm.checkInput(oEvt,{});
		break;
	}
}
function fPingmaBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	pattern = /^[\x00-\xff]+$/;
	switch(sF){
		case 'fReg0'://'fReg1':
			checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:16,sPattern:pattern,sDiffer:'username',sDifferPwd:'password',bPwdStrength:true,bSimplePwd:true});
		break;
		case 'fChginfo1':
			checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:16,sPattern:pattern,bPwdStrength:true,bSimplePwd:true});
		break;
		case 'realname_setinfo_form':
			checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:16,sPattern:pattern,sDiffer:'username',bPwdStrength:true,bSimplePwd:true});
		break;
		default:
			checkForm = new oCheckForm.checkInput(oEvt,{});
		break;
	}
}
//确认安全码
function fCpingmaBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	checkForm = new oCheckForm.checkInput(oEvt,{sContrast:'pingma'});
}
//保密邮箱
function fMailBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	pattern = /^[a-zA-Z\d]+[\w\.\-@]*$/;
	switch(sF){
		case 'fReg0'://'fReg1':
			checkForm = new oCheckForm.checkInput(oEvt,{sPattern:pattern,bEmail:true,bHasEmail:true});
		break;
		case 'fChginfo1':
			if($('oldmail')){checkForm = new oCheckForm.checkInput(oEvt,{sPattern:pattern,bEmail:true,bHasEmailChg:true,sDiffer:'oldmail'});}
			else{checkForm = new oCheckForm.checkInput(oEvt,{sPattern:pattern,bEmail:true,bHasEmailChg:true});}
		break;
		default:
			checkForm = new oCheckForm.checkInput(oEvt,{sPattern:pattern,bEmail:true});
		break;
	}
}
//关联手机
function fMobileBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	var sF = $fId(event);
	pattern = /^(((13|15|18|17)\d{9})|(14\d{9}))$/;
	switch(sF){
		case 'fReg0':
			checkForm = new oCheckForm.checkInput(oEvt,{sPattern:pattern,bMobile:true,sSame:'username'});
		break;
		default:
		checkFrom = new oCheckForm.checkInput(oEvt,{sPattern:pattern});
	}
}
//旧邮箱
function fOldmailBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	pattern = /^[a-zA-Z\d]+[\w\.\-@]*$/;
	checkForm = new oCheckForm.checkInput(oEvt,{sPattern:pattern,bEmail:true});
}
//年
function fYearBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	pattern = /^\d+$/;
	checkForm = new oCheckForm.checkInput(oEvt,{iMin:4,iMax:4,sPattern:pattern,bBirthDay:true,bDate:true});
}
//月日
function fDateChange(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	checkForm = new oCheckForm.checkInput(oEvt,{bDate:true});
}
//证件号码
function fIdnumBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	switch($F('idtype')){
		case '0':
			checkForm = new oCheckForm.checkInput(oEvt,{bIdentityCard:true})
		break;
		case '1':
		case '2':
		case '3':
			pattern = /^\S+[\s\S]*\S+$/;
			checkForm = new oCheckForm.checkInput(oEvt,{iMin:6,iMax:18,sPattern:pattern});						
		break;
	}
}
//修改保密邮箱或者密码提示问题
function fChgClick(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	showHiddenContent(oEvt);
}
//姓名
function fFirstnameBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	pattern = /^[^\|\+\)\(\*\\\^\$\!\=\}\{\]\[\:\?\/&%#@;~><'"]+$/;
	checkFrom = new oCheckForm.checkInput(oEvt,{iMax:26,sPattern:pattern,fullname:true});
}
//邮政编码
function fZipcodeBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	pattern = /^\d+$/;
	checkForm = new oCheckForm.checkInput(oEvt,{iMin:3,iMax:16,sPattern:pattern});
}
//联系电话
function fContactnumberBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	checkForm = new oCheckForm.checkInput(oEvt,{bTelephone:true,iMin:5,iMax:20});
}
//地址
function fAddressBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	checkForm = new oCheckForm.checkInput(oEvt,{iMin:2,iMax:66});
}

//将军令
function fOtppassBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	pattern =  /^\d{6}$/; 
	checkFrom = new oCheckForm.checkInput(oEvt,{iMax:6,sPattern:pattern});
}

//密保卡
function fPpcpassBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	pattern =  /^\d{3,9}$/; 
	checkFrom = new oCheckForm.checkInput(oEvt,{iMin:3,iMax:9,sPattern:pattern});
}

//手机号码
/*
function fMobileBlur(event,obj){
	var oEvt = $oEvt(event,obj);
	if(!oEvt) return;
	pattern =  /^(13|15|18)\d{9}$/;
	checkFrom = new oCheckForm.checkInput(oEvt,{sPattern:pattern});
}*/

//用密码修改个人信息
function fUsePasswordFocus(){
	chginfoMode('usePassword','usePingma');
}
//用安全码修改个人信息
function fUsePingmaFocus(){
	chginfoMode('usePingma','usePassword');
}



function fRefreshRandomNoClick_ssl(){
	var sUrl = '/services/getid';
	var checkUser = new Ajax.Request(sUrl,{method:'get',onSuccess:getImg_ssl,onFailure:errMain});
	

}

function fRefreshNewRandomNoClick_ssl(){
	var sUrl = '/services/getid';
	var checkUser = new Ajax.Request(sUrl,{method:'get',onSuccess:getNewImg_ssl,onFailure:errMain});
	

}

function getImg_ssl(originalRequest){
	var sText = originalRequest.responseText;
	if(sText.indexOf('error')>-1){$T('usercheckcode').innerHTML=aMsg[1001];}
	else{
		var oImg = $('randomNoImg');
		
		if ( !oImg ){

			oImg = document.createElement('IMG');
			oImg.setAttribute('alt','将图中的文字填到左边输入框中');
			oImg.setAttribute('width','106');
			oImg.setAttribute('height','28');
			oImg.setAttribute('id','randomNoImg');
			var oSpan = document.createElement('SPAN');
			$('checkcode').appendChild(oImg);			
			$('checkcode').appendChild(oSpan);
			
		}
		$('randomNoImg').src = 'https://divs.urs.netease.com/services/crtimg?id=' + sText;
		$('syscheckcode').value = sText;
	}
}

function getNewImg_ssl(originalRequest){
	var sText = originalRequest.responseText;
	if(sText.indexOf('error')>-1){$T('usercheckcode').innerHTML=aMsg[1001];}
	else{
		var oImg = $('randomNoImg');
		
		if ( !oImg ){

			oImg = document.createElement('IMG');
			oImg.setAttribute('alt','将图中的文字填到左边输入框中');
			oImg.setAttribute('width','128');
			oImg.setAttribute('height','40');
			oImg.setAttribute('id','randomNoImg');
			var oSpan = document.createElement('SPAN');
			$('checkcode').appendChild(oImg);			
			$('checkcode').appendChild(oSpan);
			
		}
		$('randomNoImg').src = 'https://reg.163.com/services/getimg?id=' + sText;
		$('syscheckcode').value = sText;
	}
}

//刷新安全码
function fRefreshRandomNoClick(){
	//var oImg = $('randomNoImg');
	//var sId = $F('syscheckcode');
	//var aSrc =  oImg.src.split(sId);
	//oImg.src = aSrc[0] + sId + '&r=' + (new Date()).getTime();
	//var sUrl = '/services/getid?njs=y';
	var sUrl = '/services/getid';
	var checkUser = new Ajax.Request(sUrl,{method:'get',onSuccess:getImg,onFailure:errMain});
	
}

function fRefreshNewRandomNoClick(){
	var sUrl = '/services/getid';
	var checkUser = new Ajax.Request(sUrl,{method:'get',onSuccess:getNewImg,onFailure:errMain});
}

function getImg(originalRequest){
	var sText = originalRequest.responseText;
	
	if(sText.indexOf('error')>-1){$T('usercheckcode').innerHTML=aMsg[1001];}
	else{
		var oImg = $('randomNoImg');
		if ( !oImg ){
			oImg = document.createElement('IMG');
			oImg.setAttribute('alt','将图中的文字填到左边输入框中');
			oImg.setAttribute('width','106');
			oImg.setAttribute('height','28');
			oImg.setAttribute('id','randomNoImg');
			var oSpan = document.createElement('SPAN');
			$('checkcode').appendChild(oImg);
			$('checkcode').appendChild(oSpan);
		}
		$('randomNoImg').src = 'http://divs.reg.163.com/services/crtimg?id=' + sText;
		$('syscheckcode').value = sText;
	}
}

function getNewImg(originalRequest){
	var sText = originalRequest.responseText;
	
	if(sText.indexOf('error')>-1){$T('usercheckcode').innerHTML=aMsg[1001];}
	else{
		var oImg = $('randomNoImg');
		if ( !oImg ){
			oImg = document.createElement('IMG');
			oImg.setAttribute('alt','将图中的文字填到左边输入框中');
			oImg.setAttribute('width','128');
			oImg.setAttribute('height','40');
			oImg.setAttribute('id','randomNoImg');
			var oSpan = document.createElement('SPAN');
			$('checkcode').appendChild(oImg);
			$('checkcode').appendChild(oSpan);
		}
		$('randomNoImg').src = 'http://reg.163.com/services/getimg?id=' + sText;
		$('syscheckcode').value = sText;
	}
}


//刷新安全码
function fRefreshRandomNoClickSpec(){
	var sUrl = '/services/getid';
	var checkUser = new Ajax.Request(sUrl,{method:'get',onSuccess:getImgSpec,onFailure:errMain});
	
}

function fRefreshNewRandomNoClickSpec(){
	var sUrl = '/services/getid';
	var checkUser = new Ajax.Request(sUrl,{method:'get',onSuccess:getNewImgSpec,onFailure:errMain});
	
}

function getImgSpec(originalRequest){
    var sText = originalRequest.responseText;
	if(sText.indexOf('error')>-1){$T('usercheckcode').innerHTML=aMsg[1001];}
	else{
		var oImg = $('randomNoImg');
		if ( !oImg ){
			oImg = document.createElement('IMG');
			oImg.setAttribute('alt','将图中的文字填到左边输入框中');
			oImg.setAttribute('width',400);
			oImg.setAttribute('height',28);
			oImg.setAttribute('id','randomNoImg');
			var oSpan = document.createElement('SPAN');
			$('checkcode').appendChild(oImg);
			$('checkcode').appendChild(oSpan);
		}
		$('randomNoImg').src = 'http://divs.reg.163.com/services/crtimg?num=10&id=' + sText;
		$('syscheckcode').value = sText;
	}
}

function getNewImgSpec(originalRequest){
    var sText = originalRequest.responseText;
	if(sText.indexOf('error')>-1){$T('usercheckcode').innerHTML=aMsg[1001];}
	else{
		var oImg = $('randomNoImg');
		if ( !oImg ){
			oImg = document.createElement('IMG');
			oImg.setAttribute('alt','将图中的文字填到左边输入框中');
			//oImg.setAttribute('width',360);
			//oImg.setAttribute('height',40);
			oImg.setAttribute('id','randomNoImg');
			var oSpan = document.createElement('SPAN');
			$('checkcode').appendChild(oImg);
			$('checkcode').appendChild(oSpan);
		}
		$('randomNoImg').src = 'http://reg.163.com/services/getimg?num=8&type=2&id=' + sText;
		$('syscheckcode').value = sText;
	}
}

function errMain(originalRequest){
		alert('请重新提交');
		return false;
}
function fAlert(){
	var ele = oCheckForm.stat.first();
	var eleHTML = $T(ele).innerHTML;
	if(eleHTML.indexOf('不能为空')>-1||eleHTML.indexOf('不能和用户名相同')>-1||eleHTML.indexOf('不能和密码相同')>-1||eleHTML.indexOf('不能和安全码相同')>-1||eleHTML.indexOf('未被使用')>-1||eleHTML.indexOf('不能使用该邮箱')>-1||eleHTML.indexOf('请选择')>-1){
		var eleHTML = $(ele).title + eleHTML;
	}
	if(eleHTML != ''){
	    alert(eleHTML);
	}
	window.location = '#' + ele;
	$(ele).focus();
}
//表单输入验证函数 begin================================================================================

//表单的提交事件函数 begin=================================================================================
//提交表单信息
function fConfirmSubmit(event){
	var sF = $fId(event);
		if(oCheckForm.stat.result()){
			var reqInputs = [];
			var oForm = $(sF);
			switch(sF){
				//注册的第一步
				//case 'fReg0':
					//reqInputs = ['username'];
				//break;
				//注册的第二步
				case 'fReg0'://'fReg1':
					if($F('question')==_myQuestion){reqInputs =['username','password','cpassword','myQuestion','answer','year','male','usercheckcode','agree'];}
					else{reqInputs =['username','password','cpassword','question','answer','year','male','usercheckcode','agree'];}
				break;
				//修改个人信息第一步
				case 'fChginfo0':
				/*
				if($('usePassword')){
					
				} else {reqInputs=['password','pingma','usercheckcode'];}			
				*/
				if($('usePassword')){
				if($('usePassword').checked){reqInputs=['password','usercheckcode'];}
					else{reqInputs = ['pingma','usercheckcode'];}
					}else{
						reqInputs=['password','usercheckcode'];
					}
					
				break;
				//修改个人信息第二步
				case 'fChginfo1':
					reqInputs = [];
					var oInputs = Form.getElements(oForm);
					oInputs.each(function(oInput){
						if($Req(oInput)){
							var oC = new oCheckForm.checkInput($(oInput),{bEmpty:true});					
						}
					});
				break;
				//关联手机
				case 'fBindmob':
				reqInputs = ['password','mobile','ppcpass'];
				break;
				case 'fBindmob2':
				reqInputs = ['username','password'];
				break;
				
			}
			//验证提交时必填项是否为空
			if(reqInputs.length>0){
				reqInputs.each(function(oI){
				if($(oI))
					var oC = new oCheckForm.checkInput($(oI),{bEmpty:true});
				});
			}
			if(oCheckForm.stat.result()){
				oForm.submit();
				return true;		
			}
		}
	fAlert();
}
//表单的提交事件 end====================================================================================

//用户输入验证 begin========================================================================================
var oCheckForm = {};
oCheckForm.checkInput=Class.create();
oCheckForm.checkInput.prototype={
	initialize: function(obj, oOptions) {
		this.setOptions(oOptions);
		this.request(obj);
	},
	setOptions: function(oOptions) {
		this.options = {
		  bEmpty:			false,
		  iMin:				0,
		  iMax: 			0,
		  sPattern_1:		'',
		  sPattern_2:		'',
		  sPattern:			'',
		  sContrast:		'',
		  sDiffer:			'',
		  sDifferPwd:		'',
		  sSame:			'',
		  bPwdStrength:		false,
		  bEmail:			false,
		  bMobile:			false,
		  bBirthDay:		false,
		  bDate:			false,
		  bIdentityCard:	false,
		  bTelephone:		false,
		  bHasEmail:		false,
		  bHasEmailChg:		false,
		  sExistName:		'',
		  bSimplePwd:		false,
		  nickname : 		false,
		  qq	   :        false,
		  userNameRfcCheck:   false,
		  fullname:         false
		}
		Object.extend(this.options, oOptions || {});
	},
	request: function(obj){
		var iMsgId = -1;
		var sValue = obj.value;
		var iLen = strLen(sValue);
		
		var oTip = $T(obj);
		var objId = obj.id;
		var objType = obj.type.toLowerCase();
		var objTagName = obj.tagName.toLowerCase();
		var opt = this.options;
		if(!opt.bEmpty && sValue == ''){iMsgId = 0;}
		else if(!opt.bEmpty && objType=='radio'){iMsgId = -1;}
		else if(opt.bEmpty && objType!='radio' && sValue == ''){
			if(objTagName=='select'){iMsgId = 17;}
			else{iMsgId = 1;}
		}
		
		else if(opt.sExistName!='' && opt.sExistName == sValue){iMsgId = 5;}
		else if(opt.bEmpty && (objId=='male' || objId=='female') && !$('male').checked && !$('female').checked ){iMsgId = 17;}
		else if(opt.bEmpty && (objId=='agree') && !$('agree').checked){iMsgId = 17;}
		else if(opt.sPattern_1!='' && opt.sPattern_1.test(sValue)){iMsgId = '4username_1';}
		else if(opt.sPattern_2!='' && !opt.sPattern_2.test(sValue)){iMsgId = '4username_2';}
		else if(opt.sPattern!=''&&!opt.sPattern.test(sValue)){iMsgId = '4' + objId;}
		else if(opt.iMin > 0 && opt.iMin > iLen){iMsgId = '3' + objId;}
		else if(opt.iMax > 0 && opt.iMax < iLen){iMsgId = '2' + objId;}
		else if(opt.sContrast!=''&&$F(opt.sContrast)!=sValue){iMsgId = '6' + objId;}
		//else if(opt.sDiffer=='username' && $F(opt.sDiffer)==sValue){iMsgId = 13;}
		else if(opt.sDiffer=='username' ){
			
			var username = $F(opt.sDiffer);
			var pos = username.indexOf("@");
			var ssn;
			if(pos == -1)
				ssn = username;
			else
				ssn = username.substring(0,pos);
			
			var domainValue = $('domain').value;	
			var usernamefull = ssn + domainValue;
			
			if(ssn == sValue || usernamefull == sValue)
				iMsgId = 13;
			
		}
		else if((opt.sDiffer=='question' && $F('question')!='' && $F('question')!=_myQuestion && $F(opt.sDiffer)==sValue)||(opt.sDiffer=='question' && $F('question')==_myQuestion && $F('myQuestion')!='' && $F('myQuestion')==sValue)){iMsgId = 14;}
		else if(opt.sDiffer=='oldanswer' && $F(opt.sDiffer)==sValue){iMsgId = 15;}
		else if(opt.sDiffer=='oldmail' && $F(opt.sDiffer)==sValue){iMsgId = 16;}
		else if(opt.sDifferPwd=='oldpass' && $F(opt.sDifferPwd)==sValue){iMsgId = 7;}
		else if(opt.sDifferPwd=='password' && $F(opt.sDifferPwd)==sValue){iMsgId = 24;}
		else if(opt.bSimplePwd && isSimplePwd(sValue)){iMsgId = '8' + objId;}
		else if(opt.sDifferPwd=='pingma' && $F(opt.sDifferPwd)==sValue){iMsgId = 26;}
		else if(opt.bPwdStrength){iMsgId = PasswordStrength.StrengthLevel(sValue);}
		else if(opt.bEmail && !/^(-|\.|\w)+\@((-|\w)+\.)+[A-Za-z]{2,}$/.test(sValue)){iMsgId = 34;}
		else if(opt.bMobile && !/^(((13|15|18|17)\d{9})|(14\d{9}))$/.test(sValue)){iMsgId = 43;}
		else if(opt.bBirthDay && iMsgId !=42 && (parseInt(sValue) < 1902 || (new Date(sValue,($F('month')-1),$F('day'))).getTime() >= (tNow.getTime()-24*60*60*1000))){iMsgId = '3year' ;}
		else if(opt.bDate){
			var aMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
			if($F('year') && $F('year')%4==0){aMonthDays[1] = 29;}
			if(aMonthDays[($F('month')-1)]<$F('day')){iMsgId = 42;}
			if(iMsgId != 42 && $F('year') && (new Date($F('year'),($F('month')-1),$F('day'))).getTime() >= (tNow.getTime()-24*60*60*1000)){iMsgId = 42;}
		}
		else if(opt.bIdentityCard){
			if(iLen != 15 && iLen != 18){iMsgId = 20;}
			else{
				if(!verifyIdCard(sValue)){
					iMsgId = 20;
				}
			}
		}
		else if(opt.nickname){
			 var forbiddenChars = "｜＋）（×＆……％￥＃＠！～＝＼｝｛】【：；？》《、|+)(*&^%$#@!~=\\}{][:;?></";
			 var i; 
			 var c;
			 var nicknamevalid = true;
			 for(i = 0 ; i < forbiddenChars.length; ++i){
				c = (forbiddenChars.substring(i,i + 1));
				if(sValue.indexOf(c) != -1){
					nicknamevalid  = false;
					break;
				}
			 }
			if(!nicknamevalid)
				iMsgId = '4nickname';
		}else if(opt.qq){
			
			
			if(!/^[0-9]{1,20}$/.test(sValue))
				iMsgId = '4qq';
				
		}
		else if(opt.fullname){    // check fullname, can't contains netease key word
			if(sValue.indexOf("netease") != -1 || sValue.indexOf("163.com") != -1 || sValue.indexOf("126.com") != -1 || sValue.indexOf("yeah.net") != -1 || sValue.indexOf("188.com") != -1){
				iMsgId = '4firstname';
			}
		}
		else if(opt.bTelephone && !/^\d+[\-\d]*\d+$/.test(sValue)){iMsgId = 33;}
		else if(opt.bHasEmail && sValue==($F('username')+'@163.com')){iMsgId = 37;}
		else if(opt.bHasEmailChg && sValue==($F('username')+'@163.com')){iMsgId = 38;}

		else if(opt.userNameRfcCheck){       // username rfc reg check
			var rfc_value = sValue.toLowerCase();
			if(rfc_value.indexOf("..") != -1){
				  iMsgId = '4username_3';
			}
			if(rfc_value == "postmaster" || rfc_value == "noreply"){
			      iMsgId = '4username_4';
			}
		}

		var detailInfo = String(iMsgId).indexOf(objId) > 0;
		if(iMsgId>0 || detailInfo){
			oTip.innerHTML = aMsg[iMsgId] ? aMsg[iMsgId] : aMsg[iMsgId.substring(0 , iMsgId.indexOf(objId))];
			if(detailInfo){iMsgId = iMsgId.substring(0 , iMsgId.indexOf(objId))} 
			if(iMsgId>12||iMsgId<10){
				oCheckForm.stat.options[objId]=false;
				Element.addClassName(obj,'inputError');
			}else{
				Element.removeClassName(obj,'inputError');
				oCheckForm.stat.options[objId]=true;
			}
		}else{
			if(iMsgId == 0 && oTip.innerHTML == aMsg[1]){return;}
			oCheckForm.stat.options[objId]=true;
			switch(objId){
				case 'male':
					var oId = 'female';
					oCheckForm.stat.options[oId]=true;
				break;
				case 'female':
					var oId = 'male';
					oCheckForm.stat.options[oId]=true;
				break;
			}
			var sHTML = oTip.innerHTML;
			if(sHTML.indexOf('安全程度')>-1){
				Element.removeClassName(obj,'inputError');
				return;
			}else{
				oTip.innerHTML = '';
				Element.removeClassName(obj,'inputError');
			}
		}
	}
}

//验证结果
oCheckForm.stat={
	options: {
		  username:			true,
		  password:			true,
		  cpassword: 		true,
		  oldpass:			true,
		  question:         true,
		  answer:			true,
		  pingma:			true,
		  cpingma:			true,
		  mail:				true,
		  year:				true,
		  idnum:			true,
		  male:				true,
		  female:			true,
		  usercheckcode:	true
	},
	result: function(){
		for(var prop in this.options){
			if(this.options[prop]==false){
				return false;
			}
		}
		return true;
	},
	first: function(){
		for(var prop in this.options){
			if(this.options[prop]==false){
				return prop;
			}
		}
		return document.forms[0].elements[0].id;
	},
	username: function(){
		return this.options["username"];
	}
}
//用户输入验证 end========================================================================================

//功能函数 begin======================================================================================
//简单密码
var isSimplePwd = function(pwd){
	var b = false;
	var sChar = pwd.charAt(0);
	var sChars = '';
	for(var ii=0;ii<pwd.length;ii++){
		sChars += sChar; 	
	}
	if(pwd == sChars){ return true;}
	var aPwd = ['123456','12345678','123123','1234567','123321','123456789','1234567890','0123456789','0987654321','987654321','123123123','112233','110110','0123456','123465','1234560','121212','111222','321321','654321'];
	for(var i=0;i<aPwd.length;i++){
		if(aPwd[i]==pwd){
			b = true;
			break;
		}
	}
	return b;
}
//判断密码强度
var PasswordStrength ={
	Level : [12,11,10],
	LevelValue : [30,20,0],//强度值
	Factor : [1,2,5],//字符加数,分别为字母，数字，其它
	KindFactor : [0,0,10,20],//密码含几种组成的加数 
	Regex : [/[a-zA-Z]/g,/\d/g,/[^a-zA-Z\d]/g] //字符正则数字正则其它正则
}
PasswordStrength.StrengthValue = function(pwd)
{
	var strengthValue = 0;
	var ComposedKind = 0;
	for(var i = 0 ; i < this.Regex.length;i++)
	{
		var chars = pwd.match(this.Regex[i]);
		if(chars != null)
		{
			strengthValue += chars.length * this.Factor[i];
			ComposedKind ++;
		}
	}
	strengthValue += this.KindFactor[ComposedKind];
	return strengthValue;
} 
PasswordStrength.StrengthLevel = function(pwd)
{
	var sChar = pwd.charAt(0);
	var sChars = '';
	for(var ii=0;ii<pwd.length;ii++){
		sChars += sChar; 	
	}
	if(pwd == sChars){ return 10;}
	var value = this.StrengthValue(pwd);
	for(var i = 0 ; i < this.LevelValue.length ; i ++)
	{
		if(value >= this.LevelValue[i] )
			return this.Level[i];
	}
}

//修改信息的方式
function chginfoMode(useMode,nonuseMode){
	//chginfoMode('usePingma','usePassword');
	
	useModeWrap = useMode + 'Wrap';
	nonuseModeWrap = nonuseMode +'Wrap';
	var sInput = useMode.substring(3).toLowerCase();
	var oInput = $(sInput);
	var sInputBlur = nonuseMode.substring(3).toLowerCase();
	var oInputBlur = $(sInputBlur);
	oInputBlur.value ='';
	//var event = null;
	//fClearTip(event,oInput);
	$T(sInputBlur).innerHTML = '';
	oCheckForm.stat.options[sInputBlur]=true;
	oInputBlur.disabled = 'disabled';
	Element.removeClassName(oInputBlur,'inputError');
	oInput.disabled = '';
	Element.addClassName(oInput,'inputFocus');
	oInput.focus();
	$(useMode).checked='checked';
	$(useModeWrap).className='';
	$(nonuseMode).checked='';
	$(nonuseModeWrap).className='chgModeBlur';
	
	oInput.style.background = 'fff';
	oInputBlur.style.background = 'eee';
	
}
//选择修改方式
function showHiddenContent(obj){
	var wrap = obj.id + 'Wrap';
	var aCI = [];
	var oWrap = $(wrap);	
	 if(obj.checked){oWrap.style.display='block';
	 	
		if(obj.id == 'chgQuestion'){
			
	 		addObjectHeight(getParentDocumentObject("controlPanel"),200);
			addObjectHeight(getParentDocumentObject("right_content"),200);
		}else if(obj.id == 'chgMail'){
			addObjectHeight(getParentDocumentObject("controlPanel"),50);
			addObjectHeight(getParentDocumentObject("right_content"),50);
		
		}else if(obj.id == 'chgBirthday'){
			addObjectHeight(getParentDocumentObject("controlPanel"),20);
			addObjectHeight(getParentDocumentObject("right_content"),20);
		}
	 }
	 else{
		 
		 if(obj.id == 'chgQuestion'){
			
	 		addObjectHeight(getParentDocumentObject("controlPanel"),-200);
			addObjectHeight(getParentDocumentObject("right_content"),-200);
		}else if(obj.id == 'chgMail'){
			addObjectHeight(getParentDocumentObject("controlPanel"),-50);
			addObjectHeight(getParentDocumentObject("right_content"),-50);
		
		}else if(obj.id == 'chgBirthday'){
			addObjectHeight(getParentDocumentObject("controlPanel"),-20);
			addObjectHeight(getParentDocumentObject("right_content"),-20);
		}
		
		
		 if(obj.id=='chgQuestion'){
			 if(!$('oldanswer')){aCI=['question','answer'];}
			 else{aCI=['oldanswer','question','answer'];}
		 }
		 else if(obj.id == 'chgMail'){
			 if($('oldmail')){aCI=['oldmail','mail'];}
			 else{aCI = ['mail'];}
		  }
		 else{aCI=['year','month','day'];}
		 aCI.each(function(sCI){
			oCI = $(sCI);
			var sTag = oCI.tagName.toLowerCase();
			switch(sTag){
				case 'input':
					oCI.value='';
				break;
				case 'select':
					oCI.selectedIndex = 0;
				break;
			}
		 	if(oCI.tagName.toLowerCase()=='input'){oCI.value=''}
			var ci = new oCheckForm.checkInput(oCI,{});
		 });
		 oWrap.style.display='none';
	 }
}
//初始化修改方式
function ifChecked(id){
	if($(id).checked){
		var wrap = id +'Wrap';
		$(wrap).style.display='block';
	}
} 
//获取字符长度
function strLen(str){
	var ii=0;
	var strLen = str.length;
	for (var i=0;i<strLen;i++){
		if (str.charCodeAt(i)>255){ii+=2;} 
		else{ii++;}
	}
	return ii;
}
//获取url中的参数值
function getParameterFromUrl(url,name){
		var pos = url.indexOf("?");
		if(pos == -1) 
			return "";
		else{
			var result = "";
			var paramString = url.substring(pos + 1);
			if(paramString.length == 0)
				return "";
			else{
				
				var paramArray  = paramString.split("&");
				var i;
				var b = name.concat("=");
				for(i = 0 ; i < paramArray.length; ++i){
					if(paramArray[i].indexOf(b) == 0){
						result = paramArray[i].substring(b.length);
						break;
					}
				}
				return result;
			}
		}
	}

//获取url中的参数值	
function getParameter(url,name){
      return getParameterFromUrl(url,name);
}

function getPdt(){
    var pdt = '';
    var url = '';
    var product = getParameterFromUrl(window.location.href, "product");    // get pdt from param "product"
    if(product != null && product != ''){
        pdt = product;
    }else{
        var productObj = document.getElementById("product");               // get pdt from product hidden text
        if(productObj != null && productObj.value != null && productObj.value != ''){
            pdt = productObj.value;
        }else{
            var fromUrl = getParameterFromUrl(window.location.href, "url");
            if(fromUrl != null && fromUrl != ''){        // get pdt from param "url"
		    url = fromUrl;
		    if(url.indexOf(".163.com") != -1){
		        var temp2 = url.substring(url.indexOf("http://") + 7, url.indexOf(".163.com"));
		        if(temp2 == 'mail' || temp2 == 'mscan'){
		            pdt = 'mail163';
		        }else if(temp2 == 'reg'){
		            pdt = 'urs';
		        }else if(temp2 == 'blog'){
		            pdt = 'blog';
		        }else if(temp2 == 'photo'){
		            pdt = 'photo';
		        }else if(temp2 == 'xyq'){
		            pdt = 'xyq';
		        }else if(temp2 == 'xy2'){
		            pdt = 'xy2';
		        }else if(temp2 == 'xy3'){
		            pdt = 'xy3';
		        }else if(temp2 == 'tx2'){
		            pdt = 'tx2';
		        }else if(temp2 == 'dt'){
		            pdt = 'dt';
		        }
		    }
		  }else{       // get pdt from refferrer
		    var reff = document.referrer;
		    if(reff != null && reff != ''){
		        if(reff.indexOf("http://www.163.com") != -1 || reff.indexOf("http://www.netease.com") != -1){
		            pdt = '163';
		        }else if(reff.indexOf(".163.com") != -1){
		            var temp = reff.substring(reff.indexOf("http://") + 7, reff.indexOf(".163.com"));
		            if(temp == 'mail' || temp == 'mscan'){
		                pdt = 'mail163';
		            }else if(temp == 'reg'){
		                pdt = 'urs';
		            }else if(temp == 'blog'){
		                pdt = 'blog';
		            }else if(temp == 'photo'){
		                pdt = 'photo';
		            }else if(temp == 'xyq'){
		                pdt = 'xyq';
		            }else if(temp == 'xy2'){
		                pdt = 'xy2';
		            }else if(temp == 'xy3'){
		                pdt = 'xy3';
		            }else if(temp == 'tx2'){
		                pdt = 'tx2';
		            }else if(temp == 'dt'){
		                pdt = 'dt';
		            }
		        }
		    }
		}
      }  
    }
    return pdt;
}
//功能函数 end======================================================================================
