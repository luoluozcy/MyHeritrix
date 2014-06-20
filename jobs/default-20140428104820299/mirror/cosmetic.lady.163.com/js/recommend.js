		$(function(){
			debug("register listener");
			LoadReadyListener();
			$('#getShortComment').click(ClickListener);
			$('#getFullComment').click(ClickListener);
			$('#getWantComment').click(ClickListener);
			$('#getUsedComment').click(ClickListener);
			$('#ilikeit').click(ClickListener);
			$('.shareArea_product').click(ClickListener);
//			$('.grade-heart-1').click(ClickListener);
//			$('.grade-heart-2').click(ClickListener);
//			$('.grade-heart-3').click(ClickListener);
//			$('.grade-heart-4').click(ClickListener);
//			$('.grade-heart-5').click(ClickListener);

		});
		$(window).unload(function() {		
			debug("unload");
			logEvent(2,'body');
		});	
		
		function debug(str){
			
		}
		function PostFormSubmit(){
			var v1 = parseInt($('#grade01').attr('selectedIndex'));
			var v2 = parseInt($('#grade02').attr('selectedIndex'));
			var v3 = parseInt($('#grade03').attr('selectedIndex'));
			var v4 = parseInt($('#grade04').attr('selectedIndex'));
			var v5 = parseInt($('#grade05').attr('selectedIndex'));
			var v6 = parseInt($('#grade06').attr('selectedIndex'));
			
			var v = Math.floor((v1+v2+v3+v4+v5+v6)/6);
			
			addEvent(new MyEvent(5,'s'+v));
		}
		
		function doNothing(){};
		
		var dt = new Date().getTime();
    	
    	var startOfEventId = 10000;
    	var eventQueue = new Array();
    	var pVisitFromType = '0';
    	var pLastProductId = '0';
    	
    	var pesessid = Math.floor(Math.random()*100000000000000000);
    	
    	debug("ok");
    	var elementsType = new Array();
    	
    	elementsType['body']=0;////载入页面退出页面
    	elementsType['getFullComment']=1;////发表心得按钮
    	elementsType['getShortComment']=2;//发表短评按钮
    	elementsType['getWantComment']=3;//发表想用按钮
    	elementsType['getUsedComment']=4;//发表用过按钮
    	elementsType['ilikeit']=5;//喜欢心得
    	elementsType['shareArea_product']=6;//分享
    	elementsType['trial'] = 7;
    	
    	//产品页好评
    	elementsType['s1'] = 11;
    	elementsType['s2'] = 12;
    	elementsType['s3'] = 13;
    	elementsType['s4'] = 14;
    	elementsType['s5'] = 15;
    	
    	
    	MyEvent = function(operType,elementId){
    		//this.seq = ++startOfEventId;
    		this.occur_at = curProductId;
    		this.time = new Date().getTime();
    		this.visitFromType = pVisitFromType;
    		this.lastProductId = pLastProductId;
    		
    		this.esessid= pesessid;
    		
    		//1load 2unload 3click 4notused 5submit
    		this.operType = operType;
    		this.elementId = elementId;
    	};    	
				
    	MyEvent.prototype.toString = function(){
    		
    		return ""+this.occur_at+":"+this.time +":" 
    				+ this.visitFromType+":"+this.lastProductId+
    				":"+this.operType+":"+elementsType[this.elementId] 
    				+ ":"+ this.esessid;
    	};
    	

    	function addEvent(myEvent){
    		//alert(myEvent.toString());
			var cookie = getCookie('last_events'); 		
			if(cookie == undefined || cookie==""){
				cookie  = myEvent.toString();
			}
			else{
				cookie = cookie+","+myEvent.toString();
			}
			
			setCookie('last_events',cookie);
			//alert(cookie);
    	}
    	
    	function logEvent(otype,eid){
    		addEvent(new MyEvent(otype,eid));
    	}
    	
    	function findLastProductId(){

    			try{
    				pLastProductId = window.opener.curProductId;

    			}
    			catch(err){
    				//
    			}
    			
    			if(typeof(pLastProductId)=='undefined'|| pLastProductId =='undefined' ){
    				pLastProductId = 0;
    			}

    	}
    	function LoadReadyListener(){
			findLastProductId();
			logEvent(1,'body');
			
    	}
    	function ClickListener(){    		
    		logEvent(3,$(this).attr('id'));
    	}
    	function ClickUsedListener(){
    		logEvent(9,$(this).attr('id'));
    	}
		function visit(userId,productId,operType,visitFromType,lastProductId){
			var last_events=(getCookie('last_events'));
			
			$.ajax({
			  type: "GET",			
			  url: '/recommend/visit',
			  data: 'userId=' + userId+'&lastEvents='+last_events,
			  success: function(html){setCookie('last_events','');}
			});
		}
		
		function setCookie(c_name,value,exdays)
		{			
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + exdays);
			var c_value=escape(value) +";path=/;"+ ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
			document.cookie=c_name + "=" + c_value;
		}	
		function getCookie(c_name)
		{
			var i,x,y,ARRcookies=document.cookie.split(";");
			for (i=0;i<ARRcookies.length;i++)
			{
			  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			  x=x.replace(/^\s+|\s+$/g,"");
			  if (x==c_name)
			    {
			    return unescape(y);
			    }
			  }
		}
					
		
		
