










<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="keywords" content="团购网|团购网站大全,团购导航,团购网大全,团购网站导航,北京团购网站,百团大战" />
<meta name="description" content="团购网|团购网站大全:团长,团购导航网站,美团,拉手,糯米,团宝网,爱帮团等北京团购网站大全。" />
<title>网易团长|团购|团购网|团购网站大全-团购导航,团长,百团大战,团购大全,北京团购网站大全</title>
<!--[if lt IE 9]>
<script src="http://pimg1.126.net/tuan/js/html5.js"></script>
<![endif]-->
<link rel="stylesheet" href="http://pimg1.126.net/tuan/css/main.css?v=20120703" type="text/css" />
<script src="http://pimg1.126.net/tuan/js/jquery-1_3_1.js" type="text/javascript"></script>
<script src="http://pimg1.126.net/tuan/js/base.js" type="text/javascript"></script>
<script src="http://pimg1.126.net/tuan/js/suggest.js" type="text/javascript"></script>
<script src="http://pimg1.126.net/tuan/js/main.js?v=20120919" type="text/javascript"></script>
<script src="http://pimg1.126.net/tuan/js/indexNew20110823.js?v=20130520" type="text/javascript"></script>
<script src="http://pimg1.126.net/tuan/js/retime.js?v=20110823" type="text/javascript"></script>
<script src="http://pimg1.126.net/tuan/js/page.js" type="text/javascript"></script>
<script src="http://pimg1.126.net/tuan/js/ls.js?v=2011071816"></script>
</head>
<body>

<article class="wrapper">
<header class="top_head" id="top_head">
  <div class="top_header">
  		<p class="f_right"><span class="single_link"><a href="javascript:person_center_login();" class="single_tab">我的团长<b></b></a><em class="single_list">   
    	<a href="javascript:person_commom_login('http://tuan.163.com/tuan/favorites.do');">我的收藏</a><a href="javascript:person_commom_login('http://tuan.163.com/tuan/score/incomeRecord.do');">我的积分</a><a href="javascript:person_commom_login('http://tuan.163.com/tuan/personalCustom.do');">我的定制</a></em></span>|<a href="javascript:void(0)" onclick="indexNew.setHome(this,'http://tuan.163.com')">设为主页</a>|<a href="javascript:void(0)" onclick="indexNew.addfavorite()">加为收藏</a></p>
     
		<p class="login_info">
   			<span>欢迎来到网易团长！<a href="javascript:void(0)" onclick="normal_login()">请登录</a><a href="http://reg.163.com/reg/reg.jsp?product=tuan&url=http://tuan.163.com/">免费注册</a></span>
   		</p>
      
  </div>
  <span display="none">
    <a id="share_163weibo" class="s_wywb" href="javascript:void(0);" title="网易微博"></a>
    <a id="share_renren" class="s_rrw" href="javascript:void(0);" title="人人网"></a>
    <a id="share_kaixin" class="s_kxw" href="javascript:void(0);" title="开心网"></a>
    <a id="share_qq" class="s_qq" href="javascript:void(0);" title="QQ"></a>
    <a id="share_douban" class="s_dbw" href="javascript:void(0);" title="豆瓣网"></a>
    <a id="share_sinawb" class="s_sina" href="javascript:void(0);" title="新浪微博"></a> 
  </span> 
  <article class="mainhead">
    <figure class="tuan_logo"><a href="/" title="网易团长"></a></figure>
    <div class="select_city" id="select_city"><strong id="city_open2">哈尔滨</strong>[切换城市]<span></span></div>
    
    <div class="top_banner">
      <img src="http://pimg1.126.net/tuan/images/top_banner.jpg" alt="" />
    </div>
    <div class="clear"></div>
  </article>
  <div class="select_city_list"  id="selectCity1" style="display:none;">
      <div class="layout">
       <form name='cityForm' id='cityForm' action="" method="post" style="display: none">
	  	<input type='hidden' name='city' value='哈尔滨' />
	  </form>
      <a href="#" class="close">关闭</a>
      </div>
    </div>
</header>
<script type="text/javascript">
var city_flag=0;
	//城市的click
    $('#selectCity1 .hot_city li a,#selectCity1 .all_citys li a').live('click',function(){
    if(city_flag==0){
		var thiscity=$(this).html();
		
		if($("#search_txt").length>0 ){
			document.getElementById('cityForm').keyWord.value = $("#search_txt").val();
		}
		
	    indexNew.submitCity(document.getElementById('cityForm'),thiscity);	
	    }						
	});
