function information(name,sex,money,birthday,color,likes,follow,age) {
    return `${name}${sex}${money}${birthday}${color}${likes}${follow}${age}`
}
let user = {name:'李丹',sex:'女',money:'1亿元',birthday:'5-22',color:'黄色',likes:'看剧',
follow:'肖战',age:'22'};

information(user);