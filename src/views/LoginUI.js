export default () => {
  return `
    <header>
      <h1 class="sr-only">Nombre premier</h1>
    </header>
    <main>
      <div class="modal">
        <div class="left-side">
          <img class="left-side-img" src="../src/images/sky.svg" alt="">
        </div>
        <div class="right-side">
          <i class="right-side-img fa-solid fa-house-user"></i>
          <div class="layout-html-only">
            <form class="form" novalidate>
              <div class="form-email">
                <i class="form-email-logo fa-solid fa-envelope"></i>
                <label for="username">Username or Email Address</label>
                <input class="form-email-input" id="username">
              </div>
              <div class="form-password">
                <i class="form-password-logo-close fa-solid fa-eye-slash js-eye"></i>
                <i class="form-password-logo-open fa-solid fa-eye js-eye"></i>
                <label for="pass">Password</label>
                <input id="pass" class="form-password-input" type="password">
              </div>
              <div class="form-low-bloc">
                <div class="form-remember">
                  <input class="form-remember-input" type="checkbox" id="scale">
                  <label class="form-remember-label" for="scale">Remember Me</label>
                </div>
                <button class="button-login" type="button">Log in</button>
              </div>
            </form>
            <p class="lost-password">Lost your password?</p>
          </div>
        </div>
      </div>
    </main>
  `;
};