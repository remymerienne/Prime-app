export default () => {

  return (`
    <main class="main">
      <section class="prime">
        <header class="prime-header">
          <h1>Générateur de Nombres Premiers</h1>
        </header>
        <form class="prime-form" novalidate>
          <label for="prime-up-to">Calculer les nombres premiers jusqu'à </label>
          <input class="prime-form-input" id="prime-up-to" data-testid="js-input" type="number">
        </form>
        <div class="js-prime"></div>
      </section>
    </main>
  `);

};
