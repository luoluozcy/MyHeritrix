//extend javascript
Array.prototype.has = function(v) {
    for (var i=0, len = this.length; i < len; i++){
        if (this[i] == v) return true;
    }
    return false;
};

if (!Array.prototype.filter) {  
    Array.prototype.filter = function(fun /*, thisp*/) {  
        var len = this.length >>> 0;  
        if (typeof fun != "function") throw new TypeError();  
        var res = [];  
        var thisp = arguments[1];  
        for (var i = 0; i < len; i++) {  
            if (i in this) {  
                var val = this[i]; // in case fun mutates this  
                if (fun.call(thisp, val, i, this))  
                    res.push(val);  
            }  
        }  
        return res;  
    };  
}

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fun /*, thisp*/) {
        var len = this.length >>> 0;
        if (typeof fun != "function") throw new TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
           if (i in this)
               fun.call(thisp, this[i], i, this);
        }
    };
}

if (!Array.prototype.map) {
    Array.prototype.map = function(fn) {
        var len = this.length >>> 0;
        if (typeof fn != "function")
            throw new TypeError();

        var result = new Array(len);
        for (var i = 0; i < len; i++) {
            if (i in this)
                result[i] = fn.call(undefined, this[i], i, this);
        }
        return result;
    };
}

if (!Array.prototype.reduce) {  
    Array.prototype.reduce = function(fun /*, initial*/) {  
        var len = this.length >>> 0;  
        if (typeof fun != "function") throw new TypeError();  
        // no value to return if no initial value and an empty array  
        if (len == 0 && arguments.length == 1) throw new TypeError();  
      
        var i = 0; 
        if (arguments.length >= 2) {  
           var rv = arguments[1];  
        } else {  
            do {  
               if (i in this) {  
                   var rv = this[i++];  
                   break;  
               }  
               // if array contains no values, no initial value to return  
               if (++i >= len) throw new TypeError();  
            } while (true);  
        }
        for (; i < len; i++) {  
            if (i in this)  
               rv = fun.call(undefined, rv, this[i], i, this);  
        }
        return rv;  
    };  
};

//获取 该数组 元素个数     
if (!Array.prototype.size) {
    Array.prototype.size = function() {
    	return (this.length);
    };
}

//判断 该数组 是否为空    
if (!Array.prototype.isEmpty) {
	Array.prototype.isEmpty = function() {
		return (this.length < 1);     
	};
}

//向 该数组中 增加元素（key, value)      
if (!Array.prototype.put) {
	Array.prototype.put = function(_key, _value) {
		 this.push( {     
             key : _key,     
             value : _value     
         });     
	};
}

//获取指定VALUE的元素KEY，失败返回NULL       
if (!Array.prototype.get_value_key) {
	Array.prototype.get_value_key = function(_value) {
		try{     
	         for(i = 0; i < this.length; i++) {     
	             if(this[i].value == _value) {     
	                 return i;     
	             }     
	         }     
	     } catch(e) {     
	         return null;     
	     }       
	};
}

//获取指定KEY的元素值VALUE，失败返回NULL      
if (!Array.prototype.get) {
	Array.prototype.get = function(_key) {
		try{     
	        for(i = 0; i < this.length; i++) {     
	            if(this[i] == _key) {     
	                return this[i];     
	            }     
	        }     
	    } catch(e) {     
	        return null;     
	    }        
	};
}

//删除指定KEY的元素，成功返回True，失败返回False    
if (!Array.prototype.remove) {
	Array.prototype.remove = function(_key) {
		var bln = false;     
		 try{     
			 for(i = 0; i < this.length; i++) {     
				 if(this[i] == _key) {     
					 this.splice(i, 1);     
					 return true;     
				 }     
			 }     
		 } catch(e) {     
			 bln = false;     
		 }     
		 return bln;     
	};
}

//获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL     
if (!Array.prototype.element) {
	Array.prototype.element = function(_index) {
		if(_index < 0 || _index >= this.length) {     
	        return null;     
	    }     
	    return this[_index]; 
	};
}

