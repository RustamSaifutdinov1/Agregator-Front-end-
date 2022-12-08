import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import ClinicPage from "@/views/ClinicPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/:id',
    name: 'clinic',
    component: ClinicPage,
    props: true,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes
})

export default router
