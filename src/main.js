import Vue from 'vue'
import App from './App.vue'
import router from './index'
import VueRouter from 'vue-router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

Vue.config.productionTip = false

Vue.use(VueRouter)
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
