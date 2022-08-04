console.log("test");

// 메뉴
        $(".bg").slideUp()
        $(".navbar").hover(function(){
            $(".bg,.submenu").stop().slideDown()
        },function(){
            $(".bg,.submenu").stop().slideUp()
        })

// 토글
$(".toggle").click(function(){
    $(".navbarClone").css("left",0);
    $(".toggle").addClass("active")
    $(".overlay").show();
})
$(".overlay").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".toggle").removeClass("active")
    $(".overlay").hide();

})


// navbar를 자져와서 복제하고 appendTo를 한다 (mMenu)
$(".navbar>ul").clone().appendTo(".mMenu")


$(".navbarClone .mMenu>ul>li>a").click(function(e){
    e.preventDefault();
    $(".mMenu>ul>li>a").parent().find(".submenu").slideUp(200);

    if($(this).hasClass("active")){
      $(".mMenu>ul>li>a").removeClass("active")
    }else{
      $(this).parent().find(".submenu").stop().slideDown(200);
      $(".mMenu>ul>li>a").removeClass("active");
      $(this).addClass("active").addClass("");    

    }
   
  })



$(".navbarClone .mMenu>ul>li>ul>li>a").click(function(e){
    e.preventDefault();

    if($(this).hasClass("active")){
      $(".mMenu>ul>li>ul>li>a").removeClass("active")
    }else{       
      $(this).addClass("active").addClass(""); 
       

    }
   
  })

  // $(".navbarClone .mMenu>ul>li>a").click(function(){
  //   $(this).parent().find(".submenu").stop().slideUp(200);
  // })

  

  //  메인 Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// 이벤트 배너를 자져와서 복제하고 appendTo를 한다 ()
$("#contents>.conWrap>ul>.event").clone().appendTo(".Mevent")

// 뉴스 배너를 자져와서 복제하고 appendTo를 한다 ()
$("#contents>.conWrap>ul>.news").clone().appendTo(".Mnews")

//news01 Swiper
var swiper = new Swiper(".mySwiper_02", {   
    loop: true,
    autoplay: {
        delay: 2000,
      }    
});
var swiper = new Swiper(".mySwiper_03", {   
    loop: true,
    autoplay: {
        delay: 3000,
      }
    
});

var swiper = new Swiper(".mySwiper_04", {   
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
  });   

var swiper = new Swiper(".mySwiper_05", {   
  loop: true,
  autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper_06", {   
    loop: true,
    autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    var swiper = new Swiper(".mySwiper_07", {   
      loop: true,
      autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".mySwiper_08", {         
          watchSlidesProgress: true,
          slidesPerView: 3,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          },
        });  
        
        
  // 메뉴 util 제거
        $(window).scroll(function(){
          let scrollY = window.pageYOffset;
  
          if( scrollY > 110 ){
              // $(".util").attr("style","position:fixed")
              $(".util").addClass("fixed")
          }else{
              // $(".util").attr("style","")
              $(".util").removeClass("fixed")
          }
  
          // $(".scroll").html(parseInt(scrollY))
      })
  
//pageTop 올라가기
      $(".btn_top").click(function(){
        $("html,body").animate({scrollTop:0},300)
    })

    $(window).scroll(function(){
      let scrollY = window.pageYOffset
    
      if($("body").height()/5 < scrollY){ // 문서 반일때 스크롤 Y이 커질때 나타나라
          $(".btn_top").fadeIn()
      }else{
          $(".btn_top").fadeOut()
      }

  })



// bxSlider
