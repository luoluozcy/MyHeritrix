(function(window, undefined) {
    if (window.define) {
        return;
    }

    function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    }

    var MM = {};
    var initModuleName = null;
    var scripts = document.getElementsByTagName('script');

    for (var i=0, l=scripts.length; i<l && !initModuleName; i++) {
        initModuleName = scripts[i].getAttribute('data-main');
    }

    if (!initModuleName) {
        throw new Error('No data-main attribute in script tag.');
    }

    function require(name) {
        if (!MM[name]) {
            throw new Error('Module '+name+' is not defined.');
        }

        var module = MM[name];

        if (module.inited === false) {
            runModule(name);
        }

        return module.ret;
    }

    function runModule(name) {
        var exports = {};
        var module = MM[name];

        if (isFunction(MM[name].factory)) {
            var ret = MM[name].factory.apply(undefined, [require, exports, undefined]); // Argument 'module' hasn't been implemented yet.
            module.ret = ret === undefined ? exports : ret;
        } else {
            module.ret = MM[name].factory;
        }
        module.inited = true;
    }

    function define(name, deps, factory) {
        if (MM[name]) {
            throw new Error('Module '+name+' has been defined already.');
        }

        if (isFunction(deps)) {
            factory = deps;
        }

        MM[name] = {
            factory: factory,
            inited: false
        };

        if (name === initModuleName) {
            runModule(name);
        }
    }

    window.define = define;
})(window);
define('modules/navigation/index',function(require, exports, module) {
	var prefix,
		hideSubTab;

	$('body').delegate('#navigation li', 'mouseover', function (e) {
		clearTimeout(hideSubTab);
		var self = $(this);
		prefix = self.attr('class').substring(4);
		if($('.sub-' + prefix).size() <= 0){
			$('#tp .iwc').css('marginBottom', '0');
			$('.subTabInAll').hide();
			return;
		}
		$('.subTabInAll').show();
		$('.subTabInAll div').hide();
		$('.sub-' + prefix).show();
		e.stopPropagation();
	});

	$('body').delegate('#navigation li', 'mouseout', function (e) {
		var self = $(this);
		hideSubTab = setTimeout(function () {
			$('.subTabInAll').hide();
			$('.subTabInAll div').hide();
		}, 0);
		e.stopPropagation();
	});

	$('body').delegate('.subTabInAll', 'mouseover', function (e) {
		clearTimeout(hideSubTab);
		var self = $(this);
		self.show();
		$('.sub-' + prefix).show();
		e.stopPropagation();
	});

	$('body').delegate('.subTabInAll', 'mouseout', function (e) {
		var self = $(this);
		hideSubTab = setTimeout(function () {
			if($(window).scrollTop() <= $('#tp .iwc').height()){
				self.hide();
				$('.sub-' + prefix).hide();
			}
		}, 0);
		e.stopPropagation();
	});

});
define('modules/subTab/index',function (require, exports, module) {

	var initSubStatus = function (){
		if($(window).scrollTop() > $('#tp .iwc').height()){
			$('.subTabInAll').show();
			$('.subTabInAll .sub-multi').show();
			$('.subTabInAll').addClass("fixForSub");
		}else{
			$('.subTabInAll').removeClass("fixForSub");
			$('.subTabInAll').hide();
		}
		$('.subTabInAll .sub-index').hide();
	};

	$(function (){
		if($('body').hasClass("p-multi")){
			initSubStatus();
			$(window).scroll(function () {
				$('.subTabInAll .sub-index').hide();
				initSubStatus();
			})
		}
		$('.subTabInAll .sub-multi a').click(function () {
			initSubStatus();
		});
	});

});
define('modules/index/banner/index',function (require, exports, module) {

    /**
     * 安全锁，保证在所有逻辑执行完之前不会受理新请求
     * @param func 包裹函数，是函数具有线程锁，注意，必须在函数执行完毕后，执行最后一个参数（解锁函数）
     * var synchFunc = ISee.util.synchronize(function(arg1,arg2...) {
     var openLock = arguments[arguments.length - 1];
     ... 函数本身逻辑 ...
     ... 必要的时候解锁 openLock(); ...
     });
     */
    var synchronize = function (func) {
        func.synchronizeed = false;
        var openLock = function () {
            func.synchronizeed = false;
        };
        var makeArray = function (obj) {
            return Array.prototype.slice.call(obj, 0);
        };
        return function () {
            if (func.synchronizeed) {
                return;
            }
            func.synchronizeed = true;
            var args = makeArray(arguments);
            args.push(openLock);
            func.apply(this, args);
        };
    };
    /**
     * 事件托管，间隔{time}毫秒后执行{func}
     * @param func  被托管函数
     * @param time  时间间隔
     */
    var timerProxy = (function () {
        var clearProxy = function () {
            if (!!window.timerProxyTimeout) {
                window.clearTimeout(window.timerProxyTimeout);
            }
        };
        return function timer(func, time) {
            timerProxy.clearProxy = timer.clearProxy = clearProxy; //直接将清楚代理的方法挂在函数上，IE对timer.proxy支持的不好，直接挂到目标对象上
            clearProxy();
            window.timerProxyTimeout = window.setTimeout(function () {
                if ($.isFunction(func)) {
                    func();
                }
            }, time);
        };
    })();

    var initContentChange;
    (function () {
        var currentIdx = 0;
        var setCurrent = function (idx) {
            $('#navbar>a.icon-nav-current').removeClass('icon-nav-current');
            $('#navbar>a').eq(idx).addClass('icon-nav-current');
            currentIdx = idx;
        };

        /**
         *  初始化内容
         */
        var changeContent = synchronize(function (idx) {
            var openLock = arguments[arguments.length - 1];
            if (currentIdx === idx) {
                openLock();
                return;
            }
            $('#pic_intro>li').hide();
            $($('#pic_intro>li')[currentIdx]).fadeOut('fast', function () {
                $($('#pic_intro>li')[idx]).fadeIn('fast');
                setCurrent(idx);
                openLock();
            });
        });

        /**
         * 初始化内容切换
         */
        initContentChange = function () {
            var navbart = $('#navbar>a');
            currentIdx = 0;
            var size = $('#navbar a').size();
            navbart.click(function (e) {
                var idx = navbart.index($(this));
                changeContent(idx);
                e.preventDefault();
            });

            navbart.mouseover(function (e) {
                var idx = navbart.index($(this));
                timerProxy(function () {
                    changeContent(idx);
                }, 200);
                e.preventDefault();
            });

            navbart.mouseout(function (e) {
                timerProxy.clearProxy();
            });

            $('#indexBanner .pre').click(function (e) {
                changeContent((currentIdx + size - 1) % size);
                e.preventDefault();
            });

            $('#indexBanner .next').click(function (e) {
                changeContent((currentIdx + 1) % size);
                e.preventDefault();
            });

            var autoPlay = setInterval(function () {
                changeContent((currentIdx + 1) % size)
            }, 3000)

            $('#navbar').hover(
                function () {
                    clearInterval(autoPlay);
                }, function () {
                    autoPlay = setInterval(function () {
                        changeContent((currentIdx + 1) % size)
                    }, 3000)
                }
            );
        };
    })();

    initContentChange();
});
define('modules/index/download/index',function(require, exports, module) {
    // console.log('demo');
});
define('modules/index/main_function/index',function(require, exports, module) {
    // console.log('demo');
});
define('modules/index/latest_activity/index',function (require, exports, module) {
    /**
     * 安全锁，保证在所有逻辑执行完之前不会受理新请求
     * @param func 包裹函数，是函数具有线程锁，注意，必须在函数执行完毕后，执行最后一个参数（解锁函数）
     * var synchFunc = ISee.util.synchronize(function(arg1,arg2...) {
     var openLock = arguments[arguments.length - 1];
     ... 函数本身逻辑 ...
     ... 必要的时候解锁 openLock(); ...
     });
     */
    var synchronize = function (func) {
        func.synchronizeed = false;
        var openLock = function () {
            func.synchronizeed = false;
        };
        var makeArray = function (obj) {
            return Array.prototype.slice.call(obj, 0);
        };
        return function () {
            if (func.synchronizeed) {
                return;
            }
            func.synchronizeed = true;
            var args = makeArray(arguments);
            args.push(openLock);
            func.apply(this, args);
        };
    };
    /**
     * 事件托管，间隔{time}毫秒后执行{func}
     * @param func  被托管函数
     * @param time  时间间隔
     */
    var timerProxy = (function () {
        var clearProxy = function () {
            if (!!window.timerProxyTimeout) {
                window.clearTimeout(window.timerProxyTimeout);
            }
        };
        return function timer(func, time) {
            timerProxy.clearProxy = timer.clearProxy = clearProxy; //直接将清楚代理的方法挂在函数上，IE对timer.proxy支持的不好，直接挂到目标对象上
            clearProxy();
            window.timerProxyTimeout = window.setTimeout(function () {
                if ($.isFunction(func)) {
                    func();
                }
            }, time);
        };
    })();

    var initContentChange;
    (function () {
        var currentIdx = 0;
        var setCurrent = function (idx) {
            $('#latest_activity .nav-bar>a.current').removeClass('current');
            $('#latest_activity .nav-bar>a').eq(idx).addClass('current');
            currentIdx = idx;
        };

        /**
         *  初始化内容
         */
        var changeContent = synchronize(function (idx) {
            var openLock = arguments[arguments.length - 1];
            if (currentIdx === idx) {
                openLock();
                return;
            }
            $('#latest_activity li.ac-img').hide();
            $($('#latest_activity li.ac-img')[currentIdx]).fadeOut('fast', function () {
                $($('#latest_activity li.ac-img')[idx]).fadeIn('fast');
                setCurrent(idx);
                openLock();
            });
        });

        /**
         * 初始化内容切换
         */
        initContentChange = function () {
            var navbart = $('#latest_activity .nav-bar>a');
            currentIdx = 0;
            var size = $('#latest_activity .nav-bar a').size();
            navbart.click(function (e) {
                var idx = navbart.index($(this));
                changeContent(idx);
                e.preventDefault();
            });

            navbart.mouseover(function (e) {
                var idx = navbart.index($(this));
                timerProxy(function () {
                    changeContent(idx);
                }, 200);
                e.preventDefault();
            });

            navbart.mouseout(function (e) {
                timerProxy.clearProxy();
            });

            var autoPlay = setInterval(function () {
                changeContent((currentIdx + 1) % size)
            }, 3000)

            $('#latest_activity .nav-bar').hover(
                function () {
                    clearInterval(autoPlay);
                }, function () {
                    autoPlay = setInterval(function () {
                        changeContent((currentIdx + 1) % size)
                    }, 3000)
                }
            );
        };
    })();

    initContentChange();
});
define('modules/index/introduce_video/index',function (require, exports, module) {
    $(function () {
        window.msg.msgContainer('.dialog');
        $('#introduce_video .bd').click(function (evnet) {
            window.msg.open(true);
            flowplayer(
                "videoContainer",
                "http://note.youdao.com/images/flowplayer-3.2.7.swf",
                'http://flv.bn.netease.com/videolib3/1311/08/pIeVk2312/SHD/pIeVk2312.flv'
            );
            return false;
        });

        $('.dialog-close').click(function (event) {
            window.msg.closeMsg(true);
            var flowerPlay = $('.dialog .dialog-bd object');
            flowerPlay.remove();
            $('.dialog .dialog-bd').append(flowerPlay);
            event.stopPropagation();
        });
    });
});
define('modules/index/followme/index',function(require, exports, module) {
    // console.log('demo');
});
define('modules/index/awards_list/index',function(require, exports, module) {
    $(function(){
        $('#award_list .js-collapse-open').click(function(e){
            $('#award_list').removeClass('collapsed');
            e.preventDefault();
        });
        $('#award_list .js-collapse-close').click(function(e){
            $('#award_list').addClass('collapsed');
            e.preventDefault();
        });
    });
});
define('modules/other_links/index',function(require, exports, module) {
    // console.log('demo');
});
define('modules/footer/index',function(require, exports, module) {
    // console.log('demo');
});
define('modules/index/video/index',function(require, exports, module) {
    // console.log('demo');
});
define('p-index', function(require, exports, module) {
require('modules/navigation/index');
require('modules/subTab/index');
require('modules/index/banner/index');
require('modules/index/download/index');
require('modules/index/main_function/index');
require('modules/index/latest_activity/index');
require('modules/index/introduce_video/index');
require('modules/index/followme/index');
require('modules/index/awards_list/index');
require('modules/other_links/index');
require('modules/footer/index');
require('modules/index/video/index');
});