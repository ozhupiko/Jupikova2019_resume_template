var target = $('.dws-progress-bar1');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight/2;

var marker = true;

function count() {
  $(".dws-progress-bar1").circularProgress({
    color: "#fff",
    line_width: 18,
    height: "250px",
    width: "250px",
    percent: 0,
    counter_clockwise: false,
    starting_position: 0
  }).circularProgress('animate', 75, 10000);
    marker = false;
}

$(window).on("scroll", function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    if ( marker ) {
      count();
  }
    }
    
});

var marker2 = true;

function count2() {
  $(".dws-progress-bar2").circularProgress({
    color: "#fff",
    line_width: 18,
    height: "250px",
    width: "250px",
    percent: 0,
    counter_clockwise: false,
    starting_position: 0
  }).circularProgress('animate', 68, 10000);
    marker2 = false;
}

$(window).on("scroll", function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    if ( marker2 ) {
      count2();
  }
    }
    
});
var marker3 = true;

function count3() {
  $(".dws-progress-bar3").circularProgress({
    color: "#fff",
    line_width: 18,
    height: "250px",
    width: "250px",
    percent: 0,
    counter_clockwise: false,
    starting_position: 0
  }).circularProgress('animate', 50, 10000);
    marker3 = false;
}

$(window).on("scroll", function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    if ( marker3 ) {
      count3();
  }
    }
    
});
var marker4 = true;

function count4() {
  $(".dws-progress-bar4").circularProgress({
    color: "#fff",
    line_width: 18,
    height: "250px",
    width: "250px",
    percent: 0,
    counter_clockwise: false,
    starting_position: 0
  }).circularProgress('animate', 90, 10000);
    marker4 = false;
}

$(window).on("scroll", function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    if ( marker4 ) {
      count4();
  }
    }
    
});
var marker5 = true;

function count5() {
  $(".dws-progress-bar5").circularProgress({
    color: "#fff",
    line_width: 18,
    height: "250px",
    width: "250px",
    percent: 0,
    counter_clockwise: false,
    starting_position: 0
  }).circularProgress('animate', 80, 10000);
    marker5 = false;
}

$(window).on("scroll", function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    if ( marker5 ) {
      count5();
  }
    }
    
});


var marker6 = true;

function count6() {
  $(".dws-progress-bar6").circularProgress({
    color: "#fff",
    line_width: 18,
    height: "250px",
    width: "250px",
    percent: 0,
    counter_clockwise: false,
    starting_position: 0
  }).circularProgress('animate', 100, 10000);
    marker6 = false;
}

$(window).on("scroll", function () {
    var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    if ( marker6 ) {
      count6();
  }
    }
    
});