$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1});
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(".owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    dots: true,
    loop: true,
});