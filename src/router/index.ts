import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingpageView from '@/views/LandingpageView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landingpageView',
    component: LandingpageView
  },
  {
    path: '/AlarmMonitoringView',
    name: 'AlarmMonitoringView',
    component: LandingpageView
  },
  {
    path: '/AlarmMonitoring',
    name: 'AlarmMonitoringView',
    component: LandingpageView
  },
  {
    path: '/',
    name: 'landingpageView',
    component: LandingpageView
  },
  {
    path: '/',
    name: 'landingpageView',
    component: LandingpageView
  },
  {
    path: '/',
    name: 'landingpageView',
    component: LandingpageView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
