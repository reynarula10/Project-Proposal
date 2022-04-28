//validate form
document.getElementById("submit").addEventListener("click", function (evt) {
  let error = true;
  evt.preventDefault();
  let name = document.getElementsByName("name")[0];
  let phone = document.getElementsByName("phone")[0];
  let email = document.getElementsByName("email")[0];
  let message = document.getElementsByName("message")[0];

  var re = /^\(?(\d{2})\)?[- ]?(\d{2})[- ]?(\d{8})$/;
  var emailpattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (error == true) {
    if (name.value.length === 0) {
      name.style.borderColor = "red";
      error = true;
    } else {
      name.style.borderColor = "#ced4da";
      error = false;
    }
    if (phone.value.length === 0 || !re.test(phone.value)) {
      phone.style.borderColor = "red";
      error = true;
    } else {
      phone.style.borderColor = "#ced4da";
      error = false;
    }
    if (email.value.length === 0 || !emailpattern.test(email.value)) {
      email.style.borderColor = "red";
      error = true;
    } else {
      email.style.borderColor = "#ced4da";
      error = false;
    }
    if (message.value.length === 0) {
      message.style.borderColor = "red";
      error = true;
    } else {
      message.style.borderColor = "#ced4da";
      error = false;
    }
  }
  if (error == false) {
    document.getElementById("message").innerHTML =
      "Form Successfully Submitted";
    document.getElementById("message").style.color = "green";
  }
});
