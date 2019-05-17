
//app.js
App({
  onLaunch: function (options) {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'yun-file-tht0t'
      })
    }

    this.globalData.shareParam = options.query
    var self = this;
    // 查看是否授权
    // 在数据库中看到用户信息
    wx.getSetting({
      success(settingRes) {
        //已经授权
        if (settingRes.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            withCredentials: true,
            lang: '',
            success: function (res) {
              self.globalData.userInfo = res.userinfo//把用户的信息存到全局作用域中
              if (self.catchUserInfo) {
                self.catchUserInfo(res.userinfo)//如果出意外，就重新捕获一次
                // 这个用户不是新用户
                wx.cloud.callFunction({
                  name: 'createUser',
                  data: {
                    userInfo:res.userInfo,
                    avatarUrl: res.userInfo.avatarUrl,//用户头像
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
            fail: function (res) { console.log(res) },
            complete: function (res) { },
          })
        }
      }
    })
    //数据库请求数据
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {},//从云函数里面获取函数
      success(res) {
        self.globalData.userInfoFromCloud = res.result.storeUser
      }
    })
  },
  //创建一个全局变量globalData
  globalData: {
    currentGroupInfo: null,
    currentGroupUserList: [],
    currentBill: null,
    userInfo: null,
    shareParam: null,
    billId: '',
    userInfoFromCloud: null,
    userRemark: {}
  }
})
