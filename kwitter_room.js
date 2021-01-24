// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA6qY0OvblXJy8ONk7WSMR5dEIKmOdpGjk",
      authDomain: "kwitter-project-427ef.firebaseapp.com",
      databaseURL: "https://kwitter-project-427ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-427ef",
      storageBucket: "kwitter-project-427ef.appspot.com",
      messagingSenderId: "680496442265",
      appId: "1:680496442265:web:a143725417f83940474108"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name_welcome").innerHTML = "Welcome  " + user_name + "  !";

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() { 
      firebase.database().ref("/").on('value', function (snapshot) { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function (childSnapshot) { 
                  childKey = childSnapshot.key; 
                  Room_names = childKey; 
                  console.log("Room Name - " + Room_names); 
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; 
                  document.getElementById("output").innerHTML += row; 
            }); }); } 
            
getData(); 
            

function redirectToRoomName(name) { 
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html"; 
} 
            
function logout() { 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location = "index.html"; 
}


    
