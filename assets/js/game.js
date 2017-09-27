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
let userId = 1;



//console.log(firebase.database());

// Setting player names
$("#submit-name").on("click", function (event) {
  event.preventDefault();
  let name = $(this).prev().val().trim();

  database.ref("players").once("value", function (snapshot) {
    if (snapshot.child(1).exists()) {
      addPlayer(name, 2);
      console.log(snapshot.child(1).exists());
    } else {
      addPlayer(name, 1)
      console.log(snapshot.child(1).exists())
    }

  });

  // console.log(players.user.name);
});

let addPlayer = (name, number) => {
  database.ref("players/" + number).set({
    name: name,
    wins: 0,
    losses: 0
  });
}