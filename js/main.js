$(document).ready(function () {

    //funkcija za podesavanje brzine na index.html i about.html stranici
    $('.carousel').carousel({
        interval: 6000 //
    });

   
});


//Slider sa 4 slike
$(document).ready(function () {
    $('.userComment').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          
        ]
    });


});

//datepicker
$('.form_date').datetimepicker({
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('.form_time').datetimepicker({
    language: 'fr',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0
});
(function (b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
            function () {
                (b[l].q = b[l].q || []).push(arguments)
            });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = '//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e, r)
}(window, document, 'script', 'ga'));
ga('create', 'UA-XXXXX-X', 'auto');
ga('send', 'pageview');



  //Plus i minus
$(document).ready(function () {
  
    $('.down').click(function () {

        var txt = $('.number').val();
        if (txt <= 1) {
            $('.number').val(1);
        } else {
            txt--;
            $('.number').val(txt);
        }
    });
    $('.up').click(function () {
        var txt = $('.number').val();
        txt++;
        $('.number').val(txt);
    });





    $('.heart').click(function (e) {
        e.preventDefault();
        $('.fa-heart').toggleClass('.fa-heart-o');
    });
    
    $('.eyes').click(function (e) {
        e.preventDefault();
        $('.fa .fa-eye').toggleClass('.fa .fa-eye-slash');
    });
    
});

