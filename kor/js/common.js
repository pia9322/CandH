$(document).ready(function(){
    console.log('common_js_start')
    // common_js_start

    
    var Mainswiper = new Swiper('.main_visual', {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 1,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        lazy : {
            loadPrevNext : true
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


    var top_wave = new Wavify('#main_wave', {
        height: 30,
        bones: 3,
        amplitude: 80,
        speed: .15,
        color: '#fff'
    });


    // header_default 
    let header = document.querySelector('#header'),
    header_ham = document.querySelector('.header_ham'),
    header_full = document.querySelector('.header_full'),
    depth_01 = document.querySelectorAll('.header_full_list .depth_01')
    
    


    $('.header_center > li').hover(function(){
        $('.depth_01, .header_bg').addClass('active');
    },function(){
        $('.depth_01, .header_bg').removeClass('active');
    })
    
    for(let i=0; i<depth_01.length; i++){
        depth_01[i].addEventListener('click', function(){
            $(this).children('.depth_02').slideToggle();
            $(this).siblings().children('.depth_02').slideUp();
            return;
        })
    }



    function headerRight(){
        header_ham.addEventListener('click', function() {
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
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





    
    function mainWrap() {
        $(".main_wrap > div").each(function (i) {
            pos.push($(".main_wrap > div").eq(i).offset().top)
        });
    
        // setTimeout(() => {
        //     $(".main_wrap > div").eq(0).slideUp();
        // }, 4000);
    
        setTimeout(() => {
            $(".main_wrap").on('scroll touchmove mousewheel DOMMouseScroll', function (e) {
                delta = e.originalEvent.wheelDelta || -e.originalEvent.detail
                clearTimeout(loop);
                loop = setTimeout(function () {
                    if (delta < 0) {
                        if (num < mainLen) num++;
                    } else {
                        if (num != 0) num--;
                    }
                    if (num == 2) {
                        $("header, .work_nav, .work_nav_call").addClass('active')
                        $(".content_name").eq(0).addClass("active")
                    } 
                    $(".main_wrap").animate({ marginTop: -pos[num] })
                }, 300);
            });
        }, 3000);
    }


    headerRight()



    // common_js_end
    console.log('common_js_end')
});

