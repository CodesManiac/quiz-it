import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAQ_SM5uxLzyHXPEGbiaaOnExyck4VBxBQ",
    authDomain: "quiz-it-183ae.firebaseapp.com",
    databaseURL: "https://quiz-it-183ae.firebaseio.com",
    projectId: "quiz-it-183ae",
    storageBucket: "quiz-it-183ae.appspot.com",
    messagingSenderId: "288157090740",
    appId: "1:288157090740:web:25eb367572539e4084e8e1"
  };
  const Firebase=firebase.initializeApp(firebaseConfig);

  export default Firebase;