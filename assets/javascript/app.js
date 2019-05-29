var APIKey = "1d70a30270f720d8e73ae4fb21b0a24b";
$("#ClayHillsCrossing").on("click", function halls(event) {
    event.preventDefault();
    $(".yesClimb").empty();
    $(".image").empty();
    $(".mountain").empty();
    var button = "5537013";


    var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&id=" + button + "&APPID=" + APIKey;



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $('.image').html('<img id="theImg" src="assets/images/clay.jpg" />')
        $(".city").html("<h2>" + response.name + " Weather Details ");
        $(".temp").text("Temperature: " + response.main.temp);
        $(".con").text("Current Conditions: " + response.weather[0].main);
        $(".climb").text("Current Condition Details: " + response.weather[0].description);
        $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
        $(".mountain").html('<a href="https://www.mountainproject.com/area/112046192/mr-potato-head"><button type="button" class="btn btn-secondary"> View Classic Climbing Routes</a></button>');



        if (response.main.temp > 45 && response.main.temp < 90 && response.weather[0].main !== "Rain" && response.weather[0].main !== "Snow") {
            console.log("Let's Roll!");
            $(".yesClimb").html("<h4>Weather is good in Clay Hills, let's roll!!</h4>");

        } else {
            $(".yesClimb").html("<h4>No Go! Drink a beer at home or go another place.</h4>");
        }
        if (response.weather[0].main === "Thunderstorm") {
            $(".yesClimb").html("<h4>lightning! The Gods may kill you.</h4>");
        }


    });


});
///---Moab--////

$("#desertUt").on("click", function halls(event) {
    event.preventDefault();
    $(".yesClimb").empty();
    $(".image").empty();
    $(".mountain").empty();
    var button2 = "5543307";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&id=" + button2 + "&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $('.image').prepend('<img id="theImg" src="assets/images/moab.jpg" />')
        $(".city").html("<h2>" + response.name + " Weather Details ");
        $(".temp").text("Temperature: " + response.main.temp);
        $(".con").text("Current Conditions: " + response.weather[0].main);
        $(".climb").text("Current Condition Details: " + response.weather[0].description);
        $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
        $(".mountain").html('<a href="https://www.mountainproject.com/area/105717125/sunshine-wall"><button type="button" class="btn btn-secondary"> View Classic Climbing Routes</a></button>');
        if (response.main.temp > 45 && response.main.temp < 90 && response.weather[0].main !== "Rain" && response.weather[0].main !== "Snow") {
            console.log("Let's Roll!");
            $(".yesClimb").html("<h4>Weather is good in Moab, hello 3.2!!</h4>");

        } else {
            $(".yesClimb").html("<h4>No Go! Drink a beer at home or go another place.</h4>");
        }
        if (response.weather[0].main === "Thunderstorm") {
            $(".yesClimb").html("<h4>lightning! The Gods may kill you.</h4>");
        }


    });
});
///---Truth Or--////
$("#truth").on("click", function halls(event) {
    event.preventDefault();
    $(".yesClimb").empty();
    $(".image").empty();
    $(".mountain").empty();
    var button3 = "5495292";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&id=" + button3 + "&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $('.image').prepend('<img id="theImg" src="assets/images/truth.jpg" />')
        $(".city").html("<h2>" + response.name + " Weather Details ");
        $(".temp").text("Temperature: " + response.main.temp);
        $(".con").text("Current Conditions: " + response.weather[0].main);
        $(".climb").text("Current Condition Details: " + response.weather[0].description);
        $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
        $(".mountain").html('<a href="https://www.mountainproject.com/area/108351201/truth-or-consequences-area"><button type="button" class="btn btn-secondary"> View Classic Climbing Routes</a></button>');
        if (response.main.temp > 45 && response.main.temp < 90 && response.weather[0].main !== "Rain" && response.weather[0].main !== "Snow") {
            console.log("Let's Roll!");
            $(".yesClimb").html("<h4>Weather is good in T&C, Bat Cave!!</h4>");

        } else {
            $(".yesClimb").html("<h4>No Go! Drink a beer at home or go another place.</h4>");
        }
        if (response.weather[0].main === "Thunderstorm") {
            $(".yesClimb").html("<h4>lightning! The Gods may kill you.</h4>");
        }


    });
});

///---Dove Creek-////
$("#dove").on("click", function halls(event) {
    event.preventDefault();
    $(".yesClimb").empty();
    $(".image").empty();
    $(".mountain").empty();
    var button4 = "5419913";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&id=" + button4 + "&APPID=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $('.image').prepend('<img id="theImg" src="assets/images/nat.jpg" />')
        $(".city").html("<h2>" + response.name + " Weather Details ");
        $(".temp").text("Temperature: " + response.main.temp);
        $(".con").text("Current Conditions: " + response.weather[0].main);
        $(".climb").text("Current Condition Details: " + response.weather[0].description);
        $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
        $(".mountain").html('<a href="https://www.mountainproject.com/area/111312801/black-wall"><button type="button" class="btn btn-secondary"> View Classic Climbing Routes</a></button>');
        if (response.main.temp > 45 && response.main.temp < 90 && response.weather[0].main !== "Rain" && response.weather[0].main !== "Snow") {
            console.log("Let's Roll!");
            $(".yesClimb").html("<h4>Weather is good in Naturita area. Let's go to Redrocks.</h4>");

        } else {
            $(".yesClimb").html("<h4>No Go! Drink a beer at home or go another place.</h4>");
        }
        if (response.weather[0].main === "Thunderstorm") {
            $(".yesClimb").html("<h4>lightning! The Gods may kill you.</h4>");
        }


    });
});
///---Winslow////
$("#windslow").on("click", function halls(event) {
    event.preventDefault();
    $(".image").empty();
    $(".yesClimb").empty();
    $(".mountain").empty();
    var button5 = "5321473";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&id=" + button5 + "&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        $('.image').prepend('<img id="theImg" src="assets/images/wid.jpg" />')
        $(".city").html("<h2>" + response.name + " Weather Details ");
        $(".temp").text("Temperature: " + response.main.temp);
        $(".con").text("Current Conditions: " + response.weather[0].main);
        $(".climb").text("Current Condition Details: " + response.weather[0].description);
        $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
        $(".mountain").html('<a href="https://www.mountainproject.com/area/105989250/winslow-wall"><button type="button" class="btn btn-secondary"> View Classic Climbing Routes</a></button>');
        if (response.main.temp > 45 && response.main.temp < 90 && response.weather[0].main !== "Rain" && response.weather[0].main !== "Snow") {
            console.log("Let's Roll!");
            $(".yesClimb").html("<h4>Weather is good in Winslow, Get some Bud!</h4>");

        } else {
            $(".yesClimb").html("<h4>No Go! Drink a beer at home or go another place.</h4>");
        }
        if (response.weather[0].main === "Thunderstorm") {
            $(".yesClimb").html("<h4>lightning! The Gods may kill you.</h4>");

        }


    });
});