(function(window,document){
var __extflag={};
var __initialize=function(){
this._$super.apply(this,arguments);
};
var __extend=function(_super,_static){
if(!_super||!U._$isType(_super,'function')
||!U._$isType(this,'function'))return;
if(!!_static)
for(var _method in _super)
if(U._$isType(_super[_method],'function'))
this[_method]=_super[_method];
this._$super=_super;
this._$supro=_super.prototype;
this.prototype=new _super(__extflag);
this.prototype.constructor=this;
this.prototype._$initialize=__initialize;
var _superp=_super;
this.prototype._$super=function(){
var _init=_superp.prototype._$initialize;
_superp=_superp._$super||_super;
return!!_init&&_init.apply(this,arguments);
};
return this.prototype;
};
var __implement=function(){
var _this=this.prototype;
for(var i=0,l=arguments.length,_class,_prototype;i<l;i++){
_class=arguments[i];
if(!U._$isType(_class,'function'))continue;
_prototype=_class.prototype;
for(var x in _prototype)
if(U._$isType(_prototype[x],'function'))
_this[x]=_prototype[x];
}
return _this;
};
var __bind=function(){
var _function=this,_args=arguments,
_object=Array.prototype.shift.call(arguments);
return function(){
Array.prototype.push.apply(arguments,_args);
return _function.apply(_object||window,arguments);
}
};
window.O={};
window.F=function(){return false;};
window.P=function(_namespace){
if(!_namespace||!_namespace.length)return null;
var _package=window;
for(var a=_namespace.split('.'),
l=a.length,i=(a[0]=='window')?1:0;i<l;
_package=_package[a[i]]=_package[a[i]]||{},i++);
return _package;
};
window.C=function(){
var _class=function(){
if(arguments[0]!=__extflag&&!!this._$initialize)
return this._$initialize.apply(this,arguments);
};
_class._$extend=__extend;
_class._$implement=__implement;
return _class;
};
Function.prototype._$bind=function(){
var _function=this,_args=arguments,
_object=Array.prototype.shift.call(arguments);
return function(){
var _argc=Array.prototype.slice.call(_args,0);
Array.prototype.push.apply(_argc,arguments);
return _function.apply(_object||window,_argc);
};
};
Function.prototype._$bind2=__bind;
Function.prototype._$bindAsEventListener=__bind;
var p=P('N');
p.rc=p.rc||{};
p.xd=p.xd||[];
p.tm=p.tm||O;
p.ui=p.ui||'ntes.ui';
p.ut=p.ut||'ntes.util';
p.gb=p.gb||'ntes.global';
p.gw=p.gw||'ntes.widget';
p.fw=p.fw||'ntes.framework';
p.rc.r=p.rc.r||'http://b.bst.126.net/common/';
p.rc.s=p.rc.s||'/common/storage.swf';
p.rc.u=p.rc.u||'/common/upload.swf';
if(p.rc.s.indexOf('?')<0)p.rc.s+='?t='+new Date().getTime();
})(this,document);
(function(window,document){
var __userAgent=window.navigator.userAgent;
P('B');
B.__destroy=F;
B._$ISIE=/msie\s+(.*?)\;/i.test(__userAgent);
B._$ISFF=!B._$ISIE&&/rv\:(.*?)\)\s+gecko\//i.test(__userAgent);
B._$ISOP=!B._$ISIE&&!B._$ISFF&&/opera\/(.*?)\s/i.test(__userAgent);
B._$ISSF=!B._$ISIE&&!B._$ISFF&&!B._$ISOP&&/applewebkit\/(.*?)\s/i.test(__userAgent);
B._$ISKQ=!B._$ISIE&&!B._$ISFF&&!B._$ISOP&&!B._$ISSF&&/konqueror\/(.*?)\;/i.test(__userAgent);
B._$VERSION=RegExp.$1;
B._$ISOLDIE=B._$ISIE&&B._$VERSION<'7.0';
B._$ISMT=B._$ISIE&&__userAgent.indexOf('Maxthon')>=0;
B._$ISTT=B._$ISIE&&__userAgent.indexOf('TencentTraveler')>=0;
if(B._$ISIE)try{document.execCommand('BackgroundImageCache',false,true);}catch(e){}
})(this,document);
(function(window,document){
var __trim=/(?:^\s+)|(?:\s+$)/g,
__empty=/^\s*$/,
__remap={a:{r:/\<|\>|\&|\r|\n|\s|\'|\"/g,'<':'&lt;','>':'&gt;','&':'&amp;',' ':'&nbsp;','"':'&quot;',"'":'&#39;','\n':'<br/>','\r':''}
,b:{r:/\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,'&lt;':'<','&gt;':'>','&amp;':'&','&nbsp;':' ','&#39;':"'",'&quot;':'"','<br/>':'\n'}
,c:{i:true,r:/\byyyy|yy|MM|M|dd|d|HH|H|mm|ms|ss|m|s\b/g}
,d:{r:/\'|\"/g,"'":"\\'",'"':'\\"'}};
P('U');
U.__destroy=F;
U._$number=function(_number){
_number=parseInt(_number)||0;
return(_number<10?'0':'')+_number;
};
U._$trim=function(_content){
return!!_content&&!!_content.replace
&&_content.replace(__trim,'')||'';
};
U._$subString=function(_content,_length){
_content=_content||'';
if(!_length)return _content;
for(var i=0,k=0,l=_content.length;i<l;i++){
k+=_content.charCodeAt(i)>255?2:1;
if(k>=_length)
return _content.substr(0,i+(k==_length?1:0));
}
return _content;
};
U._$isEmpty=function(_content){
return __empty.test(_content||'');
};
U._$rand=function(_min,_max){
return Math.floor(Math.random()*(_max-_min)+_min);
};
U._$randNumberString=function(_length){
_length=Math.max(0,Math.min(_length||10,100));
var _min=Math.pow(10,_length-1),_max=_min*10;
return U._$rand(_min,_max).toString();
};
U._$isType=function(_data,_type){
return Object.prototype.toString.
call(_data).toLowerCase()==
('[object '+_type.toLowerCase()+']');
};
U._$indexOf=function(_list,_item){
var _isfunc=U._$isType(_item,'function');
if(!!_list&&_list.length>0)
for(var i=0,l=_list.length;i<l;i++)
if(_isfunc?!!_item(_list[i]):_list[i]==_item)
return i;
return-1;
};
U._$encode=function(_map,_content){
if(!_map||!_content||!_content.replace)return _content||'';
return _content.replace(_map.r,function($1){
var _result=_map[!_map.i?$1.toLowerCase():$1];
return _result!=null?_result:$1;
});
};
U._$escape=function(_content){
return U._$encode(__remap.a,_content);
};
U._$unescape=function(_content){
return U._$encode(__remap.b,_content);
};
U._$string=function(_content){
return U._$encode(__remap.d,_content);
};
U._$format=function(_time,_format){
if(!_time||!_format)return'';
if(U._$isType(_time,'string'))
_time=new Date(Date.parse(_time));
if(!U._$isType(_time,'date'))
_time=new Date(_time);
var _map=__remap.c;
_map['yyyy']=_time.getFullYear();
_map['yy']=(''+_map['yyyy']).substr(2);
_map['M']=_time.getMonth()+1;
_map['MM']=U._$number(_map['M']);
_map['d']=_time.getDate();
_map['dd']=U._$number(_map['d']);
_map['H']=_time.getHours();
_map['HH']=U._$number(_map['H']);
_map['m']=_time.getMinutes();
_map['mm']=U._$number(_map['m']);
_map['s']=_time.getSeconds();
_map['ss']=U._$number(_map['s']);
_map['ms']=_time.getMilliseconds();
return U._$encode(_map,_format);
};
U._$serialize=function(_data){
if(U._$isType(_data,'number'))return _data;
if(U._$isType(_data,'date'))return _data.getTime();
if(U._$isType(_data,'boolean'))return!!_data?'true':'false';
if(U._$isType(_data,'string'))return"'"+U._$string(_data)+"'";
if(!_data)return'null';
if(U._$isType(_data,'array')){
var _arr=[];
for(var i=0,l=_data.length;i<l;
_arr.push(U._$serialize(_data[i])),i++);
return'['+_arr.join(',')+']';
}
if(U._$isType(_data,'object')){
var _arr=[];
for(var p in _data)
_arr.push(U._$serialize(p)+':'+
U._$serialize(_data[p]));
return'{'+_arr.join(',')+'}';
}
return'null';
};
U._$deserialize=function(_content){
_content = String(_content);
if (_content && /^[\],:{}\s]*$/.test(_content.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
return (new Function('return '+_content))();
}
return null;
};
U._$parseJSON=!!window.JSON?JSON.parse:U._$deserialize;
U._$toJSONString=!!window.JSON?JSON.stringify:U._$serialize;
U._$getGValue=function(_key){
var _value=window[_key];
try{if(!delete window[_key])throw'';}catch(e){window[_key]=undefined;}
return _value;
};
U._$getFullName=function(_userName){
if(_userName.substr(-4)==="@126")
return _userName.replace("@126","@126.com");
else if(_userName.substr(-4)==="@188")
return _userName.replace("@188","@188.com");
else if(_userName.substr(-5)==="@popo")
return _userName.replace(".popo","@popo.163.com");
else if(_userName.substr(-4)===".vip")
return _userName.replace(".vip","@vip.163.com");
else if(_userName.substr(-5)==="@yeah")
return _userName.replace("@yeah","@yeah.net");
else if(_userName.substr(-5)==="@game")
return _userName;
else if(_userName.indexOf('@')>=0){
return _userName;
}else{
return _userName+"@163.com";
}
};
})(this,document);
(function(window,document){
var __hc,
__tp={},
__sp=/\s+/g,
__hk='__hvrkey__',
__ha='__hatkey__',
__ec=document.createDocumentFragment();
var __initElementByTag=function(_element){
if(!_element)return;
switch(_element.tagName.toLowerCase()){
case'a':_element.href='#';
_element.hideFocus=true;break;
case'iframe':_element.frameBorder=0;
_element.src='about:blank';return;
case'script':_element.defer='defer';
_element.type='text/javascript';return;
case'style':_element.type='text/css';return;
case'link':_element.type='text/css';
_element.rel='stylesheet';return;
}
__ec.appendChild(_element);
};
var __getRegClassName=function(_class){
_class=U._$trim(_class);
return!_class?'':'(\\s|^)(?:'+_class.replace(__sp,'|')+')(?=\\s|$)';
};
var __hoverElement=function(_element,_hovered){
_element=E._$getElement(_element);
if(!_element)return;
_hovered=!!_hovered;
if(_element[__ha]==_hovered)return;
var _class=_element[__hk];
if(!_class)return;
_element[__ha]=_hovered;
_hovered?E._$addClassName(_element,_class)
:E._$delClassName(_element,_class);
};
var __maxElement=function(_element){
_element=E._$getElement(_element);
if(!_element)return;
var _type=_element.mt,_value=_element.mv,
_attr=_type=='width'?'scrollWidth':'scrollHeight';
_element.style[_type]=_element[_attr]<_value?'auto':(_value+'px');
};
var __adjElement=function(_element){
_element=E._$getElement(_element);
if(!_element)return;
var _type=_element.mt,_value=_element.mv,
_ratio=_element.mr,_st=_element.style,
_rd=(_element.scrollWidth/_element.scrollHeight)||1,
_mw=_type=='width'?_value:Math.floor(_value*_ratio),
_mh=_type=='width'?Math.floor(_value/_ratio):_value;
if(_rd>=_ratio&&_element.scrollWidth>_mw){
_st.width=_mw+'px';_st.height='auto';return;
}
if(_rd<=_ratio&&_element.scrollHeight>_mh){
_st.width='auto';_st.height=_mh+'px';return;
}
_st.width='auto';_st.height='auto';
};
var __getOffset=function(_element,_type,_filter){
_element=E._$getElement(_element);
if(!_element)return 0;
_filter=_filter||F;
var _offset=0;
while(!!_element&&!_filter(_element)){
_offset+=_element[_type];
_element=_element.offsetParent;
}
return _offset;
};
var __getStyle;
if(!!document.defaultView&&!!document.defaultView.getComputedStyle){
__getStyle=function(_element,_style){
var _css=document.defaultView.getComputedStyle(_element,null);
return!_css?'':_css[_style];
};
}else{
__getStyle=function(_element,_style){
return _element.currentStyle[_style];
};}
P('E');
E.__destroy=function(){
var _element=document.createElement('div');
_element.style.display='none';
document.body.appendChild(_element);
_element.appendChild(__ec);
};
E._$getElement=function(_element){
if(arguments.length<=1)
return U._$isType(_element,'string')||
U._$isType(_element,'number')?
document.getElementById(_element):_element;
var _result=[];
for(var i=0,l=arguments.length;i<l;
_result.push(E._$getElement(arguments[i])),i++);
return _result;
};
E._$getChildElements=function(_element,_class){
_element=E._$getElement(_element);
if(!_element)return null;
var _result=[];
for(var _node=_element.children||
_element.childNodes,i=0,l=_node.length;i<l;i++){
if(_node[i].nodeType!=Node.ELEMENT_NODE||
(_class&&!E._$hasClassName(_node[i],_class)))continue;
_result.push(_node[i]);
}
return _result;
};
E._$getElementsByClassName=function(_element,_class){
_class=U._$trim(_class);
_element=E._$getElement(_element);
if(!_element||!_class)return null;
if(!!_element.getElementsByClassName){
return Array.prototype.slice.call(
_element.getElementsByClassName(_class),0);
}
if(!!document.evaluate){
var _result=[],
_xrsult=document.evaluate('.//*'+__getExpByClassName(_class),
_element,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for(var i=0,l=_xrsult.snapshotLength;i<l;
_result.push(_xrsult.snapshotItem(i)),i++);
return _result;
}
var _result=[],
_regexp=new RegExp(__getRegClassName(_class),'g'),
_xrsult=_element.getElementsByTagName('*');
for(var i=0,l=_xrsult.length;i<l;i++)
if(E._$hasClassName(_xrsult[i],_regexp))
_result.push(_xrsult[i]);
return _result;
};
E._$hasClassName=function(_element,_class){
_element=E._$getElement(_element);
if(!_element||!_class)return false;
_class=U._$isType(_class,'string')
?__getRegClassName(_class):_class;
return(_element.className||'').search(_class)>=0;
};
E._$replaceClassName=function(_element,_del,_add){
_element=E._$getElement(_element);
if(!_element||(!_del&&!_add))return;
var _class=_element.className||'';
_add=' '+(_add||'');
_del=__getRegClassName(_del+_add);
!!_del&&(_class=_class.replace(new RegExp(_del,'g'),'$1'));
_element.className=U._$trim(_class+_add).replace(__sp,' ');
};
E._$addClassName=function(_element,_add){
E._$replaceClassName(_element,'',_add);
};
E._$delClassName=function(_element,_del){
E._$replaceClassName(_element,_del,'');
};
E._$addNodeTemplate=function(_element,_key){
var _nd=E._$getElement(_element),
_sn=_key||('tp_'+U._$randNumberString(6));
if(!!_nd){
__tp[_sn]=_nd;
__ec.appendChild(_nd);
}else if(U._$isType(_element,'string')){
__tp[_sn]=_element;
}
return _sn;
};
E._$getNodeTemplate=function(_sn){
var _ntmp=__tp[_sn];
if(!!_ntmp&&U._$isType(_ntmp,'string'))
E._$addNodeTemplate(E._$parseElement(_ntmp),_sn);
return!__tp[_sn]?null:__tp[_sn].cloneNode(true);
};
E._$parseElement=function(_xhtml){
if(!U._$isType(_xhtml,'string'))
return _xhtml;
_xhtml=U._$trim(_xhtml);
if(!_xhtml)return null;
var _element=document.cloneElement('div');
_element.innerHTML=_xhtml;
return _element.childNodes.length==1?
_element.childNodes[0]:_element;
};
E._$parseStyle=function(_css,_style){
if(!_css)return null;
if(!B._$ISIE||document.getElementsByTagName('style').length<30){
if(!_style){
var _style=document.cloneElement('style');
document.head.appendChild(_style);
}
!B._$ISIE?_style.innerText=_css
:_style.styleSheet.cssText=_css;
return _style;
}
__hc.styleSheet.cssText+=_css;
return __hc;
};
E._$getStyle=function(_element,_style){
_element=E._$getElement(_element);
return!_element?'':_element.style[_style]||
__getStyle(_element,_style);
};
E._$offsetX=function(_element,_filter){
return __getOffset(_element,'offsetLeft',_filter);
};
E._$offsetY=function(_element,_filter){
return __getOffset(_element,'offsetTop',_filter);
};
E._$removeElement=function(_element){
_element=E._$getElement(_element);
if(!_element||!_element.parentNode)return;
_element.parentNode.removeChild(_element);
if(B._$ISIE&&!!_element.outerHTML)_element.outerHTML='';
};
E._$removeElementByEC=function(){
for(var i=0,l=arguments.length,_element;i<l;i++){
_element=E._$getElement(arguments[i]);
_element&&__ec.appendChild(_element);
}
};
E._$noSelect=function(_element,_selected){
if(!B._$ISIE)return;
_element=E._$getElement(_element);
if(!_element)return;
_element.onselectstart=!_selected?F:null;
};
E._$hoverElement=function(_element,_class,_force){
if(!B._$ISOLDIE&&!_force)return;
_element=E._$getElement(_element);
if(!_element||!_class||!!_element[__hk])return;
_element[__hk]=_class;
var _id=_element.id=_element.id||'xnd_'+U._$randNumberString(10);
V._$addEvent(_element,B._$ISIE?'mouseleave':'mouseout',__hoverElement._$bind(E,_id,false));
V._$addEvent(_element,B._$ISIE?'mouseenter':'mouseover',__hoverElement._$bind(E,_id,true));
};
E._$maxBoxElement=function(_element,_type,_value,_ratio){
if(!B._$ISOLDIE)return;
_element=E._$getElement(_element);
if(!_element)return;
var _id=_element.id||('mnd_'+U._$randNumberString(10));
_element.id=_id;_element.mt=_type;
_element.mv=_value;_element.mr=_ratio;
if(!!_element.maxkey)return;_element.maxkey=true;
var _type=_element.tagName.toLowerCase()=='img'?'load':'resize';
!!_ratio?V._$addEvent(_element,_type,__adjElement._$bind(E,_id))
:V._$addEvent(_element,_type,__maxElement._$bind(E,_id));
};
E._$maxWidthElement=function(_element,_width,_ratio){
E._$maxBoxElement(_element,'width',_width,_ratio);
};
E._$maxHeightElement=function(_element,_height,_ratio){
E._$maxBoxElement(_element,'height',_height,_ratio);
};
E._$getFlashObject=function(_key){
return B._$ISIE?window[_key]:document[_key];
};
var __getExpByClassName;
if(!!document.evaluate)
__getExpByClassName=function(_class){
if(!_class)return null;
if(!__sp.test(_class))
return"[contains(concat(' ',@class,' '),' "+_class+" ')]";
var _arr=_class.split(__sp),_result='';
for(var i=0,l=_arr.length,_tmp;i<l;i++){
_tmp=__getExpByClassName(_arr[i]);
_result+=!_tmp?'':_tmp;
}
return _result;
};
if(!window.Node)
window.Node={ELEMENT_NODE:1
};
if(B._$ISFF){
HTMLElement.prototype['__defineGetter__']("innerText",function(){return this.textContent;});
HTMLElement.prototype['__defineSetter__']("innerText",function(_content){this.textContent=_content;});
HTMLElement.prototype.insertAdjacentElement=function(_where,_element){
if(!_where||!_element)return;
switch(_where){
case'beforeEnd':this.appendChild(_element);return;
case'beforeBegin':this.parentNode.insertBefore(_element,this);return;
case'afterBegin':
!this.firstChild
?this.appendChild(_element)
:this.insertBefore(_element,this.firstChild);return;
case'afterEnd':
!this.nextSibling
?this.parentNode.appendChild(_element)
:this.parentNode.insertBefore(_element,this.nextSibling);return;
}
};
HTMLElement.prototype.insertAdjacentHTML=function(_where,_html){
if(!_where||!_html)return;
this.insertAdjacentElement(_where,
document.createRange().
createContextualFragment(_html));
};}
document.head=document.getElementsByTagName('head')[0]||document.body;
document.cloneElement=function(_tag,_class){
var _element=document.createElement(_tag);
__initElementByTag(_element);
!!_class&&(_element.className=_class);
return _element;
};
if(B._$ISIE){
__hc=document.cloneElement('style');
document.head.appendChild(__hc);
}
})(this,document);
(function(window,document){
var __akey='__'+new Date().getTime()+'__';
var __events={};
var __cacheEventWithoutCached=function(_element,_type,_handler){
var _sn='ev_'+U._$randNumberString(),_object={evn:{}};
_object.evn[_type]=_handler;_object.elm=_element;
__events[_sn]=_object;_element[__akey]=_sn;
};
var __cacheEventWithCached=function(_sn,_type,_handler){
var _object=__events[_sn].evn,_function=_object[_type];
if(!_function){_object[_type]=_handler;return;}
if(!U._$isType(_function,'array')){
_object[_type]=[_function,_handler];return;
}
_function.push(_handler);
};
var __cacheEvent=function(_element,_type,_handler){
if(_element==window||_element==document||
_element==top||_element==parent)return;
var _sn=_element[__akey];
_sn?__cacheEventWithCached(_sn,_type,_handler)
:__cacheEventWithoutCached(_element,_type,_handler);
};
var __clearEventInCache=function(_sn,_type){try{
var _cache=__events[_sn];
if(!_cache)return;
if(!!_type){
var _handler=_cache.evn[_type];
if(!_handler)return;
if(!U._$isType(_handler,'array'))
V._$delEvent(_cache.elm,_type,_handler);
else
for(var h;h=_handler.pop();
V._$delEvent(_cache.elm,_type,h));
delete _cache.evn[_type];return;
}
__clearCacheWithSN(_sn);
}catch(e){}};
var __clearEventsInCache=function(){
for(var _sn in __events)try{__clearCacheWithSN(_sn);}catch(e){}
};
var __clearCacheWithSN=function(_sn){
var _cache=__events[_sn];
if(!_cache)return;
for(var _type in _cache.evn)
!!_type&&__clearEventInCache(_sn,_type);
_cache.elm[__akey]='';
delete _cache.elm;
delete _cache.evn;
delete __events[_sn];
};
var __onReadyStateChange=function(_callback,_event){
var _element=V._$getElement(_event)||document;
if(!_element||
(_element.readyState!='loaded'&&
_element.readyState!='complete'))
return;
_callback(_event);
};
var __isOnReadyStateChange=function(_element,_type){
var _tag=(_element.tagName||'').toLowerCase();
return B._$ISIE&&((_element==document&&_type=='DOMContentLoaded')
||((_tag=='iframe'||_tag=='script')&&_type=='load'));
};
var __addEvent,__delEvent;
if(!!document.addEventListener){
__addEvent=function(_element,_type,_handler,_capture){
_element.addEventListener(_type,_handler,!!_capture);
};
__delEvent=function(_element,_type,_handler,_capture){
_element.removeEventListener(_type,_handler,!!_capture);
};
}else{
__addEvent=function(_element,_type,_handler){
_element.attachEvent('on'+_type,_handler);
};
__delEvent=function(_element,_type,_handler){
_element.detachEvent('on'+_type,_handler);
};}
P('V');
V.__destroy=__clearEventsInCache;
V._$getElement=function(_event){
if(!_event)return null;
var _element=_event.target||_event.srcElement;
if(!arguments[1]||!U._$isType(arguments[1],'function'))
return _element;
while(_element){
if(!!arguments[1](_element))
return _element;
_element=_element.parentNode;
}
return null;
};
V._$addEvent=function(_element,_type,_handler,_capture){
_element=E._$getElement(_element);
if(!_element||!_type||!_handler)return;
if(__isOnReadyStateChange(_element,_type)){
_type='readystatechange';
_handler=__onReadyStateChange._$bind(null,_handler);
}
if(B._$ISIE&&_type=='input')_type='propertychange';
__addEvent(_element,_type,_handler,_capture);
__cacheEvent(_element,_type,_handler);
};
V._$batchEvent=function(_elements,_mode,_type,_handler,_capture){
var _function;
switch(_mode){
case'add':_function=V._$addEvent;break;
case'del':_function=V._$delEvent;break;
case'clear':_function=V._$clearEvent;break;
}
for(var e;e=_elements.pop();
_function(e,_type,_handler,_capture));
};
V._$delEvent=function(_element,_type,_handler,_capture){
_element=E._$getElement(_element);
if(!_element||!_type||!_handler)return;
__delEvent(_element,_type,_handler,_capture);
};
V._$clearEvent=function(_element,_type){
_element=E._$getElement(_element);
if(!_element)return;
if(__isOnReadyStateChange(_element,_type))
_type='readystatechange';
if(B._$ISIE&&_type=='input')
_type='propertychange';
__clearEventInCache(_element[__akey],_type);
};
V._$dispatchEvent=function(_element,_type){
_element=E._$getElement(_element);
if(!_element)return;
if(!!document.createEvent){
var _event=document.createEvent('MouseEvent');
_event.initEvent(_type,false,false);
_element.dispatchEvent(_event);
}else if(!!document.createEventObject){
_element.fireEvent('on'+_type,arguments[2]||window.event||document.createEventObject());
}
};
V._$stop=function(_event){
V._$stopBubble(_event);
V._$stopDefault(_event);
};
V._$stopBubble=function(_event){
if(!_event)return;
!!_event.stopPropagation
?_event.stopPropagation()
:_event.cancelBubble=true;
};
V._$stopDefault=function(_event){
if(!_event)return;
!!_event.preventDefault
?_event.preventDefault()
:_event.returnValue=false;
};
V._$pointerX=function(_event){
if(!_event)return 0;
return _event.pageX||(_event.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));
};
V._$pointerY=function(_event){
if(!_event)return 0;
return _event.pageY||(_event.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));
};
})(this,document);
V._$addEvent(window,'unload',function(){
try{
V.__destroy();
E.__destroy();
U.__destroy();
B.__destroy();
}catch(e){}
});
(function(){
var p=P(N.ut),
__proEvent;
p._$$Event=C();
__proEvent=p._$$Event.prototype;
__proEvent._$initialize=function(){
this.__events={};
};
__proEvent._$addEvent=function(_type,_event){
if(!_type||!_event||
!U._$isType(_event,'Function'))return;
this.__events[_type.toLowerCase()]=_event;
};
__proEvent._$batEvent=function(_event){
if(!_event)return;
for(var p in _event)
this._$addEvent(p,_event[p]);
};
__proEvent._$delEvent=function(_type){
if(!_type)return;
delete this.__events[_type.toLowerCase()];
};
__proEvent._$getEvent=function(_type){
return this.__events[_type.toLowerCase()]||null;
};
__proEvent._$dispatchEvent=function(){
if(!arguments.length)return;
var _type=Array.prototype.shift.apply(arguments),
_event=this.__events[_type.toLowerCase()];
if(!!_event)return _event.apply(window,arguments);
};
})();
(function(){
var p=P(N.ut),
__proCache;
var __filter=function(_item){
return _item;
};
p._$$Cache=C();
__proCache=p._$$Cache._$extend(p._$$Event);
__proCache._$initialize=function(_options){
this._$super();
this._$batEvent(_options);
this.constructor.__pool=this.constructor.__pool||{};
this.constructor.__queue=this.constructor.__queue||[];
this.constructor.__queue.push(this);
};
__proCache._$getListInCache=function(_ckey){
return(this.__getListHashDataInCache(_ckey)||O).l;
};
__proCache._$getHashInCache=function(_ckey){
return(this.__getListHashDataInCache(_ckey)||O).h;
};
__proCache.__setDataInCache=function(_key,_data){
this.constructor.__pool[_key]=_data;
};
__proCache.__getDataInCache=function(_key){
return this.constructor.__pool[_key];
};
__proCache.__delDataInCache=function(_key){
delete this.constructor.__pool[_key];
};
__proCache.__dispatchAllEvent=function(){
var _queue=this.constructor.__queue;
if(!_queue||!_queue.length)return;
for(var i=0,l=_queue.length;i<l;_queue[i].
_$dispatchEvent.apply(_queue[i],arguments),i++);
};
__proCache.__getListHashDataInCache=function(_ckey){
if(!this.__getDataInCache(_ckey))
this.__setDataInCache(_ckey,{});
return this.__getDataInCache(_ckey);
};
__proCache.__setListInCache=function(_list,_ckey,_hkey,_filter){
var _hmap=this.__getListHashDataInCache(_ckey);
_hmap.h={};
_hmap.l=_list||[];
_filter=_filter||__filter;
for(var i=_hmap.l.length-1,_item;i>=0;i--){
_item=_filter(_hmap.l[i]);
if(!_item){_hmap.l.splice(i,1);continue;}
_hmap.h[_item[_hkey||'id']]=_item;
}
};
})();
(function(window,document){
var p=P(N.ut),
__proHashMonitor,
__instance,
__iehack='history_hack',
__ndhack=B._$ISIE&&B._$VERSION<'8.0';
p._$$HashMonitor=C();
__proHashMonitor=p._$$HashMonitor._$extend(p._$$Event);
p._$$HashMonitor._$getInstance=function(_options){
return!__instance?new this(_options):__instance;
};
__proHashMonitor._$initialize=function(_options){
if(!!__instance)
return __instance;
__instance=this;
this._$super();
this.__history=[];
_options=_options||O;
this.__hackHistoryFrame(_options.url);
this._$addEvent('onchange',_options.onchange);
this.__timer=window.setInterval(this.__check._$bind(this),_options.interval||100);
};
__proHashMonitor.__hackHistory=function(_hash){
if(!__ndhack)return;
if(!window[__iehack]){
var _doc=this.__frame.contentWindow.document;
_doc.open();
_doc.write('<title>'+(document.title||_hash)+'</title>\
                    <script type="text/javascript">'
+this.__dmcnt+
'parent.focus();\
                     parent[\''+__iehack+'\']=true;\
                     parent.location.hash="'+U._$string(_hash)+'";\
                    </sc'+'ript>');
_doc.close();
}
window[__iehack]=false;
};
__proHashMonitor.__hackHistoryFrame=function(_url){
if(!__ndhack)return;
this.__dmcnt='';
this.__frame=document.cloneElement('iframe');
if(window.location.hostname!=document.domain){
this.__frame.flag=true;
this.__dmcnt='document.domain="'+document.domain+'";';
V._$addEvent(this.__frame,'load',this.__hackHistoryFrameCheck._$bind(this));
this.__frame.src=_url||('http://'+window.location.host+'/crossdomain.html');
}
this.__frame.style.display='none';
document.body.appendChild(this.__frame);
};
__proHashMonitor.__hackHistoryFrameCheck=function(){
try{
if(!this.__frame.contentWindow.document)
throw'no history document';
V._$clearEvent(this.__frame,'load');
this.__frame.flag=false;
}catch(e){
this.__timer=window.clearInterval(this.__timer);
}
};
__proHashMonitor.__check=function(){
if(__ndhack&&!!this.__frame.flag)return;
var _hash=window.location.hash.substr(1)||'';
if(this.__history[this.__history.length-1]==_hash)return;
this.__hackHistory(_hash);
this.__history.push(_hash);
this._$dispatchEvent('onchange',B._$ISFF?_hash:decodeURIComponent(_hash||''));
};
__proHashMonitor._$replace=function(_hash){
_hash=_hash||'';
if(__ndhack)window[__iehack]=true;
window.location.replace((_hash.indexOf('#')<0?'#':'')+_hash);
};
__proHashMonitor._$go=function(_hash){
_hash=_hash||'';
window.location.hash=(_hash.indexOf('#')<0?'#':'')+_hash;
};
__proHashMonitor._$dump=function(){
return this.__history;
};
})(this,document);
(function(){
var p=P(N.ut),
__proSingleton;
p._$$Singleton=C();
__proSingleton=p._$$Singleton._$extend(P(N.ut)._$$Event);
p._$$Singleton._$getInstance=function(_options){
if(!!this.__instance&&!!_options)
this.__instance._$resetOption(_options);
return this.__instance||new this(_options);
};
__proSingleton._$initialize=function(_options){
if(!!this.constructor.__instance)
return this.constructor.__instance;
this.constructor.__instance=this;
this._$super();
this.__initialize();
this._$resetOption(_options);
};
__proSingleton._$resetOption=F;
__proSingleton.__initialize=F;
})();
(function(){try{
var p=P(N.ut),
__ses_set,
__ses_get,
__ses_clear,
__ses_remove;
if(!!window.sessionStorage){
__ses_set=function(_key,_data){
sessionStorage.setItem(_key,U._$serialize(_data));
};
__ses_get=function(_key){
return U._$deserialize(sessionStorage.getItem(_key));
};
__ses_remove=function(_key){
sessionStorage.removeItem(_key);
};
__ses_clear=function(){
if(!!sessionStorage.clear){
sessionStorage.clear();
return;
}
for(var i=(sessionStorage.length||0)-1;i>=0;
__ses_remove(sessionStorage.key(i)),i--);
};
}else{
var __ses_pool;
try{var _name = window.name;
if (_name && /^[\],:{}\s]*$/.test(_name.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')))__ses_pool = U._$deserialize(_name);
}catch(e){}
if(!__ses_pool||!U._$isType(__ses_pool,'object'))__ses_pool={};
var __ses_save=function(){
window.name=U._$serialize(__ses_pool);
};
__ses_set=function(_key,_data){
__ses_pool[_key]=_data;
};
__ses_get=function(_key){
return __ses_pool[_key];
};
__ses_remove=function(_key){
delete __ses_pool[_key];
};
__ses_clear=function(){
__ses_pool={};
};
V._$addEvent(window,'beforeunload',__ses_save);
}
p._$$SESStorage=C();
p._$$SESStorage._$set=__ses_set;
p._$$SESStorage._$get=__ses_get;
p._$$SESStorage._$clear=__ses_clear;
p._$$SESStorage._$remove=__ses_remove;}catch(e){};
})();
(function(){
var p=P(N.ut),
__proTaber,
__key='__tabkey__';
var __filter=function(_element){
return!!_element[__key];
};
p._$$Taber=C();
__proTaber=p._$$Taber._$extend(p._$$Event);
__proTaber._$initialize=function(_list,_options){
this._$super();
_options=_options||O;
this.__nobubble=!!_options.nobubble;
this.__selected=_options.selected||'selected';
this._$addEvent('onchange',_options.onchange);
this._$refresh(_list||[],_options.index||0);
};
__proTaber._$refresh=function(_list,_index){
_index=_index!=null?
_index:this.__index;
this._$setList(_list);
delete this.__index;
this._$setIndex(_index);
};
__proTaber._$getList=function(){
return this.__list;
};
__proTaber._$getIndex=function(){
return this.__index;
};
__proTaber._$setList=function(_list){
this.__list=_list||this.__list;
for(var i=0,l=this.__list.length,_item;i<l;i++){
_item=(this.__list[i]
=E._$getElement(this.__list[i]));
E._$delClassName(_item,this.__selected);
if(!_item[__key]){
_item.index=i;
_item[__key]=true;
V._$addEvent(_item,'click',
this.__onClick._$bind(this));
}
}
};
__proTaber._$setIndex=function(_index,_nocallback){
if(!this.__list||
this.__list.length<=0||
this.__index==_index)return;
var _tmp=this.__index;
E._$delClassName(this.__list[this.__index],this.__selected);
this.__index=_index;
E._$addClassName(this.__list[this.__index],this.__selected);
!_nocallback&&this._$dispatchEvent('onchange',this.__index,_tmp);
};
__proTaber.__onClick=function(_event){
if(this.__nobubble)V._$stop(_event);
var _node=V._$getElement(_event,__filter);
if(!_node||!!_node.disabled)return;
this._$setIndex(_node.index||0);
};
__proTaber._$resetTaber=function(){
for(var i=0,l=this.__list.length,_item;i<l;i++){
_item=(this.__list[i]
=E._$getElement(this.__list[i]));
if(_item[__key])
_item[__key]=null;
}
};
})();
(function(){
var p=P(N.ui),
__proUIAbstract;
var __style,
__uispace=/\#\<.*?\>/gi;
p._$pushStyle=function(_style,_space){
if(!_style||!_style.replace)return;
if(!__style)__style=[];
if(!!_space)
_style=_style.replace(__uispace,'.'+_space);
__style.push(_style);
};
p._$dumpStyle=function(){
if(!__style)return;
E._$parseStyle(__style.join(''));
__style=null;
};
p._$$UIAbstract=C();
__proUIAbstract=p._$$UIAbstract._$extend(P(N.ut)._$$Event);
p._$$UIAbstract._$allocate=function(_parent,_options){
_options=_options||{};
_options.group=!!_options.singleton&&
'__singleton__'||_options.group;
var _instance;
if(!!_options.group){
this.__group=this.__group||{};
_instance=this.__group[_options.group];
}
if(!_instance){
this.__pool=this.__pool||[];
_instance=this.__pool.shift();
}
if(!!_instance){
_instance._$destroy(true);
_instance._$reset(_parent,_options);
}else{
_instance=new this(_parent,_options);
}
if(!!_options.group)
this.__group[_options.group]=_instance;
return _instance;
};
p._$$UIAbstract._$recycle=function(_instance){
if(!(_instance instanceof this)||
_instance._$destroyed())return null;
var _group=_instance._$group();
if(!!_group&&!this.__group[_group])return null;
_instance._$destroy();
if(!!_group)delete this.__group[_group];
this.__pool=this.__pool||[];
this.__pool.push(_instance);
return null;
};
__proUIAbstract._$initialize=function(_parent,_options){
this._$super();p._$dumpStyle();
this.__body=document.cloneElement('div',this.__getSpace());
this.__body.innerHTML=this.__getXhtml()||'';
this.__intXnode();
this._$reset(_parent,_options);
};
__proUIAbstract._$destroy=function(_redestroy){
if(!this._$getEvent('onbeforedestroy'))return;
this._$dispatchEvent('onbeforedestroy');
this._$delEvent('onbeforedestroy');
this.__recycleBody();
E._$delClassName(this.__body,this.__class);
delete this.__class;
};
__proUIAbstract._$reset=function(_parent,_options){
_options=_options||O;
this.__group=_options.group;
this._$resetOption(_options);
this._$appendToParent(_parent,!!_options.before);
};
__proUIAbstract._$resetOption=function(_options){
_options=_options||O;
this.__class=_options['class']||'';
E._$addClassName(this.__body,this.__class);
this.__hhack=B._$ISIE&&!!_options.hackhover;
this._$addEvent('onbeforedestroy',_options.onbeforedestroy||F);
};
__proUIAbstract._$getBody=function(){
return this.__body;
};
__proUIAbstract._$appendToParent=function(_parent,_before){
if(!this.__body)return;
_parent=E._$getElement(_parent);
if(!_parent)return;
this.__parent=_parent==document.documentElement?document.body:_parent;
this.__revertBody(_before);
};
__proUIAbstract._$group=function(){
return this.__group||null;
};
__proUIAbstract._$destroyed=function(){
return!this.__used;
};
__proUIAbstract.__recycleBody=function(){
this.__used=false;
this.__hhack?this.__body.style.display='none'
:E._$removeElementByEC(this.__body);
};
__proUIAbstract.__revertBody=function(_before){
if(!this.__parent||!this.__body)return;
!_before?this.__parent.appendChild(this.__body)
:this.__parent.insertAdjacentElement('afterBegin',this.__body);
if(this.__hhack)this.__body.style.display='';
this.__used=true;
};
__proUIAbstract.__getSpace=F;
__proUIAbstract.__getXhtml=F;
__proUIAbstract.__intXnode=F;
})();
(function(){
var p=P(N.ui),
__proPager;
p._$$Pager=C();
__proPager=p._$$Pager._$extend(p._$$UIAbstract,true);
__proPager._$resetOption=function(_options){
this.__index=-1;
_options=_options||O;
p._$$Pager._$supro._$resetOption.call(this,_options);
this._$addEvent('onchange',_options.onchange||F);
if(!!this.__bindPager&&!_options.frombind){
_options.frombind=true;
this.__bindPager._$reset(_options.bparent,_options);
}else{
this.__changePage(_options.index||1,_options.total);
}
};
__proPager._$destroy=function(){
if(!!this.__bindPager){
this.__bindPager.__detachPager();
this.__bindPager=this.__bindPager
.constructor._$recycle(this.__bindPager);
}
p._$$Pager._$supro._$destroy.call(this);
};
__proPager._$appendToParent=function(_parent){
p._$$Pager._$supro._$appendToParent.call(this,_parent);
this._$display(this.__canVisible());
};
__proPager._$go=function(_index){
_index=parseInt(_index)||1;
if(_index<1||_index>this.__total)return;
this.__changePage(_index,this.__total);
};
__proPager._$getIndex=function(){
return this.__index;
};
__proPager._$getTotal=function(){
return this.__total;
};
__proPager._$visible=function(_visible){
this.__body.style.visibility=!_visible?'hidden':'visible';
if(!arguments[1]&&!!this.__bindPager)
this.__bindPager._$visible(_visible,true);
};
__proPager._$display=function(_display){
this.__body.style.display=!_display?'none':'block';
if(!arguments[1]&&!!this.__bindPager)
this.__bindPager._$display(_display,true);
};
__proPager._$cloneAndBind=function(_parent){
if(!this.__bindPager){
this.__bindPager=this.constructor
._$allocate(_parent,this.__getCloneOption());
this.__bindPager.__attachPager(this);
this.__bindPager._$addEvent(
'onchange',this._$getEvent('onchange'));
}else{
this.__bindPager._$appendToParent(_parent);
}
return this.__bindPager;
};
__proPager.__canVisible=function(){
return this.__total>1;
};
__proPager.__attachPager=function(_pager){
if(!(_pager instanceof this.constructor))return;
this.__bindPager=_pager;
};
__proPager.__detachPager=function(){
delete this.__bindPager;
};
__proPager.__getCloneOption=function(){
return{index:this.__index,total:this.__total,'class':this.__class};
};
__proPager.__changePage=function(_index,_total){
var _paged=this.__changePageWithoutCallback(_index,_total);
this.__bindPager&&this.__bindPager.__changePageWithoutCallback(_index,_total);
if(_paged)this._$dispatchEvent('onchange',this.__index);
};
__proPager.__changePageWithoutCallback=function(_index,_total){
this.__total=Math.max(1,_total);
this.__index=Math.max(1,Math.min(_index,this.__total));
this._$display(this.__canVisible());
};
})();
(function(){
var p=P(N.ui),
__proDPager,
__uispace='ui-'+U._$randNumberString();
var __pool=[],
__cpselect='js-zslt-123',
__ciselect='js-zslt-124',
__cdisable='js-zdsb-123';
p._$pushStyle('#<uispace>{font-size:12px;text-align:left;}\
               #<uispace> .zicn{padding-left:8px;background:url('+N.rc.r+'icon.png) no-repeat 0 -23px;zoom:1;}\
               #<uispace> .zxbt{margin:0 2px;text-decoration:underline;cursor:pointer;color:#36c;}\
               #<uispace> .zwin{position:relative;height:18px;line-height:18px;padding:1px 3px;margin:0 3px;cursor:pointer;vertical-align:middle;}\
               #<uispace> .zlst{visibility:hidden;position:absolute;top:18px;left:-1px;width:100%;overflow:hidden;background:#fff;border:1px solid #c1cfe1;}\
               #<uispace> .zlst .zitm{display:block;height:18px;line-height:18px;padding-left:3px;text-decoration:none;}\
               #<uispace> .zlst .zitm:hover,#<uispace> .zlst .zitm.js-zslt-124{text-decoration:none;background:#e6edf4;}\
               #<uispace> .zxbt.js-zdsb-123{text-decoration:none;cursor:default;color:#939393;}\
               #<uispace> .zwin.js-zslt-123,#<uispace> .zwin.js-zhvr-123,#<uispace> .zwin:hover{padding:0 2px;border:1px solid #c1cfe1;}\
               #<uispace> .zwin.js-zslt-123 .zlst{visibility:visible;}\
               .js-zvlg-123 .zlst{top:auto;bottom:18px;}',__uispace);
p._$$DPager=C();
__proDPager=p._$$DPager._$extend(p._$$Pager,true);
__proDPager._$resetOption=function(_options){
_options=_options||O;
this.__number=Math.min(_options.total,
Math.max(_options.number||9,3));
this.__buildPageList();
p._$$DPager._$supro._$resetOption.call(this,_options);
};
__proDPager.__getSpace=function(){
return __uispace;
};
__proDPager.__getXhtml=function(){
return'<span class="zxbt zhom iblock">首页</span><span class="zxbt zbup iblock">上一页</span><!--\
         --><div class="zwin iblock">\
              <span class="zshw">-/-</span>\
              <span class="zicn">&nbsp;</span>\
              <div class="zlst"></div>\
            </div><!--\
         --><span class="zxbt zbdn iblock">下一页</span><span class="zxbt zend iblock">末页</span>';
};
__proDPager.__intXnode=function(){
this.__body.onselectstart=F;
E._$addClassName(this.__body,'noselect');
var _ntmp=E._$getChildElements(this.__body);
this.__btnHom=_ntmp[0];
this.__btnPrv=_ntmp[1];
this.__btnNxt=_ntmp[3];
this.__btnEnd=_ntmp[4];
this.__pgrWin=_ntmp[2];
_ntmp=E._$getChildElements(this.__pgrWin);
this.__pgrShw=_ntmp[0];
this.__pgrLst=_ntmp[2];
E._$hoverElement(this.__pgrWin,'js-zhvr-123');
V._$addEvent(document,'click',this.__onHideList._$bind(this));
V._$addEvent(this.__pgrWin,'click',this.__onShowList._$bind(this));
V._$addEvent(this.__btnHom,'click',this.__onAction._$bind(this,0));
V._$addEvent(this.__btnPrv,'click',this.__onAction._$bind(this,1));
V._$addEvent(this.__btnNxt,'click',this.__onAction._$bind(this,2));
V._$addEvent(this.__btnEnd,'click',this.__onAction._$bind(this,3));
};
__proDPager.__getCloneOption=function(){
var _option=p._$$DPager._$supro.__getCloneOption.call(this);
_option.number=this.__number;
return _option;
};
__proDPager.__onShowList=function(_event){
V._$stop(_event);
if(!this.__total)return;
if(B._$ISOLDIE||B._$ISOP)
this.__pgrLst.style.width=this.__pgrWin.clientWidth+'px';
E._$addClassName(this.__pgrWin,__cpselect);
};
__proDPager.__onHideList=function(){
E._$delClassName(this.__pgrWin,__cpselect);
};
__proDPager.__onAction=function(_flag){
switch(_flag){
case 0:
if(E._$hasClassName(this.__btnHom,__cdisable))return;
this.__changePage(1,this.__total);
return;
case 1:
if(E._$hasClassName(this.__btnPrv,__cdisable))return;
this.__changePage(this.__index-1,this.__total);
return;
case 2:
if(E._$hasClassName(this.__btnNxt,__cdisable))return;
this.__changePage(this.__index+1,this.__total);
return;
case 3:
if(E._$hasClassName(this.__btnEnd,__cdisable))return;
this.__changePage(this.__total,this.__total);
return;
case 4:
this.__onHideList();
V._$stop(arguments[1]);
var _element=V._$getElement(arguments[1]);
if(!_element)return;
this.__changePage(_element.index,this.__total);
return;
}
};
__proDPager.__buildPageList=function(){
var _list=this.__pgrLst.getElementsByTagName('a'),
_ntmp=this.__number-_list.length;
if(_ntmp<0){
for(var i=_list.length-1;i>=this.__number;i--){
__pool.push(_list[i]);
E._$removeElementByEC(_list[i]);
}
}else if(_ntmp>0){
for(var i=_list.length,_node;i<this.__number;i++){
_node=__pool.shift()||document.cloneElement('a','zitm thide');
this.__pgrLst.appendChild(_node);
if(_node.index==null)
V._$addEvent(_node,'click',this.__onAction._$bind(this,4));
}
}
};
__proDPager.__adjustBtnState=function(){
var _ntmp=this.__index==1;
_ntmp?E._$addClassName(this.__btnHom,__cdisable)
:E._$delClassName(this.__btnHom,__cdisable);
_ntmp?E._$addClassName(this.__btnPrv,__cdisable)
:E._$delClassName(this.__btnPrv,__cdisable);
_ntmp=this.__index==this.__total;
_ntmp?E._$addClassName(this.__btnEnd,__cdisable)
:E._$delClassName(this.__btnEnd,__cdisable);
_ntmp?E._$addClassName(this.__btnNxt,__cdisable)
:E._$delClassName(this.__btnNxt,__cdisable);
};
__proDPager.__adjustPageList=function(){
var _list=this.__pgrLst.getElementsByTagName('a');
if(!_list||!_list.length)return;
for(var i=0,l=_list.length,_val,_beg=
Math.min(this.__total-this.__number+1,Math.max(1,
this.__index-Math.floor(this.__number/2)));i<l;i++){
_val=_beg+i;
_list[i].index=_val;
_list[i].innerText=_val;
_val==this.__index?E._$addClassName(_list[i],__ciselect)
:E._$delClassName(_list[i],__ciselect);
}
};
__proDPager.__changePageWithoutCallback=function(_index,_total){
if(this.__index==_index&&this.__total==_total)return false;
p._$$DPager._$supro.__changePageWithoutCallback.call(this,_index,_total);
this.__pgrShw.innerText=this.__index+'/'+this.__total;
this.__adjustBtnState();
this.__adjustPageList();
return true;
};
})();
(function(){
var p=P(N.ui),
__proLPager,
__uispace='ui-'+U._$randNumberString();
var __cpgfrag='js-zfrg-654',
__cdisable='js-znpg-097',
__cpselect='js-zslt-987 '+(N.tm.fc02||'');
p._$pushStyle('#<uispace>{font-size:12px;padding-bottom:3px;text-align:center;}\
               #<uispace> .frg{display:none;font-weight:bold;}\
               #<uispace> .iblock{height:22px;line-height:22px;padding:1px 8px;margin:0 2px;cursor:pointer;text-decoration:underline;}\
               #<uispace> .pgi:hover,#<uispace> .pgi.js-zhvr-258{padding:0 7px;border-width:1px;border-style:solid;}\
               #<uispace> .pgi.js-zslt-987{padding:1px 8px;border-width:0;background-color:transparent;font-weight:bold;cursor:default;text-decoration:none;}\
               #<uispace> .pgb.js-znpg-097{visibility:hidden;}\
               #<uispace>.js-zfrg-6540 .frg{display:none;}\
               #<uispace>.js-zfrg-6541 .frg.fgn{display:inline;}\
               #<uispace>.js-zfrg-6542 .frg.fgp{display:inline;}\
               #<uispace>.js-zfrg-6543 .frg{display:inline;}',__uispace);
p._$$LPager=C();
__proLPager=p._$$LPager._$extend(p._$$Pager,true);
__proLPager._$initialize=function(_parent,_options){
this.__frgList=new Array(9);
this._$super(_parent,_options);
};
__proLPager.__getSpace=function(){
return __uispace;
};
__proLPager.__getXhtml=function(){
var _fc03=N.tm.fc03||'',
_tm00=(N.tm.fc00||'')+' '+(N.tm.bgh0||'')+' '+(N.tm.bdc0||'');
return'<span class="pgi pgb iblock '+_tm00+'">上一页</span>\
            <span class="pgi zpg1 iblock '+_tm00+'"></span>\
            <span class="frg fgp '+_fc03+'">...</span>\
   <span class="pgi zpg2 iblock '+_tm00+'"></span>\
            <span class="pgi zpg3 iblock '+_tm00+'"></span>\
            <span class="pgi zpg4 iblock '+_tm00+'"></span>\
            <span class="pgi zpg5 iblock '+_tm00+'"></span>\
            <span class="pgi zpg6 iblock '+_tm00+'"></span>\
            <span class="pgi zpg7 iblock '+_tm00+'"></span>\
            <span class="pgi zpg8 iblock '+_tm00+'"></span>\
   <span class="frg fgn '+_fc03+'">...</span>\
            <span class="pgi zpg9 iblock '+_tm00+'"></span>\
            <span class="pgi pgb iblock '+_tm00+'">下一页</span>';
};
__proLPager.__intXnode=function(){
this.__body.onselectstart=F;
E._$addClassName(this.__body,'noselect');
this.__itemList=E._$getChildElements(this.__body,'iblock');
V._$addEvent(this.__itemList[0],'click',this.__doPage._$bind(this,-1));
V._$addEvent(this.__itemList[10],'click',this.__doPage._$bind(this,1));
for(var i=0;i<11;i++){
E._$hoverElement(this.__itemList[i],'js-zhvr-258 js-'+(N.tm.bgh0||'')+'-hover');
if(i==0||i==10)continue;
V._$addEvent(this.__itemList[i],'click',this.__doPageClick._$bind(this,i-1));
}
};
__proLPager.__setFragIndex=function(){
var _index=this.__getFragIndex();
if(this.__frgIndex==_index)return;
E._$replaceClassName(this.__body,__cpgfrag+
(this.__frgIndex||0),__cpgfrag+_index);
this.__frgIndex=_index;
};
__proLPager.__getFragIndex=function(){
var _numb=this.__frgList.length,
_half=Math.floor((_numb-2)/2);
if(this.__total<=_numb){
for(var i=0;i<_numb;this.__frgList[i]=i<this.__total?(i+1):-1,i++);
return 0;
}
if(_half+2<this.__index&&this.__index<this.__total-_numb+_half+2){
this.__frgList[0]=1;
this.__frgList[_numb-1]=this.__total;
for(var i=0,l=_numb-2,d=this.__index-_half;i<l;this.__frgList[i+1]=i+d,i++);
return 3;
}
if(this.__index<_numb){
this.__frgList[_numb-1]=this.__total;
for(var i=0;i<_numb-1;this.__frgList[i]=i+1,i++);
return 1;
}
this.__frgList[0]=1;
for(var k=0,i=_numb-1;i>=1;this.__frgList[i]=this.__total-(k++),i--);
return 2;
};
__proLPager.__setFragmentList=function(){
for(var i=0,l=this.__frgList.length,_item,_index;i<l;i++){
_index=this.__frgList[i];
_item=this.__itemList[i+1];
_item.style.display=_index<0?'none':'';
_item.innerText=_index;
_index==this.__index?E._$addClassName(_item,__cpselect)
:E._$delClassName(_item,__cpselect);
}
};
__proLPager.__doPage=function(_flag){
this.__changePage(this.__index+_flag,this.__total);
};
__proLPager.__doPageClick=function(_index){
this.__changePage(this.__frgList[_index],this.__total);
};
__proLPager.__adjustBtnState=function(){
var _ntmp=this.__index==1;
_ntmp?E._$addClassName(this.__itemList[0],__cdisable)
:E._$delClassName(this.__itemList[0],__cdisable);
_ntmp=this.__index==this.__total;
_ntmp?E._$addClassName(this.__itemList[10],__cdisable)
:E._$delClassName(this.__itemList[10],__cdisable);
};
__proLPager.__changePageWithoutCallback=function(_index,_total){
if(this.__index==_index&&this.__total==_total)return false;
p._$$LPager._$supro.__changePageWithoutCallback.call(this,_index,_total);
this.__setFragIndex();
this.__setFragmentList();
this.__adjustBtnState();
return true;
};
})();
(function(){
var p=P(N.ui),
__proNPager,
__uispace='ui-'+U._$randNumberString();
var __cdisable='js-zdsb-124';
p._$pushStyle('#<uispace>{height:20px;line-height:20px;font-size:12px;}\
               #<uispace> .zshw{margin:0 5px;}\
               #<uispace> .zbtn{text-decoration:underline;cursor:pointer;color:#36c;}\
               #<uispace> .zbtn.js-zdsb-124{text-decoration:none;cursor:default;color:#939393;}',__uispace);
p._$$NPager=C();
__proNPager=p._$$NPager._$extend(p._$$Pager,true);
__proNPager._$disableNext=function(_disabled,_frombind){
!!_disabled?E._$addClassName(this.__btnNxt,__cdisable)
:E._$delClassName(this.__btnNxt,__cdisable);
if(!_frombind&&!!this.__bindPager)
this.__bindPager._$disableNext(_disabled,true);
};
__proNPager.__getSpace=function(){
return __uispace;
};
__proNPager.__getXhtml=function(){
return'<span class="zbtn iblock">上一页</span>\
      <span class="zshw iblock">-</span>\
      <span class="zbtn iblock">下一页</span>';
};
__proNPager.__intXnode=function(){
this.__body.onselectstart=F;
E._$addClassName(this.__body,'noselect');
var _ntmp=E._$getChildElements(this.__body);
this.__btnPrv=_ntmp[0];
this.__btnNxt=_ntmp[2];
this.__pgrShw=_ntmp[1];
V._$addEvent(this.__btnPrv,'click',this.__onPrv._$bind(this));
V._$addEvent(this.__btnNxt,'click',this.__onNxt._$bind(this));
};
__proNPager.__onPrv=function(){
if(E._$hasClassName(this.__btnPrv,__cdisable))return;
this.__changePage(this.__index-1);
};
__proNPager.__onNxt=function(){
if(E._$hasClassName(this.__btnNxt,__cdisable))return;
this.__changePage(this.__index+1);
};
__proNPager.__canVisible=function(){
return true;
};
__proNPager.__changePageWithoutCallback=function(_index){
if(this.__index==_index)return false;
this.__index=Math.max(1,_index);
this.__pgrShw.innerText=this.__index;
this.__index==1?E._$addClassName(this.__btnPrv,__cdisable)
:E._$delClassName(this.__btnPrv,__cdisable);
return true;
};
})();
(function(){
var p=P(N.ut),
__proItem;
p._$$Item=C();
__proItem=p._$$Item._$extend(p._$$Event);
p._$$Item._$allocate=function(_data,_parent,_options){
if(!_data)return null;
var _options=_options||{};
if(_options._single_||!U._$isType(_data,'array')){
var _item=!!this.__pool
&&this.__pool.shift()
||new this();
_item._used_=true;
_item._$reset(_options);
_item._$appendToParent(_parent);
_item._$setData(_data);
return _item;
}
if(!_data.length)return null;
var _arr=[];
for(var i=Math.max(0,_options._start_||0),k=0,l=Math.min(
_options._end_!=null?_options._end_:_data.length,_data.length);i<l;k++,i++){
_options._index_=k;
_arr.push(this._$allocate(_data[i],_parent,_options));
}
return _arr;
};
p._$$Item._$recycle=function(_item){
if(!_item)return null;
if(_item._used_&&(_item instanceof this)){
_item._used_=false;
_item._$destroy();
this.__pool&&
this.__pool.push(_item);
return null;
}
if(U._$isType(_item,'array'))
for(var i;i=_item.pop();this._$recycle(i));
return null;
};
__proItem._$initialize=function(_tkey){
this._$super();
this.__body=E._$getNodeTemplate(_tkey);
this.constructor.__pool=this.constructor.__pool||[];
};
__proItem._$appendToParent=function(_parent,_before){
this.__parent=E._$getElement(_parent);
if(!this.__parent||!this.__body)return;
!_before?this.__parent.appendChild(this.__body)
:this.__parent.insertAdjacentElement('afterBegin',this.__body);
};
__proItem._$destroy=function(){
delete this.__data;
E._$removeElementByEC(this.__body);
};
__proItem._$getData=function(){
return this.__data||null;
};
__proItem._$setData=function(_data){
this.__data=_data||O;
};
__proItem._$reset=F;
})();
(function(){
var p=P(N.ui),
__proSimplePlayer,
__proSimplePlayItem,
__uispace='ui-'+U._$randNumberString();
var __ply_cfg=[{c:__uispace+'-h clearfix',s:'left',b:'width'},{c:__uispace+'-v',s:'top'}],
__ply_dsb=['js-zdsb-p','js-zdsb-n'];
p._$pushStyle('#<uispace> .zbtn{overflow:hidden;cursor:pointer;text-align:center;}\
               #<uispace> .zwin{position:relative;zoom:1;overflow:hidden;}\
               #<uispace> .zcse{position:absolute;left:0;top:0;}\
               #<uispace> .js-zdsb-p,#<uispace> .js-zdsb-n{cursor:default;}\
               #<uispace>-h{overflow:hidden;zoom:1;}\
               #<uispace>-h .zall{float:left;height:80px;}\
               #<uispace>-h .zbtn{width:24px;line-height:80px;}\
               #<uispace>-h .zwin{margin:0 5px;}\
               #<uispace>-v .zwin{margin:5px 0;}',__uispace);
p._$$SimplePlayer=C();
__proSimplePlayer=p._$$SimplePlayer._$extend(p._$$UIAbstract,true);
__proSimplePlayer._$initialize=function(_parent,_options){
_options=_options||{};
this.__config=__ply_cfg[_options.type]||__ply_cfg[0];
_options['class']=(_options['class']||'')+' '+this.__config.c;
this._$super(_parent,_options);
};
__proSimplePlayer._$resetOption=function(_options){
p._$$SimplePlayer._$supro._$resetOption.call(this,_options);
_options=_options||O;
this.__iato=!_options.noauto;
this.__iopt=_options.oitem||{};
this.__ikey=this.__iopt.ikey||'id';
this.__icls=this.__iopt.iclass;
this.__ibox=this.__icls._$getBox();
this.__icnt=_options.number||1;
this.__ihlf=Math.floor(this.__icnt/2);
var _play=_options.oplay||O;
this.__zdlta=_play.delta||0;
this.__zstep=_play.step||80;
this.__ztime=_play.interval||10;
this.__iopt.onfocus=this.__onItemFocus._$bind(this);
this._$addEvent('onchange',_options.onchange||F);
};
__proSimplePlayer._$clear=function(){
delete this.__zlist;
this.__clearAllItem();
};
__proSimplePlayer._$refresh=function(_list,_id){
this.__resetList(_list);
this.__resetIndex(this.__getIndexById(_id));
};
__proSimplePlayer._$refreshWithClear=function(_list,_id){
this._$clear();
this._$refresh(_list,_id);
};
__proSimplePlayer._$refreshItem=function(_id){
var _index=this.__getIndexById(_id),
_item=this.__getItemByIndex(_index);
if(!!_item)_item._$setData(this.__zlist[_index]);
};
__proSimplePlayer.__getSpace=function(){
return __uispace;
};
__proSimplePlayer.__getXhtml=function(){
return'<div class="zprv zall ztag" title="往前"><div class="zbtn">&nbsp;</div></div>\
            <div class="zwin zall ztag"><div class="zcse ztag"></div></div>\
            <div class="znxt zall ztag" title="往后"><div class="zbtn">&nbsp;</div></div>';
};
__proSimplePlayer.__intXnode=function(){
this.__nodes=E._$getElementsByClassName(this.__body,'ztag');
E._$hoverElement(this.__nodes[0],'js-zhvr-p');
E._$hoverElement(this.__nodes[3],'js-zhvr-n');
V._$addEvent(document,'mouseup',this.__onPlayStop._$bind(this));
V._$addEvent(this.__nodes[0],'mousedown',this.__onPlayStart._$bind(this,-1));
V._$addEvent(this.__nodes[3],'mousedown',this.__onPlayStart._$bind(this,1));
};
__proSimplePlayer.__resetList=function(_list){
if(this.__zlist==_list)return;
this.__clearAllItem();
this.__zlist=_list||[];
};
__proSimplePlayer.__resetIndex=function(_index){
if(_index<this.__pbeg||_index>=this.__pend){
this.__clearAllItem();
this.__ridx=-1;
}
this.__focusItemByIndex(_index,true);
};
__proSimplePlayer.__getIndexById=function(_id){
var _key=this.__ikey;
return U._$indexOf(this.__zlist,function(_item){return _id==_item[_key];});
};
__proSimplePlayer.__getItemByIndex=function(_index){
return this.__zpool[_index-this.__pbeg];
};
__proSimplePlayer.__focusItemByIndex=function(_index,_play){
var _ridx=this.__ridx;
this.__ridx=Math.max(0,Math.min(_index,this.__zlist.length));
if(this.__iato||!!_play)this.__playIndexAsMiddle(this.__ridx);
var _item=this.__getItemByIndex(_ridx);
if(!!_item)_item._$blur();
_item=this.__getItemByIndex(this.__ridx);
if(!_item)return;
_item._$focus();
this._$dispatchEvent('onchange',_item._$getId());
};
__proSimplePlayer.__clearAllItem=function(){
this.__pbeg=-1;
this.__pend=-1;
if(!!this.__zpool&&this.__zpool.length>0){
this.__zpool[0].constructor._$recycle(this.__zpool);
this.__adjustCaseBox(0,true);
this.__adjustCaseOffset(0,true);
}
this.__zpool=[];
};
__proSimplePlayer.__buildItemByIndex=function(_index){
if(this.__pbeg<0)this.__pbeg=_index;
if(this.__pend<0)this.__pend=_index;
this.__iopt._end_=this.__pbeg;
this.__iopt._start_=_index-this.__icnt;
this.__insertItemBefore(this.__icls._$allocate(this.__zlist,null,this.__iopt));
this.__iopt._start_=this.__pend;
this.__iopt._end_=_index+this.__icnt*2;
this.__insertItemEnd(this.__icls._$allocate(this.__zlist,null,this.__iopt));
};
__proSimplePlayer.__insertItemBefore=function(_items){
if(!_items||!_items.length)return;
for(var i=_items.length-1;i>=0;i--){
_items[i]._$appendToParent(this.__nodes[2],true);
this.__pbeg=Math.max(0,this.__pbeg-1);
}
var _delta=this.__ibox*_items.length;
this.__adjustCaseBox(_delta);
this.__adjustCaseOffset(0-_delta);
Array.prototype.unshift.apply(this.__zpool,_items);
};
__proSimplePlayer.__insertItemEnd=function(_items){
if(!_items||!_items.length)return;
for(var i=0,l=_items.length;i<l;i++){
_items[i]._$appendToParent(this.__nodes[2]);
this.__pend=Math.min(this.__zlist.length,this.__pend+1);
}
this.__adjustCaseBox(this.__ibox*_items.length);
Array.prototype.push.apply(this.__zpool,_items);
};
__proSimplePlayer.__getCaseOffset=function(){
return parseInt(this.__nodes[2].style[this.__config.s])||0;
};
__proSimplePlayer.__adjustCase=function(_attr,_delta,_isvalue){
if(!_attr)return;
var _style=this.__nodes[2].style,
_value=_isvalue?0:(parseInt(_style[_attr])||0);
_style[_attr]=_value+_delta+'px';
};
__proSimplePlayer.__adjustCaseBox=function(_delta,_isvalue){
this.__adjustCase(this.__config.b,_delta,_isvalue);
};
__proSimplePlayer.__adjustCaseOffset=function(_delta,_isvalue){
this.__adjustCase(this.__config.s,_delta,_isvalue);
};
__proSimplePlayer.__adjustBtnState=function(){
this.__pidx<=0
?E._$addClassName(this.__nodes[0],__ply_dsb[0])
:E._$delClassName(this.__nodes[0],__ply_dsb[0]);
this.__pidx>=this.__zlist.length-this.__icnt
?E._$addClassName(this.__nodes[3],__ply_dsb[1])
:E._$delClassName(this.__nodes[3],__ply_dsb[1]);
};
__proSimplePlayer.__onPlayStop=function(){
this.__zplay=false;
};
__proSimplePlayer.__onPlayStart=function(_flag){
if(!!this.__zdtmr)return;
this.__zplay=true;
this.__playIndexAsMiddle(this.__pidx+_flag*this.__icnt+this.__ihlf);
};
__proSimplePlayer.__onItemFocus=function(_id){
if(!!this.__zplay)return;
this.__focusItemByIndex(this.__getIndexById(_id));
};
__proSimplePlayer.__playIndexAsMiddle=function(_index){
this.__pidx=Math.max(0,Math.min(this.__zlist.length-this.__icnt,_index-this.__ihlf));
this.__buildItemByIndex(this.__pidx);
this.__adjustBtnState();
this.__zdend=(this.__pbeg-this.__pidx)*this.__ibox;
var _delta=this.__zdend-this.__getCaseOffset();
if(!_delta)return;
this.__zcont=0;
this.__zdflg=_delta<0?-1:1;
this.__zdtmr=window.setInterval(this.__playWithEffect._$bind(this),this.__ztime);
};
__proSimplePlayer.__playWithEffect=function(){
var _offset=this.__getCaseOffset();
if((this.__zdflg<0&&this.__zdend>=_offset)||
(this.__zdflg>0&&this.__zdend<=_offset)){
this.__zdtmr=window.clearInterval(this.__zdtmr);
this.__adjustCaseOffset(this.__zdend,true);
if(!!this.__zplay)this.__onPlayStart(0-this.__zdflg);
return;
}
this.__adjustCaseOffset((this.__zstep+this.__zdlta*this.__zcont)*this.__zdflg);
this.__zcont++;
};
p._$$SimplePlayItem=C();
__proSimplePlayItem=p._$$SimplePlayItem._$extend(P(N.ut)._$$Item,true);
p._$$SimplePlayItem._$getBox=function(){
return 60;
};
__proSimplePlayItem._$initialize=function(_tkey){
this._$super(_tkey);
V._$addEvent(this.__body,'click',this.__onItemClick._$bind(this));
};
__proSimplePlayItem._$reset=function(_options){
_options=_options||O;
this._$addEvent('onfocus',_options.onfocus||F);
};
__proSimplePlayItem.__onItemClick=function(){
this._$dispatchEvent('onfocus',this._$getId());
};
__proSimplePlayItem._$getId=F;
__proSimplePlayItem._$focus=F;
__proSimplePlayItem._$blur=F;
})();
(function(){
var p=P(N.ut),
__proDragDrop;
p._$$DragDrop=C();
__proDragDrop=p._$$DragDrop._$extend(p._$$Event);
__proDragDrop._$initialize=function(_element,_options){
this._$super();
_options=_options||O;
this._$addEvent('ondrag',_options.ondrag);
this._$addEvent('onmove',_options.onmove);
this._$addEvent('ondrop',_options.ondrop);
this.__handler=E._$getElement(_element);
this.__nobubble=_options.nobubble||false;
this.__noselect=_options.noselect||'noselect';
this.__ncapture=this.__handler==document?document.body:this.__handler;
this.__ondrag=this.__onDrag._$bind(this);
V._$addEvent(document,'mouseup',this.__onDrop._$bind(this));
V._$addEvent(document,'mousemove',this.__onMove._$bind(this));
this.__disabled=true;
this._$disable(false);
};
__proDragDrop._$getPointerX=function(){
return this.__ddx;
};
__proDragDrop._$getPointerY=function(){
return this.__ddy;
};
__proDragDrop._$disable=function(_disabled){
if(!this.__disabled==!_disabled)return;
this.__disabled=!!_disabled;
this.__disabled
?V._$delEvent(this.__handler,'mousedown',this.__ondrag)
:V._$addEvent(this.__handler,'mousedown',this.__ondrag);
};
__proDragDrop.__onDrag=function(_event){
if(this.__nobubble)V._$stop(_event);
this.__ddg=true;
this.__ddx=V._$pointerX(_event);
this.__ddy=V._$pointerY(_event);
!!this.__ncapture.setCapture
?this.__ncapture.setCapture()
:E._$addClassName(document.body,this.__noselect);
this._$dispatchEvent('ondrag',this.__ddx,this.__ddy);
};
__proDragDrop.__onMove=function(_event){
if(!this.__ddg)return;
var _ddx=this.__ddx,
_ddy=this.__ddy;
this.__ddx=V._$pointerX(_event);
this.__ddy=V._$pointerY(_event);
this._$dispatchEvent('onmove',this.__ddx-_ddx,this.__ddy-_ddy);
};
__proDragDrop.__onDrop=function(_event){
if(!this.__ddg)return;
this.__ddg=false;
!!this.__ncapture.releaseCapture
?this.__ncapture.releaseCapture()
:E._$delClassName(document.body,this.__noselect);
this._$dispatchEvent('ondrop',_event);
};
})();
(function(){
var p=P(N.ui),
__proRanger,
__uispace='ui-'+U._$randNumberString();
var __instance;
p._$pushStyle('#<uispace>{position:absolute;z-index:999;border:1px solid #316ac5;background-color:#c6d6ef;opacity:0.8;filter:alpha(opacity=80);}',__uispace);
p._$$Ranger=C();
__proRanger=p._$$Ranger._$extend(p._$$UIAbstract,true);
__proRanger._$resetOption=function(_options){
_options=_options||O;
p._$$Ranger._$supro._$resetOption.call(this,_options);
this._$addEvent('onrangechange',_options.onrangechange||F);
};
__proRanger._$appendToParent=function(_parent){
this.__parent=E._$getElement(_parent)||document.body;
};
__proRanger._$disable=function(_disabled){
this.__dragdrop._$disable(_disabled);
};
__proRanger.__getSpace=function(){
return __uispace;
};
__proRanger.__intXnode=function(){
this.__dragdrop=new(P(N.ut)._$$DragDrop)(document,
{ondrag:this.__onDrag._$bind(this),
onmove:this.__onMove._$bind(this),
ondrop:this.__onDrop._$bind(this)});
};
__proRanger.__onDrag=function(_dx,_dy){
this.__ddx=_dx;
this.__ddy=_dy;
this.__setRange(this.__ddx,this.__ddy,1,1);
this.__parent.appendChild(this.__body);
};
__proRanger.__onMove=function(){
var _top=this.__dragdrop._$getPointerY(),
_left=this.__dragdrop._$getPointerX(),
_width=_left-this.__ddx,
_height=_top-this.__ddy;
if(_width>=0&&_height>=0){
_top=this.__ddy;
_left=this.__ddx;
}else if(_width>=0&&_height<=0){
_left=this.__ddx;
_height=Math.abs(_height);
}else if(_width<=0&&_height>=0){
_top=this.__ddy;
_width=Math.abs(_width);
}else{
_width=Math.abs(_width);
_height=Math.abs(_height);
}
this.__setRange(_left,_top,_width,_height);
};
__proRanger.__onDrop=function(){
E._$removeElementByEC(this.__body);
};
__proRanger.__setRange=function(_left,_top,_width,_height){
var _style=this.__body.style;
_style.top=_top+'px';
_style.left=_left+'px';
_style.width=_width+'px';
_style.height=_height+'px';
this._$dispatchEvent('onrangechange',_left,_top,_width,_height);
};
})();
(function(){
var p=P(N.ui),
__proSorter;
p._$$Sorter=C();
__proSorter=p._$$Sorter._$extend(p._$$UIAbstract,true);
__proSorter._$initialize=function(_parent,_options){
this.__ekey='key-'+U._$randNumberString(5);
this._$super(_parent,_options);
};
__proSorter._$resetOption=function(_options){
p._$$Sorter._$supro._$resetOption.call(this,_options);
_options=_options||O;
this.__tag=_options.tag||'';
this.__sbody=E._$getElement(_options.sbody);
this.__handler=_options.handler||'';
this.__useclass=!!_options.useclass;
this.__noselect=_options.noselect||'noselect';
this._$addEvent('onchange',_options.onchange||F);
};
__proSorter._$appendToParent=function(_parent){
this.__parent=E._$getElement(_parent);
if(!!this.__parent)this._$refresh();
};
__proSorter._$refresh=function(){
this.__refreshList();
for(var i=this.__list.length-1;i>=0;
this.__initElement(this.__list[i]),i--);
};
__proSorter._$getSequence=function(_key){
_key=_key||'id';
var _arr=[];
for(var i=0,l=this.__list.length;i<l;
_arr.push(this.__list[i][_key]),i++);
return _arr.join(',');
};
__proSorter.__intXnode=function(){
V._$addEvent(document,'mouseup',this.__onDrop._$bind(this));
V._$addEvent(document,'mousemove',this.__onMove._$bind(this));
};
__proSorter.__initElement=function(_element){
if(!!_element[this.__ekey])return;
_element[this.__ekey]=true;
_element=this.__getHandler(_element);
V._$addEvent(_element,'dragstart',V._$stop);
V._$addEvent(_element,'mousedown',this.__onDrag._$bind(this));
};
__proSorter.__isElement=function(_element){
return!!_element[this.__ekey];
};
__proSorter.__getHandler=function(_element){
var _ntmp=!!this.__handler&&E._$getChildElements(_element,this.__handler)||null;
return _ntmp&&_ntmp[0]||_element;
};
__proSorter.__noTextSelect=function(_mover,_noselected){
if(!!_noselected)
B._$ISIE?document.body.onselectstart=F
:E._$addClassName(document.body,this.__noselect);
else
B._$ISIE?document.body.onselectstart=null
:E._$delClassName(document.body,this.__noselect);
};
__proSorter.__refreshList=function(){
this.__list=(!this.__useclass
?E._$getChildElements(this.__parent,this.__tag)
:E._$getElementsByClassName(this.__parent,this.__tag))||[];
};
__proSorter.__onDrag=F;
__proSorter.__onMove=F;
__proSorter.__onDrop=F;
})();
(function(){
var p=P(N.ui),
__proBSorter,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace>{position:absolute;left:0;background:#eee;opacity:0.8;filter:alpha(opacity=80);cursor:move;}',__uispace);
p._$$BSorter=C();
__proBSorter=p._$$BSorter._$extend(p._$$Sorter,true);
__proBSorter._$resetOption=function(_options){
p._$$BSorter._$supro._$resetOption.call(this,_options);
_options=_options||O;
this.__height=_options.height||0;
};
__proBSorter._$appendToParent=function(_parent){
this.__parent=E._$getElement(_parent);
if(!this.__parent)return;
this.__body.style.width=this.__parent.clientWidth+'px';
this._$refresh();
};
__proBSorter._$refresh=function(){
p._$$BSorter._$supro._$refresh.call(this);
if(!this.__height&&!!this.__list[0]){
this.__height=this.__list[0].offsetHeight||0;
this.__body.style.height=this.__height+'px';
}
};
__proBSorter.__getSpace=function(){
return __uispace;
};
__proBSorter.__initHolder=function(_top){
var _index=Math.floor(_top/this.__height),
_istop=_top%this.__height<this.__height/2;
if(_index<0){
_index=0;
_istop=true;
}else if(_index>=this.__list.length){
_istop=false;
_index=this.__list.length-1;
}
var _item=this.__list[_index];
if(_item==this.__holder)return;
_item.insertAdjacentElement(_istop?'beforeBegin':'afterEnd',this.__holder);
};
__proBSorter.__onDrag=function(_event){
this.__refreshList();
this.__ddy=V._$pointerY(_event);
this.__noTextSelect(this.__body,true);
this.__holder=V._$getElement(_event,
this.__isElement._$bind(this));
this.__holder.style.visibility='hidden';
var _style=this.__body.style;
this.__top=this.__holder.offsetTop;
_style.top=this.__top+'px';
_style.height=this.__holder.offsetHeight+'px';
this.__parent.appendChild(this.__body);
if(B._$ISOLDIE&&!this.__timer)
this.__timer=window.setInterval(this.__onMoveByTimer._$bind(this),10);
};
__proBSorter.__onMove=function(_event){
if(!this.__holder)return;
var _dy=this.__ddy;
this.__ddy=V._$pointerY(_event);
this.__top+=this.__ddy-_dy;
if(!B._$ISOLDIE)this.__onMoveByTimer();
};
__proBSorter.__onMoveByTimer=function(){
this.__body.style.top=this.__top+'px';
this.__initHolder(this.__top);
};
__proBSorter.__onDrop=function(_event){
if(!this.__holder)return;
if(!!this.__timer)this.__timer=window.clearInterval(this.__timer);
E._$removeElementByEC(this.__body);
this.__noTextSelect(this.__body,false);
this.__holder.style.visibility='visible';
delete this.__holder;
this.__refreshList();
this._$dispatchEvent('onchange');
};
})();
(function(){
var p=P(N.ui),
__proPSorter,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace>{position:absolute;top:0;left:0;}\
               #<uispace> .zhdl{position:absolute;width:10px;background:#0000cd;}\
               #<uispace> .zmvr{display:none;position:absolute;width:20px;height:20px;border:1px solid #aaa;background:#eee;}',__uispace);
p._$$PSorter=C();
__proPSorter=p._$$PSorter._$extend(p._$$Sorter,true);
__proPSorter._$initialize=function(_parent,_options){
this.__selection={length:0};
this._$super(_parent,_options);
};
__proPSorter._$resetOption=function(_options){
p._$$PSorter._$supro._$resetOption.call(this,_options);
_options=_options||O;
this.__box=_options.box;
this.__selected=_options.selected||'';
if(!!_options.ranged&&!this.__ranger)
this.__ranger=p._$$Ranger._$allocate(document.body,
{onrangechange:this.__onRangeChange._$bind(this)});
};
__proPSorter._$appendToParent=function(_parent){
this.__parent=E._$getElement(_parent);
if(!this.__parent)return;
this.__reCalOffset();
this._$refresh();
};
__proPSorter._$refresh=function(){
p._$$PSorter._$supro._$refresh.call(this);
if(!!this.__ranger)this.__ranger._$disable(false);
if(!this.__box&&!!this.__list[0])
this.__box=[this.__list[0].offsetWidth,this.__list[0].offsetHeight];
this.__grid=[Math.ceil(this.__parent.clientHeight/this.__box[1]),
Math.floor(this.__parent.clientWidth/this.__box[0])];
this.__ddas[0].style.height=this.__box[1]+'px';
};
__proPSorter._$destroy=function(){
if(!!this.__ranger)this.__ranger._$disable(true);
};
__proPSorter.__getSpace=function(){
return __uispace;
};
__proPSorter.__getXhtml=function(){
return'<div class="zhdl">&nbsp;</div><div class="zmvr">&nbsp;</div>';
};
__proPSorter.__intXnode=function(){
p._$$PSorter._$supro.__intXnode.call(this);
this.__ddas=E._$getChildElements(this.__body);
V._$addEvent(document,'mousedown',this.__deSelectAll._$bind(this));
};
__proPSorter.__reCalOffset=function(){
this.__offset=[E._$offsetX(this.__parent),
E._$offsetY(this.__parent)];
};
__proPSorter.__getGridByCoord=function(_x,_y){
return[Math.min(Math.floor(_y/this.__box[1]),this.__grid[0]),
Math.min(Math.floor(_x/this.__box[0]),this.__grid[1])];
};
__proPSorter.__isSelected=function(_id){
return!!this.__selection[_id];
};
__proPSorter.__deSelect=function(_id){
if(!this.__selection[_id])return;
E._$delClassName(_id,this.__selected);
delete this.__selection[_id];
this.__selection.length--;
};
__proPSorter.__beSelect=function(_id){
if(this.__selection[_id])return;
E._$addClassName(_id,this.__selected);
this.__selection[_id]=true;
this.__selection.length++;
};
__proPSorter.__deSelectAll=function(){
this.__nid=null;
for(var p in this.__selection)
if(p!='length')this.__deSelect(p);
};
__proPSorter.__noTextSelect=function(_noselected){
if(!!_noselected)
B._$ISIE?E._$noSelect(document.body,false)
:E._$addClassName(document.body,this.__noselect);
else
B._$ISIE?E._$noSelect(document.body,true)
:E._$delClassName(document.body,this.__noselect);
};
__proPSorter.__onDrag=function(_event){
this.__dd=true;
V._$stop(_event);
this.__noTextSelect(true);
var _id=V._$getElement(_event,this.__isElement._$bind(this)).id;
if(!_event.ctrlKey&&!_event.shiftKey&&!this.__isSelected(_id))
this.__deSelectAll();
if(!_event.shiftKey){
this.__nid=_id;
this.__beSelect(_id);
}else{
this.__nid=this.__nid||_id;
for(var i=0,l=this.__list.length,_count=0,_nid,_flg;i<l;i++){
_nid=this.__list[i].id;
_flg=this.__nid==_id&&_nid==_id;
if(_flg)_count++
if(_nid==this.__nid||_nid==_id){_flg=true;_count++;}
_flg||_count==1?this.__beSelect(_nid):this.__deSelect(_nid);
}
}
};
__proPSorter.__onMove=function(_event){
if(!this.__dd||!this.__selection.length)return;
if(!this.__recal){this.__reCalOffset();this.__recal=true;}
this.__needsort=false;
var _dx=V._$pointerX(_event)-this.__offset[0],
_dy=V._$pointerY(_event)-this.__offset[1]
+(this.__sbody?this.__sbody.scrollTop:0),
_grid=this.__getGridByCoord(_dx,_dy);
if(_grid[0]<0||_grid[0]>=this.__grid[0]||
_grid[1]<0||_grid[1]>=this.__grid[1]){
E._$removeElementByEC(this.__body);
return;
}
this.__parent.appendChild(this.__body);
var _style=this.__ddas[1].style;
_style.top=_dy+20+'px';
_style.left=_dx+10+'px';
_style.visibility='visible';
var _style=this.__ddas[0].style;
_style.visibility='hidden';
var _index=_grid[0]*this.__grid[1]+_grid[1],_left,_top;
this.__isright=_dx%this.__box[0]>this.__box[0]/2;
this.__curitem=this.__list[_index];
if(!this.__curitem){
this.__isright=true;
this.__curitem=this.__list[this.__list.length-1];
}
if(this.__isSelected(this.__curitem.id))
return;
_top=this.__curitem.offsetTop;
_left=this.__curitem.offsetLeft;
if(this.__isright)_left+=this.__box[0];
_style.top=_top+'px';
_style.left=_left-5+'px';
_style.visibility='visible';
this.__needsort=true;
};
__proPSorter.__onDrop=function(_event){
if(!this.__dd||!this.__selection.length)return;
this.__dd=false;
this.__recal=false;
this.__noTextSelect(false);
E._$removeElementByEC(this.__body);
if(!this.__needsort)return;
this.__needsort=false;
var _list=[];
for(var i=0,l=this.__list.length;i<l;i++)
if(this.__isSelected(this.__list[i].id))
_list.push(this.__list[i]);
this.__curitem.insertAdjacentElement(
this.__isright?'afterEnd':'beforeBegin',_list[0]);
this.__curitem=_list[0];
for(var i=1,l=_list.length;i<l;i++){
this.__curitem.insertAdjacentElement('afterEnd',_list[i]);
this.__curitem=_list[i];
}
this.__refreshList();
this._$dispatchEvent('onchange');
};
__proPSorter.__onRangeChange=function(_left,_top,_width,_height){
this.__deSelectAll();
_top+=!this.__sbody?0:this.__sbody.scrollTop;
_top-=this.__offset[1];
_left-=this.__offset[0];
var _beg=this.__getGridByCoord(_left,_top),
_end=this.__getGridByCoord(_left+_width,_top+_height);
for(var i=Math.max(0,_beg[0]),_number;i<=_end[0]&&i<this.__grid[0];i++){
_number=i*this.__grid[1];
for(var j=Math.max(0,_beg[1]),_item;j<=_end[1]&&j<this.__grid[1];j++){
_item=this.__list[_number+j];
if(!_item)break;
this.__beSelect(_item.id);
}
}
};
})();
(function(){
var p=P(N.ui),
__proLayer,
__proLayerWrapper,
__cssplit=/\s+/i;
p._$$Layer=C();
__proLayer=p._$$Layer._$extend(p._$$UIAbstract,true);
__proLayer._$initialize=function(_parent,_options){
this.__iframe=document.cloneElement('iframe',this.__getSpace()+'-hack');
this._$super(_parent,_options);
};
__proLayer._$destroy=function(){
E._$delClassName(this.__iframe,this.__frmcls);
E._$removeElementByEC(this.__iframe);
delete this.__frmcls;
p._$$Layer._$supro._$destroy.call(this);
this._$setContent('');
this.__onDestroy();
};
__proLayer._$resetOption=function(_options){
_options=_options||O;
p._$$Layer._$supro._$resetOption.call(this,_options);
var _ntmp=this.__class.split(__cssplit)||[];
this.__frmcls=(_ntmp[_ntmp.length-1]||'')+'-frm';
E._$addClassName(this.__iframe,this.__frmcls);
this._$addEvent('onshow',_options.onshow||F);
this._$addEvent('onclose',_options.onclose||F);
this._$addEvent('onready',_options.onready||F);
this._$addEvent('onbeforeshow',_options.onbeforeshow||F);
this._$addEvent('onbeforeclose',_options.onbeforeclose||F);
};
__proLayer._$setContent=function(_content){
_content=_content||'';
typeof(_content)=='string'
?this.__container.innerHTML=_content
:this.__container.appendChild(_content);
this._$dispatchEvent('onready',this.__container);
};
__proLayer._$setPosition=function(_left,_top,_isdelta){
if(_left==null||_top==null)return;
var _style=this.__body.style;
_top+=_isdelta?(parseInt(_style.top)||0):0;
_left+=_isdelta?(parseInt(_style.left)||0):0;
_style.top=_top+'px';
_style.left=_left+'px';
this.__setHackFramePosition(_left,_top);
};
__proLayer._$appendToParent=function(_parent){
this.__parent=E._$getElement(_parent);
};
__proLayer._$show=function(){
this._$dispatchEvent('onbeforeshow');
this.__revertBody();
this.__setHackIFrame();
this.__onShowLayer();
this._$dispatchEvent('onshow');
};
__proLayer._$close=function(_event){
this._$dispatchEvent('onbeforeclose');
this.__recycleBody();
E._$removeElementByEC(this.__iframe);
this.__onCloseLayer(_event);
this._$dispatchEvent('onclose');
};
__proLayer.__setHackIFrame=function(){
if(!!this.__noframe)return;
var _style=this.__iframe.style;
_style.width=this.__body.offsetWidth+'px';
_style.height=this.__body.offsetHeight+'px';
this.__body.insertAdjacentElement('beforeBegin',this.__iframe);
};
__proLayer.__setHackFramePosition=function(_left,_top){
if(!!this.__noframe)return;
var _style=this.__iframe.style;
_style.top=_top+'px';
_style.left=_left+'px';
};
__proLayer.__onDestroy=F;
__proLayer.__onShowLayer=F;
__proLayer.__onCloseLayer=F;
p._$$LayerWrapper=C();
__proLayerWrapper=p._$$LayerWrapper._$extend(P(N.ui)._$$UIAbstract,true);
p._$$LayerWrapper._$show=function(_options){
var _parent=!!_options&&_options.parent||null;
!!this.__instance
?this.__instance._$reset(_parent,_options)
:this.__instance=new this(_parent,_options);
this.__instance._$show();
};
p._$$LayerWrapper._$hide=function(){
if(!this.__instance)return;
this.__instance._$hide();
};
__proLayerWrapper._$initialize=function(_parent,_options){
this.__layer=this.__getLayerInstance(_options);
this._$super(_parent,_options);
E._$delClassName(this.__body,this.__getSpace());
this.__layer._$setContent(this.__body);
};
__proLayerWrapper._$appendToParent=function(_parent){
if(!this.__layer)return;
_parent=E._$getElement(_parent);
if(!_parent)return;
this.__layer._$appendToParent(_parent);
};
__proLayerWrapper._$show=function(){
if(!this.__layer)return;
this.__layer._$show();
};
__proLayerWrapper._$hide=function(){
if(!this.__layer)return;
this.__layer._$close();
};
__proLayerWrapper.__getLayerInstance=function(_options){
_options['class']=(_options['class']||'')
+' '+(this.__getSpace()||'');
delete _options.content;
};
__proLayerWrapper._$resetOption=F;
})();
(function(){
var p=P(N.ui),
__proSDWindow,
__proWindow,
__proWindowWrapper,
__uispace='ui-'+U._$randNumberString();
var __noclose='js-zncls-102';
p._$pushStyle('#<uispace>-hack{position:absolute;z-index:99;}\
               #<uispace>-cover{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;}\
               #<uispace>{position:absolute;top:0;left:0;z-index:100;text-align:center;}\
      #<uispace> .zlay{text-align:left;background-color:rgba(80,80,80,0.2);filter:alpha(opacity=50);zoom:1;}\
      #<uispace> .zwrp{position:relative;zoom:1;left:-3px;top:-3px;border-width:1px;border-style:solid;font-size:12px;}\
               #<uispace> .ztbr{background:url(http://r.ph.126.net/image/lay_ttl.gif) repeat-x;}\
      #<uispace> .zcls{position:absolute;top:6px;right:6px;width:15px;height:15px;background:url(http://r.ph.126.net/photo/image/icn.png?20110301) 0 -2223px no-repeat;cursor:pointer;_line-height:1;text-indent:-9999px;}\
               #<uispace> .zmov{cursor:move;}\
               #<uispace> .zttl{height:32px;line-height:32px;padding-left:10px;font-size:14px;font-weight:bold;}\
               #<uispace> .zcnt{padding:20px;min-height:60px;_height:60px;font-size:12px;}\
               #<uispace> .zext{display:none;}\
               #<uispace>.js-zncls-102 .zcls{display:none;}',__uispace);
p._$$SDWindow=C();
__proSDWindow=p._$$SDWindow._$extend(p._$$Layer,true);
__proSDWindow._$resetOption=function(_options){
_options=_options||O;
p._$$SDWindow._$supro._$resetOption.call(this,_options);
this.__noauto=!!_options.nocenter;
this.__noflow=!!_options.nooverflow;
this.__noframe=(B._$ISOLDIE&&!!_options.nohack)||
(!B._$ISOLDIE&&!_options.iframe);
!_options.noclose?E._$delClassName(this.__body,__noclose)
:E._$addClassName(this.__body,__noclose);
this._$setTitle(_options.title);
this._$setContent(_options.content);
};
__proSDWindow._$setTitle=function(_text,_ishtml){
this.__ttlbar[_ishtml?'innerHTML':'innerText']=_text||'';
};
__proSDWindow._$disable=function(_disabled){
if(!this.__cover)
this.__cover=document
.cloneElement('div',__uispace+'-cover');
if(!_disabled){
E._$removeElementByEC(this.__cover);
return;
}
if(B._$ISOLDIE){
var _style=this.__cover.style;
_style.width=this.__body.offsetWidth+'px';
_style.height=this.__body.offsetHeight+'px';
}
this.__body.appendChild(this.__cover);
};
__proSDWindow._$resize=function(_width,_isdelta){
_width+=!_isdelta?0:this.__body.offsetWidth;
if(!this.__noframe)
this.__iframe.style.width=_width+'px';
this.__body.style.width=_width+'px';
};
__proSDWindow._$refresh=function(_noposition){
E._$removeElementByEC(this.__iframe);
if(!_noposition)this.__onShowLayer();
this.__setHackIFrame();
};
__proSDWindow.__getSpace=function(){
return __uispace;
};
__proSDWindow.__getXhtml=function(){
return'\
   <div class="zlay bgc4">\
    <div class="zwrp bdc6 bgc99">\
     <div class="zcls zflg" title="关闭">&#215;</div>\
              <div class="ztbr noselect"><div class="zttl thide fc1 zflg">&nbsp;</div></div>\
              <div class="zcnt fc2 zflg"></div>\
              <div class="zext zext0">&nbsp;</div><div class="zext zext1">&nbsp;</div>\
              <div class="zext zext2">&nbsp;</div><div class="zext zext3">&nbsp;</div>\
              <div class="zext zext4">&nbsp;</div><div class="zext zext5">&nbsp;</div>\
    </div>\
   </div>';
};
__proSDWindow.__intXnode=function(){
var _ntmp=E._$getElementsByClassName(this.__body,'zflg');
this.__ttlbar=_ntmp[1];
this.__container=_ntmp[2];
E._$noSelect(_ntmp[1].parentNode);
E._$noSelect(_ntmp[1].parentNode);
V._$addEvent(_ntmp[0],'mousedown',this._$close._$bind(this));
};
__proSDWindow.__onShowLayer=function(){
if(!!this.__noauto)return;
var _body0=document.documentElement||document.body,
_body1=document.body||document.documentElement;
this._$setPosition((_body0.scrollLeft||_body1.scrollLeft)+
Math.max(0,_body0.clientWidth-this.__body.clientWidth)/2,
(_body0.scrollTop||_body1.scrollTop)+
Math.max(0,_body0.clientHeight-this.__body.clientHeight)/2);
};
__proSDWindow.__onCloseLayer=V._$stop._$bind(V);
p._$$Window=C();
__proWindow=p._$$Window._$extend(p._$$SDWindow,true);
__proWindow._$initialize=function(_parent,_options){
this._$super(_parent,_options);
this.__dragdrop=new(P(N.ut)._$$DragDrop)
(this.__ttlbar.parentNode,{
ondrag:this.__onDrag._$bind(this),
onmove:this.__onMove._$bind(this)});
};
__proWindow.__intXnode=function(){
p._$$Window._$supro.__intXnode.call(this);
E._$addClassName(this.__ttlbar.parentNode,'zmov');
};
__proWindow.__onShowLayer=function(){
if(!!this.__noauto){
this.__body.style.top='';
this.__body.style.left='';
this._$setPosition(parseInt(E._$getStyle(this.__body,'left'))||0,
parseInt(E._$getStyle(this.__body,'top'))||0);
return;
}
p._$$Window._$supro.__onShowLayer.call(this);
};
__proWindow.__onDrag=function(){
if(!this.__noflow)return;
var _body=document.documentElement;
this.__maxwidth=_body.scrollWidth-this.__body.offsetWidth;
this.__maxheight=_body.scrollHeight-this.__body.offsetHeight;
};
__proWindow.__onMove=function(_dx,_dy){
if(!this.__noflow){
this._$setPosition(_dx,_dy,true);return;
}
var _style=this.__body.style;
this._$setPosition(Math.max(0,Math.min(this.__maxwidth,(parseInt(_style.left)||0)+_dx)),
Math.max(0,Math.min(this.__maxheight,(parseInt(_style.top)||0)+_dy)));
};
p._$$WindowWrapper=C();
__proWindowWrapper=p._$$WindowWrapper._$extend(p._$$LayerWrapper,true);
__proWindowWrapper._$movable=function(_movable){
if(!this.__wopt.nomove==!!_movable)return;
this.__wopt.nomove=!_movable;
var _parent=this.__layer._$getBody().parentNode;
E._$removeElementByEC(this.__body);
this.__layer.constructor._$recycle(this.__layer);
this.__layer=this.__wopt.nomove
?p._$$SDWindow._$allocate(_parent,this.__wopt)
:p._$$Window._$allocate(_parent,this.__wopt);
this.__layer._$setContent(this.__body);
this._$show();
};
__proWindowWrapper.__getLayerInstance=function(_options){
this.__wopt=_options||{};
p._$$WindowWrapper._$supro
.__getLayerInstance.call(this,this.__wopt);
if(!this.__wopt.nocover){
this.__wopt.onclose=E._$hideCover;
this.__wopt.onbeforeshow=E._$showCover;
}
return!this.__wopt.nomove
?p._$$Window._$allocate(null,this.__wopt)
:p._$$SDWindow._$allocate(null,this.__wopt);
};
})();
(function(){
var p=P(N.ui),
__proCard,
__proCardWrapper,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace>-hack{position:absolute;z-index:99;}\
               #<uispace>{position:absolute;z-index:100;border:1px solid #97abc9;background-color:#fff;}',__uispace);
p._$$Card=C();
__proCard=p._$$Card._$extend(p._$$Layer,true);
__proCard._$resetOption=function(_options){
_options=_options||O;
p._$$Card._$supro._$resetOption.call(this,_options);
this.__noframe=!B._$ISOLDIE||!_options.hack;
this._$setContent(_options.content);
};
__proCard.__getSpace=function(){
return __uispace;
};
__proCard.__intXnode=function(){
this.__container=this.__body;
V._$addEvent(this.__body,'click',V._$stopBubble._$bind(V));
V._$addEvent(document,'click',this._$close._$bind(this));
};
__proCard.__onShowLayer=function(){
if(!!this.__noframe)return;
this.__setHackFramePosition(
parseInt(E._$getStyle(this.__body,'left'))||0,
parseInt(E._$getStyle(this.__body,'top'))||0);
};
p._$$CardWrapper=C();
__proCardWrapper=p._$$CardWrapper._$extend(p._$$LayerWrapper,true);
__proCardWrapper.__getLayerInstance=function(_options){
_options=_options||{};
_options.hackhover=true;
p._$$CardWrapper._$supro
.__getLayerInstance.call(this,_options);
return p._$$Card._$allocate(null,_options);
};
})();
(function(){
var p=P(N.ui),
__proPortrait,
__uispace='ui-'+U._$randNumberString(),
__cfg_url=N.rs+'portrait/face/',
__cfg_dab='js-zdsab-307',
__cfg_pgr='js-page-',
__cfg_nmb=60,
__cfg_dat=['微笑','开怀笑','哭泣','失望','困了','好好笑','啵','电到了','汗','流口水了',
'真困啊','我吐','眨眼','？？？','嘘','砸死你','不说','坏','色迷迷','教训',
'可爱','YEAH','崩溃','惊讶','鄙视','开心','仰慕你','晕','挖鼻孔','撒娇',
'鼓掌','害羞','老大','欠揍','吐舌笑脸','飞吻','工作忙','大哭','偷偷笑','送花给你',
'来，亲一个','拍桌子','拜拜','得意的笑','生气','怕怕','尴尬','难过','叹气','我是女生',
'玫瑰','好爱你','心碎了','亲亲','NO','YES','握个手','到点了','音乐','我是男生',
'带血的刀','炸弹','有了','好晚了','吸血蝙蝠','便便','干一杯','抽烟','打电话','家',
'车子','礼物','金钱','太阳','下雨','猪猪','小猫','小狗','骨头','喝水',
'汉堡','包子','西瓜','约会','CALL我'];
var _arr=[],_col=10,_row=6;
for(var i=0;i<_row;i++)
for(var j=0;j<_col;_arr.push('#<uispace> .zbox .a'+(i*_col+j)+'{background-position:-'+(j*30)+'px -'+(i*30)+'px;}'),j++);
p._$pushStyle('#<uispace>{width:310px;padding:5px;background:#e5e5e1;border:1px solid #888;}\
               #<uispace> .zbox{height:190px;}\
               #<uispace> .zbox .zitm{float:left;width:30px;height:30px;line-height:30px;margin:-1px 0 0 -1px;overflow:hidden;text-indent:200px;border:1px solid #e5e5e1;cursor:pointer;background-repeat:no-repeat;}\
      #<uispace> .zbox .zitm:hover,#<uispace> .zbox .zitm.js-zhvr-110{position:relative;border-color:#000;}'+_arr.join('')+'\
               #<uispace> .zbox.js-page-0 .zitm{background-image:url('+__cfg_url+'face-0.png);}\
               #<uispace> .zbox.js-page-1 .zitm{background-image:url('+__cfg_url+'face-1.png);}\
               #<uispace> .zpgr{line-height:20px;padding:3px;font-size:12px;text-align:right;}\
               #<uispace> .zpgr .ztag{cursor:pointer;}\
               #<uispace> .zpgr .zsep{margin:0 3px;}\
               #<uispace> .zpgr .js-zdsab-307{color:#777;}\
      #<uispace> .zprv{display:none;position:absolute;width:60px;height:60px;top:5px;left:5px;background:#fff no-repeat center center;border:1px solid #888;}',__uispace);
p._$$Portrait=C();
__proPortrait=p._$$Portrait._$extend(p._$$CardWrapper,true);
p._$$Portrait._$bind=function(_parent,_options){
V._$addEvent(_parent,'click',function(_event){
V._$stop(_event);
p._$$Portrait._$show(_options);
});
};
__proPortrait._$initialize=function(_parent,_options){
this.__rows=6;
this.__cols=10;
this.__iopt={onclick:this.__onSelect._$bind(this),
onhover:this.__onPreview._$bind(this),
onblur:this.__onOutPreview._$bind(this)};
this._$super(_parent,_options);
};
__proPortrait._$resetOption=function(_options){
_options=_options||O;
this._$addEvent('onselect',_options.onselect||F);
if(!!_options.top||!!_options.left)
this.__layer._$setPosition(_options.left,_options.top);
p._$$Portrait._$supro._$resetOption.call(this,_options);
};
__proPortrait.__getSpace=function(){
return __uispace;
};
__proPortrait.__getXhtml=function(){
return'<div class="zbox clearfix"></div>\
            <div class="zpgr">\
              <span class="ztag">上一页</span>\
              <span class="zsep">|</span>\
              <span class="ztag">下一页</span>\
            </div>\
   <div class="zprv">&nbsp;</div>';
};
__proPortrait.__intXnode=function(){
var _ntmp=E._$getChildElements(this.__body);
this.__fcase=_ntmp[0];
this.__nprev=_ntmp[2];
this.__pcase=E._$getChildElements(_ntmp[1],'ztag');
for(var i=0,l=this.__pcase.length;
i<l;V._$addEvent(this.__pcase[i],
'click',this.__onPage._$bind(this,i)),i++);
this.__onPage(0);
};
__proPortrait.__parseFaceUrl=function(_index){
return __cfg_url+'preview/face'+(this.__page*__cfg_nmb+_index)+'.gif';
};
__proPortrait.__disableButton=function(_button,_disabled){
_disabled?E._$addClassName(_button,__cfg_dab)
:E._$delClassName(_button,__cfg_dab);
};
__proPortrait.__onPage=function(_number){
if(this.__page==_number)return;
E._$replaceClassName(this.__fcase,
__cfg_pgr+(this.__page||0),__cfg_pgr+_number);
this.__page=_number;
this.__items=p._$$FIcon._$recycle(this.__items);
this.__iopt._start_=_number*__cfg_nmb;
this.__iopt._end_=this.__iopt._start_+__cfg_nmb;
this.__items=p._$$FIcon._$allocate(__cfg_dat,this.__fcase,this.__iopt);
};
__proPortrait.__onPreview=function(_index){
var _style=this.__nprev.style,
_isleft=(_index%this.__cols)>
Math.floor(this.__cols/2);
_style.left=_isleft?'5px':'auto';
_style.right=_isleft?'auto':'5px';
_style.display='block';
_style.backgroundImage='url('+this.__parseFaceUrl(_index)+')';
};
__proPortrait.__onOutPreview=function(){
this.__nprev.style.display='none';
};
__proPortrait.__onSelect=function(_index){
this._$hide();
this._$dispatchEvent('onselect',this.__parseFaceUrl(_index));
};
})();
(function(){
var p=P(N.ui),
__proFIcon;
p._$$FIcon=C();
__proFIcon=p._$$FIcon._$extend(P(N.ut)._$$Item,true);
__proFIcon._$initialize=function(){
this._$super();
this.__body=document.cloneElement('div','zitm');
E._$hoverElement(this.__body,'js-zhvr-100');
V._$addEvent(this.__body,'click',this.__onClick._$bind(this));
V._$addEvent(this.__body,'mouseout',this.__onMouseOut._$bind(this));
V._$addEvent(this.__body,'mouseover',this.__onMouseOver._$bind(this));
};
__proFIcon._$reset=function(_options){
_options=_options||O;
this.__index=_options._index_||0;
E._$addClassName(this.__body,'a'+this.__index);
this._$addEvent('onblur',_options.onblur||F);
this._$addEvent('onclick',_options.onclick||F);
this._$addEvent('onhover',_options.onhover||F);
};
__proFIcon._$destroy=function(){
E._$delClassName(this.__body,'a'+this.__index);
p._$$FIcon._$supro._$destroy.call(this);
};
__proFIcon._$setData=function(_text){
this.__body.title=_text||'';
this.__body.innerText=_text||'';
};
__proFIcon.__onClick=function(){
this._$dispatchEvent('onclick',this.__index||0);
};
__proFIcon.__onMouseOver=function(){
this._$dispatchEvent('onhover',this.__index||0);
};
__proFIcon.__onMouseOut=function(){
this._$dispatchEvent('onblur',this.__index||0);
};
})();
(function(){
var p=P(N.ui),
__proUIUtil,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace> .zlay{position:fixed;_position:absolute;top:42%;left:42%;margin:0 auto;width:auto;min-width:260px;_width:260px;background-color:rgba(80,80,80,0.2);z-index:10000;}\
      #<uispace> .zwrp{position:relative;*min-width:260px;_width:260px;zoom:1;left:-3px;top:-3px;border-width:1px;border-style:solid;font-size:12px;}\
               #<uispace> .ztbr{background:url(http://r.ph.126.net/image/lay_ttl.gif) repeat-x;}\
      #<uispace> .zcls{position:absolute;top:6px;right:6px;width:15px;height:15px;background:url(http://r.ph.126.net/photo/image/icn.png?20110301) 0 -2223px no-repeat;_line-height:1;text-indent:-9999px;}\
               #<uispace> .zttl{height:32px;line-height:32px;padding-left:10px;font-size:14px;font-weight:bold;}\
               #<uispace> .zcnt{padding:20px;min-height:20px;_height:20px;font-size:12px;text-align:center;}\
               #<uispace> .zext{display:none;}\
               #<uispace>.js-zncls-102 .zcls{display:none;}\
      #<uispace> .zcvr{display:none;position:fixed;_position:absolute;z-index:80;}\
               #<uispace> .zcvr{top:0;left:0;width:100%;height:100%;background:url('+N.rc.r+'empty.png);}',__uispace);
p._$$UIUtil=C();
__proUIUtil=p._$$UIUtil._$extend(p._$$UIAbstract,true);
__proUIUtil._$showHintWithCover=function(_message){
this._$showCover();
this._$showHintWithoutCover(_message);
};
__proUIUtil._$showHintWithoutCover=function(_message){
this.__hint.innerHTML=_message||' ';
if(B._$ISOLDIE){
var _x=U.dom._$clientWidth()-260,
_y=U.dom._$clientHeight()-94,
_top=U.dom._$scrollTop(),
_mLeft=_x>0?_x/2+'px':0,
_mTop=_y>0?_y/2+_top+'px':_top+'px';
U.dom._$setStyle(this.__hintCon,'left:'+_mLeft+';top:'+_mTop);
}
this.__hintCon.style.display='block';
};
__proUIUtil._$hideHint=function(){
this._$hideCover();
this.__hintCon.style.display='none';
};
__proUIUtil._$showCover=function(){
if(B._$ISOLDIE){
var _body=document.documentElement||document.body;
this.__cover.style.width=_body.scrollWidth+'px';
this.__cover.style.height=_body.scrollHeight+'px';
}
this.__cover.style.display='block';
};
__proUIUtil._$hideCover=function(){
this.__cover.style.display='none';
};
__proUIUtil.__getSpace=function(){
return __uispace;
};
__proUIUtil.__getXhtml=function(){
return'\
   <div class="zcvr zcls zflg">&nbsp;</div>\
   <div class="zlay bgc4 zflg" style="display:none;">\
    <div class="zwrp bdc6 bgc99">\
     <div class="zcls zflg" title="关闭">&#215;</div>\
              <div class="ztbr noselect"><div class="zttl thide fc1">信息提示</div></div>\
              <div class="zcnt fc2 zflg"></div>\
              <div class="zext zext0">&nbsp;</div><div class="zext zext1">&nbsp;</div>\
              <div class="zext zext2">&nbsp;</div><div class="zext zext3">&nbsp;</div>\
              <div class="zext zext4">&nbsp;</div><div class="zext zext5">&nbsp;</div>\
    </div>\
   </div>';
};
__proUIUtil.__intXnode=function(){
var _ntmp=E._$getElementsByClassName(this.__body,'zflg');
this.__cover=_ntmp[0];
this.__hintCon=_ntmp[1];
this.__close=_ntmp[2];
this.__hint=_ntmp[3];
V._$addEvent(this.__close,'click',__hideHint);
};
var __timer,
__instance,
__reference=0;
var __getInstance=function(){
if(!__instance)
__instance=p._$$UIUtil._$allocate(document.body,{'class':'uiutil'});
return __instance;
};
var __hideHint=function(){
__timer=window.clearTimeout(__timer);
E._$hideHint();
};
E._$showHint=function(_message,_nocover,_notimer){
if(!!_notimer){
__timer=window.clearTimeout(__timer);
__reference=0;
}else if(!!__timer){
__reference++;
}else{
__timer=window.setTimeout(__hideHint,1000);
}
var _instance=__getInstance();
!_nocover?_instance._$showHintWithCover(_message)
:_instance._$showHintWithoutCover(_message);
};
E._$showCover=function(){
__getInstance()._$showCover();
};
E._$hideHint=function(){
if(!!__timer)return;
__getInstance()._$hideHint();
};
E._$hideCover=function(){
__getInstance()._$hideCover();
};
})();
P('J');
(function(){
var __cache={},
__timeout=60000;
var __clear=function(_url){
var _req=__cache[_url];
if(!_req)return;
delete __cache[_url];
delete _req.cb;
var _rpc=_req.rpc;
delete _req.rpc;
_req.timer=window.clearTimeout(_req.timer);
V._$clearEvent(_rpc);
E._$removeElement(_rpc);
};
var __callback=function(_url,_type){
if(!__cache[_url])return;
var _callback=__cache[_url].cb;
__clear(_url);
if(!_callback||!_callback.length)return;
for(var i=0,l=_callback.length;i<l;i++)
try{(_callback[i][_type]||F)(arguments[2]);}catch(e){}
};
var __onLoad=function(_url){
__callback(_url,'onload');
};
var __onError=function(_url,_message){
__callback(_url,'onerror',_message||'脚本加载出错！');
};
J._$loadStyle=function(_url){
if(!_url)return;
var _link=document.cloneElement('link');
document.head.appendChild(_link);
_link.href=_url;return _link;
};
J._$loadScript=function(_url,_onload,_onerror){
return J._$loadScriptWithOpt(_url,{onload:_onload,onerror:_onerror});
};
J._$loadScriptWithOpt=function(_url,_options){
if(!_url)return;
_options=_options||O;
var _pool=__cache[_url],_first=!_pool,_script,
_callback={onload:_options.onload||F,
onerror:_options.onerror||_options.onload||F};
if(_first){
_script=document.cloneElement('script');
_pool={cb:[_callback],rpc:_script};
__cache[_url]=_pool;
if(!!_options.charset)_script.charset=_options.charset;
V._$addEvent(_script,'load',__onLoad._$bind(window,_url));
V._$addEvent(_script,'error',__onError._$bind(window,_url,'无法加载指定的脚本文件！'));
}else{
_script=_pool.rpc;
_pool.cb.unshift(_callback);
_pool.timer=window.clearTimeout(_pool.timer);
}
if(_options.timeout!=0)
_pool.timer=window.setTimeout(__onError._$bind(
window,_url,'请求超时！'),_options.timeout||__timeout);
if(_first){
_script.src=_url;
document.head.appendChild(_script);
}
return _script;
};
})();
P('J');
(function(){
var __msxml,
__cache={},
__local=[location.host,location.host,document.domain],
__domain=/^(?:[\w]+\:\/\/)?(.*?\.([\w]+\.[\w]+)(?:\:[\d]+)?)(?:\/|$)/i;
var __parseDomain=function(_url){
if(/^\s*\//.test(_url))return __local;
var _arr=_url.match(__domain);
return!_arr||_arr.length<3?[]:_arr;
};
var __newXDR=function(_window){
try{
if(!_window)return null;
if(!!_window.gx)return _window.gx();
if(!!_window.XMLHttpRequest)
return new _window.XMLHttpRequest();
if(!!__msxml)
return new _window.ActiveXObject(__msxml);
var _msxml=['Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.3.0',
'Msxml2.XMLHTTP.4.0','Msxml2.XMLHTTP.5.0',
'MSXML2.XMLHTTP','Microsoft.XMLHTTP'];
for(var i=0,l=_msxml.length,v;i<l;i++){
try{v=new _window.ActiveXObject(_msxml[i]);
__msxml=_msxml[i];return v;}catch(e){}}
return null;
}catch(e){return null;}
};
var __registXDomain=function(_domain){
var _cache=__cache[_domain];
if(!_cache)return;
try{_cache.w=E._$getElement(_domain).contentWindow;}catch(e){}
};
J.a=__registXDomain;
if(document.readyState==null)
V._$addEvent(document,'DOMContentLoaded',
function(){try{document.readyState='complete';}catch(e){}});
J._$allocateXDR=function(_domain){
var _arr=__parseDomain(_domain);
_domain=_arr[1]||location.host;
var _xdr=__cache[_domain];
if(!_xdr){
this._$registXDomain(_domain,true);
return null;
}
return _xdr.p.shift()||__newXDR(_xdr.w);
};
J._$recycleXDR=function(_domain,_xdr){
if(!_xdr)return;
delete _xdr.onreadystatechange;
_xdr.abort();
};
J._$getXWindow=function(_domain){
var _arr=__parseDomain(_domain);
_domain=_arr[1]||location.host;
var _xdr=__cache[_domain];
return _xdr&&_xdr.w||null;
};
J._$isXDomain=function(_domain){
var _arr=__parseDomain(_domain);
return!!_arr[1]&&_arr[1]!=location.host;
};
J._$registXDomain=function(_domain,_force){
if(_domain==location.host){
__cache[_domain]={w:window,p:[]};return;
}
var _arr=__parseDomain(_domain);
if(_arr[2]!=document.domain)return;
if(!_arr[1]||!!__cache[_arr[1]])return;
var _url=_domain.toLowerCase().indexOf('http://')>=0
?_domain:('http://'+_arr[1]+'/crossdomain.html?t=20100205');
__cache[_arr[1]]={w:null,p:[]};
if(document.readyState!='complete'&&!_force){
document.write('<iframe width="0" height="0" src="'+_url+'" id="'+_arr[1]+
'" name="'+_arr[1]+'" onload="J.a(\''+_arr[1]+'\');" style="display:none;"></iframe>');
return;
}
var _iframe=document.cloneElement('iframe');
_iframe.width=0;
_iframe.height=0;
_iframe.id=_arr[1];
_iframe.style.display='none';
V._$addEvent(_iframe,'load',__registXDomain._$bind(null,_arr[1]));
document.body.appendChild(_iframe);_iframe.src=_url;
};
J._$registXDomain(location.host);
if(!!N.xd&&N.xd.length>0){
for(var i=0,l=N.xd.length;i<l;J._$registXDomain(N.xd[i]),i++);
delete N.xd;
}
V._$addEvent(document,'keypress',function(_event){_event.keyCode==27&&V._$stop(_event);});
})();
(function(){
var p=P(N.ut),
__proXDR,
__pool=[],
__einterval=100,
__tinterval=40000;
p._$$XDR=C();
__proXDR=p._$$XDR._$extend(p._$$Event);
p._$$XDR._$allocate=function(_options){
var _xdr=__pool.shift()||new this();
_xdr._$reset(_options);return _xdr;
};
p._$$XDR._$recycle=function(_xdr){
if((_xdr instanceof this)&&_xdr._$used()){
_xdr._$destroy();
__pool.push(_xdr);
}
};
__proXDR._$used=function(){
return this.__used;
};
__proXDR._$reset=function(_options){
this.__used=true;
_options=_options||O;
this.__rty=__einterval;
this.__url=_options.url||'';
this.__async=!_options.sync;
this.__rtype=_options.rtype||'text';
this.__ctype=_options.ctype||'text/plain';
this.__method=_options.method||'POST';
this.__headers=_options.headers||null;
this.__interval=_options.interval||__tinterval;
this.__notimeout=_options.notimeout||false;
this._$addEvent('onload',_options.onload||F);
this._$addEvent('onerror',_options.onerror||F);
this._$addEvent('ontimeout',_options.ontimeout||_options.onerror||F);
};
__proXDR._$send=function(_data){
if(!this.__url){
this._$dispatchEvent('onerror','请提供请求的地址!');return;
}
if(!this.__notimeout&&!this.__rtimer)
this.__timer=window.setTimeout(
this.__onTimeout._$bind(this),this.__interval);
this.__xdr=J._$allocateXDR(this.__url);
if(!this.__xdr){
this.__rtimer=window.setTimeout(
this._$send._$bind(this,_data),this.__rty);
this.__rty+=200;
return;
}
if(B._$ISOP&&J._$isXDomain(this.__url))
this.__sendInOP(_data);
else if(B._$ISIE)
this.__sendInIE(_data);
else
this.__send(_data);
};
__proXDR._$destroy=function(){
this.__used=false;
this._$delEvent('onload');
this._$delEvent('onerror');
this._$delEvent('ontimeout');
J._$recycleXDR(this.__url,this.__xdr);delete this.__xdr;
if(!!this.__timer)this.__timer=window.clearTimeout(this.__timer);
if(!!this.__rtimer)this.__rtimer=window.clearTimeout(this.__rtimer);
};
__proXDR.__send=function(_data){
try{
this.__xdr.open(this.__method,this.__url,this.__async);
this.__xdr.setRequestHeader('Content-Type',this.__ctype);
if(!!this.__headers)
for(var x in this.__headers){
if(x=='limit')continue;
this.__xdr.setRequestHeader(x,this.__headers[x]);
}
if(this.__async)
this.__xdr.onreadystatechange=this.__onStateChange._$bind(this);
this.__xdr.send(_data);
if(!this.__async)this.__onStateChange();
}catch(e){
this._$dispatchEvent('onerror','无法发送请求,'+e.message);
}
};
__proXDR.__sendInIE=function(_data){
!this.__async?this.__send(_data)
:window.setTimeout(this.__send._$bind(this,_data),100);
};
__proXDR.__sendInOP=function(_data){
try{
var _window=J._$getXWindow(this.__url);
if(!_window.b){
_window.b=_window.document.createElement('input');
_window.b.type='button';
_window.document.body.appendChild(_window.b);
}
_window.b.onclick=this.__send._$bind(this,_data);
_window.b.click();
}catch(e){}
};
__proXDR.__getResponseBody=function(){
switch(this.__rtype.toLowerCase()){
case'xml':return this.__xdr.responseXML;
case'text':return this.__xdr.responseText;
case'json':try{return eval('('+this.__xdr.responseText+')');}catch(e){};
}
return null;
};
__proXDR.__onStateChange=function(){
try{
if(!this.__xdr||this.__xdr.readyState!=4)return;
if(!!this.__timer)
this.__timer=window.clearTimeout(this.__timer);
if(this.__xdr.status!=200){
this._$dispatchEvent('onerror','服务器返回异常['+this.__xdr.status+']!');return;
}
this._$dispatchEvent('onload',this.__getResponseBody());
}catch(e){
this._$dispatchEvent('onerror','网络异常，请检查网络状况!');
}
};
__proXDR.__onTimeout=function(){
if(!!this.__rtimer)
this.__rtimer=window.clearTimeout(this.__rtimer);
if(!this.__timer)return;
this.__timer=window.clearTimeout(this.__timer);
this._$dispatchEvent('ontimeout','请求超时！');
};
})();
(function(){
var __cache={};
var __serialize=function(_data){
if(!_data)return null;
var _arr=[];
for(var p in _data)
_arr.push(encodeURIComponent(p)+'='+
encodeURIComponent(_data[p]));
return _arr.join('&');
};
var __destroy=function(_sn){
var _object=__cache[_sn];
if(!_object)return;
P(N.ut)._$$XDR
._$recycle(_object.req);
delete _object.req;
delete _object.onload;
delete _object.onerror;
delete __cache[_sn];
};
var __onLoad=function(_sn,_data){
var _object=__cache[_sn];
if(!_object)return;
try{_object.onload(_data);}catch(e){}
__destroy(_sn);
};
var __onError=function(_sn,_message){
var _object=__cache[_sn];
if(!_object)return;
try{_object.onerror(_message);}catch(e){}
__destroy(_sn);
};
J._$request=function(_path,_options){
if(!_path)return;
_options=_options||O;
var _data=__serialize(_options.data),
_get=(_options.method||'').toUpperCase()=='GET';
if(_get&&_data)_path+=(_path.indexOf('?')<0?'?':'&')+_data;
var _sn=U._$randNumberString(),
_object={url:_path,
sync:!!_options.sync,
rtype:_options.type,
ctype:'application/x-www-form-urlencoded',
method:_options.method,
header:_options.header,
interval:_options.timeout,
notimeout:_options.timeout==0,
onload:__onLoad._$bind(null,_sn),
onerror:__onError._$bind(null,_sn)};
__cache[_sn]={req:P(N.ut)._$$XDR._$allocate(_object),
onload:_options.onload||F,
onerror:_options.onerror||_options.onload||F};
__cache[_sn].req._$send(_get?null:_data);return _sn;
};
})();
P('J');
(function(){
var __logger=F,
__filter=F,
__timeout=0,
__batchid=0,
__headers=null;
J._$registDWRLogger=function(_logger){
__logger=_logger||F;
};
J._$registDWRErrorFilter=function(_filter){
__filter=_filter||F;
};
J._$setTimeout=function(_timeout){
__timeout=Math.max(0,parseInt(_timeout)||0);
};
J._$setBatchId=function(_batchid){
__batchid=_batchid;
};
J._$setHeaders=function(_headers){
__headers=_headers||null;
};
var __cache={},
__batch;
var __buildParams=function(_prefix,_params){
if(!__batch)return;
for(var i=0,l=_params.length,_value;i<l;i++){
_value=__serialize(_params[i],_prefix);
!!_value&&(__batch.m[_prefix+'-param'+i]=_value);
}
};
var __serialize=function(_data,_prefix){
if(_data==undefined)return'null:null';
if(U._$isType(_data,'boolean'))
return'boolean:'+(!!_data?'true':'false');
if(U._$isType(_data,'number'))
return'number:'+_data;
if(U._$isType(_data,'string'))
return'string:'+encodeURIComponent(_data);
if(U._$isType(_data,'date'))
return'Date:'+_data.getTime();
if(U._$isType(_data,'array'))
return __serializeArray(_data,_prefix);
if(U._$isType(_data,'object'))
return __serializeObject(_data,_prefix);
if(U._$isType(_data,'function'))
return'';
return'default:'+_data;
};
var __serializeArray=function(_list,_prefix){
var _arr=[];
for(var i=0,l=_list.length,_ref,_value;i<l;i++){
__batch.p++;
_ref=_prefix+'-e'+__batch.p;
_value=__serialize(_list[i],_prefix);
if(!_value)continue;
__batch.m[_ref]=_value;
_arr.push('reference:'+_ref);
}
return'Array:['+_arr.join(',')+']';
};
var __serializeObject=function(_object,_prefix){
var _arr=[],_ref,_value;
for(var p in _object){
__batch.p++;
_ref=_prefix+'-e'+__batch.p;
_value=__serialize(_object[p],_prefix);
if(!_value)continue;
__batch.m[_ref]=_value;
_arr.push(encodeURIComponent(p)+':reference:'+_ref);
}
return'Object_Object:{'+_arr.join(',')+'}';
};
var __parseSendData=function(_data,_sep){
if(!_data)return null;
var _arr=[],_and=_sep=='&';
for(var p in _data)
_arr.push(_and?(encodeURIComponent(p)+'='+
encodeURIComponent(_data[p])):(p+'='+_data[p]));
return _arr.join(_sep||'\n');
};
var __loadData=function(_flag,_path,_class,_method){
var _single=false;
if(!__batch){this._$beginBatch();_single=true;}
var _args=Array.prototype.slice.call(arguments,0);
__batch.t=_args.shift()||0;
__batch.u=_args.shift();
var _prefix='c'+__batch.m.callCount;
__batch.m[_prefix+'-scriptName']=_args.shift();
__batch.m[_prefix+'-methodName']=_args.shift();
__batch.m[_prefix+'-id']=__batch.m.callCount;
var _cb={c:F,e:null};
if(_args.length>0&&!!_args[_args.length-1]&&
U._$isType(_args[_args.length-1],'function')){
_cb.c=_args.pop();
}
if(_args.length>0&&!!_args[_args.length-1]&&
U._$isType(_args[_args.length-1],'function')){
_cb.e=_cb.c;
_cb.c=_args.pop();
}
__batch.h[__batch.m.callCount]=_cb;
__buildParams(_prefix,_args);
__batch.m.callCount++;
if(_single)this._$endBatch();
};
var __sendBatch=function(_bid){
var _batch=__cache[_bid];
if(!_batch)return;
var _search='';
if(_batch.u.indexOf('?')>=0){
var _arr=_batch.u.split('?');
_batch.u=_arr.shift();
_search='?'+_arr.join('?');
}
_batch.u+='/call/plaincall/';
_batch.u+=_batch.m.callCount>1
?'Multiple.'+_batch.m.callCount+'.dwr'
:_batch.m['c0-scriptName']+'.'+_batch.m['c0-methodName']+'.dwr';
_batch.u+=_search;
var _mod=_batch.t%10;
if(_mod==1||_mod==2)
_batch.u=_batch.u+(_batch.u.indexOf('?')>=0?'&':'?')+__parseSendData(_batch.m,'&');
if(_batch.t==2){
J._$loadScript(_batch.u,null,__onDWRError._$bind(window,_bid));return;
}
var _options={url:_batch.u,
sync:_batch.t>=10,
interval:__timeout,
headers:__headers,
onload:__onDWRLoad._$bind(window,_bid),
onerror:__onDWRErrInXDR._$bind(window,_bid)};
__timeout=0;
if(!!__headers&&__headers.limit!=-1)__headers=null;
if(_mod==1){
_options.method='GET';
_batch.r=P(N.ut)._$$XDR._$allocate(_options);
_batch.r._$send(null);return;
}
_options.method='POST';
_batch.r=P(N.ut)._$$XDR._$allocate(_options);
_batch.r._$send(__parseSendData(_batch.m,'\n'));
};
var __onDWRLoad=function(_bid,_text){
try{
!_text||_text.search('//#DWR')<0
?__onDWRError(_bid,'返回数据不合法!')
:(new Function(_text))();
}catch(e){
__onDWRError(_bid,e.message);
}finally{
__destroyBatch(_bid);
}
};
var __onDWRError=function(_bid,_message){
__logger(_message);
var _batch=__cache[_bid];
if(!_batch)return;
_batch=_batch.h;
for(var p in _batch)
__onErrorWithFilter(_batch[p],_message);
};
var __onDWRErrInXDR=function(_bid,_message){
__onDWRError(_bid,_message);
__destroyBatch(_bid);
};
var __onLoad=function(_bid,_cid,_data){
var _batch=__cache[_bid];
if(!_batch)return;
try{
_batch.h[_cid].c(_data);
}catch(e){
__onError(_bid,_cid,e);
}
};
var __onBError=function(_bid,_error){
var _batch=__cache[_bid];
if(!_batch)return;
for(var i=0,l=_batch.m.callCount;
i<l;__onError(_bid,i,_error,true),i++);
};
var __onError=function(_bid,_cid,_error){
__logger(_error);
var _batch=__cache[_bid];
if(!_batch)return;
__onErrorWithFilter(_batch.h[_cid],_error);
};
var __onErrorWithFilter=function(_handler,_message){
if(!_handler||__filter(_message))return;
!_handler.e?_handler.c(null):_handler.e(_message);
};
var __destroyBatch=function(_bid){
var _batch=__cache[_bid];
if(!_batch)return;
P(N.ut)._$$XDR
._$recycle(_batch.r);
delete _batch.r;
delete _batch.h;
delete __cache[_bid];
};
J._$beginBatch=function(){
if(__batch)return;
__batch={h:{},p:0,m:{callCount:0,
scriptSessionId:'${scriptSessionId}187'}};
};
J._$endBatch=function(){
if(!__batch||!__batch.u){
__batch=null;return;
}
var _bid=__batchid||U._$randNumberString(6);
__batchid=0;
__batch.m.batchId=_bid;
__cache[_bid]=__batch;
__batch=null;
__sendBatch(_bid);
};
J._$postDataByDWR=function(_path,_class,_method){
Array.prototype.unshift.call(arguments,0);
__loadData.apply(J,arguments);
};
J._$postDataByDWRWithSync=function(_path,_class,_method){
Array.prototype.unshift.call(arguments,10);
__loadData.apply(J,arguments);
};
J._$loadDataByDWR=function(_path,_class,_method){
Array.prototype.unshift.call(arguments,1);
__loadData.apply(J,arguments);
};
J._$loadDataByDWRWithSync=function(_path,_class,_method){
Array.prototype.unshift.call(arguments,11);
__loadData.apply(J,arguments);
};
J._$loadDataByTAG=function(_path,_class,_method){
Array.prototype.unshift.call(arguments,2);
__loadData.apply(J,arguments);
};
P('dwr.engine');
dwr.engine['_remoteHandleCallback']=__onLoad;
dwr.engine['_remoteHandleException']=__onError;
dwr.engine['_remoteHandleBatchException']=__onBError;
})();
(function(){
P('U');
var __cookies,
__resp=/\s*\;\s*/,
__date=new Date(),
__currentms=__date.getTime(),
__milliseconds=24*60*60*1000;
var __getCookieStr=function(_key,_value){
if(arguments[3])
__date.setTime(__currentms+arguments[3]*__milliseconds);
var _path=arguments[4]?('path='+arguments[4]+';'):'',
_domain=arguments[2]?('domain='+arguments[2]+';'):'',
_expires=arguments[3]?('expires='+__date.toGMTString()+';'):'';
return _key+'='+_value+';'+_domain+_path+_expires;
};
U._$getCookie=function(_key){
return __cookies[_key]||'';
};
U._$delCookie=function(_key){
document.cookie=__getCookieStr(_key,'',arguments[1],-100,arguments[2]);
delete __cookies[_key];
};
U._$setCookie=function(_key,_value){
document.cookie=__getCookieStr.apply(null,arguments);
__cookies[_key]=_value;
};
U._$refreshCookie=function(){
__cookies={};
for(var i=0,_arr=document.cookie.split(__resp),l=_arr.length,_index;i<l;i++){
_index=_arr[i].indexOf('=');
__cookies[_arr[i].substring(0,_index)]=_arr[i].substr(_index+1);
}
};
U._$refreshCookie();
})();
(function(){
P('U');
var __length=8,
__char='0123456789abcdef';
var __md5cr=function(x,y){
x[y>>5]|=0x80<<((y)%32);x[(((y+64)>>>9)<<4)+14]=y;
var a=1732584193,b=-271733879,c=-1732584194,d=271733878;
for(var i=0,l=x.length,_oa,_ob,_oc,_od;i<l;i+=16){
_oa=a;_ob=b;_oc=c;_od=d;
a=__md5ff(a,b,c,d,x[i+0],7,-680876936);
d=__md5ff(d,a,b,c,x[i+1],12,-389564586);
c=__md5ff(c,d,a,b,x[i+2],17,606105819);
b=__md5ff(b,c,d,a,x[i+3],22,-1044525330);
a=__md5ff(a,b,c,d,x[i+4],7,-176418897);
d=__md5ff(d,a,b,c,x[i+5],12,1200080426);
c=__md5ff(c,d,a,b,x[i+6],17,-1473231341);
b=__md5ff(b,c,d,a,x[i+7],22,-45705983);
a=__md5ff(a,b,c,d,x[i+8],7,1770035416);
d=__md5ff(d,a,b,c,x[i+9],12,-1958414417);
c=__md5ff(c,d,a,b,x[i+10],17,-42063);
b=__md5ff(b,c,d,a,x[i+11],22,-1990404162);
a=__md5ff(a,b,c,d,x[i+12],7,1804603682);
d=__md5ff(d,a,b,c,x[i+13],12,-40341101);
c=__md5ff(c,d,a,b,x[i+14],17,-1502002290);
b=__md5ff(b,c,d,a,x[i+15],22,1236535329);
a=__md5gg(a,b,c,d,x[i+1],5,-165796510);
d=__md5gg(d,a,b,c,x[i+6],9,-1069501632);
c=__md5gg(c,d,a,b,x[i+11],14,643717713);
b=__md5gg(b,c,d,a,x[i+0],20,-373897302);
a=__md5gg(a,b,c,d,x[i+5],5,-701558691);
d=__md5gg(d,a,b,c,x[i+10],9,38016083);
c=__md5gg(c,d,a,b,x[i+15],14,-660478335);
b=__md5gg(b,c,d,a,x[i+4],20,-405537848);
a=__md5gg(a,b,c,d,x[i+9],5,568446438);
d=__md5gg(d,a,b,c,x[i+14],9,-1019803690);
c=__md5gg(c,d,a,b,x[i+3],14,-187363961);
b=__md5gg(b,c,d,a,x[i+8],20,1163531501);
a=__md5gg(a,b,c,d,x[i+13],5,-1444681467);
d=__md5gg(d,a,b,c,x[i+2],9,-51403784);
c=__md5gg(c,d,a,b,x[i+7],14,1735328473);
b=__md5gg(b,c,d,a,x[i+12],20,-1926607734);
a=__md5hh(a,b,c,d,x[i+5],4,-378558);
d=__md5hh(d,a,b,c,x[i+8],11,-2022574463);
c=__md5hh(c,d,a,b,x[i+11],16,1839030562);
b=__md5hh(b,c,d,a,x[i+14],23,-35309556);
a=__md5hh(a,b,c,d,x[i+1],4,-1530992060);
d=__md5hh(d,a,b,c,x[i+4],11,1272893353);
c=__md5hh(c,d,a,b,x[i+7],16,-155497632);
b=__md5hh(b,c,d,a,x[i+10],23,-1094730640);
a=__md5hh(a,b,c,d,x[i+13],4,681279174);
d=__md5hh(d,a,b,c,x[i+0],11,-358537222);
c=__md5hh(c,d,a,b,x[i+3],16,-722521979);
b=__md5hh(b,c,d,a,x[i+6],23,76029189);
a=__md5hh(a,b,c,d,x[i+9],4,-640364487);
d=__md5hh(d,a,b,c,x[i+12],11,-421815835);
c=__md5hh(c,d,a,b,x[i+15],16,530742520);
b=__md5hh(b,c,d,a,x[i+2],23,-995338651);
a=__md5ii(a,b,c,d,x[i+0],6,-198630844);
d=__md5ii(d,a,b,c,x[i+7],10,1126891415);
c=__md5ii(c,d,a,b,x[i+14],15,-1416354905);
b=__md5ii(b,c,d,a,x[i+5],21,-57434055);
a=__md5ii(a,b,c,d,x[i+12],6,1700485571);
d=__md5ii(d,a,b,c,x[i+3],10,-1894986606);
c=__md5ii(c,d,a,b,x[i+10],15,-1051523);
b=__md5ii(b,c,d,a,x[i+1],21,-2054922799);
a=__md5ii(a,b,c,d,x[i+8],6,1873313359);
d=__md5ii(d,a,b,c,x[i+15],10,-30611744);
c=__md5ii(c,d,a,b,x[i+6],15,-1560198380);
b=__md5ii(b,c,d,a,x[i+13],21,1309151649);
a=__md5ii(a,b,c,d,x[i+4],6,-145523070);
d=__md5ii(d,a,b,c,x[i+11],10,-1120210379);
c=__md5ii(c,d,a,b,x[i+2],15,718787259);
b=__md5ii(b,c,d,a,x[i+9],21,-343485551);
a=__md5ad(a,_oa);b=__md5ad(b,_ob);
c=__md5ad(c,_oc);d=__md5ad(d,_od);
}return[a,b,c,d];
};
var __md5bh=function(b){
var _arr=[];
for(var i=0,l=b.length*4;i<l;
_arr.push(__char.charAt((b[i>>2]>>((i%4)*8+4))&0xF)+
__char.charAt((b[i>>2]>>((i%4)*8))&0xF)),i++);
return _arr.join('');
};
var __md5sb=function(s){
var _bin=[],_mask=(1<<__length)-1;
for(var i=0,l=s.length*__length;i<l;
_bin[i>>5]|=(s.charCodeAt(i/__length)&_mask)<<(i%32),i+=__length);
return _bin;
};
var __md5ad=function(x,y){
var _lsw=(x&0xFFFF)+(y&0xFFFF),
_msw=(x>>16)+(y>>16)+(_lsw>>16);
return(_msw<<16)|(_lsw&0xFFFF);
};
var __md5br=function(x,y){
return(x<<y)|(x>>>(32-y));
};
var __md5cm=function(q,a,b,x,s,t){
return __md5ad(__md5br(__md5ad(__md5ad(a,q),__md5ad(x,t)),s),b);
};
var __md5ff=function(a,b,c,d,x,s,t){
return __md5cm((b&c)|((~b)&d),a,b,x,s,t);
};
var __md5gg=function(a,b,c,d,x,s,t){
return __md5cm((b&d)|(c&(~d)),a,b,x,s,t);
};
var __md5hh=function(a,b,c,d,x,s,t){
return __md5cm(b^c^d,a,b,x,s,t);
};
var __md5ii=function(a,b,c,d,x,s,t){
return __md5cm(c^(b|(~d)),a,b,x,s,t);
};
U._$md5=function(_content){
return __md5bh(__md5cr(__md5sb(_content),_content.length*__length));
};
})();
(function(){
var __fcache={},
__tcache={};
var __stack=[];
var __rtab=/\t/g,
__rspc=/\s+/g,
__rnln=/\n/g,
__rlne=/\r\n?/g,
__raor=/\|\|/g,
__rvor=/#@@#/g;
var __map={
a:{r:/\n|\\|\'/g,'\n':'\\n','\\':'\\\\','\'':'\\\''}
};
var __parsePrefixFor=function(_part){
if(_part[2]!='in')
throw'bad for loop statement: '+_part.join(' ');
__stack.push(_part[1]);
return'var __HASH__'+_part[1]+' = '+_part[3]+','+
_part[1]+','+_part[1]+'_count=0;'+
'if (!!__HASH__'+_part[1]+')'+
'for(var '+_part[1]+'_key in __HASH__'+_part[1]+'){'+
_part[1]+' = __HASH__'+_part[1]+'['+_part[1]+'_key];'+
'if (!'+_part[1]+'||typeof('+_part[1]+')=="function") continue;'+
_part[1]+'_count++;';
};
var __parsePrefixForElse=function(){
var _part=__stack[__stack.length-1];
return'}; if(!__HASH__'+_part+'||!'+_part+'_count){';
};
var __parsePrefixForEnd=function(){
__stack.pop();
return'};';
};
var __parsePrefixLst=function(_part){
if(_part[2]!='as')
throw'bad for list loop statement: '+_part.join(' ');
var _seq=_part[1].split('..');
if(_seq.length>1){
return'for(var '+_part[3]+','+_part[3]+'_index=0,_beg='+_seq[0]+',_end='+_seq[1]+','+
_part[3]+'_length=parseInt(_end-_beg+1);'+
_part[3]+'_index<'+_part[3]+'_length;'+_part[3]+'_index++){'+
_part[3]+' = _beg+'+_part[3]+'_index;';
}else{
return'for(var __LIST__'+_part[3]+' = '+_part[1]+','+
_part[3]+','+_part[3]+'_index=0,'+
_part[3]+'_length=__LIST__'+_part[3]+'.length;'+
_part[3]+'_index<'+_part[3]+'_length;'+_part[3]+'_index++){'+
_part[3]+' = __LIST__'+_part[3]+'['+_part[3]+'_index];';
}
};
var __parsePrefixMcr=function(_part){
if(!_part||!_part.length)return;
_part.shift();
var _name=_part[0].split('(')[0];
return'var '+_name+' = function'+_part.join('').replace(_name,'')+'{var __OUT=[];';
};
var __config={
blk:/^\{(cdata|minify|eval)/i,
tag:'forelse|for|list|if|elseif|else|var|macro|break',
def:{
'if':{pfix:'if(',sfix:'){',pmin:1},
'else':{pfix:'}else{'},
'elseif':{pfix:'}else if(',sfix:'){',pdft:'true'},
'/if':{pfix:'}'},
'for':{pfix:__parsePrefixFor,pmin:3},
'forelse':{pfix:__parsePrefixForElse},
'/for':{pfix:__parsePrefixForEnd},
'list':{pfix:__parsePrefixLst,pmin:3},
'/list':{pfix:'};'},
'break':{pfix:'break;'},
'var':{pfix:'var ',sfix:';'},
'macro':{pfix:__parsePrefixMcr},
'/macro':{pfix:'return __OUT.join(\'\'); };'}
},
ext:{
'trim':U._$trim,
'rand':U._$randNumberString,
'escape':U._$escape,
'format':U._$format,
'string':U._$string,
'substr':U._$subString,
'default':function(_value,_default){return _value||_default;}
}
};
var __parseStatement=function(_content,_out){
var _part=_content.slice(1,-1).split(__rspc),
_conf=__config.def[_part[0]];
if(!_conf){__parseSectionText(_content,_out);return;}
if(!!_conf.pmin&&_conf.pmin>=_part.length)
throw'Statement needs more parameters:'+_content;
_out.push((!!_conf.pfix&&
typeof(_conf.pfix)!='string')
?_conf.pfix(_part):(_conf.pfix||''));
if(!!_conf.sfix){
if(_part.length<=1){
if(!!_conf.pdft)_out.push(_conf.pdft);
}else{
for(var i=1,l=_part.length;i<l;i++){
if(i>1)_out.push(' ');
_out.push(_part[i]);
}
}
_out.push(_conf.sfix);
}
};
var __parseSectionText=function(_content,_out){
if(!_content)return;
var _lines=_content.split('\n');
if(!_lines||!_lines.length)return;
for(var i=0,l=_lines.length;i<l;i++){
__parseSectionTextLine(_lines[i],_out);
}
};
var __parseSectionTextLine=function(_content,_out){
var _prvmrkend='}',_prvexpend=-1,
_length=_content.length,
_begin,_end,_begexp,_endexp,_exparr;
while((_prvexpend+_prvmrkend.length)<_length){
_begin='${';_end='}';
_begexp=_content.indexOf(_begin,_prvexpend+_prvmrkend.length);
if(_begexp<0)break;
if(_content.charAt(_begexp+2)=='%'){
_begin='${%';_end='%}';
}
_endexp=_content.indexOf(_end,_begexp+_begin.length);
if(_endexp<0)break;
__parseText(_content.substring(_prvexpend+_prvmrkend.length,_begexp),_out);
_exparr=_content.substring(_begexp+_begin.length,_endexp).replace(__raor,'#@@#').split('|');
for(var i=0,l=_exparr.length;i<l;_exparr[i]=_exparr[i].replace(__rvor,'||'),i++);
_out.push('__OUT.push(');__parseExpression(_exparr,_out);_out.push(');');
_prvmrkend=_end;_prvexpend=_endexp;
}
__parseText(_content.substring(_prvexpend+_prvmrkend.length),_out);
};
var __parseText=function(_content,_out){
if(!_content)return;
_out.push('__OUT.push(\''+U._$encode(__map.a,_content)+'\');');
};
var __parseExpression=function(_exps,_out){
if(!_exps||!_exps.length)return;
if(_exps.length==1){
_out.push(_exps.pop());return;
}
var _exp=_exps.pop().split(':');
_out.push('__MDF[\''+_exp.shift()+'\'](');
__parseExpression(_exps,_out);
if(_exp.length>0)
_out.push(','+_exp.join(':'));
_out.push(')');
};
var __parseTemplate=function(_content){
_content=U._$trim(_content).replace(__rlne,'\n').replace(__rtab,'    ');
var _ftxt=['if(!__CTX) return \'\';var __OUT=[];with(__CTX){'];
var _prvend=-1,_length=_content.length;
var _stmtbeg,_stmtend,_statement,
_blockrx,_blktmp,_blkend,_blkmrk,_blktxt;
while((_prvend+1)<_length){
_stmtbeg=_prvend;
_stmtbeg=_content.indexOf("{",_stmtbeg+1);
while(_stmtbeg>=0){
_stmtend=_content.indexOf("}",_stmtbeg+1);
_statement=_content.substring(_stmtbeg,_stmtend);
_blockrx=_statement.match(__config.blk);
if(!!_blockrx){
_blktmp=_blockrx[1].length+1;
_blkend=_content.indexOf('}',_stmtbeg+_blktmp);
if(_blkend>=0){
_blkmrk=_blkend-_stmtbeg-_blktmp<=0
?('{/'+_blockrx[1]+'}')
:_statement.substr(_blktmp+1);
_blktmp=_content.indexOf(_blkmrk,_blkend+1);
if(_blktmp>=0){
__parseSectionText(_content.substring(_prvend+1,_stmtbeg),_ftxt);
_blktxt=_content.substring(_blkend+1,_blktmp);
switch(_blockrx[1]){
case'cdata':__parseText(_blktxt,_ftxt);break;
case'minify':__parseText(_blktxt.replace(__rnln,' ').replace(__rspc,' '),_ftxt);break;
case'eval':if(!!_blktxt)_ftxt.push('__OUT.push((function(){'+_blktxt+'})());');break;
}
_stmtbeg=_prvend=_blktmp+_blkmrk.length-1;
}
}
}else if(_content.charAt(_stmtbeg-1)!='$'&&
_content.charAt(_stmtbeg-1)!='\\'&&
_statement.substr(_statement.charAt(1)=='/'?2:1)
.search(__config.tag)==0){
break;
}
_stmtbeg=_content.indexOf("{",_stmtbeg+1);
}
if(_stmtbeg<0)break;
_stmtend=_content.indexOf("}",_stmtbeg+1);
if(_stmtend<0)break;
__parseSectionText(_content.substring(_prvend+1,_stmtbeg),_ftxt);
__parseStatement(_content.substring(_stmtbeg,_stmtend+1),_ftxt);
_prvend=_stmtend;
}
__parseSectionText(_content.substring(_prvend+1),_ftxt);
_ftxt.push('};return __OUT.join(\'\');');
return new Function('__CTX','__MDF',_ftxt.join(''));
};
E._$getHtmlTemplate=function(_sn,_data,_extend){
try{
_data=_data||{};
if(!__fcache[_sn]&&!__tcache[_sn])
return'';
if(!__fcache[_sn]){
__fcache[_sn]=__parseTemplate(__tcache[_sn]);
delete __tcache[_sn];
}
_data.defined=function(_key){
return _data[_key]!=null;
};
if(!!_extend)
for(var p in __config.ext)
_extend[p]=__config.ext[p];
return __fcache[_sn](_data,_extend||__config.ext);
}catch(e){return e.message||'';}
};
E._$addHtmlTemplate=function(_content){
if(!_content)return'';
var _sn,_element=this._$getElement(_content);
if(!!_element){
_sn=_element.id;
_content=_element.value||_element.innerText;
}
_sn=_sn||('ck_'+U._$randNumberString());
__tcache[_sn]=_content;
return _sn;
};
})();
(function(){
var p=P(N.ut),
__proRichEditor,
__udcss='',
__opspc=/\u00a0/gi,
__efunc=/^copy|cut|paste$/i,
__rnwln=/(?:\r\n)|\n|\r/gi,
__rnwbr=/<br\s*\/?\s*>/gi,
__rawbr=/^\s*<wbr\/?>/i,
__ffpth=location.href.replace(/\/[^\/]*$/,'/'),
__ffurl=/(href|src)\s*=\s*("|')(?!\w+:|\/)/gi,
__empty=/(?:<(p|div)>(?:\&nbsp\;|<br\/?>)<\/\1>|<br\/?>|\&nbsp\;|\s)+$/gi;
var __getIFrameStyle=function(){
return'html,body{height:100%;width:100%;margin:0;padding:0;border:0;overflow:auto;background:#fff;cursor:text;font-size:14px;word-wrap:break-word;}p{padding:0;margin:0;}'+__udcss;
};
p._$$RichEditor=C();
__proRichEditor=p._$$RichEditor._$extend(p._$$Event);
p._$$RichEditor._$resetStyle=function(_style){
__udcss=_style||'';
};
__proRichEditor._$initialize=function(_parent,_options){
this._$super();
_options=_options||O;
this._$resetOption(_options);
this.__xurl=_options.url||'http://photo.163.com/src/crossdomain.html';
this.__parent=E._$getElement(_parent);
this.__initIFrame();
};
__proRichEditor._$resetOption=function(_options){
_options=_options||O;
this._$addEvent('onfocus',_options.onfocus||F);
this._$addEvent('onclick',_options.onclick||F);
this.__nofocus=!!_options.nofocus;
this.__noclick=!!_options.noclick;
this.__restyle=_options.style||'';
if(!this.__nofocus)this._$focus();
};
__proRichEditor._$focus=function(){
if(B._$ISMB&&!!this.__ntxt&&!!this.__ntxt.focus){
this.__ntxt.focus();
return;
}
if(!!this.__window&&!!this.__window.focus)
this.__window.focus();
if(!!this.__range&&!!this.__range.select){
this.__range.select();
delete this.__range;
}
};
__proRichEditor._$blur=function(){
if(B._$ISMB){
this.__ntxt.blur();
return;
}
this.__window.blur();
};
__proRichEditor._$setContent=function(_content){
if(B._$ISMB){
this.__ntxt.value=(_content||'').replace(__rnwbr,'\n');
return;
}
if(!!this.__range)delete this.__range;
_content=_content||'';
this.__content=_content;
if(!this.__document)return;
this.__document.body.innerHTML='<wbr/>'+_content;
};
__proRichEditor._$getContent=function(){
if(B._$ISMB)return this.__ntxt.value.replace(__rnwln,'<br/>');
if(!this.__document)return this.__content||'';
return this.__filterContent(this.__document.body.innerHTML);
};
__proRichEditor._$execCommand=function(_command,_value,_flag){
_command=_command.toLowerCase();
if(_command=='batch'){
if(!U._$isType(_value,'array')||!_value.length)return;
for(var i=0,l=_value.length,_cmd;i<l;i++){
_cmd=_value[i];
!U._$isType(_cmd,'array')?this._$execCommand(_cmd)
:this._$execCommand.apply(this,_cmd);
}
}
if(_command=='inserthtml'){this.__insertHTML(_value);return true;}
this._$focus();
this.__setNoIEStyleType(_command=='hilitecolor');
try{this.__document.execCommand(_command,!!_flag,_value||null);}catch(e){}
};
__proRichEditor.__initIFrame=function(){
if(B._$ISMB){
this.__ntxt=document.cloneElement('textarea');
if(!!this.__parent)this.__parent.appendChild(this.__ntxt);
return;
}
this.__iframe=document.cloneElement('iframe');
this.__iframe.xdm=B._$ISIE&&location.hostname!=document.domain;
V._$addEvent(this.__iframe,'load',this.__onIFrameLoaded._$bind(this));
this.__script=this.__iframe.xdm?('<script type="text/javascript">document.domain="'+document.domain+'";</scr'+'ipt>'):'';
this.__iframe.src=this.__iframe.xdm?this.__xurl||('http://'+location.hostname+'/crossdomain.html'):'about:blank';
if(!!this.__parent)this.__parent.appendChild(this.__iframe);
};
__proRichEditor.__insertHTML=function(_html){
this._$focus();
this.__setNoIEStyleType();
if(!document.selection){
this.__document.execCommand('inserthtml',false,_html);
return;
}
var _range=this.__document.selection.createRange();
if(!!_range.pasteHTML){_range.pasteHTML(_html);return;}
this.__document.execCommand('delete',false,null);
this.__document.selection.createRange().pasteHTML(_html);
};
__proRichEditor.__saveIESelection=function(){
this.__range=this.__document.selection.createRange();
};
__proRichEditor.__setNoIEStyleType=function(_usecss){
if(B._$ISIE||!this.__document)return;
this.__document.execCommand('styleWithCSS',false,!!_usecss);
};
__proRichEditor.__filterContent=function(_content){
var _content=(_content||'').replace(__rawbr,'').replace(__empty,'');
if(B._$ISOP)_content=_content.replace(__opspc,'&nbsp;');
if(B._$ISFF)_content=_content.replace(__ffurl,'$1=$2'+__ffpth);
return _content;
};
__proRichEditor.__pullContent=function(){
if(!this.__document)return;
this.__timer=window.clearInterval(this.__timer);
this._$setContent(this.__content);
};
__proRichEditor.__onIFrameLoaded=function(){
V._$clearEvent(this.__iframe);
this.__window=this.__iframe.contentWindow;
this.__document=this.__iframe.contentDocument||this.__window.document;
this.__document.open('text/html','replace');
this.__document.write('<head><style type="text/css">'+__getIFrameStyle()+this.__restyle+'</style>'+this.__script+'</head>');
this.__document.write('<body>');
var _noscript=this.__content.search(/<script/i)<0;
if(_noscript){
this.__document.write('<wbr/>');
this.__document.write(this.__content);
}
this.__document.write('</body>');
this.__document.close();
if(!_noscript&&!!this.__content)
this.__timer=window.setInterval(this.__pullContent._$bind(this),100);
if(!this.__iframe.xdm)this.__document.designMode='on';
V._$addEvent(this.__window,'focus',this.__onEditorFocus._$bind(this));
V._$addEvent(this.__document,'click',this.__onEditorClick._$bind(this));
B._$ISIE&&V._$addEvent(this.__document,'beforedeactivate',this.__saveIESelection._$bind(this));
if(!this.__nofocus)this._$focus();
V._$addEvent(this.__iframe,'load',this.__onIFrameLoaded._$bind(this));
};
__proRichEditor.__onEditorClick=function(_event){
if(!this.__noclick)
V._$dispatchEvent(document,'click',_event);
this._$dispatchEvent('onclick');
};
__proRichEditor.__onEditorFocus=function(){
if(this.__iframe.xdm&&!this.__iframe.dsg){
this.__iframe.dsg=true;
this.__document.body.contentEditable=true;
this._$focus();
}
this._$dispatchEvent('onfocus');
};
})();
(function(){
var p=P(N.ui),
__proEditor;
var __alert=function(_message){
window.alert(_message);
};
p._$$Editor=C();
__proEditor=p._$$Editor._$extend(p._$$UIAbstract,true);
__proEditor._$resetOption=function(_options){
_options=_options||O;
this._$disable(false);
this.__html=!!_options.html;
this.__empty=!!_options.empty;
this.__fixed=!!_options.fixed;
this.__cfixed=!!_options.cfixed;
this.__maxlength=_options.maxlength||0;
this._$setContent(_options.content||'');
this._$addEvent('onok',_options.onok||F);
this._$addEvent('oncc',_options.oncc||F);
this._$addEvent('onerror',_options.onerror||__alert);
p._$$Editor._$supro._$resetOption.call(this,_options);
};
__proEditor._$release=function(_element){
if(!B._$ISIE)return;
try{
var _range=document.body.createTextRange();
_range.moveToElementText(E._$getElement(_element)||
this.__body.parentNode);
_range.select();
}catch(e){}
};
__proEditor._$focus=function(){
!this.__ecore||this.__ecore._$focus();
};
__proEditor._$setContent=function(_content){
!this.__ecore||this.__ecore._$setContent.apply(this.__ecore,arguments);
};
__proEditor._$getContent=function(){
return!!this.__ecore&&this.__ecore._$getContent()||'';
};
__proEditor.__checkInput=function(){
var _content=this._$getContent();
if(!this.__empty&&!_content){
this._$focus();
return'请输入内容！';
}
if(!!this.__maxlength&&_content.length>this.__maxlength){
this._$focus();
return'输入内容超过长度['+this.__maxlength+'个字符]限制！';
}
return null;
};
__proEditor.__onOK=function(){
var _message=this.__checkInput();
if(!!_message){
this._$dispatchEvent('onerror',_message);
return;
}
this._$disable(true);
try{this.__onCheckPass();}catch(e){}
this.__fixed||this.constructor._$recycle(this);
};
__proEditor.__onCC=function(){
this.__cfixed||this.constructor._$recycle(this);
this._$dispatchEvent('oncc');
};
__proEditor.__onCheckPass=function(){
this._$dispatchEvent('onok',this._$getContent());
};
__proEditor._$disable=F;
})();
(function(){
var p=P(N.ui),
__proSimpleEditor,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace>{font-size:12px;text-align:left;}\
               #<uispace> .zbrd{border-width:1px;border-style:solid;}\
               #<uispace> .zbgp{background:url('+N.rc.r+'icon.png) no-repeat;}\
               #<uispace> .zcnt{height:100px;overflow:hidden;}\
               #<uispace> .zcnt iframe{width:100%;height:100%;border:0;}\
               #<uispace> .zhnd{cursor:pointer;}\
               #<uispace> .zbtn{position:relative;height:30px;line-height:30px;zoom:1;text-align:right;}\
               #<uispace> .zbok{_margin-top:4px;left:550px;}\
               #<uispace> .zfce{position:absolute;left:0;top:5px;width:20px;height:20px;cursor:pointer;background-position:0 1px;}\
               #<uispace> .zvcd{position:absolute;top:0;right:80px;}\
               #<uispace> .zvcd *{vertical-align:middle;}\
               #<uispace> .zvcd img{width:40px;height:24px;margin:0 3px;cursor:pointer;}\
               #<uispace> .zvcd span{text-decoration:underline;cursor:pointer;}\
               #<uispace> .zvcd input{width:35px;padding:2px 0;}\
               #<uispace> .zmsg{line-height:20px;}\
               #<uispace> .zmsg .zicn{width:25px;height:20px;background-position:5px -58px;}\
      #<uispace> .weibo{padding-right:5px;}\
               #<uispace> .zprt{left:0;top:30px;}',__uispace);
p._$$SimpleEditor=C();
__proSimpleEditor=p._$$SimpleEditor._$extend(p._$$Editor,true);
__proSimpleEditor._$initialize=function(_parent,_options){
this.__eopt=_options.eopt||{};
this.__eopt.onfocus=this.__showValidCodeOnFocus._$bind(this);
this.__fopt={'class':'zprt',hackhover:true,onselect:this.__onFaceSelect._$bind(this)};
this._$super(_parent,_options);
};
__proSimpleEditor._$resetOption=function(_options){
_options=_options||{};
this._$hideValidCode();
this.__vurl=_options.vurl;
if(!!this.__vurl){
_options.eopt=_options.eopt||{};
_options.eopt.onfocus=this.__showValidCodeOnFocus._$bind(this);
}
this.__ecore._$resetOption(_options.eopt);
this.__fccl.style.display=!_options.nocancel?'':'none';
this.__fbtn.style.display=!_options.noface?'':'none';
this.__fopt.parent=_options.body||this.__fbtn.parentNode;
if(this.__fopt.parent==document.documentElement)
this.__fopt.parent=document.body;
_options.onerror=_options.onerror||this._$showErrorMsg._$bind(this);
this.__showNeWeibo=_options.showneweibo||false;
if(_options.neweibocheck&&_options.neweibocheck==true)
this.__fneweibo.checked=true;
this.__fneweibo.parentNode.style.display=this.__showNeWeibo?'':'none';
p._$$SimpleEditor._$supro._$resetOption.call(this,_options);
};
__proSimpleEditor._$destroy=function(_redestroy){
if(!_redestroy)this._$release(this.__fccl);
if(this.__hasValidCode())this._$hideValidCode();
p._$$SimpleEditor._$supro._$destroy.apply(this,arguments);
};
__proSimpleEditor._$release=function(_element){
p._$$SimpleEditor._$supro._$release(_element||this.__fccl);
};
__proSimpleEditor._$disable=function(_disabled){
this.__fbok.disabled=!!_disabled;
};
__proSimpleEditor._$showValidCode=function(_url){
if(!_url)return;
this.__vcr=_url+(_url.indexOf('?')<0?'?':'&');
this.__fvcd[0].parentNode.style.display='block';
this._$refreshValidCode();
};
__proSimpleEditor._$hideValidCode=function(){
this.__vcr=N.rc.r+'empty.png';
this.__fvcd[0].parentNode.style.display='none';
this._$refreshValidCode();
};
__proSimpleEditor._$refreshValidCode=function(){
this.__fvcd[0].value='';
this.__fvcd[1].src=this.__vcr+(this.__vcr.indexOf('?')<0?'':U._$randNumberString());
};
__proSimpleEditor._$showErrorMsg=function(_message){
this._$disable(false);
this.__fmsg.innerText=_message||'';
this.__fmsg.parentNode.style.display='block';
if(!!this.__mtmr)return;
this.__mtmr=window.setTimeout(this._$hideErrorMsg._$bind(this),3000);
};
__proSimpleEditor._$hideErrorMsg=function(){
this.__mtmr=window.clearTimeout(this.__mtmr);
this.__fmsg.parentNode.style.display='none';
};
__proSimpleEditor.__getSpace=function(){
return __uispace;
};
__proSimpleEditor.__getXhtml=function(){
var _tm03=N.tm.fc04||'',_tm02=N.tm.fc01||'',_tm01=N.tm.bdc0||'',
_tm00=(N.tm.zbtn||'')+' '+(N.tm.fc05||'')+' '+(N.tm.bdc2||'')+' '+(N.tm.bgc2||'');
return'<div class="zcnt ztag zbrd '+_tm01+'"></div>\
   <div class="zbtn">\
              <span class="zfce zbgp ztag space">&nbsp;</span>\
     <span class="weibo" style="display:none"><input class="neweibo"  type="checkbox"/> <span>同步到网易微博</span></span>\
              <input class="zbok zhnd ztag '+_tm00+'" type="button" value="发表"/>\
              <span class="zbcc zhnd ztag '+_tm02+'">取消</span>\
              <div class="zvcd ztag" style="display:none;">\
                <label>验证码：</label><input class="zbrd xtag '+_tm01+'" type="text" maxlength="4"/><img class="xtag" title="点击刷新验证码"/><span class="xtag '+_tm02+'">换一张</span>\
              </div>\
            </div>\
            <div class="zmsg '+_tm03+'" style="display:none;"><span class="zicn zbgp iblock">&nbsp;</span><span class="ztag"></span></div>';
};
__proSimpleEditor.__intXnode=function(){
var _ntmp=E._$getElementsByClassName(this.__body,'ztag');
this.__fbtn=_ntmp[1];
this.__fbok=_ntmp[2];
this.__fccl=_ntmp[3];
this.__fmsg=_ntmp[5];
this.__fvcd=E._$getChildElements(_ntmp[4],'xtag');
V._$addEvent(_ntmp[1],'click',this.__onFaceShow._$bind(this));
V._$addEvent(_ntmp[2],'click',this.__onOK._$bind(this));
V._$addEvent(_ntmp[3],'click',this.__onCC._$bind(this));
var _function=this._$refreshValidCode._$bind(this);
V._$addEvent(this.__fvcd[1],'click',_function);
V._$addEvent(this.__fvcd.pop(),'click',_function);
this.__ecore=new(P(N.ut)._$$RichEditor)(_ntmp[0],this.__eopt);
this.__fneweibo=E._$getElementsByClassName(this.__body,'neweibo')[0];
};
__proSimpleEditor.__checkInput=function(){
if(this.__hasValidCode()&&
this.__fvcd[0].value.length!=4){
this.__fvcd[0].focus();
return'请输入正确的验证码！';
}
return p._$$SimpleEditor._$supro.__checkInput.call(this);
};
__proSimpleEditor.__hasValidCode=function(){
return this.__fvcd[0].parentNode.style.display!='none';
};
__proSimpleEditor.__showValidCodeOnFocus=function(){
if(!this.__vurl||this.__hasValidCode())return;
this._$showValidCode(this.__vurl);
};
__proSimpleEditor.__isPortraitParent=function(_element){
return _element==this.__fopt.parent;
};
__proSimpleEditor.__onFaceShow=function(_event){
V._$stop(_event);
if(!p._$$SimplePortrait)return;
if(this.__fopt.parent!=this.__fbtn.parentNode){
var _filter=this.__isPortraitParent._$bind(this);
this.__fopt.top=E._$offsetY(this.__fbtn,_filter)+30;
this.__fopt.left=E._$offsetX(this.__fbtn,_filter);
}
p._$$SimplePortrait._$show(this.__fopt);
};
__proSimpleEditor.__onFaceSelect=function(_face){
this.__ecore._$execCommand('InsertImage',_face);
};
__proSimpleEditor.__onCheckPass=function(){
var _webibo=(this.__showNeWeibo&&this.__fneweibo.checked==true)?true:false;
this._$dispatchEvent('onok',{content:this._$getContent(),code:this.__fvcd[0].value,send2weibo:_webibo});
};
})();
(function(){
var p=P(N.fw),
__proListCache,
__proListModule,
__tcache={};
var __hasFragment=function(_list,_offset,_limit){
if(!_list)return false;
for(var i=_offset,l=_offset+_limit;i<l;i++)
if(_list[i]==null)return false;
return true;
};
var __parseFragment=function(_list,_offset,_limit){
var _beg=-1,_end=-1,
_nend=_offset+2*_limit,
_nbeg=Math.max(0,_offset-_limit);
for(var i=_nbeg;i<_nend;i++){
if(_list[i]==null){
_end=i;
if(_beg<0)_beg=i;
}
}
if(_beg<0)return null;
if(_end-_beg+1<_limit){
if(_beg==_nbeg)
_beg=_end-_limit+1;
else if(_end==_nend)
_end=_beg+_limit-1;
}
return[_beg,_end-_beg+1];
};
p._$$ListCache=C();
__proListCache=p._$$ListCache._$extend(P(N.ut)._$$Cache);
__proListCache._$initialize=function(_options){
this._$super(_options);
this.__ckey='idx_'+U._$randNumberString(6);
};
__proListCache._$clearCache=function(_ckey){
_ckey=_ckey||this.__ckey;
this.__delDataInCache(_ckey);
this.__initCache(_ckey);
};
__proListCache._$getHashInCache=function(_ckey){
_ckey=_ckey||this.__ckey;
this.__initCache(_ckey);
return this.__getDataInCache(_ckey).hash;
};
__proListCache._$getListInCache=function(_ckey){
_ckey=_ckey||this.__ckey;
this.__initCache(_ckey);
return this.__getDataInCache(_ckey).list;
};
__proListCache._$setTotalInCache=function(_ckey,_total){
_ckey=_ckey||this.__ckey;
this.__initCache(_ckey);
this.__getDataInCache(_ckey).total=_total||0;
};
__proListCache._$getTotalInCache=function(_ckey){
_ckey=_ckey||this.__ckey;
this.__initCache(_ckey);
return this.__getDataInCache(_ckey).total;
};
__proListCache._$getTotal=function(_options){
var _ckey=(_options||O).ckey||this.__ckey,
_total=this._$getTotalInCache(_ckey);
if(_total!=null){
this._$dispatchEvent('ontotalload',_ckey,_total);
}else if(this.__isTotalFromList(_ckey)){
this.__getTotalFromList(_options,
this.__getTotal._$bind(this,_ckey));
}else{
this.__getTotalFromServer(_options,
this.__getTotal._$bind(this,_ckey));
}
};
__proListCache.__getTotal=function(_ckey,_total){
_total=_total||0;
this._$setTotalInCache(_ckey,_total);
this._$dispatchEvent('ontotalload',_ckey,_total);
};
__proListCache._$getList=function(_options){
_options=_options||O;
var _limit=_options.limit,
_offset=_options.offset,
_ckey=_ckey||_options.ckey,
_list=this._$getListInCache(_ckey),
_hasf=__hasFragment(_list,_offset,_limit),
_total=this._$getTotalInCache(_options.ckey);
if(_hasf||!_limit||!_total){
this._$dispatchEvent('onlistload',
_ckey,_offset,_offset+_limit);
if(!!_options.lazy||!_limit)return;
}
var _args=!!_options.lazy
?[_offset,_limit]
:__parseFragment(_list,_offset,_limit);
if(!_args||_args.length!=2)return;
_args[1]=Math.max(0,Math.min(_args[1],_total-_args[0]));
if(!_args[1])return;
_options.limit=_args[1];
_options.offset=_args[0];
this.__getListFromServer(_options,
this.__getList._$bind(this,_args[0],
_args[1],_ckey,_options.hkey,!_hasf));
};
__proListCache.__getList=function(_offset,_limit,_ckey,_hkey,_ncb,_list){
this.__setListToCache(_list,_hkey,_ckey,_offset);
if(!!_list&&_list.length<_limit)
this._$setTotalInCache(_ckey,Math.min(
this._$getTotalInCache(_ckey),
this._$getListInCache(_ckey).length));
if(!!_ncb)this._$dispatchEvent('onlistload',_ckey,
_offset,!!_list&&_list.length>0?_offset+_list.length:_offset);
};
__proListCache._$hasNext=function(_ckey,_offset,_limit){
_limit=_limit||0;
_offset=_offset||0;
return(_offset+_limit)<(this._$getTotalInCache(_ckey)||Number.MAX_VALUE);
};
__proListCache._$addItemInCache=function(_item,_ckey,_hkey,_first){
if(!_item)return;
var _list=this._$getListInCache(_ckey),
_hash=this._$getHashInCache(_ckey);
!_first?_list.push(_item):_list.unshift(_item);
if(!!_hkey)_hash[_item[_hkey]]=_item;
this._$setTotalInCache(_ckey,this._$getTotalInCache(_ckey)+1);
};
__proListCache._$deleteItemInCache=function(_ckey,_ikey){
var _list=this._$getListInCache(_ckey),
_hash=this._$getHashInCache(_ckey),
_index=U._$indexOf(_list,_hash[_ikey]);
if(_index>=0){
delete _hash[_ikey];
_list.splice(_index,1);
}
this._$setTotalInCache(_ckey,this._$getTotalInCache(_ckey)-1);
};
__proListCache.__initCache=function(_ckey){
if(!!this.__getDataInCache(_ckey))return;
this.__setDataInCache(_ckey,{list:[],hash:{}});
};
__proListCache.__setListToCache=function(_list,_hkey,_ckey,_offset){
if(!_list)return;
_offset=_offset||0;
var _ccl=this._$getListInCache(_ckey),
_cch=this._$getHashInCache(_ckey);
for(var i=0,l=_list.length,_item;i<l;i++){
_item=_list[i]||null;
_ccl[i+_offset]=_item;
if(!!_item&&!!_item[_hkey])
_cch[_item[_hkey]]=_item;
}
};
__proListCache.__isTotalFromList=function(_ckey){
return false;
};
__proListCache.__getTotalFromList=function(_options,_callback){
var _ckey=_options.ckey||this.__ckey;
if(!!__tcache[_ckey])return;
__tcache[_ckey]=_callback||F;
this.__getListFromServer(_options,
this.__cbTotalFromList._$bind(this,_ckey,_options.hkey));
};
__proListCache.__cbTotalFromList=function(_ckey,_hkey,_list){
_list=_list||[];
this.__setListToCache(_list,_hkey,_ckey);
var _callback=__tcache[_ckey];
delete __tcache[_ckey];
_callback(_list.length);
};
__proListCache.__getListFromServer=F;
__proListCache.__getTotalFromServer=F;
var __isCache=function(_cache){
return _cache instanceof p._$$ListCache;
};
p._$$ListModule=C();
__proListModule=p._$$ListModule._$extend(P(N.ut)._$$Event);
__proListModule._$initialize=function(_class,_cache,_options){
this._$super();
this.__lhint=document.cloneElement('div','lhint');
this._$resetClass(_class);
this._$resetCache(_cache);
this._$resetOption(_options);
};
__proListModule._$resetClass=function(_class){
if(!!this.__class)
this.__items=this.__class
._$recycle(this.__items);
this.__class=_class;
};
__proListModule._$resetCache=function(_cache){
this.__clearCacheEvent();
this.__cache=_cache;
if(!__isCache(this.__cache))return;
this.__cache._$addEvent('onlistload',this.__cbListLoaded._$bind(this));
this.__cache._$addEvent('ontotalload',this.__cbTotalLoaded._$bind(this));
};
__proListModule._$resetOption=function(_options){
_options=_options||O;
this.__popt=_options.opage||{};
this.__iopt=_options.oitem||{};
this.__copt=_options.ocache||{};
if(this.__popt.dirty){
this.__popt.index=this.__popt.dirty;
delete this.__popt.dirty;
}
this._$addEvent('onempty',_options.onempty||
this._$showHint._$bind(this,'没有数据！'));
this._$addEvent('onloading',_options.onloading||
this._$showHint._$bind(this,'数据列表加载中...'));
this._$addEvent('onafterchange',_options.onafterchange||F);
this._$addEvent('onbeforechange',_options.onbeforechange||F);
this.__resetPagerClass();
if(!!this.__popt.bclass)
this.__popt.onchange=this.__onPageChange._$bind(this);
this.__cache._$getTotal(this.__copt);
};
__proListModule._$getItems=function(){
return this.__items;
};
__proListModule._$destroy=function(){
this._$resetClass();
this._$resetCache();
if(!!this.__pager)
this.__pager=this.__pager
.constructor._$recycle(this.__pager);
delete this.__popt;
delete this.__iopt;
delete this.__copt;
};
__proListModule._$refresh=function(){
if(!!this.__pager){
var _popt=this.__popt;
_popt.dirty=_popt.dirty||_popt.index;
_popt.index=this.__pager._$getIndex();
}
this.__cache._$getTotal(this.__copt);
};
__proListModule._$showHint=function(_hint){
this.__lhint.innerText=_hint||'';
this.__iopt.icase.innerHTML='';
this.__iopt.icase.appendChild(this.__lhint);
};
__proListModule.__resetPagerClass=function(){
this.__popt.bclass=null;
if(!!this.__pager)
this.__pager=this.__pager
.constructor._$recycle(this.__pager);
switch(this.__popt.type||0){
case 0:this.__popt.bclass=P(N.ui)._$$DPager;return;
case 1:this.__popt.bclass=P(N.ui)._$$LPager;return;
case 3:
this.__popt.bclass=P(N.ui)._$$NPager;
this.__cache._$setTotalInCache(this.__copt.ckey,
Math.min(this.__cache._$getTotalInCache(this
.__copt.ckey)||Number.MAX_VALUE,Number.MAX_VALUE));
return;
}
};
__proListModule.__displayPager=function(_display){
var _style=!_display?'none':'',
_element=E._$getElement(this.__popt.pcase);
if(!!_element)_element.style.display=_style;
_element=E._$getElement(this.__popt.bcase);
if(!!_element)_element.style.display=_style;
};
__proListModule.__clearCacheEvent=function(){
if(!this.__cache)return;
this.__cache._$delEvent('onlistload');
this.__cache._$delEvent('ontotalload');
};
__proListModule.__refreshList=function(){
if(!this.__class||
!__isCache(this.__cache))return;
this.__items=this.__class._$recycle(this.__items);
this.__displayPager(false);
this._$dispatchEvent('onloading');
var _total=this.__cache._$getTotalInCache(this.__copt.ckey);
this.__copt.offset=this.__iopt._start_;
this.__copt.limit=Math.max(0,Math.min(this.__copt.
number,_total-this.__copt.offset));
this.__cache._$getList(this.__copt);
};
__proListModule.__onPageChange=function(_index){
this._$dispatchEvent('onbeforechange',this.__items);
var _total=this.__cache._$getTotalInCache(this.__copt.ckey);
this.__iopt._end_=Math.min(_index*this.__copt.number,
_total!=null?_total:Number.MAX_VALUE);
this.__iopt._start_=Math.max(0,(_index-1)*this.__copt.number);
this.__refreshList();
};
__proListModule.__cbTotalLoaded=function(_ckey,_total){
if(!!this.__copt.ckey
&&this.__copt.ckey!=_ckey)return;
this.__copt.number=this.__copt.number||_total;
this.__popt.total=Math.ceil(_total/this.__copt.number);
if(!this.__popt.bclass){
this.__onPageChange(1);
}else if(!this.__pager){
this.__pager=this.__popt.bclass
._$allocate(this.__popt.pcase,this.__popt);
if(!!this.__popt.bcase)
this.__pager._$cloneAndBind(this.__popt.bcase);
}else{
this.__popt.bparent=this.__popt.bcase;
this.__pager._$reset(this.__popt.pcase,this.__popt);
}
};
__proListModule.__cbListLoaded=function(_ckey,_beg,_end){
if((!!this.__copt.ckey
&&this.__copt.ckey!=_ckey)
||this.__iopt._end_<_beg
||this.__iopt._start_>Math.max(0,_end-1))return;
this.__class._$recycle(this.__items);
E._$removeElementByEC(this.__lhint);
this.__iopt.icase.innerHTML='';
var _list=this.__cache._$getListInCache(_ckey);
if(!_list||!_list.length||!this.__iopt._end_){
this._$dispatchEvent('onempty');
}else{
this.__items=this.__class._$allocate
(_list,this.__iopt.icase,this.__iopt);
this.__displayPager(true);
if(!!this.__pager&&this.__popt.type==3){
this.__pager._$disableNext(
!this.__cache._$hasNext(this.__copt.ckey,
this.__iopt._start_,this.__copt.number));
}
this._$dispatchEvent('onafterchange',this.__items);
}
};
})();
(function(){
var p=P(N.fw),
__proEListItem,
__proEListCache,
__proEListModule;
p._$$EListCache=C();
__proEListCache=p._$$EListCache._$extend(P(N.fw)._$$ListCache);
__proEListCache._$addItem=function(_options){
_options=_options||O;
!_options.item
?this.__addItem(_options.ckey,_options.hkey,null)
:this.__addItemToServer(_options,this.
__addItem._$bind(this,_options.ckey,_options.hkey));
};
__proEListCache.__addItem=function(_ckey,_hkey,_item){
this._$addItemInCache(_item,_ckey,_hkey,true);
this._$dispatchEvent('onitemadd',_item);
};
__proEListCache._$deleteItem=function(_options){
_options=_options||O;
!_options.item
?this.__deleteItem(_options.ckey,'',false)
:this.__deleteItemFromServer(_options,this
.__deleteItem._$bind(this,_options
.ckey,_options.item[_options.hkey]));
};
__proEListCache.__deleteItem=function(_ckey,_ikey,_isok){
if(!!_isok)this._$deleteItemInCache(_ckey,_ikey);
this._$dispatchEvent('onitemdelete',_isok);
};
__proEListCache._$updateItem=function(_options){
_options=_options||O;
if(!_options.item){
this._$dispatchEvent('onitemupdate',false);
return;
}
var _callback=this.__updateItem.
_$bind(this,_options.ckey,_options.item.obj[
_options.hkey],_options.item.cmd,_options.item.itm);
switch(_options.item.cmd){
case 0:this.__updateSubItemToServer(_options,_callback);return;
case 1:this.__addSubItemToServer(_options,_callback);return;
case 2:this.__deleteSubItemFromServer(_options,_callback);return;
}
};
__proEListCache.__updateItem=function(_ckey,_ikey,_type,_obj,_item){
if(!!_item){
switch(_type){
case 0:this._$updateSubItemInCache(_ckey,_ikey,_item);break;
case 1:this._$addSubItemInCache(_ckey,_ikey,_item);break;
case 2:this._$deleteSubItemInCache(_ckey,_ikey,_obj);break;
}
}
this._$dispatchEvent('onitemupdate',_item);
};
__proEListCache.__addItemToServer=F;
__proEListCache.__deleteItemFromServer=F;
__proEListCache._$addSubItemInCache=F;
__proEListCache._$updateSubItemInCache=F;
__proEListCache._$deleteSubItemInCache=F;
__proEListCache.__addSubItemToServer=F;
__proEListCache.__updateSubItemToServer=F;
__proEListCache.__deleteSubItemFromServer=F;
p._$$EListItem=C();
__proEListItem=p._$$EListItem._$extend(P(N.ut)._$$Item,true);
__proEListItem._$reset=function(_options){
_options=_options||O;
this.__eopt=_options.oedit||{};
this._$addEvent('onadd',_options.onadd||F);
this._$addEvent('ondelete',_options.ondelete||F);
this._$addEvent('onupdate',_options.onupdate||F);
};
__proEListItem._$destroy=function(){
if(!!this.__editor)
this.__editor=this.__editor
.constructor._$recycle(this.__editor);
p._$$EListItem._$supro._$destroy.call(this);
};
__proEListItem.__onEdit=function(_command){
if(!this.__eopt.iclass)return;
this.__eopt.data=this.__data;
this.__eopt.onok=this
.__onEditCallback._$bind(this,_command);
this.__editor=this.__eopt.iclass._$allocate(
this.__eopt.parent||this.__body,this.__eopt);
};
__proEListItem.__onEditCallback=function(_command,_input){
var _item={itm:this.__data,ipt:_input};
_command==1?this.__onUpdateCallback(1,_item)
:this._$dispatchEvent('onadd',_item);
};
__proEListItem.__onAdd=function(){
this.__onEdit(0);
};
__proEListItem.__onUpdate=function(){
this.__onEdit(1);
};
__proEListItem.__onUpdateCallback=function(_command,_item){
_item=_item||{};
_command==2&&(_item={itm:_item});
_item.cmd=_command||0;
_item.obj=this.__data;
this._$dispatchEvent('onupdate',_item);
};
__proEListItem.__onDelete=function(){
if(!window.confirm('确定要删除该记录？'))return;
this._$dispatchEvent('ondelete',this.__data);
};
p._$$EListModule=C();
__proEListModule=p._$$EListModule._$extend(P(N.fw)._$$ListModule);
__proEListModule._$resetCache=function(_cache){
p._$$EListModule._$supro._$resetCache.call(this,_cache);
if(!this.__cache)return;
this.__cache._$addEvent('onitemadd',this.__cbAddItem._$bind(this));
this.__cache._$addEvent('onitemdelete',this.__cbDeleteItem._$bind(this));
this.__cache._$addEvent('onitemupdate',this.__cbUpdateItem._$bind(this));
};
__proEListModule._$resetOption=function(_options){
_options=_options||O;
_options.oitem=_options.oitem||{};
_options.oitem.oedit=_options.oedit||{};
_options.oitem.onadd=this.__onAddItem._$bind(this);
_options.oitem.ondelete=this.__onDeleteItem._$bind(this);
_options.oitem.onupdate=this.__onUpdateItem._$bind(this);
var _function=this.__onListUpdate._$bind(this);
this._$addEvent('onitemadd',_options.onitemadd||_function);
this._$addEvent('onitemdelete',_options.onitemdelete||_function);
this._$addEvent('onitemupdate',_options.onitemupdate||_function);
p._$$EListModule._$supro._$resetOption.call(this,_options);
};
__proEListModule._$addItem=function(_item){
if(!_item)return;
this.__onAddItem(_item);
};
__proEListModule.__clearCacheEvent=function(){
if(!this.__cache)return;
this.__cache._$delEvent('onitemadd');
this.__cache._$delEvent('onitemdelete');
this.__cache._$delEvent('onitemupdate');
p._$$EListModule._$supro.__clearCacheEvent.call(this);
};
__proEListModule.__onListUpdate=function(_isok){
!!_isok?this._$refresh()
:E._$showHint('暂时无法完成操作，请稍后再试！',true);
};
__proEListModule.__onAddItem=function(_item){
this.__copt.item=_item;
this.__cache._$addItem(this.__copt);
};
__proEListModule.__cbAddItem=function(_info){
this._$dispatchEvent('onitemadd',_info,this.__copt);
};
__proEListModule.__onDeleteItem=function(_data){
this.__copt.item=_data;
this.__cache._$deleteItem(this.__copt);
};
__proEListModule.__cbDeleteItem=function(_info){
this._$dispatchEvent('onitemdelete',_info,this.__copt);
};
__proEListModule.__onUpdateItem=function(_item){
this.__copt.item=_item;
this.__cache._$updateItem(this.__copt);
};
__proEListModule.__cbUpdateItem=function(_info){
this._$dispatchEvent('onitemupdate',_info,this.__copt);
};
})();
(function(){
var p=P(N.fw),
__proModule,
__proModuleManager;
p._$$Module=C();
__proModule=p._$$Module._$extend(P(N.ut)._$$Event);
__proModule._$initialize=function(_box,_options){
this._$super();
this.__setOption(_options);
this.__body=this.__getXnode();
this.__parent=E._$getElement(_box);
if(!this.__parent||!this.__body)return;
this.__parent.appendChild(this.__body);
};
__proModule._$hide=function(){
this.__body.style.display='none';
};
__proModule._$show=function(_options){
this.__body.style.display='';
};
__proModule.__setOption=function(_options){
_options=_options||O;
this._$addEvent('onredirect',_options.onredirect||F);
};
__proModule.__getXnode=F;
__proModule._$destroy=F;
var __parseHash=function(_hash){
_hash=_hash||'';
if(!U._$isType(_hash,'string'))
return _hash;
_hash=U._$trim(_hash);
_hash=_hash.substr(_hash.indexOf('#')+1);
var _rst={};
if(!_hash)return _rst;
_hash=_hash.split('&');
for(var i=0,l=_hash.length,d;i<l;i++){
d=_hash[i].indexOf('=');
_rst[_hash[i].substring(0,d)]
=_hash[i].substr(d+1)||'';
}
return _rst;
};
var __isModule=function(_module){
return _module instanceof p._$$Module;
};
p._$$ModuleManager=C();
__proModuleManager=p._$$ModuleManager._$extend(P(N.ut)._$$Event);
__proModuleManager._$initialize=function(_key,_map,_options){
this._$super();
this.__key=_key||'m';
this.__map=_map||{};
this.__opt=_options||O;
this._$addEvent('onbeforechange',this.__opt.onbeforechange);
if(!!this.__opt.monitor)
P(N.ut)._$$HashMonitor
._$getInstance({interval:100,
url:'/src/crossdomain.html',
onchange:this._$dispatchModule._$bind(this)});
};
__proModuleManager._$redirect=function(_hash){
!this.__opt.monitor?this._$dispatchModule(_hash)
:P(N.ut)._$$HashMonitor._$getInstance()._$replace(_hash);
};
__proModuleManager._$getModule=function(_key){
var _module=this.__map[_key];
return __isModule(_module)?_module:null;
};
__proModuleManager._$getCurrentModule=function(){
return this._$getModule(this.__index);
};
__proModuleManager._$isCurrentModule=function(_key){
return this.__hash[this.__key]==_key;
};
__proModuleManager._$dispatchModule=function(_hash){
_hash=__parseHash(_hash);
if(!_hash)return;
var _key=_hash[this.__key],
_new=this.__map[_key],
_okey=this.__hash&&this.__hash[this.__key]||'';
if(!_new){
this._$redirect(this.__opt.hash);
return;
}
this._$dispatchEvent('onbeforechange',_hash,this.__hash);
this.__hash=_hash;
if(!__isModule(_new)){
var _opt=_new.o||{};
_opt.referrer=_okey;
_opt.onredirect=this._$redirect._$bind(this);
_new=new _new.c(this.__opt.box,_opt);
this.__map[_key]=_new;
}
if(!__isModule(_new))return;
var _old=this.__map[this.__index];
this.__index!=_key&&__isModule(_old)&&_old._$hide();
this.__index=_key;
_new._$show(_hash);
};
})();
(function(){
var p=P(N.ui),
__proETIcon,
__supETIcon,
__proEditorToolBar,
__supEditorToolBar,
__uispace='itm-'+U._$randNumberString();
var __getStyle=function(){
var _arr=[],_row=20,_col=3;
for(var i=0;i<_row;i++)
for(var j=0;j<_col;_arr.push('.z-icn-'+i+j+
'{background-position:-'+(16*j)+'px -'+(40+i*16)+'px;}'),j++);
_row=5;
for(var i=0;i<_row;i++)
for(var j=0;j<_col;_arr.push('.z-xcn-'+i+j+
'{background-position:-'+(80+26*j)+'px -'+(70+i*26)+'px;}'),j++);
return _arr.join('');
};
p._$pushStyle('#<uispace>,#<uispace> .zicn,#<uispace>-box .zsel .zdwn{background-image:url('+N.rc.r+'editor/editor.png?t=20100526);background-repeat:no-repeat;}\
               #<uispace>{position:relative;float:left;width:24px;height:24px;text-align:center;cursor:pointer;background-position:500px 500px;zoom:1;}\
               #<uispace> .ztxt{display:none;}\
               #<uispace> .zicn{width:16px;height:16px;overflow:hidden;text-indent:-300px;margin:4px auto 0;}\
               #<uispace>:hover,#<uispace>-hover{background-position:0 0;}\
               #<uispace>-select,#<uispace>-select:hover{background-position:-30px 0;}\
               #<uispace>-big{width:38px;height:62px;}\
               #<uispace>-big .ztxt{display:block;line-height:24px;}\
               #<uispace>-big .zicn{width:26px;height:26px;margin-top:7px;}\
               #<uispace>-big:hover,#<uispace>-big-hover{background-position:-80px 0;}\
               #<uispace>-big-select,#<uispace>-big-select:hover{background-position:-120px 0;}\
               #<uispace>-disable,#<uispace>-disable:hover{background-position:500px 500px;cursor:default;}\
               #<uispace>-disabled{position:absolute;top:0;left:0;right:0;bottom:0;z-index:20;width:100%;height:100%;background:#eee;opacity:0.7;filter:alpha(opacity=70);}\
               #<uispace>-box{position:relative;height:24px;padding:5px;zoom:1;}\
               #<uispace>-box a{text-decoration:none;}\
               #<uispace>-box .zfce{top:35px;left:-160px;}\
               #<uispace>-big .zfce{top:70px;}\
               #<uispace>-box .zclr{top:26px;left:0;}\
               #<uispace>-box .zare,#<uispace>-box .zsep{float:left;}\
               #<uispace>-box .zarv{position:relative;z-index:21;}\
               #<uispace>-box .zsep{width:10px;height:24px;background:url('+N.rc.r+'editor/editor.png) no-repeat -60px 0;}\
               #<uispace>-box .zsel{position:relative;float:left;margin:1px 2px 0;font-size:12px;border:1px solid #c5c5c5;background:#fff;text-align:left;cursor:pointer;zoom:1;}\
               #<uispace>-box .zsel .ztxt{line-height:20px;padding:0 5px;font-family:simsun;vertical-align:top;}\
               #<uispace>-box .zsel .zdwn{width:18px;height:20px;line-height:20px;background-position:2px -244px;}\
               #<uispace>-box .zsel .zcrd{top:22px;left:-1px;}\
               #<uispace>-box .zsel .zlfs{width:30px;}\
               #<uispace>-box .zsel .zlfm{width:90px;}\
               #<uispace>-box .z-icn-150,#<uispace>-box .zovr{position:relative;z-index:30;zoom:1;}'+__getStyle(),__uispace);
p._$$EditorToolBar=C();
__proEditorToolBar=p._$$EditorToolBar._$extend(p._$$UIAbstract,true);
__supEditorToolBar=p._$$EditorToolBar._$supro;
__proEditorToolBar._$initialize=function(_parent,_options){
this.__icch={i:[],e:[]};
this.__iopt={oncommand:this.__onCommand._$bind(this)};
this.__fopt={onselect:this.__onFaceSelect._$bind(this),'class':'zfce'};
this.__sopt={onselect:this.__onFontSizeSelect._$bind(this),'class':'zcrd'};
this.__mopt={onselect:this.__onFontFamilySelect._$bind(this),'class':'zcrd'};
this.__copt={onselect:this._$dispatchEvent._$bind(this,'oncommand','forecolor'),'class':'zclr'};
this.__bopt={onselect:this._$dispatchEvent._$bind(this,'oncommand',B._$ISFF?'hilitecolor':'backcolor'),clear:'#ffffff','class':'zclr'};
var _command=this._$dispatchEvent._$bind(this,'oncommand'),
_function=this._$dispatchEvent._$bind(this,'oncommand','inserthtml');
this.__topt={onok:_function};
this.__uopt={onok:_function};
this.__popt={onok:_function};
this.__vopt={onok:_function,oncommand:_command};
this.__lopt={onok:_function,oncommand:_command};
this.__ncvr=document.cloneElement('div',__uispace+'-disabled');
this._$super(_parent,_options);
};
__proEditorToolBar._$resetOption=function(_options){
_options=_options||O;
this.__uopt.xconf=_options.xconf||O;
this.__popt.xconf=_options.xconf||O;
this._$addEvent('oncommand',_options.oncommand||F);
__supEditorToolBar._$resetOption.apply(this,arguments);
};
__proEditorToolBar._$getSyncCommands=function(){
return this.__icch.i;
};
__proEditorToolBar._$getChekCommands=function(){
return this.__icch.e;
};
__proEditorToolBar._$getValueCommands=function(){
return this.__icch.v;
};
__proEditorToolBar._$disable=function(_disabled){
!_disabled?E._$removeElementByEC(this.__ncvr)
:this.__body.appendChild(this.__ncvr);
if(!_disabled||!B._$ISOLDIE)return;
this.__ncvr.style.height=this.__body.offsetHeight+'px';
};
__proEditorToolBar._$checked=function(_command,_disabled){
var _item=this.__icch[_command];
if(!!_item)_item._$disable(_disabled);
};
__proEditorToolBar._$select=function(_command,_selected){
var _item=this.__icch[_command];
if(!!_item)_item._$select(_selected);
};
__proEditorToolBar._$valued=function(_command,_value){
switch(_command){
case'fontsize':
var _desc;
if(!!p._$$EDTFontSize)
_desc=p._$$EDTFontSize._$getFontDescBySize(_value);
this.__ftxt.innerText=_desc||'标准';
return;
case'fontname':
var _desc;
if(!!p._$$EDTFontFamily)
_desc=p._$$EDTFontFamily._$getFamilyName(_value);
this.__mtxt.innerText=_desc||'Arial';
return;
}
};
__proEditorToolBar._$insertPhoto=function(){
!p._$$EDTWinPhoto||p._$$EDTWinPhoto._$show(this.__popt);
};
__proEditorToolBar.__getSpace=function(_uispace){
return _uispace+' '+__uispace+'-box';
};
__proEditorToolBar.__intXnode=function(){
if(!!this.__ftxt){
var _ntmp=this.__ftxt.parentNode;
this.__sopt.parent=_ntmp;
V._$addEvent(_ntmp,'click',this.__onCardShow._$bind(this,'fontsize'));
}
if(!!this.__mtxt){
var _ntmp=this.__mtxt.parentNode;
this.__mopt.parent=_ntmp;
V._$addEvent(_ntmp,'click',this.__onCardShow._$bind(this,'fontname'));
}
};
__proEditorToolBar.__buildToolbar=function(_nodes,_config){
if(!_nodes||!_nodes.length)return;
for(var i=0,l=_nodes.length;i<l;this.__buildItemHash
(p._$$ETIcon._$allocate(_config[i],_nodes[i],this.__iopt)),i++);
};
__proEditorToolBar.__buildItemHash=function(_items){
if(!_items||!_items.length)return;
for(var i=0,l=_items.length,_item,_data;i<l;i++){
_item=_items[i];
_data=_item._$getData();
this.__icch[_data.cmd]=_item;
if(!!_data.stt)this.__icch.i.push(_data.cmd);
if(!!_data.enb)this.__icch.e.push(_data.cmd);
}
};
__proEditorToolBar.__onFontSizeSelect=function(_fontsize){
this.__ftxt.innerText=_fontsize[1];
this._$dispatchEvent('oncommand','fontsize',_fontsize[0]);
};
__proEditorToolBar.__onFontFamilySelect=function(_family){
this.__mtxt.innerText=_family;
this._$dispatchEvent('oncommand','fontname',_family);
};
__proEditorToolBar.__onFaceSelect=function(_face){
this._$dispatchEvent('oncommand','inserthtml','<img src="'+_face+'"/>');
};
__proEditorToolBar.__onCardShow=function(_type,_event){
V._$stop(_event);
V._$dispatchEvent(document,'click');
switch(_type){
case'fontsize':
!p._$$EDTFontSize||p._$$EDTFontSize._$show(this.__sopt);
return;
case'fontname':
!p._$$EDTFontFamily||p._$$EDTFontFamily._$show(this.__mopt);
return;
}
};
__proEditorToolBar.__onCommand=function(_config){
var _command=_config.cmd,_value,_parent;
if(!!_config.crd)_parent=this.__icch[_command]._$getBody();
switch(_command){
case'forecolor':
this.__copt.parent=_parent;
!p._$$EDTColorPicker||p._$$EDTColorPicker._$show(this.__copt);
return;
case'backcolor':
this.__bopt.parent=_parent;
!p._$$EDTColorPicker||p._$$EDTColorPicker._$show(this.__bopt);
return;
case'face':
this.__fopt.parent=_parent;
!p._$$ComplexPortrait||p._$$ComplexPortrait._$show(this.__fopt);
return;
case'table':
!p._$$EDTWinTable||p._$$EDTWinTable._$show(this.__topt);
return;
case'photo':
this._$insertPhoto();
return;
case'video':
!p._$$EDTWinMedia||p._$$EDTWinMedia._$show(this.__vopt);
return;
case'flash':
!p._$$EDTWinFlash||p._$$EDTWinFlash._$show(this.__lopt);
return;
case'music':
!p._$$EDTWinMusic||p._$$EDTWinMusic._$show(this.__uopt);
return;
case'removeformat':
if(!window.confirm('"清除格式"将修改文章的格式,确定清除？'))return;
break;
}
this._$dispatchEvent('oncommand',_command,_value);
};
p._$$ETIcon=C();
__proETIcon=p._$$ETIcon._$extend(P(N.ut)._$$Item,true);
__supETIcon=p._$$ETIcon._$supro;
__proETIcon._$initialize=function(){
this._$super();
this.__body=document.cloneElement('div','zitm '+__uispace);
this.__body.innerHTML='<div class="zicn">&nbsp;</div><div class="ztxt">&nbsp;</div>';
var _ntmp=E._$getChildElements(this.__body);
this.__icon=_ntmp[0];
this.__itxt=_ntmp[1];
V._$addEvent(this.__body,'click',this.__onCommand._$bind(this));
if(!B._$ISOLDIE)return;
V._$addEvent(this.__body,'mouseenter',this.__onMouseEnter._$bind(this));
V._$addEvent(this.__body,'mouseleave',this.__onMouseLeave._$bind(this));
};
__proETIcon._$reset=function(_options){
_options=_options||O;
this._$addEvent('oncommand',_options.oncommand||F);
};
__proETIcon._$setData=function(_data){
__supETIcon._$setData.apply(this,arguments);
var _big='';
if(!!this.__data.big){
_big='-big';
E._$addClassName(this.__body,__uispace+'-big');
}
this.__cdsb=__uispace+'-disable';
this.__chvr=__uispace+_big+'-hover';
this.__csel=__uispace+_big+'-select';
var _text=this.__data.dsc||' ';
this.__body.title=_text;
this.__icon.innerText=_text;
this.__itxt.innerText=this.__data.txt||_text;
E._$addClassName(this.__icon,this.__data.icn);
};
__proETIcon._$getBody=function(){
return this.__body;
};
__proETIcon._$destroy=function(){
__supETIcon._$destroy.apply(this,arguments);
this._$select(false);
this._$disable(false);
this.__onMouseLeave();
E._$delClassName(this.__icon,this.__data.icn);
E._$delClassName(this.__body,__uispace+'-big');
};
__proETIcon._$select=function(_selected){
!_selected?E._$delClassName(this.__body,this.__csel)
:E._$addClassName(this.__body,this.__csel);
};
__proETIcon._$disable=function(_disabled){
if(!_disabled){
E._$delClassName(this.__body,this.__cdsb);
E._$replaceClassName(this.__icon,this.__data.dcs,this.__data.icn);
}else{
E._$addClassName(this.__body,this.__cdsb);
E._$replaceClassName(this.__icon,this.__data.icn,this.__data.dcs);
}
};
__proETIcon._$disabled=function(){
return E._$hasClassName(this.__body,this.__cdsb);
};
__proETIcon._$display=function(_display){
this.__body.style.display=!_display?'none':'';
};
__proETIcon.__onCommand=function(_event){
if(this._$disabled())return;
if(!!this.__data.crd){
V._$stopBubble(_event);
V._$dispatchEvent(document,'click');
}
this._$dispatchEvent('oncommand',this.__data);
};
__proETIcon.__onMouseEnter=function(){
E._$addClassName(this.__body,this.__chvr);
};
__proETIcon.__onMouseLeave=function(){
E._$delClassName(this.__body,this.__chvr);
};
})();
(function(){
var p=P(N.ui),
__proComplexEditorToolBar,
__supComplexEditorToolBar,
__uispace='ui-'+U._$randNumberString(),
__iconfig=[[{icn:'z-icn-00',dsc:'保存',cmd:'save'},
{icn:'z-icn-10',dsc:'撤消[Ctrl+Z]',txt:'撤消',cmd:'undo',enb:true,dcs:'z-icn-11'},
{icn:'z-icn-20',dsc:'恢复[Ctrl+Y]',txt:'恢复',cmd:'redo',enb:true,dcs:'z-icn-21'}],
[{icn:'z-icn-30',dsc:'加粗',cmd:'bold',stt:true},
{icn:'z-icn-31',dsc:'倾斜',cmd:'italic',stt:true},
{icn:'z-icn-32',dsc:'下划线',cmd:'underline',stt:true},
{icn:'z-icn-40',dsc:'删除线',cmd:'strikethrough',stt:true},
{icn:'z-icn-41',dsc:'字体颜色',cmd:'forecolor',crd:true},
{icn:'z-icn-122',dsc:'背景颜色',cmd:'backcolor',crd:true},
{icn:'z-icn-42',dsc:'超链接',cmd:'link'}],
[{icn:'z-icn-50',dsc:'左对齐',cmd:'justifyleft',stt:true},
{icn:'z-icn-51',dsc:'居中对齐',cmd:'justifycenter',stt:true},
{icn:'z-icn-52',dsc:'右对齐',cmd:'justifyright',stt:true}],
[{icn:'z-icn-80',dsc:'插入表情',cmd:'face',crd:true},
{icn:'z-icn-81',dsc:'插入图片',cmd:'photo'},
{icn:'z-icn-82',dsc:'插入视频',cmd:'video'},
{icn:'z-icn-90',dsc:'插入音乐',cmd:'music'}],
[{icn:'z-icn-150',dsc:'源代码',cmd:'source'}]
];
p._$$ComplexEditorToolBar=C();
__proComplexEditorToolBar=p._$$ComplexEditorToolBar._$extend(p._$$EditorToolBar,true);
__supComplexEditorToolBar=p._$$ComplexEditorToolBar._$supro;
__proComplexEditorToolBar.__getSpace=function(){
return __supComplexEditorToolBar.__getSpace.call(this,__uispace);
};
__proComplexEditorToolBar.__getXhtml=function(){
return'<div class="zare ztag"></div>\
            <div class="zsep">&nbsp;</div>\
            <div class="zare ztag"><div class="zsel"><span class="ztxt zlfs xtag iblock">字号</span><span class="zdwn iblock">&nbsp;</span></div></div>\
            <div class="zsep">&nbsp;</div>\
            <div class="zare ztag"></div>\
            <div class="zsep">&nbsp;</div>\
            <div class="zare ztag"></div>\
            <div class="zsep">&nbsp;</div>\
            <div class="zare ztag zarv"></div>';
};
__proComplexEditorToolBar.__intXnode=function(){
this.__icch.v=['fontsize'];
var _ntmp=E._$getChildElements(this.__body,'ztag');
this.__buildToolbar(_ntmp,__iconfig);
this.__ftxt=E._$getElementsByClassName(_ntmp[1],'xtag')[0];
__supComplexEditorToolBar.__intXnode.apply(this,arguments);
};
})();
(function(){
var p=P(N.ui),
__proAdvanceEditorToolBar,
__supAdvanceEditorToolBar,
__uispace='ui-'+U._$randNumberString(),
__iconfig=[[{icn:'z-xcn-00',dsc:'保存',cmd:'save',big:true}],
[{icn:'z-icn-10',dsc:'撤消[Ctrl+Z]',txt:'撤消',cmd:'undo',enb:true,dcs:'z-icn-11'}],
[{icn:'z-icn-20',dsc:'恢复[Ctrl+Y]',txt:'恢复',cmd:'redo',enb:true,dcs:'z-icn-21'}],
[{icn:'z-xcn-01',dsc:'复制[Ctrl+C]',txt:'复制',cmd:'copy',big:true,enb:true,dcs:'z-xcn-21'}],
[{icn:'z-icn-02',dsc:'剪切[Ctrl+X]',txt:'剪切',cmd:'cut',enb:true,dcs:'z-icn-12'}],
[{icn:'z-icn-01',dsc:'粘贴[Ctrl+V]',txt:'粘贴',cmd:'paste',enb:true,dcs:'z-icn-22'}],null,
[{icn:'z-icn-30',dsc:'加粗',cmd:'bold',stt:true},
{icn:'z-icn-31',dsc:'倾斜',cmd:'italic',stt:true},
{icn:'z-icn-32',dsc:'下划线',cmd:'underline',stt:true},
{icn:'z-icn-40',dsc:'删除线',cmd:'strikethrough',stt:true},
{icn:'z-icn-41',dsc:'字体颜色',cmd:'forecolor',crd:true},
{icn:'z-icn-122',dsc:'背景颜色',cmd:'backcolor',crd:true},
{icn:'z-icn-42',dsc:'超链接',cmd:'link'},
{icn:'z-icn-60',dsc:'分隔线',cmd:'inserthorizontalrule'},
{icn:'z-icn-72',dsc:'清除格式',cmd:'removeformat'}],
[{icn:'z-icn-61',dsc:'数字列表',cmd:'insertorderedlist',stt:true},
{icn:'z-icn-62',dsc:'符号列表',cmd:'insertunorderedlist',stt:true},
{icn:'z-icn-70',dsc:'增加缩进',cmd:'indent'},
{icn:'z-icn-71',dsc:'减少缩进',cmd:'outdent'}],
[{icn:'z-icn-50',dsc:'左对齐',cmd:'justifyleft',stt:true},
{icn:'z-icn-51',dsc:'居中对齐',cmd:'justifycenter',stt:true},
{icn:'z-icn-52',dsc:'右对齐',cmd:'justifyright',stt:true},
{icn:'z-icn-151',dsc:'段落化',cmd:'paragraph'}],
[{icn:'z-xcn-02',dsc:'插入表情',txt:'表情',cmd:'face',big:true,crd:true},
{icn:'z-xcn-10',dsc:'插入图片',txt:'插图',cmd:'photo',big:true},
{icn:'z-xcn-22',dsc:'插入表格',txt:'表格',cmd:'table',big:true},
{icn:'z-xcn-11',dsc:'插入视频',txt:'视频',cmd:'video',big:true},
{icn:'z-xcn-12',dsc:'插入音乐',txt:'音乐',cmd:'music',big:true},
{icn:'z-xcn-20',dsc:'插入flash',txt:'flash',cmd:'flash',big:true}],null,
[{icn:'z-icn-150',dsc:'源代码',cmd:'source'}]];
p._$pushStyle('#<uispace>{height:62px;}\
               #<uispace> .zthz{position:relative;z-index:2;padding-top:5px;}\
               #<uispace> .zbhz{position:relative;z-index:1;padding-top:4px;}\
               #<uispace> .zsep{height:62px;background-position:-160px 0;}\
               #<uispace> .zhod{float:left;width:24px;height:24px;}\
               #<uispace> .zsp0{margin-left:3px}\
               #<uispace> .zsp1{margin:0 3px}\
               #<uispace> .zare2 .zsel .zlfm{width:113px;}\
               #<uispace> .zare2 .zsel .zlfs{width:35px;}\
               #<uispace> .zare0,\
               #<uispace> .zare1{_width:28px;}\
               #<uispace> .zare2{_width:218px;}\
               #<uispace> .zare3{_width:100px;}',__uispace);
p._$$AdvanceEditorToolBar=C();
__proAdvanceEditorToolBar=p._$$AdvanceEditorToolBar._$extend(p._$$EditorToolBar,true);
__supAdvanceEditorToolBar=p._$$AdvanceEditorToolBar._$supro;
__proAdvanceEditorToolBar.__getSpace=function(){
return __supAdvanceEditorToolBar.__getSpace.call(this,__uispace);
};
__proAdvanceEditorToolBar.__getXhtml=function(){
return'<div class="zare ztag clearfix"></div>\
            <div class="zare zare0">\
              <div class="zhrz ztag zthz clearfix"></div>\
              <div class="zhrz ztag zbhz clearfix"></div>\
            </div>\
            <div class="zsep zsp0">&nbsp;</div>\
            <div class="zare ztag clearfix"></div>\
            <div class="zare zare0">\
              <div class="zhrz ztag zthz clearfix"></div>\
              <div class="zhrz ztag zbhz clearfix"></div>\
            </div>\
            <div class="zsep zsp1">&nbsp;</div>\
            <div class="zare zare2">\
              <div class="zhrz ztag zthz clearfix">\
                <div class="zsel"><span class="ztxt zlfm xtag iblock">字体</span><span class="zdwn iblock">&nbsp;</span></div>\
                <div class="zsel"><span class="ztxt zlfs xtag iblock">字号</span><span class="zdwn iblock">&nbsp;</span></div>\
              </div>\
              <div class="zhrz ztag zbhz clearfix"></div>\
            </div>\
            <div class="zsep zsp1">&nbsp;</div>\
            <div class="zare zare3">\
              <div class="zhrz ztag zthz clearfix"></div>\
              <div class="zhrz ztag zbhz clearfix"></div>\
            </div>\
            <div class="zsep zsp0">&nbsp;</div>\
            <div class="zare ztag clearfix"></div>\
            <div class="zsep zsp1">&nbsp;</div>\
            <div class="zare zare0 zarv">\
              <div class="zhrz ztag zthz clearfix"><div class="zhod">&nbsp;</div></div>\
              <div class="zhrz ztag zbhz clearfix"></div>\
            </div>';
};
__proAdvanceEditorToolBar.__intXnode=function(){
this.__icch.v=['fontname','fontsize'];
var _ntmp=E._$getElementsByClassName(this.__body,'ztag');
this.__buildToolbar(_ntmp,__iconfig);
_ntmp=E._$getElementsByClassName(this.__body,'xtag');
this.__mtxt=_ntmp[0];
this.__ftxt=_ntmp[1];
__supAdvanceEditorToolBar.__intXnode.apply(this,arguments);
};
})();
(function(){
var p=P(N.ui),
__proARCEditor,
__supARCEditor,
__proARCHistory,
__proARCClipBoard,
__uispace='ui-'+U._$randNumberString(),
__reg_hstr=/^(?:redo|undo)$/i,
__reg_ctrl=/^(?:img|table|object|embed)$/i,
__reg_hsmd=/<(?:img|table|object|embed)\b/i,
__reg_cstl=/(<[^\/>]+?)\sstyle\s?=\s?(?:".*?"|[^\s>]+)(.*?>)/gi,
__reg_ccls=/(<[^\/>]+?)\sclass\s?=\s?(?:".*?"|[^\s>]+)(.*?>)/gi,
__reg_caln=/(<[^\/>]+?)\salign\s?=\s?(?:".*?"|[^\s>]+)(.*?>)/gi,
__reg_none=/^(?:<p.*?>&nbsp;<\/p>)+$/i,
__reg_brln=/^(<[\w]+?>)?\s*<br\/?>[\s\n\r]*/i,
__reg_nwrp=/(?:<br\/?>[\s\n\r]*){2,}/gi,
__reg_nwrd=/<\/?[\w]+:[\w]+.*?>/gi,
__reg_flnh=/\f/g,
__reg_flns=/\n|\r/g,
__reg_fzag=/<(style|script).*?>.*?<\/\1>/gi,
__reg_ftag=/<\/?(?:meta|link|!--\[.+?\]--|[\w]+:[\w]+).*?>/gi,
__reg_ctag=/<(\/?)(?:!(?:--)?\[)?([^!]+?)(?=\s|>).*?>/gi,
__reg_tnln=/^(?:ol|ul|li|blockquote|div|code|h\d)$/i,
__reg_tcmd=/<\/?(?:span|div|h2|h3|code|center|form|input|select|textarea|iframe|img|a).*?>/i,
__reg_tclr=/^(?:font|span|center|sohu|form|input|select|textarea|iframe|strong|b|u|i|s|em|sub|sup|link|script|strike)$/i,
__reg_rmda=/<embed.*?>(<\/embed>)?/gi,
__reg_rimg=/<img[^>]*?id="__(?:music|media)_replacement_[\d]+?".*?name="(.*?)".*?>/gi;
p._$pushStyle('#<uispace>{position:absolute;right:0;top:0;width:1px;height:1px;overflow:hidden;visibility:hidden;}',__uispace);
var __hasWrdContentFF=function(_html){
return B._$ISFF&&(_html||'').indexOf('<w:WordDocument>')>=0;
};
var __hasWrdContentNFF=function(_html){
return!B._$ISFF&&(_html||'').search('</?[\\w]+:[\\w]+.*?>')>=0;
};
var __removeFormat=function(_html){
return(_html||'').replace(__reg_fzag,'')
.replace(__reg_cstl,'$1$2')
.replace(__reg_caln,'$1$2')
.replace(__reg_ctag,function($1,$2,$3){
if(__reg_tclr.test($3))return'';
if(__reg_tnln.test($3))return'<br/>';
if($3.toLowerCase()=='p'&&$2!='/')
return'<p style="text-indent:2em;">';
return $1;
})
.replace(__reg_nwrp,'<br/>')
.replace(__reg_brln,'$1');
};
var __getMusicReplacement=function(_source){
return'<img src="'+N.rc.r+'empty.png" style="border:1px solid #ccc;background:#eee url('+N.rc.r+'spirit.png) no-repeat center center;" width="210" height="31" id="__MUSIC_REPLACEMENT_'+U._$randNumberString(8)+'" name="'+_source+'"/>';
};
var __getMediaReplacement=function(_source){
return'<img src="'+N.rc.r+'empty.png" style="border:1px solid #ccc;background:#eee url('+N.rc.r+'media.png) no-repeat center center;" width="500" height="300" id="__MEDIA_REPLACEMENT_'+U._$randNumberString(8)+'" name="'+_source+'"/>';
};
p._$$ARCEditor=C();
__proARCEditor=p._$$ARCEditor._$extend(P(N.ut)._$$RichEditor);
__supARCEditor=p._$$ARCEditor._$supro;
p._$$ARCEditor._$parseMedia=function(_content){
return(_content||'').replace(__reg_rimg,function($1,$2){
return decodeURIComponent($2);
});
};
p._$$ARCEditor._$replaceMedia=function(_content){
if(!B._$ISFF)return _content;
return(_content||'').replace(__reg_rmda,function($1){
var _source=encodeURIComponent($1);
return $1.indexOf('src="'+N.rc.r+'spirit.swf')>=0
?__getMusicReplacement(_source):__getMediaReplacement(_source);
});
};
__proARCEditor._$initialize=function(_parent,_options){
this._$super(_parent,_options);
window.setTimeout(this.__initSubIFrame._$bind(this),100);
};
__proARCEditor._$resetOption=function(_options){
_options=_options||O;
this.__mheight=parseInt(_options.minheight)||0;
this._$addEvent('onblur',_options.onblur||F);
this._$addEvent('ondblclick',_options.ondblclick||F);
this._$addEvent('oncontrolselect',_options.oncontrolselect||F);
this._$addEvent('onselectionchange',_options.onselectionchange||F);
this.__toBegin=!!_options.toBegin;
__supARCEditor._$resetOption.apply(this,arguments);
};
__proARCEditor._$value=function(_command){
try{return!!this.__document&&this.__document.queryCommandValue(_command)||'';}catch(e){return'';}
};
__proARCEditor._$enabled=function(_command){
try{
switch((_command||'').toLowerCase()){
case'cut':return!!this.__clipboard&&this.__clipboard._$canCut();
case'copy':return!!this.__clipboard&&this.__clipboard._$canCopy();
case'paste':return!!this.__clipboard&&this.__clipboard._$canPaste();
case'redo':if(B._$ISIE)return!!this.__history&&this.__history._$canRedo();
case'undo':if(B._$ISIE)return!!this.__history&&this.__history._$canUndo();
}
return!!this.__document&&this.__document.queryCommandEnabled(_command);
}catch(e){return false;}
};
__proARCEditor._$commanded=function(_command){
try{return!!this.__document&&this.__document.queryCommandState(_command);}catch(e){return false;}
};
__proARCEditor._$execCommand=function(_command,_value,_flag){
_command=(_command||'').toLowerCase();
if(B._$ISIE&&__reg_hstr.test(_command)){
if(!this.__history)return;
_command=='redo'?this.__history._$redo()
:this.__history._$undo();
this.__onSelectionChange();return;
}
this._$focus();
switch(_command){
case'cut':!!this.__clipboard&&this.__clipboard._$cut();break;
case'copy':!!this.__clipboard&&this.__clipboard._$copy();return;
case'paste':!!this.__clipboard&&this.__clipboard._$paste();break;
default:__supARCEditor._$execCommand.apply(this,arguments);break;
}
if(_command=='removeformat')this.__removeFormat();
if(B._$ISIE)this.__saveIEHistory();
this.__onSelectionChange();
};
__proARCEditor._$setContent=function(_content,_notend){
__supARCEditor._$setContent.apply(this,arguments);
if(!!this.__history)this.__history._$clear();
if(!!this.__document)this.__onSelectionChange();
!!_notend?this.__cursorBegin():this.__cursorEnd();
};
__proARCEditor._$getContent=function(){
var _content=__supARCEditor._$getContent.call(this);
return this.__removeFormatWrd(_content).replace(__reg_ccls,'$1$2');
};
__proARCEditor._$parseContent=function(_content){
var _body;
try{_body=this.__nsub.contentWindow.document.body;}catch(e){}
if(!_body)return _content;
_body.innerHTML='<wbr/>'+_content;
_content=_body.innerHTML;
_body.innerHTML='';
return this.__filterContent(_content);
};
__proARCEditor._$getSelection=function(){
this._$focus();
if(!!document.selection)return this.__document.selection.createRange();
if(!!window.getSelection)return this.__window.getSelection();
if(!!document.getSelection)return this.__document.getSelection();
};
__proARCEditor._$getSelectNode=function(){
var _range=this._$getSelection();
if(!_range)return null;
if(!!document.selection)
return!!_range.item&&_range.item(0)||_range.parentElement();
_range=_range.getRangeAt(0);
var _delta=Math.abs(_range.startOffset-_range.endOffset);
if(!_delta)return null;
if(_delta>1)return _range.commonAncestorContainer;
return _range.startContainer.childNodes[_range.startOffset];
};
__proARCEditor._$getSelectHtml=function(){
var _range=this._$getSelection();
if(!_range)return'';
if(!!document.selection)
return _range.htmlText||'';
_range=_range.getRangeAt(0);
if(!_range)return'';
var _ntmp=document.cloneElement('div');
_ntmp.appendChild(_range.cloneContents());
return _ntmp.innerHTML;
};
__proARCEditor._$getSelectText=function(){
var _range=this._$getSelection();
if(!_range)return'';
return!!document.selection?_range.text:_range.toString();
};
__proARCEditor._$getSelectType=function(){
if(!!document.selection){
this._$focus();
return(this.__document.selection.type||'').toLowerCase();
}
var _node=this._$getSelectNode();
if(!_node)return'none';
return __reg_ctrl.test(_node.tagName)?'control':'text';
};
__proARCEditor._$hasControlType=function(){
return this._$getSelectHtml().search(__reg_hsmd)>=0;
};
__proARCEditor.__initSubIFrame=function(){
this.__nsub=document.cloneElement('iframe',__uispace);
this.__nsub.src=this.__iframe.src;
document.body.appendChild(this.__nsub);
};
__proARCEditor.__cursorEnd=function(){
if(!this.__document||!this.__document.body)return;
var _range=this._$getSelection();
if(!_range)return;
if(!!document.selection){
var _position=this.__document.body.innerHTML.length;
if(!!_range.collapse){
_range.collapse(true);
_range.moveEnd('character',_position);
_range.moveStart('character',_position);
_range.select();
}
}else{
_range.selectAllChildren(this.__document.body);
_range.collapseToEnd();
}
};
__proARCEditor.__cursorBegin=function(){
return;
if(!this.__document||!this.__document.body)return;
var _range=this._$getSelection();
if(!_range)return;
if(!!document.selection){
_range.collapse(true);
_range.moveEnd('character',0);
_range.moveStart('character',0);
_range.select();
}else{
_range.selectAllChildren(this.__document.body);
_range.collapseToStart();
}
};
__proARCEditor.__saveIEHistory=function(){
if(!!this.__history)this.__history._$push();
};
__proARCEditor.__refreshEditorHeight=function(){
if(!this.__document||!this.__document.body)return;
this.__ietimer=window.clearTimeout(this.__ietimer);
var _function=B._$ISFF?this.__refreshEditorHeightFF._$bind(this):(
B._$ISIE?this.__refreshEditorHeightIE._$bind(this):
this.__refreshEditorHeightCM._$bind(this));
this.__ietimer=window.setTimeout(_function,100);
};
__proARCEditor.__refreshEditorHeightFF=function(){
var _style=this.__document.body.style;
_style.height='1px';
this.__refreshEditorHeightIE();
_style.height='100%';
};
__proARCEditor.__refreshEditorHeightIE=function(){
var _height=this.__document.body.scrollHeight||0;
this.__iframe.style.height=Math.max(this.__mheight,_height)+'px';
};
__proARCEditor.__refreshEditorHeightCM=function(){
var _height=this.__document.documentElement.scrollHeight||0;
this.__iframe.style.height=Math.max(this.__mheight,_height)+'px';
};
__proARCEditor.__removeListIE=function(){
if(!B._$ISIE)return;
if(this._$commanded('insertorderedlist'))
this.__document.execCommand('insertorderedlist',false,null);
if(this._$commanded('insertunorderedlist'))
this.__document.execCommand('insertunorderedlist',false,null);
};
__proARCEditor.__removeFormat=function(){
_html=U._$trim(this._$getSelectHtml());
if(!_html||__reg_none.test(_html)){
this.__removeFormatAll();
return;
}
this.__removeListIE();
this.__document.execCommand('delete',false,null);
this.__insertHTML(__removeFormat(_html));
};
__proARCEditor.__removeFormatAll=function(){
this._$setContent(__removeFormat(this._$getContent()));
};
__proARCEditor.__removeFormatWrd=function(_html){
_html=_html||'';
if(__hasWrdContentNFF(_html))
return _html.replace(__reg_nwrd,'');
if(__hasWrdContentFF(_html))
return _html.replace(__reg_flns,'\f')
.replace(__reg_ftag,'')
.replace(__reg_fzag,'')
.replace(__reg_flnh,'\n');
return _html;
};
__proARCEditor.__onIFrameLoaded=function(){
__supARCEditor.__onIFrameLoaded.apply(this,arguments);
if(this.__mheight>0)V._$clearEvent(this.__iframe);
if(B._$ISIE){
this.__history=new p._$$ARCHistory(this.__document);
V._$addEvent(this.__document,'keydown',this.__onIEKeyDwon._$bind(this));
V._$addEvent(this.__document.body,'paste',this.__onPasteContentCheck._$bind(this));
}
this.__clipboard=new p._$$ARCClipBoard(this.__document);
if(this.__mheight>0)this.__iframe.style.height=this.__mheight+'px';
V._$addEvent(this.__window,'blur',this._$dispatchEvent._$bind(this,'onblur'));
V._$addEvent(this.__document,'dblclick',this.__onDBClick._$bind(this));
V._$addEvent(this.__document,'controlselect',this.__onControlSelect._$bind(this));
var _handler=this.__onSelectionChange._$bind(this);
V._$addEvent(this.__document,'click',_handler);
V._$addEvent(this.__document,'keypress',_handler);
if(!this.__nofocus){
if(!this.__toBegin){
!B._$ISIE?this.__cursorEnd():window.setTimeout(this.__cursorEnd._$bind(this),100);
}else{
!B._$ISIE?this.__cursorBegin():window.setTimeout(this.__cursorBegin._$bind(this),100);
}
this.__onSelectionChange();
}
if(B._$ISTT)this._$blur();
};
__proARCEditor.__onDBClick=function(_event){
this._$dispatchEvent('ondblclick',V._$getElement(_event));
};
__proARCEditor.__onControlSelect=function(_event){
if(this.__mheight>0)this.__refreshEditorHeight();
this._$dispatchEvent('oncontrolselect',V._$getElement(_event));
};
__proARCEditor.__onSelectionChange=function(){
delete this.__range;
if(this.__mheight>0)this.__refreshEditorHeight();
this._$dispatchEvent('onselectionchange');
};
__proARCEditor.__onIEKeyDwon=function(_event){
var _code=_event.keyCode;
if(16<=_code&&_code<=18)return;
if(_event.ctrlKey){
if(_code==90){this._$execCommand('undo');return;}
if(_code==89){this._$execCommand('redo');return;}
}
this.__saveIEHistory();
};
__proARCEditor.__onPasteContentCheck=function(_event){
var _body;
try{_body=this.__nsub.contentWindow.document.body;}catch(e){}
if(!_body)return;
_body.innerHTML='';
_body.createTextRange().execCommand("paste");
var _html=_body.innerHTML||'';
if(__reg_tcmd.test(_html)&&window.confirm
('你粘贴的内容中含不便于你阅读和编辑的格式，是否清除原来的格式？')){
V._$stop(_event);
this._$execCommand('inserthtml',__removeFormat(this.__removeFormatWrd(_html)));
}
};
p._$$ARCHistory=C();
__proARCHistory=p._$$ARCHistory.prototype;
__proARCHistory._$initialize=function(_edtdoc,_options){
this._$clear();
_options=_options||O;
this.__doc=_edtdoc||null;
this.__max=Math.max(0,parseInt(_options.max)||100);
};
__proARCHistory._$clear=function(){
this.__pointer=0;
this.__history=[];
};
__proARCHistory._$push=function(){
if(!this.__doc)return;
var _cache={html:this.__doc.body.innerHTML},
_history=this.__history[this.__history.length-1];
if(!!_history&&_cache.html==_history.html)return;
if(this.__doc.selection.type=='Text')
_cache.range=this.__doc.selection
.createRange().getBookmark();
this.__history.push(_cache);
if(this.__history.length>this.__max)
this.__history.shift();
this.__pointer=this.__history.length-1;
};
__proARCHistory._$redo=function(){
this.__goHistory(this.__pointer++);
};
__proARCHistory._$undo=function(){
this.__goHistory(this.__pointer--);
};
__proARCHistory._$canRedo=function(){
return this.__pointer<this.__history.length-1;
};
__proARCHistory._$canUndo=function(){
return this.__pointer>0;
};
__proARCHistory.__goHistory=function(_pointer){
var _cache=this.__history[_pointer];
if(!_cache){
_pointer=Math.max(0,Math.min(_pointer,this.__max));return;
}
this.__doc.body.innerHTML=_cache.html||'';
if(!_cache.range)return;
var _range=this.__doc.selection.createRange();
_range.moveToBookmark(_cache.range);
_range.select();
};
p._$$ARCClipBoard=C();
__proARCClipBoard=p._$$ARCClipBoard.prototype;
__proARCClipBoard._$initialize=function(_edtdoc){
this.__document=_edtdoc||null;
};
__proARCClipBoard._$cut=function(){
if(!this.__document||!B._$ISIE)return;
this.__document.execCommand('cut',false,null);
};
__proARCClipBoard._$copy=function(){
if(!this.__document||!B._$ISIE)return;
this.__document.execCommand('copy',false,null);
};
__proARCClipBoard._$paste=function(){
if(!this.__document||!B._$ISIE)return;
this.__document.execCommand('paste',false,null);
};
__proARCClipBoard._$canCut=function(){
if(!this.__document||!B._$ISIE)return false;
return this.__document.queryCommandEnabled('cut');
};
__proARCClipBoard._$canCopy=function(){
if(!this.__document||!B._$ISIE)return false;
return this.__document.queryCommandEnabled('cut');
};
__proARCClipBoard._$canPaste=function(){
if(!this.__document||!B._$ISIE)return false;
return this.__document.queryCommandEnabled('paste');
};
})();
(function(){
var p=P(N.ui),
__proRichEditor,
__supRichEditor,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace>{border:1px solid #ccc;}\
               #<uispace> .ztbr{background-color:#eee;}\
               #<uispace> .zedt .zsrc{border:0;}\
               #<uispace> .zedt .zsrc,#<uispace> .zedt iframe{width:100%;height:200px;}',__uispace);
p._$$RichEditor=C();
__proRichEditor=p._$$RichEditor._$extend(p._$$Editor,true);
__supRichEditor=p._$$RichEditor._$supro;
p._$$RichEditor._$parseMedia=p._$$ARCEditor._$parseMedia;
p._$$RichEditor._$replaceMedia=p._$$ARCEditor._$replaceMedia;
__proRichEditor._$initialize=function(_parent,_options){
this.__topt={xconf:(_options||O).xconf,
oncommand:this.__onCommand._$bind(this)};
this.__lopt={onok:this.__onLinkOK._$bind(this),
ondelete:this.__onCommand._$bind(this,'unlink')};
this.__eopt={url:(_options||O).xurl,
onselectionchange:this.__onSelectionChange._$bind(this)};
this._$super(_parent,_options);
};
__proRichEditor._$resetOption=function(_options){
_options=_options||O;
this.__topt.xconf=_options.xconf||{};
this.__topt.xconf.photo=true;
this._$setContentWithParse(_options.content);
__supRichEditor._$resetOption.apply(this,arguments);
};
__proRichEditor._$getContent=function(){
if(!this.__ecore)return'';
return(!this.__isSourceMode()?this.__ecore._$getContent()
:this.__ecore._$parseContent(this.__nsrc.value))||'';
};
__proRichEditor._$getContentWithParse=function(){
return p._$$RichEditor._$parseMedia(this._$getContent()||'');
};
__proRichEditor._$setContentWithParse=function(_content){
this.__ecore._$setContent(p._$$RichEditor._$replaceMedia(_content||''));
};
__proRichEditor.__getSpace=function(){
return __uispace;
};
__proRichEditor.__getXhtml=function(){
return'<div class="ztbr ztag"></div>\
            <div class="zedt zcom"><textarea class="zsrc zcom ztag" style="display:none;"></textarea></div>';
};
__proRichEditor.__intXnode=function(){
var _ntmp=E._$getElementsByClassName(this.__body,'ztag');
this.__nsrc=_ntmp[1];
this.__ecore=new p._$$ARCEditor(_ntmp[1].parentNode,this.__eopt);
this.__toolbar=p._$$RichEditorToolBar._$allocate(_ntmp[0],this.__topt);
this.__nedt=E._$getChildElements(_ntmp[1].parentNode)[1];
};
__proRichEditor.__isSourceMode=function(){
return this.__nsrc.style.display!='none';
};
__proRichEditor.__onLinkNew=function(){
var _isctrl=this.__ecore._$hasControlType();
this.__lopt.noname=_isctrl;
this.__lopt.name=_isctrl?'':this.__ecore._$getSelectText();
var _anode=this.__ecore._$getSelectNode();
while(!!_anode){
if(_anode.tagName=='A')break;
_anode=_anode.parentNode;
}
this.__lopt.href=!_anode?'':_anode.href;
!p._$$EDTWinLink||p._$$EDTWinLink._$show(this.__lopt);
};
__proRichEditor.__onLinkOK=function(_link){
if(!_link)return;
this.__lopt.noname?this.__onCommand('createlink',_link.href)
:this.__onCommand('inserthtml','<a href="'+_link.href+
'" target="_blank">'+(_link.name||_link.href)+'</a>');
};
__proRichEditor.__onCommand=function(_command,_value){
switch(_command){
case'link':this.__onLinkNew();return;
case'source':
var _issrc=!this.__isSourceMode();
this.__toolbar._$disable(_issrc);
this.__toolbar._$select(_command,_issrc);
this.__nsrc.style.display=_issrc?'':'none';
this.__nedt.style.display=_issrc?'none':'';
if(_issrc)this.__nsrc.value=this.__ecore._$getContent();
this.__ecore._$setContent(_issrc?'&nbsp;':this.__nsrc.value||'');
return;
}
this.__ecore._$execCommand(_command,_value);
};
__proRichEditor.__onSelectionChange=function(){
var _list=this.__toolbar._$getSyncCommands();
if(!!_list&&_list.length>0)
for(var i=0,l=_list.length;i<l;
this.__toolbar._$select(_list[i],
this.__ecore._$commanded(_list[i])),i++);
_list=this.__toolbar._$getValueCommands();
if(!!_list&&_list.length>0)
for(var i=0,l=_list.length;i<l;
this.__toolbar._$valued(_list[i],
this.__ecore._$value(_list[i])),i++);
};
})();
(function(){
var p=P(N.ui),
__proAdvanceRichEditor,
__supAdvanceRichEditor,
__uispace='ui-'+U._$randNumberString(),
__rgpgrph=/<p>(.*?)<\/p>/gi,
__csfixed='js-fix-098',
__csdisbl='js-dsb-032',
__cfulfun='js-full-568',
__cscblog='*{line-height:160%;}'+(B._$ISIE||B._$ISFF?'html,':'html{height:1px;overflow:visible;}')+'\
                 body{overflow:hidden;font-family:Arial,Helvetica,Sans-Serif;font-size:14px;text-align:left;}\
                 p{margin:10px 0;}\
                 em{font-style:italic;}\
                 img{border:0;max-width:100%;}\
                 ol,ul{margin:5px 0 5px 40px;padding:0;}\
                 blockquote{font-size:1em;margin:auto 0 auto 35px;}';
p._$pushStyle('#<uispace>{position:relative;padding:0 10px 10px;color:#333;border:1px solid #ddd;background:#eee;font-size:12px;zoom:1;}\
               #<uispace> .zbin{width:16px;height:16px;vertical-align:middle;background:url('+N.rc.r+'editor/editor.png) no-repeat;}\
               #<uispace> .zact{position:absolute;top:10px;right:5px;z-index:5;cursor:pointer;}\
               #<uispace> .zact .sep{margin:0 2px}\
               #<uispace> .zact .iblock{background-position:-16px -234px;}\
               #<uispace> .zhld{height:45px;}\
               #<uispace>.js-full-568 .iblock{background-position:0px -244px;}\
               #<uispace>.js-full-568 .zhld{height:75px;}\
               #<uispace> .zcrn{position:relative;height:5px;zoom:1;}\
               #<uispace> .zcrn .zcnl,#<uispace> .zcrn .zcnr{position:absolute;top:0;width:5px;height:5px;}\
               #<uispace> .zcrn .zcnl{left:0;}\
               #<uispace> .zcrn .zcnr{right:0;}\
               #<uispace> .zcrn .zcnc{margin:0 5px;height:5px;}\
               #<uispace> .ztop .ztl{background:url('+N.rc.r+'editor/top1.png) no-repeat;}\
               #<uispace> .ztop .ztm{background:url('+N.rc.r+'editor/top2.png) repeat-x;}\
               #<uispace> .ztop .ztr{background:url('+N.rc.r+'editor/top3.png) no-repeat;}\
               #<uispace> .zbom .zbl{background:url('+N.rc.r+'editor/b1.png) no-repeat;}\
               #<uispace> .zbom .zbm{background:url('+N.rc.r+'editor/b2.png) repeat-x;}\
               #<uispace> .zbom .zbr{background:url('+N.rc.r+'editor/b3.png) no-repeat;}\
               #<uispace> .zml{padding-left:5px;background:url('+N.rc.r+'editor/m1.png) repeat-y;zoom:1;}\
               #<uispace> .zmr{padding-right:5px;background:url('+N.rc.r+'editor/m3.png) repeat-y right top;zoom:1;}\
               #<uispace> .ztbr{position:absolute;top:0;z-index:2;background-color:#eee;zoom:1;}\
               #<uispace> .ztbr .sep{color:#ccc;}\
               #<uispace> .ztbr .zibx{padding:5px 0;z-index:4;}\
               #<uispace> .js-dsb-032 .zdsb{visibility:hidden;}\
               #<uispace> .js-fix-098{position:fixed;}\
               #<uispace> .js-fix-098 .zibx{border-bottom:1px solid #dedede;}\
               #<uispace> .zedt{position:relative;z-index:1;zoom:1;}\
               #<uispace> .zedt .zmsg{position:absolute;top:-5px;left:5px;line-height:22px;padding:0 7px;background:#ffffae;color:#000;}\
               #<uispace> .zsrc{width:100%;height:500px;line-height:20px;margin:0;*margin:-1px 0;padding:0;border:0;font-size:14px;overflow:auto;}\
               #<uispace> .zwrp{padding-bottom:20px;background:#fff;text-align:center;}\
               #<uispace> .zttl{position:relative;margin:0 20px;height:55px;zoom:1;}\
               #<uispace> .zttl input{position:absolute;top:15px;left:0;right:0;width:100%;height:40px;line-height:40px;font-size:20px;border:0;border-bottom:1px solid #e1e1e1;background:#fff;font-weight:bold;text-align:left;}\
               #<uispace> .zebx{position:relative;margin:10px 20px 0;zoom:1;}\
               #<uispace> .zebx iframe{width:100%;height:400px;overflow:hidden;}\
               #<uispace> .ztab{position:relative;top:-1px;height:30px;line-height:30px;border-top:1px solid #858585;text-align:left;zoom:1;}\
               #<uispace> .ztab .zpat{margin-left:15px;color:#4f93e6;text-decoration:underline;cursor:pointer;}\
               #<uispace> .ztab .zitm{display:block;float:left;width:77px;height:30px;margin:-1px 2px 0 0;color:#666;background:url('+N.rc.r+'editor/editor.png) no-repeat -180px -40px;text-decoration:none;text-align:center;cursor:pointer;}\
               #<uispace> .ztab .zitm:hover{background-position:-180px -80px;}\
               #<uispace> .ztab .zitm.js-select-975,#<uispace> .ztab .zitm.js-select-975:hover{_position:relative;background-position:-180px 0;color:#333;}',__uispace);
var __isIMG=function(_node){
return!!_node&&_node.tagName=='IMG'&&(_node.id||'').search('__(?:MEDIA|MUSIC)_REPLACEMENT_')<0;
};
var __isMDA=function(_node){
return!!_node&&(_node.tagName=='EMBED'||(_node.id||'').indexOf('__MEDIA_REPLACEMENT_')>=0);
};
var __isFace=function(_src){
return(_src||'').indexOf(N.rc.r+'portrait/')>=0;
};
var __isMusic=function(_src){
return(_src||'').indexOf(N.rc.r+'spirit.swf')>=0;
};
p._$$AdvanceRichEditor=C();
__proAdvanceRichEditor=p._$$AdvanceRichEditor._$extend(p._$$Editor,true);
__supAdvanceRichEditor=p._$$AdvanceRichEditor._$supro;
p._$$AdvanceRichEditor._$parseMedia=p._$$ARCEditor._$parseMedia;
p._$$AdvanceRichEditor._$replaceMedia=p._$$ARCEditor._$replaceMedia;
__proAdvanceRichEditor._$initialize=function(_parent,_options){
var _command=this.__onCommand._$bind(this);
this.__mopt={oncommand:_command};
this.__topt={oncommand:_command,'class':'zibx'};
this.__popt={oncommand:_command,
onchange:this.__onPhotoChange._$bind(this)};
this.__lopt={onok:this.__onLinkOK._$bind(this),
ondelete:this.__onCommand._$bind(this,'unlink')};
this.__eopt={url:(_options||O).xurl,
style:__cscblog,minheight:400,
ondblclick:this.__onEditorDBClick._$bind(this),
oncontrolselect:this.__syncCtrlSetting._$bind(this),
onselectionchange:this.__onSelectionChange._$bind(this)};
this._$super(_parent,_options);
};
__proAdvanceRichEditor._$resetOption=function(_options){
_options=_options||O;
this.__topt.xconf=_options.xconf||O;
this.__popt.parent=this.__topt.xconf.body;
this.__mopt.parent=this.__topt.xconf.body;
this.__toolbar._$resetOption(this.__topt);
this._$addEvent('onsave',_options.onsave||F);
this._$addEvent('onpreview',_options.onpreview||F);
this._$setTitle(_options.title);
this.__ecore._$setContent(_options.content||'');
__supAdvanceRichEditor._$resetOption.apply(this,arguments);
if(!this.__attached){
this.__attached=true;
V._$addEvent(B._$ISOLDIE?this.__popt.parent:window,
'scroll',this.__onToolbarScroll._$bind(this));
}
};
__proAdvanceRichEditor._$appendToParent=function(_parent,_before){
__supAdvanceRichEditor._$appendToParent.apply(this,arguments);
this.__onEditorBlur();
this.__offsety=E._$offsetY(this.__tbox)+2;
this.__tbox.style.width=this.__nhld.offsetWidth+'px';
};
__proAdvanceRichEditor._$getTitle=function(){
var _title=U._$trim(this.__nttl.value);
if(_title==this.__nttl.defaultValue)_title='';
return _title;
};
__proAdvanceRichEditor._$setTitle=function(_title){
_title=U._$trim(_title);
this.__nttl.value=_title||this.__nttl.defaultValue;
};
__proAdvanceRichEditor._$getContent=function(){
if(!this.__ecore)return'';
return(!this.__isSourceMode()?this.__ecore._$getContent()
:this.__ecore._$parseContent(this.__nsrc.value))||'';
};
__proAdvanceRichEditor._$disableScroll=function(_disabled){
this.__disabled=!!_disabled;
};
__proAdvanceRichEditor._$refreshScroll=function(){
this.__onToolbarScroll();
};
__proAdvanceRichEditor._$showMessage=function(_message){
this.__nmsg.style.display='';
this.__nmsg.innerHTML=_message;
if(!this.__timer)
this.__timer=window.setTimeout(
this.__hideMessage._$bind(this),5000);
};
__proAdvanceRichEditor.__hideMessage=function(){
this.__nmsg.style.display='none';
this.__timer=window.clearTimeout(this.__timer);
};
__proAdvanceRichEditor.__getSpace=function(){
return __uispace;
};
__proAdvanceRichEditor.__getXhtml=function(){
return'<div class="zhld ztag">&nbsp;</div>\
            <div class="ztbr clearfix ztag">\
              <div class="zact">\
                <span class="ztag zdsb">全部功能</span>\
                <span class="sep zdsb">|</span>\
                <span class="ztag">预览</span>\
              </div>\
            </div>\
            <div class="ztop zcrn space"><div class="ztl zcnl">&nbsp;</div><div class="ztr zcnr">&nbsp;</div><div class="ztm zcnc">&nbsp;</div></div>\
            <div class="zml">\
              <div class="zmr">\
                <div class="zedt">\
                  <div class="zecm zwrp">\
                    <div class="zttl"><input class="ztag" type="text" value="在这里输入标题" maxlength="255"/></div>\
                    <div class="zebx ztag"></div>\
                  </div>\
                  <textarea class="zecm zsrc ztag" style="display:none;"></textarea>\
                  <div class="zmsg ztag" style="display:none;">&nbsp;</div>\
                </div>\
              </div>\
            </div>\
            <div class="zbom zcrn space"><div class="zbl zcnl">&nbsp;</div><div class="zbr zcnr">&nbsp;</div><div class="zbm zcnc">&nbsp;</div></div>';
};
__proAdvanceRichEditor.__intXnode=function(){
var _ntmp=E._$getElementsByClassName(this.__body,'ztag');
this.__nhld=_ntmp[0];
this.__tbox=_ntmp[1];
this.__tfun=_ntmp[2];
this.__nttl=_ntmp[4];
this.__ebox=_ntmp[5];
this.__nsrc=_ntmp[6];
this.__nmsg=_ntmp[7];
this.__nedt=this.__ebox.parentNode;
V._$addEvent(_ntmp[3],'click',this.__onContentPreview._$bind(this));
V._$addEvent(this.__nttl,'blur',this.__onTitleBlur._$bind(this));
V._$addEvent(this.__nttl,'focus',this.__onTitleFocus._$bind(this));
V._$addEvent(this.__tfun,'click',this.__onFuncSwitch._$bind(this));
this.__onFuncSwitch();
this.__ecore=new p._$$ARCEditor(this.__ebox,this.__eopt);
};
__proAdvanceRichEditor.__getScrollBody=function(){
return(B._$ISSF?null:this.__popt.parent)||document.body;
};
__proAdvanceRichEditor.__isSourceMode=function(){
return this.__nsrc.style.display!='none';
};
__proAdvanceRichEditor.__disableToolbar=function(_disabled){
this.__toolbar._$disable(!!_disabled);
var _ntmp=this.__tfun.parentNode;
!_disabled?E._$delClassName(_ntmp,__csdisbl)
:E._$addClassName(_ntmp,__csdisbl);
};
__proAdvanceRichEditor.__syncToolBar=function(){
var _list=this.__toolbar._$getSyncCommands();
if(!!_list&&_list.length>0)
for(var i=0,l=_list.length;i<l;
this.__toolbar._$select(_list[i],
this.__ecore._$commanded(_list[i])),i++);
_list=this.__toolbar._$getChekCommands();
if(!!_list&&_list.length>0)
for(var i=0,l=_list.length;i<l;
this.__toolbar._$checked(_list[i],
!this.__ecore._$enabled(_list[i])),i++);
_list=this.__toolbar._$getValueCommands();
if(!!_list&&_list.length>0)
for(var i=0,l=_list.length;i<l;
this.__toolbar._$valued(_list[i],
this.__ecore._$value(_list[i])),i++);
};
__proAdvanceRichEditor.__syncCtrlSetting=function(_node){
this.__syncImgSetting(_node);
this.__syncMdaSetting(_node);
};
__proAdvanceRichEditor.__syncImgSetting=function(_node){
if(!p._$$EDTWinPhotoCHG)return;
if(!__isIMG(_node)||__isFace(_node.src)){
p._$$EDTWinPhotoCHG._$hide();return;
}
this.__popt.img=_node;
this.__popt.top=E._$offsetY(this.__ebox)+E._$offsetY(_node);
this.__popt.left=E._$offsetX(this.__ebox)+E._$offsetX(_node);
p._$$EDTWinPhotoCHG._$show(this.__popt);
};
__proAdvanceRichEditor.__syncMdaSetting=function(_node){
if(!p._$$EDTWinMediaCHG)return;
if(!__isMDA(_node)||__isMusic(_node.src)||(B._$ISFF&&_node.tagName=='EMBED')){
p._$$EDTWinMediaCHG._$hide();return;
}
this.__mopt.mda=_node;
this.__mopt.top=E._$offsetY(this.__ebox)+E._$offsetY(_node);
this.__mopt.left=E._$offsetX(this.__ebox)+E._$offsetX(_node);
p._$$EDTWinMediaCHG._$show(this.__mopt);
};
__proAdvanceRichEditor.__scrollToolbar=function(){
var _top=parseInt(E._$getStyle(this.__tbox,'top'))||0,
_delta=this.__ttop-_top;
if(_delta==0){
this.__gtimer=window.clearInterval(this.__gtimer);
return;
}
_delta=Math.ceil(_delta/2);
this.__tbox.style.top=Math[_delta<0?'max':'min']
(_top+_delta,this.__ttop)+'px';
};
__proAdvanceRichEditor.__onFuncSwitch=function(){
if(!!this.__toolbar)
this.__toolbar=this.__toolbar.constructor._$recycle(this.__toolbar);
if(!this.__simpled){
this.__tfun.innerText='全部功能';
E._$delClassName(this.__body,__cfulfun);
this.__toolbar=p._$$ComplexEditorToolBar._$allocate(this.__tbox,this.__topt);
}else{
this.__tfun.innerText='简单功能';
E._$addClassName(this.__body,__cfulfun);
this.__toolbar=p._$$AdvanceEditorToolBar._$allocate(this.__tbox,this.__topt);
}
this.__onEditorBlur();
this.__simpled=!this.__simpled;
if(!!this.__ecore)this.__syncToolBar();
};
__proAdvanceRichEditor.__onTypeSwitch=function(){
this.__onEditorBlur();
var _issrc=!this.__isSourceMode();
this.__disableToolbar(_issrc);
if(_issrc){
this.__nsrc.value=this.__ecore._$getContent();
this.__ecore._$setContent('&nbsp;');
this.__getScrollBody().scrollTop=this.__offsety;
}else{
this.__ecore._$setContent(this.__nsrc.value||'');
this.__nsrc.value='';
}
this.__nsrc.style.display=_issrc?'':'none';
this.__nedt.style.display=_issrc?'none':'';
};
__proAdvanceRichEditor.__onToolbarScroll=function(){
if(this.__disabled)return;
var _fixed=E._$hasClassName(this.__tbox,__csfixed);
document.documentElement.scrollTop>this.__offsety
?_fixed||E._$addClassName(this.__tbox,__csfixed)
:_fixed&&E._$delClassName(this.__tbox,__csfixed);
};
__proAdvanceRichEditor.__onTitleBlur=function(){
if(!U._$trim(this.__nttl.value))
this.__nttl.value=this.__nttl.defaultValue;
this.__disableToolbar(false);
};
__proAdvanceRichEditor.__onTitleFocus=function(){
if(this.__nttl.value==this.__nttl.defaultValue)
this.__nttl.value='';
this.__disableToolbar(true);
};
__proAdvanceRichEditor.__onEditorBlur=function(){
if(!!p._$$EDTWinPhotoCHG)p._$$EDTWinPhotoCHG._$hide();
if(!!p._$$EDTWinMediaCHG)p._$$EDTWinMediaCHG._$hide();
};
__proAdvanceRichEditor.__onEditorDBClick=function(_node){
if(__isIMG(_node)&&!__isFace(_node.src))this.__onPhotoChange();
};
__proAdvanceRichEditor.__onPhotoChange=function(){
this.__toolbar._$insertPhoto();
};
__proAdvanceRichEditor.__onLinkNew=function(){
var _isctrl=this.__ecore._$hasControlType();
this.__lopt.noname=_isctrl;
this.__lopt.name=_isctrl?'':this.__ecore._$getSelectText();
var _anode=this.__ecore._$getSelectNode();
while(!!_anode){
if(_anode.tagName=='A')break;
_anode=_anode.parentNode;
}
this.__lopt.href=!_anode?'':_anode.href;
!p._$$EDTWinLink||p._$$EDTWinLink._$show(this.__lopt);
};
__proAdvanceRichEditor.__onLinkOK=function(_link){
if(!_link)return;
this.__lopt.noname?this.__onCommand('createlink',_link.href)
:this.__onCommand('inserthtml','<a href="'+_link.href+
'" target="_blank">'+(_link.name||_link.href)+'</a>');
};
__proAdvanceRichEditor.__onCommand=function(_command,_value){
switch(_command){
case'link':this.__onLinkNew();return;
case'save':this._$dispatchEvent('onsave');return;
case'source':
this.__onTypeSwitch();
this.__toolbar._$select(_command,this.__isSourceMode());
return;
case'paragraph':
var _content=this.__ecore._$getContent();
this.__ecore._$setContent(_content.replace(__rgpgrph,'<p style="text-indent:2em;">$1</p>'));
return;
}
this.__ecore._$execCommand(_command,_value);
};
__proAdvanceRichEditor.__onSelectionChange=function(){
this.__syncToolBar();
if(B._$ISSF)return;
if(B._$ISIE&&this.__ecore._$getSelectType()!='control'){
this.__onEditorBlur();return;
}
this.__syncCtrlSetting(this.__ecore._$getSelectNode());
};
__proAdvanceRichEditor.__onContentPreview=function(){
this.__onEditorBlur();
this._$dispatchEvent('onpreview');
};
})();
(function(){
var p=P(N.fw),
__proAlbumPCache,
__proAlbumECache,
__com_try=2,
__com_out=6000,
__com_log=[],
__com_max=30,
__com_url=/^(.*?)\//,
__com_cls={1:'bimg',2:'bimg',3:'ph'},
__com_fld=['t','count','name','ut'],
__com_src='http://photo.163.com/photo/image/sniff.png?',
__com_cfg={a:{i:['curl','surl','lurl'],u:['purl','comm']},
p:{i:['ourl','murl','surl','turl','qurl'],u:['comm']}};
var __sequence2hash=function(_sequence){
_sequence=(_sequence||'').split(';');
var _hash={};
for(var i=0,l=_sequence.length;
i<l;_hash[_sequence[i]]=i,i++);
return _hash;
};
var __isCompleted=function(_url){
return!_url||_url.indexOf('http://')>=0;
};
var __completeURL=function(_url,_type){
return __isCompleted(_url)?_url:
_url.replace(__com_url,'http://img$1.'+__com_cls[_type]+'.126.net/');
};
var __sortCompare=function(_field,_descend,_item0,_item1){
var _flag=!!_descend?-1:1,
_value0=_item0[_field],
_value1=_item1[_field];
return _flag*(_value0==_value1?0:(_value1>_value0?-1:1));
};
var __sortCompareWithMap=function(_hash,_item0,_item1){
return _hash[_item1.id]>_hash[_item0.id]?-1:1;
};
var __sortListByField=function(_list,_field,_descend){
if(!_list||!_list.length)return;
_list.sort(__sortCompare._$bind(null,_field,_descend));
};
var __sortListBySequence=function(_list,_hash){
if(!_list||!_list.length||!_hash)return;
_list.sort(__sortCompareWithMap._$bind(null,_hash));
};
var __sortList=function(_list,_data){
if(!_list||!_list.length||!_data)return;
if(_data.st==8){
if(!_data.seqStr)return;
_data.seqMap=__sequence2hash(_data.seqStr);
__sortListBySequence(_list,_data.seqMap);
}else{
__sortListByField(_list,__com_fld[Math.floor(_data.st/2)],!!_data.st%2);
}
};
p._$$AlbumPCache=C();
__proAlbumPCache=p._$$AlbumPCache._$extend(P(N.ut)._$$Cache);
__proAlbumPCache._$initialize=function(_options){
this._$super(_options);
_options=_options||O;
this.__relation=_options.relation||0;
var _host=_options.host||O;
this.__host={userName:_host.photo163HostName||_host.userName};
var _visitor=_options.visitor||O,
_visit=_visitor.photo163VisitorName||_visitor.userName;
this.__dwr='http://api.blog.163.com/'+(_host.userName||'')+'/dwr';
this.__api='http://photo.163.com/photo/'+(this.__host.userName||'')+'/dwr'+(_visit?('?u='+_visit):'');
};
__proAlbumPCache._$log=function(_info){
__com_log.push(U._$format(new Date(),'yyyy-MM-dd HH:mm:ms.ms')+' '+this.__host.userName+' '+_info);
if(__com_log.length>__com_max)__com_log.shift();
};
__proAlbumPCache._$getLog=function(){
return __com_log.join('\n');
};
__proAlbumPCache._$clearLog=function(){
__com_log=[];
};
__proAlbumPCache.__logToServer=function(_info){
(new Image()).src=__com_src+_info;
};
__proAlbumPCache.__logUDError=function(_from){
this.__logToServer('t=UserSpaceError&u='+this.__host.userName+'&f='+_from);
};
__proAlbumPCache.__logABError=function(_url){
this.__logToServer('t=AlbumUndefinedError&u='+this.__host.userName+'&url='+_url);
};
__proAlbumPCache.__logPTError=function(_url){
this.__logToServer('t=PhotoUndefinedError&u='+this.__host.userName+'&url='+_url);
};
__proAlbumPCache.__completeData=function(_data,_type){
var _config=__com_cfg[_type];
if(!_config||!_data)return _data;
var _ntmp=_config.u||[];
for(var i=0,l=_ntmp.length,_url;i<l;i++){
_url=_data[_ntmp[i]];
_data[_ntmp[i]]=__isCompleted(_url)?_url:('http://'+_url);
}
_ntmp=_config.i||[];
for(var i=0,l=_ntmp.length;i<l;
_data[_ntmp[i]]=__completeURL(_data[_ntmp[i]],_data.s),i++);
return _data;
};
__proAlbumPCache._$getUserDataInCache=function(){
return this.__getDataInCache('ud-'+this.__host.userName);
};
__proAlbumPCache.__setUserDataInCache=function(_data){
_data=_data||{};
var _url=_data.cacheFileUrl;
_data.st=_data.seqType;delete _data.seqType;
_data.cacheFileUrl=(__isCompleted(_url)?'':'http://')+_url;
this.__setDataInCache('ud-'+this.__host.userName,_data);
};
__proAlbumPCache.__getUserData=function(){
var _data=this._$getUserDataInCache();
if(!!_data){this.__cbGetUserData(_data);return;}
this._$log('getUserSpace begin ...');
J._$setTimeout(__com_out);
J._$postDataByDWR(this.__api,'UserSpaceBean','getUserSpace',this.__host.userName,
this.__cbGetUserData._$bind(this),this.__cbGetUserDataErrorFromPhoto._$bind(this));
};
__proAlbumPCache.__cbGetUserData=function(_data){
this._$log('getUserSpace end and hasdata['+!!_data+']');
_data=_data||{};
_data.userType=_data.userType!=null?_data.userType:-2;
this.__setUserDataInCache(_data);
this.__getAlbumListBackFromUD();
};
__proAlbumPCache.__cbGetUserDataErrorFromPhoto=function(){
this.__logUDError('photo');
this._$log('getUserSpace from photo error then from blog');
J._$postDataByDWR(this.__dwr,'AlbumBeanNew','getUserSpace',
this.__cbGetUserData._$bind(this),this.__cbGetUserDataErrorFromBlog._$bind(this));
};
__proAlbumPCache.__cbGetUserDataErrorFromBlog=function(){
this.__logUDError('blog');
this.__cbGetUserData(null);
};
__proAlbumPCache._$hasAlbum=function(){
var _count=(this._$getUserDataInCache()||O).albumCount;
return _count==null||_count>0;
};
__proAlbumPCache._$getAlbumState=function(){
return(this._$getUserDataInCache()||O).userType||0;
};
__proAlbumPCache._$getAlbumInCache=function(_aid){
return(this.__getDataInCache('ab-h-'+this.__host.userName)||O)[_aid];
};
__proAlbumPCache._$getAlbumListInCache=function(){
var _ckey='ab-l-'+this.__host.userName,
_list=this.__getDataInCache(_ckey);
if(!_list&&!this._$hasAlbum()){
_list=[];
this.__setDataInCache(_ckey,_list);
this.__setDataInCache('ab-h-'+this.__host.userName,{});
}
return _list;
};
__proAlbumPCache._$getAlbumList=function(){
var _list=this._$getAlbumListInCache();
!_list?this.__getUserData()
:this._$dispatchEvent('onalbumlistload');
};
__proAlbumPCache.__getAlbumListBackFromUD=function(){
if(this._$getAlbumState()<0){
(this._$getUserDataInCache()||{}).albumCount=0;
this._$dispatchEvent('onalbumlistload');return;
}
this.__getAlbumListWithCheck();
};
__proAlbumPCache.__getAlbumListWithCheck=function(){
var _list=this._$getAlbumListInCache();
if(!!_list){this._$dispatchEvent('onalbumlistload');return;}
var _url=(this._$getUserDataInCache()||O).cacheFileUrl||'';
this._$log('getAlbumList url='+_url+' begin ...');
J._$loadScriptWithOpt(_url,{timeout:0,onload:this.__getAlbumList._$bind(this)});
};
__proAlbumPCache.__getAlbumList=function(){
this.__setDataInCache('ab-l-'+this.__host.userName,[]);
this.__setDataInCache('ab-h-'+this.__host.userName,{});
var _data=this._$getUserDataInCache(),
_list=U._$getGValue('g_a$'+_data.userId+'d');
this._$log('getAlbumList end and hasdata['+!!_list+']');
if(!_list)this.__logABError(_data.cacheFileUrl);
_data.seqStr=U._$getGValue('g_a$'+_data.userId+'s')||'';
if(!!_list&&_list.length>0){
_data.albumCount=0;
_data.photoCount=0;
for(var i=0,l=_list.length;i<l;
this.__cacheAlbumData(_list[i]),i++);
this.__sortAlbum();
}
this._$dispatchEvent('onalbumlistload');
};
__proAlbumPCache.__cacheAlbumData=function(_album){
if(!this.__filterAlbum(_album))return;
var _data=this._$getUserDataInCache(),
_list=this.__getDataInCache('ab-l-'+this.__host.userName),
_hash=this.__getDataInCache('ab-h-'+this.__host.userName);
_list.push(_album);
_data.albumCount++;
_data.photoCount+=_album.count||0;
_hash[_album.id]=this.__completeData(_album,'a');
};
__proAlbumPCache.__sortAlbum=function(){
__sortList(this._$getAlbumListInCache(),this._$getUserDataInCache());
};
__proAlbumPCache.__filterAlbum=function(_album){
return!!_album&&_album.count>0&&_album.au==0?_album:null;
};
__proAlbumPCache._$hasPhoto=function(_aid){
var _count=(this._$getAlbumInCache(_aid)||O).count;
return _count==null||_count>0;
};
__proAlbumPCache._$getPhotoByIndexInCache=function(_aid,_index){
return this._$getPhotoListInCache(_aid)[_index];
};
__proAlbumPCache._$getPhotoByIdInCache=function(_aid,_pid){
var _hash=this.__getDataInCache('pt-h-'+_aid);
return!_hash?null:_hash[_pid];
};
__proAlbumPCache._$getPhotoListInCache=function(_aid){
var _ckey='pt-l-'+_aid,
_list=this.__getDataInCache(_ckey);
if(!_list&&!this._$hasPhoto(_aid)){
_list=[];
this.__setDataInCache(_ckey,_list);
this.__setDataInCache('pt-h-'+_aid,{});
}
return _list;
};
__proAlbumPCache._$getPhotoList=function(_aid){
var _list=this._$getPhotoListInCache(_aid);
if(!!_list){this._$dispatchEvent('onphotolistload',_aid);return;}
var _album=this._$getAlbumInCache(_aid)||O,_url=_album.purl;
if(!!_url){
this._$log('getPhotoList url='+_url+' begin ...');
J._$loadScriptWithOpt(_url,{timeout:0,onload:this.__getPhotoList._$bind(this,_aid)});
return;
}
this._$log('getPhotoFileUrl begin ...');
J._$postDataByDWR(this.__api,'AlbumBean','getAlbumData',_aid,'','',
_album.dmt||0,false,this.__getPhotoListBackFromURL._$bind(this,_aid));
};
__proAlbumPCache.__getPhotoList=function(_aid){
var _album=this._$getAlbumInCache(_aid),
_list=U._$getGValue('g_p$'+_aid+'d');
_album.rtry=_album.rtry||0;
if(!_list&&_album.rtry<__com_try){
_album.rtry++;
_album.purl='';
this._$log('getPhotoList error and retry['+_album.rtry+']');
this._$getPhotoList(_aid);
return;
}
this.__setDataInCache('pt-l-'+_aid,[]);
this.__setDataInCache('pt-h-'+_aid,{});
this._$log('getPhotoList end and hasdata['+!!_list+']');
if(!_list)this.__logPTError(_album.purl);
_album.seqStr=U._$getGValue('g_p$'+_aid+'s')||'';
if(!!_list&&_list.length>0){
_album.count=0;
for(var i=0,l=_list.length;i<l;
this.__cachePhotoData(_aid,_list[i]),i++);
this.__sortPhoto(_aid);
}
this._$dispatchEvent('onphotolistload',_aid);
};
__proAlbumPCache.__getPhotoListBackFromURL=function(_aid,_url){
this._$log('getPhotoFileUrl end and url='+_url);
_url=__isCompleted(_url)?_url:('http://'+_url);
if(!_url){this.__getPhotoList(_aid);return;}
this._$getAlbumInCache(_aid).purl=_url;
this._$getPhotoList(_aid);
};
__proAlbumPCache.__cachePhotoData=function(_aid,_photo){
if(!this.__filterPhoto(_photo))return;
var _data=this._$getAlbumInCache(_aid);
if(!!_data)_data.count++;
var _list=this._$getPhotoListInCache(_aid);
if(!_list){
delete _data.purl;
return;
}
_list.push(_photo);
var _hash=this.__getDataInCache('pt-h-'+_aid);
_hash[_photo.id]=this.__completeData(_photo,'p');
};
__proAlbumPCache.__sortPhoto=function(_aid){
var _album=this._$getAlbumInCache(_aid),
_plist=this._$getPhotoListInCache(_aid);
__sortList(_plist,_album);
var _covid=_album.cvid;
if(!_covid)return;
var _index=U._$indexOf(_plist,function(_item){
return _item.id==_covid;
});
if(_index<=0)return;
_plist.unshift.apply(_plist,_plist.splice(_index,1));
};
__proAlbumPCache.__filterPhoto=function(_photo){
_photo.name=_photo.desc;return _photo;
};
p._$$AlbumECache=C();
__proAlbumECache=p._$$AlbumECache._$extend(p._$$AlbumPCache);
__proAlbumECache._$initialize=function(_options){
_options=_options||{};
_options.visitor=_options.host;
this._$super(_options);
};
__proAlbumECache.__cbGetUserData=function(_data){
this._$log('getUserSpace end and hasdata['+!!_data+']');
if(!!_data&&_data.userType!=-1){this.__setUserDataWithType(_data,0);return;}
var _type=!_data?-2:-1;
J._$postDataByDWR(this.__api,'UserSpaceBean','getUserSpaceWithSec',
this.__host.userName,this.__setUserDataWithType._$bind2(this,_type));
};
__proAlbumECache.__setUserDataWithType=function(_data,_type){
_data=_data||{};
_data.userType=_type;
this.__setUserDataInCache(_data);
this.__getAlbumListWithCheck();
};
__proAlbumECache.__updateModifyTime=function(_type){
J._$loadDataByTAG(this.__dwr,'AlbumBeanNew','needUpdateModifyTime',_type||'');
};
__proAlbumECache._$addAlbum=function(_album){
J._$postDataByDWR(this.__api,'AlbumBean','create',_album.name,_album.desc,
_album.type,_album.password||'',_album.question||'',this.__addAlbum._$bind(this));
};
__proAlbumECache.__addAlbum=function(_album){
if(!!_album){
this.__cacheAlbumData(_album);
this.__sortAlbum();
this.__updateModifyTime('CreateAlbum');
}
this._$dispatchEvent('onalbumadd',_album.id);
};
})();
(function(){
var p=P(N.ui),
__proEDTCard,
__supEDTCard,
__proEDTCardCNF;
p._$$EDTCard=C();
__proEDTCard=p._$$EDTCard._$extend(p._$$CardWrapper,true);
__supEDTCard=p._$$EDTCard._$supro;
__proEDTCard._$resetOption=function(_options){
_options=_options||O;
this._$addEvent('onselect',_options.onselect||F);
__supEDTCard._$resetOption.apply(this,arguments);
};
__proEDTCard.__intXnode=function(){
V._$addEvent(this.__body,'click',this.__onSelect._$bind(this));
};
__proEDTCard.__getElement=function(_event){
var _element=V._$getElement(_event);
return!_element||_element.className.indexOf('zitm')<0?null:_element;
};
__proEDTCard.__onSelect=function(_event){
var _element=this.__getElement(_event);
if(!_element)return;
this._$hide();
V._$stopDefault(_event);
this._$dispatchEvent('onselect',this.__getValue(_element));
};
__proEDTCard.__getValue=F;
p._$$EDTCardCNF=C();
__proEDTCardCNF=p._$$EDTCardCNF._$extend(P(N.ut)._$$Event);
p._$$EDTCardCNF._$show=function(_options){
var _parent=!!_options&&_options.parent||document.body;
_parent=_parent==document.documentElement?document.body:_parent;
!!this.__instance?this.__instance._$reset(_parent,_options)
:this.__instance=new this(_parent,_options);
this.__instance._$show();
};
p._$$EDTCardCNF._$hide=function(){
if(!this.__instance)return;
this.__instance._$hide();
};
__proEDTCardCNF._$initialize=function(_parent,_options){
p._$dumpStyle();
this._$super();
this.__build();
this._$reset(_parent,_options);
};
__proEDTCardCNF._$reset=function(_parent,_options){
_options=_options||O;
var _style=this.__body.style;
_style.top=(_options.top||0)+'px';
_style.left=(_options.left||0)+'px';
this.__parent=E._$getElement(_parent);
};
__proEDTCardCNF._$show=function(){
if(!this.__parent)return;
this.__body.style.display='';
this.__parent.appendChild(this.__body);
};
__proEDTCardCNF._$hide=function(){
this.__body.style.display='none';
};
__proEDTCardCNF.__build=F;
})();
(function(){
var p=P(N.ui),
__proEDTWindow,
__supEDTWindow;
p._$pushStyle('.zbwin{width:400px;}\
               .zbwin .zfom{width:370px;margin:0 auto;font-size:12px;color:#333;text-align:left;}\
               .zbwin .zxin{width:16px;height:16px;vertical-align:middle;background:url('+N.rc.r+'editor/editor.png) no-repeat;}\
               .zbwin .zact{margin:25px 0 10px;}\
               .zbwin select,.zbwin textarea,.zbwin .ztxt{border:1px solid #7f9db9;}');
p._$$EDTWindow=C();
__proEDTWindow=p._$$EDTWindow._$extend(p._$$WindowWrapper,true);
__supEDTWindow=p._$$EDTWindow._$supro;
__proEDTWindow._$initialize=function(_parent,_options){
_options=_options||{};
_options.onshow=this.__onShow._$bind(this);
this._$super(_parent||document.body,_options);
};
__proEDTWindow._$resetOption=function(_options){
_options=_options||O;
this._$addEvent('onok',_options.onok||F);
this._$addEvent('oncc',_options.oncc||F);
if(!!this.__form)this.__form.reset();
__supEDTWindow._$resetOption.apply(this,arguments);
};
__proEDTWindow.__getSpace=function(_uispace){
return'zbwin '+_uispace;
};
__proEDTWindow.__getXhtml=function(_button){
this.__key='id-'+U._$randNumberString(8);
return'<form class="zfom" onsubmit="return false;">'
+(this.__getFXhtml()||'')+'\
              <div class="zact">\
                <input class="zbtn zbtnok" type="button" value="确定" name="'+this.__key+'-a"/>\
                <input class="zbtn zbtncc" type="button" value="取消" name="'+this.__key+'-b"/>'
+(this.__getBXhtml()||'')+'\
              </div>\
            </form>';
};
__proEDTWindow.__intXnode=function(){
this.__form=E._$getChildElements(this.__body)[0];
V._$addEvent(this.__form[this.__key+'-a'],'click',this.__onOK._$bind(this));
V._$addEvent(this.__form[this.__key+'-b'],'click',this.__onCC._$bind(this));
};
__proEDTWindow.__focusInput=function(){
var _ntmp=this.__form[this.__key+'-0'];
try{_ntmp.select();}catch(e){_ntmp.focus();}
};
__proEDTWindow.__onShow=function(){
if(!this.__form)return;
var _ntmp=this.__form[this.__key+'-0'];
if(!!_ntmp)window.setTimeout(this.__focusInput._$bind(this),0);
};
__proEDTWindow.__onCC=function(){
this._$hide();
this._$dispatchEvent('oncc');
};
__proEDTWindow.__onOK=function(){
this._$hide();
this._$dispatchEvent('onok');
};
__proEDTWindow.__getFXhtml=F;
__proEDTWindow.__getBXhtml=F;
})();
(function(){
var p=P(N.ui),
__proEDTFontFamily,
__uispace='ui-'+U._$randNumberString(),
__sfquots=/\'|\"/g,
__cfamily=[{t:'宋体',v:'宋体'},{t:'黑体',v:'黑体'},{t:'楷体',v:'楷体_gb2312'},{t:'隶书',v:'隶书'},{t:'幼圆',v:'幼圆'},
{t:'Arial',v:'arial'},{t:'Arial Narrow',v:'arial narrow'},{t:'Arial Black',v:'arial black'},{t:'Comic Sans MS',v:'comic sans ms'},
{t:'Courier',v:'courier'},{t:'System',v:'system'},{t:'Verdana',v:'verdana'},{t:'Times New Roman',v:'times new roman'}];
p._$pushStyle('#<uispace>{width:141px;line-height:24px;border-color:#9fac87;text-align:left;}\
               #<uispace> .zitm{display:block;height:24px;margin:1px;padding-left:8px;font-size:16px;border:1px solid #ddd;color:#000;background-color:#fff;}\
               #<uispace> .zitm:hover{background-color:#e5e5e1;text-decoration:none;}',__uispace);
p._$$EDTFontFamily=C();
__proEDTFontFamily=p._$$EDTFontFamily._$extend(p._$$EDTCard,true);
p._$$EDTFontFamily._$getFamilyName=function(_family){
_family=(_family||'').toLowerCase().replace(__sfquots,'');
for(var i=0,l=__cfamily.length,_item;i<l;i++){
_item=__cfamily[i];
if(_family==_item.v)return _item.t;
}
return'Arial';
};
__proEDTFontFamily.__getSpace=function(){
return __uispace;
};
__proEDTFontFamily.__getXhtml=function(){
var _arr=[];
for(var i=0,l=__cfamily.length,_item;i<l;i++){
_item=__cfamily[i];
_arr.push('<a class="zitm" style="font-family:\''+_item.v+
'\'" href="#" hidefocus="true" name="'+i+'">'+_item.t+'</a>');
}
return _arr.join('');
};
__proEDTFontFamily.__getValue=function(_element){
return __cfamily[parseInt(_element.name)||0].v;
};
})();
(function(){
var p=P(N.ui),
__proEDTFontSize,
__uispace='ui-'+U._$randNumberString(),
__sconfig=[{t:'小',v:'x-small',f:'12px'},
{t:'标准',v:'small',f:'14px'},
{t:'大',v:'medium',f:'16px'},
{t:'特大',v:'large',f:'18px'},
{t:'极大',v:'x-large',f:'24px'}],
__fconfig={'12px':0,'14px':1,'16px':2,'18px':3,'24px':4};
p._$pushStyle('#<uispace>{width:110px;border-color:#9fac87;text-align:left;}\
               #<uispace> .zitm{display:block;position:relative;margin:1px;padding:2px 0 2px 8px;border:1px solid #ddd;color:#000;background-color:#fff;zoom:1;}\
               #<uispace> .zitm:hover{background-color:#e5e5e1;text-decoration:none;}\
               #<uispace> .zitm .zhnt{position:absolute;right:5px;font-size:10px;}',__uispace);
p._$$EDTFontSize=C();
__proEDTFontSize=p._$$EDTFontSize._$extend(p._$$EDTCard,true);
p._$$EDTFontSize._$getFontDescBySize=function(_size){
var _index=_size-1;
if(U._$isType(_size,'string')&&_size.indexOf('px')>=0)
_index=__fconfig[_size];
return(__sconfig[_index]||__sconfig[1]).t;
};
__proEDTFontSize.__getSpace=function(){
return __uispace;
};
__proEDTFontSize.__getXhtml=function(){
var _arr=[];
for(var i=0,l=__sconfig.length,_item;i<l;i++){
_item=__sconfig[i];
_arr.push('<a class="zitm" style="font-size:'+_item.v+
'" href="#'+(i+1)+'" hidefocus="true">'+_item.t+'<span class="zhnt">'+_item.f+'</span></a>');
}
return _arr.join('');
};
__proEDTFontSize.__getValue=function(_element){
var _href=_element.href,
_size=parseInt(_href.substr(_href.indexOf('#')+1))||1;
return[_size,__sconfig[_size-1].t];
};
})();
(function(){
var p=P(N.ui),
__proEDTColorPicker,
__supEDTColorPicker,
__proEDTCMPColorPicker,
__supEDTCMPColorPicker,
__uispace='ui-'+U._$randNumberString(),
__hxcolor=['00','33','66','99','cc','ff'],
__spcolor=['ff0000','00ff00','0000ff','ffff00','00ffff','ff00ff'],
__cfcolor=[{t:'黑色',v:'#000000'},{t:'褐色',v:'#993300'},{t:'橄榄色',v:'#333300'},{t:'深绿',v:'#003300'},{t:'深青',v:'#003366'},{t:'深蓝',v:'#000080'},{t:'靛蓝',v:'#333399'},{t:'灰色-80%',v:'#333333'},
{t:'深红',v:'#800000'},{t:'橙色',v:'#ff6600'},{t:'深黄',v:'#808000'},{t:'绿色',v:'#008000'},{t:'青色',v:'#008080'},{t:'蓝色',v:'#0000ff'},{t:'蓝-灰',v:'#666699'},{t:'灰色-50%',v:'#808080'},
{t:'红色',v:'#ff0000'},{t:'浅橙色',v:'#ff9900'},{t:'酸橙色',v:'#99cc00'},{t:'海绿',v:'#339966'},{t:'水绿色',v:'#33cccc'},{t:'浅蓝',v:'#3366ff'},{t:'紫罗兰',v:'#800080'},{t:'灰色-40%',v:'#999999'},
{t:'粉红',v:'#ff00ff'},{t:'金色',v:'#ffcc00'},{t:'黄色',v:'#ffff00'},{t:'鲜绿',v:'#00ff00'},{t:'青绿',v:'#00ffff'},{t:'天蓝',v:'#00ccff'},{t:'梅红',v:'#993366'},{t:'灰色-25%',v:'#c0c0c0'},
{t:'玫瑰红',v:'#f9c'},{t:'茶色',v:'#ffcc99'},{t:'浅黄',v:'#ffff99'},{t:'浅绿',v:'#ccffcc'},{t:'浅青绿',v:'#ccffff'},{t:'淡蓝',v:'#99ccff'},{t:'淡紫',v:'#cc99ff'},{t:'白色',v:'#ffffff'}];
p._$pushStyle('#<uispace>{width:160px;border-color:#9fac87;text-align:center;}\
               #<uispace> .zprv{font-size:1px;line-height:1px;text-align:left;}\
               #<uispace> .zprv .iblock{width:28px;height:11px;margin:0 5px 0 3px;border:1px solid #aca899;overflow:hidden;}\
               #<uispace> .zbox{width:152px;margin:5px auto;}\
               #<uispace> .zitm{float:left;width:11px;height:11px;margin:3px;border:1px solid #aca899;overflow:hidden;cursor:pointer;text-indent:-100px;_display:inline;}\
               #<uispace> .zmre{padding:1px;font-size:12px;}\
               #<uispace> .zbar{display:block;padding:3px 1px;margin:3px;color:#000;}\
               #<uispace> .zbar:hover{padding:2px 0;background:#ffeec2;border:1px solid #000080;text-decoration:none;}\
               #<uispace>-full{width:225px;}\
               #<uispace>-full .zbox{width:220px;margin:2px auto;}\
               #<uispace>-full .zitm{width:10px;height:10px;margin:-1px 0 0 -1px;border-color:#000}\
               #<uispace>-full .zprv{font-size:12px;margin:2px;}\
               #<uispace>-full .zprv .iblock{margin-left:0;}',__uispace);
p._$$EDTColorPicker=C();
__proEDTColorPicker=p._$$EDTColorPicker._$extend(p._$$EDTCard,true);
__supEDTColorPicker=p._$$EDTColorPicker._$supro;
__proEDTColorPicker._$resetOption=function(_options){
this.__copt=_options||{};
this.__previewColor(this.__copt.color);
this.__clear=this.__copt.clear||'#000000';
__supEDTColorPicker._$resetOption.apply(this,arguments);
};
__proEDTColorPicker.__getSpace=function(){
return __uispace;
};
__proEDTColorPicker.__getXhtml=function(){
var _arr=['<a href="#" hidefocus="true" class="zbar zprv" title="去除颜色">\
                 <span class="ztag iblock">&nbsp;</span></a>\
                 <div class="zbox ztag clearfix">'];
for(var i=0,l=__cfcolor.length,_item;i<l;i++){
_item=__cfcolor[i];
_arr.push('<div class="zitm" title="'+_item.t+'" \
                    style="background-color:'+_item.v+'"">'+_item.v+'</div>');
}
_arr.push('</div><a href="#" hidefocus="true" class="zbar zmre ztag">更多颜色...</a>');
return _arr.join('');
};
__proEDTColorPicker.__intXnode=function(){
var _ntmp=E._$getElementsByClassName(this.__body,'ztag');
this.__nprv=_ntmp[0];
V._$addEvent(_ntmp[2],'click',this.__onColorMore._$bind(this));
V._$addEvent(_ntmp[1],'click',this.__onSelect._$bind(this));
V._$addEvent(_ntmp[1],'mouseover',this.__onColorPreview._$bind(this));
V._$addEvent(this.__nprv.parentNode,'click',this.__onColorClear._$bind(this));
};
__proEDTColorPicker.__previewColor=function(_color){
_color=_color||'#000000';
this.__nprv.style.backgroundColor=_color;
};
__proEDTColorPicker.__getValue=function(_element){
return _element.innerText;
};
__proEDTColorPicker.__onColorMore=function(_event){
V._$stopDefault(_event);
this.__copt.parent=this.__layer._$getBody().parentNode;
p._$$EDTCMPColorPicker._$show(this.__copt);
this._$hide();
};
__proEDTColorPicker.__onColorClear=function(_event){
this._$hide();
V._$stopDefault(_event);
this._$dispatchEvent('onselect',this.__clear);
};
__proEDTColorPicker.__onColorPreview=function(_event){
var _element=this.__getElement(_event);
if(!_element)return;
this.__previewColor(this.__getValue(_element));
};
p._$$EDTCMPColorPicker=C();
__proEDTCMPColorPicker=p._$$EDTCMPColorPicker._$extend(p._$$EDTColorPicker,true);
__supEDTCMPColorPicker=p._$$EDTCMPColorPicker._$supro;
__proEDTCMPColorPicker._$initialize=function(_parent,_options){
_options=_options||{};
_options['class']=(_options['class']||'')
+' '+__uispace+'-full';
this._$super(_parent,_options);
};
__proEDTCMPColorPicker.__getItem=function(_color){
return'<div class="zitm" style="background-color:'+_color+';">'+_color+'</div>';
};
__proEDTCMPColorPicker.__getXhtml=function(){
var _arr=['<a href="#" hidefocus="true" class="zbar zprv" title="去除颜色">\
                 <span class="ztag iblock">&nbsp;</span>去除颜色</a>\
                 <div class="zbox ztag clearfix">'];
for(var i=0,ii=__hxcolor.length;i<ii;i++){
_arr.push(this.__getItem('#'+__hxcolor[i]+__hxcolor[i]+__hxcolor[i]));
_arr.push(this.__getItem('#000000'));
for(var j=0,jj=ii/2;j<jj;j++)
for(var k=0;k<ii;_arr.push(this.__getItem('#'+
__hxcolor[j]+__hxcolor[k]+__hxcolor[i])),k++);
}
for(var i=0,ii=__hxcolor.length;i<ii;i++){
_arr.push(this.__getItem('#'+__spcolor[i]));
_arr.push(this.__getItem('#000000'));
for(var j=ii/2;j<ii;j++)
for(var k=0;k<ii;_arr.push(this.__getItem('#'+
__hxcolor[j]+__hxcolor[k]+__hxcolor[i])),k++);
}
_arr.push('</div>');
return _arr.join('');
};
})();
(function(){
var p=P(N.ui),
__proEDTWinAlert,
__supEDTWinAlert,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace> .zln{line-height:20px;margin:20px 0;font-size:14px;text-align:center;}\
               #<uispace> .zbtncc{display:none;}',__uispace);
p._$$EDTWinAlert=C();
__proEDTWinAlert=p._$$EDTWinAlert._$extend(p._$$EDTWindow,true);
__supEDTWinAlert=p._$$EDTWinAlert._$supro;
__proEDTWinAlert._$initialize=function(_parent,_options){
_options=_options||{};
_options.title='提示';
this._$super(_parent,_options);
};
__proEDTWinAlert._$resetOption=function(_options){
_options=_options||O;
this.__nhnt.innerHTML=_options.message||'提示信息';
__supEDTWinAlert._$resetOption.apply(this,arguments);
};
__proEDTWinAlert.__getSpace=function(){
return __supEDTWinAlert.__getSpace.call(this,__uispace);
};
__proEDTWinAlert.__getFXhtml=function(){
return'<div class="zln"></div>';
};
__proEDTWinAlert.__intXnode=function(){
__supEDTWinAlert.__intXnode.call(this);
this.__nhnt=E._$getChildElements(this.__form)[0];
};
})();
(function(){
var p=P(N.ui),
__proFIcon,
__proPortrait,
__itm_ireg=/\#\<.*?\>/g,
__itm_type=[{t:'a',r:6,c:10,w:30,h:30},
{t:'b',r:3,c:5,w:60,h:60,cw:61}],
__itm_nprv=document.cloneElement('div','zprv'),
__itm_nimg=document.cloneElement('img','zprv');
var __getStyle=function(){
var _arr=[];
for(var i=0,l=__itm_type.length,_item;i<l;i++){
_item=__itm_type[i];
_arr.push('.zibox .zitm.'+_item.t+'{width:'+(_item.cw||_item.w)+'px;height:'+(_item.ch||_item.h)+'px;line-height:'+(_item.ch||_item.h)+'px;}');
for(var j=0;j<_item.r;j++)
for(var k=0;k<_item.c;_arr.push('.zibox .'+_item.t+(j*_item.c+k)+'{background-position:-'+(k*_item.w)+'px -'+(j*_item.h)+'px;}'),k++);
}
return _arr.join('');
};
p._$pushStyle('.zibox{position:relative;zoom:1;}\
               .zibox .zitm{float:left;margin:-1px 0 0 -1px;overflow:hidden;text-indent:200px;border:1px solid #e5e5e1;cursor:pointer;background-repeat:no-repeat;zoom:1;}\
               .zibox .zitm:hover,.zibox .js-zhvr-110{position:relative;border-color:#000;}'+__getStyle()+'\
               .zibox .zprv{position:absolute;top:0;left:0;background:#fff no-repeat center center;border:1px solid #888;}\
               .zibox div.zprv{width:60px;height:60px;}');
p._$$FIcon=C();
__proFIcon=p._$$FIcon._$extend(P(N.ut)._$$Item,true);
__proFIcon._$initialize=function(){
this._$super();
this.__body=document.cloneElement('div','zitm');
E._$hoverElement(this.__body,'js-zhvr-110');
V._$addEvent(this.__body,'click',this.__onClick._$bind(this));
V._$addEvent(this.__body,'mouseout',this.__onMouseOut._$bind(this));
V._$addEvent(this.__body,'mouseover',this.__onMouseOver._$bind(this));
};
__proFIcon._$reset=function(_options){
_options=_options||O;
this.__ipage=_options.page||0;
this.__iauto=!!_options.pauto;
this.__iprev=_options.purl||'';
this.__index=_options._index_||0;
this.__iconf=(__itm_type[_options.type]||__itm_type[0]);
this.__nprev=this.__iauto?__itm_nimg:__itm_nprv;
E._$addClassName(this.__body,this.__getBodyStyle());
this._$addEvent('onclick',_options.onclick||F);
};
__proFIcon._$destroy=function(){
E._$delClassName(this.__body,this.__getBodyStyle());
p._$$FIcon._$supro._$destroy.call(this);
};
__proFIcon._$setData=function(_text){
this.__body.title=_text||'';
this.__body.innerText=_text||'';
};
__proFIcon.__getBodyStyle=function(){
return this.__iconf.t+' '+this.__iconf.t+this.__index;
};
__proFIcon.__getPreviewUrl=function(){
return this.__iprev.replace(__itm_ireg,
this.__ipage*this.__iconf.r*this.__iconf.c+this.__index);
};
__proFIcon.__onClick=function(){
this.__onMouseOut();
this._$dispatchEvent('onclick',this.__getPreviewUrl());
};
__proFIcon.__onMouseOver=function(){
var _style=this.__nprev.style,
_purl=this.__getPreviewUrl(),
_left=(this.__index%this.__iconf.c)
>Math.floor(this.__iconf.c/2);
_style.left=_left?'0':'auto';
_style.right=_left?'auto':'0';
this.__body.parentNode.appendChild(this.__nprev);
this.__iauto?this.__nprev.src=_purl
:_style.backgroundImage='url('+_purl+')';
};
__proFIcon.__onMouseOut=function(){
if(this.__iauto)
this.__nprev.src=N.rc.r+'empty.png';
E._$removeElementByEC(this.__nprev);
};
p._$$Portrait=C();
__proPortrait=p._$$Portrait._$extend(p._$$CardWrapper,true);
p._$$Portrait._$bind=function(_parent,_options){
V._$addEvent(_parent,'click',function(_event){
V._$stop(_event);
this._$show(_options);
}._$bind(this));
};
__proPortrait._$initialize=function(_parent,_options){
_options=_options||{};
_options.onshow=this.__onInitContent._$bind(this);
this._$super(_parent,_options);
this.__iopt={onclick:this.__onSelect._$bind(this)};
};
__proPortrait._$resetOption=function(_options){
_options=_options||O;
this._$addEvent('onselect',_options.onselect||F);
if(!!_options.top||!!_options.left)
this.__layer._$setPosition(_options.left,_options.top);
p._$$Portrait._$supro._$resetOption.call(this,_options);
};
__proPortrait.__disableButton=function(_button,_class,_disabled){
_disabled?E._$addClassName(_button,_class)
:E._$delClassName(_button,_class);
};
__proPortrait.__onSelect=function(_face){
this._$hide();
this._$dispatchEvent('onselect',_face);
};
__proPortrait.__onInitContent=F;
})();
(function(){
var p=P(N.ui),
__proComplexPortrait,
__uispace='ui-'+U._$randNumberString(),
__tpxhtml,
__inumber=8,
__iheight=22,
__faceurl=N.rc.r+'portrait/',
__cselected='js-selected-386',
__cdisabled='js-disabled-345',
__config=[{t:'泡泡',n:'face',s:true,a:true,
l:['微笑','开怀笑','哭泣','失望','困了','好好笑','啵','电到了','汗','流口水了','真困啊','我吐','眨眼','？？？','嘘','砸死你','不说','坏','色迷迷','教训','可爱','YEAH','崩溃','惊讶','鄙视','开心','仰慕你','晕','挖鼻孔','撒娇','鼓掌','害羞','老大','欠揍','吐舌笑脸','飞吻','工作忙','大哭','偷偷笑','送花给你','来，亲一个','拍桌子','拜拜','得意的笑','生气','怕怕','尴尬','难过','叹气','我是女生','玫瑰','好爱你','心碎了','亲亲','NO','YES','握个手','到点了','音乐','我是男生','带血的刀','炸弹','有了','好晚了','吸血蝙蝠','便便','干一杯','抽烟','打电话','家','车子','礼物','金钱','太阳','下雨','猪猪','小猫','小狗','骨头','喝水','汉堡','包子','西瓜','约会','CALL我']}
,{t:'亚运表情',n:'yayun',u:true,
l:['游泳','跳水','水球','花样游泳','射箭','田径','羽毛球','棒球','篮球','拳击','皮划艇静水','皮划艇激流回旋','自行车场地赛','自行车公路赛','自行车山地赛','自行车小轮车赛','马术','击剑','足球','体操','蹦床','艺术体操','手球','曲棍球','柔道','现代五项','赛艇','帆船','射击','射击飞碟','垒球','乒乓球','跆拳道','网球','软式网球','铁人三项','排球','沙滩排球','举重','摔跤','保龄球','台球','体育舞蹈','龙舟','高尔夫球','卡巴迪','空手道','轮滑','橄榄球','藤球','壁球','武术','国际象棋','围棋','中国象棋','板球','自由泳','仰泳','蛙泳','蝶泳','跳台','跳板','标枪','铅球','撑竿跳','跨栏','跳远','掷铁饼','链球','七项全能','十项全能','跳马','自由体操','单杠','双杠','高低杠','鞍马','吊环','平衡木','反对','支持','拉拉队','中国队加油']}
,{t:'大泡泡',n:'popo',s:true,
l:['饶了我','敢惹我','蜘蛛侠','微笑','抓狂','流鼻血','谁放p','开饭了','崇拜','血窟窿','不是吧','打哈欠','真衰','大家好','投降','大笑','流口水','老大','雄霸','命歹啊','亲你','痛哭','挨揍','脸肿','服了','傲慢','得意','满意','汗','可怜','怒了','傻笑','伤心','倒霉','鬼脸','羡慕','偷看','绷带','挨砖','挨铁球','好色','行星','害羞','泪流','烧香','挨扁','不敢了','哈哈','强','寒','爽啊','惊讶','yoyo','太有才','吓我','出击','耍酷','缺牙','又打我','友好','黑心','我哭','骷髅','白牙','掉眼球','戴花','我也要','美味','狂笑','眯眼','晕死','爱财','发呆','滴汗','爱你','哼哼','眼镜','怕了','大小眼','飞天侠','甲虫脸','错愕','欢迎','不懂','标枪','风帆','击剑','跨栏MM','跨栏','马术','平衡木','铅球','拳击','射击','射箭','手球','跆拳道','田径','田径MM','跳马','铁饼','棒球','撑竿跳','弹床','吊环','举重','排球','皮划艇','皮划艇','乒乓','自行车','曲棍球','沙滩排球','水上排球','体操','跳台','网球','游泳','羽毛球','加油！']}
,{t:'梦幻西游',n:'west',s:true,a:true,
l:['微笑','开心','得意','晕了','怕了吧','蝙蝠','牛奶','小狗','心碎了','爱你','蛋糕','握手','时钟','咖啡','不爽','痛哭','牛头','脸红','阴险吧','再见','帅哥','亲一个','电话','献花','不是吧','吐舌头','yes','no','爽啊','小猪','灯泡','可乐','骂人','礼物','晚安','讨厌','乌云','yeah','你好','扇风','眯眼','飞吻','唱歌','臭美','庆祝','惊叹','叫好','安慰','我行啊','崩溃','胜利了','叫好','我哭','可爱','不爽','疑问','憨笑','call我','不错哦','休息','呸','欢呼','大笑','哈哈','飞行','呕吐','挨揍','我闭嘴','困了','晦气','就医','鄙视','喜欢你','回来了','汗','加油','厉害','高兴','倒霉','我顶','流口水','速度','不理你','欢迎','恭喜','邮件','瞧我的','爱意','色迷迷','亲爱的','不稀罕','强','喝酒','完蛋','蓬头','拜拜','爽啊','献花','快来人','念经','下雨了','快记','小看你','溜走']}
,{t:'蛋壳熊',n:'bear',
l:['打球','我听话','吃零食','写字','跳舞','吹气','肚皮舞','无聊哦','吃饭了','吃冰棍','大笑','发火','击球','揍你','唱歌','眨眼睛','打喷嚏','纳闷','爆发吧','做鬼脸','威胁','玩彩球','星月','挨揍','哼歌','魔法棒','舞大刀','再见','扩胸']}
,{t:'兔儿控',n:'tu',
l:['正义超人陈队','大八卦','啊~~~死掉了','吃饱饱','HAPPY~~','哇 哈哈哈','好急好急','好开心','BS你','星星眼','正义超人','调皮','WS老别别','钢琴小王子','挖啊挖鼻孔','爆炸芭蕾','风尘式抽烟','华丽转圈圈','色别别归来','拉拉队长','第一手','草莓星星眼','撒娇撒娇','弱弱小鸡','心永不变','我追呀追','我跑呀跑','梨花带雨','不要离开我','含蓄滴脸红','怨念','抓狂','WS偷偷笑','欢迎欢迎','热烈欢迎','坏坏扭扭','色色扭扭','忠心扭扭','勾人的小妞','帅锅','WS眼镜男','华丽吐啊吐','指着鼻子骂','伤心滴飘走','不倒翁','喝醉鸟','不爽','121 121 121','软绵绵滴撒娇','摇啊摇','激烈滴撒娇','小白扭扭','小黑扭扭','怕不怕啊','小白跳舞','小黑跳舞','小白跳舞','小黑跳舞','HAPPY小暴牙','钢琴小公主','钢琴小王子','美少女花子','垂涎美色滴WSN~~~~','是说我吗','在做什么捏','僵尸宝宝','僵尸妈妈','僵尸爸爸','僵尸爷爷','一起跳~~','一起跳~~','天生一对','白扭扭队','黑扭扭队','僵尸家族出游鸟~~~','偶棉在浇花啊','啦啦啦~','心花怒放','大心~~','蹲地发呆','招手','喔~~~','扇扇风左','少奶奶打招呼','扇扇风右','圣诞快乐','圣诞树','洗白白',' 绿茶面膜','巧克力面膜','睡得香','臭屁轰炸','生气厨娘','快乐游泳','比基尼','恭喜发财','招财进宝','吉祥如意','对不起','不想起床','抱抱','蹬腿','兔子火锅','情人节快乐','胡思乱想','小可爱','小三八','抓抓手','生日快乐','顿脚','摇摇椅','贱贱扭扭腰','乖乖扭扭腰','蓝蓝路','奥运火炬手','鼠宝宝','牛宝宝','虎宝宝','兔宝宝','龙宝宝','蛇宝宝','马宝宝','羊宝宝','猴宝宝','鸡宝宝','狗宝宝','猪宝宝','棒棒糖','吃冰棒','划水','玩水','假假PMP','忠心PMP']}
,{t:'土豆仔',n:'r',
l:['慢慢来嘛','可恶啊','扭扭捏捏','阴险','我就说啊','弹吉他','唱歌','你给我记着','好笑','太好笑了','怎么!?','听我的','换脑壳','不会吧!','摇摆','扭动','瀑布汗','我吐','呼啦圈','怎么这样...','呜呜','真的吗!!','好心痛!','这个这个这个','Yin笑','喵呜','你就吹吧!','咳嗽','你啊你啊!','潜水','气绝','小声点!','NONONO','怎么办怎么办?','削皮','我是LOLI','鼓掌','扭头','这边不对那边不对!','喷饭!','拜拜','冲啊','亲亲','有弹性就有魅力','好冷','摇摇晃晃','捏你','失落','你就扯吧!','有惊喜!','啊呀呀呀!','翻滚中','滚圈圈','鄙视你!','打喷嚏','来呀来呀!~','头很光滑','我说没说过!','华丽摇摆!','就是这样','晕厥～','啊？？','单挑！','我刷啊刷压','我洗啊洗脸','长角...','僵尸','我变我变变','我切我切切','秀逗了？','做鬼脸','杀人狂魔','我舔～～','撞墙啦','冲啊～','打冷战','点头','滚来滚去','雀跃啊','休息了','撞头党']}
,{t:'绿头巾',n:'g',
l:['羞羞','叹气','爱哟~','锻炼','扯虾米','88','好重','欺负人','不活了','讨厌啦','好HIGH','燃了！','亲爱D','喝茶','头晕','很有才','驾~','亢奋','惊！','吓！','摸头','不要吖~','抖~','脸色铁青','红牌','NONO','抬眼镜','天使','亲亲','打拳','这样吗','叹','恶魔','超亢奋','哪里哪里','受打击','喝酒','啊哦','受刺激！','学习','怕怕','尿急','花痴','受伤','抠鼻子','超人','好爱吖','欺负人','飘~','切~','摇吖摇','钓鱼','郁闷']}
,{t:'玛央猫',n:'mayang',
l:['戳苍蝇','忽悠','偷窥','飞','鬼脸','刷牙','隐身','吃汉堡','我们是冠军','熏苍蝇','被球砸','摇头','转头斜视','吹风','尿尿','叹气','临危不乱','惊讶','打劫','鬼','汗','喷火','飘过','亲','顶','狡猾','怒','中指','睡觉','问号','大惊','生气','胜利','耶','坐禅','哭','大笑','喊号','比手势']}
,{t:'奶瓶仔',n:'nai',
l:['被揍','猫猫','我爱奶瓶','爱心','祈祷','再见','不耐烦','下流手势','看着奶瓶狂笑','伤心咬奶瓶','怒火','狂笑','微笑','烦恼','凌厉的眼光','拜奶瓶','懒虫喝奶','抱着奶瓶睡觉','趴在地上哭','自虐','疑问','皱眉头','路过','吐舌头','号啕大哭','大吐舌头','害羞','亲亲奶瓶','胜利手势','犯困','指挥','幽灵','生气想揍人']}
,{t:'帽帽鼠',n:'minimo',
l:['好喜欢','棒','你好','飘过','鼓掌','不明白','晕','新年好','汗','哭','可爱','我是女王','我吐','玩耍','加油','吃东西','恭贺新春','钱啊钱','好冷','有计谋','嘲笑','潜水太久','不会吧','不要','睡觉','扭扭捏捏','发财拉','不行','哈哈','路过','怕怕','献吻','涮牙了','好气','我错了','再见','鬼','藐视','电你','尴尬','偷看','胜利','郁闷','找打','惊']}
,{t:'唛哩轰',n:'mliho',
l:['吃东西','你欺负我','嘿嘿','欢迎','亲爱的','发火','偷亲','笑死了','吐血','再见','快亲我','很好很强大','耍赖','我吐','我汗','爆发','数钱','逗你玩','恭喜','着迷','听话','喜欢','疼爱','恶整','起床啦','伤心','鬼脸','不会吧','疑惑','有美女吖','刷牙啦','超人','我来啦','看不见','发怒','别惹我','噪音攻击','报复','反攻击','坏笑','满足','害羞','欢呼','落魄','无视','探勘','求饶','吸引','虐待','很乖']}
,{t:'liki公主',n:'liki',
l:['ok','偷笑','大笑','害羞','腼典','撒娇','崇拜','仰慕','怒骂','失望','大惊','向前进','老大','教训','哭','大哭','委屈','献花','晕','撒皮','乖','加油','寒','见鬼','刷牙','超人']}
,{t:'麦咪熊熊',n:'mx',
l:['拍手','抚摸','汗','诡笑','眨眼','棒棒糖','豆眼','点头','摇头','蹭','来抱抱','乃人噢','开心跳','happy','看热闹','生日快乐','亲亲','氺汪汪','好冷','看','一起来','得意','扭呀扭','拨耳朵','美滋滋','可怕','亲宝贝','揉揉','工作','不高兴','啦啦','偷笑','奇怪','吃','惊','私语','抽咽','委屈','流泪','哭','强吻','偷看','抱住','献花','跳舞','hi','睡','冷哇','么么','困','亲','不要','无语','魂','再见','我说','大步走','摆手','扭动','噢噢噢']}
,{t:'小夏',n:'xiayu',
l:['555哭','凉快','介个','无语','哼哼~~','happy~','我来啦','耶~','我扑','委屈','love','困了','前进','思考','肚子痛','love','困了','前进','思考','肚子痛','吃饭中','睡觉觉','化妆','变脸','什么','打针','忙','可怜的哭','坏笑','不耐烦','喝果汁','疯','怒视','很强大','傻呆呆','好主意','no','甩葱','脸红']}
,{t:'酷巴熊',n:'cobo',
l:['不活啦','瞌睡','嘻！嘻！','斗虫虫','NO!NO!','Hi!','琢磨！琢磨！','撞墙','嘘！','嘻！嘻！','潜水中','偷笑','亲亲','再变','笑崩溃','我变','嘿哈','敬礼','推','好HAPPY哦','变','嘿嘿','来呀','陶醉','逗你','扭扭','翻过','得意','我飘','旋转快乐','左右扭','新年快乐','滚来滚去','放炮啦','恭喜发财','耶～','加油～','感冒了','别理我','吐舌头','我跳','看我的','北京欢迎你','看箭','中国加油','我顶','我跳','揍你','力气太大了吗','我劈','啷哩个啷','鲤鱼跳','熊式游法','我顶','汗。。。','我画圈圈','顶！！','同志们好～','被雷到','脑残','我戳我戳','已阅','得意','耶！','啊～～','臭屁','这里这里...','不会吧...','哦？','哼！','我来啦～','听音乐','看招！','哦','得得意意','啊 切','看招！','草裙舞','啦啦啦','啦啦啦','泪眼花花','看招！','啊～哈！','我！老大！','熊家拳！','嘘！小声点!','旋转快乐！','晕','琢磨','撞墙','找抽','豆豆','嘿哈','黄飞熊','降龙十八掌','觉觉','啊～切～～','美女','88','笑死我了','让我们集结吧！','装可爱','我来啦～','88','泪啊～','no no']}
,{t:'泡泡兵',n:'pop',
l:['吃饭','晕','抓狂','喷血','哭','抽你','吐了','扫射','潜水','BIBI','KAO','抽烟','捏你','抱抱','汗','爽啊','我甩','舔你','哟西','去你的','我吐','回来','看你狂不','感动','喷水','你好棒','你……我倒','早','洗澡澡',' “鹿”过','开枪','蝙蝠侠','我“滚”呀“滚”','找我啥事','恰我一拳','抠鼻鼻','好困那','哼','拜托拉','好寒那','爆头','发飚啦','大笑',' 痴笑','大寒']}
,{t:'怪物熊猫',n:'meaky',
l:['抽烟','鄙视','媒婆','大笑','困了','浪舞','凄凉','大哭','倒了','很馋','嘁~','膜拜','怒奔','自残']}
,{t:'无知熊猫',n:'wuzhi',
l:['火炬接力','石化','元气满点','俯卧撑','发呆','恐怖','蓝蓝路','不好意思','生日快乐','懒','无所谓','生病','星星眼','谢谢','偷窥','kiss','打飞','皮又痒了','鄙视你','砍死你','眼泪汪汪','挖鼻子','大笑','暴走','sm','orz','晕','色眯眯','咬住','不良','华丽登场','捏脸','吃面包','摇头晃脑','瞌睡','挠挠','怒','思考']}
,{t:'PEG',n:'peg',
l:['困啦','嘿嘿...','喵～','气死我了','我爱漂漂','刷牙','真好吃','好呀','伤心','搅啊搅拌','我晕','寒～','吃瓜瓜','我爱大包','吸面功']}
,{t:'绿豆蛙',n:'frogleon',
l:['开心','伤心','惊恐','怒','疑惑','可爱','白眼','伤心','委屈','喜悦','痛苦','狂喜','庆祝','惊讶','贼笑','雀跃','咬牙切齿','不爽','胆小怕事','被扁','冷汗','可怜','吃惊','抓狂','无奈','惊喜','害怕','忐忑','发疯','感动']}
,{t:'猪小梁',n:'zhuxiaoliang',
l:['我飞～','跑路喽','快跑','跳舞','扮花花','扮苍蝇','中箭','哭给你看','电死你','出发','吃饭啦','好吃','飘过','泡咖啡','泡茶']}
,{t:'泡泡妹',n:'popomm',
l:['同意','怕怕','女侠','高兴','做面膜','杂耍','病了','困了','咳咳','生气','不要啊 ','撅嘴','嗯嗯','请安','为什么','怒','爱心','可爱']}
];
var __getStyle=function(){
var _arr=[],_brr=[];
for(var i=0,l=__config.length,_config;i<l;i++){
_config=__config[i];
_brr.push('<a class="zbtn zitm zbrd" href="#'+i+'" hidefocus="true">'+_config.t+(!_config.u?'':'<span class="iblock zbgp znew">&nbsp;</span>')+'</a>');
for(var j=0,k=Math.ceil(_config.l.length/(_config.s?60:15));j<k;
_arr.push('#<uispace> .zcnt .'+_config.n+'-'+j+' .zitm{background-image:url('+__faceurl+_config.n+'/'+_config.n+'-'+j+'.png);}'),j++);
}
__tpxhtml=_brr.join('');
return _arr.join('');
};
p._$pushStyle('#<uispace>{width:400px;_width:403px;border:1px;font-size:12px;text-align:center;}\
               #<uispace>,#<uispace> .zbrd{border-style:solid;border-color:#aaa;}\
               #<uispace> .zclr{overflow:hidden;}\
               #<uispace> .zbgp{background:url('+N.rc.r+'portrait/btn.png?t=20100601) no-repeat;}\
               #<uispace> .zsdb{float:right;width:80px;text-align:left;}\
               #<uispace> .zsdb .znew{width:20px;height:20px;margin-left:2px;vertical-align:middle;background-position:center -45px;}\
               #<uispace> .zsdb .zpgr{text-align:center;}\
               #<uispace> .zsdb .zpgr span{display:block;height:24px;margin:0 10px;border-color:#eee;cursor:pointer;}\
               #<uispace> .zsdb .zpup span{border-width:0 0 1px;background-position:center 2px;}\
               #<uispace> .zsdb .zpdn span{border-width:1px 0 0;background-position:center -18px;}\
               #<uispace> .zsdb .zwin{position:relative;height:'+(__inumber*__iheight+2)+'px;overflow:hidden;}\
               #<uispace> .zsdb .zlst{position:absolute;top:0;left:0;width:100%;}\
               #<uispace> .zsdb .zlst .zitm{height:'+__iheight+'px;line-height:'+__iheight+'px;padding-left:5px;border-width:0;}\
               #<uispace> .zsdb .zlst .zitm.js-selected-386{border-width:1px 0;margin-left:0;}\
               #<uispace> .zsdb .zbtn{display:block;margin-left:1px;color:#777;}\
               #<uispace> .zsdb .zbtn:hover,#<uispace> .zsdb .zlst .zitm.js-selected-386{background-color:#e5e5e1;color:#000;text-decoration:none;}\
               #<uispace> .zsdb .js-disabled-345{cursor:default;}\
               #<uispace> .zsdb .js-disabled-345 span{opacity:0.6;filter:alpha(opacity=60);cursor:default;}\
               #<uispace> .zsdb .js-disabled-345:hover{background-color:transparent;}\
               #<uispace> .zcnt{margin-right:79px;padding:5px 5px 0;border-width:0 1px 0 0;background:#e5e5e1;}\
               #<uispace> .zcnt .zbox{position:relative;width:310px;height:190px;margin:0 auto;}'+__getStyle()+'\
               #<uispace> .zcnt .zpgr{height:33px;line-height:32px;overflow:hidden;text-align:right;}\
               #<uispace> .zcnt .zpgr .zpg{color:#000;cursor:pointer;}\
               #<uispace> .zcnt .zpgr .zsp{color:#777;margin:0 3px;}\
               #<uispace> .zcnt .zpgr .js-disabled-345{color:#777;cursor:default;}',__uispace);
p._$$ComplexPortrait=C();
__proComplexPortrait=p._$$ComplexPortrait._$extend(p._$$Portrait,true);
__proComplexPortrait._$initialize=function(_parent,_options){
this._$super(_parent,_options);
this.__pidx=0;
this.__onTypePage(0);
};
__proComplexPortrait.__getSpace=function(){
return __uispace;
};
__proComplexPortrait.__getXhtml=function(){
return'<div class="zsdb">\
              <a class="zbtn zpgr zpup ztag" href="#" hidefocus="true" title="上一页"><span class="zbrd zbgp">&nbsp;</span></a>\
              <div class="zwin"><div class="zlst ztag"></div></div>\
              <a class="zbtn zpgr zpdn ztag" href="#" hidefocus="true" title="下一页"><span class="zbrd zbgp">&nbsp;</span></a>\
            </div>\
            <div class="zcnt zbrd">\
              <div class="zbox zibox ztag"></div>\
              <div class="zpgr">\
                <span class="zpg ztag">上一页</span>\
                <span class="zsp">|</span>\
                <span class="zpg ztag">下一页</span>\
              </div>\
            </div>';
};
__proComplexPortrait.__intXnode=function(){
E._$addClassName(this.__body,'zclr');
var _list=E._$getChildElements(this.__body);
var _ntmp=E._$getElementsByClassName(_list[0],'ztag');
this.__tbox=_ntmp[1];
this.__tbtnb=_ntmp[0];
this.__tbtnp=_ntmp[2];
this.__tbox.innerHTML=__tpxhtml;
this.__tlist=E._$getChildElements(this.__tbox,'zitm');
V._$addEvent(this.__tbox,'click',this.__onTypeChange._$bind(this));
V._$addEvent(this.__tbtnb,'click',this.__onTypePage._$bind(this,-1));
V._$addEvent(this.__tbtnp,'click',this.__onTypePage._$bind(this,1));
_ntmp=E._$getElementsByClassName(_list[1],'ztag');
this.__lbox=_ntmp[0];
this.__lbtnb=_ntmp[1];
this.__lbtnp=_ntmp[2];
V._$addEvent(this.__lbtnb,'click',this.__onFacePage._$bind(this,-1));
V._$addEvent(this.__lbtnp,'click',this.__onFacePage._$bind(this,1));
};
__proComplexPortrait.__getPageClass=function(_index){
return(this.__config||O).n+'-'+_index;
};
__proComplexPortrait.__getPageNumber=function(){
return this.__config.s?60:15;
};
__proComplexPortrait.__disabled=function(_button){
return E._$hasClassName(_button,__cdisabled);
};
__proComplexPortrait.__changeTypeByIndex=function(_index){
if(_index==this.__tidx)return;
this.__litm=p._$$FIcon._$recycle(this.__litm);
E._$delClassName(this.__tlist[this.__tidx],__cselected);
E._$delClassName(this.__lbox,this.__getPageClass(this.__iopt.page));
this.__tidx=_index;
E._$addClassName(this.__tlist[this.__tidx],__cselected);
this.__config=__config[this.__tidx];
if(!this.__config)return;
this.__iopt.pauto=!this.__config.a;
this.__iopt.type=this.__config.s?0:1;
this.__iopt.maxpg=Math.ceil(this.__config.l.length/this.__getPageNumber())-1;
this.__iopt.purl=__faceurl+this.__config.n+'/preview/'+this.__config.n+'#<index>.gif';
this.__changeFaceByIndex(0,true);
};
__proComplexPortrait.__changeFaceByIndex=function(_index,_force){
var _page=this.__iopt.page;
if(!_force&&_index==_page)return;
this.__litm=p._$$FIcon._$recycle(this.__litm);
E._$replaceClassName(this.__lbox,
this.__getPageClass(_page),
this.__getPageClass(_index));
this.__iopt.page=_index;
var _number=this.__getPageNumber();
this.__iopt._start_=_index*_number;
this.__iopt._end_=(_index+1)*_number;
this.__disableButton(this.__lbtnb,__cdisabled,_index==0);
this.__disableButton(this.__lbtnp,__cdisabled,_index==this.__iopt.maxpg);
this.__litm=p._$$FIcon._$allocate(this.__config.l,this.__lbox,this.__iopt);
};
__proComplexPortrait.__onTypePage=function(_flag,_event){
V._$stop(_event);
if(this.__disabled(_flag<0?
this.__tbtnb:this.__tbtnp))return;
this.__pidx+=_flag*__inumber;
this.__tbox.style.top=0-this.__pidx*__iheight+'px';
this.__disableButton(this.__tbtnb,__cdisabled,this.__pidx==0);
this.__disableButton(this.__tbtnp,__cdisabled,this.__pidx+__inumber>=__config.length);
this.__changeTypeByIndex(this.__pidx);
};
__proComplexPortrait.__onTypeChange=function(_event){
V._$stop(_event);
var _element=V._$getElement(_event),
_href=_element.href;
if(!_href)return;
this.__changeTypeByIndex(parseInt(
_href.substr(_href.indexOf('#')+1))||0);
};
__proComplexPortrait.__onFacePage=function(_flag){
if(this.__disabled(_flag<0?
this.__lbtnb:this.__lbtnp))return;
this.__changeFaceByIndex((this.__iopt.page||0)+_flag);
};
})();
(function(){
var p=P(N.ui),
__proEDTWinLink,
__supEDTWinLink,
__uispace='ui-'+U._$randNumberString(),
__rgokurl=/^[a-z]+:\/\/[^\s]+$/i;
p._$pushStyle('#<uispace>{width:420px;}\
      #<uispace> .zln{line-height:24px;margin:10px 0;}\
               #<uispace> .ztxt{width:320px;}',__uispace);
p._$$EDTWinLink=C();
__proEDTWinLink=p._$$EDTWinLink._$extend(p._$$EDTWindow,true);
__supEDTWinLink=p._$$EDTWinLink._$supro;
__proEDTWinLink._$resetOption=function(_options){
_options=_options||O;
__supEDTWinLink._$resetOption.apply(this,arguments);
this._$addEvent('ondelete',_options.ondelete||F);
this.__form[this.__key+'-0'].value=_options.name||'';
this.__form[this.__key+'-1'].value=_options.href||'http://';
this.__layer._$setTitle(!_options.href?'插入链接':'编辑链接');
this.__form[this.__key+'-0'].parentNode.style.display=!_options.noname?'':'none';
this.__form[this.__key+'-c'].style.display=!!_options.nodelete||!_options.href?'none':'';
};
__proEDTWinLink.__getSpace=function(){
return __supEDTWinLink.__getSpace.call(this,__uispace);
};
__proEDTWinLink.__getFXhtml=function(){
return'<div class="zln"><label for="'+this.__key+'-0">标题　</label><input class="ztxt" type="text" id="'+this.__key+'-0" name="'+this.__key+'-0"/></div>\
            <div class="zln"><label for="'+this.__key+'-1">链接　</label><input class="ztxt" type="text" id="'+this.__key+'-1" name="'+this.__key+'-1" value="http://"/></div>';
};
__proEDTWinLink.__getBXhtml=function(){
return'<input class="zbtn zbtncc" type="button" value="撤消链接" name="'+this.__key+'-c"/>';
};
__proEDTWinLink.__intXnode=function(){
__supEDTWinLink.__intXnode.apply(this,arguments);
V._$addEvent(this.__form[this.__key+'-c'],'click',this.__onDelete._$bind(this));
};
__proEDTWinLink.__onOK=function(){
var _ntmp=this.__form[this.__key+'-1'];
_ntmp.value=U._$trim(_ntmp.value);
if(!__rgokurl.test(_ntmp.value)){
alert('请输入合法的链接地址！');
_ntmp.focus();
return;
}
this._$hide();
this._$dispatchEvent('onok',{href:_ntmp.value,name:
this.__form[this.__key+'-0'].value});
};
__proEDTWinLink.__onShow=function(){
this.__form[this.__key+'-1'].focus();
};
__proEDTWinLink.__onDelete=function(){
this._$hide();
this._$dispatchEvent('ondelete');
};
})();
(function(){
var p=P(N.ui),
__proEDTWinMedia,
__supEDTWinMedia,
__proEDTWinFlash,
__proEDTWinFlash,
__uispace='ui-'+U._$randNumberString(),
__mda_tgl='js-advset-090',
__mda_box=[500,300],
__mda_url=/src=\"(.*?)\"/i,
__mda_map={left:0,center:1,right:2},
__mda_cmd=['justifyleft','justifycenter','justifyright'],
__mda_cls=[{r:/\.(?:swf|flv)(?=\?|$)/i,
t:'pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" quality="high" allowscriptaccess="never"'},
{r:/\.(?:rm|rmvb|rt|ra|rp|rv|mov|qt|aac|m4a|m4p|ssm|sdp|3gp|amr|awb|3g2|divx)(?=\?|$)/i,
t:'type="audio/x-pn-realaudio-plugin" controls="ImageWindow,ControlPanel,StatusBar"'},
{r:/\.(?:mp3|avi|asf|wmv|wma|mpg|mpeg|wax|asx|wm|wmx|wvx|wav|mpv|mps|m2v|m1v|mpe|mpa|mp4|m4e|mp2|mp1|au|aif|aiff|mid|midi|rmi)(?=\?|$)/i,
t:'type="application/x-mplayer2" showcontrols="1" showaudiocontrols="1" showstatusbar="1" enablecontextmenu="1"'}],
__mda_3rd=[{r:/tudou\.com.*\/[a-z]\/[^\/]+?$/i},
{r:/56\.com.*\/([^\/]+?)\.html/i,s:'http://player.56.com/$1.swf'},
{r:/ku6\.com.*\/([^\/]+?)\.html/i,s:'http://player.ku6.com/refer/$1/v.swf'},
{r:/youku\.com.*id_(.*?)\.html$/i,s:'http://player.youku.com/player.php/sid/$1/v.swf'},
{r:/v\.163\.com.*\/([^\/]+?)\.html/i,s:'http://img1.cache.netease.com/flvplayer081128/~false~0085_$1~.swf'}];
p._$pushStyle('#<uispace> .zln{margin:10px 0;}\
               #<uispace> .zwd0{width:300px;*width:295px;}\
               #<uispace> .zwd1{width:40px;}\
               #<uispace> .zwd2{width:132px;}\
               #<uispace> .zact{margin-top:15px;}\
               #<uispace> .zsbn{padding:5px 0;color:#006cff;cursor:pointer;}\
               #<uispace> .zist{background-position:-32px -249px;}\
               #<uispace> .zset{table-layout:fixed;}\
               #<uispace> .zset p{margin:0;}\
               #<uispace> .zset p *{vertical-align:middle;}\
               #<uispace> .zset p input{margin:0 3px 0 0;}\
               #<uispace> .zset td{line-height:22px;padding:5px 0;}\
               #<uispace> .zset .zc0{width:60px;}\
               #<uispace> .js-advset-090 .zist{background-position:-16px -248px;}\
               #<uispace> .js-advset-090 .zset{display:none;}',__uispace);
p._$$EDTWinMedia=C();
__proEDTWinMedia=p._$$EDTWinMedia._$extend(p._$$EDTWindow,true);
__supEDTWinMedia=p._$$EDTWinMedia._$supro;
__proEDTWinMedia._$resetOption=function(_options){
_options=_options||O;
this.__nmda=_options.mda||null;
this._$addEvent('oncommand',_options.oncommand||F);
__supEDTWinMedia._$resetOption.call(this,_options);
var _isset=!!this.__nmda;
this.__tgAdvSetting(!_isset);
this.__nadv.style.display=!_isset?'':'none';
this.__layer._$setTitle(_isset?'设置':('插入'+this.__getTname()));
this.__nlab.innerText=_isset?'地　　址　':(this.__getTname()+'地址　');
this.__intXForm();
};
__proEDTWinMedia.__getTname=function(){
return'视频';
};
__proEDTWinMedia.__getSpace=function(){
return __supEDTWinMedia.__getSpace.call(this,__uispace);
};
__proEDTWinMedia.__getFXhtml=function(){
return'<div class="zln zln1"><label for="'+this.__key+'-0" class="ztag">'+this.__getTname()+'地址　</label><input class="ztxt zwd0" type="text" value="http://" name="'+this.__key+'-0" id="'+this.__key+'-0"/></div>\
            <div class="zadv js-advset-090">\
              <div class="zsbn ztag">高级选项<span class="zist zxin iblock">&nbsp;</span></div>\
              <table class="zset">\
                <tr><td class="zc0" valign="top">尺　　寸　</td>\
                    <td><p><input type="radio" name="'+this.__key+'-1" id="'+this.__key+'-10" checked="checked"/><label for="'+this.__key+'-10">默认大小</label></p>\
                        <p><input type="radio" name="'+this.__key+'-1" id="'+this.__key+'-11"/><label for="'+this.__key+'-11">自定义：</label>\
                           <label for="'+this.__key+'-2">宽度</label><input class="ztxt zwd1" type="text" maxlength="3" name="'+this.__key+'-2" id="'+this.__key+'-2"/>像素\
                           <label for="'+this.__key+'-3">高度</label><input class="ztxt zwd1" type="text" maxlength="4" name="'+this.__key+'-3" id="'+this.__key+'-3"/>像素</p></td></tr>\
                <tr><td class="zc0" valign="top">排　　版　</td>\
                    <td><select class="zwd2" name="'+this.__key+'-4"><option>居左</option><option>居中</option><option>居右</option></select></td></tr>\
                <tr style="display:none;"><td class="zc0">选　　项　</td>\
                    <td><p><input type="checkbox" value="0" name="'+this.__key+'-5" id="'+this.__key+'-5"/><label for="'+this.__key+'-5">自动播放</label>\
                           <input type="checkbox" value="1" name="'+this.__key+'-6" id="'+this.__key+'-6" class="zmgn"/><label for="'+this.__key+'-6">循环播放</label></p></td></tr>\
              </table>\
            </div>';
};
__proEDTWinMedia.__intXnode=function(){
__supEDTWinMedia.__intXnode.apply(this,arguments);
var _ntmp=E._$getElementsByClassName(this.__form,'ztag');
this.__nlab=_ntmp[0];
this.__nadv=_ntmp[1];
V._$addEvent(this.__nadv,'click',this.__onAdvSetting._$bind(this));
V._$addEvent(this.__form[this.__key+'-4'],'change',this.__onLayoutChange._$bind(this));
};
__proEDTWinMedia.__intXForm=function(){
if(!this.__nmda)return;
var _src=this.__nmda.src;
if(this.__nmda.tagName=='IMG'&&
__mda_url.test(decodeURIComponent(this.__nmda.name)))
_src=RegExp.$1;
this.__form[this.__key+'-0'].value=_src||'http://';
this.__dftidx=__mda_map[this.__nmda.parentNode.align]||0;
this.__form[this.__key+'-4'].selectedIndex=this.__dftidx;
};
__proEDTWinMedia.__checkUrl=function(_url){
return this.__parseFlashURL(_url);
};
__proEDTWinMedia.__getPlugin=function(_url){
if(!_url)return'';
if(this.__flash)return __mda_cls[0].t;
for(var i=0,l=__mda_cls.length;i<l;i++){
if(__mda_cls[i].r.test(_url))
return __mda_cls[i].t;
}
return'';
};
__proEDTWinMedia.__parseFlashURL=function(_url){
this.__flash=false;
if(__mda_cls[0].r.test(_url))return _url;
for(var i=0,l=__mda_3rd.length,_conf;i<l;i++){
_conf=__mda_3rd[i];
if(!!_conf.r.test(_url)){
this.__flash=true;
return!_conf.s?_url:_conf.s.replace('$1',RegExp.$1);
}
}
return _url;
};
__proEDTWinMedia.__tgAdvSetting=function(_toggled){
!_toggled?E._$delClassName(this.__nadv.parentNode,__mda_tgl)
:E._$addClassName(this.__nadv.parentNode,__mda_tgl);
};
__proEDTWinMedia.__isAdvSetting=function(){
return E._$hasClassName(this.__nadv.parentNode,__mda_tgl);
};
__proEDTWinMedia.__onAdvSetting=function(){
this.__tgAdvSetting(!this.__isAdvSetting());
};
__proEDTWinMedia.__onLayoutChange=function(){
if(!this.__nmda)return;
this._$dispatchEvent('oncommand',__mda_cmd[this.__form
[this.__key+'-4'].selectedIndex]||__mda_cmd[0]);
};
__proEDTWinMedia.__onOK=function(){
var _name=this.__getTname(),
_ntmp=this.__form[this.__key+'-0'],
_url=this.__checkUrl(U._$trim(_ntmp.value)),
_plugin=this.__getPlugin(_url);
if(!_url||_url.search('\'|"')>=0||!_plugin){
alert('请输入正确的'+_name+'地址！');
_ntmp.focus();
return;
};
var _width=__mda_box[0],
_height=__mda_box[1];
if(this.__form[this.__key+'-1'][1].checked){
var _ntmp0=this.__form[this.__key+'-2'],
_ntmp1=this.__form[this.__key+'-3'];
_width=parseInt(_ntmp0.value);
_height=parseInt(_ntmp1.value);
if(_width<=0||_height<=0){
alert('请输入自定义的'+_name+'尺寸！');
(_width<=0?_ntmp0:_ntmp1).focus();
return;
}
}
this._$hide();
var _code='',
_arr=['src="'+_url+'" style="margin:5px;" '+_plugin];
_arr.push('width="'+_width+'"');
_arr.push('height="'+_height+'"');
_code='<embed '+_arr.join(' ')+'></embed>';
if(B._$ISFF)
_code='<img src="'+N.rc.r+'empty.png" width="'+_width+'" height="'+_height+'"\
                      id="__MEDIA_REPLACEMENT_'+U._$randNumberString(6)+'" name="'+encodeURIComponent(_code)+'"\
                      style="margin:5px;border:1px solid #ccc;background:#eee url('+N.rc.r+'media.png) no-repeat center center;"/>';
this._$dispatchEvent('oncommand','batch',['delete',__mda_cmd[this.__form
[this.__key+'-4'].selectedIndex]||__mda_cmd[0],['inserthtml',_code]]);
};
__proEDTWinMedia.__onCC=function(){
__supEDTWinMedia.__onCC.apply(this,arguments);
if(!this.__nmda)return;
this._$dispatchEvent('oncommand',__mda_cmd[this.__dftidx]||__mda_cmd[0]);
};
__proEDTWinMedia.__onShow=function(){
__supEDTWinMedia.__onShow.apply(this,arguments);
if(!this.__nmda)return;
var _isdft=this.__nmda.width==__mda_box[0]&&
this.__nmda.height==__mda_box[1];
this.__form[this.__key+'-1'][_isdft?0:1].checked=true;
if(_isdft)return;
this.__form[this.__key+'-2'].value=this.__nmda.offsetWidth||__mda_box[0];
this.__form[this.__key+'-3'].value=this.__nmda.offsetHeight||__mda_box[1];
};
p._$$EDTWinFlash=C();
__proEDTWinFlash=p._$$EDTWinFlash._$extend(p._$$EDTWinMedia,true);
__proEDTWinFlash.__getTname=function(){
return'Flash';
};
__proEDTWinFlash.__checkUrl=function(_url){
return __mda_cls[0].r.test(_url)?_url:null;
};
})();
(function(){
var p=P(N.ui),
__proEDTWinMediaCHG,
__supEDTWinMediaCHG,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace>{position:absolute;z-index:2;padding:5px;background:#fff;color:#333;border:1px solid #c5c5c5;}\
               #<uispace> input{width:50px;cursor:pointer;}',__uispace);
p._$$EDTWinMediaCHG=C();
__proEDTWinMediaCHG=p._$$EDTWinMediaCHG._$extend(p._$$EDTCardCNF,true);
__supEDTWinMediaCHG=p._$$EDTWinMediaCHG._$supro;
__proEDTWinMediaCHG._$reset=function(_parent,_options){
_options=_options||O;
this.__mopt.mda=_options.mda;
this.__mopt.oncommand=_options.oncommand;
__supEDTWinMediaCHG._$reset.apply(this,arguments);
};
__proEDTWinMediaCHG.__build=function(){
this.__mopt={};
this.__body=document.cloneElement('div',__uispace);
this.__body.innerHTML='<input type="button" value="设置"/>';
V._$addEvent(E._$getChildElements(this.__body)[0],'click',this.__onSetting._$bind(this));
};
__proEDTWinMediaCHG.__onSetting=function(){
this._$hide();
p._$$EDTWinMedia._$show(this.__mopt);
};
})();
(function(){
var p=P(N.ui),
__proEDTWinTable,
__supEDTWinTable,
__uispace='ui-'+U._$randNumberString(),
__pconfig={4:'border',5:'cellPadding',6:'cellSpacing'},
__cconfig={0:{r:[1,63],m:'行数必须为1-63之间的数字！'},
1:{r:[1,63],m:'列数必须为1-63之间的数字！'},
4:{r:[0,5],m:'边框粗细必须为0-5之间的数字！'},
5:{r:[0,10],m:'单元格边距必须为0-10之间的数字！'},
6:{r:[0,10],m:'单元格间距必须为0-10之间的数字！'}};
p._$pushStyle('#<uispace> .zln{line-height:24px;margin:15px 0;}\
               #<uispace> .zwd0{width:70px;}\
               #<uispace> .zwd2{width:60px;}\
               #<uispace> .zact{margin-top:10px;}\
               #<uispace> .zset{position:relative;zoom:1;}\
               #<uispace> .zset .zprv{float:right;width:140px;padding:10px 0;text-align:center;}\
               #<uispace> .zset table{width:50px;height:50px;margin:0 auto;}',__uispace);
p._$$EDTWinTable=C();
__proEDTWinTable=p._$$EDTWinTable._$extend(p._$$EDTWindow,true);
__supEDTWinTable=p._$$EDTWinTable._$supro;
__proEDTWinTable._$initialize=function(_parent,_options){
_options=_options||{};
_options.title='插入表格';
this._$super(_parent,_options);
};
__proEDTWinTable._$resetOption=function(_options){
__supEDTWinTable._$resetOption.apply(this,arguments);
this.__onPreview();
};
__proEDTWinTable.__getSpace=function(){
return __supEDTWinTable.__getSpace.call(this,__uispace);
};
__proEDTWinTable.__getFXhtml=function(){
return'<div class="zln zln1">\
              <label for="'+this.__key+'-0">行　　数　　</label><input class="zwd0" type="text" maxlength="2" value="2" name="'+this.__key+'-0" id="'+this.__key+'-0"/>\
              <label for="'+this.__key+'-1">列数　</label><input class="zwd0" type="text" maxlength="2" value="2" name="'+this.__key+'-1" id="'+this.__key+'-1"/>\
            </div>\
            <div class="zln zln2">\
              <label for="'+this.__key+'-2">表格宽度　　</label><input class="zwd0" type="text" maxlength="3" name="'+this.__key+'-2" id="'+this.__key+'-2" value="80"/>\
              <select class="zwd2" name="'+this.__key+'-3"><option value="%" selected="selected">%</option><option value="px">像素</option></select>\
            </div>\
            <div class="zset clearfix">\
              <fieldset class="zprv"><legend align="center">预览</legend><table class="ztag"><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table></fieldset>\
              <div class="zln zln3"><label for="'+this.__key+'-4">边框粗细　　</label><input class="zwd0" type="text" maxlength="1" value="1" name="'+this.__key+'-4" id="'+this.__key+'-4"/>像素</div>\
              <div class="zln zln3"><label for="'+this.__key+'-5">单元格边距　</label><input class="zwd0" type="text" maxlength="2" value="1" name="'+this.__key+'-5" id="'+this.__key+'-5"/>像素</div>\
              <div class="zln zln3"><label for="'+this.__key+'-6">单元格间距　</label><input class="zwd0" type="text" maxlength="2" value="1" name="'+this.__key+'-6" id="'+this.__key+'-6"/>像素</div>\
            </div>';
};
__proEDTWinTable.__intXnode=function(){
__supEDTWinTable.__intXnode.apply(this,arguments);
this.__ptable=E._$getElementsByClassName(this.__form,'ztag')[0];
var _function=this.__onPreview._$bind(this);
for(var x in __pconfig)
V._$addEvent(this.__form[this.__key+'-'+x],'input',_function);
};
__proEDTWinTable.__onOK=function(){
var _ntmp,_conf,_otmp={};
for(var x in __cconfig){
_conf=__cconfig[x];
_ntmp=this.__form[this.__key+'-'+x];
_otmp[x]=parseInt(_ntmp.value);
if(isNaN(_otmp[x])||_otmp[x]<_conf.r[0]
||_otmp[x]>_conf.r[1]){
alert(_conf.m);
_ntmp.select();
return;
}
}
_ntmp=this.__form[this.__key+'-2'];
var _wid=parseInt(_ntmp.value)||0;
if(_wid<=0){
alert('请输入正确的表格宽度！');
_ntmp.select();
return;
}
var _unit=this.__form[this.__key+'-3'].value;
if(_unit=='%')_wid=Math.min(_wid,100);
var _col=new Array(_otmp[1]+1).join('<td>&nbsp;</td>');
this._$hide();
this._$dispatchEvent('onok','<table width="'+(_wid+_unit)+'" border="'+_otmp[4]+
'" cellpadding="'+_otmp[5]+'" cellspacing="'+_otmp[6]+'">'+
new Array(_otmp[0]+1).join('<tr>'+_col+'</tr>')+
'</table>&nbsp;&nbsp;&nbsp;');
};
__proEDTWinTable.__onPreview=function(){
var _ntmp,_range;
for(var x in __pconfig){
_range=__cconfig[x].r;
_ntmp=parseInt(this.__form[this.__key+'-'+x].value);
if(!isNaN(_ntmp))this.__ptable[__pconfig[x]]=Math.max(_range[0],Math.min(_range[1],_ntmp));
}
};
})();
(function(){
var p=P(N.ui),
__proEDTWinModule,
__supEDTWinModule;
p._$$EDTWinModule=C();
__proEDTWinModule=p._$$EDTWinModule._$extend(P(N.fw)._$$Module);
__supEDTWinModule=p._$$EDTWinModule._$supro;
__proEDTWinModule._$show=function(){
__supEDTWinModule._$show.apply(this,arguments);
this.__form.reset();
if(!this.__builded){
this.__builded=true;
this.__buildModule();
}else{
this.__refreshModule();
}
};
__proEDTWinModule.__setOption=function(_options){
_options=_options||O;
this._$addEvent('onok',_options.onok||F);
this._$addEvent('oncc',_options.oncc||F);
this._$addEvent('ondisable',_options.ondisable||F);
this._$addEvent('onrefresh',_options.onrefresh||F);
__supEDTWinModule.__setOption.apply(this,arguments);
};
__proEDTWinModule.__buildModule=F;
__proEDTWinModule.__refreshModule=F;
__proEDTWinModule.__onOK=F;
})();
(function(){
var p=P(N.ui),
__proEDTWinMusic,
__supEDTWinMusic,
__proEDTWinMusicCCH,
__proEDTWinMusicMBG,
__supEDTWinMusicMBG,
__proEDTWinMusicMWB,
__supEDTWinMusicMWB,
__uispace='ui-'+U._$randNumberString(),
__cch_cnf=O,
__cch_api='http://api.blog.163.com/s/urlSearch.s?t=mp3',
__mbg_sel='js-select-164',
__mwb_flg='js-listen-090',
__mwb_url=/\.mp3(?=\?|$)/i;
p._$pushStyle('#<uispace>{width:500px;}\
               #<uispace> .zfom{width:470px;}\
               #<uispace> .zwid0{width:340px;}\
               #<uispace> .zred{color:#e10000;}\
               #<uispace> .zset *{vertical-align:middle;}\
               #<uispace> .ztab{height:31px;margin:5px 0;padding-left:10px;border-color:#ccc;border-style:solid;border-width:0 0 1px;font-size:14px;}\
               #<uispace> .ztab .zitm{float:left;height:30px;line-height:30px;padding:0 8px;margin-right:2px;border:1px solid #ccc;background:#fff url('+N.rc.r+'editor/edt_btn.gif) repeat-x;cursor:pointer;}\
               #<uispace> .ztab .zitm.js-select-045{font-weight:bold;border-bottom-color:#fff;background-image:none;}\
               #<uispace> .zweb{line-height:24px;margin:30px 0 0 25px;}\
               #<uispace> .zweb .zlab{width:70px;text-align:right;}\
               #<uispace> .zweb .zln0{margin:5px 0;}\
               #<uispace> .zweb .zln1{margin:5px 0 5px 70px;color:#acacac;}\
               #<uispace> .zweb .zln5{display:none;line-height:30px;margin-left:63px;}\
               #<uispace> .zweb .zfsh{float:left;height:31px;width:220px;overflow:hidden;}\
               #<uispace> .zweb .zchg{color:#4d94e6;text-decoration:underline;cursor:pointer;}\
               #<uispace> .zwebx .zset{margin-left:94px;}\
               #<uispace> .js-listen-090 .zln0{display:none;}\
               #<uispace> .js-listen-090 .zln5{display:block;}\
               #<uispace> .zblg{margin:10px 0;border:1px solid #ddd;}\
               #<uispace> .zblg .zhnt{padding:10px 0;text-align:center;}\
               #<uispace> .zblg .zlbx{float:left;width:100px;height:168px;overflow:auto;overflow-x:hidden;border-right:1px solid #ddd;background:#f2f2f2;text-align:left;}\
               #<uispace> .zblg .zlbx .zitm{height:28px;line-height:28px;padding-left:5px;cursor:pointer;}\
               #<uispace> .zblg .zlbx .zitm.js-select-657{background:#666;color:#fff;font-weight:bold;}\
               #<uispace> .zblg .zrbx{margin-left:100px;border-left:1px solid #ddd;text-align:left;}\
               #<uispace> .zblg .zrbx .zmbx{height:140px;overflow:auto;}\
               #<uispace> .zblg .zrbx .zmbx .zicn{display:block;width:16px;height:16px;margin-top:2px;text-indent:100px;overflow:hidden;background:url('+N.rc.r+'editor/editor.png) no-repeat;}\
               #<uispace> .zblg .zrbx .zmbx .ztry{background-position:0 -264px;}\
               #<uispace> .zblg .zrbx .zmbx .zitm{border-bottom:1px solid #efefef;cursor:pointer;}\
               #<uispace> .zblg .zrbx .zmbx .zitm .zslt{visibility:hidden;margin:2px auto;background-position:-16px -264px;}\
               #<uispace> .zblg .zrbx .zmbx .zitm.js-select-164 .zslt{visibility:visible;}\
               #<uispace> .zblg .zrbx .zlst{line-height:20px;overflow:hidden;}\
               #<uispace> .zblg .zrbx .zlst .zcol{float:left;height:20px;margin-left:5px;overflow:hidden;_display:inline;}\
               #<uispace> .zblg .zrbx .zhrd{line-height:27px;border-bottom:1px solid #ddd;background:#f2f2f2;}\
               #<uispace> .zblg .zrbx .zcl0{width:180px;}\
               #<uispace> .zblg .zrbx .zcl1{width:75px;}\
               #<uispace> .zblg .zrbx .zcl2{width:40px;}\
               #<uispace> .zblg .zrbx .zcl3{width:30px;text-align:center;}',__uispace);
var __isItemNode=function(_element){
return E._$hasClassName(_element,'ytag');
};
var __isDIYMusic=function(_music){
return!!_music&&_music.musicType==2;
};
var __getMusicXhtml=function(_url,_loop,_auto,_title,_artist){
var _code='<embed flashvars="loop='+(!_loop?0:1)+'&autoPlay='+!!_auto+'&url='+(_url||'')+'&title='+(_title||'')+'&artist='+(_artist||'')+'" src="'+N.rc.r+'spirit.swf?version=1.0.13&t=20100719" \
                        type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" quality="high" allowscriptaccess="always" allownetworking="all" width="210" height="31"></embed>';
return B._$ISFF?('<img src="'+N.rc.r+'empty.png" style="border:1px solid #ccc;background:#eee url('+N.rc.r+'spirit.png) no-repeat center center;" width="210" height="31" id="__MUSIC_REPLACEMENT_'+U._$randNumberString(6)+'" name="'+encodeURIComponent(_code)+'"/>'):_code;
};
p._$$EDTWinMusicCCH=C();
__proEDTWinMusicCCH=p._$$EDTWinMusicCCH._$extend(P(N.ut)._$$Cache);
__proEDTWinMusicCCH._$getAlbumListInCache=function(){
return this.__getListHashDataInCache('album').l;
};
__proEDTWinMusicCCH._$getAlbumList=function(){
var _list=this._$getAlbumListInCache();
!!_list?this._$dispatchEvent('onalbumlistload')
:J._$postDataByDWR(__cch_cnf.dwr,'MusicBeanNew','getPlayList',
__cch_cnf.userid,false,this.__getAlbumList._$bind(this));
};
__proEDTWinMusicCCH.__getAlbumList=function(_list){
this.__setListInCache(_list,'album','id',function(_item)
{return _item.musicCount>0?_item:null;});
this._$dispatchEvent('onalbumlistload');
};
__proEDTWinMusicCCH._$getMusicListInCache=function(_aid){
return this.__getDataInCache(_aid);
};
__proEDTWinMusicCCH._$getMusicList=function(_aid){
var _list=this._$getMusicListInCache(_aid);
if(!!_list){this._$dispatchEvent('onmusiclistload',_aid);return;}
J._$postDataByDWR(__cch_cnf.dwr,'MusicBeanNew','getMusicListByAlbumId',
__cch_cnf.userid,_aid,0,this.__getListHashDataInCache('album')
.h[_aid].musicCount,false,this.__getMusicList._$bind(this,_aid));
};
__proEDTWinMusicCCH.__getMusicList=function(_aid,_list){
_list=_list||[];
for(var i=0,l=_list.length,_item;i<l;i++){
_item=_list[i];
if(!!_item.url&&__isDIYMusic(_item)){
this._$setMusicUrlInCache(_item.name,_item.author,_item.url);
continue;
}
}
this.__setDataInCache(_aid,_list);
this._$dispatchEvent('onmusiclistload',_aid);
};
__proEDTWinMusicCCH.__getMusicExtData=function(){
var _data=this.__getDataInCache('urls')||{};
this.__setDataInCache('urls',_data);
return _data;
};
__proEDTWinMusicCCH._$setMusicUrlInCache=function(_name,_author,_url){
this.__getMusicExtData()[_name+'-'+_author]=_url||'';
};
__proEDTWinMusicCCH._$getMusicUrlInCache=function(_name,_author){
return this.__getMusicExtData()[_name+'-'+_author];
};
__proEDTWinMusicCCH._$getMusicUrl=function(_name,_author){
var _url=this._$getMusicUrlInCache(_name,_author);
_url!=null?this._$dispatchEvent('onmusicurlload',_name,_author)
:J._$loadScript(__cch_api+'&a='+_author+'&n='+_name,
this.__getMusicUrl._$bind(this,_name,_author));
};
__proEDTWinMusicCCH.__getMusicUrl=function(_name,_author){
var _list=U._$getGValue('__o')||[];
this._$setMusicUrlInCache(_name,_author,_list[0]);
this._$dispatchEvent('onmusicurlload',_name,_author);
};
p._$$EDTWinMusic=C();
__proEDTWinMusic=p._$$EDTWinMusic._$extend(p._$$EDTWindow,true);
__supEDTWinMusic=p._$$EDTWinMusic._$supro;
__proEDTWinMusic._$initialize=function(_parent,_options){
_options=_options||{};
_options.title='插入音乐';
this._$super(_parent,_options);
};
__proEDTWinMusic._$resetOption=function(_options){
__supEDTWinMusic._$resetOption.apply(this,arguments);
_options=_options||O;
__cch_cnf=_options.xconf||O;
this.__taber._$refresh(null,0);
};
__proEDTWinMusic.__getSpace=function(){
return __supEDTWinMusic.__getSpace.call(this,__uispace);
};
__proEDTWinMusic.__getXhtml=function(){
return'<div class="ztab ztag clearfix">\
              <div class="zitm">博客音乐</div>\
              <div class="zitm">插入音乐地址</div>\
            </div>\
            <div class="ztag"></div>';
};
__proEDTWinMusic.__intXnode=function(){
var _ntmp=E._$getChildElements(this.__body,'ztag');
this.__mopt={box:_ntmp[1]};
this.__dopt={oncc:this._$hide._$bind(this),
onok:this.__onOK._$bind(this),
ondisable:this.__layer._$disable._$bind(this.__layer)};
this.__taber=new(P(N.ut)._$$Taber)
(E._$getChildElements(_ntmp[0]),{selected:'js-select-045'});
this.__taber._$addEvent('onchange',this.__onModuleChange._$bind(this));
};
__proEDTWinMusic.__onModuleChange=function(_index){
if(!this.__manager)
this.__manager=new(P(N.fw)._$$ModuleManager)(
'm',{0:{c:p._$$EDTWinMusicMBG,o:this.__dopt},
1:{c:p._$$EDTWinMusicMWB,o:this.__dopt}},
this.__mopt);
this.__manager._$dispatchModule('m='+_index);
};
__proEDTWinMusic.__onOK=function(_xhtml){
this._$hide();
this._$dispatchEvent('onok',_xhtml);
};
p._$$EDTWinMusicMBG=C();
__proEDTWinMusicMBG=p._$$EDTWinMusicMBG._$extend(p._$$EDTWinModule);
__supEDTWinMusicMBG=p._$$EDTWinMusicMBG._$supro;
__proEDTWinMusicMBG.__getXnode=function(){
this.__key='id-'+U._$randNumberString(8);
this.__form=document.cloneElement('form','zfom');
this.__form.innerHTML='<div class="zblg clearfix">\
                               <div class="zlbx ztag"><div class="zhnt">专辑列表加载中...</div></div>\
                               <div class="zrbx">\
                                 <div class="zlst zhrd"><div class="zcol zcl3">&nbsp;</div><div class="zcol zcl0">歌曲</div><div class="zcol zcl1">歌手</div><div class="zcol zcl2">试听</div></div>\
                                 <div class="zmbx ztag"><div class="zhnt">音乐列表加载中...</div></div>\
                               </div>\
                             </div>\
                             <div class="zset">\
                               <input type="checkbox" name="'+this.__key+'-90" id="'+this.__key+'-90"/><label for="'+this.__key+'-90">自动播放</label>\
                               <input type="checkbox" name="'+this.__key+'-91" id="'+this.__key+'-91"/><label for="'+this.__key+'-91">循环播放</label>\
                               <span class="zred ztag" style="display:none;"></span>\
                             </div>\
                             <div class="zact">\
                               <input class="zbtn zbtnok" type="button" value="确定" name="'+this.__key+'-a"/>\
                               <input class="zbtn zbtncc" type="button" value="取消" name="'+this.__key+'-b"/>\
                             </div>';
var _node=E._$getElementsByClassName(this.__form,'ztag');
this.__abox=_node[0];
this.__mbox=_node[1];
this.__lhnt=_node[2];
V._$addEvent(this.__mbox,'click',this.__onMusicItemClick._$bind(this));
V._$addEvent(this.__form[this.__key+'-a'],'click',this.__onOK._$bind(this));
V._$addEvent(this.__form[this.__key+'-b'],'click',this._$dispatchEvent._$bind(this,'oncc'));
return this.__form;
};
__proEDTWinMusicMBG.__buildModule=function(){
this.__selection={};
this.__cache=new p._$$EDTWinMusicCCH();
this.__cache._$addEvent('onmusicurlload',this.__cbMusicUrlLoad._$bind(this));
this.__cache._$addEvent('onalbumlistload',this.__cbAlbumListLoad._$bind(this));
this.__cache._$addEvent('onmusiclistload',this.__cbMusicListLoad._$bind(this));
this.__cache._$getAlbumList();
};
__proEDTWinMusicMBG.__refreshModule=function(){
delete this.__selection.aid;
delete this.__selection.mid;
if(!!this.__taber)this.__taber._$refresh(null,0);
};
__proEDTWinMusicMBG.__getAXhtml=function(_list){
var _arr=[];
for(var i=0,l=_list.length,_name;i<l;i++){
_name=U._$escape(_list[i].name)||'&nbsp;';
_arr.push('<div class="zitm zbdc thide" title="'+_name+'">'+_name+'</div>');
}
return _arr.join('');
};
__proEDTWinMusicMBG.__getMXhtml=function(_list){
var _arr=[],_cur=this.__aid==this.__selection.aid;
for(var i=0,l=_list.length,_name,_author,_select;i<l;i++){
_name=U._$escape(_list[i].name);
_author=U._$escape(_list[i].author);
_select=_cur&&i==this.__selection.mid;
if(_select)this.__midx=i;
_arr.push('<div class="zlst zitm ytag '+(_select?__mbg_sel:'')+'" title="'+_name+'-'+_author+'">\
                     <div class="zcol zcl3"><span class="zicn zslt">&nbsp;</span></div>\
                     <div class="zcol zcl0">'+(_name||'&nbsp;')+'</div>\
                     <div class="zcol zcl1">'+(_author||'&nbsp;')+'</div>\
                     <div class="zcol zcl2"><span class="zicn ztry xtag" title="试听">'+i+'</span></div>\
                   </div>');
}
return _arr.join('');
};
__proEDTWinMusicMBG.__showMessage=function(_message){
this.__lhnt.innerText=_message||'';
this.__lhnt.style.display=!_message?'none':'';
};
__proEDTWinMusicMBG.__cbAlbumListLoad=function(){
var _list=this.__cache._$getAlbumListInCache();
if(!_list||!_list.length){
this.__abox.innerHTML='<div class="zhnt">没有可用专辑！</div>';
this.__mbox.innerHTML='<div class="zhnt">没有音乐列表！</div>';
return;
}
this.__abox.innerHTML=this.__getAXhtml(_list);
this.__taber=new(P(N.ut)._$$Taber)(E._$getChildElements(this.__abox,'zitm'),
{selected:'js-select-657',onchange:this.__onAlbumChange._$bind(this)});
};
__proEDTWinMusicMBG.__onAlbumChange=function(_index){
this.__mbox.innerHTML='<div class="zhnt">音乐列表加载中...</div>';
var _album=this.__cache._$getAlbumListInCache()[_index];
this.__aid=_album.id;
this.__cache._$getMusicList(this.__aid);
};
__proEDTWinMusicMBG.__cbMusicListLoad=function(_aid){
if(_aid!=this.__aid)return;
var _list=this.__cache._$getMusicListInCache(_aid);
if(!_list||!_list.length){
this.__mbox.innerHTML='<div class="zhnt">没有音乐列表！</div>';
return;
}
this.__mbox.innerHTML=this.__getMXhtml(_list);
};
__proEDTWinMusicMBG.__onMusicItemClick=function(_event){
var _element=V._$getElement(_event);
if(E._$hasClassName(_element,'xtag')){
this.__onMusicListen(parseInt(_element.innerText)||0);
return;
}
_element=V._$getElement(_event,__isItemNode);
if(!_element)return;
this.__onMusicSelect(parseInt(E._$getElementsByClassName
(_element,'xtag')[0].innerText)||0);
};
__proEDTWinMusicMBG.__onMusicListen=function(_index){
window.open(__cch_cnf.baseurl+'m/?t=3&newPage=1&aid='+this.__aid+
'&mid='+this.__cache._$getMusicListInCache(this.__aid)[_index].id,
'_blank','resizable=no,scrollbars=no,status=yes,width=772px,height=595px');
};
__proEDTWinMusicMBG.__onMusicSelect=function(_index){
var _ntmp=E._$getChildElements(this.__mbox);
E._$delClassName(_ntmp[this.__midx],__mbg_sel);
this.__midx=_index;
E._$addClassName(_ntmp[this.__midx],__mbg_sel);
this.__selection.aid=this.__aid;
this.__selection.mid=this.__midx;
};
__proEDTWinMusicMBG.__cbMusicUrlLoad=function(_name,_author){
this._$dispatchEvent('ondisable',false);
var _url=this.__cache._$getMusicUrlInCache(_name,_author)||
this.__cache._$getMusicListInCache(this.__selection.aid)
[this.__selection.mid].url;
if(!_url){
this.__showMessage('无法获取该音乐的有效地址！');
return;
}
if(!__mwb_url.test(_url)){
this.__showMessage('只支持插入mp3格式的音乐！');
return;
}
this._$dispatchEvent('onok',__getMusicXhtml(_url,
this.__form[this.__key+'-91'].checked,
this.__form[this.__key+'-90'].checked,_name,_author));
};
__proEDTWinMusicMBG.__onOK=function(){
if(this.__selection.aid==null||
this.__selection.mid==null){
this.__showMessage('请选择要插入的音乐！');
return;
}
this.__showMessage();
this._$dispatchEvent('ondisable',true);
var _music=this.__cache._$getMusicListInCache(this.__selection.aid)
[this.__selection.mid];
this.__cache._$getMusicUrl(_music.name,_music.author);
};
p._$$EDTWinMusicMWB=C();
__proEDTWinMusicMWB=p._$$EDTWinMusicMWB._$extend(p._$$EDTWinModule);
__supEDTWinMusicMWB=p._$$EDTWinMusicMWB._$supro;
__proEDTWinMusicMWB._$hide=function(){
__supEDTWinMusicMWB._$hide.apply(this,arguments);
this.__refreshModule();
};
__proEDTWinMusicMWB.__getXnode=function(){
this.__key='id-'+U._$randNumberString(8);
this.__form=document.cloneElement('form','zfom zwebx');
this.__form.innerHTML='<div class="zweb">\
                               <div class="zln0">\
                                 <label class="iblock zlab" for="'+this.__key+'-2"><span class="zred">*</span>音乐链接：</label>\
                                 <input class="ztxt zwid0" type="text" value="http://" name="'+this.__key+'-2" id="'+this.__key+'-2"/>\
                               </div>\
                               <div class="zln0">\
                                 <label class="iblock zlab" for="'+this.__key+'-0">歌 曲 名：</label>\
                                 <input class="ztxt zwid0" type="text" name="'+this.__key+'-0" id="'+this.__key+'-0"/>\
                               </div>\
                               <div class="zln0">\
                                 <label class="iblock zlab" for="'+this.__key+'-1">歌 手 名：</label>\
                                 <input class="ztxt zwid0" type="text" name="'+this.__key+'-1" id="'+this.__key+'-1"/>\
                               </div>\
                               <div class="zln5 clearfix"><div class="zfsh ztag"></div><span class="zchg ztag">更换音乐</span></div>\
                               <p class="zln1 ztag">支持mp3格式</p>\
                             </div>\
                             <div class="zset">\
                               <input type="checkbox" name="'+this.__key+'-90" id="'+this.__key+'-90"/><label for="'+this.__key+'-90">自动播放</label>\
                               <input type="checkbox" name="'+this.__key+'-91" id="'+this.__key+'-91"/><label for="'+this.__key+'-91">循环播放</label>\
                             </div>\
                             <div class="zact">\
                               <input class="zbtn zbtnok" type="button" value="确定" name="'+this.__key+'-a"/>\
                               <input class="zbtn zbtncc" type="button" value="试听" name="'+this.__key+'-c"/>\
                               <input class="zbtn zbtncc" type="button" value="取消" name="'+this.__key+'-b"/>\
                             </div>';
var _list=E._$getElementsByClassName(this.__form,'ztag');
this.__nfsh=_list[0];
this.__nhnt=_list[2];
V._$addEvent(_list[1],'click',this.__onMusicChange._$bind(this));
V._$addEvent(this.__form[this.__key+'-a'],'click',this.__onOK._$bind(this));
V._$addEvent(this.__form[this.__key+'-c'],'click',this.__onMusicListen._$bind(this));
V._$addEvent(this.__form[this.__key+'-b'],'click',this._$dispatchEvent._$bind(this,'oncc'));
return this.__form;
};
__proEDTWinMusicMWB.__refreshModule=function(){
this.__onMusicChange();
this.__illegalMusic(false);
};
__proEDTWinMusicMWB.__illegalMusic=function(_illegal){
this.__nhnt.innerHTML=!_illegal?'支持mp3格式'
:'<span class="zred">请输入有效的音乐链接地址！</span>';
};
__proEDTWinMusicMWB.__checkMusicUrl=function(){
var _ntmp=this.__form[this.__key+'-2'],
_value=U._$trim(_ntmp.value);
if(!__mwb_url.test(_value)){
this.__illegalMusic(true);
_ntmp.select();
return false;
}
this.__illegalMusic(false);
return true;
};
__proEDTWinMusicMWB.__onMusicListen=function(){
if(!this.__checkMusicUrl())return;
E._$addClassName(this.__form,__mwb_flg);
this.__form[this.__key+'-c'].disabled=true;
this.__nfsh.innerHTML=__getMusicXhtml(
U._$trim(this.__form[this.__key+'-2'].value),false,true,
U._$trim(this.__form[this.__key+'-0'].value),
U._$trim(this.__form[this.__key+'-1'].value));
};
__proEDTWinMusicMWB.__onMusicChange=function(){
this.__form[this.__key+'-c'].disabled=false;
E._$delClassName(this.__form,__mwb_flg);
this.__form[this.__key+'-2'].select();
this.__nfsh.innerHTML='&nbsp;';
};
__proEDTWinMusicMWB.__onOK=function(){
if(!this.__checkMusicUrl())return;
this._$dispatchEvent('onok',__getMusicXhtml
(U._$trim(this.__form[this.__key+'-2'].value),
this.__form[this.__key+'-91'].checked,
this.__form[this.__key+'-90'].checked,
U._$trim(this.__form[this.__key+'-0'].value),
U._$trim(this.__form[this.__key+'-1'].value)));
};
})();
(function(){
var p=P(N.ui),
__proEDTWinPhoto,
__supEDTWinPhoto,
__proEDTWinPhotoCCH,
__proEDTWinPhotoMUP,
__supEDTWinPhotoMUP,
__proEDTWinPhotoMBG,
__proEDTWinPhotoMWB,
__uispace='ui-'+U._$randNumberString(),
__cch_cnf=O,
__mup_any=location.ur + '/anony/web/upload/userdefinesize?sitefrom=blogeditor&',
__mup_web=location.ur + '/#<user>/web/upload?sitefrom=blogeditor&textencoding=unicode&',
__mup_box=[{t:'最大',m:910},{t:'大',m:750},{t:'中',m:500},{t:'小',m:300}],
__mbg_asl='js-select-000',
__mbg_psl='js-select-730',
__mbg_del='js-usedel-004',
__mbg_ept=N.rc.r+'empty.png',
__mwb_max=8,
__mwb_del='js-nodel-090',
__mwb_err='js-error-076';
p._$pushStyle('#<uispace>{width:810px;}\
               #<uispace> .zfom{width:790px;margin:0;text-align:center;}\
               #<uispace> .zfc0{color:#adadad;}\
               #<uispace> .zfc1{color:#4f93e6;}\
               #<uispace> .zfc2{color:#ca0205;}\
               #<uispace> .zcnt{background:#eff2f5;}\
               #<uispace> .zbox{background:#fff;}\
               #<uispace> .zimg{width:16px;height:16px;background:url('+N.rc.r+'editor/editor.png) no-repeat;}\
               #<uispace> .zdel{background-position:-32px -264px;}\
               #<uispace> .zslt{background-position:-16px -264px;}\
               #<uispace> .zbdc{border-color:#caced0;border-style:solid;}\
               #<uispace> .ztab{position:relative;height:31px;padding-left:5px;border-width:0 0 1px;font-size:14px;}\
               #<uispace> .ztab .zmsg{position:absolute;right:0;top:5px;line-height:20px;padding:0 5px;font-size:12px;color:#000;background:#ffffae;}\
               #<uispace> .ztab .zitm{float:left;width:105px;height:30px;line-height:30px;margin-left:2px;_margin-bottom:-1px;border-width:1px;background:#fff url('+N.rc.r+'editor/edt_btn.gif) repeat-x;cursor:pointer;}\
               #<uispace> .ztab .zitm.js-select-964{_position:relative;border-bottom-color:#fff;font-weight:bold;background-image:none;}\
               #<uispace> .zbox{padding-bottom:10px;border-width:0 1px 1px;background:#fff;}\
               #<uispace> .zsrt{margin:5px auto;}\
               #<uispace> .zsrt .ztip{margin:8px 10px;text-align:left;}\
               #<uispace> .zsrt .znmb{font-weight:bold;color:#00a2ff;}\
               #<uispace> .zsrt .ztpr{float:right;}\
               #<uispace> .zsrt .zsbx{position:relative;padding-left:3px;zoom:1;}\
               #<uispace> .zsbx .zitm{float:left;width:98px;}\
               #<uispace> .zsbx .zcse{position:relative;width:81px;margin:0 auto;padding:3px 0;border-width:1px;background:#fff;cursor:move;zoom:1;}\
               #<uispace> .zsbx .zcse .zdel{visibility:hidden;position:absolute;top:0;right:0;cursor:pointer;}\
               #<uispace> .zsbx .js-select-589 .zcse{background:#0000cd;}\
               #<uispace> .zsbx .js-usedel-004 .zdel{visibility:visible;}\
               #<uispace> .zsbx p{width:75px;height:75px;background:#eff2f5;margin:0 auto;}\
               #<uispace> .zsbx img{display:block;max-width:75px;max-height:75px;margin:0 auto;}\
               #<uispace> .ztbx{text-align:left;}\
               #<uispace> .ztb0{padding:10px 0 0 10px;}\
               #<uispace> .ztb0 p{margin:5px 0;}\
               #<uispace> .ztb0 p *{vertical-align:middle;_vertical-align:baseline;}\
               #<uispace> .ztb0 p label{margin-left:5px;}\
               #<uispace> .ztb0 select{width:100px;margin-right:5px;}\
               #<uispace> .ztb0 .zfsh{height:160px;padding:5px 0;overflow:hidden;}\
               #<uispace> .ztb0 .zbk1{margin-left:25px;}\
               #<uispace> .ztb0 .znew{margin-left:5px;text-decoration:underline;cursor:pointer;}\
               #<uispace> .ztb1 .zhid{display:none;}\
               #<uispace> .ztb1 .zhnt{padding:10px 0;text-align:center;}\
               #<uispace> .ztb1 .zpbg{border-width:0 0 1px 0;_height:305px;}\
               #<uispace> .ztb1 .zpab{float:left;width:115px;height:305px;overflow:auto;overflow-x:hidden;border-width:0 1px 0 0;background:#f2f2f2;text-align:left;}\
               #<uispace> .ztb1 .zpab .zitm{height:30px;line-height:30px;padding:0 5px;cursor:pointer;}\
               #<uispace> .ztb1 .zpab .zitm.js-select-000{background:#666;color:#fff;font-weight:bold;}\
               #<uispace> .ztb1 .zppt{height:270px;margin-left:124px;padding:5px 0;}\
               #<uispace> .ztb1 .zppt .zitm{position:relative;float:left;width:80px;padding:2px 0;margin:4px 6px;border-width:1px;text-align:center;cursor:pointer;_display:inline;}\
               #<uispace> .ztb1 .zppt .zitm img{display:block;width:75px;height:75px;margin:0 auto;}\
               #<uispace> .ztb1 .zppt .zitm .zslt{visibility:hidden;position:absolute;top:3px;right:3px;}\
               #<uispace> .ztb1 .zppt .zitm.js-select-730 .zslt{visibility:visible;}\
               #<uispace> .ztb1 .zpgr{margin-left:124px;}\
               #<uispace> .ztb1 .zpgr .zpgr-987{text-align:center;}\
               #<uispace> .ztb2{padding:0 20px;text-align:left;}\
               #<uispace> .ztb2 .zwd0{width:530px;}\
               #<uispace> .ztb2 .zln0{padding:20px 0 10px;margin:0;}\
               #<uispace> .ztb2 .zln1{margin:10px 0;}\
               #<uispace> .ztb2 .zln1 .zdel{margin:0 10px 0 5px;cursor:pointer;}\
               #<uispace> .ztb2 .zln1 .zerr{visibility:hidden;}\
               #<uispace> .ztb2 .js-error-076 .zerr{visibility:visible;}\
               #<uispace> .ztb2 .js-nodel-090 .zdel{visibility:hidden;}\
               #<uispace> .ztb2 .zln2 span{text-decoration:underline;cursor:pointer;}\
               ',__uispace);
var __isItem=function(_element){
return E._$hasClassName(_element,'zitm');
};
var __getPhotoUrl=function(_photo){
_photo=_photo||O;
return _photo.userDef1Url||_photo.ourl||_photo.murl||'';
};
var __getPhotoXhtml=function(_list){
var _arr=[];
_list=_list||[];
for(var i=0,l=_list.length;i<l;i++){
_arr.push('<div><img style="margin:0 10px 0 0;" src="'+(U._$isType(_list[i],'string')?_list[i]:__getPhotoUrl(_list[i]))+'"/></div>&nbsp;');
}
return _arr.join('');
};
p._$$EDTWinPhotoCCH=C();
__proEDTWinPhotoCCH=p._$$EDTWinPhotoCCH._$extend(P(N.fw)._$$AlbumECache);
__proEDTWinPhotoCCH._$initialize=function(){
this._$super({host:{userName:__cch_cnf.username}});
};
__proEDTWinPhotoCCH.__filterAlbum=function(_album){
return _album;
};
__proEDTWinPhotoCCH.__formateCopyPhoto=function(_photos){
var _arr=[];
if(!!_photos&&_photos.length>0)
for(var i=0,l=_photos.length,_photo;i<l;i++){
_photo=_photos[i];
_arr.push({imgStorageType:_photo.s,murl:__getPhotoUrl(_photo)});
}
return _arr;
};
__proEDTWinPhotoCCH._$copyPhoto=function(_photos){
var _arr=this.__formateCopyPhoto(_photos);
if(!_arr.length){
this._$dispatchEvent('onphotocopy',true);
return;
}
J._$postDataByDWR(this.__api,'PhotoBean','copy',
_arr,this.__copyPhoto._$bind(this,_arr));
};
__proEDTWinPhotoCCH.__copyPhoto=function(_photos,_isok){
if(!!_isok)(__cch_cnf.onphotoinsert||F)(_photos);
this._$dispatchEvent('onphotocopy',_isok);
};
__proEDTWinPhotoCCH._$setPhotosInCache=function(_aid,_photos){
if(!!_photos&&_photos.length>0)
for(var i=0,l=_photos.length;i<l;
this.__cachePhotoData(_aid,_photos[i]),i++);
};
p._$$EDTWinPhoto=C();
__proEDTWinPhoto=p._$$EDTWinPhoto._$extend(p._$$EDTWindow,true);
__supEDTWinPhoto=p._$$EDTWinPhoto._$supro;
__proEDTWinPhoto._$initialize=function(_parent,_options){
_options=_options||{};
_options.title='插入图片';
_options.onbeforeclose=this.__onClose._$bind(this);
this._$super(_parent,_options);
};
__proEDTWinPhoto._$resetOption=function(_options){
__supEDTWinPhoto._$resetOption.apply(this,arguments);
_options=_options||O;
__cch_cnf=_options.xconf||O;
__mup_web=__mup_web.replace('#<user>',__cch_cnf.username);
this.__taber._$getList()[1].innerText=!__cch_cnf.photo?'博客相册':'网易相册';
};
__proEDTWinPhoto.__getSpace=function(){
return __supEDTWinPhoto.__getSpace.call(this,__uispace);
};
__proEDTWinPhoto.__getXhtml=function(){
return'<div class="ztab zbdc ztag">\
              <div class="zitm zbdc">上传图片</div><!--\
           --><div class="zitm zbdc">博客相册</div><!--\
           --><div class="zitm zbdc">网络图片</div>\
              <div class="zmsg ztag" style="display:none;"></div>\
            </div>\
            <div class="zbox zbdc ztag"></div>';
};
__proEDTWinPhoto.__intXnode=function(){
var _ntmp=E._$getElementsByClassName(this.__body,'ztag');
this.__nhnt=_ntmp[1];
this.__mopt={box:_ntmp[2]};
this.__dopt={onok:this.__onOK._$bind(this),
oncc:this._$hide._$bind(this),
ondisable:this.__onDisabled._$bind(this),
onrefresh:this.__onModuleRefresh._$bind(this)};
this.__taber=new(P(N.ut)._$$Taber)
(E._$getChildElements(_ntmp[0],'zitm'),{selected:'js-select-964'});
this.__taber._$addEvent('onchange',this.__onModuleChange._$bind(this));
};
__proEDTWinPhoto.__onModuleChange=function(_index){
if(!this.__manager)
this.__manager=new(P(N.fw)._$$ModuleManager)(
'm',{0:{c:p._$$EDTWinPhotoMUP,o:this.__dopt},
1:{c:p._$$EDTWinPhotoMBG,o:this.__dopt},
2:{c:p._$$EDTWinPhotoMWB,o:this.__dopt}},
this.__mopt);
this.__manager._$dispatchModule('m='+_index);
this.__onModuleRefresh();
};
__proEDTWinPhoto.__onModuleRefresh=function(){
this.__layer._$refresh(true);
};
__proEDTWinPhoto.__onDisabled=function(_disabled,_message){
this.__layer._$disable(_disabled);
this.__nhnt.innerText=_message||'';
this.__nhnt.style.display=!!_disabled&&!!_message?'':'none';
};
__proEDTWinPhoto.__onOK=function(_xhtml){
this._$hide();
this._$dispatchEvent('onok',_xhtml);
};
__proEDTWinPhoto.__onShow=function(){
this.__taber._$refresh(null,0);
__supEDTWinPhoto.__onShow.apply(this,arguments);
};
__proEDTWinPhoto.__onClose=function(){
if(!this.__manager)return;
this.__manager._$getCurrentModule()._$destroy();
};
p._$$EDTWinPhotoMUP=C();
__proEDTWinPhotoMUP=p._$$EDTWinPhotoMUP._$extend(p._$$EDTWinModule);
__supEDTWinPhotoMUP=p._$$EDTWinPhotoMUP._$supro;
__proEDTWinPhotoMUP._$hide=function(){
this._$destroy();
__supEDTWinPhotoMUP._$hide.apply(this,arguments);
};
__proEDTWinPhotoMUP._$destroy=function(){
this.__fbox.innerHTML='&nbsp;';
};
__proEDTWinPhotoMUP.__getFXhtml=function(){
var _url=N.rc.u;
if(_url.indexOf('?')<0)_url+='?t='+U._$randNumberString(8);
return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="770" height="160"\
                    id="upphoto" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0">\
              <param name="wmode" value="transparent"/>\
              <param name="movie" value="'+_url+'"/>\
              <param name="flashVars" value="autoRegJS=true"/>\
              <param name="AllowScriptAccess" value="sameDomain"/>\
              <embed src="'+_url+'" width="770" height="160" wmode="transparent"\
                     name="upphoto" AllowScriptAccess="sameDomain" flashVars="autoRegJS=true"\
                     type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer">\
              </embed>\
            </object>';
};
__proEDTWinPhotoMUP.__getXnode=function(){
this.__key='id-'+U._$randNumberString(8);
var _node=document.cloneElement('div','ztbx ztb0');
_node.innerHTML='<div class="zfsh ztag"></div>\
                       <form class="ztag" onsubmit="return false;">\
                         <div class="zbk0">\
                           <p>选择插入图片的尺寸：<select name="'+this.__key+'-6"></select><span class="ztag zfc0"></span></p>\
                           <p><input type="checkbox" name="'+this.__key+'-1" id="'+this.__key+'-1"/><label for="'+this.__key+'-1">同时保存到博客相册</label></p>\
                           <div class="zbk1 ztag" style="display:none;">\
                             <p><select class="zwd0" name="'+this.__key+'-2"></select>或<span class="znew zfc1 ztag">创建新相册</span></p>\
                             <p><input type="checkbox" name="'+this.__key+'-3" id="'+this.__key+'-3"/><label for="'+this.__key+'-3">将本地文件名保存为相片描述</label></p>\
                             <p><input type="checkbox" name="'+this.__key+'-5" id="'+this.__key+'-5"/><label for="'+this.__key+'-5">保留相片原始尺寸（适合相片冲印，上传速度慢）</label></p>\
                             <p><input type="checkbox" name="'+this.__key+'-4" id="'+this.__key+'-4"/><label for="'+this.__key+'-4">添加水印</label></p>\
                           </div>\
                         </div>\
                         <div class="zact">\
                           <input class="zbtn zbtnok" type="button" value="插入图片" name="'+this.__key+'-a"/>\
                           <input class="zbtn zbtncc" type="button" value="取消" name="'+this.__key+'-b"/>\
                         </div>\
                       </form>';
var _ntmp=E._$getElementsByClassName(_node,'ztag');
this.__fbox=_ntmp[0];
this.__form=_ntmp[1];
this.__nhnt=_ntmp[2];
this.__abox=_ntmp[3];
var _nsel=this.__form[this.__key+'-6'];
for(var i=0,l=__mup_box.length;i<l;
_nsel.options[i]=new Option(__mup_box[i].t),i++);
V._$addEvent(_ntmp[4],'click',this.__onAlbumCreate._$bind(this));
V._$addEvent(_nsel,'change',this.__onPhotoSizeChange._$bind(this));
V._$addEvent(this.__form[this.__key+'-a'],'click',this.__onOK._$bind(this));
V._$addEvent(this.__form[this.__key+'-1'],'click',this.__onSaveToggle._$bind(this));
V._$addEvent(this.__form[this.__key+'-b'],'click',this._$dispatchEvent._$bind(this,'oncc'));
return _node;
};
__proEDTWinPhotoMUP.__buildModule=function(){
this.__resetPhotoSize();
this.__fbox.innerHTML=this.__getFXhtml();
P(N.gb).eup=this.__onPhotoUpload._$bind(this);
this.__cache=new p._$$EDTWinPhotoCCH();
this.__cache._$addEvent('onphotocopy',this.__cbPhotoCopy._$bind(this));
this.__cache._$addEvent('onalbumadd',this.__refreshAlbumList._$bind(this));
this.__cache._$addEvent('onalbumlistload',this.__refreshAlbumList._$bind(this));
this.__uopt={};
this.__wopt={nocover:true,
onok:this.__cache._$addAlbum._$bind(this.__cache),
onclose:this._$dispatchEvent._$bind(this,'ondisable',false)};
};
__proEDTWinPhotoMUP.__refreshModule=function(){
this.__resetPhotoSize();
this.__toggleSaveOpt(false);
this.__fbox.innerHTML=this.__getFXhtml();
};
__proEDTWinPhotoMUP.__refreshAlbumList=function(_aid){
var _cidx=0,
_select=this.__form[this.__key+'-2'],
_list=this.__cache._$getAlbumListInCache();
for(var i=_select.options.length-1;i>=0;_select.remove(i),i--);
for(var i=0,l=_list.length,_item;i<l;i++){
_item=_list[i];
if(_aid==_item.id)_cidx=i;
_select.options[_select.options.length]=new Option(_item.name,_item.id);
}
_select.selectedIndex=_cidx;
};
__proEDTWinPhotoMUP.__resetPhotoSize=function(){
this.__form[this.__key+'-6'].selectedIndex=1;
this.__onPhotoSizeChange();
};
__proEDTWinPhotoMUP.__toggleSaveOpt=function(_checked){
this.__abox.style.display=_checked?'':'none';
this._$dispatchEvent('onrefresh');
if(!_checked)return;
this.__form[this.__key+'-3'].checked=false;
this.__form[this.__key+'-4'].checked=false;
this.__form[this.__key+'-5'].checked=false;
};
__proEDTWinPhotoMUP.__formatPhotos=function(_photos){
if(!!_photos&&_photos.length>0)
for(var i=0,l=_photos.length,_photo;i<l;i++){
_photo=_photos[i];
_photo.qurl=_photo.squareurl;
_photo.s=_photo.imgStorageType||1;
}
return _photos;
};
__proEDTWinPhotoMUP.__onAlbumCreate=function(){
p._$$EDTWinPhotoNew._$show(this.__wopt);
this._$dispatchEvent('ondisable',true);
};
__proEDTWinPhotoMUP.__onSaveToggle=function(){
var _checked=this.__form[this.__key+'-1'].checked;
this.__toggleSaveOpt(_checked);
if(_checked&&!this.__notget){
this.__notget=true;
this.__cache._$getAlbumList();
}
};
__proEDTWinPhotoMUP.__onPhotoSizeChange=function(){
var _config=__mup_box[this.__form
[this.__key+'-6'].selectedIndex||0];
if(!!_config)this.__nhnt.innerText='图片最大宽度不超过'+_config.m+'像素';
};
__proEDTWinPhotoMUP.__cbPhotoCopy=function(_isok){
this._$dispatchEvent('ondisable',false);
!_isok?alert('暂时无法将图片插入日志，请稍后再试！')
:this._$dispatchEvent('onok',__getPhotoXhtml(this.__uopt.list));
};
__proEDTWinPhotoMUP.__onPhotoUpload=function(_photos){
this.__uopt.list=this.__formatPhotos(_photos);
if(!!this.__uopt.aid)
this.__cache._$setPhotosInCache(this.__uopt.aid,this.__uopt.list);
this._$dispatchEvent('ondisable',true,'相片拷贝中...');
this.__cache._$copyPhoto(this.__uopt.list);
};
__proEDTWinPhotoMUP.__onOK=function(){
var _flash=E._$getFlashObject('upphoto');
if(!_flash||!_flash.upload){
alert('请先选择要上传的图片！');
return;
}
var _svb=this.__form[this.__key+'-1'].checked,
_aid=this.__form[this.__key+'-2'].value;
if(_svb&&!_aid){
alert('请先选择要保存的相册！');
return;
}
this.__uopt.aid=_svb?_aid:'';
this.__uopt.box=this.__form[this.__key+'-6'].selectedIndex||0;
var _cnf=__mup_box[this.__uopt.box],
_arr=['userdefinesize='+_cnf.m+'x'+_cnf.m*3+'x0'];
if(!!_svb){
_arr.push('aid='+_aid);
_arr.push('savedesc='+this.__form[this.__key+'-3'].checked);
_arr.push('addstamp='+this.__form[this.__key+'-4'].checked);
_arr.push('saveorigin='+this.__form[this.__key+'-5'].checked);
_arr.push('NTES_SESS='+__cch_cnf.sid);
}
_flash.upload((!_svb?__mup_any:__mup_web)+_arr.join('&'),N.gb+'.eup',this.__uopt);
};
p._$$EDTWinPhotoMBG=C();
__proEDTWinPhotoMBG=p._$$EDTWinPhotoMBG._$extend(p._$$EDTWinModule);
__proEDTWinPhotoMBG.__getSXhtml=function(){
var _arr=[];
for(var i=0;i<8;_arr.push('<div class="zitm" id="'+this.__key+'-a'+i+'"><div class="zcse zbdc"><p><img src="'
+__mbg_ept+'"/><span class="zimg zdel" title="删除">&nbsp;</span></p></div></div>'),i++);
return _arr.join('');
};
__proEDTWinPhotoMBG.__getAXhtml=function(_list){
if(!_list||!_list.length)return'';
var _arr=[];
for(var i=0,l=_list.length,_item,_name;i<l;i++){
_item=_list[i];
if(_item.count<=0)continue;
_name=U._$escape(_item.name);
_arr.push('<div class="zitm thide" title="'+_name+
'" id="'+this.__aprefix+_item.id+'">'+_name+'</div>');
}
return _arr.join('');
};
__proEDTWinPhotoMBG.__getPXhtml=function(_list,_page){
var _arr=[];
_page=Math.max(_page||1,1);
for(var i=(_page-1)*this.__pnumber,_item,
l=Math.min(_page*this.__pnumber,_list.length);i<l;i++){
_item=_list[i];
_arr.push('<div class="zitm zbdc '+(!this.__pselect[_item.id]?'':__mbg_psl)+'" id="'+
this.__pprefix+_item.id+'"><img src="'+_item.qurl+'"/><span class="zimg zslt">&nbsp;</span></div>');
}
return _arr.join('');
};
__proEDTWinPhotoMBG.__getXnode=function(){
this.__key='id-'+U._$randNumberString(8);
this.__form=document.cloneElement('form','zfom');
this.__form.innerHTML='<div class="ztbx ztb1">\
                               <div class="zpbg zbdc clearfix">\
                                 <div class="zpab zbdc ztag"><div class="zhnt">相册加载中...</div></div>\
                                 <div class="zppt ztag"><div class="zhnt">相片加载中...</div></div>\
                                 <div class="zpgr ztag js-zvlg-123"></div>\
                               </div>\
                               <div class="zsrt">\
                                 <div class="ztip clearfix"><span class="ztpr zfc0">一次最多添加8张，可添加多次</span>待插入图片（<span class="znmb ztag">0</span>）</div>\
                                 <div class="zsbx ztag clearfix">'+this.__getSXhtml()+'</div>\
                               </div>\
                             </div>\
                             <div class="zact">\
                               <input class="zbtn zbtnok" type="button" value="插入图片" name="'+this.__key+'-a"/>\
                               <input class="zbtn zbtncc" type="button" value="取消" name="'+this.__key+'-b"/>\
                             </div>';
var _list=E._$getElementsByClassName(this.__form,'ztag');
this.__abox=_list[0];
this.__ibox=_list[1];
this.__pbox=_list[2];
this.__nbox=_list[3];
this.__sbox=_list[4];
V._$addEvent(this.__ibox,'click',this.__onPhotoSelect._$bind(this));
V._$addEvent(this.__abox,'click',this.__changeAlbumByEvent._$bind(this));
V._$addEvent(this.__form[this.__key+'-a'],'click',this.__onOK._$bind(this));
V._$addEvent(this.__form[this.__key+'-b'],'click',this._$dispatchEvent._$bind(this,'oncc'));
var _function=this.__onPhotoDelete._$bind(this);
_list=this.__sbox.getElementsByTagName('span');
for(var i=0,l=_list.length;i<l;V._$addEvent(_list[i],'mousedown',_function),i++);
return this.__form;
};
__proEDTWinPhotoMBG.__buildModule=function(){
this.__pnumber=21;
this.__pselect={};
this.__aprefix='eab-';
this.__pprefix='ept-';
this.__aopt={nocover:true,
onclose:this._$dispatchEvent._$bind(this,'ondisable',false)};
this.__popt={index:1,'class':'zpgr-987',onchange:this.__onPhotoChange._$bind(this)};
this.__cache=new p._$$EDTWinPhotoCCH();
this.__cache._$addEvent('onphotocopy',this.__cbPhotoCopy._$bind(this));
this.__cache._$addEvent('onalbumlistload',this.__cbAlbumListLoad._$bind(this));
this.__cache._$addEvent('onphotolistload',this.__cbPhotoListLoad._$bind(this));
this.__sorter=P(N.ui)._$$PSorter._$allocate(this.__sbox,
{tag:'zitm',handler:'zcse',selected:'js-select-589'});
this.__cache._$getAlbumList();
};
__proEDTWinPhotoMBG.__refreshModule=function(){
this.__sorter._$refresh();
delete this.__pselect.list;
for(var x in this.__pselect)
this.__delSortPhoto(this.__pselect[x]);
this.__cache._$getAlbumList();
};
__proEDTWinPhotoMBG.__cbAlbumListLoad=function(){
var _xhtml=this.__getAXhtml(this.__cache._$getAlbumListInCache());
if(!_xhtml){
this.__abox.innerHTML='<div class="zhnt">没有相册列表！</div>';
this.__ibox.innerHTML='<div class="zhnt">没有相片列表！</div>';
return;
}
this.__abox.innerHTML=_xhtml;
this.__changeAlbumByIndex(0,true);
};
__proEDTWinPhotoMBG.__changeAlbumByIndex=function(_index,_force){
this.__changeAlbumByElement(E._$getChildElements(this.__abox)[0],_force);
};
__proEDTWinPhotoMBG.__changeAlbumByEvent=function(_event){
this.__changeAlbumByElement(V._$getElement(_event));
};
__proEDTWinPhotoMBG.__changeAlbumByElement=function(_element,_force){
if(!E._$hasClassName(_element,'zitm'))return;
this.__changeAlbumById(_element.id.substr(this.__aprefix.length),_force);
};
__proEDTWinPhotoMBG.__changeAlbumById=function(_aid,_force){
if(!_force&&_aid==this.__aid)return;
E._$delClassName(this.__aprefix+this.__aid,__mbg_asl);
this.__aid=_aid;
E._$addClassName(this.__aprefix+this.__aid,__mbg_asl);
this.__ibox.innerHTML='<div class="zhnt">相片列表加载中...</div>';
this.__cache._$getPhotoList(this.__aid);
};
__proEDTWinPhotoMBG.__cbPhotoListLoad=function(_aid){
if(_aid!=this.__aid)return;
this.__popt.total=Math.ceil(this.__cache
._$getPhotoListInCache(_aid).length/this.__pnumber);
!!this.__pager?this.__pager._$resetOption(this.__popt)
:this.__pager=p._$$DPager._$allocate(this.__pbox,this.__popt);
};
__proEDTWinPhotoMBG.__onPhotoChange=function(_index){
this.__ibox.innerHTML=this.__getPXhtml(this
.__cache._$getPhotoListInCache(this.__aid),_index);
};
__proEDTWinPhotoMBG.__onPhotoSelect=function(_event){
var _element=V._$getElement(_event,__isItem);
if(!_element)return;
var _photo=this.__cache._$getPhotoByIdInCache(
this.__aid,_element.id.substr(this.__pprefix.length));
if(this.__addSortPhoto(_photo))E._$addClassName(_element,__mbg_psl);
};
__proEDTWinPhotoMBG.__onPhotoDelete=function(_event){
V._$stop(_event);
_element=V._$getElement(_event);
var _img=_element.parentNode.getElementsByTagName('img')[0];
this.__delSortPhoto(this.__cache._$getPhotoByIdInCache(_img.aid,_img.kid));
};
__proEDTWinPhotoMBG.__findImage=function(_key,_value){
var _ntmp=this.__sbox.getElementsByTagName('img');
for(var i=0,l=_ntmp.length,_url;i<l;i++)
if(_ntmp[i][_key]==_value)return _ntmp[i];
return null;
};
__proEDTWinPhotoMBG.__showMessage=function(_message){
if(!p._$$EDTWinAlert){
alert(_message);
}else{
this.__aopt.message=_message;
p._$$EDTWinAlert._$show(this.__aopt);
this._$dispatchEvent('ondisable',true);
}
};
__proEDTWinPhotoMBG.__genCopyPhotoList=function(){
this.__pselect.list=[];
var _ntmp=this.__sbox.getElementsByTagName('img');
for(var i=0,l=_ntmp.length;i<l;i++){
_photo=this.__pselect[_ntmp[i].kid];
if(!_photo)continue;
this.__pselect.list.push(_photo);
}
};
__proEDTWinPhotoMBG.__addSortPhoto=function(_photo){
if(!_photo)return false;
delete _photo.userDef1Url;
if(!!this.__pselect[_photo.id]){
this.__delSortPhoto(_photo);
return false;
}
var _img=this.__findImage('src',__mbg_ept);
if(!_img){
this.__showMessage('一次最多添加8张图片！');
return false;
}
_img.aid=this.__aid;
_img.kid=_photo.id;
_img.src=_photo.qurl;
this.__pselect[_photo.id]=_photo;
E._$addClassName(_img.parentNode,__mbg_del);
this.__nbox.innerText=(parseInt(this.__nbox.innerText)||0)+1;
return true;
};
__proEDTWinPhotoMBG.__delSortPhoto=function(_photo){
if(!_photo)return;
var _img=this.__findImage('kid',_photo.id);
if(!_img)return;
_img.src=__mbg_ept;
_img.kid='';
_img.aid='';
delete this.__pselect[_photo.id];
E._$delClassName(_img.parentNode,__mbg_del);
E._$delClassName(this.__pprefix+_photo.id,__mbg_psl);
this.__nbox.innerText=(parseInt(this.__nbox.innerText)||0)-1;
};
__proEDTWinPhotoMBG.__cbPhotoCopy=function(_isok){
this._$dispatchEvent('ondisable',false);
!_isok?this.__showMessage('暂时无法将图片插入日志，请稍后再试！')
:this._$dispatchEvent('onok',__getPhotoXhtml(this.__pselect.list));
};
__proEDTWinPhotoMBG.__onOK=function(){
this.__genCopyPhotoList();
if(this.__pselect.list.length<=0){
this.__showMessage('请选择要插入的图片！');
return;
}
this._$dispatchEvent('ondisable',true,'图片拷贝中...');
this.__cache._$copyPhoto(this.__pselect.list);
};
p._$$EDTWinPhotoMWB=C();
__proEDTWinPhotoMWB=p._$$EDTWinPhotoMWB._$extend(p._$$EDTWinModule);
__proEDTWinPhotoMWB.__getFXhtml=function(){
return'<p class="zln zln1">\
              <input class="ztxt zwd0" type="text" value="http://"/>\
              <span class="iblock zimg zdel xtag">&nbsp;</span>\
              <span class="zerr zfc2">请输入有效图片地址</span>\
            </p>';
};
__proEDTWinPhotoMWB.__getXnode=function(){
this.__key='id-'+U._$randNumberString(8);
this.__form=document.cloneElement('form','zfom');
this.__form.innerHTML='<div class="ztbx ztb2">\
                               <p class="zln0 zfc0">输入要添加到日志的图片的网址，然后点击“插入图片”。</p>\
                               <div class="zcse ztag"></div>\
                               <p class="zln2"><span class="zfc1 ztag">添加更多</span></p>\
                             </div>\
                             <div class="zact">\
                               <input class="zbtn zbtnok" type="button" value="插入图片" name="'+this.__key+'-a"/>\
                               <input class="zbtn zbtncc" type="button" value="取消" name="'+this.__key+'-b"/>\
                             </div>';
var _list=E._$getElementsByClassName(this.__form,'ztag');
this.__fbox=_list[0];
this.__abtn=_list[1].parentNode;
V._$addEvent(_list[0],'click',this.__onPhotoDelete._$bind(this));
V._$addEvent(_list[1],'click',this.__onPhotoAppend._$bind(this));
V._$addEvent(this.__form[this.__key+'-a'],'click',this.__onOK._$bind(this));
V._$addEvent(this.__form[this.__key+'-b'],'click',this._$dispatchEvent._$bind(this,'oncc'));
return this.__form;
};
__proEDTWinPhotoMWB.__buildModule=function(){
this.__pnumber=0;
this.__ptesttb={};
this.__onPhotoAppend();
this.__testimg=new Array(__mwb_max);
for(var i=0,l=this.__testimg.length,_img;i<l;i++){
_img=new Image();
this.__testimg[i]=_img;
V._$addEvent(_img,'load',this.__onImageCheck._$bind(this,true,i));
V._$addEvent(_img,'error',this.__onImageCheck._$bind(this,false,i));
}
};
__proEDTWinPhotoMWB.__refreshModule=function(){
var _ntmp=E._$getElementsByClassName(this.__fbox,'xtag');
if(_ntmp.length<=1)return;
for(var i=_ntmp.length-1;i>0;
this.__deletePhotoByElement(_ntmp[i]),i--);
};
__proEDTWinPhotoMWB.__onPhotoAppend=function(){
this.__pnumber++;
this.__fbox.insertAdjacentHTML('beforeEnd',this.__getFXhtml());
if(this.__pnumber>=__mwb_max)this.__abtn.style.visibility='hidden';
var _ntmp=this.__fbox.getElementsByTagName('p')[0];
this.__pnumber<=1?E._$addClassName(_ntmp,__mwb_del)
:E._$delClassName(_ntmp,__mwb_del);
};
__proEDTWinPhotoMWB.__onPhotoDelete=function(_event){
this.__deletePhotoByElement(V._$getElement(_event));
};
__proEDTWinPhotoMWB.__deletePhotoByElement=function(_element){
if(!E._$hasClassName(_element,'xtag'))return;
this.__pnumber--;
E._$removeElement(_element.parentNode);
if(this.__pnumber<=1)
E._$addClassName(this.__fbox
.getElementsByTagName('p')[0],__mwb_del);
this.__abtn.style.visibility='visible';
};
__proEDTWinPhotoMWB.__onImageCheck=function(_isok,_index){
this.__ptesttb.cunt++;
if(!_isok)this.__ptesttb.fail=true;
var _ntmp=this.__fbox.getElementsByTagName('p');
!_isok?E._$addClassName(_ntmp[_index],__mwb_err)
:E._$delClassName(_ntmp[_index],__mwb_err);
if(this.__ptesttb.cunt<_ntmp.length)return;
this._$dispatchEvent('ondisable',false);
if(this.__ptesttb.fail)return;
this._$dispatchEvent('onok',__getPhotoXhtml(this.__ptesttb.list));
};
__proEDTWinPhotoMWB.__onOK=function(){
this._$dispatchEvent('ondisable',true,'图片地址验证中...');
var _ntmp=this.__fbox.getElementsByTagName('input');
this.__ptesttb.cunt=0;
this.__ptesttb.list=[];
this.__ptesttb.fail=false;
for(var i=0,l=_ntmp.length,_url;i<l;i++){
_url=U._$trim(_ntmp[i].value);
this.__ptesttb.list.push(_url);
if(_url=='http://'){
this.__onImageCheck(false,i);
continue;
}
this.__testimg[i].src=_url;
}
};
})();
(function(){
var p=P(N.ui),
__proEDTWinPhotoNew,
__supEDTWinPhotoNew,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace>{width:410px;}\
               #<uispace>-ovr{z-index:102;}\
               #<uispace>-ovr-frm{z-index:101;}\
               #<uispace> .zfom{width:380px;_width:390px;}\
               #<uispace> .zhnt{color:#777;}\
               #<uispace> .zln0{margin:10px 0;}\
               #<uispace> .zwd0{width:310px;}\
               #<uispace> .zwd1{width:200px;}\
               #<uispace> .zln1 input{vertical-align:middle;}\
               #<uispace> .zln2{margin:0;padding-left:60px;}\
               #<uispace> textarea{height:100px;vertical-align:top;}',__uispace);
p._$$EDTWinPhotoNew=C();
__proEDTWinPhotoNew=p._$$EDTWinPhotoNew._$extend(p._$$EDTWindow,true);
__supEDTWinPhotoNew=p._$$EDTWinPhotoNew._$supro;
__proEDTWinPhotoNew._$initialize=function(_parent,_options){
_options=_options||{};
_options.title='创建相册';
_options['class']=(_options['class']||'')+' '+__uispace+'-ovr';
this._$super(_parent,_options);
};
__proEDTWinPhotoNew._$resetOption=function(_options){
__supEDTWinPhotoNew._$resetOption.apply(this,arguments);
this.__onAuthorityChange(0);
};
__proEDTWinPhotoNew.__getSpace=function(){
return __supEDTWinPhotoNew.__getSpace.call(this,__uispace);
};
__proEDTWinPhotoNew.__getFXhtml=function(){
return'<div class="zln0"><label for="'+this.__key+'-0">相册名称　</label><input class="ztxt zwd0" type="text" name="'+this.__key+'-0" id="'+this.__key+'-0"/></div>\
            <div class="zln0"><label for="'+this.__key+'-1">描　　述　</label><textarea class="zwd0" name="'+this.__key+'-1" id="'+this.__key+'-1"></textarea></div>\
            <div class="zln0 zln1"><label>访问权限　</label>\
              <input type="radio" value="0" name="'+this.__key+'-2" id="'+this.__key+'-20" checked="checked"/><label for="'+this.__key+'-20">公开</label>\
              <input type="radio" value="4" name="'+this.__key+'-2" id="'+this.__key+'-21"/><label for="'+this.__key+'-21">好友可见</label>\
              <input type="radio" value="8" name="'+this.__key+'-2" id="'+this.__key+'-24"/><label for="'+this.__key+'-24">问题访问</label>\
              <input type="radio" value="1" name="'+this.__key+'-2" id="'+this.__key+'-22"/><label for="'+this.__key+'-22">密码访问</label>\
              <input type="radio" value="2" name="'+this.__key+'-2" id="'+this.__key+'-23"/><label for="'+this.__key+'-23">私有</label>\
            </div>\
            <div class="ztag" style="display:none;">\
              <p class="zln0"><label for="'+this.__key+'-3">密　　码　</label><input class="ztxt zwd0" type="password" name="'+this.__key+'-3" id="'+this.__key+'-3"/></p>\
              <p class="zln0"><label for="'+this.__key+'-4">确认密码　</label><input class="ztxt zwd0" type="password" name="'+this.__key+'-4" id="'+this.__key+'-4"/></p>\
            </div>\
            <div class="ztag" style="display:none;">\
              <p class="zln0"><label for="'+this.__key+'-5">问　　题　</label><input class="ztxt zwd1" type="text" maxlength="20" name="'+this.__key+'-5" id="'+this.__key+'-5"/><span class="zhnt">　举例：我的名字？</span></p>\
              <p class="zln0"><label for="'+this.__key+'-6">答　　案　</label><input class="ztxt zwd1" type="text" maxlength="20" name="'+this.__key+'-6" id="'+this.__key+'-6"/><span class="zhnt">　举例：张三</span></p>\
              <p class="zln2 zhnt">问题和答案最多可输入20字符</p>\
            </div>';
};
__proEDTWinPhotoNew.__intXnode=function(){
__supEDTWinPhotoNew.__intXnode.apply(this,arguments);
var _ntmp=E._$getElementsByClassName(this.__form,'ztag');
this.__npwd=_ntmp[0];
this.__nqst=_ntmp[1];
var _ntmp=this.__form[this.__key+'-2'];
for(var i=0,l=_ntmp.length;i<l;V._$addEvent(
_ntmp[i],'click',this.__onAuthorityChange._$bind(this,i)),i++);
};
__proEDTWinPhotoNew.__onAuthorityChange=function(_type){
this.__nqst.style.display=_type==2?'':'none';
this.__npwd.style.display=_type==3?'':'none';
if(_type==2){
this.__form[this.__key+'-5'].focus();
this.__form[this.__key+'-5'].value='';
this.__form[this.__key+'-6'].value='';
}
if(_type==3){
this.__form[this.__key+'-3'].focus();
this.__form[this.__key+'-3'].value='';
this.__form[this.__key+'-4'].value='';
}
};
__proEDTWinPhotoNew.__onOK=function(){
var _ntmp=this.__form[this.__key+'-0'],
_info={name:U._$trim(_ntmp.value)};
if(!_info.name){
alert('请输入相册名称！');
_ntmp.focus();
return;
}
_info.type=0
_ntmp=this.__form[this.__key+'-2'];
for(var l=_ntmp.length;_info.type<l;_info.type++)
if(_ntmp[_info.type].checked)break;
if(_info.type==3){
_ntmp=this.__form[this.__key+'-3'];
_info.password=_ntmp.value;
if(!_info.password){
alert('请输入访问密码！');
_ntmp.focus();
return;
}
_ntmp=this.__form[this.__key+'-4'];
if(_ntmp.value!=_info.password){
alert('两次输入的密码不一致！');
_ntmp.select();
return;
}
}
if(_info.type==2){
_ntmp=this.__form[this.__key+'-5'];
_info.question=U._$trim(_ntmp.value);
if(!_info.question){
alert('请输入问题！');
_ntmp.focus();
return;
}
_ntmp=this.__form[this.__key+'-6'];
_info.password=U._$trim(_ntmp.value);
if(!_info.password){
alert('请输入问题答案！');
_ntmp.focus();
return;
}
}
_info.desc=this.__form[this.__key+'-1'].value;
_info.type=parseInt(this.__form[this.__key+'-2'][_info.type].value)||0;
this._$hide();
this._$dispatchEvent('onok',_info);
};
})();
(function(){
var p=P(N.ui),
__proEDTWinPhotoUDB,
__supEDTWinPhotoUDB,
__uispace='ui-'+U._$randNumberString();
p._$pushStyle('#<uispace>{width:230px;}\
               #<uispace> .zfom{width:210px;}\
               #<uispace> .zwd0{width:60px;}\
               #<uispace> .zln0{margin:10px 0;}\
               #<uispace> .zln1{margin-left:35px;}\
               #<uispace> .zln1 input{vertical-align:middle;}',__uispace);
p._$$EDTWinPhotoUDB=C();
__proEDTWinPhotoUDB=p._$$EDTWinPhotoUDB._$extend(p._$$EDTWindow,true);
__supEDTWinPhotoUDB=p._$$EDTWinPhotoUDB._$supro;
__proEDTWinPhotoUDB._$initialize=function(_parent,_options){
_options=_options||{};
_options.title='自定义图片尺寸';
this._$super(_parent,_options);
};
__proEDTWinPhotoUDB._$resetOption=function(_options){
_options=_options||O;
__supEDTWinPhotoUDB._$resetOption.apply(this,arguments);
var _width=parseInt(_options.width)||100,
_height=parseInt(_options.height)||100;
this.__form[this.__key+'-0'].value=_width;
this.__form[this.__key+'-1'].value=_height;
this.__ratio=_width/_height;
};
__proEDTWinPhotoUDB.__getSpace=function(){
return __supEDTWinPhotoUDB.__getSpace.call(this,__uispace);
};
__proEDTWinPhotoUDB.__getFXhtml=function(){
return'<div class="zln0"><label for="'+this.__key+'-0">宽度　</label><input class="ztxt zwd0" type="text" name="'+this.__key+'-0" id="'+this.__key+'-0" maxlength="4"/>像素</div>\
            <div class="zln0"><label for="'+this.__key+'-1">高度　</label><input class="ztxt zwd0" type="text" name="'+this.__key+'-1" id="'+this.__key+'-1" maxlength="4"/>像素</div>\
            <div class="zln1"><input type="checkbox" value="0" name="'+this.__key+'-2" id="'+this.__key+'-2"/><label for="'+this.__key+'-2">锁定宽高比</label></div>';
};
__proEDTWinPhotoUDB.__intXnode=function(){
__supEDTWinPhotoUDB.__intXnode.apply(this,arguments);
V._$addEvent(this.__form[this.__key+'-0'],'input',this.__onWidthChange._$bind(this));
V._$addEvent(this.__form[this.__key+'-1'],'input',this.__onHeightChange._$bind(this));
};
__proEDTWinPhotoUDB.__onShow=function(){
this.__form[this.__key+'-2'].checked=true;
__supEDTWinPhotoUDB.__onShow.apply(this,arguments);
};
__proEDTWinPhotoUDB.__onWidthChange=function(){
if(B._$ISIE&&!!this.__setting){
this.__setting=false;return;
}
if(!this.__form[this.__key+'-2'].checked)return;
var _width=parseInt(this.__form[this.__key+'-0'].value)||0;
if(_width>0)_width=Math.floor(_width/this.__ratio);
if(B._$ISIE)this.__setting=true;
this.__form[this.__key+'-1'].value=_width;
};
__proEDTWinPhotoUDB.__onHeightChange=function(){
if(B._$ISIE&&!!this.__setting){
this.__setting=false;return;
}
if(!this.__form[this.__key+'-2'].checked)return;
var _height=parseInt(this.__form[this.__key+'-1'].value)||0;
if(_height>0)_height=Math.floor(_height*this.__ratio);
if(B._$ISIE)this.__setting=true;
this.__form[this.__key+'-0'].value=_height;
};
__proEDTWinPhotoUDB.__onOK=function(){
var _ntmp=this.__form[this.__key+'-0'],
_width=parseInt(_ntmp.value);
if(isNaN(_width)||_width<=0){
alert('宽度必须为大于零的数字！');
_ntmp.select();
return;
}
_ntmp=this.__form[this.__key+'-1'];
var _height=parseInt(_ntmp.value);
if(isNaN(_height)||_height<=0){
alert('高度必须为大于零的数字！');
_ntmp.select();
return;
}
this._$hide();
this._$dispatchEvent('onok',{width:_width,height:_height});
};
})();
(function(){
var p=P(N.ui),
__proEDTWinPhotoCHG,
__supEDTWinPhotoCHG,
__uispace='ui-'+U._$randNumberString(),
__chg_flt={left:3,right:4},
__chg_aln={left:0,center:1,right:2},
__chg_box={750:0,500:1,300:2},
__chg_cnf=[{t:'排版',l:['居左','居中','居右','居左环绕','居右环绕'],
m:['0 10px 0 0','0 10px','0 0 0 10px','10px 10px 10px 0','10px 0 10px 10px'],
h:['justifyleft','justifycenter','justifyright'],
f:['left','right'],v:true},
{t:'尺寸',l:['大','中','小','默认','自定义'],b:[750,500,300]},
{t:'链接',l:['原图','URL','无']}];
p._$pushStyle('#<uispace>{position:absolute;z-index:2;width:195px;padding:5px;background:#fff;font-size:12px;color:#333;text-align:left;}\
               #<uispace>,#<uispace> .zbdc{border:1px solid #c5c5c5;}\
               #<uispace> input{width:50px;cursor:pointer;}\
               #<uispace> .zwd1,#<uispace> .zcrd1,\
               #<uispace> .zwd2,#<uispace> .zcrd2{width:85px;}\
               #<uispace> .zwd0,#<uispace> .zcrd0{width:100px;}\
               #<uispace> .zftl{float:left;}\
               #<uispace> .zftr{float:right;}\
               #<uispace> .zlnx{height:20px;padding:5px 0;}\
               #<uispace> .zimg{width:16px;height:16px;overflow:hidden;background:#fff url('+N.rc.r+'editor/editor.png) no-repeat;vertical-align:middle;}\
               #<uispace> .zsel{position:relative;height:20px;line-height:20px;cursor:pointer;overflow:hidden;}\
               #<uispace> .zsel .ztxt{padding-left:5px;}\
               #<uispace> .zsel .zdwn{position:absolute;top:2px;right:0;background-position:-1px -246px;}\
               #<uispace> .zcrd{position:absolute;background:#fff;text-align:left;}\
               #<uispace> .zcrd .zitm{display:block;height:20px;line-height:20px;padding:0 5px;color:#333;text-decoration:none;}\
               #<uispace> .zcrd .zitm:hover{background:#e0e2eb;text-decoration:none;}\
               #<uispace> .zcrd .zimg{margin-right:5px;}\
               #<uispace> .zcrd0{top:60px;left:5px;}\
               #<uispace> .zcrd1{top:30px;right:5px;}\
               #<uispace> .zcrd2{top:60px;right:5px;}\
               #<uispace> .zcrd0 .zicn0{background-position:0 -200px;}\
               #<uispace> .zcrd0 .zicn1{background-position:-16px -200px;}\
               #<uispace> .zcrd0 .zicn2{background-position:-32px -216px;}\
               #<uispace> .zcrd0 .zicn3{background-position:0 -216px;}\
               #<uispace> .zcrd0 .zicn4{background-position:-16px -216px;}',__uispace);
var __isItem=function(_element){
return E._$hasClassName(_element,'zitm');
};
var __setNodeFloat=function(_node,_float){
if(!_node)return;
var _style=_node.style;
_style['float']=_float;
_style.cssFloat=_float;
_style.styleFloat=_float;
};
var __getNodeFloat=function(_node){
if(!_node)return'';
var _style=_node.style;
return _style['float']||_style.cssFloat||_style.styleFloat||'';
};
p._$$EDTWinPhotoCHG=C();
__proEDTWinPhotoCHG=p._$$EDTWinPhotoCHG._$extend(p._$$EDTCardCNF,true);
__supEDTWinPhotoCHG=p._$$EDTWinPhotoCHG._$supro;
__proEDTWinPhotoCHG._$reset=function(_parent,_options){
_options=_options||O;
this.__nimg=_options.img||null;
__supEDTWinPhotoCHG._$reset.apply(this,arguments);
this._$addEvent('onchange',_options.onchange||F);
this._$addEvent('oncommand',_options.oncommand||F);
this.__initSetting();
};
__proEDTWinPhotoCHG.__build=function(){
this.__lopt={noname:true,nodelete:true,
onok:this.__cbLinkChange._$bind(this)};
this.__uopt={onok:this.__cbSizeChange._$bind(this)};
this.__body=document.cloneElement('div',__uispace);
this.__body.innerHTML=this.__getXhtml();
this.__ncrd=E._$getChildElements(this.__body,'xtag');
var _ntmp=E._$getElementsByClassName(this.__body,'ztag');
this.__ntxt=[_ntmp[3],_ntmp[0],_ntmp[4]];
for(var i=0,l=this.__ncrd.length;i<l;V._$addEvent(
this.__ncrd[i],'click',this.__onItemSelect._$bind(this,i)),i++);
for(var i=0,l=this.__ntxt.length;i<l;V._$addEvent(
this.__ntxt[i].parentNode,'click',this.__onSelectList._$bind(this,i)),i++);
V._$addEvent(document,'click',this.__onListClose._$bind(this));
V._$addEvent(_ntmp[1],'click',this.__onPhotoChange._$bind(this));
V._$addEvent(_ntmp[2],'click',this.__onPhotoDelete._$bind(this));
};
__proEDTWinPhotoCHG.__getDhtml=function(){
var _arr=[];
for(var i=0,l=__chg_cnf.length,_item;i<l;i++){
_item=__chg_cnf[i];
_arr.push('<div class="zcrd zbdc zcrd'+i+' xtag" style="display:none;">');
for(var j=0,k=_item.l.length;j<k;_arr.push('<a class="zitm" href="#" name="'+j+'" hidefocus="true">'+
(!_item.v?'':'<span class="iblock zimg zicn'+j+'">&nbsp;</span>')+_item.l[j]+'</a>'),j++);
_arr.push('</div>');
}
return _arr.join('');
};
__proEDTWinPhotoCHG.__getXhtml=function(){
return'<div class="zlnx clearfix">\
              <div class="zsel zwd1 zftr zbdc"><span class="ztag ztxt">尺寸</span><span class="iblock zdwn zimg">&nbsp;</span></div>\
              <input class="ztag" type="button" value="更换"/>\
              <input class="ztag" type="button" value="删除"/>\
            </div>\
            <div class="zlnx clearfix">\
              <div class="zsel zwd0 zftl zbdc"><span class="ztag ztxt">排版</span><span class="iblock zdwn zimg">&nbsp;</span></div>\
              <div class="zsel zwd2 zftr zbdc"><span class="ztag ztxt">链接</span><span class="iblock zdwn zimg">&nbsp;</span></div>\
            </div>'+this.__getDhtml();
};
__proEDTWinPhotoCHG.__initSetting=function(){
if(!this.__nimg)return;
var _xconf=__chg_cnf[2],
_parent=this.__nimg.parentNode,
_isanch=_parent.tagName=='A';
this.__lopt.href=_isanch?_parent.href:'';
this.__ntxt[2].innerText=_xconf.t+'-'+(!_isanch?'无':(
_parent.href==this.__nimg.src?'原图':'URL'));
if(_isanch)_parent=_parent.parentNode;
_xconf=__chg_cnf[1];
var _width=this.__nimg.style.width,
_index=!_width||_width=='auto'?3:__chg_box[this.__nimg.offsetWidth];
this.__ntxt[1].innerText=_xconf.t+'-'+(_xconf.l[_index]||_xconf.l[4]);
_xconf=__chg_cnf[0];
this.__ntxt[0].innerText=_xconf.t+'-'+(_xconf.l[__chg_flt[__getNodeFloat(this.__nimg)]
||__chg_aln[_parent.align]]||_xconf.l[0]);
};
__proEDTWinPhotoCHG.__setImgBox=function(_box){
var _style=this.__nimg.style;
_style.width=_box.width;
_style.height=_box.height;
};
__proEDTWinPhotoCHG.__setImgLink=function(_href){
this._$dispatchEvent('oncommand','createlink',_href);
if(!!this.__nimg)this.__nimg.parentNode.target='_blank';
};
__proEDTWinPhotoCHG.__onPhotoChange=function(){
this._$hide();
this._$dispatchEvent('onchange');
};
__proEDTWinPhotoCHG.__onPhotoDelete=function(){
this._$hide();
this._$dispatchEvent('oncommand','delete');
};
__proEDTWinPhotoCHG.__onSelectList=function(_index,_event){
V._$stop(_event);
var _display=this.__ncrd[_index].style.display;
this.__onListClose();
if(_display=='none')this.__ncrd[_index].style.display='';
};
__proEDTWinPhotoCHG.__onItemSelect=function(_index,_event){
var _element=V._$getElement(_event,__isItem);
if(!_element||_element.tagName!='A')return;
V._$stop(_event);
var _conf=__chg_cnf[_index],
_type=parseInt(_element.name);
this.__ncrd[_index].style.display='none';
this.__ntxt[_index].innerText=_conf.t+'-'+_conf.l[_type];
if(!this.__nimg)return;
switch(_index){
case 2:this.__onLinkChange(_type);return;
case 1:this.__onSizeChange(_type);return;
case 0:this.__onAlignChange(_type);return;
}
};
__proEDTWinPhotoCHG.__onListClose=function(){
for(var i=0,l=this.__ncrd.length;i<l;this.__ncrd[i].style.display='none',i++);
};
__proEDTWinPhotoCHG.__onLinkChange=function(_type){
switch(_type){
case 0:this.__setImgLink(this.__nimg.src);return;
case 1:!p._$$EDTWinLink||p._$$EDTWinLink._$show(this.__lopt);return;
case 2:this._$dispatchEvent('oncommand','unlink');return;
}
};
__proEDTWinPhotoCHG.__cbLinkChange=function(_link){
this.__setImgLink(_link.href);
};
__proEDTWinPhotoCHG.__onSizeChange=function(_type){
switch(_type){
case 4:
this.__uopt.width=this.__nimg.offsetWidth||'';
this.__uopt.height=this.__nimg.offsetHeight||'';
!p._$$EDTWinPhotoUDB||p._$$EDTWinPhotoUDB._$show(this.__uopt);
return;
case 3:this.__setImgBox({width:'auto',height:'auto'});return;
}
this.__setImgBox({width:(__chg_cnf[1].b[_type]||__chg_cnf[1].b[1])+'px',height:'auto'});
};
__proEDTWinPhotoCHG.__cbSizeChange=function(_size){
_size.width=_size.width+'px';
_size.height=_size.height+'px';
this.__setImgBox(_size);
};
__proEDTWinPhotoCHG.__onAlignChange=function(_type){
this.__nimg.style.margin=__chg_cnf[0].m[_type];
if(_type<3){
__setNodeFloat(this.__nimg,'none');
this._$dispatchEvent('oncommand',__chg_cnf[0].h[_type]);
return;
}
__setNodeFloat(this.__nimg,__chg_cnf[0].f[_type-3]);
};
})();
(function(){
var p=P(N.ui),
__proCalendar,
__uispace='ui-'+U._$randNumberString(),
__currdate=new Date(),
__chweek=['日','一','二','三','四','五','六'],
__chdays=[31,28,31,30,31,30,31,31,30,31,30,31],
__chmonth=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
p._$pushStyle('#<uispace>{width:175px;font-size:12px;text-align:center;}\
               #<uispace> .zbar{background-color:#ccc;color:#fff;padding:0 3px;height:24px;line-height:24px;}\
               #<uispace> .zbar .zleft{float:left;cursor:pointer;}\
               #<uispace> .zbar .zright{float:right;cursor:pointer;}\
               #<uispace> .ztip{background-color:#e9e9e9;font-weight:bold;text-align:left;padding:0 3px;height:20px;line-height:20px;}\
               #<uispace> .zcnt{border-collapse:collapse;border-spacing:0;}\
               #<uispace> .zcnt .zitm,#<uispace> .zcnt .itm{float:left;width:24px;border-width:1px 1px 0 0 ;border-style:solid;border-color:#FFF;height:20px;line-height:20px;}\
               #<uispace> .zcnt .itm{background-color:#f5f5f5;cursor:pointer;}\
               #<uispace> .zcnt .itm .iday{display:block;width:100%;}\
               #<uispace> .zcnt .js-zcurrent{background-color:#ccc}',__uispace);
var __getDaysInMonth=function(_year,_month){
if(!_year||!_month)return null;
if((_month==2)&&((_year%400==0)||(_year%4==0)&&(_year%100!=0))){
return 29;
}else{
return __chdays[_month-1];
}
};
p._$$Calendar=C();
__proCalendar=p._$$Calendar._$extend(P(N.ui)._$$CardWrapper,true);
__proCalendar._$initialize=function(_parent,_options){
this.__items=[];
this._$super(_parent,_options);
};
__proCalendar.__getXhtml=function(){
var _strHTML=[];
_strHTML.push('<div class="zbar">\
                     <div class="zleft">&lt;&lt;上月</div>\
                     <div class="zright">下月&gt;&gt;</div>\
                   </div>\
                   <div class="ztip">&nbsp;</div>\
                   <table class="table zcnt"><thead>');
for(var i=0;i<__chweek.length;i++){_strHTML.push('<th class="zitm">'+__chweek[i]+'</th>');}
_strHTML.push('</thead><tbody>');
for(var i=0;i<6;i++){
_strHTML.push('<tr>');
for(var j=0;j<7;j++){_strHTML.push('<td class="itm"><span class="iday ztag"></span></td>');}
_strHTML.push('</tr>');
}
_strHTML.push('</tbody></table><div class="zcnt clearfix"></div>');
return _strHTML.join('');
};
__proCalendar.__getSpace=function(){
return __uispace;
};
__proCalendar.__intXnode=function(){
var _ntmp=E._$getChildElements(this.__body),
_bnod=E._$getChildElements(_ntmp[0]);
V._$addEvent(_bnod[0],'click',this.__onPrevMonth._$bind(this));
V._$addEvent(_bnod[1],'click',this.__onNextMonth._$bind(this));
this.__ztip=_ntmp[1];
this.__zcnt=_ntmp[2];
this.__items=E._$getElementsByClassName(this.__zcnt,'ztag');
V._$addEvent(this.__zcnt,'click',this.__onSelectDay._$bind(this));
};
__proCalendar._$resetOption=function(_options){
this._$addEvent('onselect',_options.onselect||F);
this.__date=_options.date||__currdate;
this.__cyear=this.__date.getFullYear();
this.__cmonth=this.__date.getMonth()+1;
this.__cday=this.__date.getDate();
this.__setCurrentMonth(this.__cyear,this.__cmonth);
};
__proCalendar.__setCurrentMonth=function(_year,_month,_offset){
if(!_year||!_month)return;
if(_offset){
if(_month+_offset>12){
this.__cyear=_year+Math.floor((_month+_offset)/12);
this.__cmonth=(_month+_offset)%12;
}else if(_month+_offset<1){
this.__cyear=_year-(Math.floor((_month+_offset)/12)+1);
this.__cmonth=12+(_month+_offset)%12;
}else{
this.__cyear=_year;
this.__cmonth=_month+_offset;
}
}else{
this.__cyear=_year;
this.__cmonth=_month;
}
this.__setCurrentMonthData();
};
__proCalendar.__setCurrentMonthData=function(){
var _thdate=new Date(this.__cyear,this.__cmonth-1,1),
_thday=_thdate.getDay();
_thMonth=_thday+__getDaysInMonth(this.__cyear,this.__cmonth),
_length=this.__zcnt.rows.length,
i=0;
this.__ztip.innerHTML=__chmonth[this.__cmonth-1]+'&nbsp;'+this.__cyear;
for(var i=0,_length=this.__items.length;i<_length;i++){
this.__items[i].innerText=(i<_thday||i>=_thMonth)?'':(i-_thday+1);
if(E._$hasClassName(this.__items[i].parentNode,'js-zcurrent'))
E._$delClassName(this.__items[i].parentNode,'js-zcurrent');
if(i%7==0){this.__items[i].parentNode.parentNode.style.display=(i<_thMonth)?'':'none';}
}
if((this.__cyear==__currdate.getFullYear())&&(this.__cmonth==__currdate.getMonth()+1)){
var _index=(__currdate.getDate()+_thdate.getDay())-1;
E._$addClassName(this.__items[_index].parentNode,'js-zcurrent');
}
};
__proCalendar.__onSelectDay=function(_event){
var _element=V._$getElement(_event);
if(E._$hasClassName(_element,'iday')&&_element.innerText!=''){
this._$hide();
this._$dispatchEvent('onselect',new Date(this.__cyear,this.__cmonth-1,_element.innerText));
}
};
__proCalendar.__onNextMonth=function(){
this.__setCurrentMonth(this.__cyear,this.__cmonth,1);
};
__proCalendar.__onPrevMonth=function(){
this.__setCurrentMonth(this.__cyear,this.__cmonth,-1);
};
})();

(function(){
var p=P('nb.w'),
__proTopBar,
__proBanner,
__proTopBarPRV,
__proTopBarEDT,
__topbar_spc='nbw-'+U._$randNumberString(),
__ctgle='nbw-tgl',
__tkey='__tglkey__',
__bnr_url=/empty\.png\?(.*?)(?="|\))/i,
__msg_ept='js-nomsg-090',
__msg_hsm='js-hsmsg-056',
__msg_nom='js-email-980',
__msg_api='http://api.blog.163.com/'+'msg/dwr',
__msg_tag=['userMsgNewCount','comMsgNewCount','comReplyMsgNewCount','noteMsgNewCount','alertMsgNewCount'],
__rchar=/\@|\_|(?:\.\.)/,
__rname=/(?:\.|\.www)$/,
__tmp_netease={className:'fl im im0',
config:{'nlog':true,
'nblk':false,
'ntag':{
'name':'网易',
'url':'http://www.163.com/'
},
'list':[[{'name':'新闻','url':'http://news.163.com/'},
{'name':'微博','url':'http://t.163.com/'},
{'name':'邮箱','url':'http://email.163.com/'},
{'name':'闪电邮','url':'http://fm.163.com/?fmblogzx0628'},
{'name':'相册','url':'http://photo.163.com/'},
{'name':'有道','url':'http://www.youdao.com/'},
{'name':'手机邮','url':'http://ylh.123.163.com/?frombkcp','nlog':false},
{'name':'印像派','url':'http://yxp.163.com/'},
{'name':'梦幻人生','url':'http://dream.163.com/?from=bkcp'}],
[{'name':'更多','url':'http://sitemap.163.com/'}]]
}
},
__tmp_blog={className:'fl im im10',
config:{'nlog':false,
'nblk':false,
'ntag':{'name':'博客','url':'http://blog.163.com/?frompersonalbloghome'},
'list':[[{'name':'博客首页','url':'http://blog.163.com/?frompersonalbloghome'},
{'name':'博客话题','url':'http://blog.163.com/ht/?frompersonalbloghome'},
{'name':'热点专题','url':'http://blog.163.com/hot/history/?frompersonalbloghome'},
{'name':'博客油菜地','url':'http://blog.163.com/BLOG_YOUCAI/','cls':'youcai'},
{'name':'找朋友','url':'http://blog.163.com/findFriend.do?type=5?frompersonalbloghome'},
{'name':'博客圈子','url':'http://q.163.com/#home?frompersonalbloghome'},
{'name':'博客风格','url':'http://blog.163.com/public/theme/?frompersonalbloghome'},
{'name':'手机博客','url':'http://blog.163.com/services/wapblog.html?frompersonalbloghome'},
{'name':'邮件写博','url':'http://blog.163.com/services/mailblog.html?frompersonalbloghome'},
{'name':'博客复制','url':'http://blog.163.com/clone/clone.html?frompersonalbloghome'}]]
}
},
__tmp_myblog={className:'fr im1',
config:{'nlog':false,
'nblk':false,
'ntag':{'name':'我的博客','url':''},
'list':[[{'name':'首页','url':''},
{'name':'日志','url':'blog/#m=0'},
{'name':'相册','url':'album'},
{'name':'心情','url':'blog/#m=1','cls':'youcai'},
{'name':'收藏','url':'collection/'},
{'name':'音乐','url':'music/'},
{'name':'关于我','url':'profile/'},
{'name':'博客设置','url':'settings/'},
{'name':'博客装扮','url':'dress/'},
{'name':'意见反馈','url':'http://fankui.163.com/ft/comment.fb?pid=5002'}]]
}
},
__tmp_center={className:'fr im8',
config:{'nlog':false,
'nblk':false,
'ntag':{'name':'博客中心','icn':'icn0-119','url':'manage/'},
'list':[[{'name':'写日志','icn':'icn0-00','url':'blog/getBlog.do'},
{'name':'传照片','icn':'icn0-12','url':'album/#m=5'},
{'name':'发投票','icn':'icn0-513','url':'vote/'}],
[{'name':'设置','icn':'icn0-216','url':'setAuthority.do'}]]
}
},
__tmp_lmsg=[{'name':'短消息'},
{'name':'评论','type':'com'},
{'name':'评论回复','type':'comReply'},
{'name':'留言','type':'note'},
{'name':'通知','type':'alert'}];
P(N.ui)._$pushStyle('#<uispace> .nb-nbar,.nb-nbar .bg{background:#fefefe url(http://b.bst.126.net/newpage/images/lnkbar.png) repeat-x;}\
      #<uispace> .nb-nbar{position:absolute;left:0;top:0;width:100%;z-index:9999;min-width:990px;height:28px;color:#666;font:12px/22px simsun;text-align:left;}\
      #<uispace> .icn0{width:20px;height:20px;line-height:20px;background-image:url(http://b.bst.126.net/newpage/images/icon.png?v=20100413);background-repeat:no-repeat}\
      #<uispace> .icn0-421 {background-position:-160px -421px;}\
      #<uispace> .icn0-023 {background-position:0 -460px;}\
      #<uispace> .icn0-123 {background-position:-40px -460px;}\
      #<uispace> .fw1 {font-weight:bold;}\
      #<uispace> .icn0-119 {background-position:-40px -380px;}\
      #<uispace> .icn0-223 {background-position:-80px -460px;}\
      #<uispace> .icn0-00 {background-position:0 0;}\
      #<uispace> .icn0-12 {background-position:-40px -40px;}\
      #<uispace> .icn0-513 {background-position:-200px -260px;}\
      #<uispace> .icn0-216 {background-position:-80px -320px;}\
      #<uispace> .icn1{background-image:url(http://b.bst.126.net/newpage/images/image.png?v=20100413);background-repeat:no-repeat;}\
      #<uispace> .icn1-4 {background-position:-50px -14px;height:24px;margin:0 5px;width:1px;}\
      #<uispace> .nb-nbar a{color:#666;text-decoration:none;}\
      #<uispace> .nb-nbar .youcai{color:#278701}\
      #<uispace> .nb-nbar a.noul:hover{text-decoration:none;}\
      #<uispace> .nb-nbar .icn1-4 {position:relative;top:3px;right:5px}\
      #<uispace> .nb-nbar .cs{cursor:pointer;}\
      #<uispace> .nb-nbar .bd{border-color:#ccc;border-style:solid;border-width:0;}\
      #<uispace> .nb-nbar .fl{float:left;}\
      #<uispace> .nb-nbar .fr{float:right;}\
      #<uispace> .nb-nbar .spx{margin:0 10px;}\
      #<uispace> .nb-nbar .ud{font-family:Arial,Helvetica,Sans-Serif;}\
      #<uispace> .nb-nbar .ia:hover{text-decoration:none;}\
      #<uispace> .nb-nbar .ia:hover .tx{}\
      #<uispace> .nb-nbar .ima{height:20px;line-height:20px;padding:4px 0;overflow:hidden;}\
      #<uispace> .nb-nbar .imx{_height:20px;margin-right:5px;_padding-top:3px;}\
      #<uispace> .nb-nbar .ud1{color:#a4a4a4;_padding-top:2px}\
      #<uispace> .nb-nbar .imy{margin-left:5px;}\
      #<uispace> .nb-nbar .pr{padding-right:12px;}\
      #<uispace> .nb-nbar .pl{padding-left:22px;}\
      #<uispace> .nb-nbar .pl .im{margin-right:3px;}\
      #<uispace> .nb-nbar .pl .im2 .icn0-716{width:17px;background-position:-283px -320px;}\
      #<uispace> .nb-nbar .pl .im3 a{display:block;width:50px;margin-left:3px;}\
      #<uispace> .nb-nbar .js-email-980 .icn0-123{background-position:-40px -440px;}\
      #<uispace> .nb-nbar .nbw-im{position:relative;}\
      #<uispace> .nb-nbar .nbw-im .lbl{display:block;height:20px;line-height:20px;_line-height:24px;padding:4px 1px 4px 5px;overflow:hidden;cursor:pointer;}\
      #<uispace> .nb-nbar .nbw-im .nbw-tcd{display:none;}\
      #<uispace> .nb-nbar .nbw-im:hover .lbl,.nb-nbar .js-hover-879 .lbl{position:relative;z-index:2;border-width:1px;padding:3px 0 3px 4px;_margin-top:-2px;_margin-bottom:-2px;background:url(http://b.bst.126.net/newpage/images/lnkbg.png?t=20100629) repeat-x;color:#FFF;}\
      #<uispace> .nb-nbar .nbw-im:hover .icn0-421,.nb-nbar .js-hover-879 .icn0-421{background-position:-160px -439px;}\
      #<uispace> .nb-nbar .nbw-im:hover .nbw-tcd,\
      #<uispace> .nb-nbar .js-hover-879 .nbw-tcd{display:block;}\
      #<uispace> .nb-nbar .nbw-im .spy{display:block;margin:0 5px;width:50px;}\
      #<uispace> .nb-nbar .nbw-im .spz{width:70px;}\
      #<uispace> .nb-nbar .nbw-im:hover .spz{width:72px;}\
      #<uispace> .nb-nbar .nbw-tcd{position:absolute;top:27px;left:0;z-index:1;border-width:1px;background:#FFF;}\
      #<uispace> .nb-nbar .nbw-tcd .itm{display:block;line-height:28px;padding:0 5px;}\
      #<uispace> .nb-nbar .nbw-tcd .itm:hover{background:url(http://b.bst.126.net/newpage/images/lnkbg.png) repeat-x;color:#FFF;}\
      #<uispace> .nb-nbar .nbw-tcd .sep{height:3px;margin:3px 5px 0;border-width:1px 0 0;}\
      #<uispace> .nb-nbar .im0{_width:50px;}\
      #<uispace> .nb-nbar .im1{_width:75px;}\
      #<uispace> .nb-nbar .im2{_width:50px;}\
      #<uispace> .nb-nbar .im8{_width:94px;}\
      #<uispace> .nb-nbar .im9{_width:52px;white-space:nowrap;}\
      #<uispace> .nb-nbar .im10{_width:50px;}\
      #<uispace> .nb-nbar .im0 .nbw-tcd{width:60px;}\
      #<uispace> .nb-nbar .im1 .nbw-tcd{width:75px;}\
      #<uispace> .nb-nbar .im2 .nbw-tcd{width:215px;}\
      #<uispace> .nb-nbar .im9 .nbw-tcd{width:100%;}\
      #<uispace> .nb-nbar .im8 .nbw-tcd{width:92px;}\
      #<uispace> .nb-nbar .im10 .nbw-tcd{width:75px;}\
      #<uispace> .nb-nbar .msg{text-align:right;}\
      #<uispace> .nb-nbar .msg .js-hsmsg-056{color:#f00;font-weight:bold;}\
      #<uispace> .nb-nbar .js-nomsg-090 .msg{width:80px;}\
      #<uispace> .nb-nbar .js-nomsg-090 .isg{display:none;}\
      #<uispace> .nb-nbar .tsh{padding:8px;}\
      #<uispace> .nb-nbar .tsh .ipt{border-width:1px;background-position:0 -30px;background-color:#eee;}\
      #<uispace> .nb-nbar .tsh .txt{width:150px;height:22px;line-height:22px;*height:20px;*margin-top:-1px;border:0;background-color:#eee;vertical-align:top;}\
      #<uispace> .nb-nbar .tsh .btn1{height:24px;line-height:24px;padding-left:4px;border-left-width:1px;}\
      #<uispace> .nb-nbar .tsh .btn1:hover{text-decoration:none;}\
      #<uispace> .nb-nbar .tsh .icn0-421{position:relative;width:15px;height:24px;margin-left:4px;background-position:-160px -417px;border-left-width:1px;cursor:pointer;vertical-align:top;*vertical-align:middle;}\
      #<uispace> .nb-nbar .tsh .lnk{display:none;position:absolute;top:24px;right:-3px;width:62px;*right:-1px;*width:60px;line-height:24px;border-width:1px;background:#eee;text-align:center;}\
      #<uispace> .nb-nbar .tsh .nbw-tgl{background-position:-160px -436px;}\
      #<uispace> .nb-nbar .tsh .nbw-tgl .lnk{display:block;}',__topbar_spc);
var __toggleElement=function(_id){
var _element=E._$getElement(_id);
if(!_element)return;
var _style=_element.style;
_style.display=_style.display=='none'?'':'none';
};
var __toggle=function(_id,_callback,_event){
V._$stopBubble(_event);
V._$dispatchEvent(document,'click');
var _toggled=E._$hasClassName(_id,__ctgle);
_toggled?E._$delClassName(_id,__ctgle)
:E._$addClassName(_id,__ctgle);
!!_callback&&_callback(!_toggled);
};
var __isSysUser=function(_username){
return _username.indexOf('@')<0||_username.search('@126|@188|@yeah|@game')>=0;
};
var __parseUrl=function(_element){
var _url=__bnr_url.test(E._$getStyle(
_element,'backgroundImage'))?RegExp.$1:'';
return!_url?'':(_url.indexOf('http://')>=0?_url:('http://'+_url));
};
var __getUserUrl=function(_username){
_username=__parseEmail(_username||this.__host.userName);
return!_username&&'http://blog.163.com/'||('http://blog.163.com/u/'+_username+'/');
};
var __parseEmail=function(_userName){
if(!!_userName){
if(_userName.substr(-4)==="@126")
return _userName.replace("@126","@126.com");
else if(_userName.substr(-4)==="@188")
return _userName.replace("@188","@188.com");
else if(_userName.substr(-5)==="@popo")
return _userName.replace(".popo","@popo.163.com");
else if(_userName.substr(-4)===".vip")
return _userName.replace(".vip","@vip.163.com");
else if(_userName.substr(-5)==="@yeah")
return _userName.replace("@yeah","@yeah.net");
else if(_userName.substr(-5)==="@game")
return _userName;
else if(_userName.indexOf('@')>=0)
return _userName;
else
return _userName+"@163.com";
}
};
p._$$TopBar=C();
__proTopBar=p._$$TopBar.prototype;
__proTopBar._$initialize=function(_parent,_options){
if(_options.state==1||_options.state==2){
_options.isLogin=true;
_options.visitor=_options.visitor||_options.host;
new p._$$TopBarEDT(_parent,_options);
}
else{
_options.isLogin=false;
new p._$$TopBarPRV(_parent,_options);
}
};
p._$$TopBarPRV=C();
__proTopBarPRV=p._$$TopBarPRV._$extend(P(N.ui)._$$UIAbstract,true);
__proTopBarPRV._$initialize=function(_parent,_options){
_options=_options||O;
this.__themeId=_options.themeId||0;
this.__mid=_options.mid;
this.__login=_options.isLogin;
this.__visitor=_options.visitor;
this.__host=_options.host;
this.__noUserId=_options.noUserId||false;
this.__fkurl=_options.fkurl;
if(this.__themeId<0)
this.__tmp_theme_display='style="display:none;"';
else
this.__tmp_theme_display='';
if(_options.state==2){
this.__isEdit=true;
this.__visitor=this.__host;
this.__tmp_display='style="display:none;"';
this.__init_vbase=_options.init_vbase||'';
}
else{
this.__isEdit=false;
this.__tmp_display='';
}
this.__targetUrl=_options.targeturl||location.href;
this._$super(_parent,_options);
};
__proTopBarPRV._$resetOption=function(_options){
_options=_options||O;
this.__cmt=_options.cmt;
};
__proTopBarPRV.__getXhtml=function(){
var _xHTMLString=[];
_xHTMLString.push('<div class="nb-nbar clearfix" id="blog-163-com-topbar">');
_xHTMLString.push('<div class="pl fl clearfix">');
_xHTMLString.push(this.__initMenu(__tmp_netease));
_xHTMLString.push(this.__initMenu(__tmp_blog));
_xHTMLString.push('</div>');
_xHTMLString.push('<div class="pr fr clearfix">');
if(!this.__login){
_xHTMLString.push(' <a class="fr ima hide" href="http://reg.163.com/reg/reg0_new.jsp?product=blog&url=http://blog.163.com/ntesRegBlank.html" ');
_xHTMLString.push('   target="_blank">注册</a>');
_xHTMLString.push('<span class="fr iblock space icn1 icn1-4 spx hide">&nbsp;</span>');
_xHTMLString.push('<a class="fr ima ztag hide" href="javascript:void(0);">登录</a>');
}
else{
_xHTMLString.push('<a class="fr ima imy hide" id="photo_head_logout1" href="'+this.__targetUrl+'" >退出</a>');
_xHTMLString.push('<span class="fr fw1 ud ima imx ztag"'+(this.__noUserId?this.__tmp_theme_display:'')+'>(<a target="_blank" class="noul" target="_blank" ');
_xHTMLString.push('title="未读邮件0封" href="http://blog.163.com/mailLogin.do?username='+__parseEmail(this.__visitor.userName)+'">');
_xHTMLString.push('<span class="iblock icn0 icn0-123 cs">&nbsp;</span><span class="xtag">0</span></a>)</span>');
_xHTMLString.push('<span class="fr fw1 ud ud1 ima">'+__parseEmail(this.__visitor.userName)+'</span>');
_xHTMLString.push('<span class="fr iblock space icn1 icn1-4">&nbsp;</span>');
if(!!this.__fkurl){
_xHTMLString.push('<div class="nbw-im fr im0 hide">');
_xHTMLString.push(' <a target="_blank" class="lbl bd ima" href="'+this.__fkurl+'">反馈&nbsp;&nbsp;</a>');
_xHTMLString.push('</div>');
}
_xHTMLString.push(' <div class="nbw-im fr im9 ztag js-nomsg-090"'+(this.__noUserId?this.__tmp_theme_display:'')+'>');
_xHTMLString.push('   <a target="_blank" class="lbl bd ia" href="'+__getUserUrl(this.__visitor.userName)+'message/" hidefocus="true" >');
_xHTMLString.push('    <span class="isg iblock icn0 icn0-223">&nbsp;</span><span class="tx xtag">消息</span><span class="iblock icn0 icn0-421">&nbsp;</span></a>');
_xHTMLString.push('   <div class="nbw-tcd bd msg">');
_xHTMLString.push(this.__get_tmp_mng());
_xHTMLString.push('</div>');
_xHTMLString.push('</div>');
_xHTMLString.push(this.__initMenu(__tmp_myblog,__getUserUrl(this.__visitor.userName)));
_xHTMLString.push('<div class="nbw-im fr">');
_xHTMLString.push(' <a target="_blank" class="lbl bd  ima spy" href="'+__getUserUrl(this.__visitor.userName)+'manage/">个人中心</a>');
_xHTMLString.push('</div>');
}
_xHTMLString.push('</div>');
_xHTMLString.push('</div>');
return _xHTMLString.join('');
};
__proTopBarPRV.__initMenu=function(_menuObj,_baseUrl){
var _tmp='',
_ntag=_menuObj.config.ntag,
_nblk=_menuObj.config.nblk,
_prfx=_menuObj.config.nlog?'http://blog.163.com/redirect.html?frompersonalbloghome&url=':'';
_tmp+='<div class="nbw-im '+_menuObj.className+'">';
_tmp+='<a class="lbl bd ia" href="'+_prfx+this.__getUrl(_ntag.url,_baseUrl)+'"'+((!_nblk)?'target="_blank"':'')+' hidefocus="true">';
_tmp+=(!!_ntag.icn?('<span class="iblock icn0 '+_ntag.icn+'">&nbsp;</span>'):'')+'<span class="tx">'+_ntag.name+'</span><span class="iblock icn0 icn0-421">&nbsp;</span></a>';
_tmp+='<div class="nbw-tcd bd">';
var _list=_menuObj.config.list;
for(var i=0;i<_list.length;i++){
for(var j=0;j<_list[i].length;j++){
_tmp+='<a class="itm '+((!!_ntag.icn)?'ia"':'"')+((!_nblk)?' target="_blank"':'')+' hidefocus="true" '+
'href="'+_prfx+this.__getUrl(_list[i][j].url,_baseUrl)+'">'+((!!_list[i][j].icn)?
('<span class="iblock icn0 '+_list[i][j].icn+'">&nbsp;</span><span class="tx">'+_list[i][j].name+'</span>'):_list[i][j].name)+'</a>';
}
if(i!=_list.length-1)
_tmp+='<div class="sep bd space">&nbsp;</div>';
}
_tmp+='</div>'+
'</div>';
return _tmp;
};
__proTopBarPRV.__getUrl=function(_url,_baseUrl){
if(!!_baseUrl&&(_url.indexOf('http://')==-1))
return _baseUrl+_url;
else
return _url;
};
__proTopBarPRV.__get_tmp_mng=function(){
var _tmp='';
var _tmp_lmsg=__tmp_lmsg;
for(var i=0;i<_tmp_lmsg.length;i++){
_tmp+='<a class="itm" target="_blank"  href="'+__getUserUrl(this.__visitor.userName)+'message/'+
(!!_tmp_lmsg[i].type?('?type='+_tmp_lmsg[i].type):'')+'">'+_tmp_lmsg[i].name+'：<span class="xtag">0</span></a>'
}
return _tmp;
};
__proTopBarPRV.__intXnode=function(){
var _node=E._$getElementsByClassName(this.__body,'nb-nbar')[0];
var _ntmp=E._$getChildElements(_node);
if(!_ntmp||!_ntmp.length)return;
var _list=E._$getElementsByClassName(this.__body,'nbw-im');
if(!!_list&&_list.length>0)
for(var i=0,l=_list.length;i<l;
E._$hoverElement(_list[i],'js-hover-879'),i++);
this.__initLeft(_ntmp[0]);
this.__initRight(_ntmp[1]);
};
__proTopBarPRV.__initLeft=function(_node){
};
__proTopBarPRV._$toggle=function(_element,_callback){
_element=E._$getElement(_element);
if(!_element||!!_element[__tkey])return;
_element[__tkey]=true;
var _id=_element.id=_element.id||
('xnd_'+U._$randNumberString(10));
if(!U._$isType(_callback,'function')){
_callback=E._$getElement(_callback);
if(!!_callback){
var _tid=_callback.id=_callback.id||
('xnd_'+U._$randNumberString(10));
_callback=__toggleElement._$bind(null,_tid);
}
}
V._$addEvent(_element,'click',__toggle._$bind(null,_id,_callback));
};
__proTopBarPRV._$toggle=function(_element,_callback){
_element=E._$getElement(_element);
if(!_element||!!_element[__tkey])return;
_element[__tkey]=true;
var _id=_element.id=_element.id||
('xnd_'+U._$randNumberString(10));
if(!U._$isType(_callback,'function')){
_callback=E._$getElement(_callback);
if(!!_callback){
var _tid=_callback.id=_callback.id||
('xnd_'+U._$randNumberString(10));
_callback=__toggleElement._$bind(null,_tid);
}
}
V._$addEvent(_element,'click',__toggle._$bind(null,_id,_callback));
};
__proTopBarPRV._$link=function(_element){
if(!_element||!_element.href)return;
!_element.target
?location.href=_element.href
:window.open(_element.href,_element.target);
};
__proTopBarPRV.__initRight=function(_node){
if(this.__isUnActiveUser(_node))return;
var _list=E._$getChildElements(_node,'ztag');
if(!_list||!_list.length)return;
V._$addEvent(_list[0],'click',this.__onLogin._$bind(this));
};
__proTopBarPRV.__isUnActiveUser=function(_node){
if(!/USERNAME_FROM_URS\s*=\s*(.*?)(?=\s|;|$)/.test(document.cookie))return false;
var _username=RegExp.$1||'';
if(!_username||!__isSysUser(_username))return false;
_node.innerHTML=E._$getHtmlTemplate('nb-jst-a1',{u:_username});
return true;
};
__proTopBarPRV.__getSpace=function(){
return __topbar_spc;
};
__proTopBarPRV.__onSearch=function(_type,_event){
if(_type=='a')V._$stop(_event);
this.__nbtn.href=this.__nkey.form.action
+'&q='+(this.__nkey.value||'')+'&t='+(_type||'a');
this.__nkey.value='';
this._$link(this.__nbtn);
};
__proTopBarPRV.__onSearchFocus=function(){
try{this.__nkey.focus();}catch(e){}
};
__proTopBarPRV.__onSearchBlur=function(){
try{this.__nkey.blur();}catch(e){}
};
__proTopBarPRV.__onEnter=function(_event){
if(_event.keyCode!=13)return;
this.__onSearch('a');
};
__proTopBarPRV.__onLogin=function(){
if(!(P(N.gw).WinLogin))return;
(P(N.gw).WinLogin)._$show({});
};
p._$$TopBarEDT=C();
__proTopBarEDT=p._$$TopBarEDT._$extend(p._$$TopBarPRV,true);
__proTopBarEDT.__initRight=function(_node){
var _list=E._$getChildElements(_node,'ztag');
if(!_list||!_list.length)return;
this.__mbox=_list[1];
this.__nitm=E._$getElementsByClassName(this.__mbox,'xtag');
this.__nitm.push(E._$getElementsByClassName(_list[0],'xtag')[0]);
this.__mtxt=this.__nitm.shift();
V._$addEvent(E._$getElement('__topbar_use_theme'),'click',this.__onCustomTheme._$bind(this));
V._$addEvent(this.__mtxt.parentNode,'click',this.__onGoMessage._$bind(this));
this.__count=0;
this.__onCheckMail();
this.__onCheckMessage();
this.__onLongPolling();
};
__proTopBarEDT.__onLongPolling=function(){
if(!this.__cmt)return;
this.__connect=new(P(N.ut)._$$Connection)({
onreconnect:this.__onReConnect._$bind(this)});
this.__onReConnect();
};
__proTopBarEDT.__onReConnect=function(){
if(!this.__connect)return;
this.__connect._$connect(this.__cmt+U._$randNumberString());
};
__proTopBarEDT.__onGoMessage=function(){
this.__mtxt.parentNode.href=this.__nitm[this.__mtxt.idx||0].parentNode.href;
};
__proTopBarEDT.__onCustomTheme=function(_event){
V._$stop(_event);
if(this.__isEdit){
var _toolbar=nb.w._$$ToolBar._$getInstance();
_toolbar&&_toolbar._$custom(0);return;
}
if(!confirm('您确定使用此风格吗？'))return;
J._$postDataByDWR(location.dwr,'SetupBeanNew','copyUserTheme',this.__themeId,this.__host.userId,this.__cbUpdateTheme._$bind(this));
};
__proTopBarEDT.__cbUpdateTheme=function(_isok){
if(!!_isok){
E._$showHint('风格保存成功！',true,false,'success');
}else{
E._$showHint('暂时无法保存风格，请稍后再试！',true,false,'fail');
}
};
__proTopBarEDT.__onCheckMessage=function(){
this.__count++;
window.setTimeout(this.__onCheckMessage._$bind(this),60000);
var _visitor=this.__visitor;
J._$loadDataByTAG(__msg_api,'PollingBean','pollingNewMsgByAlbum',
_visitor.userName,this.__cbCheckMessage._$bind(this));
};
__proTopBarEDT.__cbCheckMessage=function(_message){
if(!_message)return;
var _total=0;
for(var i=__msg_tag.length-1,_count;i>=0;i--){
_count=_message[__msg_tag[i]]||0;
if(_count>0)this.__mtxt.idx=i;
this.__nitm[i].innerText=_count;
_count>0?E._$addClassName(this.__nitm[i],__msg_hsm)
:E._$delClassName(this.__nitm[i],__msg_hsm);
_total+=_count;
}
if(_total>0){
E._$delClassName(this.__mbox,__msg_ept);
this.__mtxt.innerText=_total+'条新消息';
if(B._$ISOLDIE)this.__mbox.style.width=this.__mbox.scrollWidth+'px';
this.__nitm[0].parentNode.parentNode.width=this.__mbox.offsetWidth-2+'px';
}else{
this.__mtxt.innerText='消息';
E._$addClassName(this.__mbox,__msg_ept);
if(B._$ISOLDIE)this.__mbox.style.width='';
this.__nitm[0].parentNode.parentNode.style.width='';
}
this.__onCheckMail();
};
__proTopBarEDT.__onCheckMail=function(){
if((this.__count%5!=1))return;
this.__loadMailCount();
};
__proTopBarEDT.__loadMailCount=function(){
if(!this.__miframe){
this.__miframe=document.cloneElement('iframe','hide');
V._$addEvent(this.__miframe,'load',this.__cbLoadMailCount._$bind(this));
document.body.appendChild(this.__miframe);
}
var P_INFO=U._$getCookie("P_INFO");
var arr=P_INFO.split("|");
var username=arr[0];
var isLogin=false;
var domain="163.com";
if(username.indexOf("@126.com")>-1){
domain="126.com";
}
if(username.indexOf("@yeah.net")>-1){
domain="yeah.net";
}
if(username.indexOf("@163.com")>-1){
domain="163.com";
}
if(username.indexOf("@188.com")>-1){
domain="188.com";
}
if(username.indexOf("@vip.163.com")>-1){
domain="vip.163.com";
}
if(username.indexOf("@vip.126.com")>-1){
domain="vip.126.com";
}
if(arr[2]==1){
isLogin=true;
}
var iframeUrl="http://msg.mail."+domain+"/cgi/mc?funcid=getusrnewmsgcnt&fid=1&addSubFdrs=1"
+"&language=0&style=0&template=newmsgres_forblog.htm&username="+username+'&r='+U._$randNumberString(8);
if(username.indexOf("@vip.126.com")>-1){
var iframeUrl="http://msg."+domain+"/cgi/mc?funcid=getusrnewmsgcnt&fid=1&addSubFdrs=1"
+"&language=0&style=0&template=newmsgres_forblog.htm&username="+username+'&r='+U._$randNumberString(8);
}
if(isLogin){
this.__miframe.src=iframeUrl;
}
};
__proTopBarEDT.__cbLoadMailCount=function(){
try{this.__cbCheckMail(parseInt(this.__miframe.contentWindow.name)||0);}catch(e){}
};
__proTopBarEDT.__cbCheckMail=function(_count){
_count=_count||0;
var _ntmp=this.__nitm[__msg_tag.length];
_ntmp.innerText=_count;
_ntmp=_ntmp.parentNode;
_ntmp.title='未读邮件'+_count+'封';
!_count?E._$delClassName(_ntmp,__msg_nom)
:E._$addClassName(_ntmp,__msg_nom);
};
})();
