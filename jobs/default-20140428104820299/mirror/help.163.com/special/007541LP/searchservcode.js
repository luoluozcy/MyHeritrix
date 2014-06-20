//搜索旧的580服务口令
function search_old580(serCode, para, localSearchFuc) {
    if (Math.abs(serCode.substr(2,1)-5)-3==0) {
        code=serCode.substr(0,2)/1;
        go_link=linkTable1[code];
    }else{
        code=serCode;
        go_link=linkTable2[code];
    }
    if(typeof(go_link)=='string') {
        //go_link+="?servCode="+serCode;
        window.open(go_link);
        return false;
    }else{
        return localSearchFuc(para);
    }
}
function search_servCode(servCode, para, localSearchFuc) {
         if( /^601\d{4}$/.test(servCode) ) { go_link = linkTable_163[servCode]; }
    else if( /^602\d{4}$/.test(servCode) ) { go_link = linkTable_126[servCode]; }
    else if( /^603\d{4}$/.test(servCode) ) { go_link = linkTable_yeah[servCode]; }
    else if( /^604\d{4}$/.test(servCode) ) { go_link = linkTable_vip163[servCode]; }
    else if( /^605\d{4}$/.test(servCode) ) { go_link = linkTable_vip126[servCode]; }
    else if( /^606\d{4}$/.test(servCode) ) { go_link = linkTable_188[servCode]; }
    else if( /^607\d{4}$/.test(servCode) ) { go_link = linkTable_urs[servCode]; }
    else if( /^609\d{4}$/.test(servCode) ) { go_link = linkTable_fax[servCode]; }
    else { return localSearchFuc(para); }
    if(typeof(go_link) == 'string') {
        window.open(go_link+"?servCode="+servCode);
        return false;
    }else{
        //如果不是服务口令，就让它按原来的方法搜索
        return localSearchFuc(para);
    }
}