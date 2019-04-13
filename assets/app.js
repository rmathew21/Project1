var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=euu1LQJ75njV7gh2yYrVmDf5jG8ldshP&q=programmer&limit=2&offset=0&rating=PG&lang=en";

   $.ajax({
     url: queryURL,
     method: "GET"
   })
   
    .then(function(response) {
    console.log(queryURL);

    console.log(response);

    // storing data from the AJAX request in the results variable
    var results = response.data;

    // looping through each result item
    for (var i = 0; i < results.length; i++) {

    // creating and storing a div tag
    var programmer = $("<div>");

    var p = $("<p>").text("Rating: " + results[i].rating);

    var programmerImage = $("<img>").attr('src', results[i].images.fixed_height.url);

    programmer.append(p);
    programmer.append(programmerImage);

    $("#gifs-appear-here").prepend(programmerImage);

    }
  });

  

   