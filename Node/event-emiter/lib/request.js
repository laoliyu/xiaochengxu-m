const request = require('request')
module.exports = (url) => new Promise((req,rej) =>{
  request({
    url,
    json:true
  },(err,res, body) =>{
    console.log(err)
    req(body);
  })
})