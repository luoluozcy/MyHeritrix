jQuery.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top, pos = element.css("position");
        jQuery(window).scroll(function() {
            var scrolls = jQuery(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
                        top: 40
                    }); 
                } else {
                    element.css({
                        top: scrolls
                    }); 
                }
            }else {
                element.css({
                    position: pos,
                    top: top
                }); 
            }
        });
};
    return jQuery(this).each(function() {
        position(jQuery(this));                       
    });
};
jQuery.fn.smartFloat2 = function() {
    var position = function(element) {
        var top = element.position().top, pos = element.css("position");
        jQuery(window).scroll(function() {
            var scrolls = jQuery(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
                        top: 10
                    }); 
                } else{
                    element.css({
                        top: scrolls - 1100
                    }); 
                }
            }else {
                element.css({
                    position: pos,
                    top: top
                }); 
            }
        });
};
    return jQuery(this).each(function() {
        position(jQuery(this));                       
    });
};
/*ÖÃ¶¥UI*/
jQuery.fn.smartFloatToTop = function() {
    var position = function(element) {
        var top = element.position().top, pos = element.css("position");
        jQuery(window).scroll(function() {
            var scrolls = jQuery(this).scrollTop();
            if (scrolls > 0) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",                        
                        top: 588,
                        left: "auto"
                    }); 
                 element.css('margin-left','965px');
                } else {
                    element.css({
                        top: scrolls+588
                    }); 
                }
               jQuery("#gotop").css('display','block');
            }else {
                element.css({
                    position: pos,
                    top: 588
                }); 
                jQuery("#gotop").css('display','none');
            }
        });
};
    return jQuery(this).each(function() {
        position(jQuery(this));                       
    });
};