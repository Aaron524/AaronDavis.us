$(document).ready(function() {

    $('.hint1').hide();
    $('.btn-group button').click(function(){
        var target = "#" + $(this).data("target");
        $(target).show();
    });

});