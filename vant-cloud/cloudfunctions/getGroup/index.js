// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db= cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
//获取用户ID
const openId = cloud.getWXContext.OPENID
let groupList = await db.collection('userGroup').where({
  userId:openId
}).get()
let returnResult = []
for(let item of groupList.data){
  const oneGroup = await db.collection('name').where({
    _id:item.groupID,
    deleted:false
  }).get()

  if(oneGroup.data.length > 0){
    const userInfo = await db.collection('user').where({
      openId:oneGroup.data[0].createBy
    }).get()
    oneGroup.data[0].createBy = userInfo.data[0]
    oneGroup.data[0].relateUserGroup = item._id
    returnResult.push(oneGroup.data[0])
  }
}

return returnResult.sort((a,b) => a.createTime < b.createTime ? 1 : -1)
// return

  //这是我昨天自己写的 打个备注
   //集合数据时服务器一次默认并且最多返回 20 条记录
  // return await db.collection('name').get(
  //   {
  //     success(res) {
  //   // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
  //       console.log(res.data)
  //     }
  //   }
  // )

 
}