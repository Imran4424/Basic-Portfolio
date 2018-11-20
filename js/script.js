
$(document).ready(function () {
        $("a").click(function () 
        { 
                //alert("I am clicked");

                var selected = this;

                $("a").removeClass("active");

                $(selected).addClass("active");
        });

        var $a = $(".a"),
                $b = $(".b"),
                $c = $(".c"),
                $d = $(".d"),
                $home = $(".home"),
                $about = $(".about");

        $a.click(function ()
        {
                //alert("I am here");
                
                $home.fadeIn();
                $about.fadeOut();
        });

        $b.click(function ()
        {
                //alert("I am here");

                $about.fadeIn();
                $home.fadeOut();
                //$(".background").css("background-image","url(images/perfect.jpg)");
               
        });
});