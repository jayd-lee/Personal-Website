
var introAnimation = true;

$('.animation-wrapper').on('mousemove', function(e){
    var x = e.pageX;
    var y = e.pageY;

    if(!introAnimation){

        $('.screen').css('animation', 'none');

        $('.animation-inner').css({
            'animation': 'none',
            'transform': 'rotateY(' + x + 'deg) rotateX(' + y + 'deg)'
        });
    }
});

$('.animation-wrapper').on('mouseenter', function(){
    introAnimation = false;
});

$('.animation-wrapper').on('mouseleave', function(){
    introAnimation = true;
});

$('.animation-wrapper').on('mousedown', function(){
    $('.animation-wrapper').addClass('click');
});

$('.animation-wrapper').on('mouseup mouseleave', function(){
    $('.animation-wrapper').removeClass('click');
});