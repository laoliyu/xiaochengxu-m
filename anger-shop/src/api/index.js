// 封装axios
import Vue from 'vue'
import axios from 'axios'


const vue = new Vue()

// axios的配置
axios.defaults.timeout = 10000//请求时间
axios.defaults.baseURL = 'http://localhost:3000' //请求自己端口，之后再改成你想要请求的网址
// 返回状态判断，统一封装，当遇到任何一种东西都会崩
axios.interceptors.response.use((res) => {
    if (res.data.code != 200) {
        // $toast 自己写的方法，通过定义方法挂载Vue的原型链上了
        vue.$toast('网络异常')
        vue.$hideLoading('正在加载')
        return Promise.reject(res)
    }
    return res
},
    // 在200端口,但还是没有拿到数据
    (error) => {
        vue.$toast('网络异常')
        vue.$hideLoading('正在加载')
        return Promise.reject(error)
    }
)
// 封装get方法 传的参数一定要param
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: param
        })
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })

}
// 用户登入情况
export default {
    Login(params) {
        return fetchGet('/login', params)
    }

}
   