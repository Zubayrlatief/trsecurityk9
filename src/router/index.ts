import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingpageView from '@/views/LandingpageView.vue'
import ArmedResponseView from '@/views/ArmedResponseView.vue'
import RIASecurityView from '@/views/RIASecurityView.vue'
import K9HandlingView from '@/views/K9HandlingView.vue'
import ContactView from '@/views/ContactView.vue'
import SecuritySystemsView from '@/views/SecuritySystemsView.vue'
import EventSecurityView from '@/views/EventSecurityView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingpageView',
    component: LandingpageView
  },
  {
    path: '/ArmedResponse',
    name: 'ArmedResponseView',
    component: ArmedResponseView
  },
  {
    path: '/SecuritySystems',
    name: 'SecuritySystemsView',
    component: SecuritySystemsView
  },
  {
    path: '/RIASecurity',
    name: 'RIASecurityView',
    component: RIASecurityView
  },
  {
    path: '/K9Handling',
    name: 'K9Handling',
    component: K9HandlingView
  },
  {
    path: '/Contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/EventSecurity',
    name: 'EventSecurityView',
    component: EventSecurityView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
