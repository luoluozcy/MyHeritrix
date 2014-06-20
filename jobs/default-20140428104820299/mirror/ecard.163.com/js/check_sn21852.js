//$Revision: 21852 $
function snHead(sn) {
    return sn.substr(0, 4)
}

function snTypeHead(sn) {
    return sn.substr(0, 2)
}

function snExpHead(sn) {
    return sn.substr(2, 2); 
}

function snBody(sn) {
    return sn.substr(4, 9); 
}

function checkSnTypeHead(c) {
    var fmt = new RegExp("[0-9]");
    return fmt.test(c);
}

function checkSnExpHead(c) {
    var fmt = new RegExp("[0-9]");
    return fmt.test(c);
}

function checkSnBody(c) {
    var fmt = new RegExp("[0-9]");
    return fmt.test(c);
}

function checkSn(t) {
    var str = "";
    var i = 0;

    var typeHead = snTypeHead(t.value);
    for(i=0; i<typeHead.length; i++) {
        if (checkSnTypeHead(typeHead.charAt(i))) {
            str = str + typeHead.charAt(i);
        }
    }

    var expHead = snExpHead(t.value);
    for(i=0; i<expHead.length; i++) {
        if (checkSnExpHead(expHead.charAt(i))) {
            str = str + expHead.charAt(i);
        }
    }

    var body = snBody(t.value)
    for(i=0; i<body.length; i++) {
        if (checkSnBody(body.charAt(i))) {
            str = str + body.charAt(i);
        }
    }

    t.value = str;   
}


function checkSnPwd(t){
    var str = "";
    var fmt = new RegExp("[0-9]");
    var pwd = t.value.substr(0, 9);

    for(var i=0; i<pwd.length; i++) {
        if (fmt.test(pwd.charAt(i))) {
            str = str + pwd.charAt(i);
        }
    }
    t.value = str;   
}

