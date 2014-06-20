//-----------------------dom 自定义方法类---------------------------

function dom(obj){//实现自定义类的一个实例，obj为元素的ID或元素本身
	return new customDom(obj);
}

function customDom(obj){//实现元素自定义方法的类，obj为元素的ID或元素本身	
	
	if(typeof(obj) == "string"){
		this.obj = document.getElementById(obj);
	} 
	else if(typeof(obj) == "object"){this.obj = obj;}
	else this.obj = null;
}
//自定义类方法的实现
customDom.prototype={

	//得到元素
	getElem:function(){return this.obj;},
	
	//得到元素真实坐标,返回一个数组[x,y]
    getPosition:function(){
        var position = [0,0]; 
        var obj = this.obj;
        while(obj.offsetParent){         
           position[0] += obj.offsetLeft; 
           position[1] += obj.offsetTop;
           obj = obj.offsetParent; 
        } 
        position[0] + document.body.offsetLeft;
        position[1] + document.body.offsetTop;
        return position;		
    },
	
	//得到元素属性
	getStyle:function(name){
        var elem = this.obj;
		//如果该属性存在于style[]中
        if (elem.style[name]){return elem.style[name];} 
		//否则，尝试IE的方式      
        else if (elem.currentStyle){return elem.currentStyle[name];}
        //或者W3C的方法
        else if (document.defaultView && document.defaultView.getComputedStyle){
        //格式化mame名称
            name = name.replace(/([A-Z])/g,"-$1");
		    name = name.toLowerCase();
            //获取style对象并取得属性的值(如果存在的话)
            var s = document.defaultView.getComputedStyle(elem,"");
            return s && s.getPropertyValue(name);
            //否则，就是在使用其它的浏览器
        } else{return null;}   
      },
	  
	//得到子节点数组(解决FF等子节点包括空白节点和文本节点的问题)
    getChildren:function(){	
	var AchildNodes = [];
        for(var i = 0;i < this.obj.childNodes.length;i++){
			if(this.obj.childNodes[i].nodeType == 1){
                AchildNodes.push(this.obj.childNodes[i]);
            }
        }
        return AchildNodes;
	},
	
	//得到下一个兄弟节点
	getNextSibling:function(){
	  	var endBrother = this.obj.nextSibling;
  		while(endBrother.nodeType != 1 ){
   			endBrother = endBrother.nextSibling;
  		}
  		return endBrother;		  
	  },
	  
	//得到上一个兄弟节点
	getPreSibling:function(){
	  	endBrother = this.obj.previousSibling;
  		while(endBrother.nodeType != 1){
   			endBrother = endBrother.previousSibling;
  		}
  		return endBrother;		  
	  },
	  
	 //通过getElementsByTagName方式得到的元素并转换为数组
	 getByTagName:function(name){
		var tagNames = this.obj.getElementsByTagName(name);
		var arr = [];
	    for(var i = 0;i < tagNames.length;i++){
            arr.push(tagNames[i]);
		}
			return arr;		 
	 },
	 
	 //在节点后插入新的兄弟节点
	  insertAfter:function(newNode){
            if(this.obj.nextSibling){this.obj.parentNode.insertBefore(newNode, this.obj.nextSibling);}
            else{this.obj.parentNode.appendChild(newNode);}	 
	  },
	  
	  //非IE的innerText用textContent;
	  text:function(str){
		  this.obj.innerText ? this.obj.innerText = str:this.obj.textContent = str;
	  },
	  	  //把用getElementsByTagName等方式得到的元素转换为数组
	  toArray:function(){
		    var arr=[];
	        for(var i=0;i<this.obj.length;i++){
                arr.push(this.obj[i]);
			}
			return arr;		 
	  }
}
//返回数组中指定字符串的索引
Array.prototype.indexof = function(str){	
	for(var q = 0;q < this.length;q++){
		if(this[q] == str){return q;}
	}
}
//-----------------------event---------------------------
var ev={
          //添加事件监听
          addEvent:function(obj,evt,fun){
              if(obj.addEventListener){//for dom
                    obj.addEventListener(evt,fun,false)
              }
              else if(obj.attachEvent){//for ie
			         obj.attachEvent("on"+evt,fun)
                    //obj.attachEvent("on"+evt,function(){fun.call(obj)});//解决IE attachEvent this指向window的问题
			  }
              else{obj["on"+evt] = fun}//for other
          },
		  
          //删除事件监听
          removeEvent:function(obj,evt,fun){
              if(obj.removeEventListener){//for dom
                    obj.removeEventListener(evt,fun,false)
              }
              else if(obj.detachEvent){//for ie
                    obj.detachEvent("on"+evt,fun)
              }
              else{obj["on"+evt] = null;
			  } //for other
           },
	
          //捕获事件		
           getEvent:function(){
                    if(window.event){return window.event}
                    else{return ev.getEvent.caller.arguments[0];}	
           },
		   
		   formatEvent:function(evt){
                    evt.eTarget = evt.target ? evt.target:evt.srcElement;//事件目标对象
                    evt.eX = evt.pagex ? evt.pagex:evt.clientX + document.body.scrollLeft;//页面鼠标X坐标
                    evt.eY = evt.pagey ? evt.pagex:evt.clientY + document.body.scrollTop;//页面鼠标Y坐标
                    evt.eStopDefault = function(){this.preventDefault ? this.preventDefault():this.returnValue = false;}//取消默认动作
                    evt.eStopBubble = function(){this.stopPropagation ? this.stopPropagation():this.cancelBubble = true;}//取消冒泡
           }
}
/*-----------------------输入建议提示类  by lalasxc---------------------------------*/

