$("#fullpage").fullpage({
    menu:".navTop",
    anchors:["m1st","m2st","m3st","m4st"],
    navigation:true,
    navigationPosition:"fp-right",
    navigationTooltips:["first","second","third","fouth"],
    responsiveWidth:900,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink, index);
        if(index==2){
            $(".navTop").addClass("active");
        }else{
            $(".navTop").removeClass("active");
        }
    }

    
})

$("#oslide2").owlCarousel({
    // loop:true,
    center:true,
    dots:true,
    nav:true,
    autoplay:true,
    margin:30,
    navText:['<i class="fa-solid fa-circle-chevron-left dots prve"></i>','<i class="fa-solid fa-circle-chevron-right dots next"></i>'],
    responsive:{
        0:{items:1},
        760:{items:1},
        990:{items:3}
    }
})