//判断 该数组中 是否含有指定KEY的元素       
if (!Array.prototype.containsKey) {
	Array.prototype.containsKey = function(_key) {
		var bln = false;     
	    try{     
	        for(i = 0; i < this.length; i++) { 
	            if(this[i].key == _key) {     
	                bln = true;     
	            }     
	        }     
	    } catch(e) {     
	        bln = false;     
	    }     
	    return bln;    
	};
}

//获取 该数组中 所有VALUE的数组（ARRAY）     
if (!Array.prototype.values) {
	Array.prototype.values = function() {
		var arr = new Array();     
	    for(i = 0; i < this.length; i++) {     
	        arr.push(this[i].value);     
	    }     
	    return arr;    
	};
}

//获取 该数组中 所有KEY的数组（ARRAY）      
if (!Array.prototype.keys) {
	Array.prototype.keys = function() {
		var arr = new Array();     
	    for(i = 0; i < this.length; i++) {     
	        arr.push(this[i].key);     
	    }     
	    return arr;    
	};
}

//Array.prototype.max = function () {
//	alert(this);
//    return Math.max.apply({}, this);
//};
//
//Array.prototype.min = function () {
//	alert(this);
//    return Math.min.apply({}, this);
//};

String.prototype.trim = function() {
    return (this || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
};

String.prototype.isInt = function() {
    if ('0' === this.trim()) return true;
    return /^[+|\-]?[1-9]\d*$/.test(this.trim());
};

String.prototype.isFloat = function() {
    return /^[+|\-]?\d+(\.\d+)?$/.test(this.trim());
};

String.prototype.isDate = function(re) {
    re = re || /^(\d{1,4})[\-\/](\d{1,2})[\-\/](\d{1,2})$/;
    var result = this.match(re);
    if (!result) return false;
    var date = new Date(result[1], result[2], result[3]);    
    if (date.getFullYear() != result[1]
        || date.getMonth() != result[2]
        || date.getDate() != result[3]) return false;
        
    return true;
};

String.prototype.isPhone = function() {
	try {
		var regex = new RegExp('^((13[0-9])|(15[0-9])|(18[0-9])|147)[0-9]{8}$');
		if (regex.test(this)) return true;
	} catch(e) { }
	return false;
};

String.prototype.startswith = function(s) {
    if (!s) return false;
    return (this.indexOf(s) == 0);
};

String.prototype.endswith = function(s) {
    if (!s) return false;
    if (s.length > this.length) return false;
    var lastIndex = this.lastIndexOf(s);
    return (lastIndex != -1) && (lastIndex + s.length == this.length);
};

String.prototype.getLength = function(){
    var len = this.length;
    var reLen = 0;
    for (var i = 0; i < len; i++) {       
        if (this.charCodeAt(i) < 27 || this.charCodeAt(i) > 126) {
            // 全角   
            reLen += 2;
        } else {
            reLen++;
        }
    }
    return reLen;  
};

String.prototype.clean = function() {
    var newString = "";
    var inTag = false;
    var s = this.toString();
    var start = s.indexOf('if gte mso');
    while (start != -1) {
    	var tail = s.indexOf('<![endif]-->');
    	s = s.substring(tail + 12);
    	start = s.indexOf('if gte mso');
    } 
   return s;
};


Number.prototype.toFixed = function(d) {
	var s = this + "";
	if (!d)
		d = 0;
	if (s.indexOf(".") == -1)
		s += ".";
	s += new Array(d + 1).join("0");
	if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(s)) {
		var s = "0" + RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true;
		if (a == d + 2) {
			a = s.match(/\d/g);
			if (parseInt(a[a.length - 1]) > 4) {
				for ( var i = a.length - 2; i >= 0; i--) {
					a[i] = parseInt(a[i]) + 1;
					if (a[i] == 10) {
						a[i] = 0;
						b = i != 1;
					} else
						break;
				}
			}
			s = a.join("").replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"),
					"$1.$2");
		}
		if (b)
			s = s.substr(1);
		return (pm + s).replace(/\.$/, "");
	}
	return this + "";
};

Number.prototype.toPercent = function(){
	return (Math.round(this * 10000)/100).toFixed(2) + '%';
}

