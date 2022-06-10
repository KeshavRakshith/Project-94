var firebaseConfig = {
      apiKey: "AIzaSyASErM--oQ_vRg1X2DFYD7QTihHF32i0lA",
      authDomain: "kwitter-by-keshavrakshith.firebaseapp.com",
      databaseURL: "https://kwitter-by-keshavrakshith-default-rtdb.firebaseio.com",
      projectId: "kwitter-by-keshavrakshith",
      storageBucket: "kwitter-by-keshavrakshith.appspot.com",
      messagingSenderId: "67553361088",
      appId: "1:67553361088:web:ec29a9c87251adb35bc125"
    };
    
    
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"
function addRoom() 
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      }
      );
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirectToRoomName(name)

{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


