$(document).ready(function() {


    $('.btn-group button').click(function(){
        var target = "#" + $(this).data("target");
        $(target).removeClass('hidden');
    });

});

