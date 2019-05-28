var APIKey = "1d70a30270f720d8e73ae4fb21b0a24b";
$("#ClayHillsCrossing").on("click", function halls(event) {
    event.preventDefault();
    var button = "5537013";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&id=" + button + "&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
      $(".city").html("<h1>" + response.name + " Weather Details ");
      $(".temp").text("Temperature: " + response.main.temp);
      $(".con").text( "Current Conditions: " + response.weather[0].main);
      $(".climb").text("Current Condition Details: " + response.weather[0].description);
      
    });
});
///---Moab--////

$("#desertUt").on("click", function halls(event) {
    event.preventDefault();
    var button2 = "5543307";
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=" + button2 + "&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $(".city").html("<h1>" + response.name + " Weather Details ");
    });
});
///---Truth Or--////
$("#truth").on("click", function halls(event) {
    event.preventDefault();
    var button3 = "5495292";
    var APIKey = "1d70a30270f720d8e73ae4fb21b0a24b";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=" + button3 + "&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $(".city").html("<h1>" + response.name + " Weather Details ");
    });
});

///---Dove Creek-////
$("#dove").on("click", function halls(event) {
    event.preventDefault();
    var button4 = "5419913";
    var APIKey = "1d70a30270f720d8e73ae4fb21b0a24b";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=" + button4 + "&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $(".city").html("<h1>" + response.name + " Weather Details ");
    });
});
///---Winslow////
$("#windslow").on("click", function halls(event) {
    event.preventDefault();
    var button5 = "5321473";
    var APIKey = "1d70a30270f720d8e73ae4fb21b0a24b";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=" + button5 + "&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $(".city").html("<h1>" + response.name + " Weather Details ");
    });
});