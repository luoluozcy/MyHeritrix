var selectIds = "";
var count = 0;
var allSelected = false;

//复选按钮，批量选择要删除的消息
function checkClicked(id) {
	//if(!IsNumeric(id)) return false;
	if(id != "chkall"){
	    var checkBox = window.document.getElementById(id);
    	if(checkBox.rel == "notchk") return false;
	    if (checkBox.checked == true) {
	    	selectIds = selectIds + " " + id;
	        count++;
	    } else {
	    	selectIds = selectIds.replace(" " + id, "");
	        count--;
	    }
	}
}
function SelectAll() 
{
    var chkarry = $("input[type='checkbox']");
    msgIds = "";
    count = 0;
    allSelected = !allSelected;
    chkarry.each(function() {
    	if($(this).attr("rel") != "notchk") {
	        $(this).attr("checked", allSelected);
	        if(allSelected) 
	        	checkClicked($(this).attr("id"));
    	}
    });
    if(!allSelected){
    	selectIds = "";
    	count = 0;
    }
}
function htmlencode(str) {
	 str = str.replace(/&/g, '&amp;');
	 str = str.replace(/</g, '&lt;');
	 str = str.replace(/  /g, '&nbsp; ');
	 str = str.replace(/x22/g, '&quot;');
	 str = str.replace(/x27/g, '&#39;');
	 return str;
}