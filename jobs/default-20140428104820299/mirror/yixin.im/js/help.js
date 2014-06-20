$(document).ready(function(){
		
	var page = {
		__initPage : function(){
			this.__curMenu = $($('#js-menu .z-cur')[0]);
			this.__curSubMenu = $($('#js-menu .z-hassub .z-subitm')[0]);
			this.__curSection = $($('#js-faq .z-cur')[0]);
			this.__curSubSection = $($('#js-faq .z-hassub .z-subcur')[0]);
			$('#js-menu .itm').each(function(index){
				$(this).attr('data-index',index);
			});
			$('#js-menu .z-hassub .z-subitm').each(function(index){
				$(this).attr('data-subindex',index);
			});
			this.__hasSubItemIndex = $('#js-menu .z-hassub').attr('data-index');
			this.__bindEvent();
		   	this.__initState();
		},
	    /**
		 * 初始化状态
		 * @return {Void}
		 */
		__initState: function() {
			var paramobj = this.__getUrlParam();
			var hash = location.hash;
			var section = parseInt(paramobj.section ? paramobj.section : 0);
			if(section > 5 || section < 0 ){ 
				section = 0;
			}
			var linode = $('#js-menu .itm')[section];
			$(linode).find("a")[0].click();
		},
		/**
	     * 获取URL上带的参数
	     * @return {Object} 参数对象
	     */
		__getUrlParam: function(){
			var url = location.search;
			var param = {};
			if(url.indexOf("?") != -1){
				var str = url.substr(1),
					strs = str.split('&');
				for(var i = 0;i < strs.length;i++){
					var arr = strs[i].split('=');
					param[arr[0]] = unescape(arr[1]);
				}
			}
			return param;
		},
		__bindEvent : function(){
			var crtmenu = this.__curMenu;
			$('#js-menu').bind('click',function(event){
				var node = event.target;
				var pnode = node.parentNode;
				var tag = node.tagName.toLowerCase();
				if(tag == 'a'){
					if($(pnode).hasClass('z-cur')){
						return;
					}
					if($(pnode).hasClass('z-subitm')){
						if($(pnode).hasClass('z-subcur')){
							return;
						}
						if($(page.__curSubMenu).attr('data-subindex') == 0){
							//设置左侧菜单
							$(page.__curMenu).removeClass('z-cur');
							page.__curMenu = pnode.parentNode.parentNode;
							$(page.__curMenu).addClass('z-cur');
							//设置右侧的faq内容
							$(page.__curSection).removeClass('z-cur');
							page.__curSection = $($('#js-faq .js-section')[page.__hasSubItemIndex]);
							$(page.__curSection).addClass('z-cur');
						}
						$(page.__curSubMenu).removeClass('z-subcur');
						page.__curSubMenu = pnode;
						$(page.__curSubMenu).addClass('z-subcur');						

						//设置右侧的faq内容
						var index = $(pnode).attr('data-subindex');
						$(page.__curSubSection).removeClass('z-subcur');
						page.__curSubSection = $($('#js-faq .js-subsection')[index]);
						$(page.__curSubSection).addClass('z-subcur');
					}else{
						if($(page.__curMenu).attr('data-index') == page.__hasSubItemIndex){
							//设置子菜单
							$(page.__curSubMenu).removeClass('z-subcur');
							page.__curSubMenu =  $($('#js-menu .z-hassub .z-subitm')[0]);
							//设置右侧的faq内容
							$(page.__curSubSection).removeClass('z-subcur');
							page.__curSubSection = $($('#js-faq .z-hassub .js-subsection')[0]);
							$(page.__curSubSection).addClass('z-subcur');
						}
						//设置左侧菜单
						$(page.__curMenu).removeClass('z-cur');
						page.__curMenu = pnode;
						$(page.__curMenu).addClass('z-cur');

						if($(page.__curMenu).attr('data-index') == page.__hasSubItemIndex){
							//设置子菜单
							$(page.__curSubMenu).addClass('z-subcur');
							// page.__curSubMenu =  $($('#js-menu .z-hassub .z-subitm')[0]);
						}
						//设置右侧的faq内容
						var index = $(pnode).attr('data-index');
						$(page.__curSection).removeClass('z-cur');
						page.__curSection = $($('#js-faq .js-section')[index]);
						$(page.__curSection).addClass('z-cur');
					}
				}
			});
		}
	};

	page.__initPage();

});

/**huangyaowu**/

(function () {
	$(function () {
		var page = {};
		page.init = function () {
			page.on();
		};
		page.on = function () {
			$('#J-search-input').bind('keydown', function (e) {
				var curKey = e.which;
				if (curKey == 13) {
					page.search();
					return false;
				};
			});
			$('#J-search').bind('click', page.search);
			$('#js-menu').bind('click',function(event){
				$('#js-search-faq').hide();
				$('#js-faq').show();
			})
		};
		page.search = function () {
			var _keyword = $('#J-search-input').val().trim();
			if (_keyword.length <= 0) {return;};
			$.ajax({
				type: 'get',
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				url: 'http://hd.yixin.im/service/search.do?callback=success_jsonpCallback',
				data: {'keyword': _keyword},
				dataType: 'jsonp',
				jsonp: 'json_callback',
				jsonpCallback: 'success_jsonpCallback',
				success: page.searchCallBack,
				error: function(err) {
					//
				}
			});
		};
		page.searchCallBack = function (res) {
			if (res.ret == 0) {
				$('#J-faqList').empty();
				if (res.data.length > 0) {
					$('#J-type-name').html('搜索结果：');
					$('#J-faqItem-Tmpl').tmpl(res.data).appendTo('#J-faqList');
				}
				else {
					$('#J-type-name').html('搜索结果：对不起，找不到您要查找的内容。');
				}

				// show results
				$('#js-search-faq').show();
				$('#js-faq').hide();
			};
		};
		page.init();
	});
})();