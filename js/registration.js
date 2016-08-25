var registrationForm = document.getElementById('registration');
var success = document.getElementById('success');
var unsuccess = document.getElementById('unsuccess');
var submitButton = document.getElementById('submit');

registrationForm.addEventListener('submit', submitForm);

function submitForm() {
  var userName = registrationForm.elements.username.value;
  var email = registrationForm.elements.email.value;
  var password = registrationForm.elements.password.value;
  if (userName && email && password) {
    registrationForm.style.display = 'none';
    unsuccess.style.display = 'none';
    success.style.display = 'block';
  } else {
    unsuccess.style.display = 'block';
  }
}
