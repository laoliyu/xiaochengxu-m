const EventEmiter = require('events');
class Ev extends EventEmiter{};

const ev = new Ev();

//绑定事件
// ...args 把所有剩余的所有函数参数整理为数组
// args =[];处理参数不固定
['search'].forEach(key => {
  ev.on(key, async function(...args){
    const fn = require(`./lib/${key}`);
    const res = await fn(...args);
    console.log('res 的执行结果',res);
  })
})
function main(arg) {
  // console.log(arg);
  // if (!arg || !arg.length) {
  //   let arg = arg[2];
  // }
  let keyword = arg[2];
  console.log(keyword);
  eval.emit('search',keyword);
}
main(process.argv);
