$(function(){
	$('.subnav dd').hover(function(){
		$(this).addClass('selected');							   
	},
	function(){
		$(this).removeClass('selected');	
	})		   
	
	// 滚动
	$.extend({
		autoChange:function(){
			$('.scroll ul').animate({'marginLeft':-725},function(){
				$(this).css('marginLeft',0).find('li:first').appendTo($(this));
			});
		}
	})
	
	_interval = setInterval("$.autoChange()",3000);
	

	$('.scroll').mouseover(function(){
		clearInterval(_interval);
	})
	$('.scroll').mouseout(function(){
		_interval = setInterval("$.autoChange()",3000);					 
	})

	
	$('.scroll .prev').click(function(){
		
	
		$('.scroll ul').animate({'marginLeft':-725},function(){
			$(this).css('marginLeft',0).find('li:first').appendTo($(this));
			
			
		});
	},
	function(){});
	
	$('.scroll .next').click(function(){
	
		$('.scroll ul').css('marginLeft',-725).find('li:last').prependTo($('.scroll ul'));
		$('.scroll ul').animate({'marginLeft':0});
		
	
	},
	function(){})
	
	$('.floatqq').hover(function(){
		$(this).animate({'right':0},500);							 
	},
	function(){
		$(this).animate({'right':-85},500);	
	})
})