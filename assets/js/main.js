$(function() {
    $("#navbar li").click(function(){
        $("#navbar li").removeClass( "active" );
        $(this).addClass("active");
    });
    $(".navbar-header").click(function(){
        $("#navbar li").removeClass( "active" );
        $(this).addClass("active");
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if(scroll >= 1025){
            $("#navbar li").removeClass( "active" );
            $("#nav-hobbies").addClass("active");
        }
        else if(scroll >= 850){
            $("#navbar li").removeClass( "active" );
            $("#nav-skill").addClass("active");
        }
        else{
            $("#navbar li").removeClass( "active" );
            $("#nav-about").addClass("active");
        }
    });
});