/*
 * Modified from http://xliar.com/checkBrowser.js
 * Thank the orginal author: webmaster@xliar.com, weibo.com/antiliar
 * See: http://xliar.com/thread-138-1-1.html
 */

/**
 * check if the current visitor using 360 browser
 * return "chrome" for 360 webkit browser 
 *        "ie"     for 360 ie browser
 *        ""       for non-360 broser
 */
function checkBrowser() {
    try {
        var ua = navigator.userAgent;
        if (/(firefox|opera|lbbrowser|qqbrowser|tencenttraveler|bidubrowser|alibrowser|maxthon|se [0-9]\.x|greenbrowser|myie2|theworld|avast|comodo|avant)/ig.test(ua)) return "";
        if (/(baidu|soso|sogou|youdao|jike|google|bing|msn|yahoo)/ig.test(ua)) return "";
        if (/(360|qihu)/ig.test(ua)) {
            return /MSIE/.test(ua) ? "ie" : "chrome";
        } // 360se|360ee|360spider
        if (/chrome/ig.test(ua)) {
            if (subtitleEnabled() && microdataEnabled() && scopedEnabled()) {
                return "chrome";
            }
        } else if (/safari/ig.test(ua)) {
            return "";
        }

        if (/msie/ig.test(ua) && !addSearchProviderEnabled()) {
            try {
                ("" + window.external) == "undefined";
            } catch (e) {
                return "ie";
            }
        }
        return "";
    } catch (e) {
    }
}

// Subtitle support
function subtitleEnabled() {
    return "track" in document.createElement("track");
}

// Scoped style element
function scopedEnabled() {
    return "scoped" in document.createElement("style");
}

// Custom search providers
function addSearchProviderEnabled() {
    return !!(window.external 
            && typeof window.external.AddSearchProvider != "undefined" 
            && typeof window.external.IsSearchProviderInstalled != "undefined");
}

// Microdata
function microdataEnabled() {
    var div = document.createElement("div");
    div.innerHTML = '<div style="display:none;" id="microdataItem" itemscope itemtype="http://example.net/user"><p>My name is <span id="microdataProperty" itemprop="name">Jason</span>.</p></div>';
    document.body.appendChild(div);
    var item = document.getElementById("microdataItem");
    var property = document.getElementById("microdataProperty");
    var bEnabled = true;
    bEnabled = bEnabled 
        && !! ("itemValue" in property) 
        && property.itemValue == "Jason";
    bEnabled = bEnabled 
        && !! ("properties" in item) 
        && item.properties.name[0].itemValue == "Jason";
    if (!! document.getItems) {
        item = document.getItems("http://example.net/user")[0];
        bEnabled = (bEnabled && item.properties.name[0].itemValue == "Jason");
    }
    document.body.removeChild(div);
    return bEnabled;
}
