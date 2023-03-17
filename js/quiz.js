(function ($, window) {
    var adjustAnchor = function () {

        var $anchor = $(':target'),
            fixedElementHeight = 120;

        if ($anchor.length > 0) {
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
        let quizScroll = $(".quiz__inner").offset().top - 100;

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

        $('html, body').animate({
            scrollTop: quizScroll
        }, 1000);

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


$(document).ready(function () {
    $('a[href^="#"').on("click", function (event) {
        var hash = event.target.hash;
        var headerHeight = $('header').height();

        if (hash) {
            event.preventDefault();
            var tag = $(hash);

            if ($(hash).length) {
                if (window.innerWidth > 768) {
                    var offset = tag.offset().top - 70;
                } else {
                    var offset = tag.offset().top - headerHeight - 10;
                }
                $('html, body').stop().animate({ scrollTop: offset }, 2000);
            }
        }
    });
});


$(document).mouseleave(function () {
    if (event.clientY < 3) {
        let leave = 1;
        if (+$.cookie('leave-popup')) {
            leave = 0;
        }
        if (leave) {
            $('.popup-wait').addClass('active');
            // $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
            $.cookie('leave-popup', 1, { expires: 7 });
        }
    }
});

// маска на телефон
$("input[type='tel']").mask('+7 (9 9 9) 9 9 9 - 9 9 - 9 9');

$('[data-form-validate-js]').each(function () {
    var form = $(this);

    form.validate({
        errorClass: "validate_error",
        rules: {
            phone: {
                required: true,
                minlength: 28
            }
        },
        errorPlacement: function (error, element) { },
        submitHandler: function () {
            var data = form.serialize();
            var action = form.attr('action');
            var method = form.attr('method');

            $.ajax({
                type: method,
                url: action,
                data: data,
                success: function (response) {
                    window.location.href = "thanks.html";
                },
                error: function (response) {
                    window.location.href = "404.html";
                },
            });
        },
    });
});

$('[data-download-form-js]').each(function () {
    var form = $(this);
    let material = $('#monuments');

    form.validate({
        errorClass: "validate_error",
        rules: {
            phone: {
                required: true,
                minlength: 28
            }
        },
        errorPlacement: function (error, element) { },
        submitHandler: function () {
            var data = form.serialize();
            var action = form.attr('action');
            var method = form.attr('method');
            var link = document.createElement('a');

            if (material.length > 0) {
                var file = material.val()
            } else {
                var file = form.attr('data-download-form-js');
            }


            link.setAttribute('href', file);
            link.setAttribute('download', '');

            $.ajax({
                type: method,
                url: action,
                data: data,
                success: function (response) {
                    window.location.href = "thanks.html";
                    link.click();
                },
                error: function (response) {
                    window.location.href = "404.html";
                },
            });
        },
    });
});

$("[data-anchor-btn-js]").on("click", function (event) {
    event.preventDefault();
    var headerHeight = $('header').height();

    var target = $(this).attr('href');

    if ($(target).length) {
        if (window.innerWidth > 768) {
            var offset = ($(target).offset().top) - 50;
        } else {
            var offset = ($(target).offset().top) - headerHeight - 10;
        }

        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (offset > scroll) {
            var time = Math.round(offset / windowHeight) * 300;
        } else {
            var time = Math.round((scroll - offset) / windowHeight) * 300;
        }

        $('body,html').animate({
            scrollTop: offset
        }, time);
    } else {
        window.location.href = "index.html";
    }
});



