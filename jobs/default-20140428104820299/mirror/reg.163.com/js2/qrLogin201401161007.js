(function(window,$,undefined){var document=window.document,setTimeout=window.setTimeout,clearTimeout=window.clearTimeout,defaultOptions={product:"urs",usage:0,size:188,format:"jpeg",pollingSec:2000,maxPollingTimes:150,completePollingTimes:60,confirmLogin:function(){alert("用户已确认，请执行登录代码！")},scanIsComplete:function(){alert("扫描完成，等待用户确认！")},codeLose:function(){alert("二维码失效！")}},_myOptions={},$target=null,pollingTimer=null,pollingTimes=0,isFirstCompleteScan=true,protocol=/^https:\/\//.test(window.location.href)?"https":"http",isURSDomain=/^(http|https):\/\/reg\.163\.com(\/|\b)/.test(window.location.href),getCodeIdURL=protocol+"://reg.163.com/services/getqrcodeid",getCodeURL=protocol+"://reg.163.com/services/getUrlQrcode",getStatusURL=isURSDomain?protocol+"://reg.163.com/services/qrcodeauth":protocol+"://q.reg.163.com/services/ngxqrcodeauthstatus",getAuthURL=protocol+"://reg.163.com/services/qrcodeauth",getCodeId=function(callback){var params=["?product=",_myOptions.product,"&usage=",_myOptions.usage,"&callback=?"].join("");$.getJSON(getCodeIdURL+params,function(data){if(data.retCode-0===200){var qrId=eval("("+data.content+")").l.i;if(typeof callback==="function"){callback(qrId)}}else{}})},getQrStatus=function(qrId,callback){var params=["?uuid=",qrId,"&product=",_myOptions.product,(isURSDomain?"":"&callback=?")].join("");$.getJSON(getStatusURL+params,function(data){if(typeof callback==="function"){callback(data)}})},getAuth=function(qrId,callback){var params=["?uuid=",qrId,"&product=",_myOptions.product,"&callback=?"].join("");$.getJSON(getAuthURL+params,function(data){if(typeof callback==="function"){callback(data)}})},qrPolling=function(qrId){pollingTimer=setTimeout(function(){getQrStatus(qrId,function(data){switch(data.retCode-0){case 200:if(isURSDomain){_myOptions.confirmLogin(data)}else{getAuth(qrId,function(data){_myOptions.confirmLogin(data)})}break;case 408:(--pollingTimes>0)&&qrPolling(qrId);break;case 409:if(typeof _myOptions.scanIsComplete==="function"){_myOptions.scanIsComplete()}if(isFirstCompleteScan){isFirstCompleteScan=false;pollingTimes=_myOptions.completePollingTimes}(--pollingTimes>0)&&qrPolling(qrId);break;default:if(typeof _myOptions.codeLose==="function"){_myOptions.codeLose()}break}if(pollingTimes===0){if(typeof _myOptions.codeLose==="function"){_myOptions.codeLose()}}})},_myOptions.pollingSec)},updateQrLogin=function(){pollingTimes=_myOptions.maxPollingTimes;isFirstCompleteScan=true;getCodeId(function(qrId){var params=["?uuid=",qrId,"&size=",_myOptions.size,"&format=",_myOptions.format].join("");$target.attr("src",getCodeURL+params);qrPolling(qrId)});return $target},stopPolling=function(){clearTimeout(pollingTimer);pollingTimer=null;return $target},qrLogin=function(myOptions){$target=$(this);_myOptions=$.extend(defaultOptions,myOptions);return $target};$.fn.qrLogin=qrLogin;$.fn.updateQrLogin=updateQrLogin;$.fn.stopPolling=stopPolling})(window,jQuery);