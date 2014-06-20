nie.config.copyRight.setWhite();
 var G=G||{
        viewScroll:function(deltaY){
            if(deltaY<=300){
                $('.header-title').css({
                    top:60+deltaY*0.18
                })
                $('.header-girl').css({
                    top:20+deltaY*0.1
                })
                $('.header-boy').css({
                    top:43-deltaY*0.025
                })
            }
            return this;
        },
        topNavFix:function(deltaY){
            if(deltaY>=556){
                $('.content-nav').addClass('content-nav-fixed')
                $('.top-mask').addClass('top-mask-show');
            }else{
                $('.content-nav').removeClass('content-nav-fixed');
                $('.top-mask').removeClass('top-mask-show');
            }
            return this
        },
        asideFix:function(deltaY){
            deltaY>=556? $('#right-aside').addClass('fixed'):$('#right-aside').removeClass('fixed');
			if($(window).height()-$('.top-mask').height()<$('#right-aside').height()){
				//$('#right-aside').addClass('small');
			}
            return this;
        },
        initRightAside:function(){
            var titleArr=[],htmlStr='';
            $('.content h3,.content h4').each(function(){
                var eleName='';
                $(this)[0].outerHTML.indexOf('<h3>')>-1?eleName='h3':eleName='h4';
                titleArr.push({
                    eleName:eleName,
                    html:$(this).html()
                })
            })
            for(var i=0;i<titleArr.length;i++){
                if(titleArr[i].eleName=='h3'){
                    htmlStr+='<li class="bold"><a href="javascript:;">'+titleArr[i].html+'</a> <span class="right-aside-report"></span> </li>'
                }else{
                    htmlStr+='<li class="normal"><a href="javascript:;">'+titleArr[i].html+'</a> <span class="right-aside-report"></span></li>'
                }
            }
            console.log(titleArr,htmlStr);
            $('.right-aside-list').html(htmlStr);
            $('.right-aside-list .bold').eq(0).addClass('current');
        },
		reportBug:function(b) {
				var a = window.location.href, 
					//b = document.title, 
					c = 'xyq', 
					d = 469, 
					e = 605;				
					window.open("http://page-bug-report.webapp.163.com/app/report?site={$site}&title={$title}&refer={$refer}".replace("{$site}",
					c).replace("{$title}", encodeURIComponent(b)).replace("{$refer}", a), "bugReportWindow", "height=" + d + ",width=" + e + ",scrollbars=0,location=no,menubar=no,resizable=1,status=no,toolbar=no,left="+(window.screen.width-e)/2+",top=130")
		}
    }
    
    $(function(){
        //init top
		//G.initRightAside();
        var offsetHeight=$('.top-mask').height(),titlePosition=[],titleOffset=[],h4Offset=[];
        ;(function(){
            $('#main .content h3').each(function(index){
                var top=$(this).position().top,
                    offsetTop=$(this).offset().top;
                titlePosition.push(top);
                titleOffset.push(offsetTop);
            })
            $('#main .content h4').each(function(index){
                var offsetTop=$(this).offset().top;
                h4Offset.push(offsetTop);
            })
        }())
		
		;(function(){
			
		})

        $('.right-aside-list .bold').each(function(index){
            $(this).click(function(){
                var top=titleOffset[index]-offsetHeight-130;
                $('body,html').animate({
                    scrollTop:top
                })
            })
        })
        $('.right-aside-list .normal').each(function(index){
            $(this).click(function(){
                var top=h4Offset[index]-offsetHeight-130;
                $('body,html').animate({
                    scrollTop:top
                })
            })
        })


        $(window).scroll(function(){
            var deltaY=$(window).scrollTop();
            G.viewScroll(deltaY).topNavFix(deltaY).asideFix(deltaY);
            var currentIndex=0;
            for(var i=0;i<titleOffset.length;i++){
                var pTop=titleOffset[i];
                if(deltaY>pTop){
                    currentIndex=i+1;
                }
            }
			if(currentIndex>titleOffset.length-1){
				$('.right-aside-list .bold').removeClass('current').eq(titleOffset.length-1).addClass('current');
			}else{
				$('.right-aside-list .bold').removeClass('current').eq(currentIndex).addClass('current');
			}
            
        })


        $(window).width()<1500?$('#right-aside').addClass('minScreen'):$('#right-aside').removeClass('minScreen');
        $(window).resize(function(){
            $(window).width()<1500?$('#right-aside').addClass('minScreen'):$('#right-aside').removeClass('minScreen');
        })
		
		nie.use(["util.share"],function(){
			var topShare=nie.util.share({
	　			fat:"#top-share",
	　			type:1,
				defShow:[22,5,2,1,3],
	　			title:"《梦幻西游2》新手专区，帮助新进入梦幻的玩家快速成长。"
			});	
		})
		
		$('.right-aside-report').click(function(){
			var title=$(this).parent().find('a').html();
			G.reportBug(title);
		
		})

    });
$(function(){
    $(".gift-li-2").mouseover(function(){
        //$(".smallpop1").css({'top':$(this).offset().top+100,'left':$(this).offset().left-120});
        $(".smallpop1").show();
    });
    $(".gift-li-3").mouseover(function(){
        //$(".smallpop2").css({'top':$(this).offset().top+100,'left':$(this).offset().left+120});
        $(".smallpop2").show();
    });
    $(".gift-li-2").mouseout(function(){
        $(".smallpop1").hide();
        return false;
    });
    $(".gift-li-3").mouseout(function(){
       $(".smallpop2").hide();
        return false;
    });
    $(".smallpop1 .closeSmallPop").click(function(){
        $(".smallpop1").hide();
        return false;
    })
    $(".smallpop2 .closeSmallPop").click(function(){
        $(".smallpop2").hide();
        return false;
    })
})