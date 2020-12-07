import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from './views/Signup'
import Login from "./views/Login"
import Welcome from "./views/Welcome"
import Home from "./views/Home"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/:user',
        name: 'home',
        component: Home
    },
]

const scrollBehavior = () => {
    return { x: 0, y: 0 }
}

const router = new VueRouter({
    scrollBehavior,
    routes,
})

export default router