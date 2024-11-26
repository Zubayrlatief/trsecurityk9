import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingpageView from '@/views/LandingpageView.vue'
import ArmedResponseView from '@/views/ArmedResponseView.vue'
import RIASecurityView from '@/views/RIASecurityView.vue'
import K9HandlingView from '@/views/K9HandlingView.vue'
import ContactView from '@/views/ContactView.vue'
import SecuritySystemsView from '@/views/SecuritySystemsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingpageView',
    component: LandingpageView
  },
  {
    path: '/ArmedResponseView',
    name: 'ArmedResponseView',
    component: ArmedResponseView
  },
  {
    path: '/SecuritySystemsView',
    name: 'SecuritySystemsView',
    component: SecuritySystemsView
  },
  {
    path: '/RIASecurityView',
    name: 'RIASecurityView',
    component: RIASecurityView
  },
  {
    path: '/K9HandlingView',
    name: 'K9Handling',
    component: K9HandlingView
  },
  {
    path: '/ContactView',
    name: 'ContactView',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
