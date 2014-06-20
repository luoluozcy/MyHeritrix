(function(){
	var g = P('np.exploriper'),
			$ = E._$getElement,
			$$ = function(_a, _b){
				if(!_a){
					return null;
				}
				_b = $(_b || document);
				return E._$getElementsByClassName(_b, _a);
			};
/**

 */
	g._$$XBOX = C();
	g._$$XBOX.prototype._$initialize = function(_options){
		var that = this,
			_options = _options || O;
		if(!g._$$XBOX.__instance){
			g._$$XBOX.__instance = [];
		}
		g._$$XBOX.__instance.push(this);
		
		this.__tpl = _options.tpl || '<div class="m-pop f-hide" id="J-xbox-moudle">\
									<div class="layer-iframe" id="J-xbox-iframe"></div>\
									<div class="layer" id="J-xbox-overlay"></div>\
									<div class="mock">\
										<div class="xbox-title" id="J-xbox-title"></div>\
										<div class="content" id="J-xbox-mock">\
										</div>\
										<a href="#" class="close J-close-xbox" title="¹Ø±Õ" >¡Á</a>\
										<span class="arrow-out hide">\
											<span class="arrow-in hide"></span>\
										</span>\
									</div>\
								</div>';
		that._$create(this.__tpl);

		this.__height = _options.height || '';
		this.__height = _options.width || '';
		this.__contentClass = _options.contentClass || '';
		this.__layerClass = _options.layerClass || '';
		this.__iframeClass = _options.iframeClass || '';
		this.__showIframeLayer = _options.hasOwnProperty('showIframeLayer') ? !!_options.showIframeLayer : true;
		this.__showLayer = _options.hasOwnProperty('showLayer') ? !!_options.showLayer : true;
		this.__setCenter =_options.hasOwnProperty('setCenter') ? !!_options.setCenter : true;
		this.__outClick = _options.hasOwnProperty('outClick') ? !!_options.outClick : false;
		this.__timeDelay = _options.timeDelay || 50;
		this.__effectShade = _options.hasOwnProperty('effectShade') ? !!_options.effectShade : true;
		this.__timer = null;
		
		this.__targetDom = $(_options.targetDom);
		this.__targetParent = this.__targetDom.parentNode || document.lbody;
		this.__fireDom = $(_options.fireDom) || $$(_options.fireDom);
		this.__closeBox = $$('J-close-xbox');
		this.__title = _options.title || '';
		this.__afterShow = _options.beforShow || F;
		this.__onClose = _options.onClose || F;
		this.__showStatu = false;

		this._$bindEvents(this.__closeBox, 'click',that._$hide._$bind(that));
		this._$bindEvents(this.__fireDom, 'click',that._$show._$bind(that));
					
	};
	g._$$XBOX.prototype._$effectShade = function(obj,_t,_HS){
		var _target = 1/_t/0.5,
			that = this,
			_s = (!!_HS)? 0 : 1;
		clearInterval(this.__timer);
		this.__timer = setInterval(
			function(){
				_s = (_HS) ? (_s + _target*2) : (_s -_target*2);
				if(_s > 1){
					_s = 1;
				}else if(_s < 0){
					_s = 0;
				}
				if (B._$ISIE) {
					obj.style.filter = "Alpha(Opacity=" + _s*100 + ")";
				}else{
					obj.style.opacity = _s;
				}
				if(_s >= 1 || _s <= 0){
					clearInterval(that.__timer);
					/*if(!_HS){
						that._$hide2();
					}*/
				}
			},1);
	};
	
	g._$$XBOX.prototype._$bindEvents = function(_obs, _handler, _fn){
		if(!_obs){
			return;
		}
		var __obs = [],
			that = this;
		if(U.arr._$isArray(_obs)){
			__obs = _obs;
		}else if(_obs.hasOwnProperty('length')){
			for(var i = 0, m = _obs.length; i< m ; i++){
				__obs.push(_obs[i]);
			}
		}else{
			__obs = [_obs];
		}

		U.arr._$forEach(__obs, function(_el){
			V._$addEvent(_el, _handler, _fn);
		});
	};
	
	g._$$XBOX.prototype._$readyDom = function(){
		var that = this;
		if(that.__targetDom){
			g._$$XBOX.__mock.appendChild(that.__targetDom);
			g._$$XBOX.__moudlePar.style.visibility = 'hidden';
			E._$delClassName(g._$$XBOX.__moudle, 'f-hide');
			if(!that.__showLayer){
				g._$$XBOX.__moudle.style.height = '0';
				g._$$XBOX.__moudle.style.width = '0';
				g._$$XBOX.__iframe.style.display = g._$$XBOX.__overlay.style.display = 'none';
				g._$$XBOX.__moudle.style.position = 'static';
			}else{
				g._$$XBOX.__iframe.style.display = g._$$XBOX.__overlay.style.display = '';
				g._$$XBOX.__moudle.style.height = g._$$XBOX.__moudle.style.width = '100%';
				g._$$XBOX.__moudle.style.position = 'absolute';
			}
			return 1;
		}
		return 0;
	};

	g._$$XBOX.prototype._$show = function(e){
		var that = this;
		if(that._$readyDom()){
			if(that.__setCenter && g._$$XBOX.__moudlePar){
				var _w = g._$$XBOX.__moudlePar.offsetWidth,
					_h = g._$$XBOX.__moudlePar.offsetHeight;/*margin-top:' + '-' + _h/2 + 'px;*/
					g._$$XBOX.__moudlePar.style.cssText = 'visibility:visible;left:50%;top:10%;margin-left:' + '-' + _w/2 + 'px;' + 'opacity:0;filter:alpha(opacity=0)';
					if(E._$getStyle(g._$$XBOX.__moudlePar,'position') == 'absolute'){
						var _a = V._$getElement(e),_l = E._$offsetX(_a), _v = E._$offsetY(_a), _s = U.dom._$clientWidth();
						g._$$XBOX.__moudlePar.style.top = '10%';
						/*if(_l < _s/2){
							g._$$XBOX.__moudlePar.style.left = _s/2 - _w + 'px';
						}else{
							
						}*/
						g._$$XBOX.__moudlePar.style.left = _s/2 - _w/2 + 'px';
						g._$$XBOX.__moudlePar.style.marginTop = g._$$XBOX.__moudlePar.style.marginLeft = '0';
					}
			}
			g._$$XBOX.__title.innerHTML = this.__title;
			that._$effectShade(g._$$XBOX.__moudlePar,that.__timeDelay,true);
			
			that.__afterShow();
			return that.__showStatu = true;
		}
	};

	g._$$XBOX.prototype._$hide2 = function(e){
		var that = this;
		V._$stop(e);
		
		that._$effectShade(g._$$XBOX.__moudlePar,that.__timeDelay,false);
	};
	g._$$XBOX.prototype._$hide = function(e){
		var that = this;
		V._$stop(e);
		if(that.__targetDom && that.__targetParent){
			that.__targetParent.appendChild(that.__targetDom);
		}
		E._$addClassName(g._$$XBOX.__moudle, 'f-hide');
		g._$$XBOX.__moudlePar && (g._$$XBOX.__moudlePar.style.cssText = '');
		g._$$XBOX.__moudle && (g._$$XBOX.__moudle.style.cssText = '');
		that.__onClose();
		return that.__showStatu = false;
		
	};
	
	g._$$XBOX.prototype._$create = function(_tpl){
		if(!$('J-xbox-moudle')){
			var _tmp = E._$parseElement(_tpl);
				document.body.appendChild(_tmp);
		}
		g._$$XBOX.__moudle = $('J-xbox-moudle');
		g._$$XBOX.__iframe = $('J-xbox-iframe');
		g._$$XBOX.__overlay = $('J-xbox-overlay');
		g._$$XBOX.__mock = $('J-xbox-mock');
		g._$$XBOX.__title = $('J-xbox-title');
		g._$$XBOX.__moudlePar = g._$$XBOX.__mock.parentNode;
	};
})();