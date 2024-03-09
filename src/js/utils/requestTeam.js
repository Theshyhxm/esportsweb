import axios from 'axios'
import { ElMessage } from 'element-plus'; // 导入 Message 组件

// create an axios instance
const service = axios.create({
    baseURL:'http://192.168.123.60:8127', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        const token = localStorage.getItem('token');
        if (token) {
            // 让每个请求携带自定义token
            config.headers['token'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 处理请求错误
        ElMessage({
            message: '身份已过期',
            grouping: true,
            type: 'error',
        })
        console.log(error); // for debug
        return Promise.reject(error);
    }
);


// response interceptor
service.interceptors.response.use(
    response => {
        console.log(response);
        if (response.data.code === 401) {
            handleUnauthorizedResponse(response);
            return Promise.reject(new Error('身份已过期'));
        }
        return response;
    },
    error => {
        console.log("error", error);
        handleUnauthorizedResponse(error);
        return Promise.reject(error);
    }
);

function handleUnauthorizedResponse(responseOrError) {
    ElMessage({
        message: '身份已过期',
        grouping: true,
        type: 'error',
    });
    localStorage.removeItem('token');
    setTimeout(() => {
        window.location.href = '/login.html';
    }, 3000);
}
export default service
