import Vue from 'vue'
import VueRouter from "vue-router";
import goTo from 'vuetify/lib/services/goto'

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
    scrollBehavior: (to, from, savedPosition) => {
        /*
        let scrollTo = 0
        if (to.hash) {
            console.log("hash")
            scrollTo = to.hash
        } else if (savedPosition) {
            console.log("savedPos")
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
        */
        if(savedPosition){
            return savedPosition;
        }else{
            let selector = '';
            let offset = 0;
            if (to.hash){
                selector = to.hash;
                if(document.querySelector(to.hash)){
                    offset = 50;
                    if(to.hash === "#areas") {offset = 62;}
                    if(from.hash === "#home"){offset = 0;}
                    return goTo(selector, {offset: offset});
                }
                return false;
            }
        }
    },
    routes,
})

export default router;

