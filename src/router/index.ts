import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingpageView from '@/views/LandingpageView.vue'
import ArmedResponseView from '@/views/ArmedResponseView.vue'
import AlarmMonitoringView from '@/views/AlarmMonitoringView.vue'
import ElectricFencingView from '@/views/ElectricFencingView.vue'
import RIASecurityView from '@/views/RIASecurityView.vue'
import K9HandlingView from '@/views/K9HandlingView.vue'
import ContactView from '@/views/ContactView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingpageView',
    component: LandingpageView
  },
  {
    path: '/AlarmMonitoringView',
    name: 'AlarmMonitoringView',
    component: AlarmMonitoringView
  },
  {
    path: '/ArmedResponseView',
    name: 'ArmedResponseView',
    component: ArmedResponseView
  },
  {
    path: '/ElectricFencing',
    name: 'ElectricFencing',
    component: ElectricFencingView
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
