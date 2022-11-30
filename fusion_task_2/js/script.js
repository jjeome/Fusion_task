$('dd').hide();
$('dt').on('click', function () {
    if ($(this).hasClass('on')) {
        slideUp();
        changeIMG(this);
    } else {
        slideUp();
        $(this).addClass('on').next().slideDown();
        changeIMG(this);
    }

    function slideUp() {
        $('dt').removeClass('on').next().slideUp();
        changeIMG(this);
    };
})

function changeIMG(toggle){
    if($(toggle).hasClass('on')){
        $(".arrow").attr("src","/img/arrow-to.png");
    } else{
        $(".arrow").attr("src","/img/arrow-bottom.png");
    }
}

