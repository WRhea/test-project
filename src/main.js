import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import templ from './components/templ'
import model from './components/model'
import select from './components/select'
import cycle from './components/cycle'
import event from './components/event'
import comp from './components/comp'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/template',
      component: templ
    },
    {
      path: '/model',
      component: model
    },
    {
      path: '/select',
      component: select
    },
    {
      path: '/cycle',
      component: cycle
    },
    {
      path: '/event',
      component: event
    }, {
      path: '/comp',
      component: comp
    }
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
