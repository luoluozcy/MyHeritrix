var Landing =  {
	init:function(){
		this.getVideo();
		this.getPopVideo();
		this.videoHandle();
		this.flash();
	},
	isIOS:function(){
		var rule=/(iPhone|iPad|iPod)/ig;
		return rule.test(navigator.userAgent);	
	},
	//controls如果出现该属性，则向用户显示控件，比如播放按钮。
	//loop如果出现该属性，则当媒介文件完成播放后再次开始播放。
	//autoplay 如果出现该属性，则视频在就绪后马上播放。
	showIosVideo:function(url, w, h, controls, loop, autoplay){ 
		var ios_html = '<video controls="'+ controls +'" loop="'+ loop +'" width="'+ w +'" height="'+ h +'" poster="" autoplay="'+ autoplay +'">\
	            	<source src="' + url + '" type="video/mp4" />\
	    		</video>';
		return ios_html;
    },
    videoWrap:function(src,w,h,flashvars){
		var v='<object width="'+w+'" height="'+h+'" id="FPlayer" data="'+src+'" type="application/x-shockwave-flash"><param value="transparent" name="wmode" /><param value="true" name="allowFullScreen" /><param value="always" name="allowscriptaccess" /><param value="'+src+'" allownetworking="all" name="movie" /><param value="'+flashvars+'" name="flashvars" /></object>';
		return v;
	},
	getVideo:function(){
		var videoBtn=$('.video_btn li'),num,videoTxt=$('.video_con p'),videoInfo=$('.info'),video=$('#video'),
		videoUrl=[
		          'http://sc2.nos.netease.com/1/flash/landing/new/video1.swf',
		          'http://sc2.nos.netease.com/1/flash/landing/new/video2.swf',
		          'http://sc2.nos.netease.com/1/flash/landing/new/video3.swf'
		          ],
		videoUrlIso=[
		             'url(http://sc2.nos.netease.com/1/style/images/landing/new/video1.gif) no-repeat 50% 50%',
		             'url(http://sc2.nos.netease.com/1/style/images/landing/new/video2.gif) no-repeat 50% 50%',
		             'url(http://sc2.nos.netease.com/1/style/images/landing/new/video3.gif) no-repeat 50% 50%'
		            ],
		 videoPic=[
		           'url(http://sc2.nos.netease.com/1/style/images/landing/new/video1.jpg) no-repeat -1px 50%',
		           'url(http://sc2.nos.netease.com/1/style/images/landing/new/video2.jpg) no-repeat -1px 50%',
		           'url(http://sc2.nos.netease.com/1/style/images/landing/new/video3.jpg) no-repeat -1px 50%'
		           ];
		num=$('.video_btn li .active').parents('li').index();
		//var videowrapIso=Landing.showIosVideo(videoUrlIso[num],510,254,'','loop', 'autoplay');
		//var videowrapPc=Landing.videoWrap(videoUrl[num],510,254,'');
		var params = {
				menu: "false",
				allowFullScreen: "false",
				allowScriptAccess: "true",
				wmode: "transparent",
				base: "."
			};
		
		if(Landing.isIOS()){
			video.css('background',videoUrlIso[num]);
		}else{
			video.css('background',videoPic[num]);
			//video.append(videowrapPc);
			swfobject.embedSWF(videoUrl[num], "videoSwf", "510", "254", "9.0.0", false, '', params, '');
		}
		
		videoBtn.click(function(){
			//video.empty();
			var index=$(this).index();
			num=index;
			//var videowrapIso=Landing.showIosVideo(videoUrlIso[num],510,254,'','loop', 'autoplay');
			var videowrapPc=Landing.videoWrap(videoUrl[num],510,254,'');
			videoBtn.children().removeClass('active');
			$(this).children().addClass('active');
			videoTxt.eq(index).addClass('active').siblings(videoTxt).removeClass('active');
			videoInfo.eq(index).addClass('active').siblings(videoInfo).removeClass('active');
			
			if(Landing.isIOS()){
				video.css('background',videoUrlIso[num]);
			}else{
				video.css('background',videoPic[num]);
				//video.append(videowrapPc);
				swfobject.embedSWF(videoUrl[num], "videoSwf", "510", "254", "9.0.0", false, '', params, '');
			}
		})	
	},
	getBoxwrap:function(){
		var boxwrap=['<div id="lightbox-container" style="display:block;width:960px;height: 520px;">',
                    '<h1 id="lightbox-title"></h1>',
                    '<div id="lightbox-content">',
					'',
					'</div>',
                    '<div class="corner corner-top-left"></div>',
                    '<div class="corner corner-top-right"></div>',
                    '<div class="corner corner-bottom-left"></div>',
                    '<div class="corner corner-bottom-right"></div>',
                    '<div class="border" id="lb-border-top" style="width: 960px;"></div>',
                    '<div class="border" id="lb-border-right" style="height: 520px;"></div>',
                    '<div class="border" id="lb-border-bottom" style="width: 960px;"></div>',
                    '<div class="border" id="lb-border-left" style="height: 520px;"></div>',
                    '<div class="control-wrapper no-paging no-gallery">',
                        '<p class="title"></p>',
                    '</div>',
                    '<a class="ui-element lightbox-close" href="javascript:;"></a>',             
                	'</div>'
                	];
        return  boxwrap;       	
	},
	videoHandle:function(){
        $(".lightbox-close").live("click",function(){
        	$("#popBox").remove();
        	$("#boxModel").remove();
        })

        $("#boxModel").live("click",function(){
        	$("#popBox").remove();
        	$("#boxModel").remove();
        })        			
	},
	getPopVideo:function(){
		var videoBgBtn=$('.video_bg_btn'),num;
		var popVideoUrlIso=[
		                    'pltype=6&topicid=0085&vid=V9I6F1RQO&sid=V9I6F4IE3&coverpic=http://vimg1.ws.126.net/image/snapshot/2014/1/Q/P/V9I6F1RQP.jpg&autoplay=false&showend=false&hiddenR=true',
		                    'pltype=6&topicid=0085&vid=V9HKQSJUL&sid=V7V68CUC4&coverpic=http://vimg1.ws.126.net/image/snapshot/2014/1/U/M/V9HKQSJUM.jpg&autoplay=false&showend=false&hiddenR=true',
		                    'pltype=6&topicid=0085&vid=V9HKQV94T&sid=V7V68CUC4&coverpic=http://vimg1.ws.126.net/image/snapshot/2014/1/4/U/V9HKQV94U.jpg&autoplay=false&showend=false&hiddenR=true'
		                    ],
		    popVideoUrl=[
		                 'http://flv.bn.netease.com/videolib3/1401/21/YHpdh2034/HD/YHpdh2034-mobile.mp4',
		                 'http://flv.bn.netease.com/videolib3/1401/14/MqWPc0503/HD/MqWPc0503-mobile.mp4',
		                 'http://flv.bn.netease.com/videolib3/1401/14/gTpNA0601/HD/gTpNA0601-mobile.mp4'
		                 ];
		
		videoBgBtn.click(function(){
			num=$('.video_btn li .active').parents('li').index();
			var videowrap=Landing.videoWrap("http://v.163.com/swf/video/NetEaseFlvPlayerV3.swf",960,520,popVideoUrlIso[num]);
        	var boxwrap=Landing.getBoxwrap();
        	boxwrap[3]=videowrap;
        	if(Landing.isIOS()){
        		boxwrap[3]=Landing.showIosVideo(popVideoUrl[num], 960, 520);
        	}      	
        	$.sc2.lightBox(boxwrap.join(""),{model:true,hasClose:false});
		})
		
	},
	flash:function(){
		var params = {
				menu: "false",
				allowFullScreen: "false",
				allowScriptAccess: "true",
				wmode: "transparent",
				base: "."
			};
		swfobject.embedSWF("http://sc2.nos.netease.com/1/flash/landing/new/bg2.swf", "flashL", "500", "800", "9.0.0", false, '', params, '');
		swfobject.embedSWF("http://sc2.nos.netease.com/1/flash/landing/new/bg1.swf", "flashR", "500", "800", "9.0.0", false, '', params, '');
		//var flashL=Landing.videoWrap('http://sc2.nos.netease.com/1/flash/landing/new/bg2.swf',500,800,'');
		//var flashR=Landing.videoWrap('http://sc2.nos.netease.com/1/flash/landing/new/bg1.swf',500,800,'');
		//$('#flashL').append(flashL);
		//$('#flashR').append(flashR);
	}
};
