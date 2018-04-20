import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB0CfUQ5q5yNC_A5djhqdf9Bc3km0vxgjI",
    authDomain: "chat-app-5a133.firebaseapp.com",
    databaseURL: "https://chat-app-5a133.firebaseio.com",
    projectId: "chat-app-5a133",
    storageBucket: "chat-app-5a133.appspot.com",
    messagingSenderId: "791264839568"

    	};


var fire = firebase.initializeApp(config);

export default fire;