// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yun-file-tht0t'
// 初始化云函数
cloud.init()
//获取数据库句柄 -相当于指针，指向那个表
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  // 调用了云函数
  const userInfo = event.userInfo
  //  async  await相当于promise then
  return await db.collection('group').add({
    data: {
      //  获取到js 中的实参
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      delete: false,
      updateTime: new Date()
    }
  })
}