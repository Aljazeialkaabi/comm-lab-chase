// The flashlight follows the mouse
document.addEventListener("mousemove", function(mouse) {

  document.body.style.setProperty("--mouse-x", mouse.clientX + "px");
  document.body.style.setProperty("--mouse-y", mouse.clientY + "px");

});
