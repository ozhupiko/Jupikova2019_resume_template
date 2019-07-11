var target = $('.dws-progress-bar1');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   if(winScrollTop > scrollToElem){
//     //сработает когда пользователь доскроллит к элементу с классом .elem
//   }
// });


$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $(".dws-progress-bar1").circularProgress({
        color: "#fff",
        line_width: 18,
        height: "250px",
        width: "250px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 0
    }).circularProgress('animate', 75, 10000);}
});

$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $(".dws-progress-bar2").circularProgress({
        color: "#fff",
        line_width: 18,
        height: "250px",
        width: "250px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 0

    }).circularProgress('animate', 68, 10000);}

});
$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $(".dws-progress-bar3").circularProgress({
        color: "#fff",
        line_width: 18,
        height: "250px",
        width: "250px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 0

    }).circularProgress('animate', 50, 10000);}

});
$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $(".dws-progress-bar4").circularProgress({
        color: "#fff",
        line_width: 18,
        height: "250px",
        width: "250px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 0

    }).circularProgress('animate', 95, 10000);}

});
$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $(".dws-progress-bar5").circularProgress({
        color: "#fff",
        line_width: 18,
        height: "250px",
        width: "250px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 0

    }).circularProgress('animate', 80, 10000);}

});
$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $(".dws-progress-bar6").circularProgress({
        color: "#fff",
        line_width: 18,
        height: "250px",
        width: "250px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 0

    }).circularProgress('animate', 100, 10000);}

});