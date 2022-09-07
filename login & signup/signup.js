var singupArr = [];
document.querySelector("form").addEventListener("submit", signup);
function signup() {
  event.preventDefault();
  var signObj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  console.log(signObj);
  singupArr.push(signObj);
  localStorage.setItem("singupDetails", JSON.stringify(singupArr));
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  document.getElementById("password").value = "";
  window. location. assign("login1.html");
  // window.open(newurl,'http://www.google.comlogin.html');
  // window.location.href = "login.html";

}