
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  })


$(document).ready(function () {


    $("h2.center").click(function () {
        // Change color logic here (e.g., set it to a different color)
        $(this).css("color", "blue"); // Change "blue" to the desired color
    });
  

    // Click event for centering and changing color
    $(".card-title").click(function () {
        $(this).toggleClass("centered-text");
        // Change color logic here (e.g., toggle between red and black)
        if ($(this).hasClass("centered-text")) {
            $(this).css("color", "red");
        } else {
            $(this).css("color", "black");
        }
    });



});

    $(document).ready(function () {
        // Click event for the button
        $("button.btn-primary").click(function () {
            // Show an alert with the message
            alert("Información enviada");
        });
    });
