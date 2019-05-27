const Koa = require('koa');//引入开发框架
// 静态资源， 动态资源
const server = require('koa-static');
const main = server(path.join(__dirname,'/public'));
// public 让用户可以访问到
// 路由 网站是提供资源的
const app = new Koa();//后端应用
app.listen(8080);//监听服务
