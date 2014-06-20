$(document).ready(function(){
		$('#js-doc .js-sendbtn').each(function(){
			$(this).bind('click',function(){
				$(this).parent().animate({top:'-54px'});
			});
		});

		$('#js-doc .js-back').each(function(){
			$(this).bind('click',function(){
				$(this).parents('.js-wrap').animate({top:'10px'});
			});
		});

		$('#js-doc .js-txt').each(function(){
			$(this).bind({
				focus:function(){
					if($(this).val() == '输入您的手机号码'){
						$(this).val('');
					}
				},
				blur:function(){
					if($(this).val() == ''){
						$(this).val('输入您的手机号码');
					}
				},
				keyup:function(){
					$(this).parents('.js-sendfm').find('.js-error').css('display','none');
				}
			});
		});

		$('#js-doc .js-submit').each(function(){
			$(this).bind('click',function(){
				var txtnode = $(this).parent().find('.js-txt');
				var errnode = $(this).parents('.js-sendfm').find('.js-error');
				var mobile = $(this).parent().find('.js-txt').val();
				if(!!mobile){
					var tag = /^1\d{10}$/.test(mobile);
					if(!!tag){
						var data = {};
						data.mobile = mobile;
						$.ajax({
							url:'http://yixin.im/api/dlfromsms',
							data:data,
							type:'POST',
							success:function(data){
								var obj =  jQuery.parseJSON(data);
								if(obj && obj.result == "ok"){
									$(errnode).text('已发送，请注意查收！');
									$(errnode).css('display','');
									$(errnode).css('color','green');
								}	
							},
							error:function(){
								alert('服务器繁忙，请稍后再试！');
							}
						})
					}else{
						$(errnode).text('请输入正确的手机号');
						$(errnode).css('display','');
						$(errnode).css('color','#f01c1c');
					}
				}else{
					$(errnode).text('请输入您的手机号');
					$(errnode).css('display','');
					$(errnode).css('color','#f01c1c');
				}
			});
		});

		$('#js-doc .js-iphone').each(function(){
			$(this).bind('click',function(event){
				event.preventDefault();
				_gaq.push(['_trackEvent',"pc官网","iphone下载","pc官网iphone下载"]);
                ga('send', 'event', 'iphoneDownload', 'click', '/index', 1);
                $.ajax({
					url:'http://yixin.im/download/iphone?from=index',// 此处放请求地址
					type:'GET'
				});
                // iphone版下载地址
				var url = "https://itunes.apple.com/cn/app/yi-xin-mian-fei-liao-tian/id683688634?mt=8";
				window.location.href = url; 
			});
		});

		$('#js-doc .js-android').each(function(){
			$(this).bind('click',function(event){
				event.preventDefault();
				_gaq.push(['_trackEvent',"pc官网","android下载","pc官网android下载"]);
                ga('send', 'event', 'androidDownload', 'click', '/index', 1);
                $.ajax({
					url:'http://yixin.im/download/android?from=index',// 此处放请求地址
					type:'GET'
				});
                // android版下载地址
				var url = "http://yixin.dl.126.net/update/installer/yixin.apk";
				window.location.href = url;
			});
		});

		$('#js-doc .js-windowspc').each(function(){
			$(this).bind('click',function(event){
				event.preventDefault();
				_gaq.push(['_trackEvent',"pc官网","windowsPC下载","pc官网windowsPC下载下载"]);
                ga('send', 'event', 'pcDownload', 'click', '/index', 1);
                $.ajax({
					url:'http://yixin.im/download/windowspc?from=index',// 此处放请求地址
					type:'GET'
				});
                // windowsPC下载版下载地址
				var url = "http://yixin.dl.126.net/update/installer/yixinsetup.exe";
				window.location.href = url;
			});
		});

		$('#js-download').bind('click',function(){
			$('#js-layer').addClass('m-layer-show');
			$('#js-layer .js-wrap').css('top','10px');
		});

		$('#js-layer .js-close').bind('click',function(){
			$('#js-layer').removeClass('m-layer-show');
		});
	});