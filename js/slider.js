
$('.carousel').carousel({
    interval: 6000 //speed
});


$(document).ready(function () {
    $("button").click(function () {
        $(".field").toggle('slow');
    });


    $("button").click(function () {
        $(".dartDown").toggle();
        $(".dartUp").toggle();
    });
})