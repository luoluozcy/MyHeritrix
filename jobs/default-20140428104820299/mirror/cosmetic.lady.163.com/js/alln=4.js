window.cosmetic = {}  

/**
* cookie验证
* 要求：需要出现提示浮层的区域，被包含在class="js_tooltipArea"的区域中，这个标记在domready的时候要求已经存在。
*/
function getLoginInfo(Y) {
    var reault = {
        isLogin : false,
        userId : null
    };
    var pInfo = Y.Cookie.get('P_INFO');
    if (pInfo) {
        pInfo = pInfo.split('|');
        reault.userId = pInfo[0];
        if (pInfo[2] == 1 || (0 == pInfo[2] && Boolean(Y.Cookie.get('S_INFO')))) {
            reault.isLogin = true;
        }
    }
    return reault;
}
 
/**
* 提示浮层 t
* 要求：需要出现提示浮层的区域，被包含在class="js_tooltipArea"的区域中，这个标记在domready的时候要求已经存在。
*/
getYUI().use('node', 'event-mouseenter', 'event-delegate', 'overlay', function(Y){
    
    var Tooltip = function(){
        var t = this, timer;
        t.overlayNode = Y.Node.create('<div class="tooltip"></div>');
        t.overlay = new Y.Overlay({
            srcNode : t.overlayNode,
            zIndex : 900,
            visible : false,
            render : true
        });
        
        Y.delegate('mouseenter', function(e){
            var content = e.currentTarget.getAttribute('tooltip');
            if (timer) {        //取消overlay的mouseleave
                timer.cancel();
                timer = false;
            } else {
                timer = Y.later(200, this, function(){
                    if(e.currentTarget.hasAttribute('tooltiplink')){
                        t.overlayNode.setContent('<a href="' + e.currentTarget.getAttribute('tooltiplink') + '" target="_blank">' + content + '</a>');
                    } else {
                        t.overlayNode.setContent(content);
                    }
                    t.overlay.align(e.currentTarget, ['lc', 'rc'])
                    t.overlay.show();
                    timer = false;
                });
            }
        }, '.js_tooltipArea', '[tooltip]');
        Y.delegate('mouseleave', function(e){
            if (timer) {    //取消delegate的mouseenter
                timer.cancel();
                timer = false;
            } else {
                timer = Y.later(200, this, function(){
                    t.overlay.hide();
                    timer = false;
                });
            }
        }, '.js_tooltipArea', '[tooltip]');
        
        t.overlayNode.on('mouseenter', function(){
            if (timer) {    //取消delegate的mouseleave
                timer.cancel();
                timer = false;
            }
        });
        t.overlayNode.on('mouseleave', function(){
            timer = Y.later(200, this, function(){
                t.overlay.hide();
                timer = false;
            });
        })
        
    };
    Y.on('domready', function(){
        if(Y.all('.js_tooltipArea').size() > 0) {
            new Tooltip();
        }
    });
    
});

/**
* 用户名自动完成
*/
window.cosmetic.userNameSuggest = function(srcNodeID){
    getYUI().use('autocomplete', function(Y){
        var username = Y.one(srcNodeID),
            username_source = ["163.com", "126.com", "vip.126.com", "yeah.net", "188.com", "vip.163.com", "gmail.com", "qq.com", "sina.com", "hotmail.com"],
            fullWidth = 0;
        username.plug(Y.Plugin.AutoComplete, {
            zIndex : 100,
            resultFilters : function(query, results) {
                if(query.indexOf('@') != -1){
                    var domain = query.slice(query.indexOf('@') + 1);
                    return Y.Array.filter(results, function(result) {
                        return result.raw.toLowerCase().indexOf(domain.toLowerCase()) !== -1;
                    });
                } else {
                    return results;
                }
            },
            source : function(query){
                return Y.Array.map(username_source, function(source){
                    if(query.indexOf('@') != -1) {
                        return query.slice(0, query.indexOf('@')) + '@' + source;
                    } else {
                        return query + '@' + source;
                    }
                });
            }
        });
        username.ac.get('boundingBox').addClass('search-brief').setStyle('width', 'auto');
        username.ac.once('queryChange', function(){
            fullWidth = username.get('offsetWidth') - 2 + 'px';
            username.ac.get('contentBox').setStyles({
                'min-width': fullWidth,
                'width': 'auto'
            })
        });
        username.ac.after('results',function(){
            var listTitle = Y.Node.create('<h3 class="aclist-title">请选择或继续输入...</h3>');
            if (Y.UA.ie && Y.UA.ie <= 6) {  
                listTitle.setStyle('width', parseInt(fullWidth) - 5 + 'px');
            }
            username.ac.get('contentBox').one('ul').prepend(listTitle);
        })
    });
}

window.cosmetic.tools = {};
window.cosmetic.tools.hideOverlay = function(overlay, mask){
    getYUI().use('node', function(Y){
        overlay.hide();
        mask.hide();
    });
}
window.cosmetic.tools.resizeOverlayMask = function(mask) {
    getYUI().use('node', function(Y){
        mask.setStyles({
            width : 0,
            height : 0
        }).setStyles({
            width : Y.DOM.docWidth() + 'px',
            height : Y.DOM.docHeight() + 'px'
        });
    })
}

/**
* 模拟alert
*/
window.cosmetic.alert = function(msg){
    getYUI().use('overlay', 'event-resize', 'dd-drag', function(Y){
        var global = window.cosmetic,
            tools = global.tools;
        
        //init
        if(!global.maskNode){
            global.maskNode = Y.Node.create('<div class="overlay-mask" style="display:none;"></div>');
            Y.one('body').insert(global.maskNode, 0);
        }
        if(!global.alertFlag){
            global.alertBox = Y.Node.create('<div class="alertbox left"><div class="alertbox-inner"><div class="alertbox-hd"><span class="alertbox-title">提示</span><a href="" target="_self" class="alertbox-close">关闭</a></div><div class="alertbox-bd">' + msg + '</div><div class="alertbox-ft"><a href="" target="_self" tabindex="1" class="alertbox-btn-ok">确定</a></div></div></div>');
            global.alertOverlay = new Y.Overlay({
                srcNode : global.alertBox,
                zIndex : 1010,
                visible : false,
                render : true
            });
            new Y.DD.Drag({
                dragNode: global.alertBox,
                node: global.alertBox.one('.alertbox-hd')
            });
            global.alertBox.one('.alertbox-close').on('click', function(e){
                e.preventDefault();
                tools.hideOverlay(global.alertOverlay, global.maskNode);
            });
            global.alertBox.one('.alertbox-btn-ok').on('click', function(e){
                e.preventDefault();
                tools.hideOverlay(global.alertOverlay, global.maskNode);
            });
            global.alertFlag = true;
        } else {
            global.alertBox.one('.alertbox-bd').setContent(msg);
        }
        
        //show
        global.maskNode.show();
        if (Y.UA.ie && Y.UA.ie <= 6) {
            tools.resizeOverlayMask(global.maskNode);
            Y.on('windowresize', function() {
                tools.resizeOverlayMask(global.maskNode);
                global.alertOverlay.set('centered', true);
            });
        } else {
            Y.on('windowresize', function() {
                global.alertOverlay.set('centered', true);
            });
        }
        global.alertOverlay.set('centered', true);
        global.alertOverlay.show();
        global.alertBox.one('.alertbox-btn-ok').focus();
        
    });
}



