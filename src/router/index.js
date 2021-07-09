import Home from "../views/Home.vue";
import Products from "../views/ProductsPage.vue";

export const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/productos',
        name: 'products',
        component: Products
    }
]

