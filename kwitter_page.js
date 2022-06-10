//YOUR FIREBASE LINKS
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
  room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

      }


      );
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message=message_data['message'];
like=messsage_data['like']
name_with_tag="<h4>"+name+"<img class='user_trick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick'updateLike(this.ad)'>";
span_with_tag="<span class='glyphicon plyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row= name_with_tag+message_with_tag+like_button+ span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
