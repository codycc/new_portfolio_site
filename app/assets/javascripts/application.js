// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).on('ready',function(){
   
    $('.jumbotron h1').fadeIn(2000);
    $('.jumbotron h2').fadeIn(6000);
    $('.jumbotron a').fadeIn(2000);



    $(".button1").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("ul").offset().top + offset
    }, 2000);
});

});