/**
* 模拟confirm
*/
window.cosmetic.confirm = function(param){
    getYUI().use('overlay', 'event-resize', 'dd-drag', function(Y){
        var global = window.cosmetic,
            tools = global.tools;
        
        //init
        if(!global.maskNode){
            global.maskNode = Y.Node.create('<div class="overlay-mask" style="display:none;"></div>');
            Y.one('body').insert(global.maskNode, 0);
        }
        if(!global.confirmFlag){
            global.confirmBox = Y.Node.create('<div class="alertbox left"><div class="alertbox-inner"><div class="alertbox-hd"><span class="alertbox-title">提示</span><a href="" target="_self" class="alertbox-close">关闭</a></div><div class="alertbox-bd">' + param.msg + '</div><div class="alertbox-ft"><a href="" target="_self" tabindex="2" class="alertbox-btn-cancel">取消</a><a href="" target="_self" tabindex="1" class="alertbox-btn-ok">确定</a></div></div></div>');
            global.confirmOverlay = new Y.Overlay({
                srcNode : global.confirmBox,
                zIndex : 1010,
                visible : false,
                render : true
            });
            new Y.DD.Drag({
                dragNode: global.confirmBox,
                node: global.confirmBox.one('.alertbox-hd')
            });
            global.confirmBox.one('.alertbox-close').on('click', function(e){
                e.preventDefault();
                tools.hideOverlay(global.confirmOverlay, global.maskNode);
                param.on.cancel();
            });
            global.confirmBox.one('.alertbox-btn-ok').on('click', function(e){
                e.preventDefault();
                tools.hideOverlay(global.confirmOverlay, global.maskNode);
                param.on.ok();
            });
            global.confirmBox.one('.alertbox-btn-cancel').on('click', function(e){
                e.preventDefault();
                tools.hideOverlay(global.confirmOverlay, global.maskNode);
                param.on.cancel();
            });
            global.confirmFlag = true;
        } else {
            global.confirmBox.one('.alertbox-bd').setContent(param.msg);
        }
        
        //show
        global.maskNode.show();
        if (Y.UA.ie && Y.UA.ie <= 6) {
            tools.resizeOverlayMask(global.maskNode);
            Y.on('windowresize', function() {
                tools.resizeOverlayMask(global.maskNode);
                global.confirmOverlay.set('centered', true);
            });
        } else {
            Y.on('windowresize', function() {
                global.confirmOverlay.set('centered', true);
            });
        }
        global.confirmOverlay.set('centered', true);
        global.confirmOverlay.show();
        global.confirmBox.one('.alertbox-btn-ok').focus();
        
    });
}


