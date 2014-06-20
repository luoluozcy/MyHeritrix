
/*
 * 弹窗组件
 * Date: 2012-12-29
 * Revision: 1.0.1
 */

epay.popup = function(o){
	if(!o){o = {}};//无参数传入时创建一个空参数对象
	if(epay.popup.popBox){epay.popup.closePop();};
	//设置弹窗样式
	var popHTML = o.popHTML ? o.popHTML : '<div class="popupBox"><h2 class="popupTitle" key="title"></h2><span class="popupClose" key="close"></span><div key="content"></div></div>';
	
	//创建弹窗
	if(!epay.popup.popBox){		
		var popBox = document.createElement("div");	
		document.body.appendChild(popBox);
		epay.popup.popBox = popBox;		
	};
	
	var popBox =  epay.popup.popBox;
	popBox.innerHTML = popHTML;		
	
	//取得各种操作元素	
	epay.popup.title =   epay.getAttribute(popBox,"*","key","title")[0];//弹窗标题容器
	epay.popup.content = epay.getAttribute(popBox,"*","key","content")[0];//弹窗内容容器
	epay.popup.closeBtn = epay.getAttribute(popBox,"*","key","close")[0];//弹窗关闭按钮
	epay.popup.dragBtn = epay.getAttribute(popBox,"*","key","title")[0];//弹窗拖动区
	
	epay.popup.title.innerHTML = o.title ? o.title : "网易宝提示"; //设置标题	
	
	//设置内容
	var contentType = typeof(o.content);
	if(contentType == "string"){epay.popup.content.innerHTML = o.content;}
	if(contentType == "object"){//代理页面	
		epay.popup.content.innerHTML = "<div id='popReplace'></div>";
		epay.popup.content.replaceChild(o.content,epay.$("popReplace"));
		o.content.style.display = "";
		epay.popup.agentPop = o.content;
	}
	
	//关闭按钮
	if(epay.popup.closeBtn){		
		epay.popup.closeBtn.onclick = function(){
			if(o.closeFun){if(!o.closeFun()){return}}//关闭前执行，返回ture/false
			epay.popup.closePop();
		};
	};
	
	//创建遮罩层	
	if(!epay.popup.mybg){
		var mybg = document.createElement("div");		
		document.body.appendChild(mybg);
		epay.popup.mybg = mybg;
		if(navigator.userAgent.indexOf("MSIE")>0){	
			var mybgIfrme = document.createElement("iframe");	
			mybgIfrme.src = "/inc/blankIframe.html";
			document.body.appendChild(mybgIfrme);
			epay.popup.mybgIfrme = mybgIfrme;
		}
	};
	
	epay.popup.setStyle(o);//重设弹窗和遮罩的样式
	
	epay.ev.addEvent(window,"resize",function(){epay.popup.changSize()});//窗口大小改变时调整位置
	epay.ev.addEvent(window,"scroll",function(){epay.popup.changSize()});//窗口滚动时调整位置
	
	epay.popup.drag(o);//拖动窗口
	
};

//重设样式
epay.popup.setStyle = function(o){	
	var popBox = epay.popup.popBox;
	var mybg = epay.popup.mybg;
	//设置弹窗样式
	o.backColor = o.backColor ? o.backColor : "#000";
	var popBoxStyle = o.style ? o.style : "";	
	popBox.style.cssText  = "display:block;position:absolute;z-index:10000;";	
	var css = popBox.childNodes[0].style.cssText + ";";
	popBox.childNodes[0].style.cssText = css + popBoxStyle;

	var scrollTop = window.pageYOffset  || document.documentElement.scrollTop || document.body.scrollTop || 0; // 滚动条高动
	var innerHeight = epay.getInnerHeight();
	popBox.style.top = (innerHeight / 2)+scrollTop + "px";;	
	popBox.style.left =  "50%";		
	popBox.style.marginTop = -((popBox.clientHeight)/2)+"px";		
	popBox.style.marginLeft = -(popBox.clientWidth/2)+"px";
	
	//设置背景样式
	var alpha = o.alpha ? o.alpha : 40;
	mybg.style.cssText  = "width:100%;position:absolute;top:0;left:0;background:"+o.backColor+";filter:alpha(opacity="+alpha+");opacity:"+(alpha/100)+";z-index:9999;";	
	var h = document.body.clientHeight;
	var h1 = document.documentElement.clientHeight;
	h > h1 ? h = h : h = h1;
	mybg.style.height = h + "px";
	
	if(epay.popup.mybgIfrme){
		var mybgIfrme = epay.popup.mybgIfrme;
		mybgIfrme.style.cssText  = "width:100%;position:absolute;top:0;left:0;z-index:9998;";
		mybgIfrme.style.height = h + "px";
		mybgIfrme.style.zIndex = "998";	
		mybgIfrme.style.opacity = 0;
		mybgIfrme.style.filter = "Alpha(opacity=0)";
	}
};

//改变背景大小
epay.popup.changSize = function(){
	var popBox = epay.popup.popBox;
	var mybg = epay.popup.mybg;
	if(mybg.style.display != "none"){		
		var h = document.body.clientHeight;
		var h1 = document.documentElement.clientHeight;
		h > h1 ? h = h : h = h1;
		mybg.style.height = h + "px";
		var scrollTop = window.pageYOffset  || document.documentElement.scrollTop || document.body.scrollTop || 0; // 滚动条高动	
		var innerHeight = epay.getInnerHeight();	
		popBox.style.top = (innerHeight / 2)+scrollTop + "px";	
	}
};

//关闭弹窗
epay.popup.closePop = function(){
	epay.popup.popBox.style.display = "none";	
	epay.popup.mybg.style.display = "none";
	if(epay.popup.mybgIfrme){epay.popup.mybgIfrme.style.display = "none"};
	//替换回原代理页面
	if(epay.popup.agentPop){
		var bodyAgent = document.createElement("div");		
		document.body.appendChild(bodyAgent);
		document.body.replaceChild(epay.popup.agentPop,bodyAgent);
		epay.popup.agentPop.style.display = "none";
		epay.popup.agentPop = null;	
	}
};

//弹窗拖动
epay.popup.drag = function(o){
	var hand = epay.popup.dragBtn;
    hand.onselectstart=function(){return false};
    var s_left = 0;
    var s_top = 0;
	var p = epay.popup.popBox;
    epay.ev.addEvent(hand,"mousedown",mDown);
	//按下时
	function mDown(){
	    var evn = epay.ev.getEvent();        
        //拖动修正值
        f_left = evn.clientX-p.offsetLeft;
        f_top = evn.clientY-p.offsetTop;       
        s_left = evn.clientX-f_left+"px";
        s_top = evn.clientY-f_top+"px";	
		epay.ev.addEvent(document,"mousemove",mMove);
		epay.ev.addEvent(document,"mouseup",mUp);
	}
	//拖动时
	function mMove(){
        var evn = epay.ev.getEvent();        
        p.style.left = evn.clientX-f_left+(p.clientWidth/2)+"px";
        p.style.top = evn.clientY-f_top+(p.clientHeight/2)+"px";
   }
   //放下时
   function mUp(){
        epay.ev.removeEvent(document,"mousemove",mMove);
        epay.ev.removeEvent(document,"mouseup",mUp);
   }
};
