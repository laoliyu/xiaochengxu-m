import api from '../../api'//引入axios
import * as types from '../types'
const state = {
    // 数据源
    showSidebar: true
}
const mutations = {
    // 修改vuex数据源
    [types.COM_SHOW_SIDE_BAR](state, status) {//方法 state 是key ;status 是状态
        state.showSidebar = status


    }
}
const actions = {//调用方法
    setShowSidebar({ commit }, status) {
        commit(types.COM_SHOW_SIDE_BAR, status) //提交方法
    }//自己定义的方法
}
const getters = {
    // 把仓库里的数据拿出来用
    showSidebar:state =>state.showSidebar
}
export default{
    state,
    mutations,
    actions,
    getters
    
}