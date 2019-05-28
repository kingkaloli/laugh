$("#hallsCrossing").on("click", function halls(event) {
    event.preventDefault();
    var button="5537013"

var APIKey = "1d70a30270f720d8e73ae4fb21b0a24b";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?id="+button+"&APPID=" + APIKey;



$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  console.log(queryURL);
  console.log(response);
  });
 
   

    // This line grabs the input from the textbox
    

    // Adding the movie from the textbox to our array
    

    // Calling renderButtons which handles the processing of our movie array
    
  });
//   movies.push(movie);
//     console.log(movies);
















// "id": 5537013,


