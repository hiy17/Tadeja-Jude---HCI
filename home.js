const loginButton = document.querySelector('.login-button');
const popupOverlay = document.querySelector('.popup-overlay');
const popupClose = document.querySelector('.popup-close');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  popupOverlay.classList.add('active');
});

popupClose.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});


document.querySelector('.password-toggle').addEventListener('click', (e) => {
  const passwordInput = document.getElementById('password');
  const icon = e.target.querySelector('i') || e.target;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
});


document.querySelector('.cta').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.popup-overlay1').classList.add('active');
  });
  
  document.querySelector('.popup-close1').addEventListener('click', function () {
    document.querySelector('.popup-overlay1').classList.remove('active');
  });
  
  document.querySelector('.password-toggle1').addEventListener('click', function () {
    const passwordField = document.querySelector('#password1');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
  
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
  });
  