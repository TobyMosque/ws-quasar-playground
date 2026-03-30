import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      'app-micro': any;
    }
  }
}

const App: Component = () => {
  const [isDark, setIsDark] = createSignal(false);

  createEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark() ? "dark" : "light");
  });

  return (
    <main class="container">
      <nav>
        <ul>
          <li><strong>Quasar PR Playground</strong></li>
        </ul>
        <ul>
          <li><button onClick={() => setIsDark(!isDark())}>Toggle Dark MFE</button></li>
        </ul>
      </nav>

      <section>
        <h2>Test Host MFE</h2>
        <p>This is a SolidJS orchestrator with Pico.css. Below is the Vue 3 + Quasar Web Component:</p>
        
        <article>
          <header>Quasar MFE 1</header>
          {/* We mount the custom element right here */}
          <app-micro id="quasar-mfe1" dark={isDark()}></app-micro>
        </article>

        <article>
          <header>Quasar MFE 2</header>
          {/* We mount the custom element right here */}
          <app-micro id="quasar-mfe2" dark={isDark()}></app-micro>
        </article>
      </section>
    </main>
  );
};

export default App;
