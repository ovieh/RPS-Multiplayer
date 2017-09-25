// variables: choice, losses, wins,
// objects: player :name, game

  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyDSERWkkCXaXjNL07E9CmfYbygVaXgjBYA",
    authDomain: "rps-rcb-2611b.firebaseapp.com",
    databaseURL: "https://rps-rcb-2611b.firebaseio.com",
    projectId: "rps-rcb-2611b",
    storageBucket: "rps-rcb-2611b.appspot.com",
    messagingSenderId: "951207921709"
  };
  firebase.initializeApp(config);
  let database = firebase.database();
  console.log(firebase.database());

  function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email
    });
  }

  writeUserData(4, "ovieh", "omokoro@gmail.com", "none")
  console.log(database.ref('users/'))