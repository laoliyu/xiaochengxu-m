import vue from "vue";
import Vuex from "vuex";
vue.use(Vuex);
// 单一的状态树，一棵树
export default new Vuex.Store({
 state:{
    //  状态
     todos:JSON.parse(window.localStorage.getItem(STORGE_KEY)||'[]')
 },
 actions,
})