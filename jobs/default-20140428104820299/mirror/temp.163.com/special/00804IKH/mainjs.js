function postArticle() {
	// 0：未登录，1：参数错误，2：其它错误
	if(arguments[0] == true) {
		corrector.showResult(arguments[1]);
	} else {
		corrector.closeAll();
		if(arguments[1] == 0) {
			alert("登录超时，请重新登录通行证");
			return false;
		}
		alert("提交失败");
	}
}
function Corrector() {
}
Corrector.prototype = {
	init: function() {
		document.domain = "163.com";
		this.iframe_url = "http://temp.163.com/special/correct/form.html ";
		var that = this, skipSelectText = false;
			html = '<div id="btn_wrapper"><div id="btn_correct"><div id="close_correct"></div></div></div>'
					+ '<div id="correct_win">'
					+ '<div id="correct_win_head">'
					+ '<span class="icon-pen"></span>'
					+ '<span class="correct_win_title">我来挑错</span>'
					+ '<a target="_self" id="correct_win_close" href="javascript:;"></a>'
				+ '</div>'
				+ '<div style="position: relative;"><div id="correct_overlay" style="display: none;height:100%;position:absolute;width:100%;"></div><iframe id="iframeArticle" src="' + this.iframe_url + '" width="554" height="374" scrolling="no" frameborder="no"></iframe></div></div>';
		
		// 初始化最外层容器。
		this.container = document.createElement("DIV");
		this.container.className = "correct-container";
		this.container.innerHTML = html;
		document.body.appendChild(this.container);
		
		// 初始化纠错窗体。
		this.frame = document.getElementById("correct_win");
		this.head = document.getElementById("correct_win_head");
		this.iframe = document.getElementById("iframeArticle");
		
		// Compare Position - MIT Licensed, John Resig
		function comparePosition(a, b){
			return a.compareDocumentPosition ?
				a.compareDocumentPosition(b) :
				a.contains ?
				( a != b && a.contains(b) && 16 ) +
				( a != b && b.contains(a) && 8 ) +
				( a.sourceIndex >= 0 && b.sourceIndex >= 0 ?
				(a.sourceIndex < b.sourceIndex && 4 ) +
				(a.sourceIndex > b.sourceIndex && 2 ) :
				1 ) : 0;
		}
		
		function _getSelectedText() {
			// 正文元素
			var endText = document.getElementById("endText");
			if(!endText) {
				return "";
			}
		
			if(window.getSelection) {
				var sel = window.getSelection();
				if(sel.rangeCount > 0) {
					var range = sel.getRangeAt(0),
						ancestor = range.commonAncestorContainer;
					if((ancestor == endText)
						|| ((comparePosition(endText, ancestor) & 0x10) == 0x10)) {					
						return range.toString().replace(/^\s*|\s*$/g,"");
					}
				}
			} else {
				var range = document.selection.createRange(),
					ancestor = range.parentElement();
				if((ancestor == endText)
					|| ((comparePosition(endText, ancestor) & 0x10) == 0x10)) {	
					return range.text;
				}
			}
			return "";
		}
		
		NTES(document.body).addEvent("mouseup", function(e) {
			if(NTES.cookie.get("NEED_CORR") === "false") {
				NTES(document.body).removeEvent("mouseup", arguments.callee);
				return false; 
			}
			if(!skipSelectText) {
				if((e.which && e.which == 1) || e.button == 1) {
					var selText = _getSelectedText();
					that.hideButton();
					that.hideFrame();
					if(selText != "") {
						if(e.pageX) {
							that.ajustPosition(e.pageX, e.pageY);
						} else {
							that.ajustPosition(
								e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, 
								e.clientY + document.body.scrollTop + document.documentElement.scrollTop
							);
						}
						that.setText(selText);
						that.showButton();
					}
				}
			}
		});
		
		// 注册拖拽行为
		(function($) {
			var oEvent, oLayer,
				container = that.container,
				_handle = that.head,
				overlay = document.getElementById("correct_overlay");
			function drag_start(e) {
				skipSelectText = true;
				oEvent = {x: e.clientX, y: e.clientY};
				oLayer = {x: container.offsetLeft, y: container.offsetTop};
				$(document.body).addEvent("mousemove", dragging).addEvent("mouseup", drag_end);
				if(this.setCapture) {
					this.setCapture();
				} else {
					overlay.style.display = "block";
				}
			}
			function dragging(e) {
				if(window.getSelection) {
					var sel = window.getSelection();
					sel.removeAllRanges();
				} else {
					document.selection.empty();
				}
				container.style.top = Math.max(0, e.clientY - oEvent.y + oLayer.y) + 'px';
				container.style.left = Math.max(0, e.clientX - oEvent.x + oLayer.x) + 'px';
			}
			function drag_end(e) {
				setTimeout(function() {
					skipSelectText = false;
				}, 0);
				$(document.body).removeEvent("mousemove", dragging).removeEvent("mouseup", drag_end);
				if(_handle.releaseCapture) {
					_handle.releaseCapture();
				} else {
					overlay.style.display = "none";
				}
			}
			$(that.head).addEvent("mousedown", drag_start);
		})(NTES);
		
		NTES("#correct_win_close").addEvent("click", function(e) {
			that.hideButton();
			that.hideFrame();
		});
		
		NTES("#close_correct").addEvent("click", function(e) {
			e.cancelBubble = true;
			that.hideButton();
			that.hideFrame();
			NTES.cookie.set("NEED_CORR", "false", "3M");
		});
		
		var win = this.iframe.contentWindow;
		this.button = document.getElementById("btn_correct");
		this.button_wrapper = document.getElementById("btn_wrapper");
		
		NTES(this.button).addEvent("click", function(e) {
			that.hideButton();
			win.location = that.iframe_url;
			that.showFrame();
			e.cancelBubble = true;
		});
		
		function iframe_loaded() {
			if(win.setData) {
				var _h1title, h1Elem = document.getElementById("h1title");
				if(h1Elem) {
					_h1title = h1Elem.innerHTML;
				} else {
					_h1title = document.title;
				}
				var postData = {
					errorContent: that.selText,
					errorUrl: window.location.href.replace(window.location.search, "").replace(/_\d*?(?=\.html)/, ""),
					errorTitle: _h1title
				};
				win.setData(postData);
			}
			that.iframe.height = win.document.body.offsetHeight + 'px';
			var height = document.documentElement.clientHeight,
				width = document.documentElement.clientWidth;
			that.ajustPosition(
				Math.max((width - that.container.offsetWidth) / 2, 0) + document.documentElement.scrollLeft + document.body.scrollLeft,
				Math.max((height - that.container.offsetHeight) / 2, 0) + document.documentElement.scrollTop + document.body.scrollTop
			);
		};
		
		if (this.iframe.attachEvent) {
			this.iframe.attachEvent("onload", iframe_loaded);
		}else {
			this.iframe.onload = iframe_loaded;
		}
		Corrector.prototype.init = null;
	},
	showResult: function(resultUrl) {
		this.iframe.contentWindow.location = "http://temp.163.com/special/correct/success.html?result=" + resultUrl;
	},		
	setText: function(text) {
		this.selText = text;
	},
	ajustPosition: function(x, y) {
		this.container.style.left = x + 2 + 'px';
		this.container.style.top = y + 2 + 'px';
	},
	showWithoutOpion: function() {
		this.setText("");
		this.iframe.contentWindow.location = this.iframe_url;
		this.hideButton();
		this.showFrame();
	},
	showButton: function() {
		this.button_wrapper.style.display = "block";
	},
	hideButton: function() {
		this.button_wrapper.style.display = "none";
	},
	showFrame: function() {
		this.frame.style.display = "block";
	},
	hideFrame: function() {
		this.frame.style.display = "none";
	},
	closeAll: function() {
		this.hideButton();
		this.hideFrame();
	}
}
Corrector.prototype.constructor = Corrector;
var corrector = new Corrector();
corrector.init();
(function() {
	var link = document.createElement("LINK"),
		cssurl = 'http://img3.cache.netease.com/cnews/img/correct/dxb_style_v1.css';
	if (link.setAttribute ) {
		link.setAttribute( "rel", "stylesheet" );
		link.setAttribute( "type", "text/css" );
		link.setAttribute( "href", cssurl );
	} else {
		link.rel = "stylesheet";
		link.href = cssurl;
	}
	document.getElementsByTagName("head")[0].appendChild(link);
})();