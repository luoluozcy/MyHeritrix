/*
*表示必须,非必须项的第一个选项选项为默认选项
url(*)							Flash地址
id(*)							对联的ID，保持唯一，建议用nad+合同号+位置的形式，如：nad5694Home
nextId:''/任意合法id			播放完毕之后触发播放的媒体ID
visibility:true/false			广告加载的时候是否可见，true为可见
width:200/任意数字				宽度
height:150/任意数字				高度
xPx:0/任意数字					水平方向上Flash左边到网页左边的像素值
yPx:190/任意数字				垂直方向上Flash顶边到浏览窗口顶边的像素值
time:7/任意数字					定时关闭的时间，默认7s
*/
var nadFlashLayer= function(url,id,options){
	if(nadIsLtIE5_5()){return;}
	if(!url){return;}else{this.url = url;}
	if(!id){return;}else{this.id = id;}
	this.options = {
		nextId:		'',
		visibility:	true,
		width:		200,
		height:		150,
		xPx:		0,
		yPx:		190,
		time:		7
	}
	Object.nadExtend(this.options,options||{});
	this.create();
	nadAddEventListener(window,'resize',this.positionX.nadBind(this));
}
nadFlashLayer.prototype={
	create:function(){
		var wrap = document.createElement('span');
		var _opt = this.options;
		wrap.style.position = 'absolute';
		if(!_opt.visibility){wrap.style.display = 'none';}
		wrap.style.left = nadXCenter() + _opt.xPx + 'px';
		wrap.style.top = _opt.yPx + 'px';
		wrap.innerHTML = nadCreateSwfHtml(this.url,this.id,{
			width	: _opt.width,
			height	: _opt.height,
			quality	: 'high',
			wmode	: 'window'
		});
		wrap.son = this;
		document.getElementById("ssid1").appendChild(wrap);
		this.ad = wrap;
		if(_opt.visibility){this.play();}
	},
	positionX:function(){
		this.ad.style.left = nadXCenter() + this.options.xPx + 'px';
	},
	play:function(){
		setTimeout(this.doFSCommand.nadBind(this),this.options.time*1000);
	},
	doFSCommand:function(){
		document.getElementById(this.id).parentNode.style.display = 'none';
		var _nextId = this.options.nextId;
		if(_nextId){
			var _wrap = document.getElementById(_nextId).parentNode;
			_wrap.style.display = '';
			_wrap.son.play();
		}
	}
}
/*==common function==*/
var nadUserAgent = navigator.userAgent;
var nadIsOpera = nadUserAgent.indexOf('Opera')>-1
var nadIsIE = nadUserAgent.indexOf('MSIE')>-1 && !nadIsOpera;
var nadIsLtIE5_5 = function(){
	if(nadIsIE){
		var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
		reIE.test(nadUserAgent);
		var IeVersion = parseFloat(RegExp["$1"]);
		return IeVersion <5.5;
	}
}
Object.nadExtend = function(destination, source) {
  for (var property in source) {
    destination[property] = source[property];
  }
  return destination;
}
Function.prototype.nadBind = function() {
  var __method = this, args = $nadA(arguments), object = args.shift();
  return function() {
    return __method.apply(object, args.concat($nadA(arguments)));
  }
}
var $nadA = function(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0, length = iterable.length; i < length; i++)
      results.push(iterable[i]);
    return results;
  }
}
var nadAddEventListener= function(obj,e,f){
	if(document.addEventListener){obj.addEventListener(e,f,false);}
	else{
		e = 'on' + e;
		obj.attachEvent(e,f);
	}
}
var nadXCenter = function(){
	var _dw = document.documentElement.offsetWidth;
	var _bw = document.body.offsetWidth;
	return (_dw>_bw?_dw:_bw)/2;
}
var nadCreateSwfHtml = function(url,id,options){
	var swfHtml='';
	if(!url){return;}
	_opt = options;
	if(nadIsIE){
		swfHtml += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ _opt.width +'" height="'+ _opt.height +'" id="'+ id +'">';
		swfHtml += '<param name="movie" value="'+ url +'" />';
		swfHtml += '<param name="quality" value="'+ _opt.quality +'" />';
		swfHtml += '<param name="wmode" value="'+ _opt.wmode +'" />';
		swfHtml += '</object>';
	}
	else{
		swfHtml += '<embed src="'+ url +'" quality="'+ _opt.quality +'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+ _opt.width +'" height="'+ _opt.height +'" wmode="'+ _opt.wmode +'" id="'+ id +'" name="'+ id +'" swliveconnect="true"></embed>'
	}
	return swfHtml;
}
/*==common function==*/
 