function verify() {
  var token = sessionStorage.getItem("token");
  //console.log(sessionStorage.getItem("token"));
  //console.log(token);
  if (token === null) {
    window.location.replace("./login.html");
  }
}
function logout() {
  sessionStorage.clear();
  alert('You are about to Logout');
  window.location.href = 'login.html'
}


function auto_grow(element) {
  element.style.height = "auto";
  element.style.height = (element.scrollHeight)+"px";
};