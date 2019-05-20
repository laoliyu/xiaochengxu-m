const add = (a,b) =>{
    if(typeof a === 'string'&& typeof b === 'string'){
        return +a + (+b);//进行转型
    }
    return  a+b ;
}
module.exports = {add}