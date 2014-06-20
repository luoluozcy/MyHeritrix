function addJs(src){
	var el = document.createElement("SCRIPT");
	document.getElementsByTagName("HEAD")[0].appendChild(el);
	el.src = src;
}
function setFrameSrc(id){
	var src = 'http://comment5.qq.com'
		+ '/'+i_comment_html+'#site='
		+ comment_para_site + '&id='
		+ id + '&sum='
		+ comment_para_sum + '&style='
		+ comment_para_style + '&height='
		+ comment_para_height + '&is_group='
		+ comment_para_is_group + '&mode='
		+ comment_para_mode + '&submit_pos='
		+ comment_para_submit_pos + '&show='
		+ comment_para_show + '&count_id='
		+ comment_para_count_id + '&final_domain='
		+ comment_para_final_domain + '&ojs08='
		+ comment_para_ojs08 + '&p_iframe_id='
		+ rnd_id
	var el = document.getElementById(rnd_id);
	if(el) el.src = src;
}
function _cbCid(id){
	setFrameSrc(id);
}
function _cbGid(id){
	setFrameSrc(id);
}
(
function comment_create()
{
	if (typeof comment_para_site == 'undefined' || typeof comment_para_id == 'undefined')
	{
		return;
	}
	(
	function Init()
	{
		if (typeof comment_para_show == 'undefined')
		{
			comment_para_show = 0;
		}
		if (comment_para_show != 0)
		{
			comment_para_show = 1;
		}
		
		if (typeof comment_para_sum == 'undefined')
		{
			comment_para_sum = 10;
		}
		if (typeof comment_para_style == 'undefined')
		{
			comment_para_style = '';
		}
		if (typeof comment_para_height == 'undefined')
		{
			comment_para_height = 0;
		}
		if (typeof comment_para_is_group == 'undefined')
		{
			comment_para_is_group = 0;
		}
		if (typeof comment_para_mode == 'undefined')
		{
			comment_para_mode = 'total';
		}
		if (typeof comment_para_submit_pos == 'undefined')
		{
			comment_para_submit_pos = 0;
		}
		if (typeof comment_para_count_id == 'undefined')
		{
			comment_para_count_id = '';
		}
		if (typeof comment_para_final_domain == 'undefined')
		{
			comment_para_final_domain = '';
		}
		if (typeof comment_para_ojs08 == 'undefined')
		{
			comment_para_ojs08 = '0';
		}
	})();
	
	document.domain = 'qq.com';
	var site_p_id_4 = {
		'2006' : 409643,
		'2008' : 209007,
		'512' : 30013,
		'act' : 2469,
		'astro' : 22272,
		'auto' : 125708,
		'baby' : 5065,
		'bb' : 25503,
		'blog' : 979,
		'book' : 46067,
		'bug' : 444,
		'cd' : 44040,
		'child512' : 1432,
		'comic' : 1189800,
		'cq' : 231799,
		'digi' : 156526,
		'doodle' : 0,
		'download' : 38958,
		'edu' : 167563,
		'ent' : 262468,
		'face' : 10345,
		'fashion' : 33403,
		'finance' : 352165,
		'flash' : 1967516,
		'fm' : 1979,
		'gamezone' : 319440,
		'gongyi' : 1991,
		'hb' : 5854,
		'hk' : 41,
		'house' : 6267,
		'icokehuoju1' : 8888,
		'imqq' : 48,
		'joke' : 23090,
		'joy' : 354,
		'kid' : 29490,
		'lady' : 178671,
		'lequipe' : 3750,
		'lhjy' : 477,
		'lhnt' : 78,
		'luxury' : 23858,
		'mag' : 179697,
		'music' : 14571,
		'musictop' : 195,
		'musictop2' : 1349,
		'news' : 937660,
		'olympic' : 12535,
		'radio' : 93,
		'sexymm' : 2364,
		'skin' : 6659,
		'sports' : 488531,
		'stock' : 298274,
		'stock1' : 0,
		'tech' : 222683,
		'theme' : 134,
		'user' : 20009,
		'view' : 26931,
		'webapp' : 1889789,
		'wp' : 1171,
		'xian' : 59587,
		'yc' : 1103614,
		'yearbook' : 3237,
		'zhibo' : 917
	};
	
	var site_g_id_4 = {
		'2006' : 51,
		'2008' : 203,
		'512' : 0,
		'act' : 0,
		'astro' : 51,
		'auto' : 676,
		'baby' : 35,
		'bb' : 701,
		'blog' : 84,
		'book' : 393,
		'bug' : 0,
		'cd' : 407,
		'child512' : 1,
		'comic' : 249,
		'cq' : 2497,
		'digi' : 344,
		'doodle' : 0,
		'download' : 1,
		'edu' : 583,
		'ent' : 695,
		'face' : 0,
		'fashion' : 0,
		'finance' : 868,
		'flash' : 65,
		'fm' : 26,
		'gamezone' : 227,
		'gongyi' : 13,
		'hb' : 139,
		'hk' : 0,
		'house' : 26,
		'icokehuoju1' : 0,
		'imqq' : 0,
		'joke' : 15,
		'joy' : 4,
		'kid' : 143,
		'lady' : 532,
		'lequipe' : 1,
		'lhjy' : 35,
		'lhnt' : 2,
		'luxury' : 140,
		'mag' : 7738,
		'music' : 0,
		'musictop' : 0,
		'musictop2' : 17,
		'news' : 1084,
		'olympic' : 0,
		'radio' : 0,
		'sexymm' : 0,
		'skin' : 0,
		'sports' : 346,
		'stock' : 267,
		'stock1' : 0,
		'tech' : 1063,
		'theme' : 0,
		'user' : 0,
		'view' : 753,
		'webapp' : 0,
		'wp' : 0,
		'xian' : 408,
		'yc' : 0,
		'yearbook' : 0,
		'zhibo' : 0
	};
	var site_pl_id= {
		'0508vfshow':	3671,
		'17th':	0,
		'2006':	409631,
		'2008':	109761,	
		'astro': 19861,
		'auto':	103184,
		'baby':	2378,
		'bb':	16306,
		'blog':	526,
		'book':	38080,
		'bug':	260,
		'cd':	13123,	
		'comic':	808728,
		'cq':	156752,
		'digi':	124015,	
		'download':	31005,	
		'edu':	140337,	
		'ent':	217899,	
		'face':	10045,	
		'fashion':	33403,	
		'finance':	232349,	
		'flash':	1221480,	
		'fm':	1419,	
		'gamezone':	248198,	
		'gongyi':	1216,	
		'gter':	480,	
		'hk':	42,	
		'house':	2,	
		'imqq':	49,	
		'joke':	22224,	
		'joy':	107,	
		'kid':	16454,	
		'lady':	151728,	
		'lequipe':	1733,	
		'luoji':	2,	
		'luxury':	19101,	
		'mag':	179372,	
		'mini':	461,	
		'music':	14571,	
		'musictop':	196,	
		'news':	759931,	
		'olympic':	12535,	
		'radio':	94,	
		'scene':	2625,	
		'sexymm':	2365,	
		'skin':	6403,	
		'sports':	398786,	
		'stock':	113234,	
		'stock1':	0,	
		'tech':	179276,	
		'theme':	110,	
		'user':	20010,	
		'view':	20273,	
		'webapp':	1889790,	
		'wp':	1152,	
		'xian':	43717,	
		'xuanwo':	46,	
		'yc':	1103615,	
		'yearbook':	2986,	
		'yp':	111,	
		'zhibo':	41,	
		'zxbl':	2	
	};
	var site_gp_id= {
		'0508vfshow':	0,
		'17th':	0,
		'2006':	52,
		'2008':	68,	
		'astro': 52,
		'auto':	456,
		'baby':	8,
		'bb':	438,
		'blog':	23,
		'book':	249,
		'bug':	0,
		'cd':	76,	
		'comic':	178,
		'cq':	1417,
		'digi':	249,	
		'download':	0,	
		'edu':	475,	
		'ent':	509,	
		'face':	0,	
		'fashion':	0,	
		'finance':	603,	
		'flash':	62,	
		'fm':	22,	
		'gamezone':	193,	
		'gongyi':	13,	
		'gter':	0,	
		'hk':	0,	
		'house':	0,	
		'imqq':	0,	
		'joke':	15,	
		'joy':	2,	
		'kid':	104,	
		'lady':	290,	
		'lequipe':	2,	
		'luoji':	0,	
		'luxury':	104,	
		'mag':	7595,	
		'mini':	0,	
		'music':	0,	
		'musictop':	0,	
		'news':	815,	
		'olympic':	0,	
		'radio':	0,	
		'scene':	0,	
		'sexymm':	0,	
		'skin':	0,	
		'sports':	301,	
		'stock':	171,	
		'stock1':	0,	
		'tech':	815,	
		'theme':	831,	
		'user':	0,	
		'view':	533,	
		'webapp':	0,	
		'wp':	0,	
		'xian':	230,	
		'xuanwo':	5,	
		'yc':	0,	
		'yearbook':	0,	
		'yp':	0,	
		'zhibo':	0,	
		'zxbl':	0	
	};
	rnd_id = 'COMMENT_IFRAME_ID_';
	if (typeof auto_id == 'undefined')
	{
		auto_id = 0;
	}
	rnd_id += auto_id++;
	
	var i_comment_domain = 'pinglun.qq.com';
	i_comment_html = 'i_comment2.htm';
	if (comment_para_is_group == 1
		|| comment_para_sum != 0||comment_para_site=='edu')
	{
		if(comment_para_is_group == 1&&site_g_id_4[comment_para_site]){
			if(comment_para_id&&comment_para_id>=(site_g_id_4[comment_para_site] || 0))
				i_comment_domain = 'comment4.qq.com';
			else if(comment_para_id&&comment_para_id>=(site_gp_id[comment_para_site] || 0))
				i_comment_domain = 'comment3.qq.com';
			else
				i_comment_domain = 'comment1.qq.com';
		}
		else if(site_p_id_4[comment_para_site]&&comment_para_is_group == 0){
			if(comment_para_id&&comment_para_id>=(site_p_id_4[comment_para_site] || 0))
				i_comment_domain = 'comment4.qq.com';  
			else if(comment_para_id&&comment_para_id>=(site_pl_id[comment_para_site] || 0))
				i_comment_domain = 'comment3.qq.com';
			else
				i_comment_domain = 'comment1.qq.com';
		}
		else
			i_comment_domain = 'comment4.qq.com';
		i_comment_html = 'i_comment.htm';
	}

	document.write('<iframe frameborder="0"'
		+ (comment_para_height == 0 ? '' : ' height="' + comment_para_height + '"')
		+ ' width="100%"'
		+ (comment_para_height == 0 ? ' scrolling="no"' : '')
		+ (comment_para_show == 0 ? ' style="display:none;"': '')
		+ ' id="' + rnd_id + '"></iframe>');
	if(comment_para_id > 3000000){
		setFrameSrc(comment_para_id);
	}else{
		if(comment_para_is_group){
			addJs('http://comment5.qq.com/php/ggid.php?site='+comment_para_site+'&g_id='+comment_para_id);
		}else{
			addJs('http://comment5.qq.com/php/gcid.php?site='+comment_para_site+'&c_id='+comment_para_id);
		}
	}
})()/*  |xGv00|f3657064b8a2513b7f8c6f27a216248c */