$(document).ready(function(){
    $('.Navbar > ul > li').mouseover(function(){
        $('.Navbar > ul > li > .sub-menu').stop().slideDown(500);
        $('header .header-background').stop().slideDown(500);
    }).mouseout(function(){
        $('.Navbar > ul > li > .sub-menu').stop().slideUp(500);
        $('header .header-background').stop().slideUp(500);
    })

    $('.Navbar > ul > li:first-child').mouseover(function(){
        $('.Navbar > ul > li:first-child > a').addClass('active');
    }).mouseout(function(){
        $('.Navbar > ul > li:first-child > a').removeClass('active');
    })

    $('.Navbar > ul > li:nth-child(2)').mouseover(function(){
        $('.Navbar > ul > li:nth-child(2) > a').addClass('active');
    }).mouseout(function(){
        $('.Navbar > ul > li:nth-child(2) > a').removeClass('active');
    })

    $('.Navbar > ul > li:nth-child(3)').mouseover(function(){
        $('.Navbar > ul > li:nth-child(3) > a').addClass('active');
    }).mouseout(function(){
        $('.Navbar > ul > li:nth-child(3) > a').removeClass('active');
    })

    $('.Navbar > ul > li:nth-child(4)').mouseover(function(){
        $('.Navbar > ul > li:nth-child(4) > a').addClass('active');
    }).mouseout(function(){
        $('.Navbar > ul > li:nth-child(4) > a').removeClass('active');
    })

    let show = 1,
    $slides = $('.slider-container > ul'),
    width = 100

    setInterval(function(){
        slide();
    }, 3000)

    function slide(){
        if(show < 3){
            $slides.animate({
            left : (width * show * -1) + '%'
            })

        show ++
        }else{
            $slides.animate({
                left : 0
        })

        show =  1;
        }
    }
})