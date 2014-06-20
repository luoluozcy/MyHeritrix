/**
 * ==========================================================================================
 * 库扩展接口实现文件<br/>
 * 代码书写规范简述：<br/>
 * <pre>
 *    变量/接口前缀        描述                                           发布时是否混淆
 * ------------------------------------------------------------------------------------------
 *    _                  接口内局部变量或者传递的参数                            Y
 *    _$                 对象外可访问的接口或者属性                             Y/N
 *                       此类接口不允许以字符串形式出现
 *                       如果项目所有js文件一起混淆可以考虑混淆
 *    _$$                类对象，同_$前缀的处理                                Y/N
 *    __                 对象外不可访问的接口或者属性                            Y
 *    无                 没有前缀的接口或者属性可以在对象外访问                     N
 *                       代码中可以以字符串的形式出现
 *    X                  单个大写字母命名表示集合了一些通用的属性和接口的对象
 *                       代码中禁止出现单个大写字母命名的变量                      N
 * ------------------------------------------------------------------------------------------
 * </pre>
 * @version  1.0
 * @author   weiwenqing(moonface@163.org)
 * ==========================================================================================
 */
// 类相关功能函数
(function(){
    var c = P('U.cls');
    
    /**
     * 向目标类中添加源类中的方法
     * @param {Function} _des	目标类
     * @param {Function} _src	源类
     * @param {Function} _flag	是否添加静态方法
     */
    c._$augment = function(_des, _src, _flag){
        if (!c._$isClass(_des) || !c._$isClass(_src)) 
            return;
        var _key, _p, _pro = _src.prototype;
        for (_key in _pro) {
            _p = _pro[_key];
            if (U.fun._$isFunction(_p)) 
                _des.prototype[_key] = _p;
        }
        _flag && U.obj._$extend(_des, _src, U.fun._$isFunction);
    };
    /**
     *  判断指定对象是否是类
     * @param {Object} _obj	对象
     */
    c._$isClass = function(_obj){
        return U.fun._$isFunction(_obj);
    };
})();
// 对象相关功能函数
(function(){
    var o = P('U.obj');
    o.__pool = {};
    /**
     * 是否是对象
     * @param {Object} _obj		待判断的对象
     */
    o._$isObject = function(_obj){
        return (_obj && (typeof _obj === 'object' || U.fun._$isFunction(_obj))) || false;
    };
    /**
     * 用一个对象的属性扩展另一个对象
     * @param {Object} 	 _des		目的对象
     * @param {Object} 	 _src		源对象
     * @param {Function} _factor	扩展条件
     */
    o._$extend = function(_des, _src, _factor){
        _des = _des || O;
        if (_src) 
            for (var _p in _src) 
                if (!_factor || _factor && _factor(_src[_p])) 
                    _des[_p] = _src[_p];
        return _des;
    };
    /**
     * 克隆对象
     * @param {Object} 	_obj	样本对象
     * @param {Boolean}	_flag	是否深拷贝
     */
    o._$clone = function(_obj, _flag){
        var _f = function(){};
        _f.prototype = _obj;
        return new _f();
    };
    /**
     * 将对象转换成数组
     * @param {Object} _obj	对象
     */
    o._$toArray = function(_obj){
        if (U.arr._$isArray(_obj)) 
            return _obj;
        var _arr = [];
        if (o._$isObject(_obj)) {
            var _p, _v;
            for (_p in _obj) {
                _v = _obj[_p];
                !U.fun._$isFunction(_v) && _arr.push(_v);
            }
        }
        return _arr;
    };
    /**
     * 将对象转换成数组，只转获得活动列表聚合元素，类似通过class获取的集合
     * @param {Object} _obj	对象
     */  
    o._$toArray2 = function(_obj){
        if (U.arr._$isArray(_obj)){
        	return _obj;
        }

		if(o._$isObject(_obj)){
			var _array =[];
			for(var i =0,_size = _obj.length; i< _size; i++){
				_array.push(_obj[i]);
			}
			return _array;
		}
    };    
    /**
     * 删除给定对象的属性
     * @param  {Object} _obj 对象
     * @param  {String} _pro 属性名称
     * @return {Void}
     */
    o._$delete = function(_obj, _pro){
        if (!_obj || !_pro) 
            return;
        try {
            _obj[_pro] = undefined;
            delete _obj[_pro];
        } 
        catch (e) {
            _obj[_pro] = undefined;
        }
    };
    /**
     * 将对象转化成hash
     * @param {Object} _obj	对象
     */
    o._$toHash = function(_obj){
        var _str = U._$serialize(_obj);
        _str = _str.replace(/:/g, '=').replace(/,/g, '&').replace(/\'/g, '');
        if (_str) 
            _str = _str.replace(/^{/, '#').replace(/}$/, '');
        return _str;
    };
    /**
     * 是否未定义
     * @param {Object} _obj		待判断的对象
     */
    o._$isUndefined = function(_obj){
        return typeof _obj === 'undefined';
    };
    /**
     * 设置全局数据缓存
     * @param  {String}   _key  缓存键值
     * @param  {Variable} _data 数据
     * @return {Void}
     */
    o._$setData = function(_key, _data){
        this.__pool[_key] = _data;
    };
    /**
     * 获取数据缓存
     * @param  {String} _key  缓存键值
     * @return {Variable}     数据
     */
    o._$getData = function(_key){
        return this.__pool[_key];
    };
})();
// 数组相关功能函数
(function(){
    var a = P('U.arr');
    /**
     * 是否为数组
     * @param {Any} _obj	待判断的对象
     */
    a._$isArray = function(_obj){
        return Object.prototype.toString.call(_obj) === '[object Array]';
    };
    /**
     * 指定列表里面的每一项都执行指定操作，数据内含有0、空格、null被认为是false，ie下不会继续
     * @param {Array} 		_arr	指定列表
     * @param {Function} 	_fn		指定函数
     */
    a._$forEach = function(_arr, _fn){
        if (!a._$isArray(_arr) || !U.fun._$isFunction(_fn)) 
            return;
		if(_arr.forEach)
			_arr.forEach(_fn);
		else
        for (var i = 0, _tmp; _tmp = _arr[i]; i++) 
            _fn(_tmp, i);
    };
    /**
     * 根据指定条件过滤列表
     * @param {Array}		_arr	列表
     * @param {Function} 	_factor	过滤因子
     */
    a._$filter = function(_arr, _factor){
        var _res = [];
        if (!a._$isArray(_arr) || !U.fun._$isFunction(_factor)) 
            return _res;
        if (_arr.filter) 
            _res = _arr.filter(_factor);
        else 
            for (var i = 0, _tmp; _tmp = _arr[i]; i++) 
                _factor(_tmp) && _res.push(_tmp);
        return _res;
    };
    /**
     * 检索指定项
     * @param  {Array} 				_arr	数组
     * @param  {Object||Function} 	_o		指定项或条件
     * @param  {Boolean}			_flag	_flag为true时，_o总是当成普通对象（不会当成条件）
     * @return {Number}						指定项在数组中的系数 or -1
     */
    a._$indexOf = function(_arr, _o, _flag){
        if (U.arr._$isArray(_arr)) {
            if (_arr.indexOf && (_flag || !U.fun._$isFunction(_o))) 
                return _arr.indexOf(_o);
            else {
                for (var i = 0, _l = _arr.length, _a; i < _l; i++) {
                    _a = _arr[i];
                    if (!_flag && U.fun._$isFunction(_o) && _o(_a)) 
                        return i;
                    else 
                        if (_a == _o) 
                            return i;
                }
                return -1;
            }
        }
    };
    /**
     * 将数组转换成对象，以指定属性值为键
     * @param  {Array}  	_arr	数组
     * @param  {String} 	_attr	属性名
     * @param  {Function} 	_cb		回调函数
     * @return {Object}			转换后的对象
     */
    a._$toObject = function(_arr, _attr, _cb){
        var _obj = {};
        if (a._$isArray(_arr) && _attr) {
            for (var i = 0, _l = _arr.length, _tmp; i < _l; i++) {
                _tmp = _arr[i];
                if (a._$isArray(_tmp)) 
					_obj = U.obj._$extend(_obj, a._$toObject(_tmp, _attr));
				else 
					if (U.obj._$isObject(_tmp)) {
						_cb&&_cb(_tmp, i);
						_obj[_tmp[_attr]] = _tmp;
					}
            }
        }
        return _obj;
    };
	/**
	 * 判断数组的每一项是否都满足指定条件
	 * @param {Array} 		_arr	数组
	 * @param {Function} 	_fun	条件函数
	 */
    a._$every = function(_arr, _fun){
        if (a._$isArray(_arr) && U.fun._$isFunction(_fun)) {
            for (var i = 0, _l = _arr.length; i < _l; i++) {
                if (!_fun(_arr[i])) 
                    return false;
            }
        }
        return true;
    };
	/**
	 * 删除数组中的指定项
	 * @param {Array} _arr		数组
	 * @param {Object} _item	数组项
	 * @return {Object}			新数组
	 */
    a._$erase = function(_arr, _item){
        for (var i = _arr.length; i--; _arr[i] === _item && _arr.splice(i, 1)) 
            ;
        return _arr;
    };
    /**
     * from Tangram unique.js
     * 过滤数组中的相同项（如果两个元素相同，会删除后一个元素）
     * @param {Array} _source	需要过滤相同项的数组
     * @param {Function} [_fun]	比较两个数组项是否相同的函数,两个数组项作为函数的参数。
     *
     * @return {Array} 过滤后的新数组
     */
    a._$unique = function(_source, _fun){
        var _len = _source.length, _result = _source.slice(0), i, _tmp;
        if (!U.fun._$isFunction(_fun)) {
            _fun = function(itm0, itm1){
                return itm0 === itm1;
            };
        }
        // 从后往前双重循环比较
        // 如果两个元素相同，删除后一个
        while (--_len > 0) {
            _tmp = _result[_len];
            i = _len;
            while (i--) {
                if (_fun(_tmp, _result[i])) {
                    _result.splice(_len, 1);
                    break;
                }
            }
        }
        return _result;
    };
})();
// 函数相关功能函数
(function(){
    var f = P('U.fun');
    /**
     * 是否为函数
     * @param {Object} _obj	待判断对象
     */
    f._$isFunction = function(_obj){
        return Object.prototype.toString.call(_obj) === '[object Function]';
    };
    /**
     * 指定函数订阅一个发布者的制定消息
     * @param {Function}	_fn		指定函数
     * @param {Object} 		_pub	发布者
     * @param {String} 		_type	消息名称
     */
//    f._$subscribe = function(_fn, _pub, _type){
//        if (!_pub || !_type) 
//            return;
//        var _subs = _pub._$getSubscribers();
//        if (_subs) {
//            _subs[_type] = _subs[_type] || [];
//            _subs[_type].push(_fn);
//        }
//    };
    f._$getPassportUserImage = function(_name, _type){
        return 'http://os.blog.163.com/common/ava.s?passport=' + _name + '&b=' + (_type || 0);
    };
})();
// 字符串相关功能函数
(function(){
    var s = P('U.str');
    /**
     * 是否是字符串
     * @param {Object} _obj	待判断对象
     */
    s._$isString = function(_obj){
        return typeof _obj === 'string';
    };
    /**
     * 判断字符串是否是url地址
     * @param {String} _str		字符串
     */
    s._$isUrl = function(_str){
        if (!s._$isString(_str)) 
            return false;
        return U.reg._$getRegex('url').test(_str);
    };
    /**
     * 获取字符串的长度，中文算两位
     * @param  {String} _str	字符串
     * @return {Number}			长度
     */
    s._$getLength = function(_str){
        _str = _str || '';
        for (var i = 0, _len = 0, _l = _str.length; i < _l; i++) 
            _len += _str.charCodeAt(i) > 255 ? 2 : 1;
        return _len;
    };
    /**
     * 获取字符串的长度，中文算两位
     * @param  {String} _str	字符串
     * @param  {String} _length	长度
     * @return {String}			切断后的字符串
     */
    s._$truncate = function(_str, _length, _flag){
        _str = _str || '';
        if (_length == undefined) 
            return _str;
        for (var i = 0, _len = 0, _l = _str.length; i < _l; i++) {
            _len += _str.charCodeAt(i) > 255 ? 2 : 1;
            if (_len > _length)
                break;
        }
		var _ret = _str.slice(0, i);
        return i<_str.length&&!_flag?_ret+'...':_ret;
    };
    /**
     * 清除字符串两端的空格，原字符串内容不变。
     * @param  {String}	字符串
     * @return {String} 清除两端空格的字符串
     */
    s._$trim = function(_str){
        _str = _str || '';
        if (_str.trim) 
            return _str.trim();
        return _str.replace(U.reg._$getRegex('REG_TRIM_SPACE'), '');
    };
    /**
     * 清除字符串两端的分号，原字符串内容不变。
     * @param  {String}	字符串
     * @return {String} 清除两端空格的字符串
     */
    s._$trimsc = function(_str){
        return this._$trim(_str).replace(U.reg._$getRegex('REG_TRIM_SEMICOLON'), '');
    };
    /**
     * 将hash字符串转换成hash对象
     * @param {String} _hashStr	hash	字符串
     */
    s._$toHash = function(_hashStr){
        if (!s._$isString(_hashStr)) 
            return null;
        _hashStr = s._$trim(_hashStr).replace(/^[?#]?/, '').replace(/=/g, ':').replace(/&/g, ',');
        return U._$deserialize('{' + _hashStr + '}');
    };
    /**
     * 文字内容是否包含字符串
     * @param {String} _str			待匹配文字内容
     * @param {Object} _pattern		匹配字符串
     */
    s._$include = function(_str, _pattern){
        return _str.indexOf(_pattern) > -1;
    };
	/**
	 * 
	 * @param {String} _str		字符串
	 */
    s._$camelize = function(_str){
        //TODO
        return _str.replace(/-([a-z])/ig, function(_all, _letter){return _letter.toUpperCase();});
    };
	/**
	 * 使字符串自动适应DOM节点的最大宽度
	 * @param {Object} _elm			节点对象
	 * @param {Object} _str			源字符串
	 * @param {Object} _maxwidth	最大宽度
	 * @param {Object} _suffix		超过时的后缀
	 * @param {Object} _lines		行数，保留接口，可换行
	 */
    s._$fixString = function(_elm, _str, _maxwidth, _suffix, _lines){
        _elm = E._$getElement(_elm);
        if (!_elm || !U._$trim(_str)) 
            return;
        
        var k = s._$calString(_elm, _str, _maxwidth, _suffix);
        if (k !== -1) 
            _elm.innerText = _str.substring(0, k || 0) + _suffix;
        else 
            _elm.innerText = _str;
    };
	/**
	 * 获取字符串实际宽度
	 * @param {Object} _elm			节点对象
	 * @param {Object} _str			源字符串
	 * @param {Object} _maxwidth	最大宽度	
	 * @param {Object} _suffix		超过时的后缀
	 */
    s._$calString = function(_elm, _str, _maxwidth, _suffix){
        // 计算字符宽度
        var _tmpArray = new Array(257);
        _elm.innerText = '中中中中中中中中中中';
        _tmpArray[256] = _elm.offsetWidth / 10;
        // 从ASCII为32可视字符开始计算
        for (var i = 32; i < 256; ++i) {
            _elm.innerText = '中' + String.fromCharCode(i) + '中';
            _tmpArray[i] = _elm.offsetWidth - 2 * _tmpArray[256];
        }
        
        var k, _width = 0, _suffixWidth;
        // 计算后缀字符串的宽度
        _elm.innerText = _suffix || '';
        _suffixWidth = _elm.offsetWidth;
        
        for (var i = 0, l = _str.length; i < l; ++i) {
            var _code = _str.charCodeAt(i),
				_charWidth = (_code > 255 ? _tmpArray[256] : _tmpArray[_code] || 0);
            // 保留第一次加上后缀超过最大宽度的pos，但这个时候不终止循环
            // 因为这里是算上了后缀的值，还应该继续循环看是否没有后缀时满足最大宽度
            if (k === undefined &&
            	_charWidth + _width + _suffixWidth > _maxwidth) 
                k = i;
            _width += _charWidth;
            // 没有后缀时超过了最大宽度，终止循环
            if (_width > _maxwidth) 
                break;
        }
        return _width > _maxwidth ? k || 0 : -1;
    };
})();
// 节点相关功能函数
(function(){
    var d = P('U.dom');
	/**
     * 获取节点
     * @param {Object|Node|String} _obj	节点或节点id或对象
     */
    d._$getElement = function(_obj){
        return (_obj && _obj._$getBody && _obj._$getBody()) || E._$getElement(_obj);
    };
    /**
     * 清空容器节点
     * @param {HTMLElement} _elm	容器节点
     */
    d._$emptyElement = function(_elm){
        _elm = E._$getElement(_elm);
        var _nd;
        while (_nd = _elm && _elm.firstChild) 
            E._$removeElement(_nd);
    };
    /**
     * 获取radio的值
     * @param  {Array} 	radio节点列表
     * @return {String}	值
     */
    d._$getValueOfRadio = function(_rds){
        _rds = _rds.length ? _rds : [_rds];
        for (var i = 0, _rd; _rd = _rds[i]; i++) 
            if (_rd && _rd.checked) 
                return _rd.value;
    };
    /**
     * 获取文本输入框的值
     * @param  {Array} 	_txt 	文本输入框
     * @param  {String}	_hint	输入框的默认提示文字
     * @return {String}	值
     */
    d._$getValueOfText = function(_txt, _hint){
        _hint = _hint || '';
        var _v = _txt && _txt.value;
        _v = _v || '';
        return U._$trim(_v) == _hint ? '' : _v;
    };
	/**
	 * 判断一个节点是否为文本输入对象(text, textarea, password)
	 * @param {HTMLElement} _elm	节点
	 */
    d._$isText = function(_elm){
        return _elm && (_elm.tagName.toLowerCase() == 'textarea' || (_elm.type && _elm.type.toLowerCase() == 'text' || _elm.type.toLowerCase() == 'password'));
    };
    /**
     * 给输入框添加提示信息
     * @param {HTMLElement} 输入框
     * @param {String} 		提示信息
     */
    d._$addTextHint = function(_txt, _hint){
        var _arg0 = _txt;
        if (U.arr._$isArray(_arg0)) {
            for (var i = 0, _a; _a = _arg0[i]; i++) 
                d._$addTextHint(_a, _hint);
        }
        else 
            if (d._$isText(_txt) && _hint) {
//                if (!('placeholder' in _txt)){
	                _txt.value = _hint;
	                V._$addEvent(_txt, 'focus', d.__onFocusText._$bind(d, _txt, _hint));
	                V._$addEvent(_txt, 'blur', d.__onBlurText._$bind(d, _txt, _hint));
//				} 
            }
    };
    /**
     * 输入框的focus事件的响应函数
     * @param {HTMLElement} _txt	输入框
     * @param {String} 		_hint	提示信息
     */
    d.__onFocusText = function(_txt, _hint){
        if (!_txt || !_hint) 
            return;
        if (_txt.value == _hint) 
            _txt.value = '';
    };
    /**
     * 输入框的blur事件的响应函数
     * @param {HTMLElement} _txt	输入框
     * @param {String} 		_hint	提示信息
     */
    d.__onBlurText = function(_txt, _hint){
        if (!_txt || !_hint) 
            return;
        if (_txt.value == '') 
            _txt.value = _hint;
    };
    /**
     * 给文本输入框加内容变化事件
     * @param {HTMLElement} _txt		输入框
     * @param {Functoin} 	_handler	消息响应函数
     */
    d._$addTextChange = function(_txt, _handler){
        if (d._$isText(_txt) && U.fun._$isFunction(_handler)) {
            V._$addEvent(_txt, 'input', _handler);
            if (B._$ISFF) {
                V._$addEvent(_txt, 'paste', _handler);
                V._$addEvent(_txt, 'cut', _handler);
            }
        }
    };
	/**
	 * 聚焦 text
	 * @param {HTMLElement} _txt	输入框
	 */
    d._$textFocus = function(_txt){
        if (d._$isText(_txt)) {
            _txt.focus();
            if (B._$ISIE) {
                var _range = _txt.createTextRange();
                _range.collapse(false);
                _range.select();
            }
        }
    };
    /**
     * 判断一个元素是否是另一个元素的祖先
     * @param {String|HTMLElement} _p 潜在的祖先元素
     * @param {String|HTMLElement} _c 潜在的子元素
     * @return {Boolean}
     */
    d._$isAncestor = function(_p, _c){
        var _p = E._$getElement(_p), _c = E._$getElement(_c), _result = false;
        if ((_p && _c) && (_p.nodeType && _c.nodeType)) 
            _result = _p.contains && _p !== _c ? _p.contains(_c) : !!(_p.compareDocumentPosition(_c) & 16);
        return _result;
    };
    /**
     * 返回事件触发时的相关元素对象
     * @param {Event}
     * @return {HTMLElement}
     */
    d._$getRelatedTarget = function(_event){
        var _t = _event.relatedTarget;
        if (!_t) {
            if (_event.type == "mouseout") 
                _t = _event.toElement;
            else 
                if (_event.type == "mouseover") 
                    _t = _event.fromElement;
        }
        return d.__resolveTextNode(_t);
    };
    /**
     * 解析某些情况下目标元素返回文本节点的问题
     * @param {HTMLElement}
     * @return {HTMLElement}
     * @static
     */
    d.__resolveTextNode = function(_elm){
        try {
            if (_elm && 3 == _elm.nodeType) 
                return _elm.parentNode;
        } 
        catch (e) {}
        return _elm;
    };
    /**
     * 跳转至页面某元素所在位置
     * @param {HTMLElement} _elm	元素对象
     */
    d._$scrollTo = function(_elm){
        var _body = document.documentElement || document.body,	// 	页面滚动条所在的位置
			_filter = _elm == _body; 						//	节点过滤接口，用来判断遍历停止
        scrollTo(E._$offsetX(_elm, _filter) || 0, E._$offsetY(_elm, _filter) || 0);
    };
	/**
	 * 缓缓滚动跳转至页面某元素所在位置
	 * @param {HTMLElement} _elm	元素对象
	 */
	d._$animateScrollTo = function(_elm){
        var _filter = true; 						//	节点过滤接口，用来判断遍历停止TODO
        	_x = E._$offsetX(_elm||_filter) || 0, 
			_y = E._$offsetY(_elm||_filter) || 0,
			_top = U.dom._$scrollTop();
			
		// TODO 滚动速度控制
		// 依赖浏览器自身处理速度，滚动速度不可控
        //  for (i = _body.scrollTop; i >= _y; i -= 10) 
		//  	scrollTo(0, i);

		// 设置interval，滚动速度可控
        this.__sitv = setInterval(function(){
            if (_top >= _y) {
           		_top -= 20;
                scrollTo(0, _top);
			}else
				this.__sitv && clearInterval(this.__sitv);
        }._$bind(this), 10);
	};
    /**
     * 初始化指定节点下面的锚点（也可以是任意元素节点）
     * @param {HTMLElement} _elm	节点对象
     * @param {Object}		_opt	配置参数，已实现参数列表
     * 								onbeforereload	[Function]	登录成功后的beforereload消息响应函数
     */
    d._$initAnchor = function(_elm, _opt){
        _elm = E._$getElement(_elm), _opt = _opt || O;
        if (_elm) {
            var _tagName = _elm.tagName.toLowerCase();
            if (_elm.getAttribute('needlogin') == 'true')// && (_tagName == 'input' || _tagName == 'a')) 
                V._$addEvent(_elm, 'click', d.__onClickNeedLogin._$bind(d, _opt));
            else {
                var _as = _elm.getElementsByTagName('a');
                for (var i = 0, _a; _a = _as[i]; i++) 
                    if (_a.getAttribute('needlogin') == 'true') 
                        V._$addEvent(_a, 'click', d.__onClickNeedLogin._$bind(d, _opt));
            }
        }
    };
    /**
     * 点击需要登录的链接的消息响应函数
     * @param {Object} _event	消息对象
     * @param {Object} _opt		配置参数，已实现参数列表
     * 								onbeforereload	[Function]	登录成功后的beforereload消息响应函数
     */
    d.__onClickNeedLogin = function(_opt, _event){
        V._$stopDefault(_event);
        var _anchor = V._$getElement(_event), 
			_href = _anchor.getAttribute('href', 2), 
			_opt = _opt || O, 
			_onBeforeReload = _opt.onbeforereload;
        P.ui._$$QLogin._$getInstance({
            classname: 'lay-login'
        })._$reset({
            onsuccess: function(_un){
                if (U.str._$isUrl(_href)) {
                    _href = _href.replace(location.r, location.r + '/' + _un);
                    if (_href != location.href) {
                        location.href = _href;
                        return;
                    }
                }
                _onBeforeReload && _onBeforeReload(_un);
                setTimeout(function(){location.reload();}, 500);
            }
        })._$show()._$focus();
    };
	/**
	 * 输入框增加长度验证
	 * @param {HTMLElement}	_txt	输入框
	 */
    d._$setMaxLength = function(_txt){
        if (!d._$isText(_txt)) 
            return;
        if (_txt.onpropertychange === undefined) 
            V._$addEvent(_txt, 'input', d.__checkLength._$bind(d, _txt));
        else 
            _txt.onpropertychange = d.__checkLength._$bind(d, _txt);
    };
	/**
	 * 验证输入框长度
	 * @param {HTMLElement} _txt	输入框
	 */
    d.__checkLength = function(_txt){
        var _maxLength = parseInt(_txt.getAttribute('maxlength'));
        if (!_maxLength) 
            return;
        if (_txt.value.length > _maxLength) 
            _txt.value = _txt.value.slice(0, _maxLength);
    };
	/**
	 * IE6下节点鼠标移入动作
	 * @param  {String|Node} _elm 节点ID或者对象
	 * @param  {String}      _class   动作样式
	 */
	d._$hoverElement = function(_elm,_class){
		if (!B._$ISOLDIE) return; // use css :hover
		_elm = E._$getElement(_elm);
    	if (!_elm) return;
		_class = _class||'js-hover';
		V._$addEvent(_elm, 'mouseenter', E._$addClassName._$bind(E, _elm, _class));
		V._$addEvent(_elm, 'mouseleave', E._$delClassName._$bind(E, _elm, _class));
	};
	/**
	 * 获取页面可见区域宽
	 * @return {Number}		宽度
	 */
    d._$clientWidth = function(){
        return document.documentElement.clientWidth || document.body.clientWidth;
    };
	/**
	 * 获取页面可见区域高
	 * @return {Number}		高度
	 */
    d._$clientHeight = function(){
        return document.documentElement.clientHeight || document.body.clientHeight;
    };
	/**
	 * 获取页面被卷去区域宽
	 * @return {Number}		高度
	 */
    d._$scrollLeft = function(){
        return document.documentElement.scrollLeft || document.body.scrollLeft;
    };
	/**
	 * 获取页面被卷去区域高
	 * @return {Number}		高度
	 */
    d._$scrollTop = function(){
        return document.documentElement.scrollTop || document.body.scrollTop;
    };
	/**
	 * 获取给定元素的样式
	 * @param {String|Node} _elm	元素对象
	 * @param {String} 	_name		属性名称
	 */
    d._$getStyle = function(_elm, _name){
        _elm = E._$getElement(_elm);
        if (!_elm) 
            return;
		
		//BAD SMELL
        if (!!document.defaultView) {
            var _style = document.defaultView.getComputedStyle(_elm, null);
            return _name in _style ? _style[_name] : _style.getPropertyValue(_name);
        }
        else {
            var _style = _elm.currentStyle;
			
            // 设置透明度
            if (_name == 'opacity') {
                if (/alpha\(opacity=(.*)\)/i.test(_style.filter)) {
                    var _opacity = parseFloat(RegExp.$1);
                    return _opacity ? _opacity / 100 : 0;
                }
                return 1;
            };
            _name == 'float' && 
                (_name = 'styleFloat');
				
            var _ret = _style[_name] || _style[U.str._$camelize(_name)];
            // 设置单位转换
            if (!/^\-?\d+(px)?$/i.test(_ret) && /^\-?\d/.test(_ret)) {
                var _style = _elm.style, _left = _style.left, _rsLeft = _elm.runtimeStyle.left;
                
                _elm.runtimeStyle.left = _elm.currentStyle.left;
                _style.left = _ret || 0;
                _ret = _style.pixelLeft + 'px';
                
                _style.left = _left;
                _elm.runtimeStyle.left = _rsLeft;
            }
            return _ret;
        }
    };
	/**
	 * 为给定元素设置样式
	 * @param {String|Node}		_elm	节点ID或者对象
	 * @param {String} 			_styles	样式内容
	 * @return {Node}	节点对象
	 */
    d._$setStyle = function(_elm, _styles){
        _elm = E._$getElement(_elm);
        if (!_elm) 
            return;
			
        var _style = _elm.style, match;
        if (U.str._$isString(_styles)) {
            _elm.style.cssText += ';' + _styles;
            return U.str._$include(_styles, 'opacity') ? d._$setOpacity(_elm, _styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : _elm;
        }
        for (var _prop in _styles) 
            if (_prop == 'opacity') 
                d._$setOpacity(_styles[_prop]);
            else 
                _style[(_prop == 'float' || _prop == 'cssFloat') ? (U.obj._$isUndefined(_style.styleFloat) ? 'cssFloat' : 'styleFloat') : _prop] = _styles[_prop];
        return _elm;
    };
    /**
     * 为给定元素设置透明度
     * @param {String|Node}	_elm	节点ID或者对象
     * @param {String} 		_value		透明度
     * @return {Node}	节点对象
     */
    d._$setOpacity = function(_elm, _value){
        _elm = E._$getElement(_elm);
        _elm.style.opacity = (_value == 1 || _value === '') ? '' : (_value < 0.00001) ? 0 : _value;
        return _elm;
    };
	/**
	 * 为给定元素设置文本内容
	 * @param {Array} _elms		节点数组对象
	 * @param {String} _value		文本内容
	 */
    d._$setText = function(_elms, _value){
        if (U.arr._$isArray(_elms)) {
            for (var i = 0, _a; _a = _elms[i]; i++) 
                d._$setText(_a, _value);
        }
        else 
            if (U.str._$isString(_value)) 
                _elms.innerText = _value;
    };
    /**
     * 切换节点样式
     * @param  {String|Node}	_element 触发切换的节点
     * @param  {String} 	_class	触发切换的样式
     * @return {Void}
     */
    d._$toggle = function(_elm, _class){
        E._$hasClassName(_elm, _class) ? E._$delClassName(_elm, _class) : E._$addClassName(_elm, _class);
    };
    /**
     * 打开/关闭button
     * @param {Node} 		_elm		节点
     * @param {Boolean}		_disabled	打开/关闭
     * @param {String}	 	_class		样式
     * @return {Void}
     */
    d._$toggleBtn = function(_elm, _disabled, _class){
        _elm.disabled = _disabled;
        _disabled ? E._$addClassName(_elm, _class) : E._$delClassName(_elm, _class);
    };
    /**
     * 打开button
     * @param {Node} 	_elm	节点
     * @param {String} _class	样式
     * @return {Void}
     */
    d._$enableBtn = function(_elm, _class){
        _elm.disabled = false;
        E._$delClassName(_elm, _class);
    };
    /**
     * 关闭button
     * @param {Node} 	_elm	节点
     * @param {String} _class	样式
     * @return {Void}
     */
    d._$disableBtn = function(_elm, _class){
        _elm.disabled = true;
        E._$addClassName(_elm, _class);
    };
    /**
     * 图片载入异常回调
     * @param  {Event}  _event   事件对象
     * @param  {String} _default 默认图片地址
     * @return {Void}
     */
    d._$onImgError = function(_event, _default){
        var _element = V._$getElement(_event);
        if (!_element || _element.tagName != 'IMG' ||
        !_default || _element.src == _default) 
            return;
        _element.src = _default;
    };
	/**
	 * 设置用户星级信息
	 * @param {Node} _elm		节点
	 * @param {Object} _data	数据对象
	 */
	/**
	 * 
	 * @param {Node} _elm		节点
	 * @param {Object} 	_data	数据对象
	 * @param {Boolean} _flag	值为true时只显示高级拍客的称谓
	 * @return {Void}
	 */
    d._$setRankData = function(_elm, _data, _flag){
		_elm = E._$getElement(_elm);
        if (!_elm) return;
        //	BAD SMELL TODO	样式仍需要独立设置
	    this.__rankData = 
			this.__rankData || [
//				{"grade":0,"name":"普通拍客"},
		    	{"grade":11,"name":"一级拍客"},
		    	{"grade":12,"name":"二级拍客"},
		    	{"grade":13,"name":"三级拍客"},
		    	{"grade":14,"name":"四级拍客"},
		    	{"grade":15,"name":"五级拍客"},
		    	{"grade":20,"name":"一星拍客"},
		    	{"grade":40,"name":"二星拍客"},
		    	{"grade":60,"name":"三星拍客"}]
        var _grade = !isNaN(_data.grade) ? _data.grade : _data.shareGrade;
        if (_data.rank) {
			if (_flag) {
				if (_grade >= 20) 
					_elm.innerText = _data.rank;
			}
			else 
				_elm.innerText = _data.rank;
		}
		else 
			for (var i = 0, l = this.__rankData.length; i < l; i++) {
				if (this.__rankData[i].grade == _grade) {
					if (_flag) {
						if (_grade >= 20) 
							_elm.innerText = this.__rankData[i].name;
					}
					else 
						_elm.innerText = this.__rankData[i].name;
					break;
				}
			}
        _grade = _grade / 20;
        if (_grade >= 1) {
            E._$addClassName(_elm, 'star iblock');
            _elm.title = (_grade == 1 ? '一' : (_grade == 2 ? '二' : '三')) + '星高级拍客';
            _elm.style.width = 14 * _grade + 'px';
        }
    };
	
/*
 * 数据结构变更2
 * @param {Node} _elm		节点
 * @param {Object} 	_data	数据对象
 * @param {Boolean} _flag	值为true时只显示高级拍客的称谓
 * @return boolean
 */	
    d._$setRankData2 = function(_elm, _data, _flag){
		_elm = E._$getElement(_elm);
        if (!_elm) {
			return;
		}
	    this.__rankData = {
						    	'11': {"grade":11,"name":"一级拍客"},
						    	'12': {"grade":12,"name":"二级拍客"},
						    	'13': {"grade":13,"name":"三级拍客"},
						    	'14': {"grade":14,"name":"四级拍客"},
						    	'15': {"grade":15,"name":"五级拍客"},
						    	'20': {"grade":20,"name":"一星拍客"},
						    	'40': {"grade":40,"name":"二星拍客"},
						    	'60': {"grade":60,"name":"三星拍客"},
								'nums': {
									'1':'一',
									'2':'二',
									'3':'三'
								}
							}
        var _grade = !isNaN(_data.grade) ? parseInt(_data.grade) : parseInt(_data.shareGrade),_grade2;
		_grade = isNaN(_grade) ? 0 : _grade;
		if(_grade < 11){
			_elm.title = _elm.innerText = '';
			E._$delClassName(_elm, _data.styles);
			return;
		}else{
			if(_grade < 20 && _grade  > 15){
				_grade = 15;
			}else if(_grade < 40 && _grade  > 20){
				_grade = 20;
			}else if(_grade < 60 && _grade  > 40){
				_grade = 40;
			}else if(_grade  > 60){
				_grade = 60;
			}
			_grade2 = parseInt(_grade / 20);
		}
		_elm.title = _elm.innerText = _data.rank || (this.__rankData['' + _grade] && this.__rankData['' + _grade].name) || '';
		if (_flag) {
			_elm.style.textIndent = '0';
			E._$delClassName(_elm, _data.styles);
		}else{
			if(_grade2){
				E._$addClassName(_elm, _data.styles);
	            _elm.title = (this.__rankData['nums']['' + _grade2] && (this.__rankData['nums']['' + _grade2] + '星高级拍客')) || '';
	            _elm.style.width = 14 * _grade2 + 'px';
			}else{
				E._$delClassName(_elm, _data.styles);
			}
		}
    };
		
    /**
     * 显示目标元素
     * @param {HTMLElement|string|Array} _arg0	目标元素或目标元素的id
     * @return {Void}
     */
    d._$show = function(_arg0){
        if (U.arr._$isArray(_arg0)) {
            for (var i = 0, _a; _a = _arg0[i]; i++) 
                d._$show(_a);
        }
        else {
            _arg0 = E._$getElement(_arg0);
            _arg0.style.display = '';
        }
    };
    /**
     * 隐藏目标元素
     * @param {HTMLElement|string|Array} _arg0	目标元素或目标元素的id
     * @return {Void}
     */
    d._$hide = function(_arg0){
        if (U.arr._$isArray(_arg0)) {
            for (var i = 0, _a; _a = _arg0[i]; i++) 
                d._$hide(_a);
        }
        else {
            _arg0 = E._$getElement(_arg0);
            _arg0.style.display = 'none';
        }
    };
	/**
	 * 扩展版innerHTML
	 * @param {Object} _elm		节点
	 * @param {Object} _xhtml	html内容
	 * @param {Object} _flag	是否异步(解决ie6某些情况下innerHTML时cpu100%问题)
	 */
    d._$insertHTML = function(_elm, _xhtml, _flag){
        _elm = E._$getElement(_elm);
        if (!_elm || !_xhtml) 
            return;
        var _temp = document.cloneElement('div'), _frag = document.createDocumentFragment();
        _temp.innerHTML = _xhtml;
        (function(){
            if (_temp.firstChild) {
                _frag.appendChild(_temp.firstChild);
                if (_flag) 
                    setTimeout(arguments.callee, 0);
                else 
                    arguments.callee();
            }
            else 
                _elm.appendChild(_frag);
        })();
    };
	/**
	 * 获取目标元素属性（一般用来获取自定义属性）
	 * @param {HTML|Element} _elm	目标元素
	 * @param {Object} _attr		目标属性
	 * @return {String}
	 */
    d._$getAttribute = function(_elm, _attr){
        var _result;
        if (d._$hasAttribute(_elm, _attr)) {
            _result = _elm.getAttribute(_attr);
            _elm.removeAttribute(_attr);
        }
        return _result;
    };
	/**
	 * 判断目标元素是否含有某个属性 
	 * @param {HTML|Element} _elm	目标元素
	 * @param {Object} _attr		目标属性
	 * @return {Boolean}
	 */
    d._$hasAttribute = function(_elm, _attr){
        return B._$ISIE && B._$VERSION <= 8 ? (_attr in _elm) : _elm.hasAttribute(_attr);
    };
})();
// 正则表达式相关功能函数
(function(){
    var r = P('U.reg');
    /**
     * 根据类型获取正则表达式
     * @param {String} _type	类型('email', 'url', etc)
     */
    r._$getRegex = function(_type){
        this.__regs = this.__regs || {};
        if (U.str._$isString(_type)) {
            if (!this.__regs[_type]) {
                switch (_type) {
                    case 'email':
                        this.__regs[_type] = /\w[-.\w]*@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+/;
                        break;
                    case 'url':
                        this.__regs[_type] = /(ftp|https?):\/\/[^\/:](?::\d+)?(\/.*)?/;
                        break;
                    case 'REG_TRIM_SPACE':
                        this.__regs[_type] = /(?:^\s+)|(?:\s+$)/g;
                        break;
                    case 'REG_TRIM_SEMICOLON':
                        this.__regs[_type] = /(?:^\;+)|(?:\;+$)/g;
                        break;
                    case 'REG_URL_COMPLETE':
                        this.__regs[_type] = /^(.*?)\//;
                        break;
                }
            }
            return this.__regs[_type];
        }
    };
})();
// 事件相关功能函数
(function(){
    var e = P('U.evt');
    /**
     * fire event
     * @param {HTMLElement}	_elm	源
     * @param {String} 		_type	事件类型
     */
    e._$fireEvent = function(_elm, _type){
        if (U.obj._$isObject(_elm) && U.str._$isString(_type)) {
            if (B._$ISIE) 
                _elm.fireEvent(typeof _elm[_type] !== 'undefined' ? _type : 'onpropertychange');
            if (document.createEvent) {
                var _evt = document.createEvent('Events');
                _evt.initEvent(_type, true, true);
                _elm.dispatchEvent(_evt);
            }
        }
    };
})();
// flash相关功能函数
(function(){
    var f = P('U.fls');
	/**
	 * 定时检测IE下标题是否被flash修改
	 */
    f._$hackHashFlash = function(){
        if (!B._$ISIE) 
            return;
		var _title = '';
        setInterval(function(){
            _title = document.title;
            if (_title == title) 
                return;
            else 
                if (_title.indexOf('#') != -1) 
                    document.title = title;
        }, 1000);
    };
})();
// 通用功能函数
(function(){
    var u = P('U.utl');
    u.__type = ['', '163.com', '126.com', 'popo.163.com', '188.com', 'vip.163.com', 'yeah.net', 'game.163.com'];
    /**
     * 获取用户的自动登录信息
     * @return {Array} 自动登录信息，[username,password]
     */
    u._$getAutoLogin = function(){
        var _info = U._$getCookie('NEPHOTO_LOGIN');
        if (!_info) 
            return null;
        _info = _info.split('|');
        if (_info.length < 3 || _info[1] == 'null' || _info[2] == 'null') 
            return null;
        _info[0] = _info[0] == 1 ? 2 : _info[0] == 2 ? 1 : _info[0]; // swap 1 and 2
        return [_info[1].replace(/@126$/, '').replace(/@188$/, '').replace(/@yeah$/, '').replace(/.vip$/, '') + '@' + (u.__type[parseInt(_info[0]) + 1] || '163.com'), _info[2]];
    };
})();
//	清理展示组图时产生的过大cookie
//(function(){
//	var t = P('U.tmp');
//    t._$cleanCookie = function(){
//		var _ud = window.UD || '',
//	    	_state = 'NEPHOTO_COOKIE_STATE',
//	    	_ckeys = ['NEPHOTO_SHARE_UPLOAD_DIRS', 'NEPHOTO_SHARE_UPLOAD_REGIONS', 'NEPHOTO_SHARE_UPLOAD_CAMERAS', 'NEPHOTO_SHARE_UPLOAD_LENS'];
//        if (!_ud || (!_ud.editable || (_ud.editable && U._$getCookie(_state)))) 
//            return;
//        for (var i = 0, l = _ckeys.length; i < l; i++) 
//            U._$delCookie(_ckeys[i], 'photo.163.com', '/' + _ud.hostName + '/share/');
//        U._$setCookie(_state, true, 'photo.163.com', 10000);
//    };
//    t._$cleanCookie();
//})();
// 	系统扩展初始化
(function(){
    var s = P('U.sys');
	s.__param = {};
    /*
     * 系统扩展初始化
     * @return {Void}
     */
    s.__init = function(){
        // init xparam
        if (window.name != '_nephoto') {
        	var _name = window.name;
        	if (_name && /^[\],:{}\s]*$/.test(_name.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
							.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
							.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))){
						var _param = U._$deserialize(_name);
            if (!!_param) 
            	this.__param[_param.op] = _param;
					}
        }
        window.name = '_nephoto';
        // init template
        var _node = E._$getElement('photo-163-com-template');
        if (!_node) 
            return;
        var _ntmp = _node.getElementsByTagName('textarea');
        if (!!_ntmp && _ntmp.length > 0) 
            for (var i = 0, l = _ntmp.length, _type, _item; i < l; i++) {
                _item = _ntmp[i];
                if (!_item.id) 
                    continue;
                _type = U._$trim(_item.name.toLowerCase());
                if (_type == 'jst') {
                    E._$addHtmlTemplate(_item);
                    continue;
                }
                if (_type == 'txt') {
                    U.obj._$setData(_item.id, _item.value || '');
                    continue;
                }
                if (_type == 'ntp') {
                    E._$addNodeTemplate(_item.value || '', _item.id);
                    continue;
                }
            }
        E._$removeElement(_node);
    };
    /**
     * 取刷新前保存的回调信息
     * @param  {String} _key 键值
     * @return {Varialbe}    回调信息
     */
    s._$getXParam = function(_key){
        return this.__param[_key] || null;
    };
    /**
     * 设置刷新前保存的回调信息
     * @param  {String}   _key   键值
     * @param  {Varialbe} _value 回调信息
     * @return {Void}
     */
    s._$setXParam = function(_key, _value){
        this.__param[_key] = _value;
    };
    /**
     * 取刷新前所有保存的回调信息
     * @return {Varialbe}    回调信息
     */
    s._$getAllXParam = function(){
        return this.__param || null;
    };
    /**
     * 刷新页面并保存回调信息
     * @param  {String}   _url  刷新地址
     * @param  {Variable} _data 回调信息
     * @return {Void}
     */
    s._$refresh = function(_url, _data){
        if (!_url) 
            return;
        if (!!_data && !!_data.op) 
            window.name = U._$serialize(_data);
        location.href = _url;
    };
    s.__init();
    document.lbody = document.body.appendChild(E._$parseElement('<div class="g-lbody fixed" style="display:none;"></div>'));
})();