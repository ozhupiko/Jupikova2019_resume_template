function headerScrolled() {
    $('.menu').addClass('menu--scroll');
}

function headerNoScrolled() {
    $('.menu').removeClass('menu--scroll');
}


window.onscroll = setInterval(function init() {
    if (window.pageYOffset != 0) {
        headerScrolled();
    } else {
        headerNoScrolled();
    }
}, 1000);
