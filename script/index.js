$(function(){
    $('.value> li').mouseenter(function(){
        $(this).children('.poo').stop().slideDown();
    });

    $('.value> li').mouseleave(function(){
        $(this).children('.poo').stop().slideUp();
    });
});
