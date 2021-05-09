import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Detail from './components/Detail'
import Cart from './components/Cart'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/products/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/Cart',
        component: Cart
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router