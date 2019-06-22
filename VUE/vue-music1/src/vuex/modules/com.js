import api from '../../api'//引入axios
import * as types from '../types'
const state = {
    // 数据源
    showSidebar: false,
    fullScreen: false,
}
const mutations = {
    // 修改vuex数据源
    [types.COM_SHOW_SIDE_BAR](state, status) {//方法 state 是key ;status 是状态
        state.showSidebar = status
    },
    [types.SET_FULL_SCREEN](state,status){
        state.fullScreen = status
    }
}
const actions = {//调用方法
    setShowSidebar({ commit },status ) {
        commit(types.COM_SHOW_SIDE_BAR, status) //提交方法
    }, //自己定义的方法
    selectPlaySong({commit},status){
    //    let playList = state.playList.slice()
    commit (types.SET_FULL_SCREEN,status)

    }
}
const getters = {
    // 把仓库里的数据拿出来用
    showSidebar:state =>state.showSidebar,
    fullScreen:state =>state.fullScreen
}
export default{
    state,
    mutations,
    actions,
    getters
    
}