import { createRouter, createWebHistory } from "vue-router"
const routes = [
  { path: '/books', component: ()=> import('./views/books/index.vue')},
  { path: '/book/create', component: ()=> import('./views/books/create.vue')},
  { path: '/book/:id/update', component: ()=> import('./views/books/update.vue')},
  { path: '/:pathMatch(.*)*', component: ()=> import('./views/404.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router