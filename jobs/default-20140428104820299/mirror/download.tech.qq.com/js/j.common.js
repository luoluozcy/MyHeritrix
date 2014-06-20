/*
 * Created by Hobo <hobowo#tencent.com>
 * Http://www.qq.com/
 */

// Global variable
window.version = "2007-06-29";
window.undefined = window.undefined;
window.debug = false;

//print window error
/*
window.onerror = function(msg, url, line)
{
	if (window.debug)
	{
		var err = "url  ：" + url + "\nline ：" + line + " 行\nerror：" + msg;

		if (!window.confirm(err + "\n\n页面含有如上脚本错误,是否继续报告错误?"))
		{
			window.debug = false;
		}
	}

	return true;
};*/

//Browser check
var Browser = new Object();

Browser.ua = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.ua);
Browser.moz = /gecko/.test(Browser.ua);
Browser.opera = /opera/.test(Browser.ua);

Browser.chrome = /webkit/.test(Browser.ua);

//shortcut method
var $ = function(s)
{
	return (typeof s == "object") ? s: document.getElementById(s);
};

var $N = function(s)
{
	return (typeof s == "object") ? s: document.getElementsByName(s);
};

var $T = function(s)
{
	return (typeof s == "object") ? s: document.getElementsByTagName(s);
};

var $C = function(tag)
{
	return document.createElement(tag);
};

var $A = function(a)
{
	if (!a)
	{
		return new Array();
	}
	else
	{
		var r = new Array();

		for (var i=0; i<a.length; i++)
		{
			r.push(a[i]);
		}

		return r;
	}
};

//Object Prototype extension
String.prototype.trim = function()
{
	return this.replace(/^\s*|\s*$/ig, "");
};

String.prototype.left = function(n)
{
	return this.substr(0, n);
};

String.prototype.empty = function()
{
	return this.trim() == "";
};

String.prototype.stripTags = function()
{
	return this.replace(/<\/?[^>]+>/gi, '');
};

String.prototype.escapeHTML = function()
{
	var div = document.createElement('div');
	var text = document.createTextNode(this);
	div.appendChild(text);
	return div.innerHTML;
};

String.prototype.unescapeHTML = function()
{
	var div = document.createElement('div');
	div.innerHTML = this.stripTags();
	return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
};

