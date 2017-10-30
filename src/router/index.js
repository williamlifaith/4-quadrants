import Vue from 'vue'
import Router from 'vue-router'
import Quadrants from '@/components/first-page/Quadrants'
import Help from '@/components/help/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Quadrants
    },
    {
      path: '/help',
      name: 'Help',
      component: Help

    }
  ]
})
