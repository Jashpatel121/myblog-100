// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyA-HJbNUsVhxhCtgHoDIWBA7bT7WqLD1tU",
    authDomain: "letschat-652c8.firebaseapp.com",
    databaseURL: "https://letschat-652c8-default-rtdb.firebaseio.com",
    projectId: "letschat-652c8",
    storageBucket: "letschat-652c8.appspot.com",
    messagingSenderId: "52944224241",
    appId: "1:52944224241:web:8abe63d6278c272b71ce50"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



