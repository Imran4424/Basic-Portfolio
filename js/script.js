
$(document).ready(function () 
{
        

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
            $e = $(".e"),
            $home = $(".home"),
            $projects = $(".projects"),
            $blog = $(".blog"),
            $albums = $(".albums"),
            $about = $(".about");
            
            

        $a.click(function ()
        {
                //alert("I am here");
                
                $("body").css("background-image","url(images/1.jpg)");
                $about.fadeOut();
                $projects.fadeOut();
                $blog.fadeOut();
                $albums.fadeOut();
                $home.fadeIn();

        });
        
        $b.click(function ()
        {
                //alert("I am here");
                // $("body").css("background-image", "url(images/4.jpg)");
                // $("body").css("filter","blur(5px)");
                
                $("body").css("background-image","none");
                $home.fadeOut();
                $projects.fadeOut();
                $blog.fadeOut();
                $albums.fadeOut();
                $about.fadeIn();
                
                
        });
        
        $c.click(function () 
        {
                //alert("I am here");
                
                $("body").css("background-image", "none");
                $home.fadeOut();
                $about.fadeOut();
                $blog.fadeOut();
                $albums.fadeOut();
                $projects.fadeIn();
        });
        
        $d.click(function () 
        {
                //alert("I am here");
                
                $("body").css("background-image", "none");
                $home.fadeOut();
                $about.fadeOut();
                $projects.fadeOut();
                $albums.fadeOut();
                $blog.fadeIn();
        });

        $e.click(function () 
        {
                //alert("I am here");
                
                $("body").css("background-image", "none");
                $home.fadeOut();
                $about.fadeOut();
                $projects.fadeOut();
                $blog.fadeOut();
                $albums.fadeIn();
        });

});