</script>  
<!--主体 开始-->
<article class="single_content pt10">
<section class="subscribe_content">
  <div class="subscribe_step step2"><span>1.确认邮箱和地址</span><span class="current">2.设置您的偏好</span><span>3.完成</span></div>
  <ul class="personality_right">
    <li>
      <label>所在城市：</label>
      <em><span id="qiehuan" class="select_city"><strong>哈尔滨</strong>[切换城市]<span></span></span><span class="tips" style="top:5px">切换城市后，旧城市的设置记录将被覆盖</span></em>
    </li>
    <li>
      <label>特别关注：</label>
      <em id="keyword">
        <span class="focus"><input id="query" type="text" onkeydown='enterIn(event)'/></span><a href="javascript:save_Query()" class="blue_btn"><span><strong>+</strong>&nbsp;添加</span></a><span class="tips">您最多可以精确设置三组自己特别关注的内容，同一组多个关键词之间用空格区分&nbsp;&nbsp;&nbsp;&nbsp;例如“五道口 烤鱼”</span>
        <div class="focus_list">
         
        </div>      
      </em>
    </li>
    
    <li>
      <label>偏好设置：</label>
      <em class="preferences">
        <div class="focus_list"><label>关注类型：</label><span>未设置<b></b></span></div><div class="focus_list"><label>关注地区：</label><span>未设置<b></b></span></div><div class="focus_list"><label>关注网站：</label><span>未设置<b></b></span></div>
        <div class="single_nav"><span><a href="javascript:void(0)" class="current">关注类型</a><a href="javascript:void(0)">关注地区</a><a href="javascript:void(0)">关注网站</a></span></div>
        <div class="attention_type">
          <span><input type="checkbox" id="all_tags" class="all" /><label for="all_tags">全部</label></span>
          <span class="attention_lists">
          
            <dl>
              <dt><input type="checkbox" id="all_tags1" /><label for="all_tags1">美食</label></dt>            
              <dd>
              
                <span><input type="checkbox" id="all_tags10" /><label for="all_tags10">中餐</label></span>
              
                <span><input type="checkbox" id="all_tags11" /><label for="all_tags11">自助</label></span>
              
                <span><input type="checkbox" id="all_tags12" /><label for="all_tags12">火锅</label></span>
              
                <span><input type="checkbox" id="all_tags13" /><label for="all_tags13">烧烤</label></span>
              
                <span><input type="checkbox" id="all_tags14" /><label for="all_tags14">海鲜</label></span>
              
                <span><input type="checkbox" id="all_tags15" /><label for="all_tags15">西餐</label></span>
              
                <span><input type="checkbox" id="all_tags16" /><label for="all_tags16">日韩料理</label></span>
              
                <span><input type="checkbox" id="all_tags17" /><label for="all_tags17">快餐</label></span>
              
                <span><input type="checkbox" id="all_tags18" /><label for="all_tags18">甜品</label></span>
              
                <span><input type="checkbox" id="all_tags19" /><label for="all_tags19">其他美食</label></span>
              
              </dd>
            </dl>
            <dl class="odd">
              <dt><input type="checkbox" id="all_tags2" /><label for="all_tags2">娱乐</label></dt>
              <dd>
              
                <span><input type="checkbox" id="all_tags20" /><label for="all_tags20">电影</label></span>
			  
                <span><input type="checkbox" id="all_tags21" /><label for="all_tags21">KTV</label></span>
			  
                <span><input type="checkbox" id="all_tags22" /><label for="all_tags22">旅游</label></span>
			  
                <span><input type="checkbox" id="all_tags23" /><label for="all_tags23">郊游</label></span>
			  
                <span><input type="checkbox" id="all_tags24" /><label for="all_tags24">酒吧</label></span>
			  
                <span><input type="checkbox" id="all_tags25" /><label for="all_tags25">话剧</label></span>
			  
                <span><input type="checkbox" id="all_tags26" /><label for="all_tags26">演出</label></span>
			  
                <span><input type="checkbox" id="all_tags27" /><label for="all_tags27">运动健身</label></span>
			  
                <span><input type="checkbox" id="all_tags28" /><label for="all_tags28">海底世界</label></span>
			  
                <span><input type="checkbox" id="all_tags29" /><label for="all_tags29">相声</label></span>
			  
                <span><input type="checkbox" id="all_tags210" /><label for="all_tags210">瑜伽</label></span>
			  
                <span><input type="checkbox" id="all_tags211" /><label for="all_tags211">温泉</label></span>
			  
                <span><input type="checkbox" id="all_tags212" /><label for="all_tags212">足疗</label></span>
			  
                <span><input type="checkbox" id="all_tags213" /><label for="all_tags213">台球</label></span>
			  
                <span><input type="checkbox" id="all_tags214" /><label for="all_tags214">电玩</label></span>
			  
                <span><input type="checkbox" id="all_tags215" /><label for="all_tags215">陶艺</label></span>
			  
                <span><input type="checkbox" id="all_tags216" /><label for="all_tags216">动物园</label></span>
			  
                <span><input type="checkbox" id="all_tags217" /><label for="all_tags217">游乐园</label></span>
			  
                <span><input type="checkbox" id="all_tags218" /><label for="all_tags218">嬉水</label></span>
			  
                <span><input type="checkbox" id="all_tags219" /><label for="all_tags219">其他娱乐</label></span>
			  
              </dd>
            </dl>
            <dl>
              <dt><input type="checkbox" id="all_tags3" /><label for="all_tags3">生活</label></dt>
              <dd>
	          
                <span><input type="checkbox" id="all_tags30" /><label for="all_tags30">美容</label></span>
              
                <span><input type="checkbox" id="all_tags31" /><label for="all_tags31">美发</label></span>
              
                <span><input type="checkbox" id="all_tags32" /><label for="all_tags32">美甲</label></span>
              
                <span><input type="checkbox" id="all_tags33" /><label for="all_tags33">瘦身</label></span>
              
                <span><input type="checkbox" id="all_tags34" /><label for="all_tags34">婚纱</label></span>
              
                <span><input type="checkbox" id="all_tags35" /><label for="all_tags35">写真</label></span>
              
                <span><input type="checkbox" id="all_tags36" /><label for="all_tags36">体检</label></span>
              
                <span><input type="checkbox" id="all_tags37" /><label for="all_tags37">牙科</label></span>
              
                <span><input type="checkbox" id="all_tags38" /><label for="all_tags38">酒店</label></span>
              
                <span><input type="checkbox" id="all_tags39" /><label for="all_tags39">教育培训</label></span>
              
                <span><input type="checkbox" id="all_tags310" /><label for="all_tags310">汽车服务</label></span>
              
                <span><input type="checkbox" id="all_tags311" /><label for="all_tags311">宠物护理</label></span>
              
                <span><input type="checkbox" id="all_tags312" /><label for="all_tags312">其他生活</label></span>
              
              </dd>
            </dl>
            <dl class="odd">
              <dt><input type="checkbox" id="all_tags4" /><label for="all_tags4">网购</label></dt>
              <dd>
              
                <span><input type="checkbox" id="all_tags40" /><label for="all_tags40">食品茶酒</label></span>
              
                <span><input type="checkbox" id="all_tags41" /><label for="all_tags41">化妆品</label></span>
              
                <span><input type="checkbox" id="all_tags42" /><label for="all_tags42">服装鞋帽</label></span>
              
                <span><input type="checkbox" id="all_tags43" /><label for="all_tags43">箱包</label></span>
              
                <span><input type="checkbox" id="all_tags44" /><label for="all_tags44">饰品</label></span>
              
                <span><input type="checkbox" id="all_tags45" /><label for="all_tags45">母婴儿童</label></span>
              
                <span><input type="checkbox" id="all_tags46" /><label for="all_tags46">家居用品</label></span>
              
                <span><input type="checkbox" id="all_tags47" /><label for="all_tags47">数码</label></span>
              
                <span><input type="checkbox" id="all_tags48" /><label for="all_tags48">家电</label></span>
              
                <span><input type="checkbox" id="all_tags49" /><label for="all_tags49">图书音像</label></span>
              
                <span><input type="checkbox" id="all_tags410" /><label for="all_tags410">券类</label></span>
              
                <span><input type="checkbox" id="all_tags411" /><label for="all_tags411">其他网购</label></span>
              
            </dl>
            
          </span>
        </div>
        <div class="attention_type" style="display:none;">
        	
        		抱歉！该城市未开通商圈功能
        	
        </div>
        <div style="display:none;" class="attention_type" >
        	<span><input type="checkbox" id="all_websites" class="all" /><label for="all_websites">全部</label></span>
         	<span class="attention_lists">
                <dl>
              	<dt><input type="checkbox" id="all_websites1" /><label for="all_websites1">热门团购网站</label></dt>            
              	<dd>
        		<span><input type="checkbox" id="all_websites11" /><label for="all_websites11">拉手</label></span>
                <span><input type="checkbox" id="all_websites12" /><label for="all_websites12">美团网</label></span>
                <span><input type="checkbox" id="all_websites13" /><label for="all_websites13">大众点评团</label></span>
                <span><input type="checkbox" id="all_websites14" /><label for="all_websites14">QQ团</label></span>
                <span><input type="checkbox" id="all_websites15" /><label for="all_websites15">糯米</label></span>
                <span><input type="checkbox" id="all_websites16" /><label for="all_websites16">满座</label></span>
                <span><input type="checkbox" id="all_websites17" /><label for="all_websites17">团宝网</label></span>
                <span><input type="checkbox" id="all_websites18" /><label for="all_websites18">乐淘团</label></span>
                <span><input type="checkbox" id="all_websites19" /><label for="all_websites19">24券</label></span>
                <span><input type="checkbox" id="all_websites110" /><label for="all_websites110">58团购</label></span>
                <span><input type="checkbox" id="all_websites111" /><label for="all_websites111">嘀嗒团</label></span>
                <span><input type="checkbox" id="all_websites112" /><label for="all_websites112">饭团儿</label></span>
                <span><input type="checkbox" id="all_websites113" /><label for="all_websites113">爱帮团</label></span>
                <span><input type="checkbox" id="all_websites114" /><label for="all_websites114">高朋</label></span>
                <span><input type="checkbox" id="all_websites115" /><label for="all_websites115">秀团</label></span>
              	<span><input type="checkbox" id="all_websites116" /><label for="all_websites116">团购王</label></span>
                <span><input type="checkbox" id="all_websites117" /><label for="all_websites117">F团</label></span>
                <span><input type="checkbox" id="all_websites118" /><label for="all_websites118">窝窝团</label></span>
                <span><input type="checkbox" id="all_websites119" /><label for="all_websites119">去哪儿团购</label></span>
                <span><input type="checkbox" id="all_websites120" /><label for="all_websites120">五星汇</label></span>
                <span><input type="checkbox" id="all_websites121" /><label for="all_websites121">饼干盒团购网</label></span>
        		</dd>
            	</dl>
        	<dl>
              <dt><input type="checkbox" id="all_local" /><label for="all_local">本地团购网站</label><a href="javascript:void(0)" id="show_all_tuan">查看<b></b></a></dt>
              <dd style="display:none;" class="local_list">
              	
				<span><em>D</em>
	       		
			   		<input type="checkbox" id="all_websites1000" /><label for="all_websites1000">大众点评团</label></span>
			    	  	
			    	<span>
		     	
			   		<input type="checkbox" id="all_websites1001" /><label for="all_websites1001">嘀嗒团</label></span>
			    
				<span><em>K</em>
	       		
			   		<input type="checkbox" id="all_websites1070" /><label for="all_websites1070">可可团</label></span>
			    
				<span><em>M</em>
	       		
			   		<input type="checkbox" id="all_websites1090" /><label for="all_websites1090">美团网</label></span>
			    	  	
			    	<span>
		     	
			   		<input type="checkbox" id="all_websites1091" /><label for="all_websites1091">满座</label></span>
			    
				<span><em>Q</em>
	       		
			   		<input type="checkbox" id="all_websites1130" /><label for="all_websites1130">去哪儿团购</label></span>
			    
				<span><em>R</em>
	       		
			   		<input type="checkbox" id="all_websites1140" /><label for="all_websites1140">热度团</label></span>
			    
				<span><em>S</em>
	       		
			   		<input type="checkbox" id="all_websites1150" /><label for="all_websites1150">摄影团</label></span>
			    
				<span><em>T</em>
	       		
			   		<input type="checkbox" id="all_websites1160" /><label for="all_websites1160">天秀团</label></span>
			    	  	
			    	<span>
		     	
			   		<input type="checkbox" id="all_websites1161" /><label for="all_websites1161">团购王</label></span>
			    	  	
			    	<span>
		     	
			   		<input type="checkbox" id="all_websites1162" /><label for="all_websites1162">团委会</label></span>
			    
				<span><em>W</em>
	       		
			   		<input type="checkbox" id="all_websites1190" /><label for="all_websites1190">58团购</label></span>
			    	  	
			    	<span>
		     	
			   		<input type="checkbox" id="all_websites1191" /><label for="all_websites1191">窝窝团</label></span>
			    
              </dd>
            </dl>
            </span>
        </div>
      </em>
    </li>
  </ul>
  <div id="sub_input" style="display:none">
      <span></span>
	  <span></span>
	  <span></span>
  </div>
  <div id="select_city_list2" class="select_city_list" style="display:none;">
      <div class="layout">
      <a href="#" class="close">关闭</a>
      </div>
  </div>
  <div class="save_area" style="zoom:1"><a href="javascript:save_custom();" class="blue_btn"><span>保存全部设置</span></a><span id="tip" style="display:none">您的更改保存后才能生效</span></div>
