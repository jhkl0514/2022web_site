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
    $(".toggle").addClass("active"); 
    $(".overlay").show();
})
$(".overlay").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".toggle").removeClass("active");
    $(".overlay").hide();

})


// navbar를 자져와서 복제하고 appendTo를 한다 (mMenu)
$(".navbar>ul").clone().appendTo(".mMenu")


$(".navbarClone .mMenu>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
  })

  $(".navbarClone .mMenu>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
  })

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
 

// 메인 스와이퍼 를 자져와서 복제하고 appendTo를 한다 ()
$(".visualWrap>div").clone().appendTo(".mMswiper")