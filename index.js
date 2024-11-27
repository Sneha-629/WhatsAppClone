//this is accordion effect for the elements
//acc is a collection of elements with the class "accordion".
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Sidebar chat Interaction - nteractions with chat elements in a sidebar
let sc=document.querySelectorAll(".sidebar-chat")   // representing a list of the document's elements that match the specified group of selectors.
sc.forEach(function (chat){
  chat.addEventListener("click",function(){

    loadmsg(this.getAttribute("chatid")-1);

    let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
        }
        this.className += " active";

    document.getElementById("chatname").innerText = this.querySelector("h4").innerText;   //returns an element that matches a CSS query
    document.getElementById("imgsrc").src = this.querySelector("img").src;

    //If the screen width is less than 600px, 
    //the sidebar is hidden and the main chat area is shown.
    let screenWidth = screen.width;
    if (screenWidth >= 600) {
        return;
    }


    let sb = document.querySelector(".sidebar");
    sb.style.display = 'none';
   
    let mc = document.querySelector(".message-container");
    mc.style.display = 'block';

    let newDiv = document.createElement("div");
    newDiv.className = "chat-header-right";
    let a = document.getElementById("n-head");
    let b = document.getElementById("n-title");
    a.insertBefore(newDiv, b);  // inserts a node before a reference node as a child of a parent node

    let bbtn=document.getElementById("backbtn");
    bbtn.addEventListener("click",function(){
      sb.style.display = 'block';
      mc.style.display = 'none';
    });

  });
});
//This function loads and displays messages for a selected chat.
function loadmsg(chatid){
  htmlmsg="";
  newmsg[chatid].forEach((msg)=>{
    htmlmsg=htmlmsg+`<p class="chat-msg ${msg.type} ">${msg.message}<span class="chat-timestamp">${msg.time}</span></p>`
  });
  document.getElementById("msgwrap").innerHTML=htmlmsg;
}
