import Vue from 'vue'
import '@/assets/plugins/primevue/index.js';
import router from '@/routes.js'
import store from './store/store.js'
import App from './App.vue'
import '@/assets/plugins/fontawesome/index.js'
import Axios from 'axios'
import ToastService from 'primevue/toastservice';

Vue.use(ToastService);
Vue.config.productionTip = false

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token')

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] =  token
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
