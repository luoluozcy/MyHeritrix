(function(c,e,g){var a={pageInfo:'第<strong class="c_FD3400">{currentPage}</strong>页共<strong class="c_FD3400">{totalPage}</strong>页   总<strong class="c_FD3400">{maxRecordNum}</strong>条&#12288;',prevPage:'<a href="#prev">上一页</a> ',itemPage:'<a href="#{0}">{0}</a> ',itemActive:"<span>{0}</span> ",pageSplit:"<em>...</em> ",nextPage:'<a href="#next">下一页</a>'},b={pageInfo:"",prevPage:'<a href="#prev" class="prevPage">上一页<i></i></a> ',noPrevPage:'<span href="#prev" class="prevPage">上一页<i></i></span> ',itemPage:'<a href="#{0}">{0}</a> ',itemActive:"<span>{0}</span> ",pageSplit:"<em>...</em> ",nextPage:'<a href="#next" class="nextPage">下一页<i></i></a>',noNextPage:'<span href="#next" class="nextPage">下一页<i></i></span>',jumpInfo:'<span class="jumptoTip">到第</span><input type="text" value="{currentPage}" class="jumptoTxt jumpToPageNum">页<a href="#go" class="jumptoBtn">确定</a>'},d=false,h=function(o,l,p){var k=[],n=o,m=0;for(;n<=l;n++){k[m++]=e.format(a[n==p?"itemActive":"itemPage"],n)}return k.join("")},f=function(n,k,l,i){var j=[a.pageInfo+(l>1?a.prevPage:d?a.noPrevPage:"")],m=i*2+2;if(k<=m+1){j[1]=h(1,k,l)}else{if(l<i+3){j[1]=h(1,m,l);j[2]=a.pageSplit;j[3]=h(k,k,l)}else{if(l>k-i-2){j[1]=h(1,1,l);j[2]=a.pageSplit;j[3]=h(k-m+1,k,l)}else{j[1]=h(1,1,l);j[2]=a.pageSplit;j[3]=h(l-i,l+i,l);j[4]=a.pageSplit;j[5]=h(k,k,l)}}}j.push(l<k?a.nextPage:d?a.noNextPage:"");j.push(a.jumpInfo);return e.format(j.join(""),{maxRecordNum:n,currentPage:l,totalPage:k})};Core.paging=function(j,s,p,n,r,q,o){if(o){d=o;a=b}var k=r||3,m=parseInt(s/p)+(s%p?1:0),l=e(j).html(f(s,m,n,k)),i=function(t){if(q(t)===false){return}n=t;l.html(f(s,m,n,k))};if(!l[0].initPaging){l[0].initPaging=true;Core.loadCdnJS("js2/liveCheck.js",function(){return !!e.fn.bindNumberLiveCheck2},function(){j.bindNumberLiveCheck2(".jumpToPageNum",function(){if(this.value>m){this.value=m}})});l.delegate("a","click",function(x){var v=this.hash.substr(1);switch(v){case"go":var u=e(".jumpToPageNum",j),t=u.val().trim(),w;if(/^\d+$/.test(t)){w=parseInt(t,10);if(w!=n&&w<=m){i(w)}}u.select();break;case"prev":i(n-1);break;case"next":i(n+1);break;default:if(/^\d+$/.test(v)){i(+v)}}x.preventDefault()})}}})(window,jQuery);