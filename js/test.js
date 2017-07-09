  $(document).ready(function(){
    $("#gear").click(function(){
        $("#gearDrop").slideToggle("slow");
    });
});

  $(document).ready(function(){
        $("#gear").click(function(){
            $(this).html($(this).html() == 'hide my photograph gear <span class="glyphicon glyphicon-triangle-top"></span>' ?
             'show my photograph gear <span class="glyphicon glyphicon-triangle-bottom"></span> ' : 'hide my photograph gear <span class="glyphicon glyphicon-triangle-top"></span>');
        });
});
  $(document).ready(function(){
    $("#gallery").click(function(){
        $("#galleryDrop").slideToggle("slow");
    });
});

  $(document).ready(function(){
        $("#gallery").click(function(){
            $(this).html($(this).html() == 'show less <span class="glyphicon glyphicon-triangle-top"></span>' ?
             'show my photogallery <span class="glyphicon glyphicon-triangle-bottom"></span> ' : 'show less <span class="glyphicon glyphicon-triangle-top"></span>');
        });
});
  $(document).ready(function(){
    $(".flipPic").click(function(){
        $(".panelPic").slideToggle("slow");
    });
});

  $(document).ready(function(){
        $(".flipPic").click(function(){
            $(this).html($(this).html() == 'show less <span class="glyphicon glyphicon-triangle-top"></span>' ?
             'my post card <span class="glyphicon glyphicon-triangle-bottom"></span> ' : 'show less <span class="glyphicon glyphicon-triangle-top"></span>');
        });
});
// link scroller
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing')
        window.location.hash = target;
      });
  });
// to top scroller
$(document).ready(function(){
      $('body').append('<div id="toTop"</div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});