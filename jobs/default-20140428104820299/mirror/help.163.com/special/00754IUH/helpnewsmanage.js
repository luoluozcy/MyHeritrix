/*网易帮助中心 活动内容管理
数组最后一个数据的类型如下：
    163邮箱：     f_163
    126邮箱：     f_126
    yeah邮箱：    f_yeah
    免费共用：    free
    vip163邮箱：  v_163
    vip126邮箱：  v_126
    188邮箱：     v_188
    收费共用：    vip
        电子传真：    fax
    help/urs首页：    index
    多个邮箱共用使用|进行分隔
紧急公告：     
["2011.09.04","http://vip.163.com/note/note20110902.html","电子传真维护公告","vip"],
["2012.11.01","http://vip.163.com/note/global/notice_new20121101.htm","电信运营商线路故障公告","vip"], 
["2012.12.23","http://help.163.com/10/0813/11/6DVD4A5200752A0Q.html","客服中心电话电力维护公告","index|free"], 
["2012.12.23","http://help.163.com/11/0830/22/7CO5A52M00752A0Q.html","VIP邮箱客服中心电力维护公告","vip"], 
["2012.12.23","http://help.163.com/11/0902/14/7CV014BF00752A0Q.html","帐号修复中心电力维护公告","index|free"], 
["2013.7.16","http://vip.163.com/note/global/notice20130716.htm?form=help","VIP邮箱云附件维护公告","vip"], 
*/
var content = [ ["2014.03.06","http://activity.vip.163.com/activity/param/index.html?from=helpchain","史上最给力，免费升级无限容量啦！","vip|index"],
                ["2014.03.03","http://activity.vip.163.com/activity/vipupgrade.html?from=helpchain","2014我是VIP，现在升级送惊喜好礼！","vip|index"],
                ["2014.02.21","http://activity.vip.163.com/activity/sgemba/index.m?from=helpchain","VIP特权-北京EMBA高峰论坛 免费抢名额","vip|index"],  
                ["2013.12.30","http://8.vip.163.com#from=vip2","限时好礼免费送 立即查看您的礼品清单","vip|index"],
                ["2013.11.22","http://clubact.mail.163.com/clubact/balloon/index.do","积分大回馈 击破气球抢大奖","free|index"],
                ["2013.11.22","http://activity.vip.163.com/activity/nissan2013/index.m?from=help","VIP尊享东风日产免费试驾","vip|index"],
                ["2013.11.15","http://activity.vip.163.com/activity/carshow2013/index.m?form=help","免费预约  2013广州国际车展","vip|index"],
                ["2013.11.1","http://activity.vip.163.com/activity/newyorktravel/index.m?form=help","VIP特惠  积分兑纽约一日游","vip|index"],
                ["2013.11.1","http://help.163.com/13/0923/14/99FBLOGA00753VB8.html","虚拟场景写信 全新上线","free|index"],
                ["2013.11.1","http://help.163.com/13/1028/15/9C9JLUEE00753VB8.html","用易信收发邮件、免费发短信","free"],
                ["2013.10.18","http://activity.vip.163.com/activity/benztestdrive/index.m?form=help","VIP尊享礼遇 奔驰免费试驾","vip|index"],
                ["2013.10.8","http://help.163.com/13/0930/14/9A1CLM6I00752JEH.html","邮箱管家 易信公众号全新上线","vip|index"],
                ["2013.9.23","http://activity.vip.163.com/activity/ixdc/index.m#from=help1","免费抢中国互联网产品大会门票","vip|index"],
                ["2013.10.8","http://go.163.com/2013/0918/ctf/index.php?from=help","邮箱换肤赢取周大福千元钻饰","free"],
                ["2013.9.2","http://activity.vip.163.com/activity/renew/index.m?from=2013xflb5","抢超值续费礼包赢iPhone5","vip|index"],
                ["2013.8.29","http://reg.vip.163.com/register.m?form=help","限时好礼免费送 限电话注册","free"], 
                ["2013.8.29","http://activity.vip.163.com/activity/fleurbrume/index.m?from=qy302","给明星写信 赢签名好礼","vip|index"],  
                ["2013.8.19","http://reg.vip.163.com/register.m?form=help","限时好礼免费送 限电话注册","vip|index"], 
                ["2013.8.19","http://activity.vip.163.com/activity/fortuneforum/index.m?from=help","财富论坛：聚焦中国财富梦","vip|index"], 
                ["2013.7.31","http://help.163.com/13/0131/14/8MI9RSUH00753VB8.html?form=help","为邮箱体检-防止被盗！","free|index"],
                ["2013.7.31","http://help.163.com/13/0419/14/8SR3J4VU00753E6H.html?form=help","雅虎邮箱8月停用相关对策","index|free"],
                ["2013.7.31","http://help.163.com/13/0813/13/965N8LGO00753VB8.html?form=help","1积分升级到3G大附件","f_163"],
                ["2013.7.31","http://help.163.com/13/0813/15/965SGQTC00753VB9.html?form=help","1积分升级到3G大附件","f_126"],
                ["2013.7.31","http://help.163.com/13/0814/12/96870JJR00753VBA.html?form=help","1积分升级到3G大附件","f_yeah"],
                ["2013.7.30","http://activity.vip.163.com/activity/mistsguess/index.m?from=qy203","猜剧名 赢明星签名照！","vip|index|free"],                 
                ["2013.7.25","http://activity.vip.163.com/activity/economist/index.m?from=vip4","立即报名网易经济学家年会","vip|index"], 
                ["2013.7.11","http://activity.vip.163.com/activity/inscription/index.m?form=help","给VIP首页题词赢好礼","vip|index|free"], 
                ["2013.6.27","http://activity.vip.163.com/activity/updateviplevel/index.m?form=help","升级邮箱赢iPad 100%有奖","vip"],  
                ["2013.6.27","http://help.163.com/13/0702/17/92Q15U7M00753VB8.html?form=help","网易邮箱优化大师上线！","free|index"],   
                ["2013.6.27","http://help.163.com/10/0421/10/64POV4KT00753VB8.html?form=help","建议开通“邮件撤回”功能","free|index"],   
                ["2013.6.27","http://help.163.com/11/0503/17/73580VTP00753VB8.html?form=help","有惊喜 多个网易邮箱请点击","free|index"],   
                ["2013.6.27","http://help.163.com/special/sp/fax.html?form=help","免传真机 邮箱收发传真","free|index"],  
                ["2013.6.25","http://activity.vip.163.com/activity/attrbank/index.m?form=help","探寻小微企业融资与发展","vip|index"],
                ["2013.6.24","http://activity.vip.163.com/activity/renew/index.m?from=2013xflb5","抢超值续费礼包赢iPhone5","vip"],
                ["2013.6.23","http://activity.vip.163.com/activity/ljzforum/index.m?from=2013ljzb","与全球权威金融精英风暴对话","vip|index"],
                ["2013.6.1","http://activity.vip.163.com/activity/childrenaward/index.m?form=vip5","5000份魔法礼  你来就送","free|vip|index"],  
                ["2013.5.21","http://activity.vip.163.com/activity/femaleshop/index.m?form=vip1","分享职场衣Q赢VIP购物卡","free|vip|index"],
                ["2013.5.10","http://activity.vip.163.com/activity/ixdc/index.m?form=help","设计师的年度盛会","vip|index"],
                ["2013.4.18","http://help.163.com/13/0419/14/8SR3FI4V00753VB8.html?form=help","一键迁移 我的雅虎邮箱","free"],
                ["2013.4.24","http://activity.vip.163.com/activity/testdrive/index.m?form=help","VIP免费试驾 领精美车模","vip|index"],
		["2013.4.18","http://vip.163.com/moveyahoo/?form=help","一键迁移 我的雅虎邮箱","vip"],
                ["2013.4.15","http://activity.vip.163.com/activity/traffic3/index.m?form=help","VIP携交行为您的企业把脉","free|vip|index"],
                ["2013.4.11","http://activity.vip.163.com/activity/common_autoshow/index.htm","2013上海国际车展免费领票","vip|index"],
                ["2013.3.27","http://activity.vip.163.com/activity/common_lead/index.htm","EMBA企业领导论坛 ","vip|index"],
                ["2013.3.8","http://activity.vip.163.com/activity/artsfestival/index.m","带您叩开艺术投资之门","vip|index"],
                ["2013.3.1","http://help.163.com/special/sp/vipmail_guide.html","VIP邮箱管家5.0版功能指引","vip"],
                ["2013.1.15","http://activity.vip.163.com/activity/newyear2013/index.m","免费抢VIP千元红包","vip|index"],                
                ["2012.12.18","http://reg.vip.163.com/register.m","订购VIP邮箱 免费发传真","free|vip|index"], 
                ["2012.12.4","http://activity.vip.163.com/activity/common_economy2/index.htm","网易2013经济学家年会免费领票","vip|index"],
		["2012.11.28","http://activity.vip.163.com/activity/filial/index.m?help","预留时间陪父母 赢回家机票","vip|index"],  
                ["2012.11.26","http://activity.vip.163.com/activity/traffic2/index.m?help","VIP携交行为您解决现金流压力","vip|index"], 
                ["2012.11.23","http://activity.vip.163.com/activity/common_scarves/index.htm","抢￥688形象课程 女士优先","vip|index"], 
                ["2012.11.20","http://activity.vip.163.com/activity/common_spray/index.htm","琼瑶剧粉丝大招募一起去探班","vip|index"],  
		["2012.11.20","http://fax.163.com","免传真机能上网就能收发传真","free|vip|index"],
                ["2012.11.14","http://activity.vip.163.com/activity/common_car/index.htm","2012广州国际车展 VIP免费领票","vip|index"],
		["2012.11.9","http://club.mail.163.com/jifen/getnotice.do?id=2004","网易免费邮积分折半公告","free|index"],
                ["2012.11.6","http://hd2.mail.163.com/mobilevup/index.do","免费邮箱1积分换3G大附件","free|index"],
                ["2012.10.24","http://activity.vip.163.com/activity/common_mine/index.htm","品鉴奢华家居，领5000元好礼","vip|index"],
                ["2012.10.22","http://activity.vip.163.com/activity/common_wine/index.htm","网易VIP威士忌品鉴沙龙","vip|index"],
                ["2012.10.18","http://activity.vip.163.com/activity/common_school/index.htm?help","挑战全美前50大学策略大公开","vip|index"],
                ["2012.9.6","http://activity.vip.163.com/activity/common_tv8/index.htm","网易VIP邀您相约达沃斯之夜","vip|index"],
                ["2012.8.28","http://activity.vip.163.com/activity/common_tv7/index.htm","免费参加婚纱礼服show","vip|index"],
                ["2012.8.15","http://help.163.com/special/sp/index5.0.html?news","网易邮箱5.0版 功能指引","free|index"], 		
		["2012.8.13","http://activity.vip.163.com/activity/common_tv6/index.htm?help","这个夏天 请您看场电影","vip|index"],
                ["2012.7.30","http://activity.vip.163.com/activity/macworld/index.m?help","2012苹果产业链大会免费领票","vip|index"],
                ["2012.7.26","http://hd2.mail.163.com/mspreview/index.do","“高清版附件预览”诚邀试用","free|index"],
                ["2012.7.24","http://hd3.mail.163.com/yi/main.do","网易邮箱寻找第五亿位家人","free|index"],
                ["2012.6.26","http://activity.vip.163.com/activity//common_tv5/conv.htm","上海陆家嘴金融论坛免费预约","vip|index"],
                ["2012.6.20","http://activity.vip.163.com/activity/traffic/index.m?help","VIP携交行剖析企业发展阻力","vip|index"],
                ["2012.6.5","http://help.163.com/special/sp/huanbao_yxgn.html","微环保分享赢邮箱","vip|free|index"],                
		["2012.6.1","http://activity.vip.163.com/activity/ostrain/index.m","新加坡国际经管课程报名中","vip|free|index"],
                ["2012.5.26","http://mimg.vip.163.com/hd/viptq/v201205.24/index.htm","对话商界领袖，共谈经济改革","vip|index"],
                ["2012.5.21","http://hd3.mail.163.com/lucky10/index.jsp","手机号码邮箱10来运转","free|index"], 
                ["2012.5.9","http://activity.vip.163.com/activity/electrofax/index.m","开启电子传真 赢惊喜大礼","vip|free|index"],
                ["2012.5.9","http://go.163.com/2012/0409/acer/index.php","为商务支招 赢缤纷好礼 ","vip|free|index"],
		["2012.5.7","http://188vip.vip.blog.163.com/blog/static/86908120201231331456495/","新用户专享，电话订购享特惠  ","vip|index"],
                ["2012.4.26","http://activity.vip.163.com/activity/netsecurity/index.m","变身网络安全高手赢ipad2","vip|free|index"],
		["2012.4.13","http://activity.vip.163.com/activity/carshow/index.m","免费游北京车展 限时抢票中","vip|free|index"],
                ["2012.4.10","http://go.163.com/2012/0409/acer/index.php","轻松解决困境，赢取神秘礼物","vip|free|index"],  
                ["2012.3.28","http://activity.vip.163.com/activity/common_tv4/conv.htm","与VIP邮箱聚焦美前财长鲍尔森","vip|index"],
                ["2012.3.26","http://mail.blog.163.com/blog/static/82209424201222652620968/","免费邮积分规则改版公告","free"], 
                ["2012.3.21","http://mail.blog.163.com/blog/static/822094242012221114331890/","极速4.0再更新，精彩发现","free|index"],
                ["2012.3.1","http://help.163.com/special/sp/wlps_index.html","四大网络骗术大揭秘","vip|free|index"],
                ["2012.2.21","http://activity.vip.163.com/activity/yingxiao/index.m","替老王支招，赢好运红包","vip|free|index"], 
                ["2012.2.8","http://activity.vip.163.com/activity/common_tv3/conv.htm?help","赴电视台,龙年与龙永图论道","vip|index"], 
                ["2012.2.8","http://mail.blog.163.com/blog/static/8220942420121895841546/","极速4.0更新：龙年更精彩","free|index"],
                ["2012.2.7","http://188vip.vip.blog.163.com/blog/static/86908120201217112144728/","网易VIP邮箱电子传真全新升级","vip|index"], 
                ["2012.1.10","http://mail.blog.163.com/blog/static/822094242012010920420/","老用户奖励积分”规则改版","free"], 
	/*	["2011.12.21","http://activity.vip.163.com/activity/businessopt/index.mx?topic=recruit&help","网易VIP邮箱创业者招募","vip|index"],
                ["2011.12.13","http://activity.vip.163.com/activity/mailkeeperwish/index.m?help","邮管家亮相荧屏 齐贺VIP十年","vip|index"],  
                ["2011.12.13","http://activity.vip.163.com/activity/mailkeeperwish/index.m?help","邮管家亮相荧屏齐贺VIP十年","free"], 
                ["2011.12.5","http://activity.vip.163.com/activity/common_naec/naec.htm","十周年 年末顶尖金融盛会","vip|index"], 
                ["2011.11.21","http://mail.blog.163.com/blog/static/822094242011101863213486/","网易免费邮积分折半公告","free|index"],
                ["2011.11.30","http://mail.blog.163.com/blog/static/822094242011103093233199/","网易邮箱极速4.0新功能上线","free|index"],
                ["2011.11.22","http://activity.vip.163.com/activity/common_giftbook/giftbook.htm","十周年好礼 百份好书相赠","vip|index"],     
                ["2011.11.15","http://activity.vip.163.com/activity/common_carexhi/carexhibition.htm","广州车展 VIP客户免费领票","vip|index"],     
                ["2011.11.9","http://mail.blog.163.com/blog/static/8220942420111091255246/","网易邮箱极速4.0功能更新","free|index"],                
                ["2011.11.8","http://mail.blog.163.com/blog/static/822094242011108105431292/","用户俱乐部“旅游月”开启","free|index"],
                ["2011.11.8","http://shouji.163.com","手机号码邮箱新版官网上线","free|index"],
                ["2011.10.27","http://hd3.mail.163.com/11hao/main.do","海角11号-今年不过光棍节！","free|index"],
                ["2011.10.24","http://activity.vip.163.com/activity/common_senan/senan.htm","上海思南公馆的奢华鉴赏","vip|index"],
                ["2011.10.20","http://activity.vip.163.com/activity/common_economy/economy.htm","参观网易杭州新楼得好礼","vip|index"],
                ["2011.10.20","http://help.163.com/11/1017/10/7GIE9R4M00753VBA.html","邮箱本地存储伴您邮箱加速","f_yeah"],
                ["2011.10.17","http://activity.vip.163.com/activity/fashion/fashion.htm","时装周 洞悉时尚前沿的邀约","vip|free|index"],
                ["2011.10.24","http://help.163.com/special/00753VBA/yeah_adv_guide.html?id=4835","邮箱上线IE9浏览器Pin功能","f_yeah|index"],
                ["2011.10.24","http://188vip.vip.blog.163.com/blog/static/86908120201186342198/","手机与邮箱通讯录同步功能上线","vip|index"],
                ["2011.10.24","http://mail.blog.163.com/blog/static/822094242011919105038600/","极速4.0更新：新增多项精彩功能","free|index"],
                ["2011.10.14","http://mail.163.com/html/110930_apple/index.htm","苹果和你一样 选择网易邮箱","f_163|f_126|index"],
                ["2011.10.14","http://help.163.com/11/0117/11/6QJJTM8V00753VBA.html","手机智能版 随时随地发邮件","f_yeah"],    
                ["2011.10.14","http://club.mail.163.com/jifen/privilege/mission.do","真钻回馈 重金悬赏","free|index"],
                ["2011.10.9","http://mimg.vip.163.com/hd/20110928VIPdy/index.htm?help","参与调研赢两万份《财富》","vip|free|index"],
                ["2011.9.21","http://mail.blog.163.com/blog/static/82209424201182124627506/","邮箱极速4更新 更得心应手","free|index"],
                ["2011.9.15","http://help.163.com/11/0831/17/7CQ78K1S00753VB8.html","邮件新增日程提醒功能","f_163|index"],
                ["2011.9.15","http://help.163.com/11/0913/15/7DRG6KGO00753VB9.html","邮件新增日程提醒功能","f_126"],
                ["2011.9.15","http://help.163.com/11/0913/15/7DRG7UI900753VBA.html","邮件新增日程提醒功能","f_yeah"],
                ["2011.9.14","http://help.163.com/11/0922/11/7EI7TJ7S00753VB8.html","网易邮箱极速4升级抢先看！","f_163|index"],
                ["2011.9.14","http://help.163.com/11/0922/11/7EI7UBDN00753VB9.html","网易邮箱极速4升级抢先看！","f_126"],
                ["2011.9.14","http://help.163.com/11/0901/11/7CS4E6UJ00753VBA.html","网易邮箱极速4升级抢先看！","f_yeah"],
                ["2011.9.6","http://help.163.com/11/0822/11/7C2DLUH300753VB8.html","简历中心打印/下载功能上线！","f_163|index"],
                ["2011.9.6","http://help.163.com/11/0822/11/7C2EEIN700753VB9.html","简历中心打印/下载功能上线！","f_126"],
                ["2011.9.6","http://help.163.com/11/0822/13/7C2J5F7A00753VBA.html","简历中心打印/下载功能上线！","f_yeah"],
                ["2011.9.22","http://activity.vip.163.com/activity/common_forum3/business.htm","经商之道 VIP客户论坛讨论会","vip|index"],
                ["2011.9.8","http://activity.vip.163.com/activity/common_forum/forum.htm","最权威交互设计论坛邀您参加","vip|index"],
                ["2011.8.30","http://club.mail.163.com/jifen/lottery/list.do","积分苹果月－每日抽奖送苹果","free|index"],
                ["2011.9.7","http://activity.vip.163.com/activity/common_forum2/davos.htm","聚焦风险经济，共赴达沃斯之夜","vip|index"],
                ["2011.9.7","http://activity.vip.163.com/activity/common_tv2/conv.htm","对话不一样的驻华大使骆家辉","vip|index"],
                ["2011.8.30","http://hd.mail.163.com/a/mid/draw/main.do","中秋拼祝福 平安带回家","free|index"],
                ["2011.8.24","http://activity.vip.163.com/activity/common_model/model.htm","见证超模诞生，已为您留座","vip|index"],
                ["2011.8.22","http://activity.vip.163.com/activity/common_tv/tvshow.htm","VIP们去央视看《对话》节目","vip|index"],
                ["2011.8.18","http://activity.vip.163.com/activity/common_act/economy.htm","亲听国务院参事论金融战略","vip|index"],
                ["2011.8.1","http://hd.mail.163.com/summergifts/index.jsp","酷夏大寻宝 清凉爽一夏","free|index"],
                ["2011.7.25","http://hd.mail.163.com/qx/index.do","非常七夕，非常PK活动","free|index"],
                ["2011.7.21","http://tech.163.com/11/0726/17/79THBSMN00094JEO.html","网易邮箱全面上线极速4.0","free|vip|index"],
                ["2011.7.19","http://activity.vip.163.com/activity/businessopt/index.mx?topic=economy","VIP们，到北大去见许小年！","vip|index"],
                ["2011.6.28","http://jf.vip.163.com/","VIP积分专区隆重上线！","v_163|index"],
                ["2011.6.28","http://jf.vip.126.com/","VIP积分专区隆重上线！","v_126"],
                ["2011.6.28","http://jf.mail.188.com/","VIP积分专区隆重上线！","v_188"],
                ["2011.6.24","http://188vip.vip.blog.163.com/blog/static/8690812020115242452473/","VIP邮箱文件中心全新上线","vip|index"],
                ["2011.6.20","http://hd.mail.163.com/exchange/index.do","邮箱积分换千万游戏点卡","free|index"],
                ["2011.6.19","http://activity.vip.163.com/activity/businessopt/index.mx?topic=fatherday","网易VIP邮箱父亲节献礼","vip|index"],
                ["2011.6.18","http://hr.163.com/kefuzhaopin/","网易客服中心现场招聘会","vip|index"],
                ["2011.5.28","http://activity.vip.163.com/activity/art/index.mx?theme=Citroen","免费观舞剧 丰富礼包献上","vip|index"],
                ["2011.5.27","http://help.163.com/special/00753VBA/yeah_adv_guide.html?id=4424","yeah邮箱上线随身邮","f_yeah"],
                ["2011.5.27","http://help.163.com/special/00753VBA/yeah_adv_guide.html?id=4723?id=4667","yeah邮箱上线日程管理","f_yeah"],
                ["2011.5.24","http://mail.blog.163.com/blog/static/82209424201142453538489/","上手机邮箱 随时随地发邮件","free|index"],
                ["2011.5.23","http://help.163.com/11/0506/11/73C9U8TD00753VB8.html","简历中心 轻松拥有英文简历","f_163|index"],
                ["2011.5.23","http://help.163.com/11/0506/11/73C9U5F300753VB9.html","简历中心 轻松拥有英文简历","f_126"],
                ["2011.5.23","http://help.163.com/11/0311/14/6USF8OD400753VBA.html","简历中心 轻松拥有英文简历","f_yeah"],
                ["2011.5.11","http://help.163.com/special/007525G0/163mail_guide.html?id=4708","一键切换！多帐户关联上线","f_163|index"],
                ["2011.5.11","http://help.163.com/special/00753VB9/126mail_adv_guide.html?id=4702","一键切换！多帐户关联上线","f_126"],
                ["2011.5.11","http://help.163.com/special/00753VBA/yeah_adv_guide.html?id=4714","一键切换！多帐户关联上线","f_yeah"],
                ["2011.5.8","http://activity.vip.163.com/activity/businessopt/index.mx?topic=motherday","分享色彩密码 约会最美母亲","vip|index"],
                ["2011.5.4","http://activity.vip.163.com/activity/mailup/index.m","VIP老用户升级，送惊喜大礼","vip|index"],
                ["2011.4.29","http://help.163.com/11/0311/14/6USF8QRT00753VB8.html","简历中心上线“职位搜索”功能","f_163|index"],
                ["2011.4.29","http://help.163.com/11/0311/14/6USF7OQF00753VB9.html","简历中心上线“职位搜索”功能","f_126"],
                ["2011.4.29","http://help.163.com/11/0311/14/6USF8OD400753VBA.html","简历中心上线“职位搜索”功能","f_yeah"],
                ["2011.4.25","http://help.163.com/special/007525G0/163mail_guide.html?id=4667","163邮上线日程管理","f_163|index"],
                ["2011.4.25","http://help.163.com/special/00753VB9/126mail_adv_guide.html?id=4636","126上线日程管理","f_126"],
                ["2011.4.19","http://reg.vip.163.com/register.m","电话注册VIP 尊享双倍积分","vip|index"],
                ["2011.4.12","http://activity.vip.163.com/activity/carExhibition/index.mx","上海国际车展火热报名","vip|index"],
                ["2011.4.11","http://help.163.com/10/0312/14/61J4GK1E00753VB8.html","随身邮升级 资费给力更优惠","f_163|index"],
                ["2011.4.11","http://help.163.com/09/1221/15/5R2L872100753VB9.html","随身邮升级 资费给力更优惠","f_126"],
                ["2011.4.8","http://activity.vip.163.com/activity/businessopt/index.mx?topic=financing","VIP特权《探寻融资新方法》","vip|index"],
                ["2011.4.2","http://help.163.com/11/0127/11/6RDC4BON00753VB8.html","网盘文件开放共享功能","f_163|index"],
                ["2011.4.2","http://help.163.com/11/0127/11/6RDCDD4U00753VB9.html","网盘文件开放共享功能","f_126"],
                ["2011.4.2","http://help.163.com/11/0126/17/6RBEV7DE00753VBA.html","网盘文件开放共享功能","f_yeah"],
                ["2011.3.20","http://tech.163.com/special/mail13swf/","Email百情书 献礼13周岁生日","free|vip|index"],
                ["2011.3.16","http://vip.163.com/note/note20110316.html","VIP邮箱日、滇灾区助通讯","vip|index"],
                ["2011.3.14","http://activity.vip.163.com/activity/art/index.mx","VIP艺术赏析讲座邀您品鉴","vip|index"],
                ["2011.3.14","http://activity.vip.163.com/activity/businessopt/index.mx?topic=ChinaVsIndia","VIP特权《中印投资分析》","vip|index"],
                ["2011.3.12","http://188vip.vip.blog.163.com/blog/static/869081202011211647649/","绿色三月 邀您共享低碳生活","vip|index"],
                ["2011.3.11","http://config.mail.163.com/prompage/filecenter/index.do","文件中心 批量管理邮箱文件","free|index"],
                ["2011.3.7","http://help.163.com/special/sp/vipmail_yjlb.html","VIP邮箱 新添邮件列表服务","v_163|index"],
                ["2011.3.7","http://help.163.com/special/sp/vip126faq_yjlb.html","VIP邮箱 新添邮件列表服务","v_126"],
                ["2011.3.7","http://help.163.com/special/sp/vip188faq_yjlb.html","VIP邮箱 新添邮件列表服务","v_188"],
                ["2011.3.4","http://activity.vip.163.com/activity/womenday/index.m","3.8 高端职业女性内心直白","vip|index"],
                ["2011.2.28","http://188vip.vip.blog.163.com/blog/static/8690812020111281548140/","VIP邮新增名校视频公开课","vip|index"],
                ["2011.2.25","http://188vip.vip.blog.163.com/blog/static/8690812020111252731349/","众明星齐为VIP邮箱加油","vip|index"],
                ["2011.2.24","http://help.163.com/special/sp/vipmail_sjzn.html","VIP邮箱上线手机智能版","vip|index"],
                ["2011.2.15","http://yuehui.163.com/mailcredit.do","积分做红娘 领个爱人回家","free|index"],
                ["2011.2.14","http://yxp.163.com/action/ep.html","春节照片冲印免费送10张","index"],
                ["2011.2.12","http://fm.163.com/affiche-5.html","2011智能版闪电邮全新推出！","free|index"],
                ["2011.2.12","http://activity.vip.163.com/activity/valentineday/index.m","情人节VIP邮箱为您送花传情","vip|index"],
                ["2011.1.28","http://mail.blog.163.com/blog/static/82209424201102895628299/","网易邮箱贺岁派红包！","free|index"],
                ["2011.1.21","http://mail.blog.163.com/blog/static/8220942420110216039285/","网易邮箱获“最具人气奖”","free|vip|index"],
                ["2011.1.18","http://help.163.com/special/007525G0/163mail_guide.html?id=4290","网易首个推出手机智能邮箱","free|index"],
                ["2011.1.12","http://tech.163.com/special/neteasemail13years/","网易邮箱13周年 感谢有您","free|vip|index"],
                ["2011.1.12","http://activity.vip.126.com/activity/onekey/index.m","升级VIP，寻神秘大礼包","v_126|index"],
                ["2011.01.07","http://activity.vip.163.com/activity/newyearpay/logon.m","新春限时特惠 续费抢iPad","vip|index"],
                ["2011.01.06","http://help.163.com/special/007525G0/163mail_guide.html?id=4252","邮件列表 群发邮件新方式","f_163|index"],
                ["2011.01.06","http://help.163.com/special/00753VB9/126mail_adv_guide.html?id=4270","邮件列表 群发邮件新方式","f_126"],
                ["2011.01.06","http://help.163.com/special/00753VBA/yeah_adv_guide.html?id=4280","邮件列表 群发邮件新方式","f_yeah"],
                ["2011.01.05","http://weixing.163.com/","网易邮箱 卫星计划","free|index"],
                ["2011.01.05","http://blog.163.com/services/goodnight2010.html","博客“领取我的2010纪念册”","index"],*/
                ["2013.10.17","http://help.163.com/13/1017/15/9BD7UUUE00754K4E.html","网易电子传真公众号 全新上线","fax"],
                ["2013.09.10","http://help.163.com/13/0910/14/98DUGCFM00754K4B.html","传真新增备注功能","fax"],
                ["2013.09.10","http://help.163.com/13/0910/14/98DUFNS000754K4A.html","传真新增上传发送网盘文件功能","fax"],
                ["2013.09.10","http://help.163.com/13/0910/13/98DP4PVR00754K49.html","新增短信通知好友传真号码功能","fax"],
                ["2013.07.25","http://help.163.com/13/0726/18/94NS71ST00754K4B.html","传真新增联系人搜索功能","fax"],
                ["2013.07.25","http://help.163.com/13/0726/18/94NR8VN900754K4B.html","传真新增批量保存至网盘功能","fax"],
                ["2013.07.24","http://help.163.com/13/0726/17/94NNPB2000754K4B.html","新增标记重要传真功能","fax"],
                ["2013.07.10","http://help.163.com/13/0726/17/94NQOB6F00754K4B.html","传真新增快捷添加联系人功能","fax"],
                ["2013.07.04","http://help.163.com/13/0726/19/94O05G8A00754K4B.html","新传真到达提醒新增短信下载功能","fax"],
                ["2013.06.27","http://help.163.com/12/0911/17/8B4TK5SK00754K4E.html","电子传真新增分机号重置功能","fax"],
                ["2013.05.16","http://help.163.com/13/0701/19/92NLNQJP00754K4C.html","电子传真新增支付记录查询","fax"],
                ["2013.05.13","http://help.163.com/13/0628/19/92FUOK7F00754K49.html","电子传真新增加急传真","fax"],
                ["2013.05.09","http://help.163.com/13/0628/19/92FT84AU00754K49.html","新增传真文件置顶功能","fax"],
                ["2013.05.08","http://help.163.com/13/0702/11/92PAER1N00754K4D.html","电子传真新增400-6781-163电话选号","fax"],
                ["2013.05.07","http://help.163.com/13/0701/19/92NJARN500754K4B.html","新增新传真到达即时提醒功能","fax"],
                ["2013.04.24","http://help.163.com/13/0628/17/92FM00PU00754K4A.html","传真附件支持拖动上传","fax"],
                ["2013.04.16","http://help.163.com/13/0205/14/8MV4SB0G00754K49.html","新增接收传真自定义语音功能","fax"],
                ["2013.03.27","http://help.163.com/13/0327/11/8QVI8LC400754K4B.html","新增传真二维码扫描到手机功能","fax"],
                ["2013.03.14","http://help.163.com/13/0318/15/8Q8Q73US00754K4A.html","新增传真文件横竖版切换功能","fax"],
                ["2013.03.07","http://help.163.com/13/0308/13/8PETITAA00754K4A.html","新增传真图片切换风格效果功能","fax"],
                ["2013.03.06","http://help.163.com/13/0308/13/8PETDF8L00754K4A.html","新增传真文件转发到邮箱功能","fax"],
                ["2013.02.28","http://help.163.com/13/0301/17/8OT7VMUB00754K4A.html","电子传真发送成功通知收件人","fax"],
                ["2013.02.25","http://help.163.com/13/0205/16/8MVCHCME00754K49.html","新增电子传真模板服务","fax"],
                ["2013.02.20","http://help.163.com/13/0205/16/8MVAQ3K200754K49.html","电子传真新增智能语音播报功能","fax"],
                ["2013.01.22","http://help.163.com/13/0123/10/8LT6M6HA00754K4B.html","电子传真新增翻译功能","fax"],
                ["2013.01.16","http://help.163.com/13/0116/10/8LB7LT2000754K4E.html","新增传真号 400 8892 163","fax"],
                ["2013.01.15","http://help.163.com/13/0108/13/8KN01VC300754K49.html","电子传真新增电子签章功能","fax"],
                ["2012.11.28","http://help.163.com/12/1030/11/8F2FM3QS00754K4E.html","新增手机上轻松收发传真","fax"],
                ["2012.11.12","http://help.163.com/12/1113/11/8G6H0HH100754K4B.html","新增多页传真内容打包下载功能","fax"],
                ["2012.11.02","http://help.163.com/12/1030/11/8F2FM3QS00754K4E.html","新增手机查看传真功能","fax"],
                ["2012.10.10","http://help.163.com/12/1024/11/8EJ165JP00754K4A.html","发传真页面新增通讯录功能","fax"],
                ["2012.10.10","http://help.163.com/12/0911/17/8B4VSD8B00754K4A.html","传真附件支持word、excel等格式","fax"],
                ["2012.09.13","http://help.163.com/12/1024/14/8EJA5DUJ00754K4A.html","新增ivr分机号不存在提示","fax"],
                ["2012.09.06","http://help.163.com/12/0911/17/8B4TR59T00754K4E.html","传真支持网易所有邮箱登录","fax"]
           ];
                    
