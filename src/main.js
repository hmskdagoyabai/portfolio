import Vue from 'vue'
import App from './App.vue'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 
import BootstrapVue from 'bootstrap-vue'  
Vue.use(BootstrapVue)

// スクロール 参考:https://qiita.com/shuheq/items/5d905e1c0f9916496485
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)

Vue.config.productionTip = false

// Font Awesame 参考:https://qiita.com/kurararara/items/d76776a7dc2d763a068b
/* ここから */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
/* ここまで */



new Vue({
  render: h => h(App)
}).$mount('#app')
