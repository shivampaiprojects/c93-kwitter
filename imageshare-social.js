
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCpgxJ9WNNkWUS5JLjYzprSwlr7hx3c5cc",
      authDomain: "imageshare-social.firebaseapp.com",
      databaseURL: "https://imageshare-social-default-rtdb.firebaseio.com",
      projectId: "imageshare-social",
      storageBucket: "imageshare-social.appspot.com",
      messagingSenderId: "344071673304",
      appId: "1:344071673304:web:82b4ea7987a083afcc8ead",
      measurementId: "G-8BKH4JKP23"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRow() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update ({
           purpose : "adding A Room"
     });
     localStorage.setItem("room_name" , room_name);
     window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();
function redirect(name) {
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
