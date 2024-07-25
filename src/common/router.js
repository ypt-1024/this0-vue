import {createRouter, createWebHashHistory} from "vue-router";

let routes = [
    {path: '/', component: () => import('../views/HomePage.vue')},
    {path: '/detail', component: () => import('../views/Detail.vue')},
    {path: '/category-list', component: () => import('../views/CategoryList.vue')},
    {path: '/login', component: () => import('../views/Login.vue')},
]

const router = createRouter({
    history: createWebHashHistory(), routes,
});

export {router, routes};