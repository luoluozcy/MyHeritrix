;(function(global, undefined){

    function getImg(index){
        return "/main/img/slide/download_img_"+index+ '.jpg';
    }
    function getSlogan(index){
        return "/main/img/slogan_" + index + '.png';
    }
    //BlackBoard Controller
    global.BBCtrl = function($scope, $timeout, $location){
        var data = {
            iphone:[
                {
                    slogan: getSlogan(1),
                    img: getImg(1)
                },
                {
                    slogan: getSlogan(2),
                    img: getImg(2)
                },
                {
                    slogan: getSlogan(3),
                    img: getImg(3)
                },
                {
                    slogan: getSlogan(4),
                    img: getImg(4)
                },
                {
                    slogan: getSlogan(5),
                    img: getImg(5)
                },
                {
                    slogan: getSlogan(6),
                    img: getImg(6)
                },
            ],
            ipad: [
                {
                    slogan: getSlogan(1),
                    img: getImg('1i')
                },
                {
                    slogan: getSlogan(3),
                    img: getImg('2i')
                },
                {
                    slogan: getSlogan(4),
                    img: getImg('3i')
                },
                {
                    slogan: getSlogan(5),
                    img: getImg('4i')
                },
                {
                    slogan: getSlogan(7),
                    img: getImg('5i')
                },
                {
                    slogan: getSlogan(6),
                    img: getImg('6i')
                }

            ]
        }
        var links = {
            iphone:'http://itunes.apple.com/cn/app/wang-yi-shi-ziiphone-ban/id598882210?mt=8', 
            ipad:'https://itunes.apple.com/cn/app/wang-yi-shi-zi-han-zi-nei/id638623334?ls=1&mt=8'
        }

        $scope.mode = $location.path()==='/ipad'? 'ipad' : 'iphone';

        $scope.data = data[$scope.mode];
        $scope.onSwitch = function(scope, type){
            $scope.mode = type;
            $scope.data = data[type];
            $scope.index = 0;
        }
        $scope.$on('switch',$scope.onSwitch)
        $scope.index = 0;

        $scope.link = function(){
            return links[$scope.mode];
        }
        $scope.$watch('index', function(){
            $scope.img = $scope.data[$scope.index].img;
            $scope.slogan = $scope.data[$scope.index].slogan;
        })
        $scope.$watch('data', function(){
            $scope.img = $scope.data[$scope.index].img;
            $scope.slogan = $scope.data[$scope.index].slogan;
        })
        // $scope.img = function(){
        //     return $scope.data[$scope.index].img;
        // }
        // $scope.slogan = function(){
        //     return $scope.data[$scope.index].slogan;
        // }
        $scope.show = function(index){
            $scope.index = index;
        }
        var navNext = function(){
            var index = $scope.index + 1;
            if(index > 5) index = 0;
            $scope.index = index;
            $timeout(navNext, 4000);
        }
        $timeout(navNext, 4000)
    }






    // 3. main
    // ===============================
    angular.module('elearn',[]).
        config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
          
        }]).run(['$rootScope', function($rootScope){
            $rootScope.$switch = function hello(type){
                $rootScope.$broadcast('switch', type)
            }
        }])

})(window, undefined)