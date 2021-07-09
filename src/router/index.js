import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

export const routes = [
    {
        path: '',
        name: 'home',
        component: () => import("../views/Home.vue")
    },
    {
        path: '/productos',
        name: 'products',
        component: () =>  import("../views/ProductsPage.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;