//公告显示
function showNews_index(nCt,sType){
    var type = [];    
    var c = nCt || 100;      //输出条数
    var l = content.length;
    var n = 0;
    var p = [];     //记录符合条件的序号
    if(sType == "f_163" || sType == "f_126" || sType == "f_yeah"){
        type[1] = "free";
    }else if(sType == "v_163" || sType == "v_126" || sType == "v_188"){
        type[1] = "vip";        
    }
    type[0] = sType;    
    for(var i=0;i<l;i++){
        if(n >= c){
            break;
        }else{    
            if(content[i][3].indexOf(type[0])!=-1 || content[i][3].indexOf(type[1])!=-1){
                n=p.push(i);                
            }            
        }
    }
    return p;    
}
/*
    @param sId 消息显示外层id
    @param sType 邮箱类型值
    @param nCt  显示条数，不传值则默认输出全部[最大不超过100条]
    @param sParam 统计参数
*/
/*所有帮助输出*/
function allNewsShow(sId,sType,sParam,nCt){
    var l =showNews_index(nCt,sType);
    var s = "";    
    var cp = "";
    for(var i=0;i<l.length;i++){
        if(content[l[i]][1].indexOf("?") != -1){
            cp = "&" + sParam;
        }else{
            cp = "?" + sParam;
        }
        s += "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+content[l[i]][0]+"&nbsp;&nbsp;&nbsp;<a href='"+content[l[i]][1]+cp+"' target='_blank'>"+content[l[i]][2]+"</a></p>";
    } 
    document.getElementById(sId).innerHTML = s;
}
//index 首页输出
function indexNewsShow(sId,sType,sParam,nCt){
    var l = showNews_index(nCt,sType);
    var s = "";
    var cp = "";
    for(var i=0;i<l.length;i++){
        if(content[l[i]][1].indexOf("?") != -1){
            cp = "&" + sParam;
        }else{
            cp = "?" + sParam;
        }
        s += '<li><b class="id_pic iBox circleIco"></b><a href="'+content[l[i]][1]+cp+'" target="_blank">'+content[l[i]][2]+'</a></li>';
    } 
    s += '<li><b class="id_pic iBox circleIco"></b><a href="http://help.163.com/special/whb_index/?helpnotice"'+cp+'" target="_blank">高效人工服务</a></p>';
    document.getElementById(sId).innerHTML = s;
    /*help首页公告颜色控制*/
   /*document.getElementById(sId).getElementsByTagName("a")[2].style.color = "#C00";*/
   document.getElementById(sId).getElementsByTagName("a")[1].style.color = "#C00";
        document.getElementById(sId).getElementsByTagName("a")[0].style.color = "#C00";
         
    
}
//免费邮箱首页输出
function freeMailNewsShow(sId,sType,sParam,nCt){
    var l = showNews_index(nCt,sType);
    var s = "";
    var cp = "";
    for(var i=0;i<l.length;i++){
        if(content[l[i]][1].indexOf("?") != -1){
            cp = "&" + sParam;
        }else{
            cp = "?" + sParam;
        }
        s += '<p><a href="'+content[l[i]][1]+cp+'" target="_blank">'+content[l[i]][2]+'</a></p>';
    }
    s += '<p><a href="http://help.163.com/12/0614/16/83VL20NJ00753VB8.html?news" target="_blank">网易邮箱提醒您谨防邮件诈骗</a></p>'; 
    document.getElementById(sId).innerHTML = s;
    /*免费三邮箱首页公告颜色控制*/
    /*document.getElementById(sId).getElementsByTagName("a")[2].className = "R-b2";*/
    document.getElementById(sId).getElementsByTagName("a")[1].className = "R-b2";
    document.getElementById(sId).getElementsByTagName("a")[0].className = "R-b2";
         
}
//收费邮箱首页输出
function vipMailShow(sId,sType,sParam,nCt){
    var l = showNews_index(nCt,sType);
    var s = "";
    var cp = "";
    for(var i=0;i<l.length;i++){
        if(content[l[i]][1].indexOf("?") != -1){
            cp = "&" + sParam;
        }else{
            cp = "?" + sParam;
        }
        s += '<li><a href="'+content[l[i]][1]+cp+'" target="_blank"><b class="help_icon"></b>'+content[l[i]][2]+'</a></li>';
    }
    document.getElementById(sId).innerHTML = s; 
    if(sType == "index"){
        /*URS首页公告颜色控制*/
        /*document.getElementById(sId).getElementsByTagName("a")[1].style.color = "#C00";*/
        document.getElementById(sId).getElementsByTagName("a")[0].style.color = "#C00";
    }else{
        /*VIP三邮箱首页公告颜色控制*/
               /*document.getElementById(sId).getElementsByTagName("a")[2].style.color = "#C00";*/
       /*document.getElementById(sId).getElementsByTagName("a")[1].style.color = "#C00";*/
        document.getElementById(sId).getElementsByTagName("a")[0].style.color = "#C00";
    }
}
//邮箱更新日志页
function logRecordShow(sId,sType,sParam,nCt){
    var l = showNews_index(nCt,sType);
    var s = "";
    var cp = "";
    for(var i=0;i<l.length;i++){
        if(content[l[i]][1].indexOf("?") != -1){
            cp = "&" + sParam;
        }else{
            cp = "?" + sParam;
        }
        s += '<li><a href="'+content[l[i]][1]+cp+'" target="_blank"><b class="help_icon"></b><span>'+content[l[i]][0]+'</span>'+content[l[i]][2]+'</a></li>';
    }
    document.getElementById(sId).innerHTML = s;     
}