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

// Get a reference to the database service
var database = firebase.database();
// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles
var user = firebase.auth().currentUser;

//signs user into firebase
 $("#submitBtn").on("click", e => {
  const textEmail = $("#inputUserEmail").val();
  const textPassword = $("#inputPassWord").val();
  
    // console.log(textPassword);
  //  console.log(textEmail);
      //firebase user authentication
      const email = textEmail;
      const password = textPassword;
      const auth = firebase.auth();
       // sign in
       const promise = auth.signInWithEmailAndPassword(email, password);
       promise.catch(e => console.log(e.message));
 });


 //adds email to firebase
 $("#indexSignUp").on("click", e =>  {
   //firebase user authentication
   const textEmail = $("#inputEmail1").val();
  const textPassword = $("#exampleInputPassword1").val();
  console.log(textEmail)
   const email1 = textEmail;
   const password = textPassword;
   const auth = firebase.auth();
   // sign in
   const promise = auth.createUserWithEmailAndPassword(email1, password);

   promise.catch(e => console.log(e.message));

    if(textEmail === "" && textPassword === ""){
      console.log("you cant enter")
    } else {window.open("../project1/home-nav.html")}
     

 });

 $("#saveBtn").on("click", function() {
    //   const textFullName = $("#inputFullName1").val();
    //  const textUserName = $("#inputUserName1").val();
    //  var userId = firebase.auth().currentUser.uid;
    console.log("hey");
    // function writeUserData() {
    //  firebase.database().ref('users/' + userId).set({
    //     email: textEmail,
    //    name: textFullName,
    //     username: textUserName
    //   });
    // }

    // writeUserData();


  //  var personInfo = firebase.database().ref('users/' + textUserName + 'name');
  //   personInfo.on('value', function(snapshot) {
  //     console.log(snapshot.val());
  //   })
  });


$("#loginBtn").on("click", function() {
  firebase.auth().signOut();
  window.open("../project1/member-login.html");
});

//if user has been created and password is correct, will direct you to home/nav page.

$("#submitBtn").on("click", function(event) {
          
  // Prevent form from submitting
      event.preventDefault();
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.open("../project1/home-nav.html")
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  
});








//giphy ajax call

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



  

 