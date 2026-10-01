const form = document.getElementById("form-inscription");
 
function erreur(id, message) {
  document.getElementById("err-" + id).textContent = message;
  return message === "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = form.nom.value.trim();
  const email = form.email.value.trim();
  const mdp = form.mdp.value;
  const mdp2 = form.mdp2.value;
  
});
