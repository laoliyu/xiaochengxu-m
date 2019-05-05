const db = wx.cloud.database();
const userInfo = db.collection('userInfo');


Page({
  data: {
    userList: []
  },
  getUserInfo: function(e) {
    console.log(e);
    wx.cloud.callFunction({
      // openid是有安全问题的，这是前端的， 到云端去，安全拿到openid是专有业务
      name:'getOpenId',
      complete:res =>{
        // console.log(res);
        userInfo
          .where({
            _openid:res.result.openId
          }).count()
          .then(res =>{
            if(res.total== 0){
              //新用户
              userInfo.add({
                  data: e.detail.userInfo
                })
                .then(res => {
                  wx.navigateTo({
                    url: '../add/add'
                  })
                })

            }else{
              console.log('已经添加过了');
              wx:navigateTo({
                url:'../add/add'
              })
            }
          })
      }
    })
    // userInfo
    //   .where({
    //     _openid:
    //   })

    // table === collection 
    // userInfo.add({
    //   data: e.detail.userInfo
    // })
    // 把用户存到数据库中， database
    // 用户表， 核心表 
  } ,
  onLoad: function() {
    userInfo
      .get()
      .then(res => {
         this.setData({
          userList: res.data
        })
      })
  }
})
