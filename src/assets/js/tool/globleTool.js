import $http from './request'
export default {
    install(Vue,options)
    {
        Vue.prototype.$http = $http
        Vue.prototype.$foo = '全局变量，可以通过  this.  调用'

    }
}
