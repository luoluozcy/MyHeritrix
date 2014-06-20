shq={}
	       shq.$=function(o){return typeof(o)=="string"?document.getElementById(o):o};
		   shq.scrollx=[];
		   shq.scrolly=[];
		   shq.scrollh=[];
		   shq.scrollw=[];
		   shq.myscrollx=[];
		   shq.myscrolly=[];
		   shq.scrollspeedx=[];
		   shq.scrollspeedy=[];
		   shq.x=0;
		   shq.y=0;
		   shq.i=-1;
		   shq.ii=-1;
	   function scrolly()
	   {
			for(var yi=0;yi<shq.scrolly.length;yi++)
			{
			shq.myscrolly[yi]=setInterval(function(){
            if(shq.y>=shq.scrolly.length){shq.y=0}		    if(/true/.test(shq.scrolly[shq.y].getAttribute('run'))){shq.scrolly[shq.y].scrollTop=(shq.scrolly[shq.y].scrollTop)%shq.scrollh[shq.y];shq.scrolly[shq.y].scrollTop++;};shq.y++;
		   },shq.scrollspeedy[yi])
            shq.scrolly[yi].onmouseover=function(){this.setAttribute('run',false);}
			shq.scrolly[yi].onmouseout=function(){this.setAttribute('run',true);}
			}
	   }
	   function scrollx()
	   {
		  for(var yi=0;yi<shq.scrollx.length;yi++)
			{
			shq.myscrollx[yi]=setInterval(function(){
            if(shq.x>=shq.scrollx.length){shq.x=0}		    if(/true/.test(shq.scrollx[shq.x].getAttribute('run'))){shq.scrollx[shq.x].scrollLeft=(shq.scrollx[shq.x].scrollLeft)%shq.scrollw[shq.x];shq.scrollx[shq.x].scrollLeft++;};shq.x++;
		   },shq.scrollspeedx[yi])
            shq.scrollx[yi].onmouseover=function(){this.setAttribute('run',false);}
			shq.scrollx[yi].onmouseout=function(){this.setAttribute('run',true);}
			}
	   }
	   function startscroll()
	   {
	    for(var i=0,o=document.body.getElementsByTagName("div"),ii=o.length;i<ii;i++)
		{  
		 var oo=o[i].getAttribute("scroll");
		 
		  if(/\d+,\d+,\d+/.test(oo))
		   { 
		   
		    var ooo=oo.split(",");		
			
			if(ooo[3]=='x'){
			shq.i++;
			 shq.scrollx[shq.i]=o[i];
			 o[i].setAttribute("run",true)
			 shq.scrollw[shq.i]=o[i].offsetWidth;
			 o[i].style.width=ooo[0]+'px';
			o[i].style.height=ooo[1]+'px';
			o[i].style.overflow="hidden";
			o[i].style.whiteSpace="nowrap";
			 shq.scrollspeedx[shq.i]=ooo[2]
			shq.scrollx[shq.i].innerHTML+=shq.scrollx[shq.i].innerHTML;
			}

			if(ooo[3]=='y'){
			shq.ii++;
			 shq.scrolly[shq.ii]=o[i];
			 o[i].setAttribute("run",true)
			 shq.scrollh[shq.ii]=o[i].offsetHeight;
			 o[i].style.width=ooo[0]+'px';
			 o[i].style.height=ooo[1]+'px';
			 o[i].style.overflow="hidden";
			 shq.scrollspeedy[shq.ii]=ooo[2];
			shq.scrolly[shq.ii].innerHTML+=shq.scrolly[shq.ii].innerHTML;
			}

		    
		   }
		}
		if(shq.scrollx.length>0){scrollx()}
		if(shq.scrolly.length>0){scrolly()}
  
	   }
        function window_onload()
	   {
         startscroll(); //如果你的body 有启动函数加在这儿;
	   }
	   window.onload=window_onload;