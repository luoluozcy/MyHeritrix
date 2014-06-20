(function(){
	m163.dialog = {'status': ''};
    m163.dialog.load = function(url, options) {
    	options = options || {};
    	this.options = options;
    	m163.dialog.status = 'loading';
    	show_overlay();
    	show_loading();
    	var w = get_wrapper();
    	var params = {};
    	if (!url.contains('from=')) {
    		params.from = m163.web.url(true);
    	}
    	params.ajax = 1;
    	$.get(url, params, function(data) {
    		if (m163.dialog.status != 'canceled') {
	    		m163.dialog.status = 'loaded';
	    	   	hide_loading();
	    	   	var title = (options.title == undefined) ? '' : options.title;
	    		w = show_wrapper(data, title);
	    		try { m163_dialog_loaded(); } catch (e) {}
	    		if (options.onload) { options.onload(); }
    		}
    	});
    	return w;
    };
    
    m163.dialog.window = function() {
    	return $('.mccdialog-wrapper');
    }
    
    m163.dialog.title = function(title) {
    	title = title || '';
    	$('.mccdialog-title').html(title);
    }
    
    m163.dialog.open = function(text, options) {
    	show_overlay();
        options = options || {};
        var title = options.title;
        var ok = options.confirm || EF;
    	var onload = options.onload || EF;
        w = show_wrapper(text, title);
        $('.mccconfirm').bind('click', function(){
        	ok();
        	m163.dialog.close();
        });
    	onload();//自定义加载动画
    }
    
    m163.dialog.close = function() {
    	if (this.options && this.options.onclose) {
    		this.options.onclose();
    	} else {
	    	hide_overlay();
	        hide_loading();
	        hide_wrapper();
    	}
    };
    
    m163.dialog.unload = function() {
    	$('.mccdialog-overlay').remove();
    	$('.mccdialog-wrapper').remove();
    	$('.mccdialog-loading').remove();
    };
    
    m163.dialog.alert = function(text, options) {
    	show_overlay();
        options = options || {};
        var title = options.title || '';
        var ok = options.confirm || EF;
    	var onload = options.onload || EF;
        text = '<div class="mccdialog-confirm">' + text + '</div><div class="mccdialog-action">' + BUTTON_CONFIRM + '</div>';
        w = show_wrapper(text, title);
        $('.mccconfirm').bind('click', function(){
        	ok();
        	m163.dialog.close();
        });
    	onload();//自定义加载动画
    };
    
    m163.dialog.confirm = function(text, options) {
    	show_overlay();
    	
    	options = options || {};
    	var title = options.title || '';
    	var ok = options.confirm || EF;
    	var cancel = options.cancel || EF;
    	var dialog_close = options.close || EF;
    	var onload = options.onload || EF;
    	text = '<div class="mccdialog-confirm">' + text + '</div><div class="mccdialog-action">' + BUTTON_CONFIRM + BUTTON_CANCEL + '</div>';
    	w = show_wrapper(text, title);
    	$('.mccconfirm').bind('click', function() {
        	$('.mccconfirm').unbind('click');
    		show_loading();
    		ok({'target': this});
    	});
    	$('.mcccancel').bind('click', function() {
    		cancel();
    		m163.dialog.close();
    	});
    	$('.mccdialog-close').bind('click', function() {
    		dialog_close();
    		m163.dialog.close();
    	});
    	onload();//自定义加载动画
    };
    
    m163.dialog.loading = function(text, options) {
    	show_overlay();
    	options = options || {};
        var timeout = options.timeout || 3;
        timeout = timeout * 1000;
        var callback = options.callback || EF;
        var title = options.title;
        if (title == undefined) title = false;
        text = '<span class="loading"></span><p>' + text + '</p>';
        var w = show_wrapper(text, title);
        var content_box = $($(w).find('.mccdialog-content'));
        var is_callback = options.is_callback || true;
        
        if ($(content_box).find('p').height() < 32) {
            $(content_box).find('p').css('padding-top', 4);
        }
        if (options.width) {
        	$(content_box).css('width', options.width);
        }
        if (options.height) {
        	$(content_box).css('height', options.height);
        }
        if(is_callback) {
        	setTimeout(function(){
        		callback();
        		m163.dialog.close();
        	}, timeout);
        }
    };
    
    m163.dialog.succeed = function(text, options) {
    	show_overlay();
        options = options || {};
        var timeout = options.timeout || 3;
        timeout = timeout * 1000;
        var callback = options.callback || EF;
        var title = options.title;
        if (title == undefined) title = false;
        text = '<span class="icon-32-succeed" style="position:absolute;"></span><p style="display:inline-block;vertical-align:top; padding-left:40px;">' + text + '</p>';
        var w = show_wrapper(text, title);
        var content_box = $($(w).find('.mccdialog-content'));
        content_box.css('position', 'relative');
        
        if ($(content_box).find('p').height() < 32) {
        	$(content_box).find('p').css('padding-top', 8);
        }
        setTimeout(function(){
        	callback();
        	m163.dialog.close();
        }, timeout);
    };
    
    //----- Private functions -----
    var show_overlay = function() {
    	var cls = 'mccdialog-overlay';
		var width = $(window).width();
		var height = $(document).height();
		var overlay = $('.' + cls);
    	if ($('.' + cls).length == 0) {
            overlay = $('<div>', {
    			'class': cls, 
    			'style': 'position:absolute; ' +
    			         'width:' + width + 'px; ' +
    			         'height:' + height + 'px; ' +
    			         'background:#000; ' +
    			         'left:0;top:0;'
            }).bind('click', overlay_clicked);
            if($.browser.msie && $.browser.version == "6.0") {
                $('<iframe src="javascript:false" style="position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:-1; opacity: 0; filter=\'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)\';"></iframe>').appendTo(overlay);
            }
            overlay.appendTo($(document.body));
    	} else {
    		if ($('.' + cls).css('display') == 'block') {
//    			var w = $('.mccdialog-wrapper');
//    			if (w.length > 0) {
//	    			var zindex = parseInt(w.css('z-index'));
//	    			$('.' + cls).css('z-index', zindex+1)
//    			}
    		}
    	}
    	overlay.css('opacity', '0.1');
		overlay = $('.' + cls).show();
    };
    var overlay_clicked = function() {
    	if (m163.dialog.status == 'loading') {
            m163.dialog.status = 'canceled';    		
            m163.dialog.close();
    	}
    };
    var hide_overlay = function() {
    	$('.mccdialog-overlay').hide();
    	hide_loading();
    	hide_wrapper();
    };
    var WRAPPER = "<div class='mccdialog-wrapper' id='mccdialog-window-wrapper'><div class='mccdialog-inwrapper'><table cellspacing='0' cellpadding='0' border='0'>" +
	              "<tr><td class='tl'></td><td class='b'></td><td class='tr'></td></tr>" +
	              "<tr><td class='b'></td><td class='mccdialog-body'>" +
	              "<div class='mccdialog-title'></div><div class='mccdialog-content clearfix'></div>" +
	              "</td><td class='b'></td></tr>" +
	              "<tr><td class='bl'></td><td class='b'></td><td class='br'></td></tr>" +
	              "</table><div class='mccdialog-close'>关闭</div></div></div>";
	var BUTTON_CONFIRM = '<input type="button" class="button button-y button-ok  mccconfirm" value="确定"/>';
	var BUTTON_CANCEL  = '<input type="button" class="button close mcccancel button-cancel" value="取消"/>';
	var BUTTON_NO  = '<input type="button" value="确定" id="mccno"/>';
    var get_wrapper = function() {
    	var cls = 'mccdialog-wrapper';
    	var w;
    	if ($('.'+cls).length == 0) {
    		w = $(WRAPPER);
    		w.attr('style', 'position:absolute;display: none;');
    		w.appendTo($(document.body));
    		$('.mccdialog-close').bind('click', function() { m163.dialog.close(); });
    	} else {
    		w = $($('.'+cls)[0]);
    	}
    	return w;
    }
    var show_wrapper = function(content, title) {
    	var w = get_wrapper();
    	if (title === false) {
    		w.find('.mccdialog-title').hide();
    	} else {
			w.find('.mccdialog-title').html(title);
    	}
    	w.find('.mccdialog-content').html(content);
    	w.find('.mccdialog-content').attr('style', '');
    	w.find('.close').unbind('click').bind('click', function() { m163.dialog.close(); });
        w.css('width', '');
        w.css('height', '');
    	var left = $(window).width() / 2 - $(w).width() / 2;
        var height = $(window).height();
        var scrolltop = parseInt($(document).scrollTop()) || parseInt(document.documentElement.scrollTop);
        var top = scrolltop + height / 2 - $(w).height() / 2;
        w.css('top', top);
        w.css('left', left);
        w.show();
        var content_box = $($(w).find('.mccdialog-content'));
//        if (content_box.width() > 800) content_box.css('width', 800);
//        if (content_box.width() < 200) content_box.css('width', 200);
        left = $(window).width() / 2 - $(w).width() / 2;
        height = $(window).height();
        top = scrolltop + height / 2 - $(w).height() / 2;
        w.css('top', top);
        w.css('left', left);
        
        return w;
    }
    var hide_wrapper = function(options) {
    	var cls = 'mccdialog-wrapper';
    	$('.'+cls).hide();
    }
    var show_loading = function() {
    	var cls = 'mccdialog-loading';
    	var left = $(window).width() / 2 - 16;
        var height = $(window).height();
        var scrolltop = parseInt($(document).scrollTop()) || parseInt(document.documentElement.scrollTop);
        var top = scrolltop + height / 2 - 16;
    	if ($('.'+cls).length == 0) {
    		$('<div>', {
    			'class': cls,
    			'style': 'position:absolute;background: url(/img/loading2.gif);' +
    			         'width:32px; height:32px; z-index:903; ' +
    			         'top:' + top + 'px;' +
    			         'left:' + left + 'px;'
    		}).appendTo($(document.body));
    	} else {
//    		var zindex = parseInt($('.mccdialog-overlay').css('z-index')) + 1;
//    		$('.'+cls).css('z-index', zindex);
    		$('.'+cls).css('top', top);
    		$('.'+cls).css('left', left);
    		$('.'+cls).show();
    	}
    }
    var hide_loading = function() {
    	var cls = 'mccdialog-loading';
    	$('.'+cls).hide();
    }
    var EF = function(){};
})();