/**
* 登录框与已登录信息
*/
function loadUserinfo() {
    var callback = function(Y) {
        var loginInfo = getLoginInfo(Y),
            userId = loginInfo.userId,
            isLogin = loginInfo.isLogin,
            rightLogin = Y.one('#personalCenterBox1'),
            msghide_flag = Y.Cookie.get('msghide_flag',{path:'/'}),
            showLogin = function(){
                var loginBackUrl = Y.one('#loginBackUrl'),
                    loginBackUrl2 = Y.one('#loginBackUrl2');
                    
                if (rightLogin) {
                    rightLogin.one('> div').removeClass('hidden');
                    if (userId) {
                        Y.one('#username').set('value', userId);
                    }
                    new window.cosmetic.userNameSuggest('#username');
                }
                
                if (loginBackUrl) {
                    loginBackUrl.set('value', document.location.href);
                }
                
                if (loginBackUrl2) {
                    loginBackUrl2.set('value', document.location.href);
                    if (userId) {
                        Y.one('#username2').set('value', userId);
                        new window.cosmetic.userNameSuggest('#username2');
                    }
                }
            };
            
        if (isLogin) {
            var loginSuccess = function(ioId, o) {
                var userdata = Y.JSON.parse(o.responseText);
                if (userdata.result == 1) {
                    var data = userdata.data,
                        productLogin = Y.one('#personalCenterBox2'),
                        postLogin = Y.one('#personalCenterBox3'),
                        tryApplyBtns = Y.all('[costpoint]'),
                        html, tmpNode, i = 0;
                    
                    var tturl = document.location.href;
                    if(document.location.href.indexOf('?') != -1){
                        var urls = tturl.split('?');
                        tturl = urls[0];
                    }
                    function parseObj(hash) {
                      var rhash = /[?&]([^&=]+)=([^&=]+)/ig,
                        a = rhash.exec(hash),
                        o = {};   
                      while (a) {
                        o[a[1]] = a[2];
                        a = rhash.exec(hash);
                      }   
                      return o;
                    }
                    var param = parseObj(window.location.href);
                    if(param['exchange']){
                        data.logoutUrl = 'http://reg.163.com/Logout.jsp?username=' + userId + '&url=' + tturl + '?exchange=' + htmlEncode(param['exchange']);
                    }else{
                        data.logoutUrl = 'http://reg.163.com/Logout.jsp?username=' + userId + '&url=' + tturl;
                    }
                    data.userUrl = '/user/index';
                    data.postUrl = '/user/post';
                    data.favorProductUrl = '/user/favorProduct';
                    data.messageUrl = '/user/msg';
                    data.favorPostUrl = '/user/favorPost';
                    data.editProfileUrl = '/user/profile/edit';
                    
                    if (rightLogin) {
                        html = [];
                        html.push('<h2 class="title">个人中心</h2><a href="{logoutUrl}" target="_self" class="logoutlink">[退出]</a><div class="bd"><div class="mt-5 clearfix"><div class="left"><a href="{userUrl}"><img src="{face}" width="80" height="80" alt="{userName}" /></a></div><div class="info ml-10"><h3 class="breakall"><span class="nowrap">用户：</span><a href="{userUrl}">{userName}</a></h3>');
                        if(data.points == 0){
                            html.push('<h3><span tooltip="花币是什么？" tooltiplink="/user/help/rule.do">花币：{points}</span> <a class="getflowerm" href="#">获取花币</a></h3>');
                        }
                        else{html.push('<h3><span tooltip="花币是什么？" tooltiplink="/user/help/rule.do">花币：{points}</span></h3>')}
                        html.push('<h3 class="imgreset"><span title="{level}级">等级：{levelImage}</span></h3></div></div><h4 class="mt-5 t-lh17"><a href="{postUrl}" class="cDGray">我发表的心得（{postCount}）</a></h4 class="t-lh17"><h4><a href="{favorProductUrl}" class="cDGray">我想用的宝贝（{favorProductCount}）</a></h4>')
                        
                        
                        html.push('<h4 class="t-lh17"><a href="/user/trial" class="cDGray">我的试用（' + data.applyingN + '）</a></h4>');
                        
                        
                        if(data.reportApplyIds){
                            html.push('<h4 class="t-lh17"><a href="/user/trial?status=2" class="cDGray">待提交试用报告（' + data.reportApplyIds.length + '）</a></h4>');
                        }
                        if (data.editProfile == 1) {
                            var randomNum = Math.floor((Math.random()*100)+1);
                            if(randomNum <= 20){ html.push('<h4 class="t-lh17"><a href="http://t.163.com" class="editlink">进入我的微博</a></h4>'); }
                            else{ html.push('<a href="{editProfileUrl}" class="editlink">快去完善资料吧</a>');}
                        }
                        else {
                            html.push('<h4 class="t-lh17"><a href="http://t.163.com" class="editlink">进入我的微博</a></h4>');
                        }
                        html.push('<a href="{userUrl}" class="gousercenter">进去个人中心</a></div>');
                        rightLogin.empty();
                        rightLogin.removeClass('userlogin').addClass('userwelcome');
                        rightLogin.setContent(Y.substitute(html.join(''), data));
                    }
                    
                    if (productLogin) {
                        html = '<div class="left"><a href="{userUrl}">{userName}</a> | <a href="{postUrl}">我的心得（{postCount}篇）</a> | <a href="{favorProductUrl}">我想用的宝贝（{favorProductCount}个）</a> | <a href="{favorPostUrl}">我喜欢的心得（{favorPostCount}篇）</a> </div><a href="{logoutUrl}" target="_self" class="ui-btn10 right">退出</a>';
                        productLogin.empty();
                        productLogin.setContent(Y.substitute(html, data));
                    }
                    
                    if (postLogin) {
                        html = '<div class="left"><a href="{userUrl}">{userName}</a> | <a href="{postUrl}">我的心得（{postCount}篇）</a> | <a href="{favorProductUrl}">我想用的宝贝（{favorProductCount}个）</a> | <a href="{favorPostUrl}">我喜欢的心得（{favorPostCount}篇）</a> </div><a href="{logoutUrl}" target="_self" class="ui-btn05 mr-10 right">退出</a>';
                        postLogin.empty();
                        postLogin.setContent(Y.substitute(html, data));
                    }
                    
                    //首页喜欢心得
                    if(data.favorPostIds){
                        for( i = 0; i < data.favorPostIds.length; i++ ){
                            tmpNode = Y.one('#fav_' + data.favorPostIds[i]);
                            tmpNode.setContent('点击取消喜欢');
                            tmpNode.addClass('color').removeClass('btn');
                        }
                        Y.all('.total').each(function(total, i){
                            total.setContent(data.favorCounts[i]);
                        });
                    }
                    
                    //提交报告按钮
                    if(data.reportApplyIds){
                        for( i = 0; i < data.reportApplyIds.length; i++ ){
                            tmpNode = Y.all('.js_applyPost_' + data.reportApplyIds[i]);
                            if(tmpNode.size() > 0) {
                                tmpNode.hide();
                                Y.all('.js_applySubmit_' + data.reportApplyIds[i]).show();
                            }
                        }
                    }
                    
                    if(!msghide_flag && data.messageCount!='0' && data.msgN!="0"){
                        newmsgTips(data.msgN);
                    }
                } else {
                    showLogin();
                }
            };
            
            var userinfo_url = '/user/profile/userinfo.json';
            if (typeof index_post_ids != 'undefined') {
                userinfo_url = '/user/profile/userinfo.json?index_post_ids=' + index_post_ids;
            }
            
            Y.io(userinfo_url, {
                method : 'GET',
                on : {
                    success : Y.bind(loginSuccess, this),
                    failure : Y.bind(showLogin, this)
                }
            });
        } else {
            showLogin();
        }
    };
    getYUI().use('cookie', 'io-base', 'json-parse', 'substitute', 'node', callback);
}
/* 登陆框调用 */
loadUserinfo();

/**
* 弹出登陆框
* 要求：调用这个函数的模块必须引用：cookie, event-resize, overlay
*/

