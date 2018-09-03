import firebase from 'firebase';

//<script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD4xO0rJiyRqzpTNfsElwA6gL85ctmwN4g",
    authDomain: "survey-87fc3.firebaseapp.com",
    databaseURL: "https://survey-87fc3.firebaseio.com",
    projectId: "survey-87fc3",
    storageBucket: "survey-87fc3.appspot.com",
    messagingSenderId: "805532426722"
  };
  var fire = firebase.initializeApp(config);    
  
export const DatabaseRef = fire.database().ref('topics');
export default fire;