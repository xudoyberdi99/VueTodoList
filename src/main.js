import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

library.add(faHatWizard)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
