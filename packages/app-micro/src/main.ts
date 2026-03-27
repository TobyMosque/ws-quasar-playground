import { defineCustomElement } from 'vue'
import QuasarApp from './App.ce.vue'
import { Quasar, Dialog, Notify } from 'quasar'
import iconSet from 'quasar/icon-set/svg-material-icons'



// Create custom element
const AppElement = defineCustomElement(QuasarApp, {
  configureApp(app) {
    app.use(Quasar, {
      config: {
        root: () => document.querySelector('app-micro')?.shadowRoot || document.body
      },
      plugins: {
        Dialog,
        Notify
      },
      iconSet
    })
  }
})

// Define the custom element
customElements.define('app-micro', AppElement)
