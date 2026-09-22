// The flashlight follows the mouse
document.addmouseListener("mousemove", function(mouse) {

  document.body.style.setProperty("--mouse-x", mouse.clientX + "px");
  document.body.style.setProperty("--mouse-y", mouse.clientY + "px");

});


// Changes the message when the person clicks the screen
document.addEmouseListener("click", function() {

  let message = document.getElementById("hidden-message");

  if (message) {
    message.style.display = "block";
    message.innerHTML = "You should probably stop looking.";
  }

});