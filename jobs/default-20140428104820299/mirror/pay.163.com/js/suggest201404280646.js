/*-----------------------输入建议提示类 2011-4-21---------------------------------*/
/* 
1.增加了关闭弹窗重置下拉列表的功能 
2.修正了初始输入框得到焦点时输入错误的BUG
*/

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
   this.createList();//初始化空选择列表
   var list_text = this.s_text;//提示后缀数组
   var t_box = this.s_list_box;//提示列表UL  
   var lists = t_box.getElementsByTagName("li");//提示列表项目集合
   var input =  this.input;//输入框    
   var c_focus;//选项焦点，初始为-1
   var nb = this;
   var defaultUrs="如name@example.com";//输入框为空的时的提示内容
   
   input.onkeyup = function(){//FF中文输入只能用keyup捕获
  		 var reg = /\</g;
   		if(reg.test(this.value)){this.value = this.value.replace(reg,"")};
	   var evt = ev.getEvent();
	   if(evt.keyCode == 13){//回车隐藏提示框	
	   		if(t_box.style.display != "none"){
			  input.value = input.value.split("@")[0] + "@" + lists[c_focus].innerHTML.split("@")[1];//输入框得到提示文本		         
			  nextFocus();      	        
			  t_box.style.display = "none"; 
			  nb.s_mask.style.display = "none";
			}
	          return false;//屏蔽回车提交
	   }  
   };
   input.onblur=function(){if(!input.value){input.style.color="#999";input.value=defaultUrs;}}//输入框失焦时显示提示文字
   input.onkeydown = function(){//在输入框里输入时出现提示   
   	if(this.value == defaultUrs){this.value = "";input.style.color = "#000";}
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
			nb.clearListCss();//清除所有列表项目的样式
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
			t_box.style.display = "none";
			nb.s_mask.style.display = "none";
			var lists = t_box.getElementsByTagName("li");//提示列表项目集合
			nb.input.value = lists[0].innerHTML;
        }	
		
	    else{setTimeout(sug_frame,10);}//出现提示，用延迟可得到当前输入的字符，这样才准确
   };
   input.onblur=function(){if(!input.value){input.style.color="#999";input.value=defaultUrs}};
   
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

   ev.addEvent(this.input,e,function(){ //点击输入框时出现提示
				var evn = ev.getEvent();
				ev.formatEvent(evn);
				evn.eStopBubble();		
			 if(input.value==defaultUrs){input.style.color="#000";input.value="";}
            if(input.value.indexOf("@")!= -1){
	  	        var str = input.value.split("@")[0];//去除邮箱后缀				
	            input.value = str;
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
		if(t_box.style.display !="none"){		
			var lists = t_box.getElementsByTagName("li");//提示列表项目集合			
			if(lists && c_focus >= 0 && input.value != defaultUrs){			
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
				  for(var i = 0;i < list_text.length;i ++ ){
				       var gh = list_text[i].split("@")[1];
					   if(gh.indexOf(eh) != -1){
					   able_texts.push(list_text[i]);
					   var cc = document.createElement("li");	
				       t_box.appendChild(cc);
					   }					   
				  }					  			             
	        };	
			
			if(able_texts.length == 0){t_box.style.display = "none";nb.s_mask.style.display = "none";return};
			lists = t_box.getElementsByTagName("li");//提示列表项目集合
			for(var i = 0;i < able_texts.length;i ++ ){		   
	            lists[i].innerHTML = input.value.split("@")[0].replace(/\</g,"") + able_texts[i];//提示框内的文字
				//mouseover时出选项样式变化
				lists[i].onmouseover = function(){
				     nb.clearListCss();
					 c_focus = dom(lists).toArray().indexof(this);//得到当前的焦点值				 
					 this.className = "list_focus";					
				};
				//点击提示框选项把值写入到输入框	并隐藏提示框  
		        lists[i].onclick = function(){
				    input.value = this.innerHTML;
					t_box.style.display = "none";
					nb.s_mask.style.display = "none";
					nextFocus();			 
				};
				
	       }	
		   if(lists[0]){lists[0].className = "list_focus";c_focus = 0;}	//焦点设第一个	
        }
		else{t_box.style.display = "none";nb.s_mask.style.display = "none";}//输入框内无内容时隐藏提示框
		nb.s_mask.style.height = nb.s_list_box.clientHeight + "px";
   };
   

   
      //下一个元素得到焦点
   function nextFocus(){	  
   if(!input.form){return;}
       for(var i = 0;i < input.form.elements.length;i ++ ){
	       if(input.form.elements[i] == input){
		       for(var j = i + 1;j < input.form.elements.length;j ++ ){
			       if(input.form.elements[j].type != "hidden"){
				      input.form.elements[j].focus();
					  return; 
				   }
			   }		   
		   }	   
	   }   
   }; 
};

//清除所有选项样式
suggest.prototype.clearListCss = function(){
	var lists = this.s_list_box.getElementsByTagName("li");
	for(var i = 0;i < lists.length;i ++ ){
		lists[i].className = "";		
	} 
};

//重置下拉样式
suggest.prototype.resetSuggest = function(){	
	this.input.style.color="#999";
	this.input.value="如name@example.com";	
	this.s_list_box.style.display = "none";
	this.s_mask.style.display = "none";
	this.clearListCss();
};