console.log("test");

// 메뉴
$(".navbar>ul>li").hover(function(){
    $(this).addClass("on");

},function(){
    $(this).removeClass("on");

})

// 토글
$(".toggle").click(function(){
    $(".navbarClone").css("left",0);
    $(".overlay").show();
})
$(".overlay").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".overlay").hide();
})

// navbar를 자져와서 복제하고 appendTo를 한다 (mMenu)
$(".navbar>ul").clone().appendTo(".mMenu")