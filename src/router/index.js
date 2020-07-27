import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Doc from "../views/Doc.vue"

const routerHistory = createWebHistory()
const router = new createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/doc',
            component: Doc
        }
    ]
})
export default router