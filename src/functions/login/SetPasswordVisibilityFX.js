export const setPasswordVisibility = () => {

  const closeEye = document.querySelector('i.form-password-logo-close');
  const openEye = document.querySelector('i.form-password-logo-open');
  const allEye = document.querySelectorAll('i.js-eye');
  const inputPassword = document.getElementById('pass');

  let counter = 0;

  allEye.forEach(element => {

    element.addEventListener('click', () => {

      if (counter % 2 === 0) {

        inputPassword.setAttribute('type', 'text');
        closeEye.style.display = 'none';
        openEye.style.display = 'initial';

      } else {

        inputPassword.setAttribute('type', 'password');
        closeEye.style.display = 'initial';
        openEye.style.display = 'none';

      }

      counter++;

    });

  });

};
