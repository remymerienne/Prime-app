export default () => {
  return `
    <main class="main">
      <section class="prime">
        <header class="prime-header">
          <h1>Générateur de Nombres Premiers</h1>
        </header>
        <form class="prime-form" novalidate>
          <label for="prime-up-to">Calculer les nombres premiers jusqu'à </label>
          <input id="prime-up-to" class="prime-form-input" type="number" data-testid="js-input">
        </form>
        <div id="js-prime"></div>
      </section>
    </main>
  `;
};
