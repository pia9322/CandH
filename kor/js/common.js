$(document).ready(function () {
    console.log('common_js_start')
    // common_js_start

    AOS.init();
    // var mainScroll = new Swiper('.fullpage_wrap', {
    //     effect: "fade",
    //     slidesPerView : 'auto',
    //     speed: 1000,
    //     direction: 'vertical',
    //     mousewheel: true,

    //     // on: {
    //     //     init: function () {
    //     //         $('.swiper-progress-bar').removeClass('animate');
    //     //         $('.swiper-progress-bar').removeClass('active');
    //     //         $('.swiper-progress-bar').eq(0).addClass('animate');
    //     //         $('.swiper-progress-bar').eq(0).addClass('active');
    //     //     },
    //     //     slideChangeTransitionStart: function () {
    //     //         $('.swiper-progress-bar').removeClass('animate');
    //     //         $('.swiper-progress-bar').removeClass('active');
    //     //         $('.swiper-progress-bar').eq(0).addClass('active');
    //     //     },
    //     //     slideChangeTransitionEnd: function () {
    //     //         $('.swiper-progress-bar').eq(0).addClass('animate');
    //     //     },
    //     // }
    // });


    // swiper
    var Mainswiper = new Swiper('.main_visual', {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        lazy: {
            loadPrevNext: true
        },

        touchMoveStopPropagation: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // on: {
        //     init: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionStart: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionEnd: function () {
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //     },
        // }
    });

    var swiper02 = new Swiper('.tabcon', {
        slidesPerView: 5,
        spaceBetween: 100,
        // loop: true,

        touchMoveStopPropagation: true,
        breakpoints: {
            // when window width is >= 320px
            1600: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    // swiper

    // wave
    var top_wave = new Wavify('#main_wave', {
        height: 30,
        bones: 3,
        amplitude: 80,
        speed: .15,
        color: '#fff'
    });
    // wave


    // header_default 
    let header = document.querySelector('#header'),
        header_ham = document.querySelector('.header_ham'),
        header_full = document.querySelector('.header_full'),
        depth_01 = document.querySelectorAll('.header_full_list .depth_01')

    $('.header_center > li').hover(function () {
        $('.depth_01, .header_bg').addClass('active');
    }, function () {
        $('.depth_01, .header_bg').removeClass('active');
    })

    for (let i = 0; i < depth_01.length; i++) {
        depth_01[i].addEventListener('click', function () {
            $(this).children('.depth_02').slideToggle();
            $(this).siblings().children('.depth_02').slideUp();
            return;
        })
    }


    // headerRight()
    function headerRight() {
        header_ham.addEventListener('click', function () {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                console.log(header_full);
                header_full.classList.add('active');
                $('.header_lang').addClass('active');
                $('.header_sns').addClass('active');
            } else {
                header_full.classList.remove('active');
                $('.header_lang').removeClass('active');
                $('.header_sns').removeClass('active');
            }
        })
    }



    // sub_manu_navi 
    let sub_depth = document.querySelector('#sub_depth');





    // jj_add window Scroll event
    $(window).scroll(function () {
        let y = $(this).scrollTop(),
            scrolltop = $(window).scrollTop();
        // IndexHome = '/',
        // path = location.pathname;

        function IndexPop() {
            let popbanner = document.querySelector('.event_banner_01'),
                popbannerHei = popbanner.offsetTop;

            if (y >= popbannerHei) {
                $('.banner_pop').addClass("active");
            } else {
                $('.banner_pop').removeClass("active");
            }
        }

        (y >= 70) ? $("#header").addClass('active') : $("#header").removeClass('active');





    });
    // jj_add window Scroll event







    // jj fullpage
    let delta, loop, num = 0, pos = [];
    let mainLen = ($(".fullpage_wrap > section").length) - 1;



    function mainWrap() {
        $(".fullpage_wrap > section").each(function (i) {
            pos.push($(".fullpage_wrap > section").eq(i).offset().top)
        });

        $(".fullpage_wrap").on('scroll touchmove mousewheel DOMMouseScroll', function (e) {
            delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            console.log()

            clearTimeout(loop);
            loop = setTimeout(function () {
                if (delta < 0) {
                    if (num < mainLen) num++;
                } else {
                    if (num != 0) num--;
                };

                $(".fullpage_wrap").animate({ marginTop: -pos[num] },"slow")
            }, 300);

            (num <= 2) ? $('.main_wrap').addClass('active') : null;
            (num == 0 ) ? $('.main_section_01').addClass('active') : $('.main_section_01').removeClass('active');
            (num == 2 && delta <= 120) ? $('.main_wrap').removeClass('active') : null;


            console.log(num, delta, e.targetTouches[0].clientY);
            // 터치위치까지 구함
        });
    };
    mainWrap()
    // jj fullpage



    // resize reload
    // window.addEventListener('resize',function(){
    //     location.reload();
    // })
    // resize reload





    headerRight()
    // common_js_end
    console.log('common_js_end')
});