<form name='cForm' id='cForm' action="/tuan/subscribeStep3.do" onsubmit="" method="post">
	<input type='hidden' name='city' value='哈尔滨' />
	<input type='hidden' name='email' value='null' />    
	<input type='hidden' name='username' value='null' /> 
	<input type='hidden' name='tags' value='' />
	<input type='hidden' name='regions' value='' />    
	<input type='hidden' name='websites' value='' /> 
	<input type='hidden' name='is_personal_subscribe' value='' /> 
</form>
</section>
</article>
<!--主体 结束-->
<script type="text/javascript">

	var flag = 1;


</script>
<script type="text/javascript">
$('#qiehuan').click(function(){
	city_flag=1;
	$('#selectCity1').css({'top':'215px','left':'170px'});
	$('#qiehuan span').css('background-position','-316px -25px')
	changeCity();
	$('#select_city span').css('background-position','-299px -25px')
 });
$('#select_city').click(function(){
	city_flag=2;
	$('#selectCity1').css({'top':'95px','left':'180px'});
	$('#qiehuan span').css('background-position','-299px -25px')
});
function save_custom(){
$('.save_area .blue_btn').attr('href','#');
	jQuery.ajax({
	   type: "post",
	   url: "/tuan/saveCustom.do",
	   data: getRequestBody(),
	   success: function(msg){
	     if(msg==0)
	     {	flag=0;
	     	$('#tip').addClass('save_tips_suc').removeClass('save_tips').html('保存成功').show();
			document.cForm.submit();
	     }
	     else if(msg==-1)
	     {
	     	makeAlert('抱歉，提交失败，请重新提交!');
	     }
	   }
	});
$('.save_area .blue_btn').attr('href','javascript:save_custom()');
}
function getRequestBody() {
	var tags="";
	var regions="";
	var websites="";
	var is_personal_subscribe;
	for(var i=0;i<$('.subscribe_content #sub_input span:eq(0) strong').length;i++){	
		tag=$('.subscribe_content #sub_input span:eq(0) strong:eq('+i+')').html();
		if(tag.indexOf(",")!=-1){
			tag=tag.substr(0,tag.length-1);
		}else if(tag!="全部"){
			tag=tag.substr(2,tag.length);
		}
		tags=tags+tag+";";
	}
	document.cForm.tags.value=tags;
	for(var j=0;j<$('.subscribe_content #sub_input span:eq(1) strong').length;j++){	
		region=$('.subscribe_content #sub_input span:eq(1) strong:eq('+j+')').html();
		if(region.indexOf(",")!=-1){
			region=region.substr(0,region.length-1);
		}else if(region!="全部"){
			region=region.substr(2,region.length);
		}
		regions=regions+region+";";
	}
	document.cForm.regions.value=regions;
	for(var k=0;k<$('.subscribe_content #sub_input span:eq(2) strong').length;k++){
		website=$('.subscribe_content #sub_input span:eq(2) strong:eq('+k+')').html();
		if(website.indexOf(",")!=-1){
			website=website.substr(0,website.length-1);
		}else if(website!="全部"){
			website=website.substr(2,website.length);
		}
		websites=websites+website+";";
	}
	if(websites.indexOf(";热门团购网站")!=-1){
		var exchange = websites.split(";")
		websites = exchange[1]+";"+exchange[0]+";";
	}
	document.cForm.websites.value=websites;
	is_personal_subscribe=1;
	document.cForm.is_personal_subscribe.value=is_personal_subscribe;
    var sParam = "tags="+encodeURIComponent(tags.substr(0,tags.length-1))+"&regions="+encodeURIComponent(regions.substr(0,regions.length-1))+"&websites="+encodeURIComponent(websites.substr(0,websites.length-1))+"&is_personal_subscribe="+encodeURIComponent(is_personal_subscribe)+"&email="+encodeURIComponent(document.cForm.email.value)+"&flag="+encodeURIComponent(flag); 
    return sParam;
}
function regular(v){
	var special_str ="￥#$~!@%^&*();'\"?><[]{}\\|,:/=+—“”‘"; 		
	for(var i=0;i<v.length;i++){
		if (special_str.indexOf(v.charAt(i))!=-1) { 
		 makeAlert("不能填写非法字符("+v.charAt(i)+")!");
		 return false;  
		}
	}
	return true;
}
function enterIn(evt){
  var evt=evt?evt:(window.event?window.event:null);//兼容IE和FF
  if (evt.keyCode==13){
  	save_Query();  //这里可以使用您自己的js函数
  }
}
function save_Query(){	
	if($('#keyword .focus_list strong').length>=3){
		makeAlert("最多只能添加三个!");
		return;
	}
	var query =$('#query').val();
	for(var i=0;i<$('#keyword .focus_list strong').length;i++){
	var htmls=$('#keyword .focus_list strong:eq('+i+')').html();
	htmls=htmls.replace(/<.*>/,"");
		if(htmls==query){
			makeAlert("请不要输入重复的关键词!");
			return;
		}	
	}
	if(query==""){
		makeAlert("请填写关键词!");
	}else if(query.length>20){
		makeAlert("输入关键词过长!");
	}else if(regular(query)){
		$('#keyword .blue_btn').attr('href','#');
		var queryNum;
		for(var i=1;i<=3;i++){
			if(document.getElementById("query"+i) == null){
				queryNum = i;
				break;
			}
		}			
		jQuery.ajax({
		   type: "post",
		   url: "/tuan/saveQuery.do?query="+encodeURIComponent(query)+"&queryNum="+encodeURIComponent(queryNum)+"&email="+encodeURIComponent(document.cForm.email.value)+"&flag="+encodeURIComponent(flag)+"&is_personal_subscribe="+encodeURIComponent(),
		   success: function(msg){
		     if(msg==0)
		     {	flag=0;
		     	var html="<strong name='queryElem' id='query"+queryNum+"'>"+query+"<a href='javascript:del_query("+queryNum+")'>X</a></strong>"
		     	$('#keyword .focus_list').append(html);
		     	document.getElementById("query").value="";
		     	poptips($('#keyword'),"保存成功");
		     }
		     else if(msg==-1)
		     {
		     	 makeAlert('抱歉，提交失败，请重新提交!');
		     }
		   }
		});
		$('#keyword .blue_btn').attr('href','javascript:save_Query()');
	}		
}
function del_query(i){
	jQuery.ajax({
	   type: "post",
	   url: "/tuan/delQuery.do?num="+encodeURIComponent(i)+"&email="+encodeURIComponent(document.cForm.email.value),
	   success: function(msg){
	     if(msg==0)
	     {	
	    	 $("#query"+i).remove();
	     }
	     else if(msg==-1)
	     {
	     	 makeAlert('抱歉，删除失败，请重新删除!');
	     }
	   }
	});
}
function makeAlert(str){
	$('#pop_box2 h4').html('信息提示');
	$('.pop_content_box').height(180);
	$('.pop_shade').height(203);
	$('#pop_box2_btns .blue_btn').addClass('delbtn');
	$('#pop_box2_btns').html("<a class='blue_btn' href='javascript:void(0)''><span>确定</span></a>");				
	$('#pop_box2 .msg_content').html("<h5>"+str+"</h5>");
	$('#pop_box2_btns .blue_btn').click(function(){
		popup_close();
	});
	$('#pop_box2,#shade').show();
}
$(function(){
if($('.attention_type:eq(1) input').length==0){
	$('.preferences .focus_list:eq(1) span').html('即将开通，敬请期待<b></b>').css('color','#777');
}
$('#selectCity1 .hot_city li a,#selectCity1 .all_citys li a').live('click',function(){
	if(city_flag!=0){
	var thiscity=$(this).html();
	var form=document.getElementById('cForm');
	form.city.value = thiscity;
	form.action="/tuan/subscribeStep2.do?";	
	form.submit();
	}
});
var $content=$('.single_nav a');
$content.click(function(){
	var contentindex=$content.index($(this));
	$(this).addClass('current').siblings().removeClass('current');
	$('.attention_type:eq('+contentindex+')').show().siblings('.attention_type').hide();
	})
$('#show_all_tuan').toggle(function(){
	$(this).html('收起<b></b>');
	$(this).addClass('current')
	$(this).parent('dt').siblings('dd').show();
},function(){
	$(this).html('查看<b></b>')
	$(this).removeClass('current')
	$(this).parent('dt').siblings('dd').hide();
})
$('.all,.attention_lists dt input').click(function(){
	var indexs=$content.index($('.single_nav a.current'));
	var $inputs=$(this).parent().siblings().find('input');
	var $tabspan=$('.preferences .focus_list:eq('+indexs+') span');
	var $sub_input=$('#sub_input span:eq('+indexs+')');
	var htmlall;
	htmlall='<strong>全部</strong>';
	if($(this).attr('checked')==true){
		    $inputs.attr('checked',true);
			if($(this).hasClass('all')){
			  $tabspan.html(htmlall);
	          $sub_input.html(htmlall);
				}
		}else{
			$inputs.removeAttr("checked");
			$(this).parents('.attention_type').find('.all').removeAttr("checked");
			if($(this).hasClass('all')){
				$tabspan.html($tabspan.html().replace('<strong>全部</strong>',''));
		        $tabspan.html($tabspan.html().replace('<STRONG>全部</STRONG>',''));
				$tabspan.html('未设置<b></b>');
		        $sub_input.html('未设置');
			}
			
		}
	})
  $('.attention_lists input').click(function(){
  		
	  var indexs=$content.index($('.single_nav a.current'));
	  var $tabspan=$('.preferences .focus_list:eq('+indexs+') span');
	  var $sub_input=$('#sub_input span:eq('+indexs+')');
	  var $this_div=$('.attention_type:eq('+indexs+')');
	  var $this_dl=$this_div.find('dl');
	  var sum_input=0;
	  var active_now_input=0;
	  var sum_dd_input= new Array();
	  var active_dd_input= new Array();
	  var indexs_dl=$this_dl.index($(this).parents('dl'));
	  for(i=0;i<$this_dl.length;i++){
		  $this_dd_input=$this_div.find('dl:eq('+i+') dd input')
		  sum_dd_input[i]=$this_dd_input.length;
		  sum_input+=parseInt(sum_dd_input[i]);
		  active_dd_input[i]=$this_div.find('dl:eq('+i+') dd input:checked').length;
		  active_now_input+=parseInt(active_dd_input[i]);
	  }
	  if(active_now_input==sum_input){
		$this_div.find('.all').attr('checked',true);
		$this_div.find('dl:eq('+indexs_dl+') dt input').attr('checked',true);
		$tabspan.html('<strong>全部</strong>');
		$sub_input.html('<strong>全部</strong>');
	  }else{
		$this_div.find('.all').removeAttr("checked");
		if(active_now_input==0){
		  $tabspan.html('未设置<b></b>');
		  $sub_input.html('未设置');
		}else{
		  $tabspan.html($tabspan.html().replace('<strong>全部</strong>',''));
		  $tabspan.html($tabspan.html().replace('<STRONG>全部</STRONG>',''));
		  $sub_input.html($sub_input.html().replace('<strong>全部</strong>',''));
		  $tabspan.html($tabspan.html().replace('未设置<b></b>',''));
		  $tabspan.html($tabspan.html().replace('未设置<B></B>',''));
		  $sub_input.html($sub_input.html().replace('未设置',''));
		  var htmltag='<strong>所有'+$this_div.find('dl:eq('+indexs_dl+') dt label').html()+'</strong>';
		  var subtag='<strong>所有'+$this_div.find('dl:eq('+indexs_dl+') dt label').html()+'</strong>';
		  if(active_dd_input[indexs_dl]==sum_dd_input[indexs_dl]){
			  for(var x=0;x<$tabspan.find('strong').length;x++){
					  var tits=$tabspan.find('strong:eq('+x+')').html();
					  var tits2=$sub_input.find('strong:eq('+x+')').html();
					  var b=$this_div.find('dl:eq('+indexs_dl+') dt label').html();
					  if(tits.indexOf(b)>=0){
					    $tabspan.find('strong:eq('+x+')').remove();
					  }
					  if(tits2.indexOf(b)>=0){
					    $sub_input.find('strong:eq('+x+')').remove();
					  }
					}
			$this_div.find('dl:eq('+indexs_dl+') dt input').attr('checked',true);
			$tabspan.append(htmltag);
			$sub_input.append(subtag);
		  }else{
			$tabspan.html($tabspan.html().replace(htmltag,''));
			$sub_input.html($sub_input.html().replace(htmltag,''));
			$this_div.find('dl:eq('+indexs_dl+') dt input').removeAttr("checked");
		    if($(this).parents('dt').length>0){
				for(var x=0;x<$tabspan.find('strong').length;x++){
					  var tits=$tabspan.find('strong:eq('+x+')').html();
					  var tits2=$sub_input.find('strong:eq('+x+')').html();
					  var b=$this_div.find('dl:eq('+indexs_dl+') dt label').html();
					  if(tits.indexOf(b)>=0){
					    $tabspan.find('strong:eq('+x+')').remove();
					  }
					  if(tits2.indexOf(b)>=0){
					    $sub_input.find('strong:eq('+x+')').remove();
					  }
					}
				if(active_now_input==sum_input-sum_dd_input[indexs_dl]){
					for(j=0;j<$this_dl.length;j++){
					if($this_div.find('dl:eq('+j+') dt input').attr('checked')==true){
					  var htmltag='<strong>所有'+$this_div.find('dl:eq('+j+') dt label').html()+'</strong>';
					  var subtag='<strong>所有'+$this_div.find('dl:eq('+j+') dt label').html()+'</strong>';
					  $tabspan.append(htmltag);
		              $sub_input.append(subtag);
					}
					}
				}
			}else{
				if(active_now_input==sum_input-1){
				  $tabspan.html('');
			      $sub_input.html('');
				  for(j=0;j<$this_dl.length;j++){
					if(j!=indexs_dl){
					  var htmltag='<strong>所有'+$this_div.find('dl:eq('+j+') dt label').html()+'</strong>';
					  var subtag='<strong>所有'+$this_div.find('dl:eq('+j+') dt label').html()+'</strong>';
					  $tabspan.append(htmltag);
		              $sub_input.append(subtag);
					}else{
						var num=0;
						var htmltag=$this_div.find('dl:eq('+j+') dt label').html()+":";
						var subtag=$this_div.find('dl:eq('+j+') dt label').html()+":";
						var $this_dd=$this_div.find('dl:eq('+j+') dd');
						for(k=0;k<sum_dd_input[j];k++){
							if($this_dd.find('input:eq('+k+')').attr('checked')==true){
								if(num==0){
								  htmltag+=$this_dd.find('label:eq('+k+')').html();
								  subtag+=$this_dd.find('label:eq('+k+')').html()+',';
							    }
								if(num<4 && num>0){
								  htmltag+=","+$this_dd.find('label:eq('+k+')').html();
								  subtag+=$this_dd.find('label:eq('+k+')').html()+',';
								}
								if(num==4){
                                    htmltag+="...";
									subtag+=$this_dd.find('label:eq('+k+')').html()+',';
								}
								if(num>4){
									subtag+=$this_dd.find('label:eq('+k+')').html()+',';
								  }
								num++;
							}
						}
						$tabspan.append('<strong>'+htmltag+'</strong>');
		                $sub_input.append('<strong>'+subtag+'</strong>');
					}
				  }
			    }else{
					if(active_dd_input[indexs_dl]==0){
					  for(var x=0;x<$tabspan.find('strong').length;x++){
					  var tits=$tabspan.find('strong:eq('+x+')').html();
					  var tits2=$sub_input.find('strong:eq('+x+')').html();
					  var b=$this_div.find('dl:eq('+indexs_dl+') dt label').html();
					  if(tits.indexOf(b)>=0){
					    $tabspan.find('strong:eq('+x+')').remove();
					  }
					  if(tits2.indexOf(b)>=0){
					    $sub_input.find('strong:eq('+x+')').remove();
					  }
					}
					}else{
					for(var x=0;x<$tabspan.find('strong').length;x++){
					  var tits=$tabspan.find('strong:eq('+x+')').html();
					  var tits2=$sub_input.find('strong:eq('+x+')').html();
					  var b=$this_div.find('dl:eq('+indexs_dl+') dt label').html();
					  if(tits.indexOf(b)>=0){
					    $tabspan.find('strong:eq('+x+')').remove();
					  }
					  if(tits2.indexOf(b)>=0){
					    $sub_input.find('strong:eq('+x+')').remove();
					  }
					}
					var num=0;
					var htmltag=$this_div.find('dl:eq('+indexs_dl+') dt label').html()+":";
					var subtag=$this_div.find('dl:eq('+indexs_dl+') dt label').html()+":";
					var $this_dd=$this_div.find('dl:eq('+indexs_dl+') dd');
					for(var k=0;k<sum_dd_input[indexs_dl];k++){
							if($this_dd.find('input:eq('+k+')').attr('checked')==true){
								if(num==0){
								  htmltag+=$this_dd.find('label:eq('+k+')').html();
								  subtag+=$this_dd.find('label:eq('+k+')').html()+',';
							    }
								if(num<4 && num>0){
								  htmltag+=","+$this_dd.find('label:eq('+k+')').html();
								  subtag+=$this_dd.find('label:eq('+k+')').html()+',';
								}
								if(num==4){
                                    htmltag+="...";
									subtag+=$this_dd.find('label:eq('+k+')').html()+',';
								}
								if(num>4){
									subtag+=$this_dd.find('label:eq('+k+')').html()+',';
								  }
								num++;
							}
						}
						$tabspan.append('<strong>'+htmltag+'</strong>');
		                $sub_input.append('<strong>'+subtag+'</strong>');
					}
				}
			}
		  }
		}
	  }
	  $('#tip').addClass('save_tips').removeClass('save_tips_suc').html('您的更改保存后才能生效').show();
  })
})
</script>




 
<footer class="main_footer">
  <nav class="footer_nav"><a href="#" id="seoLnk">网易电商</a>|<a href="/tz/nav.do">团购导航</a><span>|</span><a href="/tuan/about.html?v=20130123">关于我们</a><span>|</span><a href="http://survey2.163.com/html/tuanzhang/paper.html">意见反馈</a><span>|</span><a href="/tuan/api.html?v=20130123">开放API</a><span>|</span><a href="/tuan/help.html?v=20130123">帮助</a><span>|</span><a href="/tuan/help_unionlogin.html?v=20130123">一站通</a></nav>
  <p><a href="http://corp.163.com/eng/about/overview.html">About NetEase</a>-<a href="http://gb.corp.163.com/gb/about/overview.html">公司简介</a>-<a href="http://gb.corp.163.com/gb/contactus.html">联系方法</a>-<a href="http://corp.163.com/gb/job/job.html">招聘信息</a>-<a href="http://help.163.com/">客户服务</a>-<a href="http://gb.corp.163.com/gb/legal.html">隐私政策</a>-<a href="http://emarketing.biz.163.com/">网络营销</a></p>
  <p>增值电信业务经营许可证：浙B2-20110418&nbsp;|&nbsp;<a href="http://www.lede.com/prove.html">网站相关资质证明</a></p>
  <p>网易公司版权所有 ©1997-2014</p>
