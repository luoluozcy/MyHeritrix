/*-----------------------���뽨����ʾ�� 2011-4-21---------------------------------*/
/* 
1.�����˹رյ������������б�Ĺ��� 
2.�����˳�ʼ�����õ�����ʱ��������BUG
*/

function suggest(s_text, s_boxId, inputId){
   this.s_list_box;//��ʾ�б�UL
   this.s_box = document.getElementById(s_boxId)//��ʾ�б�UL����
   this.s_text = s_text;//��ʾ��׺����  
   this.input = document.getElementById(inputId); //�����   
   this.show_suggest(); //��ʾ��ʾ����
}

//��ʼ����ѡ���б�
suggest.prototype.createList = function(){   
   var fragment = document.createDocumentFragment(); 
   
   this.s_mask = document.createElement("iframe");//����iframe�����ڵ��ؼ�  
   this.s_mask.style.frameborder = "no";

   this.s_mask.src = "javascript:false";
   this.s_mask.className = "iframe";  
   
   this.s_list_box = document.createElement("ul");//����ѡ���б�
   this.s_list_box.className = "suggest_list";
  
   var title = document.createElement("h6");//����ѡ���б����
   title.innerHTML = "��ѡ����������...";
   fragment.appendChild(title); 
   //����ѡ���б�Ŀ���ѡ��
   for(var i = 0;i  <  this.s_text.length; i ++ ){
       var list = document.createElement("li");  	  
	   fragment.appendChild(list);  
   }
   this.s_list_box.appendChild(fragment);
   this.s_box.appendChild(this.s_list_box);
   this.s_box.appendChild(this.s_mask);  
};

