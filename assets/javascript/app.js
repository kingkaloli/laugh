$("#find-laugh").on("click", function(event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    var laugh = $("#laugh-input").val();

    // Here we grab the text from the input box
    // var movie = $("#laugh-input").val();

    // Here we construct our URL
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ laugh + "&api_key=1UpFUCsNhpc1IK7JBMtLDBOu3OqZ7zPP";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
console.log(queryURL);


});
});