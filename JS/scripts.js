//when the user scrolls 50px down from the top then excute this script

$(window).scroll(function(){
    var position = $(this).scrollTop();
    if(position >= 200){
        $('.navbar').addClass('custom-navbar');
        // $('.navbar-text').addClass('custom-navbar-text');
        // $('.nav-link').addClass('custom-nav-link');
    }
    else{
        $('.navbar').removeClass('custom-navbar');
        // $('.navbar-text').removeClass('custom-navbar-text');
        // $('.nav-link').removeClass('custom-nav-link');
    }
});

