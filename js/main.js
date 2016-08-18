$(document).ready(function(){
    //Shoping cart
    
    $("#shopingCart").click(function(){
        $("div.shopingcart").toggle('slide');
    });
    
    $("td a.closeShop").click(function(){
       $(this).parent().parent().fadeOut();
    });
    
    });
    

$(document).ready(function () {

    //Podesavanje funkcije za brzinu automatske promene slike za prvi slajder na HOME stranivi i za slajder na ABOUT US stranivi.
    $('.carousel').carousel({
        interval: 6000 //changes the speed
    });


    
    
});






$(document).ready(function () {
    //Povecavanje i smanjivanje
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

//heart like
$(document).ready(function(){
   $('.heart').click(function(){
       $(this).toggleClass('fa fa-heart-o fa fa-heart');  
   }); 
});

$(document).ready(function(){
   $('.eyes').click(function(){
       $(this).toggleClass('fa fa-eye-slash fa fa-eye');  
   }); 
});


//Funkcija za Slider sa 4 slike
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


$(document).ready(function(){
   $('.eye').click(function(){
       $(this).toggleClass('fa fa-eye-slash fa fa-eye');
       var eye = $('.password').attr('type');
    if(eye == 'password'){
        $('.password').attr('type','text');
    }else{
        $('.password').attr('type','password');
    }
      
   }); 
});











$(document).ready(function () {
    $('.form_date').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
//Funkcija za timepicker
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
});


$(document).ready(function () {
    $(function () {
        var rating = 1.6;

        $(".counter").text(rating);

        $("#rateYo1").on("rateyo.init", function () {
            console.log("rateyo.init");
        });

        $("#rateYo1").rateYo({
            rating: rating,
            numStars: 7,
            precision: 2,
            starWidth: "64px",
            spacing: "5px",
            multiColor: {
                startColor: "#000000",
                endColor: "#000000"
            },
            onInit: function () {

                console.log("On Init");
            },
            onSet: function () {

                console.log("On Set");
            }
        }).on("rateyo.set", function () {
            console.log("rateyo.set");
        })
                .on("rateyo.change", function () {
                    console.log("rateyo.change");
                });

        $(".rateyo").rateYo();

        $(".rateyo-readonly-widg").rateYo({
            rating: rating,
            numStars: 5,
            precision: 2,
            minValue: 1,
            maxValue: 5
        }).on("rateyo.change", function (e, data) {

            console.log(data.rating);
        });
    });
});