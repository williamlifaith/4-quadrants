/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './service/i18n/i18n'

Vue.config.productionTip = false
new Vue({
  i18n,
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
