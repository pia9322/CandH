$(function () {
    console.log('common_js_start');
    // common_js_start
    AOS.init();
    // ============= swiper ============= 
    // main_visual
    var mainSwiper = new Swiper('.main_visual', {
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
    // main_bis
    var swiper02 = new Swiper('.tabcon', {
        slidesPerView: 5,
        spaceBetween: 100,
        // loop: true,
        touchMoveStopPropagation: true,
        breakpoints: {
            1600: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });
    // productThumb
    var productThumb = new Swiper('.product_thum.swiper-container', {
        slidesPerView: 1,
        autoHeight: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        lazy: {
            loadPrevNext: true
        },
        touchMoveStopPropagation: true,
    });
    // productMore
    var productMore = new Swiper('.product_more.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
        // loop: true,
        // loopAdditionalSlides: 1,
        autoHeight: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        lazy: { loadPrevNext: true },
        touchMoveStopPropagation: true,
        breakpoints: {
            1480: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1100: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
        }
    });
    // person swiper
    var name = ['기술팀', '기술 영업팀', '솔루션 개발팀'];
    var teamTab = new Swiper(".team_info.swiper-container", {
        autoHeight: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination.tab_02_list",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (name[index]) + '</span>';
            },
        },
        breakpoints: {
            700: {
                touchRatio: 0,
            },
        },
    });
    var teamSlide = new Swiper('.team.swiper-container', {
        slidesPerView: 'auto',
        // centeredSlides: true,
        // loop: true,
        // touchMoveStopPropagation: true,
        breakpoints: {
        // 1480: {
        //     slidesPerView: 2,
        // },
        }
    });
    var personInfo = new Swiper('.person_info.swiper-container', {
        slidesPerView: '4',
        // centeredSlides: true,
        touchMoveStopPropagation: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1480: {
                slidesPerView: 3,
                loop: true,
            },
            1120: {
                slidesPerView: 2.5,
            },
            950: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });
    // person swiper
    // ============= swiper ============= 
    // header_default 
    var header = document.querySelector('#header'), header_ham = document.querySelector('.header_ham'), header_full = document.querySelector('.header_full'), depth_01 = document.querySelectorAll('.header_full_list > li');
    $('.header_center > li').hover(function () {
        $('.depth_01, .header_bg').addClass('active');
    }, function () {
        $('.depth_01, .header_bg').removeClass('active');
    });
    for (var i = 0; i < depth_01.length; i++) {
        depth_01[i].addEventListener('click', function () {
            $(this).children('ul').slideToggle();
            $(this).siblings().children('ul').slideUp();
            return;
        });
    }
    // headerRight()
    function headerRight() {
        header_ham.addEventListener('click', function () {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                console.log(header_full);
                $('.header_full, .header_lang, .header_sns').addClass('active');
            }
            else {
                $('.header_full, .header_lang, header_sns').removeClass('active');
            }
            if ($('.header_full').hasClass('active')) {
                $('body').on('scroll touchmove mousewheel', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
            }
            else {
                $('body').off('scroll touchmove mousewheel');
            }
        });
    }
    // sub_manu_navi 
    var sub_depth = document.querySelector('#sub_depth');
    // jj fullpage
    var delta, loop, num = 0, pos = [], mainLen = ($(".fullpage_wrap > section").length), y = { sy: 0, ey: 0 };
    function mainWrap() {
        $(".fullpage_wrap > section").each(function (i) {
            pos.push($(".fullpage_wrap > section").eq(i).offset().top);
        });
        $(".fullpage_wrap").on('scroll touchstart touchmove mousewheel DOMMouseScroll', function (e) {
            if (e.type == 'touchstart') {
                y.sy = e.targetTouches[0].clientY;
            }
            else if (e.type == 'touchmove') {
                y.ey = e.targetTouches[0].clientY;
                delta = (y.sy > y.ey) ? -1 : 1;
            }
            else {
                delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            }
            clearTimeout(loop);
            loop = setTimeout(function () {
                if (delta < 0) {
                    if (num < mainLen)
                        num++;
                }
                else {
                    if (num != 0)
                        num--;
                }
                ;
                $(".fullpage_wrap").animate({ marginTop: -pos[num] }, "slow");
            }, 300);
            (num <= 2) ? $('.main_wrap').addClass('active') : null;
            (num == 0 || num == 2) ? $('.main_section_01').addClass('active') : $('.main_section_01').removeClass('active');
            (num == 2 && delta <= 120) ? $('.main_wrap').removeClass('active') : null;
            console.log(num, delta);
            // 터치위치까지 구함
        });
    }
    ;
    // mainWrap()
    // jj fullpage
    // resize reload
    // window.addEventListener('resize',function(){
    //     location.reload();
    // })
    // resize reload
    $('#header_search_btn').click(function () {
        $('#header_search_box').slideToggle(function () {
            $(this).toggleClass('active');
        });
    });
    // page check header active
    function pageCheck() {
        var nowLocation = location.href;
        // let nowIdxOf = nowLocation.indexOf('index');
        var subNaviEvent = $('#sub_navi .content_wrap .text_02').text();
        var LinkActive = $('.link_wrap a');
        // link_wrap auto active
        LinkActive.each(function (idx) {
            (subNaviEvent == LinkActive.eq(idx).text()) ? $(this).addClass('active') : null;
        });
        // location Check
        (nowLocation.indexOf('index') >= 0) ? console.log('Home') : $('#header').addClass('active');
        (nowLocation.indexOf('/about/') >= 0) ? null : null;
    }
    pageCheck();
    headerRight();
    // common_js_end
    console.log('common_js_end');
});
