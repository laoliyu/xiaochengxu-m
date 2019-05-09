// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yun-file-tht0t'

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
const wxContext =  cloud.getWXContext()
const groupNum = await db.collection('userGroup').where({
  groupID:cloud.getWXContext().OPENID
}).get()
//存储用户信息
const storeUser = await db.collection('user').where({
  openId: cloud.getWXContext().OPENID
}).get()

return{
  groupNum:groupNum.data.length,
  storeUser:storeUser.data[0]
}
}