//������ʾ
suggest.prototype.show_suggest = function(){   	
   this.createList();//��ʼ����ѡ���б�
   var list_text = this.s_text;//��ʾ��׺����
   var t_box = this.s_list_box;//��ʾ�б�UL  
   var lists = t_box.getElementsByTagName("li");//��ʾ�б���Ŀ����
   var input =  this.input;//�����    
   var c_focus;//ѡ��㣬��ʼΪ-1
   var nb = this;
   var defaultUrs="��name@example.com";//�����Ϊ�յ�ʱ����ʾ����
   
   input.onkeyup = function(){//FF��������ֻ����keyup����
  		 var reg = /\</g;
   		if(reg.test(this.value)){this.value = this.value.replace(reg,"")};
	   var evt = ev.getEvent();
	   if(evt.keyCode == 13){//�س�������ʾ��	
	   		if(t_box.style.display != "none"){
			  input.value = input.value.split("@")[0] + "@" + lists[c_focus].innerHTML.split("@")[1];//�����õ���ʾ�ı�		         
			  nextFocus();      	        
			  t_box.style.display = "none"; 
			  nb.s_mask.style.display = "none";
			}
	          return false;//���λس��ύ
	   }  
   };
   input.onblur=function(){if(!input.value){input.style.color="#999";input.value=defaultUrs;}}//�����ʧ��ʱ��ʾ��ʾ����
   input.onkeydown = function(){//�������������ʱ������ʾ   
   	if(this.value == defaultUrs){this.value = "";input.style.color = "#000";}
       lists = t_box.getElementsByTagName("li");//��ʾ�б���Ŀ����
       var evt = ev.getEvent();	  
       if(evt.keyCode == 40||evt.keyCode == 38&&t_box.style.display == "block"){//���°����л�ѡ��
           	if(evt.keyCode == 40){
				if(c_focus < lists.length-1){c_focus ++ ;}
				else{c_focus = 0}//�ص���һ��
			}
			if(evt.keyCode == 38){
				if(c_focus>0){c_focus--;}
				else{c_focus = lists.length-1}//�ص����һ��				
			}
			nb.clearListCss();//��������б���Ŀ����ʽ
		    lists[c_focus].className = "list_focus";//���õ�ǰ�õ������ѡ����ʽ
			input.value = lists[c_focus].innerHTML;//�����õ���ʾ�ı�			
        }

		else if(evt.keyCode == 13){//���λس��ύ
		
			return false;		
		}
		
		else if(evt.shiftKey == true&&evt.keyCode == 50){//����"@"����
		        if(this.value.indexOf("@")!= -1){return false}		        
		}
		
		
		else if(evt.keyCode == 9){//tab��Ĭ��ѡ���һ��		
			t_box.style.display = "none";
			nb.s_mask.style.display = "none";
			var lists = t_box.getElementsByTagName("li");//��ʾ�б���Ŀ����
			nb.input.value = lists[0].innerHTML;
        }	
		
	    else{setTimeout(sug_frame,10);}//������ʾ�����ӳٿɵõ���ǰ������ַ���������׼ȷ
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

   ev.addEvent(this.input,e,function(){ //��������ʱ������ʾ
				var evn = ev.getEvent();
				ev.formatEvent(evn);
				evn.eStopBubble();		
			 if(input.value==defaultUrs){input.style.color="#000";input.value="";}
            if(input.value.indexOf("@")!= -1){
	  	        var str = input.value.split("@")[0];//ȥ�������׺				
	            input.value = str;
			    t_box.innerHTML = " <h6>��ѡ����������...</h6>";
			    for(var i = 0;i < nb.s_text.length;i ++ ){
                    var list = document.createElement("li");  	  
	                t_box.appendChild(list);  
                };					
		        sug_frame();//������ʾ	
			}
	   }			
   );
   
   ev.addEvent(document,"click",function(){ //����հ�
		if(t_box.style.display !="none"){		
			var lists = t_box.getElementsByTagName("li");//��ʾ�б���Ŀ����			
			if(lists && c_focus >= 0 && input.value != defaultUrs){			
				lists[c_focus].onclick();			
			}
		}
	});
   
   //��ʾ��   
   function sug_frame(){
        if(input.value!= ""){//�������������ʱ������ʾ��
		    t_box.style.display = "block";				
			nb.s_mask.style.height = t_box.clientHeight + "px";
			nb.s_mask.style.width = t_box.clientWidth + "px";
			nb.s_mask.style.display = "block";
			
			var able_texts = list_text;
			if(input.value.indexOf("@")!= -1){
			     var eh = input.value.split("@")[1];
				 able_texts = []; 
				 t_box.innerHTML = "<h6>��ѡ����������...</h6>";
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
			lists = t_box.getElementsByTagName("li");//��ʾ�б���Ŀ����
			for(var i = 0;i < able_texts.length;i ++ ){		   
	            lists[i].innerHTML = input.value.split("@")[0].replace(/\</g,"") + able_texts[i];//��ʾ���ڵ�����
				//mouseoverʱ��ѡ����ʽ�仯
				lists[i].onmouseover = function(){
				     nb.clearListCss();
					 c_focus = dom(lists).toArray().indexof(this);//�õ���ǰ�Ľ���ֵ				 
					 this.className = "list_focus";					
				};
				//�����ʾ��ѡ���ֵд�뵽�����	��������ʾ��  
		        lists[i].onclick = function(){
				    input.value = this.innerHTML;
					t_box.style.display = "none";
					nb.s_mask.style.display = "none";
					nextFocus();			 
				};
				
	       }	
		   if(lists[0]){lists[0].className = "list_focus";c_focus = 0;}	//�������һ��	
        }
		else{t_box.style.display = "none";nb.s_mask.style.display = "none";}//�������������ʱ������ʾ��
		nb.s_mask.style.height = nb.s_list_box.clientHeight + "px";
   };
   

   
      //��һ��Ԫ�صõ�����
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

//�������ѡ����ʽ
suggest.prototype.clearListCss = function(){
	var lists = this.s_list_box.getElementsByTagName("li");
	for(var i = 0;i < lists.length;i ++ ){
		lists[i].className = "";		
	} 
};

//����������ʽ
suggest.prototype.resetSuggest = function(){	
	this.input.style.color="#999";
	this.input.value="��name@example.com";	
	this.s_list_box.style.display = "none";
	this.s_mask.style.display = "none";
	this.clearListCss();
};