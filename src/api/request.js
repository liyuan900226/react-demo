import axios from 'axios'

// 拦截器在请求或响应被 then 或 catch 处理前拦截它们。

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.headers['auth-token'] = localStorage.getItem('auth-token');
    // config.headers.key = '123'
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    console.log(response)
    // 对响应数据做点什么
    // 处理httpStatus 200 及非 200
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


function request(methods, url, params) {
    if(methods.toLowerCase() === 'get') {
        return axios.get(url, {
            params: params || {}
        })
    }else if(methods.toLowerCase() === 'post') {
        return axios.post(url, params || {})
    }
}

export default request
