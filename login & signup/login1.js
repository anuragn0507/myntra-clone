var signArr = JSON.parse(localStorage.getItem("singupDetails")) || [];
function gotopass() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  localStorage.setItem("sendemail", JSON.stringify(email));
  window.location.href = "login2.html";
  };
