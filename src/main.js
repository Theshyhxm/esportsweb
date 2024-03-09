import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import $ from 'jquery'
import "@/js/vendor/jquery-1.12.4.min.js"
import "@/js/app.min.js"
import "@/js/vscustom-carousel.min.js"
import "@/js/vs-cursor.min.js"
import "@/js/vsmenu.min.js"
import "@/js/imagesloaded.js"
import "@/js/ajax-mail.js"
import "@/js/main.js"
import  axios from "axios";
import ElementPlus from 'element-plus';
import '../node_modules/element-plus/theme-chalk/index.css'; // 引入样式
var vueApp = createApp(App).use(router).use($).use(ElementPlus).mount('#app');
// import "@/js/login"
//设置axios请求头加入token
// axios.interceptors.request.use(config => {
//         if (config.push === '/') {
//             this.$router.push('/index');
//         } else {
//             if (localStorage.getItem('token')) {
//                 //在请求头加入token，名字要和后端接收请求头的token名字一样
//                 config.headers.token=localStorage.getItem('token');
//             }
//         }
//         return config;
//     },
//     error => {
//     console.log(error)
//         // 引用elementui message提示框
//         ElementPlus.Message({
//             message: '身份已失效',
//             type: 'err'
//         });
//         //清除token
//         localStorage.removeItem('token');
//         //跳转
//         window.location.href = '/login.html';
//         return Promise.reject(error);
//     });
//
// //=============================
// //响应回来token是否过期
// axios.interceptors.response.use(response => {
//        console.log(response)
//         //和后端token失效返回码约定401
//         if (response.data.code == 401) {
//             // 引用elementui message提示框
//             ElementPlus.Message({
//                 message: '身份已失效',
//                 type: 'err'
//             });
//             //清除token
//             localStorage.removeItem('token ');
//             //跳转
//             window.location.href = '/login.html';
//         }
//         else {
//             return response
//         }
//     },
//     error => {
//         window.location.href = '/login.html';
//         return Promise.reject(error);
//     })


