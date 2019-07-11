var target = $('.process__work1');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;

$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  
  if(winScrollTop > scrollToElem){
    $(".process--mg").show();
    $(".process__work1").show(600);
    $(".process__icon1--1").delay(600).show(600);  
    $(".process__work2").delay(1200).show(600);
    $(".process__icon1--2").delay(1800).show(600); 
    $(".process__work3").delay(2400).show(600);
    $(".process__icon1--3").delay(3000).show(600); 
    $(".process__work4").delay(3600).show(600);
    $(".process__icon1--4").delay(4200).show(600); 
    $(".process__work5").delay(4800).show(600);
    $(".process__icon1--5").delay(5400).show(600); 
    $(".process__work6").delay(6000).show(600);
   
 
  }
});
$(window).ready(function(){
    
    
    
      $(".process--mg").hide(600);
     
     
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
    