String.prototype.contains = function(s) {
    if (!s) return false;
    if (s.length > this.length) return false;
    return this.indexOf(s) != -1;
};

String.prototype.full2half = function() {
	var str= this;
	var result="";
	for (var i = 0; i < str.length; i++){
		if (str.charCodeAt(i)==12288){
			result+= String.fromCharCode(str.charCodeAt(i)-12256);
			continue;
		}
		if (str.charCodeAt(i)>65280 && str.charCodeAt(i)<65375) {
			result+= String.fromCharCode(str.charCodeAt(i)-65248);
		} else {
			result+= String.fromCharCode(str.charCodeAt(i));
		}
	}
	return result;
};

Date.prototype.Compare = function(date) {//是否大于date
	var year1 = parseInt(this.getFullYear());
	var year2 = parseInt(date.getFullYear());
	var month1 = parseInt(this.getMonth());
	var month2 = parseInt(date.getMonth());
	var day1 = parseInt(this.getDate());
	var day2 = parseInt(date.getDate());

	if( year1 > year2){
	   return true;
	}else if( year1 < year2 ){
	   return false;
	}else if( month1 > month2 ){
	   return true;
	}else if( month1 < month2 ){
	   return false;
	}else if( day1 > day2 ){
	   return true;
	}
	return false;
};
//结束时间是否大于开始时间
Date.prototype.diff = function(date1,date2){
    start_at =  new Date(date1.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1/$2/$3"));
    end_at = new Date(date2.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1/$2/$3"));
    if(start_at > end_at) {
    	   return true;
    }    
};

Date.prototype.format = function(format) {  
    /* 
     * eg:format="YYYY-MM-dd hh:mm:ss"; 
     */  
    var o = {  
        "M+" :this.getMonth() + 1, // month  
        "d+" :this.getDate(), // day  
        "h+" :this.getHours(), // hour  
        "m+" :this.getMinutes(), // minute  
        "s+" :this.getSeconds(), // second  
        "q+" :Math.floor((this.getMonth() + 3) / 3), // quarter  
        "S" :this.getMilliseconds()  
    // millisecond  
    };
  
    if (/(y+)/.test(format)) {  
        format = format.replace(RegExp.$1, (this.getFullYear() + "")  
                .substr(4 - RegExp.$1.length));  
    }  
  
    for ( var k in o) {  
        if (new RegExp("(" + k + ")").test(format)) {  
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]  
                    : ("00" + o[k]).substr(("" + o[k]).length));  
        }  
    }  
    return format;
};

