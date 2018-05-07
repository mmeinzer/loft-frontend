import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCyKPNDbrTtTlV0Ryq-dLm9bjxpL5-flqw",
  authDomain: "loft-cbea3.firebaseapp.com",
  databaseURL: "https://loft-cbea3.firebaseio.com",
  projectId: "loft-cbea3",
  storageBucket: "loft-cbea3.appspot.com",
  messagingSenderId: "955801660646"
};

firebase.initializeApp(config);

export const database = firebase.database();
export default firebase;
