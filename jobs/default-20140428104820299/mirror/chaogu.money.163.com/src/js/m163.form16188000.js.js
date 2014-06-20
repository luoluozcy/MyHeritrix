(function() {
	var types = ['integer', 'float', 'pfloat', 'wordnumber', 'word', 'chinese'];
	m163.form = {};
	m163.form.errors = 0;
	m163.form.ajaxes = {};
	m163.form.options = {'stopsubmit': false, 'onsubmit': false};
	m163.form.rules = {};
	m163.form.form = null;
	
	m163.form.has_errors = function(target) {
		var errors = 0;
		for (var p in target.ajaxes) {
			if (target.ajaxes[p].error) {
				errors++;
			}
		}
		return errors > 0;
	};
	
	m163.form.validate = function(form, rules, options) {
		if (typeof(form) == 'string')
			form = $('#'+form);
		form = $(form);
		this.form = form;
		this.options = options || m163.form.options;
		this.rules = rules || {};
		var thiz = this;
		var submit = function(){
            $('.error').hide();
            var vali = m163.form.do_validate(thiz);
            if(vali == false) {
                return false;
            }
            var submit = form.find('input[type="submit"]');
            if (submit.length == 0) {
                submit = form.find('input.submit');
            }
            if (submit.length > 0) {
            	if(submit.attr("rel") != "nodisabled") 
            		submit.attr('disabled', 'disabled');
            }
            
            if (thiz.options.onsubmit) {
                thiz.options.onsubmit();
                if (options.stopsubmit) return false;
            }
            return true;
        };
		form.bind('submit', submit);
		m163.form.bind_event(this, form, rules);
		m163.form.target = this;
		return this;
	};
	
	m163.form.do_validate = function(target) {
		target = target || m163.form.target;
		target.errors = 0;
		for (var prop in target.rules) {
			thiz = target.form.find('*[name="' + prop + '"]');
			var val = target.rules[prop];
			switch(typeof(val)) {
				case 'function': 
				   m163.form.validate_function(target, thiz, val);
				   break;
				case 'object': 
				   m163.form.validate_object(target, thiz, val);
				   break;
				case 'string':
				   kall('m163.form.validate_' + val, target, thiz);
				   break;
			}
		}
		
		if (target.errors > 0 || m163.form.has_errors(target)) {
			for (var p in target.ajaxes) {
				//console.log(p);
				//console.log(target.ajaxes[p].error);
				if (target.ajaxes && target.ajaxes[p].error) {
					$('.' + p + '_error').show();
				}
			}
			return false;
		}
		return true;
	};
	
	m163.form.bind_event = function(target, form, options) {
		target.names = {};
		target.ajaxes = {};
		for (var prop in options) {
			if ('name' in options[prop]) {
                target.names[prop] = options[prop].name;
			}
            var thiz = form.find('*[name="' + prop + '"]');
            $(thiz).focus(function(){
                $(form).find('.'+$(this).attr('name') + '_error').hide();
            });
            $(thiz).keydown(function(){
                $(form).find('.'+$(this).attr('name') + '_error').hide();
            });
            $(thiz).click(function(){
                $(form).find('.'+$(this).attr('name') + '_error').hide();
            });
            var val = options[prop];
            switch (typeof(val)) {
                case 'string':
                    if (types.has(val) !== false) {
                    	kall('m163.form.bind_'+val, thiz);
                    }
                    break;
                case 'object':
                    if ('type' in val && types.has(val.type) !== false) {
                    	kall('m163.form.bind_'+val.type, thiz);
                    }
                    if ('ajax' in val) {
                    	target.ajaxes[prop] = {};
                    	target.ajaxes[prop].passed = [];
                    	target.ajaxes[prop].failed = [];
                    	target.ajaxes[prop].error = false;
                    	m163.form.bind_ajax(target, thiz, val.ajax);
                    }
                    if ('length' in val) {
                    	m163.form.bind_length(thiz, val.length);
                    }
                    break;
            }
        }
	};
	
	m163.form.bind_ajax = function(target, widget, func) {
		var n = $(widget).attr('name');
		var m = '';
		widget.bind('keydown', function(e) {
			var s = target.ajaxes[n];
			s.error = false;
		});
		widget.bind('blur', function(e) {
			var v = $(widget).val();
			var s = target.ajaxes[n];
			if (s.failed.has(v)) {
				s.error = true;
				m163.form.output_error_message(target, widget, m);
				return false;
			}
			
			if (s.passed.has(v)) {
				s.error = false;
				return true;
			}
			
			func(function(result, msg, nocache){
				nocache = nocache || false;
				if (!nocache) {
					if (result) {
						s.error = false;
						s.passed.push(v);
					} else {
						s.failed.push(v);
						s.error = true;
						if (msg) {
							m = msg;
							m163.form.output_error_message(target, widget, msg);
						}
					}
				} else {
					if (!result && msg) {
						m = msg;
						m163.form.output_error_message(target, widget, msg);
					}
				}
			});
		});
	};
	
    m163.form.bind_integer = function(widget) {
        widget.bind('keydown', function(e) {
        	if (e.which >= 96 && e.which <= 105) return true;
            if ([0, 8, 9, 13, 37, 39].has(e.which)) return true;
            if (e.which >= 48 && e.which <= 57
                    && e.ctrlKey == false && e.shiftKey == false) {
                return true;
            } 
            
            return false;
        });
    };
    
    m163.form.submit = function(e) {
    	if (e.which == 13) $(this.form).submit();
    };
    
    m163.form.bind_pfloat = function(widget) {
    	widget.bind('keydown', function(e) {
    		m163.form.submit(e);
    		if (e.which >= 96 && e.which <= 105) return true;
    		if ([0, 8, 9, 13, 37, 39].has(e.which)) return true;
            if (e.which >= 48 && e.which <= 57
                    && e.ctrlKey == false && e.shiftKey == false) {
                return true;
            }
    		var v = $(widget).val();
    		v = v.full2half();
    		if (/\d+([\.|。]\d+)?/.test(v)) return true;
            if ((e.which == 46 || e.which == 110 || e.which == 190) && !v.contains('.')) {
                return true;
            } else {
                if ((e.ctrlKey == true || e.metaKey == true) 
                        && (e.which == 99 || e.which == 120)) {
                    return true;
                }
            }
            return false;
        });
        widget.bind('keyup', function(e) {
        	if ([0, 8, 9, 13, 37, 39].has(e.which)) return true;
        	if (e.which >= 96 && e.which <= 105) return true;
        	var v = $(widget).val();
        	if ((e.which == 46 || e.which == 110) && !v.contains('.'))
                return true;
            if ((e.ctrlKey == true || e.metaKey == true)  && e.which == 118) {
            	var v = $(e.target).val();
            	try {
            		v = v.full2half();
            		v = parseFloat(n);
            	} catch(e) {
            	}
        		$(e.target).val(v);
            }
        });
    };
    
    m163.form.bind_float = function(widget) {
        var v = $(widget).val();
    	widget.bind('keydown', function(e) {
    		if (e.which >= 96 && e.which <= 105) return true;
    		if ([0, 8, 9, 13, 37, 39].has(e.which)) return true;
            if (e.which >= 48 && e.which <= 57
                    && e.ctrlKey == false && e.shiftKey == false) {
                return true;
            }
            if (e.which == 45 && v.trim() == '') return true;
            if ((e.which == 46 || e.which == 110) && !v.contains('.')) {
                return true;
            } else {
                if ((e.ctrlKey == true || e.metaKey == true) 
                        && (e.which == 99 || e.which == 120)) {
                    return true;
                }
            }
            return false;
        });
        widget.bind('keyup', function(e) {
        	if (e.which >= 96 && e.which <= 105) return true;
            if ((e.ctrlKey == true || e.metaKey == true)  && e.which == 118) {
            	var n = $(e.target).val();
            	try {
            		v = parseFloat(n);
            	} catch(e) {
            		$(e.target).val(v);
            	}
            }
        });
    };
    
    m163.form.bind_wordnumber = function(widget) {
        widget.bind('keydown', function(e) {
        	if (e.which >= 96 && e.which <= 105) return true;
            if ([0, 8, 9, 13, 37, 39].has(e.which)) return true;
            if (e.which >= 48 && e.which <= 57
                    && e.ctrlKey == false && e.shiftKey == false) {
                return true;
            }
            if (e.which >= 65 && e.which <= 90 && e.ctrlKey == false) {
            	return true;
            }
            if ((e.ctrlKey == true || e.metaKey == true) 
                    && (e.which == 99 || e.which == 120)) {
                return true;
            }
            return false;
        });
    };
    
    m163.form.bind_word = function(widget) {
        widget.bind('keydown', function(e) {
        	if (e.which >= 96 && e.which <= 105) return true;
            if ([0, 8, 9, 13, 37, 39].has(e.which)) return true;
            if (e.which >= 65 && e.which <= 90 && e.ctrlKey == false) {
            	return true;
            }
            if ((e.ctrlKey == true || e.metaKey == true) 
                    && (e.which == 99 || e.which == 120)) {
                return true;
            }
            return false;
        });
    };
    
    m163.form.bind_chinese = function(widget) {
    	var v = $(widget).val();
    	var regex = new RegExp('^[\\u4E00-\\u9FA5\\uFA2D]+$');
		if(!regex.test(v)) return false;
		
		return true;
    };
    
    m163.form.isChinese = function(str) {
    	var regex = new RegExp('^[\\u4E00-\\u9FA5\\uFA2D]+$');
		if(!regex.test(str)) return false;
		
		return true;
    };
    
    m163.form.bind_length = function(widget, len) {
    	if ((typeof(len) == 'array' && len.length == 2) || typeof(len) == 'number') {
    		var mx;
    		if (typeof(len) == 'array') mx = len[1];
    		else mx = len;
	    	widget.bind('keydown', function(e) {
	    		if ([0, 8, 9, 13, 37, 39].has(e.which)) return true;
		    	var v = $(widget).val();
	    		if (v.length < mx) return true;
	    		return false;
	    	});
    	}
    };
    
	m163.form.validate_function = function(target, widget, func) {
		var result = func(widget);
		if (result !== true) {
			target.errors++;
			m163.form.output_error_message(target, widget, result);
			return false;
		}
		return result;
	};
	
	m163.form.validate_object = function(target, widget, object) {
		for (var prop in object) {
			var func = eval('m163.form.validate_'+prop);
			if (func) {
				func(target, widget, object[prop]);
			}
		}
	};
	
	m163.form.validate_type = function(target, widget, type) {
		switch(type) {
			case 'float':
                break;
            case 'url':
                m163.form.validate_url(target, widget);
                break;
            case 'email':
                m163.form.validate_email(target, widget);
                break;
            case 'phone':
            	m163.form.validate_phone(target, widget);
            	break;
            case 'chinese':
            	m163.form.validate_chinese(target, widget);
            	break;
            case 'wordnumber':
            	break;
            case 'word':
            	break;
		}
	};
	
	m163.form.validate_pfloat = function(target, widget) {
		var v = $(widget).val();
		try {
			if (v.isFloat()) {
				v = parseFloat(v);
				if (v > 0) return true;
			} 
		} catch(e) { }
		var n = get_name(target, widget);
		var msg = n + '应为大于0的数字';
		target.errors++;
		m163.form.output_error_message(target, widget, msg);
	};
	
	m163.form.validate_range = function(target, widget, range) {
		if (range.length != 2) return '验证的范围有错误';
		var v = $(widget).val();
		var n = get_name(target, widget);
		var msg = n + '需要是数字类型';
		try {
			if (v.isFloat()) {
				v = parseFloat(v);
				if (v >= range[0] && v <= range[1]) {
					return true;
				}
				msg = n + '需要在范围(' + range[0] + ' - ' + range[1] + ')内';
			}
		} catch (e) { }
		target.errors++;
		m163.form.output_error_message(target, widget, msg);
		return false;
	};
	
	m163.form.validate_chinese = function(target, widget) {
		var v = $(widget).val();
		try {
			if (m163.form.isChinese(v)) {
				return true;
			} 
		} catch(e) { }
		var n = get_name(target, widget);
		var msg = n + '应为中文字符';
		target.errors++;
		m163.form.output_error_message(target, widget, msg);
	};
	
	m163.form.validate_length = function(target, widget, len) {
		var v = $(widget).val();
		var mylen = v.trim().cleanword().length;
		var n = get_name(target, widget);
		var msg = '';
		switch(typeof(len)) {
			case 'string':
			    if (len == 'required' && mylen > 0) return true;
			    else msg = n + '不能为空';
			    break;
			case 'number':
			    if (mylen == len) return true;
			    else msg = n + '长度应为' + len + '位';
                break;
            case 'object':
                if (len.length == 1) {
                	if (mylen >= len[0])
                	   return true;
                    else
                	   msg = n + '长度应大于等于' + len[0] + '个字';
                }
                if (len.length == 2) {
                	if (len[0] == undefined) { 
                        if (mylen <= len[1])
                            return true;
                		else 
                            msg = n + '长度应小于等于' + len[1] + '个字';
                	} else if (len[1] == undefined) {
                        if (mylen >= len[0])
                            return true;
                		else 
                            msg = n + '长度应大于等于' + len[0] + '个字';
                	} else {
	                    if (mylen >= len[0] && mylen <= len[1])
	                		return true;
	                	else {
	                	    msg = n + '长度应在' + len[0] + '到' + len[1] + '个字之间';
	                	}
                	}
                }
                break;
		}
		target.errors++;
		m163.form.output_error_message(target, widget, msg);
		return false;
	};
	
	m163.form.validate_regex = function(target, widget, regex) {
		var v = widget.val();
		if(v == "") return true;
		try {
			regex = new RegExp(regex);
			if (regex.test(v)) return true;
		} catch(e) {}
		m163.form.errors++;
		var msg = get_name(target, widget) + '格式不正确';
		m163.form.output_error_message(target, widget, msg);
		return false;
	};
	
	m163.form.validate_email = function(target, widget) {
		return m163.form.validate_regex(target, widget, '^[\\d\\w\\-_.]+@[0-9a-zA-Z_\\-]+(\\.[0-9a-zA-Z_\\-]+)*$');
	};
	
	m163.form.validate_phone = function(target, widget) {
		return m163.form.validate_regex(target, widget, '^\\d{6,20}$');
	};
	
	m163.form.validate_url = function(target, widget) {  
		return m163.form.validate_regex(target, widget, /^(?:https?|ftp)\:\/\/(?:\w+\.?)*\.\w+(?:\/?\w*)*$/);
	};	
	
    m163.form.output_error_message = function(target, widget, error) {
    	var h = get_error_holder(widget, this.options.tag);
    	h.empty();
    	h.html(error);
    };
    
	var kall = function(fname) {
        var func = eval(fname);
        if (func) {
            if (arguments.length == 2)
                return func(arguments[1]);
            if (arguments.length == 3)
                return func(arguments[1], arguments[2]);
            return func(arguments.slice(1));
        }
    };
    var get_parent = function(widget) {
    	var p = $(widget).parent();
        if ($(widget).length > 1) {
            p = $(widget).parent().parent();
        }
        return p;
    };
    var get_name = function(target, widget) {
    	var n = '';
    	if ($(widget).attr('name') in target.names) {
    		n = target.names[$(widget).attr('name')];
    	}
    	return n;
    };
    
	var get_error_holder = function(widget, tag) {
		tag = tag || 'p';
		var p = get_parent(widget);
		var holder = $('.' +  $(widget).attr('name') + '_error');
		if (holder.length > 0) {
			holder.show();
			return holder;
		} 
		holder = $('<'+tag+'>', {
			'class': 'error ' + $(widget).attr('name') + '_error'
		});
		if (tag == 'p') {
	 		holder.appendTo($('<div>', {'class': 'clearfix'}).appendTo($(p)));
		} else {
			holder.appendTo($(p));
		}
		return holder;
	};
})();


String.prototype.cleanword = function() {
    var str = this.toString();
    var start = str.indexOf('if gte mso');
    while (start != -1) {
        var tail = str.indexOf('<![endif]-->');
        str = str.substring(tail + 12);
        start = str.indexOf('if gte mso');
    } 
    
	str = str.replace(/(<([^>]+)>)/gi, '');
    return str ;
};