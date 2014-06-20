var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-32074969-1']);
_gaq.push(['_setDomainName', 'huihui.cn']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$("a").live("click", function() {
    var h = $(this).attr("href");
    if (!h || !window._gaq) {
        return;
    }
    if (h.indexOf(location.host) === 7 || h.indexOf(location.host) === 8 || h.indexOf("http") != 0) {
        _gaq.push(["_trackEvent", "Self", "Click", h])
    } else {
        _gaq.push(["_trackEvent", "Others", "Click", h])
    }
});