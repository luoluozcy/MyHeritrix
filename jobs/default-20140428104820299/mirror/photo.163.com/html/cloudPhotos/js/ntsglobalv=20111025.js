/**
 * ==========================================================================================
 * ����չ�ӿ�ʵ���ļ�<br/>
 * ������д�淶������<br/>
 * <pre>
 *    ����/�ӿ�ǰ׺        ����                                           ����ʱ�Ƿ����
 * ------------------------------------------------------------------------------------------
 *    _                  �ӿ��ھֲ��������ߴ��ݵĲ���                            Y
 *    _$                 ������ɷ��ʵĽӿڻ�������                             Y/N
 *                       ����ӿڲ��������ַ�����ʽ����
 *                       �����Ŀ����js�ļ�һ��������Կ��ǻ���
 *    _$$                �����ͬ_$ǰ׺�Ĵ���                                Y/N
 *    __                 �����ⲻ�ɷ��ʵĽӿڻ�������                            Y
 *    ��                 û��ǰ׺�Ľӿڻ������Կ����ڶ��������                     N
 *                       �����п������ַ�������ʽ����
 *    X                  ������д��ĸ������ʾ������һЩͨ�õ����ԺͽӿڵĶ���
 *                       �����н�ֹ���ֵ�����д��ĸ�����ı���                      N
 * ------------------------------------------------------------------------------------------
 * </pre>
 * @version  1.0
 * @author   weiwenqing(moonface@163.org)
 * ==========================================================================================
 */
