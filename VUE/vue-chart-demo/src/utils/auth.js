// 获取用户的cookie,第三方用户授权
const TokenKey = 'DS-Token'
import Cookie from 'js-cookie';

export function getToken(){
    return Cookie.get(TokenKey)
}