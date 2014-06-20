$(function() {
    // 默认文本处理
    var $defInput = $("form [name]");
    // 添加referrer
    var referrer = document.referrer;
    $("#referrer").attr("value", referrer);

    $defInput.live("focus", function() {
        var self = $(this);
        var value = jQuery.trim(self.val());
        var defval = self.data("defvalue");
        if (value === defval) {
            self.val("").removeClass("input_def");
        }
    })

    .live("blur", function() {
        var self = $(this);
        var value = jQuery.trim(self.val());
        var defval = self.data("defvalue");
        if (value === "") {
            self.val(defval).addClass("input_def");
        }
    });

    // 提交检验
    var $suggse = $("form [name='comments']");
    $("form").live("submit", function(e) {
        var $item = $suggse;
        var val = jQuery.trim($item.val());
        var defV = jQuery.trim($item.data("defvalue"));
        if (val === "" || val === defV) {
            e.preventDefault();
            alert("请在意见反馈内填入您的反馈，才能完成提交");
        }
    });
});

