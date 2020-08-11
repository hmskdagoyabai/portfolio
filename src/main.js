import Vue from 'vue'
import App from './App.vue'

// import Router from "vue-router";

// Vue.use(Router);

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


import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)


// import VueAnalytics from 'vue-analytics';

// // Configuration VueAnalytics
// Vue.use(VueAnalytics, {
//   id: 'UA-134062345-5',
//   Router
// });



// axios
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios) 



new Vue({
  render: h => h(App)
}).$mount('#app')
