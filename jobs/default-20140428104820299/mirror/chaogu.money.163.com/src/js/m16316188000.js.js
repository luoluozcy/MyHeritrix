/*
var m163 = {
	settings:{		
		focus_url:"http://imoney.money.163.com/hs/api/followToSimulation",
	},
	add_focus:function(symbol){
		$.getJSON(this.settings.focus_url + "?symbol=" + symbol + "&callback=?", function(json){
			if(json.success==1)
			{
				alert("添加成功!");
			}
			else if(json.success==0)
			{
				alert("添加失败!" + json.msg.default );
			}
		});
	}
}
*/
(function(){
	m163.track = {};
	m163.track.add = function(o, callback)
	{
		if( !m163.me.id )
		{
			m163.dialog.load("/account/login/?from=" + from_url);
			return false;
		}
		var user_id = $(o).attr("rel");
		$.post('/track/add', {
			'formhash' : formhash,
			'user_id'  : user_id
		}, function(data){
			if (data && data.status == 'ok') 
			{
				m163utils.message.success("跟踪成功.");
				if( callback )
				{
					callback(o, data);
				}
			}
			else
			{
				m163utils.message.error("跟踪失败.");
			}
		},'json');
	};
	m163.track.remove = function(o)
	{
		var user_id = $(o).attr("rel");
		$.post('/track/remove', {
			'formhash' : formhash,
			'user_id'  : user_id
		}, function(data){
			if (data && data.status == 'ok') 
			{
				m163utils.message.success("退订成功.");
				window.location.reload();
			}
			else
			{
				m163utils.message.error("退订失败.");
			}
		},'json');
	};
})();