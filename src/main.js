import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faGoogle,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

import {
  faSignOutAlt,
  faTimes,
  faPencilAlt,
  faTrashAlt,
  faPlus,
  faShieldAlt,
  faBrain,
  faShoePrints,
  faHeart,
  faSkull,
  faHeartbeat,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

library.add(
  faGoogle,
  faFacebook,
  faGithub,
  faSignOutAlt,
  faTimes,
  faPencilAlt,
  faTrashAlt,
  faPlus,
  faShieldAlt,
  faBrain,
  faShoePrints,
  faHeart,
  faSkull,
  faHeartbeat,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
