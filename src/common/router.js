import {createRouter, createWebHashHistory} from "vue-router";

let routes = [{path: '/', component: () => import('../views/HomePage.vue')},

]

const router = createRouter({
    history: createWebHashHistory(), routes,
});

export {router, routes};