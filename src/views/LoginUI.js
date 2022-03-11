export default () => {

  return (`
    <div class="modal">
      <div class="modal-left">
        <img class="modal-left__image" src="../src/images/sky.svg" alt="">
      </div>
      <div class="modal-right">
        <i class="fa-solid fa-house-user"></i>
        <div class="layout">
          <form class="form" novalidate>
            <div class="form-email">
              <i class="fa-solid fa-envelope"></i>
              <label for="mail">Username or Email Address</label>
              <input id="mail">
            </div>
            <div class="form-password">
              <i class="fa-solid fa-eye"></i>
              <i class="fa-solid fa-eye-slash"></i>
              <label for="pass">Password</label>
              <input id="pass">
            </div>
            <div class="form-log">
              <div class="form-log__remember">
                <input type="checkbox" id="scale">
                <label for="scale">Remember Me</label>
              </div>
              <button class="form-log__button" type="button">Log in</button>
            </div>
          </form>
          <p class="lost">Lost your password?</p>
        </div>
      </div>
    </div>
  `);

};
