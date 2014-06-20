 
$(function() {
        nie.config.copyRight.setNormal();

        nie.use(["ui.tab",'nie.util.share'],function(){
		 
           var shareText = $('#shareBox .text').text() || '',
                    shareImg = $('#shareBox img').attr('src') || '';

			 var topShare = nie.util.share({
				fat: "#topShare",
				type: 1,
				defShow: [22,5, 2, 1, 3],
				title: shareText,
				img:shareImg
			});

			$("#topShare").find(".NIE-share-txt").remove();

			$("#topShare a").each(function(i){
				$(this).addClass("a_"+i);
			 
			});

			$.tab('#zcp_nav a','.zcp_wrap');




    });

	 if($('#index').length > 0){
		for(var aa=0; aa<$('#news_pic a').length; aa++){
			$('#newspic_num').append('<a href="javascript:void(0)">'+((aa<9?('0'.toString()):'')+(aa+1).toString())+'</a>');
		}
		new slideShow({buttons:$("#newspic_num a"),elements:"#news_pic a",stage:"#newspic_num,#news_pic",onClass:"current",timelag:250,first:1,delay:3100});

	 }
});

var deFn=function(fn,obj){
	var args=Array.prototype.slice.call(arguments,2)||[];
	return function(){
		fn.apply(obj||window,args);
	};
};
var deFnEvent=function(fn,obj){
	return function(e){
		fn.call(obj||window,e);
	};
};
var deFnParam=function(fn,obj){
	return function(){
		fn.apply(obj||window,Array.prototype.slice.call(arguments)||[]);
	};
};
function slideShow(opt){
	var $=jQuery;
	this.opt=opt;
	this.uuid=new Date().getTime();
	this.btnContainer=opt.buttonContainer?$(opt.buttonContainer):null;
	if(this.btnContainer!=null) this.btnContainer.html("");
	this.btns=this.btnContainer!=null? $([]) : $(opt.buttons);
	this.stage=opt.stage;
	this.intervalInt=null;
	this.list=$(opt.elements);
	this.onClass=opt.onClass || "on";
	this.delay=parseInt(opt.delay);
	this.delay=(this.delay+"")=="NaN"?6200:this.delay;
	this.fadeTime=opt.fadeTime==0?0:(opt.fadeTime || 400);
	this.first=(opt.first||1)-1;
	this.evt = opt.event||"mouseenter";
	this.timelag = opt.timelag || 0;
	this.timelagInterval = false;
	this.lastIndex=null;
	this.switchTo=function(i){
		if(this.lastIndex==i) return;
		this.onSwitch(i);
		var _e=null;
		if(this.lastIndex!=null){
			this.btns.eq(this.lastIndex).removeClass(this.onClass);
			_e=this.list.eq(this.lastIndex).removeClass(this.onClass);
			if(this.fadeTime>0)_e.stop().fadeTo(this.fadeTime,0,function(){$(this).hide();})
			else _e.hide();
		}
		this.btns.eq(i).addClass(this.onClass);
		_e=this.list.eq(i).show().addClass(this.onClass);
		if(this.fadeTime>0) _e.stop().fadeTo(this.fadeTime,1);
		this.lastIndex=i;
	};
	this.switchNext=function(){
		var nextIndex=this.lastIndex+1;
		nextIndex=nextIndex>=this.list.size() ? 0 : nextIndex;
		this.switchTo(nextIndex);
	};
	this.createButton=function(i){
		var _b=document.createElement("a");
		_b.href=this.list.eq(i).attr("href");
		_b.target="_blank";
		_b.innerHTML=i+1;
		if(this.btnContainer) this.btnContainer.append(_b);
		this.btns.push(_b);
		return _b;
	};
	this.onSwitch = opt.onSwitch && typeof(opt.onSwitch)=="function" ? opt.onSwitch : function(){};
	this.timelagSwtich=function(i){
		if(this.lastIndex==i) return;
		this.clearTimelag();
		this.timelagInterval = window.setTimeout(deFn(this.switchTo,this,i),this.timelag);
	};
	this.clearTimelag=function(){
		if(this.timelagInterval!==false) window.clearTimeout(this.timelagInterval);	
	}
	this.switchHandler=this.timelag>0?this.timelagSwtich:this.switchTo;
	var l=this.list.size();
	for(var i=0;i<l;i++){
		var btn=this.btns[i]?this.btns.eq(i):$(this.createButton(i)),_e;
		if(i==this.first){
			btn.addClass(this.onClass);
			this.lastIndex=i;
			_e=this.list.eq(i).show().addClass(this.onClass);
			if(this.fadeTime>0)_e.stop().fadeTo(this.fadeTime,1);
		}else{
			_e=this.list.eq(i).hide().removeClass(this.onClass);
			if(this.fadeTime>0)_e.css("opacity",0);
		}
		btn.bind(this.evt,deFn(this.switchHandler,this,i));
		if(this.timelag>0) btn.bind("mouseleave",deFn(this.clearTimelag,this));	
	}

	this.stop=function(){
		if(this.intervalInt) window.clearInterval(this.intervalInt);
	};
	this.start=function(){
		this.stop();
		this.intervalInt=window.setInterval(deFn(this.switchNext,this),this.delay);
	};
	if(this.stage&&this.list.size()>1&&this.delay>0) $(this.stage).bind("mouseenter",deFn(this.stop,this))	.bind("mouseleave",deFn(this.start,this));
	if(this.list.size()>1&&this.delay>0) this.start();
	this.onInit = opt.onInit && typeof(opt.onInit)=="function" ? opt.onInit : function(){};
	this.onInit();
}

