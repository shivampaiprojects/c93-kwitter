
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
