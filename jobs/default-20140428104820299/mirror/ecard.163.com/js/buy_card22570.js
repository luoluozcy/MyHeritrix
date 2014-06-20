//$Revision: 22570 $
String.prototype.endWith=function(str){  
    if(str==null||str==""||this.length==0||str.length>this.length) { 
        return false;  
    }
    if(this.substring(this.length-str.length)==str) {
        return true;  
    }
    return false;  
}

function stopBubbling(event) {
    if(event.keyCode==13){
        try{
            event.cancelBubble=true;
        }catch(e){
            event.stopPropagation();
        }
    }
}

function elem(obj) { return typeof(obj)=='string'?document.getElementById(obj):obj; }
function hideElem(id) { elem(id).style.display = "none"; }
function showElem(id) { elem(id).style.display = "block"; }
function elemClass(action, elem, cls) {
    switch(action) {
    case 'has': return (new RegExp('\\b'+cls+'\\b')).test(elem.className);break;
    case 'add': if (!elemClass('has', elem, cls)) {elem.className += elem.className?' '+cls:cls;};break;
    case 'del': var r = elem.className.match(' '+cls)?' '+cls:cls; elem.className = elem.className.replace(r, ''); break;
    }
}
function setSelectVal(e, v) {
    var ops = e.childNodes;
    for (var i=0; i<ops.length; i++) {
        if (ops[i].value==v) {
            ops[i].selected = true;
            break
        }
    }
}
// index functions
var customRadio = (function() {
    function r() { this.allElems = {}; this.selected = undefined; }
    r.prototype = {
        'add': function(id) { 
            var e = elem(id), r = this, old = e.onclick?e.onclick:function(){}; 
            if (!e) return false;
            this.allElems[id] = e;
            e.onclick = function() {
                r.select(id);
                old.apply(this, arguments);         // run old onclick after selected
            };
            return true;
        },
        'select': function(id) {
            var selected = this.allElems[id];
            if (!selected) return '';
            if (this.selected) elemClass('del', this.selected, 'on');
            this.selected = selected;
            elemClass('add', selected, 'on');
            return id;
        }
    };
    return r;
})();
var creditRadio = new customRadio();
var specialRadio = new customRadio();
var cardRadio = new customRadio();
function setProduct(product_type) { elem("product_type").value = product_type; }
function setAmount(amount) { elem("amount").value = amount; }

function creditSync() {
    var e = elem("creditAmount"), p = pointProduct, par = p['par'], n = parseInt(parseInt(e.value, 10)/par);
    setProduct(p["id"]);
    if (isNaN(n) || (n*par).toString() != e.value || n <= 0 || n > maxPointAmout || n % pointSaleBase != 0) {
        setAmount('');
        elem("creditPrice").innerHTML = elem("creditSave").innerHTML = "0.00";
        elem("creditBonus").innerHTML = "0";
        return;
    }
    setAmount(n);
    var price = n*p["sale_price"], save = n*p["origin_price"]-price, bonus = n*p["par"];
    elem("creditPrice").innerHTML = price.toFixed(2).toString();
    elem("creditSave").innerHTML = save.toFixed(2).toString();
    elem("creditBonus").innerHTML = bonus.toString();
}

function specialSync() {
    var e = elem("specialAmount"), p = pointProduct, par = p['par'], n = parseInt(parseInt(e.value, 10)/par);
    setProduct(p["id"]);
    if (isNaN(n) || (n*par).toString() != e.value || n <= 0 || n > maxPointAmout || n % pointSaleBase != 0) {
        setAmount('');
        elem("specialPrice").innerHTML = elem("specialSave").innerHTML = "0.00";
        elem("specialBonus").innerHTML = "0";
        return;
    }
    setAmount(n);
    var price = n*p["sale_price"], save = n*p["origin_price"]-price, bonus = n*p["par"];
    elem("specialPrice").innerHTML = price.toFixed(2).toString();
    elem("specialSave").innerHTML = save.toFixed(2).toString();
    elem("specialBonus").innerHTML = bonus.toString();
}

function consignSync() {
    var e = elem("consignAmount"), p = pointProduct, par = p['par'], n = parseInt(parseInt(e.value, 10)/par);
    setProduct(p["id"]);
    if (isNaN(n) || (n*par).toString() != e.value || n <= 0 || n > maxPointAmout || n % pointSaleBase != 0) {
        setAmount('');
        elem("consignPrice").innerHTML = elem("consignSave").innerHTML = "0.00";
        elem("consignBonus").innerHTML = "0";
        return;
    }
    setAmount(n);
    var price = n*p["sale_price"], save = n*p["origin_price"]-price, bonus = n*p["par"];
    elem("consignPrice").innerHTML = price.toFixed(2).toString();
    elem("consignSave").innerHTML = save.toFixed(2).toString();
    elem("consignBonus").innerHTML = bonus.toString();
}

