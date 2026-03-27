<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-btn color="primary" label="Click me to show QDialog" @click="showDialog = true" />

      <q-btn color="secondary" label="Click me to show QMenu">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New window</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="warning" label="$q.dialog" text-color="black" @click="triggerProgrammaticDialog" />
      <q-btn color="info" label="$q.notify" @click="triggerNotify" />


      <q-select
        filled
        v-model="model"
        :options="options"
        label="Select Options"
        style="width: 250px"
      />
    </div>    
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Hello from Quasar Web Component!</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          I am supposed to be teleported to document.body, but in a Web Component I should be inside the shadow root!
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { 
  useQuasar, 
  QBtn, QDialog, QCard, QCardSection, QCardActions, 
  QMenu, QList, QItem, QItemSection, QSelect,
  ClosePopup as vClosePopup 
} from 'quasar'

const props = defineProps<{
  dark?: boolean | string
}>()

const $q = useQuasar()

watch(() => props.dark, (val) => {
  const isDark = val === '' || val === 'true' || val === true
  $q.dark.set(isDark)
}, { immediate: true })

const showDialog = ref(false)
const model = ref(null)
const options = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

function triggerProgrammaticDialog() {
  $q.dialog({
    title: 'Programmatic Dialog',
    message: 'I am teleported correctly to the Shadow Root, thanks to the Quasar PR configurability!',
    cancel: true,
    persistent: true
  }).onOk(() => {
    // console.log('>>>> OK')
  }).onCancel(() => {
    // console.log('>>>> Cancel')
  })
}

function triggerNotify() {
  $q.notify({
    message: 'Programmatic Notification working inside Shadow Root!',
    color: 'positive',
    position: 'top-right'
  })
}
</script>

<style>
@import "quasar/dist/quasar.css";

/* Your standard CSS below */
/* App specific styles */
</style>
