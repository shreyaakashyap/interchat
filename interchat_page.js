//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAWl0xOEFuVnF9-9nwNtGWABoHk-9hkTe8",
      authDomain: "classtest-24702.firebaseapp.com",
      databaseURL: "https://classtest-24702-default-rtdb.firebaseio.com",
      projectId: "classtest-24702",
      storageBucket: "classtest-24702.appspot.com",
      messagingSenderId: "196644566543",
      appId: "1:196644566543:web:972c2d39f675d98824157a"
    };
  
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
    window.location = "index.html";  
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });

      document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
