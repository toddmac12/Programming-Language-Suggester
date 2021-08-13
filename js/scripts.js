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
            // alert(JavaScript);
            // alert(Ruby);
            // alert(Python);

        } else if (bestProgramAnswer3 === "Ruby") {
            Ruby++;
            $("#formRadio3").hide();
            // alert(JavaScript);
            // alert(Ruby);
            // alert(Python);
        } else if (bestProgramAnswer3 === "Python") {
            Python++;
            $("#formRadio3").hide();
            // Test whether scores are being tabulated
            // alert(JavaScript);
            // alert(Ruby);
            // alert(Python);   
        } else {}
        // Calculate and show Results
        $("#showResult").show();
        if (JavaScript >= 2) {
            // alert("testJavaScript");
            $("#JavaScriptResult").show();
        } else if (Ruby >= 2) {
            // alert("testRuby");
            $("#RubyResult").show();
        } else if (Python >= 2) {
            // alert("testPython");
            $("#PythonResult").show();
        } else {
            // $("#showResult").hide();
            $("#noresult").show()
                // alert("testno");
        }

        // reset button
        $("#btnReset").click(function() {
            location.reload();
        });

    });


});