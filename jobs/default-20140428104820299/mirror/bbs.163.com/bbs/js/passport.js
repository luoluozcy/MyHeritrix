String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

var Util = {
	getXY : function(Obj) {
		var sumTop = 0, sumLeft = 0;
		while (Obj && Obj.tagName && Obj.tagName != "BODY" && Obj.tagName != "HTML") {
			var num = Obj.offsetLeft;

			sumLeft += num;
			sumTop += Obj.offsetTop;
			Obj = Obj.offsetParent;
		}
		
		return {
			x : sumLeft,
			y : sumTop
		};
	}
};

var Passport = {
	usernameInputElement : false,
	passwordInputElement : "",
	usernameInputElementX : false,
	usernameInputElementY : false,
	usernameInputHeight : false,
	usernameListElement : false,
	currentSelectIndex : -1,
	domainSelectElmentString : "<table id = \"passportusernamelist\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"loginSupportList\"><tr><td class=\"title\" style=\"title\" >\u8BF7\u9009\u62E9\u6216\u7EE7\u7EED\u8F93\u5165...</td></tr><tr><td></td></tr></table><div style=\"display: none;\"></div><div id=\"passport_111\"></div>",
	domainSelectElement : false,
	domainArray : [ "163.com", "126.com", "vip.126.com", "yeah.net", "188.com",
			"vip.163.com", "gmail.com", "qq.com", "sina.com", "hotmail.com" ],
	helpDivString : "<div style=\"width:100%;\" id=\"passport_helper_div\"></div>",
	// 自动调整用户名提示div的位置，解决窗口变化时位置偏移的问题。
	resizeFunc : function() {
		var ds = document.getElementById("passportusernamelist");

		var username_x = Util.getXY(Passport.usernameInputElement).x;
		var username_y = Util.getXY(Passport.usernameInputElement).y;

		ds.style.left = username_x + "px";
		ds.style.top = (username_y + Passport.usernameInputElement.offsetHeight)
				+ "px";
		ds.style.display = "none";

	},

	bind : function(obj, obj2) {
		this.usernameInputElement = obj;
		this.passwordInputElement = obj2;
		var xy = Util.getXY(this.usernameInputElement);
		this.usernameInputElementX = xy.x;
		this.usernameInputElementY = xy.y;
		this.handle();
	},
	handle : function() {

		var domainSelectElment = document.createElement("DIV");
		var helpDiv = document.createElement("DIV");
		domainSelectElment.innerHTML = this.domainSelectElmentString;
		helpDiv.innerHTML = this.helpDivString;

		document.body.appendChild(domainSelectElment);
		document.body.appendChild(helpDiv);

		this.domainSelectElement = document.getElementById("passportusernamelist");

		this.usernameListElement = this.domainSelectElement.rows[1].firstChild;
		this.currentSelectIndex = 0;
		this.usernameInputElement.onblur = function() {
			Passport.doSelect();
		};
		try {
			this.usernameInputElement.addEventListener("keypress",
					this.keypressProc, false);
			this.usernameInputElement.addEventListener("keyup", this.keyupProc,
					false);
		} catch (e) {
			try {
				this.usernameInputElement.attachEvent("onkeydown",
						this.checkKeyDown);
				this.usernameInputElement.attachEvent("onkeypress",
						this.keypressProc);
				this.usernameInputElement
						.attachEvent("onkeyup", this.keyupProc);
			} catch (e) {
			}
		}

		// ----------------解决用户名自动提示div在窗口大小发生变化时的位置偏移的bug.-----------
		Passport.resizeFunc();
		if (navigator.userAgent.indexOf("MSIE") > 0) {
			window.attachEvent("onresize", Passport.resizeFunc);

		} else {

			window.onresize = Passport.resizeFunc;

		}
		// ----------------解决用户名自动提示div在窗口大小发生变化时的位置偏移的bug.-----------

	},
	preventEvent : function(event) {
		event.cancelBubble = true;
		event.returnValue = false;
		if (event.preventDefault) {
			event.preventDefault();
		}
		if (event.stopPropagation) {
			event.stopPropagation();
		}
	},
	checkKeyDown : function(event) {
		this.currentSelectIndex = 0;
		var keyCode = event.keyCode;
		if (keyCode == 38 || keyCode == 40) {
			Passport.clearFocus();
			if (keyCode == 38) {
				Passport.upSelectIndex();
			} else {
				Passport.downSelectIndex();
			}
			Passport.setFocus();
		}
	},
	keyupProc : function(event) {
		this.currentSelectIndex = 0;
		var keyCode = event.keyCode;
		Passport.changeUsernameSelect();
		if (keyCode == 13) {
			Passport.doSelect();
		}
		var isSafari;
		if ((isSafari = navigator.userAgent.indexOf("Safari")) > 0) {
			if (keyCode == 38 || keyCode == 40) {
				Passport.preventEvent(event);
				Passport.clearFocus();
				if (keyCode == 38) {
					Passport.upSelectIndex();
				} else {
					Passport.downSelectIndex();
				}
				Passport.setFocus();
			}
		}
	},
	keypressProc : function(event) {
		this.currentSelectIndex = 0;
		var keyCode = event.keyCode;
		if (keyCode == 13) {

			Passport.preventEvent(event);
		} else {
			if (keyCode == 38 || keyCode == 40) {
				Passport.preventEvent(event);
				Passport.clearFocus();
				if (keyCode == 38) {
					Passport.upSelectIndex();
				} else {
					Passport.downSelectIndex();
				}
				Passport.setFocus();
			} else {
				if (keyCode == 108 || keyCode == 110 || keyCode == 111
						|| keyCode == 115) {
					setTimeout("Passport.changeUsernameSelect()", 20);
				}
			}
		}
	},
	clearFocus : function(index) {
		var index = this.currentSelectIndex;
		try {
			var x = this.findTdElement(index);
			x.style.backgroundColor = "white";
		} catch (e) {
		}
	},
	findTdElement : function(index) {
		try {
			var x = this.usernameListElement.firstChild.rows;
			for ( var i = 0; i < x.length; ++i) {
				if (x[i].firstChild.idx == index) {
					return x[i].firstChild;
				}
			}
		} catch (e) {
		}
		return false;
	},
	upSelectIndex : function() {
		var index = this.currentSelectIndex;
		if (this.usernameListElement.firstChild == null) {
			return;
		}
		var x = this.usernameListElement.firstChild.rows;
		var i;
		for (i = 0; i < x.length; ++i) {
			if (x[i].firstChild.idx == index) {
				break;
			}
		}
		if (i == 0) {
			this.currentSelectIndex = (x.length - 1);
		} else {
			this.currentSelectIndex = x[i - 1].firstChild.idx;
		}
	},
	downSelectIndex : function() {
		var index = this.currentSelectIndex;
		if (this.usernameListElement.firstChild == null) {
			return;
		}
		var x = this.usernameListElement.firstChild.rows;
		var i = 0;
		for (; i < x.length; ++i) {
			if (x[i].firstChild.idx == index) {
				break;
			}
		}
		if (i >= x.length - 1) {
			this.currentSelectIndex = x[0].firstChild.idx;
		} else {
			this.currentSelectIndex = x[i + 1].firstChild.idx;
		}
	},
	setFocus : function() {
		var index = this.currentSelectIndex;
		try {
			var x = this.findTdElement(index);
			x.style.backgroundColor = "#8EB7ED";
		} catch (e) {
		}
	},
	changeUsernameSelect : function() {
		var userInput = this.usernameInputElement.value;
		if (userInput.trim() == "") {
			this.domainSelectElement.style.display = "none";
		} else {
			var username = "", hostname = "";
			var pos;
			if ((pos = userInput.indexOf("@")) < 0) {
				username = userInput;
				hostname = "";
			} else {
				username = userInput.substr(0, pos);
				hostname = userInput.substr(pos + 1, userInput.length);
			}
			var usernames = [];
			if (hostname == "") {
				for ( var i = 0; i < this.domainArray.length; ++i) {
					usernames.push(username + "@" + this.domainArray[i]);
				}
			} else {
				for ( var i = 0; i < this.domainArray.length; ++i) {
					if (this.domainArray[i].indexOf(hostname) == 0) {
						usernames.push(username + "@" + this.domainArray[i]);
					}
				}
			}
			if (usernames.length > 0) {
				// this.currentSelectIndex = 0 ;

				/*
				 * this.domainSelectElement.style.left = this.usernameInputElementX + "px";
				 * var isSafari; if((isSafari=navigator.userAgent.indexOf("Safari"))>0){
				 * this.domainSelectElement.style.top = (this.usernameInputElementY +
				 * this.usernameInputElement.offsetHeight + 20) + "px";
				 * 
				 * }else this.domainSelectElement.style.top = (this.usernameInputElementY +
				 * this.usernameInputElement.offsetHeight) + "px";
				 */
				Passport.resizeFunc();
				
				this.domainSelectElement.style.display = "block";
				var myTable = document.createElement("TABLE");
				myTable.width = "100%";
				myTable.cellSpacing = 0;
				myTable.cellPadding = 3;
				var tbody = document.createElement("TBODY");
				myTable.appendChild(tbody);
				for ( var i = 0; i < usernames.length; ++i) {
					var tr = document.createElement("TR");
					var td = document.createElement("TD");
					td.nowrap = "true";
					td.align = "left";
					td.innerHTML = usernames[i];
					td.idx = i;
					td.onmouseover = function() {
						Passport.clearFocus();
						Passport.currentSelectIndex = this.idx;
						Passport.setFocus();
						this.style.cursor = "hand";
					};
					td.onmouseout = function() {
					};
					td.onclick = function() {
						Passport.doSelect();
					};
					tr.appendChild(td);
					tbody.appendChild(tr);
				}
				this.usernameListElement.innerHTML = "";
				this.usernameListElement.appendChild(myTable);
				this.setFocus();
			} else {
				this.domainSelectElement.style.display = "none";
				this.currentSelectIndex = -1;
			}
		}
	},
	doSelect : function() {
		this.domainSelectElement.style.display = "none";
		if (this.usernameInputElement.value.trim() == "") {
			return;
		}
		var currentUsernameTd = this.findTdElement(this.currentSelectIndex);
		if (currentUsernameTd) {
		this.usernameInputElement.value = currentUsernameTd.innerHTML;
		}
		if (this.passwordInputElement != "") {
			this.passwordInputElement.focus();
		}
	}
};