function cardPwdSync() {
    var ok = 0;
    var e = elem("cardAmount"),  n = parseInt(e.value, 10);
    if (!isNaN(n) && n.toString() == e.value && n > 0) {
        setAmount(n); 
        ok++;
    } else {
        setAmount('');
    }

    var p = elem(cardRadio.selected);
    if (p) { 
        p = cardProducts[p.getAttribute("product_type_id")]; 
        setProduct(p["id"]); 
        ok++;
    } else {
        setProduct('');
    }

    if (ok == 2) {
        var price = n*p["sale_price"], save = n*p["origin_price"]-price, bonus = n*p["par"];
        if (price <= maxCardMoney) {
            elem("cardPrice").innerHTML = price.toFixed(2).toString();
            elem("cardSave").innerHTML = save.toFixed(2).toString();
            elem("cardBonus").innerHTML = bonus.toString();
            return;
        } else {
            setAmount('');
        }
    } 
    elem("cardPrice").innerHTML = elem("cardSave").innerHTML = "0.00";
    elem("cardBonus").innerHTML = "0";
}

function inputCreditAmount(amount) {
    var e = elem("creditAmount");
    if (amount) { e.disabled = true; e.value = amount*pointProduct["par"]; }
    else { e.disabled = false; elem("creditAmount").select(); }
    creditSync();
}

function inputSpecialAmount(amount) {
    var e = elem("specialAmount");
    if (amount) { e.disabled = true; e.value = amount*pointProduct["par"]; }
    else { e.disabled = false; elem("specialAmount").select(); }
    specialSync();
}

function refreshVcode() {
    var vcode_id = 'ecard'+parseInt(Math.random()*10000000000);
    try {
        elem("vcode_img").src = "/extern/captcha.ecard/cgi-bin/get_vcode.fcgi?ec_captcha_id=" + vcode_id;
        elem("captcha_id").value = vcode_id;
        elem("captcha_ans").value = "";
    } catch(e) {
    }
}

function show_choice_error_msg(error_block, msg) {
    $(".error").hide();
    $(".error strong:first-child").empty();
    $("#"+error_block.attr('id')+" strong:first-child").append(msg);
    error_block.show();
}

function show_login_error_msg(error_block, msg) {
    error_block.children("strong").empty();
    error_block.children("strong").append(msg);
    error_block.show();
}

$(function(){
    function checkForm() {
        if (!$("#amount").val()) {
            show_choice_error_msg($("#error_block_"+$("[name=reason]:checked").val()), "请输入适合的购买数量！");
            return false; 
        }
        if ($("[name=reason]:checked").val() == specialReasonVal && !$("[name=special_ac]:checked").val()) {
            show_choice_error_msg($("#error_block_"+$("[name=reason]:checked").val()), "请选择要充值的游戏！");
            return false; 
        }
        if (!$("#product_type").val()) { 
            show_choice_error_msg($("#error_block_"+$("[name=reason]:checked").val()), "请选择要购买的点卡类型！");
            return false; 
        }
        if (!logined && !$("#user_name").val()) { 
            show_login_error_msg($("#error_block_login"), "请输入格式正确的网易通行证帐号！");
            return false; 
        }
        if (!logined && !$("#pwd").val()) {
            show_login_error_msg($("#error_block_login"), "请输入您的通行证帐号密码！");
            return false; 
        }
        if (!logined && enableCaptcha && loginErr && !$("#captcha_ans").val()) {
            show_login_error_msg($("#error_block_login"), "请输入验证码！");
            return false; 
        }
        $("#billForm").submit();
        return true;
    }

    $('[name="reasonLi"]').mouseover(function() {
        $(this).addClass("over");
        $('[name="reasonDesc"]').each(function() {
            $(this).hide();
        });
        $('#' + this.id + 'Desc').show();
    });

    $('[name="reasonLi"]').mouseout(function() {
        $(this).removeClass("over");
        $('[name="reasonDesc"]').each(function() {
            $(this).hide();
        });
        var showDesc = $('[name="reason"]:checked').parents().parents()[0].id;
        $('#' + showDesc + 'Desc').show();
    });

    $('[name="reason"]').click(function() {
        var reasonLi = $('[name="reason"]:checked').parents().parents();
        $('[name="reasonLi"]').each(function() {
            $(this).removeClass("on");
        });
        reasonLi.addClass("on");

        $('[name="reasonBlock"]').each(function() {
            $(this).hide();
        });
        $('#' + reasonLi[0].id + 'Block').show();
        eval(reasonLi[0].id + "Sync()");

        if (reasonLi[0].id == "special") {
            $("#specialAc").show();
            $("#step3").text("4");
        } else {
            $("#specialAc").hide();
            $("#step3").text("3");
        }
    });

    $('[name="gameList"]').click(function() {
        $('[name="gameList"]').each(function() {
            $(this).parents("li").removeClass("on");
        });
        $(this).parents("li").addClass("on");
        $(this).children("input")[0].checked=true;
    });

    $('#billForm').keydown(function(event) {
        if (event.keyCode == 13) {
            checkForm();
        }
    });

    $('#buyCard').click(function() {
        checkForm();
    });
});
