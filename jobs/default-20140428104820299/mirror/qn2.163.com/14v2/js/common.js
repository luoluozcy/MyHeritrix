function rand(num) {
   return Math.floor(Math.random()*num)+1;
}
$(document).ready(function(){
	nie.use(["ui.tab","util.swfobject","nie.util.qUrs","nie.art.disclaimer","nie.util.share"], function(){
		var o1=new nie.util.qUrs({
			holder:"#qreg",//����ѡ������Ĭ��Ϊ"div.NIE-quickReg"
			"type":1//��� 1:����ע����Ҫ��֤��;2:����ע�᲻��Ҫ��֤��;			
			//"msgType":1//�ύ����Ϣ��� 1:����(Ĭ��);2:�л���(iframeר��)
		});
		if($.browser.msie && parseInt($.browser.version)<=6){
			$('#qreg li.qr-tab-1').bind({
				click:function(){$('#qreg li.qr-tab-2').css('background-position','-121px -70px');$(this).css('background-position','0 -70px');},
				mouseover:function(){$(this).css('background-position','0 -70px');},
				mouseout:function(){if($(this).hasClass('qr-tab-current') == false){$(this).css('background-position','0 -110px');}}
			});
			$('#qreg li.qr-tab-2').bind({
				click:function(){$('#qreg li.qr-tab-1').css('background-position','0 -110px');$(this).css('background-position','-121px -110px');},
				mouseover:function(){$(this).css('background-position','-121px -110px');},
				mouseout:function(){if($(this).hasClass('qr-tab-current') == false){$(this).css('background-position','-121px -70px');}}
			});
			$('#qreg li.qr-tab-1').css('background-position','0 -70px');
		}
		domain = 'http://'+document.domain;
		if (location.port!=''){
			domain  = domain+':'+location.port;
		}
		var lnk = location.href;
		if(lnk.indexOf('/news/') >=0 ){
			$('#nav_news a').addClass('current');
		}else if(lnk.indexOf('/guide/') >= 0){
			$('#nav_info a').addClass('current');
		}

		nie.art.disclaimer.appendTo($(".artDisclaimer"));

		nie.util.share({
				type:4,
				imgs:$("#NIE-art .artText img")
			});
		nie.util.share({
				type:5,
				txt:$("#NIE-art .artText")
			});
	});
});

function setNavMenu(path){
	if(typeof(path) == 'undefined'){
		var reCat = /[-]{0,}[\d]{0,}\.html/gi;
		var path = location.pathname.replace(reCat,'.html');
	}else{
		path = path+'.html';
	}
	if($('#artNav1 a').length){
		var a=$('#artNav1 a');
		a.removeClass('current');
		a.each(function(index,el){
			var href = $(el).attr('href');
			if(href.indexOf(path) >= 0){
				$(el).addClass("current");
				$(el).removeAttr("href");
				return;
			}
		});
	}
}
function setMenu(obj,path){
	var pn = location.pathname;
	if(pn.indexOf('html') == -1){
		pn += 'index.html';
	}
	if(typeof(path) == 'undefined'){
		var reCat = /[-]{0,}[\d]{0,}\.html/gi;
		var path = pn.replace(reCat,'.html');
	}else{
		path = path+'.html';
	}
	if(obj){
		obj.removeClass('current');
		obj.each(function(index,el){
			var href = $(el).attr('href');
			if(href.indexOf('html') == -1){
				href += 'index.html';
			}
			if(href.indexOf(path) >= 0){
				$(el).addClass("current");
				$(el).removeAttr("href");
				return;
			}
		});
		if($(obj).hasClass('current') == false){
			$(obj[0]).addClass("current");
			$(obj[0]).removeAttr("href");
		}
	}
}