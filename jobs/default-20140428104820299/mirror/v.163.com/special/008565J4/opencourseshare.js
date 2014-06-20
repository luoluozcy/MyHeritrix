var openCourse = (function(_oc,_jq,g){
	function ShareUI(){
		return this.init.apply(this, arguments)
	}
	var sharePro = ShareUI.prototype,
		_tpl = '<style>.u-share .weibo, .u-share .yixin, .u-share .weixin, .u-share .qzone, .u-share .douban, .u-share .renren {display: block; float: left; cursor: pointer; margin:0 3px; width: 28px; height: 28px; background: url("http://img1.cache.netease.com/v/open/developTest/topic/wise/share.png") no-repeat 0 0; } .u-share .weibo {background-position: 0 -28px; } .u-share .weibo:hover {background-position: 0 0; } .u-share .yixin {background-position: -36px -30px; } .u-share .yixin:hover {background-position: -37px 0; }  .u-share .qzone {background-position: -71px -29px; } .u-share .qzone:hover {background-position: -71px 0; } .u-share .renren {background-position: -105px -29px; } .u-share .renren:hover {background-position: -105px 0; } .u-share .douban {background-position: -134px -29px; } .u-share .douban:hover {background-position: -134px 0; }</style>\
				<div class="u-share f-cb j-shareUI">\
	                <a class="j-btn weibo" title="分享到新浪微博" data-v="weibo"></a>\
	                <a class="j-btn yixin" title="分享到易信" data-v="yixin"></a>\
	                <a class="j-btn qzone" title="分享到qq空间" data-v="qzone"></a>\
	                <a class="j-btn renren" title="分享到人人" data-v="renren"></a>\
	                <a class="j-btn douban" title="分享到豆瓣" data-v="douban"></a>\
	            </div>';
	sharePro.init = function(_ops){
		this.__title       = (_ops.title || '');
        this.__topic       = _ops.topic || '';
        this.__description = _ops.description || '';
        this.__pic         = _ops.pic || '';
        this.__url         = _ops.url || g.location.href;
		//set the shareID
        this.__shareID = {};
        this.__shareID.sina = {};
        this.__shareID.sina.id = '2216871876'; //sina weibo appID
        
        this.__shareID.renren  = '';
        this.__shareID.douban  = '';
        //set the pop window
        var _ustr=[];
        _ustr[0] = 'height=505,width=615,top=' + (screen.height - 280) / 2 ;
        _ustr[1] = 'left=' + (screen.width - 550) / 2 ;
        _ustr[2] = 'toolbar=no, menubar=no, scrollbars=no,';
        _ustr[2] += 'resizable=yes,location=no, status=no';
        
        this.__window = _ustr.join(',');
        this.__parent = _ops.parent;
        this.__parent.html(_jq(_tpl));
		this.__body = this.__parent.find('.j-shareUI').eq(0);
		this.__initEvent(_ops)
	};
	sharePro.__initEvent = function(_ops){
        var _this = this;
		this.__body.on('click','.j-btn',function(){
			var _cate = _jq(this).data('v');
			switch(_cate){
	            case 'weibo':
	                _this.__shareSina();
	            break;
	            case 'yixin':
	                _this.__shareYixin();
	            break;
	            case 'weixin':
	                _this.__shareWeixin();
	            break;
	            case 'qzone':
	                _this.__shareQzone();
	            break;
	            case 'renren':
	                _this.__shareRenren();
	            break;
	            case 'douban':
	                _this.__shareDouban();
	            break;
	            default:
	            break;
	        };
		});
	};
	    //分享到易信
    sharePro.__shareYixin = function(){
        var _param = {
            appkey:'0471687ce85576fe8a0d2d838f3d2248',
            type:"webpage",
            title:'网易公开课',
            desc:this.__title,
            userdesc:'',
            pic:this.__pic,
            url:this.__url
        }
        var arr = [];
        for( var tmp in _param ){
            arr.push(tmp + '=' + encodeURIComponent( _param[tmp] || '' ) )
        }
        url='http://open.yixin.im/share?'+arr.join('&');
        g.open(url,'_blank',this.__window);
    }

    /**
     * qzone分享
     * 
     */
    sharePro.__shareQzone = function(){
        var _param = {
            url:this.__url,
            title:this.__title,
            pics:this.__pic,
            summary:this.__desc
        }
        var arr = [];
        for( var tmp in _param ){
            arr.push(tmp + '=' + encodeURIComponent( _param[tmp] || '' ) )
        }
        url='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+arr.join('&');
        g.open(url,'Qzone',this.__window);
    }
    sharePro.__shareSina = function(){
        var param = {
            url:this.__url,
            appkey:this.__shareID.sina.id, /**你申请的应用appkey,显示分享来源(可选)*/
            title:this.__title, /**分享的文字内容(可选，默认为所在页面的title)*/
            pic:this.__pic, /**分享图片的路径(可选)*/
            ralateUid:this.__shareID.sina.ralateUid, /**关联用户的UID，分享微博会@该用户(可选)*/
            language:'zh_cn' /**设置语言，zh_cn|zh_tw(可选)*/
        }
        var arr = [];
        for( var tmp in param ){
            arr.push(tmp + '=' + encodeURIComponent( param[tmp] || '' ) )
        }
        url = 'http://service.weibo.com/share/share.php?' + arr.join('&');
        g.open(url, "_blank", this.__window); 
    }

    sharePro.__shareRenren = function(){
        var rrShareParam = {
            api_key:this.__shareID.renren,
            resourceUrl : '',   //分享的资源Url
            srcUrl : this.__url,    //分享的资源来源Url,默认为header中的Referer,如果分享失败可以调整此值为resourceUrl试试
            pic : this.__pic,       //分享的主题图片Url
            title : this.__topic,     //分享的标题
            description : this.__description    //分享的详细描述
        };
        var hl = location.href.indexOf('#');
        var resUrl = (hl == -1 ? location.href : location.href.substr(0, hl));
        var shareImgs = "";
        var getParam = function(param) {
            param = param || {};
            param.api_key = param.api_key || '';
            param.resourceUrl = param.resourceUrl || resUrl;
            param.title = param.title || '';
            param.pic = param.pic || '';
            param.description = param.description || '';
            if (resUrl == param.resourceUrl) {
                param.images = param.images || shareImgs; //一般就是当前页面的分享,因此取当前页面的img
            }
            param.charset = param.charset || '';
            return param;
        }
        var submitUrl = 'http://widget.renren.com/dialog/share';
        var p = getParam(rrShareParam);
        var prm = [];
        for (var i in p) {
            if (p[i])
                prm.push(i + '=' + encodeURIComponent(p[i]));
        }
        var url = submitUrl + "?" + prm.join('&'),
        wa = 'width=700,height=650,left=0,top=0,resizable=yes,scrollbars=1';
        g.open(url, 'renren', wa);
    }
    sharePro.__shareDouban = function(){
        var s1=window.getSelection;
        var s2=document.getSelection;
        var s3=document.selection;
        s=s1?s1():s2?s2():s3?s3.createRange().text:'';
        var param = {
                url:this.__url,
                title:this.__topic,
                images:this.__pic,
                sel:s
            },
            url = '',
            arr = [];
        for( var tmp in param ){
        arr.push(tmp + '=' + encodeURIComponent( param[tmp] || '' ) )
        }
        url='http://www.douban.com/recommend/?'+arr.join('&');
        g.open(url,'douban',this.__window);
    }

	function shareUI(_ops){
		return new ShareUI(_ops);
	};
	_oc.ShareUI = shareUI;
	return _oc;
}(openCourse||{},jQuery,window))