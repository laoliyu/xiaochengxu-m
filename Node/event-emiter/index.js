const EventEmitter = require('events');
class Ev extends EventEmitter {};

const ev = new Ev();
['search','choose'].forEach(key =>{
  ev.on(key,async function(...args){
    const fn = require(`./lib/${key}`);
    const res =await fn(...args)
    // console.log(...arg)
    // console.log(res)
    ev.emit('handle',key,res,...args);
  } )
  ev.on('afterSearch',function(data,keyword){
    if (!data || !data.result || !data.result.songs) {
      console.log(`没搜索到 ${keyword} 的相关结果`)
      return;
    }
    const songs = data.result.songs
    ev.emit('choose', songs)
  })
  ev.on('handle',function(key,res,...args){
    switch(key){
      case 'search': return ev.emit('afterSearch',res,args[0]);
    }
  })
})
function main(arg){
 console.log(arg);
if(arg || arg.length){
 var keyword = arg[2];
   
  ev.emit('search',keyword)
}
// console.log(arg)
}
main(process.argv);
//绑定事件