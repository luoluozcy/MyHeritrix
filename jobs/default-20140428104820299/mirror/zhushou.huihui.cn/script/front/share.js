 var gurl = 'http://zhushou.huihui.cn/';
 var gtitle = '惠惠购物助手，聪明网购不吃亏';
 var gcontent = '我刚试用了@惠惠购物助手，能自动显示商品的全网最低价和价格历史，真是个省钱好助手，推荐一下';
 function sharedao(b,a) { 
     switch(a) {
         case"t163":shareToT163(gurl,gtitle,gcontent);
         break;
         case"tqq":shareToTqq(gurl,gtitle,gcontent);
         break;
         case"tsina":shareToTsina(gurl,gtitle,gcontent,"http://shared.ydstatic.com/gouwuex/images/front/weibo0920.jpg");
         break;
         case"renren":shareToRenren(gurl,gtitle,gcontent);
         break;
         case"kaixin":shareToKaixin001(gurl,gtitle,gcontent);
         break;
         default:return false
     }
     return false;
 }
 function shareToTsina(a ,e ,c ,b ) { 
     var d="http://v.t.sina.com.cn/share/share.php";
     d+="?url="+encodeURIComponent(a)+"&title="+encodeURIComponent(c);
     if (b.length>0) {
         d+="&pic="+b
     }
     openShareWin(d,600,520);
 }
 function shareToRenren(a ,d ,b ) {
     var c="http://www.connect.renren.com/share/sharer";
     c+="?url="+encodeURIComponent(a)+"&title="+encodeURIComponent(d);
     openShareWin(c,570,430);
 }
 function shareToKaixin001(a ,d ,b ) {
     var c="http://www.kaixin001.com/repaste/bshare.php";
     c+="?rurl="+encodeURIComponent(a)+"&rtitle="+encodeURIComponent(d)+"&rcontent="+encodeURIComponent(b);
     openShareWin(c,550,343);
 }
 function shareToT163(a ,d ,b ) {
     var c="http://t.163.com/article/user/checkLogin.do";
     c+="?link="+encodeURIComponent(a)+"&info="+encodeURIComponent(b)+' '+encodeURIComponent(a)+"&source="+encodeURIComponent(d)+"&"+new Date().getTime();
     openShareWin(c,550,310);
 }
 function shareToTqq(a ,d ,b ) {
     var c = "http://v.t.qq.com/share/share.php";
     c+="?url="+encodeURIComponent(a)+"&appkey="+encodeURIComponent(d)+"&title="+encodeURIComponent(b);
     openShareWin(c,550,310);
 }

 function openShareWin(b ,c ,a ) {
     var d= [ "resizable=yes",
         "width="+ c,
         "height="+ a,
         "location=no",
         "menubar=no",
         "status=no",
         "titlebar=no",
         "toolbar=no",
         "left="+(window.screen.availWidth-c)/2,
         "top="+(window.screen.availHeight-a)/2
     ];
     window.open(b,"",d.join(","));
 } 
