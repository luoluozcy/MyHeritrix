var _gaq = _gaq || [];
//切换搜索选项
function switchSearch(type, obj) {
    $("#hiSearch").val(type);
    $("#search_sort").children().removeClass("current");
    $(obj).addClass("current");
}

//搜索跳转
function searchRedirect(source) {
    var word = $("#txtSearch,#search_input").val();
    if (word == "") return;
    key = encodeURIComponent(word);

    var langs = $("#lstType").val();
    var type = source || $("#hiSearch").val();
    if (source == "word") {
        _gaq.push(["_trackEvent", "home_word_search", word]);
    }
    else {
        _gaq.push(["_trackEvent", "home_content_search", type, word]);
    }
    var url = "";
    switch (type) {
        case "word":
            url = "http://dict.hjenglish.com/app/w/" + key;
            break;
        case "sent":
            url = "http://dict.hjenglish.com/app/sent/" + key;
            break;
        case "book":
            url = "http://www.hjbook.net/search/all/" + key + "/";
            break;
        case "link":
            if (langs == "en")
                url = "http://www.hjenglish.com/new/search/" + key + "/";
            else if (langs == "jp")
                url = "http://jp.hjenglish.com/new/search/" + key + "/";
            else if (langs == "fr")
                url = "http://fr.hjenglish.com/new/search/" + key + "/";
            else if (langs == "kr")
                url = "http://kr.yeshj.com/new/search/" + key + "/";
            break;
        case "down":
            if (langs == "en")
                url = "http://www.hjenglish.com/dl/search/" + key + "/";
            else if (langs == "jp")
                url = "http://jp.hjenglish.com/dl/search/" + key + "/";
            else if (langs == "fr")
                url = "http://fr.hjenglish.com/dl/search/" + key + "/";
            else if (langs == "kr")
                url = "http://kr.yeshj.com/dl/search/" + key + "/";
            break;
        case "class":
            url = "http://class.hujiang.com/course/search?k=" + key;
    }
    window.open(url, "_blank");
}

//搜索框 回车键 搜索
function txtEnter(eventobject) {
    if (eventobject.keyCode == 13) {
        searchRedirect();
    }
}

$(document).ready(function () {

    $("#search_input").keypress(function (e) {
        if (e.keyCode == 13) {
            searchRedirect();
        }
    });
    //搜索
    $("#search_button").click(function () {
        searchRedirect();
        return false;
    });
    //查词
    $("#search_button_dict").click(function () {
        searchRedirect("word");
        return false;
    });

    //select下拉框
    $("#search_select").mouseenter(function () {
        $(this).find("#cate_options").show();
        $(this).addClass("up");
    }).mouseleave(function () {
        $(this).find("#cate_options").hide();
        $(this).removeClass("up");
    });
    $("#cate_options li a").click(function () {
        var cateval = $(this).html();
        var type = $(this).attr("href").replace(/#/g, "");
        $("#selected_cate").html(cateval);
        $("#hiSearch").val(type);
        $("#cate_options").hide();
        return false;
    });
    //焦点在搜索框内变色
    $("#search_txt").mouseenter(function () {
        $(this).addClass("over");
    }).mouseleave(function () {
        var act = document.activeElement.id;
        if (act == "search_input") {
            return false;
        } else {
            $("#search_txt").removeClass("over");
        }
    });
    $("#search_input").blur(function () {
        $("#search_txt").removeClass("over");
    });

});