var $about = $('html, body');
$('a[href="#about"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $about.animate({
            scrollTop: 598
        }, 1000);
    } else {
        $about.animate({
            scrollTop: 666
        }, 1000);
    }

    return false;

});
var $skills = $('html, body');
$('a[href="#skills"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $skills.animate({
            scrollTop: 1361
        }, 1000);
    } else {
        $skills.animate({
            scrollTop: 1135
        }, 1000);
    }
    return false;
});
var $education = $('html, body');
$('a[href="#education"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $education.animate({
            scrollTop: 2580
        }, 1000);
    } else {
        $education.animate({
            scrollTop: 1744
        }, 1000);
    }
    return false;
});
var $experience = $('html, body');
$('a[href="#experience"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $experience.animate({
            scrollTop: 3708
        }, 1000);
    } else {
        $experience.animate({
            scrollTop: 2450
        }, 1000);
    }
    return false;
});

var $services = $('html, body');
$('a[href="#services"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $services.animate({
            scrollTop: 4892
        }, 1000);
    } else {
        $services.animate({
            scrollTop: 3210
        }, 1000);
    }
    return false;
});

var $portfolio = $('html, body');
$('a[href="#portfolio"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $portfolio.animate({
            scrollTop: 6347
        }, 1000);
    } else {
        $portfolio.animate({
            scrollTop: 4056
        }, 1000);
    }
    return false;
});



var $process = $('html, body');
$('a[href="#process"]').click(function () {
    $process.animate({
        scrollTop: 5362
    }, 1000);
    return false;
});
var $testimonial = $('html, body');
$('a[href="#testimonial"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $testimonial.animate({
            scrollTop: 7234
        }, 1000);
    } else {
        $testimonial.animate({
            scrollTop: 5853
        }, 1000);
    }
    return false;
});
var $blog = $('html, body');
$('a[href="#blog"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $blog.animate({
            scrollTop: 8101
        }, 1000);
    } else {
        $blog.animate({
            scrollTop: 6785
        }, 1000);
    }
    return false;
});

var $contact = $('html, body');
$('a[href="#contact"]').click(function () {
    if (window.matchMedia('(max-width: 376px)').matches) {
        $contact.animate({
            scrollTop: 11404
        }, 1000);
    } else {
        $contact.animate({
            scrollTop: 8090
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