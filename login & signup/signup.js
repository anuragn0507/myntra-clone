
document.querySelector("form").addEventListener("submit", sign_up);

function sign_up() {
  event.preventDefault();
  var signupArr = JSON.parse(localStorage.getItem("signupDetails")) ||[];
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value
  var signObj = {
    name,
    email,
    password,
  };
  console.log(signupArr);

  var check=signupArr.filter(function(ele){
    return ele.email== signObj.email;
  });

  console.log(check.length);

  if(check.length>=1){
    alert("You are already a member !please Sign in");
  }
  else{
  console.log(signObj);
  signupArr.push(signObj);
  console.log(signupArr);
  localStorage.setItem("signupDetails", JSON.stringify(signupArr));
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  document.getElementById("password").value = "";
  window. location. assign("login1.html");
  }
  // window.open(newurl,'http://www.google.comlogin.html');
  // window.location.href = "login.html";

}