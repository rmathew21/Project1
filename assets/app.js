

  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '{2162737323781924}',
  //     cookie     : true,
  //     xfbml      : true,
  //     version    : '{v3.2}'
  //   });
      
  //   FB.AppEvents.logPageView();   
      
  // };

  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "https://connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));

  //Click event for the submit button. When user clicks Submit button to sign in or create profile...

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