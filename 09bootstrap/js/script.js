$(".cont-4st .btn-g div").click(function(){
    let i = $(this).index();
    $(".cont-4st .btn-g div").removeClass("active");
    $(this).addClass("active");

    let $selector = $(this).attr("data-filter"); //필더값을 가져온다
    console.log($selector)

    $(".cont-4st .view").isotope({ //자동소트
        filter: $selector 
    })
})

window.onload = function(){ //window.onload = 똑같다 window.addEventlistener("load",function(){})  문서라 로드 될때.
    $(".cont-4st .btn-g div").eq(0).trigger("click") // trigger:앞에 선택자를 이벤트를 억지로 누를때 사용
}



//cssgram
$(".cssgram01 > .row > div").hover(function(){
    $(this).find(".card01").removeClass("inkwell")
},function(){
    $(".card01").addClass("inkwell")
    
})


$("#oslide1").owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{items:1},
        760:{items:3}
    }
})