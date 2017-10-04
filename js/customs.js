// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        // document.form1.text1.focus();
        return true;
    } else {
        // alert("You have entered an invalid email address!");
        // document.form1.text1.focus();
        return false;
    }
}


$(document).ready(function(){

    $('.emailForm').submit(function(e){
        e.preventDefault();
        var email = $(this).find('.emailInput').val();
        if(ValidateEmail(email)){
        $('.invalid').css({"display":"none"})            
        $('#mobNo').val('');
        $('.emailInput').val('');
        $.post("https://www.clickpost.in/api/v1/website-signup",
        {"email": email},
        function(data,status){
            $('#numberModal').modal({
                backdrop: 'static'
            });
        });

        }
        else{
            $(this).find('.invalid').css({"display":"block"})
        }
    });

    // $('.numberForm').submit(function(e){
    //     e.preventDefault();
    //     //submit via ajax
    //     console.log('validate.....');
    //     $('#sucessModel').modal({
    //         backdrop: 'static'
    //     });
    // });


    

});