// ����ع��ܺ���
(function(){
    var c = P('U.cls');
    
    /**
     * ��Ŀ���������Դ���еķ���
     * @param {Function} _des	Ŀ����
     * @param {Function} _src	Դ��
     * @param {Function} _flag	�Ƿ���Ӿ�̬����
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
     *  �ж�ָ�������Ƿ�����
     * @param {Object} _obj	����
     */
    c._$isClass = function(_obj){
        return U.fun._$isFunction(_obj);
    };
})();
// ������ع��ܺ���
(function(){
    var o = P('U.obj');
    o.__pool = {};
    /**
     * �Ƿ��Ƕ���
     * @param {Object} _obj		���жϵĶ���
     */
    o._$isObject = function(_obj){
        return (_obj && (typeof _obj === 'object' || U.fun._$isFunction(_obj))) || false;
    };
    /**
     * ��һ�������������չ��һ������
     * @param {Object} 	 _des		Ŀ�Ķ���
     * @param {Object} 	 _src		Դ����
     * @param {Function} _factor	��չ����
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
     * ��¡����
     * @param {Object} 	_obj	��������
     * @param {Boolean}	_flag	�Ƿ����
     */
    o._$clone = function(_obj, _flag){
        var _f = function(){};
        _f.prototype = _obj;
        return new _f();
    };
    /**
     * ������ת��������
     * @param {Object} _obj	����
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
     * ������ת�������飬ֻת��û�б�ۺ�Ԫ�أ�����ͨ��class��ȡ�ļ���
     * @param {Object} _obj	����
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
     * ɾ���������������
     * @param  {Object} _obj ����
     * @param  {String} _pro ��������
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
     * ������ת����hash
     * @param {Object} _obj	����
     */
    o._$toHash = function(_obj){
        var _str = U._$serialize(_obj);
        _str = _str.replace(/:/g, '=').replace(/,/g, '&').replace(/\'/g, '');
        if (_str) 
            _str = _str.replace(/^{/, '#').replace(/}$/, '');
        return _str;
    };
    /**
     * �Ƿ�δ����
     * @param {Object} _obj		���жϵĶ���
     */
    o._$isUndefined = function(_obj){
        return typeof _obj === 'undefined';
    };
    /**
     * ����ȫ�����ݻ���
     * @param  {String}   _key  �����ֵ
     * @param  {Variable} _data ����
     * @return {Void}
     */
    o._$setData = function(_key, _data){
        this.__pool[_key] = _data;
    };
    /**
     * ��ȡ���ݻ���
     * @param  {String} _key  �����ֵ
     * @return {Variable}     ����
     */
    o._$getData = function(_key){
        return this.__pool[_key];
    };
})();
// ������ع��ܺ���
(function(){
    var a = P('U.arr');
    /**
     * �Ƿ�Ϊ����
     * @param {Any} _obj	���жϵĶ���
     */
    a._$isArray = function(_obj){
        return Object.prototype.toString.call(_obj) === '[object Array]';
    };
    /**
     * ָ���б������ÿһ�ִ��ָ�������������ں���0���ո�null����Ϊ��false��ie�²������
     * @param {Array} 		_arr	ָ���б�
     * @param {Function} 	_fn		ָ������
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
     * ����ָ�����������б�
     * @param {Array}		_arr	�б�
     * @param {Function} 	_factor	��������
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
     * ����ָ����
     * @param  {Array} 				_arr	����
     * @param  {Object||Function} 	_o		ָ���������
     * @param  {Boolean}			_flag	_flagΪtrueʱ��_o���ǵ�����ͨ���󣨲��ᵱ��������
     * @return {Number}						ָ�����������е�ϵ�� or -1
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
     * ������ת���ɶ�����ָ������ֵΪ��
     * @param  {Array}  	_arr	����
     * @param  {String} 	_attr	������
     * @param  {Function} 	_cb		�ص�����
     * @return {Object}			ת����Ķ���
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
	 * �ж������ÿһ���Ƿ�����ָ������
	 * @param {Array} 		_arr	����
	 * @param {Function} 	_fun	��������
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
	 * ɾ�������е�ָ����
	 * @param {Array} _arr		����
	 * @param {Object} _item	������
	 * @return {Object}			������
	 */
    a._$erase = function(_arr, _item){
        for (var i = _arr.length; i--; _arr[i] === _item && _arr.splice(i, 1)) 
            ;
        return _arr;
    };
    /**
     * from Tangram unique.js
     * ���������е���ͬ��������Ԫ����ͬ����ɾ����һ��Ԫ�أ�
     * @param {Array} _source	��Ҫ������ͬ�������
     * @param {Function} [_fun]	�Ƚ������������Ƿ���ͬ�ĺ���,������������Ϊ�����Ĳ�����
     *
     * @return {Array} ���˺��������
     */
    a._$unique = function(_source, _fun){
        var _len = _source.length, _result = _source.slice(0), i, _tmp;
        if (!U.fun._$isFunction(_fun)) {
            _fun = function(itm0, itm1){
                return itm0 === itm1;
            };
        }
        // �Ӻ���ǰ˫��ѭ���Ƚ�
        // �������Ԫ����ͬ��ɾ����һ��
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
// ������ع��ܺ���
(function(){
    var f = P('U.fun');
    /**
     * �Ƿ�Ϊ����
     * @param {Object} _obj	���ж϶���
     */
    f._$isFunction = function(_obj){
        return Object.prototype.toString.call(_obj) === '[object Function]';
    };
    /**
     * ָ����������һ�������ߵ��ƶ���Ϣ
     * @param {Function}	_fn		ָ������
     * @param {Object} 		_pub	������
     * @param {String} 		_type	��Ϣ����
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
// �ַ�����ع��ܺ���
(function(){
    var s = P('U.str');
    /**
     * �Ƿ����ַ���
     * @param {Object} _obj	���ж϶���
     */
    s._$isString = function(_obj){
        return typeof _obj === 'string';
    };
    /**
     * �ж��ַ����Ƿ���url��ַ
     * @param {String} _str		�ַ���
     */
    s._$isUrl = function(_str){
        if (!s._$isString(_str)) 
            return false;
        return U.reg._$getRegex('url').test(_str);
    };
    /**
     * ��ȡ�ַ����ĳ��ȣ���������λ
     * @param  {String} _str	�ַ���
     * @return {Number}			����
     */
    s._$getLength = function(_str){
        _str = _str || '';
        for (var i = 0, _len = 0, _l = _str.length; i < _l; i++) 
            _len += _str.charCodeAt(i) > 255 ? 2 : 1;
        return _len;
    };
    /**
     * ��ȡ�ַ����ĳ��ȣ���������λ
     * @param  {String} _str	�ַ���
     * @param  {String} _length	����
     * @return {String}			�жϺ���ַ���
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
     * ����ַ������˵Ŀո�ԭ�ַ������ݲ��䡣
     * @param  {String}	�ַ���
     * @return {String} ������˿ո���ַ���
     */
    s._$trim = function(_str){
        _str = _str || '';
        if (_str.trim) 
            return _str.trim();
        return _str.replace(U.reg._$getRegex('REG_TRIM_SPACE'), '');
    };
    /**
     * ����ַ������˵ķֺţ�ԭ�ַ������ݲ��䡣
     * @param  {String}	�ַ���
     * @return {String} ������˿ո���ַ���
     */
    s._$trimsc = function(_str){
        return this._$trim(_str).replace(U.reg._$getRegex('REG_TRIM_SEMICOLON'), '');
    };
    /**
     * ��hash�ַ���ת����hash����
     * @param {String} _hashStr	hash	�ַ���
     */
    s._$toHash = function(_hashStr){
        if (!s._$isString(_hashStr)) 
            return null;
        _hashStr = s._$trim(_hashStr).replace(/^[?#]?/, '').replace(/=/g, ':').replace(/&/g, ',');
        return U._$deserialize('{' + _hashStr + '}');
    };
    /**
     * ���������Ƿ�����ַ���
     * @param {String} _str			��ƥ����������
     * @param {Object} _pattern		ƥ���ַ���
     */
    s._$include = function(_str, _pattern){
        return _str.indexOf(_pattern) > -1;
    };
	/**
	 * 
	 * @param {String} _str		�ַ���
	 */
    s._$camelize = function(_str){
        //TODO
        return _str.replace(/-([a-z])/ig, function(_all, _letter){return _letter.toUpperCase();});
    };
	/**
	 * ʹ�ַ����Զ���ӦDOM�ڵ�������
	 * @param {Object} _elm			�ڵ����
	 * @param {Object} _str			Դ�ַ���
	 * @param {Object} _maxwidth	�����
	 * @param {Object} _suffix		����ʱ�ĺ�׺
	 * @param {Object} _lines		�����������ӿڣ��ɻ���
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
	 * ��ȡ�ַ���ʵ�ʿ��
	 * @param {Object} _elm			�ڵ����
	 * @param {Object} _str			Դ�ַ���
	 * @param {Object} _maxwidth	�����	
	 * @param {Object} _suffix		����ʱ�ĺ�׺
	 */
    s._$calString = function(_elm, _str, _maxwidth, _suffix){
        // �����ַ����
        var _tmpArray = new Array(257);
        _elm.innerText = '��������������������';
        _tmpArray[256] = _elm.offsetWidth / 10;
        // ��ASCIIΪ32�����ַ���ʼ����
        for (var i = 32; i < 256; ++i) {
            _elm.innerText = '��' + String.fromCharCode(i) + '��';
            _tmpArray[i] = _elm.offsetWidth - 2 * _tmpArray[256];
        }
        
        var k, _width = 0, _suffixWidth;
        // �����׺�ַ����Ŀ��
        _elm.innerText = _suffix || '';
        _suffixWidth = _elm.offsetWidth;
        
        for (var i = 0, l = _str.length; i < l; ++i) {
            var _code = _str.charCodeAt(i),
				_charWidth = (_code > 255 ? _tmpArray[256] : _tmpArray[_code] || 0);
            // ������һ�μ��Ϻ�׺��������ȵ�pos�������ʱ����ֹѭ��
            // ��Ϊ�����������˺�׺��ֵ����Ӧ�ü���ѭ�����Ƿ�û�к�׺ʱ���������
            if (k === undefined &&
            	_charWidth + _width + _suffixWidth > _maxwidth) 
                k = i;
            _width += _charWidth;
            // û�к�׺ʱ����������ȣ���ֹѭ��
            if (_width > _maxwidth) 
                break;
        }
        return _width > _maxwidth ? k || 0 : -1;
    };
})();
// �ڵ���ع��ܺ���
(function(){
    var d = P('U.dom');
	/**
     * ��ȡ�ڵ�
     * @param {Object|Node|String} _obj	�ڵ��ڵ�id�����
     */
    d._$getElement = function(_obj){
        return (_obj && _obj._$getBody && _obj._$getBody()) || E._$getElement(_obj);
    };
    /**
     * ��������ڵ�
     * @param {HTMLElement} _elm	�����ڵ�
     */
    d._$emptyElement = function(_elm){
        _elm = E._$getElement(_elm);
        var _nd;
        while (_nd = _elm && _elm.firstChild) 
            E._$removeElement(_nd);
    };
    /**
     * ��ȡradio��ֵ
     * @param  {Array} 	radio�ڵ��б�
     * @return {String}	ֵ
     */
    d._$getValueOfRadio = function(_rds){
        _rds = _rds.length ? _rds : [_rds];
        for (var i = 0, _rd; _rd = _rds[i]; i++) 
            if (_rd && _rd.checked) 
                return _rd.value;
    };
    /**
     * ��ȡ�ı�������ֵ
     * @param  {Array} 	_txt 	�ı������
     * @param  {String}	_hint	������Ĭ����ʾ����
     * @return {String}	ֵ
     */
    d._$getValueOfText = function(_txt, _hint){
        _hint = _hint || '';
        var _v = _txt && _txt.value;
        _v = _v || '';
        return U._$trim(_v) == _hint ? '' : _v;
    };
	/**
	 * �ж�һ���ڵ��Ƿ�Ϊ�ı��������(text, textarea, password)
	 * @param {HTMLElement} _elm	�ڵ�
	 */
    d._$isText = function(_elm){
        return _elm && (_elm.tagName.toLowerCase() == 'textarea' || (_elm.type && _elm.type.toLowerCase() == 'text' || _elm.type.toLowerCase() == 'password'));
    };
    /**
     * ������������ʾ��Ϣ
     * @param {HTMLElement} �����
     * @param {String} 		��ʾ��Ϣ
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
     * ������focus�¼�����Ӧ����
     * @param {HTMLElement} _txt	�����
     * @param {String} 		_hint	��ʾ��Ϣ
     */
    d.__onFocusText = function(_txt, _hint){
        if (!_txt || !_hint) 
            return;
        if (_txt.value == _hint) 
            _txt.value = '';
    };
    /**
     * ������blur�¼�����Ӧ����
     * @param {HTMLElement} _txt	�����
     * @param {String} 		_hint	��ʾ��Ϣ
     */
    d.__onBlurText = function(_txt, _hint){
        if (!_txt || !_hint) 
            return;
        if (_txt.value == '') 
            _txt.value = _hint;
    };
    /**
     * ���ı����������ݱ仯�¼�
     * @param {HTMLElement} _txt		�����
     * @param {Functoin} 	_handler	��Ϣ��Ӧ����
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
	 * �۽� text
	 * @param {HTMLElement} _txt	�����
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
     * �ж�һ��Ԫ���Ƿ�����һ��Ԫ�ص�����
     * @param {String|HTMLElement} _p Ǳ�ڵ�����Ԫ��
     * @param {String|HTMLElement} _c Ǳ�ڵ���Ԫ��
     * @return {Boolean}
     */
    d._$isAncestor = function(_p, _c){
        var _p = E._$getElement(_p), _c = E._$getElement(_c), _result = false;
        if ((_p && _c) && (_p.nodeType && _c.nodeType)) 
            _result = _p.contains && _p !== _c ? _p.contains(_c) : !!(_p.compareDocumentPosition(_c) & 16);
        return _result;
    };
    /**
     * �����¼�����ʱ�����Ԫ�ض���
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
     * ����ĳЩ�����Ŀ��Ԫ�ط����ı��ڵ������
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
     * ��ת��ҳ��ĳԪ������λ��
     * @param {HTMLElement} _elm	Ԫ�ض���
     */
    d._$scrollTo = function(_elm){
        var _body = document.documentElement || document.body,	// 	ҳ����������ڵ�λ��
			_filter = _elm == _body; 						//	�ڵ���˽ӿڣ������жϱ���ֹͣ
        scrollTo(E._$offsetX(_elm, _filter) || 0, E._$offsetY(_elm, _filter) || 0);
    };
	/**
	 * ����������ת��ҳ��ĳԪ������λ��
	 * @param {HTMLElement} _elm	Ԫ�ض���
	 */
	d._$animateScrollTo = function(_elm){
        var _filter = true; 						//	�ڵ���˽ӿڣ������жϱ���ֹͣTODO
        	_x = E._$offsetX(_elm||_filter) || 0, 
			_y = E._$offsetY(_elm||_filter) || 0,
			_top = U.dom._$scrollTop();
			
		// TODO �����ٶȿ���
		// ����������������ٶȣ������ٶȲ��ɿ�
        //  for (i = _body.scrollTop; i >= _y; i -= 10) 
		//  	scrollTo(0, i);

		// ����interval�������ٶȿɿ�
        this.__sitv = setInterval(function(){
            if (_top >= _y) {
           		_top -= 20;
                scrollTo(0, _top);
			}else
				this.__sitv && clearInterval(this.__sitv);
        }._$bind(this), 10);
	};
    /**
     * ��ʼ��ָ���ڵ������ê�㣨Ҳ����������Ԫ�ؽڵ㣩
     * @param {HTMLElement} _elm	�ڵ����
     * @param {Object}		_opt	���ò�������ʵ�ֲ����б�
     * 								onbeforereload	[Function]	��¼�ɹ����beforereload��Ϣ��Ӧ����
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
     * �����Ҫ��¼�����ӵ���Ϣ��Ӧ����
     * @param {Object} _event	��Ϣ����
     * @param {Object} _opt		���ò�������ʵ�ֲ����б�
     * 								onbeforereload	[Function]	��¼�ɹ����beforereload��Ϣ��Ӧ����
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
	 * ��������ӳ�����֤
	 * @param {HTMLElement}	_txt	�����
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
	 * ��֤����򳤶�
	 * @param {HTMLElement} _txt	�����
	 */
    d.__checkLength = function(_txt){
        var _maxLength = parseInt(_txt.getAttribute('maxlength'));
        if (!_maxLength) 
            return;
        if (_txt.value.length > _maxLength) 
            _txt.value = _txt.value.slice(0, _maxLength);
    };
	/**
	 * IE6�½ڵ�������붯��
	 * @param  {String|Node} _elm �ڵ�ID���߶���
	 * @param  {String}      _class   ������ʽ
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
	 * ��ȡҳ��ɼ������
	 * @return {Number}		���
	 */
    d._$clientWidth = function(){
        return document.documentElement.clientWidth || document.body.clientWidth;
    };
	/**
	 * ��ȡҳ��ɼ������
	 * @return {Number}		�߶�
	 */
    d._$clientHeight = function(){
        return document.documentElement.clientHeight || document.body.clientHeight;
    };
	/**
	 * ��ȡҳ�汻��ȥ�����
	 * @return {Number}		�߶�
	 */
    d._$scrollLeft = function(){
        return document.documentElement.scrollLeft || document.body.scrollLeft;
    };
	/**
	 * ��ȡҳ�汻��ȥ�����
	 * @return {Number}		�߶�
	 */
    d._$scrollTop = function(){
        return document.documentElement.scrollTop || document.body.scrollTop;
    };
	/**
	 * ��ȡ����Ԫ�ص���ʽ
	 * @param {String|Node} _elm	Ԫ�ض���
	 * @param {String} 	_name		��������
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
			
            // ����͸����
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
            // ���õ�λת��
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
	 * Ϊ����Ԫ��������ʽ
	 * @param {String|Node}		_elm	�ڵ�ID���߶���
	 * @param {String} 			_styles	��ʽ����
	 * @return {Node}	�ڵ����
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
     * Ϊ����Ԫ������͸����
     * @param {String|Node}	_elm	�ڵ�ID���߶���
     * @param {String} 		_value		͸����
     * @return {Node}	�ڵ����
     */
    d._$setOpacity = function(_elm, _value){
        _elm = E._$getElement(_elm);
        _elm.style.opacity = (_value == 1 || _value === '') ? '' : (_value < 0.00001) ? 0 : _value;
        return _elm;
    };
	/**
	 * Ϊ����Ԫ�������ı�����
	 * @param {Array} _elms		�ڵ��������
	 * @param {String} _value		�ı�����
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
     * �л��ڵ���ʽ
     * @param  {String|Node}	_element �����л��Ľڵ�
     * @param  {String} 	_class	�����л�����ʽ
     * @return {Void}
     */
    d._$toggle = function(_elm, _class){
        E._$hasClassName(_elm, _class) ? E._$delClassName(_elm, _class) : E._$addClassName(_elm, _class);
    };
    /**
     * ��/�ر�button
     * @param {Node} 		_elm		�ڵ�
     * @param {Boolean}		_disabled	��/�ر�
     * @param {String}	 	_class		��ʽ
     * @return {Void}
     */
    d._$toggleBtn = function(_elm, _disabled, _class){
        _elm.disabled = _disabled;
        _disabled ? E._$addClassName(_elm, _class) : E._$delClassName(_elm, _class);
    };
    /**
     * ��button
     * @param {Node} 	_elm	�ڵ�
     * @param {String} _class	��ʽ
     * @return {Void}
     */
    d._$enableBtn = function(_elm, _class){
        _elm.disabled = false;
        E._$delClassName(_elm, _class);
    };
    /**
     * �ر�button
     * @param {Node} 	_elm	�ڵ�
     * @param {String} _class	��ʽ
     * @return {Void}
     */
    d._$disableBtn = function(_elm, _class){
        _elm.disabled = true;
        E._$addClassName(_elm, _class);
    };
    /**
     * ͼƬ�����쳣�ص�
     * @param  {Event}  _event   �¼�����
     * @param  {String} _default Ĭ��ͼƬ��ַ
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
	 * �����û��Ǽ���Ϣ
	 * @param {Node} _elm		�ڵ�
	 * @param {Object} _data	���ݶ���
	 */
	/**
	 * 
	 * @param {Node} _elm		�ڵ�
	 * @param {Object} 	_data	���ݶ���
	 * @param {Boolean} _flag	ֵΪtrueʱֻ��ʾ�߼��Ŀ͵ĳ�ν
	 * @return {Void}
	 */
    d._$setRankData = function(_elm, _data, _flag){
		_elm = E._$getElement(_elm);
        if (!_elm) return;
        //	BAD SMELL TODO	��ʽ����Ҫ��������
	    this.__rankData = 
			this.__rankData || [
//				{"grade":0,"name":"��ͨ�Ŀ�"},
		    	{"grade":11,"name":"һ���Ŀ�"},
		    	{"grade":12,"name":"�����Ŀ�"},
		    	{"grade":13,"name":"�����Ŀ�"},
		    	{"grade":14,"name":"�ļ��Ŀ�"},
		    	{"grade":15,"name":"�弶�Ŀ�"},
		    	{"grade":20,"name":"һ���Ŀ�"},
		    	{"grade":40,"name":"�����Ŀ�"},
		    	{"grade":60,"name":"�����Ŀ�"}]
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
            _elm.title = (_grade == 1 ? 'һ' : (_grade == 2 ? '��' : '��')) + '�Ǹ߼��Ŀ�';
            _elm.style.width = 14 * _grade + 'px';
        }
    };
	
/*
 * ���ݽṹ���2
 * @param {Node} _elm		�ڵ�
 * @param {Object} 	_data	���ݶ���
 * @param {Boolean} _flag	ֵΪtrueʱֻ��ʾ�߼��Ŀ͵ĳ�ν
 * @return boolean
 */	
    d._$setRankData2 = function(_elm, _data, _flag){
		_elm = E._$getElement(_elm);
        if (!_elm) {
			return;
		}
	    this.__rankData = {
						    	'11': {"grade":11,"name":"һ���Ŀ�"},
						    	'12': {"grade":12,"name":"�����Ŀ�"},
						    	'13': {"grade":13,"name":"�����Ŀ�"},
						    	'14': {"grade":14,"name":"�ļ��Ŀ�"},
						    	'15': {"grade":15,"name":"�弶�Ŀ�"},
						    	'20': {"grade":20,"name":"һ���Ŀ�"},
						    	'40': {"grade":40,"name":"�����Ŀ�"},
						    	'60': {"grade":60,"name":"�����Ŀ�"},
								'nums': {
									'1':'һ',
									'2':'��',
									'3':'��'
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
	            _elm.title = (this.__rankData['nums']['' + _grade2] && (this.__rankData['nums']['' + _grade2] + '�Ǹ߼��Ŀ�')) || '';
	            _elm.style.width = 14 * _grade2 + 'px';
			}else{
				E._$delClassName(_elm, _data.styles);
			}
		}
    };
		
    /**
     * ��ʾĿ��Ԫ��
     * @param {HTMLElement|string|Array} _arg0	Ŀ��Ԫ�ػ�Ŀ��Ԫ�ص�id
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
     * ����Ŀ��Ԫ��
     * @param {HTMLElement|string|Array} _arg0	Ŀ��Ԫ�ػ�Ŀ��Ԫ�ص�id
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
	 * ��չ��innerHTML
	 * @param {Object} _elm		�ڵ�
	 * @param {Object} _xhtml	html����
	 * @param {Object} _flag	�Ƿ��첽(���ie6ĳЩ�����innerHTMLʱcpu100%����)
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
	 * ��ȡĿ��Ԫ�����ԣ�һ��������ȡ�Զ������ԣ�
	 * @param {HTML|Element} _elm	Ŀ��Ԫ��
	 * @param {Object} _attr		Ŀ������
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
	 * �ж�Ŀ��Ԫ���Ƿ���ĳ������ 
	 * @param {HTML|Element} _elm	Ŀ��Ԫ��
	 * @param {Object} _attr		Ŀ������
	 * @return {Boolean}
	 */
    d._$hasAttribute = function(_elm, _attr){
        return B._$ISIE && B._$VERSION <= 8 ? (_attr in _elm) : _elm.hasAttribute(_attr);
    };
})();
// ������ʽ��ع��ܺ���
(function(){
    var r = P('U.reg');
    /**
     * �������ͻ�ȡ������ʽ
     * @param {String} _type	����('email', 'url', etc)
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
// �¼���ع��ܺ���
(function(){
    var e = P('U.evt');
    /**
     * fire event
     * @param {HTMLElement}	_elm	Դ
     * @param {String} 		_type	�¼�����
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
// flash��ع��ܺ���
(function(){
    var f = P('U.fls');
	/**
	 * ��ʱ���IE�±����Ƿ�flash�޸�
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
// ͨ�ù��ܺ���
(function(){
    var u = P('U.utl');
    u.__type = ['', '163.com', '126.com', 'popo.163.com', '188.com', 'vip.163.com', 'yeah.net', 'game.163.com'];
    /**
     * ��ȡ�û����Զ���¼��Ϣ
     * @return {Array} �Զ���¼��Ϣ��[username,password]
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
//	����չʾ��ͼʱ�����Ĺ���cookie
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
// 	ϵͳ��չ��ʼ��
(function(){
    var s = P('U.sys');
	s.__param = {};
    /*
     * ϵͳ��չ��ʼ��
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
     * ȡˢ��ǰ����Ļص���Ϣ
     * @param  {String} _key ��ֵ
     * @return {Varialbe}    �ص���Ϣ
     */
    s._$getXParam = function(_key){
        return this.__param[_key] || null;
    };
    /**
     * ����ˢ��ǰ����Ļص���Ϣ
     * @param  {String}   _key   ��ֵ
     * @param  {Varialbe} _value �ص���Ϣ
     * @return {Void}
     */
    s._$setXParam = function(_key, _value){
        this.__param[_key] = _value;
    };
    /**
     * ȡˢ��ǰ���б���Ļص���Ϣ
     * @return {Varialbe}    �ص���Ϣ
     */
    s._$getAllXParam = function(){
        return this.__param || null;
    };
    /**
     * ˢ��ҳ�沢����ص���Ϣ
     * @param  {String}   _url  ˢ�µ�ַ
     * @param  {Variable} _data �ص���Ϣ
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