</footer>

<div id="neSEOWrap" rel="#seoLnk"><div id="neSEOList">
	<a href="http://caipiao.163.com/" title="安全、稳定的网上买彩票平台" target="_blank">彩票</a><div class="hoverTip">
		提供<a href="http://caipiao.163.com/award/" target="_blank">彩票开奖</a>、买彩票、<a href="http://zx.caipiao.163.com/trend/trend.html" target="_blank">走势图</a>、<a href="http://caipiao.163.com/award/" target="_blank">开奖结果</a>；
		<a href="http://caipiao.163.com/dating/buyHouse.jsp" target="_blank">彩种</a>包括<a href="http://caipiao.163.com/" target="_blank">福彩</a><a href="http://caipiao.163.com/" target="_blank">体彩</a>、<a href="http://caipiao.163.com/order/preBet_ssq.html" target="_blank">双色球</a>、
		<a href="http://caipiao.163.com/order/preBet_x3d.html" target="_blank">3D</a>、<a href="http://zx.caipiao.163.com/pl3/" target="_blank">排列3</a>、<a href="http://zx.caipiao.163.com/dlt/" target="_blank">大乐透</a>、
		<a href="http://caipiao.163.com/order/preBet_rx9.html" target="_blank">足彩</a>、<a href="http://caipiao.163.com/order/preBet_jczqspfp.html" target="_blank">竞彩足球</a>、<a href="http://caipiao.163.com/order/preBet_jclqsfp.html" target="_blank">竞彩篮球</a>。
		囊括<a href="http://zx.caipiao.163.com/trend/ssq_basic.html" target="_blank">双色球走势图</a>、<a href="http://caipiao.163.com/award/ssq/" target="_blank">双色球开奖结果</a>、
		<a href="http://zx.caipiao.163.com/trend/x3d_basic.html" target="_blank">3D走势图</a>、<a href="http://caipiao.163.com/award/x3d/" target="_blank">3D开奖结果</a>、
		<a href="http://zx.caipiao.163.com/trend/dlt_basic.html" target="_blank">大乐透走势图</a>、<a href="http://caipiao.163.com/award/dlt/" target="_blank">大乐透开奖结果</a>等。
	</div>
	<a href="http://mall.163.com/" title="专业安全的网上购物商城" target="_blank">商城</a><div class="hoverTip">
		网易<a href="http://mall.163.com/" target="_blank" >商城</a>，<a href="http://mall.163.com/mobile/fill.html" target="_blank">充话费</a>买<a href="http://mall.163.com/game/queryGame.html" target="_blank">点卡</a>，方便实惠。<a href="http://mall.163.com/mobile/fill.html" target="_blank">话费充值</a>，速度快折扣低。<a href="http://mall.163.com/game/queryGame.html" target="_blank">网游</a>点卡应有尽有，超低价格。<a href="http://mall.163.com/fuqinjie" target="_blank">父亲节</a>活动正在进行，为父亲充话费，有机会拿麦旋风。
	</div>
	<a href="http://baoxian.163.com/" title="网上买平安、太平洋、泰康、阳光、安联等品牌保险的网站" target="_blank">保险</a><div class="hoverTip">
		网易保险，打造专业<a href="http://baoxian.163.com/" target="_blank">保险</a>平台：<a href="http://baoxian.163.com/car/" target="_blank">车险</a>、<a href="http://baoxian.163.com/yiwai_baoxian.html" target="_blank">意外险</a>、<a href="http://baoxian.163.com/renshou_baoxian.html" target="_blank">人寿保险</a>，
		<a href="http://baoxian.163.com/" target="_blank">保险</a>品种丰富；<a href="http://baoxian.163.com/car/pingan.html" target="_blank">平安保险</a>、<a href="http://baoxian.163.com/car/taipingyang.html" target="_blank">太平洋保险</a>、<a href="http://baoxian.163.com/" target="_blank">泰康</a>，汇聚知名公司！
	</div>
	<a href="http://youhui.163.com/" title="优惠券,肯德基优惠券,必胜客优惠券,手机优惠券尽在网易乐得惠" target="_blank">乐得惠</a><div class="hoverTip">
		网易乐得惠，打造美食<a href="http://youhui.163.com/" target="_blank">优惠</a>平台！涵盖<a href="http://youhui.163.com/" target="_blank">麦当劳优惠券</a>、<a href="http://youhui.163.com/" target="_blank">肯德基优惠券</a>、<a href="http://youhui.163.com/brand/shopCouponList/700000/110000.html" target="_blank">真功夫优惠券</a>等众多知名品牌美食优惠，
		提供电子优惠券、短信优惠券、二维码优惠券等多类型的优惠方式
	</div>
	<a href="http://yxp.163.com/" title="专业影像产品定制平台，体验创作、展示的乐趣，享受专业的品质。" target="_blank">印像派</a><div class="hoverTip">
		专业影像产品定制平台，体验创作、展示的乐趣，享受专业的品质。
	</div>
	<a href="http://baojian.163.com/" title="网易保健品商城是专业的保健食品类网上购物商城，提供减肥产品，左旋肉碱，胶原蛋白，维生素类保健食品。质量保证，全场包邮。" target="_blank">保健品</a><div class="hoverTip">
		网易保健品商城是专业的保健食品类网上购物商城，提供减肥产品，左旋肉碱，胶原蛋白，维生素类保健食品。质量保证，全场包邮。
	</div>