function suggest(s_text, s_boxId, inputId){
   this.s_list_box;//提示列表UL
   this.s_box = document.getElementById(s_boxId)//提示列表UL容器
   this.s_text = s_text;//提示后缀数组  
   this.input = document.getElementById(inputId); //输入框   
   this.show_suggest(); //显示提示内容  
}

//初始化空选择列表
suggest.prototype.createList = function(){	
	   var fragment = document.createDocumentFragment(); 
	   
	   this.s_mask = document.createElement("iframe");//创建iframe用于遮挡控件  
	   this.s_mask.style.frameborder = "no";
	
	   this.s_mask.src = "javascript:false";
	   this.s_mask.className = "iframe";  
	   
	   this.s_list_box = document.createElement("ul");//创建选择列表
	   this.s_list_box.className = "suggest_list";
	  
	   var title = document.createElement("h6");//创建选择列表标题
	   title.innerHTML = "请选择或继续输入...";
	   fragment.appendChild(title); 
	   //创建选择列表的空子选项
	   for(var i = 0;i  <  this.s_text.length; i ++ ){
	       var list = document.createElement("li");  	  
		   fragment.appendChild(list);  
	   }
	   this.s_list_box.appendChild(fragment);
	   this.s_box.appendChild(this.s_list_box);
	   this.s_box.appendChild(this.s_mask);
};

