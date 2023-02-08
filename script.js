

/*const eyeIcon = document.querySelector('#eye-icon');

eyeIcon.addEventListener("click", function() {
    if (eyeIcon.getAttribute("name") === "eye-off-outline") {
        eyeIcon.setAttribute("name", "eye-outline");
    } else {
        eyeIcon.setAttribute("name", "eye-off-outline");
    }
});

function togglePassword() {
    var eyeIcon = document.getElementById("eye-icon");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.setAttribute("name", "eye-outline");
    } else {
      passwordInput.type = "password";
      eyeIcon.setAttribute("name", "eye-off-outline");
    }
  }

  const eyeIcon = document.getElementById('eye-icon');
  let passwordType = 'password';

  eyeIcon.addEventListener('click', function() {
    if (passwordType === 'password') {
      passwordType = 'text';
      eyeIcon.name = 'eye-outline';
    } else {
      passwordType = 'password';
      eyeIcon.name = 'eye-off-outline';
    }
  });*/

  document.addEventListener("DOMContentLoaded", function() {
    const eyeIcon = document.getElementById("eye-icon");
    const passwordInput = document.getElementById("password");
  
    eyeIcon.addEventListener("click", function() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.name = "eye-outline";
      } else {
        passwordInput.type = "password";
        eyeIcon.name = "eye-off-outline";
      }
    });
  });

