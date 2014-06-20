(function() {
	m163utils = {};
	m163utils.message = function(option) {
        this.option = option || {};
        this.message = function(msg) {
        	m163utils.message.message(msg);
        };
        this.warning = function(msg) {
        	m163utils.message.warning(msg);
        };
        this.error   = function(msg) {
        	m163utils.message.error(msg);
        };
	};
	
	m163utils.message.dismissin = 3000;
	m163utils.message.position  = 'center'; //topleft,      topmiddle,    topright;
	                                          //bottomleft, bottommiddle, bottomright;/center;
	
	// global message :::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
	m163utils.message.success = function(msg, options) {
		options = options || {};
        holder = set_message(msg, options);
        var background = options.background || '#b6ec7e';
        var color = options.color || '#333333';
        var border = options.border || false;
        holder.css('background', background);
        holder.css('color', color);
        if(border) holder.css('border', border);
	};
	m163utils.message.warning = function(msg, options) {
		holder = set_message(msg, options);
		holder.css('background', '#fff1ab');
	};
	m163utils.message.doing = function(msg, options) {
		var delay = m163utils.message.dismissin;
		m163utils.message.dismissin = false;
		holder = set_message(msg, options);
		holder.css('background', '#fff1ab');
		m163utils.message.dismissin = delay;
	};
	m163utils.message.loading = function(msg, options) {
		var delay = m163utils.message.dismissin;
		m163utils.message.dismissin = false;
		holder = set_message(msg, options);
		holder.css('background', '#fff1ab');
		m163utils.message.dismissin = delay;
	};
	m163utils.message.loaded = function() {
		hide_holder();
	};
	m163utils.message.error  = function(msg, options) {
		holder = set_message(msg, options);
		holder.css('background', '#ffd0ca');
	};
	
	var get_message_holder = function() {
		if ($('#global_message').length > 0) return $('#global_message');
		
		var holder = $('<div>', {
			'id'     : 'global_message',
			'style'  : 'z-index: 999; ' +
			             'font-size: 13px; ' +
			             'font-size: 14px; ' +
			             'position: absolute; ' +
			             'display: inline-block; ' +
			             'top: 0; ' +
			             'text-align: center; ' +
			             'font-weight: bold;'
		});
        holder.append('<span></span>');
		holder.appendTo($(document.body));
		
		return holder;
	};
	var set_message = function(msg, options) {
		var self = m163utils.message;
		var holder = get_message_holder();
		var boxleft = 0;
		var boxtop  = 0;
		var len_digital_lowercase = 0;
		var len_uppercase = 0;
		var len = msg.length;
		var mdl = msg.match(/[\da-z\.]/g);
		if (mdl) len_digital_lowercase = mdl.length;
		var mu = msg.match(/[A-Z]/g);
		if (mu) len_uppercase = mu.length;
		var len_chinese = len - len_digital_lowercase - len_uppercase;
		var width = len_chinese * 16 + len_digital_lowercase * 7.1 + len_uppercase * 9.4 + 20;
		holder.css('width', width);
		
		options  = options || {};
		target   = options.target || window;
		position = options.position || self.position;
		
		var offset = $(target).offset() || {'left': $(document).scrollLeft(), 'top': $(document).scrollTop()};
		if (position == 'topmiddle' || position == 'bottommiddle' || position == 'center') {
            boxleft = ($(target).width() - width) / 2; 			
		} else if (position == 'topright' || position == 'bottomright') {
			boxleft = $(target).width() - holder.width();
		}
		boxleft += offset.left + 3;
		
		if (position == 'bottommiddle' 
		  || position == 'bottomleft' 
		  || position == 'bottomright') {
            boxtop += $(target).height();
            boxtop -= 16; 
        }		
        if (position == 'center') {
        	boxtop += ($(target).height() - holder.height()) / 2; 
        }
        boxtop += offset.top;
		holder.find('span').html(msg);
		holder.css('left', boxleft);
	    holder.css('top', boxtop);
	    if( m163utils.message.t )
	    {
	    	clearTimeout(m163utils.message.t);
	    }
		holder.show();
		if (self.dismissin !== false) {
			if (position == 'bottommiddle' 
	          || position == 'bottomleft' 
	          || position == 'bottomright') {
				m163utils.message.t = setTimeout("holder.slideDown(100)", m163utils.message.dismissin );
				//holder.delay(m163utils.message.dismissin).slideDown(100);
			} else {
				m163utils.message.t = setTimeout("holder.slideUp(100)", m163utils.message.dismissin );
				//holder.delay(m163utils.message.dismissin).slideUp(100);
			}
		}
		return holder;
	};
	var hide_holder = function(sec) {
		var holder = $('#global_message');
        if (holder.length > 0) {
        	if (sec) {
        		holder.hide(sec);
        	} else {
	        	holder.hide();
        	}
        }
	};
	$(document).scroll(function(){
		hide_holder();
	});
	// global message ..........................................................
	
	
})();

