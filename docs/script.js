"use strict";function headerScrolled(){$(".menu").addClass("menu--scroll")}function headerNoScrolled(){$(".menu").removeClass("menu--scroll")}function showProcess(){$(".process__work1").show(600),$(".process__icon1--1").show(1e3),$(".process__work2").show(1400),$(".process__icon1--2").show(1800),$(".process__work3").show(2200),$(".process__icon1--3").show(2600),$(".process__work4").show(3e3),$(".process__icon1--4").show(3400),$(".process__work5").show(3800),$(".process__icon1--5").show(4200),$(".process__work6").show(4600)}var links;$(".burger").on("click",function(){$(".popup").delay(1e3).fadeIn("slow")}),$(".navigation__link").click(function(){$(".popup").delay(1e3).fadeOut("slow")}),$(".popup__close").click(function(){$(".popup").delay(1e3).fadeOut("slow")}),window.onscroll=setInterval(function(){0!=window.pageYOffset?headerScrolled():headerNoScrolled()},1e3),$(".menu__item--all").on("click",function(){$(".portfolio__all").css("visibility","visible"),$(".portfolio__web").css("visibility","hidden"),$(".portfolio__UI").css("visibility","hidden"),$(".portfolio__photo").css("visibility","hidden")}),$(".menu__item--UI").on("click",function(){$(".portfolio__all").css("visibility","hidden"),$(".portfolio__web").css("visibility","hidden"),$(".portfolio__UI").css("visibility","visible"),$(".portfolio__photo").css("visibility","hidden")}),$(".menu__item--web").on("click",function(){$(".portfolio__all").css("visibility","hidden"),$(".portfolio__web").css("visibility","visible"),$(".portfolio__UI").css("visibility","hidden"),$(".portfolio__photo").css("visibility","hidden")}),$(".menu__item--photo").on("click",function(){$(".portfolio__all").css("visibility","hidden"),$(".portfolio__web").css("visibility","hidden"),$(".portfolio__UI").css("visibility","hidden"),$(".portfolio__photo").css("visibility","visible")}),$(".btn--work1").on("click",function(){$(".btn--work1").removeAttr("href"),$(".popup__work").css({visibility:"visible",position:"absolute",left:"0"}),$(".popup__work__body").css({background:"url(img/portfolio1@1x.png) 100% 50%","background-size":"cover"})}),$(".btn--work2").on("click",function(){$(".btn--work2").removeAttr("href"),$(".popup__work").css({visibility:"visible",position:"absolute",left:"0"}),$(".popup__work__body").css({background:"url(img/portfolio4@1x.png) 50% 40%","background-size":"cover"})}),$(".btn--work3").on("click",function(){$(".btn--work3").removeAttr("href"),$(".popup__work").css({visibility:"visible",position:"absolute",left:"0"}),$(".popup__work__body").css({background:"url(img/portfolio2@1x.png) 100% 50%","background-size":"cover"})}),$(".btn--work4").on("click",function(){$(".btn--work4").removeAttr("href"),$(".popup__work").css({visibility:"visible",position:"absolute",left:"0"}),$(".popup__work__body").css({background:"url(img/portfolio5@1x.png) 100% 50%","background-size":"cover"})}),$(".btn--work5").on("click",function(){$(".btn--work5").removeAttr("href"),$(".popup__work").css({visibility:"visible",position:"absolute",left:"0"}),$(".popup__work__body").css({background:"url(img/portfolio3@1x.png) 100% 50%","background-size":"cover"})}),$(".btn--work6").on("click",function(){$(".btn--work6").removeAttr("href"),$(".popup__work").css({visibility:"visible",position:"absolute",left:"0"}),$(".popup__work__body").css({background:"url(img/portfolio6@1x.png) 100% 50%","background-size":"cover"})}),$(".popup__work__close").on("click",function(){$(".popup__work").css("visibility","hidden")}),$(document).ready(function(){$(".testimonial__slide").slick({dots:!1,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,arrows:!1})}),$(".fa-chevron-left").click(function(){$(".testimonial__slide").slick("slickNext")}),$(".fa-chevron-right").click(function(){$(".testimonial__slide").slick("slickPrev")}),$(".btn--secondary_download").on("click",function(){return links=window.location.href});var $about=$("html, body");$('a[href="#about"]').click(function(){return window.matchMedia("(max-width: 450px)").matches?$about.animate({scrollTop:598},1e3):window.matchMedia("(max-width: 577px)").matches?$about.animate({scrollTop:660},1e3):$about.animate({scrollTop:666},1e3),!1});var $skills=$("html, body");$('a[href="#skills"]').click(function(){return window.matchMedia("(max-width: 450px)").matches?$skills.animate({scrollTop:1361},1e3):window.matchMedia("(max-width: 577px)").matches?$skills.animate({scrollTop:1392},1e3):$skills.animate({scrollTop:1135},1e3),!1});var $education=$("html, body");$('a[href="#education"]').click(function(){return window.matchMedia("(max-width: 450px)").matches?$education.animate({scrollTop:1896},1e3):window.matchMedia("(max-width: 577px)").matches?$education.animate({scrollTop:2026},1e3):$education.animate({scrollTop:1744},1e3),!1});var $experience=$("html, body");$('a[href="#experience"]').click(function(){return window.matchMedia("(max-width: 450px)").matches&&$experience.animate({scrollTop:2906},1e3),window.matchMedia("(max-width: 577px)").matches?$experience.animate({scrollTop:3203},1e3):$experience.animate({scrollTop:2450},1e3),!1});var $services=$("html, body");$('a[href="#services"]').click(function(){return window.matchMedia("(max-width: 450px)").matches?$services.animate({scrollTop:4094},1e3):window.matchMedia("(max-width: 577px)").matches?$services.animate({scrollTop:4507},1e3):$services.animate({scrollTop:3210},1e3),!1});var $portfolio=$("html, body");$('a[href="#portfolio"]').click(function(){return window.matchMedia("(max-width: 450px)").matches?$portfolio.animate({scrollTop:5503},1e3):window.matchMedia("(max-width: 577px)").matches?$portfolio.animate({scrollTop:5552},1e3):$portfolio.animate({scrollTop:4056},1e3),!1});var $process=$("html, body");$('a[href="#process"]').click(function(){return window.matchMedia("(max-width: 577px)").matches?$process.animate({scrollTop:6376},1e3):$process.animate({scrollTop:5172},1e3),!1});var $testimonial=$("html, body");$('a[href="#testimonial"]').click(function(){return window.matchMedia("(max-width: 450px)").matches?$testimonial.animate({scrollTop:6598},1e3):window.matchMedia("(max-width: 577px)").matches?$testimonial.animate({scrollTop:6796},1e3):$testimonial.animate({scrollTop:5669},1e3),!1});var $blog=$("html, body");$('a[href="#blog"]').click(function(){return window.matchMedia("(max-width: 450px)").matches?$blog.animate({scrollTop:7524},1e3):window.matchMedia("(max-width: 450px)").matches?$blog.animate({scrollTop:7780},1e3):$blog.animate({scrollTop:6615},1e3),!1});var $contact=$("html, body");$('a[href="#contact"]').click(function(){return window.matchMedia("(max-width: 450px)").matches?$contact.animate({scrollTop:10920},1e3):window.matchMedia("(max-width: 577px)").matches?$contact.animate({scrollTop:9876},1e3):$contact.animate({scrollTop:7895},1e3),!1});var $home=$("html, body");$('a[href="#"]').click(function(){return $home.animate({scrollTop:0},1e3),!1});var scrollToElem=(targetPos=(target=$(".dws-progress-bar1")).offset().top)-(winHeight=$(window).height());$(window).scroll(function(){var o=$(this).scrollTop();scrollToElem<o&&$(".dws-progress-bar1").circularProgress({color:"#fff",line_width:18,height:"250px",width:"250px",percent:0,counter_clockwise:!1,starting_position:0}).circularProgress("animate",75,1e4)}),$(window).scroll(function(){var o=$(this).scrollTop();scrollToElem<o&&$(".dws-progress-bar2").circularProgress({color:"#fff",line_width:18,height:"250px",width:"250px",percent:0,counter_clockwise:!1,starting_position:0}).circularProgress("animate",68,1e4)}),$(window).scroll(function(){var o=$(this).scrollTop();scrollToElem<o&&$(".dws-progress-bar3").circularProgress({color:"#fff",line_width:18,height:"250px",width:"250px",percent:0,counter_clockwise:!1,starting_position:0}).circularProgress("animate",50,1e4)}),$(window).scroll(function(){var o=$(this).scrollTop();scrollToElem<o&&$(".dws-progress-bar4").circularProgress({color:"#fff",line_width:18,height:"250px",width:"250px",percent:0,counter_clockwise:!1,starting_position:0}).circularProgress("animate",95,1e4)}),$(window).scroll(function(){var o=$(this).scrollTop();scrollToElem<o&&$(".dws-progress-bar5").circularProgress({color:"#fff",line_width:18,height:"250px",width:"250px",percent:0,counter_clockwise:!1,starting_position:0}).circularProgress("animate",80,1e4)}),$(window).scroll(function(){var o=$(this).scrollTop();scrollToElem<o&&$(".dws-progress-bar6").circularProgress({color:"#fff",line_width:18,height:"250px",width:"250px",percent:0,counter_clockwise:!1,starting_position:0}).circularProgress("animate",100,1e4)});var target,targetPos,winHeight;scrollToElem=(targetPos=(target=$(".process__work1")).offset().top)-(winHeight=$(window).height());$(window).scroll(function(){var o=$(this).scrollTop();scrollToElem<o&&showProcess()});