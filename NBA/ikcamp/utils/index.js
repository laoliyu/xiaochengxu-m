import config from './config'
// * as Mock引入所有
import * as Mock from './mock'

const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: {
        "Content-Type": "application/json"
    },
    method: "GET",
    dataType: "json"
}

let util = {
    isDev: config.isDev,
    log() {
        this.isDev && console.log(...arguments)
    },
    alert(title = "提示", content = config.defaultAlertMessage) {
        if ('object' === typeof content) {
            content = this.isDev && JSON.stringify(content) || config.defaultAlertMessage
        }
        wx.wx.showModal({
            title: title,
            content: content,
        });
    },
    getStorageData(key, cb) {
        let self = this
        wx.getStorage({
            key: key,
            success(res) {
                cb && cb(res.data)
            },
            fail(err) {
                let msg = err.errMsg || '';
                if (/getStorage:fail/.test(msg)) {
                    self.getStorageData()
                }
            }
        })
    },
    setStorageData(key, value = '', cb) {
        wx.setStorage({
            key: key,
            data: value,
            success() {
                cb && cb();
            }
        })
    },
    request(opt) {
        // 对象解构
        let { url, data, header, method, dataType, mock } = opt
        let self = this
        return new Promise((resolve, reject) => {
            if (mock) {
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                }
                if (res && res.statusCode === 200 && res.data) {
                    resolve(res.data)
                }else{
                    self.alert('提示',res)
                    reject(res)
                }
            }else{
                wx.request({
                    url:url,
                    data:data,
                })
            }
        })
    }
}
export default util