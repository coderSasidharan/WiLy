import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCp8a7lKKKw4mRWTgEwkdrZwBCuN96EqTQ",
    authDomain: "wily-app-7880f.firebaseapp.com",
    projectId: "wily-app-7880f",
    storageBucket: "wily-app-7880f.appspot.com",
    messagingSenderId: "206752811496",
    appId: "1:206752811496:web:eba9804a2ced268d873c5d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();