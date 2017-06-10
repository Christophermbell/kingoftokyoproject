// Initialize Firebase

  var config = {
    apiKey: "AIzaSyA-WeAmobOLfTdlCJUAhnYq3gQCUDkM0nA",
    authDomain: "kingoftokyo-55ef8.firebaseapp.com",
    databaseURL: "https://kingoftokyo-55ef8.firebaseio.com",
    projectId: "kingoftokyo-55ef8",
    storageBucket: "kingoftokyo-55ef8.appspot.com",
    messagingSenderId: "917898666838"
};


  firebase.initializeApp(config);

  var database = firebase.database();

//Firebase Function

database.ref().on("value", function(snapshot) {

    //Gather usernames from Firebase and set to Player vars

      var Player1 = snapshot.val().player1;

      var Player2 = snapshot.val().player2;

      var Player3 = snapshot.val().player3;

      var Player4 = snapshot.val().player4;

    //assign player vars to global array

      globals[0] = Player1;

      globals[1] = Player2;

      globals[2] = Player3;

      globals[3] = Player4;

    //Create new objects setting the player with their selected monster

    assignment1 = {
    Player1: globals[0],
    Monster: monsters[0]
};
  
    assignment2 = {
    Player2: globals[1],
    Monster: monsters[0]
};

    assignment3 = {
    Player3: globals[2],
    Monster: monsters[0]
};

    assignment4 = {
    Player4: globals[3],
    Monster: monsters[0]
};

      //Starting Message
      $("#turn-player").text(snapshot.val().player1 + " choose your character!");

});

  //global variables + arrays

    var counter = 4

    monsters = [];

    globals = [];

    var assignment1;
    var assignment2;
    var assignment3;
    var assignment4;

    var name1;
    var name2;
    var name3;
    var name4;

    var selection1;
    var selection2;
    var selection3;
    var selection4;

    console.log(globals);

  //Character select buttons



    $("#monster1").on("click", function(event) {

      console.log('monster 1 click, assignment1 is', assignment1)

      $("#monster1").hide();
        counter--
        checker();
        var name1 = $('#name1').text();
        console.log(name1);

                  if(counter == 3){
                    monsters[0] = name1;
                    console.log(monsters);
                      }else if(counter == 2){
                        monsters[1] = name1;
                        }else if(counter == 1){
                          monsters[2] = name1;
                            }else{
                              monsters[3] = name1;
                              }

                              //database.ref().push(assignment1);

});

    $("#monster2").on("click", function(event) {

      $("#monster2").hide();
        counter--
        checker();
        var name2 = $('#name2').text();
        console.log(name2);

          if(counter == 3){
                    monsters[0] = name2;
                    console.log(monsters);
                      }else if(counter == 2){
                        monsters[1] = name2;
                        }else if(counter == 1){
                          monsters[2] = name2;
                            }else{
                              monsters[3] = name2;
                              }

                

});


    $("#monster3").on("click", function(event) {

      $("#monster3").hide();
      counter--
      checker();
      var name3 = $('#name3').text();
      console.log(name3);

        if(counter == 3){
                    monsters[0] = name3;
                    console.log(monsters);
                      }else if(counter == 2){
                        monsters[1] = name3;
                        }else if(counter == 1){
                          monsters[2] = name3;
                            }else{
                              monsters[3] = name3;
                              }


});


    $("#monster4").on("click", function(event) {

       $("#monster4").hide();
        counter--
        checker();
        var name4 = $('#name4').text();
        console.log(name4);

          if(counter == 3){
                    monsters[0] = name4;
                    console.log(monsters);
                      }else if(counter == 2){
                        monsters[1] = name4;
                        }else if(counter == 1){
                          monsters[2] = name4;
                            }else{
                              monsters[3] = name4;
                              }

});

//Counter to determine who is next to select their character.

function checker() {

if (counter == 4) {
  $("#turn-player").text(globals[0] + " choose your character!");
 
}
  else if(counter == 3) {
    $("#turn-player").text(globals[1] + " choose your character!");
    
}
  else if(counter == 2) {
    $("#turn-player").text(globals[2] + " choose your character!");

}
  else if(counter == 1) {
    $("#turn-player").text(globals[3] + " choose your character!");
    
}
  else{
    $("#turn-player").text("PRESS THE START GAME BUTTON!");
};

};



//Set user monster data in Firebase and move on to the game screen

$("#start-game").click(function(event) {
    
    var playerSettings = {
        player1: globals[0],
        monster1: monsters[0],
        player2: globals[1],
        monster2: monsters[1],
        player3: globals[2],
        monster3: monsters[2],
        player4: globals[3],
        monster4: monsters[3]
     };

     console.log(playerSettings);

    //get new key
     database.ref().set(playerSettings);

     
     });