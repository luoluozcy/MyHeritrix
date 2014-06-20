<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="Keywords" content="易信, 网易保险, 网易邮箱, 活动, 抢购">
    <meta name="Description" content="网易保险-4月25日5折福利，限量抢购">
    <title>网易保险，5折抢购</title>
    <meta http-equiv="Content-Style-Type" content="text/css">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <meta name="Author" content="netease">
    <meta name="Version" content="1.0">
    <link type="text/css" href="http://mimg.127.net/hhd/yixin/140419/style/css/style.css" rel="stylesheet">
</head>
<body id="body">
    <div class="g-bd">
        <div class="m-banner">
            <div class="g-wrap">
                <ul class="m-logos">
                    <li class="item"><a href="http://baoxian.163.com/" target="_blank" hidefocus="true" class="logo logo-bx"></a></li>
                    <li class="item"><a href="http://yixin.im/" target="_blank" hidefocus="true" class="logo logo-yixin"></a></li>
                </ul>
                                <div class="m-login">
                    <a href="javascript:;" class="link" id="js-login">点此登录&gt;&gt;</a>
                </div>
            </div>
        </div>
        <div class="m-cnt">
            <div class="container">
                <div class="g-wrap">
                    <div class="inner">
                        <div class="cnt-tt"></div>
                        <div class="cnt-step">
                            <div class="step step-1">
                                <a href="http://u.163.com/yixinapple?from=bx" target="_blank" hidefocus="true" class="link1 js-dl" data="apple"></a>
                                <a href="http://u.163.com/yixinan?from=bx" target="_blank" hidefocus="true" class="link2 js-dl" data="android"></a>
                                <div class="m-ipt" id="box">
                                    <div class="ipt-value">
                                        <div class="w-ipt">
                                            <input type="text" class="value js-mobile" maxlength="11">
                                            <span class="placeholder js-placeholder">请输入您的手机号</span>
                                        </div>
                                        <div class="ipt-tip js-err" style="display:none"><span class="f-txt-err">请输入您的手机号码</span></div>
                                    </div>
                                    <div class="ipt-act">
                                        <a href="javascript:;" hidefocus="true" class="w-button js-sendUrl">免费获取下载地址</a>
                                    </div>
                                </div>
                            </div>
                            <div class="step step-2"></div>
                            <div class="step step-3">
                                <div class="m-ipt" id="js-verify-div">
                                    <div class="ipt-value">
                                        <div class="w-ipt">
                                            <input type="text" class="value js-code-text" maxlength="6">
                                            <span class="placeholder js-placeholder">请输入验证码</span>
                                        </div>
                                        <div class="ipt-tip js-err" style="display:none"><span class="f-txt-err">验证码有误，重新获取！</span></div>
                                    </div>
                                    <div class="ipt-act">
                                        <a href="javascript:;" hidefocus="true" class="w-button w-button-disabled js-verify-btn">立即验证</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cnt-share">
                            <ul class="m-share" id="share">
                                <li><a href="javascript:;" hidefocus="true" class="icon icon-weixin js-link" data="wx"></a></li>
                                <li><a href="javascript:;" hidefocus="true" class="icon icon-weibo js-link" data="weibo"></a></li>
                                <li><a href="javascript:;" hidefocus="true" class="icon icon-qqzone js-link" data="qzone"></a></li>
                                <li><a href="javascript:;" hidefocus="true" class="icon icon-renren js-link" data="renren"></a></li>
                                <li><a href="javascript:;" hidefocus="true" class="icon icon-douban js-link" data="douban"></a></li>
                                <li><a href="javascript:;" hidefocus="true" class="icon icon-wyweibo js-link" data="163weibo"></a></li>
                                <li><a href="javascript:;" hidefocus="true" class="icon icon-txweibo js-link" data="tweibo"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-mask" style="display:none;"></div>
    <div class="m-popwin m-popwin-qrcode" style="display:none">
        <div class="popwin-hd">
            <a hidefocus="true" href="javascript:;" hidefocus="true" class="close js-close" title="关闭"></a>
        </div>
        <div class="popwin-bd">
            <div class="tt">
                <div>手机扫一扫，分享到微信朋友圈：</div>
            </div>
            <div class="qrcode qrcode-wx"></div>
        </div>
    </div>
    <div class="m-popwin m-popwin-login" style="display:none" id="loginBox">
        <div class="popwin-hd">
            <span>使用网易账号登录</span>
            <a hidefocus="true" href="javascript:;" hidefocus="true" class="close js-close" title="关闭"></a>
        </div>
        <div class="popwin-bd">
            <div class="errtip js-err">请输入正确的账号！</div>
            <div class="m-ipt m-ipt-1">
                <div class="ipt-label">账号：</div>
                <div class="ipt-value">
                    <div class="w-ipt">
                        <input type="text" class="value js-mail">
                        <span class="placeholder js-placeholder">网易邮箱/通行证账号</span>
                    </div>
                </div>
            </div>
            <div class="m-ipt">
                <div class="ipt-label">密码：</div>
                <div class="ipt-value">
                    <div class="w-ipt">
                        <input type="password" class="value js-pwd">
                        <span class="placeholder js-placeholder">请输入密码</span>
                    </div>
                </div>
            </div>
            <div class="link1"><a class="link" href="http://reg.163.com/RecoverPasswd1.shtml" hidefocus="true" target="blank">忘记密码？</a></div>
            <div class="act">
                <a href="javascript:;" hidefocus="true" class="w-button w-button-login js-login">登&nbsp;&nbsp;录</a>
                <span class="reg">没有网易账号？<a href="http://reg.163.com/reg/reg.jsp" hidefocus="true" target="_blank" class="link">立即注册&gt;&gt;</a></span>
            </div>
            
        </div>
    </div>
    
    <iframe name="sendSMS" style="display:none;"></iframe>
    <form action="http://yixin.im/api/dlfromsms" id="yxForm" style="display:none" target="sendSMS" method="POST">
        <input name="mobile" />
    </form>
    <form action="https://reg.163.com/logins.jsp" method="post" id="loginForm" style="display:none;">
        <input id="loginForm_username" type="hidden" name="username" value="">
        <input id="loginForm_password" type="hidden" name="password" value="">
        <input id="loginForm_product" type="hidden" name="product" value="mailyeah">
        <input id="loginForm_url" type="hidden" name="url" value="">
        <input type="hidden" name="domains" value="yeah.net,163.com,126.com">
        <input id="loginForm_savelogin" type="hidden" name="savelogin" value="">
    </form>
    <input type="hidden" value="" id="uid"/>
    <input type="hidden" value="yes" id="time"/>
    <script type="text/javascript" src="http://mimg.127.net/hhd/yixin/140419/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="http://mimg.127.net/hhd/yixin/140419/js/a.min.js"></script>
    
</body>
</html>
