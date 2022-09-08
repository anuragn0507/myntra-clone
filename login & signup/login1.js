var signArr = JSON.parse(localStorage.getItem("signupDetails")) || [];
document.querySelector("form").addEventListener("submit", login);
function login() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  signArr.map(function (elem) {
    if (elem.email === email && elem.password === password) {
      alert("Sign_in Sucessfull");
      console.log("done");
    } else {
      alert("Invalid Credential!");
      console.log("not done");
    }
  });
}
