function setLeftTreeOn(){
  try{
    var dl=document.getElementById('guidePathBox').getElementsByTagName('strong')[0].id;
    whenfind(dl);
  }catch(e){
  }
}
function whenfind(dl){
  var s=dl.split("_");
  var a=s[0],b=s[0]+'_0',c=s[0]+'_'+s[1],d=s[2]-1;
  try{
    document.getElementById(a).className="order1_nav1";
    document.getElementById(b).style.display="block";
    document.getElementById(c).className="order2_nav1";
    document.getElementById("articleType").getElementsByTagName('li')[d].className="nvaOn";
  }catch(e){
  
  }
}
function setNavOn(num){
  var a=num*2-1;
  var b=a-1;
  var c=a+1;
  var li_array=document.getElementById("navTxt").getElementsByTagName("li");
  li_array[a].className="navLi1 default";
  li_array[b].style.display="none";
  li_array[c].style.display="none";
}
function initArticleList(){
        moreArticle(10);
	article(10);
	var obj=document.getElementById("allArticle");
	obj.href="javascript:showAllArticleList();";
	obj.className="alink";
	obj.innerHTML="<b></b>更　多";
}
function showAllArticleList(){	
	article(0);
	var obj=document.getElementById("allArticle");
	obj.href="javascript:initArticleList();";
	obj.className="alink1";
	obj.innerHTML="<b></b>收　起";
}
function article(x){
	var liList=document.getElementById("articleList").getElementsByTagName("li");
	for(var i=0;i<liList.length;i++){
		if(x!=0){
			if(i<x){
				liList[i].style.display="";	
			}else{
				liList[i].style.display="none";	
			}
		}else{
			liList[i].style.display="";
		}
	}
}
function moreArticle(x){
	var result=false;
	var liList=document.getElementById("articleList").getElementsByTagName("li");
	if(liList.length > x){
		document.getElementById("all_nav").style.display="";
		result=true;
	}else{
		document.getElementById("all_nav").style.display="none";
	}
	return result;
}
function hotKey(key){
  document.getElementById('q_keywords').value=key.innerHTML;
}
////////////////////////// utils ///////////////////////////////////////
String.prototype.replaceSpecialCharacters = function() {
    var _pattern = new RegExp("[<>\"\'%;()&+]", "g");
    return this.replace(_pattern, '');
};