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
             'show more <span class="glyphicon glyphicon-triangle-bottom"></span> ' : 'show less <span class="glyphicon glyphicon-triangle-top"></span>');
        });
});