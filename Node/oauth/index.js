const path = require('path');
const Koa = require('koa'); //node 开发框架
// 静态资源  动态资源(数据库)
const server = require('koa-static');
const route = require('koa-route');
const axios = require('axios');
const main = server(path.join(__dirname, '/public'));
const clientID = 'e5c07a0a92b69a7cb322';
const clientSecret = '19a78e16b6e5465791f13381f09d2e1fb610f2d2';
// 从前端思维切到后盾思维
const oauth = async ctx => {
    // 可以await 数据库
    // await 请求
    console.log(ctx.request, ctx.request.query.code, '--------')
    // const str = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('等了3秒');
    //     }, 3000);
    // })
    // console.log(str);
    // code => token
    const requestToken = ctx.request.query.code;
    const token_url = 'https://github.com/login/oauth/access_token?' +
        `client_id=${clientID}&` +
        `client_secret=${clientSecret}&` +
        `code=${requestToken}`;
    console.log(token_url)
    const tokenResponse = await axios({
        method: 'post',
        headers: {
            accept: 'application/json'
        }

    });
    const accessToken = tokenResponse.data.access_token;
    console.log(accessToken);
    const result = await axios({
        method:'get',
        url:'https://api.github.com/user',
        headers:{
            accept:'application/json',
            Authorization:`token${accessToken}`
        }
    });
    // ctx.response.redirect('./welcome.html');
}
//public 让用户可以访问到
// 路由 网站是提供资源的, 
const app = new Koa();  //后端应用
app.use(main);
app.use(route.get('/oauth/redirect', oauth));
app.listen(8080);

