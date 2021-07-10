import Vue from 'vue'
import VueRouter from "vue-router";
import goTo from 'vuetify/lib/services/goto'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
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
    scrollBehavior: (to, from, savedPosition) => {
        if(savedPosition){
            return savedPosition;
        }else{
            let selector = '';
            let offset = 0;
            if (to.hash){
                selector = to.hash;
                if(document.querySelector(to.hash)){
                    offset = 50;
                    if(to.hash === "#areas") {offset = 60;}
                    if(from.hash === "#home"){offset = 0;}
                    if(to.hash === "#showproduct"){offset = 80;}
                    return goTo(selector, {offset: offset});
                }
                return false;
            }
        }
    },
    routes,
})

export default router;

