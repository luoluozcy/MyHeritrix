try
{
	document.domain = "qq.com";
}
catch (e)
{
}

var Download = new Object();

//LoadJs
Download.loadJS = function(url)
{
	var script = "<scr"+"ipt type='text/javascript' src='" + url + "'></scr"+"ipt>";
	document.write(script);
};