var Common={init:function(){this.radioStyle(),this.checkboxStyle(),this.gotop(),this.fastNav(),this.videoHandle(),this.logoutControl(),this.serviceInit("#explore-link","#explore-menu","#support-menu"),this.serviceInit("#support-link","#support-menu","#explore-menu")},addFlash:function(a,b,c,d){var e={menu:"false",allowFullScreen:"false",allowScriptAccess:"true",wmode:"transparent",base:"."};"music"==arguments[4]&&(e.wmode="window"),swfobject.embedSWF(a,b,c,d,"9.0.0","","",e)},validate:{digits:function(a){var b=/^[0-9]+$/;return b.test(a)},mobile:function(a){var b=/^[1][3-8]\d{9}$/;return b.test(a)},email:function(a){var b=/^[0-9a-zA-Z+_.-]+@[0-9a-zA-Z_-]+\.[0-9a-zA-Z_.-]+$/;return b.test(a)}},applyInit:function(){var a=$(".applyLogin");a.find("input[type=text]").val(""),Common.errorShow("&nbsp;"),a.show().siblings().hide();var b=($("#applyForm > div"),$(".ui-nav a",$("#applyBox")));b.removeClass("active").addClass("disable"),b.eq(0).addClass("active")},applyShow:function(a){var b=$("#applyForm > div");b.eq(a).show().siblings().hide()},apply:function(){this.applyInit();var a=$(".btn_apply"),b=$("#bar .btn_small"),c=$("#sidebar .ts a"),d=$("#newsbar .apply");a.click(function(){return $.sc2.lightBox($("#applyBox"),{model:!0,hasClose:!1,fixed:!0}),Common.setSendTime(),!1}),b.click(function(){return $.sc2.lightBox($("#applyBox"),{model:!0,hasClose:!1,fixed:!0}),Common.setSendTime(),!1}),c.click(function(){return $.sc2.lightBox($("#applyBox"),{model:!0,hasClose:!1,fixed:!0}),Common.setSendTime(),!1}),d.click(function(){return $.sc2.lightBox($("#applyBox"),{model:!0,hasClose:!1,fixed:!0}),Common.setSendTime(),!1});var e=$("#applyWrap .closeBtn");e.click(function(){$("#applyBox").hide(),$("#boxModel").remove(),Common.applyInit()})},applyLogin:function(){var a=$("#mobile"),b=$("#code"),c=$("#submitLogin a"),d=0;c.click(function(){if(1!=d){var c={mobile:$.trim(a.val()),code:$.trim(b.val())};if(Common.applyValidate.mobile(c.mobile)&&Common.applyValidate.code(c.code)&&!$.cookie(c.mobile)){var e=$(this);d=1,e.find("a").addClass("disabled").find(".button-right").text("正在提交中...");var f=($.cookie("_ANTICSRF"),"/signup");$("#uriPrefix").val()&&(f=$("#uriPrefix").val()+f),$.post(f,{phoneNumber:c.mobile,captcha:c.code,token:Common.getToken(),t:(new Date).getTime()},function(a){if(d=0,e.find("a").removeClass("disabled").find(".button-right").text("立即申请"),"success"==a.msg)Common.errorShow("&nbsp;"),Common.applyShow(1),$.cookie(c.mobile,1,{expires:30}),a.imSend&&$.post("/cd-key/send",{phoneNumber:c.mobile,token:Common.getToken(),t:(new Date).getTime()},function(){});else{if("invalid phone number"==a.msg)return void Common.errorShow("手机号格式不正确！");if("invalid captcha"==a.msg)return void Common.errorShow("无效的短信验证码！");if("occupied"==a.phone)return Common.errorShow("手机号已申请过！"),void $.cookie(c.mobile,1,{expires:30});if("fail"==a.msg||"assign fail"==a.msg||"send fail"==a.msg)return void Common.errorShow("提交失败！")}},"json")}}}),a.focus(function(){$(this).parent("div").addClass("focus"),""!=$(this).val()?$(this).siblings(".close").fadeIn(200).click(function(){$(this).siblings("input").val("").focus()}):$(this).siblings(".close").fadeOut(200)}).keyup(function(){$(this).triggerHandler("focus")}),b.focus(function(){$(this).parent("div").addClass("focus"),""!=$(this).val()?$(this).siblings(".close").fadeIn(200).click(function(){$(this).siblings("input").val("").focus()}):$(this).siblings(".close").fadeOut(200)}).keyup(function(){$(this).triggerHandler("focus")}),a.blur(function(){var b=$.trim(a.val());$(this).parent("div").removeClass("focus"),$(this).siblings(".close").fadeOut(200),!Common.applyValidate.mobile(b)}),b.blur(function(){var a=$.trim(b.val());$(this).parent("div").removeClass("focus"),$(this).siblings(".close").fadeOut(200),!Common.applyValidate.code(a)})},applyValidate:{mobile:function(a){return""==a?(Common.errorShow("请填写手机号！"),!1):a.length<11||!Common.validate.mobile(a)?(Common.errorShow("请填写正确的手机号！"),!1):$.cookie(a)?(Common.errorShow("手机号已申请过！"),!1):(Common.errorShow("&nbsp;"),!0)},code:function(a){return""==a?(Common.errorShow("请填写验证码！"),!1):a.length<6||!Common.validate.digits(a)?(Common.errorShow("请填写正确的验证码！"),!1):(Common.errorShow("&nbsp;"),!0)}},sendCode:function(){this.setSendTime(),$("#sendCode").click(function(){var a=$.trim($("#mobile").val());return Common.applyValidate.mobile.call(this,a)?($.cookie("TIME_HS",60),Common.setSendTime(),$.post("/phone/captcha/apply-for",{phoneNumber:a,token:Common.getToken(),t:(new Date).getTime()},function(b){"occupied"==b.phone?(Common.errorShow("手机号已申请过！"),$.cookie(a,1,{expires:30})):Common.errorShow("waiting"==b.send||"limit"==b.send?"您的操作过于频繁，请稍后再试！":b.send?"验证码已发送，请注意查收!":"发送失败!")},"json"),!1):!1})},setSendTime:function(){var a,b=$.cookie("TIME_HS"),c=$("#sendCode"),d=$(".sendTime");if(d.find("span").html(b),b>0){c.hide(),d.show();var e=function(){b--,$.cookie("TIME_HS",b),d.find("span").html(b),0==b&&(clearInterval(a),d.hide(),c.show())};a=setInterval(e,1e3)}},faq:function(){var a=$("#submitFaq a"),b=$(".radioLine a[rel]"),c=0;b.click(function(){var a=$(this).attr("rel");"Q6c-1"==a?$(this).parent().find("a[rel='Q6c-1']").hasClass("checked")?$(".radioLine[data-rel='"+a+"']").show():$(".radioLine[data-rel='"+a+"']").hide():$(this).hasClass("checked")?$(".radioLine[data-rel='"+a+"']").show():$(".radioLine[data-rel='"+a+"']").hide()}),$(".radioLine[rel='option']").hide();var d=$(".faq .otherInput"),e='<input type="text" class="input_txt input_txt_line" maxlength="10" tabindex="2" style="width:100px;">';d.click(function(){var a=$(this),b=a.next().length;a.hasClass("checked")&&!b?$(this).after(e):$(this).next().remove()}),a.click(function(){var a=$("#faqRealName"),b=$("#faqAddress");if(1!=c){if(""==a.val()||""==b.val())return alert("请将姓名或常住地填写完整！"),!1;for(var d=$("#applyForm .faq"),e=[],f=[],g=$(".radioLine:visible",d),h=($(".radioLine[rel!='option']",d),0),i=0,j=g.length;j>i;i++){var k=$(g[i]).find(".checked");k.length&&h++,e[i]=[];var l=$(g[i]).find("h3").text();f.push(l);for(var m=0,n=k.length;n>m;m++)e[i].push($(k[m]).next().hasClass("input_txt_line")?$(k[m]).text()+":"+$(k[m]).next().val():$(k[m]).text())}if(h<g.length)return void alert("请将问卷填写完整！");for(var o={},m=0,n=f.length;n>m;m++)o[f[m]]=e[m];o["真实姓名"]=a.val(),o["常住地（省/市）"]=b.val();var p=$(this);c=1,p.addClass("submitFaqDis"),$.post("/wenjuan",{phoneNumber:d.attr("data-phoneNumber"),email:d.attr("data-email"),answer:JSON2.stringify(o),token:Common.getToken(),t:(new Date).getTime()},function(a){p.removeClass("submitFaqDis"),c=0,"success"==a.msg&&(Common.errorShow("问卷提交成功!"),Common.applyShow(2)),"fail"==a.msg&&Common.errorShow("问卷提交失败!"),"invalid"==a.msg&&Common.errorShow("无效的问卷结果!")},"json")}})},errorShow:function(a){var b=$("#applyForm .error");b.html(a)},setScroll:function(){$(".faq").tinyscrollbar({scrollbarSelector:".bar",thumbSelector:".trackbar",viewportSelector:".faqWrap",overviewSelector:".faqCon",sizethumb:28,minThumbSize:28})},radioStyle:function(){var a=$(".radioInput"),b=$("a",a);b.click(function(){var a=$(this);a.addClass("checked").siblings().removeClass("checked")})},checkboxStyle:function(){var a=$(".checkboxInput"),b=$("a",a);b.click(function(){var a=$(this);a.toggleClass("checked")})},fastNav:function(){{var a=$("#sidebar"),b=$(".fastNav",a);$("ul",a)}b.mouseenter(function(){var b=a.css("right");"5px"==b?a.stop().animate({right:"-97px"},600,"easeInOutExpo"):a.stop().animate({right:"5px"},600,"easeInOutExpo")})},gotop:function(a){$(window).scroll(function(){var b=$(window).scrollTop(),c=$("#gotop");a||(a=200),b>a?c.show():c.hide()})},cnzzHide:function(){var a=$("a[title='站长统计']");a.hide()},Lightbox:function(a,b,c){var d=c,a="width:"+a+"px;",b="height:"+(b+21)+"px;",e='<div style="display: block;'+a+b+'" id="lightbox-container"><h1 id="lightbox-title"></h1><div id="lightbox-content"><img style="'+a+"+"+b+'" src="'+d+'"></div><div class="corner corner-top-left"></div><div class="corner corner-top-right"></div><div class="corner corner-bottom-left"></div><div class="corner corner-bottom-right"></div><div style="'+a+'" id="lb-border-top" class="border"></div><div style="'+b+'" id="lb-border-right" class="border"></div><div style="'+a+'" id="lb-border-bottom" class="border"></div><div style="'+b+'" id="lb-border-left" class="border"></div><a href="javascript:;" class="ui-element lightbox-close"></a></div>';$.sc2.lightBox(e,{model:!0,hasClose:!1}),$(".lightbox-close").live("click",function(){$("#popBox").remove(),$("#boxModel").remove()})},isIOS:function(){var a=/(iPhone|iPad|iPod)/gi;return a.test(navigator.userAgent)},isTouch:function(){var a=/(Android|iPod|iPad|iTouch|iPhone|BlackBerry|SymbianOS|SymbOS|Windows Phone OS|WAP|pod|pad)/gi;return a.test(navigator.userAgent)},serviceInit:function(a,b,c){var d,e=$(a),b=$(b),c=$(c);e.click(function(){return b.toggle(),c.hide(),!1}),e.mouseleave(function(){d=setTimeout(function(){b.hide()},800)}),e.mouseenter(function(){clearTimeout(d)}),b.mouseleave(function(){var a=$(this);a.hide()}),b.mouseenter(function(){clearTimeout(d)})},videoWrap:function(a,b,c,d){var e='<object width="'+b+'" height="'+c+'" id="FPlayer" data="'+a+'" type="application/x-shockwave-flash"><param value="transparent" name="wmode" /><param value="true" name="allowFullScreen" /><param value="always" name="allowscriptaccess" /><param value="'+a+'" allownetworking="all" name="movie" /><param value="'+d+'" name="flashvars" /></object>';return e},getBoxwrap:function(){var a=['<div id="lightbox-container" style="display:block;width:960px;height: 595px;">','<h1 id="lightbox-title"></h1>','<div id="lightbox-content">',"","</div>",'<div class="corner corner-top-left"></div>','<div class="corner corner-top-right"></div>','<div class="corner corner-bottom-left"></div>','<div class="corner corner-bottom-right"></div>','<div class="border" id="lb-border-top" style="width: 960px;"></div>','<div class="border" id="lb-border-right" style="height: 595px;"></div>','<div class="border" id="lb-border-bottom" style="width: 960px;"></div>','<div class="border" id="lb-border-left" style="height: 595px;"></div>','<div class="control-wrapper no-paging no-gallery">','<p class="title"></p>',"</div>",'<a class="ui-element lightbox-close" href="javascript:;"></a>',"</div>"];return a},setBoxwrap:function(a,b,c){var d='<div id="lightbox-container" style="display:block;width:'+a+";height: "+b+';"><div id="lightbox-content">'+c+'</div><div class="corner corner-top-left"></div><div class="corner corner-top-right"></div><div class="corner corner-bottom-left"></div><div class="corner corner-bottom-right"></div><div class="border" id="lb-border-top" style="width: '+a+';"></div><div class="border" id="lb-border-right" style="height: '+b+';"></div><div class="border" id="lb-border-bottom" style="width: '+a+';"></div><div class="border" id="lb-border-left" style="height: '+b+';"></div><a class="ui-element lightbox-close" href="javascript:;"></a></div>';return d},videoHandle:function(){$(".lightbox-close").live("click",function(){$("#popBox").remove(),$("#boxModel").remove()})},showIosVideo:function(a){var b='<video controls="controls" width="960" height="520" poster="">                	<source src="'+a+'" type="video/mp4" />        		</video>';return b},get_redirect_url:function(){var a=window.parent.location.href;return(a.indexOf("#")>0||a.indexOf("?")>0)&&(a=a.split("#")[0].split("?")[0]),a},logoutControl:function(){var a=this.get_redirect_url(),b=window.parent.location.protocol+"//"+window.parent.location.host;$(".commentAdminLogout").live("click",function(){location.href=b+"/comments/logout?target="+a})},getToken:function(){return $.cookie("_ANTICSRF")},juicerInit:function(){juicer.set({"tag::interpolateOpen":"{{","tag::interpolateClose":"}}","tag::noneencodeOpen":"{{{","tag::noneencodeClose":"}}}"})},subNav:function(){var a=$("#nav");navBtn=a.find("li"),navBtn.hover(function(){$(this).children(".subNav").stop().fadeIn()},function(){$(this).children(".subNav").hide()})}};