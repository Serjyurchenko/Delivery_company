$(window).ready(function() {

    ///// SMOOTH PAGE LOADING /////

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 300);
    }, 300);

    ///// SLIDER /////

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false
    });

    ///// BURGER /////

    $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('.menu-left').toggleClass('active');
    });

    while($('.menu-left').hasClass('active')) {
        $('.wrapper').css('height', '100%');
    }

    ///// SMOOTH SCROLL TO ANCHOR /////

    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });

    ///// DROPDOWN LIST /////

    $('.js-dropdown').click(function() {
        $('.wrapper-dropdown ul').fadeToggle(400);
    });

    $('.wrapper-dropdown ul li').click(function() {
        var city = $(this).text();
        $(this).parent().siblings('.js-dropdown').text(city);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('input').val(city);
        $(this).parents('.wrapper-dropdown').find('ul').fadeOut(400);
    });

    ///// NUMBERS SCROLLING /////

    var show = true;
    var countbox = ".numbers";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.amount-item').spincrement({
                thousandSeparator: "",
                duration: 3000
            });

            show = false;
        }
    });

    ///// MODAL WINDOW /////

    $('.get-modal').click(function() {
        $('.modal').fadeIn(400).css('display', 'flex');
    });

    $('.modal').click(function(event) {
        var clickedElement = event.target;
        if(!$(clickedElement).closest('.modal-inner').length) {
            $('.modal').fadeOut(400);
        }
        if($(clickedElement).hasClass('close-modal')) {
            $('.modal').fadeOut(400);
        }
    });

    ///// CUSTOM SELECT FOR MODAL WINDOW /////

    $('.current-value').click(function() {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $('.custom-select.active').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $('.custom-select ul li').click(function() {
        var current = $(this).text();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('.current-value').text(current);
        $(this).parent().siblings('input').val(current);
        $(this).parents('.custom-select').removeClass('active');
    });

    ///// SMOOTH SCROLL TO TOP /////

    $(".up").on("click", function () {
        $('body,html').animate({scrollTop: 0}, 500);
    });

});