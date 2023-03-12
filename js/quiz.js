(function ($, window) {
    var adjustAnchor = function () {

        var $anchor = $(':target'),
            fixedElementHeight = 100;

        if ($anchor.length > 0) {
            if ($anchor[0].id === 'about') {
                fixedElementHeight = 400;
            }

            $('html, body')
                .stop()
                .animate({
                    scrollTop: $anchor.offset().top - fixedElementHeight
                }, 200);

        }

    };

    $(window).on('hashchange load', function (e) {
        adjustAnchor();
        history.pushState("", document.title, window.location.pathname +
            window.location.search);
    });

})(jQuery, window);

function fixedHeader() {
    var scrollTop = $(window).scrollTop();
    var headerTopHeight = $('.header__inner').outerHeight();

    if (scrollTop > headerTopHeight) {
        $('.header').addClass('is-fixed');
        $('.main').addClass('header-fixed');
    } else {
        $('.header').removeClass('is-fixed');
        $('.main').removeClass('header-fixed');
    }
} // fixedHeader();


$(window).on('scroll', function () {
    if ($('.index-main').length && !$('.quiz-main').length) {
        fixedHeader();
    }
}); // open\close menu

var toTop = $('.to--top');

toTop.on('click', topFunction);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    $('body,html').animate({ scrollTop: 0 }, 100);
}



/* Range */

var toTop = $('.to_top');

toTop.on('click', topFunction);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function topFunction() {
    $('body,html').animate({ scrollTop: 0 }, 100);
}

/* Animation */
/* Titles anim */
$(".section-title").each(anime);
function anime(anim) {
    var thisTitle = $(this);
    var offsetTop = thisTitle.offset().top - $(window).height() - 10;
    if ($(document).scrollTop() > offsetTop) {
        thisTitle.addClass('fade-in');
    }
    $(window).scroll(function (event) {
        offsetTop = thisTitle.offset().top - $(window).height() - 10;
        if ($(document).scrollTop() > offsetTop) {
            thisTitle.addClass('fade-in');
        }
    });
}


/* Quiz */
var number = 0;
var maxNumber = $(".quiz-item").length;
var $element = $(".quiz-item").find("input");
var btnPrev = $(".quiz-btn--prev");
var btnNext = $('.quiz-btn--next');
var isValid;
var dataBlock;
var activeSlide = [];


$element.on('change input', function (e) {
    var value = $(this).val().trim();
    isValid = value !== "";
    btnActive(!isValid);
});

function btnActive(isValid) {
    if (number === 0) {
        btnPrev.prop('disabled', 'false');
        btnNext.prop('disabled', isValid);
    } else {
        btnPrev.prop('disabled', false);
        if (activeSlide[number] === true || isValid === false) {
            btnNext.prop('disabled', false);
        } else {
            btnNext.prop('disabled', true);
        }
    }
}

// sidebar
function progress(num) {
    const percent = parseInt((100 / maxNumber) * (num + 1));
    $('.js-quiz').text(num + 1);
    $('.quiz__progress-inner').css('width', (percent === 100 ? 98.9 : percent) + '%');
}
progress(0);

// btn
function btnClick() {
    btnPrev.on('click', function (event) {
        event.preventDefault();
        --number;
        $(".quiz-item").hide();
        $(".quiz-item").eq(number).fadeIn();
        btnActive(!isValid);
        if (number === 0) {
            btnPrev.hide();
        }
        progress(number);
        animateTop();
        btnNext.blur();
    });


    btnNext.on('click', function (event) {
        event.preventDefault();

        activeSlide[number] = true;
        ++number;
        $(".quiz-item").hide();
        $(".quiz-item").eq(number).fadeIn(1000);
        btnActive(!isValid);

        if (activeSlide[number] === true) {
            btnNext.prop('disabled', false);
        } else {
            btnNext.prop('disabled', true);
        }

        if (number > 0) {
            btnPrev.show();
        }

        progress(number);

        if (number === maxNumber - 1) {
            $(".quiz__bottom").hide();
            $(".quiz__right").hide();
            $('.js-quiz').text(number);
            $('.quiz__body').addClass('final');
        }

        animateTop();

        setTimeout(function () {
            btnNext.trigger("blur");
        }, 500);
    });
}
btnClick();

$('input[name="quiz1[]"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz2[]"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz3"]').on('change', function () {
    setTimeout(function () {
    }, 500);
});
$('input[name="quiz4[]"]').on('change', function () {
    setTimeout(function () {
    }, 500);
});
$('input[name="quiz5[]"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz6[]"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz7[]"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});

function animateTop(eq) {
    var elem = $('.quiz-inner');
    var top = elem.offset().top - 70;
    $('body,html').animate({ scrollTop: top }, 400);
}

var toTop = $('.to_top');

toTop.on('click', topFunction);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function topFunction() {
    $('body,html').animate({ scrollTop: 0 }, 100);
}