function showLoginBox(Y, linkNode, userId) {
    
    if(typeof(hasLoginOverlay) == 'undefined') {
        window.popLoginMask = Y.Node.create('<div class="overlay-mask" style="display:none;"></div>');
        Y.one('body').insert(popLoginMask, 0);
        window.hasLoginOverlay = true;
        window.popLoginBox = Y.Node.create('<div class="poploginbox yui3-overlay-loading" id="popLoginBox"><div class="content"><div class="hd"><h2 class="title">登录网易通行证</h2><span class="closebtn">关闭</span></div><div class="bd"><form name="loginForm" id="popLoginForm" action="https://reg.163.com/logins.jsp" method="post" target="_self"><input type="hidden" name="url" id="popLoginUrl" /><input type="hidden" name="product" value="content" /><input type="hidden" name="type" value="1" /><div class="clearfix"><label class="labeltext" for="popLoginUsername">账号：</label><input type="text" class="inputtext" name="username" id="popLoginUsername" tabindex="7" /></div><div class="clearfix mt-20"><label class="labeltext" for="popLoginPassword">密码：</label><input type="password" class="inputtext" name="password" id="popLoginPassword" tabindex="8" /></div><div class="tips clearfix"><div class="left"><input type="checkbox" class="inputcheckbox" id="popLoginSave" name="savelogin" value="1" tabindex="9" /><label class="left" for="popLoginSave">记住登录状态</label></div><span class="right"><a class="cBlue" href="http://reg.163.com/getpasswd/RetakePassword.jsp">忘记密码？</a></span></div><div class="clearfix"><input type="submit" class="loginbtn" value="登录" /><a href="http://reg.163.com/reg/reg.jsp?product=content" class="regbtn cBlue">注册网易通行证 &raquo;</a></div></form></div></div></div>');
        window.loginOverlay = new Y.Overlay({
            srcNode : popLoginBox,
            zIndex : 1010,
            visible : false,
            render : true
        });
        window.popLoginForm = Y.one('#popLoginForm'),
        window.popLoginUrl = Y.one('#popLoginUrl'),
        window.popLoginUsername = Y.one('#popLoginUsername');
        new window.cosmetic.userNameSuggest('#popLoginUsername');
        Y.one('#popLoginBox .closebtn').on('click', function() {
            hideloginbox();
        });
    }

    if (linkNode.get('target') != '_self') {
        popLoginForm.set('target', '_blank');
    } else {
        popLoginForm.set('target', '_self');
    }
    var loginUrl = linkNode.getAttribute('loginurl');
    if (!loginUrl) {
        loginUrl = document.location.href;
    }
    popLoginUrl.set('value', loginUrl);

    poploginbox();

    if (userId) {
        popLoginUsername.set('value', userId);
        popLoginUsername.select();
    } else {
        popLoginUsername.focus();
    }

    function resizeOverlayMask() {
        popLoginMask.setStyles({
            width : 0,
            height : 0
        }).setStyles({
            width : Y.DOM.docWidth() + 'px',
            height : Y.DOM.docHeight() + 'px'
        });
    }

    function poploginbox() {
        
        popLoginMask.show();
        
        if (Y.UA.ie && Y.UA.ie <= 6) {
            popLoginMask.setStyle('position', 'absolute');
            resizeOverlayMask();
            Y.on('windowresize', function() {
                resizeOverlayMask();
                loginOverlay.set('centered', true);
            });
        } else {
            Y.on('windowresize', function() {
                loginOverlay.set('centered', true);
            });
        }

        loginOverlay.set('centered', true);
        loginOverlay.show();
    }

    function hideloginbox() {
        loginOverlay.hide();
        popLoginMask.hide();
    }
}

(function initLoginUrl() {
    var callback = function(Y) {
        var domready = function() {
            var logins = Y.all('[loginurl]'),
                loginInfo = getLoginInfo(Y),
                userId = loginInfo.userId,
                isLogin = loginInfo.isLogin;

            logins.each(function(btn) {
                btn.on('click', function(e) {
                    e.preventDefault();
                    if (!isLogin) {
                        showLoginBox(Y, btn, userId);
                    } else {
                        if(btn.hasClass('try-btn-convert')){
                            var producttrialId = btn.getAttribute('producttrialid')
                            window.cosmetic.convertVerifyAlert(producttrialId);
                        }else{
                            if (btn.get('target') != '_self') {
                                window.open(this.getAttribute('loginurl'));
                            } else {
                                window.location.href = this.getAttribute('loginurl');
                            }
                        }
                    }
                });
            });
        };

        Y.on('domready', domready);
    };
    getYUI().use('node', 'cookie', 'io-base', 'event-resize', 'overlay', callback);
})();


function fixDataBoxImgboxIE6() {
    getYUI().use('node', function(Y){  //IE6心得预览图片框高度限制
        if(Y.UA.ie && Y.UA.ie <= 6){
            var imgboxs = Y.all('.dataBox-main .imgbox');
            if(imgboxs.size() > 0) {
                imgboxs.each(function(imgbox){
                    if(!imgbox.one('img')){
                        imgbox.setStyle('height', '0');
                    } else {
                        imgbox.setStyle('height', imgbox.getComputedStyle('max-height'));
                    }
                });
            }
        }
    });
}

function fixEndpageImgIE6() {
    getYUI().use('node', function(Y){  //IE6心得最终页图片宽度限制
        if(Y.UA.ie && Y.UA.ie <= 6){
            var imgs = Y.all('.endpage .content img');
            if(imgs.size() > 0){
                var maxwidth = parseInt(Y.one('.endpage .content').getComputedStyle('width'));
                imgs.each(function(img){
                    if(img.get('width') > maxwidth){
                        img.setStyle('width', '100%')
                    }
                });
            }
        }
    });
}

(function(){
    getYUI().use('node', function(Y){
        Y.on('domready', function(){
            fixDataBoxImgboxIE6();
            fixEndpageImgIE6();
        });
    });
})();




/**
 * 喜欢心得
 */
function favorPost() {
    var callback = function(Y) {
        var loginInfo = getLoginInfo(Y),
            userId = loginInfo.userId,
            isLogin = loginInfo.isLogin;

        var ilikeit = Y.all('.ilikeit'), ilikeituri = '/post/favor';
        ilikeit.each(function() {
            var t = this;
            t.one('a').on('click', function(e) {
                e.preventDefault();
                if (!isLogin) {
                    showLoginBox(Y, this, userId);
                    return false;
                }

                var total = t.one('.total'),
                    tmp = total.get('innerHTML'),
                    btns = Y.all('.ilikeit a[value=' + this.getAttribute('value') + ']');

                if (this.hasClass('color')) {
                    var cfg_unlike = {
                        method : 'POST',
                        data : 'flag=0&postId=' + this.getAttribute('value'),
                        on : {
                            success : Y.bind(unlikeSuccess, this, btns, tmp)
                        }
                    }, request = Y.io(ilikeituri, cfg_unlike);

                } else {
                    var cfg_like = {
                        method : 'POST',
                        data : 'flag=1&postId=' + this.getAttribute('value'),
                        on : {
                            success : Y.bind(likeSuccess, this, btns, tmp)
                        }
                    }, request = Y.io(ilikeituri, cfg_like);
                }
            });
        });

        function unlikeSuccess(btns, tmp, ioId, o) {
            if (o.responseText == 1) {
                btns.addClass('btn').removeClass('color');
                btns.setContent('喜欢这篇心得');
                tmp--;
                Y.each(btns.get('parentNode'), function(item) {
                    item.one('.total').setContent(tmp);
                });
            }
        }

        function likeSuccess(btns, tmp, ioId, o) {
            if (o.responseText == 1) {
                btns.addClass('color').removeClass('btn');
                btns.setContent('点击取消喜欢');
                tmp++;
                Y.each(btns.get('parentNode'), function(item) {
                    item.one('.total').setContent(tmp);
                });
            }
        }
    };

    getYUI().use('node', 'cookie', 'io-base', 'event-resize', 'overlay', callback);
}

function checkLoginHash() {
    var hash = window.location.hash;
    if (hash === '#login') {
        getYUI().use('node', 'cookie', 'io-base', 'event-resize', 'overlay', function(Y) {
            var loginInfo = getLoginInfo(Y),
                userId = loginInfo.userId,
                isLogin = loginInfo.isLogin;
            if (!isLogin) {
                showLoginBox(Y, Y.one('[loginurl]'), userId);
            }
        });
    }
}

