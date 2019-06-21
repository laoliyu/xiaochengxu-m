var express = require('express')
var app = express();
var cors = require('cors');
// req -> res
// 链接数据库，next
// 验证一下身份信息  session next 表单处理 parseBody   next  跨域 一件事 cors
app.use(cors());
app.get('/products/:id', function (req, res, next) {
    res.json({
        msg: 'this is cross-enabled for all original'
    })
});

app.listen(80, function () {
    console.log('web server listen on port 80')
})