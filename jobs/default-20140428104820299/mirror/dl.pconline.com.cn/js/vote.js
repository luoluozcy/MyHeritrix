
/*	
 * 	masterId：	软件id
 * 	type：		类型：推荐、不推荐
 * */
function vote(masterId, type){
	var src ='/vote2.jsp?service=voting&masterId='+masterId+'&type='+type+'&date='+new Date();
	var id = 'scriptId';
	var scriptItem = document.getElementById(id);
	if(scriptItem != null){
		document.body.removeChild(scriptItem)
	}
	scriptItem = document.createElement('script');
	scriptItem.type="text/javascript";
	scriptItem.language="javascript";
	scriptItem.defer=true;
	scriptItem.id=id;
	scriptItem.src=src;
	document.body.insertBefore(scriptItem, document.body.firstChild);
}

