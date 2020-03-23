import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);


axios.defaults.baseURL = 'http://192.168.1.203'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