/**
 * 上传头像默认配置
 */
function getDefaultAvatarUploadConfig() {
    return {
        successHandler : function(json) {
            switch (json.code) {
            case 1:
                cosmetic.alert('上传成功');
                break;
            case -1:
                cosmetic.alert('您没有操作权限，请先登录');
                break;
            case -2:
                cosmetic.alert('上传文件大小不能超过2M');
                break;
            default:
                cosmetic.alert('系统繁忙，请稍后再试。');
                break;
            }
        },
        errorHandler : function(data) {
            cosmetic.alert('系统繁忙，请稍后再试。');
        },
        avatarSwfUrl : '/upload/avatarupload.swf',
        avatarSwfVars : {
            uploadUrl : '/upload/avatar',
            imageRanges : '300|300|128|128|80|80|50|50'
        },
        avatarSwfParams : {
            men : 'false',
            quality : 'high',
            bgcolor : '#ffffff',
            wmode : 'opaque'
        }
    };
}

/**
 * 微博
 */
function initTblog() {
    var iframe = document.getElementById('TBlogIframeProxy');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'TBlogIframeProxy';
        iframe.style.display = 'none';
        iframe.src = 'http://t.163.com/crossdomain.html';
        document.body.appendChild(iframe);
    }

    var callback = function(Y) {
        var tblogNodes = Y.all('[tblog]');
        tblogNodes && tblogNodes.each(function(btn) {
            btn.before('click', function(e) {
                if (!this.getAttribute('href')) {
                    this.set('href', getTBlogAddr(this.getAttribute('tblog')));
                }
            });
        });

        function getTBlogAddr(userId) {
            document.domain = location.hostname.replace(/^.*\.([\w]+\.[\w]+)$/, '$1');
            var proxy = iframe.contentWindow,
                xhr = proxy.gx();
            xhr.open('GET', 'http://t.163.com/service/getScreenNames?crossdomain=1&emails=' + userId, false);
            xhr.send(null);
            var result = xhr.responseText,
                tBlogAddr = 'http://t.163.com/';
            if (result) {
                eval(result);
                if (resultStatus && resultStatus != -1 && resultStatus.length > 0) {
                    tBlogAddr += resultStatus[0];
                }
            }
            return tBlogAddr;
        }
    };

    getYUI().use('node', callback);
}

function getYUI() {
    var yuiLoaderConfig = {
        combine : true,
        comboBase : 'http://img1.cache.netease.com/service/combo?'
    };
    return YUI(yuiLoaderConfig);
}

/**
 * 修改帖子
 */
function showEditPost(postId, fromProfileEdit) {
    jQuery.ajax({
                url : '/user/post/editPost.do?postId=' + postId + '&fromProfileEdit=' + fromProfileEdit,
                type : "GET",
                dataType : 'json',
                timeout : 5000,
                error : function() {
                    cosmetic.alert("抱歉，服务器出现错误，请重试！");
                },
                success : function(data) {
                    if (data.result) {
                        var isIE = (document.all) ? true : false;
                        var isIE6 = isIE && ([ /MSIE (\d)\.0/i.exec(navigator.userAgent) ][0][1] == 6);
                        var newbox = document.getElementById('smallLay');
                        newbox.style.zIndex = "110";
                        newbox.style.display = "block";
                        newbox.style.position = !isIE6 ? "absolute" : "absolute";
                        var _scrolltop = document.body.scrollTop != 0 ? document.body.scrollTop
                                : document.documentElement.scrollTop;
                        var _clientheight = document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight
                                : document.documentElement.clientHeight

                        newbox.style.top = _scrolltop + _clientheight / 2 + "px"
                        newbox.style.left = "50%";
                        newbox.style.marginTop = -newbox.offsetHeight / 2 + "px";
                        newbox.style.marginLeft = -newbox.offsetWidth / 2 + "px";

                        var layer = document.getElementById('layer');
                        if (!layer) {
                            layer = document.createElement("div");
                            layer.id = "layer";
                            layer.style.width = layer.style.height = "100%";
                            layer.style.position = !isIE6 ? "fixed" : "absolute";
                            layer.style.top = layer.style.left = 0;
                            layer.style.backgroundColor = "#000";
                            layer.style.zIndex = "100";
                            layer.style.opacity = "0.6";
                            document.body.appendChild(layer);
                        }
                        layer.style.display = '';

                        function layer_iestyle() {
                            layer.style.width = Math.max(document.documentElement.scrollWidth,
                                    document.documentElement.clientWidth)
                                    + "px";
                            layer.style.height = Math.max(document.documentElement.scrollHeight,
                                    document.documentElement.clientHeight)
                                    + "px";
                        }
                        function newbox_iestyle() {
                            newbox.style.marginTop = document.documentElement.scrollTop - newbox.offsetHeight / 2
                                    + "px";
                            newbox.style.marginLeft = document.documentElement.scrollLeft - newbox.offsetWidth / 2
                                    + "px";
                        }
                        if (isIE) {
                            layer.style.filter = "alpha(opacity=60)";
                        }

                        if (isIE6) {
                            layer_iestyle();
                            newbox_iestyle();
                            window.attachEvent("onscroll", function() {
                                newbox_iestyle();
                            });
                            window.attachEvent("onresize", layer_iestyle);
                        }

                        layer.onclick = function() {
                            newbox.style.display = "none";
                            layer.style.display = "none";
                        };
                        var closediv = document.getElementById("closediv");
                        closediv.onclick = function() {
                            newbox.style.display = "none";
                            layer.style.display = "none";
                        };

                        // 返回结果
                        jQuery('#editPostDiv').html(data.data.html);
                        // 初始化编辑器
                        editor = initEditor();
                        editor.insert({
                            html : data.data.content
                        });
                    } else {
                        cosmetic.alert("抱歉，服务器出现错误，请重试！");
                    }
                }
            });
}

