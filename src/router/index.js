import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../page/Home/home.vue')
const Server = () => import('../page/Server/server.vue')
const Order = () => import('../page/Order/order.vue')
const Person = () => import('../page/Person/person.vue')

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/server',
            component: Server
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/person',
            component: Person
        },
        {
            path: '/',
            redirect:'/home'
        },
    ]
})