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