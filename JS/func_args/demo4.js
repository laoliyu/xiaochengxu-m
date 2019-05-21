function err(msg){
    throw new Error(msg);
}
function sum(a=err('第一个参数为空'), b=err('第二个参数为空')) {
    return a + b;
  
}
console.log(sum(undefined, 10))//报错
console.log(sum(10))//报错
// 不予许改写函数体