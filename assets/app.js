// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqC7lVDeuIKjqaZRREUB7rDZfB9--70Sc",
  authDomain: "project1-e5a96.firebaseapp.com",
  databaseURL: "https://project1-e5a96.firebaseio.com",
  projectId: "project1-e5a96",
  storageBucket: "project1-e5a96.appspot.com",
  messagingSenderId: "793064562321"
};
firebase.initializeApp(config);





var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=euu1LQJ75njV7gh2yYrVmDf5jG8ldshP&tag=hacker&rating=PG";

   $.ajax({
     url: queryURL,
     method: "GET"
   })
   
    .then(function(response) {
    console.log(queryURL);

     
    var imageURLs = [
      "https://media.giphy.com/media/ohONS2y8GTDoI/giphy.gif",
      "https://media.giphy.com/media/e5rHVwosWkEbS/giphy.gif",
      "https://media.giphy.com/media/VHHxxFAeLaYzS/giphy.gif",
      "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
      "https://media.giphy.com/media/Y0iW7rfgtnoHooAdNW/giphy.gif"
 ];
 
 function getImageTag() {
   var img = '<img src=\"';
   var randomIndex = Math.floor(Math.random() * imageURLs.length);
   img += imageURLs[randomIndex];
   img += '\" alt=\"Some alt text\"/>';
   return img;
 }

 //document.write(getImageTag());
 $("#gifs-appear-here").append(getImageTag);
    

    

  

  $("#submitBtn").on("click", function(event) {
          
    // Prevent form from submitting
        event.preventDefault();
        
    //Grab the values that the user enters in the text boxes in the "Add train" section. Store the values in variables.
    let uname = $("#inputUserName").val().trim();
    let psWord = $("#inputPassWord").val().trim();
    
    console.log(uname);
    console.log(psWord);
  
    if(uname === "" || psWord === "") {
    $('#invalidUserName').empty();
    $('#invalidPsword').empty();
    }
    else if (uname === null || psWord === null) {
    $('#invalidUserName').empty();
    $('#invalidPsword').empty();
  
    }
    else if (uname === "project1" && psWord === "12345") {
      window.open("../project1/home-nav.html");
  
    }
  
          });

  
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

    


    $("#submitBtn").on("click", function(event) {
          
      // Prevent form from submitting
          event.preventDefault();
          
      //Grab the values that the user enters in the text boxes in the "Add train" section. Store the values in variables.
        let uname = $("#inputUserName").val().trim();
      let psWord = $("#inputPassWord").val().trim();
      
      console.log(uname);
      console.log(psWord);
    
      if(uname === "" || psWord === "") {
      $('#invalidUserName').empty();
      $('#invalidPsword').empty();
      }
      else if (uname === null || psWord === null) {
      $('#invalidUserName').empty();
      $('#invalidPsword').empty();
    
      }
      else if (uname === "project1" && psWord === "12345") {
        window.open("../project1/home-nav.html");
    
      }
  });

  

   
