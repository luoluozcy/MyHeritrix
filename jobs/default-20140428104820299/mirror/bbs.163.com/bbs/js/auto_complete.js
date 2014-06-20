


var AutoComplete = {
	"init":""
  ,"id":""
  ,"defer":200  //延迟n毫秒再向服务器提交查询
  ,"timeout":null
  ,"keyword":null
  ,"width":null
  ,"autoWidth":false
  ,"top":false
  ,"setTop":function(top) {
	  this.top = top;
  }
  ,"setWidth":function(width) {
	  this.width = width;
  }
  ,"setAutoWidth":function(autoWidth) {
	  this.autoWidth = autoWidth;
  }
  ,"autoExecute":function() {
	  //回车执行，默认什么也不做
  }
  ,"initEvent":function(txtid, createButton) {
	  if (typeof(createButton) == "undefined" || createButton==null) {
		  createButton = true;
	  }
      this.txtid = txtid;
      this.tableid = txtid+"_autocomplete";
	  this.iframeid = txtid + "_iframe";
      var obj = $(txtid);

	  if (createButton) {
		  this.createSelectBoxButton();
	  }
      
      obj.style.height = "16px";
      obj.style.paddingTop = "1px";
      obj.style.paddingRight = "0px";
      obj.style.paddingBottom = "1px";

      obj.onkeyup = function(aEvent) {
          var myEvent = window.event ? window.event : aEvent;
          var keyCode = myEvent.keyCode;
          if (AutoComplete.timeout != null) {
              window.clearTimeout(AutoComplete.timeout);
              AutoComplete.timeout = null;
          }
          
          switch (keyCode) {
            case 13://回车
              AutoComplete.submit(null);
              break;
            case 16://shift
              break;
            
            case 17://Ctrl
              break;
            case 38:
              AutoComplete.selectPrev();
              //向上
              break;
            case 40:
              AutoComplete.selectNext();
              //向下
              break;
            default:
              var value = (this.value);
              if (value == "" || value.length>6) {
                AutoComplete.hide();
                return;
              }
              AutoComplete.keyword = value;
              AutoComplete.timeout = window.setTimeout('AutoComplete.deferAutoSearch()', AutoComplete.defer);
              break;
          }
      }	
      obj.onblur = function() {
		  //firefox延迟200毫秒隐藏才能执行LI的onclick方法
          //window.setTimeout('AutoComplete.hide()', 200);
      }
  } 
  ,"submit":function(srcElement) {
	  if(srcElement != null){
		  this.select(srcElement);
	  }
	  AutoComplete.hide();
      AutoComplete.autoExecute();
  }
  ,"btnClick":function(obj) {
	  var auto = $(this.tableid);
	  if (auto != null && auto.style.display=="block") {
		  AutoComplete.hide();
		  return;
	  }
      AutoComplete.autoSearch("showall");
      $(this.txtid).focus();
  }
  ,"btnMouseOver":function(obj) {
      obj.src = "/bbs/img07/selectBox_true.gif";
  }
  ,"btnMouseOut":function(obj) {
      obj.src = "/bbs/img07/selectBox_false.gif";
  }
  /**
   * 创建下拉框按钮
   */
  ,"createSelectBoxButton":function() {
      var html = '<img src="/bbs/img07/selectBox_false.gif" onclick="AutoComplete.btnClick(this)" align="absmiddle" onmouseover="AutoComplete.btnMouseOver(this)" onmouseout="AutoComplete.btnMouseOut(this)" id="'+this.txtid+'_selectBox">';
	  //如果之前已经加载过，就不创建下拉框
      var selectboxButtonObj;
	  selectboxButtonObj = $(this.txtid + '_selectBox');
	  if (selectboxButtonObj == null || selectboxButtonObj == "undefined"){
      	new Insertion.After(this.txtid, html);
      }

  }
  ,"deferAutoSearch":function() {
      //document.title = "timeout:"+this.timeout;
      this.autoSearch(this.keyword);
      this.timeout = null;
  }
  ,"initPosition":function() {
      var textBox = $(this.txtid);

      var width  = textBox.getWidth();
      var height = textBox.getHeight();

      var position = Position.page(textBox);
      var left = textBox.offsetLeft;
      var top  = textBox.offsetTop;
	  if (top == 0 && textBox.getBoundingClientRect) {
		 top  = textBox.getBoundingClientRect().top + document.documentElement.scrollTop
	  }

      var div = $(this.tableid),
	      iframe = $(this.iframeid);

	  if (!this.autoWidth) {
		  if (this.width == null){
			  div.style.width = width + "px";
		  }
		  else {
			  div.style.width = this.width + "px";
		  }
	  }

      div.style.left = left+"px";
      div.style.top  = (top+height)+"px";
      if(this.top){
    	  div.style.zIndex = 10000;
      }
	  
	  
	  if(iframe != null){
		  if (!this.autoWidth) {
			  if (this.width == null){
				  iframe.style.width = width + "px";
			  }
			  else {
				  iframe.style.width = this.width + "px";
			  }
		  }
		  iframe.style.left = left+"px";
		  iframe.style.top  = (top+height)+"px";  
	  }
  }
  
  /**
   * 初始化下拉框的位置
   */
	,"show":function(html) {
      var tableid = AutoComplete.tableid,
	      iframeid = AutoComplete.iframeid,
          div = $(tableid),
	      iframe;
      if (div == null) {
		  var userAgent = (navigator.userAgent);
		  if (userAgent.indexOf("MSIE 6") > 0) {
			  //修正IE6层遮挡问题
			  iframe = document.createElement('iframe');
			  iframe.style.position = "absolute";
			  iframe.style.width = "0px";
			  iframe.style.height = "0px";
			  iframe.style.zIndex = "1";
			  iframe.style.overflow = "hidden";
			  iframe.id = iframeid;
			  document.body.appendChild(iframe); 
		  }
          div = document.createElement("DIV");
          div.id = tableid;
          div.className = "autocomplete";
          div.innerHTML = '<ul id="'+tableid+'_table" style="cursor:default;"></ul>';
          document.body.appendChild(div); 
          AutoComplete.initPosition();
      }
      $(tableid+"_table").innerHTML = html;
      $(tableid).style.display="block";
	  //每次更新iframe的大小
	  iframe = $(this.iframeid);
	  if(iframe != null){
		  iframe.style.width = div.offsetWidth;
		  iframe.style.height = div.offsetHeight;
		  iframe.style.display="block";
	  }
	}
	,"hide":function() {
		var auto = $(this.tableid),
		     iframe = $(this.iframeid);
		  if (auto != null) {
			  auto.style.display="none";
		  }
		  if (iframe != null) {
			  iframe.style.display="none";
		  }
		  
	}
	,"autoSearchResponse":function(map) {      
      var html = "";
      for (key in map) {
          var value = map[key];
          html += "<li keyword='"+key+"' content='"+value+"' onmouseover='AutoComplete.selectRowByMouse(this)' onclick=\"AutoComplete.submit(this);\"><nobr>&nbsp;"+key+", "+value+"</nobr></li>";
      }
      if (html == "") {
          AutoComplete.hide();
          return;
      }
      else {
          AutoComplete.show(html);
          return;
      }
  }
	,"autoSearch":function(keyword) {
		alert("您还没有实现AutoComplete.autoSearch(keyword)方法.");
	}
  ,"select":function(srcElement) {
	  var obj = $(this.txtid);
	  obj.value = Element.readAttribute(srcElement, "keyword");
	  obj.setAttribute("content",Element.readAttribute(srcElement, "content"));
	  Form.Element.select(obj);
  }

  /**
   * 鼠标选择
   */
  ,"selectRowByMouse":function(srcElement) {
	  //this.select(srcElement);
	  
      //$(this.txtid).value = Element.readAttribute(srcElement, "keyword");

      var nodes = $(this.tableid+"_table").childNodes;

      if (nodes.length <= 0) {
        return;
      }

      

      var selectedIndex = -1;
      for (var i=0;i<nodes.length;i++) {
          nodes[i].className = "";
      }


      //nodes[selectedIndex]
      srcElement.className = "selectedColor";
  }
  ,"selectPrev":function() {
      AutoComplete.selectRow(-1);
  }
  ,"selectNext":function() {
      AutoComplete.selectRow(1);
  }
  ,"selectRow":function(num) {
      var nodes = $(this.tableid+"_table").childNodes;

      if (nodes.length <= 0) {
        return;
      }

      

      var selectedIndex = -1;
      for (var i=0;i<nodes.length;i++) {
        if (nodes[i].className == "selectedColor") {
          selectedIndex = i;
        }
      }

      var newIndex = (selectedIndex + num)%nodes.length;

      if (newIndex<0) {
          newIndex = nodes.length+newIndex;
      }
      if (selectedIndex<0) {
          selectedIndex = 0;
      }

      //document.title = "selectedIndex:"+selectedIndex+","+newIndex;


      nodes[selectedIndex].className = "";
      nodes[newIndex].className = "selectedColor";
      AutoComplete.select(nodes[newIndex]);
      
  }


}
	


var ChangeColor = {
 	"init":function() {
		$(AutoComplete.tableid+"_table").onmouseover=function(aEvent){
			var myEventTarget = window.event ? window.event.srcElement : aEvent.target;
			var oli=ChangeColor.getParentByTagName(myEventTarget,"li");
			oli.className = "selectedColor";
      AutoComplete.select(oli);
		}
		$(AutoComplete.tableid+"_table").onmouseout=function(aEvent){
			var myEventTarget = window.event ? window.event.srcElement : aEvent.target;
			var oli=ChangeColor.getParentByTagName(myEventTarget,"li");
			oli.className = "";
		}
		
		
	}
	,"getParentByTagName":function(o,itag){
		if(o.tagName.toLowerCase=="li") return o;
		while(o.tagName.toLowerCase()!=itag.toLowerCase())
		{
			o=o.parentNode;
		}
		return o
	}

}



