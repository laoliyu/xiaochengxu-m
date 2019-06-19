// 插件
let Toast = {}
// 定义一个Toast空对象，给Toast挂载install这样一个方法
Toast.install = function (Vue, options) {
    let opt = {
        defaultType: 'center',//默认toast那个提示盒子显示的位置在屏幕中间
        duration: '1500'//组件出现在页面持续的时间

    }
    for (let property in options) {//循环一个对象
        opt[property] = options[property]//使用options里面的东西完整的拿出来使用//对象后面使用[]就是选中对象中的哪一项
    }
    // vue的原型链的挂载
    Vue.prototype.$toast = (tips, type) => {
        if (type) {
            opt.defaultType = type//是toast这个盒子显示在你之前定义的位置
        }
        if (document.getElementsByClassName('vue-toast').length) {
            return //如果toast此时在商量在页面出现的状态，则不再执行
        }
        let toastTpl = Vue.extend//扩展一个组件
            ({
                template: '<div class="vue-toast toast-' + opt.defaultType + '">' + tips + '<div>'
            })
        // 挂载到指定结构上去
        let tpl = new toastTpl.$mount().$el
        document.body.appendChild(tpl)
        setTimeout(() => {
            document.body.removeChild(tpl)
            // 1.5秒之后移除掉
        }, opt.duration)
    }
    ['bottom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue.prototype.$toast(tips, type)
        }
    })
}


let Loading = {}
// Loading 一般都是在屏幕中间,所以只有一个参数就可以
Loading.install = function (Vue) {
    let tpl
    Vue.prototype.$showLoading = () => {
        if (document.getElementsByClassName('vue-loading').length) {
            return
        }
        let loadingTpl = vue.extend({
            // 创建构造器，定义好
            template: '<div class="vue-loading"></div>'
        })
        let tpl = new loadingTpl.$mount().$el
        document.body.appendChild(tpl)

    },
        Vue.prototype.$hideLoading = () => {
            if (document.getElementsByClassName('vue-loading').length) {
                document.body.removeChild(tpl)
            }
        }
}
export {
    Toast,
    Loading
}