import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBe_7RIDUaUW3SQB2B49RG_1e1DisKpBiI",
  authDomain: "office-rpg-a81a4.firebaseapp.com",
  databaseURL: "https://office-rpg-a81a4.firebaseio.com",
  projectId: "office-rpg-a81a4",
  storageBucket: "office-rpg-a81a4.appspot.com",
  messagingSenderId: "767305307384"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