(function() {
	if (window.m163) { return; }		
    m163 = {};
	m163.utils = {};
	m163.utils.add_global_layers = function(selector) {
		if (!this.global_layers) this.global_layers = [];
		if (!this.global_layers.has(selector)) this.global_layers.push(selector); 
	};
	m163.utils.add_escape_layers = function(selector) {
		if (!this.escape_layers) this.escape_layers = [];
		if (!this.escape_layers.has(selector)) this.escape_layers.push(selector); 
	};
	m163.utils.hide_global_layers = function(e) {
		if (this.global_layers) {
			var cls = $(e.target).attr('class').split(' ');
			if (this.escape_layers) {
				for (var k = 0, len = this.escape_layers.length; k < len; k++) {
					for (var l = 0, ll = cls.length; l < ll; l++) {
					    if (this.escape_layers.has(cls[l])) return;
					}
				}
			}
			for (var i = 0, len = this.global_layers.length; i < len; i++) {
				if ($(this.global_layers[i]).length > 0) {
					var thiz = $(this.global_layers[i]);
					if (thiz.length == 0) continue;
					var t = $(e.target);
					var c = false;
					for (var j = 0; j < t.parents().length; j++) {
						for (var k = 0; k < thiz.length; k++) {
							if (t.parents()[j] == thiz[k]) {
								c = true;
								break;
							}
						}
						if (c) break;
					}
					if (c) continue;
	                thiz.hide();
				}
			}
		}
	};
	
	m163.utils.random = {};
	m163.utils.random.word = function() {
		var random_seeds = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        return random_seeds.substr(rndnum(0, 51), 1);
    };
    // 随机字符串
    m163.utils.random.words = function(len) {
	    var rtn = [];
	    for (i = 0; i < len; i++) {
	        rtn.push(m163.utils.random.word());
	    }
	    return rtn.join("");
	};
    // 随机数字
    m163.utils.random.number = function(min, max) {
	    return Math.ceil(Math.random() * (max - min) + min);
	};
	
	m163.event = {};
	m163.event.keycode = {
		'BACKSPACE'   : 8,
		'TAB'         : 9,
		'ENTER'       : 13,
		'SHIFT'       : 16,
		'CTRL'        : 17,
		'ALT'         : 18,
		'PAUSE'       : 19,
		'CAPSLOCK'    : 20,
		'ESCAPE'      : 27,
		'LEFT'        : 37,
		'UP'          : 38,
		'RIGHT'       : 39,
		'DOWN'        : 40,
		'DELETE'      : 46,
		'F6'          : 117,
		'F12'         : 123
	};
	
	m163.utils.round = function(n,d){
		if(!d)d=2;
		return parseFloat(n).toFixed(d);
	};
	
	m163.utils.full2half = function(o, context) {
		if (!o) o = '.full2half';
		var ConvertToHalf = function(t) {
			var v = t.val();
			if(v != '') {
				t.val(v.full2half());
			}
		};
		
		$(o, context).keyup(function(e) { ConvertToHalf($(this)); });
	};
	
	m163.utils.maxlimit = function(t) {

		if (!t) t = '.maxlimit';
		
		var subtxt = function(t) {
			var max = t.attr("maxlength") * 2;
			var charcnt = t.val().trim().length;
			var id = t.attr("id");
			id = "#count_" + id;
			
			var len = 0;  
            var str = t.val().trim();
            var sub_str = '';
            for (var i=0; i<str.length; i++)
            {  
                if ( str.charCodeAt(i) > 0 && str.charCodeAt(i) <= 127 ) {  
                	len ++;  
                } else {  
                	len += 2;  
                }
                if( len <= max  )
                {
                	sub_str+= str[i];
            	}
            }
            if(len > max) {
				//t.val(sub_str);
				$(id).html(parseInt((len - max)/2));
				$(id).css("color","red");
				$(id).prev().html('已超过');
				$(id).prev().css('color', 'red');
				$(id).next().css('color', 'red');
			} else {
				charcnt = max - len;
				$(id).html(parseInt(charcnt/2));
				//$(id).css("color","");
				$(id).prev().html('还可以输入');
				$(id).prev().css('color', '');
				$(id).next().css('color', '');
			}
			/*
			if(charcnt > max) {
				t.val(t.val().substring(0, max));
				$(id).html(0);
			} else {
				charcnt = max - charcnt;
				$(id).html(charcnt);
			}
			*/
		};
		$(t).focusin(function(e) { subtxt($(this)); });
		$(t).focusout(function(e) { subtxt($(this)); });
		$(t).keydown(function(e) { subtxt($(this)); });
		$(t).keyup(function(e) { subtxt($(this)); });
	};
	
	m163.utils.reset_placeholder = function(o, context) {
		if (!o) o = '.placeholder';
		var repir_placeholder = function(t) {
	        var p = t.parent();
	        var clz = $(t).attr('name') + '_placeholder';
	        if (p.find('.' + clz).length > 0) {
	        	p.find('.' + clz).remove();
	        	m163.utils.placeholder(o, context);
	        }
		};
		$(o, context).each(function(e) { repir_placeholder($(this));  });
	};
	
	m163.web = {};
	m163.web.url = function(encode) {
		var href = window.location.href;
		if (encode === true) {
			href = encodeURIComponent(href);
		}
		return href;
	};	
	
	m163.me = {id:0};
	m163.me.id = me_id;
	
	m163.status = function(target, callback){
		target = target || $(".userInfoBox");
		$.get('/account/status', function(data){
			if( data.user_id ){
				if( !data.account ){
					var html = '<div class="userInfomain"><div class="head48"><a href="' + data.href + '"><img width="44" height="44" src="' + data.head_ico + '" class="toux"></a></div><div class="right"><span>' + data.name + '</span><span><a href="http://reg.163.com/Logout.jsp?url=' + logout_url + '">退出</a></span></div></div><div class="line1 m-t-20 m-b-20"></div><span class="button2"><a href="/apply" class="apply">立即报名参赛</a></span>';
					target.html(html);
				}
				else if( data.account ){
					data.account.total_money = data.account.total_money >= data.account.init_money ? '<label class="f-Cred">' + data.account.total_money.toFixed(2)  + '</label>' : '<label class="f-Cgreen">' + data.account.total_money.toFixed(2)  + '</label>';
					data.account.total_yield = data.account.total_yield >= 0 ? '<label class="f-Cred">' + data.account.total_yield.toPercent()  + '</label>' : '<label class="f-Cgreen">' + data.account.total_yield.toPercent()  + '</label>';
					data.account.day_yield = data.account.day_yield >= 0 ? '<label class="f-Cred">' + data.account.day_yield.toPercent()  + '</label>' : '<label class="f-Cgreen">' + data.account.day_yield.toPercent()  + '</label>';
					data.account.week_yield = data.account.week_yield >= 0 ? '<label class="f-Cred">' + data.account.week_yield.toPercent() + '</label>' : '<label class="f-Cgreen">' + data.account.week_yield.toPercent()  + '</label>';
					data.account.month_yield = data.account.month_yield >= 0 ? '<label class="f-Cred">' + data.account.month_yield.toPercent() + '</label>' : '<label class="f-Cgreen">' + data.account.month_yield.toPercent()  + '</label>';
					var deal_percent = '<label class="f-Cred">' + (data.account.deal_money / data.account.init_money).toPercent() + '</label>';
					var html = '<div class="userInfomain"><div class="head48"><a href="' + data.href + '"><img width="44" height="44" src="' + data.head_ico + '" class="toux"></a></div><div class="right"><span>' + data.name + '</span><span><a href="/account/" style="color:red">进入交易系统</a>&nbsp;&nbsp;<a href="http://reg.163.com/Logout.jsp?url=' + logout_url + '">退出</a></span></div></div><div class="Reguser-infor"><table cellspacing="0" cellpadding="0" border="0" width="100%"><tbody><tr><td class="infor-right">我的总资产:</td><td style="width: 110px;"><span class="account-money">' + data.account.total_money + '</span></td></tr><tr><td class="infor-right">总收益率:</td><td><span class="account-yield">' + data.account.total_yield + '</span></td></tr><tr><td class="infor-right">资金周转率:</td><td><span class="account-turnover">' + deal_percent + '</span></td></tr><tr><td class="infor-right">总排名:</td><td><span class="account-season">' + data.account.total_yield + (data.account.total_rank ? ' <a href="/toplist">第' + data.account.total_rank + '名</a>' : '') + '</span></td></tr><tr><td class="infor-right">周收益率排名:</td><td><span class="account-week">' + data.account.week_yield + (data.account.week_rank ? ' <a href="/toplist">第' + data.account.week_rank + '名</a>' : '') + '</span></td></tr><tr><td class="infor-right">日收益率排名:</td><td><span class="account-day">' + data.account.day_yield + (data.account.day_rank ? ' <a href="/toplist">第' + data.account.day_rank + '名</a>' : '') + '</span></td></tr></tbody></table></div>';
					target.html(html);
				}
				var c = $.cookie('set_mf_cookie'); 
				if( !c || c != data.user_id )
				{		
					$.getJSON(data.set_cookie_url + "&callback=?", function(json){});
					$.cookie('set_mf_cookie', data.user_id, {expires: 1, path:'/'});					
				}
			}
			$("#apply_count").html(data.apply_count);
			m163.me.id = data.user_id;
			$(".login_btn").click(function(){
				m163.dialog.load("/account/login/?from=" + from_url);
			});
			$(".apply").click(function(){
				if( !m163.me.id )
				{
					var from = $(this).attr("href");
					m163.dialog.load("/account/login/?from=" + from);
					return false;
				}
			});
			if( callback ) callback();
		}, 'json');
	}
})();

