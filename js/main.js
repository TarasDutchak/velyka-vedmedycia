$(document).ready(function () {
    // header
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('header.header').addClass('scroll');
        } else {
            $('header.header').removeClass('scroll');
        }
    });

    if ($(window).scrollTop() > 10) {
        $('header.header').addClass('scroll');
    } else {
        $('header.header').removeClass('scroll');
    }

    if ($(window).width() < 992) {
        $('.sublink').click(function () {
            $(this).find('.sublist').toggle();
        })
    }

    $('.burgerbtn').click(function () {
        $('.header.header .header__left').addClass('show');
        $('body').addClass('hidden');
    });
    $('.closemenu').click(function () {
        $('.header.header .header__left').removeClass('show');
        $('body').removeClass('hidden');
    });




    // welcome slider
    var swiper = new Swiper(".welcomesl", {
        speed: 700,
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    //   Space containers
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.welcomeslider__sociallist').css('left', paddingContainer);
    $('.discontsl__wrapp').css('padding-left', paddingContainer);
    $('.slidersgroup__sliderwrapper:nth-child(odd)').css('padding-right', paddingContainer);
    $('.slidersgroup__sliderwrapper:nth-child(even)').css('padding-left', paddingContainer);
    $('.swiper-pagination.generalnav').css('right', paddingContainer + 30);

    if ($(window).width() < 992) {
        $('.slidersgroup__descr').css('padding-left', paddingContainer);
    }


    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.welcomeslider__sociallist').css('left', paddingContainer);
        $('.discontsl__wrapp').css('padding-left', paddingContainer);
        $('.slidersgroup__sliderwrapper:nth-child(odd)').css('padding-right', paddingContainer);
        $('.slidersgroup__sliderwrapper:nth-child(even)').css('padding-left', paddingContainer);
        $('.swiper-pagination.generalnav').css('right', paddingContainer + 30);

        if ($(window).width() < 992) {
            $('.slidersgroup__descr').css('padding-left', paddingContainer);
        }
    });

    // discont sldier

    var swiper = new Swiper(".discontsl", {
        // slidesPerView: 2.4,
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 700,
    });

    var swiper = new Swiper(".slidersgroup__slider", {
        slidesPerView: 1.2,
        spaceBetween: 18,
        speed: 700,
        pagination: {
            el: ".swiper-pagination",
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '0' + current + '<img src="img/line.svg" alt="arrow">' + '0' + (total);
            }

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


    });


    // fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // gallery slider
    var swiper = new Swiper(".galleryslider", {
        slidesPerView: 'auto',
        speed: 700,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination.generalnav",
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '0' + current + '<img src="img/line.svg" alt="arrow">' + '0' + (total);
            }

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });


    //   scroll to id
    $(".scrollbtn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    // close modal
    $('.closemodal').click(function () {
        $('.startpopupwrapper').hide();
    });

    // input mask
    $('.telinput').inputmask({
        "mask": "+ 389999999999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });

    // date
    // // datepicker
    if ($('.datepick1').length > 0) {
        const picker1 = datepicker('.datepick1', {
            formatter: (input, date, instance) => {
                const value = date.toLocaleDateString()
                input.value = value // => '1/1/2099'
            },
            startDay: 1,
            customDays: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            customMonths: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
        })
    }
    if ($('.datepick2').length > 0) {
        const picker2 = datepicker('.datepick2', {
            formatter: (input, date, instance) => {
                const value = date.toLocaleDateString()
                input.value = value // => '1/1/2099'
            },
            startDay: 1,
            customDays: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            customMonths: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
        })
    }

    var swiper = new Swiper(".discontslcott", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 700,
        breakpoints: {

            480: {
                slidesPerView: 2,
            },

            768: {
                slidesPerView: 1,
            },

            992: {
                slidesPerView: 2,
            },
        },
    });

    // + - counter
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    }); 




})