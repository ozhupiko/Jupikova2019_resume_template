var $about = $('html, body');
$('a[href="#about"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $about.animate({
            scrollTop: 598
        }, 1000);
    } else if (window.matchMedia('(max-width: 577px)').matches) {
        $about.animate({
            scrollTop: 660
        }, 1000);
    } 
    else {
        $about.animate({
            scrollTop: 666
        }, 1000);
    }

    return false;

});
var $skills = $('html, body');
$('a[href="#skills"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $skills.animate({
            scrollTop: 1361
        }, 1000);
    } else if (window.matchMedia('(max-width: 577px)').matches) {
        $skills.animate({
            scrollTop: 1392
        }, 1000);
    }
    else {
        $skills.animate({
            scrollTop: 1135
        }, 1000);
    }
    return false;
});
var $education = $('html, body');
$('a[href="#education"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $education.animate({
            scrollTop: 1896
        }, 1000);
    } else if (window.matchMedia('(max-width: 577px)').matches) {
        $education.animate({
            scrollTop: 2026
        }, 1000);
    }
    else {
        $education.animate({
            scrollTop: 1744
        }, 1000);
    }
    return false;
});
var $experience = $('html, body');
$('a[href="#experience"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $experience.animate({
            scrollTop: 2906
        }, 1000);
    }  if (window.matchMedia('(max-width: 577px)').matches) {
        $experience.animate({
            scrollTop: 3203
        }, 1000);
    } 
    else {
        $experience.animate({
            scrollTop: 2450
        }, 1000);
    }
    return false;
});

var $services = $('html, body');
$('a[href="#services"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $services.animate({
            scrollTop: 4094
        }, 1000);
    } else if (window.matchMedia('(max-width: 577px)').matches) {
        $services.animate({
            scrollTop: 4507
        }, 1000);
    } 
    else {
        $services.animate({
            scrollTop: 3210
        }, 1000);
    }
    return false;
});

var $portfolio = $('html, body');
$('a[href="#portfolio"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $portfolio.animate({
            scrollTop: 5503
        }, 1000);
    } else if (window.matchMedia('(max-width: 577px)').matches) {
        $portfolio.animate({
            scrollTop: 5552
        }, 1000);
    }else {
        $portfolio.animate({
            scrollTop: 4056
        }, 1000);
    }
    return false;
});



var $process = $('html, body');
$('a[href="#process"]').click(function () {
    if (window.matchMedia('(max-width: 577px)').matches) {
        $process.animate({
            scrollTop: 6376
        }, 1000);
    } else {
        $process.animate({
            scrollTop: 5172
        }, 1000);
    }
    
    return false;
});


var $testimonial = $('html, body');
$('a[href="#testimonial"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $testimonial.animate({
            scrollTop: 6598
        }, 1000);
    } else if (window.matchMedia('(max-width: 577px)').matches) {
        $testimonial.animate({
            scrollTop: 6796
        }, 1000);
    } 
    else {
        $testimonial.animate({
            scrollTop: 5669
        }, 1000);
    }
    return false;
});
var $blog = $('html, body');
$('a[href="#blog"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $blog.animate({
            scrollTop: 7524
        }, 1000);
    } else if (window.matchMedia('(max-width: 450px)').matches) {
        $blog.animate({
            scrollTop: 7780
        }, 1000);
    }
     else {
        $blog.animate({
            scrollTop: 6615
        }, 1000);
    }
    return false;
});

var $contact = $('html, body');
$('a[href="#contact"]').click(function () {
    if (window.matchMedia('(max-width: 450px)').matches) {
        $contact.animate({
            scrollTop: 10920
        }, 1000);
    } else if (window.matchMedia('(max-width: 577px)').matches) {
        $contact.animate({
            scrollTop: 9876
        }, 1000);
    }
     else {
        $contact.animate({
            scrollTop: 7895
        }, 1000);
    }
    return false;
});

var $home = $('html, body');
$('a[href="#"]').click(function () {
    $home.animate({
        scrollTop: 0
    }, 1000);
    return false;
});