function $o(v){return document.getElementById(v)}

/*
getDownLoadList用法：
<script language="JavaScript">
	var getMe = new getDownLoadList("getMe","rList2",0);
</script>
*/
function getDownLoadList(objName,idName,show){
	this.idName=idName;
	this.show=show;
	this.temp=show;
	this.dl = $o(this.idName).getElementsByTagName("dl");
	this.dt = $o(this.idName).getElementsByTagName("dt");
	this.ddCount = new Array();
	this.obj = objName; 
	for(var i=0;i<this.dl.length;i++){
		this.dl[i].id = 'Dl'+i;
		this.dt[i].name = i;
		this.dt[i].onclick = function(){eval(objName).ctrlList(this.name);}	
		this.ddLength = $o(this.dl[i].id).getElementsByTagName("dd").length;
		this.ddCount[i] = this.ddLength;
		if(i!=show){	 
			for(var k=0;k<this.ddLength;k++){
				$o(this.dl[i].id).getElementsByTagName("dd")[k].style.display="none";
			} 
		}
		else{
			this.dt[this.show].onclick = function(){eval(objName).hidList(show)} 
		}
	}  
}
getDownLoadList.prototype.ctrlList = function(v){ 
	 var objName = this.obj; 
	 if(this.temp==v){}
	 else{
		this.hidList(this.temp)
		this.temp=v;
	 }
	 for(var i=0;i<this.ddCount[v];i++){
	 	$o(this.dl[v].id).getElementsByTagName("dd")[i].style.display="block";
	 }	 
	 this.temp = v;
	 this.dt[v].onclick = function(){eval(objName).hidList(v)} 	 
}
getDownLoadList.prototype.hidList = function(v){	
	 var objName = this.obj; 
	 for(var i=0;i<this.ddCount[v];i++){
	 	$o(this.dl[v].id).getElementsByTagName("dd")[i].style.display="none";
	 }
	this.dt[v].onclick = function(){eval(objName).ctrlList(this.name);}	
} 

/*
getpage用法：
<script language="JavaScript">
	var MySet = new GetPage("MySet","IdName","p","on","off",0)
</script>
*/
function GetPage(funName,mainID,tagName,onClass,offClass,flag,DisTagID,DisTagName){
	this.funName = funName;
	this.mainID = mainID;
	this.tagName = tagName;
	this.onClass = onClass;
	this.offClass = offClass;
	this.flag = flag;
	this.DisTagID = DisTagID;
	this.DisTagName = DisTagName;
	this.pObj = document.getElementById(mainID).getElementsByTagName(tagName);
	//this.disObj = document.getElementById(DisTagID).getElementsByTagName(DisTagName);
	for(var i=0;i<this.pObj.length;i++){
		this.pObj[i].name=i; 
		this.pObj[i].fun=funName;  
		//this.disObj[i].style.display="none";
		//this.pObj[i].onclick =function(){eval(this.fun).changeNav(this.name)};
	}  
	this.pObj[flag].className=onClass;
	//this.disObj[flag].style.display="block";
}
GetPage.prototype.changeNav = function(v){	
	if(v!=this.flag){
		this.pObj[this.flag].className=this.offClass;
		//this.disObj[this.flag].style.display="none";
		this.pObj[v].className=this.onClass;
		//this.disObj[v].style.display="block";
		this.flag=v;
	}
}


function GetPage2(funName,mainID,tagName,onClass,offClass,flag,DisTagID,DisTagName){
        this.funName = funName;
        this.mainID = mainID;
        this.tagName = tagName;
        this.onClass = onClass;
        this.offClass = offClass;
        this.flag = flag;
        this.DisTagID = DisTagID;
        this.DisTagName = DisTagName;
        this.pObj = document.getElementById(mainID).getElementsByTagName(tagName);
        this.disObj = document.getElementById(DisTagID).getElementsByTagName(DisTagName);
        for(var i=0;i<this.pObj.length;i++){
                this.pObj[i].name=i;
                this.pObj[i].fun=funName;
                this.disObj[i].style.display="none";
                this.pObj[i].onclick =function(){eval(this.fun).changeNav(this.name)};
        } 
        this.pObj[flag].className=onClass;
        this.disObj[flag].style.display="block";
}                
GetPage2.prototype.changeNav = function(v){
        if(v!=this.flag){
                this.pObj[this.flag].className=this.offClass;
                this.disObj[this.flag].style.display="none";
                this.pObj[v].className=this.onClass;
                this.disObj[v].style.display="block";
                this.flag=v;
        }
}

/**/
 

  
function $N(name) {
              var returns = document.getElementsByName(name);
              if(returns.length > 0) return returns;
              returns = new Array();
              var e = document.getElementsByTagName('div');
              var c = document.getElementsByTagName('td');
              for(i = 0; i < e.length; i++) {
                   if(e[i].getAttribute("name") == name) {
                       returns[returns.length] = e[i];
                  }
              }
              for(i = 0; i < c.length; i++) {
                   if(c[i].getAttribute("name") == name) {
                       returns[returns.length] = c[i];
                  }
              }
              return returns;
} 
var speed=1;
var flag=0;
var MyMar=new Array();
var Name=new Array();
var Boxs=new Array();
 
function MarqueeL(n){
	var len = Name['B'].offsetWidth-Boxs[n].scrollLeft; 
	if(len<=0)
		Boxs[n].scrollLeft-=Name['A'].offsetWidth;
	else
		Boxs[n].scrollLeft++;
	//if(len==0)clearInterval(MyMar[n])
}  
function MarqueeR(n){
	var len = Name['B'].offsetWidth-Boxs[n].scrollLeft; 
	if(len>=425)
		Boxs[n].scrollLeft+=Name['A'].offsetWidth;
	else
		Boxs[n].scrollLeft--;
	//if(len==424)clearInterval(MyMar[n])

}
function marJump(v,n){
	if(v)
		return function(){MarqueeR(n)}
	else
		return function(){MarqueeL(n)}
}

function moveThis(way,n){  
	Name=new Array();
	Name['A']=$N('A')[n];
	Name['B']=$N('B')[n];
	Boxs[n]=$N('MyBox')[n];  
	Name['B'].innerHTML	=	Name['A'].innerHTML; 
	if(way=='right'){ 
		flag=1;
		clearInterval(MyMar[n]);
		MyMar[n]=setInterval(marJump(1,n),speed);
		Boxs[n].onmouseover = function(){clearInterval(MyMar[n])} 
	}
	else{ 
		flag=0;
		clearInterval(MyMar[n]);
		MyMar[n]=setInterval(marJump(0,n),speed);
		Boxs[n].onmouseover = function(){clearInterval(MyMar[n])} 
	}	 

}   

/*完善软件*/
var introFlag=true;
function writeIntro(){
	viewFlag=true;
	$o('EditList').style.display='none';
	if(introFlag){
		$o('Intro').style.display='block';
		introFlag=false;
	}
	else{
		$o('Intro').style.display='none';
		introFlag=true;		
	}
}

var viewFlag=true;
function viewIntro(){
	introFlag=true;
	$o('Intro').style.display='none';
	
	if(viewFlag){
		$o('EditList').style.display='block';
		viewFlag=false;
	}
	else{
		$o('EditList').style.display='none';
		viewFlag=true;		
	}
}
