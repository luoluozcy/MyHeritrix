var _ntshare = window._ntshare || {};
(function(){
    var WIN = window,
        DOC = document,
        LOCATION = DOC.location;
        URL = LOCATION.protocol + '//' + LOCATION.host + LOCATION.pathname,
        SITES_URL = {
            // http://open.weibo.com/sharebutton
            SINA: 'http://service.weibo.com/share/share.php?',
            // http://dev.renren.com/website/?widget=rrshare&content=use
            RENREN: 'http://widget.renren.com/dialog/share?',
            // http://connect.qq.com/intro/share/
            QZONE: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'
        },
        SITES_PARAM = {
            SINA: {
                url : URL + '#sns_weibo',
                appkey: '', /**�������Ӧ��appkey,��ʾ������Դ(��ѡ)*/
                title: '', /**�������������(��ѡ��Ĭ��Ϊ����ҳ���title)*/
                pic: '', /**����ͼƬ��·��(��ѡ)*/
                language: 'zh_cn' /**�������ԣ�zh_cn|zh_tw(��ѡ)*/
                //ralateUid: '' /**�����û���UID������΢����@���û�(��ѡ)*/
            },
            RENREN: {
                resourceUrl : URL + '#sns_renren',	//�������ԴUrl
                pic : '',		//���������ͼƬUrl
                title : '',		//����ı���
                description : ''	//�������ϸ����
            },
            QZONE: {
                url : URL + '#sns_qzone',
                desc : '',/*Ĭ�Ϸ�������(��ѡ)*/
                summary : '',/*����ժҪ(��ѡ)*/
                title : '',/*�������(��ѡ)*/
                site : '�����Ż�',/*������Դ �磺��Ѷ��(��ѡ)*/
                pics : ''/*����ͼƬ��·��(��ѡ)*/
            }
        },
        SHARE_TPL = '<a class="ntshare-sina" title="��������΢��"></a><a class="ntshare-renren" title="����������"></a><a class="ntshare-qzone" title="����QQ�ռ�"></a>';

    function serializeParam(paramObj){
        var aParam = [];
        for(var item in paramObj){
            if(paramObj.hasOwnProperty(item)){
                aParam.push(item + '=' + encodeURIComponent(paramObj[item] || ''));
            }
        }
        return aParam.join('&');
    }
    function bindEvent(elm, evt, handle){
        elm.addEventListener ? elm.addEventListener(evt, handle, false) : elm.attachEvent('on' + evt, handle);
    }
    function mix(source, target){
        for(var item in source){
            if(source.hasOwnProperty(item) && target[item] !== undefined){
                target[item] = source[item];
            }
        }
    }
    function getElem(tag, className){
        if(DOC.querySelectorAll){
            return DOC.querySelectorAll(tag + '.' + className);
        }else{
            var tagElems = DOC.getElementsByTagName(tag),
                returnArray = [],
                classReg = new RegExp(className);

            for(var i=0;i<tagElems.length;i++){
                if(tagElems[i].className.search(classReg) != -1){
                    returnArray.push(tagElems[i]);
                }
            }
            return returnArray;
        }
    }
    function getFirstPic(){
        var container = DOC.getElementById('endText') || DOC.getElementById('photoView') || getElem('div', 'top-head')[0],
            imgNodes = container && container.getElementsByTagName('img');
        if(imgNodes && imgNodes.length && imgNodes[0].className!='icon'){
            return imgNodes[0].src;
        }else{
            return '';
        }
    }
    function strlen(str){
        return str.replace(/[^\x00-\xff]/g, 'aa').length;
    }
    function subSummary(summary, len){
        return (summary.length > len ? summary.substring(0, len) + '...' : summary);
    }
    function filterHtml(str){
        var container = DOC.createElement('div'),
            filteredStr;
        container.innerHTML = str;
        filteredStr = container.innerText || container.textContent;
        container = null;
        return filteredStr;
    }
    if(!_ntshare.fn){
        _ntshare.fn = {};
        _ntshare.fn.isInit = false;
        _ntshare.fn.init = function(param){
            var param = param || {},
                shareWraps = getElem('div', 'ntshare-wrap'),
                clickTarget, clickSymbol, firstPic;
            //alert(shareWraps.length);
            for(var i=0;i<shareWraps.length;i++){
                shareWraps[i].innerHTML = SHARE_TPL;
                bindEvent(shareWraps[i], 'click', function(e){
                    e = e || WIN.event;
                    clickTarget = e.target || e.srcElement;
                    if(clickTarget.nodeName == 'A'){
                        firstPic = getFirstPic();
                        clickSymbol = clickTarget.className.substring(8).toUpperCase();
                        mix({
                            pic: firstPic,
                            pics: firstPic
                        }, SITES_PARAM[clickSymbol]);
                        mix(param, SITES_PARAM[clickSymbol]);
                        if(clickSymbol == 'SINA' && param['summary']){
                            SITES_PARAM[clickSymbol]['title'] = '��' + SITES_PARAM[clickSymbol]['title'] + '��' + subSummary(param['summary'], 90);
                        }
                        WIN.open(SITES_URL[clickSymbol] + serializeParam(SITES_PARAM[clickSymbol]), 'ntshare');
                    }
                });
            }
            _ntshare.fn.isInit = true;
        }
    }
})();