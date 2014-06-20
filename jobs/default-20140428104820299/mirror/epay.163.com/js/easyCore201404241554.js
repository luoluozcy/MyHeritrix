/*
 * 网易宝上午后台 基础js框架
 * [Depend On]
 *		jQuery 1.4.2+
 * [Change Log]
 * 2012-11-12  基于easyCore组件创建，并适当精简
 */
(function(window, $, undefined){
/*
 * 缓存正确的变量引用
 */
var document = window.document;
/*
 * 修复IE6背景缓存bug
 */
try{document.execCommand("BackgroundImageCache", false, true);}catch(e){}
/*
 * 测试浏览器是否支持正则表达式预编译
 */
var testReg = /./, regCompile = testReg.compile && testReg.compile(testReg.source,"g");
//保存是否支持正则表达式预编译
RegExp.regCompile = regCompile;

/*
 * 预编译常用的正则表达式
 */
var compileReg = [
	/[\u4e00-\u9fa5\u3400-\u4db5\ue000-\uf8ff]/g,	//检测中文字符，共三区汉字：CJK-A、CJK-B、EUDC
	/^(?:\s|\xa0|\u3000)+|(?:\s|\xa0|\u3000)+$/g, //检测前后空格　\u00a0 == \xa0　是html中 &nbsp; 中文全角空格是 \u3000
	/([^\x00-\xff])/g	//检测双字节字符，并保留匹配结果
];
regCompile && $.each(compileReg, function(i, reg){compileReg[i] = reg.compile(reg.source, "g");});

/*
 * 扩展String对象
 */
$.extend(String.prototype,{
	//删除前后空格
	trim : function(){return this.replace(compileReg[1],"");},
	//计算字节占位长度
	byteLen : function(){return this.replace(compileReg[2],"ma").length;},
	//按字节截取字符串
	// len		为要截取的字节数
	// holder	截取后的字符串后缀，比如"..."
	cutString:function(a,b){if(b){var c=String(b),hdLen=c.length,str=this.replace(compileReg[2],"$1 ");a=a>=hdLen?a-hdLen:0;b=str.length>a?c:"";return str.substr(0,a).replace(/([^\x00-\xff]) /g,'$1')+b}return this.substr(0,a).replace(compileReg[2],'$1 ').substr(0,a).replace(/([^\x00-\xff]) /g,'$1')},
	//截取文件名
	getFileName : function(){var m=/[^\\]+\.?[^\\\.]+$/g.exec(this.replace(/\//g,"\\"));return m?m[0]:""}
});
/*
 * 利用制表符检测IE678
 * 对渲染引擎和脚本引擎进行综合探测来判断IE版本
 */
$.isIE678="\v"=="v";if($.isIE678){$.isIE8=!!'1'[0];$.isIE6=!$.isIE8&&(!document.documentMode||document.compatMode=="BackCompat");$.isIE7=!$.isIE8&&!$.isIE6}
/*
 * 自动修复低版本IE的click BUG
 * 仅仅IE6、7、8有click问题
 */
if($.isIE678){var fixIEClick=function(b){var n=b.length,i=0,dom;for(;i<n;i++){dom=b[i];if(!dom.fixClick){dom.fixClick=true;$(dom).bind("dblclick",function(e){var a=e.target,n=0;while(a&&a.nodeType!==9&&(a.nodeType!==1||a!==this)){if(a.nodeType===1){if(a.fixClick)return}a=a.parentNode}e.type="click";e.source="dblclick";$(e.target).trigger(e)})}}};$.fn.extend({_bind_:$.fn.bind,bind:function(a,b,c){/^click$/gi.test(a)&&fixIEClick(this);return this._bind_(a,b,c)}})}
/*
 * 使得低版本IE识别HTML5标签
 */
if( $.isIE678 ){
	var html5 = "abbr,article,aside,audio,canvas,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),i = html5.length;
	while(i--) document.createElement(html5[i]);
}
/*
 * jQuery简单扩展[小工具集]
 */
$.extend({
	//从URL中捕获参数
	getUrlPara: function(paraName) {
		var str = window.location.search.replace(/^\?/g, ""), dstr = str;
		try{dstr = decodeURIComponent(str);
		}catch(e){dstr = str.replace(/"%26"/g, "&");}
		return $.getParaFromString(dstr, paraName);
	},
	//从HASH中捕获参数
	getHashPara: function(paraName) {return $.getParaFromString(window.location.hash.replace(/^#*/, ""), paraName); },
	//从字符串中捕获参数
	getParaFromString: function(str, paraName) {
		var reg = new RegExp("(?:^|&)" + $.safeRegStr(paraName) + "=([^&$]*)", "gi");
		return reg.test(str) ? decodeURIComponent(RegExp.$1) : "";
	},
	//替换安全的html字符串
	safeHTML : function( str ){return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");},
	//替换安全的正则表达式字符串
	safeRegStr : function( str ){return String(str).replace(/([\\\(\)\{\}\[\]\^\$\+\-\*\?\|])/g, "\\$1"); },
	//阻止冒泡函数
	stopProp : function(e){e.stopPropagation()},
	//阻止默认行为
	preventDft : function(e){e.preventDefault()},
	//判断是否是左键点击，e为jquery事件对象
	isLeftClick : function( e ){return e.button == ("\v" == "v" ? 1 : 0);},
	//格式化日期
	formatTime : function(timeNum,tmpl){var num=/^\d+$/gi.test(timeNum+"")?+timeNum:Date.parse(timeNum);if(isNaN(num))return timeNum;var D=new Date(num),zz=function(a){return("0"+a).slice(-2)},yyyy=D.getFullYear(),M=D.getMonth()+1,MM=zz(M),d=D.getDate(),dd=zz(d),h=D.getHours(),hh=zz(h),m=D.getMinutes(),mm=zz(m),s=D.getSeconds(),ss=zz(s);return(tmpl||"yyyy-MM-dd hh:mm:ss").replace(/yyyy/g,yyyy).replace(/MM/g,MM).replace(/M/g,M).replace(/dd/g,dd).replace(/d/g,d).replace(/hh/g,hh).replace(/h/g,h).replace(/mm/g,mm).replace(/m/g,m).replace(/ss/g,ss).replace(/s/g,s)}
});
/*
 * 格式化模版字符串
 * string 待格式化的字符串，占位符为 {key} 而不是其他模版文件中的 ${key} ---- MaChao: 是我想不到为什么要添加一个$前缀的原因和理由
 * source 填充数据，支持多参、数组、对象类型（对象名仅支持数字英文和下划线）
 */
var formatReg = regCompile ? /./.compile("\\{([\\w\\.]+)\\}", "g") : /\{([\w\.]+)\}/g;
$.format = function(string, source){
	var isArray = true, N, numReg,
		//检测数据源
		data = source === undefined ? null
				: $.isPlainObject(source) ? (isArray = false, source)
					: $.isArray(source) ? source
						: Array.prototype.slice.call(arguments, 1);
	if( data === null )
		return string;
	//数组长度
	N = isArray ? data.length : 0;
	//预编译数字检测正则表达式
	numReg = regCompile ? /./.compile("^\\d+$") : /^\d+$/;
	//执行替换
	return String(string).replace(formatReg, function(match, index) {
		var isNumber = numReg.test(index), n, fnPath, val;
		if( isNumber && isArray ){
			n = parseInt(index, 10);
			return n < N ? data[n] : match;
		}else{ //数据源为对象，则遍历逐级查找数据
			fnPath = index.split(".");
			val = data;
			for(var i=0; i<fnPath.length; i++)
				val = val[fnPath[i]];
			return val === undefined ? match : val;
		}
	});
};
/*
 * 闪动一个Dom元素
 * 不支持动画队列，仅仅支持单个元素调用
 */
$.fn.flash = function(a,b,c){if($.isFunction(a)){c=a;a=0}if($.isFunction(b)){c=b;b=0}var N=2*(a||3),i=0,isShow=this.is(":visible"),timer=this.flashTimer,obj=this;timer&&window.clearInterval(timer);timer=window.setInterval(function(){obj.css("visibility",i%2?"visible":"hidden");i++;if(i>=N){window.clearInterval(timer);obj.flashTimer=0;$.isFunction(c)&&c.call(obj)}},b||200);this.flashTimer=timer;return this};
/*
 * Tab切换组件
 * callback		[可选]切换回调，当tab显式的时候调用，this指向当前tab，参数是 内容dom
 * method		[可选]切换方法，支持所有合理的方法监听
 * itemTag		[可选]tab元素，用于代理监听，默认 li
 * activeCss	[可选]选中态样式，默认 active
 * hookAttr		[可选]与内容卡关联的节点名称，默认 rel，节点内容为 selector，通常是 #contentID
 */
$.fn.bindTab=function(d,f,g,h,i){if(!$.isFunction(d)){i=h;h=g;g=f;f=d;d=$.noop}return this.each(function(){var c=$(this),timer,css=h||"active",tag=g||"li",hook=i||"rel",fireMethod=f||"mouseenter",delay=fireMethod=="mouseenter",toggTab=function(a){$(c.find("."+css).removeClass(css).attr(hook)).hide();var b=$(a.addClass(css).attr(hook)).show()[0];d.call(a[0],b)};c.delegate(tag,fireMethod,function(){var a=$(this);if(a.hasClass(css)||this.disabled)return;if(delay){timer&&window.clearTimeout(timer);timer=window.setTimeout(function(){toggTab(a)},200)}else toggTab(a)});delay&&c.delegate(tag,"mouseleave",function(){timer&&window.clearTimeout(timer);timer=0});tag=="a"&&c.delegate(tag,"click",function(e){e.preventDefault()})})};
/*
 * 数据滚动组件
 * 2012-05-03 马超 创建
 * 支持一个组合参数：
 *	perScroll	每次滚动的行数
 *	speed		每移动一个像素平均花费的时间（ms）
 *	interval	两次滚动之间的时间（含滚动时间）
 */
$.fn.scrollGrid = function(c){var d=$.extend({perScroll:3,speed:14,interval:5000},c||{});return this.each(function(){var b=$(this),ul=b.find(">ul"),perScroll=d.perScroll,odd=ul.find("li").length%2,timer,action=function(){var a=0,orgLi=ul.find("li:lt("+perScroll+")").each(function(){a+=$(this).outerHeight()}),copyLi=orgLi.clone().removeClass("odd even").appendTo(ul).each(function(){odd=(odd+1)%2;$(this).addClass(odd?"odd":"even")});ul.animate({marginTop:"-"+a+"px"},a*d.speed,function(){orgLi.remove();ul.removeAttr("style")})};if(ul.length==1&&b[0].scrollHeight>b[0].offsetHeight){b.bind({mouseenter:function(){window.clearTimeout(timer)},mouseleave:function(){timer=window.setInterval(action,d.interval)}});b.mouseleave()}})};
/*
 * 本地存储组件
 * 扩展了window.localStorage/ window.LS / jQuery.LS
 */
(function(c,f){if(c.localStorage)return;var g={file:c.location.hostname||"localStorage",o:null,init:function(){if(!this.o&&document.body){var a,doc=document,box;try{a=new ActiveXObject('htmlfile');a.open();a.write('<s'+'cript>document.w=window;</s'+'cript><iframe src="/favicon.ico"></frame>');a.close();doc=a.w.frames[0].document}catch(e){doc=document}try{box=doc.body||doc,o=doc.createElement('input');o.type="hidden";o.addBehavior("#default#userData");box.appendChild(o);var d=new Date();d.setDate(d.getDate()+365);o.expires=d.toUTCString();o.load(this.file);this.o=o;c.localStorage.length=this.key()}catch(e){this.o=null;return false}};return true},item:function(a,b){if(!this.init())return;try{this.o.getAttribute(a)}catch(e){this.o=null;return this.item(a,b)}if(b!==f){b===null?this.o.removeAttribute(a):this.o.setAttribute(a,b+"");this.o.save(this.file)}else{var v=this.o.getAttribute(a);return v===null?f:v}},clear:function(){if(!this.init())return;var a=this.key(-1);for(var b in a)this.o.removeAttribute(b);this.o.save(this.file)},key:function(a){if(!this.init())return-1;var b=this.o.XMLDocument.documentElement.attributes,n=b.length,i=0,t,obj={};if(a===f)return n;if(a===-1){for(;t=b[i];i++)obj[t.name]=this.item(t.name);return obj}return a<n&&a>=0?b[a].name:f}};c.localStorage={setItem:function(a,b){g.item(a,b);this.length=g.key()},getItem:function(a){return g.item(a)},removeItem:function(a){g.item(a,null);this.length=g.key()},clear:function(){g.clear();this.length=g.key()},length:-1,key:function(i){return g.key(i)},isVirtualObject:true}})(window);(function(c,d,e){var f={set:function(a,b){if(this.get(a)!==e)this.remove(a);d.setItem(a,b)},get:function(a){var v=d.getItem(a);return v===null?e:v},remove:function(a){d.removeItem(a)},clear:function(){d.clear()},each:function(a){var b=this.obj(),fn=a||function(){},key;for(key in b)if(fn.call(this,key,this.get(key))===false)break},obj:function(){var a={},i=0,n,key;if(d.isVirtualObject){a=d.key(-1)}else{n=d.length;for(;i<n;i++){key=d.key(i);a[key]=this.get(key)}}return a}},j=c.jQuery;c.LS=c.LS||f;if(j)j.LS=j.LS||f})(window,window.localStorage);
/*
 * Cookie操作组件
 * 来源于jQueryUI/extend
 */
$.cookie = function (key, value, options) {
	// key and value given, set cookie...
	if (arguments.length > 1 && (value === null || typeof value !== "object")) {
		options = $.extend({}, options);
		if (value === null) {
			options.expires = -1;
		}
		if (typeof options.expires === 'number') {
			var days = options.expires, t = options.expires = new Date();
			t.setDate(t.getDate() + days);
		}
		return (document.cookie = [
			encodeURIComponent(key), '=',
			options.raw ? String(value) : encodeURIComponent(String(value)),
			options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
			options.path ? '; path=' + options.path : '',
			options.domain ? '; domain=' + options.domain : '',
			options.secure ? '; secure' : ''
		].join(''));
	}
	// key and possibly options given, get cookie...
	options = value || {};
	var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
	return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
/*
 * 固定位置组件〔for IE6〕
 */
$.fn.fixPosition=function(){var c=this,t,b,l,r,css=function(o,a){return o.css(a).replace(/\D/g,"")||null},win=$(window),top,left,pos,fn;if(c.css("position")=="absolute"){pos=c.offset();t=pos.top;b=css(c,"bottom");l=pos.left;r=css(c,"right");top=+win.scrollTop();left=+win.scrollLeft();fn=function(){var a=+win.scrollTop(),_left=+win.scrollLeft();b?c.css("bottom",+b+1).css("bottom",b+"px"):c.css("top",(+t+a-top)+"px");r?c.css("right",+r+1).css("right",r+"px"):c.css("left",(+l+_left-left)+"px")};win.scroll(fn).resize(fn)}return c};
})(window, jQuery);
/*********************** easyBase End ***********************/
/*
 * 核心对象Core
 */
var Core = (function(window, $, undefined){
var alert = function(content){
	$.dialog({
		title : "提示",
		width : 0,
		button : [],
		animate : 0,
		dragable : false,
		content : "<p style='padding:20px 10px;width:200px'>"+content+"</p>"
	});
};

//"use strict";
var Core = {
	/*
	 * UI版本
	 */
	version : "1.0",
	/*
	 * 保留两位小数
	 */
	getPriceStr : function( num ){
		var num=((num+"").indexOf(".")>-1)?(num+""):num+".00";
		var a = Math.pow(10,2),arr=num.split(".");
		for(var i=0;i<arr.length;i++){
			arr[i]=arr[i].replace(/\D/g,"") || "";
		}
		arr=parseFloat(arr.join(".")) || 0;
		var arrs=0?Math.ceil(arr*a)/a : Math.round(arr*a)/a;
		arr = (arrs+"").split(".");
		arr[0] = parseInt(arr[0]);
		arr[1] = arr.length == 1 ? "00" : (arr[1]+"0").substr(0, 2);
		return arr.join(".");
	},
	/*
	 * 内存强制回收函数引用
	 */
	GC : window.CollectGarbage || $.noop,
	
	/*
	 * 时间戳
	 */
	now : function(){return (new Date).getTime();},
	getLocalTime:function(times,exact,backnum){
		var str="",dt=new Date(times);	
		  var y,m,d,h,mm,s;		
		  y=dt.getFullYear();		
		  m=Core.zeroize(dt.getMonth()+1);
		  d=Core.zeroize(dt.getDate());
		  h=Core.zeroize(dt.getHours());
		  mm=Core.zeroize(dt.getMinutes());
		  s=Core.zeroize(dt.getSeconds());
		  if(exact){
		  	str=y+"-"+m+"-"+d+" "+h+":"+mm+":"+s;
		  }else{
		  	str=y+"-"+m+"-"+d;
		  }
		  if(backnum=="h"){
		  	return h;
		  }else{
		  	return str;
		  }
	},
	getDays:function(times){
		var str="",d=new Date(times);
		if(d.getDay()==5){return "星期五"}
		if(d.getDay()==6){return "星期六"}
		if(d.getDay()==0){return "星期天"}
		if(d.getDay()==1){return "星期一"}
		if(d.getDay()==2){return "星期二"}
		if(d.getDay()==3){return "星期三"}
		if(d.getDay()==4){return "星期四"}
	},
	getWhe:function(times){
		var whe=parseInt(times);
		if(times>=0 && times<6){return "凌晨"}
		if(times>=6 && times<9){return "早上"}
		if(times>=9 && times<11){return "上午"}
		if(times>=11 && times<13){return "中午"}
		if(times>=13 && times<17){return "下午"}
		if(times>=17 && times<19){return "傍晚"}
		if(times>=19 && times<24){return "晚上"}
	},
	zeroize:function(num){
		if(num<10){
			return "0"+num;
		}else{
			return num
		}
	},
	/*
	 *返回上一页
	 */
	backPage:function(){
		history.go(-1);
		return false;
	},
	/*
	 * 快速初始化入口
	 * 需要在页面底部插入激活代码 Core.quickInit();
	 */
	quickInit : $.noop,
	quickReload:function(){
		window.location.reload();
	},
	/*
	 * 业务配置信息对象/缓存对象
	 */
	navConfig : {
		topUl:null,
		setT:null,
		appUl:null,
		appLink:null,
		placeholderInput:null
	},
	/*
	 * 初始化入口
	 */
	init : function(){
		this.myInit();
		//全局监听a[href=javasscript:] 类型的链接click
		$(document).delegate("a[href*=#Core.]", "click", this.autoHashClick);
		//网易宝通用逻辑
		$(".regards").html(Core.getWhe(Core.getLocalTime(Core.now(),"","h"))+"好");
		var moveTime;
		$(".hasMore").mouseenter(function(){
			if(Core.navConfig.moreObj){
				Core.navConfig.moreObj.removeClass("hover");
				Core.navConfig.moreObj.find("ul").slideUp(200);
			}
			var $this=$(this);
			moveTime=setTimeout(function(){
				$this.addClass("hover");
				$this.find("ul").slideDown(200);	
				Core.navConfig.moreObj=$this;
			},200);
		}).mouseleave(function(){
			clearTimeout(moveTime);
			var $this=$(this);
			Core.navConfig.setT=setTimeout(function(){
				$this.removeClass("hover");
				$this.find("ul").slideUp(200);
			},200);
		});
		
		Core.navConfig.appUl=$("#appBox ul:eq(0)");
		Core.navConfig.appLink=$("#appPage a:eq(0)");
		Core.navConfig.appUl.attr("class","appShow");
		Core.navConfig.appLink.addClass("active");
		$("#appPage a").click(function(){
			if(!$(this).hasClass("active")){
				Core.navConfig.appLink.removeClass("active");
				Core.navConfig.appUl.attr("class","appHide");
				var index=$("#appPage a").index($(this));
				Core.navConfig.appUl=$("#appBox ul").eq(index);
				Core.navConfig.appUl.attr("class","appMid");
				$(this).addClass("active");
				Core.navConfig.appLink=$(this);
				setTimeout(function(){Core.navConfig.appUl.attr("class","appShow");},50);
			}
		});
		Core.navConfig.placeholderInput=$("[placeholder]");
		for(var j=0;j<Core.navConfig.placeholderInput.length;j++){
			if(Core.navConfig.placeholderInput.eq(j).attr("type")){
				if($.trim(Core.navConfig.placeholderInput.eq(j).val())==""){
					Core.navConfig.placeholderInput.eq(j).val(Core.navConfig.placeholderInput.eq(j).attr("placeholder")).css("color","#b2b2b2");
				}				
				Core.navConfig.placeholderInput.eq(j).focus(function(){
					if($(this).val()==$(this).attr("placeholder")){
						$(this).val("").css("color","#b2b2b2");
						$(this).attr("type",$(this).attr("inputtype"));
					}
				});
				Core.navConfig.placeholderInput.eq(j).keyup(function(){
					if($.trim($(this).val()+"")=="" || $.trim($(this).val()+"")==$(this).attr("placeholder")){
						$(this).css("color","#b2b2b2");
					}else{
						$(this).css("color","#333");
					}
				});
				Core.navConfig.placeholderInput.eq(j).blur(function(){
					if($(this).val()==""){
						$(this).val($(this).attr("placeholder")).css("color","#b2b2b2");
					}else if($(this).val()!=$(this).attr("placeholder")){
						$(this).css("color","#333");
					}
				})
			}else{
				Core.navConfig.placeholderInput.eq(j).next("input").val("");
				Core.navConfig.placeholderInput.eq(j).next("input").focus(function(){
					$(this).select();
					$(this).prev("label").html("");
				});
				Core.navConfig.placeholderInput.eq(j).next("input").blur(function(){
					if($(this).val()==""){
						$(this).prev("label").html($(this).prev("label").attr("placeholder"));
					}
				});
			}
		};
		$(":text,:password").focus(function(){
			$(this).css({"border-color":"#56a7d4","color":"#333"})
			//var errId=$(this).attr("id")+"_err";
			//$("#"+errId).fadeOut(200);
		}).blur(function(){
			$(this).css("border-color","#cecece");
			if($(this).val()==""){
				$(this).css({"color":"#b2b2b2"})
			}
		});
		Core.placeholderInputBlur();
	},
	placeholderInputFocus:function(){
		for(var j=0;j<Core.navConfig.placeholderInput.length;j++){
			if(Core.navConfig.placeholderInput.eq(j).val()==Core.navConfig.placeholderInput.eq(j).attr("placeholder")){
				Core.navConfig.placeholderInput.eq(j).val("");
				Core.navConfig.placeholderInput.eq(j).attr("type",Core.navConfig.placeholderInput.eq(j).attr("inputtype"));
			}
		};
	},
	placeholderInputBlur:function(){
		for(var j=0;j<Core.navConfig.placeholderInput.length;j++){
			if(Core.navConfig.placeholderInput.eq(j).val()==""){
				Core.navConfig.placeholderInput.eq(j).val(Core.navConfig.placeholderInput.eq(j).attr("placeholder"));
				Core.navConfig.placeholderInput.eq(j).attr("type",Core.navConfig.placeholderInput.eq(j).attr("inputtype"));
			}
		};
	},
	//各个页面独立的初始化任务，需要在页面中覆盖
	myInit : $.noop,
	/*
	 * 自动绑定的click事件处理
	 * html结构：<a href="#Core.openMenu:1">...</a>
	 * this --> link
	 */
	autoHashClick : function(e){
		if( this.disabled || e.shiftKey || e.altKey || e.ctrlKey )return false;
		if( !/^#Core\.([^\:]+):?(.*)$/.test(this.hash) )
			return;
		//定位
		var method = RegExp.$1.split("."),
			para = RegExp.$2 ? RegExp.$2.split(",") : [],
			i, n, fn = Core, $this = fn;
		//将事件对象作为参数追加到参数列表中
		para.push(e);
		//查找方法
		n = method.length;
		for(i=0; i<n; i++){
			$this = fn;
			fn = fn[method[i]];
		}
		e.preventDefault();
		//执行
		return fn.apply($this, para);
	},
	headTipsClose:function(){
		$("#topTips").slideUp(300);
	},
	headTipsClose1:function(){
		$("#topTips1").slideUp(300);
	},
	headTipsClose2:function(){
		$("#topTips2").slideUp(300);
	},
	/*
	 * 字符串转化为json对象，适用小数据量转化
	 * 此处不对字符串进行安全检查，也不处理前后空格
	 * 将\/Date(...)\/格式的外层斜线去掉以供js使用
	 * $.parseJSON 也可进行json格式化，但是对输入检验比较严格，可以根据实际情况选择使用
	 */
	parseJSON : function(data){
		data = data.replace(/("|')\\?\/Date\((-?[0-9+]+)\)\\?\/\1/g, "new Date($2)");
		return (new Function("return " + data))();
	},	
	/*
	 * 发送GET类型的http请求
	 * 可根据类型参数来控制并发冲突，如果key是一个以 @开头的字符串，则表示去掉上一个同类型的ajax，否则就取消本次ajax除非上一个ajax完成
	 */
	get : function( url, data, callback, key ){ ajax("GET", url, data, callback, key); },
	
	/*
	 * 发送POST类型的http请求
	 */
	post : function( url, data, callback, key ){ ajax("POST", url, data, callback, key); },
	
	/*
	 * 获得指定域代理页面的jQuery对象
	 */
	agent$ : function( domain, callback ){
		createAgent(domain, callback);
		return this;
	},
	/*
	 * 转化日期数字为指定格式
	 */
	formatTime : function( timeNum, tmpl ){return $.formatTime(timeNum, tmpl)},
	
	/*
	 * ajax判断是否登录
	 * 2012-11-01 马超 增加
	 */
	isLogin : function( callback ){
		this.get("/check_login.html", function(hasErr, txt){
			//如果通讯失败，则检查cookie
			//txt 1登录 0未登录
			var ok = hasErr ? this.easyNav.isLogin() : txt == "1";
			callback && callback.call(this,ok);
		});
	},
	getCode:function(mobileNum){
		
	}
},
altDomain = function( domain ){
	var d = (domain+"").toLowerCase(), i = d.indexOf("https");
	return i<0 ? /\.163\.com$/.test(d) ? d : ""
			   : i ? ""
			       : d.replace(/^https?:\/\//,"").replace(/\/.+$/,"");
},
httpCache={},
ajax = function(type, url, data, callback, key){
	var host = window.location.host+"", domain = altDomain(url) || host, reg = /\.163\.com$/i, protocol = (window.location.href.indexOf("https:")>-1)?"https:":"http:", port = "80", fn;
	
	if( /:(\d+)/i.test( url ) )
		port = RegExp.$1 || "80";
	//如果访问协议和端口号不一致，则直接忽略此次ajax请求
	if( window.location.protocol != protocol || (window.location.port||"80") != port ){
		fn = $.isFunction(callback) ? callback : $.isFunction(data) ? data : $.noop;
		fn.call(Core, 2, "", "protocols or ports not match");
		return;
	}
	//同在163.com主域下才可以跨域处理，否则一律转化为相对路径访问
	//只有在http协议下才启用跨域代理
	if( reg.test( domain ) && reg.test( host ) && document.domain == "163.com" && protocol == "https:" ){
		createAgent(domain, function( jq ){
			_ajax(jq, type, url, data, callback, key);
		});
	}else{ //转化为相对路径
		_ajax(jQuery, type, url.replace(/https?:\/\/[^\/]+/, ""), data, callback, key);
	}
},
_ajax = function(jq, type, url, data, callback, key){
	var fn = $.isFunction(callback) ? callback : $.noop, URL = url, xhr, state, lib = Core, noCache = false, cachePara = (URL.indexOf("?")>=0 ? "&" : "?") +"cache="+ (+new Date());
	if( $.isFunction(data) ){
		fn = data;
		data = null;
		key = callback;
	}
	if( key && key.indexOf("*") == 0 ){ //无缓存
		noCache = true;
		key = key.substr(1);
	}
	if( key ){
		xhr = httpCache[key];
		if( xhr ){
			//普通并发处理，直接取消当前处理
			//2012-11-02 跟常柯调试发现，某些超时引起的ajax失败，jquery没有通知到
			//导致key缓存无法清理，后续的同key的ajax全部作废
			//故，在检查缓存存在的时候，再检查一下缓存的http对象的状态
			if( key.indexOf("@") !== 0 ){
				state = xhr.readyState;
				if( state > 0 && state < 4 )
					return;
			}else{
				//否则，取消上一个未完成的ajax请求
				state = xhr.readyState;
				if( state > 0 && state < 4 ){
					//IE9' abort bug, see more:
					//http://www.enkeladress.com/article.php/internetexplorer9jscripterror
					try{
						xhr.aborted = true;
					}catch(e){} //防止IE6报错
					xhr.abort();
				}
			}
		}
	}
	//发送
	xhr = jq.ajax({
		url: URL + (noCache ? "" : cachePara),
		type: type,
		data: data,
		success : function( txt, status, res ){
			//主动删除缓存
			delete httpCache[key];
			//如果请求被取消，则不进行任何处理
			if( res.aborted )
				return;
			//force alt to string
			txt = res.responseText;
			//无法连接服务器（返回空数据）被认为是错误，但chorme却认为是正确返回
			if( txt == undefined || txt == null || txt == "" || txt.indexOf("<!DOCTYPE")>=0 || txt.indexOf("<html><head>") >=0 ){
				fn.call(lib, 1, txt, status);
				return;
			}
			//通知回调
			fn.call(lib, 0, txt, status);
		},
		error : function( res, status ){
			//主动删除缓存
			delete httpCache[key];
			//没有文件等错误，会返回两次error事件，一次状态是error，一次状态是null
			if( !status || status == "error" ){
				//通知回调
				fn.call(lib, 1, "", status);
				return;
			}
			if( res.aborted )
				return;
			//通知回调
			fn.call(lib, 1, res.responseText, status);
		}
	});
	//存储
	key && (httpCache[key] = xhr);
};
//引用到window
return Core;
})(window, jQuery);

/*
 * 卸载事件
 */
jQuery(window).unload(function(){
	document.oncontextmenu = null;
	window.Core = null;
	window.onload = null;
	window.onresize = null;
	window.onunload = null;
	window.onerror = null;
	window.onbeforeunload = null;
	(window.CollectGarbage || function(){})();
});
//绑定页面完成监听
jQuery(document).ready(function(){ Core.init();});

//MD5加密
var hexcase=0;var b64pad="";function hex_md5(s){return rstr2hex(rstr_md5(str2rstr_utf8(s)));}function b64_md5(s){return rstr2b64(rstr_md5(str2rstr_utf8(s)));}function any_md5(s,e){return rstr2any(rstr_md5(str2rstr_utf8(s)),e);}function hex_hmac_md5(k,d){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d)));}function b64_hmac_md5(k,d){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d)));}function any_hmac_md5(k,d,e){return rstr2any(rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d)),e);}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72";}function rstr_md5(s){return binl2rstr(binl_md5(rstr2binl(s),s.length*8));}function rstr_hmac_md5(key,data){var bkey=rstr2binl(key);if(bkey.length>16)bkey=binl_md5(bkey,key.length*8);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}var hash=binl_md5(ipad.concat(rstr2binl(data)),512+data.length*8);return binl2rstr(binl_md5(opad.concat(hash),512+128));}function rstr2hex(input){try{hexcase}catch(e){hexcase=0;}var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var output="";var x;for(var i=0;i<input.length;i++){x=input.charCodeAt(i);output+=hex_tab.charAt((x>>>4)&0x0F)+hex_tab.charAt(x&0x0F);}return output;}function rstr2b64(input){try{b64pad}catch(e){b64pad='';}var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var output="";var len=input.length;for(var i=0;i<len;i+=3){var triplet=(input.charCodeAt(i)<<16)|(i+1<len?input.charCodeAt(i+1)<<8:0)|(i+2<len?input.charCodeAt(i+2):0);for(var j=0;j<4;j++){if(i*8+j*6>input.length*8)output+=b64pad;else
output+=tab.charAt((triplet>>>6*(3-j))&0x3F);}}return output;}function rstr2any(input,encoding){var divisor=encoding.length;var i,j,q,x,quotient;var dividend=Array(Math.ceil(input.length/2));for(i=0;i<dividend.length;i++){dividend[i]=(input.charCodeAt(i*2)<<8)|input.charCodeAt(i*2+1);}var full_length=Math.ceil(input.length*8/(Math.log(encoding.length)/Math.log(2)));var remainders=Array(full_length);for(j=0;j<full_length;j++){quotient=Array();x=0;for(i=0;i<dividend.length;i++){x=(x<<16)+dividend[i];q=Math.floor(x/divisor);x-=q*divisor;if(quotient.length>0||q>0)quotient[quotient.length]=q;}remainders[j]=x;dividend=quotient;}var output="";for(i=remainders.length-1;i>=0;i--)output+=encoding.charAt(remainders[i]);return output;}function str2rstr_utf8(input){var output="";var i=-1;var x,y;while(++i<input.length){x=input.charCodeAt(i);y=i+1<input.length?input.charCodeAt(i+1):0;if(0xD800<=x&&x<=0xDBFF&&0xDC00<=y&&y<=0xDFFF){x=0x10000+((x&0x03FF)<<10)+(y&0x03FF);i++;}if(x<=0x7F)output+=String.fromCharCode(x);else if(x<=0x7FF)output+=String.fromCharCode(0xC0|((x>>>6)&0x1F),0x80|(x&0x3F));else if(x<=0xFFFF)output+=String.fromCharCode(0xE0|((x>>>12)&0x0F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F));else if(x<=0x1FFFFF)output+=String.fromCharCode(0xF0|((x>>>18)&0x07),0x80|((x>>>12)&0x3F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F));}return output;}function str2rstr_utf16le(input){var output="";for(var i=0;i<input.length;i++)output+=String.fromCharCode(input.charCodeAt(i)&0xFF,(input.charCodeAt(i)>>>8)&0xFF);return output;}function str2rstr_utf16be(input){var output="";for(var i=0;i<input.length;i++)output+=String.fromCharCode((input.charCodeAt(i)>>>8)&0xFF,input.charCodeAt(i)&0xFF);return output;}function rstr2binl(input){var output=Array(input.length>>2);for(var i=0;i<output.length;i++)output[i]=0;for(var i=0;i<input.length*8;i+=8)output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<(i%32);return output;}function binl2rstr(input){var output="";for(var i=0;i<input.length*32;i+=8)output+=String.fromCharCode((input[i>>5]>>>(i%32))&0xFF);return output;}function binl_md5(x,len){x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}return Array(a,b,c,d);}function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}function md5_ff(a,b,c,d,x,s,t){return md5_cmn((b&c)|((~b)&d),a,b,x,s,t);}function md5_gg(a,b,c,d,x,s,t){return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t);}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t);}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|(~d)),a,b,x,s,t);}function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);}function bit_rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt));}