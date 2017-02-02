$(document).ready(function() {
  $("#scrolldown").click(function() {
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



    function peoples() {
        $("#person1").addClass("people-move");

        setTimeout(
            function() {
                $("#person1").removeClass("people-move");
                $("#person2").addClass("people-move");
            }, 4000);
        setTimeout(
            function() {
                $("#person2").removeClass("people-move");
                $("#person3").addClass("people-move");
            }, 8000);
        setTimeout(
            function() {
                $("#person3").removeClass("people-move");
                $("#person4").addClass("people-move");
            }, 12000);
        setTimeout(
            function() {
                $("#person4").removeClass("people-move");
                $("#person5").addClass("people-move");
            }, 16000);
        setTimeout(
            function() {
                $("#person5").removeClass("people-move");
                $("#person6").addClass("people-move");
            }, 20000);




    }

    peoples();
    var peoples = setInterval(peoples, 20000);





    //$(document.body).append(message);



});
