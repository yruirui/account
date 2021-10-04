import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Money from '@/views/Money.vue'
import Labels from '@/views/Lables.vue'
import Statistics from '@/views/Statistics.vue'
import LabelsEdit from '@/components/LabelsEdit.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/money'
  },
  {
    path: '/money',
    name: '',
    component: Money,
  },
  {
    path: '/labels',
    name: '',
    component: Labels,
  },
  {
    path: '/labels/edit/:id',
    name: '',
    component: LabelsEdit,
  },
  {
    path: '/statistics',
    name: '',
    component: Statistics,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