</div></div>

<div id="pop_box" class="urs_login_box">
	<!--第一行—顶部*/-->
	<div class="urs_login_top">
		<div class="urs_login_t_m"></div>
	</div>
	<div class="urs_login_t_l"></div>
	<div class="urs_login_t_r"></div>
	<!--第二行—中间内容区*/-->
	<form id="loginForm" onsubmit="indexNew.urs_login_submit(this);return false" action="https://reg.163.com/logins.jsp" method="post" name="login_form_urs" class="urs_login_form">
		<div class="urs_login_suggest"><span id="useremail_box" class="suggest_box input_layout">
          <input type="text" value="如name@example.com" autocomplete="off" name="username" id="username" class="urs_login_input" tabindex="1" /><span class="ursLoginErr" id="nameInputErr"></span>
          <input type="hidden" value="tuan" name="product" />
          <input type="hidden" value="" id="url" name="url" />
        </span></div>
		<div class="urs_login_middle">
			<div class="urs_login_m_l"></div>
			<div class="urs_login_m_r"></div>
			<div class="urs_login_context">
			<h3 class="urs_login_title"><span class="f_left">登录网易通行证</span><a href="#" class="urs_login_close" onclick="popup_close()"></a></h3>
			<div class="urs_login_con">
			<table width="96%" cellspacing="0" cellpadding="0" border="0" class="urs_login_table">
			  <tbody>
              <tr>
				<td width="29%" height="44"><div align="right">帐号：</div></td>
				<td colspan="2"></td>
              </tr>
              <tr>
                <td height="44"><div align="right">密码：</div></td>
                <td colspan="2"><span class="input_layout"><input type="password" class="urs_login_input" name="password" id="password" tabindex="2" /></span></td>
              </tr>
            </tbody>
          </table>
          <div id="urs_autologin_box" class="urs_autologin_box">
              <input type="checkbox" id="savelogin" name="savelogin" tabindex="3" checked="checked" />&nbsp;两周内自动登录
              <div style="display: none;" id="urs_autologin" class="urs_autologin"><span class="urs_autologin_arr"></span>为了您的信息安全，请不要在网吧或公用电脑上使用此功能！ </div>
          </div>
          <a class="urs_forget" href="http://reg.163.com/RecoverPasswd1.shtml">&nbsp;&nbsp;&nbsp;&nbsp;忘记密码？</a>
          <a class="submit_btn" href="#"><span><input type="submit" value="登录" /></span></a>
          <a class="urs_login_link" href="http://reg.163.com/reg/reg.jsp?product=tuan&amp;url=http://tuan.163.com/&amp;loginurl=http://tuan.163.com/">注册网易通行证&gt;&gt;</a>
        </div>
      </div>
    </div>
  </form>
  <!--第三行—底部*/-->
  <div class="urs_login_b_m"><span style="display:block"></span></div>
  <div class="urs_login_b_l"></div>
  <div class="urs_login_b_r"></div>
