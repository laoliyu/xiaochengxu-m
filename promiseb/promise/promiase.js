function MyPromise(callback) {
    var self = this
    // 记录状态为null 为 pending 
    // true为resolve，
    // false 为reject
    var state = null
    // 记录resolve的参数
    var param = null
    // then 方法返回的promise对象的resolve和reject
    var nextResolve = null
    var nextReject = null
    // 记录then方法，onFullfilled和onReject
    var asynsconFulfilled = null
    var asynconReject = null

    // 执行并改变promise对象的状态
    callback(resolve, reject)

    // then 方法

    this.then = function (onFullfilled, onReject) {
        // 返回一个新的promise对象
        return new self.constructor(function (resolve, reject) {
            // 判断一下 异步代码是否执行完毕， 是否resolve或者reject
            //若执行完毕，就在then方法里面立即执行，否则就将参数记录下来，等待state就绪，在执行****函数
            if (state === true) {
                doAsynconFulfilled(onFullfilled, resolve, reject)
            } else if (state === false) {
                doAsynconRejected(onReject, reject, resolve)
            } else {
                nextResolve = resolve
                nextReject = reject
                asynsconFulfilled = onFullfilled
                asynconReject = onReject
            }
        })
    }

    // resolve方法
    function resolve(data) {
        state = true
        param = data
        if (nextResolve) {
            doAsynconFulfilled(asynsconFulfilled, nextReject, nextResolve)
        }
    }
    // reject 方法
    function reject(err) {
        state = false
        param = err
        if (nextReject) {
            doAsynconRejected(asynconReject, nextReject, nextResolve)
        }
    }
    function doAsynconFulfilled(onFullfilled, resolve, reject) {
        window.setTimeout(function () {
            // 判断我们的onFullfilled是否为function，不是就忽略它
            if (typeof onFullfilled === 'function') {
                // 执行onFullfilled方法获取返回值promise
                var promise = onFullfilled(param)
                //  如果promise为undefinded 执行 if
                // 如果 promise为Mypromise对象执行else if
                // 如果promise为非Mypromise对象，执行else里面的东西
                if (promise === undefined) {
                    resolve(param)
                } else if (promise.constructor === self.constructor) {
                    // 等待传递进来promise对象执行完毕，然后根据传递进来的promise对象的指向状态执行resolve和reject
                    promise.then(function (param) {
                        resolve(param)
                    }, function (param) {
                        reject(param)
                    })
                } else {
                    // 执行then方法返回对象的resolve
                    resolve(promise)
                }

            } else {
                resolve(param)
            }
        }, 0)
    }
    function doAsynconRejected(onReject, resolve, reject) {
        window.setTimeout(function () {
            // 判断我们的onFullfilled是否为function，不是就忽略它
            if (typeof onReject === 'function') {
                // 执行onReject方法获取返回值promise
                var promise = onReject(param)
                //  如果promise为undefinded 执行 if
                // 如果 promise为Mypromise对象执行else if
                // 如果promise为非Mypromise对象，执行else里面的东西
                if (promise === undefined) {
                    reject(param)
                } else if (promise.constructor === self.constructor) {
                    // 等待传递进来promise对象执行完毕，然后根据传递进来的promise对象的指向状态执行resolve和reject
                    promise.then(function (param) {
                        resolve(param)
                    }, function (param) {
                        reject(param)
                    })
                } else {
                    // 执行then方法返回对象的resolve
                    reject(promise)
                }

            } else {
                reject(param)
            }
        }, 0)
    }
}