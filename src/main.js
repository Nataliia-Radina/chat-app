import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ImageSrc from '@/mixins/ImageSrc'


Vue.config.productionTip = false

Vue.mixin({
  mixins: [ImageSrc]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
