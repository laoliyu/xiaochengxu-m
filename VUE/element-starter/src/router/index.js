import Vue from 'vue'
import VueRouter from 'vue-router'
import { login } from 'pages/'
// this.$router this.$route
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: '登录',
        hidden: true,
        component: login
    }
];
export default new VueRouter({
    // 向外输出
    routes,
    // strict:Process.env.NOOE_ENV !== 'production'

})