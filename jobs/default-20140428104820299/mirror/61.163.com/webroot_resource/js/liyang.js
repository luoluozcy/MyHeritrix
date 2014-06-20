            var flag = false;

            $(document).ready(function(){
                $("#hide-btn").click(function(){
                    $("#notice-div").hide();
                });
            });
            // window.onload = function(){
            //     start_Int();
            // };
            
            function start_Int(){
                if (intval == "") {
                    intval = window.setInterval("mainslider()", 10000)
                }
                else {
                    stop_Int();
                }
            }
            
            function stop_Int(){
                if (intval != "") {
                    window.clearInterval(intval)
                    intval = "";
                }
            }
            
            function bannerover(obj, changeSrc){
                var img = obj.src;
                obj.src = changeSrc;
            }
            
            var intval = '';
            var currentMainImage = 1;
            var mainImageCnt = 3;
            function mainImg(num){
                if (currentMainImage == num) 
                    return;
                
                stop_Int();
                
                $("#spot_image" + num).css({
                    opacity: 0.0
                }).addClass('mainshow').stop().animate({
                    opacity: 1.0
                }, 1000);
                $("#spot_image" + currentMainImage).stop().animate({
                    opacity: 0.0
                }, 1000).removeClass('mainshow');
                $("#main_image" + num).addClass("on");
                $("#main_image" + currentMainImage).removeClass("on");
                currentMainImage = num;
                
                start_Int();
            }
            
            function mainslider(){
                if (currentMainImage + 1 > mainImageCnt) 
                    mainImg(1);
                else 
                    mainImg(currentMainImage + 1);
            }
