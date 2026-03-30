import { render } from 'solid-js/web';
import '@picocss/pico';
import App from './App';

if (import.meta.env.DEV) {
  // Use the dev server for HMR
  // @ts-ignore
  import(/* @vite-ignore */ 'http://localhost:5001/src/main.ts');
} else {
  // Use the built local package
  // @ts-ignore
  import('app-micro');
}

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root!);
