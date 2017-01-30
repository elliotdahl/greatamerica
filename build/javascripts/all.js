$(document).ready(function() {
  $("#scrolldown").click(function() {
    console.log("scroll");
    $('html, body').animate({
    scrollTop: ($('#page2').offset().top)
    },500);
  });



    console.log("american");
    // var messages = ["Muslim", "Christian", "Jewish", "Atheist", "Buddhist"];
    //
    // function getMessage() {
    //    return messages[Math.floor(Math.random() * messages.length)];
    //    return messages[messages.length];
    // }


    function steps() {
        console.log("step0");
        $("#american").removeClass("red").text("Jewish");

        setTimeout(
            function() {
                $("#american").text("Muslim");
            }, 1000);
        setTimeout(
            function() {
                $("#american").text("Buddhist");
            }, 2000);
        setTimeout(
            function() {
                $("#american").text("Christian");
            }, 3000);
        setTimeout(
            function() {
                $("#american").addClass("red").text("American");
            }, 4000);
        setTimeout(
            function() {
                $("#american").removeClass("red").text("Cisgender");
            }, 5000);
        setTimeout(
            function() {
                $("#american").text("Transgender");
            }, 6000);
        setTimeout(
            function() {
                $("#american").text("Gay");
            }, 7000);
        setTimeout(
            function() {
                $("#american").text("Undefined");
            }, 8000);
        setTimeout(
            function() {
                $("#american").addClass("red").text("American");
            }, 9000);
        setTimeout(
            function() {
                $("#american").removeClass("red").text("An Immigrant");
            }, 10000);
        setTimeout(
            function() {
                $("#american").text("A Refugee");
            }, 11000);
        setTimeout(
            function() {
                $("#american").text("Human");
            }, 12000);
        setTimeout(
            function() {
                $("#american").text("Homeless");
            }, 13000);
        setTimeout(
            function() {
                $("#american").addClass("red").text("American");
            }, 14000);



    }

    steps();
    var provisioning = setInterval(steps, 15000);





    //$(document.body).append(message);



});



