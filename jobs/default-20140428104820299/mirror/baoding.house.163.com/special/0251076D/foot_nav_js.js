(function($, undefined){
    var 
        getElementHeight=function(elm){return elm.clientHeight||elm.offsetHeight||0},
        getElementWidth=function(elm){return elm.clientWidth||elm.offsetWidth||0},
        getElementPosition = function(a){var b=navigator.userAgent.toLowerCase();var c=(b.indexOf('opera')!=-1);var d=(b.indexOf('msie')!=-1&&!c);var e=typeof a=="string"?document.getElementById(a):a;if(e.parentNode===null||e.style.display=='none'){return false}var f=null;var g=[];var h;if(e.getBoundingClientRect){h=e.getBoundingClientRect();var i=Math.max(document.documentElement.scrollTop,document.body.scrollTop);var j=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);return{x:h.left+j,y:h.top+i}}else if(document.getBoxObjectFor){h=document.getBoxObjectFor(e);var k=(e.style.borderLeftWidth)?parseInt(e.style.borderLeftWidth):0;var l=(e.style.borderTopWidth)?parseInt(e.style.borderTopWidth):0;g=[h.x-k,h.y-l]}else{g=[e.offsetLeft,e.offsetTop];f=e.offsetParent;if(f!=e){while(f){g[0]+=f.offsetLeft;g[1]+=f.offsetTop;f=f.offsetParent}}if(b.indexOf('opera')!=-1||(b.indexOf('safari')!=-1&&e.style.position=='absolute')){g[0]-=document.body.offsetLeft;g[1]-=document.body.offsetTop}}if(e.parentNode){f=e.parentNode}else{f=null}while(f&&f.tagName!='BODY'&&f.tagName!='HTML'){g[0]-=f.scrollLeft;g[1]-=f.scrollTop;if(f.parentNode){f=f.parentNode}else{f=null}}return{x:g[0],y:g[1]}},
        getViewHeight=function(){return document.all?document.getElementsByTagName("html")[0].offsetHeight:window.innerHeight},
        getPageHeight=function(){return Math.max(getViewHeight(),document.getElementsByTagName("body")[0].scrollHeight)},
        insertAfter = function(a,b){var c=b.parentNode;if(c.lastChild==b){c.appendChild(a)}else{c.insertBefore(a,b.nextSibling)}},
        removeElement = function(a){var b=a.parentNode;b&&b.removeChild(a)},
        getPageScrollTop = function(){
            return Nbd.scrollTop || document.documentElement.scrollTop;
        },
        extend = NTES.util.extend,
        emptyFunc = function(){},
        isIE6 = !!NTES.browser.msie && (NTES.browser.version == "6.0"),
        
        console = typeof console == "undefined" ? (console = {}, console.log = emptyFunc, console) : console,
        
        /*
         * default configs
         */
        duration = 0,
        boundary = 0,
        triggerShowClass = "js_N_nav_footer_trigger_show",
        footerNavFixedClass = "js_N_nav_footer_nav_fixed",
        globalNavSelector = "#js_N_nav_footer",
        globalNavTriggerSelector = "#js_N_nav_footer_trigger",
        onGlobalNavFixedChange = emptyFunc,
        autoBindTrigger = false,
        /*
         * default apis
         */
        
        defaultsInterface = {
            destory: emptyFunc,
            update: emptyFunc,
            fixGlobalNav: emptyFunc
        },
        
        
        
        /*
         * private member
         */
        hasFixed = false,
        triggerHasFixed = false,
        keepFixed = false,
        
        scrollTimer = null,
        Nwin = null,
        Nbd = null,
        footerNav = null,
        footerNavTrigger = null,
        footerNavPlaceholder = null,
        triggerElm = null,
        footerNavElm = null,
        
        viewHeight = 0,
        pageHeight = 0,
        footerNavHeight = 0,
        
        scrollHandler = emptyFunc,
        resizeHandler = emptyFunc,
        triggerClickHander = emptyFunc,
        
        footerNavTriggerPostion = {x: 0, y: 0},
        footerNavPosition = {x:0, y: 0},
        lastScrollTop = 0,
        
        
        
        init = function(configs){
            
            
            
            if(isIE6){
                return false;
            }
            
            Nwin = $(window);
            Nbd = document.body;
            
            
            /*
             * make config
             */
            configs = configs || {};
            onGlobalNavFixed = configs.onGlobalNavFixed || emptyFunc;
            triggerShowClass = configs.triggerShowClass || triggerShowClass;
            footerNavFixedClass = configs.footerNavFixedClass || footerNavFixedClass;
            footerNav = $(configs.globalNavSelector || globalNavSelector);
            footerNavTrigger = $( configs.globalNavTriggerSelector || globalNavTriggerSelector);
            autoBindTrigger = configs.autoBindTrigger || autoBindTrigger;
            onGlobalNavFixedChange = configs.onGlobalNavFixedChange || onGlobalNavFixedChange;
            
            footerNavPlaceholder = document.createElement("div");
            insertAfter(footerNavPlaceholder, footerNav);
            triggerElm = footerNavTrigger.get(0);
            footerNavElm = footerNav.get(0);
            
            
            viewHeight = getViewHeight();
            pageHeight = getPageHeight();
            
            footerNavHeight = getElementHeight(footerNav);
            footerNavTriggerHeight = 33;
                    
            footerNavTriggerPostion = getElementPosition(triggerElm);
            footerNavPosition = getElementPosition(footerNavElm);
            
            //init position info
            hasFixed = false;
            triggerHasFixed = false;
            
            Nbd.scrollTop = lastScrollTop;
            setTriggerPosition();
            keepFixed && setGlobalNavPosition();
            
            
            bindEvent();
            
            return true;        
        },
        bindEvent = function(){
            
            var setTimer = function(fn){
                    if(duration){
                        scrollTimer = setTimeout(function(){fn()}, duration);
                        return;
                    }
                    fn();
                };
            scrollHandler = function(e){
                lastScrollTop = getPageScrollTop();
                if(scrollTimer){
                    clearTimer();
                    return;
                }
                setTimer(function(){
                    
                    //reset trigger and nav postion
                    !keepFixed && setTriggerPosition();
                    keepFixed && setGlobalNavPosition();
                    clearTimer();
                });
            };
            resizeHandler = function(){
                update();
            };
            triggerClickHander = function(){
                if(hasFixed){
                    keepFixed = false;
                    setGlobalNavPosition(true, true);
                    footerNavTrigger.removeCss("sitemap-ctrl-active");
                    return;
                }
                keepFixed = true;
                setGlobalNavPosition(true, false);
                footerNavTrigger.addCss("sitemap-ctrl-active");
            };
            Nwin.addEvent("scroll", scrollHandler);
            Nwin.addEvent("resize", resizeHandler);
            autoBindTrigger && footerNavTrigger.addEvent("click", triggerClickHander);
            
        },
        
        setTriggerPosition = function(force, clear){
            var detectY = getPageScrollTop() + viewHeight + boundary - footerNavTriggerHeight,
                resetTriggerTop = 0;
                
            if((force && clear) || !keepFixed && (detectY >= footerNavTriggerPostion.y)){
                if(!triggerHasFixed){
                    return;
                }
                triggerHasFixed = false;
                clearTriggerFix();
                return;
            }
            
            if((force && !clear) || (detectY < footerNavTriggerPostion.y)){
                if(triggerHasFixed && !force){
                    return;
                }
                triggerHasFixed = true;
                
                triggerElm.style.position = "fixed";
                triggerElm.style.left =  footerNavTriggerPostion.x + "px";
                
                resetTriggerTop = viewHeight - boundary - footerNavTriggerHeight;
                
                if(hasFixed ){
                    triggerElm.style.top = (resetTriggerTop - footerNavHeight) + "px";
                }else{
                    triggerElm.style.top = resetTriggerTop + "px";
                }
            }
            
        },
        setGlobalNavPosition = function(force, clear){
            var detectY = getPageScrollTop() + viewHeight + boundary - footerNavHeight;
            
            if((force && clear) || (detectY >= footerNavPosition.y)){
                
                if(!hasFixed){
                    return;
                }else{
                    globlNavFixChange(false);
                }
                clearGlobalFix();
                
                return;
                
            }
            if((force && !clear) || (detectY < footerNavPosition.y)){
                if(hasFixed){
                    return;
                }else{
                    globlNavFixChange(true);
                }
                
                footerNavPlaceholder.style.height = footerNavHeight + "px";
                footerNav.addCss(footerNavFixedClass);
                footerNavElm.style.top = (viewHeight - footerNavHeight) + "px";
            }
            
        },
        
        clearTriggerFix = function(){
            triggerElm.style.position = "";
            triggerElm.style.left =  "";
            triggerElm.style.top = "";
        },
        clearGlobalFix = function(){
            footerNavPlaceholder.style.height = "";
            footerNav.removeCss(footerNavFixedClass);
            footerNavElm.style.top = "";
        },
        
        globlNavFixChange = function(fix){
            hasFixed = !!fix;
            setTriggerPosition(true, keepFixed ? !hasFixed: hasFixed);
            onGlobalNavFixedChange(hasFixed);
        },
        
        
        clearTimer = function(){
            if(scrollTimer){
                clearTimeout(scrollTimer);
                scrollTimer = null;
            }
        },
        
        update = function(){
            destory();
            init();
        },
        destory = function(){
            clearTimer();
            Nwin.removeEvent("scroll", scrollHandler);
            Nwin.removeEvent("resize", resizeHandler);
            autoBindTrigger && footerNavTrigger.removeEvent("click", triggerClickHander);
            
            clearGlobalFix();
            clearTriggerFix();
            
            removeElement(footerNavPlaceholder);
            
        };
        
        NTES.plugin = NTES.plugin || {};
        NTES.plugin.globalFixedNav = function(configs){
            
            
            if(init(configs)){
                defaultsInterface = extend(defaultsInterface, {
                    destory: function(){
                        destory();
                    },
                    update: function(){
                        update();
                    },
                    fixGlobalNav: function(fix){
                        keepFixed = !!fix;
                        setGlobalNavPosition(true, !keepFixed);
                    }
                    
                });     
            };
            
            //once been instanced, destory export api;
            NTES.plugin.globalFixedNav = emptyFunc;
            
            return defaultsInterface;
            
        };
        
        NTES.ready(function(){
            
            //for test
            window.gf = NTES.plugin.globalFixedNav({
                duration: 0,
                boundary: 0,
                triggerShowClass: "js_N_nav_footer_trigger_show",
                footerNavFixedClass: "js_N_nav_footer_nav_fixed",
                globalNavSelector: "#js_N_nav_footer",
                globalNavTriggerSelector: "#js_N_nav_footer_trigger",
                onGlobalNavFixedChange: function(beFixed){
                    console.log(beFixed);
                },
                autoBindTrigger: true
                
            });
        });
})(NTES);