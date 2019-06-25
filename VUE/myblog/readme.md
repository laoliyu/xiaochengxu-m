- req.query queryString ?a=1
- req.params /:name
- req.body
  body-parser 中间件

- 路由的提升
  express.Router
  app.use('/users', router)

- render 传值
  使用一个模板 ejs

- view
  app.set路径 模板引擎设置
  <% code %>  运行JavaScript
  <%= code %> 转译后的html
  <%- code %> 输出html

- models 存放操作数据库的文件
- public 存放静态文件
- router 存放路由文件
- index.js 入口文件
- controllers 控制器

- 开发业务中间件
  1. express Web框架
  2. express-session session中间件
  3. connect-mongo 将session存于mongodb 
  4. connect-flash 页面通知session实现
  5. ejs 模板
  6. express-formidable