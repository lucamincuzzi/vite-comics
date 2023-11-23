import { createApp } from 'vue'
import App from './App.vue'

/* FontAwesome Core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* FontAwesome component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* FontAwesome icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library
.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
