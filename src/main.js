import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from '@totalflow4/tfelement-ui'
import '@totalflow4/tfelement-ui/lib/theme-chalk/index.css';
// import '@totalflow4/tfelement-ui/lib/theme-chalk/fonts/element-icons.ttf';



Vue.config.productionTip = false

Vue.use(ElementUI); 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
