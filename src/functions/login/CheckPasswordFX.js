export const checkPassword = () => {

  const inputUserPassword = document.getElementById('username');
  const loginButton = document.querySelector('button.button-login');


  loginButton.addEventListener('click', () => {

    if (inputUserPassword.value === 'remy') {

      // window.location.href = window.location.origin + '/Prime-app/dist/index.html#prime-calculator';
      window.location.href = window.location.origin + '/src/index.html#prime-calculator';

    }

  });

};
