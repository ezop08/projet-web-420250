const form = document.getElementById("form-inscription");
 
function erreur(id, message) {
  document.getElementById("err-" + id).textContent = message;
  return message === "";
}

