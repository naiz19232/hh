const firebaseConfig = {
    apiKey: "AIzaSyBcVH6gcqoNGWPclUuzPTLhqIHLEwaZVXg",
    authDomain: "pratice-bbf46.firebaseapp.com",
    projectId: "pratice-bbf46",
    storageBucket: "pratice-bbf46.appspot.com",
    messagingSenderId: "549694282373",
    appId: "1:549694282373:web:022dc3bf8107af8eb5e7ec",
    measurementId: "G-T2CWJ0197R"
  }
firebase.initializeApp(firebaseConfig);
  function add(){
      username = document.getElementById('username').value;
      firebase.database().ref("/").child(username).update({
          purpose : "adding whatever you want",
          purpos : document.getElementById('username').value
      });
  }