//输入提示
suggest.prototype.show_suggest = function(){
  if(this.s_box){
   this.createList();//初始化空选择列表
   var list_text = this.s_text;//提示后缀数组
   var t_box = this.s_list_box;//提示列表UL  
   var lists = t_box.getElementsByTagName("li");//提示列表项目集合
   var input =  this.input;//输入框    
   var c_focus;//选项焦点，初始为-1
   var nb = this;
   var defaultUrs="\u5982name@example.com";//输入框为空的时的提示内容
   input.onkeyup = function(){//FF中文输入只能用keyup捕获
  		 var reg = /\</g;
   		if(reg.test(this.value)){this.value = this.value.replace(reg,"").replace(/\s/g,"")};
	   var evt = ev.getEvent();
	   if(evt.keyCode == 13){//回车隐藏提示框	              
			  input.value = input.value.split("@")[0] + "@" + lists[c_focus].innerHTML.split("@")[1];//输入框得到提示文本        
			  t_box.style.display = "none"; 
			  nb.s_mask.style.display = "none";
	          return false;//屏蔽回车提交
	   }  
   };
   input.onkeydown = function(){//在输入框里输入时出现提示   
   
       lists = t_box.getElementsByTagName("li");//提示列表项目集合
       var evt = ev.getEvent();	  
       if(evt.keyCode == 40||evt.keyCode == 38&&t_box.style.display == "block"){//上下按键切换选项
           	if(evt.keyCode == 40){
				if(c_focus < lists.length-1){c_focus ++ ;}
				else{c_focus = 0}//回到第一项
			}
			if(evt.keyCode == 38){
				if(c_focus>0){c_focus--;}
				else{c_focus = lists.length-1}//回到最后一项				
			}
			clearListCss();//清除所有列表项目的样式
		    lists[c_focus].className = "list_focus";//设置当前得到焦点的选项样式
			input.value = lists[c_focus].innerHTML;//输入框得到提示文本			
        }

		else if(evt.keyCode == 13){//屏蔽回车提交			
			return false;		
		}
		
		else if(evt.shiftKey == true&&evt.keyCode == 50){//屏蔽"@"按键
		        if(this.value.indexOf("@")!= -1){return false}		        
		}
		
		
		else if(evt.keyCode == 9){//tab键默认选择第一个			
			if(nb.s_mask.style.display != "none"){
				var lists = t_box.getElementsByTagName("li");//提示列表项目集合
				nb.input.value = lists[0].innerHTML;		
			};
			t_box.style.display = "none";
			nb.s_mask.style.display = "none";
        }	
		
	    else{setTimeout(sug_frame,10);}//出现提示，用延迟可得到当前输入的字符，这样才准确
   };   
   
   ev.addEvent(input,"blur",function(){if(!input.value){input.style.color="#999";input.value=defaultUrs}});//输入框失焦时显示提示文字
   //如果有删除按钮
   if(document.getElementById("delUserName")){
	   document.getElementById("delUserName").onclick = function(){		
			var evn = ev.getEvent();
			ev.formatEvent(evn);
			evn.eStopBubble();
			input.value = "";		
			setTimeout(sug_frame,10);
			if(c_focus){lists[c_focus].className = "";}
			input.focus();
			input.style.color = "#000";
		};
   };
   
   var isIE = navigator.userAgent.indexOf("MSIE");
   var e;
   if(isIE != -1){
	   e = "mousedown";
	   ev.addEvent(input,"click",function(){ 
			var evn = ev.getEvent();
			ev.formatEvent(evn);
			evn.eStopBubble();
		});
	}
	else{e = "click"}
   ev.addEvent(this.input,"click",function(){ //点击输入框时出现提示
				var evn = ev.getEvent();
				ev.formatEvent(evn);
				evn.eStopBubble();		
			 if(input.value==defaultUrs){input.style.color="#000";input.value="";}
            if(input.value.indexOf("@")!= -1){
	  	        var str = input.value.split("@")[0];//去除邮箱后缀				
	            input.value = str;
				//让ie下光标移到最后
				if(input.createTextRange){
					var r = input.createTextRange();
					r.collapse(false);
					r.select(); 
				};
			    t_box.innerHTML = " <h6>请选择或继续输入...</h6>";
			    for(var i = 0;i < nb.s_text.length;i ++ ){
                    var list = document.createElement("li");  	  
	                t_box.appendChild(list);  
                };					
		        sug_frame();//出现提示				


			}
	   }			
   );
   
   ev.addEvent(document,"click",function(){ //点击空白
		var lists = t_box.getElementsByTagName("li");//提示列表项目集合	
		
		if(lists && c_focus >= 0 && input.value != defaultUrs){	
			if(lists[c_focus]){
				lists[c_focus].onclick();	
			}
		}
	});
   
   //提示框   
   function sug_frame(){
        if(input.value!= ""){//输入框内有内容时出现提示框
		    t_box.style.display = "block";		
			
			nb.s_mask.style.height = t_box.clientHeight + "px";
			nb.s_mask.style.width = t_box.clientWidth + "px";
			nb.s_mask.style.display = "block";
			
			var able_texts = list_text;
			if(input.value.indexOf("@")!= -1){
			     var eh = input.value.split("@")[1];
				 able_texts = []; 
				 t_box.innerHTML = "<h6>请选择或继续输入...</h6>";
				 var noList=true;
				  for(var i = 0;i < list_text.length;i ++ ){
				       var gh = list_text[i].split("@")[1];
					   if(gh.indexOf(eh) != -1){
					   able_texts.push(list_text[i]);
					   var cc = document.createElement("li");	
				       t_box.appendChild(cc);
				       noList=false;
					   }					   
				  }	
				  if(noList){
					  t_box.style.display = "none";
				  }else{
					  t_box.style.display = "block";
				  }
	        };	
			
			lists = t_box.getElementsByTagName("li");//提示列表项目集合
			for(var i = 0;i < able_texts.length;i ++ ){		   
	            lists[i].innerHTML = input.value.split("@")[0].replace(/\</g,"").replace(/\s/g,"") + able_texts[i];//提示框内的文字
				//mouseover时出选项样式变化
				lists[i].onmouseover = function(){
				     clearListCss();
					 c_focus = dom(lists).toArray().indexof(this);//得到当前的焦点值				 
					 this.className = "list_focus";					
				};
				//点击提示框选项把值写入到输入框	并隐藏提示框  
		        lists[i].onclick = function(){
				    input.value = this.innerHTML;
					t_box.style.display = "none";
					nb.s_mask.style.display = "none"; 
					if(nb.fun){						
						nb.fun();
					}
				};
	       }	
		   if(lists[0]){lists[0].className = "list_focus";c_focus = 0;}	//焦点设第一个	
        }
		else{t_box.style.display = "none";nb.s_mask.style.display = "none";}//输入框内无内容时隐藏提示框
		nb.s_mask.style.height = nb.s_list_box.clientHeight + "px";
		
   };
   
   //清除所有选项样式
   function clearListCss(){
        for(var i = 0;i < lists.length;i ++ ){
		     lists[i].className = "";		
		}   
   };
  }
};