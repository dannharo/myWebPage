$(function() {
    $("#navbar li").click(function(){
        $("#navbar li").removeClass( "active" );
        $(this).addClass("active");
    });
    $(".navbar-header").click(function(){
        $("#navbar li").removeClass( "active" );
        $(this).addClass("active");
    });
});