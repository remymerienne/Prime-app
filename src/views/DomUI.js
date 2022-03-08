export default () => {

  return (`
    <div class="container" data-testid="jsdom">
      <div class="page">
        <header>
          <h1>Hello world</h1>
          <span class="fas fa-seedling"></span>
        </header>
        <main>
          <!-- Section des nombres premiers -->
          <section>
            <header>
              <h2>Générateur de Nombres Premiers</h2>
            </header>
            <label for="prime-up-to">Calculer les nombres premiers jusqu'à </label>
            <input id="prime-up-to" data-testid="jsinput" type="number">
            <div class="js-prime"></div>
          </section>
          <!-- Section des nombres premiers END -->
        </main>
      </div>
    </div>
  `);

};
