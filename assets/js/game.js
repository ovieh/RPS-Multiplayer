// variables: choice, losses, wins,
// objects: player :name, game

// class Player {
//   constructor(name="", wins=0, losses=0, number=0) {
//     this.name = name;
//     this.wins = wins;
//     this.losses = losses;
//     this.number = number;
//   }
// }

// let players = {
//   user: new Player(),
//   opponent: new Player()

// }


//console.log(players.user);

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDSERWkkCXaXjNL07E9CmfYbygVaXgjBYA",
  authDomain: "rps-rcb-2611b.firebaseapp.com",
  databaseURL: "https://rps-rcb-2611b.firebaseio.com",
  projectId: "rps-rcb-2611b",
  storageBucket: "rps-rcb-2611b.appspot.com",
  messagingSenderId: "951207921709"
};
firebase.initializeApp(config);

let database = firebase.database();




//console.log(firebase.database());

// Setting player names
$("#submit-name").on("click", function (event) {
  event.preventDefault();
  let name = $(this).prev().val().trim();

  //using .on seems to send *many* requests  
  database.ref("players").once("value", function (snapshot) {
    if (snapshot.child(1).exists()) {
      addPlayer(name, 2);
      $("#submit-form").hide();
      $("#admin").append(`<div> ${name}, you're player two`);
      console.log(snapshot.child(1).exists());
    } else {
      addPlayer(name, 1)
      console.log(snapshot.child(1).exists());
      $("#submit-form").hide();
      $("#admin").append(`<div> ${name} , you're player one`);
    }

  });

  // console.log(players.user.name);
});

// Add listerner that displays player choices
database.ref("players").once("value", (snapshot) => {
  if(snapshot.child(1).exists() && snapshot.child(2).exists()) {
    
  }
});

// Adds player to database
let addPlayer = (name, number) => {
  database.ref("players/" + number).set({
    name: name,
    wins: 0,
    losses: 0
  });
}

let connectionsRef = database.ref("/connections");
let connectedRef = database.ref(".info/connected");


connectedRef.on('value', (snapshot) => {
  if(snapshot.val()) {
    let con = connectedRef.push(true);

    con.onDisconnect().remove();
  }
});

// connectionsRef.on('value', (snapshot) => {
//   $("#admin").html(snapshot.numChildren());
// });