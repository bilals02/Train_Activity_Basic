
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcJ61k8R9kNYs-nyvhDvyk10Ga56sd-68",
    authDomain: "bilalclassmode.firebaseapp.com",
    databaseURL: "https://bilalclassmode.firebaseio.com",
    projectId: "bilalclassmode",
    storageBucket: "bilalclassmode.appspot.com",
    messagingSenderId: "352161662938"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$('#child-button').on('click', function() {
    var rand = Math.floor(Math.random() * 5);
database.ref("/children").push({hello:rand});

});
//using push which adds children and whenyou listen you listen for children_added


//Using set which overwrites all data with what you provide and when you listen for changes you listen for value
$('#child-button').on('click', function() {
    var rand = Math.floor(Math.random() * 5);
database.ref("/values").set({hello:rand});

});

//Listening for child added changes
database.ref('/children').on("child_added", function(snap) {
console.log(snap.val());
$('#data').append(`<p>children - ${snap.val().hello}</p>`);
});


//Listening for value changes
/*database.ref('/values').on("value", function(snap) {
    console.log(snap.val());
$('#data').append(`<p>vlaues - ${snap.val().hello}</p>`);

    });
*/