function postEditSubmit(postId, fromProfileEdit) {
    var title = $('#editorTitle').val();
    if (!title) {
        cosmetic.alert('亲，给文章定个标题吧');
        return;
    }

    // 复制帖子内容
    var content = editor.getContent();
    var lowContent = content.toLowerCase().replace(/\n/gi, '').replace(/\r/gi, '').replace(/\\s+/gi, '').replace(
            /<(\/*)(br|div)>/gi, '').replace(/(^\s+)|(\s+$)/g, '');
    if (lowContent == '') {
        cosmetic.alert('亲，给心得写些内容吧');
        return;
    }

    var buyFrom = '';
    $('#buyFromDiv > input').each(function() {
        if ($(this).attr("checked")) {
            buyFrom = $(this).val();
        }
    });

    var buyPrice = $('#buyPrice').val();

    jQuery.ajax({
        url : '/user/post/editPostSubmit',
        type : "POST",
        data : {
            'postId' : postId,
            'title' : title,
            'content' : content,
            'buyFrom' : buyFrom,
            'buyPrice' : buyPrice
        },
        dataType : 'json',
        timeout : 5000,
        error : function() {
            cosmetic.alert("抱歉，服务器出现错误，请重试！");
        },
        success : function(data) {
            if (data.result) {
                var htmls = data.data;
                $('#title' + postId).html(htmls.title);
                if(fromProfileEdit == 1) {
                    $('#content' + postId).html(htmls.allContent);
                }else {
                    $('#content' + postId).html(htmls.content);
                }
                $('#buyFrom' + postId).html(htmls.buyFrom);
                $('#buyPrice' + postId).html(htmls.buyPrice);
                postEditCancel();
            } else {
                cosmetic.alert("抱歉，服务器出现错误，请重试！");
            }
        }
    });
}

function postEditCancel() {
    document.getElementById('smallLay').style.display = "none";
    document.getElementById('layer').style.display = "none";
}

function replySubmit() {
    var callback = function(Y) {
        if (!getLoginInfo(Y).isLogin) {
            cosmetic.alert('请先登录吧~~');
        } else {
            var content = document.getElementById('postContent');
            if (content.value) {
                document.getElementById('postForm').submit();
            } else {
                cosmetic.alert('亲，写些内容吧');
                content.focus();
            }
        }
    };
    getYUI().use('cookie', callback);
}

/**
 * 分享到多平台
 */

window.ShareBtnsWidget = function(config) {
    var t = this;
    t.config = {
        srcNode: t.setDefault(config.srcNode, 'body'), /* 获取按钮的范围 */
        url: t.setDefault(encodeURIComponent(config.url), encodeURIComponent(location.href)),  /* 要分享的链接 */
        title: t.setDefault(encodeURIComponent(config.title), encodeURIComponent(document.title)), /* 标题 */
        digest: t.setDefault(encodeURIComponent(config.digest), ''), /* 摘要 */
        pic: t.setDefault(config.pic, []), /* 自定义的图片 */
        source: t.setDefault(encodeURIComponent(config.source), encodeURIComponent('网易女人')), /* 来源 */
        sourceLink: t.setDefault(encodeURIComponent(config.sourceLink), encodeURIComponent('http://lady.163.com')), /* 来源域名 */
        charset: t.setDefault(config.charset, 'utf-8'),  /* 编码 */
        width: t.setDefault(config.width, 700),  /* 新开窗口的宽度 */
        height: t.setDefault(config.height, 680), /* 新开窗口的高度 */
        customIcon: t.setDefault(config.customIcon, false)  /* 是否自定义图标内容，false否，ture自定义 */
    };
    
    t.api = {
        t163 : 'http://t.163.com/article/user/checkLogin.do?',
        tsina : 'http://service.weibo.com/share/share.php?',
        renren : 'http://share.renren.com/share/buttonshare.do?',
        renren_txt : 'http://share.renren.com/share/buttonshare/post/2001?',
        douban : 'http://www.douban.com/recommend/?',
        tqq : 'http://v.t.qq.com/share/share.php?',
        tsohu : 'http://t.sohu.com/third/post.jsp?',
        kaixin001 : 'http://www.kaixin001.com/repaste/bshare.php?',
        qzone : 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'
    };
    
    t.srcNode = NTES.one(t.config.srcNode);
    
    var _left = (window.screen.availWidth - t.config.width) / 2,
        _top = (window.screen.availHeight - t.config.height) / 2;
    t.windowConfig = 'width=' + t.config.width + ', height=' + t.config.height + ', top=' + _top + ', left=' + _left + ', toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no';
    
    t._init();
}

ShareBtnsWidget.prototype = {
    constructor: ShareBtnsWidget,
    _init : function() {
        var t = this;
        t.addClickEvent('t163');
        t.addClickEvent('tsohu');
        t.addClickEvent('tqq');
        t.addClickEvent('tsina');
        t.addClickEvent('qzone');
        t.addClickEvent('renren');
        t.addClickEvent('renren_txt');
        t.addClickEvent('douban');
        t.addClickEvent('kaixin001');
    },
    setDefault : function(customVal, defaultVal) {
        if (customVal == undefined  || customVal == 'undefined') {
            return defaultVal;
        } else {
            return customVal;
        }
    },
    addClickEvent : function(site) {
        var t = this, shareBtn = t.srcNode.NTES('.shareBtn_' + site);
        if (shareBtn) {
            if (!t.config.customIcon) {
                shareBtn.attr('innerHTML', '<span class="share-widget-icon share-widget-icon-' + site + '"></span>');
            }
            shareBtn.addEvent('click', function(e) {
                e.preventDefault();
                window.open(t.api[site] + t.getUrl(site), '_blank', t.windowConfig);
            });
        }
    },
    getUrl : function(site) {
        var t = this, tmp = [];
        if (site == 't163') {
            tmp.push('link=' + t.config.sourceLink);
            tmp.push('source=' + t.config.source);
            tmp.push('info=' + t.config.title + ' ' + t.config.url);
            tmp.push('images=' + t.config.pic.join(','));
            tmp.push('togImg=true');
            tmp.push(new Date().getTime());
        } else if (site == 'tsohu') {
            tmp.push('url=' + t.config.url);
            tmp.push('title=' + t.config.title);
            tmp.push('content=' + t.config.charset);
            tmp.push('pic=' + t.config.pic.join(','));
        } else if (site == 'tqq') {
            tmp.push('title=' + t.config.title);
            tmp.push('url=' + t.config.url);
            tmp.push('site=' + t.config.source);
            tmp.push('pic=' + t.config.pic.join('|'));
        } else if (site == 'tsina') {
            tmp.push('url=' + t.config.url);
            tmp.push('title=' + t.config.title);
            if(t.config.pic[0] != undefined) {
                tmp.push('pic=' + t.config.pic[0]);
            }
        } else if (site == 'qzone') {
            tmp.push('url=' + t.config.url);
            tmp.push('title=' + t.config.title);
            tmp.push('summary=' + t.config.digest);
            tmp.push('site=' + t.config.source);
            tmp.push('pics=' + t.config.pic.join('|'));
        } else if (site == 'renren') {
            tmp.push('link=' + t.config.url);
        } else if (site == 'renren_txt') {
            tmp.push('url=' + t.config.url);
            tmp.push('title=' + t.config.title);
        } else if (site == 'douban') {
            tmp.push('url=' + t.config.url);
            tmp.push('title=' + t.config.title);
        } else if (site == 'kaixin001') {
            tmp.push('rtitle=' + t.config.title);
            tmp.push('rcontent=' + t.config.digest);
            tmp.push('rurl=' + t.config.url);
        }
        return tmp.join('&');
    }
}
   
function initSelect(option, defaultValue, tips){
    var pHtml = "";
    var hasDefault = defaultValue != "";
    var i = 0;
    pHtml +=  '<ul style="z-index:99999;">'
    if(!hasDefault){
        pHtml += '<li><a href="" target="_self" value="' + -1 + '">' + tips + '</a></li>';
    }
    for( var p in option ) {
        var index = p.substring(1);
        pHtml += '<li><a href="" target="_self" value="' + index + '"' + '>' + option[p] + '</a></li>';
        i++;
    }
    pHtml += '</ul>';
    return pHtml;
}
function initSelectBox(option,defaultValue,tips){
    var provHtml = "";
    var hasDefault = defaultValue != "";
    var i = 0;
    if(!hasDefault){
        provHtml += '<option value="' + -1 + '"' + 'selected="selected"'  + '>' + tips + '</option>';
    }
    for( var p in option ) {
        var index = p.substring(1);
        provHtml += '<option value="' + index + '"' + ((hasDefault && p == "a" + defaultValue) ? ' selected="selected"' : '') + '>' + option[p] + '</option>';
        i++;
    }
    return provHtml;
}


function initCheckBox(option, jsonArray, checkBoxName, divName){
    var index = 0;
    for(var p in option){
        if(index % 6 == 0 && index != 0){
            $("#" + divName ).append('<br>');
        }
        index = index + 1;
        var checkboxHtml = '<li><label><input style="margin-right:5px;" type="checkbox" class="fix-checkbox" name="' + checkBoxName +'" value="' + p + '"/>' + option[p] + '</label></li>';
        $("#" + divName ).append(checkboxHtml);
    }
    for(var i=0; i<jsonArray.length;i++){
        $('[name=' + checkBoxName + ']:checkbox').each(function(){
            if($(this).val()== jsonArray[i]){
                $(this).attr("checked", true);
            }
        });
    }
}

function initRadio(option,jsonArray,checkBoxName,divName){
    for(var p in option){
        var checkboxHtml = '<label><input type="radio" name="' + checkBoxName +'" value="' + p.substring(1) + '"/>' + option[p] + '</label>&nbsp;&nbsp;&nbsp;&nbsp;';
        $("#" + divName ).append(checkboxHtml);
    }
    
    var input =  $("#" + divName).find("input[type='radio']");
    input.each(function(){
        if($(this).val()== jsonArray){
            $(this).attr("checked",true);
        }    
    });
}

function initRadioForSkin(option,jsonArray,checkBoxName,divName){
    var input =  $("#" + divName).find("input[type='radio']");
    input.each(function(){
        if($(this).val()== jsonArray){
            $(this).attr("checked",true);
        }    
    });
}


/**
* 试用申请成功弹窗applysuccessalert
*/
window.cosmetic.applySuccessAlert = function(fmnum){
    getYUI().use('overlay', 'event-resize', 'dd-drag', 'node', function(Y){
        var global = window.cosmetic,
            tools = global.tools;
        
        //init
        if(!global.asmaskNode){
            global.asmaskNode = Y.Node.create('<div class="overlay-mask" style="display:none;"></div>');
            Y.one('body').insert(global.asmaskNode, 0);
        }
        if(!global.asalertFlag){
            if(fmnum){
                global.asalertBox = Y.Node.create('<div class="apply-success-box"><div class="apply-success-box-hd"><div class="apply-success-box-title">提示</div><a href="#" class="apply-success-box-close"></a></div><div class="apply-success-box-bd"><p class="apply-success-box-tips">恭喜申请成功，消耗花币'+fmnum+'个！</p><p class="close-countdown">系统 <span class="countdown-time">5</span> 秒后返回试用页</p><div class="otherlinks clearfix"><a class="left" href="http://cosmetic.lady.163.com/user/points">查看花币消耗&gt;&gt;</a><a class="right" href="http://cosmetic.lady.163.com/trial/index.html">申请其他试用&gt;&gt;</a></div></div></div>');
            }
            else{
                global.asalertBox = Y.Node.create('<div class="apply-success-box"><div class="apply-success-box-hd"><div class="apply-success-box-title">提示</div><a href="#" class="apply-success-box-close"></a></div><div class="apply-success-box-bd"><p class="apply-success-box-tips">兑换成功，我们将尽快发货，请您注意查收！</p><p class="close-countdown">系统 <span class="countdown-time">5</span> 秒后返回试用页</p><div class="otherlinks clearfix"><a class="right" href="http://cosmetic.lady.163.com/trial/index.html">申请其他试用&gt;&gt;</a></div></div></div>');
            }
            global.asalertOverlay = new Y.Overlay({
                srcNode : global.asalertBox,
                zIndex : 1010,
                visible : false,
                render : true
            });
            new Y.DD.Drag({
                dragNode: global.asalertBox,
                node: global.asalertBox.one('.apply-success-box-hd')
            });
            global.asalertBox.one('.apply-success-box-close').on('click', function(e){
                e.preventDefault();
                tools.hideOverlay(global.asalertOverlay, global.asmaskNode);
                window.location.href = 'http://cosmetic.lady.163.com/trial/index.html';
            });
            global.asalertFlag = true;
        }
        
        //show
        global.asmaskNode.show();
        if (Y.UA.ie && Y.UA.ie <= 6) {
            tools.resizeOverlayMask(global.maskNode);
            Y.on('windowresize', function() {
                tools.resizeOverlayMask(global.asmaskNode);
                global.asalertOverlay.set('centered', true);
            });
        } else {
            Y.on('windowresize', function() {
                global.asalertOverlay.set('centered', true);
            });
        }
        global.asalertOverlay.set('centered', true);
        global.asalertOverlay.show();
        countdownfunc(5);
        
        //倒计时
        function countdownfunc(countdownnum){
            var wait = countdownnum; 
            
            function doUpdate() {
                if(wait == 0) {
                    tools.hideOverlay(global.asalertOverlay, global.asmaskNode);
                    window.location.href = 'http://cosmetic.lady.163.com/trial/index.html';
                } else {
                    wait--;
                    global.asalertBox.one('.countdown-time').set('innerHTML',wait);
                    setTimeout(function(){doUpdate()},1000);
                }
            }
            setTimeout(function(){doUpdate()}, 1000);
        }
        
    });
}

/**
* 登陆后新消息提醒newmsgTips
*/
function newmsgTips(n){
    getYUI().use('node', 'overlay','cookie', function(Y){
        var tipsFlag = false;
        
        if(!tipsFlag){
            var newmsgtips = Y.Node.create('<div class="newmsgtips"><div class="triangleico"></div><a class="newmsgtips-close"></a><div class="newmsgtips-content"><p class="newmsg">您有<span class="newmsg-num">'+n+'</span>条新消息，<a href="/user/msg"><span class="newmsg-num">点击查看</span></a></p></div></div>');
            var newmsgtipsOverlay = new Y.Overlay({
                srcNode : newmsgtips,
                zIndex : 1010,
                visible : false,
                align: {
                        node: '.channel-nav',
                        points: ['tr', 'br']},
                render : true
            });
            
            newmsgtips.one('.newmsgtips-close').on('click', function(e){
                e.preventDefault();
                Y.Cookie.set('msghide_flag','n',{path:'/'});
                newmsgtipsOverlay.hide();
            });
            tipsFlag = true;
        } 
        
        newmsgtipsOverlay.show();
        
    });
}


/**
* 兑换码验证弹窗convertverifyalert
*/
window.cosmetic.convertVerifyAlert = function(productiralId){
    getYUI().use('overlay', 'event-resize', 'node', function(Y){
        var global = window.cosmetic,
            tools = global.tools;
        
        //init
        if(!global.cvmaskNode){
            global.cvmaskNode = Y.Node.create('<div class="overlay-mask" style="display:none;"></div>');
            Y.one('body').insert(global.cvmaskNode, 0);
        }
        if(!global.cvalertFlag){
            global.cvalertBox = Y.Node.create('<div class="calertbox"><span class="calertbox-close"></span><div class="calertbox-content-wrap"><div class="calertbox-content1"><h3 class="calertbox-title">请输入兑换码</h3><p class="calertbox-verify"><input type="text" id="calertbox-codetxt" class="calertbox-txt calertbox-codetxt" value="" /><a href="#" class="calertbox-btn calertbox-okbtn">确定</a></p></div></div></div>');
            global.cvalertOverlay = new Y.Overlay({
                srcNode : global.cvalertBox,
                zIndex : 1001,
                visible : false,
                render : true
            });
            
            function closeVerify(){
                global.cvalertBox.one('.calertbox-close').on('click', function(e){
                    e.preventDefault();
                    window.location.reload();
                    // tools.hideOverlay(global.cvalertOverlay, global.cvmaskNode);
                });
            }
            function doVerify(){
            global.cvalertBox.one('.calertbox-okbtn').on('click', function(e){
                e.preventDefault();
                var vCode = document.getElementById('calertbox-codetxt').value;
                if(vCode == '') return;
                jQuery.ajax({
                    url : '/trial/apply/applyNoteFreezed.do?productTrialId=' + productiralId + '&noteNo=' + vCode,
                    type : "GET",
                    dataType : 'json',
                    timeout : 5000,
                    error : function() {
                        global.cvalertBox.one('.calertbox-title').setContent('抱歉，服务器出现错误，请重试！');
                        global.cvalertBox.one('.calertbox-content-wrap').setContent('<div class="calertbox-content2"><h3 class="calertbox-title"><span class="calertbox-success">校验成功</span></h3><p class="calertbox-rtip">系统将为您保留24小时兑换资格，请尽快完善兑换</p><p class="calertbox-btnwrap"><a target="_self" href="/trial/apply/applyStepOne.do?productTrialId='+productiralId+'&isNote=1" class="calertbox-btn">去完成</a></p></div>');
                    },
                    success : function(data) {
                        if(data.result){
                            global.cvalertBox.one('.calertbox-content-wrap').setContent('<div class="calertbox-content2"><h3 class="calertbox-title"><span class="calertbox-success">校验成功</span></h3><p class="calertbox-rtip">系统将为您保留24小时兑换资格，请尽快完善兑换</p><p class="calertbox-btnwrap"><a href="/trial/apply/applyStepOne.do?productTrialId='+productiralId+'&isNote=1" class="calertbox-btn">去完成</a></p></div>');
                        }else{
                            if(data.allowApply){
                                global.cvalertBox.one('.calertbox-content-wrap').setContent('<div class="calertbox-content2"><h3 class="calertbox-title"><span class="calertbox-fail">校验失败</span></h3><p class="calertbox-rtip">检验码错误，请您重新核对输入</p><p class="calertbox-btnwrap"><a href="#" class="calertbox-btn calertbox-reverifybtn">重新校验</a><a href="http://cosmetic.lady.163.com/trial/'+productiralId+'.html" target="_self" class="calertbox-btn calertbox-fcoinbtn">用花币申请</a></p></div>');
                            }else{
                                global.cvalertBox.one('.calertbox-content-wrap').setContent('<div class="calertbox-content2"><h3 class="calertbox-title"><span class="calertbox-fail">校验失败</span></h3><p class="calertbox-rtip">检验码错误，请您重新核对输入</p><p class="calertbox-btnwrap"><a href="#" class="calertbox-btn calertbox-reverifybtn">重新校验</a></p></div>');
                            }
                            
                            if(global.cvalertBox.one('.calertbox-reverifybtn')){
                                global.cvalertBox.one('.calertbox-reverifybtn').on('click',function(e){
                                    e.preventDefault();
                                    global.cvalertBox.one('.calertbox-content-wrap').setContent('<div class="calertbox-content1"><h3 class="calertbox-title">请输入兑换码</h3><p class="calertbox-verify"><input type="text" id="calertbox-codetxt" class="calertbox-txt" /><a href="#" class="calertbox-btn calertbox-okbtn">确定</a></p></div>');
                                    doVerify();
                                });
                            }
                            
                        }
                    }
                });
            });
            }
            doVerify();
            closeVerify();
            global.cvalertFlag = true;
        }
        
        //show
        global.cvmaskNode.show();
        if (Y.UA.ie && Y.UA.ie <= 6) {
            alert(11);
            tools.resizeOverlayMask(global.cvmaskNode);
            Y.on('windowresize', function() {
                tools.resizeOverlayMask(global.cvmaskNode);
                global.cvalertOverlay.set('centered', true);
            });
        } else {
            Y.on('windowresize', function() {
                global.cvalertOverlay.set('centered', true);
            });
        }
        global.cvalertOverlay.set('centered', true);
        global.cvalertOverlay.show();
        
    });
}

/**
 * 对字符串html转义
 */
function htmlEncode(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}


