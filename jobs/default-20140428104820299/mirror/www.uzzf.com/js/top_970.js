// JavaScript Document

var url = window.location.href;
//var RegExp 
var re = /(\d+).html/ig; 
var num,softid;
if(num=re.exec(url))
{
	softid=(num[1]);
}else
{
	softid=0;
}



var Temp="<iframe marginwidth=0 marginheight=0 frameborder=0 bordercolor='#000000' scrolling=no src=\"http://show.xq12.com/760.html?uzzfup_"+softid+"\" width=970 height=100></iframe>";
document.write(Temp)
    

 

 