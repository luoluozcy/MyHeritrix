$(function () {
    $(".tab_wrapper .tab_title ul li").mouseenter(function () {
        var tabIndex = $(this).index();
        $(this).siblings().removeClass("current");
        $(this).addClass("current");
        $(this).parent().parent().siblings(".tab_con").hide();
        $(this).parent().parent().siblings(".tab_con").eq(tabIndex).show();
    });

    $(".tab_ct .tab_ct_title li").mouseenter(function () {
        var tabCtIndex = $(this).index();
        $(this).find("a").addClass("current");
        $(this).siblings().find("a").removeClass("current");
        $(this).parent().siblings(".tab_ct_con").hide();
        $(this).parent().siblings(".tab_ct_con").eq(tabCtIndex).show();
    })

    $("#part_top_m_gkk .gkk_content").bxSlider({
        // nextSelector: $("#part_top_m_gkk .turnright"),
        // prevSelector: $("#part_top_m_gkk .turnleft"),
        prevText:'〈',
        nextText:'〉',
        pager: false,
        displaySlideQty: 1,
        moveSlideQty: 1
    });
    $("#yuer_gkk .gkk_content").bxSlider({
        nextSelector: $("#yuer_gkk .turnright"),
        prevSelector: $("#yuer_gkk .turnleft"),
        pager: false,
        displaySlideQty: 1,
        moveSlideQty: 1
    });
    $("#zx_gkk .gkk_content").bxSlider({
        nextSelector: $("#zx_gkk .turnright"),
        prevSelector: $("#zx_gkk .turnleft"),
        pager: false,
        displaySlideQty: 1,
        moveSlideQty: 1
    });


    $(".title .control .gkk_more").each(function(){
        $this = $(this);
        var gkkMoreTime;
        $this.mouseenter(function(){
            if(gkkMoreTime){clearTimeout(gkkMoreTime);}
            $this = $(this);
            gkkMoreTime =setTimeout(function(){
                $this.find(".icon_open").show();
            },200)
        }).mouseleave(function(){
            if(gkkMoreTime){clearTimeout(gkkMoreTime);}
            $this = $(this);
            gkkMoreTime =setTimeout(function(){
                $this.find(".icon_open").hide();
            },200)
        })
    });
});