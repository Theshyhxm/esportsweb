import {createRouter,createWebHashHistory       } from "vue-router";
import { routes } from "@/router/routes";

const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
//to到哪儿 from从哪儿离开 next跳转 为空就是放行
    if (to.path === '/') {
        //如果跳转为登录，就放行
        next();
    } else {
        //取出localStorage判断
        let token = localStorage.getItem('token');
        if (token == null || token === '') {
            console.log('请先登录')
            window.location.href = '/login.html';
        } else {
            next();
        }
    }});

export  default router;