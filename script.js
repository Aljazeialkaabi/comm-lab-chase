// The flashlight follows the mouse
document.addEventListener("mousemove", function(event) {

  document.body.style.setProperty("--mouse-x", event.clientX + "px");
  document.body.style.setProperty("--mouse-y", event.clientY + "px");

});


// Changes the message when the viewer clicks the screen
document.addEventListener("click", function() {

  let message = document.getElementById("hidden-message");

  if (message) {
    message.style.display = "block";
    message.innerHTML = "You should probably stop looking.";
  }

});