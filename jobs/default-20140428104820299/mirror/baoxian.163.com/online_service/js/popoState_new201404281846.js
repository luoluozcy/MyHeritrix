var stateCheck = function(e) {
	var b = [];
	b = e;
	window.frechShopPopoState = function(i, g) {
		try {
			if (!!i && (g != null || g != undefined)) {
				var f = document.getElementById(i);
				if (f) {
					if (g == 1) {
						f.className = "kf_btn kf_btn1";
					} else {
						f.className = "kf_btn kf_btn2 gray";
						f.onclick = function() {
						};
					}
				}
			}
		} catch (h) {
			return false;
		}
	};
	var a = document.head || document.getElementsByTagName("head")[0];
	for (var c = 0; c < b.length; c++) {
		var d = document.createElement("script");
		d.type = "text/javascript";
		d.src = "http://popo.aipai.163.com:8080/webservice/aipai/GetUserPresence?uid="
				+ b[c];
		a.insertBefore(d, a.firstChild);
	}
};
function contactOnlineCorp(corp) {
	if (!getLoginUserAccount()) {
		if (typeof easyNav != "undefined" && easyNav.login) {
			easyNav.login(function() {
				contactOnlineCorp(corp);
			});
		} else {
			popupLogin(function() {
				contactOnlineCorp(corp);
			});
		}
		return;
	}
	jQuery
			.ajax({
				type : "POST",
				async : false,
				url : "/queryOnlineCorpIM.html?corp=" + corp + "&cache="
						+ (+new Date()),
				data : "",
				success : function(msg) {
					var sdata = msg;
					if (sdata && sdata != "") {
						var sget = eval(sdata);
						if (sget.length > 0) {
							var groupId = sget[Math.floor(Math.random()
									* sget.length)];
							var _l = (screen.width - 1000) / 2;
							var _t = (screen.height - 680) / 2;
							window
									.open(
											"http://zxkf.163.com/index.html?productId=3&groupId="
													+ groupId + "",
											"popo",
											"height=680,width=1000,location=no,menubar=no,resizable=false,scrollbars=no,toolbar=no,status=no,top="
													+ _t + ",left=" + _l);
						}
					}
				}
			});
}
var kfflag = false;
function switchShow(c) {
	var b = $("kfpart"), d = $("r_kf_b"), a = $("r_kf_s");
	if (c) {
		d.style.display = "none";
		a.style.display = "block";
	} else {
		a.style.display = "none";
		d.style.display = "block";
	}
	setLeft();
	if (!kfflag) {
		kfflag = true;
		if (typeof jQuery != "undefined") {
			jQuery(window).resize(function() {
				setLeft();
			});
		} else {
			window.onresize = function() {
				setLeft();
			};
		}
	}
}
function setLeft() {
	var a = document.documentElement.offsetWidth || document.body.scrollWidth, c = $("kfpart"), b;
	b = c.offsetWidth + 4;
	if ((a - 960) / 2 < b) {
		c.style.marginLeft = 485 - b + ($("r_kf_s").offsetWidth || 39) + "px";
	} else {
		c.style.marginLeft = 485 + "px";
	}
}