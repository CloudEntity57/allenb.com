var $toprow = $('#top-row');

$(window).resize(function(){
    $toprow.css("position","static");
});


//===============Top bar removal when scrolling==================



$topbar = $("#top-row");
$topBarUp = function(){
        $topbar.slideUp(600);
};
$topBarDown = function(){
        $topbar.slideDown(0);
    };


$newPos = 0;

$(window).scroll(function(){
        $pos = $(window).scrollTop();
        if ($pos > $newPos){
            $topBarUp();
        }else{
            $topBarDown();
        };
        $newPos = $pos;
    });



/// Carousel Code =========================================
var inner_item = $(".carousel-inner .item"); 

var photoList = [
    
            "2016-01-Life-of-Pix-free-stock-photos-architecture-details-city-MacNicolae2.jpg",
            "harris01.jpg",
            "old_1910_courthouse.jpg",
            "Harris-County-Courthouse-inside-view-of-glass-stained-dome-looking-up.jpg",
            "bexar.jpg",
            "AB%20office%20side%20view2.jpg"
            
        ];

        var firstItem = $("#ho");
        var firstInsertion = "<div class='item'><div class='thePhoto' style='background:url("+photoList[0]+") no-repeat;background-size:cover;background-position:center'></div></div>";
        $(firstItem).append(firstInsertion);
    
      for(i=1; i<photoList.length; i+=1){ 
      var yoyo = "<div class='item'><div class='thePhoto' style='background:url("+photoList[i]+") no-repeat;background-size:cover;background-position:center''></div></div>";
      var gogo = $(".carousel-inner");
          $(gogo).append(yoyo);
      };
    
         for(i=1; i<photoList.length; i+=1){
         var carouselIndicators = $(".carousel-indicators");
         var $newButton = "<li data-target='#coolCarousel' data-slide-to='"+i+"'></li>";
         $(carouselIndicators).append($newButton);
    };

//--------------------Houston, TX Table of Contents Hider------------

            var contents1 = $("#contents a");
            var tableOfCont = $("#houstonList li");
            
            $(contents1).click(function(event){
                if ($(contents1).html()===("hide")){
                event.preventDefault();
                $(tableOfCont).hide("fast");
                $(contents1).html("show");
                }else if ($(contents1).html()===("show")){
                        event.preventDefault();
                        $(tableOfCont).show("fast");
                        $(contents1).html("hide");
                
                                          };
            });
            

//=================================================================

var links = $(".nav-bar div");
        $(links).hover(function(){
            
            $(this).find("ul").css("display","block");
        },
                             function(){
             $(this).find("ul").css("display","none");
        });



///--------IMAGE LIGHTBOX---------

        var $overlay = $('<div id="overlay">');
        
        $('body').append($overlay);
        var $xbutton = $('<button id="x-button">x</button></div>');
        function $photoShow (event){
            event.preventDefault();
            var href = $(this).attr("href");
            var $picimage = $('<img id="picbox" src="' +href+'">');
            $overlay.append($xbutton);
            $overlay.append($picimage);
            $overlay.show();
            $overlay.addClass("showing");
        }
        $('.row.properties a').click($photoShow);
        $('.row.properties a').click($titleHide);

        $('.picture-box2 a').click($photoShow);
        $('.picture-box2 a').click($titleHide);

        //$('.litebox a').click($photoShow);
        $('.image-box a').click($photoShow);
        $('.image-box a').click($titleHide);

        function $picRemove(){
            $('#picbox').remove();
            $('#top-row').show();
        }

        function $titleHide(){
            $('#top-row').hide();
        }
        function $hideOverlay(){
            $($overlay).css("display","none");
            $overlay.removeClass("showing");
            $picRemove();
        }
        if($toprow.hasClass("seen")){
                $($overlay).click(function(){
                    $hideOverlay();
                    $toprow.removeClass("seen");
                });
                $($xbutton).click(function(){
                    $hideOverlay();
                    $toprow.removeClass("seen");
                });
           }else{
                $($overlay).click(function(){
                    $hideOverlay();
                });
                $($xbutton).click(function(){
                    $hideOverlay();
                });
};
                          


//=================COMMERCIAL PROPERTIES PANEL HOVER=========================

/*
var comprop = $('.row.properties');



$(comprop).mouseenter(function(){
    $(this).addClass("row properties panel panel-default");
});
$(comprop).mouseleave(function(){
    $(this).removeClass("panel panel-default");
});

*/



