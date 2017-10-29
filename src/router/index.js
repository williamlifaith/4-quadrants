import Vue from 'vue'
import Router from 'vue-router'
import Quadrants from '@/components/Quadrants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Quadrants
    }
  ]
})
