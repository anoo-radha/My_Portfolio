$(document).on("scroll", function(){
        if
      ($(document).scrollTop() > 100){
          $(".img-parallax").addClass("shrink");
            updateSliderMargin();
        }
        else
        {
            $(".img-parallax").removeClass("shrink");
            updateSliderMargin();
        }
    });