$(document).ready(function() {
    var JavaScript = 0;
    var Ruby = 0;
    var Python = 0;

    $("#formRadio1").submit(function(event) {
        event.preventDefault();


        const bestProgramAnswer1 = $("input:radio[name=answer1]:checked").val();
        if (bestProgramAnswer1 === "JavaScript") {
            $("#formRadio1").hide();
            $("#formRadio2").show();
            return JavaScript++;
        } else if (bestProgramAnswer1 === "Ruby") {
            $("#formRadio1").hide();
            $("#formRadio2").show();
            return Ruby++;
        } else if (bestProgramAnswer1 === "Python") {
            $("#formRadio1").hide();
            $("#formRadio2").show();
            return Python++;
        } else {}
    });


    $("#formRadio2").submit(function(event) {
        event.preventDefault();
        const bestProgramAnswer2 = $("input:radio[name=answer2]:checked").val();
        if (bestProgramAnswer2 === "JavaScript") {
            $("#formRadio2").hide();
            $("#formRadio3").show();
            return JavaScript++;
        } else if (bestProgramAnswer2 === "Ruby") {
            $("#formRadio2").hide();
            $("#formRadio3").show();
            return Ruby++;
        } else if (bestProgramAnswer2 === "Python") {
            $("#formRadio2").hide();
            $("#formRadio3").show();
            return Python++;
        } else {}
    });


    $("#formRadio3").submit(function(event) {
        event.preventDefault();
        const bestProgramAnswer3 = $("input:radio[name=answer3]:checked").val();
        if (bestProgramAnswer3 === "JavaScript") {
            JavaScript++;
            $("#formRadio3").hide();


        } else if (bestProgramAnswer3 === "Ruby") {
            Ruby++;
            $("#formRadio3").hide();

        } else if (bestProgramAnswer3 === "Python") {
            Python++;
            $("#formRadio3").hide();

        } else {}

        $("#showResult").show();
        if (JavaScript >= 2) {

            $("#JavaScriptResult").show();
        } else if (Ruby >= 2) {

            $("#RubyResult").show();
        } else if (Python >= 2) {
            $("#PythonResult").show();
        } else {
            $("#noresult").show()
        }

        $("#btnReset").click(function() {
            location.reload();
        });

    });


});