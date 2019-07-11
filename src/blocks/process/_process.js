var target = $('.process__work1');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;

$(document).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  
  if(winScrollTop > scrollToElem){
    showProcess();
 
  }
});




function showProcess(){
    $(".process__work1").show(600);
    $(".process__icon1--1").show(1000);  
    $(".process__work2").show(1400);
    $(".process__icon1--2").show(1800); 
    $(".process__work3").show(2200);
    $(".process__icon1--3").show(2600); 
    $(".process__work4").show(3000);
    $(".process__icon1--4").show(3400); 
    $(".process__work5").show(3800);
    $(".process__icon1--5").show(4200); 
    $(".process__work6").show(4600);
   
   
    };
    