</div>

<div id="pop_box2">
  <div class="pop_content_box">
    <a href="#" class="close" onclick="popup_close()"></a>
    <h4>信息提示</h4>
    <div class="msg_content">
      <div id="pop_box2_icon" class="tips_icon fail"></div>
      <h5 id="pop_box2_tip" >收藏成功！</h5>
      <p id="pop_box2_detail">您可以到<a href="#">我的收藏</a>夹里查看</p>
    </div>
    <div class="btn_area" id="pop_box2_btns">
      <a href="javascript:popup_close()" class="blue_btn"><span>确定</span></a>
      <!-- 
      <a href="javascript:popup_close()" class="white_btn"><span>取消</span></a>
       -->
    </div>
  </div>
  <div class="pop_shade"></div>
</div>
<div id="shade"></div>
</article>

<script>
$('#pop_box,#pop_box2').hide();
var cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.rev = "stylesheet";
cssLink.type = "text/css";
cssLink.media = "screen";
cssLink.href = "http://pimg1.126.net/tuan/css/iehack.css?v=20120919";
document.getElementsByTagName("head")[0].appendChild(cssLink);
</script>
<script type="text/javascript">
var email_str=["@163.com","@126.com","@yeah.net","@vip.163.com","@vip.126.com","@popo.163.com","@188.com","@qq.com","@yahoo.com.cn","@sina.com"];
var ursSuggest = new suggest(email_str,"useremail_box","username");
</script>

