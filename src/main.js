import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'

Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
})
