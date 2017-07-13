$(function(){
  allHide();
  setTimeout(function(){
    $(".loading").fadeOut();
    $("#box1").fadeIn();
    $(".spinner2").fadeIn();
    $(".all-nav").animate({
      width:"80%"
    },500,function(){
      page1show();
    });
  },1500)
  var boxH=$(window).height();
  var boxIndex=3;
  var changeIndex=0;
  $("body").on("mousewheel",function(event){
    var uOd=event.originalEvent.wheelDelta;
      if(uOd<0){
        if(boxIndex==4){
          boxIndex=3;
        };
        if(boxIndex==0){
          boxIndex=1;
        }
        $("body>div").eq(boxIndex).animate({
          top:-boxH
        },500,function(){
          if(boxIndex>0){
            boxIndex--;
          }
          witchPage(boxIndex);
        });
      }else{
        $("body>div").eq(boxIndex+1).animate({
          top:0
        },500,function(){
          if(boxIndex<3){
            boxIndex++;
          }
          witchPage(boxIndex);
        });
      }
  })
  $("#main-btn>ul>li").on("click",function(){
    switch($(this).index()){
      case 0:
          if(boxIndex==3){

          }
          $("body>div").eq(3).animate({
            top:0
          },500,function(){
            allHide();
            page1show();
            boxIndex=3;
            $("body>div").eq(2).css({
              top:0
            });
            $("body>div").eq(1).css({
              top:0
            });
          });
          allHide();
          break;
      case 1:
          if(boxIndex==3){
            $("body>div").eq(3).animate({
              top:-boxH
            },500,function(){
              boxIndex=2;
              allHide();
              page2show();
            });
          }else{
            $("body>div").eq(2).animate({
              top:0
            },500,function(){
              boxIndex=2;
              $("body>div").eq(1).css({
                top:0
              });
              $("body>div").eq(0).css({
                top:0
              });
              allHide();
              page2show();
            });
          }
          break;
      case 2:
          if(boxIndex>1){
            $("body>div").eq(3).animate({
              top:-boxH
            },500);
            $("body>div").eq(2).animate({
              top:-boxH
            },500,function(){
              boxIndex=1;
              allHide();
              page3show();
            });
            
          }else{
            $("body>div").eq(1).animate({
              top:0
            },500,function(){
              boxIndex=1;
              allHide();
              page3show();
            });
            
          }
          break;
      case 3:
          $("body>div").eq(1).animate({
              top:-boxH
            },500);
          $("body>div").eq(2).animate({
              top:-boxH
            },500);
          $("body>div").eq(3).animate({
              top:-boxH
            },500);
          boxIndex=0;
          allHide();
          page4show();
    }
  });
  function page1show(){
    setTimeout(function(){
      $(".content1-titl>p").fadeIn(500);
    }, 0);
    $(".content1-titl>p").animate({
        fontSize: "100px"
    },100,function(){
      setTimeout(function(){
        $(".content1-center>p").fadeIn(1500);
      }, 0);
      setTimeout(function(){
        $(".content1-bottom>p").fadeIn(1500);
      }, 300);
    });
  };
  function page2show(){
    setTimeout(function(){
      $(".content2-titl").fadeIn(1500);
    }, 0);
    setTimeout(function(){
      $(".content2-center").fadeIn(1500);
    }, 300);
    setTimeout(function(){
      $(".content2-bottom").fadeIn(1500);
    }, 600);
  };
  function allHide(){
    //--------page1---------
    $(".content1-titl>p").fadeOut();
    $(".content1-center>p").fadeOut();
    $(".content1-bottom>p").fadeOut();
    // ------page2----------
    $(".content2-titl").fadeOut();
    $(".content2-center").fadeOut();
    $(".content2-bottom").fadeOut();
    // ---------page3-----------
    $(".content3-img").fadeOut();
    $(".content3-txt").fadeOut();
    // -------------page4---------
    $(".content4-titl").fadeOut();
    $(".content4-center").fadeOut();
  };
  function page3show(){
    setTimeout(function(){
      $(".content3-img").fadeIn(1500);
    }, 0);
    setTimeout(function(){
      $(".content3-txt").fadeIn(1500);
    }, 300);
  };
  function page4show(){
    setTimeout(function(){
      $(".content4-titl").fadeIn(1500);
    }, 300);
    setTimeout(function(){
      $(".content4-center").fadeIn(1500);
    }, 600);
  };
  function witchPage(boxIndex){
    allHide();
    switch(boxIndex){
      case 0:
        allHide();
        page4show();
        break;
      case 1:
        allHide();
        page3show();
        break;
      case 2:
        allHide();
        page2show();
        break;
      case 3:
        allHide();
        page1show();
    }
  }
})