<script type="text/javascript">
	
	
	  //热门搜索
	function submitHotSearch(obj){
		$('#search_txt1').val(obj);
		indexNew.submitSearch(document.getElementById('searchForm'));					
	};
  
	//初始化弹出框位置
	resetpop();
  	window.onresize=function(){
		leftbar();
		resetpop();
	};
   
    function select_redirect_url_new(loc,isLogin, website, loginUrl,tong,fan){
		if(isLogin == 0 || loginUrl == '' || loginUrl.length == 0 || loginUrl == '1'){//no login or no union login
		//传递连接和网站参数作为参数
	   var url="/tuan/jump.html?loc="+encodeURIComponent(loc)+"&"+"website="+encodeURIComponent(website);
		if(fan!=0)
		{
		
	         url=url+"&fan=" +fan;
		}
		if(tong!=0)
		{
		
	         url=url+"&tong=1" 
		}
		
			url=url+"&v=2011071815";
			window.open(url);
			return;
		}
		//跳转到中转页面
		var login_url = '';
		if(loginUrl.indexOf('?') == -1){
			login_url = loginUrl+'?gotoUrl='+encodeURIComponent(loc);
		}else{
			login_url = loginUrl+'&gotoUrl='+encodeURIComponent(loc);
		}
		//验证cookie
		var flag = indexNew.getCookie("UNION_LOGIN");
		if(flag != null && flag == 1){
			window.open("http://reg.163.com/partner/r.jsp?r_url="+encodeURIComponent(login_url));
			return;
		}
		window.open('/tuan/blank.jsp?v=20110215&website='+encodeURIComponent(website)+'&loc='+encodeURIComponent(loc)+'&login_url='+encodeURIComponent(login_url));
	}
	function select_redirect_url(loc,isLogin, website, loginUrl){
		if(isLogin == 0 || loginUrl == '' || loginUrl.length == 0 || loginUrl == '1'){//no login or no union login
		//传递连接和网站参数作为参数
			window.open("/tuan/jump.html?loc="+encodeURIComponent(loc)+"&"+"website="+encodeURIComponent(website)+"&v=20110610");
			//window.open(loc);
			return;
		}
		//跳转到中转页面
		var login_url = '';
		if(loginUrl.indexOf('?') == -1){
			login_url = loginUrl+'?gotoUrl='+encodeURIComponent(loc);
		}else{
			login_url = loginUrl+'&gotoUrl='+encodeURIComponent(loc);
		}
		//验证cookie
		var flag = indexNew.getCookie("UNION_LOGIN");
		if(flag != null && flag == 1){
			window.open("http://reg.163.com/partner/r.jsp?r_url="+encodeURIComponent(login_url));
			return;
		}
		window.open('/tuan/blank.jsp?v=20110215&website='+encodeURIComponent(website)+'&loc='+encodeURIComponent(loc)+'&login_url='+encodeURIComponent(login_url));
	}

	$(function(){
		
		
		
		
		
		var param = "http://tuan.163.com/tuan/index.do";
		
		indexNew.shareTuan(param);	
		indexNew.checkCookie();
	});
	
	//订阅邮件默认非163加@
	if(!!document.getElementById('subscribe_email') && $('#subscribe_email').val() != '请输入您的E-mail地址' && $('#subscribe_email').val().indexOf("@") < 0){
		$('#subscribe_email').val($('#subscribe_email').val()+"@163.com");
	}
	
	//
	function person_center_login(){
		var s_info = indexNew.getCookie("S_INFO");
		if(s_info != null && s_info.length > 0)
			window.location.href = "http://tuan.163.com/tuan/personalcenter.do";
		else{
			document.getElementById("url").value = "http://tuan.163.com/tuan/personalcenter.do";
			popup_open();
		}	
	}
	function person_commom_login(url){
		var s_info = indexNew.getCookie("S_INFO");
		if(s_info != null && s_info.length > 0)
			window.location.href = url;
		else{
			document.getElementById("url").value = url;
			popup_open();
		}	
	}
	function normal_login(){
		//document.getElementById("url").value = parent.location.href;
		popup_open();
	}
