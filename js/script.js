$(document).ready(function(){
    $('.fa-bars-staggered').click(function(){
        $(this).toggleClass('fa-x')
        $('.nav').toggleClass('nav-toggle')
    })
    //screen show kora obosthay default
    $(window).on('load scroll', function(){
        $('.fa-bars-staggered').removeClass('fa-x')
        $('.nav').removeClass('nav-toggle')
        //header active
        if($(window).scrollTop() > 10){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active')
        }
    })

    //venobox js
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
    
})
AOS.init({
    duration: 1000,
    delay: 400,
});