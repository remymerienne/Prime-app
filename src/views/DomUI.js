export default () => {

  return (`
    <div class="container" data-testid="jsdom">
      <div class="page" style="padding: 20px; background-color: #fff">
        <header>
          <h1>Hello world &nbsp; <span class="fas fa-seedling"></span></h1>
        </header>
        <main>
          <!-- Section des nombres premiers -->
          <section style="margin-top: 20px; border: 1px solid black; border-radius: 15px; padding: 20px">
            <header style="text-align: center">
              <h2 style="font-size: 22px; margin-bottom: 10px; line-height: 27px">Générateur de Nombres Premiers</h2>
              <label for="prime-up-to">Calculer les nombres premiers jusqu'à </label>
              <input id="prime-up-to" data-testid="jsinput" type="number" style="margin-top: 15px">
            </header>
            <div class="js-prime" style="height: fit-content"></div>
          </section>
          <!-- Section des nombres premiers END -->
        </main>
      </div>
    </div>
  `);

};
