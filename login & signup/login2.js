var signArr = JSON.parse(localStorage.getItem("singupDetails")) || [];
document.querySelector("form").addEventListener("submit", signin);
var a=[]
function signin() {
  event.preventDefault();
  // var email = document.getElementById("email").value;
  var email = JSON.parse(localStorage.getItem("sendemail"))
  var password = document.getElementById("password").value;
    var a="doesn't matched"
  signArr.map(function (elem) {
    if (elem.email == email && elem.password == password) {
        a="sucessfull"
      console.log(a);
    } else {
        console.log(a);
    }
  });
}