/**
 * @example
 * http://v.163.com/zixun/V8GAM8GTF/V8VLPV5VC.html
 * sid=V8GAM8GTF   vid=V8VLPV5VC
 * 
 */
;
// want sid vid corverid
var playFlash = function(id, options){
    var UA = navigator.userAgent,
        is360 = UA.toLowerCase().indexOf('msie') > -1 ? true : false,
        dom = typeof id === 'string' ? document.getElementById(id): id,
        defaults = {
            width: "640",
            height: "480",
            bgcolor: "#000000",
            topicid: "0085",
            coverpic: "http://61.ph.126.net/fab/shipin.jpg",
            autoplay: true
        }
    function extend(o1, o2, override){
        for(var i in o2) if(o1[i] === undefined || override){
            o1[i] = o2[i]
        }
    }
    function tpl(str, data){
        return str.replace(/\{\{(\w+)}}/g,function(all, name){
            if(data[name] === undefined) return '';
            return String(data[name]);
        })
    }
    var str1 = '<object  classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"  width="{{width}}" height="{{height}}" id="FPlayer" ><param value="{{bgcolor}}" name="bgcolor"><param value="true" name="allowFullScreen"><param value="always" name="allowscriptaccess"><param name="allownetworking" value="all" /><param name="wmode" value="opaque"><param value="http://v.163.com/swf/video/NetEaseFlvPlayerV3.swf" name="movie"><param value="pltype=6&topicid={{topicid}}&sid={{sid}}&vid={{vid}}&coverpic={{coverpic}}&hiddenR=true&iplimit=0&autoplay={{autoplay}}"  name="flashvars"></object>';
    var str2 = '<object width="{{width}}" height="{{height}}" id="FPlayer" data="http://v.163.com/swf/video/NetEaseFlvPlayerV3.swf" type="application/x-shockwave-flash"><param value="{{bgcolor}}" name="bgcolor"><param value="true" name="allowFullScreen"><param value="always" name="allowscriptaccess"><param name="wmode" value="opaque"><param name="allownetworking" value="all" /><param value="pltype=6&topicid={{topicid}}&sid={{sid}}&vid={{vid}}&coverpic={{coverpic}}&&hiddenR=true&iplimit=0&autoplay={{autoplay}}"  name="flashvars"></object>';
    var str3 = '<Video width="680" height="400" controls="controls" autoplay="autoplay" preload="auto" x-webkit-airplay="allow"><source src="http://flv.bn.netease.com/videolib3/1305/29/xywOf5320/SD/xywOf5320-mobile.mp4" type="video/mp4"> 您的浏览器暂时无法播放此视频.</video>';
    var html = '';
    if (/(iPhone|iPad|iPod)/ig.test(navigator.userAgent)) {
        html = str3;
    } else {
        extend(options, defaults);
        html = is360? tpl(str1, options): tpl(str2, options);
    }
   
    dom.innerHTML = html;
}

;(function(global, undefined){
    'use strict';


    //Video Controller
    global.LayerCtrl = function($scope, $element, $rootScope){
        $scope.close = function(){
            $rootScope.show=false;
            $('#video').html('');
        }
        $scope.$on('popvideo', function(){
            $rootScope.show = true;
            $scope.play("V82FPTKK4", "V8V4GE3TM");
        })
        $scope.play = function(sid, vid){
            playFlash('video',{
                sid:sid, 
                vid:vid,
                width: '680px',
                height: '390px'
            })
        }
    }

    global.SlideCtrl = function($scope){
        var width = 405;// each slide width
        $scope.imgs = [
            "/webroot-resource/images/1-c.png",
            "/webroot-resource/images/2-c.png",
            "/webroot-resource/images/3-c.png",
            "/webroot-resource/images/3-c.png"
        ]
        $scope.index = 0;
        $scope.computeLeft =function(){
            return $scope.index * 405;
        } 
        $scope.$switch = function($index){
            console.log($index)
        }
    }

    global.VideoCtrl = function($scope, vlist){
        // var player = videojs('video-1');
        // $scope.vlist = vlist;
        // $scope.$on('layer:close', function(){
        //     player.pause();
        //     console.log('停止')
        // })
        // $scope.play = function($index){
        //     player.pause();
        //     player.src(vlist[$index].src);
        //     player.play();
        // }
        // // $scope.play(0)
    }
    /* Services */
    angular.module('elearn.service',[]).factory('test', function(){
        // return videojs()
    }).factory('vlist', function(){
    }).directive()






    // 3. main
    // ===============================
    angular.module('elearn', ['elearn.service']).
        config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
            // $routeProvider.when('/edit/:id', {templateUrl: 'partials/edit.html'});
            // $routeProvider.when('/new', {templateUrl: 'partials/edit.html'});
            // $routeProvider.when('/', {templateUrl: 'partials/posts.html', controller: 'PostsController'});
            // $routeProvider.when('/posts/:id', {templateUrl: 'partials/post.html', controller: 'PostController'});
            // $routeProvider.when('/user/detail', {templateUrl: 'partials/user_detail.html', controller: 'UserController'});
            // $routeProvider.when('/oh404', {templateUrl: 'partials/404.html', controller: 'Oh404Controller'});
            // $routeProvider.otherwise({redirectTo: '/404'});

            // $locationProvider.html5Mode(true);
            // $locationProvider.hashPrefix = '!';
        }]).run(['$rootScope', function($rootScope){
            $rootScope.title = 'nep前端博客';
            $rootScope.popVideo = function(){
                $rootScope.$broadcast('popvideo');
            }
            $rootScope.hover = function(value){
                $rootScope.isHover = value;
            }
        }])

})(window, undefined)