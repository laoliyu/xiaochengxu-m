// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yun-file-tht0t'
cloud.init()
//获取数据库句柄
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo
  return await db.collection('name').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      deleted: false,
      updateTime: new Date()
    }
  })
  .then(res => {
    //往userGroup数据库添加数据
    return db.collection('userGroup').add({
    data:{
      groupID: res._id,
      userId: userInfo.openId,
      invalid: false
    }
    })
  })
}