String.prototype.toParam = function()
{
	return this.replace(/\r/g, '')
		.replace(/\n/g, "")
		.replace(/\'/g, '\\\'')
		.replace(/\"/g, '&#34;')
		.replace(/</g,"&#60;")
		.replace(/>/g,"&#62;");
};

String.prototype.toTitle = function()
{
	return this.replace(/\r/g, '')
		.replace(/\n/g, "")
		.replace(/\'/g, '&#39;')
		.replace(/\"/g, '&#34;')
		.replace(/</g,"&#60;")
		.replace(/>/g,"&#62;");
};

String.prototype.toValue = function()
{
	return this.replace(/&/g,"&#38;")
		.replace(/\"/g,"&#34;")
		.replace(/\'/g,'&#39;')
		.replace(/</g,"&#60;")
		.replace(/>/g,"&#62;")
		.replace(/\t/g,"")
		.replace(/\n/g,'');
};

String.prototype.toTextareaValue = function()
{
	return this.replace(/&/g,"&#38;")
		.replace(/\"/g,"&#34;")
		.replace(/\'/g,'&#39;')
		.replace(/</g,"&#60;")
		.replace(/>/g,"&#62;")
		.replace(/\t/g,"　");
};

String.format = function(s)
{
	for (var i=1; i<arguments.length; i++)
	{
		s = s.replace(new RegExp("\\{"+(i-1)+"\\}", "g"), arguments[i]);
	}

	return s;
};

if (!String.prototype.localeCompare)
{
	String.prototype.localeCompare = function(s)
	{
		return (this>s) ? 1 : (this<s ? -1 : 0);
	};
}

if (!Array.prototype.pop)
{
	Array.prototype.pop = function()
	{
		return this.length!=0 ? this[--this.length] : null;
	};
}

if (!Array.prototype.push)
{
	Array.prototype.push = function()
	{
		var startLength = this.length;
		
		for (var i = 0; i < arguments.length; i++)
		{
			this[startLength + i] = arguments[i];
		}

		return this.length;
	};
}

if (Array.prototype.shift)
{
	Array.prototype.shift = function()
	{
		var r = this[0];

		for (var i=0; i<this.length-1; i++)
		{
			this[i] = this[i + 1];
		}

		this.length--;
		return r;
	};
}

Array.prototype.sortByAlpha = function()
{
	return this.sort(function(a, b)
	{
		if (a.length < b.length)
		{
			return 1;
		}
		else if (a.length == b.length)
		{
			return b.localeCompare(a);
		}
		else
		{
			return -1;
		}
	});
};

String.prototype.isQQ = function()
{
	return /^[1-9]\d{4,8}$/.test(this);
};

String.prototype.isNumber = function()
{
	return /^[1-9]\d*$/.test(this);
};

Array.prototype.repeat = function()
{
	return /(\x0f[^\x0f]+)\x0f[\s\S]*\1\x0f/
		.test("\x0f" + this.join("\x0f\x0f") + "\x0f");
};

Array.prototype.indexOf = function(o, n)
{
	if (n == null)
	{
		n = 0;
	}
	else if (n < 0)
	{
		n = Math.max(0, this.length + n);
	}

	for (var i=n; i<this.length; i++)
	{
		if (this[i] == o)
		{
			return i;
		}
	}
	
	return -1;
};

Array.prototype.contains = function(o)
{
	return this.indexOf(o) != -1
};

Number.prototype.format = function(n)
{
	if (this.toString().length >= n)
	{
		return this;
	}

	return ((new Array(n).join("0")+(this|0)).slice(-n));
};

Date.prototype.format = function(s)
{
	var o = {
		"y+": this.getFullYear(),
		"M+": this.getMonth()+1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth()+3)/3),
		"S" : this.getMilliseconds()
	};

	for (var k in o)
	{
		if (new RegExp("("+ k +")").test(s))
		{
			s = s.replace(RegExp.$1, o[k].format(RegExp.$1.length));
		}
	}

	return s;
};

//Math.random extension
if (!window._rnd)
{
	window._rnd = Math.random;

	Math.random = function(n)
	{
		if (n == undefined)
		{
			return window._rnd();
		}
		else if (n.toString().match(/^\-?\d*$/g))
		{
			return Math.ceil(window._rnd() * n);
		}
		else
		{
			return null;
		}
	};
}

//window.setTimeout extension
if (!window._sT)
{
	window._sT = window.setTimeout;

	window.setTimeout = function(fCallback, nDelay, oObject)
	{
		if (typeof fCallback == 'function')
		{
			if (!oObject)
			{
				oObject = window;
			}

			var argu = Array.prototype.slice.call(arguments, 3);
			var newFunc = (function(){ fCallback.apply(oObject, argu); });

			return window._sT(newFunc, nDelay);
		}

		return window._sT(fCallback, nDelay);
	};
}

//Function.bind
Function.prototype.bind = function()
{
	var _this = this, args = $A(arguments), object = args.shift();

	return function()
	{
		return _this.apply(object, args);
	};
};

//Function.call & Function.apply (ie5)
if (!Function.prototype.call)
{
	Function.prototype.apply = function(object, argu)
	{
		object = object || window;
		argu = argu || new Array();

		try
		{
			object.__apply__ = this;
			var result = eval("object.__apply__(" + argu.join(", ") + ")");
			object.__apply__ = null;
		}
		catch (e)
		{
			var result = this(argu[0], argu[1], argu[2], argu[3], argu[4]);
		}

		return result;
	};

	Function.prototype.call = function()
	{
		var args = $A(arguments), object = args.shift();

		return this.apply(object, args)
	};
}

//Mozilla browser Event*HTMLElement extension
if (Browser.moz)
{
	var GetEvent = function()
	{
		var _f = GetEvent.caller;

		while (_f)
		{
			if (_f.arguments[0])
			{
				var _fac = _f.arguments[0].constructor;

				if (_fac==Event || _fac==MouseEvent || _fac==KeyboardEvent)
				{
					return _f.arguments[0];
				}
			}

			_f = _f.caller;
		}

		return null;
	};

	window.constructor.prototype.__defineGetter__("event", function()
	{
		return GetEvent();
	});

if (Browser.chrome)
{
	HTMLElement.prototype.attachEvent = Node.prototype.attachEvent = function(sType, fHandler)
	{
		this.addEventListener(sType.replace(/^on/i, ""), fHandler, false);
	};

	HTMLElement.prototype.detachEvent = Node.prototype.detachEvent = function(sType, fHandler)
	{
		this.removeEventListener(sType.replace(/^on/i, ""), fHandler, false);
	};
}
else
{
	Window.prototype.attachEvent =HTMLElement.prototype.attachEvent
		= Node.prototype.attachEvent = function(sType, fHandler)
	{
		this.addEventListener(sType.replace(/^on/i, ""), fHandler, false);
	};

	Window.prototype.detachEvent = HTMLElement.prototype.detachEvent
		= Node.prototype.detachEvent = function(sType, fHandler)
	{
		this.removeEventListener(sType.replace(/^on/i, ""), fHandler, false);
	};
}
}

//Switch
var Switch = {
	set: function(s, v)
	{
		return this[s] = v ? true : false;
	},

	get: function(s)
	{
		return this[s] ? this[s] : (this[s] = false);
	},

	toggle: function(s)
	{
		return this[s] ? this[s]=!this[s] : (this[s] = true);
	}
};

//Element
var Element = {
	isEmpty: function(e)
	{
		return /^\s*$/.test($(e).innerHTML);
	},

	isVisible: function(e)
	{
		return $(e).style.display != 'none';
	},

	show: function()
	{
		for (var i=0; i<arguments.length; i++)
		{
			$(arguments[i]).style.display = "block";
		}
	},

	hide: function()
	{
		for (var i=0; i<arguments.length; i++)
		{
			$(arguments[i]).style.display = "none";
		}
	},

	toggle: function()
	{
		for (var i=0; i<arguments.length; i++)
		{
			Element[Element.isVisible($(arguments[i])) ? 'hide': 'show']($(arguments[i]));
		}
	},

	remove: function()
	{
		for (var i=0; i<arguments.length; i++)
		{
			try
			{
				$(arguments[i]).parentNode.removeChild($(arguments[i]));
			}
			catch (e)
			{
			}
		}
	},

	create: function(parent, tag, attr)
	{
		var _e = $C(tag);

		for (var i=0; i<attr.length; i++)
		{
			_e.setAttribute(attr[i][0], attr[i][1]);
		}

		$(parent).appendChild(_e);
	},

	getElementWidth: function(e)
	{
		return $(e).offsetWidth;
	},

	getElementHeight: function(e)
	{
		return $(e).offsetHeight;
	},

	getElementLeft: function(e)
	{
		return (e==null) ? 0 : ($(e).offsetLeft + Element.getElementLeft($(e).offsetParent));
	},

	getElementTop: function(e)
	{
		return (e==null) ? 0 : ($(e).offsetTop + Element.getElementTop($(e).offsetParent));
	},

	scrollIntoView: function(e)
	{
		var x = Element.getElementLeft(e);
		var y = Element.getElementTop(e);
		window.scrollTo(x, y);
	}
};

//UrlParser
var UrlParser = function(sUrl)
{
	this.__construct(sUrl);
};

UrlParser.prototype = {
	__construct: function(sUrl)
	{
		this._href = sUrl || document.location.href;
	},

	getDomain: function()
	{
		if (this._href.match(new RegExp('^(([a-z]+)://([^\\/]+)\/?)(.*)', 'i')))
		{
			return RegExp.$1;
		}
		else
		{
			return null;
		}
	},

	getParam: function(sName)
	{
		if (this._href.match(new RegExp("(&|\\u003F|#)" + sName + "=([^&#]*)(&|$|#)")))
		{
			return RegExp.$2;
		}
		else
		{
			return null;
		}
	}
};

UrlParser.getInstance = function()
{
	if (!this.__instance__)
	{
		this.__instance__ = new UrlParser();
	};

	return this.__instance__;
};

//Hash
var HashTable = function()
{
	this.__construct();
};

HashTable.prototype = {
	__construct: function()
	{
		this._hash = new Object();
	},

	set: function(key, value, rewrite)
	{
		if (rewrite !== false)
		{
			this._hash[key] = value;
		}
		else if (this.get(key) != null)
		{
			this._hash[key] = value;
		}
	},

	get: function(key)
	{
		if (typeof this._hash[key] != "undefined")
		{
			return this._hash[key];
		}
		else
		{
			return null;
		}
	},

	remove: function(key)
	{
		delete this._hash[key];
	}
};

HashTable.getInstance = function()
{
	if (!this.__instance__)
	{
		this.__instance__ = new HashTable();
	};

	return this.__instance__;
};

//XmlHttp object
var XmlHttp = function()
{
	if (Browser.ie)
	{
		var msxmls = ["MSXML3", "MSXML2", "Microsoft"];

		for (var i=0; i<msxmls.length; i++)
		{
			try
			{
				return new ActiveXObject(msxmls[i] + ".XmlHttp");
			}
			catch (e)
			{
			}
		}
	}
	else
	{
		return new XMLHttpRequest();
	}
};

//AsynLoader
var AsynLoader = {
	config: {
		queueCount: 5, //最大并发数
		curQueue: 0    //当前并发数
	},

	load: function(sUrl, oOption)
	{
		AsynLoader.initOption(oOption);

		if (AsynLoader.config.curQueue >= AsynLoader.config.queueCount)
		{
			if (typeof oOption.onQueue == "function")
			{
				oOption.onQueue();
			}

			window.setTimeout(AsynLoader.load, 100, window, sUrl, oOption);
			return;
		}
		else
		{
			AsynLoader.config.curQueue++;
		}

		var xmlHttp = new XmlHttp();
		xmlHttp.open(oOption.method, sUrl, true);
		var _loadCount = 0;

		xmlHttp.onreadystatechange = function()
		{
			if (xmlHttp.readyState == 4)
			{
				if (_loadCount == 0)
				{
					_loadCount++;
					AsynLoader.config.curQueue--;

					if (AsynLoader.isSuccess(xmlHttp))
					{
						var _xmlHttp = {
							status: xmlHttp.status,
							responseXML: xmlHttp.responseXML,
							responseText: xmlHttp.responseText,
							responseJS: xmlHttp.responseText.parseJSON()
						};

						oOption.onSuccess(_xmlHttp);
					}
					else
					{
						if (--oOption.decay)
						{
							AsynLoader.load(sUrl, oOption);
						}
						else
						{
							if (typeof oOption.onFailure == "function")
							{
								oOption.onFailure(_xmlHttp);
							}
						}
					}
				}
			}
		}

		xmlHttp.send(oOption.data);
	},

	initOption: function(oOption)
	{
		oOption.method = (typeof oOption.data == "undefined" || oOption.data == null) ? "get" : "post";
		oOption.asyn = oOption.asyn || true;
		oOption.decay = oOption.decay || 1;

		if (typeof oOption.data != "string" && oOption.data != null)
		{
			oOption.data = oOption.data.toJSONString();
		}
		else if (typeof oOption.data == "undefined")
		{
			oOption.data = null;
		}
	},

	isSuccess: function(oXmlHttp)
	{
		return oXmlHttp.status == undefined
			|| oXmlHttp.status == 0
			|| (oXmlHttp.status >= 200 && oXmlHttp.status < 300);
	}
};

//ProxyLoader
var ProxyLoader = {
	config: {
		queueCount: 5, //最大并发数
		curQueue: 0,
		proxyStatus: {},
		proxyQueue: {}
	},

	load: function(sUrl, oOption)
	{
		var proxyDomain = new UrlParser(sUrl).getDomain();
		var proxyPage = proxyDomain + "proxy.html";
		var proxyFrames = document.getElementsByTagName("iframe");

		for (var i=0; i<proxyFrames.length; i++)
		{
			if (proxyFrames[i].src == proxyPage)
			{
				if (typeof ProxyLoader.config.proxyStatus[proxyDomain] != "undefined")
				{
					if (Browser.ie)
					{
						window.frames[i].AsynLoader.load(sUrl, oOption);
					}
					else
					{
						proxyFrames[i].contentWindow.AsynLoader.load(sUrl, oOption);
					}
				}
				else
				{
					if (typeof ProxyLoader.config.proxyQueue[proxyDomain] == "undefined")
					{
						ProxyLoader.config.proxyQueue[proxyDomain] = new Array();
					}

					ProxyLoader.config.proxyQueue[proxyDomain].push(new Array(sUrl, oOption));
				}

				return;
			}
		}

		if (typeof ProxyLoader.config.proxyQueue[proxyDomain] == "undefined")
		{
			ProxyLoader.config.proxyQueue[proxyDomain] = new Array();
		}
		ProxyLoader.config.proxyQueue[proxyDomain].push(new Array(sUrl, oOption));

		ProxyLoader.createProxyPage(proxyPage);
	},

	createProxyPage: function(proxyPage)
	{
		var proxyFrames = document.getElementsByTagName("iframe");

		for (var i=0; i<proxyFrames.length; i++)
		{
			if (proxyFrames[i].src == proxyPage)
			{
				return;
			}
		}

		var _iframe = document.createElement("iframe");

		_iframe.style.display = "none";
		_iframe.src = proxyPage;

		try
		{
			$("proxy").appendChild(_iframe);
		}
		catch (e)
		{
			if (typeof Object.prototype.isPrototypeOf == "undefined")
			{
				document.getElementsByTagName("body")[0].innerHTML += _iframe.outerHTML;
			}
			else
			{
				document.getElementsByTagName("body")[0].appendChild(_iframe);
			}
		}

	}
};

//JsLoader
var JsLoader = {
	load: function(sId, sUrl, fCallback)
	{
		Element.remove(sId);

		var _script = document.createElement("script");
		_script.setAttribute("id", sId);
		_script.setAttribute("type", "text/javascript");
		_script.setAttribute("src", sUrl);
		document.getElementsByTagName("head")[0].appendChild(_script);

		if (Browser.ie)
		{
			_script.onreadystatechange = function()
			{
				if (this.readyState=="loaded" || this.readyState=="complete")
				{
					Element.remove(_script);
					fCallback();
				}
			};
		}
		else if (Browser.moz)
		{
			_script.onload = function()
			{
				Element.remove(_script);
				fCallback();
			};
		}
		else
		{
			Element.remove(_script);
			fCallback();
		}
	}
};
/*  |xGv00|a844696c4c7776c3dc92994f5c91c62d */