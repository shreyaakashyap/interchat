var firebaseConfig = {
      apiKey: "AIzaSyChkgMv7636-Um1VurUUyMrYtXFYPgOO_k",
      authDomain: "interchat-69503.firebaseapp.com",
      databaseURL: "https://interchat-69503-default-rtdb.firebaseio.com",
      projectId: "interchat-69503",
      storageBucket: "interchat-69503.appspot.com",
      messagingSenderId: "245440482911",
      appId: "1:245440482911:web:7dad23a5d9586eaa4255ea"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpouse: "adding room name"
      })

      localStorage.setItem("room_name",room_name);
      window.location = "inter_page.html";        
  }

function logout() {
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("rooms_name"); 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
       //Start code
       console.log("Room Name -", + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectTRN(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End code
       });});}
 getData();
 
 function redirectTRN(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location = "inter_page.html";
 }