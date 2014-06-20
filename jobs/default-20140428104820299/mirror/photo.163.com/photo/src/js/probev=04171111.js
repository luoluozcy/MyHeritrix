var pageName = location.pageName;

if(pageName == "square" || pageName == "shareIndex" || (pageName == "newAlbum" && location.hash.indexOf('#m=0') >= 0)){ //  || 
	var timeseconds = (new Date()).getSeconds() + '';
	if(timeseconds.charAt(timeseconds.length - 1) < 6 || true){
	
Probe = (function () {
var ERROR_REPORT_URL = 'http://cdn.hz.netease.com/CdnError',
	SUCCESS_REPORT_URL = 'http://cdn.hz.netease.com/CdnLoadTimeout',
	CDN_QUERY_URL_WS = 'http://tools.wscollect.chinanetcenter.com:5000/api/netease?d=',
	READY_STATE_RE = /^(?:loaded|complete|undefined)$/,
	IMG_REQ_RE = /http:\/\/([^\/]+)([^"]+(?:jpg|gif|png|bmp|jpeg))/,
	JS_REQ_RE = /http:\/\/([^\/]+)([^"]+js)/,
	head = document.getElementsByTagName('head')[0] || document.documentElement,
	param= {timeout: 2000},
	currentUrlObj = {},
	counter = 0;
var getQueryString = function(param	){
	var queryString = '?type=jsonp';
	for(var key in param){
		queryString += '&' + key + '=' + encodeURIComponent(param[key]);
	}
	return queryString;
}
//请求Js
var requestJs=function (rParam){
	if(!rParam||!rParam.url)return;
	var script = document.createElement('SCRIPT'),
		fileSize,
		requestTime,
		content,
		timeoutTimer;
	var successLoad = function(){
		if (READY_STATE_RE.test(script.readyState)) {
			if(rParam.timeout&&!timeoutTimer)return;
			requestTime = new Date() - requestTime;
			content  = script.innerHTML;
			recycle();
			var option = {
				requestTime:requestTime,
				content:content
			}
			!!rParam.successCallback&&rParam.successCallback(option);
		}
	};
	var errorLoad = function(){
		if(rParam.timeout&&!timeoutTimer)return;
		recycle();
		!!rParam.errorCallback&&rParam.errorCallback(rParam.url);
	};
	var recycle = function(){
		timeoutTimer = window.clearTimeout(timeoutTimer);
		script.onload = script.onerror = script.onreadystatechange = null;
		head.removeChild(script);
		script = null;
	}
	script.onload = script.onreadystatechange = successLoad;
	script.onerror = errorLoad;
	script.src = rParam.url;
	requestTime = + new Date;
	head.appendChild(script);
	if(!!rParam.timeout)timeoutTimer = window.setTimeout(errorLoad, rParam.timeout);
}
//请求Image
var requestImg=function (rParam){
	if(!rParam||!rParam.url)return;
	var img = document.createElement('IMG'),
		fileSize,
		requestTime,
		timeoutTimer;
	var successLoad = function(){
		if(rParam.timeout&&!timeoutTimer)return;
		requestTime = new Date - requestTime;
		recycle();
		var option = {
			url: rParam.url,
			requestTime: requestTime
		}
		!!rParam.successCallback&&rParam.successCallback(option);
	};
	var errorLoad = function(){
		if(rParam.timeout&&!timeoutTimer)return;
		recycle();
		!!rParam.errorCallback&&rParam.errorCallback(rParam.url);
	};
	var recycle = function(){
		timeoutTimer = window.clearTimeout(timeoutTimer);
		img.onload = img.onerror = null;
		img = null;
	}
	img.onload = successLoad;
	img.onerror = errorLoad;
	img.src = rParam.url;
	if(!!rParam.timeout){
		requestTime = + new Date;
		timeoutTimer = window.setTimeout(errorLoad, rParam.timeout);
	}
}
//正确报告
var successReport = function(resourceUrl, ip, fileSize, loadTime, clientDns, cdnIps, saveCdnInfoOnly, callback){
	var reportParam = {
		productName: currentUrlObj.productName,
		ip: ip,
		resourceUrl: resourceUrl,
		fileSize: fileSize,
		loadTime: loadTime,
		clientDns: clientDns,
		cdnIps: cdnIps,
		userName: param.userName,
		saveCdnInfoOnly:saveCdnInfoOnly
	};
	requestJs({
		url: SUCCESS_REPORT_URL+getQueryString(reportParam),
		successCallback:function(){
			callback()
		}
	});
}
//错误报告
var errorReport = function(resourceUrl, ip, clientDns, cdnIps, saveCdnInfoOnly, callback){
	var reportParam = {
		productName: currentUrlObj.productName,
		ip: ip,
		resourceUrl: resourceUrl,
		clientDns: clientDns,
		cdnIps: cdnIps,
		userName: param.userName,
		saveCdnInfoOnly:saveCdnInfoOnly
	};
	requestJs({
		url: ERROR_REPORT_URL+getQueryString(reportParam),
		successCallback:function(){
			callback()
		}
	});
}
//获得CDN详情
var getCdnDetail = function(hostname,successCallback){
	var cdn = currentUrlObj.cdn;
	if(cdn=='lanxun'){
		var rand = Math.random().toString(36).slice(2),
    	domain = "yachuan" + rand + ".term.chinacache.net";
    	requestJs({
    		url:'http://'+domain+'/query?hostname=' + hostname,
    		successCallback: function(){
				successCallback($_lanxun_cdn_servers);
			}
    	});
	}else if(cdn=='wangsu'){
		requestJs({
    		url:CDN_QUERY_URL_WS+hostname,
    		successCallback: function(){
				successCallback($_wangsu_cdn_server);
			}
    	});
	}
	
}
//探测单个文件
var probeOne = function(url, callback){
	var rurl = url; // + '?r=' + Math.random();
	if(IMG_REQ_RE.test(url)){
		var domain = url.match(IMG_REQ_RE);
		requestImg({
			url: rurl,
			timeout:3000,
			successCallback: function(option){
				fileSize = currentUrlObj.size;
				successReport(url, '', fileSize, option.requestTime, '', '', true, function(){
					if($_cdn_result.cdnAbnormal){
						getCdnDetail(domain[1],function($_cdn_servers){
							successReport(url, $_cdn_servers.client, fileSize, option.requestTime, $_cdn_servers.local_dns, $_cdn_servers.edge_server, false, callback);
						});
					}else{
						successReport(url, '', fileSize, option.requestTime, '', '', false, callback);
					}
				});
			},
			errorCallback:function(url){
				errorReport(url, '', '', '', true, function(){
					if($_cdn_result.cdnAbnormal){
						getCdnDetail(domain[1],function($_cdn_servers){
							errorReport(url, $_cdn_servers.client, $_cdn_servers.local_dns, $_cdn_servers.edge_server, false, callback);	
						});
					}else{
						errorReport(url, '', '', '', false, callback);
					}	
				});	
			}
		});
	}else if(JS_REQ_RE.test(url)){
		var domain = url.match(JS_REQ_RE);
		requestJs({
			url: rurl,
			timeout:3000,
			successCallback:function(option){
				fileSize = currentUrlObj.size;
				successReport(url, '', fileSize, option.requestTime, '', '', true, function(){
					if($_cdn_result.cdnAbnormal){
						getCdnDetail(domain[1],function($_lanxun_cdn_servers){
							successReport(url, $_cdn_servers.client, fileSize, option.requestTime, $_cdn_servers.local_dns, $_cdn_servers.edge_server, false, callback);
						});
					}else{
						successReport(url, '', fileSize, option.requestTime, '', '', false, callback);
					}
				});
			},
			errorCallback:function(url){
				errorReport(url, '', '', '', true, function(){
					if($_cdn_result.cdnAbnormal){
						getCdnDetail(domain[1],function($_cdn_servers){
							errorReport(url, $_cdn_servers.client, $_cdn_servers.local_dns, $_cdn_servers.edge_server, false, callback);	
						});
					}else{
						errorReport(url, '', '', '', false, callback);
					}	
				});	
			}
		});
	}
}
var probe = function(){
	currentUrlObj = param.urls[counter];
	if(counter == param.urls.length)return;
	probeOne(currentUrlObj.url, function(){
		counter++;
		probe();
	});
}
return {
	init:function(option){
		param.urls = option.urls || [];
		param.userName = option.userName||'';
		if(!!option.timeout){
			param.timeout = option.timeout;
		}
		window.setTimeout(probe, param.timeout);
	}
};
})();


var urls = [
	{url:'http://r.ph.126.net/photo/image/head/logo-v2-A.png',size:3200, productName:'album', cdn:'lanxun'},
			  {url:'http://r1.ph.126.net/photo/image/album/tag-header.iphone.png',size:2200, productName:'album', cdn:'lanxun'},
			  {url:'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/uoBH6m8CLuZXoXb0_eQcPA==/2649805430771799581.jpg_64x64x0.jpg',size:2100
				, productName:'album', cdn:'lanxun'},
			  {url:'http://imgcdn.ph.126.net/-rCzWeu-CK-0yQEMIyqVmw==/4848687948818326255.jpg',size:4900, productName:'album', cdn:'lanxun'},
			  {url:'http://s1.ph.126.net/VPtXrK8Pk43cJChMuvf_gQ==/28587305431249.js',size:1700, productName:'album', cdn:'lanxun'},
			  {url:'http://s1.ph.126.net/VPtXrK8Pk43cJChMuvf_gQ==/28587305431249.js',size:1700, productName:'album', cdn:'lanxun'},
			  {url:'http://imgrc.ph.126.net/Jrj-58fEJOc5rvoTnQ7oQQ==/4230005950120919919.jpg',size:8000, productName:'album', cdn:'lanxun'},
			  {url:'http://aipai.ph.126.net/images/v1/logo.png',size:4400, productName:'album', cdn:'lanxun'}
			  ];

var sampleUrls = [
	urls[Math.floor(Math.random() * urls.length)], 
	{url:'http://img0.ph.126.net/-rCzWeu-CK-0yQEMIyqVmw==/4848687948818326255.jpg',size:4900, productName:'album_wangsu', cdn:'wangsu'},
	{url:'http://img1.ph.126.net/-rCzWeu-CK-0yQEMIyqVmw==/4848687948818326255.jpg',size:4900, productName:'album_wangsu', cdn:'wangsu'},
	{url:'http://img2.ph.126.net/-rCzWeu-CK-0yQEMIyqVmw==/4848687948818326255.jpg',size:4900, productName:'album_wangsu', cdn:'wangsu'}
];
//var seq = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//
//for(var i = 0; i < 5; i++){
//	var n = Math.floor(Math.random() * (9 - i)) + i;
//	var temp = seq[i];
//	seq[i] = seq[n];
//	seq[n] = temp;
//	sampleUrls[i] = urls[seq[i]];
//}
//{url:'http://imgbbs.ph.126.net/YUT18_7dS3Qj1yLnsHRlSw==/6597496377168762539.jpg',size:6600}
Probe.init({urls: sampleUrls,
			userName: UD.hostName,
			timeout:10000});
}
}