$(document).ready(function () {

    $('#kontakt-form #contact-name').on('keyup paste', check_name);
    $('#kontakt-form #contact-mail').on('keyup paste', check_mail);
    $('#kontakt-form #contact-text').on('keyup paste', check_text);
});
$(function () {
    $("#submit").on("click", function () {
        $("#kontakt-form").addClass("was-validated");
        check_name();
        check_mail();
        check_text();
        var name = $("#contact-name").val();
        var mail = $("#contact-mail").val();
        var text = $("#contact-text").val();

        if(check_name() && check_mail() && check_text()){
            $.post("send.php", {
                nameV: name,
                emailV: mail,
                textV: text
            }, function (data) {
                $('#kontakt-form')[0].reset();
                $("#contact-name").removeClass("is-invalid");
                $("#contact-mail").removeClass("is-invalid");
                $("#contact-text").removeClass("is-invalid");
                $('#message-sent').html("<span class='oi oi-check'></span>Wiadomość została wysłana");
                $('#message-sent').fadeIn('slow');
                $('#message-sent').delay(5000).fadeOut('slow');
            });
        } else {

        }


    });
});

function check_name() {
    var name = $("#contact-name").val();
    if (name == '') {
        $("#name-valid").html("To pole nie może być puste!");
        $("#name-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
        $("#contact-name").addClass("is-invalid");
        $("#contact-name").addClass("not-correct");
        return false;
    } else {
        $("#contact-name").removeClass("is-invalid");
        $("#contact-name").removeClass("not-correct");
        $("#name-valid").hide("fade", {
            direction: 'up'
        }, "ease", 3000);
        return true;
    }
}

function check_mail() {
    var wzor = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    var name = $("#contact-mail").val();
    if (name == '') {
        $("#topic-valid").html("To pole nie może być puste!");
        $("#topic-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
        $("#contact-mail").addClass("is-invalid");
        $("#contact-mail").addClass("not-correct");
    } else {
        if (!wzor.test(name)) {
            $("#topic-valid").html("Podany adres E-Mail jest niepoprawny!");
            $("#topic-valid").show("bounce", {
                direction: 'up'
            }, "ease", 3000);
            $("#contact-mail").addClass("is-invalid");
            $("#contact-mail").addClass("not-correct");
            return false;
        } else {
            $("#contact-mail").removeClass("is-invalid");
            $("#contact-mail").removeClass("not-correct");
            $("#topic-valid").hide("fade", {
                direction: 'up'
            }, "ease", 3000);
            return true;
        }

    }
}

function check_text() {
    var name = $("#contact-text").val();
    if (name == '') {
        $("#text-valid").html("To pole nie może być puste!");
        $("#text-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
        $("#contact-text").addClass("is-invalid");
        $("#contact-text").addClass("not-correct");
        $("#contact-name").focus(function () {

        });
        return false;
    } else {
        $("#contact-text").removeClass("is-invalid");
        $("#contact-text").removeClass("not-correct");
        $("#text-valid").hide("fade", {
            direction: 'up'
        }, "ease", 3000);
        return true;
    }
}

$(function () {

/////////////////////////////////////////////////////////
    $("#kontakt-form #contact-name").change(function () {
        check_name();
    });
    $("#kontakt-form #contact-mail").change(function () {
        check_mail();
    });
    $("#kontakt-form #contact-text").change(function () {
        check_text();
    });
});