</script>
<!-- START NetEase Devilfish -->

<script type="text/javascript" language="javascript" src="http://pimg1.126.net/tuan/js/click_163.js?v=20110303"></script>

<script src="http://analytics.163.com/ntes.js?v=20110613" type="text/javascript"></script>

<script type="text/javascript">

_ntes_nacc = "travel";

neteaseTracker();
neteaseClickStat();

</script>

<!-- END NetEase Devilfish -->
<script src="http://pimg1.126.net/tuan/js/ls.js?v=2011071816"></script>
<script>
if($('#no_shows').length>0){
val = LS.item($('#no_shows').attr('id'));
if(val!=null){$('.return_tips').hide()}else{$('.return_tips').show()};
$(function(){
	$('.return_tips .close').click(function(){
	  if($('#no_shows').attr("checked")==true){
		LS.item($('#no_shows').attr('id'),$('#no_shows').val());
	  }
	  $('.return_tips').hide();
	})
});
}
if($('#no_tips').length>0){
val = LS.item($('#no_tips').attr('id'));
if(val!=null){$('.rule_tips').remove()};
$(function(){
	$('#no_tips').click(function(){
	LS.item($('#no_tips').attr('id'),"1");
	$('.rule_tips').remove();
	})
})
}
</script>
<script src="http://pimg1.126.net/tuan/js/hoverTip.js?v=2012050412" type="text/javascript"></script>
<script src="http://pimg1.126.net/tuan/js/history.js?v=2011072111" type="text/javascript"></script>
</body>
</html>    