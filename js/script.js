


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
            $projects = $(".projects"),
            $about = $(".about");
            $white = $(".white")

        $a.click(function ()
        {
                //alert("I am here");
                
                $(".background").css("background-image","url(images/1.JPG)");
                $(".background").css("filter","blur(0px)");
                $about.fadeOut();
                $projects.fadeOut();
                $home.fadeIn();

                $white.css("border-style", "hidden");
        });
        
        $b.click(function ()
        {
                //alert("I am here");
                // $(".background").css("background-image", "url(images/4.jpg)");
                // $(".background").css("filter","blur(5px)");
                
                $(".background").css("background-image","none");
                $home.fadeOut();
                $projects.fadeOut();
                $about.fadeIn();
                
                $white.css("border-style", "solid");
                
        });
        
        $c.click(function () {
                //alert("I am here");
                
                $(".background").css("background-image", "none");
                $home.fadeOut();
                $about.fadeOut();
                $projects.fadeIn();
                
                $white.css("border-style", "solid");
        });
});