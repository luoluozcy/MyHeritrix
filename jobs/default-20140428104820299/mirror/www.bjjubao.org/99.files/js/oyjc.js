// JavaScript Document
////////////////////////////////////////////
//  oyjc@msn.cn
//  2008/11/26
//  for ldw123.com
////////////////////////////////////////////
function check_keyword()
{
	if(document.all.searchText.value == "")
	{
		alert("请先输入关键词");
		document.all.searchText.focus();
		window.event.returnValue = false;
	}
	else
	{
		window.event.returnValue = true;
	}
}
document.getElementsByMyID = function(MyID) 
{ //根据id获得对象集合 
    var tmpobj = []; 
    var elements = document.getElementsByTagName("*") ;//取得所有元素的集合 
    //alert(elements.length); 
    for(var i=0;i <elements.length;i++) 
{ 
        if(elements[i].id==null) continue; 
        if(elements[i].id == MyID) 
{ 
            tmpobj.push(elements[i]); 
        } 
    } 
    return tmpobj; 
     
} 
//替换函数 结束
//FLASH图片翻页 开始
function flashpic(objName,swf,focus_width,focus_height) {
focus_width -=4;
focus_height -=20;
var text_height=18;
if (navigator.userAgent.indexOf("Firefox")>0){
  text_height =0;
  focus_height+=15;
  }
var swf_height=focus_height+text_height ;
var pics="";
var links="";
var texts="";
var picsrcobj=document.getElementsByMyID("picsrc");
var pageLinkobj=document.getElementsByMyID("pageLink");
var picNum=picsrcobj.length;
if (picNum>0){
 for ($i=0;$i<picNum;$i++){
  pics +=picsrcobj[$i].src+"|";
  links+=pageLinkobj[$i].href+"|";
  texts+=picsrcobj[$i].alt+"|";
  }
 pics=pics.substring(0,pics.length-1);
 links=links.substring(0,links.length-1);
 texts=texts.substring(0,texts.length-1);
var gdcode='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ focus_width +'" height="'+ swf_height +'">'; 
gdcode+='<param name="allowScriptAccess" value="sameDomain"><param name="movie" value="'+swf+'"><param name="quality" value="high"><param name="bgcolor" value="#FCFDEB">'; 
gdcode+='<param name="menu" value="false"><param name=wmode value="opaque">'; 
gdcode+='<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'">'; 
gdcode+='<embed src="'+swf+'" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'" menu="false" bgcolor="#F0F0F0" quality="high" width="'+ focus_width +'" height="'+ focus_height +'" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
gdcode+='</object>';
document.getElementById(objName).innerHTML=gdcode;
}
}
//FLASH图片翻页 结束
///////////切换SUB
//  ???_sub_[n]
//  ???_id_[n]
//  ???_class_over & ???_class_out
function sub_oyjc(obj,ID,Len){
  var s = obj.id.indexOf("_");
  var subID=obj.id.substr(0, s)+"_sub_";
  var contentID = obj.id.substr(0, s)+"_id_";
  var classID= obj.id.substr(0, s)+"_class_";

  if (Len>0){
  for (i=1;i<Len+1;i++)
    {
       document.getElementById(subID+i).className = classID+"out"; 
       document.getElementById(contentID+i).style.display = "none";  
  	 }
	 obj.className = classID+"over"; 
     document.getElementById(contentID+ID).style.display = "block"; 
  }
}
///////////切换SUB 结束