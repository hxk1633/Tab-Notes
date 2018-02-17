var note_type = ["Title", "Header", "List", "Paragraph"];
var noteTracker = 0;

function renderTemplate() {
    $('form').submit(function () {
        if ($('input').val() !== '') {
            input_value = $('input').val();
            switch (noteTracker) {
                case 0:
                    $('#notes').append('<h1>' + input_value + '</h1>');
                    break;
                case 1:
                    $('#notes').append('<h2>' + input_value + '</h2>');
                    break;
                case 2:
                    $('#notes').append('<ul><li>' + input_value + '</li></ul>');
                    break;


            }

        } else {
            $('input').val('');
            return false;
        }
    });
}
var input_focus = function () {
    return document.getElementById("inputbox").focus();
}


    function cycleNote() {

        if (noteTracker < note_type.length - 1) {
            noteTracker++;
        } else {
            noteTracker = 0;
        }

    }

    function keyPress(e) {
        if (e.keyCode == 9) {
            e.preventDefault();

            cycleNote();

            $("div.note_type").html("<h1>" + note_type[noteTracker] + "</h1>");
            $("div#test").html("<h1>" + noteTracker + "</h1>");
            if (noteTracker === 3) {
                $('form').html('<textarea id="inputbox"></textarea>');


            } else {
                $('form').html('<input id="inputbox" type="text"/>');

            }
            input_focus();


        }
    }
$(document).ready(function () {
    document.getElementById("inputbox").focus();
    $("div#test").html("<h1>" + noteTracker + "</h1>");
    $("div.note_type").html("<h1>" + note_type[noteTracker] + "</h1>");

    $('body').keydown(keyPress);
    renderTemplate();
    $("#form").validate({
        rules: {
            input: {
                required: true,
                minlength: 10
            }

        }
    });
});S
