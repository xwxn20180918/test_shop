import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
