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
            $("#formRadio3").hide();
            $("#formRadio4").show();
            return JavaScript++;
        } else if (bestProgramAnswer3 === "Ruby") {
            $("#formRadio3").hide();
            $("#formRadio4").show();
            return Ruby++;
        } else if (bestProgramAnswer3 === "Python") {
            $("#formRadio3").hide();
            $("#formRadio4").show();
            return Python++;
        } else {}
    });
    $("#formRadio4").submit(function(event) {
        event.preventDefault();
        const bestProgramAnswer4 = $("input:radio[name=answer4]:checked").val();
        if (bestProgramAnswer4 === "JavaScript") {
            $("#formRadio4").hide();
            $("#formRadio5").show();
            return JavaScript++;
        } else if (bestProgramAnswer4 === "Ruby") {
            $("#formRadio4").hide();
            $("#formRadio5").show();
            return Ruby++;
        } else if (bestProgramAnswer4 === "Python") {
            $("#formRadio4").hide();
            $("#formRadio5").show();
            return Python++;
        } else {}
    });


    $("#formRadio5").submit(function(event) {
        event.preventDefault();
        const bestProgramAnswer5 = $("input:radio[name=answer5]:checked").val();
        if (bestProgramAnswer5 === "JavaScript") {
            JavaScript++;
            $("#formRadio5").hide();
        } else if (bestProgramAnswer5 === "Ruby") {
            Ruby++;
            $("#formRadio5").hide();
        } else if (bestProgramAnswer5 === "Python") {
            Python++;
            $("#formRadio5").hide();
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