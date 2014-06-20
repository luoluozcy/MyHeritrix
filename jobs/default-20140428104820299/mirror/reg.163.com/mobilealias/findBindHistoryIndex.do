<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网易通行证</title>


<link rel="stylesheet" type="text/css" href="/gaiban/css/master.css?v=20110323" />

<script type="text/javascript" language="javascript" src="/js/prototype.js"></script>
<script type="text/javascript" language="javascript" src="/js/common.js?v=20100909"></script>
<script type="text/javascript" language="javascript" src="/js/passport.js?v=20110628"></script>
<script type="text/javascript" language="javascript" src="/gaiban/js/checkform.js"></script>
<script type="text/javascript" language="javascript" src="/gaiban/js/base.js"></script>
<script language="JavaScript" src="/newreg/js/jquery-1_3_1.js"></script>
<style type="text/css">
body,input,select,button{font-family:verdana,sans-serif}
h1,h2,h3,h4,h5,h6,select,input,textarea,button,table{font-size:100%}
body,h1,h2,h3,h4,h5,h6,ul,ol,li,form,p,dl,dt,dd,table,th,td,img,blockquote{margin:0;padding:0;border:0}
/* 找回主帐号 */
	.c-find{width:656px;margin:auto;background-position:0 0;padding-top:10px}
	.c-find .find{background-position:100% 0;background-repeat:repeat-y}
	.c-find .find .inner{width:556px;padding:25px 50px;background-position:-656px 100%}
	.c-find .find table{margin-top:10px;width:100%;table-layout:fixed}
	.c-find .find th,
	.c-find .find td{height:30px}
	.c-find .find th{font-weight:normal;text-align:right;width:220px}
	.c-find .find .mainid{color:#1C7906}
	.c-find .find .msg{padding:4px 0;margin:5px 0;width:100%;text-align:center;background:#FFFDF0}
	.c-find .find .msg-err{color:#E60012}
	.c-find .find .msg-norecord{padding:15px 0;margin:25px 0;line-height:24px}
	.c-find .find .msg-norecord .ne-ico{margin-right:8px}
	.c-find .find .button td{height:50px}
	.c-find .find div.button{text-align:center}
	.c-find .find .ipt-t{border:1px solid #B4B9BD;width:185px;height:20px;padding:3px;margin:5px 0;font-size:16px}
	.c-find .find .ipt-t-id{width:110px}
	.c-find .find .domain{font-size:12px}
	.c-find .find .forget{width:100px;font-size:12px;text-align:left;margin:2px 10px 0 32px}
	.c-find .tips{font-size:12px;margin-top:20px;color:#7d7d7d}
	h6{font-weight:bold;}
</style>
</head>
<body>
<!--头部 开始-->
<div class="header">
  <div class="header_tool"><br />
    <a href="http://www.163.com/" target="_blank">网易首页</a> <a href="http://survey2.163.com/html/passport_feedback/paper.html" target="_blank">反馈意见</a> <a href="http://help.163.com/special/sp/urs_index.html?site=reg" target="_blank">帮助</a></div>
  <a href="http://reg.163.com/"><img src="/gaiban/images/logo.png" class="logo" alt="网易通行证" width="274" height="36" border="0" title="网易通行证"/></a> 
  </div>
   <ul class="menu">
  	 <li><a  class="m1 " href="http://reg.163.com/Main.jsp"><span>我的通行证</span></a></li>
  	 <li><a  class="m2 " href="/account/accountInfo.jsp"><span>帐号管理</span></a></li>
 	 <li><a  class="m3 " href="/mibao/controller/goIndex.jsp"><span>密保管理</span></a></li>
  	 <li class="end"></li>
   </ul>
<!--头部 结束-->
<!--主体 开始-->
<div class="main">
  <div class="main_con1" style="border-top:1px solid #C8C8C8;">
   <div class="c-find">
   	 <div class="find">
        <div class="inner">
     			            <h6>找回网易手机号码邮箱主帐号</h6>
	                        <p>在您激活网易手机号码邮箱时，我们同时为您激活手机号码邮箱的主帐号。当您不再使用某个手机号码后，此号码的现有主人开通网易手机号码邮箱后，您依然可使用主帐号登录进入您原来的邮箱，收取邮件。</p>
	                        <div id="msgErr" class="msg msg-err" style="display: none;"></div>
	                        <table id="table-t-query">
	                            <tr>
	                                <th>您的手机号：</th>
	                                <td class="t-query-input">

	                                    <input id="mobile" name="mobile" class="ipt-t ipt-noime" type="text" onfocus="$('#msgErr').hide();"/>
	                                </td>
	                                <td class="t-query-success" style="display: none;"><strong id="td_mobile_str"></strong></td>
	                            </tr>
	                            <tr class="t-query-input">
	                                <th>密码：</th>
	                                <td><input id="password" name="password" class="ipt-t" type="password" onfocus="$('#msgErr').hide();this.value='';"/></td>
	                                <td><div class="forget"><a href="http://reg.163.com/RecoverPassword.shtml">忘记密码？</a></div></td>
	                            </tr>
	                            <tr class="t-query-input">
									<th>验证码：</th>
	                                <td><input type="text" name="radomPass" id="radomPass" class="ipt-t ipt-noime" onfocus="$('#msgErr').hide();this.value='';"/></td>
								</tr>
								<tr class="t-query-input">
									<th></th>
           							<td colspan="2"><span id="checkCodeContainer"></span><span class="info">&nbsp; 不区分大小写，<a href="javascript:void(0)" id="freshRandomImgBtn">换一张</a></span></td>
								</tr>
	                            <tr class="button t-query-input">
	                                <td></td>
	                                <td><span class="f_btn "><input type="button" class="r_btn w_85" value="查 询" onclick="query();"/></span></td>

	                            </tr> 
	                            
	                            <tr class="t-query-success" style="display: none;">
	                                <th valign="top">主帐号：</th>
	                                <td id="td_main_str"></td>
	                            </tr>
	                            <tr class="t-query-success" style="display: none;">
                                    <td colspan="2">
                                        <div class="msg msg-err">

                                                                                                            您可以选择您的主帐号去登录网易通行证
                                        </div>
                                    </td>
                                </tr>
	                            <tr class="button t-query-success" style="display: none;">
	                                <td></td>
	                                <td><span class="f_btn "><input type="button" onclick="location.href='http://reg.163.com//UserLogin.shtml'" class="r_btn w_85" value="去登录页面"/></span></td>
	                            </tr>
	                        </table>

	                         <!-- 没有记录 -->
		                    <div class="msg msg-err msg-norecord" style="display: none;">
		                        <span class="ne-ico ico-alert2"></span>无记录，此手机号码邮箱帐号尚未激活！
		                    </div>  
		                    <div class="button msg-norecord" style="display: none;">
		                        <span class="f_btn "><input type="button" class="r_btn w_85" value="返 回" onclick="backToIndex()"/></span>
		                    </div>
    </div>
    </div>
    </div>  
    </div> 
    <div class="clear"></div>
  <div class="main_bottom1"></div>
</div>
<!--主体 结束-->
<!--版权 开始-->
<div class="footer"><a href="http://corp.163.com/eng/about/overview.html" target=_blank hasbox="2">About NetEase</a> - <a href="http://gb.corp.163.com/gb/about/overview.html" target=_blank >公司简介</a> - <a href="http://gb.corp.163.com/gb/contactus.html" target=_blank >联系方法</a> - <a href="http://corp.163.com/gb/job/job.html" target=_blank >招聘信息</a> - <a href="http://help.163.com/" target=_blank >客户服务</a> - <a href="http://gb.corp.163.com/gb/legal.html" target=_blank >相关法律</a> - <a href="http://emarketing.biz.163.com/" target=_blank >网络营销</a> <br />
    网易公司版权所有 &copy;1997-2014 </div>
<!--版权 结束-->
<script type="text/javascript">document.cookie = "URS_Analyze=1";</script><!-- Nielsen and Devilfish -->
<!-- START NetEase Devilfish 2006 -->
<script src="//analytics.163.com/ntes.js" type="text/javascript"></script>
<script type="text/javascript" language="javascript" src="/mibao/js/randomImg.js"></script>
<script type="text/javascript">
_ntes_nacc = "urs";
neteaseTracker();
</script>
<!-- END NetEase Devilfish 2006 --> 
</body>
</html>
<script type="text/javascript" src="/mibao/js/formutil.js" charset='gbk'></script>
<script language="JavaScript">
    function query(){
    	$("#msgErr").text("").hide();
    	
        var mobile = $("#mobile").val();
		var password = $("#password").val();
		var radomPassID = $(":input[name='radomPassID']").val();
		var radomPass = $("#radomPass").val();
		
		if(formUtil.checkConfig.mob.checkMobile(mobile)){
        	$("#msgErr").text("").hide();
        }else{
            $("#msgErr").text("请输入正确的手机号码").show();
            return;
        }
        
        if(password==null||""==password){
        	$("#msgErr").text("请输入密码").show();
            return;
        }
        
        if(radomPass==null||radomPass==""){
        	$("#msgErr").text("请输入验证码").show();
            return;
        }
            
        $.ajax({
			  type: 'POST',
			  url: "/mobilealias/findBindHistory.do",
			  data: {mobile:mobile,password:password,radomPass:radomPass,radomPassID:radomPassID},
			  dataType: "json",
			  async:false,
			  success: function(result){               	
                	var errMsg=result.errMsg;
                	var data=result.historyList;
                	
                	if(errMsg!=null){
                		$("#msgErr").text(errMsg).show();
           				return;
                	}
                
                    if(data.length>0){
 						$(".msg-norecord").hide();
		                $(".t-query-input").hide();
		                $("#table-t-query").show();
		                $("#td_mobile_str").text(mobile);
		                $("#td_main_str").empty();
		                for(var i=data.length-1;i>=0;--i){
			                 if(0==i){
			                     $("#td_main_str").append("<strong  class='mainid'>"+data[i]+"</strong>");
			                 }else{
			                     $("#td_main_str").append("<strong  class='mainid'>"+data[i]+"</strong><br/>");
			                   }
			            }
		                $(".t-query-success").show();
		                return;
		             }else{
                        $(".msg-norecord").show();
                        $("#table-t-query").hide();
                        return;
                     }
           	  },	
			 error:function(){
			 	$("#msgErr").text("系统异常,请稍后再试").show();
			 }
		});  
		CheckCodeUtil.init($('#checkCodeContainer'),$('#freshRandomImgBtn'));        
   	}
    
    
    function backToIndex(){
    	$(".msg-norecord").hide();
    	$(".t-query-success").hide();
    	$("#password").val("");
        $(".t-query-input").show();
        $("#table-t-query").show();
    }
</script>

</body>
</html>
