window.onload = function() {
    $('#scroll-to-content').click(function() {
        $('html, body').animate({
            scrollTop: $('#init-content').offset().top - 64
        }, 400);
    });
}