$(document).ready(function() {
    $(".btn").click(function (e) {
        databaseurl = window.location.origin + "/src/database.json"
        var data = $.parseJSON($.ajax({
            url: databaseurl,
            dataType: "json",
            async: false
        }).responseText);
    });
});
