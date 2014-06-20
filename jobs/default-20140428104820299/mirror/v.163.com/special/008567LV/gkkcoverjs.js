jQuery(document).ready(function() {
    var _jq = jQuery,
        _oc = openCourse
        _biTracks = _jq('.downbtn');
    _oc.cb = _oc.cb || {};
    //下载登陆判断
    var _onDownloadVideo = function(event){
        event.preventDefault();
        var _href = _jq(this).get(0).href;
        if ( !! _oc.util.isLogin()) {
            window.open(_href,'_blank');
        } else {
            _oc.ui.loginui();
        }
    };
    $(document).on('click','.downbtn',_onDownloadVideo);
    $(document).on('click','.download-kejian',_onDownloadVideo);
    _oc.cb.cbCollectionHandle = function(_data) {
        if (_data.result === true) {
            if (_data.store === true) {
                _jq('#j-collect').data('isStored', true);
                _jq('#j-collect').removeClass('ckcoll f-hide');
                _jq('#j-collect').addClass('ckcoll1');
                _jq('#j-collect').html('取消收藏');
            } else if (_data.store === false) {
                _jq('#j-collect').data('isStored', false);
                _jq('#j-collect').removeClass('ckcoll1');
                _jq('#j-collect').addClass('ckcoll f-hide');
                _jq('#j-collect').html('收藏');
            };
        };
    };
    /* 用于微博 */
    var param = {
        url: window.location.href,
        key: 'OE00SVvHa0nHgkut',
        /*来源申请*/
        topics: '网易公开课'
    }
    var temp = [];
    for (var p in param) {
        temp.push(p + '=' + encodeURIComponent(param[p] || ''))
    }
    var _weibloc = _jq('#navbt2');
    _weibloc.html('<iframe src="http://api.t.163.com/component/comment?' + temp.join('&') + '" width="650" height="460" frameborder="0" scrolling="no"></iframe>');
    _jq('.u-seemore').click(function() {
        _jq('#list1').hide();
        _jq('#list2').show();
        _jq(this).hide();
    })
    _jq('.w-mnav>li').mouseover(function() {
        _jq('.w-mnav>li').removeClass("on");
        _jq(this).addClass("on");
        var rel = _jq(this).attr('rel');
        var _target = _jq('div#' + rel);
        _jq('div.m-tag2').hide();
        _target.show();
    });
    var _cancelStore = function() {
        var timeshow = _oc._$$util._showTime();
        var user = _oc.util.isLogin();
        if ( !! user) {
            _jq('#cancelStoreForm').attr('action', "http://so.open.163.com/movie/store/webdelstore.do");
            _jq('#cancelStoreForm>input[name=ursid]').attr('value', user);
            _jq('#cancelStoreForm>input[name=playids]').attr('value', _oc.getPlay().id);
            _jq('#cancelStoreForm').submit();
            _oc.showOpenTip('取消收藏成功', 0, 160);
            setTimeout(function() {
                window.location.reload();
            }, 700);
        } else {
            _oc.ui.loginui();
        }
    }
    //_jq('#j-collected').bind('click',_cancelStore);
    //课程收藏
    _jq('#j-collect').on('click', null, function(event) {
        var timeshow = _oc._$$util._showTime();
        var user = _oc.util.isLogin();
        var _isStored = _jq('#j-collect').data('isStored');
        if ( !! user) {
            if (!_isStored) {
                _jq('#addForm').attr('action', "http://so.open.163.com/movie/store/webaddstore.do");
                _jq('#addForm>input[name=ursid]').attr('value', user);
                _jq('#addForm>input[name=playid]').attr('value', _oc.getPlay().id);
                _jq('#addForm>input[name=storetime]').attr('value', timeshow);
                _jq('#addForm').submit();
                _oc.showOpenTip('收藏成功', 0, 130);
                setTimeout(function() {
                    window.location.reload();
                }, 700);
            } else {
                _jq('#cancelStoreForm').attr('action', "http://so.open.163.com/movie/store/webdelstore.do");
                _jq('#cancelStoreForm>input[name=ursid]').attr('value', user);
                _jq('#cancelStoreForm>input[name=playids]').attr('value', _oc.getPlay().id);
                _jq('#cancelStoreForm').submit();
                _oc.showOpenTip('取消收藏成功', 0, 160);
                setTimeout(function() {
                    window.location.reload();
                }, 700);
            }
        } else {
            _oc.ui.loginui();
        }
    });
    //查询课程是否被收藏或者加入云课堂    
    var _submitQuery = function() {
        var _colStatusForm = _jq('#colStatusForm');
        var user = _oc.util.isLogin();
        _colStatusForm.attr('action', 'http://so.open.163.com/open/dynamic/cinfo.do');
        _jq('#colStatusForm>input[name=ursid]').attr('value', user);
        _jq('#colStatusForm>input[name=plid]').attr('value', _oc.getPlay().id);
        _colStatusForm.submit();
    }
    var _bindTracks = function() {
        for (var i in _biTracks) {
            var _item = _biTracks.eq(i);
            _item.on('click', function() {
                var _playName = _jq('.m-cdes>h2').html() + '>' + _jq(this).parent().parent().find('.u-ctitle>a').html(),
                    _opt = {
                        mid: _jq(this).attr('id'),
                        plid: _oc.getPlay().id,
                        url: window.location.href,
                        durl: _jq(this).attr('href'),
                        name: _playName
                    };
                _oc._$$util._BItrack(_opt);
            });
        }
    };
    var _initStatus = function() {
        var user = _oc.util.isLogin();
        var _taskLink = _jq('#j-toYunTask')
        if ( !! _taskLink) {
            _taskLink.attr('href', 'http://study.163.com/course/openCourseDetail.htm?pid=' + _oc.getPlay().id);
        }
        if ( !! user) {
            _submitQuery();
        } else {
            //_jq('#j-collected').hide();
            //_jq('#j-addedYun').hide();
            _jq('#j-collect').data('isStored', false);
            _jq('#j-addYunBtn').data('isAdded', false);
        }
        _bindTracks();
    };
    //封面页分享当前页url
    window.jiathis_config.url = location.href;
    _initStatus();
    //pageView
    var _cookies = document.cookie.split('; '),
        _pageFlag = 0,
        _uuid = null,
        _ursid = null,
        _ts = +new Date();
    for (var i = 0; i < _cookies.length; i++) {
        if (_cookies[i].indexOf('__oc_uuid') == 0) {
            _uuid = _cookies[i].split('=')[1];
        };
    };
    if ( !! _oc.util.isLogin()) {
        _ursid = _oc.util.isLogin();
    }
    if (location.href.indexOf('recomend=1') >= 0) {
        _pageFlag = 1;
    }
    _oc._$$util._userTrackerView({
        pf: _pageFlag,
        uuid: _uuid,
        ursid: _ursid,
        pid: _oc.getPlay().id,
        ts: _ts
    });
});