export default () => {

  return (`
    <div class="container">
      <div class="page">
        <header>
          <h1>Hello world</h1>
          <span class="fas fa-seedling"></span>
        </header>
        <main>
          <section>
            <header>
              <h2>Générateur de Nombres Premiers</h2>
            </header>
            <label for="prime-up-to">Calculer les nombres premiers jusqu'à </label>
            <input id="prime-up-to" data-testid="js-input" type="number">
            <div class="js-prime"></div>
          </section>
        </main>
      </div>
    </div>
  `);

};