//--------TITLE ROW SCROLL------------------


        

        /*function $photoChanger(titlePic,photoList){
            for(i = 0; i < photoList.length; i+=1){
                //console.log("picture:"+photoList[i]);
                
                    var header = $('#title-row2');
                
                $(header).click(function(){
                    
                    var picNum = jQuery.inArray(titlePic);
                    console.log(picNum);
                    $(titlePic).css("background",photoList[picNum+1]);
                    console.log(picNum);
                });
            }
        }

        $photoChanger(titlePic,photoList);*/

        var titlePic = $('#title-row2').css("background");
        
        
        var photoList = [
            "url(AB%20office%20side%20view.jpg)",
            "url(Richmond photo.jpg)",
            "url(West%20Main%20pool.JPG)",
            "url(inwoodpool3.jpg)",
            "url(GetAttachment.jpg)"
        ];
        
        var photoList2 = [
            "'GetAttachment.jpg'",
            "'AB%20office%20side%20view.jpg'",
            "'Ridhmond photo.jpg'",
            "'West%20Main%20pool.JPG'",
            "'inwoodpool3.jpg'",
            "'Takara%20So%20Elevation.jpg'"
        ];

        

 /*       

        header.click(function(){
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $currentPic = $('#featurePic');
            $($currentPic).remove();
            
            function addPhoto(){
            $('#feature-contain').append($featurePic);
        }
            $($featurePic).remove();
            header.css("background","none");
            /*$('#feature-pic').append($featurePic);*/
/*            addPhoto();
            console.log($featurePic);
            i += 1;
                if (i == photoList2.length){
                    i = 0;
                };
            
        });

*/

       // header.click(function(){

        var header = $('.title-row');    

        var i = 0;

        var listEnd = photoList2.length-1
        
        var $photos = $('#feature-contain');

        var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[0]+'"  </div>');
                
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[1]+'"  </div>');

            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            

//-----------------------------------------------------RIGHT ARROW CLICK-----------------------
        
        var $leftarrow = $('#left-arrow');
        var $rightarrow = $('#right-arrow');

        function $scrollclick(){
            
            $('.hook').removeClass('title-row');
            $('.hook').addClass('title-row3');
            
            i += 1;
                if (i == photoList2.length){
                    i = 0;
                };
            //--------------------------------------IF I IS ZERO--------------------
            if (i == 0){
                
                var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
                
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[i+1]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
           
            
              
                //--------------------------------------IF I IS END OF ARRAY------------
                
            }else if (i == listEnd){
                
                var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd - 1]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[0]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
           
            
            
                //--------------------------------------IF I IS IN THE MIDDLE OF ARRAY----
                
            }else{
                
            var $lastPic = ('<div id="lastPic"><img src="'+photoList2[i-1]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[i+1]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
            //----------
            
            
            
            //-----------
            
            
            }
            
            //-----------
            function addPhoto(){
            
            $($photos).append($lastPic);
            $($photos).append($featurePic);
            $($photos).append($nextPic);
                
            
        }
            $($featurePic).remove();
            //header.css("background","none");
            $('#top-row').css("background-color","rgba(0,0,0,0)");
            /*$('#feature-pic').append($featurePic);*/
            addPhoto();
           // $('.nav-bar').css("margin-top","15em");
            
            $($lastPic).fadeIn("slow");
            
            
        }

        $rightarrow.click($scrollclick);
        $('#scroll').click($scrollclick);

//-----------------------------------------------------LEFT ARROW CLICK-----------------------

        $leftarrow.click(function(){
            
            $('.hook').removeClass('title-row');
            $('.hook').addClass('title-row3');
            
            i -= 1;
            if (i == -1){
                    i = listEnd;
            };
            //--------------------------------------IF I IS ZERO--------------------
            if (i == 0){
                
                var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[i+1]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
            //----------
            
            
            
            //-----------
            
                //--------------------------------------IF I IS LENGTH OF ARRAY------------
            }else if (i == listEnd){
                
                var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd - 1]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[0]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
            //----------
            
            
            
            //-----------
            
            
                //--------------------------------------IF I IS IN THE MIDDLE OF ARRAY------------
                
            }else{
                
            var $lastPic = ('<div id="lastPic"><img src="'+photoList2[i-1]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[i+1]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
            //----------
            
            
            
            //-----------
            
            
            }
            
            //-----------
            function addPhoto(){
            $($photos).append($lastPic);
            $($photos).append($featurePic);
            $($photos).append($nextPic);
                
        }
            $($featurePic).remove();
          //  header.css("background","none");
            $('#top-row').css("background-color","rgba(0,0,0,0)");
            
            addPhoto();     
            //$('body').off('click','.hook',morpher);
        });

            function classChange(){
                console.log("classChange");
                $('.hook').removeClass('title-row3');
                $('.hook').addClass('title-row');
                $('#top-row').css("background-color","rgba(0,0,0,.3)")
                   
                    
                }
            function morpher(){
                console.log("morpher");
                backgroundPhotos.style.display = "flex";
                $('.hook').one('click',classChange); 
                
            }
            function firstClick(){
                backgroundPhotos.style.display = "flex";
            $('.hook').removeClass('title-row');
                $('.hook').addClass('title-row3');
                $('#top-row').css("background-color","rgba(0,0,0,0)");
                morpher();
            }   

            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();

            $($photos).append($lastPic);
            $($photos).append($featurePic);
            $($photos).append($nextPic);

           $($leftarrow).on('click',morpher);
           $($rightarrow).on('click',morpher);
            
            if($('.hook').attr('class')=='title-row hook'){
                console.log('title-row hook');
            $('.hook').click(firstClick);
            $('#arrow-container').click(firstClick);
            };


 