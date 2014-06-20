











 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网易商城-专业安全的网上购物商城：点卡|话费|生活服务|网购</title>
<meta name="Keywords" content="网易，商城，网上购物,网上商城,点卡,游戏卡，游戏充值,话费充值,彩票，相片冲印、个性礼物、网易商城" />
<meta name="Description" content="网易商城-安全、放心的在线购物商城，官方认证，保证正品。支持游戏点卡在线直充、话费充值、购买彩票、冲印相片及定制个性印品，更多产品正陆续推出。" />
<style type="text/css">
body {font-family:Verdana,"宋体";margin:0;padding:0;background:#fff;font-size:12px;color:#333;background:#f7fcfe}
div, img, ul, ol, li, p, form,h1, h2, label{margin:0;padding:0;border:0;}
ul, ol, li{list-style-type:none;}
img{vertical-align:top;}
/*以上是简要的reset部分 调用的页面已经含有可以删除*/
h1, h2 {font-size:12px;}
.game_sel{color:#ff4e00;}
.NO_err{border:#ff4e00 1px solid;}
.mobile_NO{color:#666; height:20px; line-height:20px; width:115px; vertical-align:middle}
.mobile_err,#mobileArea{color:#ff4e00; text-align:left; padding-bottom:5px;padding-left:65px}
#mobile_box,#game_box {padding:5px 0;position:relative;margin:0 10px;height:180px;width:205px}
#game_box {border-top:#c5ddf1 dashed 1px}
#mobile_box p,#game_box p,#mobile_box .mobileTit{height:30px;line-height:30px;position:relative;*zoom:1;margin-top:-1px;}
#mobile_box p img {float:left;}
#mobile_box .mobileTit {z-index:2;position:relative;padding-bottom:4px}
.btn_charge{border:none; background:url(http://pimg1.126.net/shop/promoter/tuan/image/shop_tuan_btn.png?201207041747) no-repeat; width:92px;height:31px;font-size:14px;font-weight:bold;color:#fff;}
.price{color:#ff4e00; font-size:13px; font-weight:bold;}
.game_sel, .price_sel{width:130px; height:22px; line-height:22px;}
.checked{font-weight:bold;}
.radio-wrap{font-family:Verdana,"宋体"!important;font-family:"宋体";}
.radio-wrap input{_height:33px;padding:0;margin:0;margin-right:3px;vertical-align:sub;*vertical-align:middle;}
.price{ display:inline-block;}
.mt3{margin-top:3px;}
#selectFaceValueWrap label {width:64px;display:inline-block;margin-right:-9px;}
#gameChargSubmit,#btnSubmitData {cursor:pointer}
#faceValueSelect,#selectFaceValueWrap{width:50px}
/*话费充值提示功能*/
span.huafei_suggest_box{position:relative;font-size:12px;color:#010101;display:inline-block;line-height:16px;}
span.huafei_suggest_box .huafei_suggest_list{position:absolute;border:1px solid #CCCCCC;left:0;top:26px;*top:28px;_top:28px;background-color:#fff;display:none;font-family:Arial;z-index:600}
span.huafei_suggest_box .huafei_suggest_list li{padding:3px 10px 2px 3px;cursor:pointer;margin-bottom:3px;font-size:12px;margin:0;line-height: 16px;line-height: 16px;}
span.huafei_suggest_box .huafei_suggest_list .huafei_list_focus{background:#D5F1FF;color:#000}
span.huafei_suggest_box input{outline: none;vertical-align: middle;}
span.huafei_suggest_box .huafei_iframe{position:absolute; top:0px; left:0px; width:100%; height:100%; z-index:-1;display:none;left:0;top:26px;border:none;}
.btnBox {text-align:center}
.inputBox {height:110px}
.mobile_wrap h2,.game_box h2 {font-size:14px;color:#FF4E00;height:28px;line-height:28px;}
</style>
<script type="text/javascript" src="http://pimg1.126.net/shop/promoter/shopurs/js/base.js?v=1"></script> 
</head>
<body>

  











 
  <!--话费充值 开始-->
  <div id="mobile_box" class="mobile_wrap" style="z-index:2">
  <h2>9.85折起，全网话费直充！</h2>
 <form id="prePaidForm1" name="prePaidForm1" method="post" action="/mobile/fill_confirm.html" target="_blank" onsubmit="return submitPhoneForm()">
    	<div class="inputBox">
        <div class="mobileTit">
            <span>手&nbsp;&nbsp;机&nbsp;号：</span>
            <span class="huafei_suggest_box" style="position: relative; display: inline-block;">
            	<input id="chargeAccount" name="chargeAccount" onpaste="return false" maxlength="11" autocomplete="off" class="mobile_NO" value="请输入充值号码" onfocus="if(this.value=='请输入充值号码'){this.value='';this.style.color='#000'}" style="color: rgb(153, 153, 153);" type="text" />
            </span>
            <script>if(document.getElementById('chargeAccount').value==''){document.getElementById('chargeAccount').value='请输入充值号码';document.getElementById('chargeAccount').style.color='#999'}</script>
        </div>
        <div class="mobile-area" id="mobileArea" style="display:none"></div>
        <div style="display:none" class="mobile_err" id="chargeAccountErr"></div>
        <p>
               <span>面&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值：</span>	
				<select id="selectFaceValueWrap" name="productId">
				
				  <option value="30" range="29.49">30</option>
				  <option value="50" range="49">50</option>
				  <option value="100" selected="selected" range="98">100</option>
				  <option value="200" range="196">200</option>
				  <option value="300" range="296.1">300</option>
				  <option value="500" range="493.5">500</option>
				
				
				</select>   
        </p> 
        <p>
        	<span>售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</span>
            <span class="price" id="returnPrice">98<span>元起</span></span>
        <input name="chargeNum" id="chargeNum" value="1" type="hidden">
        <!-- 推广方标识 -->
    	<input name="promoterId" value="shoptuan001" type="hidden">
        </p>
        </div>
        <div class="btnBox"><input id="btnSubmitData" class="btn_charge" onclick="return prePaidPhoneMgr.checkAllItemsIsTrue()" value="我要充话费" type="submit"></div>  
  </form>
  </div>  
  <!--话费充值 结束-->
  <!--游戏直充 开始-->
  <div id="game_box" style="z-index:1" class="game_box">    
   <h2>7折起，Q币、点卡直充！</h2>    
   <form action="/game/gamechargeform.html" method="post" class="paid_form" target="_blank" onsubmit="return submitGameForm()"> 
     <!--  <form action="/product/gamechargeform.do" method="post" class="paid_form" target="_blank">   -->
     <div class="inputBox">
       	<p>
          <span>游戏名称：</span><label id="gameSelectWrap"></label>
        </p>
        <div id="faceValueWrap">
            <p>
                <span>面&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值：</span>
                <label id="faceValueWraps"><select name="productId" id="faceValueSelect" class="paid_select"><option value="">请选择</option></select></label>
            </p>
            <p>
            	<span>售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</span>
                <span id="actulPrice" class="price">元</span>
                <span id="gqcErr" class="err"></span>
                <!-- 推广方标识 -->
                <input name="promoterId" value="shoptuan001" type="hidden">
                <input type="hidden" id="gameIdh" value="263" />
          	    <input type="hidden" id="listPricesh" value="10" />
                <input type="hidden" id="listPriceh" value="10" />
                <input type="hidden" id="priceh" value="9.57" />
            </p>
        </div>
        </div>
        <div class="btnBox"><input id="gameChargSubmit" name="Submit" class="btn_charge" value="我要充点卡" type="submit"></div>
      </form>
  </div>
  <!--游戏直充 结束-->
  
  
  
 <script type="text/javascript">
//话费充值ajax配置项
 var HUAFEI_AJAX_URL = "/promoter/shopurs/mobile/fill_pre.html";
</script>


<script type="text/javascript">
var GAME_LIST_ARRAY =  [
{gameId:3591,gameName:"魔兽世界",producerId:49,Py:"moshoushijie",hotflag:"1"},{gameId:3587,gameName:"天下3",producerId:49,Py:"tianxia3",hotflag:"1"},{gameId:3586,gameName:"武魂(网易新游)",producerId:49,Py:"wuhun",hotflag:"1"},{gameId:3585,gameName:"三国天下",producerId:49,Py:"sanguotianxia",hotflag:"0"},{gameId:3584,gameName:"战国风云",producerId:49,Py:"zhanguofengyun",hotflag:"0"},{gameId:3583,gameName:"大唐豪侠",producerId:49,Py:"datanghaoxia",hotflag:"0"},{gameId:3582,gameName:"iTown",producerId:49,Py:"itown",hotflag:"0"},{gameId:3581,gameName:"精灵传说",producerId:49,Py:"jinglingchuanshuo",hotflag:"0"},{gameId:3580,gameName:"战歌",producerId:49,Py:"zhange",hotflag:"0"},{gameId:3579,gameName:"大唐无双2",producerId:49,Py:"datangwushuang2",hotflag:"1"},{gameId:3578,gameName:"倩女幽魂",producerId:49,Py:"qiannvyouhun",hotflag:"1"},{gameId:3577,gameName:"天下2",producerId:49,Py:"tianxia2",hotflag:"0"},{gameId:3576,gameName:"创世西游",producerId:49,Py:"chuangshixiyou",hotflag:"0"},{gameId:3575,gameName:"大话西游3",producerId:49,Py:"dahuaxiyou3",hotflag:"0"},{gameId:3574,gameName:"大话西游2",producerId:49,Py:"dahuaxiyou2",hotflag:"1"},{gameId:3573,gameName:"梦幻西游",producerId:49,Py:"menghuanxiyou",hotflag:"1"},{gameId:3572,gameName:"网易一卡通",producerId:49,Py:"wangyiyikatong",hotflag:"0"},{gameId:3428,gameName:"天龙八部3",producerId:3,Py:"tianlongbabu3",hotflag:"1"},{gameId:3421,gameName:"圣境传说",producerId:19,Py:"shengjingchuanshuo",hotflag:"0"},{gameId:3419,gameName:"超级QQ",producerId:2,Py:"chaojiqq",hotflag:"0"},{gameId:3418,gameName:"御龙在天",producerId:2,Py:"yulongzaitian",hotflag:"0"},{gameId:3404,gameName:"完美点券",producerId:4,Py:"wanmeidianquan",hotflag:"1"},{gameId:3356,gameName:"QQ西游",producerId:2,Py:"qqxiyou",hotflag:"0"},{gameId:3353,gameName:"QQ寻仙",producerId:2,Py:"qqxunxian",hotflag:"0"},{gameId:3352,gameName:"穿越火线CF会员",producerId:2,Py:"chuanyuehuoxiancfhuiyuan",hotflag:"0"},{gameId:3328,gameName:"新武林外传",producerId:4,Py:"xinwulinwaichuan",hotflag:"0"},{gameId:3325,gameName:"洛奇英雄传",producerId:10,Py:"luoqiyingxiongchuan",hotflag:"0"},{gameId:3319,gameName:"征途2",producerId:5,Py:"zhengtu2",hotflag:"1"},{gameId:3316,gameName:"封神榜3",producerId:6,Py:"fengshenbang3",hotflag:"0"},{gameId:3305,gameName:"神兽",producerId:19,Py:"shenshou",hotflag:"0"},{gameId:3289,gameName:"极光世界",producerId:19,Py:"jiguangshijie",hotflag:"0"},{gameId:3287,gameName:"鹿鼎记",producerId:3,Py:"ludingji",hotflag:"0"},{gameId:3286,gameName:"梦三国",producerId:19,Py:"mengsanguo",hotflag:"1"},{gameId:3268,gameName:"起点中文网",producerId:7,Py:"qidianzhongwenwang",hotflag:"0"},{gameId:3264,gameName:"地下城与勇士(DNF)点券",producerId:2,Py:"dixiachengyuyongshi(dnf)dianquan",hotflag:"1"},{gameId:3263,gameName:"地下城与勇士(DNF)黑钻",producerId:2,Py:"dixiachengyuyongshi(dnf)heizuan",hotflag:"0"},{gameId:382,gameName:"盛大点券",producerId:7,Py:"shengdadianquan",hotflag:"1"},{gameId:343,gameName:"七雄争霸",producerId:2,Py:"qixiongzhengba",hotflag:"0"},{gameId:338,gameName:"穿越火线CF",producerId:2,Py:"chuanyuehuoxiancf",hotflag:"1"},{gameId:305,gameName:"QQ三国",producerId:2,Py:"qqsanguo",hotflag:"0"},{gameId:301,gameName:"新英雄年代",producerId:7,Py:"xinyingxiongnian",hotflag:"0"},{gameId:284,gameName:"QQ飞车紫钻(按月充)",producerId:2,Py:"qqfeiche",hotflag:"0"},{gameId:283,gameName:"QQ会员",producerId:2,Py:"qqhuiyuan",hotflag:"0"},{gameId:282,gameName:"QQ蓝钻(QQgame)",producerId:2,Py:"qqlanzuan(qqgame)",hotflag:"0"},{gameId:280,gameName:"QQ音乐绿钻",producerId:2,Py:"qqyinyuelvzuan",hotflag:"0"},{gameId:276,gameName:"QQ黄钻",producerId:2,Py:"qqhuangzuan(q-zone)",hotflag:"0"},{gameId:275,gameName:"QQ红钻(QQshow)",producerId:2,Py:"qqhongzuan(qqshow)",hotflag:"0"},{gameId:272,gameName:"泡泡堂",producerId:7,Py:"paopaotang",hotflag:"0"},{gameId:263,gameName:"Q币",producerId:2,Py:"qbi",hotflag:"1"},{gameId:256,gameName:"传奇世界",producerId:7,Py:"chuanqishijie",hotflag:"0"},{gameId:251,gameName:"坦克世界",producerId:36,Py:"tankeshijie",hotflag:"0"},{gameId:250,gameName:"星辰变",producerId:7,Py:"xingchenbian",hotflag:"1"},{gameId:249,gameName:"神鬼世界",producerId:4,Py:"shenguishijie",hotflag:"0"},{gameId:243,gameName:"剑侠情缘网络版叁",producerId:6,Py:"jianxiaqingyuanwangluobansan",hotflag:"1"},{gameId:237,gameName:"剑侠贰外传",producerId:6,Py:"jianxiaerwaizhuan",hotflag:"0"},{gameId:230,gameName:"VS竞技游戏平台",producerId:33,Py:"vsjingjiyouxipintai",hotflag:"0"},{gameId:229,gameName:"神魔大陆",producerId:4,Py:"shenmodalu",hotflag:"0"},{gameId:207,gameName:"春秋Q传",producerId:6,Py:"chunqiuqzhuan",hotflag:"0"},{gameId:197,gameName:"Q点",producerId:2,Py:"qdian",hotflag:"0"},{gameId:195,gameName:"完美世界",producerId:4,Py:"wanmeishijie",hotflag:"0"},{gameId:186,gameName:"神泣",producerId:19,Py:"shenqi",hotflag:"0"},{gameId:183,gameName:"热血江湖",producerId:48,Py:"rexuejianghu",hotflag:"1"},{gameId:174,gameName:"迅雷雷点",producerId:19,Py:"xunleileidian",hotflag:"0"},{gameId:154,gameName:"天翼决",producerId:19,Py:"tianyijue",hotflag:"0"},{gameId:150,gameName:"群雄逐鹿",producerId:47,Py:"qunxiongzhulu",hotflag:"1"},{gameId:149,gameName:"三国争霸",producerId:47,Py:"sanguozhengba",hotflag:"0"},{gameId:145,gameName:"诺亚传说",producerId:19,Py:"nuoyachuanshuo",hotflag:"0"},{gameId:137,gameName:"魔域",producerId:19,Py:"moyu",hotflag:"0"},{gameId:135,gameName:"面对面",producerId:19,Py:"mianduimian",hotflag:"0"},{gameId:114,gameName:"蝌蚪币",producerId:19,Py:"kedoubi",hotflag:"0"},{gameId:99,gameName:"多玩币",producerId:19,Py:"duowanbi",hotflag:"0"},{gameId:86,gameName:"波克城市",producerId:19,Py:"bokechengshi",hotflag:"0"},{gameId:85,gameName:"百度币",producerId:19,Py:"baidubi",hotflag:"0"},{gameId:53,gameName:"大话水浒",producerId:3,Py:"dahuashuihu",hotflag:"0"},{gameId:51,gameName:"巨人",producerId:5,Py:"juren",hotflag:"0"},{gameId:50,gameName:"QQ炫舞_紫钻",producerId:2,Py:"qqxuanwu",hotflag:"0"},{gameId:49,gameName:"QQ华夏",producerId:2,Py:"qqhuaxia",hotflag:"1"},{gameId:48,gameName:"诛仙前传",producerId:4,Py:"zhuxian2",hotflag:"1"},{gameId:46,gameName:"街头篮球",producerId:17,Py:"jietoulanqiu",hotflag:"0"},{gameId:35,gameName:"醉逍遥",producerId:9,Py:"zuixiaoyao",hotflag:"0"},{gameId:33,gameName:"人人网(帐号请填人人ID)",producerId:14,Py:"renrenwang",hotflag:"0"},{gameId:32,gameName:"剑侠世界",producerId:6,Py:"jianxiashijie",hotflag:"1"},{gameId:31,gameName:"反恐行动",producerId:6,Py:"fankongxingdong",hotflag:"0"},{gameId:30,gameName:"成吉思汗",producerId:13,Py:"chengjisihan",hotflag:"0"},{gameId:29,gameName:"SD敢达OL",producerId:12,Py:"sdgandaol",hotflag:"0"},{gameId:28,gameName:"劲舞团",producerId:12,Py:"jinwutuan",hotflag:"0"},{gameId:23,gameName:"跑跑卡丁车",producerId:10,Py:"paopaokadingche",hotflag:"1"},{gameId:22,gameName:"反恐精英",producerId:10,Py:"fankongjingying",hotflag:"1"},{gameId:21,gameName:"蜀门",producerId:9,Py:"shumen",hotflag:"0"},{gameId:19,gameName:"冒险岛",producerId:7,Py:"maoxiandao",hotflag:"0"},{gameId:18,gameName:"永恒之塔",producerId:7,Py:"yonghengzhita",hotflag:"0"},{gameId:17,gameName:"热血传奇",producerId:7,Py:"rexuechuanqi",hotflag:"0"},{gameId:16,gameName:"问道",producerId:8,Py:"wendao",hotflag:"1"},{gameId:15,gameName:"仙途",producerId:5,Py:"xiantu",hotflag:"0"},{gameId:10,gameName:"征途",producerId:5,Py:"zhengtu",hotflag:"0"},{gameId:9,gameName:"梦幻诛仙",producerId:4,Py:"menghuanzhuxian",hotflag:"1"},{gameId:7,gameName:"赤壁",producerId:4,Py:"chibi",hotflag:"0"},{gameId:6,gameName:"神鬼传奇",producerId:4,Py:"shenguichuanqi",hotflag:"0"},{gameId:4,gameName:"完美世界国际版",producerId:4,Py:"wanmeishikongguojiban",hotflag:"0"},{gameId:3,gameName:"龙之谷",producerId:7,Py:"longzhigu",hotflag:"1"}
,{gameId:"http://mall.163.com/game/queryGame.html",gameName:"更多游戏",producerId:-1,Py:"9",hotflag:"2"}];
</script>
<script type="text/javascript">
var GAME_QUICK_CHARGE_AJAXURL = "/promoter/shoptuan/game/nameChange.do";
var NAME_CHANGE_AJAX_URL = "/promoter/shoptuan/game/nameChange.do";
var FACE_VALUE_CHANGE_AJAX_URL = "/promoter/shoptuan/game/listValueChange.do";
</script>

<script type="text/javascript">
//切换类
function $(id){return document.getElementById(id);} 
//设置选中价格为粗体
var a=document.getElementById("selectFaceValueWrap").getElementsByTagName("label");
for(var i=0;i<a.length;i++){
	a[i].onclick=function(){
	  for(var j=0;j<a.length;j++){
		  a[j].style.fontWeight="500";
	  }
	  this.style.fontWeight="bold";
	}
}
</script>
<script type="text/javascript" src="http://pimg1.126.net/shop/js/ls.js?v=1"></script>
<script type="text/javascript" src="http://pimg1.126.net/shop/promoter/shopurs/js/shopCommon_urs.js?v=1"></script>
<script type="text/javascript" src="http://pimg1.126.net/shop/promoter/tuan/js/huafeichongzhi_tuan.js?v=1"></script>
<script type="text/javascript" src="http://pimg1.126.net/shop/promoter/tuan/js/gameQuickCharge_tuan.js?v=1"></script>
 

    

</body>

</html>
