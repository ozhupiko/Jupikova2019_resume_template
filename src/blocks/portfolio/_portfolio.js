$('.menu__item--all').on("click", function addWork() {
    
    $(".portfolio__all").css("visibility", "visible");
    $(".portfolio__web").css("visibility", "hidden");
    $(".portfolio__UI").css("visibility", "hidden");
    $(".portfolio__photo").css("visibility", "hidden");
  
});

$('.menu__item--UI').on("click", function addWork() {
    
    $(".portfolio__all").css("visibility", "hidden");
    $(".portfolio__web").css("visibility", "hidden");
    $(".portfolio__UI").css("visibility", "visible");
    $(".portfolio__photo").css("visibility", "hidden");
   
});
$('.menu__item--web').on("click", function addWork() {
    
    $(".portfolio__all").css("visibility", "hidden");
    $(".portfolio__web").css("visibility", "visible");
    $(".portfolio__UI").css("visibility", "hidden");
    $(".portfolio__photo").css("visibility", "hidden");
    
});
$('.menu__item--photo').on("click", function addWork() {
    
    $(".portfolio__all").css("visibility", "hidden");
    $(".portfolio__web").css("visibility", "hidden");
    $(".portfolio__UI").css("visibility", "hidden");
    $(".portfolio__photo").css("visibility", "visible");
   
});


$('.btn--work1').on("click", function addWork1() {
    $('.btn--work1').removeAttr("href");
    $(".popup__work").css({"visibility": "visible",
    "position": "absolute",
    "top": "-220px", 
    "left": "0"
});


$(".popup__work__body").css({"background":  "url(img/portfolio1@1x.png) 100% 50%",
"background-size": "cover"});

});


$('.btn--work2').on("click", function addWork1() {
    $('.btn--work2').removeAttr("href");
    $(".popup__work").css({"visibility": "visible",
    "position": "absolute",
    "top": "-220px", 
    "left": "0"
});
$(".popup__work__body").css({"background":  "url(img/portfolio4@1x.png) 50% 40%",
"background-size": "cover"});

});


$('.btn--work3').on("click", function addWork1() {
    $('.btn--work3').removeAttr("href");
    $(".popup__work").css({"visibility": "visible",
    "position": "absolute",
    "top": "-220px", 
    "left": "0"
});
$(".popup__work__body").css({"background":  "url(img/portfolio2@1x.png) 100% 50%",
"background-size": "cover"});

});


$('.btn--work4').on("click", function addWork1() {
    $('.btn--work4').removeAttr("href");
    $(".popup__work").css({"visibility": "visible",
    "position": "absolute",
    "top": "-220px", 
    "left": "0"
});
$(".popup__work__body").css({"background":  "url(img/portfolio5@1x.png) 100% 50%",
"background-size": "cover"});

});


$('.btn--work5').on("click", function addWork1() {
    $('.btn--work5').removeAttr("href");
    $(".popup__work").css({"visibility": "visible",
    "position": "absolute",
    "top": "-220px", 
    "left": "0"
});
$(".popup__work__body").css({"background":  "url(img/portfolio3@1x.png) 100% 50%",
"background-size": "cover"});

});


$('.btn--work6').on("click", function addWork1() {
    $('.btn--work6').removeAttr("href");
    $(".popup__work").css({"visibility": "visible",
    "position": "absolute",
    "top": "-220px", 
    "left": "0"
});
$(".popup__work__body").css({"background":  "url(img/portfolio6@1x.png) 100% 50%",
"background-size": "cover"});

});


$('.popup__work__close').on("click", function removePopup() {
    $(".popup__work").css("visibility", "hidden");

    
});