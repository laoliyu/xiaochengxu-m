
//app.js
App({
  onLaunch: function (options) {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        // env: 'congreat-5q4tm'
      })
    }

    this.globalData.shareParam = options.query
    var self = this;
    // 查看是否授权
    wx.getSetting({
      success(settingRes) {
        //已经授权
        if (settingRes.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            withCredentials: true,
            lang: '',
            success: function (res) {
              self.globalData.userInfo = res.userinfo
              if (self.catchUserInfo) {
                self.catchUserInfo(res.userinfo)

                wx.cloud.callFunction({
                  name: 'createUser',
                  data: {
                    avatarUrl: res.userInfo.avatarUrl,
                    name: '',
                    nickName: res.userInfo.nickName,
                    sex: res.userInfo.gender
                  }
                })
              } else {
                wx.redirectTo({
                  url: `/page/login/login?back=${options.path.split('/'[1])}`
                })
              }
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      }
    })
    //数据库请求数据
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {},
      success(res){
        self.globalData.userInfoFormCloud = res.result.storeUser
      }
    })
  },
  //创建一个全局变量globalData
  globalData:{
    currentGroupInfo:null,
    currentGroupUserList:[],
    currentBill:null,
    userInfo:null,
    shareParam:null,
    billId:'',
    userInfoFromCloud:null,
    userRemark:{}
  }
})
