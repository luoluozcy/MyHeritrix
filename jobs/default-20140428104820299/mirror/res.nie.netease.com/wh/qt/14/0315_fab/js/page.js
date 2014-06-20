nie.config.copyRight.setGray();
//特色视频
var features={
	vs:[
		{
			'flv':'http://v.nie.netease.com/wh/2014/0404/sanheyi660.f4v',
			'mp4':'http://v.nie.netease.com/wh/2014/0404/sanheyi660.mp4',
			'img':'http://res.nie.netease.com/wh/qt/14/0315_fab/images/feature/zcwx.jpg'
		},
		{
			'flv':'http://v.wh.netease.com/2014/0321/sidamaidian660x372/srdz.f4v',
			'mp4':'http://v.wh.netease.com/2014/0321/sidamaidian660x372/srdz.mp4',
			'img':'http://res.nie.netease.com/wh/qt/14/0315_fab/images/feature/srdz.jpg'
		},
		{
			'flv':'http://v.wh.netease.com/2014/0321/sidamaidian660x372/dtzs.f4v',
			'mp4':'http://v.wh.netease.com/2014/0321/sidamaidian660x372/dtzs.mp4',
			'img':'http://res.nie.netease.com/wh/qt/14/0315_fab/images/feature/dtzs.jpg'
		},
		{
			'flv':'http://v.wh.netease.com/2014/0321/sidamaidian660x372/zdfg.f4v',
			'mp4':'http://v.wh.netease.com/2014/0321/sidamaidian660x372/zdfg.mp4',
			'img':'http://res.nie.netease.com/wh/qt/14/0315_fab/images/feature/zdfg.jpg'
		},
		{
			'flv':'http://v.wh.netease.com/2014/0321/sidamaidian660x372/dwjq.f4v',
			'mp4':'http://v.wh.netease.com/2014/0321/sidamaidian660x372/dwjq.mp4',
			'img':'http://res.nie.netease.com/wh/qt/14/0315_fab/images/feature/dwjq.jpg'
		}
	],
	setv:function(i){
		var self=this;	
		nie.util.video($('.ft-con'),{
			movieUrl:self.vs[i]['flv'],
			mp4_movieUrl:self.vs[i]['mp4'],
			width:660,
			height:372,
			bufferTime:5,
			loopTimes:0,
			wmode:'opaque',
			volume:0.3,
			startImg:self.vs[i]['img'],
			autoPlay:false
		});
	},
	init:function(){
		var self=this;
		self.setv(0);
		$('.ft-tab').find('span').click(function(){
			if(!$(this).hasClass('current')){
				$(this).addClass('current').siblings().removeClass('current');
				var i=$(this).index();
				self.setv(i);
			}
		});
	}
}
//技能提示
function showskilltxt(){
	$('.showskilltxt').each(function(i){
		$(this).hover(function(){
			var skilltxttop = $(this).offset().top+20;
			var skilltxtleft = $(this).offset().left;
			$('#skilltxt').html($(this).attr('alt')).show();
			$('#skilltxt').css({'top':skilltxttop,'left':skilltxtleft});
		},function(){
			$('#skilltxt').hide();
		})
	})
}
//横向切换
function _scroll(o,list,ele,prev,next){
	var list=$(o).find(list),
		w=list.find(ele).outerWidth(true),
		len=list.find(ele).length,
		prev=$(prev),
		next=$(next);
	list.width(len*w)
	next.click(function(){
		list.animate({'left':-w},200,function(){
			list.find(ele).eq(0).appendTo(list);
			list.css('left',0);
		});
	});
	prev.click(function(){
		list.find(ele).last().prependTo(list);
		list.css('left',-w);
		list.animate({'left':0},200);
	});
}
//纵向切换
function _scroll2(o,list,ele,prev,next){
	var list=$(o).find(list),
		w=list.find(ele).outerHeight(true),
		len=list.find(ele).length,
		prev=$(prev),
		next=$(next);
	next.click(function(){
		list.animate({'top':-w},200,function(){
			list.find(ele).eq(0).appendTo(list);
			list.css('top',0);
		});
	});
	prev.click(function(){
		list.find(ele).last().prependTo(list);
		list.css('top',-w);
		list.animate({'top':0},200);
	});
}
//渐变切换
function _fade(ele,l,r,time,auto){
	var ele=$(ele),
		l=$(l),
		r=$(r),
		len=ele.length,
		i=0,
		time=time;
	ele.css({
		'opacity':0,
		'z-index':1
	});
	var fade=function(i){
		if(time==0){
			ele.eq(i).css({'opacity':1,'z-index':2}).siblings('img').css({'z-index':1,'opacity':0});
		}else{
			ele.eq(i).animate({'z-index':2},0,function(){
				$(this).animate({'opacity':1},time).siblings('img').animate({'z-index':2,'opacity':0});
			});
		}
	}
	fade(0);
	l.click(function(){
		i==0?i=len-1:i--;
		fade(i);
	});
	r.click(function(){
		i<len-1?i++:i=0;
		fade(i);
	});
	if(auto==true){
		setInterval(function(){
			r.click();
		},4000);
	}
}
//关闭弹层
function closepops(){
	$('.pops,.pops-bg').hide();
	$('.pops-v-con').empty();
}
//打开弹层
function pops(id,flv,mp4,w,h){
	var o=$(id),self=$(this);
	$('.pops-bg').show().css('height',$(document).height());
	if(id=='#pops-v'){
		nie.util.video(".pops-v-con",{
			movieUrl:flv,
			mp4_movieUrl:mp4,
			width:w,
			height:h,
			bufferTime:5,
			loopTimes:-1,
			volume:0.3,
			autoPlay:true
		});
	}else if(o.hasClass('pops-tequan')){
		//nie.config.stats.url.add('5824/trace_0402_pc.html?action=click&btn=pops-con','四大特权点击');
		o.find('.pops-con').niceScroll({
			scrollspeed: 80,
			cursorcolor: "#1e529e",
			cursorborderradius: 0,
			cursorwidth: '10px',
			cursorborder: 'none',
			autohidemode:false
		});
	}
	o.show().css({
		'top':$(window).scrollTop()+$(window).height()/2,
		'margin-top':-o.height()/2
	});
}
function getDate(){
	var d=new Date(),
		day=d.getDate(),
		month=d.getMonth()+1;
	$('.h-month').text(month);
	$('.h-day').text(day);
	if ($.browser.msie){  
		$('<span class="h-month-cover">'+month+'</span>').insertBefore('.h-month');
		$('<span class="h-day-cover">'+day+'</span>').insertBefore('.h-day');
	}
}
function collect(){
	var i=0,
		limit=3,
		target=$('.ft-tab span,.mp-tab a,.libaos-list img,.libaos-prev,.libaos-next,.data-con img,.data-prev,.data-next'),
		show=false;
	function scrollCheck(){
		if($(window).scrollTop()>=$('.gifts').offset().top+$('.gifts').height()/2 && show==false){
			show=true;
			pops('#pops-chosen');
			if(!$('.pops-chosen-gif').attr('src')){
				var src=$('.pops-chosen-gif').attr('data-src');
				$('.pops-chosen-gif').attr('src',src)
			}
			if($('.pops-chosen-num').text().length<=0){
				var num;
				if($.cookie('the_cookie')==null){
					num=parseInt(new Date().getHours()+((new Date().getMinutes()*60+new Date().getSeconds())/3600)*50);
					$.cookie('pops_chosen_num',num,{expires:1});
				}else{
					num=parseInt($.cookie('pops_chosen_num'))+((new Date().getMinutes()*60+new Date().getSeconds())/3600)*50;
					$.cookie('pops_chosen_num',num,{expires:1});
				}
				$('.pops-chosen-num').text(num);
			}
			i=0;
		}
	}
	target.click(function(){
		if(show==true){
			return;
		}else{
			i++;
			console.log(i)
			if(i>=limit){
				pops('#pops-chosen');
				if(!$('.pops-chosen-gif').attr('src')){
					var src=$('.pops-chosen-gif').attr('data-src');
					$('.pops-chosen-gif').attr('src',src)
				}
				if($('.pops-chosen-num').text().length<=0){
					var num;
					if($.cookie('the_cookie')==null){
						num=parseInt(new Date().getHours()+((new Date().getMinutes()*60+new Date().getSeconds())/3600)*50);
						$.cookie('pops_chosen_num',num,{expires:1});
					}else{
						num=parseInt($.cookie('pops_chosen_num'))+((new Date().getMinutes()*60+new Date().getSeconds())/3600)*50;
						$.cookie('pops_chosen_num',num,{expires:1});
					}
					$('.pops-chosen-num').text(num);
				}
				i=0;
				show=true;
			}
		}
	});
	$('.pops-close').click(function(){
		show=false;
		$(window).unbind('scroll',scrollCheck)
	});
	$(window).bind('scroll',scrollCheck);
}
$(function(){
	if($('.pops-bg').length==0){
		$('body').append('<div class="pops-bg"></div>');
	}
	getDate();
	nie.use(['nie.util.qUrs','util.share','ui.tab','nie.util.video','util.swfobject','ui.marquee2','ui.lightBox','ui.Switch','util.clipBoard'],function(){
	
		//快速注册
		var qUrs=new nie.util.qUrs({
			'type':1,
			'holder':'#reg1'
		});
		var qUrs2=new nie.util.qUrs({
			'type':1,
			'holder':'#reg2'
		});
		var qUrs3=new nie.util.qUrs({
			'type':1,
			'holder':'#reg3'
		});
		
		//顶部视频
		$('.h-video').click(function(){
			var flv="http://v.nie.netease.com/wh/2014/0404/xiaolong800.f4v",
				mp4="http://v.nie.netease.com/wh/2014/0404/xiaolong800.mp4";
			pops('#pops-v',flv,mp4,800,450);
		});
		
		//特色切换
		features.init();
		
		//门派切换
		$.tab('.mp-tab a','.mp-con');
		
		//门派内技能提示
		$('body').append('<div id="skilltxt"></div>');
		showskilltxt();
		
		//门派内派系切换
		$('.mp-con').each(function(i){
			$.tab('.mp-con'+(i+1)+' .mp-series-tab li','.mp-con'+(i+1)+' .mp-series-con div');
		});
		
		//媒体图片滚动
		$.marquee2('.medias','left');
		
		//玩家留言图片滚动
		$.marquee2('.comments-con','top');
		
		//截图模块
		_scroll2('.images-con','.images-list','a','.images-prev','.images-next');
		$('.lightbox').lightBox();
		
		//礼包切换
		_fade('.libaos-list img','.libaos-prev','.libaos-next',0);
		
		//武魂大数据
		_fade('.data-con img','.data-prev','.data-next',200)
		
		//预约弹层内特权切换
		_fade('.pops-yuyue-libao img','.pops-yuyue-prev','.pops-yuyue-next',0,0);
		
		//collect
		//pops-chosen,qurs2
		collect();
		
		
		//特权点击记录
		$('.gift-1').click(function(){
			nie.config.stats.url.add('5824/trace_0402_pc.html?action=click&btn=gift-1','特权1');
		});
		$('.gift-2').click(function(){
			nie.config.stats.url.add('5824/trace_0402_pc.html?action=click&btn=gift-2','特权2');
		});
		$('.gift-3').click(function(){
			nie.config.stats.url.add('5824/trace_0402_pc.html?action=click&btn=gift-3','特权3');
		});
		$('.gift-4').click(function(){
			nie.config.stats.url.add('5824/trace_0402_pc.html?action=click&btn=gift-4','特权4');
		});
		
		//顶部导航
		var isTopnavShow=false;
		$(window).scroll(function(){
			if ($.browser.msie && ($.browser.version == '6.0') && !$.support.style){
				$('.topnav').css('top',$(window).scrollTop()-55);
			} 
			if($(window).scrollTop()>545){
				if(!isTopnavShow){
					$('.topnav').show().find('.topnav_con').stop(true,true).animate({'top':0},300);
					isTopnavShow=true;
				}
			}else{
				if(isTopnavShow){
					$('.topnav').find('.topnav_con').stop(true,true).animate({'top':-100},300,function(){
						$('.topnav').hide();
					});
					isTopnavShow=false;
				}
			}
		});
		var topnavStepsFinal=false;
		$('.tn-steps-btn').click(function(){
			if(!$(this).hasClass('now')){
				var i=parseInt($(this).attr('data-step'));
				$(this).addClass('now');
				$('.tn-steps-line'+i).addClass('now');
				if(i>=4){
					topnavStepsFinal=true;
					$('.tn-steps-txt').html('还等什么？去游戏里激活礼包吧！');
				}else{
					if(topnavStepsFinal==false){
						switch(i){
							case 2:$('.tn-steps-txt').html('还有<em>1</em>步即可领取绝版典藏礼包');break;
							case 3:$('.tn-steps-txt').html('绝版典藏礼包等着你！');break;
							default:break;
						}
					}
				}
			}
		});
		
		//底部分享
		var share = nie.util.share({
			fat: '.share',
			type: 1,
			defShow: [22,5, 2, 1, 3],
            title: '#武魂##自创武学，今日踢馆公测#《武魂》这次动真格！自创武学，自创技能，体验劲爽流畅动作，自由组合招式！动态真实江湖，尽在《武魂》',
			img:'http://wh.163.com/fab/include/14v2/share.jpg'
		});

	});
});